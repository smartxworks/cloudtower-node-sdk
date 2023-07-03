import {
  ErrorBody,
  GetVmExportFilesConnectionRequestBody,
  GetVmExportFilesRequestBody,
  VmExportFile,
  VmExportFileConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmExportFileApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmExportFile
   * @name GetVmExportFiles
   * @request POST:/get-vm-export-files
   * @secure
   * @response `200` `(VmExportFile)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmExportFiles = (
    data: GetVmExportFilesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmExportFile[], ErrorBody>({
      path: `/get-vm-export-files`,
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
   * @tags VmExportFile
   * @name GetVmExportFilesConnection
   * @request POST:/get-vm-export-files-connection
   * @secure
   * @response `200` `VmExportFileConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmExportFilesConnection = (
    data: GetVmExportFilesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmExportFileConnection, ErrorBody>({
      path: `/get-vm-export-files-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
