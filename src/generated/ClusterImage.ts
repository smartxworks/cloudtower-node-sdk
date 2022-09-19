import {
  ClusterImage,
  ClusterImageConnection,
  ErrorBody,
  GetClusterImagesConnectionRequestBody,
  GetClusterImagesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterImageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ClusterImage
   * @name GetClusterImages
   * @request POST:/get-cluster-images
   * @secure
   * @response `200` `(ClusterImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterImages = (data: GetClusterImagesRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterImage[], ErrorBody>({
      path: `/get-cluster-images`,
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
   * @tags ClusterImage
   * @name GetClusterImagesConnection
   * @request POST:/get-cluster-images-connection
   * @secure
   * @response `200` `ClusterImageConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterImagesConnection = (data: GetClusterImagesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterImageConnection, ErrorBody>({
      path: `/get-cluster-images-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
