import {
  AbortMigrateVmAcrossClusterParams,
  ConvertVmTemplateToVmParams,
  ErrorBody,
  GetVmsConnectionRequestBody,
  GetVmsRequestBody,
  GetVmVncInfoParams,
  InstallVmtoolsParams,
  StopVmInCutoverMigrationParams,
  Task,
  Vm,
  VmAddCdRomParams,
  VmAddDiskParams,
  VmAddFolderParams,
  VmAddGpuDeviceParams,
  VmAddNicParams,
  VmCloneParams,
  VmConnection,
  VmCreateVmFromContentLibraryTemplateParams,
  VmCreateVmFromTemplateParams,
  VmCreationParams,
  VmDeleteParams,
  VmEjectCdRomParams,
  VmExpandVmDiskParams,
  VmExportParams,
  VmGpuInfo,
  VmImportParams,
  VmMigrateAcrossClusterParams,
  VmMigrateParams,
  VmOperateParams,
  VmOperatePciNicParams,
  VmRebuildParams,
  VmRemoveCdRomParams,
  VmRemoveDiskParams,
  VmRemoveGpuDeviceParams,
  VmRemoveNicByWhereParams,
  VmRemoveNicParams,
  VmResetGuestOsPasswordParams,
  VmRollbackParams,
  VmStartParams,
  VmToggleCdRomDisableParams,
  VmUpdateAdvancedOptionsParams,
  VmUpdateDiskParams,
  VmUpdateHostOptionsParams,
  VmUpdateIoPolicyParams,
  VmUpdateNicAdvanceInfoParams,
  VmUpdateNicBasicInfoParams,
  VmUpdateNicParams,
  VmUpdateNicQosOptionsParams,
  VmUpdateOwnerParams,
  VmUpdateParams,
  VmVncInfo,
  WithTaskDeleteVm,
  WithTaskVm,
  WithTaskVmExportFile,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VmApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Vm
   * @name CreateVm
   * @request POST:/create-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVm = (data: VmCreationParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/create-vm`,
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
   * @tags Vm
   * @name CreateVmFromTemplate
   * @request POST:/create-vm-from-template
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmFromTemplate = (
    data: VmCreateVmFromTemplateParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/create-vm-from-template`,
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
   * @tags Vm
   * @name CreateVmFromContentLibraryTemplate
   * @request POST:/create-vm-from-content-library-template
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createVmFromContentLibraryTemplate = (
    data: VmCreateVmFromContentLibraryTemplateParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/create-vm-from-content-library-template`,
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
   * @tags Vm
   * @name ConvertVmTemplateToVm
   * @request POST:/convert-vm-template-to-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  convertVmTemplateToVm = (
    data: ConvertVmTemplateToVmParams[],
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/convert-vm-template-to-vm`,
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
   * @tags Vm
   * @name CloneVm
   * @request POST:/clone-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  cloneVm = (data: VmCloneParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/clone-vm`,
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
   * @tags Vm
   * @name RebuildVm
   * @request POST:/rebuild-vm-from-snapshot
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rebuildVm = (data: VmRebuildParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/rebuild-vm-from-snapshot`,
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
   * @tags Vm
   * @name RollbackVm
   * @request POST:/rollback-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  rollbackVm = (data: VmRollbackParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/rollback-vm`,
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
   * @tags Vm
   * @name UpdateVm
   * @request POST:/update-vm-basic-info
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVm = (data: VmUpdateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/update-vm-basic-info`,
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
   * @tags Vm
   * @name MoveVmToRecycleBin
   * @request POST:/move-vm-to-recycle
   * @secure
   * @response `200` `(WithTaskDeleteVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  moveVmToRecycleBin = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVm[], ErrorBody>({
      path: `/move-vm-to-recycle`,
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
   * @tags Vm
   * @name RecoverVmFromRecycleBin
   * @request POST:/recover-vm-from-recycle
   * @secure
   * @response `200` `(WithTaskDeleteVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  recoverVmFromRecycleBin = (
    data: VmOperateParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskDeleteVm[], ErrorBody>({
      path: `/recover-vm-from-recycle`,
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
   * @tags Vm
   * @name DeleteVm
   * @request POST:/delete-vm
   * @secure
   * @response `200` `(WithTaskDeleteVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  deleteVm = (data: VmDeleteParams, params: RequestParams = {}) =>
    this.http.request<WithTaskDeleteVm[], ErrorBody>({
      path: `/delete-vm`,
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
   * @tags Vm
   * @name StartVm
   * @request POST:/start-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  startVm = (data: VmStartParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/start-vm`,
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
   * @tags Vm
   * @name RestartVm
   * @request POST:/restart-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  restartVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/restart-vm`,
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
   * @tags Vm
   * @name ForceRestartVm
   * @request POST:/force-restart-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  forceRestartVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/force-restart-vm`,
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
   * @tags Vm
   * @name ShutDownVm
   * @request POST:/shutdown-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  shutDownVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/shutdown-vm`,
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
   * @tags Vm
   * @name PoweroffVm
   * @request POST:/poweroff-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  poweroffVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/poweroff-vm`,
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
   * @tags Vm
   * @name SuspendVm
   * @request POST:/suspend-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  suspendVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/suspend-vm`,
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
   * @tags Vm
   * @name ResumeVm
   * @request POST:/resume-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  resumeVm = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/resume-vm`,
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
   * @tags Vm
   * @name AddVmDisk
   * @request POST:/add-vm-disk
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmDisk = (data: VmAddDiskParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/add-vm-disk`,
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
   * @tags Vm
   * @name UpdateVmDisk
   * @request POST:/update-vm-disk
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmDisk = (data: VmUpdateDiskParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/update-vm-disk`,
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
   * @tags Vm
   * @name ExpandVmDisk
   * @request POST:/expand-vm-disk
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  expandVmDisk = (data: VmExpandVmDiskParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/expand-vm-disk`,
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
   * @tags Vm
   * @name RemoveVmDisk
   * @request POST:/remove-vm-disk
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmDisk = (data: VmRemoveDiskParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-disk`,
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
   * @tags Vm
   * @name AddVmCdRom
   * @request POST:/add-vm-cd-rom
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmCdRom = (data: VmAddCdRomParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/add-vm-cd-rom`,
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
   * @tags Vm
   * @name RemoveVmCdRom
   * @request POST:/remove-vm-cd-rom
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmCdRom = (data: VmRemoveCdRomParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-cd-rom`,
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
   * @tags Vm
   * @name EjectIsoFromVmCdRom
   * @request POST:/eject-iso-from-vm-cd-rom
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  ejectIsoFromVmCdRom = (
    data: VmEjectCdRomParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/eject-iso-from-vm-cd-rom`,
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
   * @tags Vm
   * @name ToggleVmCdRomDisable
   * @request POST:/toggle-vm-cd-rom-disable
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  toggleVmCdRomDisable = (
    data: VmToggleCdRomDisableParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/toggle-vm-cd-rom-disable`,
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
   * @tags Vm
   * @name AddVmNic
   * @request POST:/add-vm-nic
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmNic = (data: VmAddNicParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/add-vm-nic`,
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
   * @tags Vm
   * @name UpdateVmNic
   * @request POST:/update-vm-nic
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmNic = (data: VmUpdateNicParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/update-vm-nic`,
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
   * @tags Vm
   * @name UpdateVmNicBasicInfo
   * @request POST:/update-vm-nic-basic-info
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmNicBasicInfo = (
    data: VmUpdateNicBasicInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-nic-basic-info`,
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
   * @tags Vm
   * @name UpdateVmNicAdvanceInfo
   * @request POST:/update-vm-nic-advance-info
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmNicAdvanceInfo = (
    data: VmUpdateNicAdvanceInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-nic-advance-info`,
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
   * @tags Vm
   * @name UpdateVmNicQosOption
   * @request POST:/update-vm-nic-qos-option
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmNicQosOption = (
    data: VmUpdateNicQosOptionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-nic-qos-option`,
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
   * @tags Vm
   * @name AddVmPciNic
   * @request POST:/add-vm-pci-nic
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmPciNic = (data: VmOperatePciNicParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/add-vm-pci-nic`,
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
   * @tags Vm
   * @name RemoveVmPciNic
   * @request POST:/remove-vm-pci-nic
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmPciNic = (data: VmOperatePciNicParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/remove-vm-pci-nic`,
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
   * @tags Vm
   * @name RemoveVmNic
   * @request POST:/remove-vm-nic
   * @deprecated
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmNic = (data: VmRemoveNicParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-nic`,
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
   * @tags Vm
   * @name RemoveVmNicByWhere
   * @request POST:/remove-vm-nic-by-where
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmNicByWhere = (
    data: VmRemoveNicByWhereParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-nic-by-where`,
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
   * @tags Vm
   * @name AddVmGpuDevice
   * @request POST:/add-vm-gpu-device
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmGpuDevice = (data: VmAddGpuDeviceParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/add-vm-gpu-device`,
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
   * @tags Vm
   * @name RemoveVmGpuDevice
   * @request POST:/remove-vm-gpu-device
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmGpuDevice = (
    data: VmRemoveGpuDeviceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-gpu-device`,
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
   * @tags Vm
   * @name InstallVmtools
   * @request POST:/install-vmtools
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  installVmtools = (data: InstallVmtoolsParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/install-vmtools`,
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
   * @tags Vm
   * @name MigrateVm
   * @request POST:/migrate-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  migrateVm = (data: VmMigrateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/migrate-vm`,
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
   * @tags Vm
   * @name MigrateVmAcrossCluster
   * @request POST:/migrate-vm-across-cluster
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  migrateVmAcrossCluster = (
    data: VmMigrateAcrossClusterParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/migrate-vm-across-cluster`,
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
   * @tags Vm
   * @name StopVmInCutoverMigration
   * @request POST:/stop-vm-in-cutover-migration
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  stopVmInCutoverMigration = (
    data: StopVmInCutoverMigrationParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/stop-vm-in-cutover-migration`,
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
   * @tags Vm
   * @name AbortMigrateVmAcrossCluster
   * @request POST:/abort-migrate-vm-across-cluster
   * @secure
   * @response `200` `(Task)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  abortMigrateVmAcrossCluster = (
    data: AbortMigrateVmAcrossClusterParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Task[], ErrorBody>({
      path: `/abort-migrate-vm-across-cluster`,
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
   * @tags Vm
   * @name AddVmToFolder
   * @request POST:/add-vm-to-folder
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  addVmToFolder = (data: VmAddFolderParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/add-vm-to-folder`,
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
   * @tags Vm
   * @name RemoveVmToFolder
   * @request POST:/remove-vm-from-folder
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  removeVmToFolder = (data: VmOperateParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/remove-vm-from-folder`,
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
   * @tags Vm
   * @name UpdateVmAdvancedOptions
   * @request POST:/update-vm-advanced-options
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmAdvancedOptions = (
    data: VmUpdateAdvancedOptionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-advanced-options`,
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
   * @tags Vm
   * @name UpdateVmHostOptions
   * @request POST:/update-vm-host-options
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmHostOptions = (
    data: VmUpdateHostOptionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-host-options`,
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
   * @tags Vm
   * @name ResetVmGuestOsPassword
   * @request POST:/reset-vm-guest-os-password
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  resetVmGuestOsPassword = (
    data: VmResetGuestOsPasswordParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/reset-vm-guest-os-password`,
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
   * @tags Vm
   * @name UpdateVmOwner
   * @request POST:/update-vm-owner
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmOwner = (data: VmUpdateOwnerParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-owner`,
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
   * @tags Vm
   * @name UpdateVmIoPolicy
   * @request POST:/update-vm-io-policy
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  updateVmIoPolicy = (
    data: VmUpdateIoPolicyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<WithTaskVm[], void | ErrorBody>({
      path: `/update-vm-io-policy`,
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
   * @tags Vm
   * @name ExportVm
   * @request POST:/export-vm
   * @secure
   * @response `200` `(WithTaskVmExportFile)[]`
   * @response `304` `void` Not modified
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  exportVm = (data: VmExportParams, params: RequestParams = {}) =>
    this.http.request<WithTaskVmExportFile[], void | ErrorBody>({
      path: `/export-vm`,
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
   * @tags Vm
   * @name ImportVm
   * @request POST:/import-vm
   * @secure
   * @response `200` `(WithTaskVm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  importVm = (data: VmImportParams[], params: RequestParams = {}) =>
    this.http.request<WithTaskVm[], ErrorBody>({
      path: `/import-vm`,
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
   * @tags Vm
   * @name GetVmGpuDeviceInfo
   * @request POST:/get-vm-gpu-device-info
   * @secure
   * @response `200` `(VmGpuInfo)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmGpuDeviceInfo = (data: GetVmsRequestBody, params: RequestParams = {}) =>
    this.http.request<VmGpuInfo[], ErrorBody>({
      path: `/get-vm-gpu-device-info`,
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
   * @tags Vm
   * @name GetVmVncInfo
   * @request POST:/get-vm-vnc-info
   * @secure
   * @response `200` `VmVncInfo`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmVncInfo = (data: GetVmVncInfoParams, params: RequestParams = {}) =>
    this.http.request<VmVncInfo, ErrorBody>({
      path: `/get-vm-vnc-info`,
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
   * @tags Vm
   * @name GetVms
   * @request POST:/get-vms
   * @secure
   * @response `200` `(Vm)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVms = (data: GetVmsRequestBody, params: RequestParams = {}) =>
    this.http.request<Vm[], ErrorBody>({
      path: `/get-vms`,
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
   * @tags Vm
   * @name GetVmsConnection
   * @request POST:/get-vms-connection
   * @secure
   * @response `200` `VmConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVmsConnection = (
    data: GetVmsConnectionRequestBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VmConnection, ErrorBody>({
      path: `/get-vms-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
