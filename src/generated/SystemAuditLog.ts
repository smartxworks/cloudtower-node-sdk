import {
  ErrorBody,
  GetSystemAuditLogsConnectionRequestBody,
  GetSystemAuditLogsRequestBody,
  SystemAuditLog,
  SystemAuditLogConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SystemAuditLogApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SystemAuditLog
   * @name GetSystemAuditLogs
   * @request POST:/get-system-audit-logs
   * @secure
   * @response `200` `(SystemAuditLog)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSystemAuditLogs = (
    data: GetSystemAuditLogsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SystemAuditLog[], ErrorBody>({
      path: `/get-system-audit-logs`,
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
   * @tags SystemAuditLog
   * @name GetSystemAuditLogsConnection
   * @request POST:/get-system-audit-logs-connection
   * @secure
   * @response `200` `SystemAuditLogConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSystemAuditLogsConnection = (
    data: GetSystemAuditLogsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SystemAuditLogConnection, ErrorBody>({
      path: `/get-system-audit-logs-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
