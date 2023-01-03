import {
  ErrorBody,
  GetUserRoleNextsConnectionRequestBody,
  GetUserRoleNextsRequestBody,
  RoleCreationParams,
  RoleDeletionParams,
  RoleUpdationParams,
  UserRoleNext,
  UserRoleNextConnection,
  WithTaskDeleteRole,
  WithTaskUserRoleNext,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserRoleNextApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserRoleNext
   * @name CreateRole
   * @request POST:/create-role
   * @secure
   * @response `200` `(WithTaskUserRoleNext)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createRole = (data: RoleCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskUserRoleNext[], ErrorBody>({
      path: `/create-role`,
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
   * @tags UserRoleNext
   * @name UpdateRole
   * @request POST:/update-role
   * @secure
   * @response `200` `(WithTaskUserRoleNext)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateRole = (data: RoleUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskUserRoleNext[], ErrorBody>({
      path: `/update-role`,
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
   * @tags UserRoleNext
   * @name DeleteRole
   * @request POST:/delete-role
   * @secure
   * @response `200` `(WithTaskDeleteRole)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteRole = (data: RoleDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteRole[], ErrorBody>({
      path: `/delete-role`,
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
   * @tags UserRoleNext
   * @name GetUserRoleNexts
   * @request POST:/get-user-role-nexts
   * @secure
   * @response `200` `(UserRoleNext)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUserRoleNexts = (
    data: GetUserRoleNextsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UserRoleNext[], ErrorBody>({
      path: `/get-user-role-nexts`,
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
   * @tags UserRoleNext
   * @name GetUserRoleNextsConnection
   * @request POST:/get-user-role-nexts-connection
   * @secure
   * @response `200` `UserRoleNextConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUserRoleNextsConnection = (
    data: GetUserRoleNextsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UserRoleNextConnection, ErrorBody>({
      path: `/get-user-role-nexts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
