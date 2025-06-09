import {
  ErrorBody,
  GetReplicaVmsConnectionRequestBody,
  GetReplicaVmsRequestBody,
  ReplicaVm,
  ReplicaVmConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReplicaVmApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReplicaVm
   * @name GetReplicaVms
   * @request POST:/get-replica-vms
   * @secure
   * @response `200` `(ReplicaVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicaVms = (
    data: GetReplicaVmsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReplicaVm[], ErrorBody>({
      path: `/get-replica-vms`,
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
   * @tags ReplicaVm
   * @name GetReplicaVmsConnection
   * @request POST:/get-replica-vms-connection
   * @secure
   * @response `200` `ReplicaVmConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReplicaVmsConnection = (
    data: GetReplicaVmsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReplicaVmConnection, ErrorBody>({
      path: `/get-replica-vms-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
