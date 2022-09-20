# Cloudtower Node Sdk

typescript 编写的 Cloudtower SDK。

## 安装

```
yarn install cloudtower-node-sdk
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
  }
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
