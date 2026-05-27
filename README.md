# Cloudtower Node Sdk

typescript 编写的 Cloudtower SDK。

## 安装

```
npm install cloudtower-node-sdk
```

## 使用

### 创建Client并鉴权

```typescript
import { CloudTowerClient, UserSource } from "cloudtower-node-sdk";

const client = new CloudTowerClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    baseURL: "http://<path-to-tower>/v2/api",
  },
);
```

### 创建实例并请求

```typescript
const api = new VmApi(client);
const data = await api.getVms({
  first: 10,
});
console.log(data);
```

### 创建 `ActivePassiveClient` 实例

CloudTower 在 4.9.0 引入了多管理 IP 主备部署，如果需要访问此类 CloudTower，可以使用 `ActivePassiveClient` 配置同一个主备集群的多个 endpoint。同一时间预期最多只有一个 active endpoint，传入顺序不代表主备关系，客户端会通过探测结果选择当前 active endpoint。

```typescript
import { ActivePassiveClient, UserSource } from "cloudtower-node-sdk";

const client = new ActivePassiveClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    endpoints: ["https://tower-a.example.com", "https://tower-b.example.com"],
  },
);
```

### 故障切换策略

`ActivePassiveClient` 支持以下故障切换策略：

- `AUTO_FAILOVER`：默认的策略，当没有缓存的 active endpoint 时，会尝试探测并缓存当前 active endpoint；请求返回 307 后自动重新探测并重试一次；请求发生网络 I/O 异常后清空缓存，但不会自动重试。
- `MANUAL_FAILOVER`：请求返回 307 后不自动重新探测和重试，清空缓存由调用方处理故障切换，其余业务逻辑和 `AUTO_FAILOVER` 一致。
- `ALWAYS_PROBE`：不缓存 active endpoint，每次请求前都重新探测 active endpoint；请求返回 307 后不自动重试。

如果需要指定故障切换策略，可以在创建实例时传入：

```typescript
import {
  ActivePassiveClient,
  UserSource,
  ActivePassiveFailoverStrategy,
} from "cloudtower-node-sdk";

const client = new ActivePassiveClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    endpoints: ["https://tower-a.example.com", "https://tower-b.example.com"],
    failoverStrategy: ActivePassiveFailoverStrategy.ManualFailover,
  },
);
```
