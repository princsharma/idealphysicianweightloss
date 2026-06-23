import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;

export const refundContent = {
  lastUpdated: "June 22, 2024",
  hero: {
    eyebrow: "Billing & refunds",
    title: "Refund &",
    titleHighlight: "billing policy",
    description: "Our policy on cancellations, refunds, and billing — transparent, ethical, and patient-centered.",
  },
  overview: {
    title: "Billing overview",
    intro: `At ${brand}, we are committed to providing a transparent, ethical, and patient-centered telehealth experience. Our services include virtual medical evaluations conducted by licensed healthcare providers and, when medically appropriate, access to prescription medications as part of a supervised weight management program.`,
    note: "Because our services involve professional medical time and regulated prescription medications, the following policies apply regarding cancellations, refunds, and billing.",
    cards: [
      {
        title: "Consultation fees",
        text: "Fees reflect the time, preparation, and professional expertise of licensed healthcare providers, as well as access to our secure telehealth platform.",
      },
      {
        title: "Medication fees",
        text: `Fees charged for prescription medications are separate from consultation fees and may be billed by ${brand} on behalf of the patient.`,
      },
      {
        title: "Merchant of record",
        text: `${brand} is the merchant of record for all charges processed through our platform and is responsible for handling refunds, billing inquiries, and chargeback resolution.`,
      },
    ],
  },
  eligibility: {
    title: "Refund eligibility",
    sections: [
      {
        title: "Telehealth consultation fees",
        items: [
          "If a consultation has not yet taken place, patients may request a cancellation or refund in accordance with the cancellation policy below.",
          "Once a consultation has been completed, consultation fees are non-refundable, as the medical service has already been rendered and provider time has been reserved exclusively for the patient.",
        ],
      },
      {
        title: "Medication refunds, cancellations, and modifications",
        items: [
          "Because prescription medications are regulated healthcare products, refund eligibility is limited.",
          "Medication orders may be canceled or modified only before the prescription has been transmitted to the pharmacy for fulfillment.",
          "Once a prescription has been dispensed, prepared, or shipped by the pharmacy, medication charges are non-refundable, except where required by law.",
          `Requests for medication-related cancellations, modifications, or refund inquiries must be submitted directly to ${brand}, not the pharmacy.`,
        ],
      },
      {
        title: "Technical issues and billing errors",
        items: [
          "If a technical issue—such as a platform malfunction or connectivity failure—prevents a consultation from taking place, or if you believe you were charged in error, please contact our support team promptly.",
          "We will review each situation carefully and, where appropriate, issue a refund or arrange an alternative consultation or resolution at no additional cost.",
          "Approved refunds are typically processed within 3-5 business days. Please note that your financial institution may require additional time to reflect the credit on your statement.",
        ],
      },
    ],
  },
  subscription: {
    title: "Subscription policy",
    text: `${brand} does not enroll patients in automatic subscription programs unless explicitly stated at the time of purchase.`,
    items: [
      "Prescriptions are fulfilled by independent, state-licensed pharmacies, which are responsible solely for dispensing and shipping medications in compliance with applicable federal and state laws.",
      "Pharmacy partners do not process payments, issue refunds, or provide billing support directly to patients.",
    ],
  },
  cancellation: {
    title: "Cancellation policy",
    intro: "We understand that schedules may change.",
    items: [
      `Patients may cancel or reschedule their consultation by notifying ${brand} at least 24 hours prior to the scheduled appointment time.`,
      "When timely notice is provided, we will make reasonable efforts to reschedule the appointment or issue an eligible refund.",
      "Cancellations made less than 24 hours before the scheduled consultation time may not be eligible for a refund, except in cases of technical issues or extraordinary circumstances, which are reviewed on a case-by-case basis.",
    ],
    highlight: "24-hour notice required for consultation cancellations or rescheduling.",
  },
  payment: {
    title: "Payment methods",
    description: "All charges are processed securely through our platform.",
    items: [
      `${brand} is the merchant of record for all charges processed through our platform.`,
      "Patients are encouraged to contact our support team directly to resolve any concerns prior to initiating a chargeback with their financial institution.",
      "For billing inquiries, medication modifications, or refund requests, contact our support team — not the pharmacy directly.",
    ],
  },
  commitment: {
    title: "Our commitment",
    text: `${brand} is dedicated to delivering compassionate, evidence-based care through a secure and compliant telehealth platform. We strive to ensure that every patient feels informed, supported, and respected throughout their experience.`,
  },
  faq: {
    eyebrow: "Billing FAQ",
    title: "Common",
    titleHighlight: "questions",
    items: [
      {
        id: "consult-refund",
        question: "Can I get a refund after my consultation?",
        answer:
          "Once a consultation has been completed, consultation fees are non-refundable, as the medical service has already been rendered. If your consultation has not yet taken place, you may request a cancellation or refund per our cancellation policy.",
      },
      {
        id: "med-refund",
        question: "Can I cancel my medication order?",
        answer:
          "Medication orders may be canceled or modified only before the prescription has been transmitted to the pharmacy. Once dispensed, prepared, or shipped, medication charges are non-refundable except where required by law.",
      },
      {
        id: "timeline",
        question: "How long do refunds take?",
        answer:
          "Approved refunds are typically processed within 3-5 business days. Your financial institution may require additional time to reflect the credit on your statement.",
      },
      {
        id: "chargeback",
        question: "Should I file a chargeback?",
        answer: `${brand} encourages patients to contact our support team directly to resolve billing concerns before initiating a chargeback with their financial institution.`,
      },
    ],
  },
  contact: {
    title: "Contact support",
    description: "If you have questions, concerns, or special circumstances, our team will review your inquiry with care and work to provide a fair and timely resolution.",
    email,
    cta: "Contact billing support",
    href: "/contact",
  },
} as const;
