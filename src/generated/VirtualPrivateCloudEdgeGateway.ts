import {
  ErrorBody,
  GetVirtualPrivateCloudEdgeGatewaysConnectionRequestBody,
  GetVirtualPrivateCloudEdgeGatewaysRequestBody,
  VirtualPrivateCloudEdgeGateway,
  VirtualPrivateCloudEdgeGatewayConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudEdgeGatewayApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudEdgeGateway
   * @name GetVirtualPrivateCloudEdgeGateways
   * @request POST:/get-virtual-private-cloud-edge-gateways
   * @secure
   * @response `200` `(VirtualPrivateCloudEdgeGateway)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudEdgeGateways = (
    data: GetVirtualPrivateCloudEdgeGatewaysRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudEdgeGateway[], ErrorBody>({
      path: `/get-virtual-private-cloud-edge-gateways`,
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
   * @tags VirtualPrivateCloudEdgeGateway
   * @name GetVirtualPrivateCloudEdgeGatewaysConnection
   * @request POST:/get-virtual-private-cloud-edge-gateways-connection
   * @secure
   * @response `200` `VirtualPrivateCloudEdgeGatewayConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudEdgeGatewaysConnection = (
    data: GetVirtualPrivateCloudEdgeGatewaysConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudEdgeGatewayConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-edge-gateways-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
