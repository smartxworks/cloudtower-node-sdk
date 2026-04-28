import {
  ErrorBody,
  GetIscsiTargetsConnectionRequestBody,
  GetIscsiTargetsRequestBody,
  IscsiTarget,
  IscsiTargetConnection,
  IscsiTargetCreationParams,
  IscsiTargetDeletionParams,
  IscsiTargetUpdationParams,
  WithTaskDeleteIscsiTarget,
  WithTaskIscsiTarget,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IscsiTargetApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IscsiTarget
   * @name CreateIscsiTarget
   * @request POST:/create-iscsi-target
   * @secure
   * @response `200` `(WithTaskIscsiTarget)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createIscsiTarget = (
    data: IscsiTargetCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskIscsiTarget[], ErrorBody>({
      path: `/create-iscsi-target`,
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
   * @tags IscsiTarget
   * @name UpdateIscsiTarget
   * @request POST:/update-iscsi-target
   * @secure
   * @response `200` `(WithTaskIscsiTarget)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateIscsiTarget = (
    data: IscsiTargetUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskIscsiTarget[], ErrorBody>({
      path: `/update-iscsi-target`,
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
   * @tags IscsiTarget
   * @name DeleteIscsiTarget
   * @request POST:/delete-iscsi-target
   * @secure
   * @response `200` `(WithTaskDeleteIscsiTarget)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteIscsiTarget = (
    data: IscsiTargetDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteIscsiTarget[], ErrorBody>({
      path: `/delete-iscsi-target`,
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
   * @tags IscsiTarget
   * @name GetIscsiTargets
   * @request POST:/get-iscsi-targets
   * @secure
   * @response `200` `(IscsiTarget)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiTargets = (
    data: GetIscsiTargetsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<IscsiTarget[], ErrorBody>({
      path: `/get-iscsi-targets`,
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
   * @tags IscsiTarget
   * @name GetIscsiTargetsConnection
   * @request POST:/get-iscsi-targets-connection
   * @secure
   * @response `200` `IscsiTargetConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiTargetsConnection = (
    data: GetIscsiTargetsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<IscsiTargetConnection, ErrorBody>({
      path: `/get-iscsi-targets-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
