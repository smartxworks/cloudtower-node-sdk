import {
  BackupRestorePoint,
  BackupRestorePointConnection,
  ErrorBody,
  GetBackupRestorePointsConnectionRequestBody,
  GetBackupRestorePointsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupRestorePointApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupRestorePoint
   * @name GetBackupRestorePoints
   * @request POST:/get-backup-restore-points
   * @secure
   * @response `200` `(BackupRestorePoint)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupRestorePoints = (
    data: GetBackupRestorePointsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupRestorePoint[], ErrorBody>({
      path: `/get-backup-restore-points`,
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
   * @tags BackupRestorePoint
   * @name GetBackupRestorePointsConnection
   * @request POST:/get-backup-restore-points-connection
   * @secure
   * @response `200` `BackupRestorePointConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupRestorePointsConnection = (
    data: GetBackupRestorePointsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupRestorePointConnection, ErrorBody>({
      path: `/get-backup-restore-points-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
