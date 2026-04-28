import {
  ErrorBody,
  ResourceChangeLimit,
  ResourceChangeResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ResourceChangeApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ResourceChange, Internal
   * @name GetResourceChanges
   * @request GET:/resource-changes
   * @secure
   * @response `200` `ResourceChangeResponse`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getResourceChanges = (
    query?: {
      action?: string;
      resource_type?: string;
      resource_id?: string;
      start_revision?: string;
      limit?: ResourceChangeLimit;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResourceChangeResponse, ErrorBody>({
      path: `/resource-changes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
