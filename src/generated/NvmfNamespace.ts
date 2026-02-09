import {
  ErrorBody,
  GetNvmfNamespacesConnectionRequestBody,
  GetNvmfNamespacesRequestBody,
  NvmfNamespace,
  NvmfNamespaceCloneParams,
  NvmfNamespaceConnection,
  NvmfNamespaceCreationParams,
  NvmfNamespaceDeletionParams,
  NvmfNamespaceRollbackParams,
  NvmfNamespaceUpdationParams,
  WithTaskDeleteNvmfNamespace,
  WithTaskNvmfNamespace,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NvmfNamespaceApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags NvmfNamespace
   * @name CreateNvmfNamespace
   * @request POST:/create-nvmf-namespace
   * @secure
   * @response `200` `(WithTaskNvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createNvmfNamespace = (
    data: NvmfNamespaceCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskNvmfNamespace[], ErrorBody>({
      path: `/create-nvmf-namespace`,
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
   * @tags NvmfNamespace
   * @name UpdateNvmfNamespace
   * @request POST:/update-nvmf-namespace
   * @secure
   * @response `200` `(WithTaskNvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateNvmfNamespace = (
    data: NvmfNamespaceUpdationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskNvmfNamespace[], ErrorBody>({
      path: `/update-nvmf-namespace`,
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
   * @tags NvmfNamespace
   * @name DeleteNvmfNamespace
   * @request POST:/delete-nvmf-namespace
   * @secure
   * @response `200` `(WithTaskDeleteNvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteNvmfNamespace = (
    data: NvmfNamespaceDeletionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskDeleteNvmfNamespace[], ErrorBody>({
      path: `/delete-nvmf-namespace`,
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
   * @tags NvmfNamespace
   * @name CloneNvmfNamespaceFromSnapshot
   * @request POST:/clone-nvmf-namespace-from-snapshot
   * @secure
   * @response `200` `(WithTaskNvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneNvmfNamespaceFromSnapshot = (
    data: NvmfNamespaceCloneParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskNvmfNamespace[], ErrorBody>({
      path: `/clone-nvmf-namespace-from-snapshot`,
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
   * @tags NvmfNamespace
   * @name RollbackNvmfNamespaceFromSnapshot
   * @request POST:/rollback-nvmf-namespace-from-snapshot
   * @secure
   * @response `200` `(WithTaskNvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rollbackNvmfNamespaceFromSnapshot = (
    data: NvmfNamespaceRollbackParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskNvmfNamespace[], ErrorBody>({
      path: `/rollback-nvmf-namespace-from-snapshot`,
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
   * @tags NvmfNamespace
   * @name GetNvmfNamespaces
   * @request POST:/get-nvmf-namespaces
   * @secure
   * @response `200` `(NvmfNamespace)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfNamespaces = (
    data: GetNvmfNamespacesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<NvmfNamespace[], ErrorBody>({
      path: `/get-nvmf-namespaces`,
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
   * @tags NvmfNamespace
   * @name GetNvmfNamespacesConnection
   * @request POST:/get-nvmf-namespaces-connection
   * @secure
   * @response `200` `NvmfNamespaceConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNvmfNamespacesConnection = (
    data: GetNvmfNamespacesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<NvmfNamespaceConnection, ErrorBody>({
      path: `/get-nvmf-namespaces-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
