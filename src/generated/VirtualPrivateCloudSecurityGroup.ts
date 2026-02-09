import {
  ErrorBody,
  GetVirtualPrivateCloudSecurityGroupsConnectionRequestBody,
  GetVirtualPrivateCloudSecurityGroupsRequestBody,
  VirtualPrivateCloudSecurityGroup,
  VirtualPrivateCloudSecurityGroupConnection,
  VirtualPrivateCloudSecurityGroupCreationParams,
  VirtualPrivateCloudSecurityGroupDeletionParams,
  VirtualPrivateCloudSecurityGroupUpdationParams,
  WithTaskDeleteVirtualPrivateCloudSecurityGroup,
  WithTaskVirtualPrivateCloudSecurityGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudSecurityGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudSecurityGroup
   * @name CreateVirtualPrivateCloudSecurityGroup
   * @request POST:/create-virtual-private-cloud-security-group
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudSecurityGroup = (
    data: VirtualPrivateCloudSecurityGroupCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSecurityGroup[], ErrorBody>({
      path: `/create-virtual-private-cloud-security-group`,
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
   * @tags VirtualPrivateCloudSecurityGroup
   * @name UpdateVirtualPrivateCloudSecurityGroup
   * @request POST:/update-virtual-private-cloud-security-group
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudSecurityGroup = (
    data: VirtualPrivateCloudSecurityGroupUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSecurityGroup[], ErrorBody>({
      path: `/update-virtual-private-cloud-security-group`,
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
   * @tags VirtualPrivateCloudSecurityGroup
   * @name DeleteVirtualPrivateCloudSecurityGroup
   * @request POST:/delete-virtual-private-cloud-security-group
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudSecurityGroup = (
    data: VirtualPrivateCloudSecurityGroupDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      WithTaskDeleteVirtualPrivateCloudSecurityGroup[],
      ErrorBody
    >({
      path: `/delete-virtual-private-cloud-security-group`,
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
   * @tags VirtualPrivateCloudSecurityGroup
   * @name GetVirtualPrivateCloudSecurityGroups
   * @request POST:/get-virtual-private-cloud-security-groups
   * @secure
   * @response `200` `(VirtualPrivateCloudSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSecurityGroups = (
    data: GetVirtualPrivateCloudSecurityGroupsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudSecurityGroup[], ErrorBody>({
      path: `/get-virtual-private-cloud-security-groups`,
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
   * @tags VirtualPrivateCloudSecurityGroup
   * @name GetVirtualPrivateCloudSecurityGroupsConnection
   * @request POST:/get-virtual-private-cloud-security-groups-connection
   * @secure
   * @response `200` `VirtualPrivateCloudSecurityGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSecurityGroupsConnection = (
    data: GetVirtualPrivateCloudSecurityGroupsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudSecurityGroupConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-security-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
