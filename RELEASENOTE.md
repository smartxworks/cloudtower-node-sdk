# RELEASE NOTE

## release 日期 2024-07-16

v2.16.0 release (tower version 4.2.0)

### bugfix

- [Vm], [VmVolume], [IscsiLun], [NvmfNameSpace], [NfsInode]: 更新 `unique_logical_size` 类型为 `double` （仅影响 jsdoc，不影响业务）

### update

- [HostApi]:
  - [create_host]: 新增 `vdses` 字段适配网络融合，新增 `zbsSpec` 字段适配 zbs 560 以上版本集群的添加
- [VmApi]:
  - [get_vms]: 新增 `bios_uuid` 字段

## release 日期 2024-05-11

v2.15.0 release (tower version 4.1.0)

### update

- [CommonHeader]: 新增默认返回 Header 类
- [ContentLanguage]: 新增枚举规范返回语言，用于设置请求头的 `content-language`
- [NestedLabel], [LabelApi]: `LabelApi` 将会返回一致的 `Label` 相关的属性，NestedLabel 额外返回 `key` 和 `value`。
- [Vm], [VmVolume], [IscsiLun], [NvmfNameSpace], [NfsInode]: 新增返回 `unique_logical_size` 用于表示资源的独占逻辑容量

### bugfix

- [VmApi]
  - [addVmNic], [removeVmNic], [removeVmNicByWhere], [updateVmNic], [updateVmNicBasicInfo], [updateVmNicAdvanceInfo], [updateVmNicQosOption]: 修复更新虚拟机网卡类 API 编辑后丢失部分网卡信息的问题
- [VmPlacementGroupApi]
  - [createVmPlacementGroup], [updateVmPlacementGroup]: 修复了创建与更新放置组时，`vm_vm_policy_enabled` 为 false 时无法更新组内虚拟机成员

## release 日期 2024-01-04

v2.14.0 release (tower version 4.0.0)

### update

- [ContentLibraryImageApi]:
  - [importContentLibraryImage]: 新增通过 url 导入内容库镜像 API
- [GpuDeviceApi]:
  - [getDetailVmInfoByGpuDevices]: 新增获取 GPU 设备关联的虚拟机 API
- [HostApi]:
  - [enterMaintenanceMode]: 新增进入维护模式 API
  - [enterMaintenanceModePreCheck]: 新增进入维护模式预检 API
  - [enterMaintenanceModePrecheckResult]: 新增获取进入维护模式预检结果 API
  - [exitMaintenanceMode]: 新增离开维护模式 API
  - [exitMaintenanceModePrecheckResult]: 新增离开维护模式预检 API
  - [powerOffHost]: 新增主机电源操作 API，用于关闭、重启主机
- [IscsiLunAPi]:
  - [copyIscsiLun]: 新增复制 iscsi lun API
- [NicApi]:
  - [getNics]: 额外返回 iommu_status 以及关联的虚拟机
- [TaskApi]:
  - [createTask]: 新增创建 Task API
  - [updateTask]: 新增更新 Task API
- [UserAuditLogApi]:
  - [createUserAuditLog]: 新增创建事件审计 API
- [VmApi]:
  - [getVmGpuDeviceInfo]: 新增根据虚拟机获取其挂载的 GPU 设备信息 API
  - [getVmVncInfo]: 新增获取 vm vnc 信息 API
  - [migrateVmAcrossCluster]\: 优化了报错逻辑，当目标主机存在且不在目标集群上时，直接报错
  - [rebuildVmFromSnapshot]: 重建虚拟机 API 支持配置 PCI 网卡
  - [createVm], [createVmFromTemplate], [createVmFromContentLibraryTemplate], [cloneVm], [rebuildVmFromSnapshot]: 创建虚拟机时支持配置虚拟机所属用户

### bugfix

- [ContentLibraryImageApi]:
  - [updateContentLibraryImage]: 修复了更新内容库镜像时，没有传递 name 会失败的问题
- [ElfImageApi]:
  - [updateElfImage]: 修复了更新镜像时，没有传递 name 会失败的问题
- [vmApi]:
  - [createVmFromContentLibraryTemplate]\: 修复模板卷存储策略包含三副本时，非完全克隆虚拟机失败，提示非完全克隆无法修改存储策略的问题


## release 日期 2023-11-07

v2.13.0 release (tower version 3.4.0)

### update

