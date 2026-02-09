import {
  Disk,
  DiskConnection,
  DiskMountParams,
  DiskUnmountParams,
  ErrorBody,
  GetDisksConnectionRequestBody,
  GetDisksRequestBody,
  WithTaskDisk,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DiskApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Disk
   * @name MountDisk
   * @request POST:/mount-disk
   * @secure
   * @response `200` `(WithTaskDisk)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  mountDisk = (data: DiskMountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDisk[], ErrorBody>({
      path: `/mount-disk`,
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
   * @tags Disk
   * @name UnmountDisk
   * @request POST:/unmount-disk
   * @secure
   * @response `200` `(WithTaskDisk)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  unmountDisk = (data: DiskUnmountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDisk[], ErrorBody>({
      path: `/unmount-disk`,
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
   * @tags Disk
   * @name GetDisks
   * @request POST:/get-disks
   * @secure
   * @response `200` `(Disk)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDisks = (data: GetDisksRequestBody, params: RequestParams = {}) =>
    this.http.request<Disk[], ErrorBody>({
      path: `/get-disks`,
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
   * @tags Disk
   * @name GetDisksConnection
   * @request POST:/get-disks-connection
   * @secure
   * @response `200` `DiskConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDisksConnection = (
    data: GetDisksConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<DiskConnection, ErrorBody>({
      path: `/get-disks-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
