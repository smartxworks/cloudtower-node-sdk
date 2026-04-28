import {
  ErrorBody,
  GetVirtualPrivateCloudExternalSubnetsConnectionRequestBody,
  GetVirtualPrivateCloudExternalSubnetsRequestBody,
  VirtualPrivateCloudExternalSubnet,
  VirtualPrivateCloudExternalSubnetConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudExternalSubnetApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudExternalSubnet
   * @name GetVirtualPrivateCloudExternalSubnets
   * @request POST:/get-virtual-private-cloud-external-subnets
   * @secure
   * @response `200` `(VirtualPrivateCloudExternalSubnet)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudExternalSubnets = (
    data: GetVirtualPrivateCloudExternalSubnetsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudExternalSubnet[], ErrorBody>({
      path: `/get-virtual-private-cloud-external-subnets`,
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
   * @tags VirtualPrivateCloudExternalSubnet
   * @name GetVirtualPrivateCloudExternalSubnetsConnection
   * @request POST:/get-virtual-private-cloud-external-subnets-connection
   * @secure
   * @response `200` `VirtualPrivateCloudExternalSubnetConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudExternalSubnetsConnection = (
    data: GetVirtualPrivateCloudExternalSubnetsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudExternalSubnetConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-external-subnets-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
