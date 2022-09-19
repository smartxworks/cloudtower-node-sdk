import {
  Deploy,
  DeployConnection,
  ErrorBody,
  GetDeploysConnectionRequestBody,
  GetDeploysRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeployApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Deploy
   * @name GetDeploys
   * @request POST:/get-deploys
   * @secure
   * @response `200` `(Deploy)[]` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDeploys = (data: GetDeploysRequestBody, params: RequestParams = {}) =>
    this.http.request<Deploy[], ErrorBody>({
      path: `/get-deploys`,
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
   * @tags Deploy
   * @name GetDeploysConnection
   * @request POST:/get-deploys-connection
   * @secure
   * @response `200` `DeployConnection` Ok
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDeploysConnection = (data: GetDeploysConnectionRequestBody, params: RequestParams = {}) =>
    this.http.request<DeployConnection, ErrorBody>({
      path: `/get-deploys-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
