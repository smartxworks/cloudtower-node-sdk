import {
  AlertRule,
  AlertRuleConnection,
  ErrorBody,
  GetAlertRulesConnectionRequestBody,
  GetAlertRulesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AlertRuleApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AlertRule
   * @name GetAlertRules
   * @request POST:/get-alert-rules
   * @secure
   * @response `200` `(AlertRule)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertRules = (data: GetAlertRulesRequestBody, params: RequestParams = {}) =>
    this.http.request<AlertRule[], ErrorBody>({
      path: `/get-alert-rules`,
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
   * @tags AlertRule
   * @name GetAlertRulesConnection
   * @request POST:/get-alert-rules-connection
   * @secure
   * @response `200` `AlertRuleConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getAlertRulesConnection = (data: GetAlertRulesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<AlertRuleConnection, ErrorBody>({
      path: `/get-alert-rules-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
