import {
  ErrorBody,
  GetSecurityGroupsConnectionRequestBody,
  GetSecurityGroupsRequestBody,
  SecurityGroup,
  SecurityGroupConnection,
  SecurityGroupCreateParams,
  SecurityGroupDeleteParams,
  SecurityGroupUpdateBody,
  WithTaskDeleteSecurityGroup,
  WithTaskSecurityGroup,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SecurityGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SecurityGroup
   * @name CreateSecurityGroup
   * @request POST:/create-security-group
   * @secure
   * @response `200` `WithTaskSecurityGroup`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createSecurityGroup = (
    data: SecurityGroupCreateParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSecurityGroup, ErrorBody>({
      path: `/create-security-group`,
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
   * @tags SecurityGroup
   * @name DeleteSecurityGroup
   * @request POST:/delete-security-group
   * @secure
   * @response `200` `(WithTaskDeleteSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSecurityGroup = (
    data: SecurityGroupDeleteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteSecurityGroup[], ErrorBody>({
      path: `/delete-security-group`,
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
   * @tags SecurityGroup
   * @name UpdateSecurityGroup
   * @request POST:/update-security-group
   * @secure
   * @response `200` `(WithTaskSecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSecurityGroup = (
    data: SecurityGroupUpdateBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSecurityGroup[], ErrorBody>({
      path: `/update-security-group`,
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
   * @tags SecurityGroup
   * @name GetSecurityGroups
   * @request POST:/get-security-groups
   * @secure
   * @response `200` `(SecurityGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityGroups = (
    data: GetSecurityGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SecurityGroup[], ErrorBody>({
      path: `/get-security-groups`,
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
   * @tags SecurityGroup
   * @name GetSecurityGroupsConnection
   * @request POST:/get-security-groups-connection
   * @secure
   * @response `200` `SecurityGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSecurityGroupsConnection = (
    data: GetSecurityGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SecurityGroupConnection, ErrorBody>({
      path: `/get-security-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
