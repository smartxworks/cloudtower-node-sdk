import {
  ErrorBody,
  GetClusterMetricInput,
  GetDiskMetricInput,
  GetHostMetricInput,
  GetHostNetworkMetricInput,
  GetHostServiceMetricInput,
  GetLunMetricInput,
  GetNvmfNamespaceMetricInput,
  GetSCVMDiskMetricInput,
  GetScvmMetricInput,
  GetScvmNetworkInput,
  GetScvmServiceMetricInput,
  GetTopNMetricInput,
  GetVmMetricInput,
  GetVmNetWorkMetricInput,
  GetVmVolumeMetricInput,
  GetWitnessMetricInput,
  GetZoneMetricInput,
  WithTaskMetric,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MetricsApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Metrics
   * @name GetVmMetrics
   * @request POST:/get-vm-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmMetrics = (data: GetVmMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-vm-metrics`,
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
   * @tags Metrics
   * @name GetVmNetWorkMetrics
   * @request POST:/get-vm-network-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmNetWorkMetrics = (
    data: GetVmNetWorkMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-vm-network-metrics`,
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
   * @tags Metrics
   * @name GetDiskMetrics
   * @request POST:/get-disk-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDiskMetrics = (data: GetDiskMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-disk-metrics`,
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
   * @tags Metrics
   * @name GetVmVolumeMetrics
   * @request POST:/get-vm-volume-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVolumeMetrics = (
    data: GetVmVolumeMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-vm-volume-metrics`,
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
   * @tags Metrics
   * @name GetLunMetrics
   * @request POST:/get-lun-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLunMetrics = (data: GetLunMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-lun-metrics`,
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
   * @tags Metrics
   * @name GetNvmfNamespaceMetrics
   * @request POST:/get-nvmf-namespace-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfNamespaceMetrics = (
    data: GetNvmfNamespaceMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-nvmf-namespace-metrics`,
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
   * @tags Metrics
   * @name GetClusterMetrics
   * @request POST:/get-cluster-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusterMetrics = (
    data: GetClusterMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-cluster-metrics`,
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
   * @tags Metrics
   * @name GetHostMetrics
   * @request POST:/get-host-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getHostMetrics = (data: GetHostMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-host-metrics`,
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
   * @tags Metrics
   * @name GetHostNetworkMetrics
   * @request POST:/get-host-network-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getHostNetworkMetrics = (
    data: GetHostNetworkMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-host-network-metrics`,
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
   * @tags Metrics
   * @name GetHostServicekMetrics
   * @request POST:/get-host-service-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getHostServicekMetrics = (
    data: GetHostServiceMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-host-service-metrics`,
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
   * @tags Metrics
   * @name GetScvmMetrics
   * @request POST:/get-scvm-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getScvmMetrics = (data: GetScvmMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-scvm-metrics`,
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
   * @tags Metrics
   * @name GetScvmNetworkMetrics
   * @request POST:/get-scvm-network-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getScvmNetworkMetrics = (
    data: GetScvmNetworkInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-scvm-network-metrics`,
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
   * @tags Metrics
   * @name GetScvmServicekMetrics
   * @request POST:/get-scvm-service-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getScvmServicekMetrics = (
    data: GetScvmServiceMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-scvm-service-metrics`,
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
   * @tags Metrics
   * @name GetScvmDiskMetrics
   * @request POST:/get-scvm-disk-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getScvmDiskMetrics = (
    data: GetSCVMDiskMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-scvm-disk-metrics`,
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
   * @tags Metrics
   * @name GetZoneMetrics
   * @request POST:/get-zone-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getZoneMetrics = (data: GetZoneMetricInput, params: RequestParams = {}) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-zone-metrics`,
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
   * @tags Metrics
   * @name GetWitnessMetrics
   * @request POST:/get-witness-metrics
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getWitnessMetrics = (
    data: GetWitnessMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-witness-metrics`,
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
   * @tags Metrics
   * @name GetTopNVmVolumeMetrics
   * @request POST:/get-top-n-metrics-in-clusters
   * @secure
   * @response `200` `(WithTaskMetric)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getTopNVmVolumeMetrics = (
    data: GetTopNMetricInput,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskMetric[], ErrorBody>({
      path: `/get-top-n-metrics-in-clusters`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
