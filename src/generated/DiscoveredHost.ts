import {
  DiscoveredHost,
  ErrorBody,
  GetDiscoverHostsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DiscoveredHostApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags DiscoveredHost
   * @name GetDiscoverHosts
   * @request POST:/get-discover-hosts
   * @secure
   * @response `200` `(DiscoveredHost)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDiscoverHosts = (
    data: GetDiscoverHostsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DiscoveredHost[], ErrorBody>({
      path: `/get-discover-hosts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
