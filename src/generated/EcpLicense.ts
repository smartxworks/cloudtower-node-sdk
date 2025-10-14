import {
  EcpLicense,
  EcpLicenseConnection,
  ErrorBody,
  GetEcpLicensesConnectionRequestBody,
  GetEcpLicensesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EcpLicenseApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags EcpLicense
   * @name GetEcpLicenses
   * @request POST:/get-ecp-licenses
   * @secure
   * @response `200` `(EcpLicense)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEcpLicenses = (
    data: GetEcpLicensesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EcpLicense[], ErrorBody>({
      path: `/get-ecp-licenses`,
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
   * @tags EcpLicense
   * @name GetEcpLicensesConnection
   * @request POST:/get-ecp-licenses-connection
   * @secure
   * @response `200` `EcpLicenseConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEcpLicensesConnection = (
    data: GetEcpLicensesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EcpLicenseConnection, ErrorBody>({
      path: `/get-ecp-licenses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
