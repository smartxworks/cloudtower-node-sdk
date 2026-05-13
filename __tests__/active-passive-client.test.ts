import { beforeEach, describe, expect, it, vi } from "vitest";
import { AxiosAdapter, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ActivePassiveClient,
  ActivePassiveErrorCode,
  ActivePassiveFailoverStrategy,
} from "../src/generated/active-passive-client";
import { UserSource } from "../src/generated/data-contracts";
import { CloudTowerClient, CloudTowerUser } from "../src/generated/http-client";
import { VmApi } from "../src/generated/Vm";

type EndpointName = "first" | "second";
type EndpointSpies = Record<EndpointName, ReturnType<typeof vi.fn>>;

type MockService = {
  activeEndpoint: EndpointName;
  getVmsStatus?: Partial<Record<EndpointName, number>>;
  getVmsRedirectStatus?: Partial<Record<EndpointName, number>>;
  probes: EndpointSpies;
  logins: EndpointSpies;
  getVms: EndpointSpies;
  beforeRedirect: ReturnType<typeof vi.fn>;
};

const endpoints: Record<EndpointName, string> = {
  first: "http://first.endpoint",
  second: "http://second.endpoint",
};

describe("CloudTowerClient.probeActivePassive", () => {
  let service: MockService;

  beforeEach(() => {
    service = mockService({ activeEndpoint: "second" });
  });

  it("reports whether the single endpoint is active", async () => {
    const first = createSingleEndpointClient(endpoints.first, service);
    const second = createSingleEndpointClient(endpoints.second, service);

    await expect(first.probeActivePassive()).resolves.toBe(false);
    await expect(second.probeActivePassive()).resolves.toBe(true);

    expect(service.probes.first).toHaveBeenCalledOnce();
    expect(service.probes.second).toHaveBeenCalledOnce();
  });
});

