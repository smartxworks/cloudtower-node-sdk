import {
  BatchCreateVirtualPrivateCloudFloatingIpsParams,
  ErrorBody,
  GetVirtualPrivateCloudFloatingIpsConnectionRequestBody,
  GetVirtualPrivateCloudFloatingIpsRequestBody,
  VirtualPrivateCloudFloatingIp,
  VirtualPrivateCloudFloatingIpConnection,
  VirtualPrivateCloudFloatingIpCreationParams,
  VirtualPrivateCloudFloatingIpDeletionParams,
  WithTaskBatchCreateVirtualPrivateCloudFloatingIp,
  WithTaskDeleteVirtualPrivateCloudFloatingIp,
  WithTaskVirtualPrivateCloudFloatingIp,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudFloatingIpApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudFloatingIp
   * @name CreateVirtualPrivateCloudFloatingIp
   * @request POST:/create-virtual-private-cloud-floating-ip
   * @deprecated
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudFloatingIp)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudFloatingIp = (
    data: VirtualPrivateCloudFloatingIpCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudFloatingIp[], ErrorBody>({
      path: `/create-virtual-private-cloud-floating-ip`,
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
   * @tags VirtualPrivateCloudFloatingIp
   * @name DeleteVirtualPrivateCloudFloatingIp
   * @request POST:/delete-virtual-private-cloud-floating-ip
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudFloatingIp)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudFloatingIp = (
    data: VirtualPrivateCloudFloatingIpDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteVirtualPrivateCloudFloatingIp[], ErrorBody>(
      {
        path: `/delete-virtual-private-cloud-floating-ip`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags VirtualPrivateCloudFloatingIp
   * @name BatchCreateVirtualPrivateCloudFloatingIps
   * @request POST:/batch-create-virtual-private-cloud-floating-ips
   * @secure
   * @response `200` `(WithTaskBatchCreateVirtualPrivateCloudFloatingIp)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  batchCreateVirtualPrivateCloudFloatingIps = (
    data: BatchCreateVirtualPrivateCloudFloatingIpsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      WithTaskBatchCreateVirtualPrivateCloudFloatingIp[],
      ErrorBody
    >({
      path: `/batch-create-virtual-private-cloud-floating-ips`,
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
   * @tags VirtualPrivateCloudFloatingIp
   * @name GetVirtualPrivateCloudFloatingIps
   * @request POST:/get-virtual-private-cloud-floating-ips
   * @secure
   * @response `200` `(VirtualPrivateCloudFloatingIp)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudFloatingIps = (
    data: GetVirtualPrivateCloudFloatingIpsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudFloatingIp[], ErrorBody>({
      path: `/get-virtual-private-cloud-floating-ips`,
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
   * @tags VirtualPrivateCloudFloatingIp
   * @name GetVirtualPrivateCloudFloatingIpsConnection
   * @request POST:/get-virtual-private-cloud-floating-ips-connection
   * @secure
   * @response `200` `VirtualPrivateCloudFloatingIpConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudFloatingIpsConnection = (
    data: GetVirtualPrivateCloudFloatingIpsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudFloatingIpConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-floating-ips-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
