import { AxiosResponse } from "axios";
import {
  ApiConfig,
  CloudTowerClient,
  CloudTowerUser,
  FullRequestParams,
} from "./generated/http-client";

const DEFAULT_API_BASE_PATH = "/v2/api";
const DEFAULT_PROBE_PATH = "/api/healthz";
const DEFAULT_PROBE_TIMEOUT = 30_000;

export enum ActivePassiveFailoverStrategy {
  Default = "default",
  ManualFailover = "manual_failover",
  AlwaysProbe = "always_probe",
}

export enum ActivePassiveErrorCode {
  NoEndpoints = "ACTIVE_PASSIVE_NO_ENDPOINTS",
  DuplicateEndpoint = "ACTIVE_PASSIVE_DUPLICATE_ENDPOINT",
  NoActiveEndpoint = "ACTIVE_PASSIVE_NO_ACTIVE_ENDPOINT",
  MultipleActiveEndpoints = "ACTIVE_PASSIVE_MULTIPLE_ACTIVE_ENDPOINTS",
  RetryExhausted = "ACTIVE_PASSIVE_RETRY_EXHAUSTED",
  FailoverRequired = "ACTIVE_PASSIVE_FAILOVER_REQUIRED",
  UnknownEndpoint = "ACTIVE_PASSIVE_UNKNOWN_ENDPOINT",
}

export class ActivePassiveError extends Error {
  public readonly code: ActivePassiveErrorCode;
  public readonly cause?: unknown;

  constructor(code: ActivePassiveErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = "ActivePassiveError";
    this.code = code;
    this.cause = cause;
  }
}

export interface ActivePassiveClientConfig
  extends Omit<
    ApiConfig<{ username: string; password: string }>,
    "baseURL" | "secure" | "securityWorker"
  > {
  endpoints: string[];
  basePath?: string;
  probePath?: string;
  probeTimeout?: number;
  failoverStrategy?: ActivePassiveFailoverStrategy;
}

type ActivePassiveEndpoint = {
  key: string;
  raw: string;
  origin: string;
  apiBaseURL: string;
  probeURL: string;
};

type SubmitResult<T> =
  | { state: "success"; response: AxiosResponse<T> }
  | { state: "switch_signal"; error: unknown }
  | { state: "response_error"; error: unknown }
  | { state: "local_error"; error: unknown };

class ActivePassiveRedirectSignal extends Error {
  public readonly activePassiveRedirectSignal = true;

  constructor() {
    super("active-passive redirect signal");
    this.name = "ActivePassiveRedirectSignal";
  }
}

export class ActivePassiveCloudTowerClient extends CloudTowerClient {
  private readonly endpoints: ActivePassiveEndpoint[];
  private readonly endpointByKey = new Map<string, ActivePassiveEndpoint>();
  private readonly baseRequest: CloudTowerClient["request"];
  private readonly failoverStrategy: ActivePassiveFailoverStrategy;
  private readonly basePath: string;
  private readonly probePath: string;
  private currentActiveEndpointKey = "";
  private discoverPromise?: Promise<ActivePassiveEndpoint>;

  constructor(user: CloudTowerUser, config: ActivePassiveClientConfig) {
    const {
      endpoints,
      basePath,
      probePath,
      probeTimeout,
      failoverStrategy,
      ...axiosConfig
    } = config;

    super(user, axiosConfig);

    this.basePath = basePath ?? DEFAULT_API_BASE_PATH;
    this.probePath = probePath ?? DEFAULT_PROBE_PATH;
    this.endpoints = createEndpoints(endpoints, this.basePath, this.probePath);
    for (const endpoint of this.endpoints) {
      this.endpointByKey.set(endpoint.key, endpoint);
    }
    this.failoverStrategy =
      failoverStrategy || ActivePassiveFailoverStrategy.Default;
    this.baseRequest = this.request.bind(this);
    this.request = this.activePassiveRequest;

    if (probeTimeout !== undefined) {
      this.probeTimeout = probeTimeout;
    }
  }

  private probeTimeout = DEFAULT_PROBE_TIMEOUT;

