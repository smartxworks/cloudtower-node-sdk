import {
  ErrorBody,
  GetVdsesConnectionRequestBody,
  GetVdsesRequestBody,
  Vds,
  VdsConnection,
  VdsCreationParams,
  VdsCreationWithMAccessVlanParams,
  VdsCreationWithMigrateVlanParams,
  VdsDeletionParams,
  VdsUpdationParams,
  WithTaskDeleteVds,
  WithTaskVds,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VdsApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Vds
   * @name CreateVdsWithMigrateVlan
   * @request POST:/create-vds-with-migrate-vlan
   * @secure
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVdsWithMigrateVlan = (data: VdsCreationWithMigrateVlanParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVds[], ErrorBody>({
      path: `/create-vds-with-migrate-vlan`,
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
   * @tags Vds
   * @name CreateVdsWithAccessVlan
   * @request POST:/create-vds-with-access-vlan
   * @secure
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVdsWithAccessVlan = (data: VdsCreationWithMAccessVlanParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVds[], ErrorBody>({
      path: `/create-vds-with-access-vlan`,
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
   * @tags Vds
   * @name CreateVds
   * @request POST:/create-vds
   * @secure
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVds = (data: VdsCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVds[], ErrorBody>({
      path: `/create-vds`,
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
   * @tags Vds
   * @name UpdateVds
   * @request POST:/update-vds
   * @secure
   * @response `200` `(WithTaskVds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVds = (data: VdsUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVds[], ErrorBody>({
      path: `/update-vds`,
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
   * @tags Vds
   * @name DeleteVds
   * @request POST:/delete-vds
   * @secure
   * @response `200` `(WithTaskDeleteVds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVds = (data: VdsDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVds[], ErrorBody>({
      path: `/delete-vds`,
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
   * @tags Vds
   * @name GetVdses
   * @request POST:/get-vdses
   * @secure
   * @response `200` `(Vds)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVdses = (data: GetVdsesRequestBody, params: RequestParams = {}) =>
    this.http.request<Vds[], ErrorBody>({
      path: `/get-vdses`,
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
   * @tags Vds
   * @name GetVdsesConnection
   * @request POST:/get-vdses-connection
   * @secure
   * @response `200` `VdsConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVdsesConnection = (data: GetVdsesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<VdsConnection, ErrorBody>({
      path: `/get-vdses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
