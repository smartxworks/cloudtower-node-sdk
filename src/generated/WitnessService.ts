import { ErrorBody, GetWitnessServicesRequestBody, WitnessService } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class WitnessServiceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags WitnessService
   * @name GetWitnessServices
   * @request POST:/get-witness-services
   * @secure
   * @response `200` `(WitnessService)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getWitnessServices = (data: GetWitnessServicesRequestBody, params: RequestParams = {}) =>
    this.http.request<WitnessService[], ErrorBody>({
      path: `/get-witness-services`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
