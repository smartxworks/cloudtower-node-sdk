import {
  Application,
  ApplicationConnection,
  ErrorBody,
  GetApplicationsConnectionRequestBody,
  GetApplicationsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApplicationApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Application
   * @name GetApplications
   * @request POST:/get-applications
   * @secure
   * @response `200` `(Application)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getApplications = (
    data: GetApplicationsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<Application[], ErrorBody>({
      path: `/get-applications`,
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
   * @tags Application
   * @name GetApplicationsConnection
   * @request POST:/get-applications-connection
   * @secure
   * @response `200` `ApplicationConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getApplicationsConnection = (
    data: GetApplicationsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ApplicationConnection, ErrorBody>({
      path: `/get-applications-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
