export const siteConfig = {
  name: "Ideal Physician Weight Loss",
  logo: "/logo.webp",
  description:
    "Physician-guided medical weight loss programs tailored to your health goals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  bookingUrl:
    "https://ongoweightloss.com/weightloss-onboard/",
  locale: "en-US",
  contact: {
    phone: "(888) 315-1715",
    email: "care@idealphysicianweightloss.com",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
