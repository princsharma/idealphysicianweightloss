import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;

export const complianceContent = {
  hero: {
    eyebrow: "Trust & compliance",
    title: "Built on",
    titleHighlight: "clinical integrity",
    description: `${brand} operates through licensed U.S. physicians, HIPAA-secure telehealth, and FDA-regulated prescribing pathways — so you know exactly how your care is delivered.`,
  },
  telehealth: {
    title: "Telehealth Compliance",
    description:
      "All consultations are conducted by licensed U.S. physicians through HIPAA-secure telehealth platforms in accordance with applicable federal and state telehealth regulations.",
    items: [
      `By using our Services, you consent to receive healthcare via telehealth, which may include audio, video, asynchronous chat, and electronic data transmission.`,
      `${brand} provides telehealth consultations and related weight management services exclusively through licensed healthcare professionals.`,
      "Our telehealth services are not intended for emergency care. If you experience a medical emergency, call 911 or contact your local emergency services immediately.",
    ],
  },
  licensing: {
    title: "Medical Licensing",
    description: "Every prescribing clinician is a licensed healthcare professional operating within their scope of practice.",
    items: [
      "All our doctors are affiliated with top U.S. universities and are licensed professionals.",
      "Eligibility for any prescription is determined solely by a licensed healthcare provider after clinical evaluation.",
      "GLP-1 prescriptions are issued only after a complete medical evaluation, in compliance with FDA regulations.",
      "Prescriptions are fulfilled by independent, state-licensed pharmacies in compliance with applicable federal and state laws.",
    ],
  },
  patientSafety: {
    title: "Patient Safety",
    description: "With safety and ethics at the heart of everything we do, we help you take the next confident step in your weight loss journey.",
    items: [
      "Each doctor evaluates your health, and prescriptions are provided only when medically appropriate.",
      "All GLP-1 medication guidance is evidence-based and tailored to each patient's health.",
      "We do not enroll patients in automatic subscription programs unless explicitly stated at the time of purchase.",
      "Individual results from weight-loss programs or medications vary.",
    ],
  },
  hipaa: {
    title: "HIPAA Compliance",
    description: `${brand} adheres to applicable privacy laws, including HIPAA. Protected health information is safeguarded through secure systems.`,
    items: [
      `At ${brand}, we protect your health information with care and transparency. "We" refers to ${brand} and our licensed healthcare partners.`,
      "We are legally required to protect the privacy of your identifiable health information, except in situations allowed by law.",
      "We notify you promptly if a breach occurs that compromises your unsecured protected health information.",
    ],
    link: { label: "Read full HIPAA Notice", href: "/hipaa" },
  },
  prescription: {
    title: "Prescription Process",
    steps: [
      {
        title: "Medical evaluation",
        text: `${brand} facilitates access to prescription medications only when a licensed healthcare provider determines that medication is medically appropriate as part of a patient's treatment plan.`,
      },
      {
        title: "Clinical determination",
        text: `Fees charged for prescription medications are separate from consultation fees and may be billed by ${brand} on behalf of the patient when medically appropriate.`,
      },
      {
        title: "Pharmacy fulfillment",
        text: "Prescriptions are fulfilled by independent, state-licensed pharmacies, which are responsible solely for dispensing and shipping medications in compliance with applicable federal and state laws.",
      },
      {
        title: "Ongoing coordination",
        text: `${brand} coordinates with the pharmacy to ensure timely processing and delivery. Medication orders may be canceled or modified only before the prescription has been transmitted to the pharmacy for fulfillment.`,
      },
    ],
  },
  fda: {
    title: "FDA-Approved Medications",
    description: `At ${brand}, our licensed physicians combine evidence-based medicine with compassionate telehealth care.`,
    text: `We prescribe FDA-approved GLP-1 medications (such as Wegovy®, Ozempic®, Mounjaro®, or Zepbound®) when medically appropriate.`,
    items: [
      "During consultations, licensed healthcare providers review your medical history and determine whether a GLP-1 treatment is clinically appropriate.",
      "If prescribed, medications are dispensed and shipped by licensed U.S. pharmacies in accordance with applicable state and federal laws.",
      "Once a prescription has been dispensed, prepared, or shipped by the pharmacy, medication charges are non-refundable, except where required by law.",
    ],
  },
  states: {
    title: "State Coverage",
    description: "Licensed physicians deliver care where telehealth and prescribing regulations permit.",
    stat: { value: "48", label: "States with licensed physician coverage" },
    items: [
      "State-certified doctors assess your needs and may prescribe FDA-approved medications when clinically appropriate.",
      "Shipping timelines, delivery methods, and associated costs may vary depending on your geographic location and pharmacy processing requirements.",
      "Prescriptions are fulfilled by licensed partner pharmacies in compliance with applicable state and federal regulations.",
    ],
  },
  security: {
    title: "Security",
    description: "Your data and consultations are protected through industry-standard safeguards.",
    items: [
      "HIPAA-secure telehealth platform for consultations and protected health information.",
      "Encrypted telehealth platform · SOC 2 compliant infrastructure.",
      `${brand} is the merchant of record for charges processed through our platform and handles billing inquiries securely.`,
    ],
  },
  faq: {
    eyebrow: "Common questions",
    title: "Compliance",
    titleHighlight: "FAQ",
    items: [
      {
        id: "who-prescribes",
        question: "Who can prescribe GLP-1 medications?",
        answer:
          "Only a licensed healthcare provider can determine whether a GLP-1 medication is clinically appropriate after reviewing your medical history. Prescriptions are issued only when medically appropriate.",
      },
      {
        id: "hipaa",
        question: "How is my health information protected?",
        answer: `Consultations are conducted through HIPAA-secure telehealth platforms. ${brand} safeguards protected health information in accordance with HIPAA and our Notice of Privacy Practices.`,
      },
      {
        id: "pharmacy",
        question: "Who fulfills my prescription?",
        answer:
          `Prescriptions are fulfilled by independent, state-licensed pharmacies responsible for dispensing and shipping medications. ${brand} coordinates the fulfillment process and provides ongoing support.`,
      },
      {
        id: "emergency",
        question: "Can I use this service for emergencies?",
        answer:
          "No. Our telehealth services are not intended for emergency care. Call 911 or go to your nearest emergency department for medical emergencies.",
      },
    ],
  },
  cta: {
    title: "Questions about",
    titleHighlight: "compliance?",
    description: "Our team can explain how we deliver safe, regulated telehealth care.",
    primaryCta: "Contact Support",
    primaryHref: "/contact",
    secondaryCta: "View HIPAA Notice",
    secondaryHref: "/hipaa",
  },
} as const;
