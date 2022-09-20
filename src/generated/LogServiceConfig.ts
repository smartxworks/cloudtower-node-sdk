import {
  ErrorBody,
  GetLogServiceConfigsRequestBody,
  LogServiceConfig,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LogServiceConfigApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags LogServiceConfig
   * @name GetLogServiceConfigs
   * @request POST:/get-log-service-configs
   * @secure
   * @response `200` `(LogServiceConfig)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLogServiceConfigs = (
    data: GetLogServiceConfigsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LogServiceConfig[], ErrorBody>({
      path: `/get-log-service-configs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
