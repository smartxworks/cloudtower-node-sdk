import {
  ErrorBody,
  GetVmDisksConnectionRequestBody,
  GetVmDisksRequestBody,
  VmDisk,
  VmDiskConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmDiskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmDisk
   * @name GetVmDisks
   * @request POST:/get-vm-disks
   * @secure
   * @response `200` `(VmDisk)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmDisks = (data: GetVmDisksRequestBody, params: RequestParams = {}) =>
    this.http.request<VmDisk[], ErrorBody>({
      path: `/get-vm-disks`,
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
   * @tags VmDisk
   * @name GetVmDisksConnection
   * @request POST:/get-vm-disks-connection
   * @secure
   * @response `200` `VmDiskConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmDisksConnection = (data: GetVmDisksConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<VmDiskConnection, ErrorBody>({
      path: `/get-vm-disks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
