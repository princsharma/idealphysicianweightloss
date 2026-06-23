import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const medicalDisclaimerContent = {
  hero: {
    eyebrow: "Medical Disclaimer",
    title: "Clear guidance on",
    titleHighlight: "medical limitations",
    description: `${brand} provides telehealth consultations and related weight management services through licensed healthcare professionals. Please read this disclaimer carefully before using our services.`,
  },
  notice: {
    title: "Important Notice",
    text: "The information on our website is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.",
  },
  intro: `${brand} ("we," "our," or "us") provides telehealth consultations and related weight management services, including evaluations for FDA-approved GLP-1 medications, exclusively through licensed healthcare professionals. The information on our website is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.`,
  cards: [
    {
      id: "licensed-care",
      title: "Licensed Healthcare Only",
      text: `${brand} ("we," "our," or "us") provides telehealth consultations and related weight management services, including evaluations for FDA-approved GLP-1 medications, exclusively through licensed healthcare professionals.`,
    },
    {
      id: "educational",
      title: "Educational Content",
      text: "The information on our website is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.",
    },
    {
      id: "clinical-evaluation",
      title: "Clinical Evaluation",
      text: "During consultations, licensed healthcare providers review your medical history and determine whether a GLP-1 treatment, such as semaglutide, tirzepatide, or liraglutide, is clinically appropriate.",
    },
    {
      id: "results-vary",
      title: "Results & Risks",
      text: "Individual results may vary, and all medications carry potential risks and side effects.",
    },
  ],
  healthcareResponsibility: {
    title: "Your Healthcare Responsibility",
    paragraphs: [
      "The information on our website is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment.",
      "During consultations, licensed healthcare providers review your medical history and determine whether a GLP-1 treatment, such as semaglutide, tirzepatide, or liraglutide, is clinically appropriate.",
    ],
  },
  telehealth: {
    title: "Telehealth Limitations",
    paragraphs: [
      `${brand} ("we," "our," or "us") provides telehealth consultations and related weight management services, including evaluations for FDA-approved GLP-1 medications, exclusively through licensed healthcare professionals.`,
      "Our telehealth services are not intended for emergency care. If you experience a medical emergency, call 911 or contact your local emergency services immediately.",
    ],
  },
  fda: {
    title: "FDA-Approved GLP-1 Medications",
    paragraphs: [
      "During consultations, licensed healthcare providers review your medical history and determine whether a GLP-1 treatment, such as semaglutide, tirzepatide, or liraglutide, is clinically appropriate.",
      `If prescribed, medications are dispensed and shipped by licensed U.S. pharmacies in accordance with applicable state and federal laws. ${brand} coordinates the fulfillment process and provides ongoing support throughout treatment.`,
      "Individual results may vary, and all medications carry potential risks and side effects.",
    ],
  },
  emergency: {
    title: "Emergency Information",
    text: "Our telehealth services are not intended for emergency care. If you experience a medical emergency, call 911 or contact your local emergency services immediately.",
  },
  acknowledgment: {
    text: "By using our services, you acknowledge and agree to this medical disclaimer.",
  },
  cta: {
    title: "Speak with a",
    titleHighlight: "licensed provider",
    description:
      "Have questions about whether GLP-1 treatment is right for you? Schedule a consultation with a licensed healthcare professional.",
    primaryCta: "Schedule Consultation",
    secondaryCta: "Contact Us",
    secondaryHref: "/contact",
  },
} as const;

export type MedicalDisclaimerContent = typeof medicalDisclaimerContent;
