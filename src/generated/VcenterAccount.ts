import {
  CreateVcenterAccountParams,
  ErrorBody,
  GetVcenterAccountsConnectionRequestBody,
  GetVcenterAccountsRequestBody,
  UpdateVcenterAccountParams,
  VcenterAccount,
  VcenterAccountConnection,
  WithTaskVcenterAccount,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VcenterAccountApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VcenterAccount
   * @name CreateVcenterAccount
   * @request POST:/create-vcenter-account
   * @secure
   * @response `200` `WithTaskVcenterAccount` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVcenterAccount = (data: CreateVcenterAccountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVcenterAccount, ErrorBody>({
      path: `/create-vcenter-account`,
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
   * @tags VcenterAccount
   * @name UpdateVcenterAccount
   * @request POST:/update-vcenter-account
   * @secure
   * @response `200` `WithTaskVcenterAccount` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVcenterAccount = (data: UpdateVcenterAccountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVcenterAccount, ErrorBody>({
      path: `/update-vcenter-account`,
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
   * @tags VcenterAccount
   * @name GetVcenterAccounts
   * @request POST:/get-vcenter-accounts
   * @secure
   * @response `200` `(VcenterAccount)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVcenterAccounts = (data: GetVcenterAccountsRequestBody, params: RequestParams = {}) =>
    this.http.request<VcenterAccount[], ErrorBody>({
      path: `/get-vcenter-accounts`,
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
   * @tags VcenterAccount
   * @name GetVcenterAccountsConnection
   * @request POST:/get-vcenter-accounts-connection
   * @secure
   * @response `200` `VcenterAccountConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVcenterAccountsConnection = (data: GetVcenterAccountsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<VcenterAccountConnection, ErrorBody>({
      path: `/get-vcenter-accounts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