- [ROLEACTION] 新增 `MANAGE_CLUSTER_PRIORITIZED`

## release 日期 2023-10-19

v2.12.0 release (tower version 3.3.0)

### update

- [GpuDeviceApi] 新增 GPU 设备的支持，新增以下 API：
  - [getGpuDevices] 获取 GPU 设备列表
  - [getGpuDeviceConnections] 获取 GPU 设备数量
  - [switchGpuDeviceSriov] 切换 GPU 设备 sr-iov 开启
  - [updateGpuDeviceDescription] 更新 GPU 设备描述
  - [updateGpuDeviceUsage] 更新 GPU 设备用途
- [VmApi] 新增 GPU 设备支持：
  - 支持创建虚拟机，克隆虚拟机，从内容库模板创建虚拟机时额外配置 GPU 设备，需要指定主机
  - 新增 [addVmGpuDevice] 为已有虚拟机挂载 GPU 设备
  - 新增 [removeVmGpuDevice] 为已有虚拟机卸载 GPU 设备
- [VmApi] 新增 PCI 网卡支持：
  - 支持创建虚拟机，克隆虚拟机，从内容库模板创建虚拟机时额外配置 PCI 网卡，需要指定主机
  - 新增 [addVmPciNic] 支持为已有虚拟机挂载 PCI 网卡
  - 新增 [removeVmPciNic] 支持为已有的虚拟机卸载 PCI 网卡
- [VmApi] 优化卸载网卡:
  - [removeVmNic] `nic_index` 作为删除标记不够稳定，弃用
  - [removeVmNicByWhere] 新方法，支持使用 where 条件来筛选需要的网卡，对于 VmNic 而言，可以配合使用 vm + mac_address 的筛选， `{vm:<vm_where>, mac_address:<mac_address>}` 的形式来较为稳定的筛选出需要的 VmNic
- [NicApi] [updateNic] 支持通过 `nic_user_usage` 更新网口用途
- [LabelApi] 支持为 GPU 设备打标签

## release 日期 2023-09-01

v2.11.0 release (tower version 3.2.0)

### breaking change

- [VmApi]: [VmImportParams]: 由于 `VmNicParams` 支持配置 qos 配置，现在设计网卡的参数由 `VmNicParams` 更新为了 `VmImportNicParams`，类型和过去一致，没有 qos 支持。

### update

- feature: [VmVolumeApi]: [importVmVolume] [exportVmVolume]: 现在支持虚拟卷的导入与导出
- feature: [ContentLibraryVmTemplateApi]: [importContentLibraryVmTemplate] [exportContentLibraryVmTemplate]: 现在支持虚拟机模板的导入与导出
- feature: [VmApi]: [updateVmNicQosOption]: 现在支持通过 api 更新现有虚拟机网卡的 qos 属性
- optimize: [VmNicParams]: 现在支持配置 `qos` 参数，用于在创建虚拟机（直接创建，模板创建，快照重建，克隆创建）时配置虚拟机网卡的 qos 参数

### bugfix

- [VmApi]: [createVmFromTemplate] [createVmFromContentLibraryTemplate] [cloneVm] [rebuildVmFromSnapshot]: 修复了磁盘限速无法正确配置的问题，
  目前从模板创建，快照重建，克隆虚拟机时，仅支持配置与模板，快照或源虚拟机一致的 `io_policy` 并进行创建，原参数的 `io_policy` 被弃用
- [IscsiTargetApi] [IscsiLunApi] [NvmfSubsystemApi] [NvmfNamespaceApi]:
  [createIscsiTarget] [updateIscsiTarget] [createIscsiLun] [updateIscsiLun]
  [createNvmfSubsystem] [updateNvmfSubsystem] [createNvmfNamespace] [updateNvmfNamespace]:
  `bps_wr_maxLength` 可以被正常设置了
- [VmApi]: [createVmFromTemplate] [createVmFromContentLibraryTemplate]: 修复了单位无法被正常应用的 bug
- [GlobalAlertRuleApi]: [updateCustomizeAlertRule] 修复了特例报警无法正常更新的问题

## release 日期 2023-08-01

v2.10.0 release (tower version 3.1.0)

- feature: [AlertNotifierApi] 支持更新，删除以及创建新的报警通知配置

## release 日期 2023-07-18

v2.9.1 release (tower version 3.0.0)

- optimize: 优化 CloudTowerClient LDAP 登陆，当使用 UserSource.LDAP 作为 UserSource 时，自动切换成当前的 LDAP 登录源进行登陆，减少迁移成本。

