import {
  ErrorBody,
  GetNvmfSubsystemsConnectionRequestBody,
  GetNvmfSubsystemsRequestBody,
  NvmfSubsystem,
  NvmfSubsystemConnection,
  NvmfSubsystemCreationParams,
  NvmfSubsystemDeletionParams,
  NvmfSubsystemUpdationParams,
  WithTaskDeleteNvmfSubsystem,
  WithTaskNvmfSubsystem,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NvmfSubsystemApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NvmfSubsystem
   * @name CreateNvmfSubsystem
   * @request POST:/create-nvmf-subsystem
   * @secure
   * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNvmfSubsystem = (data: NvmfSubsystemCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskNvmfSubsystem[], ErrorBody>({
      path: `/create-nvmf-subsystem`,
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
   * @tags NvmfSubsystem
   * @name UpdateNvmfSubsystem
   * @request POST:/update-nvmf-subsystem
   * @secure
   * @response `200` `(WithTaskNvmfSubsystem)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNvmfSubsystem = (data: NvmfSubsystemUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskNvmfSubsystem[], ErrorBody>({
      path: `/update-nvmf-subsystem`,
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
   * @tags NvmfSubsystem
   * @name DeleteNvmfSubsystem
   * @request POST:/delete-nvmf-subsystem
   * @secure
   * @response `200` `(WithTaskDeleteNvmfSubsystem)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNvmfSubsystem = (data: NvmfSubsystemDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteNvmfSubsystem[], ErrorBody>({
      path: `/delete-nvmf-subsystem`,
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
   * @tags NvmfSubsystem
   * @name GetNvmfSubsystems
   * @request POST:/get-nvmf-subsystems
   * @secure
   * @response `200` `(NvmfSubsystem)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfSubsystems = (data: GetNvmfSubsystemsRequestBody, params: RequestParams = {}) =>
    this.http.request<NvmfSubsystem[], ErrorBody>({
      path: `/get-nvmf-subsystems`,
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
   * @tags NvmfSubsystem
   * @name GetNvmfSubsystemsConnection
   * @request POST:/get-nvmf-subsystems-connection
   * @secure
   * @response `200` `NvmfSubsystemConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfSubsystemsConnection = (data: GetNvmfSubsystemsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<NvmfSubsystemConnection, ErrorBody>({
      path: `/get-nvmf-subsystems-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
