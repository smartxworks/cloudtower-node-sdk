import {
  ErrorBody,
  GetVirtualPrivateCloudSubnetsConnectionRequestBody,
  GetVirtualPrivateCloudSubnetsRequestBody,
  VirtualPrivateCloudSubnet,
  VirtualPrivateCloudSubnetConnection,
  VirtualPrivateCloudSubnetCreationParams,
  VirtualPrivateCloudSubnetDeletionParams,
  VirtualPrivateCloudSubnetUpdationParams,
  WithTaskDeleteVirtualPrivateCloudSubnet,
  WithTaskVirtualPrivateCloudSubnet,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudSubnetApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudSubnet
   * @name CreateVirtualPrivateCloudSubnet
   * @request POST:/create-virtual-private-cloud-subnet
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSubnet)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudSubnet = (
    data: VirtualPrivateCloudSubnetCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSubnet[], ErrorBody>({
      path: `/create-virtual-private-cloud-subnet`,
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
   * @tags VirtualPrivateCloudSubnet
   * @name UpdateVirtualPrivateCloudSubnet
   * @request POST:/update-virtual-private-cloud-subnet
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSubnet)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudSubnet = (
    data: VirtualPrivateCloudSubnetUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSubnet[], ErrorBody>({
      path: `/update-virtual-private-cloud-subnet`,
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
   * @tags VirtualPrivateCloudSubnet
   * @name DeleteVirtualPrivateCloudSubnet
   * @request POST:/delete-virtual-private-cloud-subnet
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudSubnet)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudSubnet = (
    data: VirtualPrivateCloudSubnetDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteVirtualPrivateCloudSubnet[], ErrorBody>({
      path: `/delete-virtual-private-cloud-subnet`,
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
   * @tags VirtualPrivateCloudSubnet
   * @name GetVirtualPrivateCloudSubnets
   * @request POST:/get-virtual-private-cloud-subnets
   * @secure
   * @response `200` `(VirtualPrivateCloudSubnet)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSubnets = (
    data: GetVirtualPrivateCloudSubnetsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudSubnet[], ErrorBody>({
      path: `/get-virtual-private-cloud-subnets`,
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
   * @tags VirtualPrivateCloudSubnet
   * @name GetVirtualPrivateCloudSubnetsConnection
   * @request POST:/get-virtual-private-cloud-subnets-connection
   * @secure
   * @response `200` `VirtualPrivateCloudSubnetConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSubnetsConnection = (
    data: GetVirtualPrivateCloudSubnetsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudSubnetConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-subnets-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
