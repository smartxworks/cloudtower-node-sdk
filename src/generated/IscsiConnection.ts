import {
  ErrorBody,
  GetIscsiConnectionsConnectionRequestBody,
  GetIscsiConnectionsRequestBody,
  IscsiConnection,
  IscsiConnectionConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IscsiConnectionApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IscsiConnection
   * @name GetIscsiConnections
   * @request POST:/get-iscsi-connections
   * @secure
   * @response `200` `(IscsiConnection)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiConnections = (
    data: GetIscsiConnectionsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IscsiConnection[], ErrorBody>({
      path: `/get-iscsi-connections`,
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
   * @tags IscsiConnection
   * @name GetIscsiConnectionsConnection
   * @request POST:/get-iscsi-connections-connection
   * @secure
   * @response `200` `IscsiConnectionConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiConnectionsConnection = (
    data: GetIscsiConnectionsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IscsiConnectionConnection, ErrorBody>({
      path: `/get-iscsi-connections-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
