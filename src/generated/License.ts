import {
  ErrorBody,
  GetLicensesConnectionRequestBody,
  GetLicensesRequestBody,
  License,
  LicenseConnection,
  LicenseUpdationParams,
  WithTaskLicense,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LicenseApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags License
   * @name UpdateDeploy
   * @request POST:/update-license
   * @secure
   * @response `200` `WithTaskLicense`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateDeploy = (data: LicenseUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskLicense, ErrorBody>({
      path: `/update-license`,
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
   * @tags License
   * @name GetLicenses
   * @request POST:/get-licenses
   * @secure
   * @response `200` `(License)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLicenses = (data: GetLicensesRequestBody, params: RequestParams = {}) =>
    this.http.request<License[], ErrorBody>({
      path: `/get-licenses`,
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
   * @tags License
   * @name GetLicensesConnection
   * @request POST:/get-licenses-connection
   * @secure
   * @response `200` `LicenseConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLicensesConnection = (
    data: GetLicensesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LicenseConnection, ErrorBody>({
      path: `/get-licenses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
