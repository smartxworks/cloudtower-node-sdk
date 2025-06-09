import {
  DeleteIsolationPolicy,
  ErrorBody,
  GetIsolationPoliciesConnectionRequestBody,
  GetIsolationPoliciesRequestBody,
  IsolationPolicy,
  IsolationPolicyConnection,
  IsolationPolicyCreateParams,
  IsolationPolicyDeleteParams,
  IsolationPolicyUpdateBody,
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
   * @name CreateIsolationPolicy
   * @request POST:/create-isolation-policy
   * @secure
   * @response `200` `IsolationPolicy`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createIsolationPolicy = (
    data: IsolationPolicyCreateParams,
    params: RequestParams = {}
  ) =>
    this.http.request<IsolationPolicy, ErrorBody>({
      path: `/create-isolation-policy`,
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
   * @name UpdateIsolationPolicy
   * @request POST:/update-isolation-policy
   * @secure
   * @response `200` `(IsolationPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateIsolationPolicy = (
    data: IsolationPolicyUpdateBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IsolationPolicy[], ErrorBody>({
      path: `/update-isolation-policy`,
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
   * @name DeleteIsolationPolicy
   * @request POST:/delete-isolation-policy
   * @secure
   * @response `200` `(DeleteIsolationPolicy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteIsolationPolicy = (
    data: IsolationPolicyDeleteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleteIsolationPolicy[], ErrorBody>({
      path: `/delete-isolation-policy`,
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
   * @name GetIsolationPolicies
   * @request POST:/get-isolation-policies
   * @secure
   * @response `200` `(IsolationPolicy)[]`
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
   * @response `200` `IsolationPolicyConnection`
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
