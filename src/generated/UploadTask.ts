import {
  CancelUploadTaskParams,
  ErrorBody,
  GetUploadTasksConnectionRequestBody,
  GetUploadTasksRequestBody,
  UploadTask,
  UploadTaskConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UploadTaskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UploadTask
   * @name CancelUploadTask
   * @request POST:/cancel-upload-task
   * @secure
   * @response `200` `(string)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cancelUploadTask = (
    data: CancelUploadTaskParams,
    params: RequestParams = {}
  ) =>
    this.http.request<string[], void | ErrorBody>({
      path: `/cancel-upload-task`,
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
   * @tags UploadTask
   * @name GetUploadTasks
   * @request POST:/get-upload-tasks
   * @secure
   * @response `200` `(UploadTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUploadTasks = (
    data: GetUploadTasksRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UploadTask[], ErrorBody>({
      path: `/get-upload-tasks`,
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
   * @tags UploadTask
   * @name GetUploadTasksConnection
   * @request POST:/get-upload-tasks-connection
   * @secure
   * @response `200` `UploadTaskConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUploadTasksConnection = (
    data: GetUploadTasksConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UploadTaskConnection, ErrorBody>({
      path: `/get-upload-tasks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
