import {
  ErrorBody,
  GetVmPlacementGroupsConnectionRequestBody,
  GetVmPlacementGroupsRequestBody,
  VmPlacementGroup,
  VmPlacementGroupConnection,
  VmPlacementGroupCreationParams,
  VmPlacementGroupDeletionParams,
  VmPlacementGroupUpdationParams,
  WithTaskDeleteVmPlacementGroup,
  WithTaskVmPlacementGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmPlacementGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmPlacementGroup
   * @name CreateVmPlacementGroup
   * @request POST:/create-vm-placement-group
   * @secure
   * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmPlacementGroup = (
    data: VmPlacementGroupCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmPlacementGroup[], ErrorBody>({
      path: `/create-vm-placement-group`,
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
   * @tags VmPlacementGroup
   * @name UpdateVmPlacementGroup
   * @request POST:/update-vm-placement-group
   * @secure
   * @response `200` `(WithTaskVmPlacementGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmPlacementGroup = (
    data: VmPlacementGroupUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmPlacementGroup[], ErrorBody>({
      path: `/update-vm-placement-group`,
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
   * @tags VmPlacementGroup
   * @name DeleteVmPlacementGroup
   * @request POST:/delete-vm-placement-group
   * @secure
   * @response `200` `(WithTaskDeleteVmPlacementGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmPlacementGroup = (
    data: VmPlacementGroupDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVmPlacementGroup[], ErrorBody>({
      path: `/delete-vm-placement-group`,
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
   * @tags VmPlacementGroup
   * @name GetVmPlacementGroups
   * @request POST:/get-vm-placement-groups
   * @secure
   * @response `200` `(VmPlacementGroup)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmPlacementGroups = (
    data: GetVmPlacementGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmPlacementGroup[], ErrorBody>({
      path: `/get-vm-placement-groups`,
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
   * @tags VmPlacementGroup
   * @name GetVmPlacementGroupsConnection
   * @request POST:/get-vm-placement-groups-connection
   * @secure
   * @response `200` `VmPlacementGroupConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmPlacementGroupsConnection = (
    data: GetVmPlacementGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmPlacementGroupConnection, ErrorBody>({
      path: `/get-vm-placement-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