describe("ActivePassiveClient", () => {
  let service: MockService;
  let client: ActivePassiveClient;
  let vmApi: VmApi<CloudTowerUser>;

  function useClient(
    failoverStrategy = ActivePassiveFailoverStrategy.Default,
  ): void {
    const setup = createActivePassiveClient(service, failoverStrategy);
    client = setup.client;
    vmApi = setup.vmApi;
  }

  describe("when an active endpoint is discovered", () => {
    beforeEach(() => {
      service = mockService({ activeEndpoint: "second" });
      useClient();
    });

    it("routes generated API calls to the active endpoint", async () => {
      const response = await vmApi.getVms({ first: 10 });

      expect(response.data).toEqual([{ id: "vm-second-1" }]);
      expect(client.currentActiveEndpoint()).toBe(endpoints.second);
      expect(service.getVms.first).not.toHaveBeenCalled();
      expect(service.getVms.second).toHaveBeenCalledOnce();
    });

    it("caches the discovered endpoint for later requests", async () => {
      await vmApi.getVms({ first: 10 });
      const secondResponse = await vmApi.getVms({ first: 10 });

      expect(secondResponse.data).toEqual([{ id: "vm-second-2" }]);
      expect(service.probes.first).toHaveBeenCalledOnce();
      expect(service.probes.second).toHaveBeenCalledOnce();
      expect(service.logins.second).toHaveBeenCalledOnce();
      expect(service.getVms.second).toHaveBeenCalledTimes(2);
    });
  });

  describe("when the cached active endpoint returns 307", () => {
    beforeEach(async () => {
      service = mockService({ activeEndpoint: "second" });
      useClient();
      await vmApi.getVms({ first: 10 });
      service.activeEndpoint = "first";
    });

    it("rediscovers and retries once for a 307 response", async () => {
      service.getVmsStatus = { second: 307 };

      const response = await vmApi.getVms({ first: 10 });

      expect(response.data).toEqual([{ id: "vm-first-1" }]);
      expect(client.currentActiveEndpoint()).toBe(endpoints.first);
      expect(service.probes.first).toHaveBeenCalledTimes(2);
      expect(service.probes.second).toHaveBeenCalledTimes(2);
      expect(service.getVms.first).toHaveBeenCalledOnce();
      expect(service.getVms.second).toHaveBeenCalledTimes(2);
    });

    it("rediscovers and retries once for a followed 307 redirect", async () => {
      service.getVmsRedirectStatus = { second: 307 };

      const response = await vmApi.getVms({ first: 10 });

      expect(response.data).toEqual([{ id: "vm-first-1" }]);
      expect(client.currentActiveEndpoint()).toBe(endpoints.first);
      expect(service.beforeRedirect).toHaveBeenCalledOnce();
      expect(service.beforeRedirect).toHaveBeenCalledWith(307);
    });
  });

  describe("when a non-307 redirect is returned", () => {
    beforeEach(() => {
      service = mockService({ activeEndpoint: "second" });
      service.getVmsRedirectStatus = { second: 302 };
      useClient();
    });

    it("uses the normal redirect path", async () => {
      const response = await vmApi.getVms({ first: 10 });

      expect(response.data).toEqual([{ id: "vm-second-redirected" }]);
      expect(client.currentActiveEndpoint()).toBe(endpoints.second);
      expect(service.beforeRedirect).toHaveBeenCalledOnce();
      expect(service.beforeRedirect).toHaveBeenCalledWith(302);
      expect(service.getVms.first).not.toHaveBeenCalled();
      expect(service.getVms.second).toHaveBeenCalledOnce();
    });
  });

  describe("when manual failover strategy is used", () => {
    beforeEach(async () => {
      service = mockService({ activeEndpoint: "second" });
      useClient(ActivePassiveFailoverStrategy.ManualFailover);
      await vmApi.getVms({ first: 10 });
      service.activeEndpoint = "first";
      service.getVmsStatus = { second: 307 };
    });

    it("returns failover required instead of rediscovering automatically", async () => {
      await expect(vmApi.getVms({ first: 10 })).rejects.toMatchObject({
        code: ActivePassiveErrorCode.FailoverRequired,
      });

      expect(client.currentActiveEndpoint()).toBe("");
      expect(service.getVms.first).not.toHaveBeenCalled();
      expect(service.getVms.second).toHaveBeenCalledTimes(2);
    });
  });

  describe("when always-probe strategy is used", () => {
    beforeEach(() => {
      service = mockService({ activeEndpoint: "second" });
      useClient(ActivePassiveFailoverStrategy.AlwaysProbe);
    });

    it("probes before every routed request", async () => {
      await vmApi.getVms({ first: 10 });
      await vmApi.getVms({ first: 10 });

      expect(service.probes.first).toHaveBeenCalledTimes(3);
      expect(service.probes.second).toHaveBeenCalledTimes(3);
      expect(service.getVms.first).not.toHaveBeenCalled();
      expect(service.getVms.second).toHaveBeenCalledTimes(2);
    });
  });

  describe("when requests discover the active endpoint concurrently", () => {
    beforeEach(() => {
      service = mockService({ activeEndpoint: "second" });
      useClient();
    });

    it("coalesces discovery", async () => {
      await Promise.all([
        vmApi.getVms({ first: 10 }),
        vmApi.getVms({ first: 10 }),
        vmApi.getVms({ first: 10 }),
      ]);

      expect(service.probes.first).toHaveBeenCalledOnce();
      expect(service.probes.second).toHaveBeenCalledOnce();
      expect(service.logins.first).not.toHaveBeenCalled();
      expect(service.logins.second).toHaveBeenCalledTimes(3);
      expect(service.getVms.first).not.toHaveBeenCalled();
      expect(service.getVms.second).toHaveBeenCalledTimes(3);
    });
  });
});

function mockService({
  activeEndpoint,
}: {
  activeEndpoint: EndpointName;
}): MockService {
  return {
    activeEndpoint,
    probes: { first: vi.fn(), second: vi.fn() },
    logins: { first: vi.fn(), second: vi.fn() },
    getVms: { first: vi.fn(), second: vi.fn() },
    beforeRedirect: vi.fn(),
  };
}

