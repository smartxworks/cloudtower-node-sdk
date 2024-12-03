import {
  BackupPlan,
  BackupPlanConnection,
  BackupPlanCreationParams,
  BackupPlanDeletionParams,
  BackupPlanExecuteParams,
  BackupPlanResumeParams,
  BackupPlanSuspendParams,
  BackupPlanUpdationParams,
  BackupRestorePointDeletionParams,
  BackupRestorePointRebuildParams,
  BackupRestorePointRestoreInPlaceParams,
  ErrorBody,
  GetBackupPlansConnectionRequestBody,
  GetBackupPlansRequestBody,
  GetBackupRestorePointMetadataRequestBody,
  VmMetaData,
  WithTaskBackupPlan,
  WithTaskBackupPlanExecution,
  WithTaskBackupRestoreExecution,
  WithTaskDeleteBackupPlan,
  WithTaskDeleteBackupRestorePointArray,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class BackupPlanApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BackupPlan
   * @name CreateBackupPlan
   * @request POST:/create-backup-plan
   * @secure
   * @response `200` `(WithTaskBackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createBackupPlan = (
    data: BackupPlanCreationParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupPlan[], ErrorBody>({
      path: `/create-backup-plan`,
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
   * @tags BackupPlan
   * @name UpdateBackupPlan
   * @request POST:/update-backup-plan
   * @secure
   * @response `200` `(WithTaskBackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateBackupPlan = (
    data: BackupPlanUpdationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupPlan[], ErrorBody>({
      path: `/update-backup-plan`,
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
   * @tags BackupPlan
   * @name DeleteBackupPlan
   * @request POST:/delete-backup-plan
   * @secure
   * @response `200` `(WithTaskDeleteBackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteBackupPlan = (
    data: BackupPlanDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteBackupPlan[], ErrorBody>({
      path: `/delete-backup-plan`,
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
   * @tags BackupPlan
   * @name SuspendBackupPlan
   * @request POST:/suspend-backup-plan
   * @secure
   * @response `200` `(WithTaskBackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  suspendBackupPlan = (
    data: BackupPlanSuspendParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupPlan[], ErrorBody>({
      path: `/suspend-backup-plan`,
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
   * @tags BackupPlan
   * @name ResumeBackupPlan
   * @request POST:/resume-backup-plan
   * @secure
   * @response `200` `(WithTaskBackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  resumeBackupPlan = (
    data: BackupPlanResumeParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupPlan[], ErrorBody>({
      path: `/resume-backup-plan`,
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
   * @tags BackupPlan
   * @name ExecuteBackupPlan
   * @request POST:/execute-backup-plan
   * @secure
   * @response `200` `(WithTaskBackupPlanExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  executeBackupPlan = (
    data: BackupPlanExecuteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupPlanExecution[], ErrorBody>({
      path: `/execute-backup-plan`,
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
   * @tags BackupPlan
   * @name BackupRebuildVm
   * @request POST:/backup-rebuild-vm
   * @secure
   * @response `200` `(WithTaskBackupRestoreExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  backupRebuildVm = (
    data: BackupRestorePointRebuildParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupRestoreExecution[], ErrorBody>({
      path: `/backup-rebuild-vm`,
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
   * @tags BackupPlan
   * @name BackupRestoreVmInPlace
   * @request POST:/backup-restore-vm-in-place
   * @secure
   * @response `200` `(WithTaskBackupRestoreExecution)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  backupRestoreVmInPlace = (
    data: BackupRestorePointRestoreInPlaceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskBackupRestoreExecution[], ErrorBody>({
      path: `/backup-restore-vm-in-place`,
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
   * @tags BackupPlan
   * @name DeleteBackupRestorePoint
   * @request POST:/delete-backup-restore-point
   * @secure
   * @response `200` `(WithTaskDeleteBackupRestorePointArray)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteBackupRestorePoint = (
    data: BackupRestorePointDeletionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteBackupRestorePointArray[], ErrorBody>({
      path: `/delete-backup-restore-point`,
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
   * @tags BackupPlan
   * @name GetBackupRestorePointMetadata
   * @request POST:/get-backup-restore-point-metadata
   * @secure
   * @response `200` `VmMetaData`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupRestorePointMetadata = (
    data: GetBackupRestorePointMetadataRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmMetaData, ErrorBody>({
      path: `/get-backup-restore-point-metadata`,
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
   * @tags BackupPlan
   * @name GetBackupPlans
   * @request POST:/get-backup-plans
   * @secure
   * @response `200` `(BackupPlan)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupPlans = (
    data: GetBackupPlansRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BackupPlan[], ErrorBody>({
      path: `/get-backup-plans`,
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
   * @tags BackupPlan
   * @name GetBackupPlansConnection
   * @request POST:/get-backup-plans-connection
   * @secure
   * @response `200` `BackupPlanConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getBackupPlansConnection = (
    data: GetBackupPlansConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BackupPlanConnection, ErrorBody>({
      path: `/get-backup-plans-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
