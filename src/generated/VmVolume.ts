import {
  CloneVmVolumeParams,
  ErrorBody,
  GetVmVolumesConnectionRequestBody,
  GetVmVolumesRequestBody,
  UpdateVmVolumeParams,
  VmVolume,
  VmVolumeConnection,
  VmVolumeCreationParams,
  VmVolumeDeletionParams,
  VmVolumeRebuildParams,
  VmVolumeRollbackParams,
  WithTaskDeleteVmVolume,
  WithTaskVmVolume,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmVolumeApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmVolume
   * @name CreateVmVolume
   * @request POST:/create-vm-volume
   * @secure
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmVolume = (
    data: VmVolumeCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmVolume[], ErrorBody>({
      path: `/create-vm-volume`,
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
   * @tags VmVolume
   * @name DeleteVmVolumeFromVm
   * @request POST:/delete-vm-volume
   * @secure
   * @response `200` `(WithTaskDeleteVmVolume)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmVolumeFromVm = (
    data: VmVolumeDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVmVolume[], ErrorBody>({
      path: `/delete-vm-volume`,
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
   * @tags VmVolume
   * @name RebuildVmVolume
   * @request POST:/rebuild-vm-volume
   * @secure
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rebuildVmVolume = (
    data: VmVolumeRebuildParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmVolume[], void | ErrorBody>({
      path: `/rebuild-vm-volume`,
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
   * @tags VmVolume
   * @name RollbackVmVolume
   * @request POST:/rollback-vm-volume
   * @secure
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rollbackVmVolume = (
    data: VmVolumeRollbackParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmVolume[], void | ErrorBody>({
      path: `/rollback-vm-volume`,
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
   * @tags VmVolume
   * @name CloneVmVolume
   * @request POST:/clone-vm-volume
   * @secure
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneVmVolume = (data: CloneVmVolumeParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVmVolume[], ErrorBody>({
      path: `/clone-vm-volume`,
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
   * @tags VmVolume
   * @name UpdateVmVolume
   * @request POST:/update-vm-volume
   * @secure
   * @response `200` `(WithTaskVmVolume)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmVolume = (data: UpdateVmVolumeParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVmVolume[], void | ErrorBody>({
      path: `/update-vm-volume`,
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
   * @tags VmVolume
   * @name GetVmVolumes
   * @request POST:/get-vm-volumes
   * @secure
   * @response `200` `(VmVolume)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVolumes = (data: GetVmVolumesRequestBody, params: RequestParams = {}) =>
    this.http.request<VmVolume[], ErrorBody>({
      path: `/get-vm-volumes`,
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
   * @tags VmVolume
   * @name GetVmVolumesConnection
   * @request POST:/get-vm-volumes-connection
   * @secure
   * @response `200` `VmVolumeConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVolumesConnection = (
    data: GetVmVolumesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmVolumeConnection, ErrorBody>({
      path: `/get-vm-volumes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
