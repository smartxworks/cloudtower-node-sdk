export enum ErrorCode {
  ResourceLocked = "ResourceLocked",
}

export interface ErrorBody {
  code?: ErrorCode;
  props?: any;
  stack?: string;
  message: string;

  /** @format int32 */
  status: number;
  operationName?: string;
  path: string;
}

export interface CommonHeader {
  "x-tower-request-id": string;
}

export interface NestedAlertRule {
  id: string;
}

export enum SeverityEnum {
  CRITICAL = "CRITICAL",
  INFO = "INFO",
  NOTICE = "NOTICE",
  SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED",
}

export interface NestedThresholds {
  /** @format int32 */
  quantile?: number | null;
  severity?: SeverityEnum | null;

  /** @format double */
  value?: number | null;
}

export enum AlertRuleObject {
  BRICK = "BRICK",
  CLUSTER = "CLUSTER",
  DISK = "DISK",
  HYPERVISOR = "HYPERVISOR",
  NETWORK = "NETWORK",
  NTP_SERVER = "NTP_SERVER",
  OBSERVABILITY_CONNECTED_SYSTEM_SERVICE = "OBSERVABILITY_CONNECTED_SYSTEM_SERVICE",
  OBSERVABILITY_SERVICE = "OBSERVABILITY_SERVICE",
  PHYSICAL_HOST = "PHYSICAL_HOST",
  SCVM = "SCVM",
  SNAPSHOT_PLAN = "SNAPSHOT_PLAN",
  STORAGE_CHUNK = "STORAGE_CHUNK",
  STORAGE_POOL = "STORAGE_POOL",
  SYSTEM_SERVICE = "SYSTEM_SERVICE",
  TIME_MACHINE_PLAN = "TIME_MACHINE_PLAN",
  VM = "VM",
  WITNESS = "WITNESS",
  WITNESS_NETWORK = "WITNESS_NETWORK",
  ZBS_ZONE = "ZBS_ZONE",
}

export enum AlertRuleUnit {
  BIT = "BIT",
  BYTE = "BYTE",
  BYTE_PER_SECOND = "BYTE_PER_SECOND",
  CELSIUS = "CELSIUS",
  HERTZ = "HERTZ",
  MICROSECOND = "MICROSECOND",
  NANOSECOND = "NANOSECOND",
  PERCENT = "PERCENT",
  SECOND = "SECOND",
  UNIT_UNSPECIFIED = "UNIT_UNSPECIFIED",
}

export interface GlobalAlertRule {
  alert_rules?: NestedAlertRule[] | null;
  boolean: boolean;
  cause: string;
  default_thresholds: NestedThresholds[];
  disabled: boolean;
  id: string;
  impact: string;
  message: string;
  name: string;
  object?: AlertRuleObject | null;
  operator: string;
  solution: string;
  thresholds: NestedThresholds[];
  unit: AlertRuleUnit;
}

export interface WithTaskGlobalAlertRule {
  task_id?: string | null;
  data: GlobalAlertRule;
}

export interface GlobalAlertRuleWhereInput {
  AND?: GlobalAlertRuleWhereInput[] | null;
  NOT?: GlobalAlertRuleWhereInput[] | null;
  OR?: GlobalAlertRuleWhereInput[] | null;
  alert_rules_every?: AlertRuleWhereInput | null;
  alert_rules_none?: AlertRuleWhereInput | null;
  alert_rules_some?: AlertRuleWhereInput | null;
  boolean?: boolean | null;
  boolean_not?: boolean | null;
  cause?: string | null;
  cause_contains?: string | null;
  cause_ends_with?: string | null;
  cause_gt?: string | null;
  cause_gte?: string | null;
  cause_in?: string[] | null;
  cause_lt?: string | null;
  cause_lte?: string | null;
  cause_not?: string | null;
  cause_not_contains?: string | null;
  cause_not_ends_with?: string | null;
  cause_not_in?: string[] | null;
  cause_not_starts_with?: string | null;
  cause_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  impact?: string | null;
  impact_contains?: string | null;
  impact_ends_with?: string | null;
  impact_gt?: string | null;
  impact_gte?: string | null;
  impact_in?: string[] | null;
  impact_lt?: string | null;
  impact_lte?: string | null;
  impact_not?: string | null;
  impact_not_contains?: string | null;
  impact_not_ends_with?: string | null;
  impact_not_in?: string[] | null;
  impact_not_starts_with?: string | null;
  impact_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  object?: AlertRuleObject | null;
  object_in?: AlertRuleObject[] | null;
  object_not?: AlertRuleObject | null;
  object_not_in?: AlertRuleObject[] | null;
  operator?: string | null;
  operator_contains?: string | null;
  operator_ends_with?: string | null;
  operator_gt?: string | null;
  operator_gte?: string | null;
  operator_in?: string[] | null;
  operator_lt?: string | null;
  operator_lte?: string | null;
  operator_not?: string | null;
  operator_not_contains?: string | null;
  operator_not_ends_with?: string | null;
  operator_not_in?: string[] | null;
  operator_not_starts_with?: string | null;
  operator_starts_with?: string | null;
  solution?: string | null;
  solution_contains?: string | null;
  solution_ends_with?: string | null;
  solution_gt?: string | null;
  solution_gte?: string | null;
  solution_in?: string[] | null;
  solution_lt?: string | null;
  solution_lte?: string | null;
  solution_not?: string | null;
  solution_not_contains?: string | null;
  solution_not_ends_with?: string | null;
  solution_not_in?: string[] | null;
  solution_not_starts_with?: string | null;
  solution_starts_with?: string | null;
  unit?: AlertRuleUnit | null;
  unit_in?: AlertRuleUnit[] | null;
  unit_not?: AlertRuleUnit | null;
  unit_not_in?: AlertRuleUnit[] | null;
}

export interface AlertRuleWhereInput {
  AND?: AlertRuleWhereInput[] | null;
  NOT?: AlertRuleWhereInput[] | null;
  OR?: AlertRuleWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  customized?: boolean | null;
  customized_not?: boolean | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  global_alert_rule?: GlobalAlertRuleWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
}

export interface ClusterWhereInput {
  AND?: ClusterWhereInput[] | null;
  NOT?: ClusterWhereInput[] | null;
  OR?: ClusterWhereInput[] | null;
  application_highest_version?: string | null;
  application_highest_version_contains?: string | null;
  application_highest_version_ends_with?: string | null;
  application_highest_version_gt?: string | null;
  application_highest_version_gte?: string | null;
  application_highest_version_in?: string[] | null;
  application_highest_version_lt?: string | null;
  application_highest_version_lte?: string | null;
  application_highest_version_not?: string | null;
  application_highest_version_not_contains?: string | null;
  application_highest_version_not_ends_with?: string | null;
  application_highest_version_not_in?: string[] | null;
  application_highest_version_not_starts_with?: string | null;
  application_highest_version_starts_with?: string | null;
  applications_every?: ApplicationWhereInput | null;
  applications_none?: ApplicationWhereInput | null;
  applications_some?: ApplicationWhereInput | null;
  architecture?: Architecture | null;
  architecture_in?: Architecture[] | null;
  architecture_not?: Architecture | null;
  architecture_not_in?: Architecture[] | null;
  auto_converge?: boolean | null;
  auto_converge_not?: boolean | null;
  connect_state?: ConnectState | null;
  connect_state_in?: ConnectState[] | null;
  connect_state_not?: ConnectState | null;
  connect_state_not_in?: ConnectState[] | null;
  consistency_groups_every?: ConsistencyGroupWhereInput | null;
  consistency_groups_none?: ConsistencyGroupWhereInput | null;
  consistency_groups_some?: ConsistencyGroupWhereInput | null;
  current_cpu_model?: string | null;
  current_cpu_model_contains?: string | null;
  current_cpu_model_ends_with?: string | null;
  current_cpu_model_gt?: string | null;
  current_cpu_model_gte?: string | null;
  current_cpu_model_in?: string[] | null;
  current_cpu_model_lt?: string | null;
  current_cpu_model_lte?: string | null;
  current_cpu_model_not?: string | null;
  current_cpu_model_not_contains?: string | null;
  current_cpu_model_not_ends_with?: string | null;
  current_cpu_model_not_in?: string[] | null;
  current_cpu_model_not_starts_with?: string | null;
  current_cpu_model_starts_with?: string | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;
  disconnected_date?: string | null;
  disconnected_date_gt?: string | null;
  disconnected_date_gte?: string | null;
  disconnected_date_in?: string[] | null;
  disconnected_date_lt?: string | null;
  disconnected_date_lte?: string | null;
  disconnected_date_not?: string | null;
  disconnected_date_not_in?: string[] | null;
  disconnected_reason?: ClusterConnectorErrorCode | null;
  disconnected_reason_in?: ClusterConnectorErrorCode[] | null;
  disconnected_reason_not?: ClusterConnectorErrorCode | null;
  disconnected_reason_not_in?: ClusterConnectorErrorCode[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  everoute_cluster?: EverouteClusterWhereInput | null;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int64 */
  failure_data_space_gt?: number | null;

  /** @format int64 */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format int64 */
  failure_data_space_lt?: number | null;

  /** @format int64 */
  failure_data_space_lte?: number | null;

  /** @format int64 */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;
  has_metrox?: boolean | null;
  has_metrox_not?: boolean | null;

  /** @format int32 */
  host_num?: number | null;

  /** @format int32 */
  host_num_gt?: number | null;

  /** @format int32 */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format int32 */
  host_num_lt?: number | null;

  /** @format int32 */
  host_num_lte?: number | null;

  /** @format int32 */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  hypervisor?: Hypervisor | null;
  hypervisor_in?: Hypervisor[] | null;
  hypervisor_not?: Hypervisor | null;
  hypervisor_not_in?: Hypervisor[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_all_flash?: boolean | null;
  is_all_flash_not?: boolean | null;
  iscsi_vip?: string | null;
  iscsi_vip_contains?: string | null;
  iscsi_vip_ends_with?: string | null;
  iscsi_vip_gt?: string | null;
  iscsi_vip_gte?: string | null;
  iscsi_vip_in?: string[] | null;
  iscsi_vip_lt?: string | null;
  iscsi_vip_lte?: string | null;
  iscsi_vip_not?: string | null;
  iscsi_vip_not_contains?: string | null;
  iscsi_vip_not_ends_with?: string | null;
  iscsi_vip_not_in?: string[] | null;
  iscsi_vip_not_starts_with?: string | null;
  iscsi_vip_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  license_expire_date?: string | null;
  license_expire_date_gt?: string | null;
  license_expire_date_gte?: string | null;
  license_expire_date_in?: string[] | null;
  license_expire_date_lt?: string | null;
  license_expire_date_lte?: string | null;
  license_expire_date_not?: string | null;
  license_expire_date_not_in?: string[] | null;
  license_serial?: string | null;
  license_serial_contains?: string | null;
  license_serial_ends_with?: string | null;
  license_serial_gt?: string | null;
  license_serial_gte?: string | null;
  license_serial_in?: string[] | null;
  license_serial_lt?: string | null;
  license_serial_lte?: string | null;
  license_serial_not?: string | null;
  license_serial_not_contains?: string | null;
  license_serial_not_ends_with?: string | null;
  license_serial_not_in?: string[] | null;
  license_serial_not_starts_with?: string | null;
  license_serial_starts_with?: string | null;
  license_sign_date?: string | null;
  license_sign_date_gt?: string | null;
  license_sign_date_gte?: string | null;
  license_sign_date_in?: string[] | null;
  license_sign_date_lt?: string | null;
  license_sign_date_lte?: string | null;
  license_sign_date_not?: string | null;
  license_sign_date_not_in?: string[] | null;
  license_type?: LicenseType | null;
  license_type_in?: LicenseType[] | null;
  license_type_not?: LicenseType | null;
  license_type_not_in?: LicenseType[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  maintenance_end_date?: string | null;
  maintenance_end_date_gt?: string | null;
  maintenance_end_date_gte?: string | null;
  maintenance_end_date_in?: string[] | null;
  maintenance_end_date_lt?: string | null;
  maintenance_end_date_lte?: string | null;
  maintenance_end_date_not?: string | null;
  maintenance_end_date_not_in?: string[] | null;
  maintenance_start_date?: string | null;
  maintenance_start_date_gt?: string | null;
  maintenance_start_date_gte?: string | null;
  maintenance_start_date_in?: string[] | null;
  maintenance_start_date_lt?: string | null;
  maintenance_start_date_lte?: string | null;
  maintenance_start_date_not?: string | null;
  maintenance_start_date_not_in?: string[] | null;
  management_vip?: string | null;
  management_vip_contains?: string | null;
  management_vip_ends_with?: string | null;
  management_vip_gt?: string | null;
  management_vip_gte?: string | null;
  management_vip_in?: string[] | null;
  management_vip_lt?: string | null;
  management_vip_lte?: string | null;
  management_vip_not?: string | null;
  management_vip_not_contains?: string | null;
  management_vip_not_ends_with?: string | null;
  management_vip_not_in?: string[] | null;
  management_vip_not_starts_with?: string | null;
  management_vip_starts_with?: string | null;

  /** @format int32 */
  max_chunk_num?: number | null;

  /** @format int32 */
  max_chunk_num_gt?: number | null;

  /** @format int32 */
  max_chunk_num_gte?: number | null;
  max_chunk_num_in?: number[] | null;

  /** @format int32 */
  max_chunk_num_lt?: number | null;

  /** @format int32 */
  max_chunk_num_lte?: number | null;

  /** @format int32 */
  max_chunk_num_not?: number | null;
  max_chunk_num_not_in?: number[] | null;

  /** @format int64 */
  max_physical_data_capacity?: number | null;

  /** @format int64 */
  max_physical_data_capacity_gt?: number | null;

  /** @format int64 */
  max_physical_data_capacity_gte?: number | null;
  max_physical_data_capacity_in?: number[] | null;

  /** @format int64 */
  max_physical_data_capacity_lt?: number | null;

  /** @format int64 */
  max_physical_data_capacity_lte?: number | null;

  /** @format int64 */
  max_physical_data_capacity_not?: number | null;
  max_physical_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  max_physical_data_capacity_per_node?: number | null;

  /** @format int64 */
  max_physical_data_capacity_per_node_gt?: number | null;

  /** @format int64 */
  max_physical_data_capacity_per_node_gte?: number | null;
  max_physical_data_capacity_per_node_in?: number[] | null;

  /** @format int64 */
  max_physical_data_capacity_per_node_lt?: number | null;

  /** @format int64 */
  max_physical_data_capacity_per_node_lte?: number | null;

  /** @format int64 */
  max_physical_data_capacity_per_node_not?: number | null;
  max_physical_data_capacity_per_node_not_in?: number[] | null;
  mgt_gateway?: string | null;
  mgt_gateway_contains?: string | null;
  mgt_gateway_ends_with?: string | null;
  mgt_gateway_gt?: string | null;
  mgt_gateway_gte?: string | null;
  mgt_gateway_in?: string[] | null;
  mgt_gateway_lt?: string | null;
  mgt_gateway_lte?: string | null;
  mgt_gateway_not?: string | null;
  mgt_gateway_not_contains?: string | null;
  mgt_gateway_not_ends_with?: string | null;
  mgt_gateway_not_in?: string[] | null;
  mgt_gateway_not_starts_with?: string | null;
  mgt_gateway_starts_with?: string | null;
  mgt_netmask?: string | null;
  mgt_netmask_contains?: string | null;
  mgt_netmask_ends_with?: string | null;
  mgt_netmask_gt?: string | null;
  mgt_netmask_gte?: string | null;
  mgt_netmask_in?: string[] | null;
  mgt_netmask_lt?: string | null;
  mgt_netmask_lte?: string | null;
  mgt_netmask_not?: string | null;
  mgt_netmask_not_contains?: string | null;
  mgt_netmask_not_ends_with?: string | null;
  mgt_netmask_not_in?: string[] | null;
  mgt_netmask_not_starts_with?: string | null;
  mgt_netmask_starts_with?: string | null;

  /** @format int64 */
  migration_data_size?: number | null;

  /** @format int64 */
  migration_data_size_gt?: number | null;

  /** @format int64 */
  migration_data_size_gte?: number | null;
  migration_data_size_in?: number[] | null;

  /** @format int64 */
  migration_data_size_lt?: number | null;

  /** @format int64 */
  migration_data_size_lte?: number | null;

  /** @format int64 */
  migration_data_size_not?: number | null;
  migration_data_size_not_in?: number[] | null;

  /** @format int64 */
  migration_speed?: number | null;

  /** @format int64 */
  migration_speed_gt?: number | null;

  /** @format int64 */
  migration_speed_gte?: number | null;
  migration_speed_in?: number[] | null;

  /** @format int64 */
  migration_speed_lt?: number | null;

  /** @format int64 */
  migration_speed_lte?: number | null;

  /** @format int64 */
  migration_speed_not?: number | null;
  migration_speed_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  ntp_mode?: NtpMode | null;
  ntp_mode_in?: NtpMode[] | null;
  ntp_mode_not?: NtpMode | null;
  ntp_mode_not_in?: NtpMode[] | null;
  nvme_over_rdma_enabled?: boolean | null;
  nvme_over_rdma_enabled_not?: boolean | null;
  nvme_over_tcp_enabled?: boolean | null;
  nvme_over_tcp_enabled_not?: boolean | null;
  nvmf_enabled?: boolean | null;
  nvmf_enabled_not?: boolean | null;
  pmem_enabled?: boolean | null;
  pmem_enabled_not?: boolean | null;

  /** @format int32 */
  provisioned_cpu_cores?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_gt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_gte?: number | null;
  provisioned_cpu_cores_for_active_vm_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_lt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_lte?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_not?: number | null;
  provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_gt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_lt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_lte?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format double */
  provisioned_for_active_vm_ratio?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_gt?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_gte?: number | null;
  provisioned_for_active_vm_ratio_in?: number[] | null;

  /** @format double */
  provisioned_for_active_vm_ratio_lt?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_lte?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio_not?: number | null;
  provisioned_for_active_vm_ratio_not_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes_lt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_lte?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format double */
  provisioned_ratio?: number | null;

  /** @format double */
  provisioned_ratio_gt?: number | null;

  /** @format double */
  provisioned_ratio_gte?: number | null;
  provisioned_ratio_in?: number[] | null;

  /** @format double */
  provisioned_ratio_lt?: number | null;

  /** @format double */
  provisioned_ratio_lte?: number | null;

  /** @format double */
  provisioned_ratio_not?: number | null;
  provisioned_ratio_not_in?: number[] | null;
  rdma_enabled?: boolean | null;
  rdma_enabled_not?: boolean | null;

  /** @format int64 */
  recover_data_size?: number | null;

  /** @format int64 */
  recover_data_size_gt?: number | null;

  /** @format int64 */
  recover_data_size_gte?: number | null;
  recover_data_size_in?: number[] | null;

  /** @format int64 */
  recover_data_size_lt?: number | null;

  /** @format int64 */
  recover_data_size_lte?: number | null;

  /** @format int64 */
  recover_data_size_not?: number | null;
  recover_data_size_not_in?: number[] | null;

  /** @format int64 */
  recover_speed?: number | null;

  /** @format int64 */
  recover_speed_gt?: number | null;

  /** @format int64 */
  recover_speed_gte?: number | null;
  recover_speed_in?: number[] | null;

  /** @format int64 */
  recover_speed_lt?: number | null;

  /** @format int64 */
  recover_speed_lte?: number | null;

  /** @format int64 */
  recover_speed_not?: number | null;
  recover_speed_not_in?: number[] | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service?: number | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service_gt?: number | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service_gte?: number | null;
  reserved_cpu_cores_for_system_service_in?: number[] | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service_lt?: number | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service_lte?: number | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service_not?: number | null;
  reserved_cpu_cores_for_system_service_not_in?: number[] | null;

  /** @format int32 */
  running_vm_num?: number | null;

  /** @format int32 */
  running_vm_num_gt?: number | null;

  /** @format int32 */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format int32 */
  running_vm_num_lt?: number | null;

  /** @format int32 */
  running_vm_num_lte?: number | null;

  /** @format int32 */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;
  settings?: ClusterSettingsWhereInput | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;

  /** @format int32 */
  stopped_vm_num?: number | null;

  /** @format int32 */
  stopped_vm_num_gt?: number | null;

  /** @format int32 */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format int32 */
  stopped_vm_num_lt?: number | null;

  /** @format int32 */
  stopped_vm_num_lte?: number | null;

  /** @format int32 */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;
  stretch?: boolean | null;
  stretch_not?: boolean | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int32 */
  suspended_vm_num_gt?: number | null;

  /** @format int32 */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format int32 */
  suspended_vm_num_lt?: number | null;

  /** @format int32 */
  suspended_vm_num_lte?: number | null;

  /** @format int32 */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int64 */
  total_cache_capacity_gt?: number | null;

  /** @format int64 */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity_lt?: number | null;

  /** @format int64 */
  total_cache_capacity_lte?: number | null;

  /** @format int64 */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int32 */
  total_cpu_cores_gt?: number | null;

  /** @format int32 */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores_lt?: number | null;

  /** @format int32 */
  total_cpu_cores_lte?: number | null;

  /** @format int32 */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_cpu_hz_gt?: number | null;

  /** @format int64 */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz_lt?: number | null;

  /** @format int64 */
  total_cpu_hz_lte?: number | null;

  /** @format int64 */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_sockets?: number | null;

  /** @format int32 */
  total_cpu_sockets_gt?: number | null;

  /** @format int32 */
  total_cpu_sockets_gte?: number | null;
  total_cpu_sockets_in?: number[] | null;

  /** @format int32 */
  total_cpu_sockets_lt?: number | null;

  /** @format int32 */
  total_cpu_sockets_lte?: number | null;

  /** @format int32 */
  total_cpu_sockets_not?: number | null;
  total_cpu_sockets_not_in?: number[] | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_data_capacity_gt?: number | null;

  /** @format int64 */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format int64 */
  total_data_capacity_lt?: number | null;

  /** @format int64 */
  total_data_capacity_lte?: number | null;

  /** @format int64 */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  total_memory_bytes_gt?: number | null;

  /** @format int64 */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes_lt?: number | null;

  /** @format int64 */
  total_memory_bytes_lte?: number | null;

  /** @format int64 */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
  type?: ClusterType | null;
  type_in?: ClusterType[] | null;
  type_not?: ClusterType | null;
  type_not_in?: ClusterType[] | null;
  upgrade_tool_version?: string | null;
  upgrade_tool_version_contains?: string | null;
  upgrade_tool_version_ends_with?: string | null;
  upgrade_tool_version_gt?: string | null;
  upgrade_tool_version_gte?: string | null;
  upgrade_tool_version_in?: string[] | null;
  upgrade_tool_version_lt?: string | null;
  upgrade_tool_version_lte?: string | null;
  upgrade_tool_version_not?: string | null;
  upgrade_tool_version_not_contains?: string | null;
  upgrade_tool_version_not_ends_with?: string | null;
  upgrade_tool_version_not_in?: string[] | null;
  upgrade_tool_version_not_starts_with?: string | null;
  upgrade_tool_version_starts_with?: string | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format int64 */
  used_data_space_gt?: number | null;

  /** @format int64 */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format int64 */
  used_data_space_lt?: number | null;

  /** @format int64 */
  used_data_space_lte?: number | null;

  /** @format int64 */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;

  /** @format int64 */
  valid_data_space?: number | null;

  /** @format int64 */
  valid_data_space_gt?: number | null;

  /** @format int64 */
  valid_data_space_gte?: number | null;
  valid_data_space_in?: number[] | null;

  /** @format int64 */
  valid_data_space_lt?: number | null;

  /** @format int64 */
  valid_data_space_lte?: number | null;

  /** @format int64 */
  valid_data_space_not?: number | null;
  valid_data_space_not_in?: number[] | null;
  vcenterAccount?: VcenterAccountWhereInput | null;
  vdses_every?: VdsWhereInput | null;
  vdses_none?: VdsWhereInput | null;
  vdses_some?: VdsWhereInput | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
  vhost_enabled?: boolean | null;
  vhost_enabled_not?: boolean | null;
  vm_folders_every?: VmFolderWhereInput | null;
  vm_folders_none?: VmFolderWhereInput | null;
  vm_folders_some?: VmFolderWhereInput | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  witness?: WitnessWhereInput | null;
  zones_every?: ZoneWhereInput | null;
  zones_none?: ZoneWhereInput | null;
  zones_some?: ZoneWhereInput | null;
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | null;
  NOT?: ApplicationWhereInput[] | null;
  OR?: ApplicationWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  error_message?: string | null;
  error_message_contains?: string | null;
  error_message_ends_with?: string | null;
  error_message_gt?: string | null;
  error_message_gte?: string | null;
  error_message_in?: string[] | null;
  error_message_lt?: string | null;
  error_message_lte?: string | null;
  error_message_not?: string | null;
  error_message_not_contains?: string | null;
  error_message_not_ends_with?: string | null;
  error_message_not_in?: string[] | null;
  error_message_not_starts_with?: string | null;
  error_message_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  image_name?: string | null;
  image_name_contains?: string | null;
  image_name_ends_with?: string | null;
  image_name_gt?: string | null;
  image_name_gte?: string | null;
  image_name_in?: string[] | null;
  image_name_lt?: string | null;
  image_name_lte?: string | null;
  image_name_not?: string | null;
  image_name_not_contains?: string | null;
  image_name_not_ends_with?: string | null;
  image_name_not_in?: string[] | null;
  image_name_not_starts_with?: string | null;
  image_name_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  memory?: number | null;

  /** @format int64 */
  memory_gt?: number | null;

  /** @format int64 */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format int64 */
  memory_lt?: number | null;

  /** @format int64 */
  memory_lte?: number | null;

  /** @format int64 */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  state?: ApplicationState | null;
  state_in?: ApplicationState[] | null;
  state_not?: ApplicationState | null;
  state_not_in?: ApplicationState[] | null;
  storage_ip?: string | null;
  storage_ip_contains?: string | null;
  storage_ip_ends_with?: string | null;
  storage_ip_gt?: string | null;
  storage_ip_gte?: string | null;
  storage_ip_in?: string[] | null;
  storage_ip_lt?: string | null;
  storage_ip_lte?: string | null;
  storage_ip_not?: string | null;
  storage_ip_not_contains?: string | null;
  storage_ip_not_ends_with?: string | null;
  storage_ip_not_in?: string[] | null;
  storage_ip_not_starts_with?: string | null;
  storage_ip_starts_with?: string | null;
  type?: ApplicationType | null;
  type_in?: ApplicationType[] | null;
  type_not?: ApplicationType | null;
  type_not_in?: ApplicationType[] | null;
  update_time?: string | null;
  update_time_gt?: string | null;
  update_time_gte?: string | null;
  update_time_in?: string[] | null;
  update_time_lt?: string | null;
  update_time_lte?: string | null;
  update_time_not?: string | null;
  update_time_not_in?: string[] | null;

  /** @format int32 */
  vcpu?: number | null;

  /** @format int32 */
  vcpu_gt?: number | null;

  /** @format int32 */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format int32 */
  vcpu_lt?: number | null;

  /** @format int32 */
  vcpu_lte?: number | null;

  /** @format int32 */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
  vm?: VmWhereInput | null;

  /** @format int64 */
  volume_size?: number | null;

  /** @format int64 */
  volume_size_gt?: number | null;

  /** @format int64 */
  volume_size_gte?: number | null;
  volume_size_in?: number[] | null;

  /** @format int64 */
  volume_size_lt?: number | null;

  /** @format int64 */
  volume_size_lte?: number | null;

  /** @format int64 */
  volume_size_not?: number | null;
  volume_size_not_in?: number[] | null;
}

export enum ApplicationState {
  DEPLOYED = "DEPLOYED",
  DEPLOYING = "DEPLOYING",
  DEPLOY_ERROR = "DEPLOY_ERROR",
  EDITING = "EDITING",
  NOT_DEPLOYED = "NOT_DEPLOYED",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  STOP_ERROR = "STOP_ERROR",
  UPGRADING = "UPGRADING",
}

export enum ApplicationType {
  MONITOR = "MONITOR",
}

export interface VmWhereInput {
  AND?: VmWhereInput[] | null;
  NOT?: VmWhereInput[] | null;
  OR?: VmWhereInput[] | null;
  bios_uuid?: string | null;
  bios_uuid_contains?: string | null;
  bios_uuid_ends_with?: string | null;
  bios_uuid_gt?: string | null;
  bios_uuid_gte?: string | null;
  bios_uuid_in?: string[] | null;
  bios_uuid_lt?: string | null;
  bios_uuid_lte?: string | null;
  bios_uuid_not?: string | null;
  bios_uuid_not_contains?: string | null;
  bios_uuid_not_ends_with?: string | null;
  bios_uuid_not_in?: string[] | null;
  bios_uuid_not_starts_with?: string | null;
  bios_uuid_starts_with?: string | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cloud_init_supported?: boolean | null;
  cloud_init_supported_not?: boolean | null;
  cluster?: ClusterWhereInput | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;

  /** @format double */
  cpu_usage?: number | null;

  /** @format double */
  cpu_usage_gt?: number | null;

  /** @format double */
  cpu_usage_gte?: number | null;
  cpu_usage_in?: number[] | null;

  /** @format double */
  cpu_usage_lt?: number | null;

  /** @format double */
  cpu_usage_lte?: number | null;

  /** @format double */
  cpu_usage_not?: number | null;
  cpu_usage_not_in?: number[] | null;
  deleted_at?: string | null;
  deleted_at_gt?: string | null;
  deleted_at_gte?: string | null;
  deleted_at_in?: string[] | null;
  deleted_at_lt?: string | null;
  deleted_at_lte?: string | null;
  deleted_at_not?: string | null;
  deleted_at_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  dns_servers?: string | null;
  dns_servers_contains?: string | null;
  dns_servers_ends_with?: string | null;
  dns_servers_gt?: string | null;
  dns_servers_gte?: string | null;
  dns_servers_in?: string[] | null;
  dns_servers_lt?: string | null;
  dns_servers_lte?: string | null;
  dns_servers_not?: string | null;
  dns_servers_not_contains?: string | null;
  dns_servers_not_ends_with?: string | null;
  dns_servers_not_in?: string[] | null;
  dns_servers_not_starts_with?: string | null;
  dns_servers_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  entity_filter_results_every?: VmEntityFilterResultWhereInput | null;
  entity_filter_results_none?: VmEntityFilterResultWhereInput | null;
  entity_filter_results_some?: VmEntityFilterResultWhereInput | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  folder?: VmFolderWhereInput | null;
  gpu_devices_every?: GpuDeviceWhereInput | null;
  gpu_devices_none?: GpuDeviceWhereInput | null;
  gpu_devices_some?: GpuDeviceWhereInput | null;
  guest_cpu_model?: string | null;
  guest_cpu_model_contains?: string | null;
  guest_cpu_model_ends_with?: string | null;
  guest_cpu_model_gt?: string | null;
  guest_cpu_model_gte?: string | null;
  guest_cpu_model_in?: string[] | null;
  guest_cpu_model_lt?: string | null;
  guest_cpu_model_lte?: string | null;
  guest_cpu_model_not?: string | null;
  guest_cpu_model_not_contains?: string | null;
  guest_cpu_model_not_ends_with?: string | null;
  guest_cpu_model_not_in?: string[] | null;
  guest_cpu_model_not_starts_with?: string | null;
  guest_cpu_model_starts_with?: string | null;
  guest_os_type?: VmGuestsOperationSystem | null;
  guest_os_type_in?: VmGuestsOperationSystem[] | null;
  guest_os_type_not?: VmGuestsOperationSystem | null;
  guest_os_type_not_in?: VmGuestsOperationSystem[] | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_size_usage_gt?: number | null;

  /** @format double */
  guest_size_usage_gte?: number | null;
  guest_size_usage_in?: number[] | null;

  /** @format double */
  guest_size_usage_lt?: number | null;

  /** @format double */
  guest_size_usage_lte?: number | null;

  /** @format double */
  guest_size_usage_not?: number | null;
  guest_size_usage_not_in?: number[] | null;

  /** @format int64 */
  guest_used_size?: number | null;

  /** @format int64 */
  guest_used_size_gt?: number | null;

  /** @format int64 */
  guest_used_size_gte?: number | null;
  guest_used_size_in?: number[] | null;

  /** @format int64 */
  guest_used_size_lt?: number | null;

  /** @format int64 */
  guest_used_size_lte?: number | null;

  /** @format int64 */
  guest_used_size_not?: number | null;
  guest_used_size_not_in?: number[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  host?: HostWhereInput | null;
  hostname?: string | null;
  hostname_contains?: string | null;
  hostname_ends_with?: string | null;
  hostname_gt?: string | null;
  hostname_gte?: string | null;
  hostname_in?: string[] | null;
  hostname_lt?: string | null;
  hostname_lte?: string | null;
  hostname_not?: string | null;
  hostname_not_contains?: string | null;
  hostname_not_ends_with?: string | null;
  hostname_not_in?: string[] | null;
  hostname_not_starts_with?: string | null;
  hostname_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  in_recycle_bin?: boolean | null;
  in_recycle_bin_not?: boolean | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  ips?: string | null;
  ips_contains?: string | null;
  ips_ends_with?: string | null;
  ips_gt?: string | null;
  ips_gte?: string | null;
  ips_in?: string[] | null;
  ips_lt?: string | null;
  ips_lte?: string | null;
  ips_not?: string | null;
  ips_not_contains?: string | null;
  ips_not_ends_with?: string | null;
  ips_not_in?: string[] | null;
  ips_not_starts_with?: string | null;
  ips_starts_with?: string | null;
  isolation_policy?: IsolationPolicyWhereInput | null;
  kernel_info?: string | null;
  kernel_info_contains?: string | null;
  kernel_info_ends_with?: string | null;
  kernel_info_gt?: string | null;
  kernel_info_gte?: string | null;
  kernel_info_in?: string[] | null;
  kernel_info_lt?: string | null;
  kernel_info_lte?: string | null;
  kernel_info_not?: string | null;
  kernel_info_not_contains?: string | null;
  kernel_info_not_ends_with?: string | null;
  kernel_info_not_in?: string[] | null;
  kernel_info_not_starts_with?: string | null;
  kernel_info_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  last_shutdown_time?: string | null;
  last_shutdown_time_gt?: string | null;
  last_shutdown_time_gte?: string | null;
  last_shutdown_time_in?: string[] | null;
  last_shutdown_time_lt?: string | null;
  last_shutdown_time_lte?: string | null;
  last_shutdown_time_not?: string | null;
  last_shutdown_time_not_in?: string[] | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  logical_size_bytes?: number | null;

  /** @format int64 */
  logical_size_bytes_gt?: number | null;

  /** @format int64 */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format int64 */
  logical_size_bytes_lt?: number | null;

  /** @format int64 */
  logical_size_bytes_lte?: number | null;

  /** @format int64 */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;

  /** @format int64 */
  max_bandwidth?: number | null;

  /** @format int64 */
  max_bandwidth_gt?: number | null;

  /** @format int64 */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format int64 */
  max_bandwidth_lt?: number | null;

  /** @format int64 */
  max_bandwidth_lte?: number | null;

  /** @format int64 */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int32 */
  max_iops?: number | null;

  /** @format int32 */
  max_iops_gt?: number | null;

  /** @format int32 */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format int32 */
  max_iops_lt?: number | null;

  /** @format int32 */
  max_iops_lte?: number | null;

  /** @format int32 */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int64 */
  memory?: number | null;

  /** @format int64 */
  memory_gt?: number | null;

  /** @format int64 */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format int64 */
  memory_lt?: number | null;

  /** @format int64 */
  memory_lte?: number | null;

  /** @format int64 */
  memory_not?: number | null;
  memory_not_in?: number[] | null;

  /** @format double */
  memory_usage?: number | null;

  /** @format double */
  memory_usage_gt?: number | null;

  /** @format double */
  memory_usage_gte?: number | null;
  memory_usage_in?: number[] | null;

  /** @format double */
  memory_usage_lt?: number | null;

  /** @format double */
  memory_usage_lte?: number | null;

  /** @format double */
  memory_usage_not?: number | null;
  memory_usage_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nested_virtualization?: boolean | null;
  nested_virtualization_not?: boolean | null;
  node_ip?: string | null;
  node_ip_contains?: string | null;
  node_ip_ends_with?: string | null;
  node_ip_gt?: string | null;
  node_ip_gte?: string | null;
  node_ip_in?: string[] | null;
  node_ip_lt?: string | null;
  node_ip_lte?: string | null;
  node_ip_not?: string | null;
  node_ip_not_contains?: string | null;
  node_ip_not_ends_with?: string | null;
  node_ip_not_in?: string[] | null;
  node_ip_not_starts_with?: string | null;
  node_ip_starts_with?: string | null;
  original_name?: string | null;
  original_name_contains?: string | null;
  original_name_ends_with?: string | null;
  original_name_gt?: string | null;
  original_name_gte?: string | null;
  original_name_in?: string[] | null;
  original_name_lt?: string | null;
  original_name_lte?: string | null;
  original_name_not?: string | null;
  original_name_not_contains?: string | null;
  original_name_not_ends_with?: string | null;
  original_name_not_in?: string[] | null;
  original_name_not_starts_with?: string | null;
  original_name_starts_with?: string | null;
  os?: string | null;
  os_contains?: string | null;
  os_ends_with?: string | null;
  os_gt?: string | null;
  os_gte?: string | null;
  os_in?: string[] | null;
  os_lt?: string | null;
  os_lte?: string | null;
  os_not?: string | null;
  os_not_contains?: string | null;
  os_not_ends_with?: string | null;
  os_not_in?: string[] | null;
  os_not_starts_with?: string | null;
  os_starts_with?: string | null;
  pci_nics_every?: NicWhereInput | null;
  pci_nics_none?: NicWhereInput | null;
  pci_nics_some?: NicWhereInput | null;
  protected?: boolean | null;
  protected_not?: boolean | null;

  /** @format int64 */
  provisioned_size?: number | null;

  /** @format int64 */
  provisioned_size_gt?: number | null;

  /** @format int64 */
  provisioned_size_gte?: number | null;
  provisioned_size_in?: number[] | null;

  /** @format int64 */
  provisioned_size_lt?: number | null;

  /** @format int64 */
  provisioned_size_lte?: number | null;

  /** @format int64 */
  provisioned_size_not?: number | null;
  provisioned_size_not_in?: number[] | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  snapshot_plan?: SnapshotPlanWhereInput | null;
  snapshots_every?: VmSnapshotWhereInput | null;
  snapshots_none?: VmSnapshotWhereInput | null;
  snapshots_some?: VmSnapshotWhereInput | null;
  status?: VmStatus | null;
  status_in?: VmStatus[] | null;
  status_not?: VmStatus | null;
  status_not_in?: VmStatus[] | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format double */
  unique_logical_size_gt?: number | null;

  /** @format double */
  unique_logical_size_gte?: number | null;
  unique_logical_size_in?: number[] | null;

  /** @format double */
  unique_logical_size_lt?: number | null;

  /** @format double */
  unique_logical_size_lte?: number | null;

  /** @format double */
  unique_logical_size_not?: number | null;
  unique_logical_size_not_in?: number[] | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  usb_devices_every?: UsbDeviceWhereInput | null;
  usb_devices_none?: UsbDeviceWhereInput | null;
  usb_devices_some?: UsbDeviceWhereInput | null;

  /** @format int32 */
  vcpu?: number | null;

  /** @format int32 */
  vcpu_gt?: number | null;

  /** @format int32 */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format int32 */
  vcpu_lt?: number | null;

  /** @format int32 */
  vcpu_lte?: number | null;

  /** @format int32 */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  video_type?: VmVideoType | null;
  video_type_in?: VmVideoType[] | null;
  video_type_not?: VmVideoType | null;
  video_type_not_in?: VmVideoType[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
  vm_nics_every?: VmNicWhereInput | null;
  vm_nics_none?: VmNicWhereInput | null;
  vm_nics_some?: VmNicWhereInput | null;
  vm_placement_group_every?: VmPlacementGroupWhereInput | null;
  vm_placement_group_none?: VmPlacementGroupWhereInput | null;
  vm_placement_group_some?: VmPlacementGroupWhereInput | null;
  vm_tools_status?: VmToolsStatus | null;
  vm_tools_status_in?: VmToolsStatus[] | null;
  vm_tools_status_not?: VmToolsStatus | null;
  vm_tools_status_not_in?: VmToolsStatus[] | null;
  vm_tools_version?: string | null;
  vm_tools_version_contains?: string | null;
  vm_tools_version_ends_with?: string | null;
  vm_tools_version_gt?: string | null;
  vm_tools_version_gte?: string | null;
  vm_tools_version_in?: string[] | null;
  vm_tools_version_lt?: string | null;
  vm_tools_version_lte?: string | null;
  vm_tools_version_not?: string | null;
  vm_tools_version_not_contains?: string | null;
  vm_tools_version_not_ends_with?: string | null;
  vm_tools_version_not_in?: string[] | null;
  vm_tools_version_not_starts_with?: string | null;
  vm_tools_version_starts_with?: string | null;
  vm_usage?: VmUsage | null;
  vm_usage_in?: VmUsage[] | null;
  vm_usage_not?: VmUsage | null;
  vm_usage_not_in?: VmUsage[] | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export enum VmClockOffset {
  LOCALTIME = "LOCALTIME",
  UTC = "UTC",
}

export enum EntityAsyncStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

export interface VmEntityFilterResultWhereInput {
  AND?: VmEntityFilterResultWhereInput[] | null;
  NOT?: VmEntityFilterResultWhereInput[] | null;
  OR?: VmEntityFilterResultWhereInput[] | null;
  entityFilter?: EntityFilterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  vm?: VmWhereInput | null;
}

export interface EntityFilterWhereInput {
  AND?: EntityFilterWhereInput[] | null;
  NOT?: EntityFilterWhereInput[] | null;
  OR?: EntityFilterWhereInput[] | null;
  apply_to_all_clusters?: boolean | null;
  apply_to_all_clusters_not?: boolean | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;
  entity_type?: EntityType | null;
  entity_type_in?: EntityType[] | null;
  entity_type_not?: EntityType | null;
  entity_type_not_in?: EntityType[] | null;
  exec_failed_cluster_every?: ClusterWhereInput | null;
  exec_failed_cluster_none?: ClusterWhereInput | null;
  exec_failed_cluster_some?: ClusterWhereInput | null;
  filter_status?: FilterStatus | null;
  filter_status_in?: FilterStatus[] | null;
  filter_status_not?: FilterStatus | null;
  filter_status_not_in?: FilterStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  last_executed_at?: string | null;
  last_executed_at_gt?: string | null;
  last_executed_at_gte?: string | null;
  last_executed_at_in?: string[] | null;
  last_executed_at_lt?: string | null;
  last_executed_at_lte?: string | null;
  last_executed_at_not?: string | null;
  last_executed_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  preset?: string | null;
  preset_contains?: string | null;
  preset_ends_with?: string | null;
  preset_gt?: string | null;
  preset_gte?: string | null;
  preset_in?: string[] | null;
  preset_lt?: string | null;
  preset_lte?: string | null;
  preset_not?: string | null;
  preset_not_contains?: string | null;
  preset_not_ends_with?: string | null;
  preset_not_in?: string[] | null;
  preset_not_starts_with?: string | null;
  preset_starts_with?: string | null;
}

export enum EntityType {
  VM = "VM",
}

export enum FilterStatus {
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  INITIALIZING = "INITIALIZING",
  PARTIAL_SUCCESSED = "PARTIAL_SUCCESSED",
  SUCCESSED = "SUCCESSED",
}

export enum VmFirmware {
  BIOS = "BIOS",
  UEFI = "UEFI",
}

export interface VmFolderWhereInput {
  AND?: VmFolderWhereInput[] | null;
  NOT?: VmFolderWhereInput[] | null;
  OR?: VmFolderWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface GpuDeviceWhereInput {
  AND?: GpuDeviceWhereInput[] | null;
  NOT?: GpuDeviceWhereInput[] | null;
  OR?: GpuDeviceWhereInput[] | null;

  /** @format int32 */
  assigned_vgpus_num?: number | null;

  /** @format int32 */
  assigned_vgpus_num_gt?: number | null;

  /** @format int32 */
  assigned_vgpus_num_gte?: number | null;
  assigned_vgpus_num_in?: number[] | null;

  /** @format int32 */
  assigned_vgpus_num_lt?: number | null;

  /** @format int32 */
  assigned_vgpus_num_lte?: number | null;

  /** @format int32 */
  assigned_vgpus_num_not?: number | null;
  assigned_vgpus_num_not_in?: number[] | null;

  /** @format int32 */
  available_vgpus_num?: number | null;

  /** @format int32 */
  available_vgpus_num_gt?: number | null;

  /** @format int32 */
  available_vgpus_num_gte?: number | null;
  available_vgpus_num_in?: number[] | null;

  /** @format int32 */
  available_vgpus_num_lt?: number | null;

  /** @format int32 */
  available_vgpus_num_lte?: number | null;

  /** @format int32 */
  available_vgpus_num_not?: number | null;
  available_vgpus_num_not_in?: number[] | null;
  brand?: string | null;
  brand_contains?: string | null;
  brand_ends_with?: string | null;
  brand_gt?: string | null;
  brand_gte?: string | null;
  brand_in?: string[] | null;
  brand_lt?: string | null;
  brand_lte?: string | null;
  brand_not?: string | null;
  brand_not_contains?: string | null;
  brand_not_ends_with?: string | null;
  brand_not_in?: string[] | null;
  brand_not_starts_with?: string | null;
  brand_starts_with?: string | null;
  bus_location?: string | null;
  bus_location_contains?: string | null;
  bus_location_ends_with?: string | null;
  bus_location_gt?: string | null;
  bus_location_gte?: string | null;
  bus_location_in?: string[] | null;
  bus_location_lt?: string | null;
  bus_location_lte?: string | null;
  bus_location_not?: string | null;
  bus_location_not_contains?: string | null;
  bus_location_not_ends_with?: string | null;
  bus_location_not_in?: string[] | null;
  bus_location_not_starts_with?: string | null;
  bus_location_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  is_nvidia_tools_ready?: boolean | null;
  is_nvidia_tools_ready_not?: boolean | null;
  is_nvidia_vfs_enabled?: boolean | null;
  is_nvidia_vfs_enabled_not?: boolean | null;
  is_nvidia_vfs_supported?: boolean | null;
  is_nvidia_vfs_supported_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  status?: GpuDeviceStatus | null;
  status_in?: GpuDeviceStatus[] | null;
  status_not?: GpuDeviceStatus | null;
  status_not_in?: GpuDeviceStatus[] | null;
  user_usage?: GpuDeviceUsage | null;
  user_usage_in?: GpuDeviceUsage[] | null;
  user_usage_not?: GpuDeviceUsage | null;
  user_usage_not_in?: GpuDeviceUsage[] | null;
  user_vgpu_type_id?: string | null;
  user_vgpu_type_id_contains?: string | null;
  user_vgpu_type_id_ends_with?: string | null;
  user_vgpu_type_id_gt?: string | null;
  user_vgpu_type_id_gte?: string | null;
  user_vgpu_type_id_in?: string[] | null;
  user_vgpu_type_id_lt?: string | null;
  user_vgpu_type_id_lte?: string | null;
  user_vgpu_type_id_not?: string | null;
  user_vgpu_type_id_not_contains?: string | null;
  user_vgpu_type_id_not_ends_with?: string | null;
  user_vgpu_type_id_not_in?: string[] | null;
  user_vgpu_type_id_not_starts_with?: string | null;
  user_vgpu_type_id_starts_with?: string | null;
  user_vgpu_type_name?: string | null;
  user_vgpu_type_name_contains?: string | null;
  user_vgpu_type_name_ends_with?: string | null;
  user_vgpu_type_name_gt?: string | null;
  user_vgpu_type_name_gte?: string | null;
  user_vgpu_type_name_in?: string[] | null;
  user_vgpu_type_name_lt?: string | null;
  user_vgpu_type_name_lte?: string | null;
  user_vgpu_type_name_not?: string | null;
  user_vgpu_type_name_not_contains?: string | null;
  user_vgpu_type_name_not_ends_with?: string | null;
  user_vgpu_type_name_not_in?: string[] | null;
  user_vgpu_type_name_not_starts_with?: string | null;
  user_vgpu_type_name_starts_with?: string | null;

  /** @format int32 */
  vgpu_instance_num?: number | null;

  /** @format int32 */
  vgpu_instance_num_gt?: number | null;

  /** @format int32 */
  vgpu_instance_num_gte?: number | null;
  vgpu_instance_num_in?: number[] | null;

  /** @format int32 */
  vgpu_instance_num_lt?: number | null;

  /** @format int32 */
  vgpu_instance_num_lte?: number | null;

  /** @format int32 */
  vgpu_instance_num_not?: number | null;
  vgpu_instance_num_not_in?: number[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface HostWhereInput {
  AND?: HostWhereInput[] | null;
  NOT?: HostWhereInput[] | null;
  OR?: HostWhereInput[] | null;
  access_ip?: string | null;
  access_ip_contains?: string | null;
  access_ip_ends_with?: string | null;
  access_ip_gt?: string | null;
  access_ip_gte?: string | null;
  access_ip_in?: string[] | null;
  access_ip_lt?: string | null;
  access_ip_lte?: string | null;
  access_ip_not?: string | null;
  access_ip_not_contains?: string | null;
  access_ip_not_ends_with?: string | null;
  access_ip_not_in?: string[] | null;
  access_ip_not_starts_with?: string | null;
  access_ip_starts_with?: string | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive?: number | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive_gt?: number | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive_gte?: number | null;
  allocable_cpu_cores_for_vm_exclusive_in?: number[] | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive_lt?: number | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive_lte?: number | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive_not?: number | null;
  allocable_cpu_cores_for_vm_exclusive_not_in?: number[] | null;

  /** @format int64 */
  allocatable_memory_bytes?: number | null;

  /** @format int64 */
  allocatable_memory_bytes_gt?: number | null;

  /** @format int64 */
  allocatable_memory_bytes_gte?: number | null;
  allocatable_memory_bytes_in?: number[] | null;

  /** @format int64 */
  allocatable_memory_bytes_lt?: number | null;

  /** @format int64 */
  allocatable_memory_bytes_lte?: number | null;

  /** @format int64 */
  allocatable_memory_bytes_not?: number | null;
  allocatable_memory_bytes_not_in?: number[] | null;
  chunk_id?: string | null;
  chunk_id_contains?: string | null;
  chunk_id_ends_with?: string | null;
  chunk_id_gt?: string | null;
  chunk_id_gte?: string | null;
  chunk_id_in?: string[] | null;
  chunk_id_lt?: string | null;
  chunk_id_lte?: string | null;
  chunk_id_not?: string | null;
  chunk_id_not_contains?: string | null;
  chunk_id_not_ends_with?: string | null;
  chunk_id_not_in?: string[] | null;
  chunk_id_not_starts_with?: string | null;
  chunk_id_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  cpu_brand?: string | null;
  cpu_brand_contains?: string | null;
  cpu_brand_ends_with?: string | null;
  cpu_brand_gt?: string | null;
  cpu_brand_gte?: string | null;
  cpu_brand_in?: string[] | null;
  cpu_brand_lt?: string | null;
  cpu_brand_lte?: string | null;
  cpu_brand_not?: string | null;
  cpu_brand_not_contains?: string | null;
  cpu_brand_not_ends_with?: string | null;
  cpu_brand_not_in?: string[] | null;
  cpu_brand_not_starts_with?: string | null;
  cpu_brand_starts_with?: string | null;
  cpu_fan_speed_unit?: CpuFanSpeedUnit | null;
  cpu_fan_speed_unit_in?: CpuFanSpeedUnit[] | null;
  cpu_fan_speed_unit_not?: CpuFanSpeedUnit | null;
  cpu_fan_speed_unit_not_in?: CpuFanSpeedUnit[] | null;

  /** @format int64 */
  cpu_hz_per_core?: number | null;

  /** @format int64 */
  cpu_hz_per_core_gt?: number | null;

  /** @format int64 */
  cpu_hz_per_core_gte?: number | null;
  cpu_hz_per_core_in?: number[] | null;

  /** @format int64 */
  cpu_hz_per_core_lt?: number | null;

  /** @format int64 */
  cpu_hz_per_core_lte?: number | null;

  /** @format int64 */
  cpu_hz_per_core_not?: number | null;
  cpu_hz_per_core_not_in?: number[] | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  cpu_vendor?: string | null;
  cpu_vendor_contains?: string | null;
  cpu_vendor_ends_with?: string | null;
  cpu_vendor_gt?: string | null;
  cpu_vendor_gte?: string | null;
  cpu_vendor_in?: string[] | null;
  cpu_vendor_lt?: string | null;
  cpu_vendor_lte?: string | null;
  cpu_vendor_not?: string | null;
  cpu_vendor_not_contains?: string | null;
  cpu_vendor_not_ends_with?: string | null;
  cpu_vendor_not_in?: string[] | null;
  cpu_vendor_not_starts_with?: string | null;
  cpu_vendor_starts_with?: string | null;
  data_ip?: string | null;
  data_ip_contains?: string | null;
  data_ip_ends_with?: string | null;
  data_ip_gt?: string | null;
  data_ip_gte?: string | null;
  data_ip_in?: string[] | null;
  data_ip_lt?: string | null;
  data_ip_lte?: string | null;
  data_ip_not?: string | null;
  data_ip_not_contains?: string | null;
  data_ip_not_ends_with?: string | null;
  data_ip_not_in?: string[] | null;
  data_ip_not_starts_with?: string | null;
  data_ip_starts_with?: string | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int64 */
  failure_data_space_gt?: number | null;

  /** @format int64 */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format int64 */
  failure_data_space_lt?: number | null;

  /** @format int64 */
  failure_data_space_lte?: number | null;

  /** @format int64 */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;
  gpu_devices_every?: GpuDeviceWhereInput | null;
  gpu_devices_none?: GpuDeviceWhereInput | null;
  gpu_devices_some?: GpuDeviceWhereInput | null;

  /** @format int64 */
  hdd_data_capacity?: number | null;

  /** @format int64 */
  hdd_data_capacity_gt?: number | null;

  /** @format int64 */
  hdd_data_capacity_gte?: number | null;
  hdd_data_capacity_in?: number[] | null;

  /** @format int64 */
  hdd_data_capacity_lt?: number | null;

  /** @format int64 */
  hdd_data_capacity_lte?: number | null;

  /** @format int64 */
  hdd_data_capacity_not?: number | null;
  hdd_data_capacity_not_in?: number[] | null;

  /** @format int32 */
  hdd_disk_count?: number | null;

  /** @format int32 */
  hdd_disk_count_gt?: number | null;

  /** @format int32 */
  hdd_disk_count_gte?: number | null;
  hdd_disk_count_in?: number[] | null;

  /** @format int32 */
  hdd_disk_count_lt?: number | null;

  /** @format int32 */
  hdd_disk_count_lte?: number | null;

  /** @format int32 */
  hdd_disk_count_not?: number | null;
  hdd_disk_count_not_in?: number[] | null;
  hypervisor_ip?: string | null;
  hypervisor_ip_contains?: string | null;
  hypervisor_ip_ends_with?: string | null;
  hypervisor_ip_gt?: string | null;
  hypervisor_ip_gte?: string | null;
  hypervisor_ip_in?: string[] | null;
  hypervisor_ip_lt?: string | null;
  hypervisor_ip_lte?: string | null;
  hypervisor_ip_not?: string | null;
  hypervisor_ip_not_contains?: string | null;
  hypervisor_ip_not_ends_with?: string | null;
  hypervisor_ip_not_in?: string[] | null;
  hypervisor_ip_not_starts_with?: string | null;
  hypervisor_ip_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iommu?: IommuStatus | null;
  iommu_in?: IommuStatus[] | null;
  iommu_not?: IommuStatus | null;
  iommu_not_in?: IommuStatus[] | null;
  ipmi?: IpmiWhereInput | null;
  is_os_in_raid1?: boolean | null;
  is_os_in_raid1_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  lsm_cap_disk_safe_umount?: boolean | null;
  lsm_cap_disk_safe_umount_not?: boolean | null;
  management_ip?: string | null;
  management_ip_contains?: string | null;
  management_ip_ends_with?: string | null;
  management_ip_gt?: string | null;
  management_ip_gte?: string | null;
  management_ip_in?: string[] | null;
  management_ip_lt?: string | null;
  management_ip_lte?: string | null;
  management_ip_not?: string | null;
  management_ip_not_contains?: string | null;
  management_ip_not_ends_with?: string | null;
  management_ip_not_in?: string[] | null;
  management_ip_not_starts_with?: string | null;
  management_ip_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nested_virtualization?: boolean | null;
  nested_virtualization_not?: boolean | null;

  /** @format int32 */
  nic_count?: number | null;

  /** @format int32 */
  nic_count_gt?: number | null;

  /** @format int32 */
  nic_count_gte?: number | null;
  nic_count_in?: number[] | null;

  /** @format int32 */
  nic_count_lt?: number | null;

  /** @format int32 */
  nic_count_lte?: number | null;

  /** @format int32 */
  nic_count_not?: number | null;
  nic_count_not_in?: number[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  node_topo_local_id?: string | null;
  node_topo_local_id_contains?: string | null;
  node_topo_local_id_ends_with?: string | null;
  node_topo_local_id_gt?: string | null;
  node_topo_local_id_gte?: string | null;
  node_topo_local_id_in?: string[] | null;
  node_topo_local_id_lt?: string | null;
  node_topo_local_id_lte?: string | null;
  node_topo_local_id_not?: string | null;
  node_topo_local_id_not_contains?: string | null;
  node_topo_local_id_not_ends_with?: string | null;
  node_topo_local_id_not_in?: string[] | null;
  node_topo_local_id_not_starts_with?: string | null;
  node_topo_local_id_starts_with?: string | null;

  /** @format int64 */
  os_memory_bytes?: number | null;

  /** @format int64 */
  os_memory_bytes_gt?: number | null;

  /** @format int64 */
  os_memory_bytes_gte?: number | null;
  os_memory_bytes_in?: number[] | null;

  /** @format int64 */
  os_memory_bytes_lt?: number | null;

  /** @format int64 */
  os_memory_bytes_lte?: number | null;

  /** @format int64 */
  os_memory_bytes_not?: number | null;
  os_memory_bytes_not_in?: number[] | null;
  os_version?: string | null;
  os_version_contains?: string | null;
  os_version_ends_with?: string | null;
  os_version_gt?: string | null;
  os_version_gte?: string | null;
  os_version_in?: string[] | null;
  os_version_lt?: string | null;
  os_version_lte?: string | null;
  os_version_not?: string | null;
  os_version_not_contains?: string | null;
  os_version_not_ends_with?: string | null;
  os_version_not_in?: string[] | null;
  os_version_not_starts_with?: string | null;
  os_version_starts_with?: string | null;

  /** @format int64 */
  pmem_dimm_capacity?: number | null;

  /** @format int64 */
  pmem_dimm_capacity_gt?: number | null;

  /** @format int64 */
  pmem_dimm_capacity_gte?: number | null;
  pmem_dimm_capacity_in?: number[] | null;

  /** @format int64 */
  pmem_dimm_capacity_lt?: number | null;

  /** @format int64 */
  pmem_dimm_capacity_lte?: number | null;

  /** @format int64 */
  pmem_dimm_capacity_not?: number | null;
  pmem_dimm_capacity_not_in?: number[] | null;

  /** @format int32 */
  pmem_dimm_count?: number | null;

  /** @format int32 */
  pmem_dimm_count_gt?: number | null;

  /** @format int32 */
  pmem_dimm_count_gte?: number | null;
  pmem_dimm_count_in?: number[] | null;

  /** @format int32 */
  pmem_dimm_count_lt?: number | null;

  /** @format int32 */
  pmem_dimm_count_lte?: number | null;

  /** @format int32 */
  pmem_dimm_count_not?: number | null;
  pmem_dimm_count_not_in?: number[] | null;
  pmem_dimms_every?: PmemDimmWhereInput | null;
  pmem_dimms_none?: PmemDimmWhereInput | null;
  pmem_dimms_some?: PmemDimmWhereInput | null;

  /** @format int32 */
  pmem_disk_count?: number | null;

  /** @format int32 */
  pmem_disk_count_gt?: number | null;

  /** @format int32 */
  pmem_disk_count_gte?: number | null;
  pmem_disk_count_in?: number[] | null;

  /** @format int32 */
  pmem_disk_count_lt?: number | null;

  /** @format int32 */
  pmem_disk_count_lte?: number | null;

  /** @format int32 */
  pmem_disk_count_not?: number | null;
  pmem_disk_count_not_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_gt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_lt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_lte?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes_lt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_lte?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format int64 */
  running_pause_vm_memory_bytes?: number | null;

  /** @format int64 */
  running_pause_vm_memory_bytes_gt?: number | null;

  /** @format int64 */
  running_pause_vm_memory_bytes_gte?: number | null;
  running_pause_vm_memory_bytes_in?: number[] | null;

  /** @format int64 */
  running_pause_vm_memory_bytes_lt?: number | null;

  /** @format int64 */
  running_pause_vm_memory_bytes_lte?: number | null;

  /** @format int64 */
  running_pause_vm_memory_bytes_not?: number | null;
  running_pause_vm_memory_bytes_not_in?: number[] | null;

  /** @format int32 */
  running_vm_num?: number | null;

  /** @format int32 */
  running_vm_num_gt?: number | null;

  /** @format int32 */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format int32 */
  running_vm_num_lt?: number | null;

  /** @format int32 */
  running_vm_num_lte?: number | null;

  /** @format int32 */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;

  /** @format int32 */
  scvm_cpu?: number | null;

  /** @format int32 */
  scvm_cpu_gt?: number | null;

  /** @format int32 */
  scvm_cpu_gte?: number | null;
  scvm_cpu_in?: number[] | null;

  /** @format int32 */
  scvm_cpu_lt?: number | null;

  /** @format int32 */
  scvm_cpu_lte?: number | null;

  /** @format int32 */
  scvm_cpu_not?: number | null;
  scvm_cpu_not_in?: number[] | null;

  /** @format int64 */
  scvm_memory?: number | null;

  /** @format int64 */
  scvm_memory_gt?: number | null;

  /** @format int64 */
  scvm_memory_gte?: number | null;
  scvm_memory_in?: number[] | null;

  /** @format int64 */
  scvm_memory_lt?: number | null;

  /** @format int64 */
  scvm_memory_lte?: number | null;

  /** @format int64 */
  scvm_memory_not?: number | null;
  scvm_memory_not_in?: number[] | null;
  scvm_name?: string | null;
  scvm_name_contains?: string | null;
  scvm_name_ends_with?: string | null;
  scvm_name_gt?: string | null;
  scvm_name_gte?: string | null;
  scvm_name_in?: string[] | null;
  scvm_name_lt?: string | null;
  scvm_name_lte?: string | null;
  scvm_name_not?: string | null;
  scvm_name_not_contains?: string | null;
  scvm_name_not_ends_with?: string | null;
  scvm_name_not_in?: string[] | null;
  scvm_name_not_starts_with?: string | null;
  scvm_name_starts_with?: string | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;

  /** @format int64 */
  ssd_data_capacity?: number | null;

  /** @format int64 */
  ssd_data_capacity_gt?: number | null;

  /** @format int64 */
  ssd_data_capacity_gte?: number | null;
  ssd_data_capacity_in?: number[] | null;

  /** @format int64 */
  ssd_data_capacity_lt?: number | null;

  /** @format int64 */
  ssd_data_capacity_lte?: number | null;

  /** @format int64 */
  ssd_data_capacity_not?: number | null;
  ssd_data_capacity_not_in?: number[] | null;

  /** @format int32 */
  ssd_disk_count?: number | null;

  /** @format int32 */
  ssd_disk_count_gt?: number | null;

  /** @format int32 */
  ssd_disk_count_gte?: number | null;
  ssd_disk_count_in?: number[] | null;

  /** @format int32 */
  ssd_disk_count_lt?: number | null;

  /** @format int32 */
  ssd_disk_count_lte?: number | null;

  /** @format int32 */
  ssd_disk_count_not?: number | null;
  ssd_disk_count_not_in?: number[] | null;
  state?: HostState | null;
  state_in?: HostState[] | null;
  state_not?: HostState | null;
  state_not_in?: HostState[] | null;
  status?: HostStatus | null;
  status_in?: HostStatus[] | null;
  status_not?: HostStatus | null;
  status_not_in?: HostStatus[] | null;

  /** @format int32 */
  stopped_vm_num?: number | null;

  /** @format int32 */
  stopped_vm_num_gt?: number | null;

  /** @format int32 */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format int32 */
  stopped_vm_num_lt?: number | null;

  /** @format int32 */
  stopped_vm_num_lte?: number | null;

  /** @format int32 */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int32 */
  suspended_vm_num_gt?: number | null;

  /** @format int32 */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format int32 */
  suspended_vm_num_lt?: number | null;

  /** @format int32 */
  suspended_vm_num_lte?: number | null;

  /** @format int32 */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int64 */
  total_cache_capacity_gt?: number | null;

  /** @format int64 */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity_lt?: number | null;

  /** @format int64 */
  total_cache_capacity_lte?: number | null;

  /** @format int64 */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int32 */
  total_cpu_cores_gt?: number | null;

  /** @format int32 */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores_lt?: number | null;

  /** @format int32 */
  total_cpu_cores_lte?: number | null;

  /** @format int32 */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_cpu_hz_gt?: number | null;

  /** @format int64 */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz_lt?: number | null;

  /** @format int64 */
  total_cpu_hz_lte?: number | null;

  /** @format int64 */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_sockets?: number | null;

  /** @format int32 */
  total_cpu_sockets_gt?: number | null;

  /** @format int32 */
  total_cpu_sockets_gte?: number | null;
  total_cpu_sockets_in?: number[] | null;

  /** @format int32 */
  total_cpu_sockets_lt?: number | null;

  /** @format int32 */
  total_cpu_sockets_lte?: number | null;

  /** @format int32 */
  total_cpu_sockets_not?: number | null;
  total_cpu_sockets_not_in?: number[] | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_data_capacity_gt?: number | null;

  /** @format int64 */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format int64 */
  total_data_capacity_lt?: number | null;

  /** @format int64 */
  total_data_capacity_lte?: number | null;

  /** @format int64 */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  total_memory_bytes_gt?: number | null;

  /** @format int64 */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes_lt?: number | null;

  /** @format int64 */
  total_memory_bytes_lte?: number | null;

  /** @format int64 */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
  usb_devices_every?: UsbDeviceWhereInput | null;
  usb_devices_none?: UsbDeviceWhereInput | null;
  usb_devices_some?: UsbDeviceWhereInput | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format int64 */
  used_data_space_gt?: number | null;

  /** @format int64 */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format int64 */
  used_data_space_lt?: number | null;

  /** @format int64 */
  used_data_space_lte?: number | null;

  /** @format int64 */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
  vmotion_ip?: string | null;
  vmotion_ip_contains?: string | null;
  vmotion_ip_ends_with?: string | null;
  vmotion_ip_gt?: string | null;
  vmotion_ip_gte?: string | null;
  vmotion_ip_in?: string[] | null;
  vmotion_ip_lt?: string | null;
  vmotion_ip_lte?: string | null;
  vmotion_ip_not?: string | null;
  vmotion_ip_not_contains?: string | null;
  vmotion_ip_not_ends_with?: string | null;
  vmotion_ip_not_in?: string[] | null;
  vmotion_ip_not_starts_with?: string | null;
  vmotion_ip_starts_with?: string | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  vsphereEsxiAccount?: VsphereEsxiAccountWhereInput | null;
  with_faster_ssd_as_cache?: boolean | null;
  with_faster_ssd_as_cache_not?: boolean | null;
  zone?: ZoneWhereInput | null;
}

export enum CpuFanSpeedUnit {
  PERCENT = "PERCENT",
  RPM = "RPM",
}

export interface DiskWhereInput {
  AND?: DiskWhereInput[] | null;
  NOT?: DiskWhereInput[] | null;
  OR?: DiskWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: string | null;
  firmware_contains?: string | null;
  firmware_ends_with?: string | null;
  firmware_gt?: string | null;
  firmware_gte?: string | null;
  firmware_in?: string[] | null;
  firmware_lt?: string | null;
  firmware_lte?: string | null;
  firmware_not?: string | null;
  firmware_not_contains?: string | null;
  firmware_not_ends_with?: string | null;
  firmware_not_in?: string[] | null;
  firmware_not_starts_with?: string | null;
  firmware_starts_with?: string | null;
  function?: DiskFunction | null;
  function_in?: DiskFunction[] | null;
  function_not?: DiskFunction | null;
  function_not_in?: DiskFunction[] | null;
  health_status?: DiskHealthStatus | null;
  health_status_in?: DiskHealthStatus[] | null;
  health_status_not?: DiskHealthStatus | null;
  health_status_not_in?: DiskHealthStatus[] | null;
  healthy?: boolean | null;
  healthy_not?: boolean | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  mounted?: boolean | null;
  mounted_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  numa_node?: number | null;

  /** @format int32 */
  numa_node_gt?: number | null;

  /** @format int32 */
  numa_node_gte?: number | null;
  numa_node_in?: number[] | null;

  /** @format int32 */
  numa_node_lt?: number | null;

  /** @format int32 */
  numa_node_lte?: number | null;

  /** @format int32 */
  numa_node_not?: number | null;
  numa_node_not_in?: number[] | null;
  offline?: boolean | null;
  offline_not?: boolean | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;
  persistent_memory_type?: string | null;
  persistent_memory_type_contains?: string | null;
  persistent_memory_type_ends_with?: string | null;
  persistent_memory_type_gt?: string | null;
  persistent_memory_type_gte?: string | null;
  persistent_memory_type_in?: string[] | null;
  persistent_memory_type_lt?: string | null;
  persistent_memory_type_lte?: string | null;
  persistent_memory_type_not?: string | null;
  persistent_memory_type_not_contains?: string | null;
  persistent_memory_type_not_ends_with?: string | null;
  persistent_memory_type_not_in?: string[] | null;
  persistent_memory_type_not_starts_with?: string | null;
  persistent_memory_type_starts_with?: string | null;

  /** @format int32 */
  physical_slot_on_brick?: number | null;

  /** @format int32 */
  physical_slot_on_brick_gt?: number | null;

  /** @format int32 */
  physical_slot_on_brick_gte?: number | null;
  physical_slot_on_brick_in?: number[] | null;

  /** @format int32 */
  physical_slot_on_brick_lt?: number | null;

  /** @format int32 */
  physical_slot_on_brick_lte?: number | null;

  /** @format int32 */
  physical_slot_on_brick_not?: number | null;
  physical_slot_on_brick_not_in?: number[] | null;
  pmem_dimms_every?: PmemDimmWhereInput | null;
  pmem_dimms_none?: PmemDimmWhereInput | null;
  pmem_dimms_some?: PmemDimmWhereInput | null;
  recommended_usage?: DiskUsage | null;
  recommended_usage_in?: DiskUsage[] | null;
  recommended_usage_not?: DiskUsage | null;
  recommended_usage_not_in?: DiskUsage[] | null;

  /** @format int32 */
  remaining_life_percent?: number | null;

  /** @format int32 */
  remaining_life_percent_gt?: number | null;

  /** @format int32 */
  remaining_life_percent_gte?: number | null;
  remaining_life_percent_in?: number[] | null;

  /** @format int32 */
  remaining_life_percent_lt?: number | null;

  /** @format int32 */
  remaining_life_percent_lte?: number | null;

  /** @format int32 */
  remaining_life_percent_not?: number | null;
  remaining_life_percent_not_in?: number[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  type?: DiskType | null;
  type_in?: DiskType[] | null;
  type_not?: DiskType | null;
  type_not_in?: DiskType[] | null;
  usage?: DiskUsage | null;
  usage_in?: DiskUsage[] | null;
  usage_not?: DiskUsage | null;
  usage_not_in?: DiskUsage[] | null;
  usage_status?: DiskUsageStatus | null;
  usage_status_in?: DiskUsageStatus[] | null;
  usage_status_not?: DiskUsageStatus | null;
  usage_status_not_in?: DiskUsageStatus[] | null;
}

export enum DiskFunction {
  CACHE = "CACHE",
  DATA = "DATA",
  SMTX_SYSTEM = "SMTX_SYSTEM",
}

export enum DiskHealthStatus {
  HEALTHY = "HEALTHY",
  SMART_FAILED = "SMART_FAILED",
  SOFTWARE_RAID_FAILURE = "SOFTWARE_RAID_FAILURE",
  SUBHEALTHY = "SUBHEALTHY",
  UNHEALTHY = "UNHEALTHY",
}

export interface LabelWhereInput {
  AND?: LabelWhereInput[] | null;
  NOT?: LabelWhereInput[] | null;
  OR?: LabelWhereInput[] | null;

  /** @format int32 */
  cluster_num?: number | null;

  /** @format int32 */
  cluster_num_gt?: number | null;

  /** @format int32 */
  cluster_num_gte?: number | null;
  cluster_num_in?: number[] | null;

  /** @format int32 */
  cluster_num_lt?: number | null;

  /** @format int32 */
  cluster_num_lte?: number | null;

  /** @format int32 */
  cluster_num_not?: number | null;
  cluster_num_not_in?: number[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;

  /** @format int32 */
  consistency_group_num?: number | null;

  /** @format int32 */
  consistency_group_num_gt?: number | null;

  /** @format int32 */
  consistency_group_num_gte?: number | null;
  consistency_group_num_in?: number[] | null;

  /** @format int32 */
  consistency_group_num_lt?: number | null;

  /** @format int32 */
  consistency_group_num_lte?: number | null;

  /** @format int32 */
  consistency_group_num_not?: number | null;
  consistency_group_num_not_in?: number[] | null;

  /** @format int32 */
  consistency_group_snapshot_num?: number | null;

  /** @format int32 */
  consistency_group_snapshot_num_gt?: number | null;

  /** @format int32 */
  consistency_group_snapshot_num_gte?: number | null;
  consistency_group_snapshot_num_in?: number[] | null;

  /** @format int32 */
  consistency_group_snapshot_num_lt?: number | null;

  /** @format int32 */
  consistency_group_snapshot_num_lte?: number | null;

  /** @format int32 */
  consistency_group_snapshot_num_not?: number | null;
  consistency_group_snapshot_num_not_in?: number[] | null;
  consistency_group_snapshots_every?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_none?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_some?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_groups_every?: ConsistencyGroupWhereInput | null;
  consistency_groups_none?: ConsistencyGroupWhereInput | null;
  consistency_groups_some?: ConsistencyGroupWhereInput | null;

  /** @format int32 */
  content_library_image_num?: number | null;

  /** @format int32 */
  content_library_image_num_gt?: number | null;

  /** @format int32 */
  content_library_image_num_gte?: number | null;
  content_library_image_num_in?: number[] | null;

  /** @format int32 */
  content_library_image_num_lt?: number | null;

  /** @format int32 */
  content_library_image_num_lte?: number | null;

  /** @format int32 */
  content_library_image_num_not?: number | null;
  content_library_image_num_not_in?: number[] | null;
  content_library_images_every?: ContentLibraryImageWhereInput | null;
  content_library_images_none?: ContentLibraryImageWhereInput | null;
  content_library_images_some?: ContentLibraryImageWhereInput | null;

  /** @format int32 */
  content_library_vm_template_num?: number | null;

  /** @format int32 */
  content_library_vm_template_num_gt?: number | null;

  /** @format int32 */
  content_library_vm_template_num_gte?: number | null;
  content_library_vm_template_num_in?: number[] | null;

  /** @format int32 */
  content_library_vm_template_num_lt?: number | null;

  /** @format int32 */
  content_library_vm_template_num_lte?: number | null;

  /** @format int32 */
  content_library_vm_template_num_not?: number | null;
  content_library_vm_template_num_not_in?: number[] | null;
  content_library_vm_templates_every?: ContentLibraryVmTemplateWhereInput | null;
  content_library_vm_templates_none?: ContentLibraryVmTemplateWhereInput | null;
  content_library_vm_templates_some?: ContentLibraryVmTemplateWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;

  /** @format int32 */
  datacenter_num?: number | null;

  /** @format int32 */
  datacenter_num_gt?: number | null;

  /** @format int32 */
  datacenter_num_gte?: number | null;
  datacenter_num_in?: number[] | null;

  /** @format int32 */
  datacenter_num_lt?: number | null;

  /** @format int32 */
  datacenter_num_lte?: number | null;

  /** @format int32 */
  datacenter_num_not?: number | null;
  datacenter_num_not_in?: number[] | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;

  /** @format int32 */
  disk_num?: number | null;

  /** @format int32 */
  disk_num_gt?: number | null;

  /** @format int32 */
  disk_num_gte?: number | null;
  disk_num_in?: number[] | null;

  /** @format int32 */
  disk_num_lt?: number | null;

  /** @format int32 */
  disk_num_lte?: number | null;

  /** @format int32 */
  disk_num_not?: number | null;
  disk_num_not_in?: number[] | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;

  /** @format int32 */
  elf_image_num?: number | null;

  /** @format int32 */
  elf_image_num_gt?: number | null;

  /** @format int32 */
  elf_image_num_gte?: number | null;
  elf_image_num_in?: number[] | null;

  /** @format int32 */
  elf_image_num_lt?: number | null;

  /** @format int32 */
  elf_image_num_lte?: number | null;

  /** @format int32 */
  elf_image_num_not?: number | null;
  elf_image_num_not_in?: number[] | null;
  elf_images_every?: ElfImageWhereInput | null;
  elf_images_none?: ElfImageWhereInput | null;
  elf_images_some?: ElfImageWhereInput | null;

  /** @format int32 */
  gpu_device_num?: number | null;

  /** @format int32 */
  gpu_device_num_gt?: number | null;

  /** @format int32 */
  gpu_device_num_gte?: number | null;
  gpu_device_num_in?: number[] | null;

  /** @format int32 */
  gpu_device_num_lt?: number | null;

  /** @format int32 */
  gpu_device_num_lte?: number | null;

  /** @format int32 */
  gpu_device_num_not?: number | null;
  gpu_device_num_not_in?: number[] | null;
  gpu_devices_every?: GpuDeviceWhereInput | null;
  gpu_devices_none?: GpuDeviceWhereInput | null;
  gpu_devices_some?: GpuDeviceWhereInput | null;

  /** @format int32 */
  host_num?: number | null;

  /** @format int32 */
  host_num_gt?: number | null;

  /** @format int32 */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format int32 */
  host_num_lt?: number | null;

  /** @format int32 */
  host_num_lte?: number | null;

  /** @format int32 */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int32 */
  iscsi_lun_num?: number | null;

  /** @format int32 */
  iscsi_lun_num_gt?: number | null;

  /** @format int32 */
  iscsi_lun_num_gte?: number | null;
  iscsi_lun_num_in?: number[] | null;

  /** @format int32 */
  iscsi_lun_num_lt?: number | null;

  /** @format int32 */
  iscsi_lun_num_lte?: number | null;

  /** @format int32 */
  iscsi_lun_num_not?: number | null;
  iscsi_lun_num_not_in?: number[] | null;

  /** @format int32 */
  iscsi_lun_snapshot_num?: number | null;

  /** @format int32 */
  iscsi_lun_snapshot_num_gt?: number | null;

  /** @format int32 */
  iscsi_lun_snapshot_num_gte?: number | null;
  iscsi_lun_snapshot_num_in?: number[] | null;

  /** @format int32 */
  iscsi_lun_snapshot_num_lt?: number | null;

  /** @format int32 */
  iscsi_lun_snapshot_num_lte?: number | null;

  /** @format int32 */
  iscsi_lun_snapshot_num_not?: number | null;
  iscsi_lun_snapshot_num_not_in?: number[] | null;
  iscsi_lun_snapshots_every?: IscsiLunSnapshotWhereInput | null;
  iscsi_lun_snapshots_none?: IscsiLunSnapshotWhereInput | null;
  iscsi_lun_snapshots_some?: IscsiLunSnapshotWhereInput | null;
  iscsi_luns_every?: IscsiLunWhereInput | null;
  iscsi_luns_none?: IscsiLunWhereInput | null;
  iscsi_luns_some?: IscsiLunWhereInput | null;

  /** @format int32 */
  iscsi_target_num?: number | null;

  /** @format int32 */
  iscsi_target_num_gt?: number | null;

  /** @format int32 */
  iscsi_target_num_gte?: number | null;
  iscsi_target_num_in?: number[] | null;

  /** @format int32 */
  iscsi_target_num_lt?: number | null;

  /** @format int32 */
  iscsi_target_num_lte?: number | null;

  /** @format int32 */
  iscsi_target_num_not?: number | null;
  iscsi_target_num_not_in?: number[] | null;
  iscsi_targets_every?: IscsiTargetWhereInput | null;
  iscsi_targets_none?: IscsiTargetWhereInput | null;
  iscsi_targets_some?: IscsiTargetWhereInput | null;
  isolation_policies_every?: IsolationPolicyWhereInput | null;
  isolation_policies_none?: IsolationPolicyWhereInput | null;
  isolation_policies_some?: IsolationPolicyWhereInput | null;

  /** @format int32 */
  isolation_policy_num?: number | null;

  /** @format int32 */
  isolation_policy_num_gt?: number | null;

  /** @format int32 */
  isolation_policy_num_gte?: number | null;
  isolation_policy_num_in?: number[] | null;

  /** @format int32 */
  isolation_policy_num_lt?: number | null;

  /** @format int32 */
  isolation_policy_num_lte?: number | null;

  /** @format int32 */
  isolation_policy_num_not?: number | null;
  isolation_policy_num_not_in?: number[] | null;
  key?: string | null;
  key_contains?: string | null;
  key_ends_with?: string | null;
  key_gt?: string | null;
  key_gte?: string | null;
  key_in?: string[] | null;
  key_lt?: string | null;
  key_lte?: string | null;
  key_not?: string | null;
  key_not_contains?: string | null;
  key_not_ends_with?: string | null;
  key_not_in?: string[] | null;
  key_not_starts_with?: string | null;
  key_starts_with?: string | null;

  /** @format int32 */
  namespace_group_num?: number | null;

  /** @format int32 */
  namespace_group_num_gt?: number | null;

  /** @format int32 */
  namespace_group_num_gte?: number | null;
  namespace_group_num_in?: number[] | null;

  /** @format int32 */
  namespace_group_num_lt?: number | null;

  /** @format int32 */
  namespace_group_num_lte?: number | null;

  /** @format int32 */
  namespace_group_num_not?: number | null;
  namespace_group_num_not_in?: number[] | null;
  namespace_groups_every?: NamespaceGroupWhereInput | null;
  namespace_groups_none?: NamespaceGroupWhereInput | null;
  namespace_groups_some?: NamespaceGroupWhereInput | null;

  /** @format int32 */
  nfs_export_num?: number | null;

  /** @format int32 */
  nfs_export_num_gt?: number | null;

  /** @format int32 */
  nfs_export_num_gte?: number | null;
  nfs_export_num_in?: number[] | null;

  /** @format int32 */
  nfs_export_num_lt?: number | null;

  /** @format int32 */
  nfs_export_num_lte?: number | null;

  /** @format int32 */
  nfs_export_num_not?: number | null;
  nfs_export_num_not_in?: number[] | null;
  nfs_exports_every?: NfsExportWhereInput | null;
  nfs_exports_none?: NfsExportWhereInput | null;
  nfs_exports_some?: NfsExportWhereInput | null;

  /** @format int32 */
  nfs_inode_num?: number | null;

  /** @format int32 */
  nfs_inode_num_gt?: number | null;

  /** @format int32 */
  nfs_inode_num_gte?: number | null;
  nfs_inode_num_in?: number[] | null;

  /** @format int32 */
  nfs_inode_num_lt?: number | null;

  /** @format int32 */
  nfs_inode_num_lte?: number | null;

  /** @format int32 */
  nfs_inode_num_not?: number | null;
  nfs_inode_num_not_in?: number[] | null;
  nfs_inodes_every?: NfsInodeWhereInput | null;
  nfs_inodes_none?: NfsInodeWhereInput | null;
  nfs_inodes_some?: NfsInodeWhereInput | null;

  /** @format int32 */
  nic_num?: number | null;

  /** @format int32 */
  nic_num_gt?: number | null;

  /** @format int32 */
  nic_num_gte?: number | null;
  nic_num_in?: number[] | null;

  /** @format int32 */
  nic_num_lt?: number | null;

  /** @format int32 */
  nic_num_lte?: number | null;

  /** @format int32 */
  nic_num_not?: number | null;
  nic_num_not_in?: number[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;

  /** @format int32 */
  nvmf_namespace_num?: number | null;

  /** @format int32 */
  nvmf_namespace_num_gt?: number | null;

  /** @format int32 */
  nvmf_namespace_num_gte?: number | null;
  nvmf_namespace_num_in?: number[] | null;

  /** @format int32 */
  nvmf_namespace_num_lt?: number | null;

  /** @format int32 */
  nvmf_namespace_num_lte?: number | null;

  /** @format int32 */
  nvmf_namespace_num_not?: number | null;
  nvmf_namespace_num_not_in?: number[] | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num?: number | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num_gt?: number | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num_gte?: number | null;
  nvmf_namespace_snapshot_num_in?: number[] | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num_lt?: number | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num_lte?: number | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num_not?: number | null;
  nvmf_namespace_snapshot_num_not_in?: number[] | null;
  nvmf_namespace_snapshots_every?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_none?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_some?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespaces_every?: NvmfNamespaceWhereInput | null;
  nvmf_namespaces_none?: NvmfNamespaceWhereInput | null;
  nvmf_namespaces_some?: NvmfNamespaceWhereInput | null;

  /** @format int32 */
  nvmf_subsystem_num?: number | null;

  /** @format int32 */
  nvmf_subsystem_num_gt?: number | null;

  /** @format int32 */
  nvmf_subsystem_num_gte?: number | null;
  nvmf_subsystem_num_in?: number[] | null;

  /** @format int32 */
  nvmf_subsystem_num_lt?: number | null;

  /** @format int32 */
  nvmf_subsystem_num_lte?: number | null;

  /** @format int32 */
  nvmf_subsystem_num_not?: number | null;
  nvmf_subsystem_num_not_in?: number[] | null;
  nvmf_subsystems_every?: NvmfSubsystemWhereInput | null;
  nvmf_subsystems_none?: NvmfSubsystemWhereInput | null;
  nvmf_subsystems_some?: NvmfSubsystemWhereInput | null;
  security_policies_every?: SecurityPolicyWhereInput | null;
  security_policies_none?: SecurityPolicyWhereInput | null;
  security_policies_some?: SecurityPolicyWhereInput | null;

  /** @format int32 */
  security_policy_num?: number | null;

  /** @format int32 */
  security_policy_num_gt?: number | null;

  /** @format int32 */
  security_policy_num_gte?: number | null;
  security_policy_num_in?: number[] | null;

  /** @format int32 */
  security_policy_num_lt?: number | null;

  /** @format int32 */
  security_policy_num_lte?: number | null;

  /** @format int32 */
  security_policy_num_not?: number | null;
  security_policy_num_not_in?: number[] | null;

  /** @format int32 */
  system_vlan_num?: number | null;

  /** @format int32 */
  system_vlan_num_gt?: number | null;

  /** @format int32 */
  system_vlan_num_gte?: number | null;
  system_vlan_num_in?: number[] | null;

  /** @format int32 */
  system_vlan_num_lt?: number | null;

  /** @format int32 */
  system_vlan_num_lte?: number | null;

  /** @format int32 */
  system_vlan_num_not?: number | null;
  system_vlan_num_not_in?: number[] | null;

  /** @format int32 */
  total_num?: number | null;

  /** @format int32 */
  total_num_gt?: number | null;

  /** @format int32 */
  total_num_gte?: number | null;
  total_num_in?: number[] | null;

  /** @format int32 */
  total_num_lt?: number | null;

  /** @format int32 */
  total_num_lte?: number | null;

  /** @format int32 */
  total_num_not?: number | null;
  total_num_not_in?: number[] | null;
  value?: string | null;
  value_contains?: string | null;
  value_ends_with?: string | null;
  value_gt?: string | null;
  value_gte?: string | null;
  value_in?: string[] | null;
  value_lt?: string | null;
  value_lte?: string | null;
  value_not?: string | null;
  value_not_contains?: string | null;
  value_not_ends_with?: string | null;
  value_not_in?: string[] | null;
  value_not_starts_with?: string | null;
  value_starts_with?: string | null;

  /** @format int32 */
  vds_num?: number | null;

  /** @format int32 */
  vds_num_gt?: number | null;

  /** @format int32 */
  vds_num_gte?: number | null;
  vds_num_in?: number[] | null;

  /** @format int32 */
  vds_num_lt?: number | null;

  /** @format int32 */
  vds_num_lte?: number | null;

  /** @format int32 */
  vds_num_not?: number | null;
  vds_num_not_in?: number[] | null;
  vdses_every?: VdsWhereInput | null;
  vdses_none?: VdsWhereInput | null;
  vdses_some?: VdsWhereInput | null;
  vlans_every?: VlanWhereInput | null;
  vlans_none?: VlanWhereInput | null;
  vlans_some?: VlanWhereInput | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;

  /** @format int32 */
  vm_snapshot_num?: number | null;

  /** @format int32 */
  vm_snapshot_num_gt?: number | null;

  /** @format int32 */
  vm_snapshot_num_gte?: number | null;
  vm_snapshot_num_in?: number[] | null;

  /** @format int32 */
  vm_snapshot_num_lt?: number | null;

  /** @format int32 */
  vm_snapshot_num_lte?: number | null;

  /** @format int32 */
  vm_snapshot_num_not?: number | null;
  vm_snapshot_num_not_in?: number[] | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;

  /** @format int32 */
  vm_template_num?: number | null;

  /** @format int32 */
  vm_template_num_gt?: number | null;

  /** @format int32 */
  vm_template_num_gte?: number | null;
  vm_template_num_in?: number[] | null;

  /** @format int32 */
  vm_template_num_lt?: number | null;

  /** @format int32 */
  vm_template_num_lte?: number | null;

  /** @format int32 */
  vm_template_num_not?: number | null;
  vm_template_num_not_in?: number[] | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;

  /** @format int32 */
  vm_vlan_num?: number | null;

  /** @format int32 */
  vm_vlan_num_gt?: number | null;

  /** @format int32 */
  vm_vlan_num_gte?: number | null;
  vm_vlan_num_in?: number[] | null;

  /** @format int32 */
  vm_vlan_num_lt?: number | null;

  /** @format int32 */
  vm_vlan_num_lte?: number | null;

  /** @format int32 */
  vm_vlan_num_not?: number | null;
  vm_vlan_num_not_in?: number[] | null;

  /** @format int32 */
  vm_volume_num?: number | null;

  /** @format int32 */
  vm_volume_num_gt?: number | null;

  /** @format int32 */
  vm_volume_num_gte?: number | null;
  vm_volume_num_in?: number[] | null;

  /** @format int32 */
  vm_volume_num_lt?: number | null;

  /** @format int32 */
  vm_volume_num_lte?: number | null;

  /** @format int32 */
  vm_volume_num_not?: number | null;
  vm_volume_num_not_in?: number[] | null;

  /** @format int32 */
  vm_volume_snapshot_num?: number | null;

  /** @format int32 */
  vm_volume_snapshot_num_gt?: number | null;

  /** @format int32 */
  vm_volume_snapshot_num_gte?: number | null;
  vm_volume_snapshot_num_in?: number[] | null;

  /** @format int32 */
  vm_volume_snapshot_num_lt?: number | null;

  /** @format int32 */
  vm_volume_snapshot_num_lte?: number | null;

  /** @format int32 */
  vm_volume_snapshot_num_not?: number | null;
  vm_volume_snapshot_num_not_in?: number[] | null;
  vm_volume_snapshots_every?: VmVolumeSnapshotWhereInput | null;
  vm_volume_snapshots_none?: VmVolumeSnapshotWhereInput | null;
  vm_volume_snapshots_some?: VmVolumeSnapshotWhereInput | null;
  vm_volumes_every?: VmVolumeWhereInput | null;
  vm_volumes_none?: VmVolumeWhereInput | null;
  vm_volumes_some?: VmVolumeWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface ConsistencyGroupSnapshotWhereInput {
  AND?: ConsistencyGroupSnapshotWhereInput[] | null;
  Iscsi_lun_snapshots_every?: IscsiLunSnapshotWhereInput | null;
  Iscsi_lun_snapshots_none?: IscsiLunSnapshotWhereInput | null;
  Iscsi_lun_snapshots_some?: IscsiLunSnapshotWhereInput | null;
  NOT?: ConsistencyGroupSnapshotWhereInput[] | null;
  OR?: ConsistencyGroupSnapshotWhereInput[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nvmf_namespace_snapshots_every?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_none?: NvmfNamespaceSnapshotWhereInput | null;
  nvmf_namespace_snapshots_some?: NvmfNamespaceSnapshotWhereInput | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface IscsiLunSnapshotWhereInput {
  AND?: IscsiLunSnapshotWhereInput[] | null;
  NOT?: IscsiLunSnapshotWhereInput[] | null;
  OR?: IscsiLunSnapshotWhereInput[] | null;
  consistency_group_snapshot?: ConsistencyGroupSnapshotWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iscsi_lun?: IscsiLunWhereInput | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface IscsiLunWhereInput {
  AND?: IscsiLunWhereInput[] | null;
  NOT?: IscsiLunWhereInput[] | null;
  OR?: IscsiLunWhereInput[] | null;
  allowed_initiators?: string | null;
  allowed_initiators_contains?: string | null;
  allowed_initiators_ends_with?: string | null;
  allowed_initiators_gt?: string | null;
  allowed_initiators_gte?: string | null;
  allowed_initiators_in?: string[] | null;
  allowed_initiators_lt?: string | null;
  allowed_initiators_lte?: string | null;
  allowed_initiators_not?: string | null;
  allowed_initiators_not_contains?: string | null;
  allowed_initiators_not_ends_with?: string | null;
  allowed_initiators_not_in?: string[] | null;
  allowed_initiators_not_starts_with?: string | null;
  allowed_initiators_starts_with?: string | null;

  /** @format int64 */
  assigned_size?: number | null;

  /** @format int64 */
  assigned_size_gt?: number | null;

  /** @format int64 */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format int64 */
  assigned_size_lt?: number | null;

  /** @format int64 */
  assigned_size_lte?: number | null;

  /** @format int64 */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;

  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_gt?: number | null;

  /** @format int64 */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format int64 */
  bps_lt?: number | null;

  /** @format int64 */
  bps_lte?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_gt?: number | null;

  /** @format int64 */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_max_length_gt?: number | null;

  /** @format int64 */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format int64 */
  bps_max_length_lt?: number | null;

  /** @format int64 */
  bps_max_length_lte?: number | null;

  /** @format int64 */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_max_lt?: number | null;

  /** @format int64 */
  bps_max_lte?: number | null;

  /** @format int64 */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format int64 */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_gt?: number | null;

  /** @format int64 */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format int64 */
  bps_rd_lt?: number | null;

  /** @format int64 */
  bps_rd_lte?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_gt?: number | null;

  /** @format int64 */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_rd_max_length_gt?: number | null;

  /** @format int64 */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length_lt?: number | null;

  /** @format int64 */
  bps_rd_max_length_lte?: number | null;

  /** @format int64 */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_lt?: number | null;

  /** @format int64 */
  bps_rd_max_lte?: number | null;

  /** @format int64 */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_gt?: number | null;

  /** @format int64 */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format int64 */
  bps_wr_lt?: number | null;

  /** @format int64 */
  bps_wr_lte?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_gt?: number | null;

  /** @format int64 */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;

  /** @format int64 */
  bps_wr_max_length_gt?: number | null;

  /** @format int64 */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length_lt?: number | null;

  /** @format int64 */
  bps_wr_max_length_lte?: number | null;

  /** @format int64 */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_lt?: number | null;

  /** @format int64 */
  bps_wr_max_lte?: number | null;

  /** @format int64 */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  io_size_gt?: number | null;

  /** @format int64 */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format int64 */
  io_size_lt?: number | null;

  /** @format int64 */
  io_size_lte?: number | null;

  /** @format int64 */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_gt?: number | null;

  /** @format int64 */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format int64 */
  iops_lt?: number | null;

  /** @format int64 */
  iops_lte?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_gt?: number | null;

  /** @format int64 */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_max_length_gt?: number | null;

  /** @format int64 */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format int64 */
  iops_max_length_lt?: number | null;

  /** @format int64 */
  iops_max_length_lte?: number | null;

  /** @format int64 */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_max_lt?: number | null;

  /** @format int64 */
  iops_max_lte?: number | null;

  /** @format int64 */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format int64 */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_gt?: number | null;

  /** @format int64 */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format int64 */
  iops_rd_lt?: number | null;

  /** @format int64 */
  iops_rd_lte?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_gt?: number | null;

  /** @format int64 */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_rd_max_length_gt?: number | null;

  /** @format int64 */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length_lt?: number | null;

  /** @format int64 */
  iops_rd_max_length_lte?: number | null;

  /** @format int64 */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_lt?: number | null;

  /** @format int64 */
  iops_rd_max_lte?: number | null;

  /** @format int64 */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_gt?: number | null;

  /** @format int64 */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format int64 */
  iops_wr_lt?: number | null;

  /** @format int64 */
  iops_wr_lte?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_gt?: number | null;

  /** @format int64 */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;

  /** @format int64 */
  iops_wr_max_length_gt?: number | null;

  /** @format int64 */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length_lt?: number | null;

  /** @format int64 */
  iops_wr_max_length_lte?: number | null;

  /** @format int64 */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_lt?: number | null;

  /** @format int64 */
  iops_wr_max_lte?: number | null;

  /** @format int64 */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int32 */
  lun_id?: number | null;

  /** @format int32 */
  lun_id_gt?: number | null;

  /** @format int32 */
  lun_id_gte?: number | null;
  lun_id_in?: number[] | null;

  /** @format int32 */
  lun_id_lt?: number | null;

  /** @format int32 */
  lun_id_lte?: number | null;

  /** @format int32 */
  lun_id_not?: number | null;
  lun_id_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format int64 */
  shared_size?: number | null;

  /** @format int64 */
  shared_size_gt?: number | null;

  /** @format int64 */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format int64 */
  shared_size_lt?: number | null;

  /** @format int64 */
  shared_size_lte?: number | null;

  /** @format int64 */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format int32 */
  snapshot_num?: number | null;

  /** @format int32 */
  snapshot_num_gt?: number | null;

  /** @format int32 */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format int32 */
  snapshot_num_lt?: number | null;

  /** @format int32 */
  snapshot_num_lte?: number | null;

  /** @format int32 */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format int32 */
  stripe_num?: number | null;

  /** @format int32 */
  stripe_num_gt?: number | null;

  /** @format int32 */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format int32 */
  stripe_num_lt?: number | null;

  /** @format int32 */
  stripe_num_lte?: number | null;

  /** @format int32 */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format int64 */
  stripe_size?: number | null;

  /** @format int64 */
  stripe_size_gt?: number | null;

  /** @format int64 */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format int64 */
  stripe_size_lt?: number | null;

  /** @format int64 */
  stripe_size_lte?: number | null;

  /** @format int64 */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format double */
  unique_logical_size_gt?: number | null;

  /** @format double */
  unique_logical_size_gte?: number | null;
  unique_logical_size_in?: number[] | null;

  /** @format double */
  unique_logical_size_lt?: number | null;

  /** @format double */
  unique_logical_size_lte?: number | null;

  /** @format double */
  unique_logical_size_not?: number | null;
  unique_logical_size_not_in?: number[] | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  zbs_volume_id?: string | null;
  zbs_volume_id_contains?: string | null;
  zbs_volume_id_ends_with?: string | null;
  zbs_volume_id_gt?: string | null;
  zbs_volume_id_gte?: string | null;
  zbs_volume_id_in?: string[] | null;
  zbs_volume_id_lt?: string | null;
  zbs_volume_id_lte?: string | null;
  zbs_volume_id_not?: string | null;
  zbs_volume_id_not_contains?: string | null;
  zbs_volume_id_not_ends_with?: string | null;
  zbs_volume_id_not_in?: string[] | null;
  zbs_volume_id_not_starts_with?: string | null;
  zbs_volume_id_starts_with?: string | null;
}

export interface ConsistencyGroupWhereInput {
  AND?: ConsistencyGroupWhereInput[] | null;
  NOT?: ConsistencyGroupWhereInput[] | null;
  OR?: ConsistencyGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  consistency_group_snapshots_every?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_none?: ConsistencyGroupSnapshotWhereInput | null;
  consistency_group_snapshots_some?: ConsistencyGroupSnapshotWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iscsi_luns_every?: IscsiLunWhereInput | null;
  iscsi_luns_none?: IscsiLunWhereInput | null;
  iscsi_luns_some?: IscsiLunWhereInput | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface NvmfNamespaceWhereInput {
  AND?: NvmfNamespaceWhereInput[] | null;
  NOT?: NvmfNamespaceWhereInput[] | null;
  OR?: NvmfNamespaceWhereInput[] | null;

  /** @format int64 */
  assigned_size?: number | null;

  /** @format int64 */
  assigned_size_gt?: number | null;

  /** @format int64 */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format int64 */
  assigned_size_lt?: number | null;

  /** @format int64 */
  assigned_size_lte?: number | null;

  /** @format int64 */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;

  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_gt?: number | null;

  /** @format int64 */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format int64 */
  bps_lt?: number | null;

  /** @format int64 */
  bps_lte?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_gt?: number | null;

  /** @format int64 */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_max_length_gt?: number | null;

  /** @format int64 */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format int64 */
  bps_max_length_lt?: number | null;

  /** @format int64 */
  bps_max_length_lte?: number | null;

  /** @format int64 */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_max_lt?: number | null;

  /** @format int64 */
  bps_max_lte?: number | null;

  /** @format int64 */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format int64 */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_gt?: number | null;

  /** @format int64 */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format int64 */
  bps_rd_lt?: number | null;

  /** @format int64 */
  bps_rd_lte?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_gt?: number | null;

  /** @format int64 */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_rd_max_length_gt?: number | null;

  /** @format int64 */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length_lt?: number | null;

  /** @format int64 */
  bps_rd_max_length_lte?: number | null;

  /** @format int64 */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_lt?: number | null;

  /** @format int64 */
  bps_rd_max_lte?: number | null;

  /** @format int64 */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_gt?: number | null;

  /** @format int64 */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format int64 */
  bps_wr_lt?: number | null;

  /** @format int64 */
  bps_wr_lte?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_gt?: number | null;

  /** @format int64 */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;

  /** @format int64 */
  bps_wr_max_length_gt?: number | null;

  /** @format int64 */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length_lt?: number | null;

  /** @format int64 */
  bps_wr_max_length_lte?: number | null;

  /** @format int64 */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_lt?: number | null;

  /** @format int64 */
  bps_wr_max_lte?: number | null;

  /** @format int64 */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  consistency_group?: ConsistencyGroupWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  io_size_gt?: number | null;

  /** @format int64 */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format int64 */
  io_size_lt?: number | null;

  /** @format int64 */
  io_size_lte?: number | null;

  /** @format int64 */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_gt?: number | null;

  /** @format int64 */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format int64 */
  iops_lt?: number | null;

  /** @format int64 */
  iops_lte?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_gt?: number | null;

  /** @format int64 */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_max_length_gt?: number | null;

  /** @format int64 */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format int64 */
  iops_max_length_lt?: number | null;

  /** @format int64 */
  iops_max_length_lte?: number | null;

  /** @format int64 */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_max_lt?: number | null;

  /** @format int64 */
  iops_max_lte?: number | null;

  /** @format int64 */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format int64 */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_gt?: number | null;

  /** @format int64 */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format int64 */
  iops_rd_lt?: number | null;

  /** @format int64 */
  iops_rd_lte?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_gt?: number | null;

  /** @format int64 */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_rd_max_length_gt?: number | null;

  /** @format int64 */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length_lt?: number | null;

  /** @format int64 */
  iops_rd_max_length_lte?: number | null;

  /** @format int64 */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_lt?: number | null;

  /** @format int64 */
  iops_rd_max_lte?: number | null;

  /** @format int64 */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_gt?: number | null;

  /** @format int64 */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format int64 */
  iops_wr_lt?: number | null;

  /** @format int64 */
  iops_wr_lte?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_gt?: number | null;

  /** @format int64 */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;

  /** @format int64 */
  iops_wr_max_length_gt?: number | null;

  /** @format int64 */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length_lt?: number | null;

  /** @format int64 */
  iops_wr_max_length_lte?: number | null;

  /** @format int64 */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_lt?: number | null;

  /** @format int64 */
  iops_wr_max_lte?: number | null;

  /** @format int64 */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  is_shared?: boolean | null;
  is_shared_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespace_group?: NamespaceGroupWhereInput | null;

  /** @format int32 */
  namespace_id?: number | null;

  /** @format int32 */
  namespace_id_gt?: number | null;

  /** @format int32 */
  namespace_id_gte?: number | null;
  namespace_id_in?: number[] | null;

  /** @format int32 */
  namespace_id_lt?: number | null;

  /** @format int32 */
  namespace_id_lte?: number | null;

  /** @format int32 */
  namespace_id_not?: number | null;
  namespace_id_not_in?: number[] | null;
  nqn_whitelist?: string | null;
  nqn_whitelist_contains?: string | null;
  nqn_whitelist_ends_with?: string | null;
  nqn_whitelist_gt?: string | null;
  nqn_whitelist_gte?: string | null;
  nqn_whitelist_in?: string[] | null;
  nqn_whitelist_lt?: string | null;
  nqn_whitelist_lte?: string | null;
  nqn_whitelist_not?: string | null;
  nqn_whitelist_not_contains?: string | null;
  nqn_whitelist_not_ends_with?: string | null;
  nqn_whitelist_not_in?: string[] | null;
  nqn_whitelist_not_starts_with?: string | null;
  nqn_whitelist_starts_with?: string | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format int64 */
  shared_size?: number | null;

  /** @format int64 */
  shared_size_gt?: number | null;

  /** @format int64 */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format int64 */
  shared_size_lt?: number | null;

  /** @format int64 */
  shared_size_lte?: number | null;

  /** @format int64 */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format int32 */
  snapshot_num?: number | null;

  /** @format int32 */
  snapshot_num_gt?: number | null;

  /** @format int32 */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format int32 */
  snapshot_num_lt?: number | null;

  /** @format int32 */
  snapshot_num_lte?: number | null;

  /** @format int32 */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format int32 */
  stripe_num?: number | null;

  /** @format int32 */
  stripe_num_gt?: number | null;

  /** @format int32 */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format int32 */
  stripe_num_lt?: number | null;

  /** @format int32 */
  stripe_num_lte?: number | null;

  /** @format int32 */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format int64 */
  stripe_size?: number | null;

  /** @format int64 */
  stripe_size_gt?: number | null;

  /** @format int64 */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format int64 */
  stripe_size_lt?: number | null;

  /** @format int64 */
  stripe_size_lte?: number | null;

  /** @format int64 */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format double */
  unique_logical_size_gt?: number | null;

  /** @format double */
  unique_logical_size_gte?: number | null;
  unique_logical_size_in?: number[] | null;

  /** @format double */
  unique_logical_size_lt?: number | null;

  /** @format double */
  unique_logical_size_lte?: number | null;

  /** @format double */
  unique_logical_size_not?: number | null;
  unique_logical_size_not_in?: number[] | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  zbs_volume_id?: string | null;
  zbs_volume_id_contains?: string | null;
  zbs_volume_id_ends_with?: string | null;
  zbs_volume_id_gt?: string | null;
  zbs_volume_id_gte?: string | null;
  zbs_volume_id_in?: string[] | null;
  zbs_volume_id_lt?: string | null;
  zbs_volume_id_lte?: string | null;
  zbs_volume_id_not?: string | null;
  zbs_volume_id_not_contains?: string | null;
  zbs_volume_id_not_ends_with?: string | null;
  zbs_volume_id_not_in?: string[] | null;
  zbs_volume_id_not_starts_with?: string | null;
  zbs_volume_id_starts_with?: string | null;
}

export interface NamespaceGroupWhereInput {
  AND?: NamespaceGroupWhereInput[] | null;
  NOT?: NamespaceGroupWhereInput[] | null;
  OR?: NamespaceGroupWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_create_time?: string | null;
  local_create_time_gt?: string | null;
  local_create_time_gte?: string | null;
  local_create_time_in?: string[] | null;
  local_create_time_lt?: string | null;
  local_create_time_lte?: string | null;
  local_create_time_not?: string | null;
  local_create_time_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
}

export interface NvmfSubsystemWhereInput {
  AND?: NvmfSubsystemWhereInput[] | null;
  NOT?: NvmfSubsystemWhereInput[] | null;
  OR?: NvmfSubsystemWhereInput[] | null;

  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_gt?: number | null;

  /** @format int64 */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format int64 */
  bps_lt?: number | null;

  /** @format int64 */
  bps_lte?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_gt?: number | null;

  /** @format int64 */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_max_length_gt?: number | null;

  /** @format int64 */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format int64 */
  bps_max_length_lt?: number | null;

  /** @format int64 */
  bps_max_length_lte?: number | null;

  /** @format int64 */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_max_lt?: number | null;

  /** @format int64 */
  bps_max_lte?: number | null;

  /** @format int64 */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format int64 */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_gt?: number | null;

  /** @format int64 */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format int64 */
  bps_rd_lt?: number | null;

  /** @format int64 */
  bps_rd_lte?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_gt?: number | null;

  /** @format int64 */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_rd_max_length_gt?: number | null;

  /** @format int64 */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length_lt?: number | null;

  /** @format int64 */
  bps_rd_max_length_lte?: number | null;

  /** @format int64 */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_lt?: number | null;

  /** @format int64 */
  bps_rd_max_lte?: number | null;

  /** @format int64 */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_gt?: number | null;

  /** @format int64 */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format int64 */
  bps_wr_lt?: number | null;

  /** @format int64 */
  bps_wr_lte?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_gt?: number | null;

  /** @format int64 */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;

  /** @format int64 */
  bps_wr_max_length_gt?: number | null;

  /** @format int64 */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length_lt?: number | null;

  /** @format int64 */
  bps_wr_max_length_lte?: number | null;

  /** @format int64 */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_lt?: number | null;

  /** @format int64 */
  bps_wr_max_lte?: number | null;

  /** @format int64 */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  io_size_gt?: number | null;

  /** @format int64 */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format int64 */
  io_size_lt?: number | null;

  /** @format int64 */
  io_size_lte?: number | null;

  /** @format int64 */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_gt?: number | null;

  /** @format int64 */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format int64 */
  iops_lt?: number | null;

  /** @format int64 */
  iops_lte?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_gt?: number | null;

  /** @format int64 */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_max_length_gt?: number | null;

  /** @format int64 */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format int64 */
  iops_max_length_lt?: number | null;

  /** @format int64 */
  iops_max_length_lte?: number | null;

  /** @format int64 */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_max_lt?: number | null;

  /** @format int64 */
  iops_max_lte?: number | null;

  /** @format int64 */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format int64 */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_gt?: number | null;

  /** @format int64 */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format int64 */
  iops_rd_lt?: number | null;

  /** @format int64 */
  iops_rd_lte?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_gt?: number | null;

  /** @format int64 */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_rd_max_length_gt?: number | null;

  /** @format int64 */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length_lt?: number | null;

  /** @format int64 */
  iops_rd_max_length_lte?: number | null;

  /** @format int64 */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_lt?: number | null;

  /** @format int64 */
  iops_rd_max_lte?: number | null;

  /** @format int64 */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_gt?: number | null;

  /** @format int64 */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format int64 */
  iops_wr_lt?: number | null;

  /** @format int64 */
  iops_wr_lte?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_gt?: number | null;

  /** @format int64 */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;

  /** @format int64 */
  iops_wr_max_length_gt?: number | null;

  /** @format int64 */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length_lt?: number | null;

  /** @format int64 */
  iops_wr_max_length_lte?: number | null;

  /** @format int64 */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_lt?: number | null;

  /** @format int64 */
  iops_wr_max_lte?: number | null;

  /** @format int64 */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  namespace_groups_every?: NamespaceGroupWhereInput | null;
  namespace_groups_none?: NamespaceGroupWhereInput | null;
  namespace_groups_some?: NamespaceGroupWhereInput | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  nqn_name?: string | null;
  nqn_name_contains?: string | null;
  nqn_name_ends_with?: string | null;
  nqn_name_gt?: string | null;
  nqn_name_gte?: string | null;
  nqn_name_in?: string[] | null;
  nqn_name_lt?: string | null;
  nqn_name_lte?: string | null;
  nqn_name_not?: string | null;
  nqn_name_not_contains?: string | null;
  nqn_name_not_ends_with?: string | null;
  nqn_name_not_in?: string[] | null;
  nqn_name_not_starts_with?: string | null;
  nqn_name_starts_with?: string | null;
  nqn_whitelist?: string | null;
  nqn_whitelist_contains?: string | null;
  nqn_whitelist_ends_with?: string | null;
  nqn_whitelist_gt?: string | null;
  nqn_whitelist_gte?: string | null;
  nqn_whitelist_in?: string[] | null;
  nqn_whitelist_lt?: string | null;
  nqn_whitelist_lte?: string | null;
  nqn_whitelist_not?: string | null;
  nqn_whitelist_not_contains?: string | null;
  nqn_whitelist_not_ends_with?: string | null;
  nqn_whitelist_not_in?: string[] | null;
  nqn_whitelist_not_starts_with?: string | null;
  nqn_whitelist_starts_with?: string | null;
  policy?: NvmfSubsystemPolicyType | null;
  policy_in?: NvmfSubsystemPolicyType[] | null;
  policy_not?: NvmfSubsystemPolicyType | null;
  policy_not_in?: NvmfSubsystemPolicyType[] | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format int32 */
  stripe_num?: number | null;

  /** @format int32 */
  stripe_num_gt?: number | null;

  /** @format int32 */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format int32 */
  stripe_num_lt?: number | null;

  /** @format int32 */
  stripe_num_lte?: number | null;

  /** @format int32 */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format int64 */
  stripe_size?: number | null;

  /** @format int64 */
  stripe_size_gt?: number | null;

  /** @format int64 */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format int64 */
  stripe_size_lt?: number | null;

  /** @format int64 */
  stripe_size_lte?: number | null;

  /** @format int64 */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export enum NvmfSubsystemPolicyType {
  BALANCE = "BALANCE",
  INHERIT = "INHERIT",
}

export interface IscsiTargetWhereInput {
  AND?: IscsiTargetWhereInput[] | null;
  NOT?: IscsiTargetWhereInput[] | null;
  OR?: IscsiTargetWhereInput[] | null;

  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_gt?: number | null;

  /** @format int64 */
  bps_gte?: number | null;
  bps_in?: number[] | null;

  /** @format int64 */
  bps_lt?: number | null;

  /** @format int64 */
  bps_lte?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_gt?: number | null;

  /** @format int64 */
  bps_max_gte?: number | null;
  bps_max_in?: number[] | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_max_length_gt?: number | null;

  /** @format int64 */
  bps_max_length_gte?: number | null;
  bps_max_length_in?: number[] | null;

  /** @format int64 */
  bps_max_length_lt?: number | null;

  /** @format int64 */
  bps_max_length_lte?: number | null;

  /** @format int64 */
  bps_max_length_not?: number | null;
  bps_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_max_lt?: number | null;

  /** @format int64 */
  bps_max_lte?: number | null;

  /** @format int64 */
  bps_max_not?: number | null;
  bps_max_not_in?: number[] | null;

  /** @format int64 */
  bps_not?: number | null;
  bps_not_in?: number[] | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_gt?: number | null;

  /** @format int64 */
  bps_rd_gte?: number | null;
  bps_rd_in?: number[] | null;

  /** @format int64 */
  bps_rd_lt?: number | null;

  /** @format int64 */
  bps_rd_lte?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_gt?: number | null;

  /** @format int64 */
  bps_rd_max_gte?: number | null;
  bps_rd_max_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_rd_max_length_gt?: number | null;

  /** @format int64 */
  bps_rd_max_length_gte?: number | null;
  bps_rd_max_length_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_length_lt?: number | null;

  /** @format int64 */
  bps_rd_max_length_lte?: number | null;

  /** @format int64 */
  bps_rd_max_length_not?: number | null;
  bps_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_max_lt?: number | null;

  /** @format int64 */
  bps_rd_max_lte?: number | null;

  /** @format int64 */
  bps_rd_max_not?: number | null;
  bps_rd_max_not_in?: number[] | null;

  /** @format int64 */
  bps_rd_not?: number | null;
  bps_rd_not_in?: number[] | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_gt?: number | null;

  /** @format int64 */
  bps_wr_gte?: number | null;
  bps_wr_in?: number[] | null;

  /** @format int64 */
  bps_wr_lt?: number | null;

  /** @format int64 */
  bps_wr_lte?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_gt?: number | null;

  /** @format int64 */
  bps_wr_max_gte?: number | null;
  bps_wr_max_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;

  /** @format int64 */
  bps_wr_max_length_gt?: number | null;

  /** @format int64 */
  bps_wr_max_length_gte?: number | null;
  bps_wr_max_length_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_length_lt?: number | null;

  /** @format int64 */
  bps_wr_max_length_lte?: number | null;

  /** @format int64 */
  bps_wr_max_length_not?: number | null;
  bps_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_max_lt?: number | null;

  /** @format int64 */
  bps_wr_max_lte?: number | null;

  /** @format int64 */
  bps_wr_max_not?: number | null;
  bps_wr_max_not_in?: number[] | null;

  /** @format int64 */
  bps_wr_not?: number | null;
  bps_wr_not_in?: number[] | null;
  chap_enabled?: boolean | null;
  chap_enabled_not?: boolean | null;
  chap_name?: string | null;
  chap_name_contains?: string | null;
  chap_name_ends_with?: string | null;
  chap_name_gt?: string | null;
  chap_name_gte?: string | null;
  chap_name_in?: string[] | null;
  chap_name_lt?: string | null;
  chap_name_lte?: string | null;
  chap_name_not?: string | null;
  chap_name_not_contains?: string | null;
  chap_name_not_ends_with?: string | null;
  chap_name_not_in?: string[] | null;
  chap_name_not_starts_with?: string | null;
  chap_name_starts_with?: string | null;
  chap_secret?: string | null;
  chap_secret_contains?: string | null;
  chap_secret_ends_with?: string | null;
  chap_secret_gt?: string | null;
  chap_secret_gte?: string | null;
  chap_secret_in?: string[] | null;
  chap_secret_lt?: string | null;
  chap_secret_lte?: string | null;
  chap_secret_not?: string | null;
  chap_secret_not_contains?: string | null;
  chap_secret_not_ends_with?: string | null;
  chap_secret_not_in?: string[] | null;
  chap_secret_not_starts_with?: string | null;
  chap_secret_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  io_size_gt?: number | null;

  /** @format int64 */
  io_size_gte?: number | null;
  io_size_in?: number[] | null;

  /** @format int64 */
  io_size_lt?: number | null;

  /** @format int64 */
  io_size_lte?: number | null;

  /** @format int64 */
  io_size_not?: number | null;
  io_size_not_in?: number[] | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_gt?: number | null;

  /** @format int64 */
  iops_gte?: number | null;
  iops_in?: number[] | null;

  /** @format int64 */
  iops_lt?: number | null;

  /** @format int64 */
  iops_lte?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_gt?: number | null;

  /** @format int64 */
  iops_max_gte?: number | null;
  iops_max_in?: number[] | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_max_length_gt?: number | null;

  /** @format int64 */
  iops_max_length_gte?: number | null;
  iops_max_length_in?: number[] | null;

  /** @format int64 */
  iops_max_length_lt?: number | null;

  /** @format int64 */
  iops_max_length_lte?: number | null;

  /** @format int64 */
  iops_max_length_not?: number | null;
  iops_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_max_lt?: number | null;

  /** @format int64 */
  iops_max_lte?: number | null;

  /** @format int64 */
  iops_max_not?: number | null;
  iops_max_not_in?: number[] | null;

  /** @format int64 */
  iops_not?: number | null;
  iops_not_in?: number[] | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_gt?: number | null;

  /** @format int64 */
  iops_rd_gte?: number | null;
  iops_rd_in?: number[] | null;

  /** @format int64 */
  iops_rd_lt?: number | null;

  /** @format int64 */
  iops_rd_lte?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_gt?: number | null;

  /** @format int64 */
  iops_rd_max_gte?: number | null;
  iops_rd_max_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_rd_max_length_gt?: number | null;

  /** @format int64 */
  iops_rd_max_length_gte?: number | null;
  iops_rd_max_length_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_length_lt?: number | null;

  /** @format int64 */
  iops_rd_max_length_lte?: number | null;

  /** @format int64 */
  iops_rd_max_length_not?: number | null;
  iops_rd_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_max_lt?: number | null;

  /** @format int64 */
  iops_rd_max_lte?: number | null;

  /** @format int64 */
  iops_rd_max_not?: number | null;
  iops_rd_max_not_in?: number[] | null;

  /** @format int64 */
  iops_rd_not?: number | null;
  iops_rd_not_in?: number[] | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_gt?: number | null;

  /** @format int64 */
  iops_wr_gte?: number | null;
  iops_wr_in?: number[] | null;

  /** @format int64 */
  iops_wr_lt?: number | null;

  /** @format int64 */
  iops_wr_lte?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_gt?: number | null;

  /** @format int64 */
  iops_wr_max_gte?: number | null;
  iops_wr_max_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;

  /** @format int64 */
  iops_wr_max_length_gt?: number | null;

  /** @format int64 */
  iops_wr_max_length_gte?: number | null;
  iops_wr_max_length_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_length_lt?: number | null;

  /** @format int64 */
  iops_wr_max_length_lte?: number | null;

  /** @format int64 */
  iops_wr_max_length_not?: number | null;
  iops_wr_max_length_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_max_lt?: number | null;

  /** @format int64 */
  iops_wr_max_lte?: number | null;

  /** @format int64 */
  iops_wr_max_not?: number | null;
  iops_wr_max_not_in?: number[] | null;

  /** @format int64 */
  iops_wr_not?: number | null;
  iops_wr_not_in?: number[] | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  iqn_name?: string | null;
  iqn_name_contains?: string | null;
  iqn_name_ends_with?: string | null;
  iqn_name_gt?: string | null;
  iqn_name_gte?: string | null;
  iqn_name_in?: string[] | null;
  iqn_name_lt?: string | null;
  iqn_name_lte?: string | null;
  iqn_name_not?: string | null;
  iqn_name_not_contains?: string | null;
  iqn_name_not_ends_with?: string | null;
  iqn_name_not_in?: string[] | null;
  iqn_name_not_starts_with?: string | null;
  iqn_name_starts_with?: string | null;
  iqn_whitelist?: string | null;
  iqn_whitelist_contains?: string | null;
  iqn_whitelist_ends_with?: string | null;
  iqn_whitelist_gt?: string | null;
  iqn_whitelist_gte?: string | null;
  iqn_whitelist_in?: string[] | null;
  iqn_whitelist_lt?: string | null;
  iqn_whitelist_lte?: string | null;
  iqn_whitelist_not?: string | null;
  iqn_whitelist_not_contains?: string | null;
  iqn_whitelist_not_ends_with?: string | null;
  iqn_whitelist_not_in?: string[] | null;
  iqn_whitelist_not_starts_with?: string | null;
  iqn_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  luns_every?: IscsiLunWhereInput | null;
  luns_none?: IscsiLunWhereInput | null;
  luns_some?: IscsiLunWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format int32 */
  stripe_num?: number | null;

  /** @format int32 */
  stripe_num_gt?: number | null;

  /** @format int32 */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format int32 */
  stripe_num_lt?: number | null;

  /** @format int32 */
  stripe_num_lte?: number | null;

  /** @format int32 */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format int64 */
  stripe_size?: number | null;

  /** @format int64 */
  stripe_size_gt?: number | null;

  /** @format int64 */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format int64 */
  stripe_size_lt?: number | null;

  /** @format int64 */
  stripe_size_lte?: number | null;

  /** @format int64 */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface NvmfNamespaceSnapshotWhereInput {
  AND?: NvmfNamespaceSnapshotWhereInput[] | null;
  NOT?: NvmfNamespaceSnapshotWhereInput[] | null;
  OR?: NvmfNamespaceSnapshotWhereInput[] | null;
  consistency_group_snapshot?: ConsistencyGroupSnapshotWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nvmf_namespace?: NvmfNamespaceWhereInput | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface ContentLibraryImageWhereInput {
  AND?: ContentLibraryImageWhereInput[] | null;
  NOT?: ContentLibraryImageWhereInput[] | null;
  OR?: ContentLibraryImageWhereInput[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  elf_images_every?: ElfImageWhereInput | null;
  elf_images_none?: ElfImageWhereInput | null;
  elf_images_some?: ElfImageWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
}

export interface ElfImageWhereInput {
  AND?: ElfImageWhereInput[] | null;
  NOT?: ElfImageWhereInput[] | null;
  OR?: ElfImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  content_library_image?: ContentLibraryImageWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
}

export interface VmDiskWhereInput {
  AND?: VmDiskWhereInput[] | null;
  NOT?: VmDiskWhereInput[] | null;
  OR?: VmDiskWhereInput[] | null;

  /** @format int32 */
  boot?: number | null;

  /** @format int32 */
  boot_gt?: number | null;

  /** @format int32 */
  boot_gte?: number | null;
  boot_in?: number[] | null;

  /** @format int32 */
  boot_lt?: number | null;

  /** @format int32 */
  boot_lte?: number | null;

  /** @format int32 */
  boot_not?: number | null;
  boot_not_in?: number[] | null;
  bus?: Bus | null;
  bus_in?: Bus[] | null;
  bus_not?: Bus | null;
  bus_not_in?: Bus[] | null;
  cloud_init_image_name?: string | null;
  cloud_init_image_name_contains?: string | null;
  cloud_init_image_name_ends_with?: string | null;
  cloud_init_image_name_gt?: string | null;
  cloud_init_image_name_gte?: string | null;
  cloud_init_image_name_in?: string[] | null;
  cloud_init_image_name_lt?: string | null;
  cloud_init_image_name_lte?: string | null;
  cloud_init_image_name_not?: string | null;
  cloud_init_image_name_not_contains?: string | null;
  cloud_init_image_name_not_ends_with?: string | null;
  cloud_init_image_name_not_in?: string[] | null;
  cloud_init_image_name_not_starts_with?: string | null;
  cloud_init_image_name_starts_with?: string | null;
  cloud_init_image_path?: string | null;
  cloud_init_image_path_contains?: string | null;
  cloud_init_image_path_ends_with?: string | null;
  cloud_init_image_path_gt?: string | null;
  cloud_init_image_path_gte?: string | null;
  cloud_init_image_path_in?: string[] | null;
  cloud_init_image_path_lt?: string | null;
  cloud_init_image_path_lte?: string | null;
  cloud_init_image_path_not?: string | null;
  cloud_init_image_path_not_contains?: string | null;
  cloud_init_image_path_not_ends_with?: string | null;
  cloud_init_image_path_not_in?: string[] | null;
  cloud_init_image_path_not_starts_with?: string | null;
  cloud_init_image_path_starts_with?: string | null;
  device?: string | null;
  device_contains?: string | null;
  device_ends_with?: string | null;
  device_gt?: string | null;
  device_gte?: string | null;
  device_in?: string[] | null;
  device_lt?: string | null;
  device_lte?: string | null;
  device_not?: string | null;
  device_not_contains?: string | null;
  device_not_ends_with?: string | null;
  device_not_in?: string[] | null;
  device_not_starts_with?: string | null;
  device_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  elf_image?: ElfImageWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int32 */
  key?: number | null;

  /** @format int32 */
  key_gt?: number | null;

  /** @format int32 */
  key_gte?: number | null;
  key_in?: number[] | null;

  /** @format int32 */
  key_lt?: number | null;

  /** @format int32 */
  key_lte?: number | null;

  /** @format int32 */
  key_not?: number | null;
  key_not_in?: number[] | null;

  /** @format int64 */
  max_bandwidth?: number | null;

  /** @format int64 */
  max_bandwidth_gt?: number | null;

  /** @format int64 */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format int64 */
  max_bandwidth_lt?: number | null;

  /** @format int64 */
  max_bandwidth_lte?: number | null;

  /** @format int64 */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int32 */
  max_iops?: number | null;

  /** @format int32 */
  max_iops_gt?: number | null;

  /** @format int32 */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format int32 */
  max_iops_lt?: number | null;

  /** @format int32 */
  max_iops_lte?: number | null;

  /** @format int32 */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;
  svt_image?: SvtImageWhereInput | null;
  type?: VmDiskType | null;
  type_in?: VmDiskType[] | null;
  type_not?: VmDiskType | null;
  type_not_in?: VmDiskType[] | null;
  unsafe_image_path?: string | null;
  unsafe_image_path_contains?: string | null;
  unsafe_image_path_ends_with?: string | null;
  unsafe_image_path_gt?: string | null;
  unsafe_image_path_gte?: string | null;
  unsafe_image_path_in?: string[] | null;
  unsafe_image_path_lt?: string | null;
  unsafe_image_path_lte?: string | null;
  unsafe_image_path_not?: string | null;
  unsafe_image_path_not_contains?: string | null;
  unsafe_image_path_not_ends_with?: string | null;
  unsafe_image_path_not_in?: string[] | null;
  unsafe_image_path_not_starts_with?: string | null;
  unsafe_image_path_starts_with?: string | null;
  unsafe_image_uuid?: string | null;
  unsafe_image_uuid_contains?: string | null;
  unsafe_image_uuid_ends_with?: string | null;
  unsafe_image_uuid_gt?: string | null;
  unsafe_image_uuid_gte?: string | null;
  unsafe_image_uuid_in?: string[] | null;
  unsafe_image_uuid_lt?: string | null;
  unsafe_image_uuid_lte?: string | null;
  unsafe_image_uuid_not?: string | null;
  unsafe_image_uuid_not_contains?: string | null;
  unsafe_image_uuid_not_ends_with?: string | null;
  unsafe_image_uuid_not_in?: string[] | null;
  unsafe_image_uuid_not_starts_with?: string | null;
  unsafe_image_uuid_starts_with?: string | null;
  unsafe_provision?: string | null;
  unsafe_provision_contains?: string | null;
  unsafe_provision_ends_with?: string | null;
  unsafe_provision_gt?: string | null;
  unsafe_provision_gte?: string | null;
  unsafe_provision_in?: string[] | null;
  unsafe_provision_lt?: string | null;
  unsafe_provision_lte?: string | null;
  unsafe_provision_not?: string | null;
  unsafe_provision_not_contains?: string | null;
  unsafe_provision_not_ends_with?: string | null;
  unsafe_provision_not_in?: string[] | null;
  unsafe_provision_not_starts_with?: string | null;
  unsafe_provision_starts_with?: string | null;
  vm?: VmWhereInput | null;
  vm_volume?: VmVolumeWhereInput | null;
}

export enum Bus {
  IDE = "IDE",
  SCSI = "SCSI",
  VIRTIO = "VIRTIO",
}

export enum VmDiskIoRestrictType {
  DYNAMIC = "DYNAMIC",
  FORCED = "FORCED",
}

export interface SvtImageWhereInput {
  AND?: SvtImageWhereInput[] | null;
  NOT?: SvtImageWhereInput[] | null;
  OR?: SvtImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format int32 */
  version?: number | null;

  /** @format int32 */
  version_gt?: number | null;

  /** @format int32 */
  version_gte?: number | null;
  version_in?: number[] | null;

  /** @format int32 */
  version_lt?: number | null;

  /** @format int32 */
  version_lte?: number | null;

  /** @format int32 */
  version_not?: number | null;
  version_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
}

export enum VmDiskType {
  CD_ROM = "CD_ROM",
  DISK = "DISK",
}

export interface VmVolumeWhereInput {
  AND?: VmVolumeWhereInput[] | null;
  NOT?: VmVolumeWhereInput[] | null;
  OR?: VmVolumeWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  elf_storage_policy?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_in?: VmVolumeElfStoragePolicyType[] | null;
  elf_storage_policy_not?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_not_in?: VmVolumeElfStoragePolicyType[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format double */
  guest_size_usage_gt?: number | null;

  /** @format double */
  guest_size_usage_gte?: number | null;
  guest_size_usage_in?: number[] | null;

  /** @format double */
  guest_size_usage_lt?: number | null;

  /** @format double */
  guest_size_usage_lte?: number | null;

  /** @format double */
  guest_size_usage_not?: number | null;
  guest_size_usage_not_in?: number[] | null;

  /** @format int64 */
  guest_used_size?: number | null;

  /** @format int64 */
  guest_used_size_gt?: number | null;

  /** @format int64 */
  guest_used_size_gte?: number | null;
  guest_used_size_in?: number[] | null;

  /** @format int64 */
  guest_used_size_lt?: number | null;

  /** @format int64 */
  guest_used_size_lte?: number | null;

  /** @format int64 */
  guest_used_size_not?: number | null;
  guest_used_size_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  lun?: IscsiLunWhereInput | null;
  mounting?: boolean | null;
  mounting_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;
  sharing?: boolean | null;
  sharing_not?: boolean | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  type?: VmVolumeType | null;
  type_in?: VmVolumeType[] | null;
  type_not?: VmVolumeType | null;
  type_not_in?: VmVolumeType[] | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format double */
  unique_logical_size_gt?: number | null;

  /** @format double */
  unique_logical_size_gte?: number | null;
  unique_logical_size_in?: number[] | null;

  /** @format double */
  unique_logical_size_lt?: number | null;

  /** @format double */
  unique_logical_size_lte?: number | null;

  /** @format double */
  unique_logical_size_not?: number | null;
  unique_logical_size_not_in?: number[] | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  vm_disks_every?: VmDiskWhereInput | null;
  vm_disks_none?: VmDiskWhereInput | null;
  vm_disks_some?: VmDiskWhereInput | null;
}

export enum VmVolumeElfStoragePolicyType {
  ELFCPREPLICA2THICKPROVISION = "ELF_CP_REPLICA_2_THICK_PROVISION",
  ELFCPREPLICA2THINPROVISION = "ELF_CP_REPLICA_2_THIN_PROVISION",
  ELFCPREPLICA3THICKPROVISION = "ELF_CP_REPLICA_3_THICK_PROVISION",
  ELFCPREPLICA3THINPROVISION = "ELF_CP_REPLICA_3_THIN_PROVISION",
  REPLICA1THICKPROVISION = "REPLICA_1_THICK_PROVISION",
  REPLICA1THINPROVISION = "REPLICA_1_THIN_PROVISION",
  REPLICA2THICKPROVISION = "REPLICA_2_THICK_PROVISION",
  REPLICA2THINPROVISION = "REPLICA_2_THIN_PROVISION",
  REPLICA3THICKPROVISION = "REPLICA_3_THICK_PROVISION",
  REPLICA3THINPROVISION = "REPLICA_3_THIN_PROVISION",
}

export enum VmVolumeType {
  KVM_VOLUME = "KVM_VOLUME",
  KVM_VOLUME_ISCSI = "KVM_VOLUME_ISCSI",
}

export interface VmSnapshotWhereInput {
  AND?: VmSnapshotWhereInput[] | null;
  NOT?: VmSnapshotWhereInput[] | null;
  OR?: VmSnapshotWhereInput[] | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cluster?: ClusterWhereInput | null;
  consistent_type?: ConsistentType | null;
  consistent_type_in?: ConsistentType[] | null;
  consistent_type_not?: ConsistentType | null;
  consistent_type_not_in?: ConsistentType[] | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  max_bandwidth?: number | null;

  /** @format int64 */
  max_bandwidth_gt?: number | null;

  /** @format int64 */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format int64 */
  max_bandwidth_lt?: number | null;

  /** @format int64 */
  max_bandwidth_lte?: number | null;

  /** @format int64 */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int32 */
  max_iops?: number | null;

  /** @format int32 */
  max_iops_gt?: number | null;

  /** @format int32 */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format int32 */
  max_iops_lt?: number | null;

  /** @format int32 */
  max_iops_lte?: number | null;

  /** @format int32 */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int64 */
  memory?: number | null;

  /** @format int64 */
  memory_gt?: number | null;

  /** @format int64 */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format int64 */
  memory_lt?: number | null;

  /** @format int64 */
  memory_lte?: number | null;

  /** @format int64 */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  snapshot_group?: SnapshotGroupWhereInput | null;

  /** @format int32 */
  vcpu?: number | null;

  /** @format int32 */
  vcpu_gt?: number | null;

  /** @format int32 */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format int32 */
  vcpu_lt?: number | null;

  /** @format int32 */
  vcpu_lte?: number | null;

  /** @format int32 */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  vm?: VmWhereInput | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export enum ConsistentType {
  CRASH_CONSISTENT = "CRASH_CONSISTENT",
  FILE_SYSTEM_CONSISTENT = "FILE_SYSTEM_CONSISTENT",
}

export enum VmDiskIoPolicy {
  RESTRICT_EACH_DISK = "RESTRICT_EACH_DISK",
  RESTRICT_WHOLE_VM = "RESTRICT_WHOLE_VM",
}

export interface SnapshotGroupWhereInput {
  AND?: SnapshotGroupWhereInput[] | null;
  NOT?: SnapshotGroupWhereInput[] | null;
  OR?: SnapshotGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  deleted?: boolean | null;
  deleted_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  estimated_recycling_time?: string | null;
  estimated_recycling_time_gt?: string | null;
  estimated_recycling_time_gte?: string | null;
  estimated_recycling_time_in?: string[] | null;
  estimated_recycling_time_lt?: string | null;
  estimated_recycling_time_lte?: string | null;
  estimated_recycling_time_not?: string | null;
  estimated_recycling_time_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  keep?: boolean | null;
  keep_not?: boolean | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  logical_size_bytes?: number | null;

  /** @format int64 */
  logical_size_bytes_gt?: number | null;

  /** @format int64 */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format int64 */
  logical_size_bytes_lt?: number | null;

  /** @format int64 */
  logical_size_bytes_lte?: number | null;

  /** @format int64 */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  object_num?: number | null;

  /** @format int32 */
  object_num_gt?: number | null;

  /** @format int32 */
  object_num_gte?: number | null;
  object_num_in?: number[] | null;

  /** @format int32 */
  object_num_lt?: number | null;

  /** @format int32 */
  object_num_lte?: number | null;

  /** @format int32 */
  object_num_not?: number | null;
  object_num_not_in?: number[] | null;
  snapshotPlanTask?: SnapshotPlanTaskWhereInput | null;
  vm_snapshots_every?: VmSnapshotWhereInput | null;
  vm_snapshots_none?: VmSnapshotWhereInput | null;
  vm_snapshots_some?: VmSnapshotWhereInput | null;
}

export interface SnapshotPlanTaskWhereInput {
  AND?: SnapshotPlanTaskWhereInput[] | null;
  NOT?: SnapshotPlanTaskWhereInput[] | null;
  OR?: SnapshotPlanTaskWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  end_time?: string | null;
  end_time_gt?: string | null;
  end_time_gte?: string | null;
  end_time_in?: string[] | null;
  end_time_lt?: string | null;
  end_time_lte?: string | null;
  end_time_not?: string | null;
  end_time_not_in?: string[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  snapshotGroup?: SnapshotGroupWhereInput | null;
  snapshotPlan?: SnapshotPlanWhereInput | null;
  start_time?: string | null;
  start_time_gt?: string | null;
  start_time_gte?: string | null;
  start_time_in?: string[] | null;
  start_time_lt?: string | null;
  start_time_lte?: string | null;
  start_time_not?: string | null;
  start_time_not_in?: string[] | null;
  status?: SnapshotPlanExecuteStatus | null;
  status_in?: SnapshotPlanExecuteStatus[] | null;
  status_not?: SnapshotPlanExecuteStatus | null;
  status_not_in?: SnapshotPlanExecuteStatus[] | null;
  type?: SnapshotPlanTaskType | null;
  type_in?: SnapshotPlanTaskType[] | null;
  type_not?: SnapshotPlanTaskType | null;
  type_not_in?: SnapshotPlanTaskType[] | null;
}

export interface SnapshotPlanWhereInput {
  AND?: SnapshotPlanWhereInput[] | null;
  NOT?: SnapshotPlanWhereInput[] | null;
  OR?: SnapshotPlanWhereInput[] | null;

  /** @format int32 */
  auto_delete_num?: number | null;

  /** @format int32 */
  auto_delete_num_gt?: number | null;

  /** @format int32 */
  auto_delete_num_gte?: number | null;
  auto_delete_num_in?: number[] | null;

  /** @format int32 */
  auto_delete_num_lt?: number | null;

  /** @format int32 */
  auto_delete_num_lte?: number | null;

  /** @format int32 */
  auto_delete_num_not?: number | null;
  auto_delete_num_not_in?: number[] | null;

  /** @format int32 */
  auto_execute_num?: number | null;

  /** @format int32 */
  auto_execute_num_gt?: number | null;

  /** @format int32 */
  auto_execute_num_gte?: number | null;
  auto_execute_num_in?: number[] | null;

  /** @format int32 */
  auto_execute_num_lt?: number | null;

  /** @format int32 */
  auto_execute_num_lte?: number | null;

  /** @format int32 */
  auto_execute_num_not?: number | null;
  auto_execute_num_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  end_time?: string | null;
  end_time_gt?: string | null;
  end_time_gte?: string | null;
  end_time_in?: string[] | null;
  end_time_lt?: string | null;
  end_time_lte?: string | null;
  end_time_not?: string | null;
  end_time_not_in?: string[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  execute_plan_type?: SnapshotPlanExecuteType | null;
  execute_plan_type_in?: SnapshotPlanExecuteType[] | null;
  execute_plan_type_not?: SnapshotPlanExecuteType | null;
  execute_plan_type_not_in?: SnapshotPlanExecuteType[] | null;
  execution_tasks_every?: SnapshotPlanTaskWhereInput | null;
  execution_tasks_none?: SnapshotPlanTaskWhereInput | null;
  execution_tasks_some?: SnapshotPlanTaskWhereInput | null;
  healthy?: boolean | null;
  healthy_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  last_execute_end_time?: string | null;
  last_execute_end_time_gt?: string | null;
  last_execute_end_time_gte?: string | null;
  last_execute_end_time_in?: string[] | null;
  last_execute_end_time_lt?: string | null;
  last_execute_end_time_lte?: string | null;
  last_execute_end_time_not?: string | null;
  last_execute_end_time_not_in?: string[] | null;
  last_execute_status?: SnapshotPlanExecuteStatus | null;
  last_execute_status_in?: SnapshotPlanExecuteStatus[] | null;
  last_execute_status_not?: SnapshotPlanExecuteStatus | null;
  last_execute_status_not_in?: SnapshotPlanExecuteStatus[] | null;
  last_execute_time?: string | null;
  last_execute_time_gt?: string | null;
  last_execute_time_gte?: string | null;
  last_execute_time_in?: string[] | null;
  last_execute_time_lt?: string | null;
  last_execute_time_lte?: string | null;
  last_execute_time_not?: string | null;
  last_execute_time_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  logical_size_bytes?: number | null;

  /** @format int64 */
  logical_size_bytes_gt?: number | null;

  /** @format int64 */
  logical_size_bytes_gte?: number | null;
  logical_size_bytes_in?: number[] | null;

  /** @format int64 */
  logical_size_bytes_lt?: number | null;

  /** @format int64 */
  logical_size_bytes_lte?: number | null;

  /** @format int64 */
  logical_size_bytes_not?: number | null;
  logical_size_bytes_not_in?: number[] | null;

  /** @format int32 */
  manual_delete_num?: number | null;

  /** @format int32 */
  manual_delete_num_gt?: number | null;

  /** @format int32 */
  manual_delete_num_gte?: number | null;
  manual_delete_num_in?: number[] | null;

  /** @format int32 */
  manual_delete_num_lt?: number | null;

  /** @format int32 */
  manual_delete_num_lte?: number | null;

  /** @format int32 */
  manual_delete_num_not?: number | null;
  manual_delete_num_not_in?: number[] | null;

  /** @format int32 */
  manual_execute_num?: number | null;

  /** @format int32 */
  manual_execute_num_gt?: number | null;

  /** @format int32 */
  manual_execute_num_gte?: number | null;
  manual_execute_num_in?: number[] | null;

  /** @format int32 */
  manual_execute_num_lt?: number | null;

  /** @format int32 */
  manual_execute_num_lte?: number | null;

  /** @format int32 */
  manual_execute_num_not?: number | null;
  manual_execute_num_not_in?: number[] | null;
  mirror?: boolean | null;
  mirror_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  next_execute_time?: string | null;
  next_execute_time_gt?: string | null;
  next_execute_time_gte?: string | null;
  next_execute_time_in?: string[] | null;
  next_execute_time_lt?: string | null;
  next_execute_time_lte?: string | null;
  next_execute_time_not?: string | null;
  next_execute_time_not_in?: string[] | null;

  /** @format int32 */
  object_num?: number | null;

  /** @format int32 */
  object_num_gt?: number | null;

  /** @format int32 */
  object_num_gte?: number | null;
  object_num_in?: number[] | null;

  /** @format int32 */
  object_num_lt?: number | null;

  /** @format int32 */
  object_num_lte?: number | null;

  /** @format int32 */
  object_num_not?: number | null;
  object_num_not_in?: number[] | null;

  /** @format int64 */
  physical_size_bytes?: number | null;

  /** @format int64 */
  physical_size_bytes_gt?: number | null;

  /** @format int64 */
  physical_size_bytes_gte?: number | null;
  physical_size_bytes_in?: number[] | null;

  /** @format int64 */
  physical_size_bytes_lt?: number | null;

  /** @format int64 */
  physical_size_bytes_lte?: number | null;

  /** @format int64 */
  physical_size_bytes_not?: number | null;
  physical_size_bytes_not_in?: number[] | null;

  /** @format int32 */
  remain_snapshot_num?: number | null;

  /** @format int32 */
  remain_snapshot_num_gt?: number | null;

  /** @format int32 */
  remain_snapshot_num_gte?: number | null;
  remain_snapshot_num_in?: number[] | null;

  /** @format int32 */
  remain_snapshot_num_lt?: number | null;

  /** @format int32 */
  remain_snapshot_num_lte?: number | null;

  /** @format int32 */
  remain_snapshot_num_not?: number | null;
  remain_snapshot_num_not_in?: number[] | null;

  /** @format int32 */
  snapshot_group_num?: number | null;

  /** @format int32 */
  snapshot_group_num_gt?: number | null;

  /** @format int32 */
  snapshot_group_num_gte?: number | null;
  snapshot_group_num_in?: number[] | null;

  /** @format int32 */
  snapshot_group_num_lt?: number | null;

  /** @format int32 */
  snapshot_group_num_lte?: number | null;

  /** @format int32 */
  snapshot_group_num_not?: number | null;
  snapshot_group_num_not_in?: number[] | null;
  start_time?: string | null;
  start_time_gt?: string | null;
  start_time_gte?: string | null;
  start_time_in?: string[] | null;
  start_time_lt?: string | null;
  start_time_lte?: string | null;
  start_time_not?: string | null;
  start_time_not_in?: string[] | null;
  status?: SnapshotPlanStatus | null;
  status_in?: SnapshotPlanStatus[] | null;
  status_not?: SnapshotPlanStatus | null;
  status_not_in?: SnapshotPlanStatus[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export enum SnapshotPlanExecuteType {
  DAY = "DAY",
  HOUR = "HOUR",
  MINUTE = "MINUTE",
  MONTH = "MONTH",
  WEEK = "WEEK",
}

export enum SnapshotPlanExecuteStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEED = "SUCCEED",
  UNSPECIFIED = "UNSPECIFIED",
}

export enum SnapshotPlanStatus {
  NORMAL = "NORMAL",
  STOPPED = "STOPPED",
  SUSPENDED = "SUSPENDED",
}

export enum SnapshotPlanTaskType {
  TASK_TYPE_CLONE = "TASK_TYPE_CLONE",
  TASK_TYPE_PROTECT = "TASK_TYPE_PROTECT",
  TASK_TYPE_ROLLBACK = "TASK_TYPE_ROLLBACK",
}

export interface VmTemplateWhereInput {
  AND?: VmTemplateWhereInput[] | null;
  NOT?: VmTemplateWhereInput[] | null;
  OR?: VmTemplateWhereInput[] | null;
  clock_offset?: VmClockOffset | null;
  clock_offset_in?: VmClockOffset[] | null;
  clock_offset_not?: VmClockOffset | null;
  clock_offset_not_in?: VmClockOffset[] | null;
  cloud_init_supported?: boolean | null;
  cloud_init_supported_not?: boolean | null;
  cluster?: ClusterWhereInput | null;
  content_library_vm_template?: ContentLibraryVmTemplateWhereInput | null;
  cpu_model?: string | null;
  cpu_model_contains?: string | null;
  cpu_model_ends_with?: string | null;
  cpu_model_gt?: string | null;
  cpu_model_gte?: string | null;
  cpu_model_in?: string[] | null;
  cpu_model_lt?: string | null;
  cpu_model_lte?: string | null;
  cpu_model_not?: string | null;
  cpu_model_not_contains?: string | null;
  cpu_model_not_ends_with?: string | null;
  cpu_model_not_in?: string[] | null;
  cpu_model_not_starts_with?: string | null;
  cpu_model_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  firmware?: VmFirmware | null;
  firmware_in?: VmFirmware[] | null;
  firmware_not?: VmFirmware | null;
  firmware_not_in?: VmFirmware[] | null;
  ha?: boolean | null;
  ha_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  io_policy?: VmDiskIoPolicy | null;
  io_policy_in?: VmDiskIoPolicy[] | null;
  io_policy_not?: VmDiskIoPolicy | null;
  io_policy_not_in?: VmDiskIoPolicy[] | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int64 */
  max_bandwidth?: number | null;

  /** @format int64 */
  max_bandwidth_gt?: number | null;

  /** @format int64 */
  max_bandwidth_gte?: number | null;
  max_bandwidth_in?: number[] | null;

  /** @format int64 */
  max_bandwidth_lt?: number | null;

  /** @format int64 */
  max_bandwidth_lte?: number | null;

  /** @format int64 */
  max_bandwidth_not?: number | null;
  max_bandwidth_not_in?: number[] | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_in?: VmDiskIoRestrictType[] | null;
  max_bandwidth_policy_not?: VmDiskIoRestrictType | null;
  max_bandwidth_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int32 */
  max_iops?: number | null;

  /** @format int32 */
  max_iops_gt?: number | null;

  /** @format int32 */
  max_iops_gte?: number | null;
  max_iops_in?: number[] | null;

  /** @format int32 */
  max_iops_lt?: number | null;

  /** @format int32 */
  max_iops_lte?: number | null;

  /** @format int32 */
  max_iops_not?: number | null;
  max_iops_not_in?: number[] | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  max_iops_policy_in?: VmDiskIoRestrictType[] | null;
  max_iops_policy_not?: VmDiskIoRestrictType | null;
  max_iops_policy_not_in?: VmDiskIoRestrictType[] | null;

  /** @format int64 */
  memory?: number | null;

  /** @format int64 */
  memory_gt?: number | null;

  /** @format int64 */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format int64 */
  memory_lt?: number | null;

  /** @format int64 */
  memory_lte?: number | null;

  /** @format int64 */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format int32 */
  vcpu?: number | null;

  /** @format int32 */
  vcpu_gt?: number | null;

  /** @format int32 */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format int32 */
  vcpu_lt?: number | null;

  /** @format int32 */
  vcpu_lte?: number | null;

  /** @format int32 */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  video_type?: string | null;
  video_type_contains?: string | null;
  video_type_ends_with?: string | null;
  video_type_gt?: string | null;
  video_type_gte?: string | null;
  video_type_in?: string[] | null;
  video_type_lt?: string | null;
  video_type_lte?: string | null;
  video_type_not?: string | null;
  video_type_not_contains?: string | null;
  video_type_not_ends_with?: string | null;
  video_type_not_in?: string[] | null;
  video_type_not_starts_with?: string | null;
  video_type_starts_with?: string | null;
  win_opt?: boolean | null;
  win_opt_not?: boolean | null;
}

export interface ContentLibraryVmTemplateWhereInput {
  AND?: ContentLibraryVmTemplateWhereInput[] | null;
  NOT?: ContentLibraryVmTemplateWhereInput[] | null;
  OR?: ContentLibraryVmTemplateWhereInput[] | null;
  architecture?: Architecture | null;
  architecture_in?: Architecture[] | null;
  architecture_not?: Architecture | null;
  architecture_not_in?: Architecture[] | null;
  cloud_init_supported?: boolean | null;
  cloud_init_supported_not?: boolean | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;

  /** @format int64 */
  memory?: number | null;

  /** @format int64 */
  memory_gt?: number | null;

  /** @format int64 */
  memory_gte?: number | null;
  memory_in?: number[] | null;

  /** @format int64 */
  memory_lt?: number | null;

  /** @format int64 */
  memory_lte?: number | null;

  /** @format int64 */
  memory_not?: number | null;
  memory_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  os?: string | null;
  os_contains?: string | null;
  os_ends_with?: string | null;
  os_gt?: string | null;
  os_gte?: string | null;
  os_in?: string[] | null;
  os_lt?: string | null;
  os_lte?: string | null;
  os_not?: string | null;
  os_not_contains?: string | null;
  os_not_ends_with?: string | null;
  os_not_in?: string[] | null;
  os_not_starts_with?: string | null;
  os_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;

  /** @format int32 */
  vcpu?: number | null;

  /** @format int32 */
  vcpu_gt?: number | null;

  /** @format int32 */
  vcpu_gte?: number | null;
  vcpu_in?: number[] | null;

  /** @format int32 */
  vcpu_lt?: number | null;

  /** @format int32 */
  vcpu_lte?: number | null;

  /** @format int32 */
  vcpu_not?: number | null;
  vcpu_not_in?: number[] | null;
  vm_templates_every?: VmTemplateWhereInput | null;
  vm_templates_none?: VmTemplateWhereInput | null;
  vm_templates_some?: VmTemplateWhereInput | null;
}

export enum Architecture {
  AARCH64 = "AARCH64",
  X8664 = "X86_64",
}

export interface DatacenterWhereInput {
  AND?: DatacenterWhereInput[] | null;
  NOT?: DatacenterWhereInput[] | null;
  OR?: DatacenterWhereInput[] | null;

  /** @format int32 */
  cluster_num?: number | null;

  /** @format int32 */
  cluster_num_gt?: number | null;

  /** @format int32 */
  cluster_num_gte?: number | null;
  cluster_num_in?: number[] | null;

  /** @format int32 */
  cluster_num_lt?: number | null;

  /** @format int32 */
  cluster_num_lte?: number | null;

  /** @format int32 */
  cluster_num_not?: number | null;
  cluster_num_not_in?: number[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int64 */
  failure_data_space_gt?: number | null;

  /** @format int64 */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format int64 */
  failure_data_space_lt?: number | null;

  /** @format int64 */
  failure_data_space_lte?: number | null;

  /** @format int64 */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;

  /** @format int32 */
  host_num?: number | null;

  /** @format int32 */
  host_num_gt?: number | null;

  /** @format int32 */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format int32 */
  host_num_lt?: number | null;

  /** @format int32 */
  host_num_lte?: number | null;

  /** @format int32 */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  organization?: OrganizationWhereInput | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_cpu_hz_gt?: number | null;

  /** @format int64 */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz_lt?: number | null;

  /** @format int64 */
  total_cpu_hz_lte?: number | null;

  /** @format int64 */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_data_capacity_gt?: number | null;

  /** @format int64 */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format int64 */
  total_data_capacity_lt?: number | null;

  /** @format int64 */
  total_data_capacity_lte?: number | null;

  /** @format int64 */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  total_memory_bytes_gt?: number | null;

  /** @format int64 */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes_lt?: number | null;

  /** @format int64 */
  total_memory_bytes_lte?: number | null;

  /** @format int64 */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format double */
  used_cpu_hz_gt?: number | null;

  /** @format double */
  used_cpu_hz_gte?: number | null;
  used_cpu_hz_in?: number[] | null;

  /** @format double */
  used_cpu_hz_lt?: number | null;

  /** @format double */
  used_cpu_hz_lte?: number | null;

  /** @format double */
  used_cpu_hz_not?: number | null;
  used_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format int64 */
  used_data_space_gt?: number | null;

  /** @format int64 */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format int64 */
  used_data_space_lt?: number | null;

  /** @format int64 */
  used_data_space_lte?: number | null;

  /** @format int64 */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format double */
  used_memory_bytes_gt?: number | null;

  /** @format double */
  used_memory_bytes_gte?: number | null;
  used_memory_bytes_in?: number[] | null;

  /** @format double */
  used_memory_bytes_lt?: number | null;

  /** @format double */
  used_memory_bytes_lte?: number | null;

  /** @format double */
  used_memory_bytes_not?: number | null;
  used_memory_bytes_not_in?: number[] | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
}

export interface OrganizationWhereInput {
  AND?: OrganizationWhereInput[] | null;
  NOT?: OrganizationWhereInput[] | null;
  OR?: OrganizationWhereInput[] | null;
  datacenters_every?: DatacenterWhereInput | null;
  datacenters_none?: DatacenterWhereInput | null;
  datacenters_some?: DatacenterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
}

export interface IsolationPolicyWhereInput {
  AND?: IsolationPolicyWhereInput[] | null;
  NOT?: IsolationPolicyWhereInput[] | null;
  OR?: IsolationPolicyWhereInput[] | null;
  everoute_cluster?: EverouteClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  mode?: IsolationMode | null;
  mode_in?: IsolationMode[] | null;
  mode_not?: IsolationMode | null;
  mode_not_in?: IsolationMode[] | null;
  vm?: VmWhereInput | null;
}

export interface EverouteClusterWhereInput {
  AND?: EverouteClusterWhereInput[] | null;
  NOT?: EverouteClusterWhereInput[] | null;
  OR?: EverouteClusterWhereInput[] | null;
  agent_elf_clusters_every?: ClusterWhereInput | null;
  agent_elf_clusters_none?: ClusterWhereInput | null;
  agent_elf_clusters_some?: ClusterWhereInput | null;
  agent_elf_vdses_every?: VdsWhereInput | null;
  agent_elf_vdses_none?: VdsWhereInput | null;
  agent_elf_vdses_some?: VdsWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  global_default_action?: GlobalPolicyAction | null;
  global_default_action_in?: GlobalPolicyAction[] | null;
  global_default_action_not?: GlobalPolicyAction | null;
  global_default_action_not_in?: GlobalPolicyAction[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  installed?: boolean | null;
  installed_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  phase?: EverouteClusterPhase | null;
  phase_in?: EverouteClusterPhase[] | null;
  phase_not?: EverouteClusterPhase | null;
  phase_not_in?: EverouteClusterPhase[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface VdsWhereInput {
  AND?: VdsWhereInput[] | null;
  NOT?: VdsWhereInput[] | null;
  OR?: VdsWhereInput[] | null;
  bond_mode?: string | null;
  bond_mode_contains?: string | null;
  bond_mode_ends_with?: string | null;
  bond_mode_gt?: string | null;
  bond_mode_gte?: string | null;
  bond_mode_in?: string[] | null;
  bond_mode_lt?: string | null;
  bond_mode_lte?: string | null;
  bond_mode_not?: string | null;
  bond_mode_not_contains?: string | null;
  bond_mode_not_ends_with?: string | null;
  bond_mode_not_in?: string[] | null;
  bond_mode_not_starts_with?: string | null;
  bond_mode_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  everoute_cluster?: EverouteClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  ovsbr_name?: string | null;
  ovsbr_name_contains?: string | null;
  ovsbr_name_ends_with?: string | null;
  ovsbr_name_gt?: string | null;
  ovsbr_name_gte?: string | null;
  ovsbr_name_in?: string[] | null;
  ovsbr_name_lt?: string | null;
  ovsbr_name_lte?: string | null;
  ovsbr_name_not?: string | null;
  ovsbr_name_not_contains?: string | null;
  ovsbr_name_not_ends_with?: string | null;
  ovsbr_name_not_in?: string[] | null;
  ovsbr_name_not_starts_with?: string | null;
  ovsbr_name_starts_with?: string | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  vlans_every?: VlanWhereInput | null;
  vlans_none?: VlanWhereInput | null;

  /** @format int32 */
  vlans_num?: number | null;

  /** @format int32 */
  vlans_num_gt?: number | null;

  /** @format int32 */
  vlans_num_gte?: number | null;
  vlans_num_in?: number[] | null;

  /** @format int32 */
  vlans_num_lt?: number | null;

  /** @format int32 */
  vlans_num_lte?: number | null;

  /** @format int32 */
  vlans_num_not?: number | null;
  vlans_num_not_in?: number[] | null;
  vlans_some?: VlanWhereInput | null;
  work_mode?: string | null;
  work_mode_contains?: string | null;
  work_mode_ends_with?: string | null;
  work_mode_gt?: string | null;
  work_mode_gte?: string | null;
  work_mode_in?: string[] | null;
  work_mode_lt?: string | null;
  work_mode_lte?: string | null;
  work_mode_not?: string | null;
  work_mode_not_contains?: string | null;
  work_mode_not_ends_with?: string | null;
  work_mode_not_in?: string[] | null;
  work_mode_not_starts_with?: string | null;
  work_mode_starts_with?: string | null;
}

export interface NicWhereInput {
  AND?: NicWhereInput[] | null;
  NOT?: NicWhereInput[] | null;
  OR?: NicWhereInput[] | null;
  driver?: string | null;
  driver_contains?: string | null;
  driver_ends_with?: string | null;
  driver_gt?: string | null;
  driver_gte?: string | null;
  driver_in?: string[] | null;
  driver_lt?: string | null;
  driver_lte?: string | null;
  driver_not?: string | null;
  driver_not_contains?: string | null;
  driver_not_ends_with?: string | null;
  driver_not_in?: string[] | null;
  driver_not_starts_with?: string | null;
  driver_starts_with?: string | null;
  driver_state?: NicDriverState | null;
  driver_state_in?: NicDriverState[] | null;
  driver_state_not?: NicDriverState | null;
  driver_state_not_in?: NicDriverState[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  gateway_ip?: string | null;
  gateway_ip_contains?: string | null;
  gateway_ip_ends_with?: string | null;
  gateway_ip_gt?: string | null;
  gateway_ip_gte?: string | null;
  gateway_ip_in?: string[] | null;
  gateway_ip_lt?: string | null;
  gateway_ip_lte?: string | null;
  gateway_ip_not?: string | null;
  gateway_ip_not_contains?: string | null;
  gateway_ip_not_ends_with?: string | null;
  gateway_ip_not_in?: string[] | null;
  gateway_ip_not_starts_with?: string | null;
  gateway_ip_starts_with?: string | null;
  host?: HostWhereInput | null;
  ibdev?: string | null;
  ibdev_contains?: string | null;
  ibdev_ends_with?: string | null;
  ibdev_gt?: string | null;
  ibdev_gte?: string | null;
  ibdev_in?: string[] | null;
  ibdev_lt?: string | null;
  ibdev_lte?: string | null;
  ibdev_not?: string | null;
  ibdev_not_contains?: string | null;
  ibdev_not_ends_with?: string | null;
  ibdev_not_in?: string[] | null;
  ibdev_not_starts_with?: string | null;
  ibdev_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  iommu_status?: IommuStatus | null;
  iommu_status_in?: IommuStatus[] | null;
  iommu_status_not?: IommuStatus | null;
  iommu_status_not_in?: IommuStatus[] | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  is_sriov?: boolean | null;
  is_sriov_not?: boolean | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mac_address?: string | null;
  mac_address_contains?: string | null;
  mac_address_ends_with?: string | null;
  mac_address_gt?: string | null;
  mac_address_gte?: string | null;
  mac_address_in?: string[] | null;
  mac_address_lt?: string | null;
  mac_address_lte?: string | null;
  mac_address_not?: string | null;
  mac_address_not_contains?: string | null;
  mac_address_not_ends_with?: string | null;
  mac_address_not_in?: string[] | null;
  mac_address_not_starts_with?: string | null;
  mac_address_starts_with?: string | null;

  /** @format int32 */
  max_vf_num?: number | null;

  /** @format int32 */
  max_vf_num_gt?: number | null;

  /** @format int32 */
  max_vf_num_gte?: number | null;
  max_vf_num_in?: number[] | null;

  /** @format int32 */
  max_vf_num_lt?: number | null;

  /** @format int32 */
  max_vf_num_lte?: number | null;

  /** @format int32 */
  max_vf_num_not?: number | null;
  max_vf_num_not_in?: number[] | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;

  /** @format int32 */
  mtu?: number | null;

  /** @format int32 */
  mtu_gt?: number | null;

  /** @format int32 */
  mtu_gte?: number | null;
  mtu_in?: number[] | null;

  /** @format int32 */
  mtu_lt?: number | null;

  /** @format int32 */
  mtu_lte?: number | null;

  /** @format int32 */
  mtu_not?: number | null;
  mtu_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nic_uuid?: string | null;
  nic_uuid_contains?: string | null;
  nic_uuid_ends_with?: string | null;
  nic_uuid_gt?: string | null;
  nic_uuid_gte?: string | null;
  nic_uuid_in?: string[] | null;
  nic_uuid_lt?: string | null;
  nic_uuid_lte?: string | null;
  nic_uuid_not?: string | null;
  nic_uuid_not_contains?: string | null;
  nic_uuid_not_ends_with?: string | null;
  nic_uuid_not_in?: string[] | null;
  nic_uuid_not_starts_with?: string | null;
  nic_uuid_starts_with?: string | null;
  physical?: boolean | null;
  physical_not?: boolean | null;
  rdma_enabled?: boolean | null;
  rdma_enabled_not?: boolean | null;
  running?: boolean | null;
  running_not?: boolean | null;

  /** @format int64 */
  speed?: number | null;

  /** @format int64 */
  speed_gt?: number | null;

  /** @format int64 */
  speed_gte?: number | null;
  speed_in?: number[] | null;

  /** @format int64 */
  speed_lt?: number | null;

  /** @format int64 */
  speed_lte?: number | null;

  /** @format int64 */
  speed_not?: number | null;
  speed_not_in?: number[] | null;
  subnet_mask?: string | null;
  subnet_mask_contains?: string | null;
  subnet_mask_ends_with?: string | null;
  subnet_mask_gt?: string | null;
  subnet_mask_gte?: string | null;
  subnet_mask_in?: string[] | null;
  subnet_mask_lt?: string | null;
  subnet_mask_lte?: string | null;
  subnet_mask_not?: string | null;
  subnet_mask_not_contains?: string | null;
  subnet_mask_not_ends_with?: string | null;
  subnet_mask_not_in?: string[] | null;
  subnet_mask_not_starts_with?: string | null;
  subnet_mask_starts_with?: string | null;

  /** @format int32 */
  total_vf_num?: number | null;

  /** @format int32 */
  total_vf_num_gt?: number | null;

  /** @format int32 */
  total_vf_num_gte?: number | null;
  total_vf_num_in?: number[] | null;

  /** @format int32 */
  total_vf_num_lt?: number | null;

  /** @format int32 */
  total_vf_num_lte?: number | null;

  /** @format int32 */
  total_vf_num_not?: number | null;
  total_vf_num_not_in?: number[] | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  up?: boolean | null;
  up_not?: boolean | null;

  /** @format int32 */
  used_vf_num?: number | null;

  /** @format int32 */
  used_vf_num_gt?: number | null;

  /** @format int32 */
  used_vf_num_gte?: number | null;
  used_vf_num_in?: number[] | null;

  /** @format int32 */
  used_vf_num_lt?: number | null;

  /** @format int32 */
  used_vf_num_lte?: number | null;

  /** @format int32 */
  used_vf_num_not?: number | null;
  used_vf_num_not_in?: number[] | null;
  user_usage?: NicUserUsage | null;
  user_usage_in?: NicUserUsage[] | null;
  user_usage_not?: NicUserUsage | null;
  user_usage_not_in?: NicUserUsage[] | null;
  vds?: VdsWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export enum NicDriverState {
  NEED_REBOOT = "NEED_REBOOT",
  NOT_READY = "NOT_READY",
  NO_DRIVER = "NO_DRIVER",
  READY = "READY",
}

export enum IommuStatus {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
  NEED_REBOOT = "NEED_REBOOT",
}

export enum NetworkType {
  ACCESS = "ACCESS",
  MANAGEMENT = "MANAGEMENT",
  MIGRATION = "MIGRATION",
  STORAGE = "STORAGE",
  STORAGE_ACCESS = "STORAGE_ACCESS",
  VM = "VM",
  VPC_SYS = "VPC_SYS",
  VPC_VM = "VPC_VM",
}

export enum NicUserUsage {
  DEFAULT = "DEFAULT",
  PASS_THROUGH = "PASS_THROUGH",
  SRIOV = "SRIOV",
}

export interface VlanWhereInput {
  AND?: VlanWhereInput[] | null;
  NOT?: VlanWhereInput[] | null;
  OR?: VlanWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  gateway_ip?: string | null;
  gateway_ip_contains?: string | null;
  gateway_ip_ends_with?: string | null;
  gateway_ip_gt?: string | null;
  gateway_ip_gte?: string | null;
  gateway_ip_in?: string[] | null;
  gateway_ip_lt?: string | null;
  gateway_ip_lte?: string | null;
  gateway_ip_not?: string | null;
  gateway_ip_not_contains?: string | null;
  gateway_ip_not_ends_with?: string | null;
  gateway_ip_not_in?: string[] | null;
  gateway_ip_not_starts_with?: string | null;
  gateway_ip_starts_with?: string | null;
  gateway_subnetmask?: string | null;
  gateway_subnetmask_contains?: string | null;
  gateway_subnetmask_ends_with?: string | null;
  gateway_subnetmask_gt?: string | null;
  gateway_subnetmask_gte?: string | null;
  gateway_subnetmask_in?: string[] | null;
  gateway_subnetmask_lt?: string | null;
  gateway_subnetmask_lte?: string | null;
  gateway_subnetmask_not?: string | null;
  gateway_subnetmask_not_contains?: string | null;
  gateway_subnetmask_not_ends_with?: string | null;
  gateway_subnetmask_not_in?: string[] | null;
  gateway_subnetmask_not_starts_with?: string | null;
  gateway_subnetmask_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mode_type?: VlanModeType | null;
  mode_type_in?: VlanModeType[] | null;
  mode_type_not?: VlanModeType | null;
  mode_type_not_in?: VlanModeType[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format double */
  qos_max_bandwidth?: number | null;

  /** @format double */
  qos_max_bandwidth_gt?: number | null;

  /** @format double */
  qos_max_bandwidth_gte?: number | null;
  qos_max_bandwidth_in?: number[] | null;

  /** @format double */
  qos_max_bandwidth_lt?: number | null;

  /** @format double */
  qos_max_bandwidth_lte?: number | null;

  /** @format double */
  qos_max_bandwidth_not?: number | null;
  qos_max_bandwidth_not_in?: number[] | null;

  /** @format double */
  qos_min_bandwidth?: number | null;

  /** @format double */
  qos_min_bandwidth_gt?: number | null;

  /** @format double */
  qos_min_bandwidth_gte?: number | null;
  qos_min_bandwidth_in?: number[] | null;

  /** @format double */
  qos_min_bandwidth_lt?: number | null;

  /** @format double */
  qos_min_bandwidth_lte?: number | null;

  /** @format double */
  qos_min_bandwidth_not?: number | null;
  qos_min_bandwidth_not_in?: number[] | null;

  /** @format int32 */
  qos_priority?: number | null;

  /** @format int32 */
  qos_priority_gt?: number | null;

  /** @format int32 */
  qos_priority_gte?: number | null;
  qos_priority_in?: number[] | null;

  /** @format int32 */
  qos_priority_lt?: number | null;

  /** @format int32 */
  qos_priority_lte?: number | null;

  /** @format int32 */
  qos_priority_not?: number | null;
  qos_priority_not_in?: number[] | null;
  subnetmask?: string | null;
  subnetmask_contains?: string | null;
  subnetmask_ends_with?: string | null;
  subnetmask_gt?: string | null;
  subnetmask_gte?: string | null;
  subnetmask_in?: string[] | null;
  subnetmask_lt?: string | null;
  subnetmask_lte?: string | null;
  subnetmask_not?: string | null;
  subnetmask_not_contains?: string | null;
  subnetmask_not_ends_with?: string | null;
  subnetmask_not_in?: string[] | null;
  subnetmask_not_starts_with?: string | null;
  subnetmask_starts_with?: string | null;
  type?: NetworkType | null;
  type_in?: NetworkType[] | null;
  type_not?: NetworkType | null;
  type_not_in?: NetworkType[] | null;
  vds?: VdsWhereInput | null;

  /** @format int32 */
  vlan_id?: number | null;

  /** @format int32 */
  vlan_id_gt?: number | null;

  /** @format int32 */
  vlan_id_gte?: number | null;
  vlan_id_in?: number[] | null;

  /** @format int32 */
  vlan_id_lt?: number | null;

  /** @format int32 */
  vlan_id_lte?: number | null;

  /** @format int32 */
  vlan_id_not?: number | null;
  vlan_id_not_in?: number[] | null;
  vm_nics_every?: VmNicWhereInput | null;
  vm_nics_none?: VmNicWhereInput | null;
  vm_nics_some?: VmNicWhereInput | null;
}

export enum VlanModeType {
  GENEVE = "GENEVE",
  VLAN_ACCESS = "VLAN_ACCESS",
  VLAN_TRUNK = "VLAN_TRUNK",
  VXLAN = "VXLAN",
}

export interface VmNicWhereInput {
  AND?: VmNicWhereInput[] | null;
  NOT?: VmNicWhereInput[] | null;
  OR?: VmNicWhereInput[] | null;

  /** @format double */
  egress_rate_limit_burst_in_bit?: number | null;

  /** @format double */
  egress_rate_limit_burst_in_bit_gt?: number | null;

  /** @format double */
  egress_rate_limit_burst_in_bit_gte?: number | null;
  egress_rate_limit_burst_in_bit_in?: number[] | null;

  /** @format double */
  egress_rate_limit_burst_in_bit_lt?: number | null;

  /** @format double */
  egress_rate_limit_burst_in_bit_lte?: number | null;

  /** @format double */
  egress_rate_limit_burst_in_bit_not?: number | null;
  egress_rate_limit_burst_in_bit_not_in?: number[] | null;
  egress_rate_limit_enabled?: boolean | null;
  egress_rate_limit_enabled_not?: boolean | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps?: number | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps_gt?: number | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps_gte?: number | null;
  egress_rate_limit_max_rate_in_bitps_in?: number[] | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps_lt?: number | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps_lte?: number | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps_not?: number | null;
  egress_rate_limit_max_rate_in_bitps_not_in?: number[] | null;
  enabled?: boolean | null;
  enabled_not?: boolean | null;
  gateway?: string | null;
  gateway_contains?: string | null;
  gateway_ends_with?: string | null;
  gateway_gt?: string | null;
  gateway_gte?: string | null;
  gateway_in?: string[] | null;
  gateway_lt?: string | null;
  gateway_lte?: string | null;
  gateway_not?: string | null;
  gateway_not_contains?: string | null;
  gateway_not_ends_with?: string | null;
  gateway_not_in?: string[] | null;
  gateway_not_starts_with?: string | null;
  gateway_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit?: number | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit_gt?: number | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit_gte?: number | null;
  ingress_rate_limit_burst_in_bit_in?: number[] | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit_lt?: number | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit_lte?: number | null;

  /** @format double */
  ingress_rate_limit_burst_in_bit_not?: number | null;
  ingress_rate_limit_burst_in_bit_not_in?: number[] | null;
  ingress_rate_limit_enabled?: boolean | null;
  ingress_rate_limit_enabled_not?: boolean | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps?: number | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps_gt?: number | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps_gte?: number | null;
  ingress_rate_limit_max_rate_in_bitps_in?: number[] | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps_lt?: number | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps_lte?: number | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps_not?: number | null;
  ingress_rate_limit_max_rate_in_bitps_not_in?: number[] | null;
  interface_id?: string | null;
  interface_id_contains?: string | null;
  interface_id_ends_with?: string | null;
  interface_id_gt?: string | null;
  interface_id_gte?: string | null;
  interface_id_in?: string[] | null;
  interface_id_lt?: string | null;
  interface_id_lte?: string | null;
  interface_id_not?: string | null;
  interface_id_not_contains?: string | null;
  interface_id_not_ends_with?: string | null;
  interface_id_not_in?: string[] | null;
  interface_id_not_starts_with?: string | null;
  interface_id_starts_with?: string | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mac_address?: string | null;
  mac_address_contains?: string | null;
  mac_address_ends_with?: string | null;
  mac_address_gt?: string | null;
  mac_address_gte?: string | null;
  mac_address_in?: string[] | null;
  mac_address_lt?: string | null;
  mac_address_lte?: string | null;
  mac_address_not?: string | null;
  mac_address_not_contains?: string | null;
  mac_address_not_ends_with?: string | null;
  mac_address_not_in?: string[] | null;
  mac_address_not_starts_with?: string | null;
  mac_address_starts_with?: string | null;
  mirror?: boolean | null;
  mirror_not?: boolean | null;
  model?: VmNicModel | null;
  model_in?: VmNicModel[] | null;
  model_not?: VmNicModel | null;
  model_not_in?: VmNicModel[] | null;
  nic?: NicWhereInput | null;

  /** @format int32 */
  order?: number | null;

  /** @format int32 */
  order_gt?: number | null;

  /** @format int32 */
  order_gte?: number | null;
  order_in?: number[] | null;

  /** @format int32 */
  order_lt?: number | null;

  /** @format int32 */
  order_lte?: number | null;

  /** @format int32 */
  order_not?: number | null;
  order_not_in?: number[] | null;
  subnet_mask?: string | null;
  subnet_mask_contains?: string | null;
  subnet_mask_ends_with?: string | null;
  subnet_mask_gt?: string | null;
  subnet_mask_gte?: string | null;
  subnet_mask_in?: string[] | null;
  subnet_mask_lt?: string | null;
  subnet_mask_lte?: string | null;
  subnet_mask_not?: string | null;
  subnet_mask_not_contains?: string | null;
  subnet_mask_not_ends_with?: string | null;
  subnet_mask_not_in?: string[] | null;
  subnet_mask_not_starts_with?: string | null;
  subnet_mask_starts_with?: string | null;
  type?: VmNicType | null;
  type_in?: VmNicType[] | null;
  type_not?: VmNicType | null;
  type_not_in?: VmNicType[] | null;
  vlan?: VlanWhereInput | null;
  vm?: VmWhereInput | null;
  vpc_nic?: VirtualPrivateCloudNicWhereInput | null;
}

export enum VmNicModel {
  E1000 = "E1000",
  SRIOV = "SRIOV",
  VIRTIO = "VIRTIO",
}

export enum VmNicType {
  VLAN = "VLAN",
  VPC = "VPC",
}

export interface VirtualPrivateCloudNicWhereInput {
  AND?: VirtualPrivateCloudNicWhereInput[] | null;
  NOT?: VirtualPrivateCloudNicWhereInput[] | null;
  OR?: VirtualPrivateCloudNicWhereInput[] | null;
  floating_ip?: VirtualPrivateCloudFloatingIpWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  snapshots_every?: VirtualPrivateCloudNicSnapshotWhereInput | null;
  snapshots_none?: VirtualPrivateCloudNicSnapshotWhereInput | null;
  snapshots_some?: VirtualPrivateCloudNicSnapshotWhereInput | null;
  vm_nic?: VmNicWhereInput | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
  vpc_subnet?: VirtualPrivateCloudSubnetWhereInput | null;
}

export interface VirtualPrivateCloudFloatingIpWhereInput {
  AND?: VirtualPrivateCloudFloatingIpWhereInput[] | null;
  NOT?: VirtualPrivateCloudFloatingIpWhereInput[] | null;
  OR?: VirtualPrivateCloudFloatingIpWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_ip?: string | null;
  external_ip_contains?: string | null;
  external_ip_ends_with?: string | null;
  external_ip_gt?: string | null;
  external_ip_gte?: string | null;
  external_ip_in?: string[] | null;
  external_ip_lt?: string | null;
  external_ip_lte?: string | null;
  external_ip_not?: string | null;
  external_ip_not_contains?: string | null;
  external_ip_not_ends_with?: string | null;
  external_ip_not_in?: string[] | null;
  external_ip_not_starts_with?: string | null;
  external_ip_starts_with?: string | null;
  external_subnet?: VirtualPrivateCloudExternalSubnetWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudExternalSubnetWhereInput {
  AND?: VirtualPrivateCloudExternalSubnetWhereInput[] | null;
  NOT?: VirtualPrivateCloudExternalSubnetWhereInput[] | null;
  OR?: VirtualPrivateCloudExternalSubnetWhereInput[] | null;
  cidr?: string | null;
  cidr_contains?: string | null;
  cidr_ends_with?: string | null;
  cidr_gt?: string | null;
  cidr_gte?: string | null;
  cidr_in?: string[] | null;
  cidr_lt?: string | null;
  cidr_lte?: string | null;
  cidr_not?: string | null;
  cidr_not_contains?: string | null;
  cidr_not_ends_with?: string | null;
  cidr_not_in?: string[] | null;
  cidr_not_starts_with?: string | null;
  cidr_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  floating_ip_cidr?: string | null;
  floating_ip_cidr_contains?: string | null;
  floating_ip_cidr_ends_with?: string | null;
  floating_ip_cidr_gt?: string | null;
  floating_ip_cidr_gte?: string | null;
  floating_ip_cidr_in?: string[] | null;
  floating_ip_cidr_lt?: string | null;
  floating_ip_cidr_lte?: string | null;
  floating_ip_cidr_not?: string | null;
  floating_ip_cidr_not_contains?: string | null;
  floating_ip_cidr_not_ends_with?: string | null;
  floating_ip_cidr_not_in?: string[] | null;
  floating_ip_cidr_not_starts_with?: string | null;
  floating_ip_cidr_starts_with?: string | null;
  floating_ips_every?: VirtualPrivateCloudFloatingIpWhereInput | null;
  floating_ips_none?: VirtualPrivateCloudFloatingIpWhereInput | null;
  floating_ips_some?: VirtualPrivateCloudFloatingIpWhereInput | null;
  gateway?: string | null;
  gateway_contains?: string | null;
  gateway_ends_with?: string | null;
  gateway_gt?: string | null;
  gateway_gte?: string | null;
  gateway_in?: string[] | null;
  gateway_lt?: string | null;
  gateway_lte?: string | null;
  gateway_not?: string | null;
  gateway_not_contains?: string | null;
  gateway_not_ends_with?: string | null;
  gateway_not_in?: string[] | null;
  gateway_not_starts_with?: string | null;
  gateway_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nat_gateway_cidr?: string | null;
  nat_gateway_cidr_contains?: string | null;
  nat_gateway_cidr_ends_with?: string | null;
  nat_gateway_cidr_gt?: string | null;
  nat_gateway_cidr_gte?: string | null;
  nat_gateway_cidr_in?: string[] | null;
  nat_gateway_cidr_lt?: string | null;
  nat_gateway_cidr_lte?: string | null;
  nat_gateway_cidr_not?: string | null;
  nat_gateway_cidr_not_contains?: string | null;
  nat_gateway_cidr_not_ends_with?: string | null;
  nat_gateway_cidr_not_in?: string[] | null;
  nat_gateway_cidr_not_starts_with?: string | null;
  nat_gateway_cidr_starts_with?: string | null;
  nat_gateways_every?: VirtualPrivateCloudNatGatewayWhereInput | null;
  nat_gateways_none?: VirtualPrivateCloudNatGatewayWhereInput | null;
  nat_gateways_some?: VirtualPrivateCloudNatGatewayWhereInput | null;
  router_gateway_cidr?: string | null;
  router_gateway_cidr_contains?: string | null;
  router_gateway_cidr_ends_with?: string | null;
  router_gateway_cidr_gt?: string | null;
  router_gateway_cidr_gte?: string | null;
  router_gateway_cidr_in?: string[] | null;
  router_gateway_cidr_lt?: string | null;
  router_gateway_cidr_lte?: string | null;
  router_gateway_cidr_not?: string | null;
  router_gateway_cidr_not_contains?: string | null;
  router_gateway_cidr_not_ends_with?: string | null;
  router_gateway_cidr_not_in?: string[] | null;
  router_gateway_cidr_not_starts_with?: string | null;
  router_gateway_cidr_starts_with?: string | null;
  router_gateways_every?: VirtualPrivateCloudRouterGatewayWhereInput | null;
  router_gateways_none?: VirtualPrivateCloudRouterGatewayWhereInput | null;
  router_gateways_some?: VirtualPrivateCloudRouterGatewayWhereInput | null;
  vlan?: VlanWhereInput | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudNatGatewayWhereInput {
  AND?: VirtualPrivateCloudNatGatewayWhereInput[] | null;
  NOT?: VirtualPrivateCloudNatGatewayWhereInput[] | null;
  OR?: VirtualPrivateCloudNatGatewayWhereInput[] | null;
  enable_dnat?: boolean | null;
  enable_dnat_not?: boolean | null;
  enable_snat?: boolean | null;
  enable_snat_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_ip?: string | null;
  external_ip_contains?: string | null;
  external_ip_ends_with?: string | null;
  external_ip_gt?: string | null;
  external_ip_gte?: string | null;
  external_ip_in?: string[] | null;
  external_ip_lt?: string | null;
  external_ip_lte?: string | null;
  external_ip_not?: string | null;
  external_ip_not_contains?: string | null;
  external_ip_not_ends_with?: string | null;
  external_ip_not_in?: string[] | null;
  external_ip_not_starts_with?: string | null;
  external_ip_starts_with?: string | null;
  external_subnet?: VirtualPrivateCloudExternalSubnetWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudWhereInput {
  AND?: VirtualPrivateCloudWhereInput[] | null;
  NOT?: VirtualPrivateCloudWhereInput[] | null;
  OR?: VirtualPrivateCloudWhereInput[] | null;

  /** @format int32 */
  associate_external_subnet_num?: number | null;

  /** @format int32 */
  associate_external_subnet_num_gt?: number | null;

  /** @format int32 */
  associate_external_subnet_num_gte?: number | null;
  associate_external_subnet_num_in?: number[] | null;

  /** @format int32 */
  associate_external_subnet_num_lt?: number | null;

  /** @format int32 */
  associate_external_subnet_num_lte?: number | null;

  /** @format int32 */
  associate_external_subnet_num_not?: number | null;
  associate_external_subnet_num_not_in?: number[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  isolation_policies_every?: VirtualPrivateCloudIsolationPolicyWhereInput | null;
  isolation_policies_none?: VirtualPrivateCloudIsolationPolicyWhereInput | null;
  isolation_policies_some?: VirtualPrivateCloudIsolationPolicyWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int32 */
  mtu?: number | null;

  /** @format int32 */
  mtu_gt?: number | null;

  /** @format int32 */
  mtu_gte?: number | null;
  mtu_in?: number[] | null;

  /** @format int32 */
  mtu_lt?: number | null;

  /** @format int32 */
  mtu_lte?: number | null;

  /** @format int32 */
  mtu_not?: number | null;
  mtu_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  route_tables_every?: VirtualPrivateCloudRouteTableWhereInput | null;
  route_tables_none?: VirtualPrivateCloudRouteTableWhereInput | null;
  route_tables_some?: VirtualPrivateCloudRouteTableWhereInput | null;
  security_groups_every?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  security_groups_none?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  security_groups_some?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  security_policies_every?: VirtualPrivateCloudSecurityPolicyWhereInput | null;
  security_policies_none?: VirtualPrivateCloudSecurityPolicyWhereInput | null;
  security_policies_some?: VirtualPrivateCloudSecurityPolicyWhereInput | null;
  subnets_every?: VirtualPrivateCloudSubnetWhereInput | null;
  subnets_none?: VirtualPrivateCloudSubnetWhereInput | null;
  subnets_some?: VirtualPrivateCloudSubnetWhereInput | null;
}

export interface VirtualPrivateCloudIsolationPolicyWhereInput {
  AND?: VirtualPrivateCloudIsolationPolicyWhereInput[] | null;
  NOT?: VirtualPrivateCloudIsolationPolicyWhereInput[] | null;
  OR?: VirtualPrivateCloudIsolationPolicyWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mode?: VirtualPrivateCloudIsolationPolicyMode | null;
  mode_in?: VirtualPrivateCloudIsolationPolicyMode[] | null;
  mode_not?: VirtualPrivateCloudIsolationPolicyMode | null;
  mode_not_in?: VirtualPrivateCloudIsolationPolicyMode[] | null;
  security_groups_every?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  security_groups_none?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  security_groups_some?: VirtualPrivateCloudSecurityGroupWhereInput | null;
  vm?: VmWhereInput | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export enum VirtualPrivateCloudIsolationPolicyMode {
  ALL = "ALL",
  PARTIAL = "PARTIAL",
}

export interface VirtualPrivateCloudSecurityGroupWhereInput {
  AND?: VirtualPrivateCloudSecurityGroupWhereInput[] | null;
  NOT?: VirtualPrivateCloudSecurityGroupWhereInput[] | null;
  OR?: VirtualPrivateCloudSecurityGroupWhereInput[] | null;
  default_for_vpc?: boolean | null;
  default_for_vpc_not?: boolean | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudRouteTableWhereInput {
  AND?: VirtualPrivateCloudRouteTableWhereInput[] | null;
  NOT?: VirtualPrivateCloudRouteTableWhereInput[] | null;
  OR?: VirtualPrivateCloudRouteTableWhereInput[] | null;
  default_for_vpc?: boolean | null;
  default_for_vpc_not?: boolean | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  routes_every?: VirtualPrivateCloudRouteWhereInput | null;
  routes_none?: VirtualPrivateCloudRouteWhereInput | null;
  routes_some?: VirtualPrivateCloudRouteWhereInput | null;
  subnets_every?: VirtualPrivateCloudSubnetWhereInput | null;
  subnets_none?: VirtualPrivateCloudSubnetWhereInput | null;
  subnets_some?: VirtualPrivateCloudSubnetWhereInput | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudRouteWhereInput {
  AND?: VirtualPrivateCloudRouteWhereInput[] | null;
  NOT?: VirtualPrivateCloudRouteWhereInput[] | null;
  OR?: VirtualPrivateCloudRouteWhereInput[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  destination?: string | null;
  destination_contains?: string | null;
  destination_ends_with?: string | null;
  destination_gt?: string | null;
  destination_gte?: string | null;
  destination_in?: string[] | null;
  destination_lt?: string | null;
  destination_lte?: string | null;
  destination_not?: string | null;
  destination_not_contains?: string | null;
  destination_not_ends_with?: string | null;
  destination_not_in?: string[] | null;
  destination_not_starts_with?: string | null;
  destination_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  nat_gateway?: VirtualPrivateCloudNatGatewayWhereInput | null;
  next_hop_local_id?: string | null;
  next_hop_local_id_contains?: string | null;
  next_hop_local_id_ends_with?: string | null;
  next_hop_local_id_gt?: string | null;
  next_hop_local_id_gte?: string | null;
  next_hop_local_id_in?: string[] | null;
  next_hop_local_id_lt?: string | null;
  next_hop_local_id_lte?: string | null;
  next_hop_local_id_not?: string | null;
  next_hop_local_id_not_contains?: string | null;
  next_hop_local_id_not_ends_with?: string | null;
  next_hop_local_id_not_in?: string[] | null;
  next_hop_local_id_not_starts_with?: string | null;
  next_hop_local_id_starts_with?: string | null;
  next_hop_type?: VirtualPrivateCloudRouteNextHopType | null;
  next_hop_type_in?: VirtualPrivateCloudRouteNextHopType[] | null;
  next_hop_type_not?: VirtualPrivateCloudRouteNextHopType | null;
  next_hop_type_not_in?: VirtualPrivateCloudRouteNextHopType[] | null;
  route_table?: VirtualPrivateCloudRouteTableWhereInput | null;
  router_gateway?: VirtualPrivateCloudRouterGatewayWhereInput | null;
  vpc_peering?: VirtualPrivateCloudPeeringWhereInput | null;
}

export enum VirtualPrivateCloudRouteNextHopType {
  NAT_GATEWAY = "NAT_GATEWAY",
  ROUTER_GATEWAY = "ROUTER_GATEWAY",
  UNKNOWN = "UNKNOWN",
  VPC_PEERING = "VPC_PEERING",
}

export interface VirtualPrivateCloudRouterGatewayWhereInput {
  AND?: VirtualPrivateCloudRouterGatewayWhereInput[] | null;
  NOT?: VirtualPrivateCloudRouterGatewayWhereInput[] | null;
  OR?: VirtualPrivateCloudRouterGatewayWhereInput[] | null;
  associated_subnets_every?: VirtualPrivateCloudSubnetWhereInput | null;
  associated_subnets_none?: VirtualPrivateCloudSubnetWhereInput | null;
  associated_subnets_some?: VirtualPrivateCloudSubnetWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  external_ip?: string | null;
  external_ip_contains?: string | null;
  external_ip_ends_with?: string | null;
  external_ip_gt?: string | null;
  external_ip_gte?: string | null;
  external_ip_in?: string[] | null;
  external_ip_lt?: string | null;
  external_ip_lte?: string | null;
  external_ip_not?: string | null;
  external_ip_not_contains?: string | null;
  external_ip_not_ends_with?: string | null;
  external_ip_not_in?: string[] | null;
  external_ip_not_starts_with?: string | null;
  external_ip_starts_with?: string | null;
  external_subnet?: VirtualPrivateCloudExternalSubnetWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nexthop_ip?: string | null;
  nexthop_ip_contains?: string | null;
  nexthop_ip_ends_with?: string | null;
  nexthop_ip_gt?: string | null;
  nexthop_ip_gte?: string | null;
  nexthop_ip_in?: string[] | null;
  nexthop_ip_lt?: string | null;
  nexthop_ip_lte?: string | null;
  nexthop_ip_not?: string | null;
  nexthop_ip_not_contains?: string | null;
  nexthop_ip_not_ends_with?: string | null;
  nexthop_ip_not_in?: string[] | null;
  nexthop_ip_not_starts_with?: string | null;
  nexthop_ip_starts_with?: string | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudSubnetWhereInput {
  AND?: VirtualPrivateCloudSubnetWhereInput[] | null;
  NOT?: VirtualPrivateCloudSubnetWhereInput[] | null;
  OR?: VirtualPrivateCloudSubnetWhereInput[] | null;
  cidr?: string | null;
  cidr_contains?: string | null;
  cidr_ends_with?: string | null;
  cidr_gt?: string | null;
  cidr_gte?: string | null;
  cidr_in?: string[] | null;
  cidr_lt?: string | null;
  cidr_lte?: string | null;
  cidr_not?: string | null;
  cidr_not_contains?: string | null;
  cidr_not_ends_with?: string | null;
  cidr_not_in?: string[] | null;
  cidr_not_starts_with?: string | null;
  cidr_starts_with?: string | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  gateway?: string | null;
  gateway_contains?: string | null;
  gateway_ends_with?: string | null;
  gateway_gt?: string | null;
  gateway_gte?: string | null;
  gateway_in?: string[] | null;
  gateway_lt?: string | null;
  gateway_lte?: string | null;
  gateway_not?: string | null;
  gateway_not_contains?: string | null;
  gateway_not_ends_with?: string | null;
  gateway_not_in?: string[] | null;
  gateway_not_starts_with?: string | null;
  gateway_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  route_table?: VirtualPrivateCloudRouteTableWhereInput | null;

  /** @format int32 */
  total_ip_count?: number | null;

  /** @format int32 */
  total_ip_count_gt?: number | null;

  /** @format int32 */
  total_ip_count_gte?: number | null;
  total_ip_count_in?: number[] | null;

  /** @format int32 */
  total_ip_count_lt?: number | null;

  /** @format int32 */
  total_ip_count_lte?: number | null;

  /** @format int32 */
  total_ip_count_not?: number | null;
  total_ip_count_not_in?: number[] | null;

  /** @format int32 */
  unused_ip_count?: number | null;

  /** @format int32 */
  unused_ip_count_gt?: number | null;

  /** @format int32 */
  unused_ip_count_gte?: number | null;
  unused_ip_count_in?: number[] | null;

  /** @format int32 */
  unused_ip_count_lt?: number | null;

  /** @format int32 */
  unused_ip_count_lte?: number | null;

  /** @format int32 */
  unused_ip_count_not?: number | null;
  unused_ip_count_not_in?: number[] | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudPeeringWhereInput {
  AND?: VirtualPrivateCloudPeeringWhereInput[] | null;
  NOT?: VirtualPrivateCloudPeeringWhereInput[] | null;
  OR?: VirtualPrivateCloudPeeringWhereInput[] | null;
  dst_vpc?: VirtualPrivateCloudWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  src_vpc?: VirtualPrivateCloudWhereInput | null;
}

export interface VirtualPrivateCloudSecurityPolicyWhereInput {
  AND?: VirtualPrivateCloudSecurityPolicyWhereInput[] | null;
  NOT?: VirtualPrivateCloudSecurityPolicyWhereInput[] | null;
  OR?: VirtualPrivateCloudSecurityPolicyWhereInput[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  policy_mode?: VirtualPrivateCloudSecurityPolicyMode | null;
  policy_mode_in?: VirtualPrivateCloudSecurityPolicyMode[] | null;
  policy_mode_not?: VirtualPrivateCloudSecurityPolicyMode | null;
  policy_mode_not_in?: VirtualPrivateCloudSecurityPolicyMode[] | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
}

export enum VirtualPrivateCloudSecurityPolicyMode {
  MONITOR = "MONITOR",
  WORK = "WORK",
}

export interface VirtualPrivateCloudNicSnapshotWhereInput {
  AND?: VirtualPrivateCloudNicSnapshotWhereInput[] | null;
  NOT?: VirtualPrivateCloudNicSnapshotWhereInput[] | null;
  OR?: VirtualPrivateCloudNicSnapshotWhereInput[] | null;
  floating_ip?: VirtualPrivateCloudFloatingIpWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  mac_address?: string | null;
  mac_address_contains?: string | null;
  mac_address_ends_with?: string | null;
  mac_address_gt?: string | null;
  mac_address_gte?: string | null;
  mac_address_in?: string[] | null;
  mac_address_lt?: string | null;
  mac_address_lte?: string | null;
  mac_address_not?: string | null;
  mac_address_not_contains?: string | null;
  mac_address_not_ends_with?: string | null;
  mac_address_not_in?: string[] | null;
  mac_address_not_starts_with?: string | null;
  mac_address_starts_with?: string | null;
  vpc?: VirtualPrivateCloudWhereInput | null;
  vpc_nic?: VirtualPrivateCloudNicWhereInput | null;
  vpc_subnet?: VirtualPrivateCloudSubnetWhereInput | null;
}

export enum GlobalPolicyAction {
  ALLOW = "ALLOW",
  DROP = "DROP",
}

export enum EverouteClusterPhase {
  Associated = "Associated",
  Failed = "Failed",
  Init = "Init",
  Running = "Running",
  Terminating = "Terminating",
  Updating = "Updating",
  Upgrading = "Upgrading",
}

export enum IsolationMode {
  ALL = "ALL",
  PARTIAL = "PARTIAL",
}

export interface NfsExportWhereInput {
  AND?: NfsExportWhereInput[] | null;
  NOT?: NfsExportWhereInput[] | null;
  OR?: NfsExportWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  export_inode_id?: string | null;
  export_inode_id_contains?: string | null;
  export_inode_id_ends_with?: string | null;
  export_inode_id_gt?: string | null;
  export_inode_id_gte?: string | null;
  export_inode_id_in?: string[] | null;
  export_inode_id_lt?: string | null;
  export_inode_id_lte?: string | null;
  export_inode_id_not?: string | null;
  export_inode_id_not_contains?: string | null;
  export_inode_id_not_ends_with?: string | null;
  export_inode_id_not_in?: string[] | null;
  export_inode_id_not_starts_with?: string | null;
  export_inode_id_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  inodes_every?: NfsInodeWhereInput | null;
  inodes_none?: NfsInodeWhereInput | null;
  inodes_some?: NfsInodeWhereInput | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface NfsInodeWhereInput {
  AND?: NfsInodeWhereInput[] | null;
  NOT?: NfsInodeWhereInput[] | null;
  OR?: NfsInodeWhereInput[] | null;

  /** @format int64 */
  assigned_size?: number | null;

  /** @format int64 */
  assigned_size_gt?: number | null;

  /** @format int64 */
  assigned_size_gte?: number | null;
  assigned_size_in?: number[] | null;

  /** @format int64 */
  assigned_size_lt?: number | null;

  /** @format int64 */
  assigned_size_lte?: number | null;

  /** @format int64 */
  assigned_size_not?: number | null;
  assigned_size_not_in?: number[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  file?: boolean | null;
  file_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_updated_at?: string | null;
  local_updated_at_gt?: string | null;
  local_updated_at_gte?: string | null;
  local_updated_at_in?: string[] | null;
  local_updated_at_lt?: string | null;
  local_updated_at_lte?: string | null;
  local_updated_at_not?: string | null;
  local_updated_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nfs_export?: NfsExportWhereInput | null;
  parent_id?: string | null;
  parent_id_contains?: string | null;
  parent_id_ends_with?: string | null;
  parent_id_gt?: string | null;
  parent_id_gte?: string | null;
  parent_id_in?: string[] | null;
  parent_id_lt?: string | null;
  parent_id_lte?: string | null;
  parent_id_not?: string | null;
  parent_id_not_contains?: string | null;
  parent_id_not_ends_with?: string | null;
  parent_id_not_in?: string[] | null;
  parent_id_not_starts_with?: string | null;
  parent_id_starts_with?: string | null;

  /** @format int64 */
  shared_size?: number | null;

  /** @format int64 */
  shared_size_gt?: number | null;

  /** @format int64 */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format int64 */
  shared_size_lt?: number | null;

  /** @format int64 */
  shared_size_lte?: number | null;

  /** @format int64 */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format int32 */
  snapshot_num?: number | null;

  /** @format int32 */
  snapshot_num_gt?: number | null;

  /** @format int32 */
  snapshot_num_gte?: number | null;
  snapshot_num_in?: number[] | null;

  /** @format int32 */
  snapshot_num_lt?: number | null;

  /** @format int32 */
  snapshot_num_lte?: number | null;

  /** @format int32 */
  snapshot_num_not?: number | null;
  snapshot_num_not_in?: number[] | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format double */
  unique_logical_size_gt?: number | null;

  /** @format double */
  unique_logical_size_gte?: number | null;
  unique_logical_size_in?: number[] | null;

  /** @format double */
  unique_logical_size_lt?: number | null;

  /** @format double */
  unique_logical_size_lte?: number | null;

  /** @format double */
  unique_logical_size_not?: number | null;
  unique_logical_size_not_in?: number[] | null;

  /** @format int64 */
  unique_size?: number | null;

  /** @format int64 */
  unique_size_gt?: number | null;

  /** @format int64 */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format int64 */
  unique_size_lt?: number | null;

  /** @format int64 */
  unique_size_lte?: number | null;

  /** @format int64 */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
}

export interface SecurityPolicyWhereInput {
  AND?: SecurityPolicyWhereInput[] | null;
  NOT?: SecurityPolicyWhereInput[] | null;
  OR?: SecurityPolicyWhereInput[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  everoute_cluster?: EverouteClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  policy_mode?: PolicyMode | null;
  policy_mode_in?: PolicyMode[] | null;
  policy_mode_not?: PolicyMode | null;
  policy_mode_not_in?: PolicyMode[] | null;
}

export enum PolicyMode {
  MONITOR = "MONITOR",
  WORK = "WORK",
}

export interface VmVolumeSnapshotWhereInput {
  AND?: VmVolumeSnapshotWhereInput[] | null;
  NOT?: VmVolumeSnapshotWhereInput[] | null;
  OR?: VmVolumeSnapshotWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  createAt?: string | null;
  createAt_gt?: string | null;
  createAt_gte?: string | null;
  createAt_in?: string[] | null;
  createAt_lt?: string | null;
  createAt_lte?: string | null;
  createAt_not?: string | null;
  createAt_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  elf_storage_policy?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_in?: VmVolumeElfStoragePolicyType[] | null;
  elf_storage_policy_not?: VmVolumeElfStoragePolicyType | null;
  elf_storage_policy_not_in?: VmVolumeElfStoragePolicyType[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  labels_every?: LabelWhereInput | null;
  labels_none?: LabelWhereInput | null;
  labels_some?: LabelWhereInput | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format double */
  shared_size?: number | null;

  /** @format double */
  shared_size_gt?: number | null;

  /** @format double */
  shared_size_gte?: number | null;
  shared_size_in?: number[] | null;

  /** @format double */
  shared_size_lt?: number | null;

  /** @format double */
  shared_size_lte?: number | null;

  /** @format double */
  shared_size_not?: number | null;
  shared_size_not_in?: number[] | null;

  /** @format double */
  size?: number | null;

  /** @format double */
  size_gt?: number | null;

  /** @format double */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format double */
  size_lt?: number | null;

  /** @format double */
  size_lte?: number | null;

  /** @format double */
  size_not?: number | null;
  size_not_in?: number[] | null;
  type?: VmVolumeSnapshotType | null;
  type_in?: VmVolumeSnapshotType[] | null;
  type_not?: VmVolumeSnapshotType | null;
  type_not_in?: VmVolumeSnapshotType[] | null;

  /** @format double */
  unique_size?: number | null;

  /** @format double */
  unique_size_gt?: number | null;

  /** @format double */
  unique_size_gte?: number | null;
  unique_size_in?: number[] | null;

  /** @format double */
  unique_size_lt?: number | null;

  /** @format double */
  unique_size_lte?: number | null;

  /** @format double */
  unique_size_not?: number | null;
  unique_size_not_in?: number[] | null;
  vm_volume?: VmVolumeWhereInput | null;
  volume_sharing?: boolean | null;
  volume_sharing_not?: boolean | null;

  /** @format double */
  volume_size?: number | null;

  /** @format double */
  volume_size_gt?: number | null;

  /** @format double */
  volume_size_gte?: number | null;
  volume_size_in?: number[] | null;

  /** @format double */
  volume_size_lt?: number | null;

  /** @format double */
  volume_size_lte?: number | null;

  /** @format double */
  volume_size_not?: number | null;
  volume_size_not_in?: number[] | null;
  zbs_snapshot_uuid?: string | null;
  zbs_snapshot_uuid_contains?: string | null;
  zbs_snapshot_uuid_ends_with?: string | null;
  zbs_snapshot_uuid_gt?: string | null;
  zbs_snapshot_uuid_gte?: string | null;
  zbs_snapshot_uuid_in?: string[] | null;
  zbs_snapshot_uuid_lt?: string | null;
  zbs_snapshot_uuid_lte?: string | null;
  zbs_snapshot_uuid_not?: string | null;
  zbs_snapshot_uuid_not_contains?: string | null;
  zbs_snapshot_uuid_not_ends_with?: string | null;
  zbs_snapshot_uuid_not_in?: string[] | null;
  zbs_snapshot_uuid_not_starts_with?: string | null;
  zbs_snapshot_uuid_starts_with?: string | null;
}

export enum VmVolumeSnapshotType {
  KVM_VOLUME_ISCSI_SNAPSHOT = "KVM_VOLUME_ISCSI_SNAPSHOT",
  KVM_VOLUME_SNAPSHOT = "KVM_VOLUME_SNAPSHOT",
}

export interface PmemDimmWhereInput {
  AND?: PmemDimmWhereInput[] | null;
  NOT?: PmemDimmWhereInput[] | null;
  OR?: PmemDimmWhereInput[] | null;

  /** @format int64 */
  capacity?: number | null;

  /** @format int64 */
  capacity_gt?: number | null;

  /** @format int64 */
  capacity_gte?: number | null;
  capacity_in?: number[] | null;

  /** @format int64 */
  capacity_lt?: number | null;

  /** @format int64 */
  capacity_lte?: number | null;

  /** @format int64 */
  capacity_not?: number | null;
  capacity_not_in?: number[] | null;
  device_locator?: string | null;
  device_locator_contains?: string | null;
  device_locator_ends_with?: string | null;
  device_locator_gt?: string | null;
  device_locator_gte?: string | null;
  device_locator_in?: string[] | null;
  device_locator_lt?: string | null;
  device_locator_lte?: string | null;
  device_locator_not?: string | null;
  device_locator_not_contains?: string | null;
  device_locator_not_ends_with?: string | null;
  device_locator_not_in?: string[] | null;
  device_locator_not_starts_with?: string | null;
  device_locator_starts_with?: string | null;
  disk?: DiskWhereInput | null;
  health_status?: DiskHealthStatus | null;
  health_status_in?: DiskHealthStatus[] | null;
  health_status_not?: DiskHealthStatus | null;
  health_status_not_in?: DiskHealthStatus[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  numa_node?: number | null;

  /** @format int32 */
  numa_node_gt?: number | null;

  /** @format int32 */
  numa_node_gte?: number | null;
  numa_node_in?: number[] | null;

  /** @format int32 */
  numa_node_lt?: number | null;

  /** @format int32 */
  numa_node_lte?: number | null;

  /** @format int32 */
  numa_node_not?: number | null;
  numa_node_not_in?: number[] | null;
  part_number?: string | null;
  part_number_contains?: string | null;
  part_number_ends_with?: string | null;
  part_number_gt?: string | null;
  part_number_gte?: string | null;
  part_number_in?: string[] | null;
  part_number_lt?: string | null;
  part_number_lte?: string | null;
  part_number_not?: string | null;
  part_number_not_contains?: string | null;
  part_number_not_ends_with?: string | null;
  part_number_not_in?: string[] | null;
  part_number_not_starts_with?: string | null;
  part_number_starts_with?: string | null;

  /** @format int32 */
  remaining_life_percent?: number | null;

  /** @format int32 */
  remaining_life_percent_gt?: number | null;

  /** @format int32 */
  remaining_life_percent_gte?: number | null;
  remaining_life_percent_in?: number[] | null;

  /** @format int32 */
  remaining_life_percent_lt?: number | null;

  /** @format int32 */
  remaining_life_percent_lte?: number | null;

  /** @format int32 */
  remaining_life_percent_not?: number | null;
  remaining_life_percent_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export enum DiskUsage {
  BOOT = "BOOT",
  CACHE = "CACHE",
  CACHE_AND_META = "CACHE_AND_META",
  DATA = "DATA",
  DATA_AND_META = "DATA_AND_META",
}

export enum DiskType {
  HDD = "HDD",
  PMem = "PMem",
  SSD = "SSD",
}

export enum DiskUsageStatus {
  ISOLATED = "ISOLATED",
  MOUNTED = "MOUNTED",
  MOUNTING = "MOUNTING",
  PARTIAL_MOUNTED = "PARTIAL_MOUNTED",
  UNMOUNTED = "UNMOUNTED",
  UNMOUNTING = "UNMOUNTING",
}

export interface IpmiWhereInput {
  AND?: IpmiWhereInput[] | null;
  NOT?: IpmiWhereInput[] | null;
  OR?: IpmiWhereInput[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  valid?: boolean | null;
  valid_not?: boolean | null;
}

export enum HostState {
  IDLE = "IDLE",
  IN_USE = "IN_USE",
  REMOVING = "REMOVING",
}

export enum HostStatus {
  CONNECTED_ERROR = "CONNECTED_ERROR",
  CONNECTED_HEALTHY = "CONNECTED_HEALTHY",
  CONNECTED_WARNING = "CONNECTED_WARNING",
  CONNECTING = "CONNECTING",
  INITIALIZING = "INITIALIZING",
  SESSION_EXPIRED = "SESSION_EXPIRED",
}

export interface UsbDeviceWhereInput {
  AND?: UsbDeviceWhereInput[] | null;
  NOT?: UsbDeviceWhereInput[] | null;
  OR?: UsbDeviceWhereInput[] | null;
  binded?: boolean | null;
  binded_not?: boolean | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  manufacturer?: string | null;
  manufacturer_contains?: string | null;
  manufacturer_ends_with?: string | null;
  manufacturer_gt?: string | null;
  manufacturer_gte?: string | null;
  manufacturer_in?: string[] | null;
  manufacturer_lt?: string | null;
  manufacturer_lte?: string | null;
  manufacturer_not?: string | null;
  manufacturer_not_contains?: string | null;
  manufacturer_not_ends_with?: string | null;
  manufacturer_not_in?: string[] | null;
  manufacturer_not_starts_with?: string | null;
  manufacturer_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  status?: UsbDeviceStatus | null;
  status_in?: UsbDeviceStatus[] | null;
  status_not?: UsbDeviceStatus | null;
  status_not_in?: UsbDeviceStatus[] | null;
  usb_type?: string | null;
  usb_type_contains?: string | null;
  usb_type_ends_with?: string | null;
  usb_type_gt?: string | null;
  usb_type_gte?: string | null;
  usb_type_in?: string[] | null;
  usb_type_lt?: string | null;
  usb_type_lte?: string | null;
  usb_type_not?: string | null;
  usb_type_not_contains?: string | null;
  usb_type_not_ends_with?: string | null;
  usb_type_not_in?: string[] | null;
  usb_type_not_starts_with?: string | null;
  usb_type_starts_with?: string | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export enum UsbDeviceStatus {
  EJECTED = "EJECTED",
  NORMAL = "NORMAL",
}

export interface VsphereEsxiAccountWhereInput {
  AND?: VsphereEsxiAccountWhereInput[] | null;
  NOT?: VsphereEsxiAccountWhereInput[] | null;
  OR?: VsphereEsxiAccountWhereInput[] | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_valid?: boolean | null;
  is_valid_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int32 */
  port?: number | null;

  /** @format int32 */
  port_gt?: number | null;

  /** @format int32 */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format int32 */
  port_lt?: number | null;

  /** @format int32 */
  port_lte?: number | null;

  /** @format int32 */
  port_not?: number | null;
  port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface ZoneWhereInput {
  AND?: ZoneWhereInput[] | null;
  NOT?: ZoneWhereInput[] | null;
  OR?: ZoneWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  datacenter?: DatacenterWhereInput | null;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int64 */
  failure_data_space_gt?: number | null;

  /** @format int64 */
  failure_data_space_gte?: number | null;
  failure_data_space_in?: number[] | null;

  /** @format int64 */
  failure_data_space_lt?: number | null;

  /** @format int64 */
  failure_data_space_lte?: number | null;

  /** @format int64 */
  failure_data_space_not?: number | null;
  failure_data_space_not_in?: number[] | null;

  /** @format int32 */
  host_num?: number | null;

  /** @format int32 */
  host_num_gt?: number | null;

  /** @format int32 */
  host_num_gte?: number | null;
  host_num_in?: number[] | null;

  /** @format int32 */
  host_num_lt?: number | null;

  /** @format int32 */
  host_num_lte?: number | null;

  /** @format int32 */
  host_num_not?: number | null;
  host_num_not_in?: number[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  is_preferred?: boolean | null;
  is_preferred_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int32 */
  provisioned_cpu_cores?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_gt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_gte?: number | null;
  provisioned_cpu_cores_for_active_vm_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_lt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_lte?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm_not?: number | null;
  provisioned_cpu_cores_for_active_vm_not_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_gt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_gte?: number | null;
  provisioned_cpu_cores_in?: number[] | null;

  /** @format int32 */
  provisioned_cpu_cores_lt?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_lte?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_not?: number | null;
  provisioned_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  provisioned_data_space?: number | null;

  /** @format int64 */
  provisioned_data_space_gt?: number | null;

  /** @format int64 */
  provisioned_data_space_gte?: number | null;
  provisioned_data_space_in?: number[] | null;

  /** @format int64 */
  provisioned_data_space_lt?: number | null;

  /** @format int64 */
  provisioned_data_space_lte?: number | null;

  /** @format int64 */
  provisioned_data_space_not?: number | null;
  provisioned_data_space_not_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_gte?: number | null;
  provisioned_memory_bytes_in?: number[] | null;

  /** @format int64 */
  provisioned_memory_bytes_lt?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_lte?: number | null;

  /** @format int64 */
  provisioned_memory_bytes_not?: number | null;
  provisioned_memory_bytes_not_in?: number[] | null;

  /** @format int32 */
  running_vm_num?: number | null;

  /** @format int32 */
  running_vm_num_gt?: number | null;

  /** @format int32 */
  running_vm_num_gte?: number | null;
  running_vm_num_in?: number[] | null;

  /** @format int32 */
  running_vm_num_lt?: number | null;

  /** @format int32 */
  running_vm_num_lte?: number | null;

  /** @format int32 */
  running_vm_num_not?: number | null;
  running_vm_num_not_in?: number[] | null;

  /** @format int32 */
  stopped_vm_num?: number | null;

  /** @format int32 */
  stopped_vm_num_gt?: number | null;

  /** @format int32 */
  stopped_vm_num_gte?: number | null;
  stopped_vm_num_in?: number[] | null;

  /** @format int32 */
  stopped_vm_num_lt?: number | null;

  /** @format int32 */
  stopped_vm_num_lte?: number | null;

  /** @format int32 */
  stopped_vm_num_not?: number | null;
  stopped_vm_num_not_in?: number[] | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int32 */
  suspended_vm_num_gt?: number | null;

  /** @format int32 */
  suspended_vm_num_gte?: number | null;
  suspended_vm_num_in?: number[] | null;

  /** @format int32 */
  suspended_vm_num_lt?: number | null;

  /** @format int32 */
  suspended_vm_num_lte?: number | null;

  /** @format int32 */
  suspended_vm_num_not?: number | null;
  suspended_vm_num_not_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int64 */
  total_cache_capacity_gt?: number | null;

  /** @format int64 */
  total_cache_capacity_gte?: number | null;
  total_cache_capacity_in?: number[] | null;

  /** @format int64 */
  total_cache_capacity_lt?: number | null;

  /** @format int64 */
  total_cache_capacity_lte?: number | null;

  /** @format int64 */
  total_cache_capacity_not?: number | null;
  total_cache_capacity_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int32 */
  total_cpu_cores_gt?: number | null;

  /** @format int32 */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores_lt?: number | null;

  /** @format int32 */
  total_cpu_cores_lte?: number | null;

  /** @format int32 */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_cpu_hz_gt?: number | null;

  /** @format int64 */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz_lt?: number | null;

  /** @format int64 */
  total_cpu_hz_lte?: number | null;

  /** @format int64 */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_data_capacity_gt?: number | null;

  /** @format int64 */
  total_data_capacity_gte?: number | null;
  total_data_capacity_in?: number[] | null;

  /** @format int64 */
  total_data_capacity_lt?: number | null;

  /** @format int64 */
  total_data_capacity_lte?: number | null;

  /** @format int64 */
  total_data_capacity_not?: number | null;
  total_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  total_memory_bytes_gt?: number | null;

  /** @format int64 */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes_lt?: number | null;

  /** @format int64 */
  total_memory_bytes_lte?: number | null;

  /** @format int64 */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format int64 */
  used_data_space_gt?: number | null;

  /** @format int64 */
  used_data_space_gte?: number | null;
  used_data_space_in?: number[] | null;

  /** @format int64 */
  used_data_space_lt?: number | null;

  /** @format int64 */
  used_data_space_lte?: number | null;

  /** @format int64 */
  used_data_space_not?: number | null;
  used_data_space_not_in?: number[] | null;

  /** @format int64 */
  valid_data_space?: number | null;

  /** @format int64 */
  valid_data_space_gt?: number | null;

  /** @format int64 */
  valid_data_space_gte?: number | null;
  valid_data_space_in?: number[] | null;

  /** @format int64 */
  valid_data_space_lt?: number | null;

  /** @format int64 */
  valid_data_space_lte?: number | null;

  /** @format int64 */
  valid_data_space_not?: number | null;
  valid_data_space_not_in?: number[] | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_num_gt?: number | null;

  /** @format int32 */
  vm_num_gte?: number | null;
  vm_num_in?: number[] | null;

  /** @format int32 */
  vm_num_lt?: number | null;

  /** @format int32 */
  vm_num_lte?: number | null;

  /** @format int32 */
  vm_num_not?: number | null;
  vm_num_not_in?: number[] | null;
}

export enum GpuDeviceStatus {
  NEED_REBOOT = "NEED_REBOOT",
  NOT_READY = "NOT_READY",
  READY = "READY",
}

export enum GpuDeviceUsage {
  PASS_THROUGH = "PASS_THROUGH",
  VGPU = "VGPU",
}

export enum VmGuestsOperationSystem {
  LINUX = "LINUX",
  UNKNOWN = "UNKNOWN",
  WINDOWS = "WINDOWS",
}

export enum VmStatus {
  DELETED = "DELETED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  SUSPENDED = "SUSPENDED",
  UNKNOWN = "UNKNOWN",
}

export enum VmVideoType {
  CIRRUS = "CIRRUS",
  QXL = "QXL",
  VGA = "VGA",
  VIRTIO = "VIRTIO",
}

export interface VmPlacementGroupWhereInput {
  AND?: VmPlacementGroupWhereInput[] | null;
  NOT?: VmPlacementGroupWhereInput[] | null;
  OR?: VmPlacementGroupWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  enabled?: boolean | null;
  enabled_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_updated_at?: string | null;
  local_updated_at_gt?: string | null;
  local_updated_at_gte?: string | null;
  local_updated_at_in?: string[] | null;
  local_updated_at_lt?: string | null;
  local_updated_at_lte?: string | null;
  local_updated_at_not?: string | null;
  local_updated_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  vm_host_must_enabled?: boolean | null;
  vm_host_must_enabled_not?: boolean | null;
  vm_host_must_host_uuids_every?: HostWhereInput | null;
  vm_host_must_host_uuids_none?: HostWhereInput | null;
  vm_host_must_host_uuids_some?: HostWhereInput | null;
  vm_host_must_policy?: boolean | null;
  vm_host_must_policy_not?: boolean | null;
  vm_host_prefer_enabled?: boolean | null;
  vm_host_prefer_enabled_not?: boolean | null;
  vm_host_prefer_host_uuids_every?: HostWhereInput | null;
  vm_host_prefer_host_uuids_none?: HostWhereInput | null;
  vm_host_prefer_host_uuids_some?: HostWhereInput | null;
  vm_host_prefer_policy?: boolean | null;
  vm_host_prefer_policy_not?: boolean | null;
  vm_vm_policy?: VmVmPolicy | null;
  vm_vm_policy_enabled?: boolean | null;
  vm_vm_policy_enabled_not?: boolean | null;
  vm_vm_policy_in?: VmVmPolicy[] | null;
  vm_vm_policy_not?: VmVmPolicy | null;
  vm_vm_policy_not_in?: VmVmPolicy[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export enum VmVmPolicy {
  MUST_DIFFERENT = "MUST_DIFFERENT",
  MUST_SAME = "MUST_SAME",
  PREFER_DIFFERENT = "PREFER_DIFFERENT",
  PREFER_SAME = "PREFER_SAME",
}

export enum VmToolsStatus {
  NOT_INSTALLED = "NOT_INSTALLED",
  NOT_RUNNING = "NOT_RUNNING",
  RESTRICTION = "RESTRICTION",
  RUNNING = "RUNNING",
}

export enum VmUsage {
  ADVANCED_MONITORING = "ADVANCED_MONITORING",
  AGENT_MESH_NODE = "AGENT_MESH_NODE",
  BACKUP_CONTROLLER = "BACKUP_CONTROLLER",
  BUNDLE_APPLICATION = "BUNDLE_APPLICATION",
  CLOUDTOWER = "CLOUDTOWER",
  EVEROUTE_CONTROLLER = "EVEROUTE_CONTROLLER",
  REGISTRY = "REGISTRY",
  REPLICATION_CONTROLLER = "REPLICATION_CONTROLLER",
  SFS_CONTROLLER = "SFS_CONTROLLER",
  SHARE_REGISTRY = "SHARE_REGISTRY",
  SKS_MANAGEMENT = "SKS_MANAGEMENT",
}

export enum ConnectState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  INITIALIZING = "INITIALIZING",
  REMOVING = "REMOVING",
}

export enum ClusterConnectorErrorCode {
  LOAD_CLUSTER_FAILED = "LOAD_CLUSTER_FAILED",
  LOAD_CLUSTER_NETWORK_ERROR = "LOAD_CLUSTER_NETWORK_ERROR",
  LOAD_CLUSTER_NOT_FOUND = "LOAD_CLUSTER_NOT_FOUND",
  LOAD_CLUSTER_UNAUTHORIZED = "LOAD_CLUSTER_UNAUTHORIZED",
  LOAD_CLUSTER_UNHEALTHY = "LOAD_CLUSTER_UNHEALTHY",
}

export enum Hypervisor {
  BLUESHARK = "BLUESHARK",
  ELF = "ELF",
  VMWARE = "VMWARE",
  XENSERVER = "XENSERVER",
}

export enum LicenseType {
  PERPETUAL = "PERPETUAL",
  SUBSCRIPTION = "SUBSCRIPTION",
  TRIAL = "TRIAL",
}

export enum NtpMode {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
}

export interface ClusterSettingsWhereInput {
  AND?: ClusterSettingsWhereInput[] | null;
  NOT?: ClusterSettingsWhereInput[] | null;
  OR?: ClusterSettingsWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  default_ha?: boolean | null;
  default_ha_not?: boolean | null;
  default_storage_policy?: VmVolumeElfStoragePolicyType | null;
  default_storage_policy_in?: VmVolumeElfStoragePolicyType[] | null;
  default_storage_policy_not?: VmVolumeElfStoragePolicyType | null;
  default_storage_policy_not_in?: VmVolumeElfStoragePolicyType[] | null;
  enabled_iscsi?: boolean | null;
  enabled_iscsi_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
}

export enum SoftwareEdition {
  COMMUNITY = "COMMUNITY",
  ENTERPRISE = "ENTERPRISE",
  ENTERPRISE_PLUS = "ENTERPRISE_PLUS",
  ESSENTIAL = "ESSENTIAL",
  EXPRESS = "EXPRESS",
  STANDARD = "STANDARD",
  TRIAL = "TRIAL",
}

export enum ClusterType {
  BLUESHARK = "BLUESHARK",
  SMTX_ELF = "SMTX_ELF",
  SMTX_OS = "SMTX_OS",
  SMTX_ZBS = "SMTX_ZBS",
}

export interface VcenterAccountWhereInput {
  AND?: VcenterAccountWhereInput[] | null;
  NOT?: VcenterAccountWhereInput[] | null;
  OR?: VcenterAccountWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip?: string | null;
  ip_contains?: string | null;
  ip_ends_with?: string | null;
  ip_gt?: string | null;
  ip_gte?: string | null;
  ip_in?: string[] | null;
  ip_lt?: string | null;
  ip_lte?: string | null;
  ip_not?: string | null;
  ip_not_contains?: string | null;
  ip_not_ends_with?: string | null;
  ip_not_in?: string[] | null;
  ip_not_starts_with?: string | null;
  ip_starts_with?: string | null;
  is_valid?: boolean | null;
  is_valid_not?: boolean | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;

  /** @format int32 */
  port?: number | null;

  /** @format int32 */
  port_gt?: number | null;

  /** @format int32 */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format int32 */
  port_lt?: number | null;

  /** @format int32 */
  port_lte?: number | null;

  /** @format int32 */
  port_not?: number | null;
  port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface WitnessWhereInput {
  AND?: WitnessWhereInput[] | null;
  NOT?: WitnessWhereInput[] | null;
  OR?: WitnessWhereInput[] | null;
  cluster?: ClusterWhereInput | null;

  /** @format int64 */
  cpu_hz_per_core?: number | null;

  /** @format int64 */
  cpu_hz_per_core_gt?: number | null;

  /** @format int64 */
  cpu_hz_per_core_gte?: number | null;
  cpu_hz_per_core_in?: number[] | null;

  /** @format int64 */
  cpu_hz_per_core_lt?: number | null;

  /** @format int64 */
  cpu_hz_per_core_lte?: number | null;

  /** @format int64 */
  cpu_hz_per_core_not?: number | null;
  cpu_hz_per_core_not_in?: number[] | null;
  data_ip?: string | null;
  data_ip_contains?: string | null;
  data_ip_ends_with?: string | null;
  data_ip_gt?: string | null;
  data_ip_gte?: string | null;
  data_ip_in?: string[] | null;
  data_ip_lt?: string | null;
  data_ip_lte?: string | null;
  data_ip_not?: string | null;
  data_ip_not_contains?: string | null;
  data_ip_not_ends_with?: string | null;
  data_ip_not_in?: string[] | null;
  data_ip_not_starts_with?: string | null;
  data_ip_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  management_ip?: string | null;
  management_ip_contains?: string | null;
  management_ip_ends_with?: string | null;
  management_ip_gt?: string | null;
  management_ip_gte?: string | null;
  management_ip_in?: string[] | null;
  management_ip_lt?: string | null;
  management_ip_lte?: string | null;
  management_ip_not?: string | null;
  management_ip_not_contains?: string | null;
  management_ip_not_ends_with?: string | null;
  management_ip_not_in?: string[] | null;
  management_ip_not_starts_with?: string | null;
  management_ip_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  system_data_capacity?: number | null;

  /** @format int64 */
  system_data_capacity_gt?: number | null;

  /** @format int64 */
  system_data_capacity_gte?: number | null;
  system_data_capacity_in?: number[] | null;

  /** @format int64 */
  system_data_capacity_lt?: number | null;

  /** @format int64 */
  system_data_capacity_lte?: number | null;

  /** @format int64 */
  system_data_capacity_not?: number | null;
  system_data_capacity_not_in?: number[] | null;

  /** @format int64 */
  system_used_data_space?: number | null;

  /** @format int64 */
  system_used_data_space_gt?: number | null;

  /** @format int64 */
  system_used_data_space_gte?: number | null;
  system_used_data_space_in?: number[] | null;

  /** @format int64 */
  system_used_data_space_lt?: number | null;

  /** @format int64 */
  system_used_data_space_lte?: number | null;

  /** @format int64 */
  system_used_data_space_not?: number | null;
  system_used_data_space_not_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int32 */
  total_cpu_cores_gt?: number | null;

  /** @format int32 */
  total_cpu_cores_gte?: number | null;
  total_cpu_cores_in?: number[] | null;

  /** @format int32 */
  total_cpu_cores_lt?: number | null;

  /** @format int32 */
  total_cpu_cores_lte?: number | null;

  /** @format int32 */
  total_cpu_cores_not?: number | null;
  total_cpu_cores_not_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_cpu_hz_gt?: number | null;

  /** @format int64 */
  total_cpu_hz_gte?: number | null;
  total_cpu_hz_in?: number[] | null;

  /** @format int64 */
  total_cpu_hz_lt?: number | null;

  /** @format int64 */
  total_cpu_hz_lte?: number | null;

  /** @format int64 */
  total_cpu_hz_not?: number | null;
  total_cpu_hz_not_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  total_memory_bytes_gt?: number | null;

  /** @format int64 */
  total_memory_bytes_gte?: number | null;
  total_memory_bytes_in?: number[] | null;

  /** @format int64 */
  total_memory_bytes_lt?: number | null;

  /** @format int64 */
  total_memory_bytes_lte?: number | null;

  /** @format int64 */
  total_memory_bytes_not?: number | null;
  total_memory_bytes_not_in?: number[] | null;
}

export interface AlertRuleThresholds {
  /** @format int32 */
  value: number;
  severity: SeverityEnum;
}

export interface GlobalAlertRuleUpdationParams {
  data: { thresholds?: AlertRuleThresholds[]; disabled?: boolean };
  where: GlobalAlertRuleWhereInput;
}

export enum ContentLanguage {
  ZhCN = "zh-CN",
  EnUS = "en-US",
}

export interface CustomizeAlertRuleUpdationParams {
  data: {
    thresholds?: AlertRuleThresholds[];
    disabled?: boolean;
    clusters: ClusterWhereInput;
  };
  where: GlobalAlertRuleWhereInput;
}

export interface NestedCluster {
  id: string;
  name: string;
}

export interface NestedDisk {
  id: string;
  name: string;
}

export interface NestedHost {
  id: string;
  management_ip: string;
  name: string;
}

export interface NestedVm {
  id: string;
  name: string;
}

export interface Alert {
  alert_rule?: NestedAlertRule | null;
  cause: string;
  cluster?: NestedCluster | null;
  create_time?: string | null;
  disk?: NestedDisk | null;
  ended: boolean;
  host?: NestedHost | null;
  id: string;
  impact: string;
  labels: object;
  local_create_time: string;
  local_end_time: string;
  local_id: string;
  local_start_time: string;
  local_update_time: string;
  message: string;
  severity: string;
  solution: string;

  /** @format double */
  threshold: number;

  /** @format double */
  value: number;
  vms?: NestedVm[] | null;
}

export interface WithTaskAlert {
  task_id?: string | null;
  data: Alert;
}

export interface AlertWhereInput {
  AND?: AlertWhereInput[] | null;
  NOT?: AlertWhereInput[] | null;
  OR?: AlertWhereInput[] | null;
  alert_rule?: AlertRuleWhereInput | null;
  cause?: string | null;
  cause_contains?: string | null;
  cause_ends_with?: string | null;
  cause_gt?: string | null;
  cause_gte?: string | null;
  cause_in?: string[] | null;
  cause_lt?: string | null;
  cause_lte?: string | null;
  cause_not?: string | null;
  cause_not_contains?: string | null;
  cause_not_ends_with?: string | null;
  cause_not_in?: string[] | null;
  cause_not_starts_with?: string | null;
  cause_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  create_time?: string | null;
  create_time_gt?: string | null;
  create_time_gte?: string | null;
  create_time_in?: string[] | null;
  create_time_lt?: string | null;
  create_time_lte?: string | null;
  create_time_not?: string | null;
  create_time_not_in?: string[] | null;
  disk?: DiskWhereInput | null;
  ended?: boolean | null;
  ended_not?: boolean | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  impact?: string | null;
  impact_contains?: string | null;
  impact_ends_with?: string | null;
  impact_gt?: string | null;
  impact_gte?: string | null;
  impact_in?: string[] | null;
  impact_lt?: string | null;
  impact_lte?: string | null;
  impact_not?: string | null;
  impact_not_contains?: string | null;
  impact_not_ends_with?: string | null;
  impact_not_in?: string[] | null;
  impact_not_starts_with?: string | null;
  impact_starts_with?: string | null;
  local_create_time?: string | null;
  local_create_time_gt?: string | null;
  local_create_time_gte?: string | null;
  local_create_time_in?: string[] | null;
  local_create_time_lt?: string | null;
  local_create_time_lte?: string | null;
  local_create_time_not?: string | null;
  local_create_time_not_in?: string[] | null;
  local_end_time?: string | null;
  local_end_time_contains?: string | null;
  local_end_time_ends_with?: string | null;
  local_end_time_gt?: string | null;
  local_end_time_gte?: string | null;
  local_end_time_in?: string[] | null;
  local_end_time_lt?: string | null;
  local_end_time_lte?: string | null;
  local_end_time_not?: string | null;
  local_end_time_not_contains?: string | null;
  local_end_time_not_ends_with?: string | null;
  local_end_time_not_in?: string[] | null;
  local_end_time_not_starts_with?: string | null;
  local_end_time_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  local_start_time?: string | null;
  local_start_time_contains?: string | null;
  local_start_time_ends_with?: string | null;
  local_start_time_gt?: string | null;
  local_start_time_gte?: string | null;
  local_start_time_in?: string[] | null;
  local_start_time_lt?: string | null;
  local_start_time_lte?: string | null;
  local_start_time_not?: string | null;
  local_start_time_not_contains?: string | null;
  local_start_time_not_ends_with?: string | null;
  local_start_time_not_in?: string[] | null;
  local_start_time_not_starts_with?: string | null;
  local_start_time_starts_with?: string | null;
  local_update_time?: string | null;
  local_update_time_contains?: string | null;
  local_update_time_ends_with?: string | null;
  local_update_time_gt?: string | null;
  local_update_time_gte?: string | null;
  local_update_time_in?: string[] | null;
  local_update_time_lt?: string | null;
  local_update_time_lte?: string | null;
  local_update_time_not?: string | null;
  local_update_time_not_contains?: string | null;
  local_update_time_not_ends_with?: string | null;
  local_update_time_not_in?: string[] | null;
  local_update_time_not_starts_with?: string | null;
  local_update_time_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  severity?: string | null;
  severity_contains?: string | null;
  severity_ends_with?: string | null;
  severity_gt?: string | null;
  severity_gte?: string | null;
  severity_in?: string[] | null;
  severity_lt?: string | null;
  severity_lte?: string | null;
  severity_not?: string | null;
  severity_not_contains?: string | null;
  severity_not_ends_with?: string | null;
  severity_not_in?: string[] | null;
  severity_not_starts_with?: string | null;
  severity_starts_with?: string | null;
  solution?: string | null;
  solution_contains?: string | null;
  solution_ends_with?: string | null;
  solution_gt?: string | null;
  solution_gte?: string | null;
  solution_in?: string[] | null;
  solution_lt?: string | null;
  solution_lte?: string | null;
  solution_not?: string | null;
  solution_not_contains?: string | null;
  solution_not_ends_with?: string | null;
  solution_not_in?: string[] | null;
  solution_not_starts_with?: string | null;
  solution_starts_with?: string | null;

  /** @format double */
  threshold?: number | null;

  /** @format double */
  threshold_gt?: number | null;

  /** @format double */
  threshold_gte?: number | null;
  threshold_in?: number[] | null;

  /** @format double */
  threshold_lt?: number | null;

  /** @format double */
  threshold_lte?: number | null;

  /** @format double */
  threshold_not?: number | null;
  threshold_not_in?: number[] | null;

  /** @format double */
  value?: number | null;

  /** @format double */
  value_gt?: number | null;

  /** @format double */
  value_gte?: number | null;
  value_in?: number[] | null;

  /** @format double */
  value_lt?: number | null;

  /** @format double */
  value_lte?: number | null;

  /** @format double */
  value_not?: number | null;
  value_not_in?: number[] | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface ResolveAlertParams {
  where: AlertWhereInput;
}

export interface NestedCapacity {
  /** @format int32 */
  column?: number | null;

  /** @format int32 */
  row?: number | null;
}

export interface NestedClusterTopo {
  id: string;
  name: string;
}

export enum Direction {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export enum BrickPhaseEnum {
  BACKWARD = "BACKWARD",
  FORWARD = "FORWARD",
}

export interface NestedBrickDiskLayout {
  /** @format int32 */
  column: number;
  direction: Direction;
  phase: BrickPhaseEnum;

  /** @format int32 */
  row: number;
}

export interface NestedNodeTopo {
  id: string;
  name: string;
}

export enum PowerPosition {
  LEFT = "LEFT",
  MIDDLE = "MIDDLE",
  RIGHT = "RIGHT",
}

export interface NestedBrickPower {
  id: string;
}

export interface NestedRackTopo {
  id: string;
  name: string;
}

export interface NestedTagPosition {
  /** @format int32 */
  column: number;

  /** @format int32 */
  row: number;
  tag: string;
}

export interface BrickTopo {
  capacity: NestedCapacity;
  cluster: NestedCluster;
  cluster_topo?: NestedClusterTopo | null;
  disk_layout?: NestedBrickDiskLayout | null;

  /** @format int32 */
  height: number;
  id: string;
  local_id: string;
  model?: string | null;
  name: string;
  node_topoes?: NestedNodeTopo[] | null;

  /** @format int32 */
  position: number;
  power_layout?: Direction | null;
  power_position?: PowerPosition | null;
  powers?: NestedBrickPower[] | null;
  rack_topo?: NestedRackTopo | null;
  tag_position_in_brick?: NestedTagPosition[] | null;
}

export interface WithTaskBrickTopo {
  task_id?: string | null;
  data: BrickTopo;
}

export interface NodeTopoWhereInput {
  AND?: NodeTopoWhereInput[] | null;
  NOT?: NodeTopoWhereInput[] | null;
  OR?: NodeTopoWhereInput[] | null;
  brick_topo?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
}

export interface BrickTopoWhereInput {
  AND?: BrickTopoWhereInput[] | null;
  NOT?: BrickTopoWhereInput[] | null;
  OR?: BrickTopoWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;

  /** @format int32 */
  height?: number | null;

  /** @format int32 */
  height_gt?: number | null;

  /** @format int32 */
  height_gte?: number | null;
  height_in?: number[] | null;

  /** @format int32 */
  height_lt?: number | null;

  /** @format int32 */
  height_lte?: number | null;

  /** @format int32 */
  height_not?: number | null;
  height_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  model?: string | null;
  model_contains?: string | null;
  model_ends_with?: string | null;
  model_gt?: string | null;
  model_gte?: string | null;
  model_in?: string[] | null;
  model_lt?: string | null;
  model_lte?: string | null;
  model_not?: string | null;
  model_not_contains?: string | null;
  model_not_ends_with?: string | null;
  model_not_in?: string[] | null;
  model_not_starts_with?: string | null;
  model_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  node_topoes_every?: NodeTopoWhereInput | null;
  node_topoes_none?: NodeTopoWhereInput | null;
  node_topoes_some?: NodeTopoWhereInput | null;

  /** @format int32 */
  position?: number | null;

  /** @format int32 */
  position_gt?: number | null;

  /** @format int32 */
  position_gte?: number | null;
  position_in?: number[] | null;

  /** @format int32 */
  position_lt?: number | null;

  /** @format int32 */
  position_lte?: number | null;

  /** @format int32 */
  position_not?: number | null;
  position_not_in?: number[] | null;
  power_layout?: Direction | null;
  power_layout_in?: Direction[] | null;
  power_layout_not?: Direction | null;
  power_layout_not_in?: Direction[] | null;
  power_position?: PowerPosition | null;
  power_position_in?: PowerPosition[] | null;
  power_position_not?: PowerPosition | null;
  power_position_not_in?: PowerPosition[] | null;
  rack_topo?: RackTopoWhereInput | null;
}

export interface ClusterTopoWhereInput {
  AND?: ClusterTopoWhereInput[] | null;
  NOT?: ClusterTopoWhereInput[] | null;
  OR?: ClusterTopoWhereInput[] | null;
  brick_topoes_every?: BrickTopoWhereInput | null;
  brick_topoes_none?: BrickTopoWhereInput | null;
  brick_topoes_some?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  node_topoes_every?: NodeTopoWhereInput | null;
  node_topoes_none?: NodeTopoWhereInput | null;
  node_topoes_some?: NodeTopoWhereInput | null;
  zone_topoes_every?: ZoneTopoWhereInput | null;
  zone_topoes_none?: ZoneTopoWhereInput | null;
  zone_topoes_some?: ZoneTopoWhereInput | null;
}

export interface ZoneTopoWhereInput {
  AND?: ZoneTopoWhereInput[] | null;
  NOT?: ZoneTopoWhereInput[] | null;
  OR?: ZoneTopoWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  cluster_topo?: ClusterTopoWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  rack_topoes_every?: RackTopoWhereInput | null;
  rack_topoes_none?: RackTopoWhereInput | null;
  rack_topoes_some?: RackTopoWhereInput | null;
}

export interface RackTopoWhereInput {
  AND?: RackTopoWhereInput[] | null;
  NOT?: RackTopoWhereInput[] | null;
  OR?: RackTopoWhereInput[] | null;
  brick_topoes_every?: BrickTopoWhereInput | null;
  brick_topoes_none?: BrickTopoWhereInput | null;
  brick_topoes_some?: BrickTopoWhereInput | null;
  cluster?: ClusterWhereInput | null;

  /** @format int32 */
  height?: number | null;

  /** @format int32 */
  height_gt?: number | null;

  /** @format int32 */
  height_gte?: number | null;
  height_in?: number[] | null;

  /** @format int32 */
  height_lt?: number | null;

  /** @format int32 */
  height_lte?: number | null;

  /** @format int32 */
  height_not?: number | null;
  height_not_in?: number[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  zone_topo?: ZoneTopoWhereInput | null;
}

export interface BrickTopoCreationParams {
  tag_position_in_brick?: NestedTagPosition[] | null;
  node_topoes?: NodeTopoWhereInput;
  rack_topo_id?: string;
  capacity?: NestedCapacity;
  cluster_id: string;

  /** @format int32 */
  height: number;
  name: string;

  /** @format int32 */
  position: number;
}

export interface BrickTopoUpdationParams {
  data: {
    tag_position_in_brick?: NestedTagPosition[] | null;
    node_topoes?: NodeTopoWhereInput;
    capacity?: NestedCapacity;
    height?: number;
    name?: string;
    position?: number;
  };
  where: BrickTopoWhereInput;
}

export interface BrickTopoMoveParams {
  data: { rack_topo_id?: string; position: number };
  where: BrickTopoWhereInput;
}

export interface DeleteBrickTopo {
  id: string;
}

export interface WithTaskDeleteBrickTopo {
  task_id?: string | null;
  data: DeleteBrickTopo;
}

export interface BrickTopoDeletionParams {
  where: BrickTopoWhereInput;
}

export enum UploadResourceType {
  CLOUDTOWER_APPLICATION_PACKAGE = "CLOUDTOWER_APPLICATION_PACKAGE",
  CLUSTER_IMAGE = "CLUSTER_IMAGE",
  CLUSTER_IMAGE_META = "CLUSTER_IMAGE_META",
  CONTENT_LIBRARY_IMAGE = "CONTENT_LIBRARY_IMAGE",
  ELF_IMAGE = "ELF_IMAGE",
  EVEROUTE_PACKAGE = "EVEROUTE_PACKAGE",
  HOST_PLUGIN_PACKAGE = "HOST_PLUGIN_PACKAGE",
  MONITOR_IMAGE = "MONITOR_IMAGE",
  OVF = "OVF",
  SVT_IMAGE = "SVT_IMAGE",
  VMVOLUMEQCOW2 = "VM_VOLUME_QCOW2",
  VM_VOLUME_RAW = "VM_VOLUME_RAW",
}

export enum UploadTaskStatus {
  FAILED = "FAILED",
  INITIALIZING = "INITIALIZING",
  PAUSED = "PAUSED",
  SUCCESSED = "SUCCESSED",
  UPLOADING = "UPLOADING",
}

export interface UploadTask {
  args: object;

  /** @format int64 */
  chunk_size: number;

  /** @format int32 */
  current_chunk: number;
  finished_at?: string | null;
  id: string;
  resource_type: UploadResourceType;

  /** @format int64 */
  size: number;
  started_at?: string | null;
  status: UploadTaskStatus;
  updatedAt: string;
}

export enum ByteUnit {
  B = "B",
  KB = "KB",
  MB = "MB",
  GB = "GB",
  TB = "TB",
  PB = "PB",
}

export interface DeleteCloudTowerApplicationPackage {
  id: string;
}

export interface CloudTowerApplicationPackageWhereInput {
  AND?: CloudTowerApplicationPackageWhereInput[] | null;
  NOT?: CloudTowerApplicationPackageWhereInput[] | null;
  OR?: CloudTowerApplicationPackageWhereInput[] | null;
  applications_every?: CloudTowerApplicationWhereInput | null;
  applications_none?: CloudTowerApplicationWhereInput | null;
  applications_some?: CloudTowerApplicationWhereInput | null;
  architecture?: Architecture | null;
  architecture_in?: Architecture[] | null;
  architecture_not?: Architecture | null;
  architecture_not_in?: Architecture[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  scosVersion?: string | null;
  scosVersion_contains?: string | null;
  scosVersion_ends_with?: string | null;
  scosVersion_gt?: string | null;
  scosVersion_gte?: string | null;
  scosVersion_in?: string[] | null;
  scosVersion_lt?: string | null;
  scosVersion_lte?: string | null;
  scosVersion_not?: string | null;
  scosVersion_not_contains?: string | null;
  scosVersion_not_ends_with?: string | null;
  scosVersion_not_in?: string[] | null;
  scosVersion_not_starts_with?: string | null;
  scosVersion_starts_with?: string | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface CloudTowerApplicationWhereInput {
  AND?: CloudTowerApplicationWhereInput[] | null;
  NOT?: CloudTowerApplicationWhereInput[] | null;
  OR?: CloudTowerApplicationWhereInput[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  package?: CloudTowerApplicationPackageWhereInput | null;
  placementSituation?: string | null;
  placementSituation_contains?: string | null;
  placementSituation_ends_with?: string | null;
  placementSituation_gt?: string | null;
  placementSituation_gte?: string | null;
  placementSituation_in?: string[] | null;
  placementSituation_lt?: string | null;
  placementSituation_lte?: string | null;
  placementSituation_not?: string | null;
  placementSituation_not_contains?: string | null;
  placementSituation_not_ends_with?: string | null;
  placementSituation_not_in?: string[] | null;
  placementSituation_not_starts_with?: string | null;
  placementSituation_starts_with?: string | null;
  placementVerb?: string | null;
  placementVerb_contains?: string | null;
  placementVerb_ends_with?: string | null;
  placementVerb_gt?: string | null;
  placementVerb_gte?: string | null;
  placementVerb_in?: string[] | null;
  placementVerb_lt?: string | null;
  placementVerb_lte?: string | null;
  placementVerb_not?: string | null;
  placementVerb_not_contains?: string | null;
  placementVerb_not_ends_with?: string | null;
  placementVerb_not_in?: string[] | null;
  placementVerb_not_starts_with?: string | null;
  placementVerb_starts_with?: string | null;

  /** @format int32 */
  resourceVersion?: number | null;

  /** @format int32 */
  resourceVersion_gt?: number | null;

  /** @format int32 */
  resourceVersion_gte?: number | null;
  resourceVersion_in?: number[] | null;

  /** @format int32 */
  resourceVersion_lt?: number | null;

  /** @format int32 */
  resourceVersion_lte?: number | null;

  /** @format int32 */
  resourceVersion_not?: number | null;
  resourceVersion_not_in?: number[] | null;
  state?: CloudTowerApplicationState | null;
  state_in?: CloudTowerApplicationState[] | null;
  state_not?: CloudTowerApplicationState | null;
  state_not_in?: CloudTowerApplicationState[] | null;
  targetPackage?: string | null;
  targetPackage_contains?: string | null;
  targetPackage_ends_with?: string | null;
  targetPackage_gt?: string | null;
  targetPackage_gte?: string | null;
  targetPackage_in?: string[] | null;
  targetPackage_lt?: string | null;
  targetPackage_lte?: string | null;
  targetPackage_not?: string | null;
  targetPackage_not_contains?: string | null;
  targetPackage_not_ends_with?: string | null;
  targetPackage_not_in?: string[] | null;
  targetPackage_not_starts_with?: string | null;
  targetPackage_starts_with?: string | null;
  user?: UserWhereInput | null;
}

export enum CloudTowerApplicationState {
  ERROR = "ERROR",
  INSTALLING = "INSTALLING",
  INSTALL_FAILED = "INSTALL_FAILED",
  RUNNING = "RUNNING",
  SCALE_FAILED = "SCALE_FAILED",
  SCALING = "SCALING",
  TERMINATE_FAILED = "TERMINATE_FAILED",
  TERMINATING = "TERMINATING",
  UPGRADE_FAILED = "UPGRADE_FAILED",
  UPGRADING = "UPGRADING",
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  auth_config_id?: string | null;
  auth_config_id_contains?: string | null;
  auth_config_id_ends_with?: string | null;
  auth_config_id_gt?: string | null;
  auth_config_id_gte?: string | null;
  auth_config_id_in?: string[] | null;
  auth_config_id_lt?: string | null;
  auth_config_id_lte?: string | null;
  auth_config_id_not?: string | null;
  auth_config_id_not_contains?: string | null;
  auth_config_id_not_ends_with?: string | null;
  auth_config_id_not_in?: string[] | null;
  auth_config_id_not_starts_with?: string | null;
  auth_config_id_starts_with?: string | null;
  display_username?: string | null;
  display_username_contains?: string | null;
  display_username_ends_with?: string | null;
  display_username_gt?: string | null;
  display_username_gte?: string | null;
  display_username_in?: string[] | null;
  display_username_lt?: string | null;
  display_username_lte?: string | null;
  display_username_not?: string | null;
  display_username_not_contains?: string | null;
  display_username_not_ends_with?: string | null;
  display_username_not_in?: string[] | null;
  display_username_not_starts_with?: string | null;
  display_username_starts_with?: string | null;
  email_address?: string | null;
  email_address_contains?: string | null;
  email_address_ends_with?: string | null;
  email_address_gt?: string | null;
  email_address_gte?: string | null;
  email_address_in?: string[] | null;
  email_address_lt?: string | null;
  email_address_lte?: string | null;
  email_address_not?: string | null;
  email_address_not_contains?: string | null;
  email_address_not_ends_with?: string | null;
  email_address_not_in?: string[] | null;
  email_address_not_starts_with?: string | null;
  email_address_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  ldap_dn?: string | null;
  ldap_dn_contains?: string | null;
  ldap_dn_ends_with?: string | null;
  ldap_dn_gt?: string | null;
  ldap_dn_gte?: string | null;
  ldap_dn_in?: string[] | null;
  ldap_dn_lt?: string | null;
  ldap_dn_lte?: string | null;
  ldap_dn_not?: string | null;
  ldap_dn_not_contains?: string | null;
  ldap_dn_not_ends_with?: string | null;
  ldap_dn_not_in?: string[] | null;
  ldap_dn_not_starts_with?: string | null;
  ldap_dn_starts_with?: string | null;
  mobile_phone?: string | null;
  mobile_phone_contains?: string | null;
  mobile_phone_ends_with?: string | null;
  mobile_phone_gt?: string | null;
  mobile_phone_gte?: string | null;
  mobile_phone_in?: string[] | null;
  mobile_phone_lt?: string | null;
  mobile_phone_lte?: string | null;
  mobile_phone_not?: string | null;
  mobile_phone_not_contains?: string | null;
  mobile_phone_not_ends_with?: string | null;
  mobile_phone_not_in?: string[] | null;
  mobile_phone_not_starts_with?: string | null;
  mobile_phone_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  password_expired?: boolean | null;
  password_expired_not?: boolean | null;
  password_updated_at?: string | null;
  password_updated_at_gt?: string | null;
  password_updated_at_gte?: string | null;
  password_updated_at_in?: string[] | null;
  password_updated_at_lt?: string | null;
  password_updated_at_lte?: string | null;
  password_updated_at_not?: string | null;
  password_updated_at_not_in?: string[] | null;
  role?: UserRole | null;
  role_in?: UserRole[] | null;
  role_not?: UserRole | null;
  role_not_in?: UserRole[] | null;
  roles_every?: UserRoleNextWhereInput | null;
  roles_none?: UserRoleNextWhereInput | null;
  roles_some?: UserRoleNextWhereInput | null;
  source?: UserSource | null;
  source_in?: UserSource[] | null;
  source_not?: UserSource | null;
  source_not_in?: UserSource[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export enum UserRole {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  ROOT = "ROOT",
}

export interface UserRoleNextWhereInput {
  AND?: UserRoleNextWhereInput[] | null;
  NOT?: UserRoleNextWhereInput[] | null;
  OR?: UserRoleNextWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  platform?: UserRolePlatform | null;
  platform_in?: UserRolePlatform[] | null;
  platform_not?: UserRolePlatform | null;
  platform_not_in?: UserRolePlatform[] | null;
  preset?: UserRolePreset | null;
  preset_in?: UserRolePreset[] | null;
  preset_not?: UserRolePreset | null;
  preset_not_in?: UserRolePreset[] | null;
  users_every?: UserWhereInput | null;
  users_none?: UserWhereInput | null;
  users_some?: UserWhereInput | null;
}

export enum UserRolePlatform {
  MANAGEMENT = "MANAGEMENT",
  SELF_SERVICE = "SELF_SERVICE",
}

export enum UserRolePreset {
  ADMIN = "ADMIN",
  AUDITOR = "AUDITOR",
  READ_ONLY = "READ_ONLY",
  ROOT = "ROOT",
  USER_ADMIN = "USER_ADMIN",
  VM_USER = "VM_USER",
}

export enum UserSource {
  AUTHN = "AUTHN",
  LDAP = "LDAP",
  LOCAL = "LOCAL",
}

export interface DeleteCloudTowerApplicationPackageParams {
  where: CloudTowerApplicationPackageWhereInput;
}

export interface NestedCloudTowerApplicationPackage {
  id: string;
  name: string;
}

export interface NestedUser {
  id: string;
  name: string;
}

export interface CloudTowerApplication {
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  instanceStatuses: object;
  name: string;
  package?: NestedCloudTowerApplicationPackage | null;
  placementSituation?: string | null;
  placementVerb?: string | null;

  /** @format int32 */
  resourceVersion: number;
  state?: CloudTowerApplicationState | null;
  targetPackage: string;
  user?: NestedUser | null;
  vmSpec: object;
}

export interface ApplicationVmSpecEnv {
  value?: string;
  name: string;
}

export interface ApplicationVmSpecNic {
  vlanId?: string;
  mask?: string;
  ip?: string;
  gateway?: string;
  dhcp?: boolean;
}

export interface ApplicationVmSpecNetwork {
  nics?: ApplicationVmSpecNic[];
  dns?: string[];
}

export interface ApplicationVmSpecStatus {
  vmIps?: string[];
  message?: VmStatus;
}

export interface ApplicationVmSpecStorage {
  size_unit?: ByteUnit;

  /** @format int64 */
  size?: number;
}

export interface ApplicationVmSpec {
  vmUsage?: VmUsage;
  storages?: ApplicationVmSpecStorage[];
  status?: ApplicationVmSpecStatus;
  publicKeys?: string[];
  network?: ApplicationVmSpecNetwork;
  name?: string;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;
  internal?: boolean;
  image?: string;
  host?: string;
  env?: ApplicationVmSpecEnv[];

  /** @format int32 */
  cpu?: number;
  cluster?: string;
  cloudInitUserData?: string;
}

export enum ApplicationVmSpecPlacementSituation {
  DIFFERENT = "DIFFERENT",
  SAME = "SAME",
}

export enum ApplicationVmSpecPlacementVerb {
  MUST = "MUST",
  PREFER = "PREFER",
}

export interface ApplicationVmSpecPlacement {
  verb: ApplicationVmSpecPlacementVerb;
  situation: ApplicationVmSpecPlacementSituation;
}

export enum ApplicationVmSpecAffinityPolicy {
  MUST = "MUST",
  PREFER = "PREFER",
}

export interface ApplicationVmSpecDefinition {
  vmAffinity?: ApplicationVmSpecAffinityPolicy;
  placement?: ApplicationVmSpecPlacement;
  name?: string;
  group?: string;
  template?: ApplicationVmSpec;
  instances?: ApplicationVmSpec[];
}

export interface DeployCloudTowerApplicationParams {
  name: string;
  targetPackage: string;
  vmSpec: ApplicationVmSpecDefinition;
}

export interface CloudTowerApplicationWhereUniqueInput {
  id?: string | null;
}

export interface UpgradeCloudTowerApplicationParams {
  data: { targetPackage: string };
  where: CloudTowerApplicationWhereUniqueInput;
}

export interface UpdateCloudTowerApplicationVmSpecParams {
  data: { vmSpec: ApplicationVmSpecDefinition };
  where: CloudTowerApplicationWhereUniqueInput;
}

export interface UninstallCloudTowerApplicationParams {
  where: CloudTowerApplicationWhereInput;
}

export interface NestedApplication {
  id: string;
}

export interface NestedConsistencyGroup {
  id: string;
  name: string;
}

export interface NestedDatacenter {
  id: string;
  name: string;
}

export interface NestedEverouteCluster {
  id: string;
  name: string;
}

export interface NestedLabel {
  id: string;
  key: string;
  value?: string | null;
}

export enum MetroCheckStatusEnum {
  CRITICAL = "CRITICAL",
  HEALTHY = "HEALTHY",
  INFO = "INFO",
  NOTICE = "NOTICE",
}

export interface NestedMetroCheckItem {
  critical: string[];
  info: string[];
  key: string;
  labels: object;
  notice: string[];
  status: MetroCheckStatusEnum;
}

export interface NestedMetroCheckResult {
  /** @format int32 */
  critical: number;

  /** @format int32 */
  info: number;
  items: NestedMetroCheckItem[];

  /** @format int32 */
  notice: number;
  status: MetroCheckStatusEnum;
}

export interface NestedMetroAvailabilityChecklist {
  primaryZone: NestedMetroCheckResult;
  primaryZoneAndWitness: NestedMetroCheckResult;
  secondaryZone: NestedMetroCheckResult;
  secondaryZoneAndWitness: NestedMetroCheckResult;
  witness: NestedMetroCheckResult;
  zoneAndZone: NestedMetroCheckResult;
}

export interface NestedClusterSettings {
  id: string;
}

export interface NestedVcenterAccount {
  id: string;
}

export interface NestedVds {
  id: string;
  name: string;
}

export interface NestedVmFolder {
  id: string;
  name: string;
}

export interface NestedVmTemplate {
  id: string;
  name: string;
}

export interface NestedWitness {
  id: string;
  name: string;
}

export interface NestedZone {
  id: string;
}

export interface Cluster {
  application_highest_version?: string | null;
  applications?: NestedApplication[] | null;
  architecture: Architecture;
  auto_converge?: boolean | null;
  connect_state: ConnectState;
  consistency_groups?: NestedConsistencyGroup[] | null;
  current_cpu_model?: string | null;
  datacenters?: NestedDatacenter[] | null;
  disconnected_date?: string | null;
  disconnected_reason?: ClusterConnectorErrorCode | null;
  dns: string[];
  entityAsyncStatus?: EntityAsyncStatus | null;
  everoute_cluster?: NestedEverouteCluster | null;

  /** @format int64 */
  failure_data_space?: number | null;
  has_metrox?: boolean | null;

  /** @format int32 */
  host_num?: number | null;
  hosts?: NestedHost[] | null;
  hypervisor?: Hypervisor | null;
  id: string;
  ip: string;
  is_all_flash?: boolean | null;
  iscsi_vip?: string | null;
  labels?: NestedLabel[] | null;
  license_expire_date?: string | null;
  license_serial?: string | null;
  license_sign_date?: string | null;
  license_type?: LicenseType | null;
  local_id?: string | null;
  maintenance_end_date?: string | null;
  maintenance_start_date?: string | null;
  management_vip?: string | null;

  /** @format int32 */
  max_chunk_num?: number | null;

  /** @format int64 */
  max_physical_data_capacity?: number | null;

  /** @format int64 */
  max_physical_data_capacity_per_node?: number | null;
  metro_availability_checklist?: NestedMetroAvailabilityChecklist | null;
  mgt_gateway?: string | null;
  mgt_netmask?: string | null;

  /** @format int64 */
  migration_data_size?: number | null;

  /** @format int64 */
  migration_speed?: number | null;
  name: string;
  ntp_mode?: NtpMode | null;
  ntp_servers: string[];
  nvme_over_rdma_enabled?: boolean | null;
  nvme_over_tcp_enabled?: boolean | null;
  nvmf_enabled?: boolean | null;
  pmem_enabled?: boolean | null;

  /** @format int32 */
  provisioned_cpu_cores?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format double */
  provisioned_for_active_vm_ratio?: number | null;

  /** @format int64 */
  provisioned_memory_bytes?: number | null;

  /** @format double */
  provisioned_ratio?: number | null;
  rdma_enabled?: boolean | null;
  recommended_cpu_models: string[];

  /** @format int64 */
  recover_data_size?: number | null;

  /** @format int64 */
  recover_speed?: number | null;

  /** @format int32 */
  reserved_cpu_cores_for_system_service?: number | null;

  /** @format int32 */
  running_vm_num?: number | null;
  settings?: NestedClusterSettings | null;
  software_edition?: SoftwareEdition | null;

  /** @format int32 */
  stopped_vm_num?: number | null;
  stretch?: boolean | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int64 */
  total_cpu_hz?: number | null;
  total_cpu_models: string[];

  /** @format int32 */
  total_cpu_sockets?: number | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_memory_bytes?: number | null;
  type: ClusterType;
  upgrade_tool_version?: string | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format int64 */
  valid_data_space?: number | null;
  vcenterAccount?: NestedVcenterAccount | null;
  vdses?: NestedVds[] | null;
  version: string;
  vhost_enabled?: boolean | null;
  vm_folders?: NestedVmFolder[] | null;

  /** @format int32 */
  vm_num?: number | null;
  vm_templates?: NestedVmTemplate[] | null;
  vms?: NestedVm[] | null;
  witness?: NestedWitness | null;
  zones?: NestedZone[] | null;
}

export interface WithTaskCluster {
  task_id?: string | null;
  data: Cluster;
}

export interface ClusterCreationParams {
  datacenter_id?: string;
  secondary_zone_datacenter_id?: string;
  primary_zone_datacenter_id?: string;
  password: string;
  username: string;
  ip: string;
}

export interface ClusterUpdationParams {
  data: {
    secondary_zone_id?: string;
    primary_zone_id?: string;
    datacenter_id?: string;
    secondary_zone_datacenter_id?: string;
    primary_zone_datacenter_id?: string;
    password?: string;
    username?: string;
    ip?: string;
  };
  where: ClusterWhereInput;
}

export interface ClusterLicenseUpdationParams {
  data: { license: string };
  where: ClusterWhereInput;
}

export interface MgtIpMapper {
  ip: string;
  host_id: string;
}

export interface ClusterNetworkSettingUpdationParams {
  data: {
    mgt_ip_mapper?: MgtIpMapper[];
    mgt_netmask?: string;
    mgt_gateway?: string;
    ntp_mode?: NtpMode;
    ntp_servers?: string[];
    dns?: string[];
    iscsi_vip?: string;
    management_vip?: string;
  };
  where: ClusterWhereInput;
}

export interface ClusterVirtualizationUpdationParams {
  data: { auto_converge?: boolean; current_cpu_model?: string };
  where: ClusterWhereInput;
}

export interface NestedVmRecycleBin {
  enabled: boolean;

  /** @format int32 */
  retain: number;
}

export interface ClusterSettings {
  cluster: NestedCluster;
  default_ha?: boolean | null;
  default_storage_policy?: VmVolumeElfStoragePolicyType | null;
  enabled_iscsi?: boolean | null;
  id: string;
  vm_recycle_bin?: NestedVmRecycleBin | null;
}

export interface WithTaskClusterSettings {
  task_id?: string | null;
  data: ClusterSettings;
}

export interface ClusterHaUpdationParams {
  ha: boolean;
  where: ClusterWhereInput;
}

export interface ClusterEnableIscsiUpdationParams {
  enable_iscsi: boolean;
  where: ClusterWhereInput;
}

export interface DeleteCluster {
  id: string;
}

export interface WithTaskDeleteCluster {
  task_id?: string | null;
  data: DeleteCluster;
}

export interface ClusterDeletionParams {
  where: ClusterWhereInput;
}

export interface MetaLeader {
  meta_leader: string;
  cluster_id: string;
}

export interface GetMetaLeaderRequestBody {
  where: ClusterWhereInput;
}

export interface NestedIscsiLunSnapshot {
  id: string;
  name: string;
}

export interface NestedNvmfNamespaceSnapshot {
  id: string;
  name: string;
}

export interface ConsistencyGroupSnapshot {
  Iscsi_lun_snapshots?: NestedIscsiLunSnapshot[] | null;
  consistency_group?: NestedConsistencyGroup | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  nvmf_namespace_snapshots?: NestedNvmfNamespaceSnapshot[] | null;

  /** @format int64 */
  unique_size: number;
}

export interface WithTaskConsistencyGroupSnapshot {
  task_id?: string | null;
  data: ConsistencyGroupSnapshot;
}

export interface ConsistencyGroupSnapshotCreationParams {
  consistency_group_id: string;
  name: string;
}

export interface ConsistencyGroupSnapshotUpdationParams {
  where: ConsistencyGroupSnapshotWhereInput;
}

export interface DeleteConsistencyGroupSnapshot {
  id: string;
}

export interface WithTaskDeleteConsistencyGroupSnapshot {
  task_id?: string | null;
  data: DeleteConsistencyGroupSnapshot;
}

export interface ConsistencyGroupSnapshotDeletionParams {
  data: { remain_volume_snapshot: boolean };
  where: ConsistencyGroupSnapshotWhereInput;
}

export interface NestedConsistencyGroupSnapshot {
  id: string;
  name: string;
}

export interface NestedIscsiLun {
  id: string;
  name: string;
}

export interface NestedNvmfNamespace {
  id: string;
  name: string;
}

export interface ConsistencyGroup {
  cluster: NestedCluster;
  consistency_group_snapshots?: NestedConsistencyGroupSnapshot[] | null;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  iscsi_luns?: NestedIscsiLun[] | null;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  namespaces?: NestedNvmfNamespace[] | null;

  /** @format int64 */
  unique_size: number;
}

export interface WithTaskConsistencyGroup {
  task_id?: string | null;
  data: ConsistencyGroup;
}

export interface ConsistencyGroupCreationParams {
  namespaces_ids: string[];
  iscsi_luns_ids: string[];
  description?: string;
  cluster_id: string;
  name: string;
}

export interface ConsistencyGroupUpdationParams {
  data: {
    remain_volume_snapshot?: boolean;
    namespaces_ids?: string[];
    iscsi_luns_ids?: string[];
    description?: string;
    name?: string;
  };
  where: ConsistencyGroupWhereInput;
}

export interface DeleteConsistencyGroup {
  id: string;
}

export interface WithTaskDeleteConsistencyGroup {
  task_id?: string | null;
  data: DeleteConsistencyGroup;
}

export interface ConsistencyGroupDeletionParams {
  data: { remain_volume_snapshot?: boolean };
  where: ConsistencyGroupWhereInput;
}

export interface NestedElfImage {
  id: string;
  name: string;
}

export interface NestedVmDisk {
  id: string;
}

export interface NestedVmSnapshot {
  id: string;
  name: string;
}

export interface ContentLibraryImage {
  clusters?: NestedCluster[] | null;
  createdAt: string;
  description: string;
  elf_image_uuids: string[];
  elf_images?: NestedElfImage[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  name: string;
  path: string;

  /** @format int64 */
  size: number;
  vm_disks?: NestedVmDisk[] | null;
  vm_snapshots?: NestedVmSnapshot[] | null;
  vm_templates?: NestedVmTemplate[] | null;
}

export interface WithTaskContentLibraryImage {
  task_id?: string | null;
  data: ContentLibraryImage;
}

export interface ContentLibraryImageUpdationParamsData {
  clusters?: ClusterWhereInput;
  description?: string;
  name?: string;
}

export interface ContentLibraryImageUpdationParams {
  data: ContentLibraryImageUpdationParamsData;
  where: ContentLibraryImageWhereInput;
}

export interface ContentLibraryImageUpdationClusterParamsData {
  clusters: ClusterWhereInput;
}

export interface ContentLibraryImageUpdationClusterParams {
  data: ContentLibraryImageUpdationClusterParamsData;
  where: ContentLibraryImageWhereInput;
}

export interface DeleteContentLibraryImage {
  id: string;
}

export interface WithTaskDeleteContentLibraryImage {
  task_id?: string | null;
  data: DeleteContentLibraryImage;
}

export interface ContentLibraryImageDeletionParams {
  where: ContentLibraryImageWhereInput;
}

export interface ContentLibraryImageImportData {
  url: string;
  name: string;
  description?: string;
  cluster: ClusterWhereInput;
}

export interface ContentLibraryImageImportParams {
  data: ContentLibraryImageImportData;
}

export interface OvfCpu {
  /** @format int32 */
  sockets: number;

  /** @format int32 */
  cores: number;
}

export interface OvfNic {
  mac: string;
}

export interface OvfDisk {
  /** @format int64 */
  size: number;
  type: VmDiskType;
  bus: Bus;
  name: string;
}

export interface ParsedOVF {
  firmware: VmFirmware;
  disks: OvfDisk[];
  nics: OvfNic[];

  /** @format int64 */
  memory: number;
  cpu: OvfCpu;

  /** @format int32 */
  vcpu: number;
  description?: string;
  name: string;
}

export interface ExportFileDownloadLinks {
  link: string;
  filename: string;
}

export interface VmExportFileWhereUniqueInput {
  data_port_id?: string | null;
  id?: string | null;
}

export interface GetExportFileDownloadLinksParams {
  where: VmExportFileWhereUniqueInput;
}

export interface NestedCpu {
  /** @format int32 */
  cores: number;

  /** @format int32 */
  sockets: number;
}

export interface NestedVmEntityFilterResult {
  id: string;
}

export interface NestedGpuDevice {
  id: string;
  name: string;
}

export interface NestedIsolationPolicy {
  id: string;
}

export interface NestedNic {
  id: string;
  name: string;
}

export interface NestedSnapshotPlan {
  id: string;
  name: string;
}

export interface NestedUsbDevice {
  id: string;
  name: string;
}

export interface NestedVmNic {
  id: string;
}

export interface NestedVmPlacementGroup {
  id: string;
  name: string;
}

export interface Vm {
  bios_uuid?: string | null;
  clock_offset: VmClockOffset;
  cloud_init_supported?: boolean | null;
  cluster?: NestedCluster | null;
  cpu: NestedCpu;
  cpu_model: string;

  /** @format double */
  cpu_usage?: number | null;
  deleted_at?: string | null;
  description: string;
  dns_servers?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entity_filter_results?: NestedVmEntityFilterResult[] | null;
  firmware: VmFirmware;
  folder?: NestedVmFolder | null;
  gpu_devices?: NestedGpuDevice[] | null;
  guest_cpu_model?: string | null;
  guest_os_type?: VmGuestsOperationSystem | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format int64 */
  guest_used_size?: number | null;
  ha: boolean;
  host?: NestedHost | null;
  hostname?: string | null;
  id: string;
  in_recycle_bin: boolean;
  internal: boolean;
  io_policy?: VmDiskIoPolicy | null;
  ips: string;
  isolation_policy?: NestedIsolationPolicy | null;
  kernel_info?: string | null;
  labels?: NestedLabel[] | null;
  last_shutdown_time?: string | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format int64 */
  logical_size_bytes?: number | null;

  /** @format int64 */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format int64 */
  memory: number;

  /** @format double */
  memory_usage?: number | null;
  name: string;
  nested_virtualization: boolean;
  node_ip: string;
  original_name?: string | null;
  os?: string | null;
  out_uninstall_usb: string[];
  pci_nics?: NestedNic[] | null;
  protected: boolean;

  /** @format int64 */
  provisioned_size?: number | null;

  /** @format int64 */
  size?: number | null;
  snapshot_plan?: NestedSnapshotPlan | null;
  snapshots?: NestedVmSnapshot[] | null;
  status: VmStatus;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format int64 */
  unique_size?: number | null;
  usb_devices?: NestedUsbDevice[] | null;

  /** @format int32 */
  vcpu: number;
  video_type?: VmVideoType | null;
  vm_disks?: NestedVmDisk[] | null;
  vm_nics?: NestedVmNic[] | null;
  vm_placement_group?: NestedVmPlacementGroup[] | null;
  vm_tools_status: VmToolsStatus;
  vm_tools_version?: string | null;
  vm_usage?: VmUsage | null;
  win_opt: boolean;
}

export interface WithTaskVm {
  task_id?: string | null;
  data: Vm;
}

export enum BPSUnit {
  Bps = "Bps",
  KBps = "KBps",
  MBps = "MBps",
  GBps = "GBps",
  TBps = "TBps",
}

export interface MountNewCreateDisksParams {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;
  vm_volume: {
    elf_storage_policy: VmVolumeElfStoragePolicyType;
    path?: string;
    size_unit?: ByteUnit;
    size: number;
    name: string;
  };

  /** @format int32 */
  index?: number;

  /** @format int32 */
  key?: number;
  bus: Bus;

  /** @format int32 */
  boot: number;
}

export interface MountDisksParams {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;
  vm_volume_id: string;

  /** @format int32 */
  index?: number;

  /** @format int32 */
  key?: number;
  bus: Bus;

  /** @format int32 */
  boot: number;
}

export interface VmCdRomParams {
  content_library_image_id?: string;
  elf_image_id?: string;

  /** @format int32 */
  index?: number;

  /** @format int32 */
  key?: number;

  /** @format int32 */
  boot: number;
}

export interface VmDiskParams {
  mount_cd_roms?: VmCdRomParams[];
  mount_disks?: MountDisksParams[];
  mount_new_create_disks?: MountNewCreateDisksParams[];
}

export enum BitUnit {
  Bit = "bit",
  Kb = "Kb",
  Mb = "Mb",
  Gb = "Gb",
  Tb = "Tb",
  Pb = "Pb",
}

export enum BitPSUnit {
  Bps = "bps",
  Kbps = "Kbps",
  Mbps = "Mbps",
  Gbps = "Gbps",
  Tbps = "Tbps",
}

export interface VmNicQosTraffic {
  rate_limit_unit?: BitPSUnit;

  /** @format int64 */
  rate_limit?: number | null;
  burst_unit?: BitUnit;

  /** @format int64 */
  burst?: number | null;
  enabled: boolean;
}

export interface VmNicQosOption {
  egress?: VmNicQosTraffic;
  ingress?: VmNicQosTraffic;
}

export interface VmNicParams {
  qos?: VmNicQosOption;
  subnet_mask?: string;
  gateway?: string;
  ip_address?: string;
  nic_id?: string;
  connect_vlan_id: string;
  mirror?: boolean;
  model?: VmNicModel;
  enabled?: boolean;
  mac_address?: string;
  local_id?: string;
}

export interface VmGpuOperationParams {
  /** @format int32 */
  amount?: number;
  gpu_id: string;
}

export interface VmOwnerParams {
  search_for?: "username" | "id";
  value: string;
}

export interface VmCreationParams {
  owner?: VmOwnerParams;
  gpu_devices?: VmGpuOperationParams[];
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status: VmStatus;
  firmware: VmFirmware;
  ha: boolean;
  pci_nics?: NicWhereInput;
  vm_placement_group?: VmPlacementGroupWhereInput;
  vm_nics: VmNicParams[];
  vm_disks: VmDiskParams;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory: number;

  /** @format int32 */
  cpu_cores: number;

  /** @format int32 */
  cpu_sockets: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export interface DiskOperateModifyDisk {
  vm_volume_id?: string;
  bus?: Bus;

  /** @format int32 */
  disk_index: number;
}

export interface VmDiskOperate {
  remove_disks?: { disk_index: number[] };
  modify_disks?: DiskOperateModifyDisk[];
  new_disks?: VmDiskParams;
}

export enum CloudInitNetworkTypeEnum {
  IPV4 = "IPV4",
  IPV4DHCP = "IPV4_DHCP",
}

export interface CloudInitNetWorkRoute {
  network: string;
  netmask: string;
  gateway: string;
}

export interface CloudInitNetWork {
  routes?: CloudInitNetWorkRoute[];
  type: CloudInitNetworkTypeEnum;

  /** @format int32 */
  nic_index: number;
  netmask?: string;
  ip_address?: string;
}

export interface TemplateCloudInit {
  user_data?: string;
  public_keys?: string[];
  hostname?: string;
  networks?: CloudInitNetWork[];
  nameservers?: string[];
  default_user_password?: string;
}

export interface VmCreateVmFromTemplateParams {
  owner?: VmOwnerParams;
  gpu_devices?: VmGpuOperationParams[];
  cloud_init?: TemplateCloudInit;
  is_full_copy: boolean;
  template_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;

  /** @deprecated */
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  pci_nics?: NicWhereInput;
  vm_placement_group?: VmPlacementGroupWhereInput;
  vm_nics?: VmNicParams[];
  disk_operate?: VmDiskOperate;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id?: string;
}

export interface VmCreateVmFromContentLibraryTemplateParams {
  owner?: VmOwnerParams;
  gpu_devices?: VmGpuOperationParams[];
  cloud_init?: TemplateCloudInit;
  is_full_copy: boolean;
  template_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;

  /** @deprecated */
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  pci_nics?: NicWhereInput;
  vm_placement_group?: VmPlacementGroupWhereInput;
  vm_nics?: VmNicParams[];
  disk_operate?: VmDiskOperate;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
}

export interface ConvertVmTemplateToVmParams {
  name: string;
  converted_from_template_id: string;
}

export interface VmCloneParams {
  owner?: VmOwnerParams;
  gpu_devices?: VmGpuOperationParams[];
  is_full_copy?: boolean;
  src_vm_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;

  /** @deprecated */
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  pci_nics?: NicWhereInput;
  vm_placement_group?: VmPlacementGroupWhereInput;
  vm_nics?: VmNicParams[];
  vm_disks?: VmDiskParams;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id?: string;
}

export interface VmRebuildParams {
  owner?: VmOwnerParams;
  gpu_devices?: VmGpuOperationParams[];
  is_full_copy?: boolean;
  rebuild_from_snapshot_id: string;
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;

  /** @deprecated */
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status?: VmStatus;
  firmware?: VmFirmware;
  ha?: boolean;
  pci_nics?: NicWhereInput;
  vm_placement_group?: VmPlacementGroupWhereInput;
  vm_nics?: VmNicParams[];
  vm_disks?: VmDiskParams;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id?: string;
}

export interface VmRollbackParams {
  data: { snapshot_id: string };
  where: VmWhereInput;
}

export interface VmUpdateParams {
  data: {
    vcpu?: number;
    ha?: boolean;
    memory_unit?: ByteUnit;
    memory?: number;
    cpu_cores?: number;
    cpu_sockets?: number;
    description?: string;
    name?: string;
  };
  where: VmWhereInput;
}

export interface DeleteVm {
  id: string;
}

export interface WithTaskDeleteVm {
  task_id?: string | null;
  data: DeleteVm;
}

export interface VmOperateParams {
  where: VmWhereInput;
}

export interface VmDeleteParams {
  effect?: { include_snapshots?: boolean };
  where: VmWhereInput;
}

export interface VmStartParams {
  data?: { host_id: string };
  where: VmWhereInput;
}

export interface VmAddDiskParams {
  data: {
    max_bandwidth_policy?: VmDiskIoRestrictType;
    max_bandwidth_unit?: BPSUnit;
    max_bandwidth?: number;
    max_iops_policy?: VmDiskIoRestrictType;
    max_iops?: number;
    io_policy?: VmDiskIoPolicy;
    vm_disks: {
      mount_disks?: MountDisksParams[];
      mount_new_create_disks?: MountNewCreateDisksParams[];
    };
  };
  where: VmWhereInput;
}

export interface VmUpdateDiskParams {
  data: {
    content_library_image_id?: string | null;
    elf_image_id?: string | null;
    vm_volume_id?: string;
    vm_disk_id: string;
    bus?: Bus;
  };
  where: VmWhereInput;
}

export interface VmExpandVmDiskParams {
  size_unit?: ByteUnit;

  /** @format int64 */
  size: number;
  where: VmDiskWhereInput;
}

export interface VmRemoveDiskParams {
  data: { disk_ids: string[] };
  where: VmWhereInput;
}

export interface VmAddCdRomParams {
  data: { vm_cd_roms: VmCdRomParams[] };
  where: VmWhereInput;
}

export interface VmRemoveCdRomParams {
  data: { cd_rom_ids: string[] };
  where: VmWhereInput;
}

export interface VmEjectCdRomParams {
  where: VmDiskWhereInput;
}

export interface VmToggleCdRomDisableParams {
  disabled: boolean;
  where: VmDiskWhereInput;
}

export interface VmAddNicParams {
  data: { vm_nics: VmNicParams[] };
  where: VmWhereInput;
}

export interface VmUpdateNicParams {
  data: {
    subnet_mask?: string;
    gateway?: string;
    ip_address?: string;
    nic_id?: string;
    connect_vlan_id?: string;
    mirror?: boolean;
    model?: VmNicModel;
    enabled?: boolean;
    mac_address?: string;
    nic_index: number;
  };
  where: VmWhereInput;
}

export interface VmUpdateNicBasicInfoParams {
  data: { subnet_mask?: string; gateway?: string; ip_address?: string };
  where: VmNicWhereInput;
}

export interface VmUpdateNicAdvanceInfoParams {
  data: {
    mirror?: boolean;
    enabled?: boolean;
    mac_address?: string;
    nic_id?: string;
    connect_vlan_id?: string;
  };
  where: VmNicWhereInput;
}

export interface VmUpdateNicQosOptionsParams {
  data: { qos?: VmNicQosOption };
  where: VmNicWhereInput;
}

export interface VmOperatePciNicParams {
  data: { pci_nics?: NicWhereInput };
  where: VmWhereInput;
}

export interface VmRemoveNicParams {
  data: { nic_index: number[] };
  where: VmWhereInput;
}

export interface VmRemoveNicByWhereParams {
  effect: { vm_ids?: string[] };
  where: VmNicWhereInput;
}

export interface VmAddGpuDeviceParams {
  data: VmGpuOperationParams[];
  where: VmWhereInput;
}

export interface VmRemoveGpuDeviceParams {
  data: VmGpuOperationParams[];
  where: VmWhereInput;
}

export interface InstallVmtoolsParams {
  data: { svt_image_id: string; cd_rom_id: string };
  where: VmWhereInput;
}

export interface VmMigrateParams {
  data?: { host_id: string };
  where: VmWhereInput;
}

export enum MigrateType {
  COLD_MIGRATE = "COLD_MIGRATE",
  CUTOVER_MIGRATE = "CUTOVER_MIGRATE",
  LIVE_MIGRATE = "LIVE_MIGRATE",
}

export interface VlanMapping {
  src_vlan_local_id: string;
  dest_vlan_local_id: string;
}

export interface MigrateVmConfig {
  remove_unmovable_devices?: boolean;
  new_name?: string;
  network_mapping: VlanMapping[];
  migrate_type: MigrateType;
  elf_storage_policy: VmVolumeElfStoragePolicyType;
  delete_src_vm?: boolean;
}

export interface VmMigrateAcrossClusterParams {
  data: { vm_config: MigrateVmConfig; cluster_id: string; host_id?: string };
  where: VmWhereInput;
}

export interface TaskWhereInput {
  AND?: TaskWhereInput[] | null;
  NOT?: TaskWhereInput[] | null;
  OR?: TaskWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  error_code?: string | null;
  error_code_contains?: string | null;
  error_code_ends_with?: string | null;
  error_code_gt?: string | null;
  error_code_gte?: string | null;
  error_code_in?: string[] | null;
  error_code_lt?: string | null;
  error_code_lte?: string | null;
  error_code_not?: string | null;
  error_code_not_contains?: string | null;
  error_code_not_ends_with?: string | null;
  error_code_not_in?: string[] | null;
  error_code_not_starts_with?: string | null;
  error_code_starts_with?: string | null;
  error_message?: string | null;
  error_message_contains?: string | null;
  error_message_ends_with?: string | null;
  error_message_gt?: string | null;
  error_message_gte?: string | null;
  error_message_in?: string[] | null;
  error_message_lt?: string | null;
  error_message_lte?: string | null;
  error_message_not?: string | null;
  error_message_not_contains?: string | null;
  error_message_not_ends_with?: string | null;
  error_message_not_in?: string[] | null;
  error_message_not_starts_with?: string | null;
  error_message_starts_with?: string | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  key?: string | null;
  key_contains?: string | null;
  key_ends_with?: string | null;
  key_gt?: string | null;
  key_gte?: string | null;
  key_in?: string[] | null;
  key_lt?: string | null;
  key_lte?: string | null;
  key_not?: string | null;
  key_not_contains?: string | null;
  key_not_ends_with?: string | null;
  key_not_in?: string[] | null;
  key_not_starts_with?: string | null;
  key_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;

  /** @format double */
  progress?: number | null;

  /** @format double */
  progress_gt?: number | null;

  /** @format double */
  progress_gte?: number | null;
  progress_in?: number[] | null;

  /** @format double */
  progress_lt?: number | null;

  /** @format double */
  progress_lte?: number | null;

  /** @format double */
  progress_not?: number | null;
  progress_not_in?: number[] | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  resource_mutation?: string | null;
  resource_mutation_contains?: string | null;
  resource_mutation_ends_with?: string | null;
  resource_mutation_gt?: string | null;
  resource_mutation_gte?: string | null;
  resource_mutation_in?: string[] | null;
  resource_mutation_lt?: string | null;
  resource_mutation_lte?: string | null;
  resource_mutation_not?: string | null;
  resource_mutation_not_contains?: string | null;
  resource_mutation_not_ends_with?: string | null;
  resource_mutation_not_in?: string[] | null;
  resource_mutation_not_starts_with?: string | null;
  resource_mutation_starts_with?: string | null;
  resource_rollback_error?: string | null;
  resource_rollback_error_contains?: string | null;
  resource_rollback_error_ends_with?: string | null;
  resource_rollback_error_gt?: string | null;
  resource_rollback_error_gte?: string | null;
  resource_rollback_error_in?: string[] | null;
  resource_rollback_error_lt?: string | null;
  resource_rollback_error_lte?: string | null;
  resource_rollback_error_not?: string | null;
  resource_rollback_error_not_contains?: string | null;
  resource_rollback_error_not_ends_with?: string | null;
  resource_rollback_error_not_in?: string[] | null;
  resource_rollback_error_not_starts_with?: string | null;
  resource_rollback_error_starts_with?: string | null;

  /** @format int32 */
  resource_rollback_retry_count?: number | null;

  /** @format int32 */
  resource_rollback_retry_count_gt?: number | null;

  /** @format int32 */
  resource_rollback_retry_count_gte?: number | null;
  resource_rollback_retry_count_in?: number[] | null;

  /** @format int32 */
  resource_rollback_retry_count_lt?: number | null;

  /** @format int32 */
  resource_rollback_retry_count_lte?: number | null;

  /** @format int32 */
  resource_rollback_retry_count_not?: number | null;
  resource_rollback_retry_count_not_in?: number[] | null;
  resource_rollbacked?: boolean | null;
  resource_rollbacked_not?: boolean | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  snapshot?: string | null;
  snapshot_contains?: string | null;
  snapshot_ends_with?: string | null;
  snapshot_gt?: string | null;
  snapshot_gte?: string | null;
  snapshot_in?: string[] | null;
  snapshot_lt?: string | null;
  snapshot_lte?: string | null;
  snapshot_not?: string | null;
  snapshot_not_contains?: string | null;
  snapshot_not_ends_with?: string | null;
  snapshot_not_in?: string[] | null;
  snapshot_not_starts_with?: string | null;
  snapshot_starts_with?: string | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: TaskStatus | null;
  status_in?: TaskStatus[] | null;
  status_not?: TaskStatus | null;
  status_not_in?: TaskStatus[] | null;
  type?: TaskType | null;
  type_in?: TaskType[] | null;
  type_not?: TaskType | null;
  type_not_in?: TaskType[] | null;
  user?: UserWhereInput | null;
}

export enum TaskStatus {
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  PAUSED = "PAUSED",
  PENDING = "PENDING",
  SUCCESSED = "SUCCESSED",
}

export enum TaskType {
  APPLICATION = "APPLICATION",
  BACKUP = "BACKUP",
  HOST_PLUGIN = "HOST_PLUGIN",
  REPLICATION = "REPLICATION",
  RESOLVER = "RESOLVER",
  SFS = "SFS",
}

export interface StopVmInCutoverMigrationParams {
  force?: boolean;
  tasks: TaskWhereInput;
}

export enum StepUnit {
  BIT = "BIT",
  BYTE = "BYTE",
  COUNT = "COUNT",
  PERCENT = "PERCENT",
}

export interface NestedStep {
  /** @format double */
  current?: number | null;
  finished?: boolean | null;
  key?: string | null;

  /** @format double */
  per_second?: number | null;

  /** @format double */
  total?: number | null;
  unit?: StepUnit | null;
}

export interface Task {
  args: object;
  cluster?: NestedCluster | null;
  description: string;
  error_code?: string | null;
  error_message?: string | null;
  finished_at?: string | null;
  id: string;
  internal: boolean;
  key?: string | null;
  local_created_at: string;

  /** @format double */
  progress: number;
  resource_id?: string | null;
  resource_mutation?: string | null;
  resource_rollback_error?: string | null;

  /** @format int32 */
  resource_rollback_retry_count?: number | null;
  resource_rollbacked?: boolean | null;
  resource_type?: string | null;
  snapshot: string;
  started_at?: string | null;
  status: TaskStatus;
  steps: NestedStep[];
  type?: TaskType | null;
  user?: NestedUser | null;
}

export interface AbortMigrateVmAcrossClusterParams {
  tasks: TaskWhereInput;
}

export interface VmAddFolderParams {
  data: { folder_id: string };
  where: VmWhereInput;
}

export interface VmUpdateAdvancedOptionsParams {
  data: {
    video_type?: VmVideoType;
    windows_optimize?: boolean;
    cpu_model?: string;
    clock_offset?: VmClockOffset;
  };
  where: VmWhereInput;
}

export interface VmUpdateHostOptionsParams {
  data: { ntp_servers?: string[]; dns_servers?: string[]; hostname?: string };
  where: VmWhereInput;
}

export interface VmResetGuestOsPasswordParams {
  data: { password: string; username: string };
  where: VmWhereInput;
}

export interface VmUpdateOwnerParams {
  data: { search_for: "username" | "id"; value: string };
  where: VmWhereInput;
}

export interface VmRestrictIoParamsData {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;
}

export interface VmUpdateEachDiskIoPolicyParams {
  data: VmRestrictIoParamsData;

  /** @format int32 */
  boot: number;
}

export interface VmUpdateIoPolicyParams {
  data: {
    each_disk?: VmUpdateEachDiskIoPolicyParams[];
    whole_vm?: VmRestrictIoParamsData;
    io_policy?: VmDiskIoPolicy | null;
  };
  where: VmWhereInput;
}

export interface NestedContentLibraryVmTemplate {
  id: string;
  name: string;
}

export enum VmExportFileType {
  OVF = "OVF",
  QCOW2 = "QCOW2",
  RAW = "RAW",
}

export interface VmExportFileFile {
  md5: string;

  /** @format int64 */
  fileSize: number;
  fileSecret: string;
  fileUUID: string;
  type: VmExportFileType;
  fileName: string;
}

export interface NestedVmVolume {
  id: string;
  name: string;
}

export interface VmExportFile {
  content_library_vm_template?: NestedContentLibraryVmTemplate | null;
  createdAt: string;
  damaged: boolean;
  data_port_id: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  files: VmExportFileFile[];
  id: string;
  storage_cluster_id: string;
  type: VmExportFileType;
  vm?: NestedVm | null;
  vm_volume?: NestedVmVolume | null;
}

export interface WithTaskVmExportFile {
  task_id?: string | null;
  data: VmExportFile;
}

export interface VmExportParamsData {
  keep_mac?: boolean;
  type: VmExportFileType;
}

export interface VmExportParams {
  data: VmExportParamsData;
  where: VmWhereInput;
}

export interface VmdkDiskModify {
  elf_storage_policy?: VmVolumeElfStoragePolicyType;
  bus?: Bus;
  volume_name?: string;

  /** @format int32 */
  boot?: number;
  vmdk_name: string;
}

export interface VmdkCdromModify {
  removed?: boolean;
  content_library_image_id?: string;
  elf_image_id?: string;

  /** @format int32 */
  boot?: number;

  /** @format int32 */
  index: number;
}

export interface OvfDiskOperate {
  new_disks?: VmDiskParams;
  modify_cd_roms?: VmdkCdromModify[];
  modify_vmdk_disks?: VmdkDiskModify[];
}

export interface VmImportNicParams {
  subnet_mask?: string;
  gateway?: string;
  ip_address?: string;
  nic_id?: string;
  connect_vlan_id: string;
  mirror?: boolean;
  model?: VmNicModel;
  enabled?: boolean;
  mac_address?: string;
  local_id?: string;
}

export interface VmImportParams {
  max_bandwidth_policy?: VmDiskIoRestrictType;
  max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  max_bandwidth?: number;
  max_iops_policy?: VmDiskIoRestrictType;

  /** @format int64 */
  max_iops?: number;
  io_policy?: VmDiskIoPolicy;

  /** @format int32 */
  vcpu?: number;
  status?: VmStatus;
  ha?: boolean;
  vm_nics?: VmImportNicParams[];
  disk_operate?: OvfDiskOperate;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  guest_os_type?: VmGuestsOperationSystem;
  folder_id?: string;
  description?: string;
  name: string;
  host_id?: string;
  cluster_id: string;
  upload_tasks: string[];
  owner_id?: string;
  parsed_ovf: ParsedOVF;
}

export interface NestedGpuDriverInfo {
  filename?: string | null;
  name?: string | null;
  rhelversion?: string | null;
  srcversion?: string | null;
  supported?: string | null;
  vermagic?: string | null;
  version?: string | null;
}

export interface NestedVgpuType {
  /** @format double */
  framebuffer?: number | null;

  /** @format int32 */
  max_instance?: number | null;
  max_resolution?: string | null;
  name?: string | null;
  vgpu_type_id?: string | null;
}

export interface VmGpuDetail {
  /** @format int32 */
  vgpu_instance_on_vm_num?: number | null;

  /** @format int32 */
  vgpu_instance_num?: number | null;
  user_vgpu_type_name?: string | null;
  user_vgpu_type_id?: string | null;
  user_usage?: GpuDeviceUsage | null;
  status: GpuDeviceStatus;
  name: string;
  model: string;
  mdev_supported_types?: NestedVgpuType[] | null;
  local_id: string;
  local_created_at: string;
  labels?: NestedLabel[] | null;
  is_nvidia_vfs_supported?: boolean | null;
  is_nvidia_vfs_enabled?: boolean | null;
  is_nvidia_tools_ready?: boolean | null;
  id: string;
  host: NestedHost;
  entityAsyncStatus?: EntityAsyncStatus | null;
  driver_info?: NestedGpuDriverInfo | null;
  description: string;
  bus_location: string;
  brand: string;

  /** @format int32 */
  available_vgpus_num?: number | null;

  /** @format int32 */
  assigned_vgpus_num?: number | null;
}

export interface VmGpuInfo {
  gpu_devices: VmGpuDetail[];
  name: string;
  local_id: string;
  id: string;
}

export enum VmOrderByInput {
  BiosUuidASC = "bios_uuid_ASC",
  BiosUuidDESC = "bios_uuid_DESC",
  ClockOffsetASC = "clock_offset_ASC",
  ClockOffsetDESC = "clock_offset_DESC",
  CloudInitSupportedASC = "cloud_init_supported_ASC",
  CloudInitSupportedDESC = "cloud_init_supported_DESC",
  CpuASC = "cpu_ASC",
  CpuDESC = "cpu_DESC",
  CpuModelASC = "cpu_model_ASC",
  CpuModelDESC = "cpu_model_DESC",
  CpuUsageASC = "cpu_usage_ASC",
  CpuUsageDESC = "cpu_usage_DESC",
  DeletedAtASC = "deleted_at_ASC",
  DeletedAtDESC = "deleted_at_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  DnsServersASC = "dns_servers_ASC",
  DnsServersDESC = "dns_servers_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FirmwareASC = "firmware_ASC",
  FirmwareDESC = "firmware_DESC",
  GuestCpuModelASC = "guest_cpu_model_ASC",
  GuestCpuModelDESC = "guest_cpu_model_DESC",
  GuestOsTypeASC = "guest_os_type_ASC",
  GuestOsTypeDESC = "guest_os_type_DESC",
  GuestSizeUsageASC = "guest_size_usage_ASC",
  GuestSizeUsageDESC = "guest_size_usage_DESC",
  GuestUsedSizeASC = "guest_used_size_ASC",
  GuestUsedSizeDESC = "guest_used_size_DESC",
  HaASC = "ha_ASC",
  HaDESC = "ha_DESC",
  HostnameASC = "hostname_ASC",
  HostnameDESC = "hostname_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InRecycleBinASC = "in_recycle_bin_ASC",
  InRecycleBinDESC = "in_recycle_bin_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  IoPolicyASC = "io_policy_ASC",
  IoPolicyDESC = "io_policy_DESC",
  IpsASC = "ips_ASC",
  IpsDESC = "ips_DESC",
  KernelInfoASC = "kernel_info_ASC",
  KernelInfoDESC = "kernel_info_DESC",
  LastShutdownTimeASC = "last_shutdown_time_ASC",
  LastShutdownTimeDESC = "last_shutdown_time_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LogicalSizeBytesASC = "logical_size_bytes_ASC",
  LogicalSizeBytesDESC = "logical_size_bytes_DESC",
  MaxBandwidthASC = "max_bandwidth_ASC",
  MaxBandwidthDESC = "max_bandwidth_DESC",
  MaxBandwidthPolicyASC = "max_bandwidth_policy_ASC",
  MaxBandwidthPolicyDESC = "max_bandwidth_policy_DESC",
  MaxIopsASC = "max_iops_ASC",
  MaxIopsDESC = "max_iops_DESC",
  MaxIopsPolicyASC = "max_iops_policy_ASC",
  MaxIopsPolicyDESC = "max_iops_policy_DESC",
  MemoryASC = "memory_ASC",
  MemoryDESC = "memory_DESC",
  MemoryUsageASC = "memory_usage_ASC",
  MemoryUsageDESC = "memory_usage_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NestedVirtualizationASC = "nested_virtualization_ASC",
  NestedVirtualizationDESC = "nested_virtualization_DESC",
  NodeIpASC = "node_ip_ASC",
  NodeIpDESC = "node_ip_DESC",
  OriginalNameASC = "original_name_ASC",
  OriginalNameDESC = "original_name_DESC",
  OsASC = "os_ASC",
  OsDESC = "os_DESC",
  ProtectedASC = "protected_ASC",
  ProtectedDESC = "protected_DESC",
  ProvisionedSizeASC = "provisioned_size_ASC",
  ProvisionedSizeDESC = "provisioned_size_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  UniqueLogicalSizeASC = "unique_logical_size_ASC",
  UniqueLogicalSizeDESC = "unique_logical_size_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
  VcpuASC = "vcpu_ASC",
  VcpuDESC = "vcpu_DESC",
  VideoTypeASC = "video_type_ASC",
  VideoTypeDESC = "video_type_DESC",
  VmToolsStatusASC = "vm_tools_status_ASC",
  VmToolsStatusDESC = "vm_tools_status_DESC",
  VmToolsVersionASC = "vm_tools_version_ASC",
  VmToolsVersionDESC = "vm_tools_version_DESC",
  VmUsageASC = "vm_usage_ASC",
  VmUsageDESC = "vm_usage_DESC",
  WinOptASC = "win_opt_ASC",
  WinOptDESC = "win_opt_DESC",
}

export interface GetVmsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmWhereInput | null;
}

export interface VmVncInfo {
  vm: Vm;
  terminal: string;
  redirect: string;
  direct?: string;
  cluster_ip: string;
}

export interface VmWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface GetVmVncInfoParams {
  vm: VmWhereUniqueInput;
}

export interface ContentLibraryVmTemplate {
  architecture: Architecture;
  cloud_init_supported: boolean;
  clusters?: NestedCluster[] | null;
  createdAt: string;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;

  /** @format int64 */
  memory: number;
  name: string;
  os?: string | null;

  /** @format int64 */
  size: number;

  /** @format int32 */
  vcpu: number;
  vm_template_uuids: string[];
  vm_templates?: NestedVmTemplate[] | null;
}

export interface WithTaskContentLibraryVmTemplate {
  task_id?: string | null;
  data: ContentLibraryVmTemplate;
}

export interface ContentLibraryVmTemplateCreationParams {
  clusters: ClusterWhereInput;
  cloud_init_supported?: boolean;
  vm: VmWhereUniqueInput;
  description?: string;
  name: string;
}

export interface ContentLibraryVmTemplateUpdationParamsData {
  clusters?: ClusterWhereInput;
  cloud_init_supported?: boolean;
  description?: string;
  name?: string;
}

export interface ContentLibraryVmTemplateUpdationParams {
  data: ContentLibraryVmTemplateUpdationParamsData;
  where: ContentLibraryVmTemplateWhereInput;
}

export interface ContentLibraryVmTemplateUpdationClusterParamsData {
  clusters: ClusterWhereInput;
}

export interface ContentLibraryVmTemplateUpdationClusterParams {
  data: ContentLibraryVmTemplateUpdationClusterParamsData;
  where: ContentLibraryVmTemplateWhereInput;
}

export interface DeleteContentLibraryVmTemplate {
  id: string;
}

export interface WithTaskDeleteContentLibraryVmTemplate {
  task_id?: string | null;
  data: DeleteContentLibraryVmTemplate;
}

export interface ContentLibraryVmTemplateDeletionParams {
  where: ContentLibraryVmTemplateWhereInput;
}

export interface ContentLibraryVmTemplateExportParams {
  where: ContentLibraryVmTemplateWhereInput;
}

export interface ContentLibraryVmdkCdromModify {
  enabled?: boolean;
  removed?: boolean;

  /** @format int32 */
  boot?: number;

  /** @format int32 */
  index: number;
}

export interface ContentLibraryVmdkCdromMount {
  enabled?: boolean;

  /** @format int32 */
  boot?: number;
}

export interface ContentLibraryVmTemplateOvfDiskOperate {
  mount_new_cd_roms?: ContentLibraryVmdkCdromMount[];
  modify_cd_roms?: ContentLibraryVmdkCdromModify[];
  modify_vmdk_disks?: VmdkDiskModify[];
}

export interface ContentLibraryImportVmNic {
  mirror?: boolean;
  model: VmNicModel;
  enabled?: boolean;
}

export interface ContentLibraryVmTemplateImportParams {
  vm_nics?: ContentLibraryImportVmNic[];
  disk_operate?: ContentLibraryVmTemplateOvfDiskOperate;
  ha?: boolean;
  memory_unit?: ByteUnit;

  /** @format int64 */
  memory?: number;

  /** @format int32 */
  vcpu?: number;

  /** @format int32 */
  cpu_cores?: number;

  /** @format int32 */
  cpu_sockets?: number;
  description?: string;
  name: string;
  upload_tasks: string[];
  parsed_ovf: ParsedOVF;
  cluster_id: string;
}

export interface NestedOrganization {
  id: string;
  name: string;
}

export interface Datacenter {
  /** @format int32 */
  cluster_num?: number | null;
  clusters?: NestedCluster[] | null;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int32 */
  host_num?: number | null;
  id: string;
  labels?: NestedLabel[] | null;
  name: string;
  organization: NestedOrganization;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format int32 */
  vm_num?: number | null;
}

export interface WithTaskDatacenter {
  task_id?: string | null;
  data: Datacenter;
}

export interface DatacenterCreationParams {
  clusters?: ClusterWhereInput;
  organization_id: string;
  name: string;
}

export interface DatacenterUpdationParams {
  data: { clusters?: ClusterWhereInput; name?: string };
  where: DatacenterWhereInput;
}

export interface DatacenterWhereUniqueInput {
  id?: string | null;
}

export interface AddClustersToDatacenterParams {
  data: { clusters?: ClusterWhereInput };
  where: DatacenterWhereUniqueInput;
}

export interface RemoveClustersFromDatacenterParams {
  data: { clusters?: ClusterWhereInput };
  where: DatacenterWhereUniqueInput;
}

export interface DeleteDatacenter {
  id: string;
}

export interface WithTaskDeleteDatacenter {
  task_id?: string | null;
  data: DeleteDatacenter;
}

export interface DatacenterDeletionParams {
  where: DatacenterWhereInput;
}

export interface NestedDiskFailureInformation {
  chunk_checksum_error?: boolean | null;
  chunk_errflag?: boolean | null;
  chunk_io_error?: boolean | null;
  chunk_warnflag?: boolean | null;
  iostat_latency?: boolean | null;

  /** @format int64 */
  iostat_latency_ms?: number | null;
  smart_check?: boolean | null;
}

export enum PartitionUsage {
  BOOT = "BOOT",
  CACHE = "CACHE",
  JOURNAL = "JOURNAL",
  METAD = "METAD",
  PARTITION = "PARTITION",
  SWAP = "SWAP",
  SYSTEM = "SYSTEM",
  UNMOUNTED = "UNMOUNTED",
  UNPARTED = "UNPARTED",
  ZOOKEEPER = "ZOOKEEPER",
}

export interface NestedPartition {
  name?: string | null;
  path?: string | null;

  /** @format int64 */
  size: number;
  usage: PartitionUsage;

  /** @format int64 */
  used_size: number;
}

export interface NestedPmemDimm {
  id: string;
  name: string;
}

export interface Disk {
  entityAsyncStatus?: EntityAsyncStatus | null;
  failure_information?: NestedDiskFailureInformation | null;
  firmware: string;
  function?: DiskFunction | null;
  health_status?: DiskHealthStatus | null;
  healthy: boolean;
  host: NestedHost;
  id: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  model: string;
  mounted: boolean;
  name: string;

  /** @format int32 */
  numa_node?: number | null;
  offline: boolean;
  partitions: NestedPartition[];
  path: string;
  persistent_memory_type?: string | null;

  /** @format int32 */
  physical_slot_on_brick?: number | null;
  pmem_dimms?: NestedPmemDimm[] | null;
  recommended_usage?: DiskUsage | null;

  /** @format int32 */
  remaining_life_percent?: number | null;
  serial: string;

  /** @format int64 */
  size: number;
  type: DiskType;
  usage: DiskUsage;
  usage_status?: DiskUsageStatus | null;
}

export interface WithTaskDisk {
  task_id?: string | null;
  data: Disk;
}

export interface DiskMountParams {
  data: { function: DiskFunction };
  where: DiskWhereInput;
}

export interface DiskUnmountParams {
  where: DiskWhereInput;
}

export enum FilterRuleAggregationEnum {
  AVG = "AVG",
  MAX = "MAX",
  MIN = "MIN",
  QUANTILE = "QUANTILE",
  SUM = "SUM",
}

export enum FilterRuleMetricEnum {
  VM_CPU_USAGE = "VM_CPU_USAGE",
  VM_MEMORY_USAGE = "VM_MEMORY_USAGE",
  VM_POWEROFF_DAYS = "VM_POWEROFF_DAYS",
  VM_POWERON_DAYS = "VM_POWERON_DAYS",
  VM_READWRITE_IO = "VM_READWRITE_IO",
}

export enum FilterRuleOpEnum {
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
}

export interface NestedFilterRule {
  aggregation: FilterRuleAggregationEnum;

  /** @format int32 */
  duration: number;
  metric: FilterRuleMetricEnum;
  op: FilterRuleOpEnum;

  /** @format int32 */
  quantile: number;

  /** @format double */
  threshold: number;
}

export interface EntityFilter {
  apply_to_all_clusters?: boolean | null;
  clusters?: NestedCluster[] | null;
  entity_type: EntityType;
  exclude_ids: string[];
  exec_failed_cluster?: NestedCluster[] | null;
  filter_error: string[];
  filter_status: FilterStatus;
  id: string;
  ids: string[];
  last_executed_at?: string | null;
  name: string;
  preset?: string | null;
  rules: NestedFilterRule[];
}

export interface WithTaskEntityFilter {
  task_id?: string | null;
  data: EntityFilter;
}

export interface FilterRuleInput {
  /** @format double */
  threshold: number;

  /** @format int32 */
  quantile: number;
  op: FilterRuleOpEnum;
  metric: FilterRuleMetricEnum;

  /** @format int32 */
  duration: number;
  aggregation: FilterRuleAggregationEnum;
}

export interface EntityFilterCreationParams {
  exclude_vms?: VmWhereInput;
  clusters?: ClusterWhereInput;
  apply_to_all_clusters?: boolean;
  rules: FilterRuleInput[];
  name: string;
}

export interface EntityFilterUpdationParams {
  data: {
    exclude_vms?: VmWhereInput;
    clusters?: ClusterWhereInput;
    apply_to_all_clusters?: boolean;
    rules?: FilterRuleInput[];
    name?: string;
  };
  where: EntityFilterWhereInput;
}

export interface DeleteEntityFilter {
  id: string;
}

export interface WithTaskDeleteEntityFilter {
  task_id?: string | null;
  data: DeleteEntityFilter;
}

export interface EntityFilterDeletionParams {
  where: EntityFilterWhereInput;
}

export interface GpuDevice {
  /** @format int32 */
  assigned_vgpus_num?: number | null;

  /** @format int32 */
  available_vgpus_num?: number | null;
  brand: string;
  bus_location: string;
  description: string;
  driver_info?: NestedGpuDriverInfo | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  host: NestedHost;
  id: string;
  is_nvidia_tools_ready?: boolean | null;
  is_nvidia_vfs_enabled?: boolean | null;
  is_nvidia_vfs_supported?: boolean | null;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  mdev_supported_types?: NestedVgpuType[] | null;
  model: string;
  name: string;
  status: GpuDeviceStatus;
  user_usage?: GpuDeviceUsage | null;
  user_vgpu_type_id?: string | null;
  user_vgpu_type_name?: string | null;

  /** @format int32 */
  vgpu_instance_num?: number | null;
  vms?: NestedVm[] | null;
}

export interface WithTaskGpuDevice {
  task_id?: string | null;
  data: GpuDevice;
}

export interface GpuDeviceUsageUpdationParams {
  data: { vgpu_spec?: string; usage?: GpuDeviceUsage };
  where: GpuDeviceWhereInput;
}

export interface GpuDeviceDescriptionUpdationParams {
  data: { description: string };
  where: GpuDeviceWhereInput;
}

export interface GpuDeviceSriovSwitchParams {
  data: { enable: boolean };
  where: GpuDeviceWhereInput;
}

export interface GpuVmDetail {
  /** @format int32 */
  vgpu_instance_on_vm_num?: number;
  win_opt: boolean;
  vm_usage?: VmUsage | null;
  vm_tools_version?: string | null;
  vm_tools_status: VmToolsStatus;
  vm_placement_group?: NestedVmPlacementGroup[] | null;
  vm_nics?: NestedVmNic[] | null;
  vm_disks?: NestedVmDisk[] | null;
  video_type?: VmVideoType | null;

  /** @format int32 */
  vcpu: number;
  usb_devices?: NestedUsbDevice[] | null;

  /** @format int64 */
  unique_size?: number | null;
  status: VmStatus;
  snapshots?: NestedVmSnapshot[] | null;
  snapshot_plan?: NestedSnapshotPlan | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  provisioned_size?: number | null;
  protected: boolean;
  pci_nics?: NestedNic[] | null;
  out_uninstall_usb: string[];
  os?: string | null;
  original_name?: string | null;
  node_ip: string;
  nested_virtualization: boolean;
  name: string;

  /** @format double */
  memory_usage?: number | null;

  /** @format int64 */
  memory: number;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int64 */
  max_bandwidth?: number | null;

  /** @format int64 */
  logical_size_bytes?: number | null;
  local_id: string;
  local_created_at?: string | null;
  last_shutdown_time?: string | null;
  labels?: NestedLabel[] | null;
  kernel_info?: string | null;
  isolation_policy?: NestedIsolationPolicy | null;
  ips: string;
  io_policy?: VmDiskIoPolicy | null;
  internal: boolean;
  in_recycle_bin: boolean;
  id: string;
  hostname?: string | null;
  host?: NestedHost | null;
  ha: boolean;

  /** @format int64 */
  guest_used_size?: number | null;

  /** @format double */
  guest_size_usage?: number | null;
  guest_os_type?: VmGuestsOperationSystem | null;
  guest_cpu_model?: string | null;
  gpu_devices?: NestedGpuDevice[] | null;
  folder?: NestedVmFolder | null;
  firmware: VmFirmware;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entity_filter_results?: NestedVmEntityFilterResult[] | null;
  dns_servers?: string | null;
  description: string;
  deleted_at?: string | null;

  /** @format double */
  cpu_usage?: number | null;
  cpu_model: string;
  cpu: NestedCpu;
  cluster?: NestedCluster | null;
  cloud_init_supported?: boolean | null;
  clock_offset: VmClockOffset;
}

export interface GpuVmInfo {
  vms: GpuVmDetail[];

  /** @format int32 */
  vgpu_instance_num?: number | null;
  user_vgpu_type_name?: string | null;
  user_vgpu_type_id?: string | null;
  user_usage?: GpuDeviceUsage | null;
  status: GpuDeviceStatus;
  name: string;
  model: string;
  mdev_supported_types?: NestedVgpuType[] | null;
  local_id: string;
  local_created_at: string;
  labels?: NestedLabel[] | null;
  is_nvidia_vfs_supported?: boolean | null;
  is_nvidia_vfs_enabled?: boolean | null;
  is_nvidia_tools_ready?: boolean | null;
  id: string;
  host: NestedHost;
  entityAsyncStatus?: EntityAsyncStatus | null;
  driver_info?: NestedGpuDriverInfo | null;
  description: string;
  bus_location: string;
  brand: string;

  /** @format int32 */
  available_vgpus_num?: number | null;

  /** @format int32 */
  assigned_vgpus_num?: number | null;
}

export enum GpuDeviceOrderByInput {
  AssignedVgpusNumASC = "assigned_vgpus_num_ASC",
  AssignedVgpusNumDESC = "assigned_vgpus_num_DESC",
  AvailableVgpusNumASC = "available_vgpus_num_ASC",
  AvailableVgpusNumDESC = "available_vgpus_num_DESC",
  BrandASC = "brand_ASC",
  BrandDESC = "brand_DESC",
  BusLocationASC = "bus_location_ASC",
  BusLocationDESC = "bus_location_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  DriverInfoASC = "driver_info_ASC",
  DriverInfoDESC = "driver_info_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IsNvidiaToolsReadyASC = "is_nvidia_tools_ready_ASC",
  IsNvidiaToolsReadyDESC = "is_nvidia_tools_ready_DESC",
  IsNvidiaVfsEnabledASC = "is_nvidia_vfs_enabled_ASC",
  IsNvidiaVfsEnabledDESC = "is_nvidia_vfs_enabled_DESC",
  IsNvidiaVfsSupportedASC = "is_nvidia_vfs_supported_ASC",
  IsNvidiaVfsSupportedDESC = "is_nvidia_vfs_supported_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MdevSupportedTypesASC = "mdev_supported_types_ASC",
  MdevSupportedTypesDESC = "mdev_supported_types_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  UserUsageASC = "user_usage_ASC",
  UserUsageDESC = "user_usage_DESC",
  UserVgpuTypeIdASC = "user_vgpu_type_id_ASC",
  UserVgpuTypeIdDESC = "user_vgpu_type_id_DESC",
  UserVgpuTypeNameASC = "user_vgpu_type_name_ASC",
  UserVgpuTypeNameDESC = "user_vgpu_type_name_DESC",
  VgpuInstanceNumASC = "vgpu_instance_num_ASC",
  VgpuInstanceNumDESC = "vgpu_instance_num_DESC",
}

export interface GetGpuDevicesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GpuDeviceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GpuDeviceWhereInput | null;
}

export enum MetricType {
  BOTTOMK = "BOTTOMK",
  NORMAL = "NORMAL",
  TOPK = "TOPK",
}

export enum GraphType {
  AREA = "AREA",
  STACK = "STACK",
}

export interface NestedView {
  id: string;
  name: string;
}

export interface Graph {
  cluster?: NestedCluster | null;
  disks?: NestedDisk[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  hosts?: NestedHost[] | null;
  id: string;
  instance_ids: string[];
  local_id: string;
  luns?: NestedIscsiLun[] | null;

  /** @format int32 */
  metric_count: number;
  metric_name: string;
  metric_type: MetricType;
  namespaces?: NestedNvmfNamespace[] | null;
  network?: NetworkType | null;
  nics?: NestedNic[] | null;
  resource_type: string;
  service?: string | null;
  targets: object;
  title: string;
  type: GraphType;
  view: NestedView;
  vmNics?: NestedVmNic[] | null;
  vmVolumes?: NestedVmVolume[] | null;
  vms?: NestedVm[] | null;
  witnesses?: NestedWitness[] | null;
  zones?: NestedZone[] | null;
}

export interface WithTaskGraph {
  task_id?: string | null;
  data: Graph;
}

export interface GraphCreationParams {
  instance_ids?: string[];
  network?: NetworkType;
  service?: string;
  metric_type?: MetricType;

  /** @format int32 */
  metric_count?: number;
  type: GraphType;
  resource_type: string;
  view_id: string;
  title: string;
  cluster_id: string;
  connect_id: string[];
  metric_name: string;
}

export interface GraphWhereInput {
  AND?: GraphWhereInput[] | null;
  NOT?: GraphWhereInput[] | null;
  OR?: GraphWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  disks_every?: DiskWhereInput | null;
  disks_none?: DiskWhereInput | null;
  disks_some?: DiskWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  luns_every?: IscsiLunWhereInput | null;
  luns_none?: IscsiLunWhereInput | null;
  luns_some?: IscsiLunWhereInput | null;

  /** @format int32 */
  metric_count?: number | null;

  /** @format int32 */
  metric_count_gt?: number | null;

  /** @format int32 */
  metric_count_gte?: number | null;
  metric_count_in?: number[] | null;

  /** @format int32 */
  metric_count_lt?: number | null;

  /** @format int32 */
  metric_count_lte?: number | null;

  /** @format int32 */
  metric_count_not?: number | null;
  metric_count_not_in?: number[] | null;
  metric_name?: string | null;
  metric_name_contains?: string | null;
  metric_name_ends_with?: string | null;
  metric_name_gt?: string | null;
  metric_name_gte?: string | null;
  metric_name_in?: string[] | null;
  metric_name_lt?: string | null;
  metric_name_lte?: string | null;
  metric_name_not?: string | null;
  metric_name_not_contains?: string | null;
  metric_name_not_ends_with?: string | null;
  metric_name_not_in?: string[] | null;
  metric_name_not_starts_with?: string | null;
  metric_name_starts_with?: string | null;
  metric_type?: MetricType | null;
  metric_type_in?: MetricType[] | null;
  metric_type_not?: MetricType | null;
  metric_type_not_in?: MetricType[] | null;
  namespaces_every?: NvmfNamespaceWhereInput | null;
  namespaces_none?: NvmfNamespaceWhereInput | null;
  namespaces_some?: NvmfNamespaceWhereInput | null;
  network?: NetworkType | null;
  network_in?: NetworkType[] | null;
  network_not?: NetworkType | null;
  network_not_in?: NetworkType[] | null;
  nics_every?: NicWhereInput | null;
  nics_none?: NicWhereInput | null;
  nics_some?: NicWhereInput | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  service?: string | null;
  service_contains?: string | null;
  service_ends_with?: string | null;
  service_gt?: string | null;
  service_gte?: string | null;
  service_in?: string[] | null;
  service_lt?: string | null;
  service_lte?: string | null;
  service_not?: string | null;
  service_not_contains?: string | null;
  service_not_ends_with?: string | null;
  service_not_in?: string[] | null;
  service_not_starts_with?: string | null;
  service_starts_with?: string | null;
  title?: string | null;
  title_contains?: string | null;
  title_ends_with?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_not?: string | null;
  title_not_contains?: string | null;
  title_not_ends_with?: string | null;
  title_not_in?: string[] | null;
  title_not_starts_with?: string | null;
  title_starts_with?: string | null;
  type?: GraphType | null;
  type_in?: GraphType[] | null;
  type_not?: GraphType | null;
  type_not_in?: GraphType[] | null;
  view?: ViewWhereInput | null;
  vmNics_every?: VmNicWhereInput | null;
  vmNics_none?: VmNicWhereInput | null;
  vmNics_some?: VmNicWhereInput | null;
  vmVolumes_every?: VmVolumeWhereInput | null;
  vmVolumes_none?: VmVolumeWhereInput | null;
  vmVolumes_some?: VmVolumeWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
  witnesses_every?: WitnessWhereInput | null;
  witnesses_none?: WitnessWhereInput | null;
  witnesses_some?: WitnessWhereInput | null;
  zones_every?: ZoneWhereInput | null;
  zones_none?: ZoneWhereInput | null;
  zones_some?: ZoneWhereInput | null;
}

export interface ViewWhereInput {
  AND?: ViewWhereInput[] | null;
  NOT?: ViewWhereInput[] | null;
  OR?: ViewWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  graphs_every?: GraphWhereInput | null;
  graphs_none?: GraphWhereInput | null;
  graphs_some?: GraphWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  time_span?: number | null;

  /** @format int32 */
  time_span_gt?: number | null;

  /** @format int32 */
  time_span_gte?: number | null;
  time_span_in?: number[] | null;

  /** @format int32 */
  time_span_lt?: number | null;

  /** @format int32 */
  time_span_lte?: number | null;

  /** @format int32 */
  time_span_not?: number | null;
  time_span_not_in?: number[] | null;
  time_unit?: TimeUnit | null;
  time_unit_in?: TimeUnit[] | null;
  time_unit_not?: TimeUnit | null;
  time_unit_not_in?: TimeUnit[] | null;
}

export enum TimeUnit {
  DAY = "DAY",
  HOUR = "HOUR",
  MONTH = "MONTH",
}

export interface GraphUpdationParams {
  data?: {
    instance_ids?: string[];
    luns?: IscsiLunWhereInput;
    vmNics?: VmNicWhereInput;
    nics?: NicWhereInput;
    disks?: DiskWhereInput;
    vmVolumes?: VmVolumeWhereInput;
    vms?: VmWhereInput;
    hosts?: HostWhereInput;
    network?: NetworkType;
    cluster?: ClusterWhereInput;
    service?: string;
    metric_type?: MetricType;
    metric_count?: number;
    type?: GraphType;
    resource_type?: string;
    title?: string;
    metric_name?: string;
    connect_id?: string[];
  };
  where: GraphWhereInput;
}

export interface DeleteGraph {
  id: string;
}

export interface WithTaskDeleteGraph {
  task_id?: string | null;
  data: DeleteGraph;
}

export interface GraphDeletionParams {
  where: GraphWhereInput;
}

export interface NestedTask {
  args: object;
  description: string;
  id: string;
  internal: boolean;
  local_created_at: string;

  /** @format double */
  progress: number;
  snapshot: string;
  status: TaskStatus;
  steps: NestedStep[];
}

export interface BatchHosts {
  task: NestedTask;
}

export interface WithTaskBatchHosts {
  task_id?: string | null;
  data: BatchHosts;
}

export interface HostBatchCreateIpmiInput {
  username: string;
  password: string;
  ip: string;
}

export interface HostBatchCreateDiskInput {
  type?: DiskType | null;
  function?: DiskFunction | null;
  drive: string;
}

export enum HostBatchCreateIfaceFunction {
  ACCESS = "ACCESS",
  MANAGEMENT = "MANAGEMENT",
  MIGRATION = "MIGRATION",
  STORAGE = "STORAGE",
  VMWARE_ACCESS = "VMWARE_ACCESS",
}

export interface HostBatchCreateIfaceInput {
  netmask: string;
  name: string[];
  ip: string;
  gateway_ip: string;
  function: HostBatchCreateIfaceFunction;
}

export enum ZbsSpec {
  Normal = "normal",
  Large = "large",
}

export interface HostVdsConfig {
  nics: string[];
  name: string;
}

export interface HostCreationParamsData {
  vdses?: HostVdsConfig[];
  zbs_spec?: ZbsSpec;
  ifaces: HostBatchCreateIfaceInput[];
  disks: HostBatchCreateDiskInput[];
  platform_password?: string;
  platform_username?: string;
  platform_ip?: string;
  ipmi?: HostBatchCreateIpmiInput;
  hostname: string;
  host_uuid: string;
  host_ip: string;
}

export interface HostCreationParams {
  data: HostCreationParamsData[];
  cluster_id: string;
}

export enum MaintenanceModeEnum {
  ENTERING_MAINTENANCE_MODE = "ENTERING_MAINTENANCE_MODE",
  IN_USE = "IN_USE",
  MAINTENANCE_MODE = "MAINTENANCE_MODE",
  REMOVING = "REMOVING",
}

export interface NestedMaintenanceHostState {
  enter_maintenance_time: string;
  maintenance_job_id: string;
  state: MaintenanceModeEnum;
}

export interface NestedIpmi {
  id: string;
}

export interface NestedVsphereEsxiAccount {
  id: string;
}

export interface Host {
  access_ip?: string | null;

  /** @format int32 */
  allocable_cpu_cores_for_vm_exclusive?: number | null;

  /** @format int64 */
  allocatable_memory_bytes: number;
  chunk_id: string;
  cluster: NestedCluster;
  compatible_cpu_models: string[];
  cpu_brand: string;
  cpu_fan_speed: number[];
  cpu_fan_speed_unit?: CpuFanSpeedUnit | null;

  /** @format int64 */
  cpu_hz_per_core: number;
  cpu_model: string;
  cpu_temperature_celsius: number[];
  cpu_vendor?: string | null;
  data_ip?: string | null;
  disks?: NestedDisk[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;

  /** @format int64 */
  failure_data_space: number;
  gpu_devices?: NestedGpuDevice[] | null;

  /** @format int64 */
  hdd_data_capacity: number;

  /** @format int32 */
  hdd_disk_count: number;
  host_state?: NestedMaintenanceHostState | null;
  hypervisor_ip?: string | null;
  id: string;
  iommu?: IommuStatus | null;
  ipmi?: NestedIpmi | null;
  is_os_in_raid1?: boolean | null;
  labels?: NestedLabel[] | null;
  local_id: string;
  lsm_cap_disk_safe_umount: boolean;
  management_ip: string;
  model: string;
  name: string;
  nested_virtualization: boolean;

  /** @format int32 */
  nic_count: number;
  nics?: NestedNic[] | null;
  node_topo_local_id?: string | null;

  /** @format int64 */
  os_memory_bytes: number;
  os_version?: string | null;

  /** @format int64 */
  pmem_dimm_capacity: number;

  /** @format int32 */
  pmem_dimm_count: number;
  pmem_dimms?: NestedPmemDimm[] | null;

  /** @format int32 */
  pmem_disk_count: number;

  /** @format int32 */
  provisioned_cpu_cores: number;

  /** @format int64 */
  provisioned_memory_bytes: number;

  /** @format int64 */
  running_pause_vm_memory_bytes: number;

  /** @format int32 */
  running_vm_num?: number | null;

  /** @format int32 */
  scvm_cpu?: number | null;

  /** @format int64 */
  scvm_memory?: number | null;
  scvm_name?: string | null;
  serial?: string | null;

  /** @format int64 */
  ssd_data_capacity: number;

  /** @format int32 */
  ssd_disk_count: number;
  state: HostState;
  status: HostStatus;

  /** @format int32 */
  stopped_vm_num?: number | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int32 */
  total_cpu_cores: number;

  /** @format int64 */
  total_cpu_hz: number;

  /** @format int32 */
  total_cpu_sockets?: number | null;

  /** @format int64 */
  total_data_capacity: number;

  /** @format int64 */
  total_memory_bytes: number;
  usb_devices?: NestedUsbDevice[] | null;

  /** @format double */
  used_cpu_hz?: number | null;

  /** @format int64 */
  used_data_space: number;

  /** @format double */
  used_memory_bytes?: number | null;

  /** @format int32 */
  vm_num?: number | null;
  vmotion_ip?: string | null;
  vms?: NestedVm[] | null;
  vsphereEsxiAccount?: NestedVsphereEsxiAccount | null;
  with_faster_ssd_as_cache?: boolean | null;
  zone?: NestedZone | null;
}

export interface WithTaskHost {
  task_id?: string | null;
  data: Host;
}

export interface TriggerDiskBlinkParams {
  led_status?: "on" | "off";
  disk_name: string;
  host_id: string;
}

export interface HostUpdationParams {
  data: { ipmi?: HostBatchCreateIpmiInput; scvm_name?: string; name?: string };
  where: HostWhereInput;
}

export enum OperateActionEnum {
  Poweroff = "poweroff",
  Reboot = "reboot",
}

export interface OperateHostPowerData {
  reason?: string;
  force: boolean;
  action: OperateActionEnum;
}

export interface OperateHostPowerParams {
  data: OperateHostPowerData;
  where: { host_id: string };
}

export interface EnterMaintenanceModeCheckResult {
  task_id: string;
}

export interface EnterMaintenanceModeCheckParams {
  where: HostWhereInput;
}

export interface ShutdownVmID {
  vm_uuid: string;
}

export interface EnterMaintenanceModeResult {
  shutdownVms: ShutdownVmID[];
  done: boolean;
}

export interface EnterMaintenanceModeResultParams {
  where: { task_id: string };
}

export interface EnterMaintenanceModeInput {
  shutdown_vms?: string[];
}

export interface EnterMaintenanceModeParams {
  data: EnterMaintenanceModeInput;
  where: { host_id: string };
}

export interface MaintenanceModeVerify {
  reason?: string | null;
  changed?: boolean | null;
}

export interface MaintenanceModeVmInfo {
  vm_uuid?: string | null;
  vm_state?: string | null;
  vm_name?: string | null;
  vm_ha?: boolean | null;
  verify?: MaintenanceModeVerify | null;
  target_host_name?: string | null;
  state?: string | null;
}

export interface ExitMaintenanceModeResult {
  offlineMigrateVms: MaintenanceModeVmInfo[];
  liveMigrateVms: MaintenanceModeVmInfo[];
  shutDownVms: MaintenanceModeVmInfo[];
}

export interface ExitMaintenanceModeResultParams {
  where: HostWhereInput;
}

export interface ExitMaintenanceModeInput {
  poweron_vms?: string[];
  offline_migrate_back_vms?: string[];
  live_migrate_back_vms?: string[];
}

export interface ExitMaintenanceModeParams {
  data: ExitMaintenanceModeInput;
  where: { host_id: string };
}

export interface NestedIscsiTarget {
  id: string;
  name: string;
}

export interface IscsiLunSnapshot {
  consistency_group_snapshot?: NestedConsistencyGroupSnapshot | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  iscsi_lun?: NestedIscsiLun | null;
  iscsi_target: NestedIscsiTarget;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;

  /** @format int64 */
  unique_size: number;
}

export interface WithTaskIscsiLunSnapshot {
  task_id?: string | null;
  data: IscsiLunSnapshot;
}

export interface IscsiLunSnapshotCreationEffect {
  sync?: boolean;
}

export interface IscsiLunSnapshotCreationParams {
  effect?: IscsiLunSnapshotCreationEffect;
  iscsi_target_id: string;
  name: string;
  iscsi_lun_id: string;
}

export interface DeleteIscsiLunSnapshot {
  id: string;
}

export interface WithTaskDeleteIscsiLunSnapshot {
  task_id?: string | null;
  data: DeleteIscsiLunSnapshot;
}

export interface IscsiLunSnapshotDeletionParams {
  where: IscsiLunSnapshotWhereInput;
}

export interface IscsiLun {
  allowed_initiators: string;

  /** @format int64 */
  assigned_size: number;

  /** @format int64 */
  bps: number;

  /** @format int64 */
  bps_max: number;

  /** @format int64 */
  bps_max_length: number;

  /** @format int64 */
  bps_rd: number;

  /** @format int64 */
  bps_rd_max: number;

  /** @format int64 */
  bps_rd_max_length: number;

  /** @format int64 */
  bps_wr: number;

  /** @format int64 */
  bps_wr_max: number;

  /** @format int64 */
  bps_wr_max_length: number;
  consistency_group?: NestedConsistencyGroup | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;

  /** @format int64 */
  io_size: number;

  /** @format int64 */
  iops: number;

  /** @format int64 */
  iops_max: number;

  /** @format int64 */
  iops_max_length: number;

  /** @format int64 */
  iops_rd: number;

  /** @format int64 */
  iops_rd_max: number;

  /** @format int64 */
  iops_rd_max_length: number;

  /** @format int64 */
  iops_wr: number;

  /** @format int64 */
  iops_wr_max: number;

  /** @format int64 */
  iops_wr_max_length: number;
  iscsi_target: NestedIscsiTarget;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;

  /** @format int32 */
  lun_id: number;
  name: string;

  /** @format int32 */
  replica_num: number;

  /** @format int64 */
  shared_size: number;

  /** @format int32 */
  snapshot_num: number;

  /** @format int32 */
  stripe_num: number;

  /** @format int64 */
  stripe_size: number;
  thin_provision: boolean;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format int64 */
  unique_size: number;
  zbs_volume_id: string;
}

export interface WithTaskIscsiLun {
  task_id?: string | null;
  data: IscsiLun;
}

export interface IscsiLunCommonParams {
  /** @format int64 */
  bps_wr_max_length?: number;
  bps_wr_max_unit?: BPSUnit;

  /** @format int64 */
  bps_wr_max?: number;

  /** @format int64 */
  bps_rd_max_length?: number;
  bps_rd_max_unit?: BPSUnit;

  /** @format int64 */
  bps_rd_max?: number;

  /** @format int64 */
  bps_max_length?: number;
  bps_max_unit?: BPSUnit;

  /** @format int64 */
  bps_max?: number;

  /** @format int64 */
  iops_wr_max_length?: number;

  /** @format int64 */
  iops_wr_max?: number;

  /** @format int64 */
  iops_rd_max_length?: number;

  /** @format int64 */
  iops_rd_max?: number;

  /** @format int64 */
  iops_max_length?: number;

  /** @format int64 */
  iops_max?: number;
  bps_wr_unit?: BPSUnit;

  /** @format int64 */
  bps_wr?: number;
  bps_rd_unit?: BPSUnit;

  /** @format int64 */
  bps_rd?: number;
  bps_unit?: BPSUnit;

  /** @format int64 */
  bps?: number;

  /** @format int64 */
  iops_wr?: number;

  /** @format int64 */
  iops_rd?: number;

  /** @format int64 */
  iops?: number;
  allowed_initiators?: string;
}

export type IscsiLunCreationParams = {
  lun_id?: number;
  assigned_size_unit?: ByteUnit;
  assigned_size: number;
  replica_num: number;
  iscsi_target_id: string;
  name: string;
} & IscsiLunCommonParams;

export type IscsiLunUpdationParamsData = {
  assigned_size_unit?: ByteUnit;
  assigned_size?: number;
  name?: string;
} & IscsiLunCommonParams;

export interface IscsiLunUpdationParams {
  data: IscsiLunUpdationParamsData;
  where: IscsiLunWhereInput;
}

export interface DeleteIscsiLun {
  id: string;
}

export interface WithTaskDeleteIscsiLun {
  task_id?: string | null;
  data: DeleteIscsiLun;
}

export interface IscsiLunDeletionParams {
  data: { remove_snapshot: boolean };
  where: IscsiLunWhereInput;
}

export interface IscsiLunCloneParams {
  iscsi_target_id: string;
  name: string;
  snapshot_id: string;
}

export interface IscsiLunRollbackParams {
  lun_id: string;
  snapshot_id: string;
}

export interface CopyIscsiLunParams {
  dest_iscsi_target_id?: string;
  name: string;
  src_lun_id: string;
}

export interface NestedInitiatorChap {
  chap_name: string;
  chap_secret: string;
  initiator_iqn: string;
}

export interface IscsiTarget {
  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;
  chap_enabled: boolean;
  chap_name?: string | null;
  chap_secret?: string | null;
  cluster: NestedCluster;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_use: boolean;
  id: string;
  initiator_chaps?: NestedInitiatorChap[] | null;
  internal: boolean;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;
  ip_whitelist: string;
  iqn_name: string;
  iqn_whitelist: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  luns?: NestedIscsiLun[] | null;
  name: string;

  /** @format int32 */
  replica_num: number;

  /** @format int32 */
  stripe_num: number;

  /** @format int64 */
  stripe_size: number;
  thin_provision: boolean;
}

export interface WithTaskIscsiTarget {
  task_id?: string | null;
  data: IscsiTarget;
}

export interface IscsiTargetCommonParamsInitiatorChaps {
  chap_secret: string;
  chap_name: string;
  initiator_iqn: string;
}

export interface IscsiTargetCommonParams {
  /** @format int64 */
  bps_wr_max_length?: number;
  bps_wr_max_unit?: BPSUnit;

  /** @deprecated */
  bps_wr_max_size?: BPSUnit;

  /** @format int64 */
  bps_wr_max?: number;

  /** @format int64 */
  bps_rd_max_length?: number;
  bps_rd_max_unit?: BPSUnit;

  /** @format int64 */
  bps_rd_max?: number;

  /** @format int64 */
  bps_max_length?: number;
  bps_max_unit?: BPSUnit;

  /** @format int64 */
  bps_max?: number;

  /** @format int64 */
  iops_wr_max_length?: number;

  /** @format int64 */
  iops_wr_max?: number;

  /** @format int64 */
  iops_rd_max_length?: number;

  /** @format int64 */
  iops_rd_max?: number;

  /** @format int64 */
  iops_max_length?: number;

  /** @format int64 */
  iops_max?: number;
  bps_wr_unit?: BPSUnit;

  /** @format int64 */
  bps_wr?: number;
  bps_rd_unit?: BPSUnit;

  /** @format int64 */
  bps_rd?: number;
  bps_unit?: BPSUnit;

  /** @format int64 */
  bps?: number;

  /** @format int64 */
  iops_wr?: number;

  /** @format int64 */
  iops_rd?: number;

  /** @format int64 */
  iops?: number;
  initiator_chaps?: IscsiTargetCommonParamsInitiatorChaps[];
  chap_secret?: string;
  chap_name?: string;
  chap_enabled?: boolean;
  description?: string;
  iqn_whitelist?: string;
  ip_whitelist?: string;
}

export type IscsiTargetCreationParams = {
  stripe_size_unit?: ByteUnit;
  stripe_size: number;
  stripe_num: number;
  replica_num: number;
  thin_provision: boolean;
  cluster_id: string;
  name: string;
} & IscsiTargetCommonParams;

export interface IscsiTargetUpdationParams {
  data: IscsiTargetCommonParams;
  where: IscsiTargetWhereInput;
}

export interface DeleteIscsiTarget {
  id: string;
}

export interface WithTaskDeleteIscsiTarget {
  task_id?: string | null;
  data: DeleteIscsiTarget;
}

export interface IscsiTargetDeletionParams {
  where: IscsiTargetWhereInput;
}

export interface NestedContentLibraryImage {
  id: string;
  name: string;
}

export interface ElfImage {
  cluster?: NestedCluster | null;
  content_library_image?: NestedContentLibraryImage | null;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  path: string;

  /** @format int64 */
  size: number;
  vm_disks?: NestedVmDisk[] | null;
  vm_snapshots?: NestedVmSnapshot[] | null;
  vm_templates?: NestedVmTemplate[] | null;
}

export interface WithTaskElfImage {
  task_id?: string | null;
  data: ElfImage;
}

export interface ElfImageUpdationParams {
  data: { description?: string; name?: string };
  where: ElfImageWhereInput;
}

export interface DeleteElfImage {
  id: string;
}

export interface WithTaskDeleteElfImage {
  task_id?: string | null;
  data: DeleteElfImage;
}

export interface ElfImageDeletionParams {
  where: ElfImageWhereInput;
}

export interface NestedNamespaceGroup {
  id: string;
  name: string;
}

export interface NestedNfsExport {
  id: string;
  name: string;
}

export interface NestedNfsInode {
  id: string;
  name: string;
}

export interface NestedNvmfSubsystem {
  id: string;
  name: string;
}

export interface NestedSecurityPolicy {
  id: string;
  name: string;
}

export interface NestedVlan {
  id: string;
  name: string;
}

export interface NestedVmVolumeSnapshot {
  id: string;
  name: string;
}

export interface Label {
  /** @format int32 */
  cluster_num?: number | null;
  clusters?: NestedCluster[] | null;

  /** @format int32 */
  consistency_group_num?: number | null;

  /** @format int32 */
  consistency_group_snapshot_num?: number | null;
  consistency_group_snapshots?: NestedConsistencyGroupSnapshot[] | null;
  consistency_groups?: NestedConsistencyGroup[] | null;

  /** @format int32 */
  content_library_image_num?: number | null;
  content_library_images?: NestedContentLibraryImage[] | null;

  /** @format int32 */
  content_library_vm_template_num?: number | null;
  content_library_vm_templates?: NestedContentLibraryVmTemplate[] | null;
  createdAt: string;

  /** @format int32 */
  datacenter_num?: number | null;
  datacenters?: NestedDatacenter[] | null;

  /** @format int32 */
  disk_num?: number | null;
  disks?: NestedDisk[] | null;

  /** @format int32 */
  elf_image_num?: number | null;
  elf_images?: NestedElfImage[] | null;

  /** @format int32 */
  gpu_device_num?: number | null;
  gpu_devices?: NestedGpuDevice[] | null;

  /** @format int32 */
  host_num?: number | null;
  hosts?: NestedHost[] | null;
  id: string;

  /** @format int32 */
  iscsi_lun_num?: number | null;

  /** @format int32 */
  iscsi_lun_snapshot_num?: number | null;
  iscsi_lun_snapshots?: NestedIscsiLunSnapshot[] | null;
  iscsi_luns?: NestedIscsiLun[] | null;

  /** @format int32 */
  iscsi_target_num?: number | null;
  iscsi_targets?: NestedIscsiTarget[] | null;
  isolation_policies?: NestedIsolationPolicy[] | null;

  /** @format int32 */
  isolation_policy_num?: number | null;
  key: string;

  /** @format int32 */
  namespace_group_num?: number | null;
  namespace_groups?: NestedNamespaceGroup[] | null;

  /** @format int32 */
  nfs_export_num?: number | null;
  nfs_exports?: NestedNfsExport[] | null;

  /** @format int32 */
  nfs_inode_num?: number | null;
  nfs_inodes?: NestedNfsInode[] | null;

  /** @format int32 */
  nic_num?: number | null;
  nics?: NestedNic[] | null;

  /** @format int32 */
  nvmf_namespace_num?: number | null;

  /** @format int32 */
  nvmf_namespace_snapshot_num?: number | null;
  nvmf_namespace_snapshots?: NestedNvmfNamespaceSnapshot[] | null;
  nvmf_namespaces?: NestedNvmfNamespace[] | null;

  /** @format int32 */
  nvmf_subsystem_num?: number | null;
  nvmf_subsystems?: NestedNvmfSubsystem[] | null;
  security_policies?: NestedSecurityPolicy[] | null;

  /** @format int32 */
  security_policy_num?: number | null;

  /** @format int32 */
  system_vlan_num?: number | null;

  /** @format int32 */
  total_num?: number | null;
  value?: string | null;

  /** @format int32 */
  vds_num?: number | null;
  vdses?: NestedVds[] | null;
  vlans?: NestedVlan[] | null;

  /** @format int32 */
  vm_num?: number | null;

  /** @format int32 */
  vm_snapshot_num?: number | null;
  vm_snapshots?: NestedVmSnapshot[] | null;

  /** @format int32 */
  vm_template_num?: number | null;
  vm_templates?: NestedVmTemplate[] | null;

  /** @format int32 */
  vm_vlan_num?: number | null;

  /** @format int32 */
  vm_volume_num?: number | null;

  /** @format int32 */
  vm_volume_snapshot_num?: number | null;
  vm_volume_snapshots?: NestedVmVolumeSnapshot[] | null;
  vm_volumes?: NestedVmVolume[] | null;
  vms?: NestedVm[] | null;
}

export interface WithTaskLabel {
  task_id?: string | null;
  data: Label;
}

export interface LabelCreationParams {
  value?: string;
  key: string;
}

export interface LabelUpdationParams {
  data: { value?: string; key?: string };
  where: LabelWhereInput;
}

export interface AddLabelsToResourcesParams {
  data: {
    gpu_devices?: GpuDeviceWhereInput;
    content_library_vm_templates?: ContentLibraryVmTemplateWhereInput;
    content_library_images?: ContentLibraryImageWhereInput;
    isolation_policies?: IsolationPolicyWhereInput;
    security_policies?: SecurityPolicyWhereInput;
    vms?: VmWhereInput;
    vm_volume_snapshots?: VmVolumeSnapshotWhereInput;
    vm_volumes?: VmVolumeWhereInput;
    vm_templates?: VmTemplateWhereInput;
    vm_snapshots?: VmSnapshotWhereInput;
    vlans?: VlanWhereInput;
    vdses?: VdsWhereInput;
    nvmf_subsystems?: NvmfSubsystemWhereInput;
    nvmf_namespace_snapshots?: NvmfNamespaceSnapshotWhereInput;
    nvmf_namespaces?: NvmfNamespaceWhereInput;
    nics?: NicWhereInput;
    nfs_inodes?: NfsInodeWhereInput;
    nfs_exports?: NfsExportWhereInput;
    namespace_groups?: NamespaceGroupWhereInput;
    iscsi_targets?: IscsiTargetWhereInput;
    iscsi_lun_snapshots?: IscsiLunSnapshotWhereInput;
    iscsi_luns?: IscsiLunWhereInput;
    hosts?: HostWhereInput;
    elf_images?: ElfImageWhereInput;
    disks?: DiskWhereInput;
    datacenters?: DatacenterWhereInput;
    consistency_group_snapshots?: ConsistencyGroupSnapshotWhereInput;
    consistency_groups?: ConsistencyGroupWhereInput;
    clusters?: ClusterWhereInput;
  };
  where: LabelWhereInput;
}

export type RemoveLabelsFromResourcesParams = AddLabelsToResourcesParams;

export interface DeleteLabel {
  id: string;
}

export interface WithTaskDeleteLabel {
  task_id?: string | null;
  data: DeleteLabel;
}

export interface LabelDeletionParams {
  where: LabelWhereInput;
}

export interface License {
  expire_date: string;
  id: string;
  license_serial: string;
  maintenance_end_date?: string | null;
  maintenance_start_date?: string | null;

  /** @format int32 */
  max_chunk_num: number;

  /** @format int32 */
  max_cluster_num: number;
  sign_date: string;
  software_edition: SoftwareEdition;
  type: LicenseType;
}

export interface WithTaskLicense {
  task_id?: string | null;
  data: License;
}

export interface LicenseUpdationParams {
  data: { license: string };
}

export enum LogCollectionStatus {
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  STOPPING = "STOPPING",
  SUCCESSED = "SUCCESSED",
}

export interface LogCollection {
  cluster: NestedCluster;
  groups: string[];
  hosts?: NestedHost[] | null;
  id: string;
  local_id: string;
  log_ended_at: string;
  log_started_at: string;
  owner: string;
  path: string;

  /** @format double */
  progress: number;
  service_groups?: object | null;
  services: string[];

  /** @format int64 */
  size: number;
  started_at: string;
  status: LogCollectionStatus;
  witness?: NestedWitness | null;
}

export interface WithTaskLogCollection {
  task_id?: string | null;
  data: LogCollection;
}

export interface LogCollectionServiceGroupParams {
  services?: string[];
  group_name: string;
}

export interface LogCollectionCreationParams {
  witness_id?: string;
  service_groups?: LogCollectionServiceGroupParams[];

  /** @format date-time */
  log_ended_at: string;

  /** @format date-time */
  log_started_at: string;
  cluster_id: string;
  hosts: HostWhereInput;
}

export interface LogCollectionWhereInput {
  AND?: LogCollectionWhereInput[] | null;
  NOT?: LogCollectionWhereInput[] | null;
  OR?: LogCollectionWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  hosts_every?: HostWhereInput | null;
  hosts_none?: HostWhereInput | null;
  hosts_some?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  log_ended_at?: string | null;
  log_ended_at_gt?: string | null;
  log_ended_at_gte?: string | null;
  log_ended_at_in?: string[] | null;
  log_ended_at_lt?: string | null;
  log_ended_at_lte?: string | null;
  log_ended_at_not?: string | null;
  log_ended_at_not_in?: string[] | null;
  log_started_at?: string | null;
  log_started_at_gt?: string | null;
  log_started_at_gte?: string | null;
  log_started_at_in?: string[] | null;
  log_started_at_lt?: string | null;
  log_started_at_lte?: string | null;
  log_started_at_not?: string | null;
  log_started_at_not_in?: string[] | null;
  owner?: string | null;
  owner_contains?: string | null;
  owner_ends_with?: string | null;
  owner_gt?: string | null;
  owner_gte?: string | null;
  owner_in?: string[] | null;
  owner_lt?: string | null;
  owner_lte?: string | null;
  owner_not?: string | null;
  owner_not_contains?: string | null;
  owner_not_ends_with?: string | null;
  owner_not_in?: string[] | null;
  owner_not_starts_with?: string | null;
  owner_starts_with?: string | null;
  path?: string | null;
  path_contains?: string | null;
  path_ends_with?: string | null;
  path_gt?: string | null;
  path_gte?: string | null;
  path_in?: string[] | null;
  path_lt?: string | null;
  path_lte?: string | null;
  path_not?: string | null;
  path_not_contains?: string | null;
  path_not_ends_with?: string | null;
  path_not_in?: string[] | null;
  path_not_starts_with?: string | null;
  path_starts_with?: string | null;

  /** @format double */
  progress?: number | null;

  /** @format double */
  progress_gt?: number | null;

  /** @format double */
  progress_gte?: number | null;
  progress_in?: number[] | null;

  /** @format double */
  progress_lt?: number | null;

  /** @format double */
  progress_lte?: number | null;

  /** @format double */
  progress_not?: number | null;
  progress_not_in?: number[] | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: LogCollectionStatus | null;
  status_in?: LogCollectionStatus[] | null;
  status_not?: LogCollectionStatus | null;
  status_not_in?: LogCollectionStatus[] | null;
  witness?: WitnessWhereInput | null;
}

export interface ForceStopLogCollectionParams {
  where: LogCollectionWhereInput;
}

export interface DeleteLogCollection {
  id: string;
}

export interface WithTaskDeleteLogCollection {
  task_id?: string | null;
  data: DeleteLogCollection;
}

export interface LogCollectionDeletionParams {
  where: LogCollectionWhereInput;
}

export interface MetricLabel {
  to_hostname?: string | null;
  serial_number?: string | null;
  pool?: string | null;
  name?: string | null;
  metric_name?: string | null;
  job?: string | null;
  instance?: string | null;
  _zone?: string | null;
  _witness?: string | null;
  _volume?: string | null;
  _vm?: string | null;
  _to_uuid?: string | null;
  _service?: string | null;
  _scvm?: string | null;
  _network?: string | null;
  _mac?: string | null;
  _host?: string | null;
  _esxi_uuid?: string | null;
  _device?: string | null;
  _cluster?: string | null;
  _chunk?: string | null;
  __typename?: "MetricLabel";
}

export interface DataPoint {
  /** @format double */
  v?: number | null;

  /** @format int64 */
  t: number;
  __typename?: "DataPoint";
}

export interface MetricStream {
  points?: DataPoint[] | null;
  labels: MetricLabel;
  __typename?: "MetricStream";
}

export interface MetricSample {
  point?: DataPoint | null;
  labels: MetricLabel;
  __typename?: "MetricSample";
}

export enum MetricUnit {
  COUNT = "COUNT",
  DATA_RATE_BIT = "DATA_RATE_BIT",
  DATA_RATE_BYTE = "DATA_RATE_BYTE",
  DATA_SIZE = "DATA_SIZE",
  FREQUENCY = "FREQUENCY",
  LOAD = "LOAD",
  PERCENT = "PERCENT",
  RATIO = "RATIO",
  TEMPERATURE = "TEMPERATURE",
  TIME = "TIME",
}

export interface Metric {
  unit: MetricUnit;

  /** @format int32 */
  step: number;
  samples?: MetricSample[] | null;
  sample_streams?: MetricStream[] | null;
  dropped: boolean;
  __typename?: "Metric";
}

export interface WithTaskMetric {
  task_id?: string | null;
  data: Metric;
}

export interface GetVmMetricInput {
  range: string;
  metrics: string[];
  vms: VmWhereInput;
}

export interface GetVmNetWorkMetricInput {
  range: string;
  metrics: string[];
  nics?: VmNicWhereInput;
  vms: VmWhereInput;
}

export interface GetDiskMetricInput {
  range: string;
  disks: DiskWhereInput;
  metrics: string[];
}

export interface GetVmVolumeMetricInput {
  range: string;
  metrics: string[];
  vmVolumes: VmVolumeWhereInput;
}

export interface GetLunMetricInput {
  range: string;
  hosts?: HostWhereInput;
  luns: IscsiLunWhereInput;
  metrics: string[];
}

export interface GetNvmfNamespaceMetricInput {
  hosts?: HostWhereInput;
  nvmfNamespaces: NvmfNamespaceWhereInput;
  metrics: string[];
  range: string;
}

export interface GetClusterMetricInput {
  range: string;
  clusters: ClusterWhereInput;
  metrics: string[];
}

export interface GetHostMetricInput {
  range: string;
  hosts: HostWhereInput;
  metrics: string[];
}

export interface GetHostNetworkMetricInput {
  hosts: HostWhereInput;
  range: string;
  nics?: NicWhereInput;
  metrics: string[];
}

export interface GetHostServiceMetricInput {
  range: string;
  hosts: HostWhereInput;
  services: string[];
  metrics: string[];
}

export interface GetScvmMetricInput {
  range: string;
  hosts: HostWhereInput;
  metrics: string[];
}

export interface GetScvmNetworkInput {
  range: string;
  hosts: HostWhereInput;
  nics?: NicWhereInput;
  metrics: string[];
}

export interface GetScvmServiceMetricInput {
  range: string;
  hosts: HostWhereInput;
  services: string[];
  metrics: string[];
}

export interface GetSCVMDiskMetricInput {
  range: string;
  disks: DiskWhereInput;
  metrics: string[];
}

export interface GetZoneMetricInput {
  range: string;
  type: "primary-to-secondary" | "secondary-to-primary";
  clusters: ClusterWhereInput;
  metrics: string[];
}

export interface GetWitnessMetricInput {
  range: string;
  clusters: ClusterWhereInput;
  metrics: string[];
}

export interface GetTopNMetricInput {
  metrics: string[];
  clusters: ClusterWhereInput;
  type: "top" | "bottom";

  /** @format int32 */
  n: number;
  range: string;
}

export interface NamespaceGroup {
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_create_time: string;
  local_id: string;
  name: string;
  namespaces?: NestedNvmfNamespace[] | null;
  nvmf_subsystem: NestedNvmfSubsystem;
}

export interface WithTaskNamespaceGroup {
  task_id?: string | null;
  data: NamespaceGroup;
}

export interface NamespaceGroupCreationParams {
  nvmf_subsystem_id: string;
  name: string;
}

export interface NamespaceGroupUpdationParams {
  data: { name?: string };
  where: NamespaceGroupWhereInput;
}

export interface DeleteNamespaceGroup {
  id: string;
}

export interface WithTaskDeleteNamespaceGroup {
  task_id?: string | null;
  data: DeleteNamespaceGroup;
}

export interface NamespaceGroupDeletionParams {
  where: NamespaceGroupWhereInput;
}

export interface NfsExport {
  cluster: NestedCluster;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  export_inode_id: string;
  id: string;
  inodes?: NestedNfsInode[] | null;
  internal: boolean;
  ip_whitelist: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  name: string;

  /** @format int32 */
  replica_num: number;
  thin_provision: boolean;
}

export interface WithTaskNfsExport {
  task_id?: string | null;
  data: NfsExport;
}

export interface NfsExportCreationParams {
  cluster_id: string;
  ip_whitelist?: string;
  thin_provision: boolean;

  /** @format int32 */
  replica_num: number;
  name: string;
}

export interface NfsExportUpdationParams {
  data?: { ip_whitelist?: string; name?: string };
  where: NfsExportWhereInput;
}

export interface DeleteNfsExport {
  id: string;
}

export interface WithTaskDeleteNfsExport {
  task_id?: string | null;
  data: DeleteNfsExport;
}

export interface NfsExportDeletionParams {
  where: NfsExportWhereInput;
}

export interface Nic {
  driver?: string | null;
  driver_state?: NicDriverState | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  gateway_ip?: string | null;
  host: NestedHost;
  ibdev?: string | null;
  id: string;
  iommu_status?: IommuStatus | null;
  ip_address?: string | null;
  is_sriov?: boolean | null;
  labels?: NestedLabel[] | null;
  local_id: string;
  mac_address: string;

  /** @format int32 */
  max_vf_num?: number | null;
  model?: string | null;

  /** @format int32 */
  mtu: number;
  name: string;
  nic_uuid?: string | null;
  physical: boolean;
  rdma_enabled?: boolean | null;
  running: boolean;

  /** @format int64 */
  speed?: number | null;
  subnet_mask?: string | null;

  /** @format int32 */
  total_vf_num?: number | null;
  type?: NetworkType | null;
  up: boolean;

  /** @format int32 */
  used_vf_num?: number | null;
  user_usage?: NicUserUsage | null;
  vds?: NestedVds | null;
  vms?: NestedVm[] | null;
}

export interface WithTaskNic {
  task_id?: string | null;
  data: Nic;
}

export interface NicUpdationParams {
  data: { nic_user_usage?: NicUserUsage; total_vf_num?: number; mtu?: number };
  where: NicWhereInput;
}

export interface NestedBrickTopo {
  id: string;
  name: string;
}

export interface NestedPosition {
  /** @format int32 */
  column?: number | null;

  /** @format int32 */
  row?: number | null;
}

export interface NodeTopo {
  brick_topo?: NestedBrickTopo | null;
  cluster: NestedCluster;
  cluster_topo?: NestedClusterTopo | null;
  host: NestedHost;
  id: string;
  local_id: string;
  name: string;
  position: NestedPosition;
}

export interface WithTaskNodeTopo {
  task_id?: string | null;
  data: NodeTopo;
}

export interface NodeTopoWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface Position {
  /** @format int32 */
  row?: number | null;

  /** @format int32 */
  column?: number | null;
  __typename?: "position";
}

export interface NodeTopoUpdationParamsData {
  cluster_topo_id?: string;
  position?: Position;
  brick_topo_id?: string;
}

export interface NodeTopUpdationParam {
  data: NodeTopoUpdationParamsData;
  where: NodeTopoWhereUniqueInput;
}

export type NodeTopoUpdationParams = NodeTopUpdationParam[];

export interface NvmfNamespaceSnapshot {
  consistency_group_snapshot?: NestedConsistencyGroupSnapshot | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  nvmf_namespace?: NestedNvmfNamespace | null;
  nvmf_subsystem: NestedNvmfSubsystem;

  /** @format int64 */
  unique_size: number;
}

export interface WithTaskNvmfNamespaceSnapshot {
  task_id?: string | null;
  data: NvmfNamespaceSnapshot;
}

export interface NvmfNamespaceSnapshotCreationParams {
  nvmf_subsystem_id: string;
  name: string;
  nvmf_namespace_id: string;
}

export interface DeleteNvmfNamespaceSnapshot {
  id: string;
}

export interface WithTaskDeleteNvmfNamespaceSnapshot {
  task_id?: string | null;
  data: DeleteNvmfNamespaceSnapshot;
}

export interface NvmfNamespaceSnapshotDeletionParams {
  where: NvmfNamespaceSnapshotWhereInput;
}

export interface NvmfNamespace {
  /** @format int64 */
  assigned_size: number;

  /** @format int64 */
  bps: number;

  /** @format int64 */
  bps_max: number;

  /** @format int64 */
  bps_max_length: number;

  /** @format int64 */
  bps_rd: number;

  /** @format int64 */
  bps_rd_max: number;

  /** @format int64 */
  bps_rd_max_length: number;

  /** @format int64 */
  bps_wr: number;

  /** @format int64 */
  bps_wr_max: number;

  /** @format int64 */
  bps_wr_max_length: number;
  consistency_group?: NestedConsistencyGroup | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;

  /** @format int64 */
  io_size: number;

  /** @format int64 */
  iops: number;

  /** @format int64 */
  iops_max: number;

  /** @format int64 */
  iops_max_length: number;

  /** @format int64 */
  iops_rd: number;

  /** @format int64 */
  iops_rd_max: number;

  /** @format int64 */
  iops_rd_max_length: number;

  /** @format int64 */
  iops_wr: number;

  /** @format int64 */
  iops_wr_max: number;

  /** @format int64 */
  iops_wr_max_length: number;
  is_shared: boolean;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;
  namespace_group?: NestedNamespaceGroup | null;

  /** @format int32 */
  namespace_id: number;
  nqn_whitelist: string;
  nvmf_subsystem: NestedNvmfSubsystem;

  /** @format int32 */
  replica_num: number;

  /** @format int64 */
  shared_size: number;

  /** @format int32 */
  snapshot_num: number;

  /** @format int32 */
  stripe_num: number;

  /** @format int64 */
  stripe_size: number;
  thin_provision: boolean;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format int64 */
  unique_size: number;
  zbs_volume_id: string;
}

export interface WithTaskNvmfNamespace {
  task_id?: string | null;
  data: NvmfNamespace;
}

export interface NvmfNamespaceCommonParams {
  /** @format int64 */
  bps_wr_max_length?: number;
  bps_wr_max_unit?: BPSUnit;

  /** @format int64 */
  bps_wr_max?: number;

  /** @format int64 */
  bps_rd_max_length?: number;
  bps_rd_max_unit?: BPSUnit;

  /** @format int64 */
  bps_rd_max?: number;

  /** @format int64 */
  bps_max_length?: number;
  bps_max_unit?: BPSUnit;

  /** @format int64 */
  bps_max?: number;

  /** @format int64 */
  iops_wr_max_length?: number;

  /** @format int64 */
  iops_wr_max?: number;

  /** @format int64 */
  iops_rd_max_length?: number;

  /** @format int64 */
  iops_rd_max?: number;

  /** @format int64 */
  iops_max_length?: number;

  /** @format int64 */
  iops_max?: number;
  bps_wr_unit?: BPSUnit;

  /** @format int64 */
  bps_wr?: number;
  bps_rd_unit?: BPSUnit;

  /** @format int64 */
  bps_rd?: number;
  bps_unit?: BPSUnit;

  /** @format int64 */
  bps?: number;

  /** @format int64 */
  iops_wr?: number;

  /** @format int64 */
  iops_rd?: number;

  /** @format int64 */
  iops?: number;
  nqn_whitelist?: string;
}

export type NvmfNamespaceCreationParams = {
  namespace_id?: number;
  group_id?: string;
  is_shared?: boolean;
  assigned_size_unit?: ByteUnit;
  assigned_size: number;
  replica_num: number;
  nvmf_subsystem_id: string;
  name: string;
} & NvmfNamespaceCommonParams;

export type NvmfNamespaceUpdationParamsData = {
  assigned_size_unit?: ByteUnit;
  assigned_size?: number;
  name?: string;
} & NvmfNamespaceCommonParams;

export interface NvmfNamespaceUpdationParams {
  data: NvmfNamespaceUpdationParamsData;
  where: NvmfNamespaceWhereInput;
}

export interface DeleteNvmfNamespace {
  id: string;
}

export interface WithTaskDeleteNvmfNamespace {
  task_id?: string | null;
  data: DeleteNvmfNamespace;
}

export interface NvmfNamespaceDeletionParams {
  data: { remove_snapshot: boolean };
  where: NvmfNamespaceWhereInput;
}

export interface NvmfNamespaceCloneParams {
  namespace_group_id?: string;
  nvmf_subsystem_id: string;
  name: string;
  snapshot_id: string;
}

export interface NvmfNamespaceRollbackParams {
  namespace_id: string;
  snapshot_id: string;
}

export interface NvmfSubsystem {
  /** @format int64 */
  bps?: number | null;

  /** @format int64 */
  bps_max?: number | null;

  /** @format int64 */
  bps_max_length?: number | null;

  /** @format int64 */
  bps_rd?: number | null;

  /** @format int64 */
  bps_rd_max?: number | null;

  /** @format int64 */
  bps_rd_max_length?: number | null;

  /** @format int64 */
  bps_wr?: number | null;

  /** @format int64 */
  bps_wr_max?: number | null;

  /** @format int64 */
  bps_wr_max_length?: number | null;
  cluster: NestedCluster;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_use: boolean;
  id: string;
  internal: boolean;

  /** @format int64 */
  io_size?: number | null;

  /** @format int64 */
  iops?: number | null;

  /** @format int64 */
  iops_max?: number | null;

  /** @format int64 */
  iops_max_length?: number | null;

  /** @format int64 */
  iops_rd?: number | null;

  /** @format int64 */
  iops_rd_max?: number | null;

  /** @format int64 */
  iops_rd_max_length?: number | null;

  /** @format int64 */
  iops_wr?: number | null;

  /** @format int64 */
  iops_wr_max?: number | null;

  /** @format int64 */
  iops_wr_max_length?: number | null;
  ip_whitelist: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  name: string;
  namespace_groups?: NestedNamespaceGroup[] | null;
  namespaces?: NestedNvmfNamespace[] | null;
  nqn_name: string;
  nqn_whitelist: string;
  policy: NvmfSubsystemPolicyType;

  /** @format int32 */
  replica_num: number;

  /** @format int32 */
  stripe_num: number;

  /** @format int64 */
  stripe_size: number;
  thin_provision: boolean;
}

export interface WithTaskNvmfSubsystem {
  task_id?: string | null;
  data: NvmfSubsystem;
}

export interface NvmfSubsystemCommonParams {
  /** @format int64 */
  bps_wr_max_length?: number;
  bps_wr_max_unit?: BPSUnit;

  /** @format int64 */
  bps_wr_max?: number;

  /** @format int64 */
  bps_rd_max_length?: number;
  bps_rd_max_unit?: BPSUnit;

  /** @format int64 */
  bps_rd_max?: number;

  /** @format int64 */
  bps_max_length?: number;
  bps_max_unit?: BPSUnit;

  /** @format int64 */
  bps_max?: number;

  /** @format int64 */
  iops_wr_max_length?: number;

  /** @format int64 */
  iops_wr_max?: number;

  /** @format int64 */
  iops_rd_max_length?: number;

  /** @format int64 */
  iops_rd_max?: number;

  /** @format int64 */
  iops_max_length?: number;

  /** @format int64 */
  iops_max?: number;
  bps_wr_unit?: BPSUnit;

  /** @format int64 */
  bps_wr?: number;
  bps_rd_unit?: BPSUnit;

  /** @format int64 */
  bps_rd?: number;
  bps_unit?: BPSUnit;

  /** @format int64 */
  bps?: number;

  /** @format int64 */
  iops_wr?: number;

  /** @format int64 */
  iops_rd?: number;

  /** @format int64 */
  iops?: number;
  description?: string;
  nqn_whitelist?: string;
  ip_whitelist?: string;
}

export type NvmfSubsystemCreationParams = {
  replica_num: number;
  thin_provision: boolean;
  stripe_size_unit?: ByteUnit;
  stripe_size: number;
  stripe_num: number;
  policy: NvmfSubsystemPolicyType;
  cluster_id: string;
  name: string;
} & NvmfSubsystemCommonParams;

export interface NvmfSubsystemUpdationParams {
  data: NvmfSubsystemCommonParams;
  where: NvmfSubsystemWhereInput;
}

export interface DeleteNvmfSubsystem {
  id: string;
}

export interface WithTaskDeleteNvmfSubsystem {
  task_id?: string | null;
  data: DeleteNvmfSubsystem;
}

export interface NvmfSubsystemDeletionParams {
  where: NvmfSubsystemWhereInput;
}

export interface Organization {
  datacenters?: NestedDatacenter[] | null;
  id: string;
  name: string;
}

export interface WithTaskOrganization {
  task_id?: string | null;
  data: Organization;
}

export interface OrganizationCreationParams {
  name: string;
}

export interface OrganizationUpdationParams {
  data: { name?: string };
  where: OrganizationWhereInput;
}

export interface DeleteOrganization {
  id: string;
}

export interface WithTaskDeleteOrganization {
  task_id?: string | null;
  data: DeleteOrganization;
}

export interface OrganizationDeletionParams {
  where: OrganizationWhereInput;
}

export interface NestedZoneTopo {
  id: string;
}

export interface RackTopo {
  brick_topoes?: NestedBrickTopo[] | null;
  cluster: NestedCluster;

  /** @format int32 */
  height: number;
  id: string;
  local_id: string;
  name: string;
  zone_topo: NestedZoneTopo;
}

export interface WithTaskRackTopo {
  task_id?: string | null;
  data: RackTopo;
}

export interface RackTopoCreationParams {
  brick_topoes?: BrickTopoWhereInput;
  cluster_id: string;
  zone_topo_id: string;

  /** @format int32 */
  height: number;
  name: string;
}

export interface RackTopoUpdationParams {
  data: {
    brick_topoes?: BrickTopoWhereInput;
    cluster_id?: string;
    zone_topo_id?: string;
    height?: number;
    name?: string;
  };
  where: RackTopoWhereInput;
}

export interface DeleteRackTopo {
  id: string;
}

export interface WithTaskDeleteRackTopo {
  task_id?: string | null;
  data: DeleteRackTopo;
}

export interface RackTopoDeletionParams {
  where: RackTopoWhereInput;
}

export enum AccessMode {
  ALLOW = "ALLOW",
  DENY = "DENY",
  NONE = "NONE",
}

export enum PasswordComplexity {
  HIGH = "HIGH",
  LOW = "LOW",
  MIDDLE = "MIDDLE",
}

export interface NestedAuthSettings {
  access_list?: string[] | null;
  access_mode?: AccessMode | null;
  enable_single_session_login?: boolean | null;

  /** @format int32 */
  login_miss_num_threshold?: number | null;

  /** @format int32 */
  login_miss_time_threshold?: number | null;
  password_complexity?: PasswordComplexity | null;

  /** @format int32 */
  password_expire_days?: number | null;

  /** @format int32 */
  session_max_age?: number | null;
}

export interface GlobalSettings {
  auth?: NestedAuthSettings | null;
  id: string;
  vm_recycle_bin: NestedVmRecycleBin;
}

export interface WithTaskGlobalSettings {
  task_id?: string | null;
  data: GlobalSettings;
}

export interface GlobalRecycleBinUpdationParams {
  /** @format int32 */
  retain: number;
  enabled: boolean;
}

export interface ClusterRecycleBinCreationParams {
  data: { retain: number; enabled: boolean };
  where: ClusterWhereInput;
}

export interface ClusterRecycleBinUpdationParams {
  data: { retain: number; enabled: boolean };
  where: ClusterWhereInput;
}

export interface DeleteClusterRecycleBin {
  id: string;
}

export interface WithTaskDeleteClusterRecycleBin {
  task_id?: string | null;
  data: DeleteClusterRecycleBin;
}

export interface ClusterRecycleBinDeletionParams {
  where: ClusterWhereInput;
}

export interface NestedExecutePlan {
  enabled: boolean;
  id: string;
  period: string;

  /** @format int32 */
  retain: number;
  start_at: string;
}

export enum ReportResourceInputEnum {
  ALERT = "ALERT",
  ALL = "ALL",
  CLUSTER = "CLUSTER",
  DATA_CENTER = "DATA_CENTER",
  DISK = "DISK",
  ELF_IMAGE = "ELF_IMAGE",
  ENTITY_FILTERS = "ENTITY_FILTERS",
  GLOBAL_ALERT_RULE = "GLOBAL_ALERT_RULE",
  HOST = "HOST",
  TASK = "TASK",
  VDS = "VDS",
  VLAN = "VLAN",
  VM = "VM",
  VM_TEMPLATE = "VM_TEMPLATE",
}

export interface NestedResourceMeta {
  fields: string[];
  filter: object;
  name: string;
  type: ReportResourceInputEnum;
}

export interface NestedReportTask {
  id: string;
  name: string;
}

export interface ReportTemplate {
  createdAt: string;
  description: string;
  execute_plan: NestedExecutePlan[];
  id: string;
  name: string;
  preset?: string | null;
  resource_meta: NestedResourceMeta[];

  /** @format int32 */
  task_num: number;
  tasks?: NestedReportTask[] | null;
}

export interface WithTaskReportTemplate {
  task_id?: string | null;
  data: ReportTemplate;
}

export interface ExecutePlan {
  start_at: string;

  /** @format int32 */
  retain: number;
  period: string;
  id: string;
  enabled: boolean;
  __typename?: "ExecutePlan";
}

export interface ResourceMeta {
  type: ReportResourceInputEnum;
  name: string;
  filter: any;
  fields: string[];
  __typename?: "ResourceMeta";
}

export interface ReportTemplateCreationParams {
  resource_meta: ResourceMeta[];
  execute_plan: ExecutePlan[];
  description?: string;
  name: string;
}

export interface ReportTemplateWhereInput {
  AND?: ReportTemplateWhereInput[] | null;
  NOT?: ReportTemplateWhereInput[] | null;
  OR?: ReportTemplateWhereInput[] | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  preset?: string | null;
  preset_contains?: string | null;
  preset_ends_with?: string | null;
  preset_gt?: string | null;
  preset_gte?: string | null;
  preset_in?: string[] | null;
  preset_lt?: string | null;
  preset_lte?: string | null;
  preset_not?: string | null;
  preset_not_contains?: string | null;
  preset_not_ends_with?: string | null;
  preset_not_in?: string[] | null;
  preset_not_starts_with?: string | null;
  preset_starts_with?: string | null;

  /** @format int32 */
  task_num?: number | null;

  /** @format int32 */
  task_num_gt?: number | null;

  /** @format int32 */
  task_num_gte?: number | null;
  task_num_in?: number[] | null;

  /** @format int32 */
  task_num_lt?: number | null;

  /** @format int32 */
  task_num_lte?: number | null;

  /** @format int32 */
  task_num_not?: number | null;
  task_num_not_in?: number[] | null;
  tasks_every?: ReportTaskWhereInput | null;
  tasks_none?: ReportTaskWhereInput | null;
  tasks_some?: ReportTaskWhereInput | null;
}

export interface ReportTaskWhereInput {
  AND?: ReportTaskWhereInput[] | null;
  NOT?: ReportTaskWhereInput[] | null;
  OR?: ReportTaskWhereInput[] | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  plan_id?: string | null;
  plan_id_contains?: string | null;
  plan_id_ends_with?: string | null;
  plan_id_gt?: string | null;
  plan_id_gte?: string | null;
  plan_id_in?: string[] | null;
  plan_id_lt?: string | null;
  plan_id_lte?: string | null;
  plan_id_not?: string | null;
  plan_id_not_contains?: string | null;
  plan_id_not_ends_with?: string | null;
  plan_id_not_in?: string[] | null;
  plan_id_not_starts_with?: string | null;
  plan_id_starts_with?: string | null;
  status?: TaskStatus | null;
  status_in?: TaskStatus[] | null;
  status_not?: TaskStatus | null;
  status_not_in?: TaskStatus[] | null;
  template?: ReportTemplateWhereInput | null;
}

export interface ReportTemplateUpdationParams {
  data: {
    resource_meta?: ResourceMeta[];
    execute_plan?: ExecutePlan[];
    description?: string;
    name?: string;
  };
  where: ReportTemplateWhereInput;
}

export interface NestedReportTemplate {
  id: string;
  name: string;
}

export interface ReportTask {
  createdAt: string;
  id: string;
  internal: boolean;
  name: string;
  plan_id?: string | null;
  status: TaskStatus;
  template: NestedReportTemplate;
}

export interface WithTaskReportTask {
  task_id?: string | null;
  data: ReportTask;
}

export interface ReporteTemplateGenerationParams {
  where: ReportTemplateWhereInput;
}

export interface DeleteReportTemplate {
  id: string;
}

export interface WithTaskDeleteReportTemplate {
  task_id?: string | null;
  data: DeleteReportTemplate;
}

export interface ReportTemplateDeletionParams {
  where: ReportTemplateWhereInput;
}

export interface UserRoleNext {
  actions: string[];
  id: string;
  name: string;
  platform: UserRolePlatform;
  preset?: UserRolePreset | null;
  users?: NestedUser[] | null;
}

export interface WithTaskUserRoleNext {
  task_id?: string | null;
  data: UserRoleNext;
}

export enum ROLE_ACTION {
  Type = "*",
  MANAGE_DATA_CENTER = "MANAGE_DATA_CENTER",
  MANAGE_CLUSTER_CONNECTION = "MANAGE_CLUSTER_CONNECTION",
  MANAGE_STORAGE_CLUSTER_CONNECTION = "MANAGE_STORAGE_CLUSTER_CONNECTION",
  MANAGE_HOST = "MANAGE_HOST",
  MANAGE_NIC_MTU = "MANAGE_NIC_MTU",
  MANAGE_DISK = "MANAGE_DISK",
  MANAGE_HARDWARE_TOPO = "MANAGE_HARDWARE_TOPO",
  MANAGE_USB_DEVICE = "MANAGE_USB_DEVICE",
  MANAGE_GPU_DEVICE = "MANAGE_GPU_DEVICE",
  MANAGE_VDS = "MANAGE_VDS",
  MANAGE_VLAN = "MANAGE_VLAN",
  MANAGE_SYSTEM_VLAN = "MANAGE_SYSTEM_VLAN",
  MANAGE_ISCSI_DATA_STORE = "MANAGE_ISCSI_DATA_STORE",
  MANAGE_NFS_DATA_STORE = "MANAGE_NFS_DATA_STORE",
  MANAGE_NVMF_DATA_STORE = "MANAGE_NVMF_DATA_STORE",
  CREATE_VM = "CREATE_VM",
  UPDATE_VM = "UPDATE_VM",
  DELETE_VM = "DELETE_VM",
  UPDATE_VM_ADVANCED_SETTING = "UPDATE_VM_ADVANCED_SETTING",
  UPDATE_VM_GUEST = "UPDATE_VM_GUEST",
  VM_OPERATION_OPEN_TERMINAL = "VM_OPERATION_OPEN_TERMINAL",
  VM_OPERATION_MIGRATE = "VM_OPERATION_MIGRATE",
  VM_OPERATION_VM_FOLDER = "VM_OPERATION_VM_FOLDER",
  VM_OPERATION_VM_POWER = "VM_OPERATION_VM_POWER",
  VM_OPERATION_CLONE = "VM_OPERATION_CLONE",
  VM_OPERATION_INSTALL_TOOLS = "VM_OPERATION_INSTALL_TOOLS",
  VM_IMPORT_EXPORT = "VM_IMPORT_EXPORT",
  CREATE_VM_TEMPLATE = "CREATE_VM_TEMPLATE",
  MANAGE_VM_TEMPLATE = "MANAGE_VM_TEMPLATE",
  VM_TEMPLATE_IMPORT_EXPORT = "VM_TEMPLATE_IMPORT_EXPORT",
  MANAGE_VM_SNAPSHOT = "MANAGE_VM_SNAPSHOT",
  MANAGE_VM_VOLUME = "MANAGE_VM_VOLUME",
  VM_VOLUME_IMPORT_EXPORT = "VM_VOLUME_IMPORT_EXPORT",
  MANAGE_ISO = "MANAGE_ISO",
  DOWNLOAD_ISO = "DOWNLOAD_ISO",
  QUERY_SENSITIVE_RESOURCE_LIST = "QUERY_SENSITIVE_RESOURCE_LIST",
  QUERY_SENSITIVE_RESOURCE = "QUERY_SENSITIVE_RESOURCE",
  MANAGE_SENSITIVE_RESOURCE = "MANAGE_SENSITIVE_RESOURCE",
  MANAGE_VM_PLACEMENT_GROUP = "MANAGE_VM_PLACEMENT_GROUP",
  MANAGE_SNAPSHOT_PLAN = "MANAGE_SNAPSHOT_PLAN",
  MANAGE_ALERT = "MANAGE_ALERT",
  MANAGE_MONITOR_VIEW = "MANAGE_MONITOR_VIEW",
  MANAGE_ENTITY_FILTER = "MANAGE_ENTITY_FILTER",
  MANAGE_CLUSTER_BASIC_INFO = "MANAGE_CLUSTER_BASIC_INFO",
  MANAGE_CLUSTER_LICENCE = "MANAGE_CLUSTER_LICENCE",
  MANAGE_CLUSTER_SNMP_TRANSPORT = "MANAGE_CLUSTER_SNMP_TRANSPORT",
  MANAGE_SNMP_TRAP = "MANAGE_SNMP_TRAP",
  MANAGE_CLUSTER_VIP = "MANAGE_CLUSTER_VIP",
  MANAGE_CLUSTER_MANAGEMENT_IP = "MANAGE_CLUSTER_MANAGEMENT_IP",
  MANAGE_DNS_SERVER = "MANAGE_DNS_SERVER",
  MANAGE_NTP_SERVER = "MANAGE_NTP_SERVER",
  MANAGE_IPMI = "MANAGE_IPMI",
  MANAGE_CLUSTER_VM_CPU_MODEL = "MANAGE_CLUSTER_VM_CPU_MODEL",
  MANAGE_CLUSTER_VM_TOOLS = "MANAGE_CLUSTER_VM_TOOLS",
  MANAGE_CLUSTER_HOT_MIGRATION = "MANAGE_CLUSTER_HOT_MIGRATION",
  MANAGE_CLUSTER_HA = "MANAGE_CLUSTER_HA",
  MANAGE_SSL_CERTIFICATE = "MANAGE_SSL_CERTIFICATE",
  MANAGE_LOG_COLLECTION = "MANAGE_LOG_COLLECTION",
  MANAGE_SYSLOG = "MANAGE_SYSLOG",
  MANAGE_LOG_FIND = "MANAGE_LOG_FIND",
  MANAGE_LABEL = "MANAGE_LABEL",
  MANAGE_USER_AND_ROLE = "MANAGE_USER_AND_ROLE",
  MANAGE_PASSWORD_SETTINGS = "MANAGE_PASSWORD_SETTINGS",
  MANAGE_ACCESS_CONTROL = "MANAGE_ACCESS_CONTROL",
  MANAGE_SESSION_EXPIRATION = "MANAGE_SESSION_EXPIRATION",
  MANAGE_VCENTER_ASSOCIATION = "MANAGE_VCENTER_ASSOCIATION",
  MANAGE_ESXI_ASSOCIATION = "MANAGE_ESXI_ASSOCIATION",
  MANAGE_AUDIT_LOG = "MANAGE_AUDIT_LOG",
  MANAGE_ALERT_EMAIL_SETTING = "MANAGE_ALERT_EMAIL_SETTING",
  MANAGE_SMTP_SERVER = "MANAGE_SMTP_SERVER",
  MANAGE_CLUSTER_UPGRADE = "MANAGE_CLUSTER_UPGRADE",
  MANAGE_VM_RECYCLE_BIN_SETTING = "MANAGE_VM_RECYCLE_BIN_SETTING",
  MANAGE_REPORT = "MANAGE_REPORT",
  MANAGE_SHARING_VM_TOOLS = "MANAGE_SHARING_VM_TOOLS",
  MANAGE_ADVANCED_MONITOR = "MANAGE_ADVANCED_MONITOR",
  MANAGE_THIRD_PARTY_DRIVER = "MANAGE_THIRD_PARTY_DRIVER",
  MANAGE_ORGANIZATION_NAME = "MANAGE_ORGANIZATION_NAME",
  MANAGE_CLOUD_TOWER_LICENSE = "MANAGE_CLOUD_TOWER_LICENSE",
  MANAGE_CONSISTENCY_GROUP = "MANAGE_CONSISTENCY_GROUP",
  MANAGE_NIC = "MANAGE_NIC",
  MANAGE_CLUSTER_ISCSI = "MANAGE_CLUSTER_ISCSI",
  MANAGE_BACKUP_LICENSE = "MANAGE_BACKUP_LICENSE",
  MANAGE_BACKUP_PACKAGE = "MANAGE_BACKUP_PACKAGE",
  MANAGE_BACKUP_SERVICE = "MANAGE_BACKUP_SERVICE",
  MANAGE_BACKUP_STORE_REPOSITORY = "MANAGE_BACKUP_STORE_REPOSITORY",
  MANAGE_BACKUP_PLAN = "MANAGE_BACKUP_PLAN",
  MANAGE_BACKUP_TASK = "MANAGE_BACKUP_TASK",
  MANAGE_BACKUP_RESTORE_POINT = "MANAGE_BACKUP_RESTORE_POINT",
  MANAGE_BACKUP_RESTORE_POINT_TASK = "MANAGE_BACKUP_RESTORE_POINT_TASK",
  MANAGE_SECURITY_POLICY = "MANAGE_SECURITY_POLICY",
  MANAGE_SECURITY_GROUP = "MANAGE_SECURITY_GROUP",
  ISOLATE_VM = "ISOLATE_VM",
  MANAGE_EVEROUTE_LICENSE = "MANAGE_EVEROUTE_LICENSE",
  MANAGE_EVEROUTE_PACKAGE = "MANAGE_EVEROUTE_PACKAGE",
  DEPLOY_EVEROUTE_CLUSTER = "DEPLOY_EVEROUTE_CLUSTER",
  UNDEPLOY_EVEROUTE_CLUSTER = "UNDEPLOY_EVEROUTE_CLUSTER",
  UPDATE_EVEROUTE_CLUSTER = "UPDATE_EVEROUTE_CLUSTER",
  UPGRADE_EVEROUTE_CLUSTER = "UPGRADE_EVEROUTE_CLUSTER",
  MANAGE_EVEROUTE_NETWORK_POLICY_RULE_SERVICE = "MANAGE_EVEROUTE_NETWORK_POLICY_RULE_SERVICE",
  MANAGE_EVEROUTE_CLUSTER_ASSOCIATION = "MANAGE_EVEROUTE_CLUSTER_ASSOCIATION",
  MANAGE_EVEROUTE_CLUSTER_GLOBAL_POLICY = "MANAGE_EVEROUTE_CLUSTER_GLOBAL_POLICY",
  MANAGE_MICRO_SEGMENTATION = "MANAGE_MICRO_SEGMENTATION",
  MANAGE_LOAD_BALANCER_RESOURCE = "MANAGE_LOAD_BALANCER_RESOURCE",
  MANAGE_LOAD_BALANCER = "MANAGE_LOAD_BALANCER",
  MANAGE_LOAD_BALANCER_VNET_BOND = "MANAGE_LOAD_BALANCER_VNET_BOND",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_SERVICE = "MANAGE_VIRTUAL_PRIVATE_CLOUD_SERVICE",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_CLUSTER_BINDING = "MANAGE_VIRTUAL_PRIVATE_CLOUD_CLUSTER_BINDING",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_EDGE_GATEWAY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_EDGE_GATEWAY",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_EXTERNAL_SUBNET = "MANAGE_VIRTUAL_PRIVATE_CLOUD_EXTERNAL_SUBNET",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_BASIC_RESOURCE = "MANAGE_VIRTUAL_PRIVATE_CLOUD_BASIC_RESOURCE",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_SECURITY_GROUP = "MANAGE_VIRTUAL_PRIVATE_CLOUD_SECURITY_GROUP",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_SECURITY_POLICY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_SECURITY_POLICY",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_ISOLATION_POLICY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_ISOLATION_POLICY",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_FLOATING_IP = "MANAGE_VIRTUAL_PRIVATE_CLOUD_FLOATING_IP",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_ROUTER_GATEWAY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_ROUTER_GATEWAY",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_NAT_GATEWAY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_NAT_GATEWAY",
  MANAGEVIRTUALPRIVATECLOUDLAYER2GATEWAY = "MANAGE_VIRTUAL_PRIVATE_CLOUD_LAYER2_GATEWAY",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_PEERING = "MANAGE_VIRTUAL_PRIVATE_CLOUD_PEERING",
  MANAGE_VIRTUAL_PRIVATE_CLOUD_LOAD_BALANCER_RESOURCE = "MANAGE_VIRTUAL_PRIVATE_CLOUD_LOAD_BALANCER_RESOURCE",
  MANAGE_LDAP_AD_CONFIG = "MANAGE_LDAP_AD_CONFIG",
  MANAGE_MFA_CONFIG = "MANAGE_MFA_CONFIG",
  MANAGE_DEFAULT_LOGIN_OPTION = "MANAGE_DEFAULT_LOGIN_OPTION",
  MANAGE_CLUSTER_STORAGE_POLICY = "MANAGE_CLUSTER_STORAGE_POLICY",
  MANAGE_SKS_SERVICE = "MANAGE_SKS_SERVICE",
  MANAGE_SKS_LICENSE = "MANAGE_SKS_LICENSE",
  CONFIGURE_SKS_SERVICE = "CONFIGURE_SKS_SERVICE",
  CREATE_SKS_WORKLOAD_CLUSTER = "CREATE_SKS_WORKLOAD_CLUSTER",
  DELETE_SKS_WORKLOAD_CLUSTER = "DELETE_SKS_WORKLOAD_CLUSTER",
  UPDATE_SKS_WORKLOAD_CLUSTER = "UPDATE_SKS_WORKLOAD_CLUSTER",
  MANAGE_CONTAINER_REGISTRY = "MANAGE_CONTAINER_REGISTRY",
  DOWNLOAD_SKS_WORKLOAD_CLUSTER_KUBECONFIG = "DOWNLOAD_SKS_WORKLOAD_CLUSTER_KUBECONFIG",
  MANAGE_SKS_WORKLOAD_CLUSTER_RECONCILE = "MANAGE_SKS_WORKLOAD_CLUSTER_RECONCILE",
  MANAGE_OBSERVABILITY_PACKAGE = "MANAGE_OBSERVABILITY_PACKAGE",
  MANAGE_OBSERVABILITY_SERVICE = "MANAGE_OBSERVABILITY_SERVICE",
  MANAGE_ALERT_NOTIFIER = "MANAGE_ALERT_NOTIFIER",
  CONFIG_DYNAMIC_RESOURCE_SCHEDULE = "CONFIG_DYNAMIC_RESOURCE_SCHEDULE",
  GENERATE_DRS_PROPOSALS = "GENERATE_DRS_PROPOSALS",
  APPLY_DRS_PROPOSAL = "APPLY_DRS_PROPOSAL",
  MANAGE_AGENT_MESH = "MANAGE_AGENT_MESH",
  MANAGE_REPLICATION_SERVICE = "MANAGE_REPLICATION_SERVICE",
  MANAGE_REPLICATION_RESTORE_POINT = "MANAGE_REPLICATION_RESTORE_POINT",
  MANAGE_REPLICATION_PLAN = "MANAGE_REPLICATION_PLAN",
  MANAGE_REPLICATION_TASK = "MANAGE_REPLICATION_TASK",
  MANAGE_REPLICATION_FAULT_TASK = "MANAGE_REPLICATION_FAULT_TASK",
  MANAGE_CLUSTER_PRIORITIZED = "MANAGE_CLUSTER_PRIORITIZED",
  SMTX_INSPECTOR = "SMTX_INSPECTOR",
  MANAGE_SFS_LICENSE = "MANAGE_SFS_LICENSE",
  MANAGE_SFS_IMAGE = "MANAGE_SFS_IMAGE",
  MANAGE_SFS_FILE_STORAGE_CLUSTER = "MANAGE_SFS_FILE_STORAGE_CLUSTER",
  MANAGE_SFS_FILE_SYSTEM_CONFIG = "MANAGE_SFS_FILE_SYSTEM_CONFIG",
  MANAGE_SFS_FILE_SYSTEM_ACCESSIBILITY = "MANAGE_SFS_FILE_SYSTEM_ACCESSIBILITY",
  MANAGE_SFS_SNAPSHOT = "MANAGE_SFS_SNAPSHOT",
  MANAGE_CLOUDTOWER_SNMP_TRANSPORT = "MANAGE_CLOUDTOWER_SNMP_TRANSPORT",
  MANAGE_CLOUD_TOWER_NTP = "MANAGE_CLOUD_TOWER_NTP",
}

export interface RoleCreationParams {
  actions: ROLE_ACTION[];
  name: string;
}

export interface RoleUpdationParams {
  data: { actions?: ROLE_ACTION[]; name?: string };
  where: UserRoleNextWhereInput;
}

export interface DeleteRole {
  id: string;
}

export interface WithTaskDeleteRole {
  task_id?: string | null;
  data: DeleteRole;
}

export interface RoleDeletionParams {
  where: UserRoleNextWhereInput;
}

export interface NestedLabelGroup {
  labels: NestedLabel[];
}

export interface SecurityGroup {
  description?: string | null;
  everoute_cluster: NestedEverouteCluster;
  id: string;
  isolation_policies?: NestedIsolationPolicy[] | null;
  label_groups?: NestedLabelGroup[] | null;
  name: string;
  security_policies?: NestedSecurityPolicy[] | null;
  vms?: NestedVm[] | null;
}

export interface WithTaskSecurityGroup {
  task_id?: string | null;
  data: SecurityGroup;
}

export interface SecurityGroupCreateParams {
  vms?: VmWhereInput;
  label_groups?: LabelWhereInput[];
  description?: string;
  everoute_cluster_id: string;
  name: string;
}

export interface DeleteSecurityGroup {
  id: string;
}

export interface WithTaskDeleteSecurityGroup {
  task_id?: string | null;
  data: DeleteSecurityGroup;
}

export interface SecurityGroupWhereInput {
  AND?: SecurityGroupWhereInput[] | null;
  NOT?: SecurityGroupWhereInput[] | null;
  OR?: SecurityGroupWhereInput[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  everoute_cluster?: EverouteClusterWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  isolation_policies_every?: IsolationPolicyWhereInput | null;
  isolation_policies_none?: IsolationPolicyWhereInput | null;
  isolation_policies_some?: IsolationPolicyWhereInput | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  security_policies_every?: SecurityPolicyWhereInput | null;
  security_policies_none?: SecurityPolicyWhereInput | null;
  security_policies_some?: SecurityPolicyWhereInput | null;
  vms_every?: VmWhereInput | null;
  vms_none?: VmWhereInput | null;
  vms_some?: VmWhereInput | null;
}

export interface SecurityGroupDeleteParams {
  where: SecurityGroupWhereInput;
}

export interface SecurityGroupUpdateParams {
  label_groups?: LabelWhereInput[];
  vms?: VmWhereInput;
  description?: string;
  name?: string;
}

export interface SecurityGroupUpdateBody {
  data: SecurityGroupUpdateParams;
  where: SecurityGroupWhereInput;
}

export interface NestedSecurityPolicyApply {
  communicable: boolean;
  selector: NestedLabel[];
  selector_ids: string[];
}

export enum NetworkPolicyRulePortProtocol {
  ALG = "ALG",
  ICMP = "ICMP",
  IPIP = "IPIP",
  TCP = "TCP",
  UDP = "UDP",
}

export interface NestedNetworkPolicyRulePort {
  port?: string | null;
  protocol: NetworkPolicyRulePortProtocol;
}

export enum NetworkPolicyRuleType {
  ALL = "ALL",
  IP_BLOCK = "IP_BLOCK",
  SECURITY_GROUP = "SECURITY_GROUP",
  SELECTOR = "SELECTOR",
}

export interface NestedNetworkPolicyRule {
  ip_block?: string | null;
  ports?: NestedNetworkPolicyRulePort[] | null;
  selector?: NestedLabel[] | null;
  selector_ids?: string[] | null;
  type: NetworkPolicyRuleType;
}

export interface SecurityPolicy {
  apply_to: NestedSecurityPolicyApply[];
  description: string;
  egress?: NestedNetworkPolicyRule[] | null;
  everoute_cluster: NestedEverouteCluster;
  id: string;
  ingress?: NestedNetworkPolicyRule[] | null;
  name: string;
  policy_mode?: PolicyMode | null;
}

export interface WithTaskSecurityPolicy {
  task_id?: string | null;
  data: SecurityPolicy;
}

export interface SecurityPolicyApplyToInputTarget {
  security_groups?: SecurityGroupWhereInput;
  label_groups?: LabelWhereInput[];
}

export interface SecurityPolicyApplyToInput {
  communicable?: boolean;
  target: SecurityPolicyApplyToInputTarget;
}

export interface IPSecurityPolicy {
  except_ip_block?: string[];
  ip_block: string;
}

export interface SecurityPolicyIngressEgressInputTarget {
  security_groups?: SecurityGroupWhereInput;
  ips?: IPSecurityPolicy[];
  label_groups?: LabelWhereInput[];
}

export interface NetworkPolicyRulePortInput {
  protocol: NetworkPolicyRulePortProtocol;
  port?: string;
}

export interface SecurityPolicyIngressEgressInput {
  ports?: NetworkPolicyRulePortInput[];
  target: SecurityPolicyIngressEgressInputTarget;
}

export interface SecurityPolicyCreateParams {
  ingress?: SecurityPolicyIngressEgressInput[];
  egress?: SecurityPolicyIngressEgressInput[];
  apply_to?: SecurityPolicyApplyToInput[];
  policy_mode?: PolicyMode;
  everoute_cluster_id: string;
  description?: string;
  name: string;
}

export interface DeleteSecurityPolicy {
  id: string;
}

export interface WithTaskDeleteSecurityPolicy {
  task_id?: string | null;
  data: DeleteSecurityPolicy;
}

export interface SecurityPolicyDeleteParams {
  where: SecurityPolicyWhereInput;
}

export interface SecurityPolicyUpdateParams {
  ingress?: SecurityPolicyIngressEgressInput[];
  egress?: SecurityPolicyIngressEgressInput[];
  apply_to?: SecurityPolicyApplyToInput[];
  policy_mode?: PolicyMode;
}

export interface SecurityPolicyUpdateBody {
  data: SecurityPolicyUpdateParams;
  where: SecurityPolicyWhereInput;
}

export interface UpdatePassrodSecurityParams {
  /** @format int32 */
  password_expire_days?: number;
  password_complexity?: PasswordComplexity;

  /** @format int32 */
  login_miss_time_threshold?: number;

  /** @format int32 */
  login_miss_num_threshold?: number;
}

export interface UpdateAccessRestrictionParams {
  access_list: string[];
  access_mode: AccessMode;
}

export interface UpdateSessionTimeoutParams {
  /** @format int32 */
  session_max_age: number;
}

export interface NestedSnapshotPlanTask {
  id: string;
}

export enum ProtectSnapshotStatus {
  PROTECT_SNAPSHOT_STATUS_CREATED = "PROTECT_SNAPSHOT_STATUS_CREATED",
  PROTECT_SNAPSHOT_STATUS_CREATING = "PROTECT_SNAPSHOT_STATUS_CREATING",
  PROTECT_SNAPSHOT_STATUS_DELETED = "PROTECT_SNAPSHOT_STATUS_DELETED",
  PROTECT_SNAPSHOT_STATUS_FAILED = "PROTECT_SNAPSHOT_STATUS_FAILED",
}

export interface NestedSnapshotGroupVmDiskInfo {
  disk_id: string;
  disk_snapshot_status: ProtectSnapshotStatus;
}

export interface NestedSnapshotGroupVmInfo {
  disks: NestedSnapshotGroupVmDiskInfo[];
  vm_id: string;
  vm_name: string;
  vm_snapshot_status: ProtectSnapshotStatus;
}

export interface SnapshotGroup {
  cluster: NestedCluster;
  deleted: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  estimated_recycling_time?: string | null;
  id: string;
  internal?: boolean | null;
  keep: boolean;
  local_created_at: string;
  local_id: string;

  /** @format int64 */
  logical_size_bytes: number;
  name: string;

  /** @format int32 */
  object_num: number;
  snapshotPlanTask: NestedSnapshotPlanTask;
  vm_info: NestedSnapshotGroupVmInfo[];
  vm_snapshots?: NestedVmSnapshot[] | null;
}

export interface WithTaskSnapshotGroup {
  task_id?: string | null;
  data: SnapshotGroup;
}

export interface SnapshotGroupRollbackParams {
  where: SnapshotGroupWhereInput;
}

export interface SnapshotGroupCloneParam {
  from_source_vm_id: string;
  to_cloned_vm_name: string;
}

export interface SnapshotGroupCloneParams {
  clone: SnapshotGroupCloneParam[];
  id: string;
}

export interface SnapshotGroupKeepParams {
  where: SnapshotGroupWhereInput;
}

export interface DeleteSnapshotGroup {
  id: string;
}

export interface WithTaskDeleteSnapshotGroup {
  task_id?: string | null;
  data: DeleteSnapshotGroup;
}

export interface SnapshotGroupDeletionParams {
  where: SnapshotGroupWhereInput;
}

export interface SnapshotPlan {
  /** @format int32 */
  auto_delete_num: number;

  /** @format int32 */
  auto_execute_num: number;
  cluster: NestedCluster;
  description: string;
  end_time?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  exec_h_m?: object | null;
  execute_intervals: number[];
  execute_plan_type: SnapshotPlanExecuteType;
  execution_tasks?: NestedSnapshotPlanTask[] | null;
  healthy: boolean;
  id: string;
  last_execute_end_time?: string | null;
  last_execute_status: SnapshotPlanExecuteStatus;
  last_execute_time?: string | null;
  local_id: string;

  /** @format int64 */
  logical_size_bytes: number;

  /** @format int32 */
  manual_delete_num: number;

  /** @format int32 */
  manual_execute_num: number;
  mirror: boolean;
  name: string;
  next_execute_time?: string | null;

  /** @format int32 */
  object_num: number;

  /** @format int64 */
  physical_size_bytes: number;

  /** @format int32 */
  remain_snapshot_num: number;

  /** @format int32 */
  snapshot_group_num: number;
  start_time: string;
  status: SnapshotPlanStatus;
  vms?: NestedVm[] | null;
}

export interface WithTaskSnapshotPlan {
  task_id?: string | null;
  data: SnapshotPlan;
}

export interface SnapshotPlanCreationParams {
  vm_ids: string[];
  execute_intervals: number[];
  execute_plan_type: SnapshotPlanExecuteType;
  exec_h_m?: string;
  end_time?: string;
  start_time: string;

  /** @format int32 */
  remain_snapshot_num: number;
  cluster_id: string;
  name: string;
}

export interface SnapshotPlanUpdationParams {
  data?: {
    vm_ids?: string[];
    execute_intervals?: number[];
    execute_plan_type?: SnapshotPlanExecuteType;
    exec_h_m?: string;
    end_time?: string;
    remain_snapshot_num?: number;
    name?: string;
  };
  where: SnapshotPlanWhereInput;
}

export interface DeleteSnapshotPlan {
  id: string;
}

export interface WithTaskDeleteSnapshotPlan {
  task_id?: string | null;
  data: DeleteSnapshotPlan;
}

export interface SnapshotPlanDeletionParams {
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanExecutionParams {
  data: { task_name: string };
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanSuspendedParams {
  where: SnapshotPlanWhereInput;
}

export interface SnapshotPlanResumeParams {
  where: SnapshotPlanWhereInput;
}

export enum SnmpAuthProtocol {
  MD5 = "MD5",
  SHA = "SHA",
}

export enum SnmpPrivacyProtocol {
  AES = "AES",
  DES = "DES",
}

export enum SnmpProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

export enum SnmpVersion {
  V2C = "V2C",
  V3 = "V3",
}

export interface SnmpTransport {
  auth_pass_phrase?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  cluster: NestedCluster;
  community?: string | null;
  disabled: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id: string;
  name: string;

  /** @format int32 */
  port: number;
  privacy_pass_phrase?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  protocol: SnmpProtocol;
  username?: string | null;
  version: SnmpVersion;
}

export interface WithTaskSnmpTransport {
  task_id?: string | null;
  data: SnmpTransport;
}

export interface SnmpTransportCreationParams {
  disabled?: boolean;
  privacy_protocol?: SnmpPrivacyProtocol;
  privacy_pass_phrase?: string;
  auth_protocol?: SnmpAuthProtocol;
  auth_pass_phrase?: string;
  username?: string;
  community?: string;

  /** @format int32 */
  port: number;
  protocol: SnmpProtocol;
  version: SnmpVersion;
  name: string;
  cluster_id: string;
}

export interface SnmpTransportWhereInput {
  AND?: SnmpTransportWhereInput[] | null;
  NOT?: SnmpTransportWhereInput[] | null;
  OR?: SnmpTransportWhereInput[] | null;
  auth_pass_phrase?: string | null;
  auth_pass_phrase_contains?: string | null;
  auth_pass_phrase_ends_with?: string | null;
  auth_pass_phrase_gt?: string | null;
  auth_pass_phrase_gte?: string | null;
  auth_pass_phrase_in?: string[] | null;
  auth_pass_phrase_lt?: string | null;
  auth_pass_phrase_lte?: string | null;
  auth_pass_phrase_not?: string | null;
  auth_pass_phrase_not_contains?: string | null;
  auth_pass_phrase_not_ends_with?: string | null;
  auth_pass_phrase_not_in?: string[] | null;
  auth_pass_phrase_not_starts_with?: string | null;
  auth_pass_phrase_starts_with?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  auth_protocol_in?: SnmpAuthProtocol[] | null;
  auth_protocol_not?: SnmpAuthProtocol | null;
  auth_protocol_not_in?: SnmpAuthProtocol[] | null;
  cluster?: ClusterWhereInput | null;
  community?: string | null;
  community_contains?: string | null;
  community_ends_with?: string | null;
  community_gt?: string | null;
  community_gte?: string | null;
  community_in?: string[] | null;
  community_lt?: string | null;
  community_lte?: string | null;
  community_not?: string | null;
  community_not_contains?: string | null;
  community_not_ends_with?: string | null;
  community_not_in?: string[] | null;
  community_not_starts_with?: string | null;
  community_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  port?: number | null;

  /** @format int32 */
  port_gt?: number | null;

  /** @format int32 */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format int32 */
  port_lt?: number | null;

  /** @format int32 */
  port_lte?: number | null;

  /** @format int32 */
  port_not?: number | null;
  port_not_in?: number[] | null;
  privacy_pass_phrase?: string | null;
  privacy_pass_phrase_contains?: string | null;
  privacy_pass_phrase_ends_with?: string | null;
  privacy_pass_phrase_gt?: string | null;
  privacy_pass_phrase_gte?: string | null;
  privacy_pass_phrase_in?: string[] | null;
  privacy_pass_phrase_lt?: string | null;
  privacy_pass_phrase_lte?: string | null;
  privacy_pass_phrase_not?: string | null;
  privacy_pass_phrase_not_contains?: string | null;
  privacy_pass_phrase_not_ends_with?: string | null;
  privacy_pass_phrase_not_in?: string[] | null;
  privacy_pass_phrase_not_starts_with?: string | null;
  privacy_pass_phrase_starts_with?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  privacy_protocol_in?: SnmpPrivacyProtocol[] | null;
  privacy_protocol_not?: SnmpPrivacyProtocol | null;
  privacy_protocol_not_in?: SnmpPrivacyProtocol[] | null;
  protocol?: SnmpProtocol | null;
  protocol_in?: SnmpProtocol[] | null;
  protocol_not?: SnmpProtocol | null;
  protocol_not_in?: SnmpProtocol[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  version?: SnmpVersion | null;
  version_in?: SnmpVersion[] | null;
  version_not?: SnmpVersion | null;
  version_not_in?: SnmpVersion[] | null;
}

export interface SnmpTransportUpdationParams {
  data: {
    disabled?: boolean;
    privacy_protocol?: SnmpPrivacyProtocol;
    privacy_pass_phrase?: string;
    auth_protocol?: SnmpAuthProtocol;
    auth_pass_phrase?: string;
    username?: string;
    community?: string;
    port?: number;
    protocol?: SnmpProtocol;
    version?: SnmpVersion;
    name?: string;
  };
  where: SnmpTransportWhereInput;
}

export interface DeleteSnmpTransport {
  id: string;
}

export interface WithTaskDeleteSnmpTransport {
  task_id?: string | null;
  data: DeleteSnmpTransport;
}

export interface SnmpTransportDeletionParams {
  where: SnmpTransportWhereInput;
}

export enum SnmpLanguageCode {
  EN_US = "EN_US",
  ZH_CN = "ZH_CN",
}

export interface SnmpTrapReceiver {
  auth_pass_phrase?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  cluster: NestedCluster;
  community?: string | null;
  disabled: boolean;
  engine_id?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  host: string;
  id: string;
  inform: boolean;
  language_code: SnmpLanguageCode;
  local_id: string;
  name: string;

  /** @format int32 */
  port: number;
  privacy_pass_phrase?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  protocol: SnmpProtocol;
  username?: string | null;
  version: SnmpVersion;
}

export interface WithTaskSnmpTrapReceiver {
  task_id?: string | null;
  data: SnmpTrapReceiver;
}

export interface SnmpTrapReceiverCreationParams {
  disabled?: boolean;
  inform?: boolean;
  engine_id?: string;
  privacy_protocol?: SnmpPrivacyProtocol;
  privacy_pass_phrase?: string;
  auth_protocol?: SnmpAuthProtocol;
  auth_pass_phrase?: string;
  username?: string;
  community?: string;
  language_code: SnmpLanguageCode;

  /** @format int32 */
  port: number;
  host: string;
  protocol: SnmpProtocol;
  version: SnmpVersion;
  name: string;
  cluster_id: string;
}

export interface SnmpTrapReceiverWhereInput {
  AND?: SnmpTrapReceiverWhereInput[] | null;
  NOT?: SnmpTrapReceiverWhereInput[] | null;
  OR?: SnmpTrapReceiverWhereInput[] | null;
  auth_pass_phrase?: string | null;
  auth_pass_phrase_contains?: string | null;
  auth_pass_phrase_ends_with?: string | null;
  auth_pass_phrase_gt?: string | null;
  auth_pass_phrase_gte?: string | null;
  auth_pass_phrase_in?: string[] | null;
  auth_pass_phrase_lt?: string | null;
  auth_pass_phrase_lte?: string | null;
  auth_pass_phrase_not?: string | null;
  auth_pass_phrase_not_contains?: string | null;
  auth_pass_phrase_not_ends_with?: string | null;
  auth_pass_phrase_not_in?: string[] | null;
  auth_pass_phrase_not_starts_with?: string | null;
  auth_pass_phrase_starts_with?: string | null;
  auth_protocol?: SnmpAuthProtocol | null;
  auth_protocol_in?: SnmpAuthProtocol[] | null;
  auth_protocol_not?: SnmpAuthProtocol | null;
  auth_protocol_not_in?: SnmpAuthProtocol[] | null;
  cluster?: ClusterWhereInput | null;
  community?: string | null;
  community_contains?: string | null;
  community_ends_with?: string | null;
  community_gt?: string | null;
  community_gte?: string | null;
  community_in?: string[] | null;
  community_lt?: string | null;
  community_lte?: string | null;
  community_not?: string | null;
  community_not_contains?: string | null;
  community_not_ends_with?: string | null;
  community_not_in?: string[] | null;
  community_not_starts_with?: string | null;
  community_starts_with?: string | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  engine_id?: string | null;
  engine_id_contains?: string | null;
  engine_id_ends_with?: string | null;
  engine_id_gt?: string | null;
  engine_id_gte?: string | null;
  engine_id_in?: string[] | null;
  engine_id_lt?: string | null;
  engine_id_lte?: string | null;
  engine_id_not?: string | null;
  engine_id_not_contains?: string | null;
  engine_id_not_ends_with?: string | null;
  engine_id_not_in?: string[] | null;
  engine_id_not_starts_with?: string | null;
  engine_id_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  host?: string | null;
  host_contains?: string | null;
  host_ends_with?: string | null;
  host_gt?: string | null;
  host_gte?: string | null;
  host_in?: string[] | null;
  host_lt?: string | null;
  host_lte?: string | null;
  host_not?: string | null;
  host_not_contains?: string | null;
  host_not_ends_with?: string | null;
  host_not_in?: string[] | null;
  host_not_starts_with?: string | null;
  host_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  inform?: boolean | null;
  inform_not?: boolean | null;
  language_code?: SnmpLanguageCode | null;
  language_code_in?: SnmpLanguageCode[] | null;
  language_code_not?: SnmpLanguageCode | null;
  language_code_not_in?: SnmpLanguageCode[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  port?: number | null;

  /** @format int32 */
  port_gt?: number | null;

  /** @format int32 */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format int32 */
  port_lt?: number | null;

  /** @format int32 */
  port_lte?: number | null;

  /** @format int32 */
  port_not?: number | null;
  port_not_in?: number[] | null;
  privacy_pass_phrase?: string | null;
  privacy_pass_phrase_contains?: string | null;
  privacy_pass_phrase_ends_with?: string | null;
  privacy_pass_phrase_gt?: string | null;
  privacy_pass_phrase_gte?: string | null;
  privacy_pass_phrase_in?: string[] | null;
  privacy_pass_phrase_lt?: string | null;
  privacy_pass_phrase_lte?: string | null;
  privacy_pass_phrase_not?: string | null;
  privacy_pass_phrase_not_contains?: string | null;
  privacy_pass_phrase_not_ends_with?: string | null;
  privacy_pass_phrase_not_in?: string[] | null;
  privacy_pass_phrase_not_starts_with?: string | null;
  privacy_pass_phrase_starts_with?: string | null;
  privacy_protocol?: SnmpPrivacyProtocol | null;
  privacy_protocol_in?: SnmpPrivacyProtocol[] | null;
  privacy_protocol_not?: SnmpPrivacyProtocol | null;
  privacy_protocol_not_in?: SnmpPrivacyProtocol[] | null;
  protocol?: SnmpProtocol | null;
  protocol_in?: SnmpProtocol[] | null;
  protocol_not?: SnmpProtocol | null;
  protocol_not_in?: SnmpProtocol[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
  version?: SnmpVersion | null;
  version_in?: SnmpVersion[] | null;
  version_not?: SnmpVersion | null;
  version_not_in?: SnmpVersion[] | null;
}

export interface SnmpTrapReceiverUpdationParams {
  data: {
    disabled?: boolean;
    inform?: boolean;
    engine_id?: string;
    privacy_protocol?: SnmpPrivacyProtocol;
    privacy_pass_phrase?: string;
    auth_protocol?: SnmpAuthProtocol;
    auth_pass_phrase?: string;
    username?: string;
    community?: string;
    language_code?: SnmpLanguageCode;
    port?: number;
    host?: string;
    protocol?: SnmpProtocol;
    version?: SnmpVersion;
    name?: string;
  };
  where: SnmpTrapReceiverWhereInput;
}

export interface DeleteSnmpTrapReceiver {
  id: string;
}

export interface WithTaskDeleteSnmpTrapReceiver {
  task_id?: string | null;
  data: DeleteSnmpTrapReceiver;
}

export interface SnmpTrapReceiverDeletionParams {
  where: SnmpTrapReceiverWhereInput;
}

export interface ColumnConfig {
  name: string;
  path: string;
}

export enum HostOrderByInput {
  AccessIpASC = "access_ip_ASC",
  AccessIpDESC = "access_ip_DESC",
  AllocableCpuCoresForVmExclusiveASC = "allocable_cpu_cores_for_vm_exclusive_ASC",
  AllocableCpuCoresForVmExclusiveDESC = "allocable_cpu_cores_for_vm_exclusive_DESC",
  AllocatableMemoryBytesASC = "allocatable_memory_bytes_ASC",
  AllocatableMemoryBytesDESC = "allocatable_memory_bytes_DESC",
  ChunkIdASC = "chunk_id_ASC",
  ChunkIdDESC = "chunk_id_DESC",
  CpuBrandASC = "cpu_brand_ASC",
  CpuBrandDESC = "cpu_brand_DESC",
  CpuFanSpeedUnitASC = "cpu_fan_speed_unit_ASC",
  CpuFanSpeedUnitDESC = "cpu_fan_speed_unit_DESC",
  CpuHzPerCoreASC = "cpu_hz_per_core_ASC",
  CpuHzPerCoreDESC = "cpu_hz_per_core_DESC",
  CpuModelASC = "cpu_model_ASC",
  CpuModelDESC = "cpu_model_DESC",
  CpuVendorASC = "cpu_vendor_ASC",
  CpuVendorDESC = "cpu_vendor_DESC",
  DataIpASC = "data_ip_ASC",
  DataIpDESC = "data_ip_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FailureDataSpaceASC = "failure_data_space_ASC",
  FailureDataSpaceDESC = "failure_data_space_DESC",
  HddDataCapacityASC = "hdd_data_capacity_ASC",
  HddDataCapacityDESC = "hdd_data_capacity_DESC",
  HddDiskCountASC = "hdd_disk_count_ASC",
  HddDiskCountDESC = "hdd_disk_count_DESC",
  HostStateASC = "host_state_ASC",
  HostStateDESC = "host_state_DESC",
  HypervisorIpASC = "hypervisor_ip_ASC",
  HypervisorIpDESC = "hypervisor_ip_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IommuASC = "iommu_ASC",
  IommuDESC = "iommu_DESC",
  IsOsInRaid1ASC = "is_os_in_raid1_ASC",
  IsOsInRaid1DESC = "is_os_in_raid1_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LsmCapDiskSafeUmountASC = "lsm_cap_disk_safe_umount_ASC",
  LsmCapDiskSafeUmountDESC = "lsm_cap_disk_safe_umount_DESC",
  ManagementIpASC = "management_ip_ASC",
  ManagementIpDESC = "management_ip_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NestedVirtualizationASC = "nested_virtualization_ASC",
  NestedVirtualizationDESC = "nested_virtualization_DESC",
  NicCountASC = "nic_count_ASC",
  NicCountDESC = "nic_count_DESC",
  NodeTopoLocalIdASC = "node_topo_local_id_ASC",
  NodeTopoLocalIdDESC = "node_topo_local_id_DESC",
  OsMemoryBytesASC = "os_memory_bytes_ASC",
  OsMemoryBytesDESC = "os_memory_bytes_DESC",
  OsVersionASC = "os_version_ASC",
  OsVersionDESC = "os_version_DESC",
  PmemDimmCapacityASC = "pmem_dimm_capacity_ASC",
  PmemDimmCapacityDESC = "pmem_dimm_capacity_DESC",
  PmemDimmCountASC = "pmem_dimm_count_ASC",
  PmemDimmCountDESC = "pmem_dimm_count_DESC",
  PmemDiskCountASC = "pmem_disk_count_ASC",
  PmemDiskCountDESC = "pmem_disk_count_DESC",
  ProvisionedCpuCoresASC = "provisioned_cpu_cores_ASC",
  ProvisionedCpuCoresDESC = "provisioned_cpu_cores_DESC",
  ProvisionedMemoryBytesASC = "provisioned_memory_bytes_ASC",
  ProvisionedMemoryBytesDESC = "provisioned_memory_bytes_DESC",
  RunningPauseVmMemoryBytesASC = "running_pause_vm_memory_bytes_ASC",
  RunningPauseVmMemoryBytesDESC = "running_pause_vm_memory_bytes_DESC",
  RunningVmNumASC = "running_vm_num_ASC",
  RunningVmNumDESC = "running_vm_num_DESC",
  ScvmCpuASC = "scvm_cpu_ASC",
  ScvmCpuDESC = "scvm_cpu_DESC",
  ScvmMemoryASC = "scvm_memory_ASC",
  ScvmMemoryDESC = "scvm_memory_DESC",
  ScvmNameASC = "scvm_name_ASC",
  ScvmNameDESC = "scvm_name_DESC",
  SerialASC = "serial_ASC",
  SerialDESC = "serial_DESC",
  SsdDataCapacityASC = "ssd_data_capacity_ASC",
  SsdDataCapacityDESC = "ssd_data_capacity_DESC",
  SsdDiskCountASC = "ssd_disk_count_ASC",
  SsdDiskCountDESC = "ssd_disk_count_DESC",
  StateASC = "state_ASC",
  StateDESC = "state_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  StoppedVmNumASC = "stopped_vm_num_ASC",
  StoppedVmNumDESC = "stopped_vm_num_DESC",
  SuspendedVmNumASC = "suspended_vm_num_ASC",
  SuspendedVmNumDESC = "suspended_vm_num_DESC",
  TotalCacheCapacityASC = "total_cache_capacity_ASC",
  TotalCacheCapacityDESC = "total_cache_capacity_DESC",
  TotalCpuCoresASC = "total_cpu_cores_ASC",
  TotalCpuCoresDESC = "total_cpu_cores_DESC",
  TotalCpuHzASC = "total_cpu_hz_ASC",
  TotalCpuHzDESC = "total_cpu_hz_DESC",
  TotalCpuSocketsASC = "total_cpu_sockets_ASC",
  TotalCpuSocketsDESC = "total_cpu_sockets_DESC",
  TotalDataCapacityASC = "total_data_capacity_ASC",
  TotalDataCapacityDESC = "total_data_capacity_DESC",
  TotalMemoryBytesASC = "total_memory_bytes_ASC",
  TotalMemoryBytesDESC = "total_memory_bytes_DESC",
  UsedCpuHzASC = "used_cpu_hz_ASC",
  UsedCpuHzDESC = "used_cpu_hz_DESC",
  UsedDataSpaceASC = "used_data_space_ASC",
  UsedDataSpaceDESC = "used_data_space_DESC",
  UsedMemoryBytesASC = "used_memory_bytes_ASC",
  UsedMemoryBytesDESC = "used_memory_bytes_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
  VmotionIpASC = "vmotion_ip_ASC",
  VmotionIpDESC = "vmotion_ip_DESC",
  WithFasterSsdAsCacheASC = "with_faster_ssd_as_cache_ASC",
  WithFasterSsdAsCacheDESC = "with_faster_ssd_as_cache_DESC",
}

export interface GetHostsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: HostOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: HostWhereInput | null;
}

export enum DatacenterOrderByInput {
  ClusterNumASC = "cluster_num_ASC",
  ClusterNumDESC = "cluster_num_DESC",
  FailureDataSpaceASC = "failure_data_space_ASC",
  FailureDataSpaceDESC = "failure_data_space_DESC",
  HostNumASC = "host_num_ASC",
  HostNumDESC = "host_num_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  TotalCpuHzASC = "total_cpu_hz_ASC",
  TotalCpuHzDESC = "total_cpu_hz_DESC",
  TotalDataCapacityASC = "total_data_capacity_ASC",
  TotalDataCapacityDESC = "total_data_capacity_DESC",
  TotalMemoryBytesASC = "total_memory_bytes_ASC",
  TotalMemoryBytesDESC = "total_memory_bytes_DESC",
  UsedCpuHzASC = "used_cpu_hz_ASC",
  UsedCpuHzDESC = "used_cpu_hz_DESC",
  UsedDataSpaceASC = "used_data_space_ASC",
  UsedDataSpaceDESC = "used_data_space_DESC",
  UsedMemoryBytesASC = "used_memory_bytes_ASC",
  UsedMemoryBytesDESC = "used_memory_bytes_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
}

export interface GetDatacentersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DatacenterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DatacenterWhereInput | null;
}

export enum ClusterOrderByInput {
  ApplicationHighestVersionASC = "application_highest_version_ASC",
  ApplicationHighestVersionDESC = "application_highest_version_DESC",
  ArchitectureASC = "architecture_ASC",
  ArchitectureDESC = "architecture_DESC",
  AutoConvergeASC = "auto_converge_ASC",
  AutoConvergeDESC = "auto_converge_DESC",
  ConnectStateASC = "connect_state_ASC",
  ConnectStateDESC = "connect_state_DESC",
  CurrentCpuModelASC = "current_cpu_model_ASC",
  CurrentCpuModelDESC = "current_cpu_model_DESC",
  DisconnectedDateASC = "disconnected_date_ASC",
  DisconnectedDateDESC = "disconnected_date_DESC",
  DisconnectedReasonASC = "disconnected_reason_ASC",
  DisconnectedReasonDESC = "disconnected_reason_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FailureDataSpaceASC = "failure_data_space_ASC",
  FailureDataSpaceDESC = "failure_data_space_DESC",
  HasMetroxASC = "has_metrox_ASC",
  HasMetroxDESC = "has_metrox_DESC",
  HostNumASC = "host_num_ASC",
  HostNumDESC = "host_num_DESC",
  HypervisorASC = "hypervisor_ASC",
  HypervisorDESC = "hypervisor_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpASC = "ip_ASC",
  IpDESC = "ip_DESC",
  IsAllFlashASC = "is_all_flash_ASC",
  IsAllFlashDESC = "is_all_flash_DESC",
  IscsiVipASC = "iscsi_vip_ASC",
  IscsiVipDESC = "iscsi_vip_DESC",
  LicenseExpireDateASC = "license_expire_date_ASC",
  LicenseExpireDateDESC = "license_expire_date_DESC",
  LicenseSerialASC = "license_serial_ASC",
  LicenseSerialDESC = "license_serial_DESC",
  LicenseSignDateASC = "license_sign_date_ASC",
  LicenseSignDateDESC = "license_sign_date_DESC",
  LicenseTypeASC = "license_type_ASC",
  LicenseTypeDESC = "license_type_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MaintenanceEndDateASC = "maintenance_end_date_ASC",
  MaintenanceEndDateDESC = "maintenance_end_date_DESC",
  MaintenanceStartDateASC = "maintenance_start_date_ASC",
  MaintenanceStartDateDESC = "maintenance_start_date_DESC",
  ManagementVipASC = "management_vip_ASC",
  ManagementVipDESC = "management_vip_DESC",
  MaxChunkNumASC = "max_chunk_num_ASC",
  MaxChunkNumDESC = "max_chunk_num_DESC",
  MaxPhysicalDataCapacityASC = "max_physical_data_capacity_ASC",
  MaxPhysicalDataCapacityDESC = "max_physical_data_capacity_DESC",
  MaxPhysicalDataCapacityPerNodeASC = "max_physical_data_capacity_per_node_ASC",
  MaxPhysicalDataCapacityPerNodeDESC = "max_physical_data_capacity_per_node_DESC",
  MetroAvailabilityChecklistASC = "metro_availability_checklist_ASC",
  MetroAvailabilityChecklistDESC = "metro_availability_checklist_DESC",
  MgtGatewayASC = "mgt_gateway_ASC",
  MgtGatewayDESC = "mgt_gateway_DESC",
  MgtNetmaskASC = "mgt_netmask_ASC",
  MgtNetmaskDESC = "mgt_netmask_DESC",
  MigrationDataSizeASC = "migration_data_size_ASC",
  MigrationDataSizeDESC = "migration_data_size_DESC",
  MigrationSpeedASC = "migration_speed_ASC",
  MigrationSpeedDESC = "migration_speed_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NtpModeASC = "ntp_mode_ASC",
  NtpModeDESC = "ntp_mode_DESC",
  NvmeOverRdmaEnabledASC = "nvme_over_rdma_enabled_ASC",
  NvmeOverRdmaEnabledDESC = "nvme_over_rdma_enabled_DESC",
  NvmeOverTcpEnabledASC = "nvme_over_tcp_enabled_ASC",
  NvmeOverTcpEnabledDESC = "nvme_over_tcp_enabled_DESC",
  NvmfEnabledASC = "nvmf_enabled_ASC",
  NvmfEnabledDESC = "nvmf_enabled_DESC",
  PmemEnabledASC = "pmem_enabled_ASC",
  PmemEnabledDESC = "pmem_enabled_DESC",
  ProvisionedCpuCoresASC = "provisioned_cpu_cores_ASC",
  ProvisionedCpuCoresDESC = "provisioned_cpu_cores_DESC",
  ProvisionedCpuCoresForActiveVmASC = "provisioned_cpu_cores_for_active_vm_ASC",
  ProvisionedCpuCoresForActiveVmDESC = "provisioned_cpu_cores_for_active_vm_DESC",
  ProvisionedForActiveVmRatioASC = "provisioned_for_active_vm_ratio_ASC",
  ProvisionedForActiveVmRatioDESC = "provisioned_for_active_vm_ratio_DESC",
  ProvisionedMemoryBytesASC = "provisioned_memory_bytes_ASC",
  ProvisionedMemoryBytesDESC = "provisioned_memory_bytes_DESC",
  ProvisionedRatioASC = "provisioned_ratio_ASC",
  ProvisionedRatioDESC = "provisioned_ratio_DESC",
  RdmaEnabledASC = "rdma_enabled_ASC",
  RdmaEnabledDESC = "rdma_enabled_DESC",
  RecoverDataSizeASC = "recover_data_size_ASC",
  RecoverDataSizeDESC = "recover_data_size_DESC",
  RecoverSpeedASC = "recover_speed_ASC",
  RecoverSpeedDESC = "recover_speed_DESC",
  ReservedCpuCoresForSystemServiceASC = "reserved_cpu_cores_for_system_service_ASC",
  ReservedCpuCoresForSystemServiceDESC = "reserved_cpu_cores_for_system_service_DESC",
  RunningVmNumASC = "running_vm_num_ASC",
  RunningVmNumDESC = "running_vm_num_DESC",
  SoftwareEditionASC = "software_edition_ASC",
  SoftwareEditionDESC = "software_edition_DESC",
  StoppedVmNumASC = "stopped_vm_num_ASC",
  StoppedVmNumDESC = "stopped_vm_num_DESC",
  StretchASC = "stretch_ASC",
  StretchDESC = "stretch_DESC",
  SuspendedVmNumASC = "suspended_vm_num_ASC",
  SuspendedVmNumDESC = "suspended_vm_num_DESC",
  TotalCacheCapacityASC = "total_cache_capacity_ASC",
  TotalCacheCapacityDESC = "total_cache_capacity_DESC",
  TotalCpuCoresASC = "total_cpu_cores_ASC",
  TotalCpuCoresDESC = "total_cpu_cores_DESC",
  TotalCpuHzASC = "total_cpu_hz_ASC",
  TotalCpuHzDESC = "total_cpu_hz_DESC",
  TotalCpuSocketsASC = "total_cpu_sockets_ASC",
  TotalCpuSocketsDESC = "total_cpu_sockets_DESC",
  TotalDataCapacityASC = "total_data_capacity_ASC",
  TotalDataCapacityDESC = "total_data_capacity_DESC",
  TotalMemoryBytesASC = "total_memory_bytes_ASC",
  TotalMemoryBytesDESC = "total_memory_bytes_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UpgradeToolVersionASC = "upgrade_tool_version_ASC",
  UpgradeToolVersionDESC = "upgrade_tool_version_DESC",
  UsedCpuHzASC = "used_cpu_hz_ASC",
  UsedCpuHzDESC = "used_cpu_hz_DESC",
  UsedDataSpaceASC = "used_data_space_ASC",
  UsedDataSpaceDESC = "used_data_space_DESC",
  UsedMemoryBytesASC = "used_memory_bytes_ASC",
  UsedMemoryBytesDESC = "used_memory_bytes_DESC",
  ValidDataSpaceASC = "valid_data_space_ASC",
  ValidDataSpaceDESC = "valid_data_space_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
  VhostEnabledASC = "vhost_enabled_ASC",
  VhostEnabledDESC = "vhost_enabled_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
}

export interface GetClustersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterWhereInput | null;
}

export enum NicOrderByInput {
  DriverASC = "driver_ASC",
  DriverDESC = "driver_DESC",
  DriverStateASC = "driver_state_ASC",
  DriverStateDESC = "driver_state_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  GatewayIpASC = "gateway_ip_ASC",
  GatewayIpDESC = "gateway_ip_DESC",
  IbdevASC = "ibdev_ASC",
  IbdevDESC = "ibdev_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IommuStatusASC = "iommu_status_ASC",
  IommuStatusDESC = "iommu_status_DESC",
  IpAddressASC = "ip_address_ASC",
  IpAddressDESC = "ip_address_DESC",
  IsSriovASC = "is_sriov_ASC",
  IsSriovDESC = "is_sriov_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MacAddressASC = "mac_address_ASC",
  MacAddressDESC = "mac_address_DESC",
  MaxVfNumASC = "max_vf_num_ASC",
  MaxVfNumDESC = "max_vf_num_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  MtuASC = "mtu_ASC",
  MtuDESC = "mtu_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NicUuidASC = "nic_uuid_ASC",
  NicUuidDESC = "nic_uuid_DESC",
  PhysicalASC = "physical_ASC",
  PhysicalDESC = "physical_DESC",
  RdmaEnabledASC = "rdma_enabled_ASC",
  RdmaEnabledDESC = "rdma_enabled_DESC",
  RunningASC = "running_ASC",
  RunningDESC = "running_DESC",
  SpeedASC = "speed_ASC",
  SpeedDESC = "speed_DESC",
  SubnetMaskASC = "subnet_mask_ASC",
  SubnetMaskDESC = "subnet_mask_DESC",
  TotalVfNumASC = "total_vf_num_ASC",
  TotalVfNumDESC = "total_vf_num_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UpASC = "up_ASC",
  UpDESC = "up_DESC",
  UsedVfNumASC = "used_vf_num_ASC",
  UsedVfNumDESC = "used_vf_num_DESC",
  UserUsageASC = "user_usage_ASC",
  UserUsageDESC = "user_usage_DESC",
}

export interface GetNicsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NicOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NicWhereInput | null;
}

export enum UsbDeviceOrderByInput {
  BindedASC = "binded_ASC",
  BindedDESC = "binded_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ManufacturerASC = "manufacturer_ASC",
  ManufacturerDESC = "manufacturer_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  UsbTypeASC = "usb_type_ASC",
  UsbTypeDESC = "usb_type_DESC",
}

export interface GetUsbDevicesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UsbDeviceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UsbDeviceWhereInput | null;
}

export enum IscsiTargetOrderByInput {
  BpsASC = "bps_ASC",
  BpsDESC = "bps_DESC",
  BpsMaxASC = "bps_max_ASC",
  BpsMaxDESC = "bps_max_DESC",
  BpsMaxLengthASC = "bps_max_length_ASC",
  BpsMaxLengthDESC = "bps_max_length_DESC",
  BpsRdASC = "bps_rd_ASC",
  BpsRdDESC = "bps_rd_DESC",
  BpsRdMaxASC = "bps_rd_max_ASC",
  BpsRdMaxDESC = "bps_rd_max_DESC",
  BpsRdMaxLengthASC = "bps_rd_max_length_ASC",
  BpsRdMaxLengthDESC = "bps_rd_max_length_DESC",
  BpsWrASC = "bps_wr_ASC",
  BpsWrDESC = "bps_wr_DESC",
  BpsWrMaxASC = "bps_wr_max_ASC",
  BpsWrMaxDESC = "bps_wr_max_DESC",
  BpsWrMaxLengthASC = "bps_wr_max_length_ASC",
  BpsWrMaxLengthDESC = "bps_wr_max_length_DESC",
  ChapEnabledASC = "chap_enabled_ASC",
  ChapEnabledDESC = "chap_enabled_DESC",
  ChapNameASC = "chap_name_ASC",
  ChapNameDESC = "chap_name_DESC",
  ChapSecretASC = "chap_secret_ASC",
  ChapSecretDESC = "chap_secret_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExternalUseASC = "external_use_ASC",
  ExternalUseDESC = "external_use_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InitiatorChapsASC = "initiator_chaps_ASC",
  InitiatorChapsDESC = "initiator_chaps_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  IoSizeASC = "io_size_ASC",
  IoSizeDESC = "io_size_DESC",
  IopsASC = "iops_ASC",
  IopsDESC = "iops_DESC",
  IopsMaxASC = "iops_max_ASC",
  IopsMaxDESC = "iops_max_DESC",
  IopsMaxLengthASC = "iops_max_length_ASC",
  IopsMaxLengthDESC = "iops_max_length_DESC",
  IopsRdASC = "iops_rd_ASC",
  IopsRdDESC = "iops_rd_DESC",
  IopsRdMaxASC = "iops_rd_max_ASC",
  IopsRdMaxDESC = "iops_rd_max_DESC",
  IopsRdMaxLengthASC = "iops_rd_max_length_ASC",
  IopsRdMaxLengthDESC = "iops_rd_max_length_DESC",
  IopsWrASC = "iops_wr_ASC",
  IopsWrDESC = "iops_wr_DESC",
  IopsWrMaxASC = "iops_wr_max_ASC",
  IopsWrMaxDESC = "iops_wr_max_DESC",
  IopsWrMaxLengthASC = "iops_wr_max_length_ASC",
  IopsWrMaxLengthDESC = "iops_wr_max_length_DESC",
  IpWhitelistASC = "ip_whitelist_ASC",
  IpWhitelistDESC = "ip_whitelist_DESC",
  IqnNameASC = "iqn_name_ASC",
  IqnNameDESC = "iqn_name_DESC",
  IqnWhitelistASC = "iqn_whitelist_ASC",
  IqnWhitelistDESC = "iqn_whitelist_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  StripeNumASC = "stripe_num_ASC",
  StripeNumDESC = "stripe_num_DESC",
  StripeSizeASC = "stripe_size_ASC",
  StripeSizeDESC = "stripe_size_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
}

export interface GetIscsiTargetsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiTargetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiTargetWhereInput | null;
}

export enum NfsExportOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExportInodeIdASC = "export_inode_id_ASC",
  ExportInodeIdDESC = "export_inode_id_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  IpWhitelistASC = "ip_whitelist_ASC",
  IpWhitelistDESC = "ip_whitelist_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
}

export interface GetNfsExportsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NfsExportOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NfsExportWhereInput | null;
}

export enum ElfDataStoreOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  ExternalUseASC = "external_use_ASC",
  ExternalUseDESC = "external_use_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  IpWhitelistASC = "ip_whitelist_ASC",
  IpWhitelistDESC = "ip_whitelist_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface ElfDataStoreWhereInput {
  AND?: ElfDataStoreWhereInput[] | null;
  NOT?: ElfDataStoreWhereInput[] | null;
  OR?: ElfDataStoreWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  external_use?: boolean | null;
  external_use_not?: boolean | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  internal?: boolean | null;
  internal_not?: boolean | null;
  ip_whitelist?: string | null;
  ip_whitelist_contains?: string | null;
  ip_whitelist_ends_with?: string | null;
  ip_whitelist_gt?: string | null;
  ip_whitelist_gte?: string | null;
  ip_whitelist_in?: string[] | null;
  ip_whitelist_lt?: string | null;
  ip_whitelist_lte?: string | null;
  ip_whitelist_not?: string | null;
  ip_whitelist_not_contains?: string | null;
  ip_whitelist_not_ends_with?: string | null;
  ip_whitelist_not_in?: string[] | null;
  ip_whitelist_not_starts_with?: string | null;
  ip_whitelist_starts_with?: string | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  nfs_export?: NfsExportWhereInput | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
  type?: ElfDataStoreType | null;
  type_in?: ElfDataStoreType[] | null;
  type_not?: ElfDataStoreType | null;
  type_not_in?: ElfDataStoreType[] | null;
}

export enum ElfDataStoreType {
  ISCSI = "ISCSI",
  NFS = "NFS",
  NVMe = "NVMe",
}

export interface GetElfDataStoresRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfDataStoreOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfDataStoreWhereInput | null;
}

export enum VdsOrderByInput {
  BondModeASC = "bond_mode_ASC",
  BondModeDESC = "bond_mode_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  OvsbrNameASC = "ovsbr_name_ASC",
  OvsbrNameDESC = "ovsbr_name_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  VlansNumASC = "vlans_num_ASC",
  VlansNumDESC = "vlans_num_DESC",
  WorkModeASC = "work_mode_ASC",
  WorkModeDESC = "work_mode_DESC",
}

export interface GetVdsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VdsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VdsWhereInput | null;
}

export enum DiskOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FailureInformationASC = "failure_information_ASC",
  FailureInformationDESC = "failure_information_DESC",
  FirmwareASC = "firmware_ASC",
  FirmwareDESC = "firmware_DESC",
  FunctionASC = "function_ASC",
  FunctionDESC = "function_DESC",
  HealthStatusASC = "health_status_ASC",
  HealthStatusDESC = "health_status_DESC",
  HealthyASC = "healthy_ASC",
  HealthyDESC = "healthy_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  MountedASC = "mounted_ASC",
  MountedDESC = "mounted_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NumaNodeASC = "numa_node_ASC",
  NumaNodeDESC = "numa_node_DESC",
  OfflineASC = "offline_ASC",
  OfflineDESC = "offline_DESC",
  PartitionsASC = "partitions_ASC",
  PartitionsDESC = "partitions_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  PersistentMemoryTypeASC = "persistent_memory_type_ASC",
  PersistentMemoryTypeDESC = "persistent_memory_type_DESC",
  PhysicalSlotOnBrickASC = "physical_slot_on_brick_ASC",
  PhysicalSlotOnBrickDESC = "physical_slot_on_brick_DESC",
  RecommendedUsageASC = "recommended_usage_ASC",
  RecommendedUsageDESC = "recommended_usage_DESC",
  RemainingLifePercentASC = "remaining_life_percent_ASC",
  RemainingLifePercentDESC = "remaining_life_percent_DESC",
  SerialASC = "serial_ASC",
  SerialDESC = "serial_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UsageASC = "usage_ASC",
  UsageDESC = "usage_DESC",
  UsageStatusASC = "usage_status_ASC",
  UsageStatusDESC = "usage_status_DESC",
}

export interface GetDisksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DiskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DiskWhereInput | null;
}

export enum VlanOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  GatewayIpASC = "gateway_ip_ASC",
  GatewayIpDESC = "gateway_ip_DESC",
  GatewaySubnetmaskASC = "gateway_subnetmask_ASC",
  GatewaySubnetmaskDESC = "gateway_subnetmask_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ModeTypeASC = "mode_type_ASC",
  ModeTypeDESC = "mode_type_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  QosMaxBandwidthASC = "qos_max_bandwidth_ASC",
  QosMaxBandwidthDESC = "qos_max_bandwidth_DESC",
  QosMinBandwidthASC = "qos_min_bandwidth_ASC",
  QosMinBandwidthDESC = "qos_min_bandwidth_DESC",
  QosPriorityASC = "qos_priority_ASC",
  QosPriorityDESC = "qos_priority_DESC",
  SubnetmaskASC = "subnetmask_ASC",
  SubnetmaskDESC = "subnetmask_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  VlanIdASC = "vlan_id_ASC",
  VlanIdDESC = "vlan_id_DESC",
}

export interface GetVlansRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VlanOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VlanWhereInput | null;
}

export enum VmVolumeOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  ElfStoragePolicyASC = "elf_storage_policy_ASC",
  ElfStoragePolicyDESC = "elf_storage_policy_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  GuestSizeUsageASC = "guest_size_usage_ASC",
  GuestSizeUsageDESC = "guest_size_usage_DESC",
  GuestUsedSizeASC = "guest_used_size_ASC",
  GuestUsedSizeDESC = "guest_used_size_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MountingASC = "mounting_ASC",
  MountingDESC = "mounting_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  SharingASC = "sharing_ASC",
  SharingDESC = "sharing_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UniqueLogicalSizeASC = "unique_logical_size_ASC",
  UniqueLogicalSizeDESC = "unique_logical_size_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetVmVolumesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmVolumeOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmVolumeWhereInput | null;
}

export enum ElfImageOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
}

export interface GetElfImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfImageWhereInput | null;
}

export enum VmTemplateOrderByInput {
  ClockOffsetASC = "clock_offset_ASC",
  ClockOffsetDESC = "clock_offset_DESC",
  CloudInitSupportedASC = "cloud_init_supported_ASC",
  CloudInitSupportedDESC = "cloud_init_supported_DESC",
  CpuASC = "cpu_ASC",
  CpuDESC = "cpu_DESC",
  CpuModelASC = "cpu_model_ASC",
  CpuModelDESC = "cpu_model_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FirmwareASC = "firmware_ASC",
  FirmwareDESC = "firmware_DESC",
  HaASC = "ha_ASC",
  HaDESC = "ha_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IoPolicyASC = "io_policy_ASC",
  IoPolicyDESC = "io_policy_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MaxBandwidthASC = "max_bandwidth_ASC",
  MaxBandwidthDESC = "max_bandwidth_DESC",
  MaxBandwidthPolicyASC = "max_bandwidth_policy_ASC",
  MaxBandwidthPolicyDESC = "max_bandwidth_policy_DESC",
  MaxIopsASC = "max_iops_ASC",
  MaxIopsDESC = "max_iops_DESC",
  MaxIopsPolicyASC = "max_iops_policy_ASC",
  MaxIopsPolicyDESC = "max_iops_policy_DESC",
  MemoryASC = "memory_ASC",
  MemoryDESC = "memory_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  VcpuASC = "vcpu_ASC",
  VcpuDESC = "vcpu_DESC",
  VideoTypeASC = "video_type_ASC",
  VideoTypeDESC = "video_type_DESC",
  VmDisksASC = "vm_disks_ASC",
  VmDisksDESC = "vm_disks_DESC",
  VmNicsASC = "vm_nics_ASC",
  VmNicsDESC = "vm_nics_DESC",
  WinOptASC = "win_opt_ASC",
  WinOptDESC = "win_opt_DESC",
}

export interface GetVmTemplatesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmTemplateWhereInput | null;
}

export enum VmPlacementGroupOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EnabledASC = "enabled_ASC",
  EnabledDESC = "enabled_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LocalUpdatedAtASC = "local_updated_at_ASC",
  LocalUpdatedAtDESC = "local_updated_at_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  VmHostMustEnabledASC = "vm_host_must_enabled_ASC",
  VmHostMustEnabledDESC = "vm_host_must_enabled_DESC",
  VmHostMustPolicyASC = "vm_host_must_policy_ASC",
  VmHostMustPolicyDESC = "vm_host_must_policy_DESC",
  VmHostPreferEnabledASC = "vm_host_prefer_enabled_ASC",
  VmHostPreferEnabledDESC = "vm_host_prefer_enabled_DESC",
  VmHostPreferPolicyASC = "vm_host_prefer_policy_ASC",
  VmHostPreferPolicyDESC = "vm_host_prefer_policy_DESC",
  VmVmPolicyASC = "vm_vm_policy_ASC",
  VmVmPolicyDESC = "vm_vm_policy_DESC",
  VmVmPolicyEnabledASC = "vm_vm_policy_enabled_ASC",
  VmVmPolicyEnabledDESC = "vm_vm_policy_enabled_DESC",
}

export interface GetVmPlacementGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmPlacementGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmPlacementGroupWhereInput | null;
}

export enum AlertOrderByInput {
  CauseASC = "cause_ASC",
  CauseDESC = "cause_DESC",
  CreateTimeASC = "create_time_ASC",
  CreateTimeDESC = "create_time_DESC",
  EndedASC = "ended_ASC",
  EndedDESC = "ended_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  ImpactASC = "impact_ASC",
  ImpactDESC = "impact_DESC",
  LabelsASC = "labels_ASC",
  LabelsDESC = "labels_DESC",
  LocalCreateTimeASC = "local_create_time_ASC",
  LocalCreateTimeDESC = "local_create_time_DESC",
  LocalEndTimeASC = "local_end_time_ASC",
  LocalEndTimeDESC = "local_end_time_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LocalStartTimeASC = "local_start_time_ASC",
  LocalStartTimeDESC = "local_start_time_DESC",
  LocalUpdateTimeASC = "local_update_time_ASC",
  LocalUpdateTimeDESC = "local_update_time_DESC",
  MessageASC = "message_ASC",
  MessageDESC = "message_DESC",
  SeverityASC = "severity_ASC",
  SeverityDESC = "severity_DESC",
  SolutionASC = "solution_ASC",
  SolutionDESC = "solution_DESC",
  ThresholdASC = "threshold_ASC",
  ThresholdDESC = "threshold_DESC",
  ValueASC = "value_ASC",
  ValueDESC = "value_DESC",
}

export interface GetAlertsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertWhereInput | null;
}

export enum GlobalAlertRuleOrderByInput {
  BooleanASC = "boolean_ASC",
  BooleanDESC = "boolean_DESC",
  CauseASC = "cause_ASC",
  CauseDESC = "cause_DESC",
  DefaultThresholdsASC = "default_thresholds_ASC",
  DefaultThresholdsDESC = "default_thresholds_DESC",
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  ImpactASC = "impact_ASC",
  ImpactDESC = "impact_DESC",
  MessageASC = "message_ASC",
  MessageDESC = "message_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ObjectASC = "object_ASC",
  ObjectDESC = "object_DESC",
  OperatorASC = "operator_ASC",
  OperatorDESC = "operator_DESC",
  SolutionASC = "solution_ASC",
  SolutionDESC = "solution_DESC",
  ThresholdsASC = "thresholds_ASC",
  ThresholdsDESC = "thresholds_DESC",
  UnitASC = "unit_ASC",
  UnitDESC = "unit_DESC",
}

export interface GetGlobalAlertRulesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GlobalAlertRuleOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GlobalAlertRuleWhereInput | null;
}

export enum SnapshotPlanOrderByInput {
  AutoDeleteNumASC = "auto_delete_num_ASC",
  AutoDeleteNumDESC = "auto_delete_num_DESC",
  AutoExecuteNumASC = "auto_execute_num_ASC",
  AutoExecuteNumDESC = "auto_execute_num_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EndTimeASC = "end_time_ASC",
  EndTimeDESC = "end_time_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExecHMASC = "exec_h_m_ASC",
  ExecHMDESC = "exec_h_m_DESC",
  ExecutePlanTypeASC = "execute_plan_type_ASC",
  ExecutePlanTypeDESC = "execute_plan_type_DESC",
  HealthyASC = "healthy_ASC",
  HealthyDESC = "healthy_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LastExecuteEndTimeASC = "last_execute_end_time_ASC",
  LastExecuteEndTimeDESC = "last_execute_end_time_DESC",
  LastExecuteStatusASC = "last_execute_status_ASC",
  LastExecuteStatusDESC = "last_execute_status_DESC",
  LastExecuteTimeASC = "last_execute_time_ASC",
  LastExecuteTimeDESC = "last_execute_time_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LogicalSizeBytesASC = "logical_size_bytes_ASC",
  LogicalSizeBytesDESC = "logical_size_bytes_DESC",
  ManualDeleteNumASC = "manual_delete_num_ASC",
  ManualDeleteNumDESC = "manual_delete_num_DESC",
  ManualExecuteNumASC = "manual_execute_num_ASC",
  ManualExecuteNumDESC = "manual_execute_num_DESC",
  MirrorASC = "mirror_ASC",
  MirrorDESC = "mirror_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NextExecuteTimeASC = "next_execute_time_ASC",
  NextExecuteTimeDESC = "next_execute_time_DESC",
  ObjectNumASC = "object_num_ASC",
  ObjectNumDESC = "object_num_DESC",
  PhysicalSizeBytesASC = "physical_size_bytes_ASC",
  PhysicalSizeBytesDESC = "physical_size_bytes_DESC",
  RemainSnapshotNumASC = "remain_snapshot_num_ASC",
  RemainSnapshotNumDESC = "remain_snapshot_num_DESC",
  SnapshotGroupNumASC = "snapshot_group_num_ASC",
  SnapshotGroupNumDESC = "snapshot_group_num_DESC",
  StartTimeASC = "start_time_ASC",
  StartTimeDESC = "start_time_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
}

export interface GetSnapshotPlansRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotPlanOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotPlanWhereInput | null;
}

export enum EntityFilterOrderByInput {
  ApplyToAllClustersASC = "apply_to_all_clusters_ASC",
  ApplyToAllClustersDESC = "apply_to_all_clusters_DESC",
  EntityTypeASC = "entity_type_ASC",
  EntityTypeDESC = "entity_type_DESC",
  FilterStatusASC = "filter_status_ASC",
  FilterStatusDESC = "filter_status_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LastExecutedAtASC = "last_executed_at_ASC",
  LastExecutedAtDESC = "last_executed_at_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PresetASC = "preset_ASC",
  PresetDESC = "preset_DESC",
  RulesASC = "rules_ASC",
  RulesDESC = "rules_DESC",
}

export interface GetEntityFiltersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EntityFilterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EntityFilterWhereInput | null;
}

export enum UserOrderByInput {
  AuthConfigIdASC = "auth_config_id_ASC",
  AuthConfigIdDESC = "auth_config_id_DESC",
  DisplayUsernameASC = "display_username_ASC",
  DisplayUsernameDESC = "display_username_DESC",
  EmailAddressASC = "email_address_ASC",
  EmailAddressDESC = "email_address_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  LdapDnASC = "ldap_dn_ASC",
  LdapDnDESC = "ldap_dn_DESC",
  MobilePhoneASC = "mobile_phone_ASC",
  MobilePhoneDESC = "mobile_phone_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PasswordExpiredASC = "password_expired_ASC",
  PasswordExpiredDESC = "password_expired_DESC",
  PasswordRecoverQaASC = "password_recover_qa_ASC",
  PasswordRecoverQaDESC = "password_recover_qa_DESC",
  PasswordUpdatedAtASC = "password_updated_at_ASC",
  PasswordUpdatedAtDESC = "password_updated_at_DESC",
  RoleASC = "role_ASC",
  RoleDESC = "role_DESC",
  SourceASC = "source_ASC",
  SourceDESC = "source_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
}

export interface GetUsersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserWhereInput | null;
}

export enum ConsistencyGroupOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetConsistencyGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ConsistencyGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ConsistencyGroupWhereInput | null;
}

export enum IscsiConnectionOrderByInput {
  ClientPortASC = "client_port_ASC",
  ClientPortDESC = "client_port_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InitiatorIpASC = "initiator_ip_ASC",
  InitiatorIpDESC = "initiator_ip_DESC",
  TrTypeASC = "tr_type_ASC",
  TrTypeDESC = "tr_type_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface IscsiConnectionWhereInput {
  AND?: IscsiConnectionWhereInput[] | null;
  NOT?: IscsiConnectionWhereInput[] | null;
  OR?: IscsiConnectionWhereInput[] | null;

  /** @format int32 */
  client_port?: number | null;

  /** @format int32 */
  client_port_gt?: number | null;

  /** @format int32 */
  client_port_gte?: number | null;
  client_port_in?: number[] | null;

  /** @format int32 */
  client_port_lt?: number | null;

  /** @format int32 */
  client_port_lte?: number | null;

  /** @format int32 */
  client_port_not?: number | null;
  client_port_not_in?: number[] | null;
  cluster?: ClusterWhereInput | null;
  host?: HostWhereInput | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  initiator_ip?: string | null;
  initiator_ip_contains?: string | null;
  initiator_ip_ends_with?: string | null;
  initiator_ip_gt?: string | null;
  initiator_ip_gte?: string | null;
  initiator_ip_in?: string[] | null;
  initiator_ip_lt?: string | null;
  initiator_ip_lte?: string | null;
  initiator_ip_not?: string | null;
  initiator_ip_not_contains?: string | null;
  initiator_ip_not_ends_with?: string | null;
  initiator_ip_not_in?: string[] | null;
  initiator_ip_not_starts_with?: string | null;
  initiator_ip_starts_with?: string | null;
  iscsi_target?: IscsiTargetWhereInput | null;
  nvmf_subsystem?: NvmfSubsystemWhereInput | null;
  tr_type?: StoreTransportType | null;
  tr_type_in?: StoreTransportType[] | null;
  tr_type_not?: StoreTransportType | null;
  tr_type_not_in?: StoreTransportType[] | null;
  type?: StoreConnectionType | null;
  type_in?: StoreConnectionType[] | null;
  type_not?: StoreConnectionType | null;
  type_not_in?: StoreConnectionType[] | null;
}

export enum StoreTransportType {
  RDMA = "RDMA",
  TCP = "TCP",
}

export enum StoreConnectionType {
  ISCSI = "ISCSI",
  NVMe = "NVMe",
}

export interface GetIscsiConnectionsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiConnectionOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiConnectionWhereInput | null;
}

export enum IscsiLunSnapshotOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetIscsiLunSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiLunSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiLunSnapshotWhereInput | null;
}

export enum SystemAuditLogOrderByInput {
  ActionASC = "action_ASC",
  ActionDESC = "action_DESC",
  FinishedAtASC = "finished_at_ASC",
  FinishedAtDESC = "finished_at_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MessageASC = "message_ASC",
  MessageDESC = "message_DESC",
  ResourceIdASC = "resource_id_ASC",
  ResourceIdDESC = "resource_id_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
}

export interface SystemAuditLogWhereInput {
  AND?: SystemAuditLogWhereInput[] | null;
  NOT?: SystemAuditLogWhereInput[] | null;
  OR?: SystemAuditLogWhereInput[] | null;
  action?: string | null;
  action_contains?: string | null;
  action_ends_with?: string | null;
  action_gt?: string | null;
  action_gte?: string | null;
  action_in?: string[] | null;
  action_lt?: string | null;
  action_lte?: string | null;
  action_not?: string | null;
  action_not_contains?: string | null;
  action_not_ends_with?: string | null;
  action_not_in?: string[] | null;
  action_not_starts_with?: string | null;
  action_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  status?: UserAuditLogStatus | null;
  status_in?: UserAuditLogStatus[] | null;
  status_not?: UserAuditLogStatus | null;
  status_not_in?: UserAuditLogStatus[] | null;
}

export enum UserAuditLogStatus {
  FAILED = "FAILED",
  SUCCESSED = "SUCCESSED",
}

export interface GetSystemAuditLogsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SystemAuditLogOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SystemAuditLogWhereInput | null;
}

export enum UserAuditLogOrderByInput {
  ActionASC = "action_ASC",
  ActionDESC = "action_DESC",
  AuthTypeASC = "auth_type_ASC",
  AuthTypeDESC = "auth_type_DESC",
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  FinishedAtASC = "finished_at_ASC",
  FinishedAtDESC = "finished_at_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpAddressASC = "ip_address_ASC",
  IpAddressDESC = "ip_address_DESC",
  MessageASC = "message_ASC",
  MessageDESC = "message_DESC",
  ResourceIdASC = "resource_id_ASC",
  ResourceIdDESC = "resource_id_DESC",
  ResourceTypeASC = "resource_type_ASC",
  ResourceTypeDESC = "resource_type_DESC",
  StartedAtASC = "started_at_ASC",
  StartedAtDESC = "started_at_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
}

export interface UserAuditLogWhereInput {
  AND?: UserAuditLogWhereInput[] | null;
  NOT?: UserAuditLogWhereInput[] | null;
  OR?: UserAuditLogWhereInput[] | null;
  action?: string | null;
  action_contains?: string | null;
  action_ends_with?: string | null;
  action_gt?: string | null;
  action_gte?: string | null;
  action_in?: string[] | null;
  action_lt?: string | null;
  action_lte?: string | null;
  action_not?: string | null;
  action_not_contains?: string | null;
  action_not_ends_with?: string | null;
  action_not_in?: string[] | null;
  action_not_starts_with?: string | null;
  action_starts_with?: string | null;
  auth_type?: string | null;
  auth_type_contains?: string | null;
  auth_type_ends_with?: string | null;
  auth_type_gt?: string | null;
  auth_type_gte?: string | null;
  auth_type_in?: string[] | null;
  auth_type_lt?: string | null;
  auth_type_lte?: string | null;
  auth_type_not?: string | null;
  auth_type_not_contains?: string | null;
  auth_type_not_ends_with?: string | null;
  auth_type_not_in?: string[] | null;
  auth_type_not_starts_with?: string | null;
  auth_type_starts_with?: string | null;
  cluster?: ClusterWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  ip_address?: string | null;
  ip_address_contains?: string | null;
  ip_address_ends_with?: string | null;
  ip_address_gt?: string | null;
  ip_address_gte?: string | null;
  ip_address_in?: string[] | null;
  ip_address_lt?: string | null;
  ip_address_lte?: string | null;
  ip_address_not?: string | null;
  ip_address_not_contains?: string | null;
  ip_address_not_ends_with?: string | null;
  ip_address_not_in?: string[] | null;
  ip_address_not_starts_with?: string | null;
  ip_address_starts_with?: string | null;
  message?: string | null;
  message_contains?: string | null;
  message_ends_with?: string | null;
  message_gt?: string | null;
  message_gte?: string | null;
  message_in?: string[] | null;
  message_lt?: string | null;
  message_lte?: string | null;
  message_not?: string | null;
  message_not_contains?: string | null;
  message_not_ends_with?: string | null;
  message_not_in?: string[] | null;
  message_not_starts_with?: string | null;
  message_starts_with?: string | null;
  resource_id?: string | null;
  resource_id_contains?: string | null;
  resource_id_ends_with?: string | null;
  resource_id_gt?: string | null;
  resource_id_gte?: string | null;
  resource_id_in?: string[] | null;
  resource_id_lt?: string | null;
  resource_id_lte?: string | null;
  resource_id_not?: string | null;
  resource_id_not_contains?: string | null;
  resource_id_not_ends_with?: string | null;
  resource_id_not_in?: string[] | null;
  resource_id_not_starts_with?: string | null;
  resource_id_starts_with?: string | null;
  resource_type?: string | null;
  resource_type_contains?: string | null;
  resource_type_ends_with?: string | null;
  resource_type_gt?: string | null;
  resource_type_gte?: string | null;
  resource_type_in?: string[] | null;
  resource_type_lt?: string | null;
  resource_type_lte?: string | null;
  resource_type_not?: string | null;
  resource_type_not_contains?: string | null;
  resource_type_not_ends_with?: string | null;
  resource_type_not_in?: string[] | null;
  resource_type_not_starts_with?: string | null;
  resource_type_starts_with?: string | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: UserAuditLogStatus | null;
  status_in?: UserAuditLogStatus[] | null;
  status_not?: UserAuditLogStatus | null;
  status_not_in?: UserAuditLogStatus[] | null;
  user?: UserWhereInput | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface GetUserAuditLogsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserAuditLogOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserAuditLogWhereInput | null;
}

export enum TaskOrderByInput {
  ArgsASC = "args_ASC",
  ArgsDESC = "args_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  ErrorCodeASC = "error_code_ASC",
  ErrorCodeDESC = "error_code_DESC",
  ErrorMessageASC = "error_message_ASC",
  ErrorMessageDESC = "error_message_DESC",
  FinishedAtASC = "finished_at_ASC",
  FinishedAtDESC = "finished_at_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  KeyASC = "key_ASC",
  KeyDESC = "key_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  ProgressASC = "progress_ASC",
  ProgressDESC = "progress_DESC",
  ResourceIdASC = "resource_id_ASC",
  ResourceIdDESC = "resource_id_DESC",
  ResourceMutationASC = "resource_mutation_ASC",
  ResourceMutationDESC = "resource_mutation_DESC",
  ResourceRollbackErrorASC = "resource_rollback_error_ASC",
  ResourceRollbackErrorDESC = "resource_rollback_error_DESC",
  ResourceRollbackRetryCountASC = "resource_rollback_retry_count_ASC",
  ResourceRollbackRetryCountDESC = "resource_rollback_retry_count_DESC",
  ResourceRollbackedASC = "resource_rollbacked_ASC",
  ResourceRollbackedDESC = "resource_rollbacked_DESC",
  ResourceTypeASC = "resource_type_ASC",
  ResourceTypeDESC = "resource_type_DESC",
  SnapshotASC = "snapshot_ASC",
  SnapshotDESC = "snapshot_DESC",
  StartedAtASC = "started_at_ASC",
  StartedAtDESC = "started_at_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  StepsASC = "steps_ASC",
  StepsDESC = "steps_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface GetTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: TaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: TaskWhereInput | null;
}

export enum IscsiLunOrderByInput {
  AllowedInitiatorsASC = "allowed_initiators_ASC",
  AllowedInitiatorsDESC = "allowed_initiators_DESC",
  AssignedSizeASC = "assigned_size_ASC",
  AssignedSizeDESC = "assigned_size_DESC",
  BpsASC = "bps_ASC",
  BpsDESC = "bps_DESC",
  BpsMaxASC = "bps_max_ASC",
  BpsMaxDESC = "bps_max_DESC",
  BpsMaxLengthASC = "bps_max_length_ASC",
  BpsMaxLengthDESC = "bps_max_length_DESC",
  BpsRdASC = "bps_rd_ASC",
  BpsRdDESC = "bps_rd_DESC",
  BpsRdMaxASC = "bps_rd_max_ASC",
  BpsRdMaxDESC = "bps_rd_max_DESC",
  BpsRdMaxLengthASC = "bps_rd_max_length_ASC",
  BpsRdMaxLengthDESC = "bps_rd_max_length_DESC",
  BpsWrASC = "bps_wr_ASC",
  BpsWrDESC = "bps_wr_DESC",
  BpsWrMaxASC = "bps_wr_max_ASC",
  BpsWrMaxDESC = "bps_wr_max_DESC",
  BpsWrMaxLengthASC = "bps_wr_max_length_ASC",
  BpsWrMaxLengthDESC = "bps_wr_max_length_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IoSizeASC = "io_size_ASC",
  IoSizeDESC = "io_size_DESC",
  IopsASC = "iops_ASC",
  IopsDESC = "iops_DESC",
  IopsMaxASC = "iops_max_ASC",
  IopsMaxDESC = "iops_max_DESC",
  IopsMaxLengthASC = "iops_max_length_ASC",
  IopsMaxLengthDESC = "iops_max_length_DESC",
  IopsRdASC = "iops_rd_ASC",
  IopsRdDESC = "iops_rd_DESC",
  IopsRdMaxASC = "iops_rd_max_ASC",
  IopsRdMaxDESC = "iops_rd_max_DESC",
  IopsRdMaxLengthASC = "iops_rd_max_length_ASC",
  IopsRdMaxLengthDESC = "iops_rd_max_length_DESC",
  IopsWrASC = "iops_wr_ASC",
  IopsWrDESC = "iops_wr_DESC",
  IopsWrMaxASC = "iops_wr_max_ASC",
  IopsWrMaxDESC = "iops_wr_max_DESC",
  IopsWrMaxLengthASC = "iops_wr_max_length_ASC",
  IopsWrMaxLengthDESC = "iops_wr_max_length_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LunIdASC = "lun_id_ASC",
  LunIdDESC = "lun_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  SharedSizeASC = "shared_size_ASC",
  SharedSizeDESC = "shared_size_DESC",
  SnapshotNumASC = "snapshot_num_ASC",
  SnapshotNumDESC = "snapshot_num_DESC",
  StripeNumASC = "stripe_num_ASC",
  StripeNumDESC = "stripe_num_DESC",
  StripeSizeASC = "stripe_size_ASC",
  StripeSizeDESC = "stripe_size_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
  UniqueLogicalSizeASC = "unique_logical_size_ASC",
  UniqueLogicalSizeDESC = "unique_logical_size_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
  ZbsVolumeIdASC = "zbs_volume_id_ASC",
  ZbsVolumeIdDESC = "zbs_volume_id_DESC",
}

export interface GetIscsiLunsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiLunOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiLunWhereInput | null;
}

export enum NamespaceGroupOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreateTimeASC = "local_create_time_ASC",
  LocalCreateTimeDESC = "local_create_time_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetNamespaceGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NamespaceGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NamespaceGroupWhereInput | null;
}

export enum NvmfNamespaceOrderByInput {
  AssignedSizeASC = "assigned_size_ASC",
  AssignedSizeDESC = "assigned_size_DESC",
  BpsASC = "bps_ASC",
  BpsDESC = "bps_DESC",
  BpsMaxASC = "bps_max_ASC",
  BpsMaxDESC = "bps_max_DESC",
  BpsMaxLengthASC = "bps_max_length_ASC",
  BpsMaxLengthDESC = "bps_max_length_DESC",
  BpsRdASC = "bps_rd_ASC",
  BpsRdDESC = "bps_rd_DESC",
  BpsRdMaxASC = "bps_rd_max_ASC",
  BpsRdMaxDESC = "bps_rd_max_DESC",
  BpsRdMaxLengthASC = "bps_rd_max_length_ASC",
  BpsRdMaxLengthDESC = "bps_rd_max_length_DESC",
  BpsWrASC = "bps_wr_ASC",
  BpsWrDESC = "bps_wr_DESC",
  BpsWrMaxASC = "bps_wr_max_ASC",
  BpsWrMaxDESC = "bps_wr_max_DESC",
  BpsWrMaxLengthASC = "bps_wr_max_length_ASC",
  BpsWrMaxLengthDESC = "bps_wr_max_length_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IoSizeASC = "io_size_ASC",
  IoSizeDESC = "io_size_DESC",
  IopsASC = "iops_ASC",
  IopsDESC = "iops_DESC",
  IopsMaxASC = "iops_max_ASC",
  IopsMaxDESC = "iops_max_DESC",
  IopsMaxLengthASC = "iops_max_length_ASC",
  IopsMaxLengthDESC = "iops_max_length_DESC",
  IopsRdASC = "iops_rd_ASC",
  IopsRdDESC = "iops_rd_DESC",
  IopsRdMaxASC = "iops_rd_max_ASC",
  IopsRdMaxDESC = "iops_rd_max_DESC",
  IopsRdMaxLengthASC = "iops_rd_max_length_ASC",
  IopsRdMaxLengthDESC = "iops_rd_max_length_DESC",
  IopsWrASC = "iops_wr_ASC",
  IopsWrDESC = "iops_wr_DESC",
  IopsWrMaxASC = "iops_wr_max_ASC",
  IopsWrMaxDESC = "iops_wr_max_DESC",
  IopsWrMaxLengthASC = "iops_wr_max_length_ASC",
  IopsWrMaxLengthDESC = "iops_wr_max_length_DESC",
  IsSharedASC = "is_shared_ASC",
  IsSharedDESC = "is_shared_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NamespaceIdASC = "namespace_id_ASC",
  NamespaceIdDESC = "namespace_id_DESC",
  NqnWhitelistASC = "nqn_whitelist_ASC",
  NqnWhitelistDESC = "nqn_whitelist_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  SharedSizeASC = "shared_size_ASC",
  SharedSizeDESC = "shared_size_DESC",
  SnapshotNumASC = "snapshot_num_ASC",
  SnapshotNumDESC = "snapshot_num_DESC",
  StripeNumASC = "stripe_num_ASC",
  StripeNumDESC = "stripe_num_DESC",
  StripeSizeASC = "stripe_size_ASC",
  StripeSizeDESC = "stripe_size_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
  UniqueLogicalSizeASC = "unique_logical_size_ASC",
  UniqueLogicalSizeDESC = "unique_logical_size_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
  ZbsVolumeIdASC = "zbs_volume_id_ASC",
  ZbsVolumeIdDESC = "zbs_volume_id_DESC",
}

export interface GetNvmfNamespacesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfNamespaceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfNamespaceWhereInput | null;
}

export enum ContentLibraryImageOrderByInput {
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
}

export interface GetContentLibraryImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ContentLibraryImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ContentLibraryImageWhereInput | null;
}

export enum NvmfNamespaceSnapshotOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetNvmfNamespaceSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfNamespaceSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfNamespaceSnapshotWhereInput | null;
}

export enum ContentLibraryVmTemplateOrderByInput {
  ArchitectureASC = "architecture_ASC",
  ArchitectureDESC = "architecture_DESC",
  CloudInitSupportedASC = "cloud_init_supported_ASC",
  CloudInitSupportedDESC = "cloud_init_supported_DESC",
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  MemoryASC = "memory_ASC",
  MemoryDESC = "memory_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  OsASC = "os_ASC",
  OsDESC = "os_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  VcpuASC = "vcpu_ASC",
  VcpuDESC = "vcpu_DESC",
}

export interface GetContentLibraryVmTemplatesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ContentLibraryVmTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ContentLibraryVmTemplateWhereInput | null;
}

export enum NvmfSubsystemOrderByInput {
  BpsASC = "bps_ASC",
  BpsDESC = "bps_DESC",
  BpsMaxASC = "bps_max_ASC",
  BpsMaxDESC = "bps_max_DESC",
  BpsMaxLengthASC = "bps_max_length_ASC",
  BpsMaxLengthDESC = "bps_max_length_DESC",
  BpsRdASC = "bps_rd_ASC",
  BpsRdDESC = "bps_rd_DESC",
  BpsRdMaxASC = "bps_rd_max_ASC",
  BpsRdMaxDESC = "bps_rd_max_DESC",
  BpsRdMaxLengthASC = "bps_rd_max_length_ASC",
  BpsRdMaxLengthDESC = "bps_rd_max_length_DESC",
  BpsWrASC = "bps_wr_ASC",
  BpsWrDESC = "bps_wr_DESC",
  BpsWrMaxASC = "bps_wr_max_ASC",
  BpsWrMaxDESC = "bps_wr_max_DESC",
  BpsWrMaxLengthASC = "bps_wr_max_length_ASC",
  BpsWrMaxLengthDESC = "bps_wr_max_length_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExternalUseASC = "external_use_ASC",
  ExternalUseDESC = "external_use_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  IoSizeASC = "io_size_ASC",
  IoSizeDESC = "io_size_DESC",
  IopsASC = "iops_ASC",
  IopsDESC = "iops_DESC",
  IopsMaxASC = "iops_max_ASC",
  IopsMaxDESC = "iops_max_DESC",
  IopsMaxLengthASC = "iops_max_length_ASC",
  IopsMaxLengthDESC = "iops_max_length_DESC",
  IopsRdASC = "iops_rd_ASC",
  IopsRdDESC = "iops_rd_DESC",
  IopsRdMaxASC = "iops_rd_max_ASC",
  IopsRdMaxDESC = "iops_rd_max_DESC",
  IopsRdMaxLengthASC = "iops_rd_max_length_ASC",
  IopsRdMaxLengthDESC = "iops_rd_max_length_DESC",
  IopsWrASC = "iops_wr_ASC",
  IopsWrDESC = "iops_wr_DESC",
  IopsWrMaxASC = "iops_wr_max_ASC",
  IopsWrMaxDESC = "iops_wr_max_DESC",
  IopsWrMaxLengthASC = "iops_wr_max_length_ASC",
  IopsWrMaxLengthDESC = "iops_wr_max_length_DESC",
  IpWhitelistASC = "ip_whitelist_ASC",
  IpWhitelistDESC = "ip_whitelist_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NqnNameASC = "nqn_name_ASC",
  NqnNameDESC = "nqn_name_DESC",
  NqnWhitelistASC = "nqn_whitelist_ASC",
  NqnWhitelistDESC = "nqn_whitelist_DESC",
  PolicyASC = "policy_ASC",
  PolicyDESC = "policy_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  StripeNumASC = "stripe_num_ASC",
  StripeNumDESC = "stripe_num_DESC",
  StripeSizeASC = "stripe_size_ASC",
  StripeSizeDESC = "stripe_size_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
}

export interface GetNvmfSubsystemsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfSubsystemOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfSubsystemWhereInput | null;
}

export interface TableReporterParams {
  filter: {
    nvmfSubsystems?: GetNvmfSubsystemsRequestBody;
    contentLibraryVmTemplates?: GetContentLibraryVmTemplatesRequestBody;
    nvmfNamespaceSnapshots?: GetNvmfNamespaceSnapshotsRequestBody;
    contentLibraryImages?: GetContentLibraryImagesRequestBody;
    nvmfNamespaces?: GetNvmfNamespacesRequestBody;
    namespaceGroups?: GetNamespaceGroupsRequestBody;
    iscsiLuns?: GetIscsiLunsRequestBody;
    tasks?: GetTasksRequestBody;
    userAuditLogs?: GetUserAuditLogsRequestBody;
    systemAuditLogs?: GetSystemAuditLogsRequestBody;
    iscsiLunSnapshots?: GetIscsiLunSnapshotsRequestBody;
    iscsiConnections?: GetIscsiConnectionsRequestBody;
    consistencyGroups?: GetConsistencyGroupsRequestBody;
    users?: GetUsersRequestBody;
    vmEntityFilters?: GetEntityFiltersRequestBody;
    snapshotPlans?: GetSnapshotPlansRequestBody;
    globalAlertRules?: GetGlobalAlertRulesRequestBody;
    alerts?: GetAlertsRequestBody;
    vmPlacementGroups?: GetVmPlacementGroupsRequestBody;
    vmTemplates?: GetVmTemplatesRequestBody;
    elfImages?: GetElfImagesRequestBody;
    vmVolumes?: GetVmVolumesRequestBody;
    vlans?: GetVlansRequestBody;
    disks?: GetDisksRequestBody;
    vdses?: GetVdsesRequestBody;
    elfDataStores?: GetElfDataStoresRequestBody;
    vms?: GetVmsRequestBody;
    nfsExports?: GetNfsExportsRequestBody;
    iscsiTargets?: GetIscsiTargetsRequestBody;
    usbDevices?: GetUsbDevicesRequestBody;
    nics?: GetNicsRequestBody;
    clusters?: GetClustersRequestBody;
    datacenters?: GetDatacentersRequestBody;
    hosts?: GetHostsRequestBody;
  };
  columns: ColumnConfig[];
  name: string;
}

export interface UploadTaskWhereInput {
  AND?: UploadTaskWhereInput[] | null;
  NOT?: UploadTaskWhereInput[] | null;
  OR?: UploadTaskWhereInput[] | null;

  /** @format int64 */
  chunk_size?: number | null;

  /** @format int64 */
  chunk_size_gt?: number | null;

  /** @format int64 */
  chunk_size_gte?: number | null;
  chunk_size_in?: number[] | null;

  /** @format int64 */
  chunk_size_lt?: number | null;

  /** @format int64 */
  chunk_size_lte?: number | null;

  /** @format int64 */
  chunk_size_not?: number | null;
  chunk_size_not_in?: number[] | null;

  /** @format int32 */
  current_chunk?: number | null;

  /** @format int32 */
  current_chunk_gt?: number | null;

  /** @format int32 */
  current_chunk_gte?: number | null;
  current_chunk_in?: number[] | null;

  /** @format int32 */
  current_chunk_lt?: number | null;

  /** @format int32 */
  current_chunk_lte?: number | null;

  /** @format int32 */
  current_chunk_not?: number | null;
  current_chunk_not_in?: number[] | null;
  finished_at?: string | null;
  finished_at_gt?: string | null;
  finished_at_gte?: string | null;
  finished_at_in?: string[] | null;
  finished_at_lt?: string | null;
  finished_at_lte?: string | null;
  finished_at_not?: string | null;
  finished_at_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  resource_type?: UploadResourceType | null;
  resource_type_in?: UploadResourceType[] | null;
  resource_type_not?: UploadResourceType | null;
  resource_type_not_in?: UploadResourceType[] | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  started_at?: string | null;
  started_at_gt?: string | null;
  started_at_gte?: string | null;
  started_at_in?: string[] | null;
  started_at_lt?: string | null;
  started_at_lte?: string | null;
  started_at_not?: string | null;
  started_at_not_in?: string[] | null;
  status?: UploadTaskStatus | null;
  status_in?: UploadTaskStatus[] | null;
  status_not?: UploadTaskStatus | null;
  status_not_in?: UploadTaskStatus[] | null;
  updatedAt?: string | null;
  updatedAt_gt?: string | null;
  updatedAt_gte?: string | null;
  updatedAt_in?: string[] | null;
  updatedAt_lt?: string | null;
  updatedAt_lte?: string | null;
  updatedAt_not?: string | null;
  updatedAt_not_in?: string[] | null;
}

export interface CancelUploadTaskParams {
  where: UploadTaskWhereInput;
}

export interface UsbDevice {
  binded: boolean;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  host: NestedHost;
  id: string;
  local_created_at: string;
  local_id: string;
  manufacturer: string;
  name: string;

  /** @format int64 */
  size: number;
  status: UsbDeviceStatus;
  usb_type: string;
  vms?: NestedVm[] | null;

  /** @deprecated */
  vm?: NestedVm | null;
}

export interface WithTaskUsbDevice {
  task_id?: string | null;
  data: UsbDevice;
}

export interface UsbDeviceMountParams {
  data: { vms?: VmWhereInput; vm_id?: string };
  where: UsbDeviceWhereInput;
}

export interface UsbDeviceUnmountParams {
  data?: { vms: VmWhereInput };
  where: UsbDeviceWhereInput;
}

export interface LoginResponse {
  token: string;
}

export interface WithTaskLoginResponse {
  task_id?: string | null;
  data: LoginResponse;
}

export enum MfaType {
  Mail = "Mail",
}

export interface LoginInput {
  username: string;
  source?: UserSource | null;
  password: string;
  mfa_type?: MfaType | null;
  auth_config_id?: string | null;
}

export interface NestedPasswordReoverQaItem {
  question: string;
}

export interface NestedPasswordRecoverQa {
  enabled: boolean;
  items?: NestedPasswordReoverQaItem[] | null;
}

export interface NestedUserRoleNext {
  id: string;
  name: string;
}

export interface User {
  auth_config_id?: string | null;
  display_username: string;
  email_address?: string | null;
  id: string;
  internal: boolean;
  ldap_dn?: string | null;
  mobile_phone?: string | null;
  name: string;
  password_expired?: boolean | null;
  password_recover_qa?: NestedPasswordRecoverQa | null;
  password_updated_at?: string | null;
  role?: UserRole | null;
  roles?: NestedUserRoleNext[] | null;
  source: UserSource;
  username: string;
}

export interface WithTaskUser {
  task_id?: string | null;
  data: User;
}

export interface UserCreationParams {
  auth_config_id?: string;
  ldap_dn?: string;
  source?: UserSource;
  mobile_phone?: string;
  email_address?: string;
  internal?: boolean;
  role_id: string;
  name: string;
  password?: string;
  username: string;
}

export interface UserUpdationParams {
  data: {
    internal?: boolean;
    mobile_phone?: string | null;
    email_address?: string | null;
    role_id?: string;
    name?: string;
    password?: string;
    username?: string;
  };
  where: UserWhereInput;
}

export interface DeleteUser {
  id: string;
}

export interface WithTaskDeleteUser {
  task_id?: string | null;
  data: DeleteUser;
}

export interface UserDeletionParams {
  where: UserWhereInput;
}

export interface RootUserCreationParams {
  password: string;
}

export interface VcenterAccount {
  cluster?: NestedCluster | null;
  id: string;
  ip: string;
  is_valid: boolean;
  local_id: string;

  /** @format int32 */
  port: number;
  username: string;
}

export interface WithTaskVcenterAccount {
  task_id?: string | null;
  data: VcenterAccount;
}

export interface CreateVcenterAccountParamsData {
  /** @format int32 */
  port: number;
  password: string;
  username: string;
  ip: string;
  cluster_id: string;
}

export interface CreateVcenterAccountParams {
  data: CreateVcenterAccountParamsData;
}

export interface VcenterAccountWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface UpdateVcenterAccountParamsData {
  /** @format int32 */
  port: number;
  password: string;
  username: string;
  ip: string;
}

export interface UpdateVcenterAccountParams {
  data: UpdateVcenterAccountParamsData;
  where: VcenterAccountWhereUniqueInput;
}

export interface Vds {
  bond_mode: string;
  cluster: NestedCluster;
  entityAsyncStatus?: EntityAsyncStatus | null;
  everoute_cluster?: NestedEverouteCluster | null;
  id: string;
  internal: boolean;
  labels?: NestedLabel[] | null;
  local_id: string;
  name: string;
  nics?: NestedNic[] | null;
  ovsbr_name: string;
  type: NetworkType;
  vlans?: NestedVlan[] | null;

  /** @format int32 */
  vlans_num: number;
  work_mode?: string | null;
}

export interface WithTaskVds {
  task_id?: string | null;
  data: Vds;
}

export interface VdsCreationParams {
  nic_ids: string[];
  cluster_id: string;
  work_mode?: string;
  bond_mode?: string;
  name: string;
}

export type VdsCreationWithMigrateVlanParams = VdsCreationParams & {
  vlan: {
    extra_ip: { management_ip: string; host_id: string }[];
    subnetmask: string;
    gateway_subnetmask?: string;
    gateway_ip?: string;
    vlan_id: number;
  };
};

export type VdsCreationWithMAccessVlanParams = VdsCreationParams & {
  vlan: {
    extra_ip: { management_ip: string; host_id: string }[];
    subnetmask: string;
    gateway_subnetmask?: string;
    gateway_ip?: string;
    vlan_id: number;
  };
};

export interface VdsUpdationParams {
  data: {
    nicIds?: string[];
    work_mode?: string;
    bond_mode?: string;
    name?: string;
  };
  where: VdsWhereInput;
}

export interface DeleteVds {
  id: string;
}

export interface WithTaskDeleteVds {
  task_id?: string | null;
  data: DeleteVds;
}

export interface VdsDeletionParams {
  where: VdsWhereInput;
}

export interface NestedGraph {
  id: string;
}

export interface View {
  cluster: NestedCluster;
  entityAsyncStatus?: EntityAsyncStatus | null;
  graphs?: NestedGraph[] | null;
  id: string;
  local_id: string;
  name: string;

  /** @format int32 */
  time_span: number;
  time_unit: TimeUnit;
}

export interface WithTaskView {
  task_id?: string | null;
  data: View;
}

export interface ViewCreationParams {
  time_unit: TimeUnit;

  /** @format int32 */
  time_span: number;
  cluster_id: string;
  name: string;
}

export interface ViewUpdationParams {
  data?: { time_unit?: TimeUnit; time_span?: number; name?: string };
  where: ViewWhereInput;
}

export interface DeleteView {
  id: string;
}

export interface WithTaskDeleteView {
  task_id?: string | null;
  data: DeleteView;
}

export interface ViewDeletionParams {
  where: ViewWhereInput;
}

export interface Vlan {
  entityAsyncStatus?: EntityAsyncStatus | null;
  gateway_ip?: string | null;
  gateway_subnetmask?: string | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  mode_type?: VlanModeType | null;
  name: string;
  network_ids: string[];

  /** @format double */
  qos_max_bandwidth?: number | null;

  /** @format double */
  qos_min_bandwidth?: number | null;

  /** @format int32 */
  qos_priority?: number | null;
  subnetmask?: string | null;
  type: NetworkType;
  vds: NestedVds;

  /** @format int32 */
  vlan_id: number;
  vm_nics?: NestedVmNic[] | null;
}

export interface WithTaskVlan {
  task_id?: string | null;
  data: Vlan;
}

/**
 * @format int32
 * @min 0
 * @max 4095
 */
export type VlanId = number;

/**
 * @format double
 * @min 0
 */
export type Priority = number;

export interface VmVlanCreationParams {
  qos_burst_unit?: ByteUnit;

  /** @format int64 */
  qos_burst?: number | null;
  qos_max_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  qos_max_bandwidth?: number | null;
  qos_min_bandwidth_unit?: BPSUnit;

  /** @format int64 */
  qos_min_bandwidth?: number | null;
  qos_priority?: Priority;
  mode_type?: VlanModeType;
  network_ids?: string[];
  vds_id: string;
  vlan_id?: VlanId;
  name: string;
}

export interface VmVlanUpdationParams {
  data: {
    qos_burst_unit?: ByteUnit;
    qos_burst?: number | null;
    qos_max_bandwidth_unit?: BPSUnit;
    qos_max_bandwidth?: number | null;
    qos_min_bandwidth_unit?: BPSUnit;
    qos_min_bandwidth?: number | null;
    qos_priority?: Priority;
    mode_type?: VlanModeType;
    network_ids?: string[];
    vlan_id?: VlanId;
    name?: string;
  };
  where: VlanWhereInput;
}

export interface ExtraIp {
  management_ip: string;
  host_id: string;
}

export interface ManagementVlanUpdationParams {
  data: {
    extra_ip?: ExtraIp[];
    subnetmask?: string;
    gateway_ip?: string;
    vlan_id?: VlanId;
  };
  where: VlanWhereInput;
}

export interface MigrationVlanUpdationParams {
  data?: {
    extra_ip?: ExtraIp[];
    subnetmask?: string;
    gateway_ip?: string;
    vlan_id?: VlanId;
  };
  where: VlanWhereInput;
}

export interface DeleteVlan {
  id: string;
}

export interface WithTaskDeleteVlan {
  task_id?: string | null;
  data: DeleteVlan;
}

export interface VlanDeletionParams {
  where: VlanWhereInput;
}

export interface VmFolder {
  cluster: NestedCluster;
  id: string;
  local_id?: string | null;
  name: string;

  /** @format int32 */
  vm_num?: number | null;
  vms?: NestedVm[] | null;
}

export interface WithTaskVmFolder {
  task_id?: string | null;
  data: VmFolder;
}

export interface VmFolderCreationParams {
  cluster_id: string;
  name: string;
}

export interface VmFolderUpdationParams {
  data: { name: string };
  where: VmFolderWhereInput;
}

export interface DeleteVmFolder {
  id: string;
}

export interface WithTaskDeleteVmFolder {
  task_id?: string | null;
  data: DeleteVmFolder;
}

export interface VmFolderDeletionParams {
  where: VmFolderWhereInput;
}

export interface VmPlacementGroup {
  cluster: NestedCluster;
  description: string;
  enabled: boolean;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_created_at: string;
  local_id: string;
  local_updated_at: string;
  name: string;
  vm_host_must_enabled: boolean;
  vm_host_must_host_uuids?: NestedHost[] | null;
  vm_host_must_policy: boolean;
  vm_host_prefer_enabled: boolean;
  vm_host_prefer_host_uuids?: NestedHost[] | null;
  vm_host_prefer_policy: boolean;
  vm_vm_policy: VmVmPolicy;
  vm_vm_policy_enabled: boolean;
  vms?: NestedVm[] | null;
}

export interface WithTaskVmPlacementGroup {
  task_id?: string | null;
  data: VmPlacementGroup;
}

export interface VmPlacementGroupCreationParams {
  vm_vm_policy?: VmVmPolicy;
  vm_host_prefer_enabled?: boolean;
  vm_host_must_policy?: boolean;
  vm_host_must_enabled?: boolean;
  vm_host_prefer_policy?: boolean;
  vm_vm_policy_enabled?: boolean;
  vms?: VmWhereInput;
  prefer_hosts?: HostWhereInput;
  must_hosts?: HostWhereInput;
  name: string;
  description?: string;
  enabled: boolean;
  cluster_id: string;
}

export interface VmPlacementGroupUpdationParams {
  data: {
    vm_vm_policy?: VmVmPolicy;
    vms?: VmWhereInput;
    prefer_hosts?: HostWhereInput;
    must_hosts?: HostWhereInput;
    vm_host_prefer_enabled?: boolean;
    vm_host_must_policy?: boolean;
    vm_host_must_enabled?: boolean;
    vm_host_prefer_policy?: boolean;
    vm_vm_policy_enabled?: boolean;
    name?: string;
    description?: string;
    enabled?: boolean;
  };
  where: VmPlacementGroupWhereInput;
}

export interface DeleteVmPlacementGroup {
  id: string;
}

export interface WithTaskDeleteVmPlacementGroup {
  task_id?: string | null;
  data: DeleteVmPlacementGroup;
}

export interface VmPlacementGroupDeletionParams {
  where: VmPlacementGroupWhereInput;
}

export interface NestedSnapshotGroup {
  id: string;
  name: string;
}

export interface NestedFrozenDisks {
  /** @format int32 */
  boot: number;
  bus: Bus;
  disabled?: boolean | null;
  disk_name?: string | null;
  elf_image_local_id: string;
  image_name?: string | null;

  /** @format int32 */
  index: number;

  /** @format int32 */
  key?: number | null;

  /** @format int64 */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  path: string;

  /** @format int64 */
  size: number;
  snapshot_local_id?: string | null;
  storage_policy_uuid: string;
  svt_image_local_id: string;
  type: VmDiskType;
  vm_volume_local_id: string;
  vm_volume_snapshot_uuid?: string | null;
  vm_volume_template_uuid?: string | null;
}

export interface NestedFrozenVlan {
  name: string;
  vds_ovs: string;

  /** @format int32 */
  vlan_id: number;
  vlan_local_id: string;
}

export interface NestedFrozenNic {
  enabled?: boolean | null;
  gateway: string;

  /** @format int32 */
  index: number;
  ip_address: string;
  mac_address: string;
  mirror?: boolean | null;
  model?: VmNicModel | null;
  subnet_mask: string;
  vlan: NestedFrozenVlan;
}

export interface VmSnapshot {
  clock_offset: VmClockOffset;
  cluster: NestedCluster;
  consistent_type: ConsistentType;
  cpu: NestedCpu;
  cpu_model: string;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: VmFirmware;
  ha: boolean;
  id: string;
  io_policy?: VmDiskIoPolicy | null;
  labels?: NestedLabel[] | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format int64 */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format int64 */
  memory: number;
  name: string;

  /** @format int64 */
  size: number;
  snapshot_group?: NestedSnapshotGroup | null;

  /** @format int32 */
  vcpu: number;
  vm?: NestedVm | null;
  vm_disks?: NestedFrozenDisks[] | null;
  vm_nics?: NestedFrozenNic[] | null;
  win_opt: boolean;
}

export interface WithTaskVmSnapshot {
  task_id?: string | null;
  data: VmSnapshot;
}

export interface VmSnapshotCreationParamsData {
  consistent_type?: ConsistentType;
  name: string;
  vm_id: string;
}

export interface VmSnapshotCreationParams {
  data: VmSnapshotCreationParamsData[];
}

export interface DeleteVmSnapshot {
  id: string;
}

export interface WithTaskDeleteVmSnapshot {
  task_id?: string | null;
  data: DeleteVmSnapshot;
}

export interface VmSnapshotDeletionParams {
  where: VmSnapshotWhereInput;
}

export interface NestedTemplateNic {
  enabled?: boolean | null;

  /** @format int32 */
  index: number;
  ip_address?: string | null;
  mac_address?: string | null;
  mirror?: boolean | null;
  model?: VmNicModel | null;
  vlan: NestedFrozenVlan;
}

export interface VmTemplate {
  clock_offset: VmClockOffset;
  cloud_init_supported: boolean;
  cluster: NestedCluster;
  content_library_vm_template?: NestedContentLibraryVmTemplate | null;
  cpu: NestedCpu;
  cpu_model: string;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  firmware: VmFirmware;
  ha: boolean;
  id: string;
  io_policy?: VmDiskIoPolicy | null;
  labels?: NestedLabel[] | null;
  local_created_at?: string | null;
  local_id: string;

  /** @format int64 */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;

  /** @format int64 */
  memory: number;
  name: string;

  /** @format int64 */
  size: number;

  /** @format int32 */
  vcpu: number;
  video_type?: string | null;
  vm_disks?: NestedFrozenDisks[] | null;
  vm_nics?: NestedTemplateNic[] | null;
  win_opt: boolean;
}

export interface WithTaskVmTemplate {
  task_id?: string | null;
  data: VmTemplate;
}

export interface VmTemplateCreationParams {
  cluster_id?: string;
  cloud_init_supported: boolean;
  vm_id: string;
  description?: string;
  name: string;
}

export interface VmTemplateUpdationParams {
  data?: {
    cloud_init_supported?: boolean;
    description?: string;
    name?: string;
  };
  where: VmTemplateWhereInput;
}

export interface DeleteVmTemplate {
  id: string;
}

export interface WithTaskDeleteVmTemplate {
  task_id?: string | null;
  data: DeleteVmTemplate;
}

export interface VmTemplateDeletionParams {
  where: VmTemplateWhereInput;
}

export interface VmVolumeSnapshot {
  cluster: NestedCluster;
  createAt?: string | null;
  description: string;
  elf_storage_policy: VmVolumeElfStoragePolicyType;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  name: string;

  /** @format double */
  shared_size?: number | null;

  /** @format double */
  size?: number | null;
  type: VmVolumeSnapshotType;

  /** @format double */
  unique_size?: number | null;
  vm_volume?: NestedVmVolume | null;
  volume_sharing?: boolean | null;

  /** @format double */
  volume_size?: number | null;
  zbs_snapshot_uuid?: string | null;
}

export interface WithTaskVmVolumeSnapshot {
  task_id?: string | null;
  data: VmVolumeSnapshot;
}

export interface VmVolumeSnapshotCreationParams {
  volume_id: string;
  description: string;
  name: string;
}

export interface DeleteVmVolumeSnapshot {
  id: string;
}

export interface WithTaskDeleteVmVolumeSnapshot {
  task_id?: string | null;
  data: DeleteVmVolumeSnapshot;
}

export interface VmVolumeSnapshotDeletionParams {
  where: VmVolumeSnapshotWhereInput;
}

export interface VmVolume {
  cluster: NestedCluster;
  description?: string | null;
  elf_storage_policy: VmVolumeElfStoragePolicyType;
  entityAsyncStatus?: EntityAsyncStatus | null;

  /** @format double */
  guest_size_usage?: number | null;

  /** @format int64 */
  guest_used_size?: number | null;
  id: string;
  labels?: NestedLabel[] | null;
  local_created_at: string;
  local_id: string;
  lun?: NestedIscsiLun | null;
  mounting: boolean;
  name: string;
  path: string;
  sharing: boolean;

  /** @format int64 */
  size: number;
  type?: VmVolumeType | null;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format int64 */
  unique_size?: number | null;
  vm_disks?: NestedVmDisk[] | null;
}

export interface WithTaskVmVolume {
  task_id?: string | null;
  data: VmVolume;
}

export interface VmVolumeCreationParams {
  elf_storage_policy: VmVolumeElfStoragePolicyType;
  size_unit?: ByteUnit;

  /** @format int64 */
  size: number;
  sharing: boolean;
  cluster_id: string;
  name: string;
}

export interface DeleteVmVolume {
  id: string;
}

export interface WithTaskDeleteVmVolume {
  task_id?: string | null;
  data: DeleteVmVolume;
}

export interface VmVolumeDeletionParamsEffect {
  include_snapshots?: boolean;
}

export interface VmVolumeDeletionParams {
  effect?: VmVolumeDeletionParamsEffect;
  where: VmVolumeWhereInput;
}

export interface VmVolumeRebuildParams {
  name: string;
  description: string;
  volume_snapshot_id: string;
}

export interface VmVolumeRollbackParams {
  volume_snapshot_id: string;
}

export interface VmVolumeWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface CloneVmVolumeParams {
  where: VmVolumeWhereUniqueInput;
  data: { description?: string; name: string };
}

export interface UpdateVmVolumeParams {
  where: VmVolumeWhereInput;
  data: {
    size_unit?: ByteUnit;
    size?: number;
    description?: string;
    name?: string;
  };
}

export enum VmVolumeExportFileType {
  QCOW2 = "QCOW2",
  RAW = "RAW",
}

export interface ExportVmVolumeParams {
  data: { type: VmVolumeExportFileType };
  where: VmVolumeWhereInput;
}

export interface ImportVmVolumeParams {
  upload_task_id: string;
  name: string;
  storage_policy: VmVolumeElfStoragePolicyType;
  cluster_id: string;
}

export interface VsphereEsxiAccount {
  host: NestedHost;
  id: string;
  ip: string;
  is_valid: boolean;
  local_id: string;

  /** @format int32 */
  port: number;
  username: string;
}

export interface WithTaskVsphereEsxiAccountArray {
  task_id?: string | null;
  data: VsphereEsxiAccount[];
}

export interface UpdateVsphereEsxiAccountParamsData {
  /** @format int32 */
  port?: number;
  password?: string;
  username: string;
  ip: string;
  esxi_account_id: string;
}

export interface UpdateVsphereEsxiAccountParams {
  data: UpdateVsphereEsxiAccountParamsData[];
}

export interface UserAuditLog {
  action: string;
  auth_type?: string | null;
  cluster?: NestedCluster | null;
  createdAt: string;
  finished_at?: string | null;
  id: string;
  ip_address: string;
  message: string;
  resource_id?: string | null;
  resource_type?: string | null;
  started_at?: string | null;
  status?: UserAuditLogStatus | null;
  user?: NestedUser | null;
  username?: string | null;
}

export interface WithTaskUserAuditLog {
  task_id?: string | null;
  data: UserAuditLog;
}

export interface UserAuditLogMessage {
  "en-US": string;
  "zh-CN": string;
}

export interface UserAuditLogCreationParams {
  started_at?: string;
  finished_at?: string;
  cluster_id?: string;
  resource_id?: string;
  ip_address?: string;
  status: UserAuditLogStatus;
  user_id: string;
  message: UserAuditLogMessage;
  resource_type: string;
  action: string;
}

export interface WithTaskTask {
  task_id?: string | null;
  data: Task;
}

export interface TaskDescription {
  "en-US": string;
  "zh-CN": string;
}

export interface TaskStepCreationParams {
  description?: string;
  finished: boolean;
  key: string;
}

export interface TaskCreationParams {
  steps?: TaskStepCreationParams[];
  args?: object;
  key?: string;
  internal?: boolean;
  type?: TaskType;
  resource_id?: string;
  cluster_id?: string;
  user_id: string;
  description: TaskDescription;
  resource_mutation: string;
  resource_type: string;
}

export interface TaskUpdateParams {
  data: {
    resource_rollback_retry_count?: number;
    resource_rollback_error?: string;
    resource_rollbacked?: boolean;
    steps?: TaskStepCreationParams[];
    error_message?: string;
    error_code?: string;
    progress?: number;
    status?: TaskStatus;
    snapshot?: string;
    args?: object;
    key?: string;
    type?: TaskType;
    resource_id?: string;
    cluster_id?: string;
    user_id?: string;
    resource_mutation?: string;
    resource_type?: string;
    description?: string;
  };
  where: TaskWhereInput;
}

export interface NestedVirtualPrivateCloudExternalSubnet {
  floating_ip_cidr?: string | null;
  id: string;
  name: string;
}

export interface NestedVirtualPrivateCloud {
  id: string;
  name: string;
}

export interface VirtualPrivateCloudFloatingIp {
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_ip?: string | null;
  external_subnet: NestedVirtualPrivateCloudExternalSubnet;
  id: string;
  local_id: string;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudFloatingIp {
  task_id?: string | null;
  data: VirtualPrivateCloudFloatingIp;
}

export interface VirtualPrivateCloudFloatingIpCreationParams {
  external_ip?: string;
  external_subnet_id: string;
  vpc_id: string;
}

export interface DeleteVirtualPrivateCloudFloatingIp {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudFloatingIp {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudFloatingIp;
}

export interface VirtualPrivateCloudFloatingIpDeletionParams {
  where: VirtualPrivateCloudFloatingIpWhereInput;
}

export interface NestedVpcDnatRuleType {
  /** @format int32 */
  port: number;
  target_ip: string;

  /** @format int32 */
  target_port: number;
}

export interface VirtualPrivateCloudNatGateway {
  dnat_rules?: NestedVpcDnatRuleType[] | null;
  enable_dnat?: boolean | null;
  enable_snat?: boolean | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_ip?: string | null;
  external_subnet: NestedVirtualPrivateCloudExternalSubnet;
  id: string;
  local_id: string;
  name: string;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudNatGateway {
  task_id?: string | null;
  data: VirtualPrivateCloudNatGateway;
}

export interface VirtualPrivateCloudDnatRuleParams {
  /** @format int32 */
  target_port: number;

  /** @format int32 */
  port: number;
  target_ip: string;
}

export interface VirtualPrivateCloudNatGatewayCreationParams {
  external_ip?: string;
  external_subnet_id: string;
  dnat_rules?: VirtualPrivateCloudDnatRuleParams[];
  enable_dnat: boolean;
  enable_snat: boolean;
  vpc_id: string;
  name: string;
}

export interface VirtualPrivateCloudNatGatewayUpdationParams {
  data: {
    external_ip?: string;
    dnat_rules?: VirtualPrivateCloudDnatRuleParams[];
    enable_dnat?: boolean;
    enable_snat?: boolean;
    name?: string;
  };
  where: VirtualPrivateCloudNatGatewayWhereInput;
}

export interface DeleteVirtualPrivateCloudNatGateway {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudNatGateway {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudNatGateway;
}

export interface VirtualPrivateCloudNatGatewayDeletionParams {
  where: VirtualPrivateCloudNatGatewayWhereInput;
}

export interface NestedVirtualPrivateCloudRoute {
  destination: string;
  id: string;
  next_hop_local_id: string;
  next_hop_type: VirtualPrivateCloudRouteNextHopType;
}

export interface NestedVirtualPrivateCloudSubnet {
  id: string;
  name: string;
}

export interface VirtualPrivateCloudRouteTable {
  default_for_vpc?: boolean | null;
  description?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id: string;
  name: string;
  routes?: NestedVirtualPrivateCloudRoute[] | null;
  subnets?: NestedVirtualPrivateCloudSubnet[] | null;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudRouteTable {
  task_id?: string | null;
  data: VirtualPrivateCloudRouteTable;
}

export interface VirtualPrivateCloudRouteParams {
  destination: string;
  next_hop_local_id: string;
  next_hop_type: VirtualPrivateCloudRouteNextHopType;
}

export interface VirtualPrivateCloudRouteTableCreationParams {
  routes?: VirtualPrivateCloudRouteParams[];
  vpc_id: string;
  description?: string;
  name: string;
}

export interface VirtualPrivateCloudRouteTableUpdationParams {
  data: {
    routes?: VirtualPrivateCloudRouteParams[];
    description?: string;
    name?: string;
  };
  where: VirtualPrivateCloudRouteTableWhereInput;
}

export interface DeleteVirtualPrivateCloudRouteTable {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudRouteTable {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudRouteTable;
}

export interface VirtualPrivateCloudRouteTableDeletionParams {
  where: VirtualPrivateCloudRouteTableWhereInput;
}

export interface NestedVpcRouterGatewayRuleType {
  dst: string;
  nexthop?: string | null;
}

export interface VirtualPrivateCloudRouterGateway {
  associated_subnets?: NestedVirtualPrivateCloudSubnet[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  external_ip?: string | null;
  external_subnet: NestedVirtualPrivateCloudExternalSubnet;
  id: string;
  local_id: string;
  name: string;
  nexthop_ip?: string | null;
  rules: NestedVpcRouterGatewayRuleType[];
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudRouterGateway {
  task_id?: string | null;
  data: VirtualPrivateCloudRouterGateway;
}

export interface VirtualPrivateCloudRouterGatewayRuleInputType {
  dst: string;
  nexthop?: string;
}

export interface VirtualPrivateCloudRouterGatewayCreationParams {
  rules: VirtualPrivateCloudRouterGatewayRuleInputType[];
  associated_subnets_ids: string[];
  external_ip?: string;
  external_subnet_id: string;
  vpc_id: string;
  name: string;
}

export interface VirtualPrivateCloudRouterGatewayUpdateDataParams {
  rules?: VirtualPrivateCloudRouterGatewayRuleInputType[];
  associated_subnets_ids?: string[];
  external_ip?: string;
  name?: string;
}

export interface VirtualPrivateCloudRouterGatewayUpdationParams {
  data: VirtualPrivateCloudRouterGatewayUpdateDataParams;
  where: VirtualPrivateCloudRouterGatewayWhereInput;
}

export interface DeleteVirtualPrivateCloudRouterGateway {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudRouterGateway {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudRouterGateway;
}

export interface VirtualPrivateCloudRouterGatewayDeletionParams {
  where: VirtualPrivateCloudRouterGatewayWhereInput;
}

export interface NestedVirtualPrivateCloudLabelGroup {
  labels: NestedLabel[];
}

export interface VirtualPrivateCloudSecurityGroup {
  default_for_vpc?: boolean | null;
  description?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  label_groups?: NestedVirtualPrivateCloudLabelGroup[] | null;
  local_id: string;
  name: string;
  vms?: NestedVm[] | null;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudSecurityGroup {
  task_id?: string | null;
  data: VirtualPrivateCloudSecurityGroup;
}

export interface LabelGroup {
  label_ids: string[];
}

export interface VirtualPrivateCloudSecurityGroupCreationParams {
  vm_ids?: string[];
  label_groups?: LabelGroup[];
  vpc_id: string;
  description?: string;
  name: string;
}

export interface VirtualPrivateCloudSecurityGroupUpdationParams {
  data: {
    vm_ids?: string[];
    label_groups?: LabelGroup[];
    description?: string;
    name?: string;
  };
  where: VirtualPrivateCloudSecurityGroupWhereInput;
}

export interface DeleteVirtualPrivateCloudSecurityGroup {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudSecurityGroup {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudSecurityGroup;
}

export interface VirtualPrivateCloudSecurityGroupDeletionParams {
  where: VirtualPrivateCloudSecurityGroupWhereInput;
}

export interface NestedVirtualPrivateCloudSecurityGroup {
  id: string;
  name: string;
}

export interface NestedVirtualPrivateCloudSecurityPolicyApply {
  communicable: boolean;
  security_group?: NestedVirtualPrivateCloudSecurityGroup | null;
  security_group_id: string;
}

export enum VirtualPrivateCloudNetworkPolicyRulePortProtocol {
  ICMP = "ICMP",
  TCP = "TCP",
  UDP = "UDP",
}

export interface NestedVirtualPrivateCloudNetworkPolicyRulePort {
  port?: string | null;
  protocol: VirtualPrivateCloudNetworkPolicyRulePortProtocol;
}

export enum VirtualPrivateCloudNetworkPolicyRuleType {
  ALL = "ALL",
  IP_BLOCK = "IP_BLOCK",
  SECURITY_GROUP = "SECURITY_GROUP",
  SELECTOR = "SELECTOR",
}

export interface NestedVirtualPrivateCloudNetworkPolicyRule {
  except_ip_block?: string[] | null;
  ip_block?: string | null;
  ports?: NestedVirtualPrivateCloudNetworkPolicyRulePort[] | null;
  security_group?: NestedVirtualPrivateCloudSecurityGroup | null;
  security_group_id?: string | null;
  selector?: NestedLabel[] | null;
  selector_ids?: string[] | null;
  type: VirtualPrivateCloudNetworkPolicyRuleType;
}

export interface VirtualPrivateCloudSecurityPolicy {
  apply_to: NestedVirtualPrivateCloudSecurityPolicyApply[];
  description?: string | null;
  egress?: NestedVirtualPrivateCloudNetworkPolicyRule[] | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  ingress?: NestedVirtualPrivateCloudNetworkPolicyRule[] | null;
  local_id: string;
  name: string;
  policy_mode?: VirtualPrivateCloudSecurityPolicyMode | null;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudSecurityPolicy {
  task_id?: string | null;
  data: VirtualPrivateCloudSecurityPolicy;
}

export interface VirtualPrivateCloudSecurityPolicyApplyInput {
  security_group_id: string;
  communicable: boolean;
}

export interface VirtualPrivateCloudNetworkPolicyRulePortInput {
  protocol: VirtualPrivateCloudNetworkPolicyRulePortProtocol;
  port?: string | null;
}

export interface VirtualPrivateCloudNetworkPolicyRuleInput {
  type: VirtualPrivateCloudNetworkPolicyRuleType;
  selector_ids?: string[] | null;
  security_group_id?: string | null;
  ports?: VirtualPrivateCloudNetworkPolicyRulePortInput[] | null;
  ip_block?: string | null;
  except_ip_block?: string[] | null;
}

export interface VirtualPrivateCloudSecurityPolicyCreateParams {
  egress?: VirtualPrivateCloudNetworkPolicyRuleInput[];
  ingress?: VirtualPrivateCloudNetworkPolicyRuleInput[];
  apply_to: VirtualPrivateCloudSecurityPolicyApplyInput[];
  policy_mode?: VirtualPrivateCloudSecurityPolicyMode;
  vpc_id: string;
  description?: string;
  name: string;
}

export interface DeleteVirtualPrivateCloudSecurityPolicy {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudSecurityPolicy {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudSecurityPolicy;
}

export interface VirtualPrivateCloudSecurityPolicyDeleteParams {
  where: VirtualPrivateCloudSecurityPolicyWhereInput;
}

export interface VirtualPrivateCloudSecurityPolicyUpdateParams {
  ingress?: VirtualPrivateCloudNetworkPolicyRuleInput[];
  egress?: VirtualPrivateCloudNetworkPolicyRuleInput[];
  apply_to?: VirtualPrivateCloudSecurityPolicyApplyInput[];
  policy_mode?: VirtualPrivateCloudSecurityPolicyMode;
  description?: string;
  name?: string;
}

export interface VirtualPrivateCloudSecurityPolicyUpdateBody {
  data: VirtualPrivateCloudSecurityPolicyUpdateParams;
  where: VirtualPrivateCloudSecurityPolicyWhereInput;
}

export interface NestedVpcSubnetIpPooType {
  end: string;
  start: string;
}

export interface NestedVirtualPrivateCloudRouteTable {
  id: string;
  name: string;
}

export interface VirtualPrivateCloudSubnet {
  cidr: string;
  description?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  gateway?: string | null;
  id: string;
  ip_pools?: NestedVpcSubnetIpPooType[] | null;
  local_id: string;
  name: string;
  route_table: NestedVirtualPrivateCloudRouteTable;

  /** @format int32 */
  total_ip_count?: number | null;

  /** @format int32 */
  unused_ip_count?: number | null;
  vpc: NestedVirtualPrivateCloud;
}

export interface WithTaskVirtualPrivateCloudSubnet {
  task_id?: string | null;
  data: VirtualPrivateCloudSubnet;
}

export interface VirtualPrivateCloudSubnetIpPoolParams {
  end: string;
  start: string;
}

export interface VirtualPrivateCloudSubnetCreationParams {
  route_table_id: string;
  ip_pools?: VirtualPrivateCloudSubnetIpPoolParams[];
  gateway: string;
  cidr: string;
  vpc_id: string;
  description?: string;
  name: string;
}

export interface VirtualPrivateCloudSubnetUpdateDataParams {
  route_table_id?: string;
  ip_pools?: VirtualPrivateCloudSubnetIpPoolParams[];
  gateway?: string;
  cidr?: string;
  description?: string;
  name?: string;
}

export interface VirtualPrivateCloudSubnetUpdationParams {
  data: VirtualPrivateCloudSubnetUpdateDataParams;
  where: VirtualPrivateCloudSubnetWhereInput;
}

export interface DeleteVirtualPrivateCloudSubnet {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloudSubnet {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloudSubnet;
}

export interface VirtualPrivateCloudSubnetDeletionParams {
  where: VirtualPrivateCloudSubnetWhereInput;
}

export interface NestedVirtualPrivateCloudIsolationPolicy {
  id: string;
  vm: NestedVm;
}

export interface NestedVirtualPrivateCloudSecurityPolicy {
  id: string;
  name: string;
}

export interface VirtualPrivateCloud {
  /** @format int32 */
  associate_external_subnet_num?: number | null;
  description?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  isolation_policies?: NestedVirtualPrivateCloudIsolationPolicy[] | null;
  local_id: string;

  /** @format int32 */
  mtu?: number | null;
  name: string;
  route_tables?: NestedVirtualPrivateCloudRouteTable[] | null;
  security_groups?: NestedVirtualPrivateCloudSecurityGroup[] | null;
  security_policies?: NestedVirtualPrivateCloudSecurityPolicy[] | null;
  subnets?: NestedVirtualPrivateCloudSubnet[] | null;
}

export interface WithTaskVirtualPrivateCloud {
  task_id?: string | null;
  data: VirtualPrivateCloud;
}

export interface VirtualPrivateCloudCreationParams {
  /** @format int32 */
  mtu?: number;
  vpc_service_id: string;
  description?: string;
  name: string;
}

export interface VirtualPrivateCloudUpdateDataParams {
  /** @format int32 */
  mtu?: number;
  description?: string;
  name?: string;
}

export interface VirtualPrivateCloudUpdationParams {
  data: VirtualPrivateCloudUpdateDataParams;
  where: VirtualPrivateCloudWhereInput;
}

export interface DeleteVirtualPrivateCloud {
  id: string;
}

export interface WithTaskDeleteVirtualPrivateCloud {
  task_id?: string | null;
  data: DeleteVirtualPrivateCloud;
}

export interface VirtualPrivateCloudDeletionParams {
  where: VirtualPrivateCloudWhereInput;
}

export enum NotifierLanguageCode {
  EN_US = "EN_US",
  ZH_CN = "ZH_CN",
}

export enum NotifierSecurityMode {
  SSL = "SSL",
  STARTTLS = "STARTTLS",
  UNSPECIFIED = "UNSPECIFIED",
}

export interface NestedSmtpServer {
  id: string;
  name: string;
}

export interface AlertNotifier {
  clusters?: NestedCluster[] | null;
  disabled: boolean;
  email_from?: string | null;
  email_tos: string[];
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  language_code?: NotifierLanguageCode | null;
  name?: string | null;
  notice_severities: string[];
  security_mode?: NotifierSecurityMode | null;
  smtp_server_config?: NestedSmtpServer | null;
  smtp_server_host?: string | null;

  /** @format int32 */
  smtp_server_port?: number | null;
  username?: string | null;
}

export enum AlertNotifierOrderByInput {
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  EmailFromASC = "email_from_ASC",
  EmailFromDESC = "email_from_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LanguageCodeASC = "language_code_ASC",
  LanguageCodeDESC = "language_code_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SecurityModeASC = "security_mode_ASC",
  SecurityModeDESC = "security_mode_DESC",
  SmtpServerHostASC = "smtp_server_host_ASC",
  SmtpServerHostDESC = "smtp_server_host_DESC",
  SmtpServerPortASC = "smtp_server_port_ASC",
  SmtpServerPortDESC = "smtp_server_port_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
}

export interface AlertNotifierWhereInput {
  AND?: AlertNotifierWhereInput[] | null;
  NOT?: AlertNotifierWhereInput[] | null;
  OR?: AlertNotifierWhereInput[] | null;
  clusters_every?: ClusterWhereInput | null;
  clusters_none?: ClusterWhereInput | null;
  clusters_some?: ClusterWhereInput | null;
  disabled?: boolean | null;
  disabled_not?: boolean | null;
  email_from?: string | null;
  email_from_contains?: string | null;
  email_from_ends_with?: string | null;
  email_from_gt?: string | null;
  email_from_gte?: string | null;
  email_from_in?: string[] | null;
  email_from_lt?: string | null;
  email_from_lte?: string | null;
  email_from_not?: string | null;
  email_from_not_contains?: string | null;
  email_from_not_ends_with?: string | null;
  email_from_not_in?: string[] | null;
  email_from_not_starts_with?: string | null;
  email_from_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  language_code?: NotifierLanguageCode | null;
  language_code_in?: NotifierLanguageCode[] | null;
  language_code_not?: NotifierLanguageCode | null;
  language_code_not_in?: NotifierLanguageCode[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  security_mode?: NotifierSecurityMode | null;
  security_mode_in?: NotifierSecurityMode[] | null;
  security_mode_not?: NotifierSecurityMode | null;
  security_mode_not_in?: NotifierSecurityMode[] | null;
  smtp_server_config?: SmtpServerWhereInput | null;
  smtp_server_host?: string | null;
  smtp_server_host_contains?: string | null;
  smtp_server_host_ends_with?: string | null;
  smtp_server_host_gt?: string | null;
  smtp_server_host_gte?: string | null;
  smtp_server_host_in?: string[] | null;
  smtp_server_host_lt?: string | null;
  smtp_server_host_lte?: string | null;
  smtp_server_host_not?: string | null;
  smtp_server_host_not_contains?: string | null;
  smtp_server_host_not_ends_with?: string | null;
  smtp_server_host_not_in?: string[] | null;
  smtp_server_host_not_starts_with?: string | null;
  smtp_server_host_starts_with?: string | null;

  /** @format int32 */
  smtp_server_port?: number | null;

  /** @format int32 */
  smtp_server_port_gt?: number | null;

  /** @format int32 */
  smtp_server_port_gte?: number | null;
  smtp_server_port_in?: number[] | null;

  /** @format int32 */
  smtp_server_port_lt?: number | null;

  /** @format int32 */
  smtp_server_port_lte?: number | null;

  /** @format int32 */
  smtp_server_port_not?: number | null;
  smtp_server_port_not_in?: number[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export interface SmtpServerWhereInput {
  AND?: SmtpServerWhereInput[] | null;
  NOT?: SmtpServerWhereInput[] | null;
  OR?: SmtpServerWhereInput[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  host?: string | null;
  host_contains?: string | null;
  host_ends_with?: string | null;
  host_gt?: string | null;
  host_gte?: string | null;
  host_in?: string[] | null;
  host_lt?: string | null;
  host_lte?: string | null;
  host_not?: string | null;
  host_not_contains?: string | null;
  host_not_ends_with?: string | null;
  host_not_in?: string[] | null;
  host_not_starts_with?: string | null;
  host_starts_with?: string | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  is_record_password?: boolean | null;
  is_record_password_not?: boolean | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;
  password?: string | null;
  password_contains?: string | null;
  password_ends_with?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_not?: string | null;
  password_not_contains?: string | null;
  password_not_ends_with?: string | null;
  password_not_in?: string[] | null;
  password_not_starts_with?: string | null;
  password_starts_with?: string | null;

  /** @format int32 */
  port?: number | null;

  /** @format int32 */
  port_gt?: number | null;

  /** @format int32 */
  port_gte?: number | null;
  port_in?: number[] | null;

  /** @format int32 */
  port_lt?: number | null;

  /** @format int32 */
  port_lte?: number | null;

  /** @format int32 */
  port_not?: number | null;
  port_not_in?: number[] | null;
  secure_mode?: SmtpSecureMode | null;
  secure_mode_in?: SmtpSecureMode[] | null;
  secure_mode_not?: SmtpSecureMode | null;
  secure_mode_not_in?: SmtpSecureMode[] | null;
  username?: string | null;
  username_contains?: string | null;
  username_ends_with?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_not?: string | null;
  username_not_contains?: string | null;
  username_not_ends_with?: string | null;
  username_not_in?: string[] | null;
  username_not_starts_with?: string | null;
  username_starts_with?: string | null;
}

export enum SmtpSecureMode {
  SSL = "SSL",
  STARTTLS = "STARTTLS",
  UNSPECIFIED = "UNSPECIFIED",
}

export interface GetAlertNotifiersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertNotifierOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertNotifierWhereInput | null;
}

export interface NestedAggregateAlertNotifier {
  /** @format int32 */
  count: number;
}

export interface AlertNotifierConnection {
  aggregate: NestedAggregateAlertNotifier;
}

export interface GetAlertNotifiersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertNotifierOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertNotifierWhereInput | null;
}

export interface NestedGlobalAlertRule {
  id: string;
  name: string;
}

export interface AlertRule {
  cluster?: NestedCluster | null;
  customized: boolean;
  disabled: boolean;
  global_alert_rule: NestedGlobalAlertRule;
  id: string;
  local_id: string;
  thresholds: NestedThresholds[];
}

export enum AlertRuleOrderByInput {
  CustomizedASC = "customized_ASC",
  CustomizedDESC = "customized_DESC",
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ThresholdsASC = "thresholds_ASC",
  ThresholdsDESC = "thresholds_DESC",
}

export interface GetAlertRulesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertRuleOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertRuleWhereInput | null;
}

export interface NestedAggregateAlertRule {
  /** @format int32 */
  count: number;
}

export interface AlertRuleConnection {
  aggregate: NestedAggregateAlertRule;
}

export interface GetAlertRulesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertRuleOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertRuleWhereInput | null;
}

export interface NestedAggregateAlert {
  /** @format int32 */
  count: number;
}

export interface AlertConnection {
  aggregate: NestedAggregateAlert;
}

export interface GetAlertsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: AlertOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: AlertWhereInput | null;
}

export interface Application {
  cluster: NestedCluster;
  error_message?: string | null;
  id: string;
  image_name?: string | null;
  local_id: string;

  /** @format int64 */
  memory: number;
  state: ApplicationState;
  storage_ip: string;
  type: ApplicationType;
  update_time?: string | null;

  /** @format int32 */
  vcpu: number;
  version: string;
  vm?: NestedVm | null;

  /** @format int64 */
  volume_size: number;
}

export enum ApplicationOrderByInput {
  ErrorMessageASC = "error_message_ASC",
  ErrorMessageDESC = "error_message_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  ImageNameASC = "image_name_ASC",
  ImageNameDESC = "image_name_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MemoryASC = "memory_ASC",
  MemoryDESC = "memory_DESC",
  StateASC = "state_ASC",
  StateDESC = "state_DESC",
  StorageIpASC = "storage_ip_ASC",
  StorageIpDESC = "storage_ip_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UpdateTimeASC = "update_time_ASC",
  UpdateTimeDESC = "update_time_DESC",
  VcpuASC = "vcpu_ASC",
  VcpuDESC = "vcpu_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
  VolumeSizeASC = "volume_size_ASC",
  VolumeSizeDESC = "volume_size_DESC",
}

export interface GetApplicationsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ApplicationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ApplicationWhereInput | null;
}

export interface NestedAggregateApplication {
  /** @format int32 */
  count: number;
}

export interface ApplicationConnection {
  aggregate: NestedAggregateApplication;
}

export interface GetApplicationsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ApplicationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ApplicationWhereInput | null;
}

export enum BrickTopoOrderByInput {
  CapacityASC = "capacity_ASC",
  CapacityDESC = "capacity_DESC",
  DiskLayoutASC = "disk_layout_ASC",
  DiskLayoutDESC = "disk_layout_DESC",
  HeightASC = "height_ASC",
  HeightDESC = "height_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PositionASC = "position_ASC",
  PositionDESC = "position_DESC",
  PowerLayoutASC = "power_layout_ASC",
  PowerLayoutDESC = "power_layout_DESC",
  PowerPositionASC = "power_position_ASC",
  PowerPositionDESC = "power_position_DESC",
  PowersASC = "powers_ASC",
  PowersDESC = "powers_DESC",
  TagPositionInBrickASC = "tag_position_in_brick_ASC",
  TagPositionInBrickDESC = "tag_position_in_brick_DESC",
}

export interface GetBrickTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: BrickTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: BrickTopoWhereInput | null;
}

export interface NestedAggregateBrickTopo {
  /** @format int32 */
  count: number;
}

export interface BrickTopoConnection {
  aggregate: NestedAggregateBrickTopo;
}

export interface GetBrickTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: BrickTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: BrickTopoWhereInput | null;
}

export interface NestedCloudTowerApplication {
  id: string;
  name: string;
}

export interface CloudTowerApplicationPackage {
  applications?: NestedCloudTowerApplication[] | null;
  architecture: Architecture;
  containers: object;
  id: string;
  images: object;
  name: string;
  scosVersion: string;
  version: string;
}

export enum CloudTowerApplicationPackageOrderByInput {
  ArchitectureASC = "architecture_ASC",
  ArchitectureDESC = "architecture_DESC",
  ContainersASC = "containers_ASC",
  ContainersDESC = "containers_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  ImagesASC = "images_ASC",
  ImagesDESC = "images_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ScosVersionASC = "scosVersion_ASC",
  ScosVersionDESC = "scosVersion_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetCloudTowerApplicationPackagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: CloudTowerApplicationPackageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: CloudTowerApplicationPackageWhereInput | null;
}

export interface NestedAggregateCloudTowerApplicationPackage {
  /** @format int32 */
  count: number;
}

export interface CloudTowerApplicationPackageConnection {
  aggregate: NestedAggregateCloudTowerApplicationPackage;
}

export interface GetCloudTowerApplicationPackagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: CloudTowerApplicationPackageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: CloudTowerApplicationPackageWhereInput | null;
}

export enum CloudTowerApplicationOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InstanceStatusesASC = "instanceStatuses_ASC",
  InstanceStatusesDESC = "instanceStatuses_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PlacementSituationASC = "placementSituation_ASC",
  PlacementSituationDESC = "placementSituation_DESC",
  PlacementVerbASC = "placementVerb_ASC",
  PlacementVerbDESC = "placementVerb_DESC",
  ResourceVersionASC = "resourceVersion_ASC",
  ResourceVersionDESC = "resourceVersion_DESC",
  StateASC = "state_ASC",
  StateDESC = "state_DESC",
  TargetPackageASC = "targetPackage_ASC",
  TargetPackageDESC = "targetPackage_DESC",
  VmSpecASC = "vmSpec_ASC",
  VmSpecDESC = "vmSpec_DESC",
}

export interface GetCloudTowerApplicationsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: CloudTowerApplicationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: CloudTowerApplicationWhereInput | null;
}

export interface NestedAggregateCloudTowerApplication {
  /** @format int32 */
  count: number;
}

export interface CloudTowerApplicationConnection {
  aggregate: NestedAggregateCloudTowerApplication;
}

export interface GetCloudTowerApplicationsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: CloudTowerApplicationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: CloudTowerApplicationWhereInput | null;
}

export interface ClusterImage {
  cluster: NestedCluster;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id?: string | null;
  meta_name: string;

  /** @format int64 */
  meta_size: number;
  name: string;

  /** @format int64 */
  size: number;
  upgrade_from: string[];
  upgrade_tool_version?: string | null;
  version: string;
  zbs_version?: string | null;
}

export enum ClusterImageOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MetaNameASC = "meta_name_ASC",
  MetaNameDESC = "meta_name_DESC",
  MetaSizeASC = "meta_size_ASC",
  MetaSizeDESC = "meta_size_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  UpgradeToolVersionASC = "upgrade_tool_version_ASC",
  UpgradeToolVersionDESC = "upgrade_tool_version_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
  ZbsVersionASC = "zbs_version_ASC",
  ZbsVersionDESC = "zbs_version_DESC",
}

export interface ClusterImageWhereInput {
  AND?: ClusterImageWhereInput[] | null;
  NOT?: ClusterImageWhereInput[] | null;
  OR?: ClusterImageWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  meta_name?: string | null;
  meta_name_contains?: string | null;
  meta_name_ends_with?: string | null;
  meta_name_gt?: string | null;
  meta_name_gte?: string | null;
  meta_name_in?: string[] | null;
  meta_name_lt?: string | null;
  meta_name_lte?: string | null;
  meta_name_not?: string | null;
  meta_name_not_contains?: string | null;
  meta_name_not_ends_with?: string | null;
  meta_name_not_in?: string[] | null;
  meta_name_not_starts_with?: string | null;
  meta_name_starts_with?: string | null;

  /** @format int64 */
  meta_size?: number | null;

  /** @format int64 */
  meta_size_gt?: number | null;

  /** @format int64 */
  meta_size_gte?: number | null;
  meta_size_in?: number[] | null;

  /** @format int64 */
  meta_size_lt?: number | null;

  /** @format int64 */
  meta_size_lte?: number | null;

  /** @format int64 */
  meta_size_not?: number | null;
  meta_size_not_in?: number[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  upgrade_tool_version?: string | null;
  upgrade_tool_version_contains?: string | null;
  upgrade_tool_version_ends_with?: string | null;
  upgrade_tool_version_gt?: string | null;
  upgrade_tool_version_gte?: string | null;
  upgrade_tool_version_in?: string[] | null;
  upgrade_tool_version_lt?: string | null;
  upgrade_tool_version_lte?: string | null;
  upgrade_tool_version_not?: string | null;
  upgrade_tool_version_not_contains?: string | null;
  upgrade_tool_version_not_ends_with?: string | null;
  upgrade_tool_version_not_in?: string[] | null;
  upgrade_tool_version_not_starts_with?: string | null;
  upgrade_tool_version_starts_with?: string | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_semantic_gt?: string | null;
  version_semantic_gte?: string | null;
  version_semantic_lt?: string | null;
  version_semantic_lte?: string | null;
  version_starts_with?: string | null;
  zbs_version?: string | null;
  zbs_version_contains?: string | null;
  zbs_version_ends_with?: string | null;
  zbs_version_gt?: string | null;
  zbs_version_gte?: string | null;
  zbs_version_in?: string[] | null;
  zbs_version_lt?: string | null;
  zbs_version_lte?: string | null;
  zbs_version_not?: string | null;
  zbs_version_not_contains?: string | null;
  zbs_version_not_ends_with?: string | null;
  zbs_version_not_in?: string[] | null;
  zbs_version_not_starts_with?: string | null;
  zbs_version_starts_with?: string | null;
}

export interface GetClusterImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterImageWhereInput | null;
}

export interface NestedAggregateClusterImage {
  /** @format int32 */
  count: number;
}

export interface ClusterImageConnection {
  aggregate: NestedAggregateClusterImage;
}

export interface GetClusterImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterImageWhereInput | null;
}

export enum ClusterSettingsOrderByInput {
  DefaultHaASC = "default_ha_ASC",
  DefaultHaDESC = "default_ha_DESC",
  DefaultStoragePolicyASC = "default_storage_policy_ASC",
  DefaultStoragePolicyDESC = "default_storage_policy_DESC",
  EnabledIscsiASC = "enabled_iscsi_ASC",
  EnabledIscsiDESC = "enabled_iscsi_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  VmRecycleBinASC = "vm_recycle_bin_ASC",
  VmRecycleBinDESC = "vm_recycle_bin_DESC",
}

export interface GetClusterSettingsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterSettingsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterSettingsWhereInput | null;
}

export interface NestedAggregateClusterSettings {
  /** @format int32 */
  count: number;
}

export interface ClusterSettingsConnection {
  aggregate: NestedAggregateClusterSettings;
}

export interface GetClusterSettingsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterSettingsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterSettingsWhereInput | null;
}

export interface ClusterTopo {
  brick_topoes?: NestedBrickTopo[] | null;
  cluster: NestedCluster;
  id: string;
  local_id: string;
  name: string;
  node_topoes?: NestedNodeTopo[] | null;
  zone_topoes?: NestedZoneTopo[] | null;
}

export enum ClusterTopoOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetClusterTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterTopoWhereInput | null;
}

export interface NestedAggregateClusterTopo {
  /** @format int32 */
  count: number;
}

export interface ClusterTopoConnection {
  aggregate: NestedAggregateClusterTopo;
}

export interface GetClusterTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterTopoWhereInput | null;
}

export interface ClusterUpgradeHistory {
  cluster: NestedCluster;
  date: string;
  id: string;
  local_id: string;
  progress: object;
  result: string;
  task_uuid: string;
  version: string;
}

export enum ClusterUpgradeHistoryOrderByInput {
  DateASC = "date_ASC",
  DateDESC = "date_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ProgressASC = "progress_ASC",
  ProgressDESC = "progress_DESC",
  ResultASC = "result_ASC",
  ResultDESC = "result_DESC",
  TaskUuidASC = "task_uuid_ASC",
  TaskUuidDESC = "task_uuid_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface ClusterUpgradeHistoryWhereInput {
  AND?: ClusterUpgradeHistoryWhereInput[] | null;
  NOT?: ClusterUpgradeHistoryWhereInput[] | null;
  OR?: ClusterUpgradeHistoryWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  date?: string | null;
  date_gt?: string | null;
  date_gte?: string | null;
  date_in?: string[] | null;
  date_lt?: string | null;
  date_lte?: string | null;
  date_not?: string | null;
  date_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  result?: string | null;
  result_contains?: string | null;
  result_ends_with?: string | null;
  result_gt?: string | null;
  result_gte?: string | null;
  result_in?: string[] | null;
  result_lt?: string | null;
  result_lte?: string | null;
  result_not?: string | null;
  result_not_contains?: string | null;
  result_not_ends_with?: string | null;
  result_not_in?: string[] | null;
  result_not_starts_with?: string | null;
  result_starts_with?: string | null;
  task_uuid?: string | null;
  task_uuid_contains?: string | null;
  task_uuid_ends_with?: string | null;
  task_uuid_gt?: string | null;
  task_uuid_gte?: string | null;
  task_uuid_in?: string[] | null;
  task_uuid_lt?: string | null;
  task_uuid_lte?: string | null;
  task_uuid_not?: string | null;
  task_uuid_not_contains?: string | null;
  task_uuid_not_ends_with?: string | null;
  task_uuid_not_in?: string[] | null;
  task_uuid_not_starts_with?: string | null;
  task_uuid_starts_with?: string | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface GetClusterUpgradeHistoriesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterUpgradeHistoryOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterUpgradeHistoryWhereInput | null;
}

export interface NestedAggregateClusterUpgradeHistory {
  /** @format int32 */
  count: number;
}

export interface ClusterUpgradeHistoryConnection {
  aggregate: NestedAggregateClusterUpgradeHistory;
}

export interface GetClusterUpgradeHistoriesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterUpgradeHistoryOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterUpgradeHistoryWhereInput | null;
}

export interface NestedAggregateCluster {
  /** @format int32 */
  count: number;
}

export interface ClusterConnection {
  aggregate: NestedAggregateCluster;
}

export interface GetClustersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ClusterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ClusterWhereInput | null;
}

export enum ConsistencyGroupSnapshotOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetConsistencyGroupSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ConsistencyGroupSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ConsistencyGroupSnapshotWhereInput | null;
}

export interface NestedAggregateConsistencyGroupSnapshot {
  /** @format int32 */
  count: number;
}

export interface ConsistencyGroupSnapshotConnection {
  aggregate: NestedAggregateConsistencyGroupSnapshot;
}

export interface GetConsistencyGroupSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ConsistencyGroupSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ConsistencyGroupSnapshotWhereInput | null;
}

export interface NestedAggregateConsistencyGroup {
  /** @format int32 */
  count: number;
}

export interface ConsistencyGroupConnection {
  aggregate: NestedAggregateConsistencyGroup;
}

export interface GetConsistencyGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ConsistencyGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ConsistencyGroupWhereInput | null;
}

export interface NestedAggregateContentLibraryImage {
  /** @format int32 */
  count: number;
}

export interface ContentLibraryImageConnection {
  aggregate: NestedAggregateContentLibraryImage;
}

export interface GetContentLibraryImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ContentLibraryImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ContentLibraryImageWhereInput | null;
}

export interface NestedAggregateContentLibraryVmTemplate {
  /** @format int32 */
  count: number;
}

export interface ContentLibraryVmTemplateConnection {
  aggregate: NestedAggregateContentLibraryVmTemplate;
}

export interface GetContentLibraryVmTemplatesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ContentLibraryVmTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ContentLibraryVmTemplateWhereInput | null;
}

export interface NestedAggregateDatacenter {
  /** @format int32 */
  count: number;
}

export interface DatacenterConnection {
  aggregate: NestedAggregateDatacenter;
}

export interface GetDatacentersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DatacenterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DatacenterWhereInput | null;
}

export interface NestedLicense {
  id: string;
}

export interface Deploy {
  id: string;
  license?: NestedLicense | null;
  version: string;
}

export enum DeployOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface DeployWhereInput {
  AND?: DeployWhereInput[] | null;
  NOT?: DeployWhereInput[] | null;
  OR?: DeployWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  license?: LicenseWhereInput | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface LicenseWhereInput {
  AND?: LicenseWhereInput[] | null;
  NOT?: LicenseWhereInput[] | null;
  OR?: LicenseWhereInput[] | null;
  expire_date?: string | null;
  expire_date_gt?: string | null;
  expire_date_gte?: string | null;
  expire_date_in?: string[] | null;
  expire_date_lt?: string | null;
  expire_date_lte?: string | null;
  expire_date_not?: string | null;
  expire_date_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  license_serial?: string | null;
  license_serial_contains?: string | null;
  license_serial_ends_with?: string | null;
  license_serial_gt?: string | null;
  license_serial_gte?: string | null;
  license_serial_in?: string[] | null;
  license_serial_lt?: string | null;
  license_serial_lte?: string | null;
  license_serial_not?: string | null;
  license_serial_not_contains?: string | null;
  license_serial_not_ends_with?: string | null;
  license_serial_not_in?: string[] | null;
  license_serial_not_starts_with?: string | null;
  license_serial_starts_with?: string | null;
  maintenance_end_date?: string | null;
  maintenance_end_date_gt?: string | null;
  maintenance_end_date_gte?: string | null;
  maintenance_end_date_in?: string[] | null;
  maintenance_end_date_lt?: string | null;
  maintenance_end_date_lte?: string | null;
  maintenance_end_date_not?: string | null;
  maintenance_end_date_not_in?: string[] | null;
  maintenance_start_date?: string | null;
  maintenance_start_date_gt?: string | null;
  maintenance_start_date_gte?: string | null;
  maintenance_start_date_in?: string[] | null;
  maintenance_start_date_lt?: string | null;
  maintenance_start_date_lte?: string | null;
  maintenance_start_date_not?: string | null;
  maintenance_start_date_not_in?: string[] | null;

  /** @format int32 */
  max_chunk_num?: number | null;

  /** @format int32 */
  max_chunk_num_gt?: number | null;

  /** @format int32 */
  max_chunk_num_gte?: number | null;
  max_chunk_num_in?: number[] | null;

  /** @format int32 */
  max_chunk_num_lt?: number | null;

  /** @format int32 */
  max_chunk_num_lte?: number | null;

  /** @format int32 */
  max_chunk_num_not?: number | null;
  max_chunk_num_not_in?: number[] | null;

  /** @format int32 */
  max_cluster_num?: number | null;

  /** @format int32 */
  max_cluster_num_gt?: number | null;

  /** @format int32 */
  max_cluster_num_gte?: number | null;
  max_cluster_num_in?: number[] | null;

  /** @format int32 */
  max_cluster_num_lt?: number | null;

  /** @format int32 */
  max_cluster_num_lte?: number | null;

  /** @format int32 */
  max_cluster_num_not?: number | null;
  max_cluster_num_not_in?: number[] | null;
  sign_date?: string | null;
  sign_date_gt?: string | null;
  sign_date_gte?: string | null;
  sign_date_in?: string[] | null;
  sign_date_lt?: string | null;
  sign_date_lte?: string | null;
  sign_date_not?: string | null;
  sign_date_not_in?: string[] | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;
  type?: LicenseType | null;
  type_in?: LicenseType[] | null;
  type_not?: LicenseType | null;
  type_not_in?: LicenseType[] | null;
}

export interface GetDeploysRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DeployOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DeployWhereInput | null;
}

export interface NestedAggregateDeploy {
  /** @format int32 */
  count: number;
}

export interface DeployConnection {
  aggregate: NestedAggregateDeploy;
}

export interface GetDeploysConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DeployOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DeployWhereInput | null;
}

export interface NestedDiscoveredHostDimms {
  dimm_id: string;
  fw_version: string;
  health_status: string;
  socket_id: string;
}

export interface NestedDiscoveredHostDisk {
  dimm_ids?: string[] | null;
  drive: string;
  function?: DiskFunction | null;
  model: string;

  /** @format int32 */
  numa_node?: number | null;
  persistent_memory_type?: string | null;
  serial: string;

  /** @format int64 */
  size: number;
  type: DiskType;
}

export interface NestedDiscoveredHostIface {
  ipv4?: string | null;
  ipv6?: string | null;
  mac_address: string;

  /** @format int32 */
  mtu: number;
  name: string;
  pci_slot_name?: string | null;
  rdma_enabled?: boolean | null;

  /** @format double */
  speed?: number | null;
  up: boolean;
}

export interface DiscoveredHost {
  all_flash: boolean;
  deployed?: boolean | null;
  dimms?: NestedDiscoveredHostDimms[] | null;
  disks: NestedDiscoveredHostDisk[];
  host_ip: string;
  host_uuid: string;
  hostname: string;
  ifaces: NestedDiscoveredHostIface[];
  ipmi_ip?: string | null;
  is_os_in_raid1?: boolean | null;
  product?: string | null;
  serial: string;

  /** @format int32 */
  sockets: number;
  version: string;
  zbs_spec?: string | null;
}

export interface ClusterWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface GetDiscoverHostsRequestBody {
  cluster: ClusterWhereUniqueInput;
  host_address?: string[] | null;
}

export interface NestedAggregateDisk {
  /** @format int32 */
  count: number;
}

export interface DiskConnection {
  aggregate: NestedAggregateDisk;
}

export interface GetDisksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: DiskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: DiskWhereInput | null;
}

export interface ElfDataStore {
  cluster: NestedCluster;
  description: string;
  external_use: boolean;
  id: string;
  internal: boolean;
  ip_whitelist: string;
  iscsi_target?: NestedIscsiTarget | null;
  local_id: string;
  name: string;
  nfs_export?: NestedNfsExport | null;
  nvmf_subsystem?: NestedNvmfSubsystem | null;

  /** @format int32 */
  replica_num: number;
  thin_provision: boolean;
  type: ElfDataStoreType;
}

export interface NestedAggregateElfDataStore {
  /** @format int32 */
  count: number;
}

export interface ElfDataStoreConnection {
  aggregate: NestedAggregateElfDataStore;
}

export interface GetElfDataStoresConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfDataStoreOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfDataStoreWhereInput | null;
}

export interface NestedAggregateElfImage {
  /** @format int32 */
  count: number;
}

export interface ElfImageConnection {
  aggregate: NestedAggregateElfImage;
}

export interface GetElfImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfImageWhereInput | null;
}

export interface ElfStoragePolicy {
  cluster: NestedCluster;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_id: string;
  name: string;

  /** @format int32 */
  replica_num: number;

  /** @format int32 */
  stripe_num: number;

  /** @format int64 */
  stripe_size: number;
  thin_provision: boolean;
}

export enum ElfStoragePolicyOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ReplicaNumASC = "replica_num_ASC",
  ReplicaNumDESC = "replica_num_DESC",
  StripeNumASC = "stripe_num_ASC",
  StripeNumDESC = "stripe_num_DESC",
  StripeSizeASC = "stripe_size_ASC",
  StripeSizeDESC = "stripe_size_DESC",
  ThinProvisionASC = "thin_provision_ASC",
  ThinProvisionDESC = "thin_provision_DESC",
}

export interface ElfStoragePolicyWhereInput {
  AND?: ElfStoragePolicyWhereInput[] | null;
  NOT?: ElfStoragePolicyWhereInput[] | null;
  OR?: ElfStoragePolicyWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_id?: string | null;
  local_id_contains?: string | null;
  local_id_ends_with?: string | null;
  local_id_gt?: string | null;
  local_id_gte?: string | null;
  local_id_in?: string[] | null;
  local_id_lt?: string | null;
  local_id_lte?: string | null;
  local_id_not?: string | null;
  local_id_not_contains?: string | null;
  local_id_not_ends_with?: string | null;
  local_id_not_in?: string[] | null;
  local_id_not_starts_with?: string | null;
  local_id_starts_with?: string | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int32 */
  replica_num?: number | null;

  /** @format int32 */
  replica_num_gt?: number | null;

  /** @format int32 */
  replica_num_gte?: number | null;
  replica_num_in?: number[] | null;

  /** @format int32 */
  replica_num_lt?: number | null;

  /** @format int32 */
  replica_num_lte?: number | null;

  /** @format int32 */
  replica_num_not?: number | null;
  replica_num_not_in?: number[] | null;

  /** @format int32 */
  stripe_num?: number | null;

  /** @format int32 */
  stripe_num_gt?: number | null;

  /** @format int32 */
  stripe_num_gte?: number | null;
  stripe_num_in?: number[] | null;

  /** @format int32 */
  stripe_num_lt?: number | null;

  /** @format int32 */
  stripe_num_lte?: number | null;

  /** @format int32 */
  stripe_num_not?: number | null;
  stripe_num_not_in?: number[] | null;

  /** @format int64 */
  stripe_size?: number | null;

  /** @format int64 */
  stripe_size_gt?: number | null;

  /** @format int64 */
  stripe_size_gte?: number | null;
  stripe_size_in?: number[] | null;

  /** @format int64 */
  stripe_size_lt?: number | null;

  /** @format int64 */
  stripe_size_lte?: number | null;

  /** @format int64 */
  stripe_size_not?: number | null;
  stripe_size_not_in?: number[] | null;
  thin_provision?: boolean | null;
  thin_provision_not?: boolean | null;
}

export interface GetElfStoragePoliciesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfStoragePolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfStoragePolicyWhereInput | null;
}

export interface NestedAggregateElfStoragePolicy {
  /** @format int32 */
  count: number;
}

export interface ElfStoragePolicyConnection {
  aggregate: NestedAggregateElfStoragePolicy;
}

export interface GetElfStoragePoliciesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ElfStoragePolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ElfStoragePolicyWhereInput | null;
}

export interface NestedAggregateEntityFilter {
  /** @format int32 */
  count: number;
}

export interface EntityFilterConnection {
  aggregate: NestedAggregateEntityFilter;
}

export interface GetEntityFiltersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EntityFilterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EntityFilterWhereInput | null;
}

export interface NestedEverouteControllerInstance {
  ipAddr: string;
  vlan: string;
}

export interface NestedEverouteControllerTemplate {
  cluster: string;
  gateway: string;

  /** @format int64 */
  memory: number;
  netmask: string;

  /** @format int64 */
  size: number;

  /** @format int32 */
  vcpu: number;
}

export interface NestedEverouteClusterWhitelist {
  egress?: NestedNetworkPolicyRule[] | null;
  enable: boolean;
  ingress?: NestedNetworkPolicyRule[] | null;
}

export interface NestedEverouteAgentStatus {
  host?: NestedHost | null;
  hostID?: string | null;
  ipAddr?: string | null;
  isHealth: boolean;
  message?: string | null;
  phase?: EverouteClusterPhase | null;
  reason?: string | null;
}

export interface NestedEverouteManageVDSStatus {
  message?: string | null;
  phase?: EverouteClusterPhase | null;
  reason?: string | null;

  /** @format int32 */
  retryCount?: number | null;
  vds?: NestedVds | null;
  vdsID: string;
}

export interface NestedEverouteClusterAgentStatus {
  /** @format int32 */
  currentNumber?: number | null;

  /** @format int32 */
  expectNumber?: number | null;
  instances?: NestedEverouteAgentStatus[] | null;
  manageVDSes?: NestedEverouteManageVDSStatus[] | null;

  /** @format int32 */
  numberHealth?: number | null;
}

export interface NestedEverouteClusterCondition {
  lastProbeTime?: string | null;
  type: string;
}

export interface NestedEverouteClusterVMMetrics {
  /** @format double */
  cpuUsage: number;

  /** @format double */
  dataVolumeUsage: number;
  lastAcquisitionTime: string;

  /** @format double */
  memoryUsage: number;
}

export interface NestedEverouteControllerStatus {
  ipAddr?: string | null;
  isHealth: boolean;
  message?: string | null;
  metrics?: NestedEverouteClusterVMMetrics | null;
  phase?: EverouteClusterPhase | null;
  reason?: string | null;
  vm?: NestedVm | null;
  vmID?: string | null;
}

export interface NestedEverouteClusterControllerStatus {
  /** @format int32 */
  currentNumber?: number | null;

  /** @format int32 */
  expectNumber?: number | null;
  instances?: NestedEverouteControllerStatus[] | null;

  /** @format int32 */
  numberHealth?: number | null;
}

export interface NestedEverouteClusterStatus {
  agents?: NestedEverouteClusterAgentStatus | null;
  conditions?: NestedEverouteClusterCondition[] | null;
  controllers?: NestedEverouteClusterControllerStatus | null;
  message?: string | null;
  phase?: EverouteClusterPhase | null;
  reason?: string | null;

  /** @format int32 */
  retryCount?: number | null;
  version?: string | null;
}

export interface EverouteCluster {
  agent_elf_clusters?: NestedCluster[] | null;
  agent_elf_vdses?: NestedVds[] | null;
  controller_instances: NestedEverouteControllerInstance[];
  controller_template: NestedEverouteControllerTemplate;
  entityAsyncStatus?: EntityAsyncStatus | null;
  global_default_action: GlobalPolicyAction;
  global_whitelist?: NestedEverouteClusterWhitelist | null;
  id: string;
  installed?: boolean | null;
  name: string;
  phase?: EverouteClusterPhase | null;
  status?: NestedEverouteClusterStatus | null;
  version: string;
}

export enum EverouteClusterOrderByInput {
  ControllerInstancesASC = "controller_instances_ASC",
  ControllerInstancesDESC = "controller_instances_DESC",
  ControllerTemplateASC = "controller_template_ASC",
  ControllerTemplateDESC = "controller_template_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  GlobalDefaultActionASC = "global_default_action_ASC",
  GlobalDefaultActionDESC = "global_default_action_DESC",
  GlobalWhitelistASC = "global_whitelist_ASC",
  GlobalWhitelistDESC = "global_whitelist_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InstalledASC = "installed_ASC",
  InstalledDESC = "installed_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PhaseASC = "phase_ASC",
  PhaseDESC = "phase_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetEverouteClustersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EverouteClusterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EverouteClusterWhereInput | null;
}

export interface NestedAggregateEverouteCluster {
  /** @format int32 */
  count: number;
}

export interface EverouteClusterConnection {
  aggregate: NestedAggregateEverouteCluster;
}

export interface GetEverouteClustersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EverouteClusterOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EverouteClusterWhereInput | null;
}

export interface EverouteLicense {
  code: string;
  expire_date: string;
  id: string;

  /** @format int32 */
  max_socket_num: number;
  serial: string;
  sign_date: string;
  software_edition: SoftwareEdition;
  type: LicenseType;
  uid: string;
}

export enum EverouteLicenseOrderByInput {
  CodeASC = "code_ASC",
  CodeDESC = "code_DESC",
  ExpireDateASC = "expire_date_ASC",
  ExpireDateDESC = "expire_date_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  MaxSocketNumASC = "max_socket_num_ASC",
  MaxSocketNumDESC = "max_socket_num_DESC",
  SerialASC = "serial_ASC",
  SerialDESC = "serial_DESC",
  SignDateASC = "sign_date_ASC",
  SignDateDESC = "sign_date_DESC",
  SoftwareEditionASC = "software_edition_ASC",
  SoftwareEditionDESC = "software_edition_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UidASC = "uid_ASC",
  UidDESC = "uid_DESC",
}

export interface EverouteLicenseWhereInput {
  AND?: EverouteLicenseWhereInput[] | null;
  NOT?: EverouteLicenseWhereInput[] | null;
  OR?: EverouteLicenseWhereInput[] | null;
  code?: string | null;
  code_contains?: string | null;
  code_ends_with?: string | null;
  code_gt?: string | null;
  code_gte?: string | null;
  code_in?: string[] | null;
  code_lt?: string | null;
  code_lte?: string | null;
  code_not?: string | null;
  code_not_contains?: string | null;
  code_not_ends_with?: string | null;
  code_not_in?: string[] | null;
  code_not_starts_with?: string | null;
  code_starts_with?: string | null;
  expire_date?: string | null;
  expire_date_gt?: string | null;
  expire_date_gte?: string | null;
  expire_date_in?: string[] | null;
  expire_date_lt?: string | null;
  expire_date_lte?: string | null;
  expire_date_not?: string | null;
  expire_date_not_in?: string[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int32 */
  max_socket_num?: number | null;

  /** @format int32 */
  max_socket_num_gt?: number | null;

  /** @format int32 */
  max_socket_num_gte?: number | null;
  max_socket_num_in?: number[] | null;

  /** @format int32 */
  max_socket_num_lt?: number | null;

  /** @format int32 */
  max_socket_num_lte?: number | null;

  /** @format int32 */
  max_socket_num_not?: number | null;
  max_socket_num_not_in?: number[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;
  sign_date?: string | null;
  sign_date_gt?: string | null;
  sign_date_gte?: string | null;
  sign_date_in?: string[] | null;
  sign_date_lt?: string | null;
  sign_date_lte?: string | null;
  sign_date_not?: string | null;
  sign_date_not_in?: string[] | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;
  type?: LicenseType | null;
  type_in?: LicenseType[] | null;
  type_not?: LicenseType | null;
  type_not_in?: LicenseType[] | null;
  uid?: string | null;
  uid_contains?: string | null;
  uid_ends_with?: string | null;
  uid_gt?: string | null;
  uid_gte?: string | null;
  uid_in?: string[] | null;
  uid_lt?: string | null;
  uid_lte?: string | null;
  uid_not?: string | null;
  uid_not_contains?: string | null;
  uid_not_ends_with?: string | null;
  uid_not_in?: string[] | null;
  uid_not_starts_with?: string | null;
  uid_starts_with?: string | null;
}

export interface GetEverouteLicensesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EverouteLicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EverouteLicenseWhereInput | null;
}

export interface NestedAggregateEverouteLicense {
  /** @format int32 */
  count: number;
}

export interface EverouteLicenseConnection {
  aggregate: NestedAggregateEverouteLicense;
}

export interface GetEverouteLicensesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EverouteLicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EverouteLicenseWhereInput | null;
}

export interface EveroutePackage {
  arch: Architecture;
  description: string;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_created_at: string;
  name: string;
  package_info: object;

  /** @format int64 */
  size: number;
  version: string;
}

export enum EveroutePackageOrderByInput {
  ArchASC = "arch_ASC",
  ArchDESC = "arch_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PackageInfoASC = "package_info_ASC",
  PackageInfoDESC = "package_info_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface EveroutePackageWhereInput {
  AND?: EveroutePackageWhereInput[] | null;
  NOT?: EveroutePackageWhereInput[] | null;
  OR?: EveroutePackageWhereInput[] | null;
  arch?: Architecture | null;
  arch_in?: Architecture[] | null;
  arch_not?: Architecture | null;
  arch_not_in?: Architecture[] | null;
  description?: string | null;
  description_contains?: string | null;
  description_ends_with?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_not?: string | null;
  description_not_contains?: string | null;
  description_not_ends_with?: string | null;
  description_not_in?: string[] | null;
  description_not_starts_with?: string | null;
  description_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  local_created_at?: string | null;
  local_created_at_gt?: string | null;
  local_created_at_gte?: string | null;
  local_created_at_in?: string[] | null;
  local_created_at_lt?: string | null;
  local_created_at_lte?: string | null;
  local_created_at_not?: string | null;
  local_created_at_not_in?: string[] | null;
  name?: string | null;
  name_contains?: string | null;
  name_ends_with?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_not?: string | null;
  name_not_contains?: string | null;
  name_not_ends_with?: string | null;
  name_not_in?: string[] | null;
  name_not_starts_with?: string | null;
  name_starts_with?: string | null;

  /** @format int64 */
  size?: number | null;

  /** @format int64 */
  size_gt?: number | null;

  /** @format int64 */
  size_gte?: number | null;
  size_in?: number[] | null;

  /** @format int64 */
  size_lt?: number | null;

  /** @format int64 */
  size_lte?: number | null;

  /** @format int64 */
  size_not?: number | null;
  size_not_in?: number[] | null;
  version?: string | null;
  version_contains?: string | null;
  version_ends_with?: string | null;
  version_gt?: string | null;
  version_gte?: string | null;
  version_in?: string[] | null;
  version_lt?: string | null;
  version_lte?: string | null;
  version_not?: string | null;
  version_not_contains?: string | null;
  version_not_ends_with?: string | null;
  version_not_in?: string[] | null;
  version_not_starts_with?: string | null;
  version_starts_with?: string | null;
}

export interface GetEveroutePackagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EveroutePackageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EveroutePackageWhereInput | null;
}

export interface NestedAggregateEveroutePackage {
  /** @format int32 */
  count: number;
}

export interface EveroutePackageConnection {
  aggregate: NestedAggregateEveroutePackage;
}

export interface GetEveroutePackagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: EveroutePackageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: EveroutePackageWhereInput | null;
}

export interface NestedAggregateGlobalAlertRule {
  /** @format int32 */
  count: number;
}

export interface GlobalAlertRuleConnection {
  aggregate: NestedAggregateGlobalAlertRule;
}

export interface GetGlobalAlertRulesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GlobalAlertRuleOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GlobalAlertRuleWhereInput | null;
}

export enum GlobalSettingsOrderByInput {
  AuthASC = "auth_ASC",
  AuthDESC = "auth_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  VmRecycleBinASC = "vm_recycle_bin_ASC",
  VmRecycleBinDESC = "vm_recycle_bin_DESC",
}

export interface GlobalSettingsWhereInput {
  AND?: GlobalSettingsWhereInput[] | null;
  NOT?: GlobalSettingsWhereInput[] | null;
  OR?: GlobalSettingsWhereInput[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
}

export interface GetGlobalSettingsesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GlobalSettingsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GlobalSettingsWhereInput | null;
}

export interface NestedAggregateGlobalSettings {
  /** @format int32 */
  count: number;
}

export interface GlobalSettingsConnection {
  aggregate: NestedAggregateGlobalSettings;
}

export interface GetGlobalSettingsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GlobalSettingsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GlobalSettingsWhereInput | null;
}

export interface NestedAggregateGpuDevice {
  /** @format int32 */
  count: number;
}

export interface GpuDeviceConnection {
  aggregate: NestedAggregateGpuDevice;
}

export interface GetGpuDevicesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GpuDeviceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GpuDeviceWhereInput | null;
}

export enum GraphOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MetricCountASC = "metric_count_ASC",
  MetricCountDESC = "metric_count_DESC",
  MetricNameASC = "metric_name_ASC",
  MetricNameDESC = "metric_name_DESC",
  MetricTypeASC = "metric_type_ASC",
  MetricTypeDESC = "metric_type_DESC",
  NetworkASC = "network_ASC",
  NetworkDESC = "network_DESC",
  ResourceTypeASC = "resource_type_ASC",
  ResourceTypeDESC = "resource_type_DESC",
  ServiceASC = "service_ASC",
  ServiceDESC = "service_DESC",
  TargetsASC = "targets_ASC",
  TargetsDESC = "targets_DESC",
  TitleASC = "title_ASC",
  TitleDESC = "title_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface GetGraphsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GraphOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GraphWhereInput | null;
}

export interface NestedAggregateGraph {
  /** @format int32 */
  count: number;
}

export interface GraphConnection {
  aggregate: NestedAggregateGraph;
}

export interface GetGraphsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: GraphOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: GraphWhereInput | null;
}

export interface NestedAggregateHost {
  /** @format int32 */
  count: number;
}

export interface HostConnection {
  aggregate: NestedAggregateHost;
}

export interface GetHostsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: HostOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: HostWhereInput | null;
}

export interface Ipmi {
  host: NestedHost;
  id: string;
  ip: string;
  local_id: string;
  username: string;
  valid: boolean;
}

export enum IpmiOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpASC = "ip_ASC",
  IpDESC = "ip_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
  ValidASC = "valid_ASC",
  ValidDESC = "valid_DESC",
}

export interface GetIpmisRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IpmiOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IpmiWhereInput | null;
}

export interface IscsiConnection {
  /** @format int32 */
  client_port: number;
  cluster: NestedCluster;
  host: NestedHost;
  id: string;
  initiator_ip: string;
  iscsi_target?: NestedIscsiTarget | null;
  nvmf_subsystem?: NestedNvmfSubsystem | null;
  tr_type?: StoreTransportType | null;
  type: StoreConnectionType;
}

export interface NestedAggregateIscsiConnection {
  /** @format int32 */
  count: number;
}

export interface IscsiConnectionConnection {
  aggregate: NestedAggregateIscsiConnection;
}

export interface GetIscsiConnectionsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiConnectionOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiConnectionWhereInput | null;
}

export interface NestedAggregateIscsiLunSnapshot {
  /** @format int32 */
  count: number;
}

export interface IscsiLunSnapshotConnection {
  aggregate: NestedAggregateIscsiLunSnapshot;
}

export interface GetIscsiLunSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiLunSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiLunSnapshotWhereInput | null;
}

export interface NestedAggregateIscsiLun {
  /** @format int32 */
  count: number;
}

export interface IscsiLunConnection {
  aggregate: NestedAggregateIscsiLun;
}

export interface GetIscsiLunsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiLunOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiLunWhereInput | null;
}

export interface NestedAggregateIscsiTarget {
  /** @format int32 */
  count: number;
}

export interface IscsiTargetConnection {
  aggregate: NestedAggregateIscsiTarget;
}

export interface GetIscsiTargetsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IscsiTargetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IscsiTargetWhereInput | null;
}

export interface IsolationPolicy {
  egress?: NestedNetworkPolicyRule[] | null;
  everoute_cluster: NestedEverouteCluster;
  id: string;
  ingress?: NestedNetworkPolicyRule[] | null;
  labels?: NestedLabel[] | null;
  mode: IsolationMode;
  vm: NestedVm;
}

export enum IsolationPolicyOrderByInput {
  EgressASC = "egress_ASC",
  EgressDESC = "egress_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IngressASC = "ingress_ASC",
  IngressDESC = "ingress_DESC",
  ModeASC = "mode_ASC",
  ModeDESC = "mode_DESC",
}

export interface GetIsolationPoliciesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IsolationPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IsolationPolicyWhereInput | null;
}

export interface NestedAggregateIsolationPolicy {
  /** @format int32 */
  count: number;
}

export interface IsolationPolicyConnection {
  aggregate: NestedAggregateIsolationPolicy;
}

export interface GetIsolationPoliciesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: IsolationPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: IsolationPolicyWhereInput | null;
}

export enum LabelOrderByInput {
  ClusterNumASC = "cluster_num_ASC",
  ClusterNumDESC = "cluster_num_DESC",
  ConsistencyGroupNumASC = "consistency_group_num_ASC",
  ConsistencyGroupNumDESC = "consistency_group_num_DESC",
  ConsistencyGroupSnapshotNumASC = "consistency_group_snapshot_num_ASC",
  ConsistencyGroupSnapshotNumDESC = "consistency_group_snapshot_num_DESC",
  ContentLibraryImageNumASC = "content_library_image_num_ASC",
  ContentLibraryImageNumDESC = "content_library_image_num_DESC",
  ContentLibraryVmTemplateNumASC = "content_library_vm_template_num_ASC",
  ContentLibraryVmTemplateNumDESC = "content_library_vm_template_num_DESC",
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  DatacenterNumASC = "datacenter_num_ASC",
  DatacenterNumDESC = "datacenter_num_DESC",
  DiskNumASC = "disk_num_ASC",
  DiskNumDESC = "disk_num_DESC",
  ElfImageNumASC = "elf_image_num_ASC",
  ElfImageNumDESC = "elf_image_num_DESC",
  GpuDeviceNumASC = "gpu_device_num_ASC",
  GpuDeviceNumDESC = "gpu_device_num_DESC",
  HostNumASC = "host_num_ASC",
  HostNumDESC = "host_num_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IscsiLunNumASC = "iscsi_lun_num_ASC",
  IscsiLunNumDESC = "iscsi_lun_num_DESC",
  IscsiLunSnapshotNumASC = "iscsi_lun_snapshot_num_ASC",
  IscsiLunSnapshotNumDESC = "iscsi_lun_snapshot_num_DESC",
  IscsiTargetNumASC = "iscsi_target_num_ASC",
  IscsiTargetNumDESC = "iscsi_target_num_DESC",
  IsolationPolicyNumASC = "isolation_policy_num_ASC",
  IsolationPolicyNumDESC = "isolation_policy_num_DESC",
  KeyASC = "key_ASC",
  KeyDESC = "key_DESC",
  NamespaceGroupNumASC = "namespace_group_num_ASC",
  NamespaceGroupNumDESC = "namespace_group_num_DESC",
  NfsExportNumASC = "nfs_export_num_ASC",
  NfsExportNumDESC = "nfs_export_num_DESC",
  NfsInodeNumASC = "nfs_inode_num_ASC",
  NfsInodeNumDESC = "nfs_inode_num_DESC",
  NicNumASC = "nic_num_ASC",
  NicNumDESC = "nic_num_DESC",
  NvmfNamespaceNumASC = "nvmf_namespace_num_ASC",
  NvmfNamespaceNumDESC = "nvmf_namespace_num_DESC",
  NvmfNamespaceSnapshotNumASC = "nvmf_namespace_snapshot_num_ASC",
  NvmfNamespaceSnapshotNumDESC = "nvmf_namespace_snapshot_num_DESC",
  NvmfSubsystemNumASC = "nvmf_subsystem_num_ASC",
  NvmfSubsystemNumDESC = "nvmf_subsystem_num_DESC",
  SecurityPolicyNumASC = "security_policy_num_ASC",
  SecurityPolicyNumDESC = "security_policy_num_DESC",
  SystemVlanNumASC = "system_vlan_num_ASC",
  SystemVlanNumDESC = "system_vlan_num_DESC",
  TotalNumASC = "total_num_ASC",
  TotalNumDESC = "total_num_DESC",
  ValueASC = "value_ASC",
  ValueDESC = "value_DESC",
  VdsNumASC = "vds_num_ASC",
  VdsNumDESC = "vds_num_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
  VmSnapshotNumASC = "vm_snapshot_num_ASC",
  VmSnapshotNumDESC = "vm_snapshot_num_DESC",
  VmTemplateNumASC = "vm_template_num_ASC",
  VmTemplateNumDESC = "vm_template_num_DESC",
  VmVlanNumASC = "vm_vlan_num_ASC",
  VmVlanNumDESC = "vm_vlan_num_DESC",
  VmVolumeNumASC = "vm_volume_num_ASC",
  VmVolumeNumDESC = "vm_volume_num_DESC",
  VmVolumeSnapshotNumASC = "vm_volume_snapshot_num_ASC",
  VmVolumeSnapshotNumDESC = "vm_volume_snapshot_num_DESC",
}

export interface GetLabelsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LabelOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LabelWhereInput | null;
}

export interface NestedAggregateLabel {
  /** @format int32 */
  count: number;
}

export interface LabelConnection {
  aggregate: NestedAggregateLabel;
}

export interface GetLabelsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LabelOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LabelWhereInput | null;
}

export enum LicenseOrderByInput {
  ExpireDateASC = "expire_date_ASC",
  ExpireDateDESC = "expire_date_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LicenseSerialASC = "license_serial_ASC",
  LicenseSerialDESC = "license_serial_DESC",
  MaintenanceEndDateASC = "maintenance_end_date_ASC",
  MaintenanceEndDateDESC = "maintenance_end_date_DESC",
  MaintenanceStartDateASC = "maintenance_start_date_ASC",
  MaintenanceStartDateDESC = "maintenance_start_date_DESC",
  MaxChunkNumASC = "max_chunk_num_ASC",
  MaxChunkNumDESC = "max_chunk_num_DESC",
  MaxClusterNumASC = "max_cluster_num_ASC",
  MaxClusterNumDESC = "max_cluster_num_DESC",
  SignDateASC = "sign_date_ASC",
  SignDateDESC = "sign_date_DESC",
  SoftwareEditionASC = "software_edition_ASC",
  SoftwareEditionDESC = "software_edition_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface GetLicensesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LicenseWhereInput | null;
}

export interface NestedAggregateLicense {
  /** @format int32 */
  count: number;
}

export interface LicenseConnection {
  aggregate: NestedAggregateLicense;
}

export interface GetLicensesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LicenseWhereInput | null;
}

export enum LogCollectionOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LogEndedAtASC = "log_ended_at_ASC",
  LogEndedAtDESC = "log_ended_at_DESC",
  LogStartedAtASC = "log_started_at_ASC",
  LogStartedAtDESC = "log_started_at_DESC",
  OwnerASC = "owner_ASC",
  OwnerDESC = "owner_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  ProgressASC = "progress_ASC",
  ProgressDESC = "progress_DESC",
  ServiceGroupsASC = "service_groups_ASC",
  ServiceGroupsDESC = "service_groups_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  StartedAtASC = "started_at_ASC",
  StartedAtDESC = "started_at_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
}

export interface GetLogCollectionsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LogCollectionOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LogCollectionWhereInput | null;
}

export interface NestedAggregateLogCollection {
  /** @format int32 */
  count: number;
}

export interface LogCollectionConnection {
  aggregate: NestedAggregateLogCollection;
}

export interface GetLogCollectionsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: LogCollectionOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: LogCollectionWhereInput | null;
}

export interface LogServiceConfig {
  group_name: string;
  service_list: string[];
}

export interface LogServiceConfigsInput {
  cluster: ClusterWhereUniqueInput;
}

export interface GetLogServiceConfigsRequestBody {
  input: LogServiceConfigsInput;
}

export interface NestedAggregateNamespaceGroup {
  /** @format int32 */
  count: number;
}

export interface NamespaceGroupConnection {
  aggregate: NestedAggregateNamespaceGroup;
}

export interface GetNamespaceGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NamespaceGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NamespaceGroupWhereInput | null;
}

export interface NestedAggregateNfsExport {
  /** @format int32 */
  count: number;
}

export interface NfsExportConnection {
  aggregate: NestedAggregateNfsExport;
}

export interface GetNfsExportsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NfsExportOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NfsExportWhereInput | null;
}

export interface NfsInode {
  /** @format int64 */
  assigned_size: number;
  entityAsyncStatus?: EntityAsyncStatus | null;
  file: boolean;
  id: string;
  labels?: NestedLabel[] | null;
  local_id: string;
  local_updated_at: string;
  name: string;
  nfs_export: NestedNfsExport;
  parent_id: string;

  /** @format int64 */
  shared_size: number;

  /** @format int32 */
  snapshot_num: number;

  /** @format double */
  unique_logical_size?: number | null;

  /** @format int64 */
  unique_size: number;
}

export enum NfsInodeOrderByInput {
  AssignedSizeASC = "assigned_size_ASC",
  AssignedSizeDESC = "assigned_size_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FileASC = "file_ASC",
  FileDESC = "file_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LocalUpdatedAtASC = "local_updated_at_ASC",
  LocalUpdatedAtDESC = "local_updated_at_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ParentIdASC = "parent_id_ASC",
  ParentIdDESC = "parent_id_DESC",
  SharedSizeASC = "shared_size_ASC",
  SharedSizeDESC = "shared_size_DESC",
  SnapshotNumASC = "snapshot_num_ASC",
  SnapshotNumDESC = "snapshot_num_DESC",
  UniqueLogicalSizeASC = "unique_logical_size_ASC",
  UniqueLogicalSizeDESC = "unique_logical_size_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
}

export interface GetNfsInodesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NfsInodeOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NfsInodeWhereInput | null;
}

export interface NestedAggregateNfsInode {
  /** @format int32 */
  count: number;
}

export interface NfsInodeConnection {
  aggregate: NestedAggregateNfsInode;
}

export interface GetNfsInodesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NfsInodeOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NfsInodeWhereInput | null;
}

export interface NestedAggregateNic {
  /** @format int32 */
  count: number;
}

export interface NicConnection {
  aggregate: NestedAggregateNic;
}

export interface GetNicsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NicOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NicWhereInput | null;
}

export enum NodeTopoOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PositionASC = "position_ASC",
  PositionDESC = "position_DESC",
}

export interface GetNodeTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NodeTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NodeTopoWhereInput | null;
}

export interface NestedAggregateNodeTopo {
  /** @format int32 */
  count: number;
}

export interface NodeTopoConnection {
  aggregate: NestedAggregateNodeTopo;
}

export interface GetNodeTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NodeTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NodeTopoWhereInput | null;
}

export interface NestedAggregateNvmfNamespaceSnapshot {
  /** @format int32 */
  count: number;
}

export interface NvmfNamespaceSnapshotConnection {
  aggregate: NestedAggregateNvmfNamespaceSnapshot;
}

export interface GetNvmfNamespaceSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfNamespaceSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfNamespaceSnapshotWhereInput | null;
}

export interface NestedAggregateNvmfNamespace {
  /** @format int32 */
  count: number;
}

export interface NvmfNamespaceConnection {
  aggregate: NestedAggregateNvmfNamespace;
}

export interface GetNvmfNamespacesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfNamespaceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfNamespaceWhereInput | null;
}

export interface NestedAggregateNvmfSubsystem {
  /** @format int32 */
  count: number;
}

export interface NvmfSubsystemConnection {
  aggregate: NestedAggregateNvmfSubsystem;
}

export interface GetNvmfSubsystemsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: NvmfSubsystemOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: NvmfSubsystemWhereInput | null;
}

export enum OrganizationOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetOrganizationsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: OrganizationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: OrganizationWhereInput | null;
}

export interface NestedAggregateOrganization {
  /** @format int32 */
  count: number;
}

export interface OrganizationConnection {
  aggregate: NestedAggregateOrganization;
}

export interface GetOrganizationsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: OrganizationOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: OrganizationWhereInput | null;
}

export interface PmemDimm {
  /** @format int64 */
  capacity: number;
  device_locator: string;
  disk?: NestedDisk | null;
  health_status?: DiskHealthStatus | null;
  host: NestedHost;
  id: string;
  local_id?: string | null;
  name: string;

  /** @format int32 */
  numa_node: number;
  part_number: string;

  /** @format int32 */
  remaining_life_percent?: number | null;
  version: string;
}

export enum PmemDimmOrderByInput {
  CapacityASC = "capacity_ASC",
  CapacityDESC = "capacity_DESC",
  DeviceLocatorASC = "device_locator_ASC",
  DeviceLocatorDESC = "device_locator_DESC",
  HealthStatusASC = "health_status_ASC",
  HealthStatusDESC = "health_status_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NumaNodeASC = "numa_node_ASC",
  NumaNodeDESC = "numa_node_DESC",
  PartNumberASC = "part_number_ASC",
  PartNumberDESC = "part_number_DESC",
  RemainingLifePercentASC = "remaining_life_percent_ASC",
  RemainingLifePercentDESC = "remaining_life_percent_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetPmemDimmsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: PmemDimmOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: PmemDimmWhereInput | null;
}

export interface NestedAggregatePmemDimm {
  /** @format int32 */
  count: number;
}

export interface PmemDimmConnection {
  aggregate: NestedAggregatePmemDimm;
}

export interface GetPmemDimmsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: PmemDimmOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: PmemDimmWhereInput | null;
}

export enum RackTopoOrderByInput {
  HeightASC = "height_ASC",
  HeightDESC = "height_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetRackTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: RackTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: RackTopoWhereInput | null;
}

export interface NestedAggregateRackTopo {
  /** @format int32 */
  count: number;
}

export interface RackTopoConnection {
  aggregate: NestedAggregateRackTopo;
}

export interface GetRackTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: RackTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: RackTopoWhereInput | null;
}

export enum ReportTaskOrderByInput {
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PlanIdASC = "plan_id_ASC",
  PlanIdDESC = "plan_id_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
}

export interface GetReportTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ReportTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ReportTaskWhereInput | null;
}

export interface NestedAggregateReportTask {
  /** @format int32 */
  count: number;
}

export interface ReportTaskConnection {
  aggregate: NestedAggregateReportTask;
}

export interface GetReportTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ReportTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ReportTaskWhereInput | null;
}

export enum ReportTemplateOrderByInput {
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  ExecutePlanASC = "execute_plan_ASC",
  ExecutePlanDESC = "execute_plan_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PresetASC = "preset_ASC",
  PresetDESC = "preset_DESC",
  ResourceMetaASC = "resource_meta_ASC",
  ResourceMetaDESC = "resource_meta_DESC",
  TaskNumASC = "task_num_ASC",
  TaskNumDESC = "task_num_DESC",
}

export interface GetReportTemplatesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ReportTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ReportTemplateWhereInput | null;
}

export interface NestedAggregateReportTemplate {
  /** @format int32 */
  count: number;
}

export interface ReportTemplateConnection {
  aggregate: NestedAggregateReportTemplate;
}

export interface GetReportTemplatesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ReportTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ReportTemplateWhereInput | null;
}

export enum SecurityGroupOrderByInput {
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LabelGroupsASC = "label_groups_ASC",
  LabelGroupsDESC = "label_groups_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetSecurityGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SecurityGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SecurityGroupWhereInput | null;
}

export interface NestedAggregateSecurityGroup {
  /** @format int32 */
  count: number;
}

export interface SecurityGroupConnection {
  aggregate: NestedAggregateSecurityGroup;
}

export interface GetSecurityGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SecurityGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SecurityGroupWhereInput | null;
}

export enum SecurityPolicyOrderByInput {
  ApplyToASC = "apply_to_ASC",
  ApplyToDESC = "apply_to_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EgressASC = "egress_ASC",
  EgressDESC = "egress_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IngressASC = "ingress_ASC",
  IngressDESC = "ingress_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PolicyModeASC = "policy_mode_ASC",
  PolicyModeDESC = "policy_mode_DESC",
}

export interface GetSecurityPoliciesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SecurityPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SecurityPolicyWhereInput | null;
}

export interface NestedAggregateSecurityPolicy {
  /** @format int32 */
  count: number;
}

export interface SecurityPolicyConnection {
  aggregate: NestedAggregateSecurityPolicy;
}

export interface GetSecurityPoliciesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SecurityPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SecurityPolicyWhereInput | null;
}

export enum SnapshotGroupOrderByInput {
  DeletedASC = "deleted_ASC",
  DeletedDESC = "deleted_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  EstimatedRecyclingTimeASC = "estimated_recycling_time_ASC",
  EstimatedRecyclingTimeDESC = "estimated_recycling_time_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  KeepASC = "keep_ASC",
  KeepDESC = "keep_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  LogicalSizeBytesASC = "logical_size_bytes_ASC",
  LogicalSizeBytesDESC = "logical_size_bytes_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  ObjectNumASC = "object_num_ASC",
  ObjectNumDESC = "object_num_DESC",
  VmInfoASC = "vm_info_ASC",
  VmInfoDESC = "vm_info_DESC",
}

export interface GetSnapshotGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotGroupWhereInput | null;
}

export interface NestedAggregateSnapshotGroup {
  /** @format int32 */
  count: number;
}

export interface SnapshotGroupConnection {
  aggregate: NestedAggregateSnapshotGroup;
}

export interface GetSnapshotGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotGroupWhereInput | null;
}

export interface SnapshotPlanTask {
  cluster: NestedCluster;
  end_time?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  internal?: boolean | null;
  local_id: string;
  snapshotGroup?: NestedSnapshotGroup | null;
  snapshotPlan: NestedSnapshotPlan;
  start_time: string;
  status: SnapshotPlanExecuteStatus;
  type: SnapshotPlanTaskType;
}

export enum SnapshotPlanTaskOrderByInput {
  EndTimeASC = "end_time_ASC",
  EndTimeDESC = "end_time_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InternalASC = "internal_ASC",
  InternalDESC = "internal_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  StartTimeASC = "start_time_ASC",
  StartTimeDESC = "start_time_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface GetSnapshotPlanTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotPlanTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotPlanTaskWhereInput | null;
}

export interface NestedAggregateSnapshotPlanTask {
  /** @format int32 */
  count: number;
}

export interface SnapshotPlanTaskConnection {
  aggregate: NestedAggregateSnapshotPlanTask;
}

export interface GetSnapshotPlanTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotPlanTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotPlanTaskWhereInput | null;
}

export interface NestedAggregateSnapshotPlan {
  /** @format int32 */
  count: number;
}

export interface SnapshotPlanConnection {
  aggregate: NestedAggregateSnapshotPlan;
}

export interface GetSnapshotPlansConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnapshotPlanOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnapshotPlanWhereInput | null;
}

export enum SnmpTransportOrderByInput {
  AuthPassPhraseASC = "auth_pass_phrase_ASC",
  AuthPassPhraseDESC = "auth_pass_phrase_DESC",
  AuthProtocolASC = "auth_protocol_ASC",
  AuthProtocolDESC = "auth_protocol_DESC",
  CommunityASC = "community_ASC",
  CommunityDESC = "community_DESC",
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PortASC = "port_ASC",
  PortDESC = "port_DESC",
  PrivacyPassPhraseASC = "privacy_pass_phrase_ASC",
  PrivacyPassPhraseDESC = "privacy_pass_phrase_DESC",
  PrivacyProtocolASC = "privacy_protocol_ASC",
  PrivacyProtocolDESC = "privacy_protocol_DESC",
  ProtocolASC = "protocol_ASC",
  ProtocolDESC = "protocol_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetSnmpTransportsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnmpTransportOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnmpTransportWhereInput | null;
}

export interface NestedAggregateSnmpTransport {
  /** @format int32 */
  count: number;
}

export interface SnmpTransportConnection {
  aggregate: NestedAggregateSnmpTransport;
}

export interface GetSnmpTransportsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnmpTransportOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnmpTransportWhereInput | null;
}

export enum SnmpTrapReceiverOrderByInput {
  AuthPassPhraseASC = "auth_pass_phrase_ASC",
  AuthPassPhraseDESC = "auth_pass_phrase_DESC",
  AuthProtocolASC = "auth_protocol_ASC",
  AuthProtocolDESC = "auth_protocol_DESC",
  CommunityASC = "community_ASC",
  CommunityDESC = "community_DESC",
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  EngineIdASC = "engine_id_ASC",
  EngineIdDESC = "engine_id_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  HostASC = "host_ASC",
  HostDESC = "host_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  InformASC = "inform_ASC",
  InformDESC = "inform_DESC",
  LanguageCodeASC = "language_code_ASC",
  LanguageCodeDESC = "language_code_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PortASC = "port_ASC",
  PortDESC = "port_DESC",
  PrivacyPassPhraseASC = "privacy_pass_phrase_ASC",
  PrivacyPassPhraseDESC = "privacy_pass_phrase_DESC",
  PrivacyProtocolASC = "privacy_protocol_ASC",
  PrivacyProtocolDESC = "privacy_protocol_DESC",
  ProtocolASC = "protocol_ASC",
  ProtocolDESC = "protocol_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetSnmpTrapReceiversRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnmpTrapReceiverOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnmpTrapReceiverWhereInput | null;
}

export interface NestedAggregateSnmpTrapReceiver {
  /** @format int32 */
  count: number;
}

export interface SnmpTrapReceiverConnection {
  aggregate: NestedAggregateSnmpTrapReceiver;
}

export interface GetSnmpTrapReceiversConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SnmpTrapReceiverOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SnmpTrapReceiverWhereInput | null;
}

export interface SvtImage {
  cluster: NestedCluster;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;
  local_created_at: string;
  local_id: string;
  name: string;
  path: string;

  /** @format int64 */
  size: number;

  /** @format int32 */
  version: number;
  vm_disks?: NestedVmDisk[] | null;
}

export enum SvtImageOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PathASC = "path_ASC",
  PathDESC = "path_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface GetSvtImagesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SvtImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SvtImageWhereInput | null;
}

export interface NestedAggregateSvtImage {
  /** @format int32 */
  count: number;
}

export interface SvtImageConnection {
  aggregate: NestedAggregateSvtImage;
}

export interface GetSvtImagesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SvtImageOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SvtImageWhereInput | null;
}

export interface SystemAuditLog {
  action: string;
  cluster?: NestedCluster | null;
  finished_at?: string | null;
  id: string;
  local_created_at?: string | null;
  local_id: string;
  message: string;
  resource_id?: string | null;
  status?: UserAuditLogStatus | null;
}

export interface NestedAggregateSystemAuditLog {
  /** @format int32 */
  count: number;
}

export interface SystemAuditLogConnection {
  aggregate: NestedAggregateSystemAuditLog;
}

export interface GetSystemAuditLogsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: SystemAuditLogOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: SystemAuditLogWhereInput | null;
}

export interface NestedAggregateTask {
  /** @format int32 */
  count: number;
}

export interface TaskConnection {
  aggregate: NestedAggregateTask;
}

export interface GetTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: TaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: TaskWhereInput | null;
}

export enum UploadTaskOrderByInput {
  ArgsASC = "args_ASC",
  ArgsDESC = "args_DESC",
  ChunkSizeASC = "chunk_size_ASC",
  ChunkSizeDESC = "chunk_size_DESC",
  CurrentChunkASC = "current_chunk_ASC",
  CurrentChunkDESC = "current_chunk_DESC",
  FinishedAtASC = "finished_at_ASC",
  FinishedAtDESC = "finished_at_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  ResourceTypeASC = "resource_type_ASC",
  ResourceTypeDESC = "resource_type_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  StartedAtASC = "started_at_ASC",
  StartedAtDESC = "started_at_DESC",
  StatusASC = "status_ASC",
  StatusDESC = "status_DESC",
  UpdatedAtASC = "updatedAt_ASC",
  UpdatedAtDESC = "updatedAt_DESC",
}

export interface GetUploadTasksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UploadTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UploadTaskWhereInput | null;
}

export interface NestedAggregateUploadTask {
  /** @format int32 */
  count: number;
}

export interface UploadTaskConnection {
  aggregate: NestedAggregateUploadTask;
}

export interface GetUploadTasksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UploadTaskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UploadTaskWhereInput | null;
}

export interface NestedAggregateUsbDevice {
  /** @format int32 */
  count: number;
}

export interface UsbDeviceConnection {
  aggregate: NestedAggregateUsbDevice;
}

export interface GetUsbDevicesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UsbDeviceOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UsbDeviceWhereInput | null;
}

export interface NestedAggregateUserAuditLog {
  /** @format int32 */
  count: number;
}

export interface UserAuditLogConnection {
  aggregate: NestedAggregateUserAuditLog;
}

export interface GetUserAuditLogsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserAuditLogOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserAuditLogWhereInput | null;
}

export enum UserRoleNextOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PlatformASC = "platform_ASC",
  PlatformDESC = "platform_DESC",
  PresetASC = "preset_ASC",
  PresetDESC = "preset_DESC",
}

export interface GetUserRoleNextsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserRoleNextOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserRoleNextWhereInput | null;
}

export interface NestedAggregateUserRoleNext {
  /** @format int32 */
  count: number;
}

export interface UserRoleNextConnection {
  aggregate: NestedAggregateUserRoleNext;
}

export interface GetUserRoleNextsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserRoleNextOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserRoleNextWhereInput | null;
}

export interface NestedAggregateUser {
  /** @format int32 */
  count: number;
}

export interface UserConnection {
  aggregate: NestedAggregateUser;
}

export interface GetUsersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: UserOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: UserWhereInput | null;
}

export enum EverouteFeatureType {
  DFW = "DFW",
  LB = "LB",
  VPC = "VPC",
}

export enum EverouteLicensePricingType {
  CPU_SLOT_NUM = "CPU_SLOT_NUM",
  VM_NUM = "VM_NUM",
}

export interface V2EverouteLicense {
  code: string;
  expire_date: string;
  feature_type: EverouteFeatureType;
  id: string;

  /** @format int32 */
  max_socket_num?: number | null;

  /** @format int32 */
  max_vcpu_num?: number | null;

  /** @format int32 */
  max_vm_num?: number | null;

  /** @format int32 */
  max_vpc_socket_num?: number | null;
  pricing_type?: EverouteLicensePricingType | null;
  serial: string;
  sign_date: string;
  software_edition: SoftwareEdition;
  type: LicenseType;
  uid: string;

  /** @format int32 */
  version: number;
}

export enum V2EverouteLicenseOrderByInput {
  CodeASC = "code_ASC",
  CodeDESC = "code_DESC",
  ExpireDateASC = "expire_date_ASC",
  ExpireDateDESC = "expire_date_DESC",
  FeatureTypeASC = "feature_type_ASC",
  FeatureTypeDESC = "feature_type_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  MaxSocketNumASC = "max_socket_num_ASC",
  MaxSocketNumDESC = "max_socket_num_DESC",
  MaxVcpuNumASC = "max_vcpu_num_ASC",
  MaxVcpuNumDESC = "max_vcpu_num_DESC",
  MaxVmNumASC = "max_vm_num_ASC",
  MaxVmNumDESC = "max_vm_num_DESC",
  MaxVpcSocketNumASC = "max_vpc_socket_num_ASC",
  MaxVpcSocketNumDESC = "max_vpc_socket_num_DESC",
  PricingTypeASC = "pricing_type_ASC",
  PricingTypeDESC = "pricing_type_DESC",
  SerialASC = "serial_ASC",
  SerialDESC = "serial_DESC",
  SignDateASC = "sign_date_ASC",
  SignDateDESC = "sign_date_DESC",
  SoftwareEditionASC = "software_edition_ASC",
  SoftwareEditionDESC = "software_edition_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UidASC = "uid_ASC",
  UidDESC = "uid_DESC",
  VersionASC = "version_ASC",
  VersionDESC = "version_DESC",
}

export interface V2EverouteLicenseWhereInput {
  AND?: V2EverouteLicenseWhereInput[] | null;
  NOT?: V2EverouteLicenseWhereInput[] | null;
  OR?: V2EverouteLicenseWhereInput[] | null;
  code?: string | null;
  code_contains?: string | null;
  code_ends_with?: string | null;
  code_gt?: string | null;
  code_gte?: string | null;
  code_in?: string[] | null;
  code_lt?: string | null;
  code_lte?: string | null;
  code_not?: string | null;
  code_not_contains?: string | null;
  code_not_ends_with?: string | null;
  code_not_in?: string[] | null;
  code_not_starts_with?: string | null;
  code_starts_with?: string | null;
  expire_date?: string | null;
  expire_date_gt?: string | null;
  expire_date_gte?: string | null;
  expire_date_in?: string[] | null;
  expire_date_lt?: string | null;
  expire_date_lte?: string | null;
  expire_date_not?: string | null;
  expire_date_not_in?: string[] | null;
  feature_type?: EverouteFeatureType | null;
  feature_type_in?: EverouteFeatureType[] | null;
  feature_type_not?: EverouteFeatureType | null;
  feature_type_not_in?: EverouteFeatureType[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int32 */
  max_socket_num?: number | null;

  /** @format int32 */
  max_socket_num_gt?: number | null;

  /** @format int32 */
  max_socket_num_gte?: number | null;
  max_socket_num_in?: number[] | null;

  /** @format int32 */
  max_socket_num_lt?: number | null;

  /** @format int32 */
  max_socket_num_lte?: number | null;

  /** @format int32 */
  max_socket_num_not?: number | null;
  max_socket_num_not_in?: number[] | null;

  /** @format int32 */
  max_vcpu_num?: number | null;

  /** @format int32 */
  max_vcpu_num_gt?: number | null;

  /** @format int32 */
  max_vcpu_num_gte?: number | null;
  max_vcpu_num_in?: number[] | null;

  /** @format int32 */
  max_vcpu_num_lt?: number | null;

  /** @format int32 */
  max_vcpu_num_lte?: number | null;

  /** @format int32 */
  max_vcpu_num_not?: number | null;
  max_vcpu_num_not_in?: number[] | null;

  /** @format int32 */
  max_vm_num?: number | null;

  /** @format int32 */
  max_vm_num_gt?: number | null;

  /** @format int32 */
  max_vm_num_gte?: number | null;
  max_vm_num_in?: number[] | null;

  /** @format int32 */
  max_vm_num_lt?: number | null;

  /** @format int32 */
  max_vm_num_lte?: number | null;

  /** @format int32 */
  max_vm_num_not?: number | null;
  max_vm_num_not_in?: number[] | null;

  /** @format int32 */
  max_vpc_socket_num?: number | null;

  /** @format int32 */
  max_vpc_socket_num_gt?: number | null;

  /** @format int32 */
  max_vpc_socket_num_gte?: number | null;
  max_vpc_socket_num_in?: number[] | null;

  /** @format int32 */
  max_vpc_socket_num_lt?: number | null;

  /** @format int32 */
  max_vpc_socket_num_lte?: number | null;

  /** @format int32 */
  max_vpc_socket_num_not?: number | null;
  max_vpc_socket_num_not_in?: number[] | null;
  pricing_type?: EverouteLicensePricingType | null;
  pricing_type_in?: EverouteLicensePricingType[] | null;
  pricing_type_not?: EverouteLicensePricingType | null;
  pricing_type_not_in?: EverouteLicensePricingType[] | null;
  serial?: string | null;
  serial_contains?: string | null;
  serial_ends_with?: string | null;
  serial_gt?: string | null;
  serial_gte?: string | null;
  serial_in?: string[] | null;
  serial_lt?: string | null;
  serial_lte?: string | null;
  serial_not?: string | null;
  serial_not_contains?: string | null;
  serial_not_ends_with?: string | null;
  serial_not_in?: string[] | null;
  serial_not_starts_with?: string | null;
  serial_starts_with?: string | null;
  sign_date?: string | null;
  sign_date_gt?: string | null;
  sign_date_gte?: string | null;
  sign_date_in?: string[] | null;
  sign_date_lt?: string | null;
  sign_date_lte?: string | null;
  sign_date_not?: string | null;
  sign_date_not_in?: string[] | null;
  software_edition?: SoftwareEdition | null;
  software_edition_in?: SoftwareEdition[] | null;
  software_edition_not?: SoftwareEdition | null;
  software_edition_not_in?: SoftwareEdition[] | null;
  type?: LicenseType | null;
  type_in?: LicenseType[] | null;
  type_not?: LicenseType | null;
  type_not_in?: LicenseType[] | null;
  uid?: string | null;
  uid_contains?: string | null;
  uid_ends_with?: string | null;
  uid_gt?: string | null;
  uid_gte?: string | null;
  uid_in?: string[] | null;
  uid_lt?: string | null;
  uid_lte?: string | null;
  uid_not?: string | null;
  uid_not_contains?: string | null;
  uid_not_ends_with?: string | null;
  uid_not_in?: string[] | null;
  uid_not_starts_with?: string | null;
  uid_starts_with?: string | null;

  /** @format int32 */
  version?: number | null;

  /** @format int32 */
  version_gt?: number | null;

  /** @format int32 */
  version_gte?: number | null;
  version_in?: number[] | null;

  /** @format int32 */
  version_lt?: number | null;

  /** @format int32 */
  version_lte?: number | null;

  /** @format int32 */
  version_not?: number | null;
  version_not_in?: number[] | null;
}

export interface GetV2EverouteLicensesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: V2EverouteLicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: V2EverouteLicenseWhereInput | null;
}

export interface NestedAggregateV2EverouteLicense {
  /** @format int32 */
  count: number;
}

export interface V2EverouteLicenseConnection {
  aggregate: NestedAggregateV2EverouteLicense;
}

export interface GetV2EverouteLicensesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: V2EverouteLicenseOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: V2EverouteLicenseWhereInput | null;
}

export enum VcenterAccountOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpASC = "ip_ASC",
  IpDESC = "ip_DESC",
  IsValidASC = "is_valid_ASC",
  IsValidDESC = "is_valid_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  PortASC = "port_ASC",
  PortDESC = "port_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
}

export interface GetVcenterAccountsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VcenterAccountOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VcenterAccountWhereInput | null;
}

export interface NestedAggregateVcenterAccount {
  /** @format int32 */
  count: number;
}

export interface VcenterAccountConnection {
  aggregate: NestedAggregateVcenterAccount;
}

export interface GetVcenterAccountsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VcenterAccountOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VcenterAccountWhereInput | null;
}

export interface NestedAggregateVds {
  /** @format int32 */
  count: number;
}

export interface VdsConnection {
  aggregate: NestedAggregateVds;
}

export interface GetVdsesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VdsOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VdsWhereInput | null;
}

export enum ViewOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  TimeSpanASC = "time_span_ASC",
  TimeSpanDESC = "time_span_DESC",
  TimeUnitASC = "time_unit_ASC",
  TimeUnitDESC = "time_unit_DESC",
}

export interface GetViewsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ViewOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ViewWhereInput | null;
}

export interface NestedAggregateView {
  /** @format int32 */
  count: number;
}

export interface ViewConnection {
  aggregate: NestedAggregateView;
}

export interface GetViewsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ViewOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ViewWhereInput | null;
}

export interface VirtualPrivateCloudClusterBinding {
  cluster: NestedCluster;
  entityAsyncStatus?: EntityAsyncStatus | null;
  id: string;

  /** @format int32 */
  mtu?: number | null;
  vds: NestedVds;

  /** @format int32 */
  vlan_id: number;
}

export enum VirtualPrivateCloudClusterBindingOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  MtuASC = "mtu_ASC",
  MtuDESC = "mtu_DESC",
  VlanIdASC = "vlan_id_ASC",
  VlanIdDESC = "vlan_id_DESC",
}

export interface VirtualPrivateCloudClusterBindingWhereInput {
  AND?: VirtualPrivateCloudClusterBindingWhereInput[] | null;
  NOT?: VirtualPrivateCloudClusterBindingWhereInput[] | null;
  OR?: VirtualPrivateCloudClusterBindingWhereInput[] | null;
  cluster?: ClusterWhereInput | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;

  /** @format int32 */
  mtu?: number | null;

  /** @format int32 */
  mtu_gt?: number | null;

  /** @format int32 */
  mtu_gte?: number | null;
  mtu_in?: number[] | null;

  /** @format int32 */
  mtu_lt?: number | null;

  /** @format int32 */
  mtu_lte?: number | null;

  /** @format int32 */
  mtu_not?: number | null;
  mtu_not_in?: number[] | null;
  vds?: VdsWhereInput | null;

  /** @format int32 */
  vlan_id?: number | null;

  /** @format int32 */
  vlan_id_gt?: number | null;

  /** @format int32 */
  vlan_id_gte?: number | null;
  vlan_id_in?: number[] | null;

  /** @format int32 */
  vlan_id_lt?: number | null;

  /** @format int32 */
  vlan_id_lte?: number | null;

  /** @format int32 */
  vlan_id_not?: number | null;
  vlan_id_not_in?: number[] | null;
}

export interface GetVirtualPrivateCloudClusterBindingsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudClusterBindingOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudClusterBindingWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudClusterBinding {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudClusterBindingConnection {
  aggregate: NestedAggregateVirtualPrivateCloudClusterBinding;
}

export interface GetVirtualPrivateCloudClusterBindingsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudClusterBindingOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudClusterBindingWhereInput | null;
}

export interface NestedVirtualPrivateCloudFloatingIp {
  external_ip?: string | null;
  id: string;
}

export interface NestedVirtualPrivateCloudNatGateway {
  external_ip?: string | null;
  id: string;
  name: string;
}

export interface NestedVirtualPrivateCloudRouterGateway {
  external_ip?: string | null;
  id: string;
  name: string;
}

export interface VirtualPrivateCloudExternalSubnet {
  cidr: string;
  description?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  floating_ip_cidr?: string | null;
  floating_ips?: NestedVirtualPrivateCloudFloatingIp[] | null;
  gateway: string;
  id: string;
  local_id: string;
  name: string;
  nat_gateway_cidr?: string | null;
  nat_gateways?: NestedVirtualPrivateCloudNatGateway[] | null;
  router_gateway_cidr?: string | null;
  router_gateways?: NestedVirtualPrivateCloudRouterGateway[] | null;
  vlan: NestedVlan;
  vpc?: NestedVirtualPrivateCloud | null;
}

export enum VirtualPrivateCloudExternalSubnetOrderByInput {
  CidrASC = "cidr_ASC",
  CidrDESC = "cidr_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FloatingIpCidrASC = "floating_ip_cidr_ASC",
  FloatingIpCidrDESC = "floating_ip_cidr_DESC",
  GatewayASC = "gateway_ASC",
  GatewayDESC = "gateway_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NatGatewayCidrASC = "nat_gateway_cidr_ASC",
  NatGatewayCidrDESC = "nat_gateway_cidr_DESC",
  RouterGatewayCidrASC = "router_gateway_cidr_ASC",
  RouterGatewayCidrDESC = "router_gateway_cidr_DESC",
}

export interface GetVirtualPrivateCloudExternalSubnetsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudExternalSubnetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudExternalSubnetWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudExternalSubnet {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudExternalSubnetConnection {
  aggregate: NestedAggregateVirtualPrivateCloudExternalSubnet;
}

export interface GetVirtualPrivateCloudExternalSubnetsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudExternalSubnetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudExternalSubnetWhereInput | null;
}

export enum VirtualPrivateCloudFloatingIpOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExternalIpASC = "external_ip_ASC",
  ExternalIpDESC = "external_ip_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
}

export interface GetVirtualPrivateCloudFloatingIpsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudFloatingIpOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudFloatingIpWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudFloatingIp {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudFloatingIpConnection {
  aggregate: NestedAggregateVirtualPrivateCloudFloatingIp;
}

export interface GetVirtualPrivateCloudFloatingIpsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudFloatingIpOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudFloatingIpWhereInput | null;
}

export enum VirtualPrivateCloudNatGatewayOrderByInput {
  DnatRulesASC = "dnat_rules_ASC",
  DnatRulesDESC = "dnat_rules_DESC",
  EnableDnatASC = "enable_dnat_ASC",
  EnableDnatDESC = "enable_dnat_DESC",
  EnableSnatASC = "enable_snat_ASC",
  EnableSnatDESC = "enable_snat_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExternalIpASC = "external_ip_ASC",
  ExternalIpDESC = "external_ip_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetVirtualPrivateCloudNatGatewaysRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudNatGatewayOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudNatGatewayWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudNatGateway {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudNatGatewayConnection {
  aggregate: NestedAggregateVirtualPrivateCloudNatGateway;
}

export interface GetVirtualPrivateCloudNatGatewaysConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudNatGatewayOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudNatGatewayWhereInput | null;
}

export enum VirtualPrivateCloudRouteTableOrderByInput {
  DefaultForVpcASC = "default_for_vpc_ASC",
  DefaultForVpcDESC = "default_for_vpc_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetVirtualPrivateCloudRouteTablesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudRouteTableOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudRouteTableWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudRouteTable {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudRouteTableConnection {
  aggregate: NestedAggregateVirtualPrivateCloudRouteTable;
}

export interface GetVirtualPrivateCloudRouteTablesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudRouteTableOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudRouteTableWhereInput | null;
}

export enum VirtualPrivateCloudRouterGatewayOrderByInput {
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  ExternalIpASC = "external_ip_ASC",
  ExternalIpDESC = "external_ip_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  NexthopIpASC = "nexthop_ip_ASC",
  NexthopIpDESC = "nexthop_ip_DESC",
  RulesASC = "rules_ASC",
  RulesDESC = "rules_DESC",
}

export interface GetVirtualPrivateCloudRouterGatewaysRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudRouterGatewayOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudRouterGatewayWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudRouterGateway {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudRouterGatewayConnection {
  aggregate: NestedAggregateVirtualPrivateCloudRouterGateway;
}

export interface GetVirtualPrivateCloudRouterGatewaysConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudRouterGatewayOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudRouterGatewayWhereInput | null;
}

export enum VirtualPrivateCloudSecurityGroupOrderByInput {
  DefaultForVpcASC = "default_for_vpc_ASC",
  DefaultForVpcDESC = "default_for_vpc_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LabelGroupsASC = "label_groups_ASC",
  LabelGroupsDESC = "label_groups_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetVirtualPrivateCloudSecurityGroupsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSecurityGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSecurityGroupWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudSecurityGroup {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudSecurityGroupConnection {
  aggregate: NestedAggregateVirtualPrivateCloudSecurityGroup;
}

export interface GetVirtualPrivateCloudSecurityGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSecurityGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSecurityGroupWhereInput | null;
}

export enum VirtualPrivateCloudSecurityPolicyOrderByInput {
  ApplyToASC = "apply_to_ASC",
  ApplyToDESC = "apply_to_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EgressASC = "egress_ASC",
  EgressDESC = "egress_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IngressASC = "ingress_ASC",
  IngressDESC = "ingress_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  PolicyModeASC = "policy_mode_ASC",
  PolicyModeDESC = "policy_mode_DESC",
}

export interface GetVirtualPrivateCloudSecurityPoliciesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSecurityPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSecurityPolicyWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudSecurityPolicy {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudSecurityPolicyConnection {
  aggregate: NestedAggregateVirtualPrivateCloudSecurityPolicy;
}

export interface GetVirtualPrivateCloudSecurityPoliciesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSecurityPolicyOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSecurityPolicyWhereInput | null;
}

export enum VirtualPrivateCloudSubnetOrderByInput {
  CidrASC = "cidr_ASC",
  CidrDESC = "cidr_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  GatewayASC = "gateway_ASC",
  GatewayDESC = "gateway_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpPoolsASC = "ip_pools_ASC",
  IpPoolsDESC = "ip_pools_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  TotalIpCountASC = "total_ip_count_ASC",
  TotalIpCountDESC = "total_ip_count_DESC",
  UnusedIpCountASC = "unused_ip_count_ASC",
  UnusedIpCountDESC = "unused_ip_count_DESC",
}

export interface GetVirtualPrivateCloudSubnetsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSubnetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSubnetWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloudSubnet {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudSubnetConnection {
  aggregate: NestedAggregateVirtualPrivateCloudSubnet;
}

export interface GetVirtualPrivateCloudSubnetsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudSubnetOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudSubnetWhereInput | null;
}

export enum VirtualPrivateCloudOrderByInput {
  AssociateExternalSubnetNumASC = "associate_external_subnet_num_ASC",
  AssociateExternalSubnetNumDESC = "associate_external_subnet_num_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MtuASC = "mtu_ASC",
  MtuDESC = "mtu_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
}

export interface GetVirtualPrivateCloudsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudWhereInput | null;
}

export interface NestedAggregateVirtualPrivateCloud {
  /** @format int32 */
  count: number;
}

export interface VirtualPrivateCloudConnection {
  aggregate: NestedAggregateVirtualPrivateCloud;
}

export interface GetVirtualPrivateCloudsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VirtualPrivateCloudOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VirtualPrivateCloudWhereInput | null;
}

export interface NestedAggregateVlan {
  /** @format int32 */
  count: number;
}

export interface VlanConnection {
  aggregate: NestedAggregateVlan;
}

export interface GetVlansConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VlanOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VlanWhereInput | null;
}

export interface NestedSvtImage {
  id: string;
  name: string;
}

export interface VmDisk {
  /** @format int32 */
  boot: number;
  bus: Bus;
  cloud_init_image_name?: string | null;
  cloud_init_image_path?: string | null;
  device?: string | null;
  disabled?: boolean | null;
  elf_image?: NestedElfImage | null;
  id: string;

  /** @format int32 */
  key?: number | null;

  /** @format int64 */
  max_bandwidth?: number | null;
  max_bandwidth_policy?: VmDiskIoRestrictType | null;

  /** @format int32 */
  max_iops?: number | null;
  max_iops_policy?: VmDiskIoRestrictType | null;
  serial?: string | null;
  svt_image?: NestedSvtImage | null;
  type: VmDiskType;
  unsafe_image_path?: string | null;
  unsafe_image_uuid?: string | null;
  unsafe_provision?: string | null;
  vm: NestedVm;
  vm_volume?: NestedVmVolume | null;
}

export enum VmDiskOrderByInput {
  BootASC = "boot_ASC",
  BootDESC = "boot_DESC",
  BusASC = "bus_ASC",
  BusDESC = "bus_DESC",
  CloudInitImageNameASC = "cloud_init_image_name_ASC",
  CloudInitImageNameDESC = "cloud_init_image_name_DESC",
  CloudInitImagePathASC = "cloud_init_image_path_ASC",
  CloudInitImagePathDESC = "cloud_init_image_path_DESC",
  DeviceASC = "device_ASC",
  DeviceDESC = "device_DESC",
  DisabledASC = "disabled_ASC",
  DisabledDESC = "disabled_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  KeyASC = "key_ASC",
  KeyDESC = "key_DESC",
  MaxBandwidthASC = "max_bandwidth_ASC",
  MaxBandwidthDESC = "max_bandwidth_DESC",
  MaxBandwidthPolicyASC = "max_bandwidth_policy_ASC",
  MaxBandwidthPolicyDESC = "max_bandwidth_policy_DESC",
  MaxIopsASC = "max_iops_ASC",
  MaxIopsDESC = "max_iops_DESC",
  MaxIopsPolicyASC = "max_iops_policy_ASC",
  MaxIopsPolicyDESC = "max_iops_policy_DESC",
  SerialASC = "serial_ASC",
  SerialDESC = "serial_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UnsafeImagePathASC = "unsafe_image_path_ASC",
  UnsafeImagePathDESC = "unsafe_image_path_DESC",
  UnsafeImageUuidASC = "unsafe_image_uuid_ASC",
  UnsafeImageUuidDESC = "unsafe_image_uuid_DESC",
  UnsafeProvisionASC = "unsafe_provision_ASC",
  UnsafeProvisionDESC = "unsafe_provision_DESC",
}

export interface GetVmDisksRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmDiskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmDiskWhereInput | null;
}

export interface NestedAggregateVmDisk {
  /** @format int32 */
  count: number;
}

export interface VmDiskConnection {
  aggregate: NestedAggregateVmDisk;
}

export interface GetVmDisksConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmDiskOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmDiskWhereInput | null;
}

export interface NestedEntityFilter {
  id: string;
  name: string;
}

export interface VmEntityFilterResult {
  entityFilter: NestedEntityFilter;
  id: string;
  result: number[];
  vm: NestedVm;
}

export enum VmEntityFilterResultOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
}

export interface GetVmEntityFilterResultsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmEntityFilterResultOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmEntityFilterResultWhereInput | null;
}

export interface NestedAggregateVmEntityFilterResult {
  /** @format int32 */
  count: number;
}

export interface VmEntityFilterResultConnection {
  aggregate: NestedAggregateVmEntityFilterResult;
}

export interface GetVmEntityFilterResultsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmEntityFilterResultOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmEntityFilterResultWhereInput | null;
}

export enum VmExportFileOrderByInput {
  CreatedAtASC = "createdAt_ASC",
  CreatedAtDESC = "createdAt_DESC",
  DamagedASC = "damaged_ASC",
  DamagedDESC = "damaged_DESC",
  DataPortIdASC = "data_port_id_ASC",
  DataPortIdDESC = "data_port_id_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FilesASC = "files_ASC",
  FilesDESC = "files_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  StorageClusterIdASC = "storage_cluster_id_ASC",
  StorageClusterIdDESC = "storage_cluster_id_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface VmExportFileWhereInput {
  AND?: VmExportFileWhereInput[] | null;
  NOT?: VmExportFileWhereInput[] | null;
  OR?: VmExportFileWhereInput[] | null;
  content_library_vm_template?: ContentLibraryVmTemplateWhereInput | null;
  createdAt?: string | null;
  createdAt_gt?: string | null;
  createdAt_gte?: string | null;
  createdAt_in?: string[] | null;
  createdAt_lt?: string | null;
  createdAt_lte?: string | null;
  createdAt_not?: string | null;
  createdAt_not_in?: string[] | null;
  damaged?: boolean | null;
  damaged_not?: boolean | null;
  data_port_id?: string | null;
  data_port_id_contains?: string | null;
  data_port_id_ends_with?: string | null;
  data_port_id_gt?: string | null;
  data_port_id_gte?: string | null;
  data_port_id_in?: string[] | null;
  data_port_id_lt?: string | null;
  data_port_id_lte?: string | null;
  data_port_id_not?: string | null;
  data_port_id_not_contains?: string | null;
  data_port_id_not_ends_with?: string | null;
  data_port_id_not_in?: string[] | null;
  data_port_id_not_starts_with?: string | null;
  data_port_id_starts_with?: string | null;
  entityAsyncStatus?: EntityAsyncStatus | null;
  entityAsyncStatus_in?: EntityAsyncStatus[] | null;
  entityAsyncStatus_not?: EntityAsyncStatus | null;
  entityAsyncStatus_not_in?: EntityAsyncStatus[] | null;
  id?: string | null;
  id_contains?: string | null;
  id_ends_with?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_not?: string | null;
  id_not_contains?: string | null;
  id_not_ends_with?: string | null;
  id_not_in?: string[] | null;
  id_not_starts_with?: string | null;
  id_starts_with?: string | null;
  storage_cluster_id?: string | null;
  storage_cluster_id_contains?: string | null;
  storage_cluster_id_ends_with?: string | null;
  storage_cluster_id_gt?: string | null;
  storage_cluster_id_gte?: string | null;
  storage_cluster_id_in?: string[] | null;
  storage_cluster_id_lt?: string | null;
  storage_cluster_id_lte?: string | null;
  storage_cluster_id_not?: string | null;
  storage_cluster_id_not_contains?: string | null;
  storage_cluster_id_not_ends_with?: string | null;
  storage_cluster_id_not_in?: string[] | null;
  storage_cluster_id_not_starts_with?: string | null;
  storage_cluster_id_starts_with?: string | null;
  type?: VmExportFileType | null;
  type_in?: VmExportFileType[] | null;
  type_not?: VmExportFileType | null;
  type_not_in?: VmExportFileType[] | null;
  vm?: VmWhereInput | null;
  vm_volume?: VmVolumeWhereInput | null;
}

export interface GetVmExportFilesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmExportFileOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmExportFileWhereInput | null;
}

export interface NestedAggregateVmExportFile {
  /** @format int32 */
  count: number;
}

export interface VmExportFileConnection {
  aggregate: NestedAggregateVmExportFile;
}

export interface GetVmExportFilesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmExportFileOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmExportFileWhereInput | null;
}

export enum VmFolderOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
}

export interface GetVmFoldersRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmFolderOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmFolderWhereInput | null;
}

export interface NestedAggregateVmFolder {
  /** @format int32 */
  count: number;
}

export interface VmFolderConnection {
  aggregate: NestedAggregateVmFolder;
}

export interface GetVmFoldersConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmFolderOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmFolderWhereInput | null;
}

export interface NestedVirtualPrivateCloudNic {
  id: string;
}

export interface VmNic {
  /** @format double */
  egress_rate_limit_burst_in_bit?: number | null;
  egress_rate_limit_enabled?: boolean | null;

  /** @format double */
  egress_rate_limit_max_rate_in_bitps?: number | null;
  enabled?: boolean | null;
  gateway?: string | null;
  id: string;

  /** @format double */
  ingress_rate_limit_burst_in_bit?: number | null;
  ingress_rate_limit_enabled?: boolean | null;

  /** @format double */
  ingress_rate_limit_max_rate_in_bitps?: number | null;
  interface_id?: string | null;
  ip_address?: string | null;
  local_id: string;
  mac_address?: string | null;
  mirror?: boolean | null;
  model?: VmNicModel | null;
  nic?: NestedNic | null;

  /** @format int32 */
  order?: number | null;
  subnet_mask?: string | null;
  type?: VmNicType | null;
  vlan?: NestedVlan | null;
  vm: NestedVm;
  vpc_nic?: NestedVirtualPrivateCloudNic | null;
}

export enum VmNicOrderByInput {
  EgressRateLimitBurstInBitASC = "egress_rate_limit_burst_in_bit_ASC",
  EgressRateLimitBurstInBitDESC = "egress_rate_limit_burst_in_bit_DESC",
  EgressRateLimitEnabledASC = "egress_rate_limit_enabled_ASC",
  EgressRateLimitEnabledDESC = "egress_rate_limit_enabled_DESC",
  EgressRateLimitMaxRateInBitpsASC = "egress_rate_limit_max_rate_in_bitps_ASC",
  EgressRateLimitMaxRateInBitpsDESC = "egress_rate_limit_max_rate_in_bitps_DESC",
  EnabledASC = "enabled_ASC",
  EnabledDESC = "enabled_DESC",
  GatewayASC = "gateway_ASC",
  GatewayDESC = "gateway_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IngressRateLimitBurstInBitASC = "ingress_rate_limit_burst_in_bit_ASC",
  IngressRateLimitBurstInBitDESC = "ingress_rate_limit_burst_in_bit_DESC",
  IngressRateLimitEnabledASC = "ingress_rate_limit_enabled_ASC",
  IngressRateLimitEnabledDESC = "ingress_rate_limit_enabled_DESC",
  IngressRateLimitMaxRateInBitpsASC = "ingress_rate_limit_max_rate_in_bitps_ASC",
  IngressRateLimitMaxRateInBitpsDESC = "ingress_rate_limit_max_rate_in_bitps_DESC",
  InterfaceIdASC = "interface_id_ASC",
  InterfaceIdDESC = "interface_id_DESC",
  IpAddressASC = "ip_address_ASC",
  IpAddressDESC = "ip_address_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MacAddressASC = "mac_address_ASC",
  MacAddressDESC = "mac_address_DESC",
  MirrorASC = "mirror_ASC",
  MirrorDESC = "mirror_DESC",
  ModelASC = "model_ASC",
  ModelDESC = "model_DESC",
  OrderASC = "order_ASC",
  OrderDESC = "order_DESC",
  SubnetMaskASC = "subnet_mask_ASC",
  SubnetMaskDESC = "subnet_mask_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
}

export interface GetVmNicsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmNicOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmNicWhereInput | null;
}

export interface NestedAggregateVmNic {
  /** @format int32 */
  count: number;
}

export interface VmNicConnection {
  aggregate: NestedAggregateVmNic;
}

export interface GetVmNicsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmNicOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmNicWhereInput | null;
}

export interface NestedAggregateVmPlacementGroup {
  /** @format int32 */
  count: number;
}

export interface VmPlacementGroupConnection {
  aggregate: NestedAggregateVmPlacementGroup;
}

export interface GetVmPlacementGroupsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmPlacementGroupOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmPlacementGroupWhereInput | null;
}

export enum VmSnapshotOrderByInput {
  ClockOffsetASC = "clock_offset_ASC",
  ClockOffsetDESC = "clock_offset_DESC",
  ConsistentTypeASC = "consistent_type_ASC",
  ConsistentTypeDESC = "consistent_type_DESC",
  CpuASC = "cpu_ASC",
  CpuDESC = "cpu_DESC",
  CpuModelASC = "cpu_model_ASC",
  CpuModelDESC = "cpu_model_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  FirmwareASC = "firmware_ASC",
  FirmwareDESC = "firmware_DESC",
  HaASC = "ha_ASC",
  HaDESC = "ha_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IoPolicyASC = "io_policy_ASC",
  IoPolicyDESC = "io_policy_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  MaxBandwidthASC = "max_bandwidth_ASC",
  MaxBandwidthDESC = "max_bandwidth_DESC",
  MaxBandwidthPolicyASC = "max_bandwidth_policy_ASC",
  MaxBandwidthPolicyDESC = "max_bandwidth_policy_DESC",
  MaxIopsASC = "max_iops_ASC",
  MaxIopsDESC = "max_iops_DESC",
  MaxIopsPolicyASC = "max_iops_policy_ASC",
  MaxIopsPolicyDESC = "max_iops_policy_DESC",
  MemoryASC = "memory_ASC",
  MemoryDESC = "memory_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  VcpuASC = "vcpu_ASC",
  VcpuDESC = "vcpu_DESC",
  VmDisksASC = "vm_disks_ASC",
  VmDisksDESC = "vm_disks_DESC",
  VmNicsASC = "vm_nics_ASC",
  VmNicsDESC = "vm_nics_DESC",
  WinOptASC = "win_opt_ASC",
  WinOptDESC = "win_opt_DESC",
}

export interface GetVmSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmSnapshotWhereInput | null;
}

export interface NestedAggregateVmSnapshot {
  /** @format int32 */
  count: number;
}

export interface VmSnapshotConnection {
  aggregate: NestedAggregateVmSnapshot;
}

export interface GetVmSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmSnapshotWhereInput | null;
}

export interface NestedAggregateVmTemplate {
  /** @format int32 */
  count: number;
}

export interface VmTemplateConnection {
  aggregate: NestedAggregateVmTemplate;
}

export interface GetVmTemplatesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmTemplateOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmTemplateWhereInput | null;
}

export enum VmVolumeSnapshotOrderByInput {
  CreateAtASC = "createAt_ASC",
  CreateAtDESC = "createAt_DESC",
  DescriptionASC = "description_ASC",
  DescriptionDESC = "description_DESC",
  ElfStoragePolicyASC = "elf_storage_policy_ASC",
  ElfStoragePolicyDESC = "elf_storage_policy_DESC",
  EntityAsyncStatusASC = "entityAsyncStatus_ASC",
  EntityAsyncStatusDESC = "entityAsyncStatus_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalCreatedAtASC = "local_created_at_ASC",
  LocalCreatedAtDESC = "local_created_at_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SharedSizeASC = "shared_size_ASC",
  SharedSizeDESC = "shared_size_DESC",
  SizeASC = "size_ASC",
  SizeDESC = "size_DESC",
  TypeASC = "type_ASC",
  TypeDESC = "type_DESC",
  UniqueSizeASC = "unique_size_ASC",
  UniqueSizeDESC = "unique_size_DESC",
  VolumeSharingASC = "volume_sharing_ASC",
  VolumeSharingDESC = "volume_sharing_DESC",
  VolumeSizeASC = "volume_size_ASC",
  VolumeSizeDESC = "volume_size_DESC",
  ZbsSnapshotUuidASC = "zbs_snapshot_uuid_ASC",
  ZbsSnapshotUuidDESC = "zbs_snapshot_uuid_DESC",
}

export interface GetVmVolumeSnapshotsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmVolumeSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmVolumeSnapshotWhereInput | null;
}

export interface NestedAggregateVmVolumeSnapshot {
  /** @format int32 */
  count: number;
}

export interface VmVolumeSnapshotConnection {
  aggregate: NestedAggregateVmVolumeSnapshot;
}

export interface GetVmVolumeSnapshotsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmVolumeSnapshotOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmVolumeSnapshotWhereInput | null;
}

export interface NestedAggregateVmVolume {
  /** @format int32 */
  count: number;
}

export interface VmVolumeConnection {
  aggregate: NestedAggregateVmVolume;
}

export interface GetVmVolumesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmVolumeOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmVolumeWhereInput | null;
}

export interface NestedAggregateVm {
  /** @format int32 */
  count: number;
}

export interface VmConnection {
  aggregate: NestedAggregateVm;
}

export interface GetVmsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VmOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VmWhereInput | null;
}

export enum VsphereEsxiAccountOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IpASC = "ip_ASC",
  IpDESC = "ip_DESC",
  IsValidASC = "is_valid_ASC",
  IsValidDESC = "is_valid_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  PortASC = "port_ASC",
  PortDESC = "port_DESC",
  UsernameASC = "username_ASC",
  UsernameDESC = "username_DESC",
}

export interface GetVsphereEsxiAccountsRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VsphereEsxiAccountOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VsphereEsxiAccountWhereInput | null;
}

export interface NestedAggregateVsphereEsxiAccount {
  /** @format int32 */
  count: number;
}

export interface VsphereEsxiAccountConnection {
  aggregate: NestedAggregateVsphereEsxiAccount;
}

export interface GetVsphereEsxiAccountsConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: VsphereEsxiAccountOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: VsphereEsxiAccountWhereInput | null;
}

export interface WitnessService {
  id: string;
  name: string;
  role: string;
  state: string;

  /** @format double */
  state_duration: number;
}

export interface WitnessWhereUniqueInput {
  id?: string | null;
  local_id?: string | null;
}

export interface GetWitnessServicesRequestBody {
  where: WitnessWhereUniqueInput;
}

export interface Witness {
  cluster: NestedCluster;

  /** @format int64 */
  cpu_hz_per_core: number;
  data_ip: string;
  id: string;
  local_id?: string | null;
  management_ip: string;
  name: string;

  /** @format int64 */
  system_data_capacity: number;

  /** @format int64 */
  system_used_data_space: number;

  /** @format int32 */
  total_cpu_cores: number;

  /** @format int64 */
  total_cpu_hz: number;

  /** @format int64 */
  total_memory_bytes: number;
}

export enum WitnessOrderByInput {
  CpuHzPerCoreASC = "cpu_hz_per_core_ASC",
  CpuHzPerCoreDESC = "cpu_hz_per_core_DESC",
  DataIpASC = "data_ip_ASC",
  DataIpDESC = "data_ip_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ManagementIpASC = "management_ip_ASC",
  ManagementIpDESC = "management_ip_DESC",
  NameASC = "name_ASC",
  NameDESC = "name_DESC",
  SystemDataCapacityASC = "system_data_capacity_ASC",
  SystemDataCapacityDESC = "system_data_capacity_DESC",
  SystemUsedDataSpaceASC = "system_used_data_space_ASC",
  SystemUsedDataSpaceDESC = "system_used_data_space_DESC",
  TotalCpuCoresASC = "total_cpu_cores_ASC",
  TotalCpuCoresDESC = "total_cpu_cores_DESC",
  TotalCpuHzASC = "total_cpu_hz_ASC",
  TotalCpuHzDESC = "total_cpu_hz_DESC",
  TotalMemoryBytesASC = "total_memory_bytes_ASC",
  TotalMemoryBytesDESC = "total_memory_bytes_DESC",
}

export interface GetWitnessesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: WitnessOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: WitnessWhereInput | null;
}

export interface NestedAggregateWitness {
  /** @format int32 */
  count: number;
}

export interface WitnessConnection {
  aggregate: NestedAggregateWitness;
}

export interface GetWitnessesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: WitnessOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: WitnessWhereInput | null;
}

export interface ZoneTopo {
  cluster: NestedCluster;
  cluster_topo: NestedClusterTopo;
  id: string;
  local_id: string;
  rack_topoes?: NestedRackTopo[] | null;
}

export enum ZoneTopoOrderByInput {
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
}

export interface GetZoneTopoesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ZoneTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ZoneTopoWhereInput | null;
}

export interface NestedAggregateZoneTopo {
  /** @format int32 */
  count: number;
}

export interface ZoneTopoConnection {
  aggregate: NestedAggregateZoneTopo;
}

export interface GetZoneTopoesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ZoneTopoOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ZoneTopoWhereInput | null;
}

export interface Zone {
  cluster: NestedCluster;
  datacenter: NestedDatacenter;

  /** @format int64 */
  failure_data_space?: number | null;

  /** @format int32 */
  host_num?: number | null;
  hosts?: NestedHost[] | null;
  id: string;
  is_preferred: boolean;
  local_id?: string | null;

  /** @format int32 */
  provisioned_cpu_cores?: number | null;

  /** @format int32 */
  provisioned_cpu_cores_for_active_vm?: number | null;

  /** @format int64 */
  provisioned_data_space?: number | null;

  /** @format int64 */
  provisioned_memory_bytes?: number | null;

  /** @format int32 */
  running_vm_num?: number | null;

  /** @format int32 */
  stopped_vm_num?: number | null;

  /** @format int32 */
  suspended_vm_num?: number | null;

  /** @format int64 */
  total_cache_capacity?: number | null;

  /** @format int32 */
  total_cpu_cores?: number | null;

  /** @format int64 */
  total_cpu_hz?: number | null;

  /** @format int64 */
  total_data_capacity?: number | null;

  /** @format int64 */
  total_memory_bytes?: number | null;

  /** @format int64 */
  used_data_space?: number | null;

  /** @format int64 */
  valid_data_space?: number | null;

  /** @format int32 */
  vm_num?: number | null;
}

export enum ZoneOrderByInput {
  FailureDataSpaceASC = "failure_data_space_ASC",
  FailureDataSpaceDESC = "failure_data_space_DESC",
  HostNumASC = "host_num_ASC",
  HostNumDESC = "host_num_DESC",
  IdASC = "id_ASC",
  IdDESC = "id_DESC",
  IsPreferredASC = "is_preferred_ASC",
  IsPreferredDESC = "is_preferred_DESC",
  LocalIdASC = "local_id_ASC",
  LocalIdDESC = "local_id_DESC",
  ProvisionedCpuCoresASC = "provisioned_cpu_cores_ASC",
  ProvisionedCpuCoresDESC = "provisioned_cpu_cores_DESC",
  ProvisionedCpuCoresForActiveVmASC = "provisioned_cpu_cores_for_active_vm_ASC",
  ProvisionedCpuCoresForActiveVmDESC = "provisioned_cpu_cores_for_active_vm_DESC",
  ProvisionedDataSpaceASC = "provisioned_data_space_ASC",
  ProvisionedDataSpaceDESC = "provisioned_data_space_DESC",
  ProvisionedMemoryBytesASC = "provisioned_memory_bytes_ASC",
  ProvisionedMemoryBytesDESC = "provisioned_memory_bytes_DESC",
  RunningVmNumASC = "running_vm_num_ASC",
  RunningVmNumDESC = "running_vm_num_DESC",
  StoppedVmNumASC = "stopped_vm_num_ASC",
  StoppedVmNumDESC = "stopped_vm_num_DESC",
  SuspendedVmNumASC = "suspended_vm_num_ASC",
  SuspendedVmNumDESC = "suspended_vm_num_DESC",
  TotalCacheCapacityASC = "total_cache_capacity_ASC",
  TotalCacheCapacityDESC = "total_cache_capacity_DESC",
  TotalCpuCoresASC = "total_cpu_cores_ASC",
  TotalCpuCoresDESC = "total_cpu_cores_DESC",
  TotalCpuHzASC = "total_cpu_hz_ASC",
  TotalCpuHzDESC = "total_cpu_hz_DESC",
  TotalDataCapacityASC = "total_data_capacity_ASC",
  TotalDataCapacityDESC = "total_data_capacity_DESC",
  TotalMemoryBytesASC = "total_memory_bytes_ASC",
  TotalMemoryBytesDESC = "total_memory_bytes_DESC",
  UsedDataSpaceASC = "used_data_space_ASC",
  UsedDataSpaceDESC = "used_data_space_DESC",
  ValidDataSpaceASC = "valid_data_space_ASC",
  ValidDataSpaceDESC = "valid_data_space_DESC",
  VmNumASC = "vm_num_ASC",
  VmNumDESC = "vm_num_DESC",
}

export interface GetZonesRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ZoneOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ZoneWhereInput | null;
}

export interface NestedAggregateZone {
  /** @format int32 */
  count: number;
}

export interface ZoneConnection {
  aggregate: NestedAggregateZone;
}

export interface GetZonesConnectionRequestBody {
  after?: string | null;
  before?: string | null;

  /** @format int32 */
  first?: number | null;

  /** @format int32 */
  last?: number | null;
  orderBy?: ZoneOrderByInput | null;

  /** @format int32 */
  skip?: number | null;
  where?: ZoneWhereInput | null;
}

export interface WithTaskAlertNotifier {
  task_id?: string | null;
  data: AlertNotifier;
}

export interface AlertNotifierCreationParams {
  notice_severities: ("CRITICAL" | "NOTICE" | "INFO")[];
  language_code: NotifierLanguageCode;
  email_tos: string[];
  email_from: string;
  disabled: boolean;
  smtp_server_id: string;
  name: string;
  clusters: ClusterWhereInput;
}

export interface AlertNotifierUpdationParams {
  notice_severities?: ("CRITICAL" | "NOTICE" | "INFO")[];
  language_code?: NotifierLanguageCode;
  email_tos?: string[];
  email_from?: string;
  disabled?: boolean;
  smtp_server_id?: string;
  name?: string;
  clusters?: ClusterWhereInput;
  id?: string;
}

export interface AlertNotifierManyUpdationParams {
  notice_severities?: ("CRITICAL" | "NOTICE" | "INFO")[];
  language_code?: NotifierLanguageCode;
  email_tos?: string[];
  email_from?: string;
  disabled?: boolean;
  smtp_server_id?: string;
  name?: string;
  where: AlertNotifierWhereInput;
}

export interface DeleteAlertNotifier {
  id: string;
}

export interface WithTaskDeleteAlertNotifier {
  task_id?: string | null;
  data: DeleteAlertNotifier;
}

export interface DeleteAlertNotifierParams {
  where: AlertNotifierWhereInput;
}
