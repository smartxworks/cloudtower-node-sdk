import {
  ErrorBody,
  GetIscsiLunSnapshotsConnectionRequestBody,
  GetIscsiLunSnapshotsRequestBody,
  IscsiLunSnapshot,
  IscsiLunSnapshotConnection,
  IscsiLunSnapshotCreationParams,
  IscsiLunSnapshotDeletionParams,
  WithTaskDeleteIscsiLunSnapshot,
  WithTaskIscsiLunSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IscsiLunSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IscsiLunSnapshot
   * @name CreateIscsiLunSnapshot
   * @request POST:/create-iscsi-lun-snapshot
   * @secure
   * @response `200` `(WithTaskIscsiLunSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createIscsiLunSnapshot = (
    data: IscsiLunSnapshotCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskIscsiLunSnapshot[], ErrorBody>({
      path: `/create-iscsi-lun-snapshot`,
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
   * @tags IscsiLunSnapshot
   * @name DeleteIscsiLunSnapshot
   * @request POST:/delete-iscsi-lun-snapshot
   * @secure
   * @response `200` `(WithTaskDeleteIscsiLunSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteIscsiLunSnapshot = (
    data: IscsiLunSnapshotDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteIscsiLunSnapshot[], ErrorBody>({
      path: `/delete-iscsi-lun-snapshot`,
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
   * @tags IscsiLunSnapshot
   * @name GetIscsiLunSnapshots
   * @request POST:/get-iscsi-lun-snapshots
   * @secure
   * @response `200` `(IscsiLunSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiLunSnapshots = (
    data: GetIscsiLunSnapshotsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IscsiLunSnapshot[], ErrorBody>({
      path: `/get-iscsi-lun-snapshots`,
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
   * @tags IscsiLunSnapshot
   * @name GetIscsiLunSnapshotsConnection
   * @request POST:/get-iscsi-lun-snapshots-connection
   * @secure
   * @response `200` `IscsiLunSnapshotConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiLunSnapshotsConnection = (
    data: GetIscsiLunSnapshotsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IscsiLunSnapshotConnection, ErrorBody>({
      path: `/get-iscsi-lun-snapshots-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
