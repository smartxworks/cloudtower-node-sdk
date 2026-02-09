# RELEASE NOTE

## release 日期 2026-02-09

v2.22.0 release (tower version 4.8.0)

### features

- 增加 [RegistryServiceApi] 用于镜像仓库的查询
- [BackupPlanApi]: 新增 [getBackupPlanWithoutExecutions]，用于查询不包含执行记录的备份计划
- [ReplicationPlanApi]: 新增 [getReplicationPlanWithoutExecutions]，用于查询不包含执行记录的复制计划
- [Host]: 新增字段 dirty_cache_space, dirty_cache_usage 和 failure_cache_space
- [Cluster]: 新增字段 dirty_cache_space, dirty_cache_usage 和 failure_cache_space
- [ClusterSettings]: 新增字段 default_storage_policy_stripe_num
- [VmVolumeSnapshot]: 新增字段 elf_storage_policy_stripe_num
- [VmVolume]: 新增字段 elf_storage_policy_stripe_num
- [NestedVirtualPrivateCloudService]: 新增字段 everoute_cluster
- [VmNic]: 新增字段 guest_info_ip_addresses 和 guest_info_ip_addresses_v6

## release 日期 2025-10-14

v2.21.0 release (tower version 4.7.0)

### features

- 增加 [EcpLicenseApi] 用于 ECP 许可信息的的查询
- 增加 [ReplicationServiceApi] 用于复制服务的查询
- 增加 [BusinessHostApi] 与 [BusinessHostGroupApi] 用于业务主机
- [VmApi]: 创建虚拟机类 API 支持在 ha 字段配置为 true 的情况下配置 ha_priority 字段用于配置
- [VmApi]: [updateVmBasicInfo] 支持配置编辑虚拟机的 ha_priority 字段，仅当 ha 为 true 或现 vm ha 字段已经为 true 时生效。
- [VmApi]: 为电源操作类 API 引入前置条件检查，避免未定义行为
- [VmApi]: 虚拟机支持 EC 存储策略的配置
- [VmVolumeApi]: 虚拟卷支持 EC 存储策略的配置
- [IscsiLunApi], [IscsiTargetApi], [NfsExportApi], [NfsInodeApi], [NvmfNamespaceApi], [NvmfSubsystemApi]: 增加 EC 存储策略的支持，允许副本数提升，精简置备转厚置备
- [ClusterApi]: 支持查询, 编辑集群常驻缓存功能
- [Host]: 新增字段 merged_status, connect_status 与 commited_memory_bytes 字段
- [Cluster]: 新增字段 commited_memory_bytes

### bugfix

- [VmApi]: 为创建虚拟机类 API 修复未配置 VPC 网卡的 IP 时创建出错
- [VmApi]: [createVmFromContentLibraryTemplateBatch] 修复单位未生效的问题

### breaking change

- [IscsiTargetApi]: [updateIscsiTarget] 入参的 data 字段类型由 IscsiTargetCommonParams 改为 IscsiTargetUpdationParamsData

## release 日期 2025-06-09

v2.20.0 release (tower version 4.6.0)

### feature

- [Vm], [VmVolume]: 新增 used_size 与 used_size_usage 字段，用于获取虚拟机与虚拟卷的已使用容量
- [ResourceChangeApi]: 新增 getResourceChange API 用于获取 Resource Change Events
- [PciDeviceApi]: 新增 getPciDevices API 用于获取 PCI 设备列表
- [TaskApi]: 为 createTask 新增 status 字段，用于指定任务状态
- [ReplicationPlanApi]: 新增 getReplicationPlan API 用于获取复制计划列表
- [SmtpServerApi]: 新增 getSmtpServer API 用于获取 SMTP 服务器列表
- [ReplicaVmApi]: 新增 getReplicaVms API 用于获取复制虚拟机列表
- [NetworkPolicyRuleServiceApi]:
  - 新增 getNetworkPolicyRuleServices API 用于获取「网络安全」的服务资源
  - 新增 createNetworkPolicyRuleService API 用于创建「网络安全」的服务资源
  - 新增 updateNetworkPolicyRuleService API 用于更新「网络安全」的服务资源
  - 新增 deleteNetworkPolicyRuleService API 用于删除「网络安全」的服务资源
