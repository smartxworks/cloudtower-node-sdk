import {
  BackupPlanExecution,
  BackupPlanExecutionConnection,
  ErrorBody,
  GetBackupPlanExecutionsConnectionRequestBody,
  GetBackupPlanExecutionsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupPlanExecutionApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupPlanExecution
   * @name GetBackupPlanExecutions
   * @request POST:/get-backup-plan-executions
   * @secure
   * @response `200` `(BackupPlanExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupPlanExecutions = (
    data: GetBackupPlanExecutionsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BackupPlanExecution[], ErrorBody>({
      path: `/get-backup-plan-executions`,
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
   * @tags BackupPlanExecution
   * @name GetBackupPlanExecutionsConnection
   * @request POST:/get-backup-plan-executions-connection
   * @secure
   * @response `200` `BackupPlanExecutionConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupPlanExecutionsConnection = (
    data: GetBackupPlanExecutionsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BackupPlanExecutionConnection, ErrorBody>({
      path: `/get-backup-plan-executions-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
