import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

type ImageSlot = { src: string | null; alt: string; label: string };

export const howItWorksImages = {
  hero: {
    src: "/images/how-it-works/opening banner.webp",
    alt: "Soft morning light on a quiet room — the moment someone decides to start",
    label: "Opening banner",
  },
  arrive: {
    src: "/images/how-it-works/You arrive.webp",
    alt: "Someone beginning the health evaluation at home",
    label: "Arrive on the platform",
  },
  consult: {
    src: "/images/how-it-works/consult with doctor.webp",
    alt: "A calm telehealth conversation with a licensed physician",
    label: "Meet your doctor",
  },
  plan: {
    src: "/images/how-it-works/plan.webp",
    alt: "A personalized GLP-1 care plan on a physician's desk",
    label: "Your treatment plan",
  },
  delivery: {
    src: "/images/how-it-works/delivery.webp",
    alt: "A discreet medication package at the front door",
    label: "Medication arrives",
  },
  ongoing: {
    src: "/images/how-it-works/ongoing.webp",
    alt: "A quiet kitchen in morning light — life continuing with support",
    label: "Ongoing care",
  },
  cta: {
    src: "/images/how-it-works/hiw-cta.webp",
    alt: "An open path through green leaves",
    label: "Begin",
  },
  clinical: {
    src: "/images/how-it-works/Clinical.webp",
    alt: "Physician reviewing a patient chart",
    label: "Clinical care",
  },
} satisfies Record<string, ImageSlot>;

