import { ErrorBody, TableReporterParams } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TableReporterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TableReporter
   * @name ExportCsv
   * @request POST:/export-csv
   * @secure
   * @response `200` `string`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  exportCsv = (data: TableReporterParams, params: RequestParams = {}) =>
    this.http.request<string, ErrorBody>({
      path: `/export-csv`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