  public currentActiveEndpoint(): string {
    return this.currentActiveEndpointKey;
  }

  public clearCurrentActiveEndpoint(): void {
    this.currentActiveEndpointKey = "";
  }

  public async probeActivePassive(endpoint: string): Promise<boolean> {
    return this.probeEndpoint(createEndpoint(endpoint, this.basePath, this.probePath));
  }

  private activePassiveRequest = async <T = any, E = any>(
    params: FullRequestParams,
  ): Promise<AxiosResponse<T>> => {
    const endpoint = await this.endpointForRequest();
    const result = await this.submitToEndpoint<T, E>(endpoint, params);

    switch (result.state) {
      case "success":
        return result.response;
      case "response_error":
      case "local_error":
        throw result.error;
      case "switch_signal":
        this.clearCurrentActiveEndpointIf(endpoint.key);
        if (
          this.failoverStrategy ===
            ActivePassiveFailoverStrategy.ManualFailover ||
          this.failoverStrategy === ActivePassiveFailoverStrategy.AlwaysProbe
        ) {
          throw new ActivePassiveError(
            ActivePassiveErrorCode.FailoverRequired,
            "active-passive failover required",
            result.error,
          );
        }

        const nextEndpoint = await this.ensureActiveEndpoint();
        const retry = await this.submitToEndpoint<T, E>(nextEndpoint, params);
        switch (retry.state) {
          case "success":
            return retry.response;
          case "response_error":
          case "local_error":
            throw retry.error;
          case "switch_signal":
            this.clearCurrentActiveEndpointIf(nextEndpoint.key);
            throw new ActivePassiveError(
              ActivePassiveErrorCode.RetryExhausted,
              "active-passive request retry exhausted after discover",
              retry.error,
            );
        }
    }
  };

  private async endpointForRequest(): Promise<ActivePassiveEndpoint> {
    if (this.failoverStrategy === ActivePassiveFailoverStrategy.AlwaysProbe) {
      this.clearCurrentActiveEndpoint();
    }

    return this.ensureActiveEndpoint();
  }

  private async ensureActiveEndpoint(): Promise<ActivePassiveEndpoint> {
    const current = this.activeEndpoint();
    if (current) {
      return current;
    }

    if (!this.discoverPromise) {
      this.discoverPromise = this.discoverActiveEndpoint();
    }

    try {
      const endpoint = await this.discoverPromise;
      this.currentActiveEndpointKey = endpoint.key;
      return endpoint;
    } finally {
      this.discoverPromise = undefined;
    }
  }

  private activeEndpoint(): ActivePassiveEndpoint | undefined {
    if (!this.currentActiveEndpointKey) {
      return undefined;
    }
    return this.endpointByKey.get(this.currentActiveEndpointKey);
  }

  private async discoverActiveEndpoint(): Promise<ActivePassiveEndpoint> {
    const activeEndpoints: ActivePassiveEndpoint[] = [];
    const failures: string[] = [];

    for (const endpoint of this.endpoints) {
      try {
        if (await this.probeEndpoint(endpoint)) {
          activeEndpoints.push(endpoint);
        }
      } catch (error) {
        failures.push(`${endpoint.raw}: ${errorMessage(error)}`);
      }
    }

    if (activeEndpoints.length === 1) {
      return activeEndpoints[0];
    }

    if (activeEndpoints.length === 0) {
      const suffix = failures.length > 0 ? `: ${failures.join("; ")}` : "";
      throw new ActivePassiveError(
        ActivePassiveErrorCode.NoActiveEndpoint,
        `active-passive discover found no active endpoint${suffix}`,
      );
    }

    throw new ActivePassiveError(
      ActivePassiveErrorCode.MultipleActiveEndpoints,
      `active-passive discover found multiple active endpoints: ${activeEndpoints
        .map((endpoint) => endpoint.raw)
        .join(", ")}`,
    );
  }

