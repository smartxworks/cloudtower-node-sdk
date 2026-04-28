import {
  BackupService,
  BackupServiceConnection,
  ErrorBody,
  GetBackupServicesConnectionRequestBody,
  GetBackupServicesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupServiceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupService
   * @name GetBackupServices
   * @request POST:/get-backup-services
   * @secure
   * @response `200` `(BackupService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupServices = (
    data: GetBackupServicesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupService[], ErrorBody>({
      path: `/get-backup-services`,
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
   * @tags BackupService
   * @name GetBackupServicesConnection
   * @request POST:/get-backup-services-connection
   * @secure
   * @response `200` `BackupServiceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupServicesConnection = (
    data: GetBackupServicesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupServiceConnection, ErrorBody>({
      path: `/get-backup-services-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
