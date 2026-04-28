import {
  ErrorBody,
  GetNfsInodesConnectionRequestBody,
  GetNfsInodesRequestBody,
  NfsInode,
  NfsInodeConnection,
  NfsInodeUpdationParams,
  WithTaskNfsInode,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NfsInodeApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NfsInode
   * @name UpdateNfsInode
   * @request POST:/update-nfs-inode
   * @secure
   * @response `200` `(WithTaskNfsInode)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNfsInode = (data: NfsInodeUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskNfsInode[], ErrorBody>({
      path: `/update-nfs-inode`,
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
   * @tags NfsInode
   * @name GetNfsInodes
   * @request POST:/get-nfs-inodes
   * @secure
   * @response `200` `(NfsInode)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNfsInodes = (data: GetNfsInodesRequestBody, params: RequestParams = {}) =>
    this.http.request<NfsInode[], ErrorBody>({
      path: `/get-nfs-inodes`,
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
   * @tags NfsInode
   * @name GetNfsInodesConnection
   * @request POST:/get-nfs-inodes-connection
   * @secure
   * @response `200` `NfsInodeConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNfsInodesConnection = (
    data: GetNfsInodesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<NfsInodeConnection, ErrorBody>({
      path: `/get-nfs-inodes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
