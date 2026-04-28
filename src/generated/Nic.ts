import {
  ErrorBody,
  GetNicsConnectionRequestBody,
  GetNicsRequestBody,
  Nic,
  NicConnection,
  NicUpdationParams,
  WithTaskNic,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NicApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Nic
   * @name UpdateNic
   * @request POST:/update-nic
   * @secure
   * @response `200` `(WithTaskNic)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNic = (data: NicUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskNic[], ErrorBody>({
      path: `/update-nic`,
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
   * @tags Nic
   * @name GetNics
   * @request POST:/get-nics
   * @secure
   * @response `200` `(Nic)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNics = (data: GetNicsRequestBody, params: RequestParams = {}) =>
    this.http.request<Nic[], ErrorBody>({
      path: `/get-nics`,
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
   * @tags Nic
   * @name GetNicsConnection
   * @request POST:/get-nics-connection
   * @secure
   * @response `200` `NicConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNicsConnection = (
    data: GetNicsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<NicConnection, ErrorBody>({
      path: `/get-nics-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
