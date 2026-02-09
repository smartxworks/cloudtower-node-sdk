import {
  ErrorBody,
  GetVmSnapshotsConnectionRequestBody,
  GetVmSnapshotsRequestBody,
  VmSnapshot,
  VmSnapshotConnection,
  VmSnapshotCreationParams,
  VmSnapshotDeletionParams,
  WithTaskDeleteVmSnapshot,
  WithTaskVmSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmSnapshot
   * @name CreateVmSnapshot
   * @request POST:/create-vm-snapshot
   * @secure
   * @response `200` `(WithTaskVmSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmSnapshot = (
    data: VmSnapshotCreationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVmSnapshot[], ErrorBody>({
      path: `/create-vm-snapshot`,
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
   * @tags VmSnapshot
   * @name DeleteVmSnapshot
   * @request POST:/delete-vm-snapshot
   * @secure
   * @response `200` `(WithTaskDeleteVmSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmSnapshot = (
    data: VmSnapshotDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteVmSnapshot[], ErrorBody>({
      path: `/delete-vm-snapshot`,
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
   * @tags VmSnapshot
   * @name GetVmSnapshots
   * @request POST:/get-vm-snapshots
   * @secure
   * @response `200` `(VmSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmSnapshots = (
    data: GetVmSnapshotsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VmSnapshot[], ErrorBody>({
      path: `/get-vm-snapshots`,
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
   * @tags VmSnapshot
   * @name GetVmSnapshotsConnection
   * @request POST:/get-vm-snapshots-connection
   * @secure
   * @response `200` `VmSnapshotConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmSnapshotsConnection = (
    data: GetVmSnapshotsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VmSnapshotConnection, ErrorBody>({
      path: `/get-vm-snapshots-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
