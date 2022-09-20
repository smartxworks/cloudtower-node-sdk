import {
  EntityFilter,
  EntityFilterConnection,
  EntityFilterCreationParams,
  EntityFilterDeletionParams,
  EntityFilterUpdationParams,
  ErrorBody,
  GetEntityFiltersConnectionRequestBody,
  GetEntityFiltersRequestBody,
  WithTaskDeleteEntityFilter,
  WithTaskEntityFilter,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class EntityFilterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags EntityFilter
   * @name CreateEntityFilter
   * @request POST:/create-entity-filter
   * @secure
   * @response `200` `(WithTaskEntityFilter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createEntityFilter = (
    data: EntityFilterCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskEntityFilter[], ErrorBody>({
      path: `/create-entity-filter`,
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
   * @tags EntityFilter
   * @name UpdateEntityFilter
   * @request POST:/update-entity-filter
   * @secure
   * @response `200` `(WithTaskEntityFilter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateEntityFilter = (
    data: EntityFilterUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskEntityFilter[], ErrorBody>({
      path: `/update-entity-filter`,
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
   * @tags EntityFilter
   * @name DeleteEntityFilter
   * @request POST:/delete-entity-filter
   * @secure
   * @response `200` `(WithTaskDeleteEntityFilter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteEntityFilter = (
    data: EntityFilterDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteEntityFilter[], ErrorBody>({
      path: `/delete-entity-filter`,
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
   * @tags EntityFilter
   * @name GetEntityFilters
   * @request POST:/get-entity-filters
   * @secure
   * @response `200` `(EntityFilter)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEntityFilters = (
    data: GetEntityFiltersRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EntityFilter[], ErrorBody>({
      path: `/get-entity-filters`,
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
   * @tags EntityFilter
   * @name GetEntityFiltersConnection
   * @request POST:/get-entity-filters-connection
   * @secure
   * @response `200` `EntityFilterConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getEntityFiltersConnection = (
    data: GetEntityFiltersConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EntityFilterConnection, ErrorBody>({
      path: `/get-entity-filters-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
