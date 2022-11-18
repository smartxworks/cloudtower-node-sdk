import {
  CloudTowerApplication,
  CloudTowerApplicationConnection,
  DeleteCloudTowerApplicationPackage,
  DeleteCloudTowerApplicationPackageParams,
  DeployCloudTowerApplicationParams,
  ErrorBody,
  GetCloudTowerApplicationsConnectionRequestBody,
  GetCloudTowerApplicationsRequestBody,
  UninstallCloudTowerApplicationParams,
  UpgradeCloudTowerApplicationParams,
  UploadTask,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CloudTowerApplicationApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CloudTowerApplication
   * @name UploadCloudTowerApplicationPackage
   * @request POST:/upload-cloudtower-application-package
   * @secure
   * @response `200` `(UploadTask)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  uploadCloudTowerApplicationPackage = (
    data: {
      file: File;
      name?: string;
      size?: string;
      size_unit?: string;
      upload_task_id?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<UploadTask[], ErrorBody>({
      path: `/upload-cloudtower-application-package`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CloudTowerApplication
   * @name DeleteCloudTowerApplicationPackage
   * @request POST:/delete-cloudtower-application-package
   * @secure
   * @response `200` `(DeleteCloudTowerApplicationPackage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteCloudTowerApplicationPackage = (
    data: DeleteCloudTowerApplicationPackageParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleteCloudTowerApplicationPackage[], ErrorBody>({
      path: `/delete-cloudtower-application-package`,
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
   * @tags CloudTowerApplication
   * @name DeployCloudTowerApplication
   * @request POST:/deploy-cloudtower-application
   * @secure
   * @response `200` `CloudTowerApplication` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deployCloudTowerApplication = (
    data: DeployCloudTowerApplicationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplication, ErrorBody>({
      path: `/deploy-cloudtower-application`,
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
   * @tags CloudTowerApplication
   * @name UpgradeCloudTowerApplication
   * @request POST:/upgrade-cloudtower-application
   * @secure
   * @response `200` `CloudTowerApplication` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  upgradeCloudTowerApplication = (
    data: UpgradeCloudTowerApplicationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplication, ErrorBody>({
      path: `/upgrade-cloudtower-application`,
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
   * @tags CloudTowerApplication
   * @name UninstallCloudTowerApplication
   * @request POST:/uninstall-cloudtower-application
   * @secure
   * @response `200` `(CloudTowerApplication)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  uninstallCloudTowerApplication = (
    data: UninstallCloudTowerApplicationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplication[], ErrorBody>({
      path: `/uninstall-cloudtower-application`,
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
   * @tags CloudTowerApplication
   * @name GetCloudTowerApplications
   * @request POST:/get-cloudtower-applications
   * @secure
   * @response `200` `(CloudTowerApplication)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getCloudTowerApplications = (
    data: GetCloudTowerApplicationsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplication[], ErrorBody>({
      path: `/get-cloudtower-applications`,
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
   * @tags CloudTowerApplication
   * @name GetCloudTowerApplicationsConnection
   * @request POST:/get-cloud-tower-applications-connection
   * @secure
   * @response `200` `CloudTowerApplicationConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getCloudTowerApplicationsConnection = (
    data: GetCloudTowerApplicationsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CloudTowerApplicationConnection, ErrorBody>({
      path: `/get-cloud-tower-applications-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
