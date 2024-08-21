import {
  AlertNotifier,
  AlertNotifierConnection,
  AlertNotifierCreationParams,
  AlertNotifierManyUpdationParams,
  AlertNotifierUpdationParams,
  DeleteAlertNotifierParams,
  ErrorBody,
  GetAlertNotifiersConnectionRequestBody,
  GetAlertNotifiersRequestBody,
  WithTaskAlertNotifier,
  WithTaskDeleteAlertNotifier,
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
   * @response `200` `(AlertNotifier)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertNotifiers = (
    data: GetAlertNotifiersRequestBody,
    params: RequestParams = {}
  ) =>
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
   * @response `200` `AlertNotifierConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertNotifiersConnection = (
    data: GetAlertNotifiersConnectionRequestBody,
    params: RequestParams = {}
  ) =>
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
   * @name CreateAlertNotifier
   * @request POST:/create-alert-notifier
   * @secure
   * @response `200` `(WithTaskAlertNotifier)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createAlertNotifier = (
    data: AlertNotifierCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskAlertNotifier[], ErrorBody>({
      path: `/create-alert-notifier`,
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
   * @secure
   * @response `200` `WithTaskAlertNotifier`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateAlertNotifier = (
    data: AlertNotifierUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskAlertNotifier, ErrorBody>({
      path: `/update-alert-notifier`,
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
   * @name UpdateManyAlertNotifiers
   * @request POST:/update-many-alert-notifiers
   * @secure
   * @response `200` `(WithTaskAlertNotifier)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateManyAlertNotifiers = (
    data: AlertNotifierManyUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskAlertNotifier[], ErrorBody>({
      path: `/update-many-alert-notifiers`,
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
   * @name DeleteAlertNotifier
   * @request POST:/delete-alert-notifier
   * @secure
   * @response `200` `(WithTaskDeleteAlertNotifier)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteAlertNotifier = (
    data: DeleteAlertNotifierParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteAlertNotifier[], ErrorBody>({
      path: `/delete-alert-notifier`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
