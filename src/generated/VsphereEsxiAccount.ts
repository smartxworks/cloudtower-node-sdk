import {
  ErrorBody,
  GetVsphereEsxiAccountsConnectionRequestBody,
  GetVsphereEsxiAccountsRequestBody,
  UpdateVsphereEsxiAccountParams,
  VsphereEsxiAccount,
  VsphereEsxiAccountConnection,
  WithTaskVsphereEsxiAccountArray,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VsphereEsxiAccountApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VsphereEsxiAccount
   * @name UpdateVsphereEsxiAccount
   * @request POST:/update-vsphere-esxi-account
   * @secure
   * @response `200` `(WithTaskVsphereEsxiAccountArray)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVsphereEsxiAccount = (
    data: UpdateVsphereEsxiAccountParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskVsphereEsxiAccountArray[], void | ErrorBody>({
      path: `/update-vsphere-esxi-account`,
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
   * @tags VsphereEsxiAccount
   * @name GetVsphereEsxiAccounts
   * @request POST:/get-vsphere-esxi-accounts
   * @secure
   * @response `200` `(VsphereEsxiAccount)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVsphereEsxiAccounts = (
    data: GetVsphereEsxiAccountsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VsphereEsxiAccount[], ErrorBody>({
      path: `/get-vsphere-esxi-accounts`,
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
   * @tags VsphereEsxiAccount
   * @name GetVsphereEsxiAccountsConnection
   * @request POST:/get-vsphere-esxi-accounts-connection
   * @secure
   * @response `200` `VsphereEsxiAccountConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVsphereEsxiAccountsConnection = (
    data: GetVsphereEsxiAccountsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VsphereEsxiAccountConnection, ErrorBody>({
      path: `/get-vsphere-esxi-accounts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
