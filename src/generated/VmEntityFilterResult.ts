import {
  ErrorBody,
  GetVmEntityFilterResultsConnectionRequestBody,
  GetVmEntityFilterResultsRequestBody,
  VmEntityFilterResult,
  VmEntityFilterResultConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmEntityFilterResultApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmEntityFilterResult
   * @name GetVmEntityFilterResults
   * @request POST:/get-vm-entity-filter-results
   * @secure
   * @response `200` `(VmEntityFilterResult)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmEntityFilterResults = (data: GetVmEntityFilterResultsRequestBody, params: RequestParams = {}) =>
    this.http.request<VmEntityFilterResult[], ErrorBody>({
      path: `/get-vm-entity-filter-results`,
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
   * @tags VmEntityFilterResult
   * @name GetVmEntityFilterResultsConnection
   * @request POST:/get-vm-entity-filter-results-connection
   * @secure
   * @response `200` `VmEntityFilterResultConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmEntityFilterResultsConnection = (
    data: GetVmEntityFilterResultsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VmEntityFilterResultConnection, ErrorBody>({
      path: `/get-vm-entity-filter-results-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
