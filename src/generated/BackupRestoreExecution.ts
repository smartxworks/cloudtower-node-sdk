import {
  BackupRestoreExecution,
  BackupRestoreExecutionConnection,
  ErrorBody,
  GetBackupRestoreExecutionsConnectionRequestBody,
  GetBackupRestoreExecutionsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupRestoreExecutionApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupRestoreExecution
   * @name GetBackupRestoreExecutions
   * @request POST:/get-backup-restore-executions
   * @secure
   * @response `200` `(BackupRestoreExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupRestoreExecutions = (
    data: GetBackupRestoreExecutionsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupRestoreExecution[], ErrorBody>({
      path: `/get-backup-restore-executions`,
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
   * @tags BackupRestoreExecution
   * @name GetBackupRestoreExecutionsConnection
   * @request POST:/get-backup-restore-executions-connection
   * @secure
   * @response `200` `BackupRestoreExecutionConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupRestoreExecutionsConnection = (
    data: GetBackupRestoreExecutionsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupRestoreExecutionConnection, ErrorBody>({
      path: `/get-backup-restore-executions-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
