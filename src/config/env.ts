function getEnvVar(key: string, required = false): string | undefined {
  const value = process.env[key];

  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  siteUrl: getEnvVar("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000",
  analytics: {
    gaId: getEnvVar("NEXT_PUBLIC_GA_ID") ?? "",
    gtmId: getEnvVar("NEXT_PUBLIC_GTM_ID") ?? "",
    clarityId: getEnvVar("NEXT_PUBLIC_CLARITY_ID") ?? "",
    facebookPixel: getEnvVar("NEXT_PUBLIC_FACEBOOK_PIXEL") ?? "",
  },
  verification: {
    google: getEnvVar("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION") ?? "",
    bing: getEnvVar("NEXT_PUBLIC_BING_SITE_VERIFICATION") ?? "",
  },
  cms: {
    provider: getEnvVar("CMS_PROVIDER"),
    apiUrl: getEnvVar("CMS_API_URL"),
    apiToken: getEnvVar("CMS_API_TOKEN"),
  },
  contactWebhook: getEnvVar("CONTACT_FORM_WEBHOOK_URL") ?? "",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
