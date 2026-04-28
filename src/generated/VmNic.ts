import {
  ErrorBody,
  GetVmNicsConnectionRequestBody,
  GetVmNicsRequestBody,
  VmNic,
  VmNicConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmNicApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmNic
   * @name GetVmNics
   * @request POST:/get-vm-nics
   * @secure
   * @response `200` `(VmNic)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmNics = (data: GetVmNicsRequestBody, params: RequestParams = {}) =>
    this.http.request<VmNic[], ErrorBody>({
      path: `/get-vm-nics`,
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
   * @tags VmNic
   * @name GetVmNicsConnection
   * @request POST:/get-vm-nics-connection
   * @secure
   * @response `200` `VmNicConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmNicsConnection = (
    data: GetVmNicsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VmNicConnection, ErrorBody>({
      path: `/get-vm-nics-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
