import {
  ErrorBody,
  GetZoneTopoesConnectionRequestBody,
  GetZoneTopoesRequestBody,
  ZoneTopo,
  ZoneTopoConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ZoneTopoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ZoneTopo
   * @name GetZoneTopoes
   * @request POST:/get-zone-topoes
   * @secure
   * @response `200` `(ZoneTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getZoneTopoes = (
    data: GetZoneTopoesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ZoneTopo[], ErrorBody>({
      path: `/get-zone-topoes`,
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
   * @tags ZoneTopo
   * @name GetZoneTopoesConnection
   * @request POST:/get-zone-topoes-connection
   * @secure
   * @response `200` `ZoneTopoConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getZoneTopoesConnection = (
    data: GetZoneTopoesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ZoneTopoConnection, ErrorBody>({
      path: `/get-zone-topoes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