## release 日期 2023-07-03

v2.9.0 release (tower version 3.0.0)

- feature: [SecurityGroupApi] 支持创建，更新与删除安全组
- feature: [SecurityPolicy] 支持创建，更新与删除自定义安全策略
- feature: [OvfApi], [VmExportFileApi], [VmApi] 支持虚拟机的导入与导出
- feature: [VlanApi] 支持 trunk vlan 的创建与编辑
- feature: [UserApi] [Login] 支持使用 authn_id 登陆，旧 LDAP 登陆方式被废弃
- optimize: 为 [Host], [Nic], [UsbDevice], [VmVolume], [VmVolumeSnapshot] 添加了 `EntityAsyncStatus` 已判断资源目前的状态

## release 日期 2022-05-04

v2.8.0 release

- optimize: VlanApi: [VmVlanCreationParams], [VmVlanUpdationParamsData], [ManagementVlanUpdationParamsData] 限制 `VlanId` 范围为 0~4095

## release 日期 2022-03-22

v2.7.0 release

- optimize: VmApi: [deleteVm] 更新参数类型为 `VmDeleteParams`，添加 `effect` 允许删除相关的快照
- feature: [VmUsage] 枚举添加:
  - `BUNDLE_APPLICATION`
- feature: [ROLE_ACTION] 枚举添加:
  - `MANAGE_OBSERVABILITY_PACKAGE`
  - `MANAGE_OBSERVABILITY_SERVICE`
- feature: [SoftwareEdition] 枚举添加：
  - `ENTERPRISE_PLUS`
- feature: [UploadResourceType] 枚举添加:
  - `HOST_PLUGIN_PACKAGE`
- feature: [TaskType] 枚举添加:
  - `HOST_PLUGIN`

## release 日期 2022-02-20

v2.6.0 release

- feature: [VmUsage] 枚举添加 `SKS_MANAGEMENT` 与 `REGISTRY`
- feature: [ROLE_ACTION] 枚举添加:
  - `MANAGE_SKS_SERVICE`
  - `MANAGE_SKS_LICENSE`
  - `CONFIGURE_SKS_SERVICE`
  - `CREATE_SKS_WORKLOAD_CLUSTER`
  - `DELETE_SKS_WORKLOAD_CLUSTER`
  - `UPDATE_SKS_WORKLOAD_CLUSTER`
  - `DOWNLOAD_SKS_WORKLOAD_CLUSTER_KUBECONFIG`

## release 日期 2023-01-03

v2.5.0 release

- bugfix: [IscsiTargetCommonParams]: 修复错误的 `BpsWrMaxSize` 为 `BpsWrMaxUnit`
- feature: IscsiLunSnapshotApi: [create_iscsi_lun_snapshot] 增加了同步创建 lun 快照的选项。
- feature: ClusterApi: [get_meta_leader]: 增加了获取集群 meta leader 的 api
- optimize: 增加 header 定义，可以从返回值中获取对应的 XTowerRequestID
- optimize: [NestedHost]: 嵌套的主机类型额外返回 management_ip
- optimize: UserApi: [login]: 重命名返回值类型为 `WithTaskLoginResponse`

## release 日期 2022-11-18

v2.4.1 release

- feature:CloudTowerApplicationApi: [CloudTowerApplicationApi] 新增 CloudTowerApplicationApi;
  - [getCloudTowerApplications] 获取应用;
  - [uploadCloudTowerApplicationPackage] 上传应用包;
  - [deleteCloudTowerApplicationPackage] 删除应用包;
  - [deployCloudTowerApplication] 部署应用;
  - [upgradeCloudTowerApplication] 升级应用;
  - [uninstallCloudTowerApplication] 删除应用;
- feature:CloudTowerApplicationPackageApi: [CloudTowerApplicationPackageApi] 新增 CloudTowerApplicationPackageApi;
  - [getCloudTowerApplicationPackages] 获取应用包.
- optimize: 存储容量, 内存容量相关的 api 参数都允许传入 `${field}_unit` 形式的参数来为输入参数设置单位，类型为 `ByteUnit`，默认为 `ByteUnit.B`;
- optimize: 带宽相关的 api 参数都允许传入 `${field}_unit` 形式的参数来为输入参数设置单位，类型为 `BpsUnit`，默认为 `BpsUnit.Bps`.
