import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import { UserSource } from "./data-contracts";
import { UserApi } from "./User";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  "data" | "params" | "url" | "responseType"
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiBaseURLConfig {
  rootURL: string;
  apiBasePath: string;
}

export type ApiBaseURL = string | ApiBaseURLConfig;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  "data" | "cancelToken"
> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
  probePath?: string;
}

export interface ApiConfigWithBaseURLConfig<
  SecurityDataType = unknown,
> extends Omit<ApiConfig<SecurityDataType>, "baseURL"> {
  baseURL: ApiBaseURLConfig;
}

export type HttpClientConfig<SecurityDataType = unknown> =
  | ApiConfig<SecurityDataType>
  | ApiConfigWithBaseURLConfig<SecurityDataType>;

type OmitSecurityConfig<T> = T extends unknown
  ? Omit<T, "secure" | "securityWorker">
  : never;

export type CloudTowerClientConfig = OmitSecurityConfig<
  HttpClientConfig<{ username: string; password: string }>
>;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

const DEFAULT_PROBE_PATH = "/api/healthz";

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;
  protected baseURLConfig: ApiBaseURLConfig;
  protected probePath: string;

  constructor({
    securityWorker,
    secure,
    format,
    probePath,
    baseURL,
    ...axiosConfig
  }: HttpClientConfig<SecurityDataType> = {}) {
    const baseURLConfig = resolveBaseURLConfig(baseURL);
    const axiosBaseURL = joinURL(
      baseURLConfig.rootURL,
      baseURLConfig.apiBasePath,
    );

    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosBaseURL,
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
    this.baseURLConfig = baseURLConfig;
    this.probePath = probePath
      ? withLeadingSlash(probePath)
      : DEFAULT_PROBE_PATH;
  }

  public setSecurityData(data: SecurityDataType | null): void {
    this.securityData = data;
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: Iterable<any> =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

export type CloudTowerUser = {
  username: string;
  password: string;
  source: UserSource;
};
export class CloudTowerClient extends HttpClient<CloudTowerUser> {
  private token?: string;
  constructor(user: CloudTowerUser, config: CloudTowerClientConfig = {}) {
    super({
      ...config,
      secure: true,
      securityWorker: async (user) => {
        if (!user) {
          return;
        }
        if (!this.token) {
          try {
            this["secure"] = false;
            const userApi = new UserApi(this);
            const loginResponse = await userApi.login({
              username: user.username,
              password: user.password,
              source: user.source,
            });
            this.token = loginResponse.data.data.token;
            this["secure"] = true;
          } catch (e) {
            this["secure"] = true;
            throw e;
          }
        }
        return {
          headers: {
            Authorization: this.token || "",
          },
        };
      },
    });
    this.setSecurityData(user);
  }

  public setSecurityData(data: CloudTowerUser | null): void {
    this["securityData"] = data;
    this.token = undefined;
  }

  public async probeActivePassive(): Promise<boolean> {
    const response = await this.instance.request({
      method: "GET",
      url: this.probePath,
      baseURL: this.baseURLConfig.rootURL,
      maxRedirects: 0,
      validateStatus: (status) => status === 200 || status === 307,
    });

    return response.status === 200;
  }
}

function resolveBaseURLConfig(
  baseURL: ApiBaseURL | undefined,
): ApiBaseURLConfig {
  if (baseURL && typeof baseURL === "object") {
    return {
      rootURL: baseURL.rootURL,
      apiBasePath: withLeadingSlash(baseURL.apiBasePath),
    };
  }

  if (baseURL) {
    try {
      const url = new URL(baseURL);
      return {
        rootURL: url.origin,
        apiBasePath: withLeadingSlash(url.pathname),
      };
    } catch {
      return {
        rootURL: "",
        apiBasePath: withLeadingSlash(baseURL),
      };
    }
  }

  return {
    rootURL: "",
    apiBasePath: "/v2/api",
  };
}

function withLeadingSlash(path: string): string {
  return `/${path.replace(/^\/+/, "")}`;
}

function joinURL(rootURL: string, path: string): string {
  if (!rootURL) {
    return path;
  }
  if (path === "/") {
    return rootURL;
  }

  return `${rootURL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
