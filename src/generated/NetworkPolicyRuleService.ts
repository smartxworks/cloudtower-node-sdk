import {
  ErrorBody,
  GetNetworkPolicyRuleServicesConnectionRequestBody,
  GetNetworkPolicyRuleServicesRequestBody,
  NetworkPolicyRuleService,
  NetworkPolicyRuleServiceConnection,
  NetworkPolicyRuleServiceCreationParams,
  NetworkPolicyRuleServiceDeletionParams,
  NetworkPolicyRuleServiceUpdationParams,
  WithTaskDeleteNetworkPolicyRuleService,
  WithTaskNetworkPolicyRuleService,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NetworkPolicyRuleServiceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NetworkPolicyRuleService
   * @name CreateNetworkPolicyRuleService
   * @request POST:/create-network-policy-rule-service
   * @secure
   * @response `200` `(WithTaskNetworkPolicyRuleService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNetworkPolicyRuleService = (
    data: NetworkPolicyRuleServiceCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNetworkPolicyRuleService[], ErrorBody>({
      path: `/create-network-policy-rule-service`,
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
   * @tags NetworkPolicyRuleService
   * @name UpdateNetworkPolicyRuleService
   * @request POST:/update-network-policy-rule-service
   * @secure
   * @response `200` `(WithTaskNetworkPolicyRuleService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNetworkPolicyRuleService = (
    data: NetworkPolicyRuleServiceUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskNetworkPolicyRuleService[], ErrorBody>({
      path: `/update-network-policy-rule-service`,
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
   * @tags NetworkPolicyRuleService
   * @name DeleteNetworkPolicyRuleService
   * @request POST:/delete-network-policy-rule-service
   * @secure
   * @response `200` `(WithTaskDeleteNetworkPolicyRuleService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNetworkPolicyRuleService = (
    data: NetworkPolicyRuleServiceDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteNetworkPolicyRuleService[], ErrorBody>({
      path: `/delete-network-policy-rule-service`,
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
   * @tags NetworkPolicyRuleService
   * @name GetNetworkPolicyRuleServices
   * @request POST:/get-network-policy-rule-services
   * @secure
   * @response `200` `(NetworkPolicyRuleService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNetworkPolicyRuleServices = (
    data: GetNetworkPolicyRuleServicesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NetworkPolicyRuleService[], ErrorBody>({
      path: `/get-network-policy-rule-services`,
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
   * @tags NetworkPolicyRuleService
   * @name GetNetworkPolicyRuleServicesConnection
   * @request POST:/get-network-policy-rule-services-connection
   * @secure
   * @response `200` `NetworkPolicyRuleServiceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNetworkPolicyRuleServicesConnection = (
    data: GetNetworkPolicyRuleServicesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NetworkPolicyRuleServiceConnection, ErrorBody>({
      path: `/get-network-policy-rule-services-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
