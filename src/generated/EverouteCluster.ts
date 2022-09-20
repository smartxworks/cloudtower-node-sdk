import {
  ErrorBody,
  EverouteCluster,
  EverouteClusterConnection,
  GetEverouteClustersConnectionRequestBody,
  GetEverouteClustersRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EverouteClusterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags EverouteCluster
   * @name GetEverouteClusters
   * @request POST:/get-everoute-clusters
   * @secure
   * @response `200` `(EverouteCluster)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEverouteClusters = (
    data: GetEverouteClustersRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EverouteCluster[], ErrorBody>({
      path: `/get-everoute-clusters`,
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
   * @tags EverouteCluster
   * @name GetEverouteClustersConnection
   * @request POST:/get-everoute-clusters-connection
   * @secure
   * @response `200` `EverouteClusterConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEverouteClustersConnection = (
    data: GetEverouteClustersConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EverouteClusterConnection, ErrorBody>({
      path: `/get-everoute-clusters-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
