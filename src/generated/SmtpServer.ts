import {
  ErrorBody,
  GetSmtpServersConnectionRequestBody,
  GetSmtpServersRequestBody,
  SmtpServer,
  SmtpServerConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class SmtpServerApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SmtpServer
   * @name GetSmtpServers
   * @request POST:/get-smtp-servers
   * @secure
   * @response `200` `(SmtpServer)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSmtpServers = (
    data: GetSmtpServersRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SmtpServer[], ErrorBody>({
      path: `/get-smtp-servers`,
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
   * @tags SmtpServer
   * @name GetSmtpServersConnection
   * @request POST:/get-smtp-servers-connection
   * @secure
   * @response `200` `SmtpServerConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getSmtpServersConnection = (
    data: GetSmtpServersConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<SmtpServerConnection, ErrorBody>({
      path: `/get-smtp-servers-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
