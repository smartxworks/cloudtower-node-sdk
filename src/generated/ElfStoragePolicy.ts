import {
  ElfStoragePolicy,
  ElfStoragePolicyConnection,
  ErrorBody,
  GetElfStoragePoliciesConnectionRequestBody,
  GetElfStoragePoliciesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ElfStoragePolicyApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ElfStoragePolicy
   * @name GetElfStoragePolicies
   * @request POST:/get-elf-storage-policies
   * @secure
   * @response `200` `(ElfStoragePolicy)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfStoragePolicies = (data: GetElfStoragePoliciesRequestBody, params: RequestParams = {}) =>
    this.http.request<ElfStoragePolicy[], ErrorBody>({
      path: `/get-elf-storage-policies`,
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
   * @tags ElfStoragePolicy
   * @name GetElfStoragePoliciesConnection
   * @request POST:/get-elf-storage-policies-connection
   * @secure
   * @response `200` `ElfStoragePolicyConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfStoragePoliciesConnection = (data: GetElfStoragePoliciesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ElfStoragePolicyConnection, ErrorBody>({
      path: `/get-elf-storage-policies-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