  private async probeEndpoint(endpoint: ActivePassiveEndpoint): Promise<boolean> {
    const response = await this.instance.request({
      method: "GET",
      url: endpoint.probeURL,
      baseURL: endpoint.origin,
      timeout: this.probeTimeout,
      maxRedirects: 0,
      validateStatus: (status) => status === 200 || status === 307,
    });

    return response.status === 200;
  }

  private async submitToEndpoint<T = any, E = any>(
    endpoint: ActivePassiveEndpoint,
    params: FullRequestParams,
  ): Promise<SubmitResult<T>> {
    try {
      const response = await this.baseRequest<T, E>({
        ...params,
        baseURL: endpoint.apiBaseURL,
        beforeRedirect: activePassiveBeforeRedirect(params.beforeRedirect),
        validateStatus: isActivePassiveResponseStatus,
      });

      return { state: "success", response };
    } catch (error) {
      if (isTemporaryRedirect(error)) {
        return { state: "switch_signal", error };
      }
      if (hasResponse(error)) {
        return { state: "response_error", error };
      }

      this.clearCurrentActiveEndpointIf(endpoint.key);
      return { state: "local_error", error };
    }
  }

  private clearCurrentActiveEndpointIf(endpointKey: string): void {
    if (this.currentActiveEndpointKey === endpointKey) {
      this.currentActiveEndpointKey = "";
    }
  }
}

export class ActivePassiveClient extends ActivePassiveCloudTowerClient {}

function createEndpoints(
  endpoints: string[],
  basePath: string,
  probePath: string,
): ActivePassiveEndpoint[] {
  if (!endpoints || endpoints.length === 0) {
    throw new ActivePassiveError(
      ActivePassiveErrorCode.NoEndpoints,
      "active-passive client requires at least one endpoint",
    );
  }

  const normalized: ActivePassiveEndpoint[] = [];
  const seen = new Set<string>();
  for (const rawEndpoint of endpoints) {
    const endpoint = createEndpoint(rawEndpoint, basePath, probePath);
    if (seen.has(endpoint.key)) {
      throw new ActivePassiveError(
        ActivePassiveErrorCode.DuplicateEndpoint,
        `active-passive client endpoints must be unique: ${rawEndpoint}`,
      );
    }
    seen.add(endpoint.key);
    normalized.push(endpoint);
  }

  return normalized;
}

function createEndpoint(
  endpoint: string,
  basePath: string,
  probePath: string,
): ActivePassiveEndpoint {
  const raw = endpoint.trim();
  if (!raw) {
    throw new ActivePassiveError(
      ActivePassiveErrorCode.NoEndpoints,
      "active-passive client requires at least one endpoint",
    );
  }

  const url = new URL(raw);
  const origin = url.origin;

  return {
    key: origin,
    raw,
    origin,
    apiBaseURL: `${origin}${basePath}`,
    probeURL: probePath,
  };
}

function isActivePassiveResponseStatus(status: number): boolean {
  if (status === 307) {
    return false;
  }

  return status >= 200 && status < 400;
}

function activePassiveBeforeRedirect(
  beforeRedirect?: FullRequestParams["beforeRedirect"],
): FullRequestParams["beforeRedirect"] {
  return (options, responseDetails) => {
    if ((responseDetails as { statusCode?: number }).statusCode === 307) {
      throw new ActivePassiveRedirectSignal();
    }

    if (beforeRedirect) {
      beforeRedirect(options, responseDetails);
    }
  };
}

function isTemporaryRedirect(error: unknown): boolean {
  if (isActivePassiveRedirectSignal(error)) {
    return true;
  }

  return responseStatus(error) === 307;
}

function isActivePassiveRedirectSignal(error: unknown): boolean {
  let current: unknown = error;
  while (current && typeof current === "object") {
    if (
      (current as { activePassiveRedirectSignal?: boolean })
        .activePassiveRedirectSignal
    ) {
      return true;
    }
    current = (current as { cause?: unknown }).cause;
  }

  return false;
}

function hasResponse(error: unknown): boolean {
  return responseStatus(error) !== undefined;
}

function responseStatus(error: unknown): number | undefined {
  return (error as { response?: AxiosResponse }).response?.status;
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
