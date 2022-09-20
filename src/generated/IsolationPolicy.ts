import {
  ErrorBody,
  GetIsolationPoliciesConnectionRequestBody,
  GetIsolationPoliciesRequestBody,
  IsolationPolicy,
  IsolationPolicyConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IsolationPolicyApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IsolationPolicy
   * @name GetIsolationPolicies
   * @request POST:/get-isolation-policies
   * @secure
   * @response `200` `(IsolationPolicy)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIsolationPolicies = (
    data: GetIsolationPoliciesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IsolationPolicy[], ErrorBody>({
      path: `/get-isolation-policies`,
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
   * @tags IsolationPolicy
   * @name GetIsolationPoliciesConnection
   * @request POST:/get-isolation-policies-connection
   * @secure
   * @response `200` `IsolationPolicyConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIsolationPoliciesConnection = (
    data: GetIsolationPoliciesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IsolationPolicyConnection, ErrorBody>({
      path: `/get-isolation-policies-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
