import {
  ErrorBody,
  GetVirtualPrivateCloudNatGatewaysConnectionRequestBody,
  GetVirtualPrivateCloudNatGatewaysRequestBody,
  VirtualPrivateCloudNatGateway,
  VirtualPrivateCloudNatGatewayConnection,
  VirtualPrivateCloudNatGatewayCreationParams,
  VirtualPrivateCloudNatGatewayDeletionParams,
  VirtualPrivateCloudNatGatewayUpdationParams,
  WithTaskDeleteVirtualPrivateCloudNatGateway,
  WithTaskVirtualPrivateCloudNatGateway,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudNatGatewayApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudNatGateway
   * @name CreateVirtualPrivateCloudNatGateway
   * @request POST:/create-virtual-private-cloud-nat-gateway
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudNatGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudNatGateway = (
    data: VirtualPrivateCloudNatGatewayCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudNatGateway[], ErrorBody>({
      path: `/create-virtual-private-cloud-nat-gateway`,
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
   * @tags VirtualPrivateCloudNatGateway
   * @name UpdateVirtualPrivateCloudNatGateway
   * @request POST:/update-virtual-private-cloud-nat-gateway
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudNatGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudNatGateway = (
    data: VirtualPrivateCloudNatGatewayUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudNatGateway[], ErrorBody>({
      path: `/update-virtual-private-cloud-nat-gateway`,
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
   * @tags VirtualPrivateCloudNatGateway
   * @name DeleteVirtualPrivateCloudNatGateway
   * @request POST:/delete-virtual-private-cloud-nat-gateway
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudNatGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudNatGateway = (
    data: VirtualPrivateCloudNatGatewayDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVirtualPrivateCloudNatGateway[], ErrorBody>(
      {
        path: `/delete-virtual-private-cloud-nat-gateway`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }
    );
  /**
   * No description
   *
   * @tags VirtualPrivateCloudNatGateway
   * @name GetVirtualPrivateCloudNatGateways
   * @request POST:/get-virtual-private-cloud-nat-gateways
   * @secure
   * @response `200` `(VirtualPrivateCloudNatGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudNatGateways = (
    data: GetVirtualPrivateCloudNatGatewaysRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudNatGateway[], ErrorBody>({
      path: `/get-virtual-private-cloud-nat-gateways`,
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
   * @tags VirtualPrivateCloudNatGateway
   * @name GetVirtualPrivateCloudNatGatewaysConnection
   * @request POST:/get-virtual-private-cloud-nat-gateways-connection
   * @secure
   * @response `200` `VirtualPrivateCloudNatGatewayConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudNatGatewaysConnection = (
    data: GetVirtualPrivateCloudNatGatewaysConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudNatGatewayConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-nat-gateways-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
