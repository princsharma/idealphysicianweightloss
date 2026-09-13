import { siteConfig } from "@/config/site";
import {
  PROGRAM_CONSULTATION_PRICE,
  PROGRAM_IMPORTANT_INFO,
  PROGRAM_LOWEST_RATE,
  PROGRAM_POPULAR_PLAN,
  PROGRAM_PRICING_DISCLAIMER,
} from "@/lib/constants/program-catalog";

const brand = siteConfig.name;

export const pricingContent = {
  hero: {
    eyebrow: "Transparent pricing",
    title: "Simple plans,",
    titleHighlight: "no surprises",
    description: `Start with a ${PROGRAM_CONSULTATION_PRICE} physician consultation, then choose the plan length that fits. The longer you stay, the lower your monthly rate.`,
    trustSignals: [
      { label: `Consultation at ${PROGRAM_CONSULTATION_PRICE}`, icon: "receipt" as const },
      { label: "No insurance required", icon: "shield" as const },
      { label: "Cancel anytime", icon: "badge-check" as const },
    ],
  },
  overview: {
    eyebrow: "Overview",
    title: "What you",
    titleHighlight: "pay for",
    description: `${brand} is the merchant of record for all charges. Rates combine medication and ongoing care fees for illustration — what you actually pay depends on the treatment prescribed, your dosage, and the plan you choose.`,
    highlights: [
      "Licensed physician evaluation and ongoing consultations",
      "GLP-1 medication when clinically prescribed",
      "Pharmacy coordination and discreet home delivery",
      "24/7 patient support and dose adjustments",
    ],
  },
  included: {
    eyebrow: "Included",
    title: "What's",
    titleHighlight: "included",
    items: [
      {
        id: "consult",
        title: "Physician consultations",
        description: "Same-day virtual visits with board-certified doctors who create and monitor your treatment plan.",
        icon: "stethoscope" as const,
      },
      {
        id: "meds",
        title: "GLP-1 medication",
        description:
          "FDA-approved semaglutide or tirzepatide options, prescribed off-label where clinically appropriate, or compounded formulations that are not FDA-approved.",
        icon: "pill" as const,
      },
      {
        id: "delivery",
        title: "Pharmacy delivery",
        description: "Medication shipped discreetly to your door in 3 to 5 business days with dosing instructions.",
        icon: "truck" as const,
      },
      {
        id: "support",
        title: "Ongoing support",
        description: "24/7 access to your care team for questions, side effect management, and dose adjustments.",
        icon: "headphones" as const,
      },
      {
        id: "monitoring",
        title: "Health monitoring",
        description: "Regular check-ins to track progress and ensure safe, effective treatment.",
        icon: "activity" as const,
      },
      {
        id: "transparent",
        title: "Transparent billing",
        description: `${brand} handles all billing inquiries. Pharmacy partners do not bill patients directly.`,
        icon: "receipt" as const,
      },
    ],
  },
  plans: {
    eyebrow: "Plans",
    title: "Choose a plan",
    titleHighlight: "that fits",
    description:
      "Start with a one-time consultation, or commit to a longer plan and your monthly rate drops automatically. No codes to ask for.",
    trackLabel: "Rates depend on the medication prescribed",
    disclaimer: PROGRAM_PRICING_DISCLAIMER,
  },
  medications: {
    eyebrow: "Medications",
    title: "Important",
    titleHighlight: "information",
    description: "Read this before you choose a plan.",
    items: [
      ...PROGRAM_IMPORTANT_INFO,
      `${brand} does not enroll patients in automatic subscription programs unless explicitly stated at the time of purchase.`,
      "Once dispensed or shipped, medication charges are non-refundable except where required by law.",
    ],
  },
  consultation: {
    eyebrow: "Consultations",
    title: "Consultation",
    titleHighlight: "details",
    items: [
      {
        title: "Telehealth consultation fees",
        text: "Fees reflect the time, preparation, and professional expertise of licensed healthcare providers, as well as access to our secure telehealth platform.",
      },
      {
        title: "Refund policy",
        text: "If a consultation has not yet taken place, patients may request a cancellation or refund. Once completed, consultation fees are non-refundable as the medical service has been rendered.",
      },
      {
        title: "Cancellation",
        text: `Patients may cancel or reschedule by notifying ${brand} at least 24 hours prior to the scheduled appointment time.`,
      },
      {
        title: "Billing errors",
        text: "Approved refunds are typically processed within 3–5 business days. Contact our support team for billing inquiries.",
      },
    ],
    refundHref: "/refund",
  },
  monthlyProcess: {
    eyebrow: "Billing cycle",
    title: "Monthly",
    titleHighlight: "process",
    steps: [
      {
        title: "Month 1 — Evaluation & start",
        text: "Complete your consultation, receive your prescription, and begin treatment with your first medication shipment.",
      },
      {
        title: "Ongoing months — Care & refills",
        text: "Monthly plan includes continued physician access, medication refills, and dose adjustments as needed.",
      },
      {
        title: "Transparent renewal",
        text: "No automatic subscriptions unless explicitly stated at purchase. You control your care plan with clear monthly billing.",
      },
      {
        title: "Refund requests",
        text: "Contact support for eligible refunds. Medication orders can only be modified before transmission to the pharmacy.",
      },
    ],
  },
  insurance: {
    eyebrow: "Insurance",
    title: "Insurance &",
    titleHighlight: "payment options",
    description: "Coverage varies by plan and state. We're committed to transparent pricing regardless of your payment method.",
    items: [
      "Coverage varies by plan and state. Our team can help you understand options during your evaluation.",
      "Many patients use HSA/FSA funds for eligible medical weight loss expenses.",
      "Some manufacturers offer patient assistance programs — inquire during your consultation.",
      `${brand} is the merchant of record. Contact support before initiating a chargeback with your financial institution.`,
    ],
    note: `We do not guarantee insurance reimbursement. No insurance is required — self-pay plans run as low as ${PROGRAM_LOWEST_RATE}/month on the longest term.`,
  },
  faq: {
    eyebrow: "Pricing FAQ",
    title: "Billing",
    titleHighlight: "questions",
    items: [
      {
        id: "pr-faq-1",
        question: "How much does the program cost?",
        answer: `Your initial physician consultation is ${PROGRAM_CONSULTATION_PRICE}. Ongoing plans range from ${PROGRAM_POPULAR_PLAN.prices.semaglutide}/month on our most popular 3-month plan down to ${PROGRAM_LOWEST_RATE}/month on the 12-month plan, depending on the medication prescribed and the plan length you choose.`,
      },
      {
        id: "pr-faq-2",
        question: `Is the ${PROGRAM_CONSULTATION_PRICE} fee for the medication?`,
        answer: `No. The ${PROGRAM_CONSULTATION_PRICE} fee covers your initial clinical evaluation. Medication is separate and is only prescribed when clinically appropriate. What you pay for medication depends on the treatment prescribed, dosage, pharmacy, and any applicable coverage.`,
      },
      {
        id: "pr-faq-3",
        question: "Can I get a refund?",
        answer:
          "Consultation refunds are available if your visit has not yet taken place. Medication refunds are limited once prescriptions are transmitted to the pharmacy. See our refund policy for details.",
      },
      {
        id: "pr-faq-4",
        question: "Do you accept insurance?",
        answer:
          "Coverage varies by plan and state. Our team can help you understand options during your evaluation — many patients use HSA/FSA or transparent self-pay pricing.",
      },
    ],
    viewAllHref: "/weight-loss/faq",
    viewAllLabel: "View all FAQs",
  },
  cta: {
    title: "Talk with a physician for",
    titleHighlight: PROGRAM_CONSULTATION_PRICE,
    description:
      "Understand your treatment options before deciding whether to continue. A prescription is never guaranteed.",
    primaryCta: "Get started",
    secondaryCta: "View how it works",
    secondaryHref: "/weight-loss/how-it-works",
  },
} as const;
