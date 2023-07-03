import {
  ErrorBody,
  ExportFileDownloadLinks,
  GetExportFileDownloadLinksParams,
  ParsedOVF,
  UploadTask,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class OvfApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Ovf
   * @name UploadElfFile
   * @request POST:/upload-elf-file
   * @secure
   * @response `200` `UploadTask`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  uploadElfFile = (
    data: {
      file: File;
      cluster_id?: string;
      name?: string;
      size?: string;
      size_unit?: string;
      upload_task_id?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<UploadTask, ErrorBody>({
      path: `/upload-elf-file`,
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
   * @tags Ovf
   * @name ParseOvf
   * @request POST:/parse-ovf
   * @secure
   * @response `200` `ParsedOVF`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  parseOvf = (
    data: { file: File; cluster_id: string },
    params: RequestParams = {}
  ) =>
    this.http.request<ParsedOVF, ErrorBody>({
      path: `/parse-ovf`,
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
   * @tags Ovf
   * @name GetExportFileDownloadLinks
   * @request POST:/get-export-file-download-links
   * @secure
   * @response `200` `(ExportFileDownloadLinks)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getExportFileDownloadLinks = (
    data: GetExportFileDownloadLinksParams,
    params: RequestParams = {}
  ) =>
    this.http.request<ExportFileDownloadLinks[], ErrorBody>({
      path: `/get-export-file-download-links`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
