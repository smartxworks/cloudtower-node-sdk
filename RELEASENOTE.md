# RELEASE NOTE

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
