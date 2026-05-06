import { ActivePassiveClient } from "./active-passive-client";
import { UserSource } from "./generated/data-contracts";
import { CloudTowerUser } from "./generated/http-client";
import { VmApi } from "./generated/Vm";

declare const process: {
  env: Record<string, string | undefined>;
  exitCode?: number;
};
declare function require(name: string): any;

const https = require("https");

async function main(): Promise<void> {
  const endpoints = readRequired("CLOUDTOWER_ENDPOINTS")
    .split(",")
    .map((endpoint) => endpoint.trim())
    .filter(Boolean);
  const username = readRequired("CLOUDTOWER_USERNAME");
  const password = readRequired("CLOUDTOWER_PASSWORD");
  const source = (process.env.CLOUDTOWER_SOURCE || UserSource.LOCAL) as UserSource;
  const intervalMs = Number(process.env.CLOUDTOWER_INTERVAL_MS || "10000");
  const first = Number(process.env.CLOUDTOWER_GET_VMS_FIRST || "10");

  const client = new ActivePassiveClient(
    {
      username,
      password,
      source,
    },
    {
      endpoints,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    },
  );
  const vmApi = new VmApi(client);

  await runGetVms(vmApi, client, first);

  setInterval(() => {
    runGetVms(vmApi, client, first).catch((error) => {
      console.error(
        `${new Date().toISOString()} request failed active_endpoint=${client.currentActiveEndpoint()} error=${formatError(
          error,
        )}`,
      );
    });
  }, intervalMs);
}

async function runGetVms(
  vmApi: VmApi<CloudTowerUser>,
  client: ActivePassiveClient,
  first: number,
): Promise<void> {
  await vmApi.getVms({
    first,
  });

  console.log(
    `${new Date().toISOString()} request success active_endpoint=${client.currentActiveEndpoint()}`,
  );
}

function readRequired(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`missing required environment variable: ${name}`);
  }

  return value;
}

function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

main().catch((error) => {
  console.error(formatError(error));
  process.exitCode = 1;
});
