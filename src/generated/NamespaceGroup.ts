import {
  ErrorBody,
  GetNamespaceGroupsConnectionRequestBody,
  GetNamespaceGroupsRequestBody,
  NamespaceGroup,
  NamespaceGroupConnection,
  NamespaceGroupCreationParams,
  NamespaceGroupDeletionParams,
  NamespaceGroupUpdationParams,
  WithTaskDeleteNamespaceGroup,
  WithTaskNamespaceGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NamespaceGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NamespaceGroup
   * @name CreateNamespaceGroup
   * @request POST:/create-namespace-group
   * @secure
   * @response `200` `(WithTaskNamespaceGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNamespaceGroup = (
    data: NamespaceGroupCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNamespaceGroup[], ErrorBody>({
      path: `/create-namespace-group`,
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
   * @tags NamespaceGroup
   * @name UpdateNamespaceGroup
   * @request POST:/update-namespace-group
   * @secure
   * @response `200` `(WithTaskNamespaceGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNamespaceGroup = (
    data: NamespaceGroupUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNamespaceGroup[], ErrorBody>({
      path: `/update-namespace-group`,
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
   * @tags NamespaceGroup
   * @name DeleteNamespaceGroup
   * @request POST:/delete-namespace-group
   * @secure
   * @response `200` `(WithTaskDeleteNamespaceGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNamespaceGroup = (
    data: NamespaceGroupDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteNamespaceGroup[], ErrorBody>({
      path: `/delete-namespace-group`,
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
   * @tags NamespaceGroup
   * @name GetNamespaceGroups
   * @request POST:/get-namespace-groups
   * @secure
   * @response `200` `(NamespaceGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNamespaceGroups = (
    data: GetNamespaceGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NamespaceGroup[], ErrorBody>({
      path: `/get-namespace-groups`,
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
   * @tags NamespaceGroup
   * @name GetNamespaceGroupsConnection
   * @request POST:/get-namespace-groups-connection
   * @secure
   * @response `200` `NamespaceGroupConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNamespaceGroupsConnection = (
    data: GetNamespaceGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NamespaceGroupConnection, ErrorBody>({
      path: `/get-namespace-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
