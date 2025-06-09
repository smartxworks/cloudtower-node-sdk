import {
  ErrorBody,
  GetReplicationPlansConnectionRequestBody,
  GetReplicationPlansRequestBody,
  ReplicationPlan,
  ReplicationPlanConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReplicationPlanApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReplicationPlan
   * @name GetReplicationPlans
   * @request POST:/get-replication-plans
   * @secure
   * @response `200` `(ReplicationPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicationPlans = (
    data: GetReplicationPlansRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReplicationPlan[], ErrorBody>({
      path: `/get-replication-plans`,
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
   * @tags ReplicationPlan
   * @name GetReplicationPlansConnection
   * @request POST:/get-replication-plans-connection
   * @secure
   * @response `200` `ReplicationPlanConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicationPlansConnection = (
    data: GetReplicationPlansConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReplicationPlanConnection, ErrorBody>({
      path: `/get-replication-plans-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
