import {
  ContentLibraryVmTemplate,
  ContentLibraryVmTemplateConnection,
  ContentLibraryVmTemplateCreationParams,
  ContentLibraryVmTemplateDeletionParams,
  ContentLibraryVmTemplateUpdationClusterParams,
  ContentLibraryVmTemplateUpdationParams,
  ErrorBody,
  GetContentLibraryVmTemplatesConnectionRequestBody,
  GetContentLibraryVmTemplatesRequestBody,
  WithTaskContentLibraryVmTemplate,
  WithTaskDeleteContentLibraryVmTemplate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ContentLibraryVmTemplateApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ContentLibraryVmTemplate
   * @name CloneContentLibraryVmTemplateFromVm
   * @request POST:/clone-content-library-vm-template-from-vm
   * @secure
   * @response `200` `(WithTaskContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneContentLibraryVmTemplateFromVm = (
    data: ContentLibraryVmTemplateCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskContentLibraryVmTemplate[], ErrorBody>({
      path: `/clone-content-library-vm-template-from-vm`,
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
   * @tags ContentLibraryVmTemplate
   * @name ConvertContentLibraryVmTemplateFromVm
   * @request POST:/convert-content-library-vm-template-from-vm
   * @secure
   * @response `200` `(WithTaskContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  convertContentLibraryVmTemplateFromVm = (
    data: ContentLibraryVmTemplateCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskContentLibraryVmTemplate[], ErrorBody>({
      path: `/convert-content-library-vm-template-from-vm`,
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
   * @tags ContentLibraryVmTemplate
   * @name UpdateContentLibraryVmTemplate
   * @request POST:/update-content-library-vm-template
   * @secure
   * @response `200` `(WithTaskContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateContentLibraryVmTemplate = (
    data: ContentLibraryVmTemplateUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskContentLibraryVmTemplate[], ErrorBody>({
      path: `/update-content-library-vm-template`,
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
   * @tags ContentLibraryVmTemplate
   * @name DistributeContentLibraryVmtemplateClusters
   * @request POST:/distribute-content-library-vm-template-clusters
   * @secure
   * @response `200` `(WithTaskContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  distributeContentLibraryVmtemplateClusters = (
    data: ContentLibraryVmTemplateUpdationClusterParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskContentLibraryVmTemplate[], ErrorBody>({
      path: `/distribute-content-library-vm-template-clusters`,
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
   * @tags ContentLibraryVmTemplate
   * @name RemoveContentLibraryVmTemplateClusters
   * @request POST:/remove-content-library-vm-template-clusters
   * @secure
   * @response `200` `(WithTaskContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeContentLibraryVmTemplateClusters = (
    data: ContentLibraryVmTemplateUpdationClusterParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskContentLibraryVmTemplate[], ErrorBody>({
      path: `/remove-content-library-vm-template-clusters`,
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
   * @tags ContentLibraryVmTemplate
   * @name DeleteContentLibraryVmTemplate
   * @request POST:/delete-content-library-vm-template
   * @secure
   * @response `200` `(WithTaskDeleteContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteContentLibraryVmTemplate = (
    data: ContentLibraryVmTemplateDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteContentLibraryVmTemplate[], ErrorBody>({
      path: `/delete-content-library-vm-template`,
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
   * @tags ContentLibraryVmTemplate
   * @name GetContentLibraryVmTemplates
   * @request POST:/get-content-library-vm-templates
   * @secure
   * @response `200` `(ContentLibraryVmTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getContentLibraryVmTemplates = (
    data: GetContentLibraryVmTemplatesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ContentLibraryVmTemplate[], ErrorBody>({
      path: `/get-content-library-vm-templates`,
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
   * @tags ContentLibraryVmTemplate
   * @name GetContentLibraryVmTemplatesConnection
   * @request POST:/get-content-library-vm-templates-connection
   * @secure
   * @response `200` `ContentLibraryVmTemplateConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getContentLibraryVmTemplatesConnection = (
    data: GetContentLibraryVmTemplatesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ContentLibraryVmTemplateConnection, ErrorBody>({
      path: `/get-content-library-vm-templates-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
