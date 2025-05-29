import {
  ErrorBody,
  GetVirtualPrivateCloudExternalSubnetGroupsConnectionRequestBody,
  GetVirtualPrivateCloudExternalSubnetGroupsRequestBody,
  VirtualPrivateCloudExternalSubnetGroup,
  VirtualPrivateCloudExternalSubnetGroupConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VirtualPrivateCloudExternalSubnetGroupApi<
  SecurityDataType = unknown
> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VirtualPrivateCloudExternalSubnetGroup
   * @name GetVirtualPrivateCloudExternalSubnetGroups
   * @request POST:/get-virtual-private-cloud-external-subnet-groups
   * @secure
   * @response `200` `(VirtualPrivateCloudExternalSubnetGroup)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudExternalSubnetGroups = (
    data: GetVirtualPrivateCloudExternalSubnetGroupsRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VirtualPrivateCloudExternalSubnetGroup[], ErrorBody>({
      path: `/get-virtual-private-cloud-external-subnet-groups`,
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
   * @tags VirtualPrivateCloudExternalSubnetGroup
   * @name GetVirtualPrivateCloudExternalSubnetGroupsConnection
   * @request POST:/get-virtual-private-cloud-external-subnet-groups-connection
   * @secure
   * @response `200` `VirtualPrivateCloudExternalSubnetGroupConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVirtualPrivateCloudExternalSubnetGroupsConnection = (
    data: GetVirtualPrivateCloudExternalSubnetGroupsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      VirtualPrivateCloudExternalSubnetGroupConnection,
      ErrorBody
    >({
      path: `/get-virtual-private-cloud-external-subnet-groups-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
