import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const howItWorksContent = {
  hero: {
    eyebrow: "Your journey",
    title: "How",
    titleHighlight: "it works",
    description:
      "From your first health quiz to ongoing physician support — a clear, transparent path to physician-guided weight loss without waiting rooms or guesswork.",
    primaryCta: "Start evaluation",
    secondaryCta: "View pricing",
    secondaryHref: "/pricing",
  },
  overview: {
    eyebrow: "Simple start",
    title: "Three steps to",
    titleHighlight: "get started",
    description: "We've streamlined the process so you can focus on your health, not paperwork.",
    steps: [
      {
        id: "schedule",
        title: "Schedule your visit",
        description:
          "A member of our care team connects with you to understand your health goals and medication preferences, including FDA-approved options and, when appropriate, compounded medications.",
        icon: "clipboard-list" as const,
      },
      {
        id: "consult",
        title: "Connect with a licensed doctor",
        description:
          "Speak with a licensed clinician who evaluates key factors like BMI, medical history, and health goals through a secure video or audio consultation.",
        icon: "video" as const,
      },
      {
        id: "prescribe",
        title: "Receive care if appropriate",
        description:
          "If clinically appropriate, your provider issues a prescription based on your personalized plan and guides you on next steps, including pharmacy options or home delivery coordination.",
        icon: "package" as const,
      },
    ],
  },
  timeline: {
    eyebrow: "Full journey",
    title: "Step-by-step",
    titleHighlight: "timeline",
    phases: [
      {
        phase: "Step 1",
        title: "Take the eligibility quiz",
        text: "Answer a few quick questions about your health history, current medications, and weight loss goals. Takes about 5 minutes.",
      },
      {
        phase: "Step 2",
        title: "Same-day physician review",
        text: "A licensed physician reviews your responses and schedules your virtual consultation at a time that works for you.",
      },
      {
        phase: "Step 3",
        title: "Secure telehealth consultation",
        text: "Meet with your doctor via HIPAA-secure video or audio. They evaluate your full health picture and discuss treatment options.",
      },
      {
        phase: "Step 4",
        title: "Personalized treatment plan",
        text: "If GLP-1 therapy is appropriate, your provider creates a tailored plan including medication selection, dosing, and lifestyle guidance.",
      },
      {
        phase: "Step 5",
        title: "Prescription & pharmacy coordination",
        text: `${brand} coordinates with a licensed U.S. pharmacy to fulfill your prescription — you never deal with the pharmacy directly for billing.`,
      },
      {
        phase: "Step 6",
        title: "Home delivery",
        text: "Your medication arrives discreetly at your doorstep in 3 to 5 business days with dosing instructions and a medication user guide.",
      },
      {
        phase: "Ongoing",
        title: "Track, adjust & succeed",
        text: "Regular check-ins, dose adjustments, and 24/7 access to your care team throughout your weight loss journey.",
      },
    ],
  },
  medicalEvaluation: {
    eyebrow: "Clinical care",
    title: "Medical",
    titleHighlight: "evaluation",
    description:
      "Every patient receives a thorough evaluation by a licensed physician before any treatment is recommended.",
    items: [
      "Licensed healthcare providers review your complete medical history and current medications.",
      "BMI, health goals, and weight-related conditions are evaluated against clinical guidelines.",
      "Your provider determines whether GLP-1 therapy — such as semaglutide or tirzepatide — is clinically appropriate.",
      "Telehealth consultations are conducted through HIPAA-secure platforms in accordance with state and federal regulations.",
      "Our telehealth services are not intended for emergency care — call 911 for medical emergencies.",
    ],
  },
  prescription: {
    eyebrow: "Prescribing",
    title: "Prescription",
    titleHighlight: "process",
    steps: [
      {
        title: "Clinical determination",
        text: `${brand} facilitates access to prescription medications only when a licensed healthcare provider determines that medication is medically appropriate.`,
      },
      {
        title: "Separate billing",
        text: `Fees charged for prescription medications are separate from consultation fees and may be billed by ${brand} on behalf of the patient when medically appropriate.`,
      },
      {
        title: "Pharmacy fulfillment",
        text: "Prescriptions are fulfilled by independent, state-licensed pharmacies responsible for dispensing and shipping medications.",
      },
      {
        title: "Modification window",
        text: "Medication orders may be canceled or modified only before the prescription has been transmitted to the pharmacy for fulfillment.",
      },
    ],
  },
  delivery: {
    eyebrow: "Fulfillment",
    title: "Medication",
    titleHighlight: "delivery",
    description:
      "Once approved, we send your prescription to a licensed U.S. pharmacy. Your FDA-approved GLP-1 medications are shipped to your doorstep.",
    checklist: [
      "Secure, pharmacy-managed delivery of medications",
      "Discreet packaging with clear dosing instructions",
      "Inclusive of GLP-1 medication user guide",
      "Delivery typically within 3 to 5 business days",
      `${brand} coordinates with the pharmacy — contact us for any shipping concerns`,
    ],
    image: {
      src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
      alt: "Medication delivery to your doorstep",
    },
  },
  ongoingSupport: {
    eyebrow: "Support",
    title: "Ongoing",
    titleHighlight: "support",
    items: [
      {
        title: "24/7 patient support",
        description: `The ${brand} team is available around the clock to offer responsive support to our patients.`,
        icon: "headphones" as const,
      },
      {
        title: "Dedicated care team",
        description: "Access to nurses, dietitians, and support staff whenever you need guidance.",
        icon: "users" as const,
      },
      {
        title: "Dosage adjustments",
        description: "Your physician can adjust your dose based on clinical response and side effect tolerance.",
        icon: "activity" as const,
      },
      {
        title: "Lifestyle guidance",
        description: "Nutrition and exercise recommendations tailored to complement your medication plan.",
        icon: "trending-up" as const,
      },
    ],
  },
  followUp: {
    eyebrow: "Long-term care",
    title: "Follow-up",
    titleHighlight: "care",
    description: "Weight loss is a journey, not a one-time event. We stay with you every step of the way.",
    items: [
      "Regular virtual check-ins to monitor progress and adjust your treatment plan.",
      "Side effect management — your care team helps address common issues like nausea.",
      "Ongoing health monitoring to ensure safe, effective progress over months and years.",
      "Evidence-based treatment plans designed to support safe, sustainable weight loss.",
      "Post-treatment support to help you maintain results with healthy lifestyle habits.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common",
    titleHighlight: "questions",
    items: [
      {
        id: "hiw-faq-1",
        question: "How long does the entire process take?",
        answer:
          "Most patients complete their eligibility quiz and consultation within the same day. Medication typically arrives within 3 to 5 business days after prescription approval.",
      },
      {
        id: "hiw-faq-2",
        question: "Do I need to visit a clinic in person?",
        answer:
          "No. All consultations are conducted via HIPAA-secure telehealth. You can complete the entire process from home.",
      },
      {
        id: "hiw-faq-3",
        question: "What happens if I'm not approved for treatment?",
        answer:
          "Your physician will discuss alternative options and recommendations. There is no obligation to continue if treatment is not clinically appropriate for you.",
      },
    ],
    viewAllHref: "/faq",
    viewAllLabel: "View all FAQs",
  },
  cta: {
    title: "Ready to",
    titleHighlight: "begin?",
    description: "Take the first step toward physician-guided weight loss — it only takes a few minutes.",
    primaryCta: "Start my evaluation",
    secondaryCta: "Contact support",
    secondaryHref: "/contact",
  },
} as const;
