import {
  CustomizeAlertRuleUpdationParams,
  ErrorBody,
  GetGlobalAlertRulesConnectionRequestBody,
  GetGlobalAlertRulesRequestBody,
  GlobalAlertRule,
  GlobalAlertRuleConnection,
  GlobalAlertRuleUpdationParams,
  WithTaskGlobalAlertRule,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GlobalAlertRuleApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags GlobalAlertRule
   * @name UpdateGlobalAlertRule
   * @request POST:/update-global-alert-rule
   * @secure
   * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateGlobalAlertRule = (data: GlobalAlertRuleUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskGlobalAlertRule[], ErrorBody>({
      path: `/update-global-alert-rule`,
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
   * @tags GlobalAlertRule
   * @name UpdateCustomizeAlertRule
   * @request POST:/update-customize-alert-rule
   * @secure
   * @response `200` `(WithTaskGlobalAlertRule)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateCustomizeAlertRule = (data: CustomizeAlertRuleUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskGlobalAlertRule[], ErrorBody>({
      path: `/update-customize-alert-rule`,
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
   * @tags GlobalAlertRule
   * @name GetGlobalAlertRules
   * @request POST:/get-global-alert-rules
   * @secure
   * @response `200` `(GlobalAlertRule)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGlobalAlertRules = (data: GetGlobalAlertRulesRequestBody, params: RequestParams = {}) =>
    this.http.request<GlobalAlertRule[], ErrorBody>({
      path: `/get-global-alert-rules`,
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
   * @tags GlobalAlertRule
   * @name GetGlobalAlertRulesConnection
   * @request POST:/get-global-alert-rules-connection
   * @secure
   * @response `200` `GlobalAlertRuleConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGlobalAlertRulesConnection = (data: GetGlobalAlertRulesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<GlobalAlertRuleConnection, ErrorBody>({
      path: `/get-global-alert-rules-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
