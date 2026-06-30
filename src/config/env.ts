function getEnvVar(key: string, required = false): string | undefined {
  const value = process.env[key];

  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  siteUrl: getEnvVar("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000",
  cms: {
    provider: getEnvVar("CMS_PROVIDER"),
    apiUrl: getEnvVar("CMS_API_URL"),
    apiToken: getEnvVar("CMS_API_TOKEN"),
  },
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
