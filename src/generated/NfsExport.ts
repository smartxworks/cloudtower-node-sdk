import {
  ErrorBody,
  GetNfsExportsConnectionRequestBody,
  GetNfsExportsRequestBody,
  NfsExport,
  NfsExportConnection,
  NfsExportCreationParams,
  NfsExportDeletionParams,
  NfsExportUpdationParams,
  WithTaskDeleteNfsExport,
  WithTaskNfsExport,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NfsExportApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NfsExport
   * @name CreateNfsExport
   * @request POST:/create-nfs-export
   * @secure
   * @response `200` `(WithTaskNfsExport)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNfsExport = (
    data: NfsExportCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNfsExport[], ErrorBody>({
      path: `/create-nfs-export`,
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
   * @tags NfsExport
   * @name UpdateNfsExport
   * @request POST:/update-nfs-export
   * @secure
   * @response `200` `(WithTaskNfsExport)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNfsExport = (
    data: NfsExportUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNfsExport[], ErrorBody>({
      path: `/update-nfs-export`,
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
   * @tags NfsExport
   * @name DeleteNfsExport
   * @request POST:/delete-nfs-export
   * @secure
   * @response `200` `(WithTaskDeleteNfsExport)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNfsExport = (
    data: NfsExportDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteNfsExport[], ErrorBody>({
      path: `/delete-nfs-export`,
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
   * @tags NfsExport
   * @name GetNfsExports
   * @request POST:/get-nfs-exports
   * @secure
   * @response `200` `(NfsExport)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNfsExports = (
    data: GetNfsExportsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NfsExport[], ErrorBody>({
      path: `/get-nfs-exports`,
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
   * @tags NfsExport
   * @name GetNfsExportsConnection
   * @request POST:/get-nfs-exports-connection
   * @secure
   * @response `200` `NfsExportConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNfsExportsConnection = (
    data: GetNfsExportsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NfsExportConnection, ErrorBody>({
      path: `/get-nfs-exports-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
