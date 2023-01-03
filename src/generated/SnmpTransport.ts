import {
  ErrorBody,
  GetSnmpTransportsConnectionRequestBody,
  GetSnmpTransportsRequestBody,
  SnmpTransport,
  SnmpTransportConnection,
  SnmpTransportCreationParams,
  SnmpTransportDeletionParams,
  SnmpTransportUpdationParams,
  WithTaskDeleteSnmpTransport,
  WithTaskSnmpTransport,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SnmpTransportApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SnmpTransport
   * @name CreateSnmpTransport
   * @request POST:/create-snmp-transport
   * @secure
   * @response `200` `(WithTaskSnmpTransport)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createSnmpTransport = (
    data: SnmpTransportCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnmpTransport[], ErrorBody>({
      path: `/create-snmp-transport`,
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
   * @tags SnmpTransport
   * @name UpdateSnmpTransport
   * @request POST:/update-snmp-transport
   * @secure
   * @response `200` `(WithTaskSnmpTransport)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSnmpTransport = (
    data: SnmpTransportUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskSnmpTransport[], ErrorBody>({
      path: `/update-snmp-transport`,
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
   * @tags SnmpTransport
   * @name DeleteSnmpTransport
   * @request POST:/delete-snmp-transport
   * @secure
   * @response `200` `(WithTaskDeleteSnmpTransport)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteSnmpTransport = (
    data: SnmpTransportDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteSnmpTransport[], ErrorBody>({
      path: `/delete-snmp-transport`,
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
   * @tags SnmpTransport
   * @name GetSnmpTransports
   * @request POST:/get-snmp-transports
   * @secure
   * @response `200` `(SnmpTransport)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnmpTransports = (
    data: GetSnmpTransportsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnmpTransport[], ErrorBody>({
      path: `/get-snmp-transports`,
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
   * @tags SnmpTransport
   * @name GetSnmpTransportsConnection
   * @request POST:/get-snmp-transports-connection
   * @secure
   * @response `200` `SnmpTransportConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSnmpTransportsConnection = (
    data: GetSnmpTransportsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SnmpTransportConnection, ErrorBody>({
      path: `/get-snmp-transports-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
