import {
  BusinessHost,
  BusinessHostConnection,
  ErrorBody,
  GetBusinessHostsConnectionRequestBody,
  GetBusinessHostsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BusinessHostApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BusinessHost
   * @name GetBusinessHosts
   * @request POST:/get-business-hosts
   * @secure
   * @response `200` `(BusinessHost)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBusinessHosts = (
    data: GetBusinessHostsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BusinessHost[], ErrorBody>({
      path: `/get-business-hosts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BusinessHost
   * @name GetBusinessHostsConnection
   * @request POST:/get-business-hosts-connection
   * @secure
   * @response `200` `BusinessHostConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBusinessHostsConnection = (
    data: GetBusinessHostsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BusinessHostConnection, ErrorBody>({
      path: `/get-business-hosts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
