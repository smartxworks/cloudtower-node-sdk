import {
  ElfImage,
  ElfImageConnection,
  ElfImageDeletionParams,
  ElfImageUpdationParams,
  ErrorBody,
  GetElfImagesConnectionRequestBody,
  GetElfImagesRequestBody,
  UploadTask,
  WithTaskDeleteElfImage,
  WithTaskElfImage,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ElfImageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ElfImage
   * @name CreateElfImage
   * @request POST:/upload-elf-image
   * @secure
   * @response `200` `(UploadTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createElfImage = (
    data: {
      file: File;
      cluster_id?: string;
      name?: string;
      size?: string;
      size_unit?: string;
      description?: string;
      upload_task_id?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<UploadTask[], ErrorBody>({
      path: `/upload-elf-image`,
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
   * @tags ElfImage
   * @name UpdateElfImage
   * @request POST:/update-elf-image
   * @secure
   * @response `200` `(WithTaskElfImage)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateElfImage = (data: ElfImageUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskElfImage[], ErrorBody>({
      path: `/update-elf-image`,
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
   * @tags ElfImage
   * @name DeleteElfImage
   * @request POST:/delete-elf-image
   * @secure
   * @response `200` `(WithTaskDeleteElfImage)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteElfImage = (data: ElfImageDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteElfImage[], ErrorBody>({
      path: `/delete-elf-image`,
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
   * @tags ElfImage
   * @name GetElfImages
   * @request POST:/get-elf-images
   * @secure
   * @response `200` `(ElfImage)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfImages = (data: GetElfImagesRequestBody, params: RequestParams = {}) =>
    this.http.request<ElfImage[], ErrorBody>({
      path: `/get-elf-images`,
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
   * @tags ElfImage
   * @name GetElfImagesConnection
   * @request POST:/get-elf-images-connection
   * @secure
   * @response `200` `ElfImageConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfImagesConnection = (
    data: GetElfImagesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ElfImageConnection, ErrorBody>({
      path: `/get-elf-images-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
