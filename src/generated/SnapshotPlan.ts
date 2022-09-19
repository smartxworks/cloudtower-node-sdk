import {
  ErrorBody,
  GetSnapshotPlansConnectionRequestBody,
  GetSnapshotPlansRequestBody,
  SnapshotPlan,
  SnapshotPlanConnection,
  SnapshotPlanCreationParams,
  SnapshotPlanDeletionParams,
  SnapshotPlanExecutionParams,
  SnapshotPlanResumeParams,
  SnapshotPlanSuspendedParams,
  SnapshotPlanUpdationParams,
  WithTaskDeleteSnapshotPlan,
  WithTaskSnapshotPlan,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SnapshotPlanApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SnapshotPlan
   * @name CreateSnapshotPlan
   * @request POST:/create-snapshot-plan
   * @secure
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createSnapshotPlan = (data: SnapshotPlanCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskSnapshotPlan[], ErrorBody>({
      path: `/create-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name UpdateSnapshotPlan
   * @request POST:/update-snapshot-plan
   * @secure
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSnapshotPlan = (data: SnapshotPlanUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskSnapshotPlan[], ErrorBody>({
      path: `/update-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name DeleteSnapshotPlan
   * @request POST:/delete-snapshot-plan
   * @secure
   * @response `200` `(WithTaskDeleteSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSnapshotPlan = (data: SnapshotPlanDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteSnapshotPlan[], ErrorBody>({
      path: `/delete-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name ExecuteSnapshotPlan
   * @request POST:/execute-snapshot-plan
   * @secure
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  executeSnapshotPlan = (data: SnapshotPlanExecutionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskSnapshotPlan[], ErrorBody>({
      path: `/execute-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name SuspendSnapshotPlan
   * @request POST:/suspend-snapshot-plan
   * @secure
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  suspendSnapshotPlan = (data: SnapshotPlanSuspendedParams, params: RequestParams = {}) =>
    this.http.request<WithTaskSnapshotPlan[], ErrorBody>({
      path: `/suspend-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name ResumeSnapshotPlan
   * @request POST:/resume-snapshot-plan
   * @secure
   * @response `200` `(WithTaskSnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  resumeSnapshotPlan = (data: SnapshotPlanResumeParams, params: RequestParams = {}) =>
    this.http.request<WithTaskSnapshotPlan[], ErrorBody>({
      path: `/resume-snapshot-plan`,
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
   * @tags SnapshotPlan
   * @name GetSnapshotPlans
   * @request POST:/get-snapshot-plans
   * @secure
   * @response `200` `(SnapshotPlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotPlans = (data: GetSnapshotPlansRequestBody, params: RequestParams = {}) =>
    this.http.request<SnapshotPlan[], ErrorBody>({
      path: `/get-snapshot-plans`,
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
   * @tags SnapshotPlan
   * @name GetSnapshotPlansConnection
   * @request POST:/get-snapshot-plans-connection
   * @secure
   * @response `200` `SnapshotPlanConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotPlansConnection = (data: GetSnapshotPlansConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<SnapshotPlanConnection, ErrorBody>({
      path: `/get-snapshot-plans-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