function createSingleEndpointClient(
  endpoint: string,
  service: MockService,
): CloudTowerClient {
  return new CloudTowerClient(
    {
      username: "root",
      password: "password",
      source: UserSource.LOCAL,
    },
    {
      baseURL: endpoint,
      adapter: createAdapter(service),
    },
  );
}

function createActivePassiveClient(
  service: MockService,
  failoverStrategy = ActivePassiveFailoverStrategy.Default,
): { client: ActivePassiveClient; vmApi: VmApi<CloudTowerUser> } {
  const client = new ActivePassiveClient(
    {
      username: "root",
      password: "password",
      source: UserSource.LOCAL,
    },
    {
      endpoints: [endpoints.first, endpoints.second],
      adapter: createAdapter(service),
      failoverStrategy,
    },
  );

  return {
    client,
    vmApi: new VmApi(client),
  };
}

function createAdapter(service: MockService): AxiosAdapter {
  return async (config) => {
    const request = parseRequest(config);
    const endpoint = endpointFromOrigin(request.origin);

    if (request.path === "/api/healthz") {
      service.probes[endpoint]();
      return settle(config, {
        status: endpoint === service.activeEndpoint ? 200 : 307,
        data: "",
      });
    }

    if (request.path === "/v2/api/login") {
      service.logins[endpoint]();
      return settle(config, {
        status: 200,
        data: {
          data: {
            token: `token-${endpoint}`,
          },
        },
      });
    }

    if (request.path === "/v2/api/get-vms") {
      service.getVms[endpoint]();
      expect(config.headers?.Authorization).toBe("token-second");

      const redirectStatus = service.getVmsRedirectStatus?.[endpoint];
      if (redirectStatus) {
        return followRedirect(config, service, redirectStatus, endpoint);
      }

      return settle(config, {
        status: service.getVmsStatus?.[endpoint] || 200,
        data: [
          {
            id: `vm-${endpoint}-${service.getVms[endpoint].mock.calls.length}`,
          },
        ],
      });
    }

    throw new Error(`unexpected request: ${request.origin}${request.path}`);
  };
}

function followRedirect(
  config: AxiosRequestConfig,
  service: MockService,
  status: number,
  endpoint: EndpointName,
): Promise<AxiosResponse> | AxiosResponse {
  service.beforeRedirect(status);
  try {
    config.beforeRedirect?.({}, {
      headers: {},
      statusCode: status,
    } as { headers: Record<string, string>; statusCode: number });
  } catch (cause) {
    return Promise.reject({
      message: `Redirected request failed: ${String(
        (cause as Error).message || cause,
      )}`,
      cause: {
        message: `Redirected request failed: ${String(
          (cause as Error).message || cause,
        )}`,
        cause,
      },
    });
  }

  return settle(config, {
    status: 200,
    data: [{ id: `vm-${endpoint}-redirected` }],
  });
}

function parseRequest(config: AxiosRequestConfig): {
  origin: string;
  path: string;
} {
  const baseURL = config.baseURL || "";
  const url = config.url || "";
  const fullURL = /^https?:\/\//.test(url) ? url : combineURL(baseURL, url);
  const parsed = new URL(fullURL);

  return {
    origin: parsed.origin,
    path: parsed.pathname,
  };
}

function combineURL(baseURL: string, url: string): string {
  if (!baseURL) {
    return url;
  }

  return `${baseURL.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;
}

function endpointFromOrigin(origin: string): EndpointName {
  if (origin === endpoints.first) {
    return "first";
  }
  if (origin === endpoints.second) {
    return "second";
  }

  throw new Error(`unexpected endpoint: ${origin}`);
}

function settle(
  config: AxiosRequestConfig,
  response: Pick<AxiosResponse, "status" | "data">,
): Promise<AxiosResponse> | AxiosResponse {
  const axiosResponse: AxiosResponse = {
    data: response.data,
    status: response.status,
    statusText: String(response.status),
    headers: {},
    config,
  };

  if (!config.validateStatus || config.validateStatus(axiosResponse.status)) {
    return axiosResponse;
  }

  return Promise.reject({
    message: `Request failed with status code ${axiosResponse.status}`,
    config,
    response: axiosResponse,
  });
}
