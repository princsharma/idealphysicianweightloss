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
      "FDA-approved tirzepatide activates GLP-1 and GIP receptors for enhanced appetite control — among the most effective physician-supervised weight loss medications available.",
    trustSignals: [
      { label: "Dual hormone action", icon: "activity" },
      { label: "FDA-approved options", icon: "badge-check" },
      { label: "Once-weekly dosing", icon: "pill" },
      { label: "Licensed physicians", icon: "stethoscope" },
    ],
    primaryCta: "Check eligibility",
    secondaryCta: "Dual-action science",
    secondaryHref: "#mechanism",
    image: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
      alt: "Tirzepatide weight loss medication",
    },
    stat: { value: "20%", label: "Average body weight loss in clinical trials" },
  },
  whatIs: {
    eyebrow: "Overview",
    title: "What is",
    titleHighlight: "tirzepatide?",
    paragraphs: [
      "Tirzepatide is a dual-action medication that activates both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) receptors — two hormones involved in appetite regulation and metabolic health.",
      `At ${brand}, licensed physicians evaluate whether tirzepatide is clinically appropriate for your weight management goals. Prescriptions may include FDA-approved branded medications such as Zepbound® or Mounjaro®, or compounded options when medically appropriate.`,
      "Like all GLP-1 therapies, tirzepatide works best as part of a comprehensive physician-guided program that includes nutrition support, lifestyle guidance, and ongoing medical monitoring.",
    ],
    highlights: [
      "Dual GLP-1 + GIP receptor agonist",
      "Once-weekly injection",
      "Zepbound® approved for chronic weight management",
      "Mounjaro® approved for type 2 diabetes",
    ],
  },
  mechanism: {
    eyebrow: "Dual action",
    title: "How tirzepatide's",
    titleHighlight: "dual mechanism works",
    description:
      "By targeting two key hormone pathways, tirzepatide offers enhanced appetite control and metabolic support compared to single-pathway GLP-1 therapies alone.",
    steps: [
      {
        title: "GLP-1 receptor activation",
        text: "Reduces appetite signals in the brain and slows gastric emptying — helping you feel fuller, longer.",
        icon: "pill",
      },
      {
        title: "GIP receptor activation",
        text: "GIP pathway engagement provides additional metabolic and appetite-regulating effects beyond GLP-1 alone.",
        icon: "activity",
      },
      {
        title: "Enhanced weight loss response",
        text: "Clinical trials demonstrated greater average weight reduction with tirzepatide compared to semaglutide in head-to-head studies.",
        icon: "trending-up",
      },
      {
        title: "Gradual dose titration",
        text: "Your physician increases your dose step-by-step to optimize tolerance and therapeutic effect.",
        icon: "stethoscope",
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
    description:
      "A licensed physician determines whether tirzepatide is appropriate based on your individual health profile, medical history, and treatment goals.",
    qualifies: [
      "Adults with obesity or overweight who may benefit from dual-action GLP-1 therapy",
      "Patients whose BMI and health history support tirzepatide treatment",
      "Individuals without contraindications identified during medical evaluation",
      "Patients in states served by our licensed telehealth physicians (48 states)",
      "Those committed to ongoing physician supervision and lifestyle changes",
    ],
    mayNotQualify: [
      "Personal or family history of medullary thyroid carcinoma or MEN 2",
      "Pregnancy or planning to become pregnant",
      "History of serious allergic reaction to tirzepatide",
      "Certain pancreatic, gallbladder, or kidney conditions — assessed by your physician",
    ],
    note: "Tirzepatide is not appropriate for everyone. Complete our eligibility quiz for a personalized assessment by a licensed provider.",
    cta: "Check eligibility",
  },
  expectedResults: {
    eyebrow: "Outcomes",
    title: "Expected weight",
    titleHighlight: "loss",
    description:
      "Results vary by individual. Your physician establishes realistic goals based on your starting weight, health conditions, and adherence to your care plan.",
    stats: [
      { value: "1–2", label: "Weeks", detail: "Appetite changes often begin early" },
      { value: "20%", label: "Body weight", detail: "Average reduction in SURMOUNT trials (Zepbound®)" },
      { value: "3–6", label: "Months", detail: "Meaningful progress with consistent treatment" },
    ],
    timeline: [
      { period: "Weeks 1–4", text: "Dose escalation phase. Mild GI side effects are common and usually improve — contact your care team for support." },
      { period: "Months 1–3", text: "Substantial appetite reduction and steady weight loss as therapeutic dose is established." },
      { period: "Months 3–6+", text: "Continued results with physician-led dose optimization and comprehensive lifestyle support." },
    ],
  },
  treatment: {
    eyebrow: "Timeline",
    title: "Treatment",
    titleHighlight: "timeline",
    steps: [
      {
        title: "Day 1 — Intake",
        text: "Complete your health questionnaire. Our team reviews your profile and schedules your virtual visit.",
        icon: "clipboard-list",
      },
      {
        title: "Same day — Consultation",
        text: "Licensed physician evaluates your eligibility for tirzepatide via secure telehealth.",
        icon: "video",
      },
      {
        title: "If approved — Prescription",
        text: "Your provider selects Zepbound®, Mounjaro®, or compounded tirzepatide based on your clinical needs.",
        icon: "pill",
      },
      {
        title: "3–5 days — Delivery",
        text: "Medication shipped from a licensed pharmacy with injection supplies and instructions.",
        icon: "package",
      },
      {
        title: "Ongoing — Optimization",
        text: "Monthly check-ins, dose adjustments, and 24/7 support throughout your weight loss journey.",
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
        question: "How is tirzepatide different from semaglutide?",
        answer:
          "Semaglutide activates GLP-1 receptors only. Tirzepatide activates both GLP-1 and GIP receptors, which may produce greater average weight loss in clinical trials. Your physician helps determine which medication is best for you.",
      },
      {
        id: "tz-faq-2",
        question: "What is the difference between Zepbound and Mounjaro?",
        answer:
          "Both contain tirzepatide. Zepbound is FDA-approved for chronic weight management. Mounjaro is FDA-approved for type 2 diabetes. A licensed physician selects the appropriate formulation for your clinical needs.",
      },
      {
        id: "tz-faq-3",
        question: "How much weight can I lose on tirzepatide?",
        answer:
          "In clinical trials, adults using tirzepatide for weight management lost an average of approximately 20% of body weight. Individual results vary based on adherence, starting weight, and medical factors.",
      },
      {
        id: "tz-faq-4",
        question: "How often do I take tirzepatide?",
        answer:
          "Tirzepatide is typically administered as one subcutaneous injection per week. Your physician guides dose escalation and provides instructions with your pharmacy shipment.",
      },
      {
        id: "tz-faq-5",
        question: "Is tirzepatide covered by insurance?",
        answer:
          "Coverage varies by plan and indication. Our team can discuss pricing options — programs start at $299/month including consultation, medication, and support.",
      },
    ],
  },
  cta: {
    title: "Explore",
    titleHighlight: "tirzepatide treatment",
    description:
      "Schedule a consultation with a licensed physician to find out if tirzepatide is right for your weight loss journey.",
    primaryCta: "Get started",
    secondaryCta: "Compare semaglutide",
    secondaryHref: "/semaglutide",
  },
};
