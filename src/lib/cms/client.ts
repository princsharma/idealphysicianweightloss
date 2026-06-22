import { env } from "@/config/env";
import { mockCMSAdapter } from "@/lib/cms/adapters/mock";
import type { CMSClient } from "@/lib/cms/types";

function createCMSClient(): CMSClient {
  const provider = env.cms.provider;

  switch (provider) {
  case "mock":
  case undefined:
    return mockCMSAdapter();
  default:
    throw new Error(
      `Unsupported CMS provider: ${provider}. Add an adapter in src/lib/cms/adapters/.`,
    );
  }
}

let cmsClient: CMSClient | null = null;

export function getCMSClient(): CMSClient {
  if (!cmsClient) {
    cmsClient = createCMSClient();
  }

  return cmsClient;
}
