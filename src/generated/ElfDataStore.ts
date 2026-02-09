import {
  ElfDataStore,
  ElfDataStoreConnection,
  ErrorBody,
  GetElfDataStoresConnectionRequestBody,
  GetElfDataStoresRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ElfDataStoreApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ElfDataStore
   * @name GetElfDataStores
   * @request POST:/get-elf-data-stores
   * @secure
   * @response `200` `(ElfDataStore)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfDataStores = (
    data: GetElfDataStoresRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ElfDataStore[], ErrorBody>({
      path: `/get-elf-data-stores`,
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
   * @tags ElfDataStore
   * @name GetElfDataStoresConnection
   * @request POST:/get-elf-data-stores-connection
   * @secure
   * @response `200` `ElfDataStoreConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getElfDataStoresConnection = (
    data: GetElfDataStoresConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ElfDataStoreConnection, ErrorBody>({
      path: `/get-elf-data-stores-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
