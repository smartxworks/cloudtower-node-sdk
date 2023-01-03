import {
  CloudTowerApplicationPackage,
  CloudTowerApplicationPackageConnection,
  ErrorBody,
  GetCloudTowerApplicationPackagesConnectionRequestBody,
  GetCloudTowerApplicationPackagesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CloudTowerApplicationPackageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CloudTowerApplicationPackage
   * @name GetCloudTowerApplicationPackages
   * @request POST:/get-cloudtower-application-packages
   * @secure
   * @response `200` `(CloudTowerApplicationPackage)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getCloudTowerApplicationPackages = (
    data: GetCloudTowerApplicationPackagesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplicationPackage[], ErrorBody>({
      path: `/get-cloudtower-application-packages`,
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
   * @tags CloudTowerApplicationPackage
   * @name GetCloudTowerApplicationPackagesConnection
   * @request POST:/get-cloud-tower-application-packages-connection
   * @secure
   * @response `200` `CloudTowerApplicationPackageConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getCloudTowerApplicationPackagesConnection = (
    data: GetCloudTowerApplicationPackagesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplicationPackageConnection, ErrorBody>({
      path: `/get-cloud-tower-application-packages-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
