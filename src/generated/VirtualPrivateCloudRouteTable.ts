import {
  ErrorBody,
  GetVirtualPrivateCloudRouteTablesConnectionRequestBody,
  GetVirtualPrivateCloudRouteTablesRequestBody,
  VirtualPrivateCloudRouteTable,
  VirtualPrivateCloudRouteTableConnection,
  VirtualPrivateCloudRouteTableCreationParams,
  VirtualPrivateCloudRouteTableDeletionParams,
  VirtualPrivateCloudRouteTableUpdationParams,
  WithTaskDeleteVirtualPrivateCloudRouteTable,
  WithTaskVirtualPrivateCloudRouteTable,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudRouteTableApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudRouteTable
   * @name CreateVirtualPrivateCloudRouteTable
   * @request POST:/create-virtual-private-cloud-route-table
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudRouteTable)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVirtualPrivateCloudRouteTable = (
    data: VirtualPrivateCloudRouteTableCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudRouteTable[], ErrorBody>({
      path: `/create-virtual-private-cloud-route-table`,
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
   * @tags VirtualPrivateCloudRouteTable
   * @name UpdateVirtualPrivateCloudRouteTable
   * @request POST:/update-virtual-private-cloud-route-table
   * @secure
   * @response `200` `(WithTaskVirtualPrivateCloudRouteTable)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVirtualPrivateCloudRouteTable = (
    data: VirtualPrivateCloudRouteTableUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVirtualPrivateCloudRouteTable[], ErrorBody>({
      path: `/update-virtual-private-cloud-route-table`,
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
   * @tags VirtualPrivateCloudRouteTable
   * @name DeleteVirtualPrivateCloudRouteTable
   * @request POST:/delete-virtual-private-cloud-route-table
   * @secure
   * @response `200` `(WithTaskDeleteVirtualPrivateCloudRouteTable)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVirtualPrivateCloudRouteTable = (
    data: VirtualPrivateCloudRouteTableDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVirtualPrivateCloudRouteTable[], ErrorBody>(
      {
        path: `/delete-virtual-private-cloud-route-table`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }
    );
  /**
   * No description
   *
   * @tags VirtualPrivateCloudRouteTable
   * @name GetVirtualPrivateCloudRouteTables
   * @request POST:/get-virtual-private-cloud-route-tables
   * @secure
   * @response `200` `(VirtualPrivateCloudRouteTable)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudRouteTables = (
    data: GetVirtualPrivateCloudRouteTablesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudRouteTable[], ErrorBody>({
      path: `/get-virtual-private-cloud-route-tables`,
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
   * @tags VirtualPrivateCloudRouteTable
   * @name GetVirtualPrivateCloudRouteTablesConnection
   * @request POST:/get-virtual-private-cloud-route-tables-connection
   * @secure
   * @response `200` `VirtualPrivateCloudRouteTableConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudRouteTablesConnection = (
    data: GetVirtualPrivateCloudRouteTablesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudRouteTableConnection, ErrorBody>({
      path: `/get-virtual-private-cloud-route-tables-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
