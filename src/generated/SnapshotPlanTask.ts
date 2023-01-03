import {
  ErrorBody,
  GetSnapshotPlanTasksConnectionRequestBody,
  GetSnapshotPlanTasksRequestBody,
  SnapshotPlanTask,
  SnapshotPlanTaskConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SnapshotPlanTaskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SnapshotPlanTask
   * @name GetSnapshotPlanTasks
   * @request POST:/get-snapshot-plan-tasks
   * @secure
   * @response `200` `(SnapshotPlanTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotPlanTasks = (
    data: GetSnapshotPlanTasksRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnapshotPlanTask[], ErrorBody>({
      path: `/get-snapshot-plan-tasks`,
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
   * @tags SnapshotPlanTask
   * @name GetSnapshotPlanTasksConnection
   * @request POST:/get-snapshot-plan-tasks-connection
   * @secure
   * @response `200` `SnapshotPlanTaskConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotPlanTasksConnection = (
    data: GetSnapshotPlanTasksConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnapshotPlanTaskConnection, ErrorBody>({
      path: `/get-snapshot-plan-tasks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