- [SecurityPolicyApi]: [SecurityPolicyIngressEgressInput]: 支持配置 `service_ids` 用于指定「网络安全」的服务资源
- [SecurityPolicyApi]: [IPSecurityPolicy]: 支持配置 `ip_block`，用于从白名单/黑名单中排除部分 IP
- [IsolationPolicyApi]:
  - 新增 createIsolationPolicy API 用于创建「隔离策略」
  - 新增 updateIsolationPolicy API 用于更新「隔离策略」
  - 新增 deleteIsolationPolicy API 用于删除「隔离策略」
- [VirtualPrivateCloudExternalSubnetGroupApi]: 新增 getVirtualPrivateCloudExternalSubnetGroups API 用于获取「外部子网组」
- [VirtualPrivateCloudEdgeGatewayApi]: 新增 getVirtualPrivateCloudEdgeGateways API 用于获取「边缘网关」
- [VirtualPrivateCloudEdgeGatewayGroupApi]: 新增 getVirtualPrivateCloudEdgeGatewayGroups API 用于获取「边缘网关组」
- [VirtualPrivateCloudNatGatewayApi]: [VirtualPrivateCloudNatGatewayCreateParams]: 新增 `external_subnet_group_id` 用于配置外部子网组；新增 `external_ips`，用于配置主备转换地址。
- [VirtualPrivateCloudNatGatewayApi]: [VirtualPrivateCloudRouteGatewayUpdateParams]: 新增 `external_ips`，用于配置主备转换地址。
- [VirtualPrivateCloudRouterGatewayApi]:
  - [VirtualPrivateCloudRouterGatewayCreateParams]: 新增 `external_subnet_group_id` 用于配置外部子网组；新增 `external_ips`，用于配置主备转换地址。
  - [VirtualPrivateCloudRouterGatewayUpdateParams]: 新增 `external_ips`，用于配置主备转换地址。
- [VirtualPrivateCloudFloatingIPApi]: 新增 batchCreateVirtualPrivateCloudFloatingIPs API，用于批量分配浮动 IP。

### bugfix

- [VmApi]: [getVmVncInfo]: 修复生成的 vnc redirect url
- [VmApi]: [addVmNic] [updateVmNic] [updateVmNicBasicInfo]: 修复虚拟机网卡无法正确编辑 ip

## release 日期 2025-02-17

v2.19.0 release (tower version 4.5.0)

### breaking change

- [TaskApi]: [updateTask]: descripton 字段由 string 更新为 TaskDescription

### feature

- [BackupPlanApi]: 新增 getBackupRestorePointMetadata API 用于获取备份恢复点元数据;
- [NtpApi]: 新增 getNtpServiceUrl API 用于获取 Ntp 服务 URL;
- [ClusterApi]: 新增 getClusterStorageInfo API 用于获取集群存储信息;
- [ObservabilityApi]: 新增 clearSystemServiceAlertNotificationConfig API 用于清除系统服务报警信息

### optimize

- [BackupPlanApi]: [createBackupPlan]: 在 incremental_period 为 weekly 时，校验 incremental_weekdays 是否已输入;
- 为以下资源新增返回字段
  - [BackupPlan]: 新增 vms, phase, last_execute_status_message, last_manual_execute_status_message, backup_restore_point_count,valid_size_of_restore_point, backup_total_size, logical_size,backup_delay_option, delete_strategy,backup_plan_executions 和 backup_restore_points 字段;
  - [NestedVirtualPrivateCloudService]: 新增 internal_cidr 和 tep_ip_pools 字段;
  - [VirtualPrivateCloud]: 新增 vpc_service 字段;
  - [SecurityPolicy]: 新增 is_blocklist 字段;
  - [ContentLibraryVmTemplate]: 新增 vm_disks, vm_nics, clock_offset, cpu, cpu_model, firmware, ha, io_policy, local_created_at, max_bandwidth, max_bandwidth_policy, max_iops, max_iops_policy, template_config, video_type, win_opt 和 zbs_storage_info 字段;
  - [VirtualPrivateCloudExternalSubnets]: 新增 edge_gateway 和 exclusive 字段;
- [TaskApi]: [createTask], [updateTask]: 支持传入 started_at 和 finished_at 字段;

### bugfix

- [IscsiLunApi]: [copyIscsiLun]: 修复跨集群克隆 iscsi lun 失败;
- [ObservabilityApi]: [disassociateSystemServiceFromObsService]: 修复解除关系错误时无法正确返回错误信息。

