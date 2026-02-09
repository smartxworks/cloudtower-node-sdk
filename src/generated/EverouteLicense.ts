import {
  ErrorBody,
  EverouteLicense,
  EverouteLicenseConnection,
  GetEverouteLicensesConnectionRequestBody,
  GetEverouteLicensesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EverouteLicenseApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags EverouteLicense
   * @name GetEverouteLicenses
   * @request POST:/get-everoute-licenses
   * @secure
   * @response `200` `(EverouteLicense)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEverouteLicenses = (
    data: GetEverouteLicensesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<EverouteLicense[], ErrorBody>({
      path: `/get-everoute-licenses`,
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
   * @tags EverouteLicense
   * @name GetEverouteLicensesConnection
   * @request POST:/get-everoute-licenses-connection
   * @secure
   * @response `200` `EverouteLicenseConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEverouteLicensesConnection = (
    data: GetEverouteLicensesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<EverouteLicenseConnection, ErrorBody>({
      path: `/get-everoute-licenses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
