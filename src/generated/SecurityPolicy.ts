import {
  ErrorBody,
  GetSecurityPoliciesConnectionRequestBody,
  GetSecurityPoliciesRequestBody,
  SecurityPolicy,
  SecurityPolicyConnection,
  SecurityPolicyCreateParams,
  SecurityPolicyDeleteParams,
  SecurityPolicyUpdateBody,
  WithTaskDeleteSecurityPolicy,
  WithTaskSecurityPolicy,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SecurityPolicyApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SecurityPolicy
   * @name CreateSecurityPolicy
   * @request POST:/create-security-policy
   * @secure
   * @response `200` `WithTaskSecurityPolicy`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createSecurityPolicy = (
    data: SecurityPolicyCreateParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskSecurityPolicy, ErrorBody>({
      path: `/create-security-policy`,
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
   * @tags SecurityPolicy
   * @name DeleteSecurityPolicy
   * @request POST:/delete-security-policy
   * @secure
   * @response `200` `(WithTaskDeleteSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSecurityPolicy = (
    data: SecurityPolicyDeleteParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteSecurityPolicy[], ErrorBody>({
      path: `/delete-security-policy`,
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
   * @tags SecurityPolicy
   * @name UpdateSecurityPolicy
   * @request POST:/update-security-policy
   * @secure
   * @response `200` `(WithTaskSecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSecurityPolicy = (
    data: SecurityPolicyUpdateBody,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskSecurityPolicy[], ErrorBody>({
      path: `/update-security-policy`,
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
   * @tags SecurityPolicy
   * @name GetSecurityPolicies
   * @request POST:/get-security-policies
   * @secure
   * @response `200` `(SecurityPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityPolicies = (
    data: GetSecurityPoliciesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SecurityPolicy[], ErrorBody>({
      path: `/get-security-policies`,
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
   * @tags SecurityPolicy
   * @name GetSecurityPoliciesConnection
   * @request POST:/get-security-policies-connection
   * @secure
   * @response `200` `SecurityPolicyConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityPoliciesConnection = (
    data: GetSecurityPoliciesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SecurityPolicyConnection, ErrorBody>({
      path: `/get-security-policies-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
