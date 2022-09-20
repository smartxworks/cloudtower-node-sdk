import {
  ErrorBody,
  GetVlansConnectionRequestBody,
  GetVlansRequestBody,
  ManagementVlanUpdationParams,
  MigrationVlanUpdationParams,
  Vlan,
  VlanConnection,
  VlanDeletionParams,
  VmVlanCreationParams,
  VmVlanUpdationParams,
  WithTaskDeleteVlan,
  WithTaskVlan,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VlanApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Vlan
   * @name CreateVmVlan
   * @request POST:/create-vm-vlan
   * @secure
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmVlan = (data: VmVlanCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVlan[], ErrorBody>({
      path: `/create-vm-vlan`,
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
   * @tags Vlan
   * @name UpdateVlan
   * @request POST:/update-vm-vlan
   * @secure
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVlan = (data: VmVlanUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVlan[], ErrorBody>({
      path: `/update-vm-vlan`,
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
   * @tags Vlan
   * @name UpdateManagementVlan
   * @request POST:/update-management-vlan
   * @secure
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateManagementVlan = (
    data: ManagementVlanUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVlan[], ErrorBody>({
      path: `/update-management-vlan`,
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
   * @tags Vlan
   * @name UpdateMigrationVlan
   * @request POST:/update-migration-vlan
   * @secure
   * @response `200` `(WithTaskVlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateMigrationVlan = (
    data: MigrationVlanUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVlan[], ErrorBody>({
      path: `/update-migration-vlan`,
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
   * @tags Vlan
   * @name DeleteVlan
   * @request POST:/delete-vm-vlan
   * @secure
   * @response `200` `(WithTaskDeleteVlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVlan = (data: VlanDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVlan[], ErrorBody>({
      path: `/delete-vm-vlan`,
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
   * @tags Vlan
   * @name GetVlans
   * @request POST:/get-vlans
   * @secure
   * @response `200` `(Vlan)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVlans = (data: GetVlansRequestBody, params: RequestParams = {}) =>
    this.http.request<Vlan[], ErrorBody>({
      path: `/get-vlans`,
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
   * @tags Vlan
   * @name GetVlansConnection
   * @request POST:/get-vlans-connection
   * @secure
   * @response `200` `VlanConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVlansConnection = (
    data: GetVlansConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VlanConnection, ErrorBody>({
      path: `/get-vlans-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
