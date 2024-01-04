import {
  ErrorBody,
  GetTasksConnectionRequestBody,
  GetTasksRequestBody,
  Task,
  TaskConnection,
  TaskCreationParams,
  TaskUpdateParams,
  WithTaskTask,
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
   * @name CreateTask
   * @request POST:/create-task
   * @secure
   * @response `200` `(WithTaskTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createTask = (data: TaskCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskTask[], ErrorBody>({
      path: `/create-task`,
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
   * @name UpdateTask
   * @request POST:/update-task
   * @secure
   * @response `200` `(WithTaskTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateTask = (data: TaskUpdateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskTask[], ErrorBody>({
      path: `/update-task`,
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
   * @name GetTasks
   * @request POST:/get-tasks
   * @secure
   * @response `200` `(Task)[]`
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
   * @response `200` `TaskConnection`
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
