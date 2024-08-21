import {
  ErrorBody,
  ForceStopLogCollectionParams,
  GetLogCollectionsConnectionRequestBody,
  GetLogCollectionsRequestBody,
  LogCollection,
  LogCollectionConnection,
  LogCollectionCreationParams,
  LogCollectionDeletionParams,
  WithTaskDeleteLogCollection,
  WithTaskLogCollection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LogCollectionApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags LogCollection
   * @name CreateLogCollection
   * @request POST:/create-log-collection
   * @secure
   * @response `200` `(WithTaskLogCollection)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createLogCollection = (
    data: LogCollectionCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskLogCollection[], ErrorBody>({
      path: `/create-log-collection`,
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
   * @tags LogCollection
   * @name ForceStopLogCollection
   * @request POST:/force-stop-log-collection
   * @secure
   * @response `200` `(WithTaskLogCollection)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  forceStopLogCollection = (
    data: ForceStopLogCollectionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskLogCollection[], ErrorBody>({
      path: `/force-stop-log-collection`,
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
   * @tags LogCollection
   * @name DeleteLogCollection
   * @request POST:/delete-log-collection
   * @secure
   * @response `200` `(WithTaskDeleteLogCollection)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteLogCollection = (
    data: LogCollectionDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteLogCollection[], ErrorBody>({
      path: `/delete-log-collection`,
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
   * @tags LogCollection
   * @name GetLogCollections
   * @request POST:/get-log-collections
   * @secure
   * @response `200` `(LogCollection)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLogCollections = (
    data: GetLogCollectionsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LogCollection[], ErrorBody>({
      path: `/get-log-collections`,
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
   * @tags LogCollection
   * @name GetLogCollectionsConnection
   * @request POST:/get-log-collections-connection
   * @secure
   * @response `200` `LogCollectionConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getLogCollectionsConnection = (
    data: GetLogCollectionsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LogCollectionConnection, ErrorBody>({
      path: `/get-log-collections-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
