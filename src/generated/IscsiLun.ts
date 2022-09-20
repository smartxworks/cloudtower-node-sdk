import {
  ErrorBody,
  GetIscsiLunsConnectionRequestBody,
  GetIscsiLunsRequestBody,
  IscsiLun,
  IscsiLunCloneParams,
  IscsiLunConnection,
  IscsiLunCreationParams,
  IscsiLunDeletionParams,
  IscsiLunRollbackParams,
  IscsiLunUpdationParams,
  WithTaskDeleteIscsiLun,
  WithTaskIscsiLun,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IscsiLunApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IscsiLun
   * @name CreateIscsiLun
   * @request POST:/create-iscsi-lun
   * @secure
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createIscsiLun = (
    data: IscsiLunCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskIscsiLun[], ErrorBody>({
      path: `/create-iscsi-lun`,
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
   * @tags IscsiLun
   * @name UpdateIscsiLun
   * @request POST:/update-iscsi-lun
   * @secure
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateIscsiLun = (data: IscsiLunUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskIscsiLun[], ErrorBody>({
      path: `/update-iscsi-lun`,
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
   * @tags IscsiLun
   * @name DeleteIscsiLun
   * @request POST:/delete-iscsi-lun
   * @secure
   * @response `200` `(WithTaskDeleteIscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteIscsiLun = (data: IscsiLunDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteIscsiLun[], ErrorBody>({
      path: `/delete-iscsi-lun`,
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
   * @tags IscsiLun
   * @name CloneIscsiLunFromSnapshot
   * @request POST:/clone-iscsi-lun-from-snapshot
   * @secure
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneIscsiLunFromSnapshot = (
    data: IscsiLunCloneParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskIscsiLun[], ErrorBody>({
      path: `/clone-iscsi-lun-from-snapshot`,
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
   * @tags IscsiLun
   * @name RollbackIscsiLunFromSnapshot
   * @request POST:/rollback-iscsi-lun-from-snapshot
   * @secure
   * @response `200` `(WithTaskIscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rollbackIscsiLunFromSnapshot = (
    data: IscsiLunRollbackParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskIscsiLun[], ErrorBody>({
      path: `/rollback-iscsi-lun-from-snapshot`,
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
   * @tags IscsiLun
   * @name GetIscsiLuns
   * @request POST:/get-iscsi-luns
   * @secure
   * @response `200` `(IscsiLun)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiLuns = (data: GetIscsiLunsRequestBody, params: RequestParams = {}) =>
    this.http.request<IscsiLun[], ErrorBody>({
      path: `/get-iscsi-luns`,
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
   * @tags IscsiLun
   * @name GetIscsiLunsConnection
   * @request POST:/get-iscsi-luns-connection
   * @secure
   * @response `200` `IscsiLunConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiLunsConnection = (
    data: GetIscsiLunsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IscsiLunConnection, ErrorBody>({
      path: `/get-iscsi-luns-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
