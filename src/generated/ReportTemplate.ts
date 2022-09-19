import {
  ErrorBody,
  GetReportTemplatesConnectionRequestBody,
  GetReportTemplatesRequestBody,
  ReporteTemplateGenerationParams,
  ReportTemplate,
  ReportTemplateConnection,
  ReportTemplateCreationParams,
  ReportTemplateDeletionParams,
  ReportTemplateUpdationParams,
  WithTaskDeleteReportTemplate,
  WithTaskReportTask,
  WithTaskReportTemplate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReportTemplateApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ReportTemplate
   * @name CreateReportTemplate
   * @request POST:/create-report-template
   * @secure
   * @response `200` `(WithTaskReportTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createReportTemplate = (data: ReportTemplateCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskReportTemplate[], ErrorBody>({
      path: `/create-report-template`,
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
   * @tags ReportTemplate
   * @name UpdateReportTemplate
   * @request POST:/update-report-template
   * @secure
   * @response `200` `(WithTaskReportTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateReportTemplate = (data: ReportTemplateUpdationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskReportTemplate[], ErrorBody>({
      path: `/update-report-template`,
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
   * @tags ReportTemplate
   * @name GenerateFromReportTemplate
   * @request POST:/generate-from-report-template
   * @secure
   * @response `200` `(WithTaskReportTask)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  generateFromReportTemplate = (data: ReporteTemplateGenerationParams, params: RequestParams = {}) =>
    this.http.request<WithTaskReportTask[], ErrorBody>({
      path: `/generate-from-report-template`,
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
   * @tags ReportTemplate
   * @name DeleteReportTemplate
   * @request POST:/delete-report-template
   * @secure
   * @response `200` `(WithTaskDeleteReportTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteReportTemplate = (data: ReportTemplateDeletionParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteReportTemplate[], ErrorBody>({
      path: `/delete-report-template`,
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
   * @tags ReportTemplate
   * @name GetReportTemplates
   * @request POST:/get-report-templates
   * @secure
   * @response `200` `(ReportTemplate)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReportTemplates = (data: GetReportTemplatesRequestBody, params: RequestParams = {}) =>
    this.http.request<ReportTemplate[], ErrorBody>({
      path: `/get-report-templates`,
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
   * @tags ReportTemplate
   * @name GetReportTemplatesConnection
   * @request POST:/get-report-templates-connection
   * @secure
   * @response `200` `ReportTemplateConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getReportTemplatesConnection = (data: GetReportTemplatesConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<ReportTemplateConnection, ErrorBody>({
      path: `/get-report-templates-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
