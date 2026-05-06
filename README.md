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

### Active-passive Client

```typescript
import {
  ActivePassiveClient,
  UserSource,
  VmApi,
} from "cloudtower-node-sdk";

const client = new ActivePassiveClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    endpoints: ["http://tower-1", "http://tower-2"],
  },
);

const api = new VmApi(client);
const data = await api.getVms({
  first: 10,
});
console.log(data);
```
