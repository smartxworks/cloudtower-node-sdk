import {
  ErrorBody,
  GetUsbDevicesConnectionRequestBody,
  GetUsbDevicesRequestBody,
  UsbDevice,
  UsbDeviceConnection,
  UsbDeviceMountParams,
  UsbDeviceUnmountParams,
  WithTaskUsbDevice,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UsbDeviceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UsbDevice
   * @name MountUsbDevice
   * @request POST:/mount-usb-device
   * @secure
   * @response `200` `(WithTaskUsbDevice)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  mountUsbDevice = (data: UsbDeviceMountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskUsbDevice[], ErrorBody>({
      path: `/mount-usb-device`,
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
   * @tags UsbDevice
   * @name UnmountUsbDevice
   * @request POST:/unmount-usb-device
   * @secure
   * @response `200` `(WithTaskUsbDevice)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  unmountUsbDevice = (data: UsbDeviceUnmountParams, params: RequestParams = {}) =>
    this.http.request<WithTaskUsbDevice[], ErrorBody>({
      path: `/unmount-usb-device`,
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
   * @tags UsbDevice
   * @name GetUsbDevices
   * @request POST:/get-usb-devices
   * @secure
   * @response `200` `(UsbDevice)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUsbDevices = (data: GetUsbDevicesRequestBody, params: RequestParams = {}) =>
    this.http.request<UsbDevice[], ErrorBody>({
      path: `/get-usb-devices`,
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
   * @tags UsbDevice
   * @name GetUsbDevicesConnection
   * @request POST:/get-usb-devices-connection
   * @secure
   * @response `200` `UsbDeviceConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getUsbDevicesConnection = (data: GetUsbDevicesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<UsbDeviceConnection, ErrorBody>({
      path: `/get-usb-devices-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