export const howItWorksContent = {
  hero: {
    kicker: "The journey",
    title: "You don't start with a waiting room.",
    titleHighlight: "You start with a conversation.",
    lede: "This is the path — from the moment you arrive on our platform to the day a licensed physician meets you, a plan is written, and care keeps going.",
    primaryCta: "Begin my story",
    secondaryCta: "See pricing",
    secondaryHref: "/weight-loss/pricing",
    scrollHint: "Scroll to walk through it",
  },
  chapters: [
    {
      id: "arrive",
      number: "01",
      kicker: "You arrive",
      title: "You come to the platform.",
      titleHighlight: "We start by listening.",
      body: "A short health quiz. About five minutes. You share medical history, current medications, and what you want from care. A member of our team connects with you to understand your goals — including FDA-approved options and, when appropriate, compounded medications.",
      notes: [
        "No clinic visit. No waiting room.",
        "HIPAA-secure from the first question.",
      ],
      image: "arrive",
      theme: "light" as const,
      mediaSide: "right" as const,
    },
    {
      id: "consult",
      number: "02",
      kicker: "You meet a doctor",
      title: "Then you sit with a licensed physician.",
      titleHighlight: "Same day, if you're ready.",
      body: "A licensed clinician reviews your responses and meets you over HIPAA-secure video or audio. They evaluate BMI, medical history, and health goals — and they decide, with you, whether physician-guided GLP-1 care is appropriate.",
      notes: [
        "Secure telehealth in accordance with state and federal rules.",
        "Not for emergencies — call 911 if you need urgent care.",
      ],
      image: "consult",
      theme: "dark" as const,
      mediaSide: "left" as const,
    },
    {
      id: "plan",
      number: "03",
      kicker: "A plan, if it's right",
      title: "Treatment is never automatic.",
      titleHighlight: "It is prescribed only when it belongs.",
      body: `If GLP-1 therapy is clinically appropriate, your provider writes a tailored plan — medication selection, dosing, and lifestyle guidance. ${brand} facilitates prescription medications only when a licensed healthcare provider determines they are medically appropriate.`,
      notes: [
        "Semaglutide, tirzepatide, or liraglutide when indicated.",
        "Fees for medication are separate from the consultation.",
      ],
      image: "plan",
      theme: "light" as const,
      mediaSide: "right" as const,
    },
    {
      id: "delivery",
      number: "04",
      kicker: "It comes to you",
      title: "If approved, a licensed U.S. pharmacy",
      titleHighlight: "ships to your door.",
      body: "You never chase the pharmacy for billing. We coordinate fulfillment. Medication typically arrives in 3 to 5 business days — discreet packaging, dosing instructions, and a medication user guide included. Orders can be changed only before the prescription is sent to the pharmacy.",
      notes: [
        "Independent, state-licensed pharmacies dispense and ship.",
        "Contact us for any shipping concerns.",
      ],
      image: "delivery",
      theme: "dark" as const,
      mediaSide: "left" as const,
    },
    {
      id: "ongoing",
      number: "05",
      kicker: "We stay",
      title: "The first box is not the end.",
      titleHighlight: "Care keeps moving with you.",
      body: "Regular virtual check-ins. Dose adjustments. Help with common effects like nausea. Nutrition and activity guidance. The care team is available around the clock — nurses, dietitians, and support — because weight loss is a journey, not a one-time prescription.",
      notes: [
        "Ongoing monitoring for safe, sustained progress.",
        "Support after treatment to help you keep results.",
      ],
      image: "ongoing",
      theme: "light" as const,
      mediaSide: "right" as const,
    },
  ],
  path: {
    eyebrow: "The full path",
    title: "Seven beats.",
    titleHighlight: "One story.",
    phases: [
      {
        phase: "01",
        title: "Take the eligibility quiz",
        text: "Answer a few quick questions about your health history, current medications, and weight loss goals. Takes about 5 minutes.",
      },
      {
        phase: "02",
        title: "Same-day physician review",
        text: "A licensed physician reviews your responses and schedules your virtual consultation at a time that works for you.",
      },
      {
        phase: "03",
        title: "Secure telehealth consultation",
        text: "Meet with your doctor via HIPAA-secure video or audio. They evaluate your full health picture and discuss treatment options.",
      },
      {
        phase: "04",
        title: "Personalized treatment plan",
        text: "If GLP-1 therapy is appropriate, your provider creates a tailored plan including medication selection, dosing, and lifestyle guidance.",
      },
      {
        phase: "05",
        title: "Prescription & pharmacy coordination",
        text: `${brand} coordinates with a licensed U.S. pharmacy to fulfill your prescription — you never deal with the pharmacy directly for billing.`,
      },
      {
        phase: "06",
        title: "Home delivery",
        text: "Your medication arrives discreetly at your doorstep in 3 to 5 business days with dosing instructions and a medication user guide.",
      },
      {
        phase: "07",
        title: "Track, adjust & succeed",
        text: "Regular check-ins, dose adjustments, and 24/7 access to your care team throughout your weight loss journey.",
      },
    ],
  },
  medicalEvaluation: {
    eyebrow: "Clinical care",
    title: "What the physician",
    titleHighlight: "actually reviews",
    description:
      "Every patient receives a thorough evaluation by a licensed physician before any treatment is recommended.",
    items: [
      {
        title: "Medical history",
        text: "Licensed healthcare providers review your complete medical history and current medications.",
        icon: "clipboard-list",
      },
      {
        title: "BMI and goals",
        text: "BMI, health goals, and weight-related conditions are evaluated against clinical guidelines.",
        icon: "activity",
      },
      {
        title: "Clinical fit",
        text: "Your provider determines whether GLP-1 therapy — such as semaglutide or tirzepatide — is clinically appropriate.",
        icon: "stethoscope",
      },
      {
        title: "Tailored plan",
        text: "If GLP-1 therapy is clinically appropriate, your provider writes a tailored plan — medication selection, dosing, and lifestyle guidance.",
        icon: "badge-check",
      },
      {
        title: "HIPAA-secure visits",
        text: "Telehealth consultations are conducted through HIPAA-secure platforms in accordance with state and federal regulations.",
        icon: "shield",
      },
      {
        title: "Not for emergencies",
        text: "Our telehealth services are not intended for emergency care — call 911 for medical emergencies.",
        icon: "phone",
      },
    ],
  },
  prescription: {
    eyebrow: "Prescribing",
    title: "How a prescription",
    titleHighlight: "is handled",
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
  faq: {
    eyebrow: "FAQ",
    title: "If you're still",
    titleHighlight: "wondering",
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
    viewAllHref: "/weight-loss/faq",
    viewAllLabel: "View all FAQs",
  },
  cta: {
    title: "Your first chapter",
    titleHighlight: "is a few minutes long.",
    description: "Start the evaluation. A licensed physician takes it from there — only if care is right for you.",
    primaryCta: "Start my evaluation",
    secondaryCta: "Contact support",
    secondaryHref: "/contact",
  },
} as const;
