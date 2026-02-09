import {
  BackupStoreRepository,
  BackupStoreRepositoryConnection,
  ErrorBody,
  GetBackupStoreRepositoriesConnectionRequestBody,
  GetBackupStoreRepositoriesRequestBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupStoreRepositoryApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupStoreRepository
   * @name GetBackupStoreRepositories
   * @request POST:/get-backup-store-repositories
   * @secure
   * @response `200` `(BackupStoreRepository)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupStoreRepositories = (
    data: GetBackupStoreRepositoriesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupStoreRepository[], ErrorBody>({
      path: `/get-backup-store-repositories`,
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
   * @tags BackupStoreRepository
   * @name GetBackupStoreRepositoriesConnection
   * @request POST:/get-backup-store-repositories-connection
   * @secure
   * @response `200` `BackupStoreRepositoryConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupStoreRepositoriesConnection = (
    data: GetBackupStoreRepositoriesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<BackupStoreRepositoryConnection, ErrorBody>({
      path: `/get-backup-store-repositories-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
