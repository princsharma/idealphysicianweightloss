import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;

export const privacyContent = {
  lastUpdated: "June 22, 2024",
  hero: {
    title: "Privacy Policy",
    intro: `At ${brand}, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.`,
  },
  sections: [
    {
      id: "information-we-collect",
      number: 1,
      title: "Information We Collect",
      blocks: [
        {
          type: "list" as const,
          items: [
            "Personal Information: Name, date of birth, contact details (email, phone, address).",
            "Health Information: Details you provide during your consultation related to weight management and GLP-1 treatments.",
            "Payment Information: Billing details necessary to process consultation fees (handled via our payment processors).",
            "Technical Information: IP address, device and browser type, pages visited, and usage data collected via cookies or similar technologies.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      number: 2,
      title: "How We Use Your Information",
      blocks: [
        {
          type: "list" as const,
          items: [
            "Provide and manage online medical consultations.",
            "Connect you with licensed partner dispensaries if a prescription is issued.",
            `${brand} processes payments for telehealth consultation services and, when medically approved, prescription medications that are dispensed and delivered by licensed partner pharmacies.`,
            "Communicate with you about appointments, support, and service updates.",
            "Maintain, secure, and improve our website and user experience.",
          ],
        },
      ],
    },
    {
      id: "sharing-of-information",
      number: 3,
      title: "Sharing of Information",
      blocks: [
        {
          type: "paragraph" as const,
          text: "We do not sell, rent, or trade personal information. Information may be shared only as described below:",
        },
        {
          type: "callout" as const,
          variant: "info" as const,
          title: "We do not sell medications",
          text: `${brand} does not sell medications. Prescription medications are dispensed and delivered by licensed partner pharmacies in accordance with applicable laws and regulations.`,
        },
        {
          type: "list" as const,
          items: [
            "Licensed Providers & Partner Dispensaries: To facilitate patient care and, where applicable, prescription fulfillment.",
            "Service Providers: Trusted vendors (e.g., payment processors, secure hosting providers, IT support) that process information on behalf of " +
              `${brand} under strict confidentiality obligations.`,
            "Legal Requirements: When required to comply with applicable law, regulation, legal process, or governmental request.",
          ],
        },
      ],
    },
    {
      id: "data-security",
      number: 4,
      title: "Data Security",
      blocks: [
        {
          type: "paragraph" as const,
          text: "We implement appropriate technical and organizational measures to safeguard your personal and health information (e.g., encryption in transit, access controls).",
        },
        {
          type: "callout" as const,
          variant: "notice" as const,
          text: "However, no method of transmission or storage is 100% secure.",
        },
      ],
    },
    {
      id: "your-rights",
      number: 5,
      title: "Your Rights",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Depending on your location, you may have rights to:",
        },
        {
          type: "list" as const,
          items: [
            "Access and obtain a copy of your personal information.",
            "Request corrections to inaccurate or incomplete information.",
            "Request deletion of your data where legally permissible.",
            "Object to or restrict certain processing, and withdraw consent where processing is based on consent.",
          ],
        },
        {
          type: "callout" as const,
          variant: "contact" as const,
          text: `To exercise your rights, contact us at ${email}.`,
        },
      ],
    },
    {
      id: "cookies",
      number: 6,
      title: "Cookies & Tracking Technologies",
      blocks: [
        {
          type: "paragraph" as const,
          text: "We use cookies and similar technologies to operate and improve our site, analyze usage, and remember your preferences. You can control cookies through your browser settings; disabling cookies may affect site functionality.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: 7,
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Our website may contain links to third-party sites (including partner dispensaries). Their privacy practices are governed by their own policies. We encourage you to review those policies before providing personal information.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: 8,
      title: "Children's Privacy",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Our services are intended for adults. We do not knowingly collect personal information from children under the age of 18.",
        },
        {
          type: "callout" as const,
          variant: "notice" as const,
          text: "If you believe a minor has provided us information, please contact us to request deletion.",
        },
      ],
    },
    {
      id: "international-transfers",
      number: 9,
      title: "International Transfers",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Your information may be processed in countries other than your own. Where required, we implement safeguards to protect your data when transferred internationally.",
        },
      ],
    },
    {
      id: "changes",
      number: 10,
      title: "Changes to This Policy",
      blocks: [
        {
          type: "paragraph" as const,
          text: "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes signifies acceptance of the updated Policy.",
        },
      ],
    },
    {
      id: "contact-us",
      number: 11,
      title: "Contact Us",
      blocks: [
        {
          type: "contact" as const,
          organization: brand,
          email,
          phone,
        },
      ],
    },
  ],
} as const;

export type PrivacyContent = typeof privacyContent;
export type PrivacySection = (typeof privacyContent.sections)[number];
export type PrivacyBlock = PrivacySection["blocks"][number];
