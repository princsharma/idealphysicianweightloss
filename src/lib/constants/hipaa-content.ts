import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;

export const hipaaContent = {
  lastUpdated: "June 22, 2024",
  hero: {
    eyebrow: "Privacy & Security",
    title: "HIPAA Notice of",
    titleHighlight: "Privacy Practices",
    description: `At ${brand}, your trust matters. The health information you share with us is handled with strict care and protection. This notice explains how we safeguard your medical data, how it may be used or disclosed, and the rights you have regarding your personal health information under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) laws.`,
  },
  commitment: {
    title: "Our Commitment to You",
    text: `At ${brand}, we protect your health information with care and transparency. This notice explains how your protected health information (PHI) may be handled and the rights you have over it. "We" refers to ${brand} and our licensed healthcare partners. By law, we safeguard your PHI, follow the practices outlined here, and inform you if any unauthorized access occurs.`,
  },
  promise: {
    title: "Our Promise to Protect Your Health Information",
    text: `Your health information is personal, and we treat it that way. At ${brand}, we safeguard every detail you share with us. We maintain records of the care and services you receive so we can support your treatment and meet all legal and regulatory standards. This notice explains how your medical information may be used or shared, the circumstances in which disclosures may occur, and the rights you have in managing your own health information.`,
  },
  informationUsage: {
    title: "How We May Use and Share Your Health Information",
    items: [
      {
        id: "treatment",
        title: "For Treatment",
        text: "We may use your health information to support your care and guide your treatment plan. This can include sharing details with our medical team, who are involved in delivering your care.",
      },
      {
        id: "payment",
        title: "For Payment",
        text: "We may use or share your information to process billing for the services you receive. This may involve communicating with you, your insurance provider, or an authorized third party to arrange payment.",
      },
      {
        id: "operations",
        title: "Health Care Operations",
        text: "We may use your information to help manage and improve our services. These activities allow us to operate effectively as a healthcare provider and ensure you receive safe, high-quality care.",
      },
      {
        id: "associates",
        title: "For Business Associates",
        text: "We may share limited health information with trusted partners who help us deliver services. These partners are required to protect your information and use it only for the tasks they perform on our behalf.",
      },
    ],
  },
  disclosures: {
    title: "Other Permitted Uses and Disclosures",
    text: "We may also use or share your information in specific situations, such as for appointment reminders, approved research activities, legal requirements, public health reporting, oversight reviews, legal proceedings, and certain law enforcement requests.",
  },
  patientRights: {
    title: "Your Rights Regarding Your Health Information",
    items: [
      {
        id: "inspect",
        title: "Right to Inspect and Receive Copies",
        text: "You may review or request a copy of the medical information we use to support your care and treatment decisions.",
      },
      {
        id: "amend",
        title: "Right to Request an Amendment",
        text: "If you believe any information in your record is inaccurate or incomplete, you may ask us to correct or update it.",
      },
      {
        id: "accounting",
        title: "Right to an Accounting of Disclosures",
        text: "You may request a list of when and why we have shared your medical information, except for disclosures related to treatment, payment, or healthcare operations.",
      },
      {
        id: "restrictions",
        title: "Right to Request Restrictions",
        text: "You may ask us to limit how your information is used or shared for treatment, billing, or healthcare operations. While we may not always be able to agree, we will consider every request.",
      },
      {
        id: "communications",
        title: "Right to Confidential Communications",
        text: "You may request that we contact you in a specific way, such as at a certain phone number, email address, or mailing address for added privacy.",
      },
      {
        id: "copy",
        title: "Right to a Copy of This Notice",
        text: "You may request a paper or digital copy of this notice at any time, even if you previously agreed to receive it electronically.",
      },
    ],
  },
  responsibilities: {
    title: "Our Responsibilities",
    intro: "We are legally required to:",
    items: [
      "Protect the privacy of your identifiable health information, except in situations allowed by law.",
      "Provide you with this notice outlining our privacy practices and obligations.",
      "Follow the terms of the notice that is in effect at the time.",
      "Inform you if we cannot accept a restriction you request regarding your information.",
      "Notify you promptly if a breach occurs that compromises your unsecured protected health information.",
    ],
  },
  complaints: {
    title: "Complaint Process",
    paragraphs: [
      "You may file a complaint if you believe your rights have been violated. We will not retaliate against you.",
      "You may also file a complaint with the U.S. Department of Health and Human Services.",
      `To exercise your rights or submit a complaint, contact us at ${email}.`,
    ],
    hhsNote:
      "For complaints to the U.S. Department of Health and Human Services, visit the HHS Office for Civil Rights.",
    hhsUrl: "https://www.hhs.gov/hipaa/filing-a-complaint/index.html",
  },
  contact: {
    title: "Contact Information",
    organization: brand,
    email,
    phone,
    rightsNote: `To exercise your HIPAA rights, contact us at ${email}.`,
  },
} as const;

export type HipaaContent = typeof hipaaContent;
