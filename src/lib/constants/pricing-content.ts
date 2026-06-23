import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const pricingContent = {
  hero: {
    eyebrow: "Transparent pricing",
    title: "Simple plans,",
    titleHighlight: "no surprises",
    description:
      "Clear monthly pricing with physician consultation, medication, and ongoing support included. No hidden fees or long-term contracts.",
    trustSignals: [
      { label: "From $299/month", icon: "receipt" as const },
      { label: "No hidden fees", icon: "shield" as const },
      { label: "Cancel anytime", icon: "badge-check" as const },
    ],
  },
  overview: {
    eyebrow: "Overview",
    title: "What you",
    titleHighlight: "pay for",
    description: `${brand} is the merchant of record for all charges. Your plan includes everything needed for physician-guided GLP-1 weight loss — not just medication.`,
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
        description: "FDA-approved semaglutide or tirzepatide options, or compounded alternatives when clinically appropriate.",
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
    title: "Compare",
    titleHighlight: "plans",
    description: "Choose the path that's right for you. Upgrade to a complete care plan anytime after your consultation.",
    items: [
      {
        id: "complete",
        name: "Complete care plan",
        price: "$299",
        period: "/month",
        description: "Everything you need for physician-guided GLP-1 weight loss.",
        features: [
          "Licensed physician evaluation",
          "GLP-1 medication included",
          "Ongoing dosage adjustments",
          "24/7 care team access",
          "Discreet pharmacy delivery",
          "No long-term contract",
        ],
        highlighted: true,
        cta: "Get started",
      },
      {
        id: "consult",
        name: "Free consultation",
        price: "$0",
        period: " initial visit",
        description: "Explore your options with no obligation.",
        features: [
          "Same-day telehealth visit",
          "Personalized health assessment",
          "Treatment plan recommendation",
          "No commitment required",
        ],
        highlighted: false,
        cta: "Book free visit",
      },
    ],
    disclaimer:
      "Pricing may vary based on medication selection, dosage, and geographic location. A licensed provider determines the most appropriate treatment for your individual needs.",
  },
  medications: {
    eyebrow: "Medications",
    title: "Medication",
    titleHighlight: "pricing notes",
    description: "Medication fees are separate from consultation fees and may be billed on your behalf when medically appropriate.",
    items: [
      "Fees charged for prescription medications are separate from consultation fees.",
      `${brand} does not enroll patients in automatic subscription programs unless explicitly stated at the time of purchase.`,
      "Compounded GLP-1 options may offer cost-effective alternatives with the same active ingredients under physician supervision.",
      "Branded medications (Wegovy®, Ozempic®, Zepbound®, Mounjaro®) pricing varies — your physician helps select the best option.",
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
    note: "We do not guarantee insurance reimbursement. Self-pay plans start at $299/month with no hidden fees.",
  },
  faq: {
    eyebrow: "Pricing FAQ",
    title: "Billing",
    titleHighlight: "questions",
    items: [
      {
        id: "pr-faq-1",
        question: "How much does the program cost?",
        answer:
          "Plans start at $299/month, which includes your physician consultation, medication, and ongoing support. There are no hidden fees or long-term contracts.",
      },
      {
        id: "pr-faq-2",
        question: "Are there any additional costs?",
        answer:
          "In addition to your monthly plan, there may be costs related to consultations and any required medical tests. Medication pricing varies by formulation.",
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
    viewAllHref: "/faq",
    viewAllLabel: "View all FAQs",
  },
  cta: {
    title: "Start for",
    titleHighlight: "$299/month",
    description: "Physician consultation, GLP-1 medication, and ongoing support — all in one transparent plan.",
    primaryCta: "Get started",
    secondaryCta: "View how it works",
    secondaryHref: "/how-it-works",
  },
} as const;
