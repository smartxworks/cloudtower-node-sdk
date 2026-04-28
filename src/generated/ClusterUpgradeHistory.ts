import {
  ClusterUpgradeHistory,
  ClusterUpgradeHistoryConnection,
  ErrorBody,
  GetClusterUpgradeHistoriesConnectionRequestBody,
  GetClusterUpgradeHistoriesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterUpgradeHistoryApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ClusterUpgradeHistory
   * @name GetClusterUpgradeHistories
   * @request POST:/get-cluster-upgrade-histories
   * @secure
   * @response `200` `(ClusterUpgradeHistory)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterUpgradeHistories = (
    data: GetClusterUpgradeHistoriesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterUpgradeHistory[], ErrorBody>({
      path: `/get-cluster-upgrade-histories`,
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
   * @tags ClusterUpgradeHistory
   * @name GetClusterUpgradeHistoriesConnection
   * @request POST:/get-cluster-upgrade-histories-connection
   * @secure
   * @response `200` `ClusterUpgradeHistoryConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterUpgradeHistoriesConnection = (
    data: GetClusterUpgradeHistoriesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterUpgradeHistoryConnection, ErrorBody>({
      path: `/get-cluster-upgrade-histories-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