## release 日期 2024-10-14

v2.18.0 release (tower version 4.4.0)

### feature

- [VmApi]: [createVmFromContentLibraryTemplateBatch]: 支持批量通过内容库模板创建虚拟机
- 新增备份相关 API
  - [BackupPlanExecutionApi]: 备份计划执行记录 API
  - [BackupPlanApi]: 备份计划管理 API
  - [BackupRestoreExecutionApi]: 备份计划恢复点执行记录 API
  - [BackupRestorePointApi]: 备份计划恢复点管理 API
  - [BackupServiceApi]: 备份服务 API
  - [BackupStoreRepositoryApi]: 备份存储库 API
  - [BackupTargetExecutionApi]: 备份虚拟机执行记录 API

### optimize

- [VmApi]: [installVmTools]: 优化虚拟机镜像挂载，现在无需输入虚拟机工具镜像 ID 即可挂载
- [LogCollectionApi]: [forceStopLogCollection]: 优化执行，不再会将日志收集任务置为失败
- [ContentLanguage]: 支持配置为 `*` 以同时返回所有支持的语言，返回值依旧是 string 类型，可以被 JSON 序列化为语言和实际值的键值对
- [SecurityPolicyApi]: 支持配置 alg_protocol
- [HostApi]: [createHost]: 支持添加主机时配置主机账户密码
- [SecurityPolicyIngressEgressInput]: 新增 type 字段以支持配置全部流量

### bugfix

- [SecurityGroupApi]: [updateSecurityGroup]: 修复无法正确更新安全组名称与描述

## release 日期 2024-08-21

v2.17.0 release (tower version 4.3.0)

### feature

- 新增 VPC 相关 API
  - [VirtualPrivateCloudApi] VPC 服务管理
  - [VirtualPrivateCloudClusterBindingApi] VPC 服务与集群关联关系
  - [VirtualPrivateCloudExternalSubnetApi] VPC 网络外部子网
  - [VirtualPrivateCloudFloatingIpApi] VPC 网络浮动 IP 管理
  - [VirtualPrivateCloudNatGatewayApi] VPC 网络 NAT 网关管理
  - [VirtualPrivateCloudRouterGatewayApi] VPC 网络路由网关管理
  - [VirtualPrivateCloudRouteTableApi] VPC 网络路由表管理
  - [VirtualPrivateCloudSecurityGroupApi] VPC 网络安全组管理
  - [VirtualPrivateCloudSecurityPolicyApi] VPC 网络安全策略管理
  - [VirtualPrivateCloudSubnetApi] VPC 子网管理
- [VmApi]: [updateVmNicVpc]: 更新虚拟机的 VPC 网卡

### update

- [ContentLibraryImage]: 新增 iscsi_luns 字段，用于记录分发至存算分离节点中的镜像的 lun 。
- [ContentLibraryImageApi]: []支持使用 iscsi_luns 进行搜索
- [VmApi]:
  - [createVm], [createVmFromContentLibraryTemplate], [createVmFromTemplate], [cloneVm], [rebuildVmFromSnapshot] 支持配置虚拟机的 VPC 网卡
  - [addVmNic], [updateVmNic] 支持配置 VPC 网卡

### bugfix

- [VmApi]: [updateVmDisk], [addVmDisk], [expandVmDisk], [removeVmDisk], [addVmCdRom], [removeVmCdRom], [ejectIsoFromVmCdRom], [toggleVmCdRomDisable]: 修复被修改虚拟机的虚拟盘会丢失限速设置以及 cdrom 的禁用的问题
- [vmApi]: [createVmFromContentLibraryTemplate]: 修复当内容库模板仅分发在存算分离的集群时，无法创建虚拟机的问题。

## release 日期 2024-07-16

v2.16.0 release (tower version 4.2.0)

### bugfix

- [Vm], [VmVolume], [IscsiLun], [NvmfNameSpace], [NfsInode]: 更新 `unique_logical_size` 类型为 `double` （仅影响 jsdoc，不影响业务）

### update

- [HostApi]:
  - [createHost]: 新增 `vdses` 字段适配网络融合，新增 `zbsSpec` 字段适配 zbs 560 以上版本集群的添加
- [VmApi]:
  - [getVms]: 新增 `bios_uuid` 字段

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
