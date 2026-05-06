import { describe, expect, it } from "vitest";
import { AxiosAdapter, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ActivePassiveClient,
  ActivePassiveErrorCode,
  ActivePassiveFailoverStrategy,
} from "../src/active-passive-client";
import { UserSource } from "../src/generated/data-contracts";
import { CloudTowerUser } from "../src/generated/http-client";
import { VmApi } from "../src/generated/Vm";

type EndpointName = "first" | "second";

type TestState = {
  activeEndpoint: EndpointName;
  getVmsStatus?: Partial<Record<EndpointName, number>>;
  getVmsRedirectStatus?: Partial<Record<EndpointName, number>>;
  probes: Record<EndpointName, number>;
  logins: Record<EndpointName, number>;
  getVms: Record<EndpointName, number>;
  beforeRedirects: number[];
};

const endpoints: Record<EndpointName, string> = {
  first: "http://first.tower",
  second: "http://second.tower",
};

describe("ActivePassiveClient", () => {
  it("discovers active endpoint, logs in, and reuses cached active endpoint", async () => {
    const state = createState("second");
    const { client, vmApi } = createClient(state);

    const first = await vmApi.getVms({ first: 10 });
    const second = await vmApi.getVms({ first: 10 });

    expect(first.data).toEqual([{ id: "vm-second-1" }]);
    expect(second.data).toEqual([{ id: "vm-second-2" }]);
    expect(client.currentActiveEndpoint()).toBe(endpoints.second);
    expect(state.probes).toEqual({ first: 1, second: 1 });
    expect(state.logins).toEqual({ first: 0, second: 1 });
    expect(state.getVms).toEqual({ first: 0, second: 2 });
  });

  it("handles a business 307 response as a switch signal and retries once", async () => {
    const state = createState("second");
    const { client, vmApi } = createClient(state);

    await vmApi.getVms({ first: 10 });

    state.activeEndpoint = "first";
    state.getVmsStatus = { second: 307 };
    const response = await vmApi.getVms({ first: 10 });

    expect(response.data).toEqual([{ id: "vm-first-1" }]);
    expect(client.currentActiveEndpoint()).toBe(endpoints.first);
    expect(state.probes).toEqual({ first: 2, second: 2 });
    expect(state.getVms).toEqual({ first: 1, second: 2 });
  });

  it("handles a followed 307 redirect as a switch signal", async () => {
    const state = createState("second");
    const { client, vmApi } = createClient(state);

    await vmApi.getVms({ first: 10 });

    state.activeEndpoint = "first";
    state.getVmsRedirectStatus = { second: 307 };
    const response = await vmApi.getVms({ first: 10 });

    expect(response.data).toEqual([{ id: "vm-first-1" }]);
    expect(client.currentActiveEndpoint()).toBe(endpoints.first);
    expect(state.beforeRedirects).toEqual([307]);
  });

  it("lets non-307 redirects use the normal redirect path", async () => {
    const state = createState("second");
    state.getVmsRedirectStatus = { second: 302 };
    const { client, vmApi } = createClient(state);

    const response = await vmApi.getVms({ first: 10 });

    expect(response.data).toEqual([{ id: "vm-second-redirected" }]);
    expect(client.currentActiveEndpoint()).toBe(endpoints.second);
    expect(state.beforeRedirects).toEqual([302]);
    expect(state.getVms).toEqual({ first: 0, second: 1 });
  });

  it("returns failover required for manual failover strategy", async () => {
    const state = createState("second");
    const { client, vmApi } = createClient(
      state,
      ActivePassiveFailoverStrategy.ManualFailover,
    );

    await vmApi.getVms({ first: 10 });

    state.activeEndpoint = "first";
    state.getVmsStatus = { second: 307 };

    await expect(vmApi.getVms({ first: 10 })).rejects.toMatchObject({
      code: ActivePassiveErrorCode.FailoverRequired,
    });
    expect(client.currentActiveEndpoint()).toBe("");
    expect(state.getVms).toEqual({ first: 0, second: 2 });
  });

  it("probes before every request for always-probe strategy", async () => {
    const state = createState("second");
    const { vmApi } = createClient(
      state,
      ActivePassiveFailoverStrategy.AlwaysProbe,
    );

    await vmApi.getVms({ first: 10 });
    await vmApi.getVms({ first: 10 });

    expect(state.probes).toEqual({ first: 3, second: 3 });
    expect(state.getVms).toEqual({ first: 0, second: 2 });
  });

  it("coalesces concurrent discovery", async () => {
    const state = createState("second");
    const { vmApi } = createClient(state);

    await Promise.all([
      vmApi.getVms({ first: 10 }),
      vmApi.getVms({ first: 10 }),
      vmApi.getVms({ first: 10 }),
    ]);

    expect(state.probes).toEqual({ first: 1, second: 1 });
    expect(state.logins).toEqual({ first: 0, second: 3 });
    expect(state.getVms).toEqual({ first: 0, second: 3 });
  });
});

function createState(activeEndpoint: EndpointName): TestState {
  return {
    activeEndpoint,
    probes: { first: 0, second: 0 },
    logins: { first: 0, second: 0 },
    getVms: { first: 0, second: 0 },
    beforeRedirects: [],
  };
}

function createClient(
  state: TestState,
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
      adapter: createAdapter(state),
      failoverStrategy,
    },
  );

  return {
    client,
    vmApi: new VmApi(client),
  };
}

function createAdapter(state: TestState): AxiosAdapter {
  return async (config) => {
    const request = parseRequest(config);
    const endpoint = endpointFromOrigin(request.origin);

    if (request.path === "/api/healthz") {
      state.probes[endpoint] += 1;
      return settle(config, {
        status: endpoint === state.activeEndpoint ? 200 : 307,
        data: "",
      });
    }

    if (request.path === "/v2/api/login") {
      state.logins[endpoint] += 1;
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
      state.getVms[endpoint] += 1;
      expect(config.headers?.Authorization).toBe("token-second");

      const redirectStatus = state.getVmsRedirectStatus?.[endpoint];
      if (redirectStatus) {
        return followRedirect(config, state, redirectStatus, endpoint);
      }

      return settle(config, {
        status: state.getVmsStatus?.[endpoint] || 200,
        data: [{ id: `vm-${endpoint}-${state.getVms[endpoint]}` }],
      });
    }

    throw new Error(`unexpected request: ${request.origin}${request.path}`);
  };
}

function followRedirect(
  config: AxiosRequestConfig,
  state: TestState,
  status: number,
  endpoint: EndpointName,
): Promise<AxiosResponse> | AxiosResponse {
  state.beforeRedirects.push(status);
  try {
    config.beforeRedirect?.(
      {},
      {
        headers: {},
        statusCode: status,
      } as { headers: Record<string, string>; statusCode: number },
    );
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
