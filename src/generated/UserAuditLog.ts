import {
  ErrorBody,
  GetUserAuditLogsConnectionRequestBody,
  GetUserAuditLogsRequestBody,
  UserAuditLog,
  UserAuditLogConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserAuditLogApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserAuditLog
   * @name GetUserAuditLogs
   * @request POST:/get-user-audit-logs
   * @secure
   * @response `200` `(UserAuditLog)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUserAuditLogs = (
    data: GetUserAuditLogsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UserAuditLog[], ErrorBody>({
      path: `/get-user-audit-logs`,
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
   * @tags UserAuditLog
   * @name GetUserAuditLogsConnection
   * @request POST:/get-user-audit-logs-connection
   * @secure
   * @response `200` `UserAuditLogConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUserAuditLogsConnection = (
    data: GetUserAuditLogsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UserAuditLogConnection, ErrorBody>({
      path: `/get-user-audit-logs-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
