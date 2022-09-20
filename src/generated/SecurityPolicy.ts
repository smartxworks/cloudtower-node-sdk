import {
  ErrorBody,
  GetSecurityPoliciesConnectionRequestBody,
  GetSecurityPoliciesRequestBody,
  SecurityPolicy,
  SecurityPolicyConnection,
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
   * @name GetSecurityPolicies
   * @request POST:/get-security-policies
   * @secure
   * @response `200` `(SecurityPolicy)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityPolicies = (
    data: GetSecurityPoliciesRequestBody,
    params: RequestParams = {}
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
   * @response `200` `SecurityPolicyConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityPoliciesConnection = (
    data: GetSecurityPoliciesConnectionRequestBody,
    params: RequestParams = {}
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
