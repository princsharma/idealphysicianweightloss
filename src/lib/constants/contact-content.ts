export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "We're here to",
    titleHighlight: "help you begin.",
    description:
      "Questions about treatment, eligibility, or your care plan? Our patient support team and licensed physicians respond with clarity — never pressure.",
  },
  methods: {
    eyebrow: "Reach us",
    title: "Every channel,",
    titleHighlight: "one care team.",
    cards: [
      {
        id: "phone",
        title: "Call patient support",
        description: "Speak with a care coordinator — weekdays 8am–8pm CT, Saturdays 9am–2pm CT.",
        cta: "Call now",
      },
      {
        id: "email",
        title: "Email our team",
        description: "For billing, records, or general inquiries. We reply within one business day.",
        cta: "Send email",
      },
      {
        id: "schedule",
        title: "Book an evaluation",
        description: "Same-day telehealth appointments with board-certified physicians in your state.",
        cta: "Schedule online",
      },
      {
        id: "hours",
        title: "Support hours",
        lines: ["Mon–Fri · 8:00 AM – 8:00 PM CT", "Sat · 9:00 AM – 2:00 PM CT", "Sun · Closed"],
      },
      {
        id: "response",
        title: "Response promise",
        stat: "< 2 hrs",
        detail: "Average first response during business hours",
      },
      {
        id: "security",
        title: "HIPAA secure",
        detail: "Encrypted telehealth platform · SOC 2 compliant infrastructure",
      },
    ],
  },
  form: {
    eyebrow: "Message us",
    title: "Send a",
    titleHighlight: "secure message.",
    description:
      "Share your question and a member of our clinical support team will follow up. For urgent medical concerns, please call or seek emergency care.",
    topics: [
      "New patient inquiry",
      "Existing patient support",
      "Billing & insurance",
      "Prescription & refills",
      "Technical help",
      "Accessibility feedback",
      "Other",
    ],
    successTitle: "Message received",
    successDescription:
      "Thank you for reaching out. A care coordinator will respond within one business day.",
    footnote: "HIPAA secure · No spam · Physician-led support",
  },
  assurance: {
    items: [
      {
        title: "Licensed physicians",
        description: "Every treatment plan is reviewed and prescribed by board-certified doctors.",
      },
      {
        title: "50-state telehealth",
        description: "Care delivered where you're licensed — no waiting rooms required.",
      },
      {
        title: "No-pressure guidance",
        description: "We'll answer your questions honestly and help you decide if treatment is right.",
      },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    title: "Before you",
    titleHighlight: "reach out.",
    items: [
      {
        id: "response-time",
        question: "How quickly will I hear back?",
        answer:
          "Patient support typically responds within two hours during business hours and within one business day for email and form messages submitted after hours.",
      },
      {
        id: "existing-patients",
        question: "I'm already a patient — who should I contact?",
        answer:
          "Use the patient portal for prescriptions and appointments. For billing or clinical questions, call our support line or send a message with your patient ID.",
      },
      {
        id: "medical-emergency",
        question: "Is this for medical emergencies?",
        answer:
          "No. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room. Our team handles non-urgent weight-loss care and program support.",
      },
      {
        id: "insurance",
        question: "Do you accept insurance?",
        answer:
          "Coverage varies by plan and state. Our team can help you understand options during your evaluation — many patients use HSA/FSA or transparent self-pay pricing.",
      },
    ],
  },
} as const;
