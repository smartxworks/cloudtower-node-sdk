import {
  ErrorBody,
  GetGpuDevicesConnectionRequestBody,
  GetGpuDevicesRequestBody,
  GpuDevice,
  GpuDeviceConnection,
  GpuDeviceDescriptionUpdationParams,
  GpuDeviceSriovSwitchParams,
  GpuDeviceUsageUpdationParams,
  WithTaskGpuDevice,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GpuDeviceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags GpuDevice
   * @name UpdateGpuDeviceUsage
   * @request POST:/update-gpu-device-usage
   * @secure
   * @response `200` `(WithTaskGpuDevice)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateGpuDeviceUsage = (
    data: GpuDeviceUsageUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskGpuDevice[], void | ErrorBody>({
      path: `/update-gpu-device-usage`,
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
   * @tags GpuDevice
   * @name UpdateGpuDeviceDescription
   * @request POST:/update-gpu-device-description
   * @secure
   * @response `200` `(WithTaskGpuDevice)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateGpuDeviceDescription = (
    data: GpuDeviceDescriptionUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskGpuDevice[], void | ErrorBody>({
      path: `/update-gpu-device-description`,
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
   * @tags GpuDevice
   * @name SwitchGpuDeviceSriov
   * @request POST:/switch-gpu-device-sriov
   * @secure
   * @response `200` `(WithTaskGpuDevice)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  switchGpuDeviceSriov = (
    data: GpuDeviceSriovSwitchParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskGpuDevice[], void | ErrorBody>({
      path: `/switch-gpu-device-sriov`,
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
   * @tags GpuDevice
   * @name GetGpuDevices
   * @request POST:/get-gpu-devices
   * @secure
   * @response `200` `(GpuDevice)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGpuDevices = (
    data: GetGpuDevicesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GpuDevice[], ErrorBody>({
      path: `/get-gpu-devices`,
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
   * @tags GpuDevice
   * @name GetGpuDevicesConnection
   * @request POST:/get-gpu-devices-connection
   * @secure
   * @response `200` `GpuDeviceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGpuDevicesConnection = (
    data: GetGpuDevicesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GpuDeviceConnection, ErrorBody>({
      path: `/get-gpu-devices-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
