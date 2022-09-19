import {
  ErrorBody,
  GetRackTopoesConnectionRequestBody,
  GetRackTopoesRequestBody,
  RackTopo,
  RackTopoConnection,
  RackTopoCreationParams,
  RackTopoDeletionParams,
  RackTopoUpdationParams,
  WithTaskDeleteRackTopo,
  WithTaskRackTopo,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RackTopoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags RackTopo
   * @name CreateRackTopo
   * @request POST:/create-rack-topo
   * @secure
   * @response `200` `(WithTaskRackTopo)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createRackTopo = (data: RackTopoCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskRackTopo[], ErrorBody>({
      path: `/create-rack-topo`,
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
   * @tags RackTopo
   * @name UpdateRackTopo
   * @request POST:/update-rack-topo
   * @secure
   * @response `200` `(WithTaskRackTopo)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateRackTopo = (data: RackTopoUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskRackTopo[], ErrorBody>({
      path: `/update-rack-topo`,
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
   * @tags RackTopo
   * @name DeleteRackTopo
   * @request POST:/delete-rack-topo
   * @secure
   * @response `200` `(WithTaskDeleteRackTopo)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteRackTopo = (data: RackTopoDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteRackTopo[], ErrorBody>({
      path: `/delete-rack-topo`,
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
   * @tags RackTopo
   * @name GetRackTopoes
   * @request POST:/get-rack-topoes
   * @secure
   * @response `200` `(RackTopo)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getRackTopoes = (data: GetRackTopoesRequestBody, params: RequestParams = {}) =>
    this.http.request<RackTopo[], ErrorBody>({
      path: `/get-rack-topoes`,
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
   * @tags RackTopo
   * @name GetRackTopoesConnection
   * @request POST:/get-rack-topoes-connection
   * @secure
   * @response `200` `RackTopoConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getRackTopoesConnection = (data: GetRackTopoesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<RackTopoConnection, ErrorBody>({
      path: `/get-rack-topoes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
