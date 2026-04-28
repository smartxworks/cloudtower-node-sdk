import {
  BrickTopo,
  BrickTopoConnection,
  BrickTopoCreationParams,
  BrickTopoDeletionParams,
  BrickTopoMoveParams,
  BrickTopoUpdationParams,
  ErrorBody,
  GetBrickTopoesConnectionRequestBody,
  GetBrickTopoesRequestBody,
  WithTaskBrickTopo,
  WithTaskDeleteBrickTopo,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BrickTopoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BrickTopo
   * @name CreateBrickTopo
   * @request POST:/create-brick-topo
   * @secure
   * @response `200` `(WithTaskBrickTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createBrickTopo = (
    data: BrickTopoCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskBrickTopo[], ErrorBody>({
      path: `/create-brick-topo`,
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
   * @tags BrickTopo
   * @name UpdateBrickTopo
   * @request POST:/update-brick-topo
   * @secure
   * @response `200` `(WithTaskBrickTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateBrickTopo = (
    data: BrickTopoUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskBrickTopo[], ErrorBody>({
      path: `/update-brick-topo`,
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
   * @tags BrickTopo
   * @name MoveBrickTopo
   * @request POST:/move-brick-topo
   * @secure
   * @response `200` `(WithTaskBrickTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  moveBrickTopo = (data: BrickTopoMoveParams, params: RequestParams = {}) =>
    this.http.request<WithTaskBrickTopo[], ErrorBody>({
      path: `/move-brick-topo`,
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
   * @tags BrickTopo
   * @name DeleteBrickTopo
   * @request POST:/delete-brick-topo
   * @secure
   * @response `200` `(WithTaskDeleteBrickTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteBrickTopo = (
    data: BrickTopoDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteBrickTopo[], ErrorBody>({
      path: `/delete-brick-topo`,
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
   * @tags BrickTopo
   * @name GetBrickTopoes
   * @request POST:/get-brick-topoes
   * @secure
   * @response `200` `(BrickTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBrickTopoes = (
    data: GetBrickTopoesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BrickTopo[], ErrorBody>({
      path: `/get-brick-topoes`,
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
   * @tags BrickTopo
   * @name GetBrickTopoesConnection
   * @request POST:/get-brick-topoes-connection
   * @secure
   * @response `200` `BrickTopoConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBrickTopoesConnection = (
    data: GetBrickTopoesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BrickTopoConnection, ErrorBody>({
      path: `/get-brick-topoes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
