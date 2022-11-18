import {
  AddLabelsToResourcesParams,
  ErrorBody,
  GetLabelsConnectionRequestBody,
  GetLabelsRequestBody,
  Label,
  LabelConnection,
  LabelCreationParams,
  LabelDeletionParams,
  LabelUpdationParams,
  RemoveLabelsFromResourcesParams,
  WithTaskDeleteLabel,
  WithTaskLabel,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LabelApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Label
   * @name CreateLabel
   * @request POST:/create-label
   * @secure
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createLabel = (data: LabelCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskLabel[], ErrorBody>({
      path: `/create-label`,
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
   * @tags Label
   * @name UpdateLabel
   * @request POST:/update-label
   * @secure
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateLabel = (data: LabelUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskLabel[], void | ErrorBody>({
      path: `/update-label`,
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
   * @tags Label
   * @name AddLabelsToResources
   * @request POST:/add-labels-to-resources
   * @secure
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addLabelsToResources = (
    data: AddLabelsToResourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskLabel[], void | ErrorBody>({
      path: `/add-labels-to-resources`,
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
   * @tags Label
   * @name RemoveLabelsFromResources
   * @request POST:/remove-labels-from-resources
   * @secure
   * @response `200` `(WithTaskLabel)[]` Ok
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeLabelsFromResources = (
    data: RemoveLabelsFromResourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskLabel[], void | ErrorBody>({
      path: `/remove-labels-from-resources`,
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
   * @tags Label
   * @name DeleteLabel
   * @request POST:/delete-label
   * @secure
   * @response `200` `(WithTaskDeleteLabel)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteLabel = (data: LabelDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteLabel[], ErrorBody>({
      path: `/delete-label`,
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
   * @tags Label
   * @name GetLabels
   * @request POST:/get-labels
   * @secure
   * @response `200` `(Label)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLabels = (data: GetLabelsRequestBody, params: RequestParams = {}) =>
    this.http.request<Label[], ErrorBody>({
      path: `/get-labels`,
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
   * @tags Label
   * @name GetLabelsConnection
   * @request POST:/get-labels-connection
   * @secure
   * @response `200` `LabelConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLabelsConnection = (
    data: GetLabelsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LabelConnection, ErrorBody>({
      path: `/get-labels-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
