import { HttpClient, RequestParams } from "./http-client";

export class ApiInfoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ApiInfo
   * @name GetApiVersion
   * @request GET:/get-version
   * @response `200` `string`
   */
  getApiVersion = (params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/get-version`,
      method: "GET",
      format: "json",
      ...params,
    });
}
