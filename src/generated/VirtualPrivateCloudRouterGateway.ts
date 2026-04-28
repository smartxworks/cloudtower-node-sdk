import {
  ErrorBody,
  GetVirtualPrivateCloudRouterGatewaysConnectionRequestBody,
  GetVirtualPrivateCloudRouterGatewaysRequestBody,
  VirtualPrivateCloudRouterGateway,
  VirtualPrivateCloudRouterGatewayConnection,
  VirtualPrivateCloudRouterGatewayCreationParams,
  VirtualPrivateCloudRouterGatewayDeletionParams,
  VirtualPrivateCloudRouterGatewayUpdationParams,
  WithTaskDeleteVirtualPrivateCloudRouterGateway,
  WithTaskVirtualPrivateCloudRouterGateway,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudRouterGatewayApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudRouterGateway
   * @name CreateVirtualPrivateCloudRouterGateway
   * @request POST:/create-virtual-private-cloud-router-gateway
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudRouterGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudRouterGateway = (
    data: VirtualPrivateCloudRouterGatewayCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudRouterGateway[], ErrorBody>({
      path: `/create-virtual-private-cloud-router-gateway`,
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
   * @tags VirtualPrivateCloudRouterGateway
   * @name UpdateVirtualPrivateCloudRouterGateway
   * @request POST:/update-virtual-private-cloud-router-gateway
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudRouterGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudRouterGateway = (
    data: VirtualPrivateCloudRouterGatewayUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudRouterGateway[], ErrorBody>({
      path: `/update-virtual-private-cloud-router-gateway`,
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
   * @tags VirtualPrivateCloudRouterGateway
   * @name DeleteVirtualPrivateCloudRouterGateway
   * @request POST:/delete-virtual-private-cloud-router-gateway
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudRouterGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudRouterGateway = (
    data: VirtualPrivateCloudRouterGatewayDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      WithTaskDeleteVirtualPrivateCloudRouterGateway[],
      ErrorBody
    >({
      path: `/delete-virtual-private-cloud-router-gateway`,
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
   * @tags VirtualPrivateCloudRouterGateway
   * @name GetVirtualPrivateCloudRouterGateways
   * @request POST:/get-virtual-private-cloud-router-gateways
   * @secure
   * @response `200` `(VirtualPrivateCloudRouterGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudRouterGateways = (
    data: GetVirtualPrivateCloudRouterGatewaysRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudRouterGateway[], ErrorBody>({
      path: `/get-virtual-private-cloud-router-gateways`,
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
   * @tags VirtualPrivateCloudRouterGateway
   * @name GetVirtualPrivateCloudRouterGatewaysConnection
   * @request POST:/get-virtual-private-cloud-router-gateways-connection
   * @secure
   * @response `200` `VirtualPrivateCloudRouterGatewayConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudRouterGatewaysConnection = (
    data: GetVirtualPrivateCloudRouterGatewaysConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudRouterGatewayConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-router-gateways-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
