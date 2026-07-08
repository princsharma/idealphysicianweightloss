import { siteConfig } from "@/config/site";

import type { MedicationLandingContent } from "./medication-landing-types";

const brand = siteConfig.name;

export const semaglutideContent: MedicationLandingContent = {
  slug: "semaglutide",
  accent: "teal",
  hero: {
    eyebrow: "GLP-1 therapy",
    title: "Physician-guided",
    titleHighlight: "semaglutide",
    description:
      "FDA-approved semaglutide medications are prescribed by licensed physicians for clinically proven appetite regulation and meaningful weight loss under medical supervision.",
    trustSignals: [
      { label: "FDA-approved options", icon: "badge-check" },
      { label: "Once-weekly dosing", icon: "pill" },
      { label: "Licensed physicians", icon: "stethoscope" },
      { label: "Ships to your door", icon: "truck" },
    ],
    primaryCta: "Start My Evaluation",
    secondaryCta: "Treatment process",
    secondaryHref: "#treatment",
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
      alt: "Semaglutide weight loss medication",
    },
  },
  whatIs: {
    eyebrow: "Overview",
    title: "What is",
    titleHighlight: "semaglutide?",
    paragraphs: ["Ozempic® is often prescribed as an off-label medication for weight loss."],
    highlights: [],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Why patients choose",
    titleHighlight: "semaglutide",
    items: [
      {
        id: "weekly",
        title: "Convenient weekly dosing",
        description:
          "Most semaglutide formulations require just one injection per week. Simple to fit into your routine.",
        icon: "pill",
      },
    ],
  },
  eligibility: {
    eyebrow: "Eligibility",
    title: "Who is",
    titleHighlight: "eligible",
    description: "",
    qualifies: ["Patients in states where our licensed physicians provide telehealth (50 states)"],
    mayNotQualify: ["Certain pancreatic or kidney conditions, determined by your physician"],
    note: "Semaglutide is not suitable for everyone. Your healthcare provider determines your eligibility before prescribing it.",
    cta: "Start My Evaluation",
  },
  expectedResults: {
    eyebrow: "Outcomes",
    title: "Expected",
    titleHighlight: "results",
    description: "",
    stats: [],
    timeline: [
      {
        period: "Weeks 1–4",
        text: "Gradual dose escalation. Possible mild nausea as your body adjusts. Your care team can help manage this.",
      },
    ],
  },
  treatment: {
    eyebrow: "Your care",
    title: "Treatment",
    titleHighlight: "process",
    steps: [
      {
        title: "Health assessment",
        text: "Complete a brief quiz about your health history, medications, and weight loss goals, and connect with a care team so we understand your health goals.",
        icon: "clipboard-list",
      },
      {
        title: "Physician consultation",
        text: "Meet with a licensed doctor via HIPAA-secure telehealth to evaluate if semaglutide is appropriate for you.",
        icon: "video",
      },
      {
        title: "Prescription approval & personalization",
        text: "If clinically approved, your provider selects the appropriate semaglutide formulation and starting dose based on your needs.",
        icon: "pill",
      },
      {
        title: "Pharmacy fulfillment",
        text: "Your approved prescription is dispensed by a licensed pharmacy and delivered discreetly to your home.",
        icon: "package",
      },
      {
        title: "Ongoing monitoring",
        text: "Regular check-ins support dose adjustments, side effect management, and long-term progress.",
        icon: "trending-up",
      },
    ],
  },
  comparison: {
    eyebrow: "Options",
    title: "Semaglutide",
    titleHighlight: "formulations",
    products: [
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide injection",
        image: "/wegovy.webp",
        highlight: "FDA-approved for weight management",
        description:
          "Once-weekly injectable proven to help adults lose significant weight when combined with a reduced-calorie diet and increased physical activity.",
      },
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide injection",
        image: "/ozempic.webp",
        highlight: "FDA-approved for type 2 diabetes",
        description:
          "Contains semaglutide and may be prescribed off-label for weight management when a licensed provider determines it is clinically appropriate.",
      },
      {
        id: "compounded",
        name: "Compounded semaglutide",
        subtitle: "Same active ingredient",
        image: "/rybluss.webp",
        highlight: "Physician-prescribed alternative",
        description:
          "Compounded options with the same active ingredient may be available when clinically appropriate and prescribed by your physician.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Semaglutide",
    titleHighlight: "questions",
    items: [
      {
        id: "sg-faq-1",
        question: "How much does semaglutide treatment cost?",
        answer: `Plans at ${brand} start at $299/month, including physician consultation, medication, and ongoing support. A $75 medical evaluation fee applies for the initial assessment. Pricing may vary based on medication formulation and insurance coverage.`,
      },
    ],
  },
  cta: {
    title: "Ready to explore",
    titleHighlight: "semaglutide?",
    description:
      "Connect with a licensed physician to see if semaglutide is the right fit for your weight loss goals.",
    primaryCta: "Start My Evaluation",
    secondaryCta: "View weight loss program",
    secondaryHref: "/weight-loss",
  },
};
