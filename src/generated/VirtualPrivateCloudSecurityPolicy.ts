import {
  ErrorBody,
  GetVirtualPrivateCloudSecurityPoliciesConnectionRequestBody,
  GetVirtualPrivateCloudSecurityPoliciesRequestBody,
  VirtualPrivateCloudSecurityPolicy,
  VirtualPrivateCloudSecurityPolicyConnection,
  VirtualPrivateCloudSecurityPolicyCreateParams,
  VirtualPrivateCloudSecurityPolicyDeleteParams,
  VirtualPrivateCloudSecurityPolicyUpdateBody,
  WithTaskDeleteVirtualPrivateCloudSecurityPolicy,
  WithTaskVirtualPrivateCloudSecurityPolicy,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudSecurityPolicyApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudSecurityPolicy
   * @name CreateVirtualPrivateCloudSecurityPolicy
   * @request POST:/create-virtual-private-cloud-security-policy
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudSecurityPolicy = (
    data: VirtualPrivateCloudSecurityPolicyCreateParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSecurityPolicy[], ErrorBody>({
      path: `/create-virtual-private-cloud-security-policy`,
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
   * @tags VirtualPrivateCloudSecurityPolicy
   * @name DeleteVirtualPrivateCloudSecurityPolicy
   * @request POST:/delete-virtual-private-cloud-security-policy
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudSecurityPolicy = (
    data: VirtualPrivateCloudSecurityPolicyDeleteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      WithTaskDeleteVirtualPrivateCloudSecurityPolicy[],
      ErrorBody
    >({
      path: `/delete-virtual-private-cloud-security-policy`,
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
   * @tags VirtualPrivateCloudSecurityPolicy
   * @name UpdateVirtualPrivateCloudSecurityPolicy
   * @request POST:/update-virtual-private-cloud-security-policy
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudSecurityPolicy = (
    data: VirtualPrivateCloudSecurityPolicyUpdateBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudSecurityPolicy[], ErrorBody>({
      path: `/update-virtual-private-cloud-security-policy`,
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
   * @tags VirtualPrivateCloudSecurityPolicy
   * @name GetVirtualPrivateCloudSecurityPolicies
   * @request POST:/get-virtual-private-cloud-security-policies
   * @secure
   * @response `200` `(VirtualPrivateCloudSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSecurityPolicies = (
    data: GetVirtualPrivateCloudSecurityPoliciesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudSecurityPolicy[], ErrorBody>({
      path: `/get-virtual-private-cloud-security-policies`,
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
   * @tags VirtualPrivateCloudSecurityPolicy
   * @name GetVirtualPrivateCloudSecurityPoliciesConnection
   * @request POST:/get-virtual-private-cloud-security-policies-connection
   * @secure
   * @response `200` `VirtualPrivateCloudSecurityPolicyConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudSecurityPoliciesConnection = (
    data: GetVirtualPrivateCloudSecurityPoliciesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudSecurityPolicyConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-security-policies-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
