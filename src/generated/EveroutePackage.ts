import {
  ErrorBody,
  EveroutePackage,
  EveroutePackageConnection,
  GetEveroutePackagesConnectionRequestBody,
  GetEveroutePackagesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EveroutePackageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags EveroutePackage
   * @name GetEveroutePackages
   * @request POST:/get-everoute-packages
   * @secure
   * @response `200` `(EveroutePackage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEveroutePackages = (data: GetEveroutePackagesRequestBody, params: RequestParams = {}) =>
    this.http.request<EveroutePackage[], ErrorBody>({
      path: `/get-everoute-packages`,
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
   * @tags EveroutePackage
   * @name GetEveroutePackagesConnection
   * @request POST:/get-everoute-packages-connection
   * @secure
   * @response `200` `EveroutePackageConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEveroutePackagesConnection = (data: GetEveroutePackagesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<EveroutePackageConnection, ErrorBody>({
      path: `/get-everoute-packages-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
