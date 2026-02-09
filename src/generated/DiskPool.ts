import {
  DiskPool,
  DiskPoolConnection,
  ErrorBody,
  GetDiskPoolsConnectionRequestBody,
  GetDiskPoolsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DiskPoolApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags DiskPool
   * @name GetDiskPools
   * @request POST:/get-disk-pools
   * @secure
   * @response `200` `(DiskPool)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDiskPools = (data: GetDiskPoolsRequestBody, params: RequestParams = {}) =>
    this.http.request<DiskPool[], ErrorBody>({
      path: `/get-disk-pools`,
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
   * @tags DiskPool
   * @name GetDiskPoolsConnection
   * @request POST:/get-disk-pools-connection
   * @secure
   * @response `200` `DiskPoolConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDiskPoolsConnection = (
    data: GetDiskPoolsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<DiskPoolConnection, ErrorBody>({
      path: `/get-disk-pools-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
