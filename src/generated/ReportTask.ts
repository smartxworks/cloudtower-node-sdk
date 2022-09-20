import {
  ErrorBody,
  GetReportTasksConnectionRequestBody,
  GetReportTasksRequestBody,
  ReportTask,
  ReportTaskConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReportTaskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReportTask
   * @name GetReportTasks
   * @request POST:/get-report-tasks
   * @secure
   * @response `200` `(ReportTask)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReportTasks = (
    data: GetReportTasksRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReportTask[], ErrorBody>({
      path: `/get-report-tasks`,
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
   * @tags ReportTask
   * @name GetReportTasksConnection
   * @request POST:/get-report-tasks-connection
   * @secure
   * @response `200` `ReportTaskConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReportTasksConnection = (
    data: GetReportTasksConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReportTaskConnection, ErrorBody>({
      path: `/get-report-tasks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
