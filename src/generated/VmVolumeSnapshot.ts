import {
  ErrorBody,
  GetVmVolumeSnapshotsConnectionRequestBody,
  GetVmVolumeSnapshotsRequestBody,
  VmVolumeSnapshot,
  VmVolumeSnapshotConnection,
  VmVolumeSnapshotCreationParams,
  VmVolumeSnapshotDeletionParams,
  WithTaskDeleteVmVolumeSnapshot,
  WithTaskVmVolumeSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmVolumeSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmVolumeSnapshot
   * @name CreateVmVolumeSnapshot
   * @request POST:/create-vm-volume-snapshot
   * @secure
   * @response `200` `(WithTaskVmVolumeSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmVolumeSnapshot = (data: VmVolumeSnapshotCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVmVolumeSnapshot[], ErrorBody>({
      path: `/create-vm-volume-snapshot`,
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
   * @tags VmVolumeSnapshot
   * @name DeleteVmVolumeSnapshot
   * @request POST:/delete-vm-volume-snapshot
   * @secure
   * @response `200` `(WithTaskDeleteVmVolumeSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmVolumeSnapshot = (data: VmVolumeSnapshotDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVmVolumeSnapshot[], ErrorBody>({
      path: `/delete-vm-volume-snapshot`,
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
   * @tags VmVolumeSnapshot
   * @name GetVmVolumeSnapshots
   * @request POST:/get-vm-volume-snapshots
   * @secure
   * @response `200` `(VmVolumeSnapshot)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVolumeSnapshots = (data: GetVmVolumeSnapshotsRequestBody, params: RequestParams = {}) =>
    this.http.request<VmVolumeSnapshot[], ErrorBody>({
      path: `/get-vm-volume-snapshots`,
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
   * @tags VmVolumeSnapshot
   * @name GetVmVolumeSnapshotsConnection
   * @request POST:/get-vm-volume-snapshots-connection
   * @secure
   * @response `200` `VmVolumeSnapshotConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVolumeSnapshotsConnection = (data: GetVmVolumeSnapshotsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<VmVolumeSnapshotConnection, ErrorBody>({
      path: `/get-vm-volume-snapshots-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
