import {
  ErrorBody,
  GetPciDevicesRequestBody,
  PciDevice,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PciDeviceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags PciDevice
   * @name GetPciDevices
   * @request POST:/get-pci-devices
   * @secure
   * @response `200` `(PciDevice)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getPciDevices = (
    data: GetPciDevicesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<PciDevice[], ErrorBody>({
      path: `/get-pci-devices`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
