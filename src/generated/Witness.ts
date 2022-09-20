import {
  ErrorBody,
  GetWitnessesConnectionRequestBody,
  GetWitnessesRequestBody,
  Witness,
  WitnessConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class WitnessApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Witness
   * @name GetWitnesses
   * @request POST:/get-witnesses
   * @secure
   * @response `200` `(Witness)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getWitnesses = (data: GetWitnessesRequestBody, params: RequestParams = {}) =>
    this.http.request<Witness[], ErrorBody>({
      path: `/get-witnesses`,
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
   * @tags Witness
   * @name GetWitnessesConnection
   * @request POST:/get-witnesses-connection
   * @secure
   * @response `200` `WitnessConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getWitnessesConnection = (
    data: GetWitnessesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WitnessConnection, ErrorBody>({
      path: `/get-witnesses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
