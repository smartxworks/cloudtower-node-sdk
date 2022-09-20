# Cloudtower Node Sdk

typescript 环境下的 Cloudtower SDK。

## 安装

```
yarn install cloudtower-node-sdk
```

## 使用

### 创建 HttpClient

```typescript
import { HttpClient } from "cloudtower-node-sdk";

const client = new HttpClient<string>({
  baseURL: "http://<tower_path>/v2/api",
  securityWorker: (data) => {
    return {
      headers: {
        Authorization: data || "",
      },
    };
  },
});
```

### 鉴权

> 可以通过 login 接口获取 token

```typescript
import { UserApi, UserSource } from "./index";
const userApi = new UserApi(client);
userApi
  .login({
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  })
  .then((res) => {
    client.setSecurityData(res.data.data.token);
  });
```

### 创建实例并请求

```typescript
const api = new VmApi(client);
const data = await api.getVms({
  first: 10,
});
console.log(data);
```
