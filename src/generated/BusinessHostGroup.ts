import {
  BusinessHostGroup,
  BusinessHostGroupConnection,
  ErrorBody,
  GetBusinessHostGroupsConnectionRequestBody,
  GetBusinessHostGroupsRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BusinessHostGroupApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BusinessHostGroup
   * @name GetBusinessHostGroups
   * @request POST:/get-business-host-groups
   * @secure
   * @response `200` `(BusinessHostGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBusinessHostGroups = (
    data: GetBusinessHostGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BusinessHostGroup[], ErrorBody>({
      path: `/get-business-host-groups`,
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
   * @tags BusinessHostGroup
   * @name GetBusinessHostGroupsConnection
   * @request POST:/get-business-host-groups-connection
   * @secure
   * @response `200` `BusinessHostGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBusinessHostGroupsConnection = (
    data: GetBusinessHostGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BusinessHostGroupConnection, ErrorBody>({
      path: `/get-business-host-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
