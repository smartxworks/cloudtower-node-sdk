import {
  ErrorBody,
  GetReplicationServicesConnectionRequestBody,
  GetReplicationServicesRequestBody,
  ReplicationService,
  ReplicationServiceConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReplicationServiceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReplicationService
   * @name GetReplicationServices
   * @request POST:/get-replication-services
   * @secure
   * @response `200` `(ReplicationService)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicationServices = (
    data: GetReplicationServicesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ReplicationService[], ErrorBody>({
      path: `/get-replication-services`,
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
   * @tags ReplicationService
   * @name GetReplicationServicesConnection
   * @request POST:/get-replication-services-connection
   * @secure
   * @response `200` `ReplicationServiceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicationServicesConnection = (
    data: GetReplicationServicesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ReplicationServiceConnection, ErrorBody>({
      path: `/get-replication-services-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
