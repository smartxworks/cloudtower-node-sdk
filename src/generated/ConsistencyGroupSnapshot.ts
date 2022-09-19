import {
  ConsistencyGroupSnapshot,
  ConsistencyGroupSnapshotConnection,
  ConsistencyGroupSnapshotCreationParams,
  ConsistencyGroupSnapshotDeletionParams,
  ConsistencyGroupSnapshotUpdationParams,
  ErrorBody,
  GetConsistencyGroupSnapshotsConnectionRequestBody,
  GetConsistencyGroupSnapshotsRequestBody,
  WithTaskConsistencyGroupSnapshot,
  WithTaskDeleteConsistencyGroupSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ConsistencyGroupSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ConsistencyGroupSnapshot
   * @name CreateConsistencyGroupSnapshot
   * @request POST:/create-consistency-snapshot-group
   * @secure
   * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createConsistencyGroupSnapshot = (data: ConsistencyGroupSnapshotCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskConsistencyGroupSnapshot[], ErrorBody>({
      path: `/create-consistency-snapshot-group`,
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
   * @tags ConsistencyGroupSnapshot
   * @name UpdateConsistencyGroupSnapshot
   * @request POST:/rollback-consistency-snapshot-group
   * @secure
   * @response `200` `(WithTaskConsistencyGroupSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateConsistencyGroupSnapshot = (data: ConsistencyGroupSnapshotUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskConsistencyGroupSnapshot[], ErrorBody>({
      path: `/rollback-consistency-snapshot-group`,
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
   * @tags ConsistencyGroupSnapshot
   * @name DeleteConsistencyGroupSnapshot
   * @request POST:/delete-consistency-snapshot-group
   * @secure
   * @response `200` `(WithTaskDeleteConsistencyGroupSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteConsistencyGroupSnapshot = (data: ConsistencyGroupSnapshotDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteConsistencyGroupSnapshot[], ErrorBody>({
      path: `/delete-consistency-snapshot-group`,
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
   * @tags ConsistencyGroupSnapshot
   * @name GetConsistencyGroupSnapshots
   * @request POST:/get-consistency-group-snapshots
   * @secure
   * @response `200` `(ConsistencyGroupSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getConsistencyGroupSnapshots = (data: GetConsistencyGroupSnapshotsRequestBody, params: RequestParams = {}) =>
    this.http.request<ConsistencyGroupSnapshot[], ErrorBody>({
      path: `/get-consistency-group-snapshots`,
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
   * @tags ConsistencyGroupSnapshot
   * @name GetConsistencyGroupSnapshotsConnection
   * @request POST:/get-consistency-group-snapshots-connection
   * @secure
   * @response `200` `ConsistencyGroupSnapshotConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getConsistencyGroupSnapshotsConnection = (
    data: GetConsistencyGroupSnapshotsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ConsistencyGroupSnapshotConnection, ErrorBody>({
      path: `/get-consistency-group-snapshots-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
