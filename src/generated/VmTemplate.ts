import {
  ErrorBody,
  GetVmTemplatesConnectionRequestBody,
  GetVmTemplatesRequestBody,
  VmTemplate,
  VmTemplateConnection,
  VmTemplateCreationParams,
  VmTemplateDeletionParams,
  VmTemplateUpdationParams,
  WithTaskDeleteVmTemplate,
  WithTaskVmTemplate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmTemplateApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VmTemplate
   * @name CloneVmTemplateFromVm
   * @request POST:/clone-vm-template-from-vm
   * @secure
   * @response `200` `(WithTaskVmTemplate)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneVmTemplateFromVm = (
    data: VmTemplateCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmTemplate[], ErrorBody>({
      path: `/clone-vm-template-from-vm`,
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
   * @tags VmTemplate
   * @name ConvertVmTemplateFromVm
   * @request POST:/convert-vm-template-from-vm
   * @secure
   * @response `200` `(WithTaskVmTemplate)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  convertVmTemplateFromVm = (
    data: VmTemplateCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmTemplate[], ErrorBody>({
      path: `/convert-vm-template-from-vm`,
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
   * @tags VmTemplate
   * @name UpdateVmTemplate
   * @request POST:/update-vm-template
   * @secure
   * @response `200` `(WithTaskVmTemplate)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmTemplate = (
    data: VmTemplateUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVmTemplate[], ErrorBody>({
      path: `/update-vm-template`,
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
   * @tags VmTemplate
   * @name DeleteVmTemplate
   * @request POST:/delete-vm-template
   * @secure
   * @response `200` `(WithTaskDeleteVmTemplate)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVmTemplate = (
    data: VmTemplateDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVmTemplate[], ErrorBody>({
      path: `/delete-vm-template`,
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
   * @tags VmTemplate
   * @name GetVmTemplates
   * @request POST:/get-vm-templates
   * @secure
   * @response `200` `(VmTemplate)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmTemplates = (
    data: GetVmTemplatesRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmTemplate[], ErrorBody>({
      path: `/get-vm-templates`,
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
   * @tags VmTemplate
   * @name GetVmTemplatesConnection
   * @request POST:/get-vm-templates-connection
   * @secure
   * @response `200` `VmTemplateConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmTemplatesConnection = (
    data: GetVmTemplatesConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmTemplateConnection, ErrorBody>({
      path: `/get-vm-templates-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
