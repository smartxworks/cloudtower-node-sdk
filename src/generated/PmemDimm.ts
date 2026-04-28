import {
  ErrorBody,
  GetPmemDimmsConnectionRequestBody,
  GetPmemDimmsRequestBody,
  PmemDimm,
  PmemDimmConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PmemDimmApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags PmemDimm
   * @name GetPmemDimms
   * @request POST:/get-pmem-dimms
   * @secure
   * @response `200` `(PmemDimm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getPmemDimms = (data: GetPmemDimmsRequestBody, params: RequestParams = {}) =>
    this.http.request<PmemDimm[], ErrorBody>({
      path: `/get-pmem-dimms`,
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
   * @tags PmemDimm
   * @name GetPmemDimmsConnection
   * @request POST:/get-pmem-dimms-connection
   * @secure
   * @response `200` `PmemDimmConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getPmemDimmsConnection = (
    data: GetPmemDimmsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<PmemDimmConnection, ErrorBody>({
      path: `/get-pmem-dimms-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
