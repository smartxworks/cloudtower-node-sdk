import {
  ClusterTopo,
  ClusterTopoConnection,
  ErrorBody,
  GetClusterTopoesConnectionRequestBody,
  GetClusterTopoesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterTopoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ClusterTopo
   * @name GetClusterTopoes
   * @request POST:/get-cluster-topoes
   * @secure
   * @response `200` `(ClusterTopo)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterTopoes = (data: GetClusterTopoesRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterTopo[], ErrorBody>({
      path: `/get-cluster-topoes`,
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
   * @tags ClusterTopo
   * @name GetClusterTopoesConnection
   * @request POST:/get-cluster-topoes-connection
   * @secure
   * @response `200` `ClusterTopoConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterTopoesConnection = (data: GetClusterTopoesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterTopoConnection, ErrorBody>({
      path: `/get-cluster-topoes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
