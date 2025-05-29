import {
  ErrorBody,
  GetVirtualPrivateCloudEdgeGatewayGroupsConnectionRequestBody,
  GetVirtualPrivateCloudEdgeGatewayGroupsRequestBody,
  VirtualPrivateCloudEdgeGatewayGroup,
  VirtualPrivateCloudEdgeGatewayGroupConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudEdgeGatewayGroupApi<
  SecurityDataType = unknown
> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudEdgeGatewayGroup
   * @name GetVirtualPrivateCloudEdgeGatewayGroups
   * @request POST:/get-virtual-private-cloud-edge-gateway-groups
   * @secure
   * @response `200` `(VirtualPrivateCloudEdgeGatewayGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudEdgeGatewayGroups = (
    data: GetVirtualPrivateCloudEdgeGatewayGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudEdgeGatewayGroup[], ErrorBody>({
      path: `/get-virtual-private-cloud-edge-gateway-groups`,
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
   * @tags VirtualPrivateCloudEdgeGatewayGroup
   * @name GetVirtualPrivateCloudEdgeGatewayGroupsConnection
   * @request POST:/get-virtual-private-cloud-edge-gateway-groups-connection
   * @secure
   * @response `200` `VirtualPrivateCloudEdgeGatewayGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudEdgeGatewayGroupsConnection = (
    data: GetVirtualPrivateCloudEdgeGatewayGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudEdgeGatewayGroupConnection, ErrorBody>(
      {
        path: `/get-virtual-private-cloud-edge-gateway-groups-connection`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }
    );
}
