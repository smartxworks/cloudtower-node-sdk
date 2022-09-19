import {
  Datacenter,
  DatacenterConnection,
  DatacenterCreationParams,
  DatacenterDeletionParams,
  DatacenterUpdationParams,
  ErrorBody,
  GetDatacentersConnectionRequestBody,
  GetDatacentersRequestBody,
  WithTaskDatacenter,
  WithTaskDeleteDatacenter,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DatacenterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Datacenter
   * @name CreateDatacenter
   * @request POST:/create-datacenter
   * @secure
   * @response `200` `(WithTaskDatacenter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createDatacenter = (data: DatacenterCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskDatacenter[], ErrorBody>({
      path: `/create-datacenter`,
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
   * @tags Datacenter
   * @name UpdateDatacenter
   * @request POST:/update-datacenter
   * @secure
   * @response `200` `(WithTaskDatacenter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateDatacenter = (data: DatacenterUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDatacenter[], ErrorBody>({
      path: `/update-datacenter`,
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
   * @tags Datacenter
   * @name DeleteDatacenter
   * @request POST:/delete-datacenter
   * @secure
   * @response `200` `(WithTaskDeleteDatacenter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteDatacenter = (data: DatacenterDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteDatacenter[], ErrorBody>({
      path: `/delete-datacenter`,
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
   * @tags Datacenter
   * @name GetDatacenters
   * @request POST:/get-datacenters
   * @secure
   * @response `200` `(Datacenter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDatacenters = (data: GetDatacentersRequestBody, params: RequestParams = {}) =>
    this.http.request<Datacenter[], ErrorBody>({
      path: `/get-datacenters`,
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
   * @tags Datacenter
   * @name GetDatacentersConnection
   * @request POST:/get-datacenters-connection
   * @secure
   * @response `200` `DatacenterConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDatacentersConnection = (data: GetDatacentersConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<DatacenterConnection, ErrorBody>({
      path: `/get-datacenters-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
