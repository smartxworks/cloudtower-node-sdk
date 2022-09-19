import {
  ClusterSettings,
  ClusterSettingsConnection,
  ErrorBody,
  GetClusterSettingsesConnectionRequestBody,
  GetClusterSettingsesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterSettingsApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ClusterSettings
   * @name GetClusterSettingses
   * @request POST:/get-cluster-settingses
   * @secure
   * @response `200` `(ClusterSettings)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterSettingses = (data: GetClusterSettingsesRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterSettings[], ErrorBody>({
      path: `/get-cluster-settingses`,
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
   * @tags ClusterSettings
   * @name GetClusterSettingsesConnection
   * @request POST:/get-cluster-settingses-connection
   * @secure
   * @response `200` `ClusterSettingsConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterSettingsesConnection = (data: GetClusterSettingsesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ClusterSettingsConnection, ErrorBody>({
      path: `/get-cluster-settingses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
