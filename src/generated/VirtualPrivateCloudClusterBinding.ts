import {
  ErrorBody,
  GetVirtualPrivateCloudClusterBindingsConnectionRequestBody,
  GetVirtualPrivateCloudClusterBindingsRequestBody,
  VirtualPrivateCloudClusterBinding,
  VirtualPrivateCloudClusterBindingConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudClusterBindingApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudClusterBinding
   * @name GetVirtualPrivateCloudClusterBindings
   * @request POST:/get-virtual-private-cloud-cluster-bindings
   * @secure
   * @response `200` `(VirtualPrivateCloudClusterBinding)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudClusterBindings = (
    data: GetVirtualPrivateCloudClusterBindingsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudClusterBinding[], ErrorBody>({
      path: `/get-virtual-private-cloud-cluster-bindings`,
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
   * @tags VirtualPrivateCloudClusterBinding
   * @name GetVirtualPrivateCloudClusterBindingsConnection
   * @request POST:/get-virtual-private-cloud-cluster-bindings-connection
   * @secure
   * @response `200` `VirtualPrivateCloudClusterBindingConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudClusterBindingsConnection = (
    data: GetVirtualPrivateCloudClusterBindingsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudClusterBindingConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-cluster-bindings-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
