import {
  ErrorBody,
  GetRegistryServicesConnectionRequestBody,
  GetRegistryServicesRequestBody,
  RegistryService,
  RegistryServiceConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RegistryServiceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags RegistryService
   * @name GetRegistryServices
   * @request POST:/get-registry-services
   * @secure
   * @response `200` `(RegistryService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getRegistryServices = (
    data: GetRegistryServicesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<RegistryService[], ErrorBody>({
      path: `/get-registry-services`,
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
   * @tags RegistryService
   * @name GetRegistryServicesConnection
   * @request POST:/get-registry-services-connection
   * @secure
   * @response `200` `RegistryServiceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getRegistryServicesConnection = (
    data: GetRegistryServicesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<RegistryServiceConnection, ErrorBody>({
      path: `/get-registry-services-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
