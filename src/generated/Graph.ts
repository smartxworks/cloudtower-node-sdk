import {
  ErrorBody,
  GetGraphsConnectionRequestBody,
  GetGraphsRequestBody,
  Graph,
  GraphConnection,
  GraphCreationParams,
  GraphDeletionParams,
  GraphUpdationParams,
  WithTaskDeleteGraph,
  WithTaskGraph,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GraphApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Graph
   * @name CreateGraph
   * @request POST:/create-graph
   * @secure
   * @response `200` `(WithTaskGraph)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createGraph = (data: GraphCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskGraph[], ErrorBody>({
      path: `/create-graph`,
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
   * @tags Graph
   * @name UpdateGraph
   * @request POST:/update-graph
   * @secure
   * @response `200` `(WithTaskGraph)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateGraph = (data: GraphUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskGraph[], ErrorBody>({
      path: `/update-graph`,
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
   * @tags Graph
   * @name DeleteGraph
   * @request POST:/delete-graph
   * @secure
   * @response `200` `(WithTaskDeleteGraph)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteGraph = (data: GraphDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteGraph[], ErrorBody>({
      path: `/delete-graph`,
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
   * @tags Graph
   * @name GetGraphs
   * @request POST:/get-graphs
   * @secure
   * @response `200` `(Graph)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGraphs = (data: GetGraphsRequestBody, params: RequestParams = {}) =>
    this.http.request<Graph[], ErrorBody>({
      path: `/get-graphs`,
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
   * @tags Graph
   * @name GetGraphsConnection
   * @request POST:/get-graphs-connection
   * @secure
   * @response `200` `GraphConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getGraphsConnection = (data: GetGraphsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<GraphConnection, ErrorBody>({
      path: `/get-graphs-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
