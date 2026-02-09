import {
  ErrorBody,
  GetSvtImagesConnectionRequestBody,
  GetSvtImagesRequestBody,
  SvtImage,
  SvtImageConnection,
  UploadTask,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SvtImageApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SvtImage
   * @name UploadSvtImage
   * @request POST:/upload-svt-image
   * @secure
   * @response `200` `(UploadTask)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  uploadSvtImage = (
    data: {
      /** @format binary */
      file: File;
      cluster_id?: string;
      name?: string;
      size?: string;
      size_unit?: string;
      version?: string;
      upload_task_id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<UploadTask[], ErrorBody>({
      path: `/upload-svt-image`,
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
   * @tags SvtImage
   * @name GetSvtImages
   * @request POST:/get-svt-images
   * @secure
   * @response `200` `(SvtImage)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSvtImages = (data: GetSvtImagesRequestBody, params: RequestParams = {}) =>
    this.http.request<SvtImage[], ErrorBody>({
      path: `/get-svt-images`,
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
   * @tags SvtImage
   * @name GetSvtImagesConnection
   * @request POST:/get-svt-images-connection
   * @secure
   * @response `200` `SvtImageConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSvtImagesConnection = (
    data: GetSvtImagesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SvtImageConnection, ErrorBody>({
      path: `/get-svt-images-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
