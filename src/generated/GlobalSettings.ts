import {
  ClusterRecycleBinCreationParams,
  ClusterRecycleBinDeletionParams,
  ClusterRecycleBinUpdationParams,
  ErrorBody,
  GetGlobalSettingsesConnectionRequestBody,
  GetGlobalSettingsesRequestBody,
  GlobalRecycleBinUpdationParams,
  GlobalSettings,
  GlobalSettingsConnection,
  UpdateAccessRestrictionParams,
  UpdatePassrodSecurityParams,
  UpdateSessionTimeoutParams,
  WithTaskClusterSettings,
  WithTaskDeleteClusterRecycleBin,
  WithTaskGlobalSettings,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GlobalSettingsApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags GlobalSettings
   * @name UpdateGlobalRecycleBinSetting
   * @request POST:/update-global-recycle-bin-setting
   * @secure
   * @response `200` `WithTaskGlobalSettings`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateGlobalRecycleBinSetting = (
    data: GlobalRecycleBinUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskGlobalSettings, ErrorBody>({
      path: `/update-global-recycle-bin-setting`,
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
   * @tags GlobalSettings
   * @name CreateClusterRecycleBinSetting
   * @request POST:/create-cluster-recycle-bin-setting
   * @secure
   * @response `200` `(WithTaskClusterSettings)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createClusterRecycleBinSetting = (
    data: ClusterRecycleBinCreationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterSettings[], ErrorBody>({
      path: `/create-cluster-recycle-bin-setting`,
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
   * @tags GlobalSettings
   * @name UpdateClusterRecycleBinSetting
   * @request POST:/update-cluster-recycle-bin-setting
   * @secure
   * @response `200` `(WithTaskClusterSettings)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterRecycleBinSetting = (
    data: ClusterRecycleBinUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterSettings[], ErrorBody>({
      path: `/update-cluster-recycle-bin-setting`,
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
   * @tags GlobalSettings
   * @name DeleteClusterRecycleBinSetting
   * @request POST:/delete-cluster-recycle-bin-setting
   * @secure
   * @response `200` `(WithTaskDeleteClusterRecycleBin)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteClusterRecycleBinSetting = (
    data: ClusterRecycleBinDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteClusterRecycleBin[], ErrorBody>({
      path: `/delete-cluster-recycle-bin-setting`,
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
   * @tags GlobalSettings
   * @name UpdatePasswordSecurity
   * @request POST:/update-password-security
   * @secure
   * @response `200` `WithTaskGlobalSettings`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updatePasswordSecurity = (
    data: UpdatePassrodSecurityParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskGlobalSettings, ErrorBody>({
      path: `/update-password-security`,
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
   * @tags GlobalSettings
   * @name UpdateAccessRestriction
   * @request POST:/update-access-restriction
   * @secure
   * @response `200` `WithTaskGlobalSettings`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateAccessRestriction = (
    data: UpdateAccessRestrictionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskGlobalSettings, ErrorBody>({
      path: `/update-access-restriction`,
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
   * @tags GlobalSettings
   * @name UpdateSessionTimeout
   * @request POST:/update-session-timeout
   * @secure
   * @response `200` `WithTaskGlobalSettings`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateSessionTimeout = (
    data: UpdateSessionTimeoutParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskGlobalSettings, ErrorBody>({
      path: `/update-session-timeout`,
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
   * @tags GlobalSettings
   * @name GetGlobalSettingses
   * @request POST:/get-global-settingses
   * @secure
   * @response `200` `(GlobalSettings)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGlobalSettingses = (
    data: GetGlobalSettingsesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<GlobalSettings[], ErrorBody>({
      path: `/get-global-settingses`,
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
   * @tags GlobalSettings
   * @name GetGlobalSettingsesConnection
   * @request POST:/get-global-settingses-connection
   * @secure
   * @response `200` `GlobalSettingsConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGlobalSettingsesConnection = (
    data: GetGlobalSettingsesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<GlobalSettingsConnection, ErrorBody>({
      path: `/get-global-settingses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
