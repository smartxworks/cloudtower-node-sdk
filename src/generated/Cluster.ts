import {
  Cluster,
  ClusterConnection,
  ClusterCreationParams,
  ClusterDeletionParams,
  ClusterDisablePinInPerformanceParams,
  ClusterEnableIscsiUpdationParams,
  ClusterEnablePinInPerformanceParams,
  ClusterHaUpdationParams,
  ClusterLicenseUpdationParams,
  ClusterNetworkSettingUpdationParams,
  ClusterPinInPerformanceInfo,
  ClusterStorageInfo,
  ClusterUpdationParams,
  ClusterVirtualizationUpdationParams,
  ErrorBody,
  GetClusterPinInPerformanceInfoRequestBody,
  GetClustersConnectionRequestBody,
  GetClustersRequestBody,
  GetClusterStorageInfoRequestBody,
  GetMetaLeaderRequestBody,
  MetaLeader,
  WithTaskCluster,
  WithTaskClusterPinInPerformanceInfo,
  WithTaskClusterSettings,
  WithTaskDeleteCluster,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Cluster
   * @name ConnectCluster
   * @request POST:/connect-cluster
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  connectCluster = (
    data: ClusterCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/connect-cluster`,
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
   * @tags Cluster
   * @name UpdateCluster
   * @request POST:/update-cluster
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateCluster = (data: ClusterUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/update-cluster`,
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
   * @tags Cluster
   * @name UpdateClusterLicense
   * @request POST:/update-cluster-license
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterLicense = (
    data: ClusterLicenseUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/update-cluster-license`,
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
   * @tags Cluster
   * @name UpdateClusterNetworkSetting
   * @request POST:/update-cluster-network-setting
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterNetworkSetting = (
    data: ClusterNetworkSettingUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/update-cluster-network-setting`,
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
   * @tags Cluster
   * @name UpdateClusterVirtualizationSetting
   * @request POST:/update-cluster-virtualization-setting
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterVirtualizationSetting = (
    data: ClusterVirtualizationUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/update-cluster-virtualization-setting`,
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
   * @tags Cluster
   * @name UpdateClusterHaSetting
   * @request POST:/update-cluster-ha-setting
   * @secure
   * @response `200` `(WithTaskClusterSettings)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterHaSetting = (
    data: ClusterHaUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterSettings[], ErrorBody>({
      path: `/update-cluster-ha-setting`,
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
   * @tags Cluster
   * @name UpdateClusterEnableIscsiSetting
   * @request POST:/update-cluster-enable-iscsi-setting
   * @secure
   * @response `200` `(WithTaskClusterSettings)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterEnableIscsiSetting = (
    data: ClusterEnableIscsiUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterSettings[], ErrorBody>({
      path: `/update-cluster-enable-iscsi-setting`,
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
   * @tags Cluster
   * @name DeleteCluster
   * @request POST:/delete-cluster
   * @secure
   * @response `200` `(WithTaskDeleteCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteCluster = (data: ClusterDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteCluster[], ErrorBody>({
      path: `/delete-cluster`,
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
   * @tags Cluster
   * @name GetMetaLeader
   * @request POST:/get-meta-leader
   * @secure
   * @response `200` `(MetaLeader)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getMetaLeader = (
    data: GetMetaLeaderRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<MetaLeader[], ErrorBody>({
      path: `/get-meta-leader`,
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
   * @tags Cluster
   * @name GetClusterStorageInfo
   * @request POST:/get-cluster-storage-info
   * @secure
   * @response `200` `(ClusterStorageInfo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterStorageInfo = (
    data: GetClusterStorageInfoRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterStorageInfo[], ErrorBody>({
      path: `/get-cluster-storage-info`,
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
   * @tags Cluster
   * @name UpdateClusterEnablePinInPerformance
   * @request POST:/enable-cluster-pin-in-performance
   * @secure
   * @response `200` `(WithTaskClusterPinInPerformanceInfo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterEnablePinInPerformance = (
    data: ClusterEnablePinInPerformanceParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterPinInPerformanceInfo[], ErrorBody>({
      path: `/enable-cluster-pin-in-performance`,
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
   * @tags Cluster
   * @name UpdateClusterDisablePinInPerformance
   * @request POST:/disable-cluster-pin-in-performance
   * @secure
   * @response `200` `(WithTaskClusterPinInPerformanceInfo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateClusterDisablePinInPerformance = (
    data: ClusterDisablePinInPerformanceParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskClusterPinInPerformanceInfo[], ErrorBody>({
      path: `/disable-cluster-pin-in-performance`,
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
   * @tags Cluster
   * @name GetClusterPinInPerformanceInfo
   * @request POST:/get-cluster-pin-in-performance-info
   * @secure
   * @response `200` `(ClusterPinInPerformanceInfo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterPinInPerformanceInfo = (
    data: GetClusterPinInPerformanceInfoRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterPinInPerformanceInfo[], ErrorBody>({
      path: `/get-cluster-pin-in-performance-info`,
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
   * @tags Cluster
   * @name GetClusters
   * @request POST:/get-clusters
   * @secure
   * @response `200` `(Cluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusters = (data: GetClustersRequestBody, params: RequestParams = {}) =>
    this.http.request<Cluster[], ErrorBody>({
      path: `/get-clusters`,
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
   * @tags Cluster
   * @name GetClustersConnection
   * @request POST:/get-clusters-connection
   * @secure
   * @response `200` `ClusterConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClustersConnection = (
    data: GetClustersConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterConnection, ErrorBody>({
      path: `/get-clusters-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
