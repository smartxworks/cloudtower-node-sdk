import { ErrorBody, GetIpmisRequestBody, Ipmi } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IpmiApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Ipmi
   * @name GetIpmis
   * @request POST:/get-ipmis
   * @secure
   * @response `200` `(Ipmi)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIpmis = (data: GetIpmisRequestBody, params: RequestParams = {}) =>
    this.http.request<Ipmi[], ErrorBody>({
      path: `/get-ipmis`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
