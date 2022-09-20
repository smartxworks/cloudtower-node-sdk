import {
  ErrorBody,
  GetTasksConnectionRequestBody,
  GetTasksRequestBody,
  Task,
  TaskConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TaskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Task
   * @name GetTasks
   * @request POST:/get-tasks
   * @secure
   * @response `200` `(Task)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getTasks = (data: GetTasksRequestBody, params: RequestParams = {}) =>
    this.http.request<Task[], ErrorBody>({
      path: `/get-tasks`,
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
   * @tags Task
   * @name GetTasksConnection
   * @request POST:/get-tasks-connection
   * @secure
   * @response `200` `TaskConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getTasksConnection = (
    data: GetTasksConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TaskConnection, ErrorBody>({
      path: `/get-tasks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
