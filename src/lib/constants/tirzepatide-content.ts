import { siteConfig } from "@/config/site";

import type { MedicationLandingContent } from "./medication-landing-types";

const brand = siteConfig.name;

export const tirzepatideContent: MedicationLandingContent = {
  slug: "tirzepatide",
  accent: "violet",
  hero: {
    eyebrow: "Dual-action GLP-1 therapy",
    title: "Physician-guided",
    titleHighlight: "tirzepatide",
    description:
      "Access FDA-approved tirzepatide medications for better appetite control under a physician's supervision.",
    trustSignals: [
      { label: "Dual hormone action", icon: "activity" },
      { label: "FDA-approved options", icon: "badge-check" },
      { label: "Once-weekly dosing", icon: "pill" },
      { label: "Licensed physicians", icon: "stethoscope" },
    ],
    primaryCta: "Start My Evaluation",
    secondaryCta: "Treatment timeline",
    secondaryHref: "#treatment",
    image: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
      alt: "Tirzepatide weight loss medication",
    },
  },
  whatIs: {
    eyebrow: "Overview",
    title: "What is",
    titleHighlight: "tirzepatide?",
    paragraphs: [
      "Tirzepatide is a dual-action medication that activates both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) receptors, two hormones involved in appetite regulation and metabolic health.",
      `At ${brand}, licensed physicians evaluate whether tirzepatide is clinically appropriate for your weight management goals. Prescriptions may include FDA-approved branded medications such as Zepbound® or Mounjaro®, or compounded options when medically appropriate.`,
      "Like all GLP-1 therapies, tirzepatide works best as part of a comprehensive physician-guided program that includes nutrition support, lifestyle guidance, and ongoing medical monitoring.",
    ],
    highlights: [],
  },
  mechanism: {
    eyebrow: "Dual action",
    title: "How tirzepatide's",
    titleHighlight: "dual mechanism works",
    description: "",
    steps: [
      {
        title: "GLP-1 receptor activation",
        text: "Reduces appetite signals in the brain and slows gastric emptying, helping you feel fuller, longer.",
        icon: "pill",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Why patients choose",
    titleHighlight: "tirzepatide",
    items: [
      {
        id: "dual",
        title: "Dual hormone action",
        description: "Activates both GLP-1 and GIP receptors for enhanced appetite control and metabolic support.",
        icon: "activity",
      },
      {
        id: "weight",
        title: "Significant weight reduction",
        description:
          "Clinical trials showed among the highest average body weight loss of any FDA-approved obesity medication studied.",
        icon: "trending-up",
      },
      {
        id: "appetite",
        title: "Powerful appetite control",
        description: "Patients often report substantial reductions in hunger and food preoccupation.",
        icon: "shield",
      },
      {
        id: "weekly",
        title: "Once-weekly convenience",
        description: "A single weekly injection fits easily into your routine with pharmacy-delivered supplies.",
        icon: "pill",
      },
      {
        id: "supervised",
        title: "Physician oversight",
        description: "Licensed doctors evaluate eligibility, prescribe, and monitor your progress throughout treatment.",
        icon: "stethoscope",
      },
      {
        id: "delivery",
        title: "Home pharmacy delivery",
        description: "Prescriptions fulfilled by licensed U.S. pharmacies with discreet shipping in 3 to 5 business days.",
        icon: "truck",
      },
    ],
  },
  eligibility: {
    eyebrow: "Eligibility",
    title: "Who is",
    titleHighlight: "eligible",
    description: "",
    qualifies: ["Patients in states served by our licensed telehealth physicians (50 states)"],
    mayNotQualify: [
      "Certain pancreatic, gallbladder, or kidney conditions, assessed by your physician",
    ],
    note: "",
    cta: "Start My Evaluation",
  },
  expectedResults: {
    eyebrow: "Outcomes",
    title: "Expected weight",
    titleHighlight: "loss",
    description: "",
    stats: [],
    timeline: [
      {
        period: "Weeks 1–4",
        text: "Dose escalation phase. Mild GI side effects are common and usually improve. Contact your healthcare provider for guidance.",
      },
    ],
  },
  treatment: {
    eyebrow: "Timeline",
    title: "Treatment",
    titleHighlight: "timeline",
    steps: [
      {
        title: "Day 1 | Health Questionnaire & Free Care Team Call",
        text: "Complete a brief questionnaire about your health history and weight goals. A care team member will connect with you to better understand your needs and guide you through the next steps.",
        icon: "clipboard-list",
      },
      {
        title: "Same Day | Physician Consultation",
        text: "Meet with a licensed physician via secure telehealth to review your health profile and determine if tirzepatide is clinically appropriate for you.",
        icon: "video",
      },
      {
        title: "If Approved | Prescription Approval & Treatment Plan",
        text: "Your provider approves the prescription and selects Zepbound®, Mounjaro®, or compounded tirzepatide based on your individual needs.",
        icon: "pill",
      },
      {
        title: "3 to 5 Days | Medication Delivery",
        text: "Your prescription is fulfilled through a licensed pharmacy and shipped with injection supplies and instructions.",
        icon: "package",
      },
      {
        title: "Ongoing | Treatment Optimization",
        text: "Receive regular check-ins, dose adjustments, and continued support throughout your weight management journey.",
        icon: "headphones",
      },
    ],
  },
  comparison: {
    eyebrow: "Formulations",
    title: "Tirzepatide",
    titleHighlight: "options",
    products: [
      {
        id: "zepbound",
        name: "Zepbound®",
        subtitle: "Tirzepatide injection",
        image: "/zepbound.webp",
        highlight: "FDA-approved for weight management",
        description:
          "Dual-action medication targeting GLP-1 and GIP receptors, approved for chronic weight management in adults with obesity or overweight.",
      },
      {
        id: "mounjaro",
        name: "Mounjaro®",
        subtitle: "Tirzepatide injection",
        image: "/mounjaro.webp",
        highlight: "FDA-approved for type 2 diabetes",
        description:
          "Contains tirzepatide and may be prescribed for weight management when a licensed provider determines it is clinically appropriate.",
      },
      {
        id: "compounded",
        name: "Compounded tirzepatide",
        subtitle: "Same active ingredient",
        image: "/rybluss.webp",
        highlight: "Physician-prescribed alternative",
        description:
          "Compounded tirzepatide may be available when clinically appropriate and prescribed by your licensed physician.",
      },
    ],
  },
  safety: {
    eyebrow: "Safety",
    title: "Safety",
    titleHighlight: "information",
    items: [
      "Tirzepatide requires a prescription and must be used under ongoing physician supervision.",
      "Your provider conducts a thorough medical evaluation before prescribing and monitors you throughout treatment.",
      "Doses are increased gradually over weeks to improve tolerability and reduce gastrointestinal side effects.",
      "Tirzepatide carries a boxed warning regarding thyroid C-cell tumors observed in animal studies. Discuss your personal and family history with your physician.",
      "Not for use during pregnancy. Tell your doctor about all medications, including insulin or sulfonylureas.",
    ],
    warning:
      "Individual results may vary. All medications carry potential risks. This page is for educational purposes and does not replace professional medical advice.",
  },
  sideEffects: {
    eyebrow: "Side effects",
    title: "Possible",
    titleHighlight: "side effects",
    common: [
      "Nausea",
      "Diarrhea",
      "Vomiting",
      "Constipation",
      "Abdominal pain",
      "Indigestion",
      "Injection site reactions",
    ],
    serious: [
      "Pancreatitis",
      "Gallbladder problems",
      "Kidney injury or worsening kidney disease",
      "Severe allergic reactions",
      "Low blood sugar (especially with insulin or sulfonylureas)",
    ],
    whenToSeekCare:
      "Reach out to your care team for persistent nausea or vomiting. Seek emergency care for severe abdominal pain, difficulty breathing, or signs of a serious allergic reaction.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Tirzepatide",
    titleHighlight: "questions",
    items: [
      {
        id: "tz-faq-1",
        question: "Is tirzepatide covered by insurance?",
        answer: `Insurance coverage varies based on your plan and medical eligibility. A $75 medical evaluation fee applies for the initial assessment. Our team can help you understand your options, and tirzepatide programs start at $399/month, including consultation, medication, and ongoing support.`,
      },
    ],
  },
  cta: {
    title: "Explore",
    titleHighlight: "tirzepatide treatment",
    description:
      "Schedule a consultation with a licensed physician to find out if tirzepatide is right for your weight loss journey.",
    primaryCta: "Start My Evaluation",
    secondaryCta: "Compare semaglutide",
    secondaryHref: "/weight-loss/semaglutide",
  },
};
