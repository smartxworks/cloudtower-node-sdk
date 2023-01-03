import {
  ErrorBody,
  GetNvmfNamespaceSnapshotsConnectionRequestBody,
  GetNvmfNamespaceSnapshotsRequestBody,
  NvmfNamespaceSnapshot,
  NvmfNamespaceSnapshotConnection,
  NvmfNamespaceSnapshotCreationParams,
  NvmfNamespaceSnapshotDeletionParams,
  WithTaskDeleteNvmfNamespaceSnapshot,
  WithTaskNvmfNamespaceSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NvmfNamespaceSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NvmfNamespaceSnapshot
   * @name CreateNvmfNamespaceSnapshot
   * @request POST:/create-nvmf-namespace-snapshot
   * @secure
   * @response `200` `(WithTaskNvmfNamespaceSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNvmfNamespaceSnapshot = (
    data: NvmfNamespaceSnapshotCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNvmfNamespaceSnapshot[], ErrorBody>({
      path: `/create-nvmf-namespace-snapshot`,
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
   * @tags NvmfNamespaceSnapshot
   * @name DeleteNvmfNamespaceSnapshot
   * @request POST:/delete-nvmf-namespace-snapshot
   * @secure
   * @response `200` `(WithTaskDeleteNvmfNamespaceSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNvmfNamespaceSnapshot = (
    data: NvmfNamespaceSnapshotDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteNvmfNamespaceSnapshot[], ErrorBody>({
      path: `/delete-nvmf-namespace-snapshot`,
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
   * @tags NvmfNamespaceSnapshot
   * @name GetNvmfNamespaceSnapshots
   * @request POST:/get-nvmf-namespace-snapshots
   * @secure
   * @response `200` `(NvmfNamespaceSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfNamespaceSnapshots = (
    data: GetNvmfNamespaceSnapshotsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NvmfNamespaceSnapshot[], ErrorBody>({
      path: `/get-nvmf-namespace-snapshots`,
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
   * @tags NvmfNamespaceSnapshot
   * @name GetNvmfNamespaceSnapshotsConnection
   * @request POST:/get-nvmf-namespace-snapshots-connection
   * @secure
   * @response `200` `NvmfNamespaceSnapshotConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfNamespaceSnapshotsConnection = (
    data: GetNvmfNamespaceSnapshotsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NvmfNamespaceSnapshotConnection, ErrorBody>({
      path: `/get-nvmf-namespace-snapshots-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
