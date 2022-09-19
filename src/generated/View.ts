import {
  ErrorBody,
  GetViewsConnectionRequestBody,
  GetViewsRequestBody,
  View,
  ViewConnection,
  ViewCreationParams,
  ViewDeletionParams,
  ViewUpdationParams,
  WithTaskDeleteView,
  WithTaskView,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ViewApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags View
   * @name CreateView
   * @request POST:/create-view
   * @secure
   * @response `200` `(WithTaskView)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createView = (data: ViewCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskView[], ErrorBody>({
      path: `/create-view`,
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
   * @tags View
   * @name UpdateView
   * @request POST:/update-view
   * @secure
   * @response `200` `(WithTaskView)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateView = (data: ViewUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskView[], ErrorBody>({
      path: `/update-view`,
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
   * @tags View
   * @name DeleteView
   * @request POST:/delete-view
   * @secure
   * @response `200` `(WithTaskDeleteView)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteView = (data: ViewDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteView[], ErrorBody>({
      path: `/delete-view`,
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
   * @tags View
   * @name GetViews
   * @request POST:/get-views
   * @secure
   * @response `200` `(View)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getViews = (data: GetViewsRequestBody, params: RequestParams = {}) =>
    this.http.request<View[], ErrorBody>({
      path: `/get-views`,
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
   * @tags View
   * @name GetViewsConnection
   * @request POST:/get-views-connection
   * @secure
   * @response `200` `ViewConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getViewsConnection = (data: GetViewsConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ViewConnection, ErrorBody>({
      path: `/get-views-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
