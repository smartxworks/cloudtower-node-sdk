import {
  ErrorBody,
  GetVirtualPrivateCloudsConnectionRequestBody,
  GetVirtualPrivateCloudsRequestBody,
  VirtualPrivateCloud,
  VirtualPrivateCloudConnection,
  VirtualPrivateCloudCreationParams,
  VirtualPrivateCloudDeletionParams,
  VirtualPrivateCloudUpdationParams,
  WithTaskDeleteVirtualPrivateCloud,
  WithTaskVirtualPrivateCloud,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloud
   * @name CreateVirtualPrivateCloud
   * @request POST:/create-virtual-private-cloud
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloud)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloud = (
    data: VirtualPrivateCloudCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloud[], ErrorBody>({
      path: `/create-virtual-private-cloud`,
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
   * @tags VirtualPrivateCloud
   * @name UpdateVirtualPrivateCloud
   * @request POST:/update-virtual-private-cloud
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloud)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloud = (
    data: VirtualPrivateCloudUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVirtualPrivateCloud[], ErrorBody>({
      path: `/update-virtual-private-cloud`,
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
   * @tags VirtualPrivateCloud
   * @name DeleteVirtualPrivateCloud
   * @request POST:/delete-virtual-private-cloud
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloud)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloud = (
    data: VirtualPrivateCloudDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteVirtualPrivateCloud[], ErrorBody>({
      path: `/delete-virtual-private-cloud`,
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
   * @tags VirtualPrivateCloud
   * @name GetVirtualPrivateClouds
   * @request POST:/get-virtual-private-clouds
   * @secure
   * @response `200` `(VirtualPrivateCloud)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateClouds = (
    data: GetVirtualPrivateCloudsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloud[], ErrorBody>({
      path: `/get-virtual-private-clouds`,
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
   * @tags VirtualPrivateCloud
   * @name GetVirtualPrivateCloudsConnection
   * @request POST:/get-virtual-private-clouds-connection
   * @secure
   * @response `200` `VirtualPrivateCloudConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudsConnection = (
    data: GetVirtualPrivateCloudsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VirtualPrivateCloudConnection, ErrorBody>({
      path: `/get-virtual-private-clouds-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
