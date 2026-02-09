import {
  Alert,
  AlertConnection,
  ErrorBody,
  GetAlertsConnectionRequestBody,
  GetAlertsRequestBody,
  ResolveAlertParams,
  WithTaskAlert,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AlertApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Alert
   * @name ResolveAlert
   * @request POST:/resolve-alert
   * @secure
   * @response `200` `(WithTaskAlert)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  resolveAlert = (data: ResolveAlertParams, params: RequestParams = {}) =>
    this.http.request<WithTaskAlert[], ErrorBody>({
      path: `/resolve-alert`,
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
   * @tags Alert
   * @name GetAlerts
   * @request POST:/get-alerts
   * @secure
   * @response `200` `(Alert)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlerts = (data: GetAlertsRequestBody, params: RequestParams = {}) =>
    this.http.request<Alert[], ErrorBody>({
      path: `/get-alerts`,
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
   * @tags Alert
   * @name GetAlertsConnection
   * @request POST:/get-alerts-connection
   * @secure
   * @response `200` `AlertConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertsConnection = (
    data: GetAlertsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<AlertConnection, ErrorBody>({
      path: `/get-alerts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
