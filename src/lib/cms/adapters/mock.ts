import type { CMSClient } from "@/lib/cms/types";
import type { CMSPage, CMSSiteSettings, Slug } from "@/types";

const emptySiteSettings: CMSSiteSettings = {
  navigation: {
    header: [],
    footer: [],
  },
  seo: {
    defaultTitle: "Ideal Physician Weight Loss",
    defaultDescription:
      "Physician-guided medical weight loss programs tailored to your health goals.",
  },
};

export function mockCMSAdapter(): CMSClient {
  return {
    async getPageBySlug(slug: Slug): Promise<CMSPage | null> {
      void slug;
      return null;
    },

    async getAllPageSlugs(): Promise<Slug[]> {
      return [];
    },

    async getSiteSettings(): Promise<CMSSiteSettings> {
      return emptySiteSettings;
    },
  };
}
