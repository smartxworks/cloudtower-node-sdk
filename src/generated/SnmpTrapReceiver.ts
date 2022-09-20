import {
  ErrorBody,
  GetSnmpTrapReceiversConnectionRequestBody,
  GetSnmpTrapReceiversRequestBody,
  SnmpTrapReceiver,
  SnmpTrapReceiverConnection,
  SnmpTrapReceiverCreationParams,
  SnmpTrapReceiverDeletionParams,
  SnmpTrapReceiverUpdationParams,
  WithTaskDeleteSnmpTrapReceiver,
  WithTaskSnmpTrapReceiver,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SnmpTrapReceiverApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SnmpTrapReceiver
   * @name CreateSnmpTrapReceiver
   * @request POST:/create-snmp-trap-receiver
   * @secure
   * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createSnmpTrapReceiver = (
    data: SnmpTrapReceiverCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnmpTrapReceiver[], ErrorBody>({
      path: `/create-snmp-trap-receiver`,
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
   * @tags SnmpTrapReceiver
   * @name UpdateSnmpTrapReceiver
   * @request POST:/update-snmp-trap-receiver
   * @secure
   * @response `200` `(WithTaskSnmpTrapReceiver)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSnmpTrapReceiver = (
    data: SnmpTrapReceiverUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnmpTrapReceiver[], ErrorBody>({
      path: `/update-snmp-trap-receiver`,
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
   * @tags SnmpTrapReceiver
   * @name DeleteSnmpTrapReceiver
   * @request POST:/delete-snmp-trap-receiver
   * @secure
   * @response `200` `(WithTaskDeleteSnmpTrapReceiver)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSnmpTrapReceiver = (
    data: SnmpTrapReceiverDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteSnmpTrapReceiver[], ErrorBody>({
      path: `/delete-snmp-trap-receiver`,
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
   * @tags SnmpTrapReceiver
   * @name GetSnmpTrapReceivers
   * @request POST:/get-snmp-trap-receivers
   * @secure
   * @response `200` `(SnmpTrapReceiver)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnmpTrapReceivers = (
    data: GetSnmpTrapReceiversRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnmpTrapReceiver[], ErrorBody>({
      path: `/get-snmp-trap-receivers`,
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
   * @tags SnmpTrapReceiver
   * @name GetSnmpTrapReceiversConnection
   * @request POST:/get-snmp-trap-receivers-connection
   * @secure
   * @response `200` `SnmpTrapReceiverConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnmpTrapReceiversConnection = (
    data: GetSnmpTrapReceiversConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnmpTrapReceiverConnection, ErrorBody>({
      path: `/get-snmp-trap-receivers-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
