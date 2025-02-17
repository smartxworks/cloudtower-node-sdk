import { ErrorBody, NtpServiceUrl } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class NtpApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Ntp
   * @name GetNtpServiceUrl
   * @request POST:/get-ntp-service-url
   * @secure
   * @response `200` `NtpServiceUrl`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getNtpServiceUrl = (params: RequestParams = {}) =>
    this.http.request<NtpServiceUrl, ErrorBody>({
      path: `/get-ntp-service-url`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
