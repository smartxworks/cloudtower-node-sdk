import {
  DisassociateSystemServiceFromObsServiceParams,
  ErrorBody,
  WithTaskDisassociateSystemServiceFromObsServiceResult,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ObservabilityApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Observability
   * @name DisassociateSystemServiceFromObsService
   * @request POST:/disassociate-system-service-from-obs-service
   * @secure
   * @response `200` `WithTaskDisassociateSystemServiceFromObsServiceResult`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  disassociateSystemServiceFromObsService = (
    data: DisassociateSystemServiceFromObsServiceParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      WithTaskDisassociateSystemServiceFromObsServiceResult,
      ErrorBody
    >({
      path: `/disassociate-system-service-from-obs-service`,
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
   * @tags Observability
   * @name ClearSystemServiceAlertNotificationConfig
   * @request POST:/clear-system-service-alert-notification-config
   * @secure
   * @response `200` `WithTaskDisassociateSystemServiceFromObsServiceResult`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  clearSystemServiceAlertNotificationConfig = (
    data: DisassociateSystemServiceFromObsServiceParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      WithTaskDisassociateSystemServiceFromObsServiceResult,
      ErrorBody
    >({
      path: `/clear-system-service-alert-notification-config`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
