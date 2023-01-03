import {
  ErrorBody,
  GetSnapshotGroupsConnectionRequestBody,
  GetSnapshotGroupsRequestBody,
  SnapshotGroup,
  SnapshotGroupCloneParams,
  SnapshotGroupConnection,
  SnapshotGroupDeletionParams,
  SnapshotGroupKeepParams,
  SnapshotGroupRollbackParams,
  WithTaskDeleteSnapshotGroup,
  WithTaskSnapshotGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SnapshotGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SnapshotGroup
   * @name RollbackSnapshotGroup
   * @request POST:/rollback-snapshot-group
   * @secure
   * @response `200` `(WithTaskSnapshotGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rollbackSnapshotGroup = (
    data: SnapshotGroupRollbackParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnapshotGroup[], ErrorBody>({
      path: `/rollback-snapshot-group`,
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
   * @tags SnapshotGroup
   * @name CloneSnapshotGroup
   * @request POST:/clone-snapshot-group
   * @secure
   * @response `200` `(WithTaskSnapshotGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneSnapshotGroup = (
    data: SnapshotGroupCloneParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnapshotGroup[], ErrorBody>({
      path: `/clone-snapshot-group`,
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
   * @tags SnapshotGroup
   * @name KeepSnapshotGroup
   * @request POST:/keep-snapshot-group
   * @secure
   * @response `200` `(WithTaskSnapshotGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  keepSnapshotGroup = (
    data: SnapshotGroupKeepParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnapshotGroup[], ErrorBody>({
      path: `/keep-snapshot-group`,
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
   * @tags SnapshotGroup
   * @name DeleteSnapshotGroup
   * @request POST:/delete-snapshot-group
   * @secure
   * @response `200` `(WithTaskDeleteSnapshotGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSnapshotGroup = (
    data: SnapshotGroupDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteSnapshotGroup[], ErrorBody>({
      path: `/delete-snapshot-group`,
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
   * @tags SnapshotGroup
   * @name GetSnapshotGroups
   * @request POST:/get-snapshot-groups
   * @secure
   * @response `200` `(SnapshotGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotGroups = (
    data: GetSnapshotGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnapshotGroup[], ErrorBody>({
      path: `/get-snapshot-groups`,
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
   * @tags SnapshotGroup
   * @name GetSnapshotGroupsConnection
   * @request POST:/get-snapshot-groups-connection
   * @secure
   * @response `200` `SnapshotGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnapshotGroupsConnection = (
    data: GetSnapshotGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnapshotGroupConnection, ErrorBody>({
      path: `/get-snapshot-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
