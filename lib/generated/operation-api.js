"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = (_b) => __awaiter(this, void 0, void 0, function* () {
            var { secure, path, type, query, format, body } = _b, params = __rest(_b, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = (format && this.format) || void 0;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                requestParams.headers.common = { Accept: "*/*" };
                requestParams.headers.post = {};
                requestParams.headers.put = {};
                body = this.createFormData(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }));
        });
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "/v2/api" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
class Api {
    constructor(http) {
        this.getAlertNotifiers = {
            getAlertNotifiers: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alert-notifiers`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getAlertNotifiersConnection = {
            getAlertNotifiersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alert-notifiers-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getAlertRules = {
            getAlertRules: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alert-rules`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getAlertRulesConnection = {
            getAlertRulesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alert-rules-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getAlerts = {
            getAlerts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alerts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getAlertsConnection = {
            getAlertsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-alerts-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getApplications = {
            getApplications: (data, params = {}) => this.http.request(Object.assign({ path: `/get-applications`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getApplicationsConnection = {
            getApplicationsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-applications-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupLicenses = {
            getBackupLicenses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-licenses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupLicensesConnection = {
            getBackupLicensesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-licenses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPackages = {
            getBackupPackages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-packages`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPackagesConnection = {
            getBackupPackagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-packages-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPlanExecutions = {
            getBackupPlanExecutions: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-plan-executions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPlanExecutionsConnection = {
            getBackupPlanExecutionsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-plan-executions-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPlans = {
            getBackupPlans: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-plans`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupPlansConnection = {
            getBackupPlansConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-plans-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupRestoreExecutions = {
            getBackupRestoreExecutions: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-restore-executions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupRestoreExecutionsConnection = {
            getBackupRestoreExecutionsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-restore-executions-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupRestorePoints = {
            getBackupRestorePoints: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-restore-points`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupRestorePointsConnection = {
            getBackupRestorePointsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-restore-points-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupServices = {
            getBackupServices: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-services`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupServicesConnection = {
            getBackupServicesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-services-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupStoreRepositories = {
            getBackupStoreRepositories: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-store-repositories`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupStoreRepositoriesConnection = {
            getBackupStoreRepositoriesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-store-repositories-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupTargetExecutions = {
            getBackupTargetExecutions: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-target-executions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBackupTargetExecutionsConnection = {
            getBackupTargetExecutionsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-backup-target-executions-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBrickTopoes = {
            getBrickTopoes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-brick-topoes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getBrickTopoesConnection = {
            getBrickTopoesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-brick-topoes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterImages = {
            getClusterImages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-images`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterImagesConnection = {
            getClusterImagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-images-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusters = {
            getClusters: (data, params = {}) => this.http.request(Object.assign({ path: `/get-clusters`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClustersConnection = {
            getClustersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-clusters-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterSettingses = {
            getClusterSettingses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-settingses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterSettingsesConnection = {
            getClusterSettingsesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-settingses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterTopoes = {
            getClusterTopoes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-topoes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterTopoesConnection = {
            getClusterTopoesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-topoes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterUpgradeHistories = {
            getClusterUpgradeHistories: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-upgrade-histories`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getClusterUpgradeHistoriesConnection = {
            getClusterUpgradeHistoriesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-cluster-upgrade-histories-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getConsistencyGroups = {
            getConsistencyGroups: (data, params = {}) => this.http.request(Object.assign({ path: `/get-consistency-groups`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getConsistencyGroupsConnection = {
            getConsistencyGroupsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-consistency-groups-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getConsistencyGroupSnapshots = {
            getConsistencyGroupSnapshots: (data, params = {}) => this.http.request(Object.assign({ path: `/get-consistency-group-snapshots`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getConsistencyGroupSnapshotsConnection = {
            getConsistencyGroupSnapshotsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-consistency-group-snapshots-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getContentLibraryImages = {
            getContentLibraryImages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-content-library-images`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getContentLibraryImagesConnection = {
            getContentLibraryImagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-content-library-images-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getContentLibraryVmTemplates = {
            getContentLibraryVmTemplates: (data, params = {}) => this.http.request(Object.assign({ path: `/get-content-library-vm-templates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getContentLibraryVmTemplatesConnection = {
            getContentLibraryVmTemplatesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-content-library-vm-templates-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDatacenters = {
            getDatacenters: (data, params = {}) => this.http.request(Object.assign({ path: `/get-datacenters`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDatacentersConnection = {
            getDatacentersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-datacenters-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDeploys = {
            getDeploys: (data, params = {}) => this.http.request(Object.assign({ path: `/get-deploys`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDeploysConnection = {
            getDeploysConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-deploys-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDiscoverHosts = {
            getDiscoverHosts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-discover-hosts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDisks = {
            getDisks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-disks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getDisksConnection = {
            getDisksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-disks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfDataStores = {
            getElfDataStores: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-data-stores`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfDataStoresConnection = {
            getElfDataStoresConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-data-stores-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfImages = {
            getElfImages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-images`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfImagesConnection = {
            getElfImagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-images-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfStoragePolicies = {
            getElfStoragePolicies: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-storage-policies`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getElfStoragePoliciesConnection = {
            getElfStoragePoliciesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-elf-storage-policies-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEntityFilters = {
            getEntityFilters: (data, params = {}) => this.http.request(Object.assign({ path: `/get-entity-filters`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEntityFiltersConnection = {
            getEntityFiltersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-entity-filters-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEverouteClusters = {
            getEverouteClusters: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-clusters`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEverouteClustersConnection = {
            getEverouteClustersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-clusters-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEverouteLicenses = {
            getEverouteLicenses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-licenses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEverouteLicensesConnection = {
            getEverouteLicensesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-licenses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEveroutePackages = {
            getEveroutePackages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-packages`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getEveroutePackagesConnection = {
            getEveroutePackagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-everoute-packages-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGlobalAlertRules = {
            getGlobalAlertRules: (data, params = {}) => this.http.request(Object.assign({ path: `/get-global-alert-rules`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGlobalAlertRulesConnection = {
            getGlobalAlertRulesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-global-alert-rules-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGlobalSettingses = {
            getGlobalSettingses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-global-settingses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGlobalSettingsesConnection = {
            getGlobalSettingsesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-global-settingses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGraphs = {
            getGraphs: (data, params = {}) => this.http.request(Object.assign({ path: `/get-graphs`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getGraphsConnection = {
            getGraphsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-graphs-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getHosts = {
            getHosts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-hosts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getHostsConnection = {
            getHostsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-hosts-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIpmis = {
            getIpmis: (data, params = {}) => this.http.request(Object.assign({ path: `/get-ipmis`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiConnections = {
            getIscsiConnections: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-connections`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiConnectionsConnection = {
            getIscsiConnectionsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-connections-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiLuns = {
            getIscsiLuns: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-luns`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiLunsConnection = {
            getIscsiLunsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-luns-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiLunSnapshots = {
            getIscsiLunSnapshots: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-lun-snapshots`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiLunSnapshotsConnection = {
            getIscsiLunSnapshotsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-lun-snapshots-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiTargets = {
            getIscsiTargets: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-targets`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIscsiTargetsConnection = {
            getIscsiTargetsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-iscsi-targets-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIsolationPolicies = {
            getIsolationPolicies: (data, params = {}) => this.http.request(Object.assign({ path: `/get-isolation-policies`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getIsolationPoliciesConnection = {
            getIsolationPoliciesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-isolation-policies-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLabels = {
            getLabels: (data, params = {}) => this.http.request(Object.assign({ path: `/get-labels`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLabelsConnection = {
            getLabelsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-labels-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLicenses = {
            getLicenses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-licenses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLicensesConnection = {
            getLicensesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-licenses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLogCollections = {
            getLogCollections: (data, params = {}) => this.http.request(Object.assign({ path: `/get-log-collections`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLogCollectionsConnection = {
            getLogCollectionsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-log-collections-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getLogServiceConfigs = {
            getLogServiceConfigs: (data, params = {}) => this.http.request(Object.assign({ path: `/get-log-service-configs`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getMigrateTransmitters = {
            getMigrateTransmitters: (data, params = {}) => this.http.request(Object.assign({ path: `/get-migrate-transmitters`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getMigrateTransmittersConnection = {
            getMigrateTransmittersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-migrate-transmitters-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNamespaceGroups = {
            getNamespaceGroups: (data, params = {}) => this.http.request(Object.assign({ path: `/get-namespace-groups`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNamespaceGroupsConnection = {
            getNamespaceGroupsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-namespace-groups-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNfsExports = {
            getNfsExports: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nfs-exports`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNfsExportsConnection = {
            getNfsExportsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nfs-exports-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNfsInodes = {
            getNfsInodes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nfs-inodes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNfsInodesConnection = {
            getNfsInodesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nfs-inodes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNics = {
            getNics: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nics`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNicsConnection = {
            getNicsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nics-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNodeTopoes = {
            getNodeTopoes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-node-topoes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNodeTopoesConnection = {
            getNodeTopoesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-node-topoes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfNamespaces = {
            getNvmfNamespaces: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-namespaces`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfNamespacesConnection = {
            getNvmfNamespacesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-namespaces-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfNamespaceSnapshots = {
            getNvmfNamespaceSnapshots: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-namespace-snapshots`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfNamespaceSnapshotsConnection = {
            getNvmfNamespaceSnapshotsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-namespace-snapshots-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfSubsystems = {
            getNvmfSubsystems: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-subsystems`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getNvmfSubsystemsConnection = {
            getNvmfSubsystemsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-nvmf-subsystems-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getOrganizations = {
            getOrganizations: (data, params = {}) => this.http.request(Object.assign({ path: `/get-organizations`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getOrganizationsConnection = {
            getOrganizationsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-organizations-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getPmemDimms = {
            getPmemDimms: (data, params = {}) => this.http.request(Object.assign({ path: `/get-pmem-dimms`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getPmemDimmsConnection = {
            getPmemDimmsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-pmem-dimms-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getRackTopoes = {
            getRackTopoes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-rack-topoes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getRackTopoesConnection = {
            getRackTopoesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-rack-topoes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getReportTasks = {
            getReportTasks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-report-tasks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getReportTasksConnection = {
            getReportTasksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-report-tasks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getReportTemplates = {
            getReportTemplates: (data, params = {}) => this.http.request(Object.assign({ path: `/get-report-templates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getReportTemplatesConnection = {
            getReportTemplatesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-report-templates-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSecurityPolicies = {
            getSecurityPolicies: (data, params = {}) => this.http.request(Object.assign({ path: `/get-security-policies`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSecurityPoliciesConnection = {
            getSecurityPoliciesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-security-policies-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotGroups = {
            getSnapshotGroups: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-groups`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotGroupsConnection = {
            getSnapshotGroupsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-groups-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotPlans = {
            getSnapshotPlans: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-plans`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotPlansConnection = {
            getSnapshotPlansConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-plans-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotPlanTasks = {
            getSnapshotPlanTasks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-plan-tasks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnapshotPlanTasksConnection = {
            getSnapshotPlanTasksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snapshot-plan-tasks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnmpTransports = {
            getSnmpTransports: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snmp-transports`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnmpTransportsConnection = {
            getSnmpTransportsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snmp-transports-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnmpTrapReceivers = {
            getSnmpTrapReceivers: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snmp-trap-receivers`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSnmpTrapReceiversConnection = {
            getSnmpTrapReceiversConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-snmp-trap-receivers-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSvtImages = {
            getSvtImages: (data, params = {}) => this.http.request(Object.assign({ path: `/get-svt-images`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSvtImagesConnection = {
            getSvtImagesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-svt-images-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSystemAuditLogs = {
            getSystemAuditLogs: (data, params = {}) => this.http.request(Object.assign({ path: `/get-system-audit-logs`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getSystemAuditLogsConnection = {
            getSystemAuditLogsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-system-audit-logs-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getTasks = {
            getTasks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-tasks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getTasksConnection = {
            getTasksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-tasks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUploadTasks = {
            getUploadTasks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-upload-tasks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUploadTasksConnection = {
            getUploadTasksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-upload-tasks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUsbDevices = {
            getUsbDevices: (data, params = {}) => this.http.request(Object.assign({ path: `/get-usb-devices`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUsbDevicesConnection = {
            getUsbDevicesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-usb-devices-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUserAuditLogs = {
            getUserAuditLogs: (data, params = {}) => this.http.request(Object.assign({ path: `/get-user-audit-logs`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUserAuditLogsConnection = {
            getUserAuditLogsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-user-audit-logs-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUserRoleNexts = {
            getUserRoleNexts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-user-role-nexts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUserRoleNextsConnection = {
            getUserRoleNextsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-user-role-nexts-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUsers = {
            getUsers: (data, params = {}) => this.http.request(Object.assign({ path: `/get-users`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getUsersConnection = {
            getUsersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-users-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVcenterAccounts = {
            getVcenterAccounts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vcenter-accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVcenterAccountsConnection = {
            getVcenterAccountsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vcenter-accounts-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVdses = {
            getVdses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vdses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVdsesConnection = {
            getVdsesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vdses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getViews = {
            getViews: (data, params = {}) => this.http.request(Object.assign({ path: `/get-views`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getViewsConnection = {
            getViewsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-views-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVlans = {
            getVlans: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vlans`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVlansConnection = {
            getVlansConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vlans-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmDisks = {
            getVmDisks: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-disks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmDisksConnection = {
            getVmDisksConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-disks-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmEntityFilterResults = {
            getVmEntityFilterResults: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-entity-filter-results`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmEntityFilterResultsConnection = {
            getVmEntityFilterResultsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-entity-filter-results-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmFolders = {
            getVmFolders: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-folders`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmFoldersConnection = {
            getVmFoldersConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-folders-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmNics = {
            getVmNics: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-nics`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmNicsConnection = {
            getVmNicsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-nics-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmPlacementGroups = {
            getVmPlacementGroups: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-placement-groups`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmPlacementGroupsConnection = {
            getVmPlacementGroupsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-placement-groups-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVms = {
            getVms: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vms`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmsConnection = {
            getVmsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vms-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmSnapshots = {
            getVmSnapshots: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-snapshots`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmSnapshotsConnection = {
            getVmSnapshotsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-snapshots-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmTemplates = {
            getVmTemplates: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-templates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmTemplatesConnection = {
            getVmTemplatesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-templates-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmVolumes = {
            getVmVolumes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-volumes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVmVolumesConnection = {
            getVmVolumesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vm-volumes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVsphereEsxiAccounts = {
            getVsphereEsxiAccounts: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vsphere-esxi-accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getVsphereEsxiAccountsConnection = {
            getVsphereEsxiAccountsConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-vsphere-esxi-accounts-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getWitnesses = {
            getWitnesses: (data, params = {}) => this.http.request(Object.assign({ path: `/get-witnesses`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getWitnessesConnection = {
            getWitnessesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-witnesses-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getWitnessServices = {
            getWitnessServices: (data, params = {}) => this.http.request(Object.assign({ path: `/get-witness-services`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getZones = {
            getZones: (data, params = {}) => this.http.request(Object.assign({ path: `/get-zones`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getZonesConnection = {
            getZonesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-zones-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getZoneTopoes = {
            getZoneTopoes: (data, params = {}) => this.http.request(Object.assign({ path: `/get-zone-topoes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.getZoneTopoesConnection = {
            getZoneTopoesConnection: (data, params = {}) => this.http.request(Object.assign({ path: `/get-zone-topoes-connection`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateAlertNotifier = {
            updateAlertNotifier: (data, params = {}) => this.http.request(Object.assign({ path: `/update-alert-notifier`, method: "POST", body: data, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateGlobalAlertRule = {
            updateGlobalAlertRule: (data, params = {}) => this.http.request(Object.assign({ path: `/update-global-alert-rule`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateCustomizeAlertRule = {
            updateCustomizeAlertRule: (data, params = {}) => this.http.request(Object.assign({ path: `/update-customize-alert-rule`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.resolveAlert = {
            resolveAlert: (data, params = {}) => this.http.request(Object.assign({ path: `/resolve-alert`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createBrickTopo = {
            createBrickTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/create-brick-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateBrickTopo = {
            updateBrickTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/update-brick-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.moveBrickTopo = {
            moveBrickTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/move-brick-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteBrickTopo = {
            deleteBrickTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-brick-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.connectCluster = {
            connectCluster: (data, params = {}) => this.http.request(Object.assign({ path: `/connect-cluster`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateCluster = {
            updateCluster: (data, params = {}) => this.http.request(Object.assign({ path: `/update-cluster`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateClusterLicense = {
            updateClusterLicense: (data, params = {}) => this.http.request(Object.assign({ path: `/update-cluster-license`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteCluster = {
            deleteCluster: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-cluster`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createConsistencySnapshotGroup = {
            createConsistencyGroupSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/create-consistency-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rollbackConsistencySnapshotGroup = {
            updateConsistencyGroupSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/rollback-consistency-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteConsistencySnapshotGroup = {
            deleteConsistencyGroupSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-consistency-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createConsistencyGroup = {
            createConsistencyGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/create-consistency-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateConsistencyGroup = {
            updateConsistencyGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/update-consistency-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteConsistencyGroup = {
            deleteConsistencyGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-consistency-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createDatacenter = {
            createDatacenter: (data, params = {}) => this.http.request(Object.assign({ path: `/create-datacenter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateDatacenter = {
            updateDatacenter: (data, params = {}) => this.http.request(Object.assign({ path: `/update-datacenter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteDatacenter = {
            deleteDatacenter: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-datacenter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.mountDisk = {
            mountDisk: (data, params = {}) => this.http.request(Object.assign({ path: `/mount-disk`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.unmountDisk = {
            unmountDisk: (data, params = {}) => this.http.request(Object.assign({ path: `/unmount-disk`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createEntityFilter = {
            createEntityFilter: (data, params = {}) => this.http.request(Object.assign({ path: `/create-entity-filter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateEntityFilter = {
            updateEntityFilter: (data, params = {}) => this.http.request(Object.assign({ path: `/update-entity-filter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteEntityFilter = {
            deleteEntityFilter: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-entity-filter`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createGraph = {
            createGraph: (data, params = {}) => this.http.request(Object.assign({ path: `/create-graph`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateGraph = {
            updateGraph: (data, params = {}) => this.http.request(Object.assign({ path: `/update-graph`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteGraph = {
            deleteGraph: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-graph`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createHost = {
            createHost: (data, params = {}) => this.http.request(Object.assign({ path: `/create-host`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.triggerDiskBlink = {
            triggerDiskBlink: (data, params = {}) => this.http.request(Object.assign({ path: `/trigger-disk-blink`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateHost = {
            updateHost: (data, params = {}) => this.http.request(Object.assign({ path: `/update-host`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createIscsiLunSnapshot = {
            createIscsiLunSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/create-iscsi-lun-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteIscsiLunSnapshot = {
            deleteIscsiLunSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-iscsi-lun-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createIscsiLun = {
            createIscsiLun: (data, params = {}) => this.http.request(Object.assign({ path: `/create-iscsi-lun`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateIscsiLun = {
            updateIscsiLun: (data, params = {}) => this.http.request(Object.assign({ path: `/update-iscsi-lun`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteIscsiLun = {
            deleteIscsiLun: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-iscsi-lun`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cloneIscsiLunFromSnapshot = {
            cloneIscsiLunFromSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/clone-iscsi-lun-from-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rollbackIscsiLunFromSnapshot = {
            rollbackIscsiLunFromSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/rollback-iscsi-lun-from-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createIscsiTarget = {
            createIscsiTarget: (data, params = {}) => this.http.request(Object.assign({ path: `/create-iscsi-target`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateIscsiTarget = {
            updateIscsiTarget: (data, params = {}) => this.http.request(Object.assign({ path: `/update-iscsi-target`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteIscsiTarget = {
            deleteIscsiTarget: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-iscsi-target`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.uploadElfImage = {
            createElfImage: (data, params = {}) => this.http.request(Object.assign({ path: `/upload-elf-image`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
        };
        this.updateElfImage = {
            updateElfImage: (data, params = {}) => this.http.request(Object.assign({ path: `/update-elf-image`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteElfImage = {
            deleteElfImage: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-elf-image`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createLabel = {
            createLabel: (data, params = {}) => this.http.request(Object.assign({ path: `/create-label`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateLabel = {
            updateLabel: (data, params = {}) => this.http.request(Object.assign({ path: `/update-label`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addLabelsToResources = {
            addLabelsToResources: (data, params = {}) => this.http.request(Object.assign({ path: `/add-labels-to-resources`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.removeLabelsFromResources = {
            removeLabelsFromResources: (data, params = {}) => this.http.request(Object.assign({ path: `/remove-labels-from-resources`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteLabel = {
            deleteLabel: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-label`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateLicense = {
            updateDeploy: (data, params = {}) => this.http.request(Object.assign({ path: `/update-license`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createLogCollection = {
            createLogCollection: (data, params = {}) => this.http.request(Object.assign({ path: `/create-log-collection`, method: "POST", body: data, type: ContentType.Json, format: "json" }, params)),
        };
        this.forceStopLogCollection = {
            forceStopLogCollection: (data, params = {}) => this.http.request(Object.assign({ path: `/force-stop-log-collection`, method: "POST", body: data, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteLogCollection = {
            deleteLogCollection: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-log-collection`, method: "POST", body: data, type: ContentType.Json, format: "json" }, params)),
        };
        this.createNamespaceGroup = {
            createNamespaceGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/create-namespace-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateNamespaceGroup = {
            updateNamespaceGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/update-namespace-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteNamespaceGroup = {
            deleteNamespaceGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-namespace-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createNfsExport = {
            createNfsExport: (data, params = {}) => this.http.request(Object.assign({ path: `/create-nfs-export`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateNfsExport = {
            updateNfsExport: (data, params = {}) => this.http.request(Object.assign({ path: `/update-nfs-export`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteNfsExport = {
            deleteNfsExport: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-nfs-export`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateNic = {
            updateNic: (data, params = {}) => this.http.request(Object.assign({ path: `/update-nic`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.moveNodeTopo = {
            updateNodeTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/move-node-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createNvmfNamespaceSnapshot = {
            createNvmfNamespaceSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/create-nvmf-namespace-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteNvmfNamespaceSnapshot = {
            deleteNvmfNamespaceSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-nvmf-namespace-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createNvmfNamespace = {
            createNvmfNamespace: (data, params = {}) => this.http.request(Object.assign({ path: `/create-nvmf-namespace`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateNvmfNamespace = {
            updateNvmfNamespace: (data, params = {}) => this.http.request(Object.assign({ path: `/update-nvmf-namespace`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteNvmfNamespace = {
            deleteNvmfNamespace: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-nvmf-namespace`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cloneNvmfNamespaceFromSnapshot = {
            cloneNvmfNamespaceFromSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/clone-nvmf-namespace-from-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rollbackNvmfNamespaceFromSnapshot = {
            rollbackNvmfNamespaceFromSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/rollback-nvmf-namespace-from-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createNvmfSubsystem = {
            createNvmfSubsystem: (data, params = {}) => this.http.request(Object.assign({ path: `/create-nvmf-subsystem`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateNvmfSubsystem = {
            updateNvmfSubsystem: (data, params = {}) => this.http.request(Object.assign({ path: `/update-nvmf-subsystem`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteNvmfSubsystem = {
            deleteNvmfSubsystem: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-nvmf-subsystem`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createOrganization = {
            createOrganization: (data, params = {}) => this.http.request(Object.assign({ path: `/create-organization`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateOrganization = {
            updateOrganization: (data, params = {}) => this.http.request(Object.assign({ path: `/update-organization`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteOrganization = {
            deleteOrganization: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-organization`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createRackTopo = {
            createRackTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/create-rack-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateRackTopo = {
            updateRackTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/update-rack-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteRackTopo = {
            deleteRackTopo: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-rack-topo`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateGlobalRecycleBinSetting = {
            updateGlobalRecycleBinSetting: (data, params = {}) => this.http.request(Object.assign({ path: `/update-global-recycle-bin-setting`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createClusterRecycleBinSetting = {
            createClusterRecycleBinSetting: (data, params = {}) => this.http.request(Object.assign({ path: `/create-cluster-recycle-bin-setting`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateClusterRecycleBinSetting = {
            updateClusterRecycleBinSetting: (data, params = {}) => this.http.request(Object.assign({ path: `/update-cluster-recycle-bin-setting`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteClusterRecycleBinSetting = {
            deleteClusterRecycleBinSetting: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-cluster-recycle-bin-setting`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createReportTemplate = {
            createReportTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/create-report-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateReportTemplate = {
            updateReportTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/update-report-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.generateFromReportTemplate = {
            generateFromReportTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/generate-from-report-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteReportTemplate = {
            deleteReportTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-report-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createRole = {
            createRole: (data, params = {}) => this.http.request(Object.assign({ path: `/create-role`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateRole = {
            updateRole: (data, params = {}) => this.http.request(Object.assign({ path: `/update-role`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteRole = {
            deleteRole: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-role`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rollbackSnapshotGroup = {
            rollbackSnapshotGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/rollback-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cloneSnapshotGroup = {
            cloneSnapshotGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/clone-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.keepSnapshotGroup = {
            keepSnapshotGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/keep-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteSnapshotGroup = {
            deleteSnapshotGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-snapshot-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createSnapshotPlan = {
            createSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/create-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateSnapshotPlan = {
            updateSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/update-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteSnapshotPlan = {
            deleteSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.executeSnapshotPlan = {
            executeSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/execute-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.suspendSnapshotPlan = {
            suspendSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/suspend-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.resumeSnapshotPlan = {
            resumeSnapshotPlan: (data, params = {}) => this.http.request(Object.assign({ path: `/resume-snapshot-plan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createSnmpTransport = {
            createSnmpTransport: (data, params = {}) => this.http.request(Object.assign({ path: `/create-snmp-transport`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateSnmpTransport = {
            updateSnmpTransport: (data, params = {}) => this.http.request(Object.assign({ path: `/update-snmp-transport`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteSnmpTransport = {
            deleteSnmpTransport: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-snmp-transport`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createSnmpTrapReceiver = {
            createSnmpTrapReceiver: (data, params = {}) => this.http.request(Object.assign({ path: `/create-snmp-trap-receiver`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateSnmpTrapReceiver = {
            updateSnmpTrapReceiver: (data, params = {}) => this.http.request(Object.assign({ path: `/update-snmp-trap-receiver`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteSnmpTrapReceiver = {
            deleteSnmpTrapReceiver: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-snmp-trap-receiver`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.mountUsbDevice = {
            mountUsbDevice: (data, params = {}) => this.http.request(Object.assign({ path: `/mount-usb-device`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.unmountUsbDevice = {
            unmountUsbDevice: (data, params = {}) => this.http.request(Object.assign({ path: `/unmount-usb-device`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.login = {
            login: (data, params = {}) => this.http.request(Object.assign({ path: `/login`, method: "POST", body: data, type: ContentType.Json, format: "json" }, params)),
        };
        this.createUser = {
            createUser: (data, params = {}) => this.http.request(Object.assign({ path: `/create-user`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateUser = {
            updateUser: (data, params = {}) => this.http.request(Object.assign({ path: `/update-user`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteUser = {
            deleteUser: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-user`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVdsWithMigrateVlan = {
            createVdsWithMigrateVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vds-with-migrate-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVdsWithAccessVlan = {
            createVdsWithAccessVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vds-with-access-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVds = {
            createVds: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vds`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVds = {
            updateVds: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vds`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVds = {
            deleteVds: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vds`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createView = {
            createView: (data, params = {}) => this.http.request(Object.assign({ path: `/create-view`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateView = {
            updateView: (data, params = {}) => this.http.request(Object.assign({ path: `/update-view`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteView = {
            deleteView: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-view`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmVlan = {
            createVmVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmVlan = {
            updateVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateManagementVlan = {
            updateManagementVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/update-management-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateMigrationVlan = {
            updateMigrationVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/update-migration-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmVlan = {
            deleteVlan: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-vlan`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmFolder = {
            createVmFolder: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-folder`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmFolder = {
            updateVmFolder: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-folder`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmFolder = {
            deleteVmFolder: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-folder`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmPlacementGroup = {
            createVmPlacementGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-placement-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmPlacementGroup = {
            updateVmPlacementGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-placement-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmPlacementGroup = {
            deleteVmPlacementGroup: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-placement-group`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmSnapshot = {
            createVmSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmSnapshot = {
            deleteVmSnapshot: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cloneVmTemplateFromVm = {
            cloneVmTemplateFromVm: (data, params = {}) => this.http.request(Object.assign({ path: `/clone-vm-template-from-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.convertVmTemplateFromVm = {
            convertVmTemplateFromVm: (data, params = {}) => this.http.request(Object.assign({ path: `/convert-vm-template-from-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmTemplate = {
            updateVmTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmTemplate = {
            deleteVmTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmVolume = {
            createVmVolume: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-volume`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVmVolume = {
            deleteVmVolumeFromVm: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm-volume`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVm = {
            createVm: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.createVmFromTemplate = {
            createVmFromTemplate: (data, params = {}) => this.http.request(Object.assign({ path: `/create-vm-from-template`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.convertVmTemplateToVm = {
            convertVmTemplateToVm: (data, params = {}) => this.http.request(Object.assign({ path: `/convert-vm-template-to-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cloneVm = {
            cloneVm: (data, params = {}) => this.http.request(Object.assign({ path: `/clone-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rebuildVmFromSnapshot = {
            rebuildVm: (data, params = {}) => this.http.request(Object.assign({ path: `/rebuild-vm-from-snapshot`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.rollbackVm = {
            rollbackVm: (data, params = {}) => this.http.request(Object.assign({ path: `/rollback-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmBasicInfo = {
            updateVm: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-basic-info`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.moveVmToRecycle = {
            moveVmToRecycleBin: (data, params = {}) => this.http.request(Object.assign({ path: `/move-vm-to-recycle`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.recoverVmFromRecycle = {
            recoverVmFromRecycleBin: (data, params = {}) => this.http.request(Object.assign({ path: `/recover-vm-from-recycle`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.deleteVm = {
            deleteVm: (data, params = {}) => this.http.request(Object.assign({ path: `/delete-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.startVm = {
            startVm: (data, params = {}) => this.http.request(Object.assign({ path: `/start-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.restartVm = {
            restartVm: (data, params = {}) => this.http.request(Object.assign({ path: `/restart-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.forceRestartVm = {
            forceRestartVm: (data, params = {}) => this.http.request(Object.assign({ path: `/force-restart-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.shutdownVm = {
            shutDownVm: (data, params = {}) => this.http.request(Object.assign({ path: `/shutdown-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.poweroffVm = {
            forceShutDownVm: (data, params = {}) => this.http.request(Object.assign({ path: `/poweroff-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.suspendVm = {
            suspendVm: (data, params = {}) => this.http.request(Object.assign({ path: `/suspend-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.resumeVm = {
            resumeVm: (data, params = {}) => this.http.request(Object.assign({ path: `/resume-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addVmDisk = {
            addVmDisk: (data, params = {}) => this.http.request(Object.assign({ path: `/add-vm-disk`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmDisk = {
            updateVmDisk: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-disk`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.removeVmDisk = {
            removeVmDisk: (data, params = {}) => this.http.request(Object.assign({ path: `/remove-vm-disk`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addVmCdRom = {
            addVmCdRom: (data, params = {}) => this.http.request(Object.assign({ path: `/add-vm-cd-rom`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.removeVmCdRom = {
            removeVmCdRom: (data, params = {}) => this.http.request(Object.assign({ path: `/remove-vm-cd-rom`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addVmNic = {
            addVmNic: (data, params = {}) => this.http.request(Object.assign({ path: `/add-vm-nic`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.updateVmNic = {
            updateVmNic: (data, params = {}) => this.http.request(Object.assign({ path: `/update-vm-nic`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.removeVmNic = {
            removeVmNic: (data, params = {}) => this.http.request(Object.assign({ path: `/remove-vm-nic`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.installVmtools = {
            installVmtools: (data, params = {}) => this.http.request(Object.assign({ path: `/install-vmtools`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.migrateVm = {
            migRateVm: (data, params = {}) => this.http.request(Object.assign({ path: `/migrate-vm`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addVmToFolder = {
            addVmToFolder: (data, params = {}) => this.http.request(Object.assign({ path: `/add-vm-to-folder`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.removeVmFromFolder = {
            removeVmToFolder: (data, params = {}) => this.http.request(Object.assign({ path: `/remove-vm-from-folder`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.http = http;
    }
}
exports.Api = Api;
//# sourceMappingURL=operation-api.js.map