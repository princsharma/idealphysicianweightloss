import { siteConfig } from "@/config/site";
import { PROGRAM_CONSULTATION_PRICE, PROGRAM_PHYSICIANS } from "@/lib/constants/program-catalog";

const brand = siteConfig.name;

type ImageSlot = { src: string | null; alt: string; label: string };

/**
 * Artwork for sections below the roster. Drop files in `public/images/physicians`
 * and set `src` — the labelled placeholder is replaced automatically.
 */
export const physiciansImages = {
  conditions: {
    src: null,
    alt: "A care notebook, reading glasses, and morning light on a desk",
    label: "Personalized care",
  },
  review: {
    src: null,
    alt: "A clinician reviewing a patient chart before a visit",
    label: "Review process",
  },
  coverage: {
    src: null,
    alt: "Licensed physician coverage across the United States",
    label: "State coverage",
  },
  cta: {
    src: null,
    alt: "An open path through green leaves",
    label: "Begin care",
  },
} satisfies Record<string, ImageSlot>;

export const physiciansContent = {
  hero: {
    eyebrow: "Medical team",
    title: "Expert doctors guiding your",
    titleHighlight: "GLP-1 journey",
    description:
      "Our physicians deliver personalized GLP-1 consultations online, providing professional guidance, empathetic care, and convenient virtual support to help you safely manage your weight.",
    cta: "Talk to your doctor",
    secondaryCta: "Meet the team",
    secondaryHref: "#providers",
  },
  providers: {
    eyebrow: "The roster",
    title: "Meet the expertise behind your care",
    subtitle:
      "We have a team of licensed doctors who specialize in weight management and metabolic health.",
    members: PROGRAM_PHYSICIANS,
  },
  conditions: {
    eyebrow: "Conditions",
    title: "Personalized care for every condition",
    items: [
      {
        title: "Obesity and overweight",
        text: "We support your weight-loss journey with personalized treatment plans designed to fit your lifestyle and health goals.",
      },
      {
        title: "Type 2 diabetes",
        text: "Our doctors help you manage blood sugar safely, improve energy, and reduce your risk of long-term complications.",
      },
      {
        title: "Metabolic dysfunction",
        text: "Our team focuses on restoring healthy metabolism so your body can use energy more efficiently and feel balanced again.",
      },
      {
        title: "Prediabetes",
        text: "Early care makes a big difference. Our specialists help you take proactive steps to prevent diabetes before it develops.",
      },
      {
        title: "Cardiometabolic health",
        text: "We help improve heart and metabolic wellness through personalized nutrition, exercise, and medical guidance.",
      },
      {
        title: "Appetite and craving regulation",
        text: "Our evidence-based strategies help you understand and manage hunger cravings for better control and sustainable results.",
      },
    ],
  },
  reviewProcess: {
    eyebrow: "Process",
    title: "Medical review process",
    steps: [
      "Licensed healthcare professionals review medical content for safety and accuracy.",
      "Each patient receives an individualized medical evaluation before any prescription.",
      "GLP-1 prescriptions are issued only after a complete medical evaluation, in compliance with FDA regulations.",
      "Ongoing support and dose adjustments are provided based on clinical response.",
    ],
  },
  compliance: {
    eyebrow: "Safety",
    title: "Compliance & patient safety",
    text: `All ${brand} consultations are conducted by licensed U.S. physicians through HIPAA-secure telehealth platforms. GLP-1 prescriptions are issued only after a complete medical evaluation, in compliance with FDA regulations.`,
    closing:
      "With safety and ethics at the heart of everything we do, we're here to help you take the next confident step in your weight loss journey.",
  },
  states: {
    eyebrow: "Coverage",
    title: "State coverage",
    stat: { value: "48", label: "States with licensed physician coverage" },
    text: "State-certified doctors assess your needs and may prescribe FDA-approved medications when clinically appropriate.",
  },
  commitment: {
    eyebrow: "Commitment",
    title: "Patient commitment",
    items: [
      "Evidence-based GLP-1 guidance tailored to each patient's health.",
      "HIPAA-secure telehealth consultations with licensed U.S. physicians.",
      "Prescriptions provided only when medically appropriate after clinical evaluation.",
      "Clear and continuous support throughout your weight loss journey.",
    ],
  },
  cta: {
    title: "Your trusted partner in achieving",
    titleHighlight: "weight loss goals",
    description: `Talk with a licensed physician for ${PROGRAM_CONSULTATION_PRICE}. There is no pressure and no obligation to start treatment.`,
    primaryCta: "Schedule consultation",
    secondaryCta: "View compliance hub",
    secondaryHref: "/compliance",
  },
} as const;
