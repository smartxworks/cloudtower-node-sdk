import {
  ErrorBody,
  GetVmFoldersConnectionRequestBody,
  GetVmFoldersRequestBody,
  VmFolder,
  VmFolderConnection,
  VmFolderCreationParams,
  VmFolderDeletionParams,
  VmFolderUpdationParams,
  WithTaskDeleteVmFolder,
  WithTaskVmFolder,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmFolderApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmFolder
   * @name CreateVmFolder
   * @request POST:/create-vm-folder
   * @secure
   * @response `200` `(WithTaskVmFolder)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmFolder = (
    data: VmFolderCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmFolder[], ErrorBody>({
      path: `/create-vm-folder`,
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
   * @tags VmFolder
   * @name UpdateVmFolder
   * @request POST:/update-vm-folder
   * @secure
   * @response `200` `(WithTaskVmFolder)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmFolder = (data: VmFolderUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVmFolder[], ErrorBody>({
      path: `/update-vm-folder`,
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
   * @tags VmFolder
   * @name DeleteVmFolder
   * @request POST:/delete-vm-folder
   * @secure
   * @response `200` `(WithTaskDeleteVmFolder)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmFolder = (data: VmFolderDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVmFolder[], ErrorBody>({
      path: `/delete-vm-folder`,
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
   * @tags VmFolder
   * @name GetVmFolders
   * @request POST:/get-vm-folders
   * @secure
   * @response `200` `(VmFolder)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmFolders = (data: GetVmFoldersRequestBody, params: RequestParams = {}) =>
    this.http.request<VmFolder[], ErrorBody>({
      path: `/get-vm-folders`,
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
   * @tags VmFolder
   * @name GetVmFoldersConnection
   * @request POST:/get-vm-folders-connection
   * @secure
   * @response `200` `VmFolderConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmFoldersConnection = (
    data: GetVmFoldersConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmFolderConnection, ErrorBody>({
      path: `/get-vm-folders-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
