import {
  ErrorBody,
  GetNodeTopoesConnectionRequestBody,
  GetNodeTopoesRequestBody,
  NodeTopo,
  NodeTopoConnection,
  NodeTopoUpdationParams,
  WithTaskNodeTopo,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NodeTopoApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NodeTopo
   * @name UpdateNodeTopo
   * @request POST:/move-node-topo
   * @secure
   * @response `200` `(WithTaskNodeTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNodeTopo = (data: NodeTopoUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskNodeTopo[], ErrorBody>({
      path: `/move-node-topo`,
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
   * @tags NodeTopo
   * @name GetNodeTopoes
   * @request POST:/get-node-topoes
   * @secure
   * @response `200` `(NodeTopo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNodeTopoes = (
    data: GetNodeTopoesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NodeTopo[], ErrorBody>({
      path: `/get-node-topoes`,
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
   * @tags NodeTopo
   * @name GetNodeTopoesConnection
   * @request POST:/get-node-topoes-connection
   * @secure
   * @response `200` `NodeTopoConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNodeTopoesConnection = (
    data: GetNodeTopoesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NodeTopoConnection, ErrorBody>({
      path: `/get-node-topoes-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
