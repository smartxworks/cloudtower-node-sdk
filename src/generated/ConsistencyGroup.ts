import {
  ConsistencyGroup,
  ConsistencyGroupConnection,
  ConsistencyGroupCreationParams,
  ConsistencyGroupDeletionParams,
  ConsistencyGroupUpdationParams,
  ErrorBody,
  GetConsistencyGroupsConnectionRequestBody,
  GetConsistencyGroupsRequestBody,
  WithTaskConsistencyGroup,
  WithTaskDeleteConsistencyGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ConsistencyGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ConsistencyGroup
   * @name CreateConsistencyGroup
   * @request POST:/create-consistency-group
   * @secure
   * @response `200` `(WithTaskConsistencyGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createConsistencyGroup = (data: ConsistencyGroupCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskConsistencyGroup[], ErrorBody>({
      path: `/create-consistency-group`,
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
   * @tags ConsistencyGroup
   * @name UpdateConsistencyGroup
   * @request POST:/update-consistency-group
   * @secure
   * @response `200` `(WithTaskConsistencyGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateConsistencyGroup = (data: ConsistencyGroupUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskConsistencyGroup[], ErrorBody>({
      path: `/update-consistency-group`,
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
   * @tags ConsistencyGroup
   * @name DeleteConsistencyGroup
   * @request POST:/delete-consistency-group
   * @secure
   * @response `200` `(WithTaskDeleteConsistencyGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteConsistencyGroup = (data: ConsistencyGroupDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteConsistencyGroup[], ErrorBody>({
      path: `/delete-consistency-group`,
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
   * @tags ConsistencyGroup
   * @name GetConsistencyGroups
   * @request POST:/get-consistency-groups
   * @secure
   * @response `200` `(ConsistencyGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getConsistencyGroups = (data: GetConsistencyGroupsRequestBody, params: RequestParams = {}) =>
    this.http.request<ConsistencyGroup[], ErrorBody>({
      path: `/get-consistency-groups`,
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
   * @tags ConsistencyGroup
   * @name GetConsistencyGroupsConnection
   * @request POST:/get-consistency-groups-connection
   * @secure
   * @response `200` `ConsistencyGroupConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getConsistencyGroupsConnection = (data: GetConsistencyGroupsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ConsistencyGroupConnection, ErrorBody>({
      path: `/get-consistency-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
