import { ErrorBody, GetZonesConnectionRequestBody, GetZonesRequestBody, Zone, ZoneConnection } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ZoneApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Zone
   * @name GetZones
   * @request POST:/get-zones
   * @secure
   * @response `200` `(Zone)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getZones = (data: GetZonesRequestBody, params: RequestParams = {}) =>
    this.http.request<Zone[], ErrorBody>({
      path: `/get-zones`,
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
   * @tags Zone
   * @name GetZonesConnection
   * @request POST:/get-zones-connection
   * @secure
   * @response `200` `ZoneConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getZonesConnection = (data: GetZonesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ZoneConnection, ErrorBody>({
      path: `/get-zones-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
