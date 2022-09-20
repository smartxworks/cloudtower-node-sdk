import {
  ErrorBody,
  GetUsersConnectionRequestBody,
  GetUsersRequestBody,
  LoginInput,
  RootUserCreationParams,
  User,
  UserConnection,
  UserCreationParams,
  UserDeletionParams,
  UserUpdationParams,
  WithTaskDeleteUser,
  WithTaskTokenString,
  WithTaskUser,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags User
   * @name Login
   * @request POST:/login
   * @response `200` `WithTaskTokenString` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  login = (data: LoginInput, params: RequestParams = {}) =>
    this.http.request<WithTaskTokenString, ErrorBody>({
      path: `/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name CreateUser
   * @request POST:/create-user
   * @secure
   * @response `200` `(WithTaskUser)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createUser = (data: UserCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskUser[], ErrorBody>({
      path: `/create-user`,
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
   * @tags User
   * @name UpdateUser
   * @request POST:/update-user
   * @secure
   * @response `200` `(WithTaskUser)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateUser = (data: UserUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskUser[], ErrorBody>({
      path: `/update-user`,
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
   * @tags User
   * @name DeleteUser
   * @request POST:/delete-user
   * @secure
   * @response `200` `(WithTaskDeleteUser)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteUser = (data: UserDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteUser[], ErrorBody>({
      path: `/delete-user`,
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
   * @tags User
   * @name CreateRootUser
   * @request POST:/create-root-user
   * @response `200` `WithTaskUser` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createRootUser = (data: RootUserCreationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskUser, ErrorBody>({
      path: `/create-root-user`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name GetMyInfo
   * @request POST:/get-my-info
   * @response `200` `User` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getMyInfo = (params: RequestParams = {}) =>
    this.http.request<User, ErrorBody>({
      path: `/get-my-info`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name GetUsers
   * @request POST:/get-users
   * @secure
   * @response `200` `(User)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUsers = (data: GetUsersRequestBody, params: RequestParams = {}) =>
    this.http.request<User[], ErrorBody>({
      path: `/get-users`,
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
   * @tags User
   * @name GetUsersConnection
   * @request POST:/get-users-connection
   * @secure
   * @response `200` `UserConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUsersConnection = (
    data: GetUsersConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UserConnection, ErrorBody>({
      path: `/get-users-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
