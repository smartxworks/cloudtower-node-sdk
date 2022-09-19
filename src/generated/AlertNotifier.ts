import {
  AlertNotifier,
  AlertNotifierConnection,
  AlertNotifierUpdationParams,
  ErrorBody,
  GetAlertNotifiersConnectionRequestBody,
  GetAlertNotifiersRequestBody,
  WithTaskAlertNotifier,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AlertNotifierApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AlertNotifier
   * @name GetAlertNotifiers
   * @request POST:/get-alert-notifiers
   * @secure
   * @response `200` `(AlertNotifier)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertNotifiers = (data: GetAlertNotifiersRequestBody, params: RequestParams = {}) =>
    this.http.request<AlertNotifier[], ErrorBody>({
      path: `/get-alert-notifiers`,
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
   * @tags AlertNotifier
   * @name GetAlertNotifiersConnection
   * @request POST:/get-alert-notifiers-connection
   * @secure
   * @response `200` `AlertNotifierConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertNotifiersConnection = (data: GetAlertNotifiersConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<AlertNotifierConnection, ErrorBody>({
      path: `/get-alert-notifiers-connection`,
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
   * @tags AlertNotifier
   * @name UpdateAlertNotifier
   * @request POST:/update-alert-notifier
   * @response `200` `WithTaskAlertNotifier` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateAlertNotifier = (data: AlertNotifierUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskAlertNotifier, ErrorBody>({
      path: `/update-alert-notifier`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
