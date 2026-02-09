import {
  BackupTargetExecution,
  BackupTargetExecutionConnection,
  ErrorBody,
  GetBackupTargetExecutionsConnectionRequestBody,
  GetBackupTargetExecutionsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupTargetExecutionApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupTargetExecution
   * @name GetBackupTargetExecutions
   * @request POST:/get-backup-target-executions
   * @secure
   * @response `200` `(BackupTargetExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupTargetExecutions = (
    data: GetBackupTargetExecutionsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupTargetExecution[], ErrorBody>({
      path: `/get-backup-target-executions`,
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
   * @tags BackupTargetExecution
   * @name GetBackupTargetExecutionsConnection
   * @request POST:/get-backup-target-executions-connection
   * @secure
   * @response `200` `BackupTargetExecutionConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupTargetExecutionsConnection = (
    data: GetBackupTargetExecutionsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupTargetExecutionConnection, ErrorBody>({
      path: `/get-backup-target-executions-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
