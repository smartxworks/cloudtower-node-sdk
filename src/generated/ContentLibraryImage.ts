import {
  ContentLibraryImage,
  ContentLibraryImageConnection,
  ContentLibraryImageDeletionParams,
  ContentLibraryImageUpdationClusterParams,
  ContentLibraryImageUpdationParams,
  ErrorBody,
  GetContentLibraryImagesConnectionRequestBody,
  GetContentLibraryImagesRequestBody,
  UploadTask,
  WithTaskContentLibraryImage,
  WithTaskDeleteContentLibraryImage,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ContentLibraryImageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ContentLibraryImage
   * @name CreateContentLibraryImage
   * @request POST:/upload-content-library-image
   * @secure
   * @response `200` `(UploadTask)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createContentLibraryImage = (
    data: { file: File; clusters: string; name?: string; size?: string; description?: string; upload_task_id?: string },
    params: RequestParams = {},
  ) =>
    this.http.request<UploadTask[], void | ErrorBody>({
      path: `/upload-content-library-image`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ContentLibraryImage
   * @name UpdateContentLibraryImage
   * @request POST:/update-content-library-image
   * @secure
   * @response `200` `(WithTaskContentLibraryImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateContentLibraryImage = (data: ContentLibraryImageUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskContentLibraryImage[], ErrorBody>({
      path: `/update-content-library-image`,
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
   * @tags ContentLibraryImage
   * @name DistributeContentLibraryImageClusters
   * @request POST:/distribute-content-library-image-clusters
   * @secure
   * @response `200` `(WithTaskContentLibraryImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  distributeContentLibraryImageClusters = (
    data: ContentLibraryImageUpdationClusterParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskContentLibraryImage[], ErrorBody>({
      path: `/distribute-content-library-image-clusters`,
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
   * @tags ContentLibraryImage
   * @name RemoveContentLibraryImageClusters
   * @request POST:/remove-content-library-image-clusters
   * @secure
   * @response `200` `(WithTaskContentLibraryImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeContentLibraryImageClusters = (data: ContentLibraryImageUpdationClusterParams, params: RequestParams = {}) =>
    this.http.request<WithTaskContentLibraryImage[], ErrorBody>({
      path: `/remove-content-library-image-clusters`,
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
   * @tags ContentLibraryImage
   * @name DeleteContentLibraryImage
   * @request POST:/delete-content-library-image
   * @secure
   * @response `200` `(WithTaskDeleteContentLibraryImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteContentLibraryImage = (data: ContentLibraryImageDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteContentLibraryImage[], ErrorBody>({
      path: `/delete-content-library-image`,
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
   * @tags ContentLibraryImage
   * @name GetContentLibraryImages
   * @request POST:/get-content-library-images
   * @secure
   * @response `200` `(ContentLibraryImage)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getContentLibraryImages = (data: GetContentLibraryImagesRequestBody, params: RequestParams = {}) =>
    this.http.request<ContentLibraryImage[], ErrorBody>({
      path: `/get-content-library-images`,
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
   * @tags ContentLibraryImage
   * @name GetContentLibraryImagesConnection
   * @request POST:/get-content-library-images-connection
   * @secure
   * @response `200` `ContentLibraryImageConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getContentLibraryImagesConnection = (
    data: GetContentLibraryImagesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ContentLibraryImageConnection, ErrorBody>({
      path: `/get-content-library-images-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
