import {
  ErrorBody,
  GetSyncReplicationPlansConnectionRequestBody,
  GetSyncReplicationPlansRequestBody,
  SyncReplicationPlan,
  SyncReplicationPlanConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SyncReplicationPlanApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SyncReplicationPlan
   * @name GetSyncReplicationPlans
   * @request POST:/get-sync-replication-plans
   * @secure
   * @response `200` `(SyncReplicationPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSyncReplicationPlans = (
    data: GetSyncReplicationPlansRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SyncReplicationPlan[], ErrorBody>({
      path: `/get-sync-replication-plans`,
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
   * @tags SyncReplicationPlan
   * @name GetSyncReplicationPlansConnection
   * @request POST:/get-sync-replication-plans-connection
   * @secure
   * @response `200` `SyncReplicationPlanConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSyncReplicationPlansConnection = (
    data: GetSyncReplicationPlansConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SyncReplicationPlanConnection, ErrorBody>({
      path: `/get-sync-replication-plans-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
