import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const weightLossContent = {
  hero: {
    eyebrow: "Physician-guided weight loss",
    title: "Medical weight loss",
    titleHighlight: "that actually works",
    description:
      "Licensed doctors, same-day evaluations, and HIPAA-secure telehealth — personalized GLP-1 programs with FDA-approved medications shipped to your door.",
    trustSignals: [
      { label: "HIPAA secure", icon: "shield" as const },
      { label: "FDA-approved options", icon: "badge-check" as const },
      { label: "48 states covered", icon: "globe" as const },
      { label: "From $299/month", icon: "receipt" as const },
    ],
    primaryCta: "Start my evaluation",
    secondaryCta: "See how it works",
    secondaryHref: "#how-it-works",
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
      alt: "FDA-approved GLP-1 weight loss medications",
    },
  },
  overview: {
    eyebrow: "The program",
    title: "A complete",
    titleHighlight: "weight loss system",
    description: `${brand} offers customized weight-loss programs based on your health profile. Our state-certified doctors assess your needs and prescribe FDA-approved medications when clinically appropriate — all through secure, same-day telehealth.`,
    pillars: [
      {
        title: "Personalized medical evaluation",
        text: "Licensed physicians review your health history, goals, and lifestyle before any treatment is recommended.",
      },
      {
        title: "Evidence-based GLP-1 therapy",
        text: "Access to semaglutide and tirzepatide options — including Wegovy®, Ozempic®, Zepbound®, and Mounjaro® when medically appropriate.",
      },
      {
        title: "Ongoing physician oversight",
        text: "Regular check-ins, dosage adjustments, and dedicated support — not a one-time prescription and goodbye.",
      },
      {
        title: "Pharmacy fulfillment to your door",
        text: "If prescribed, your medication is dispensed by a licensed U.S. pharmacy and shipped discreetly in 3 to 5 business days.",
      },
    ],
  },
  whyMedical: {
    eyebrow: "Why it works",
    title: "Why medical weight loss",
    titleHighlight: "outperforms diets alone",
    description:
      "Unlike fad diets and unregulated supplements, our approach is built on clinical evidence and physician oversight at every step. GLP-1 medications work with your body's natural hunger signals — not against them.",
    reasons: [
      {
        title: "Targets biology, not willpower",
        text: "GLP-1 therapies help regulate appetite and cravings, making sustainable change more achievable than calorie restriction alone.",
      },
      {
        title: "Clinically proven outcomes",
        text: "FDA-approved semaglutide and tirzepatide medications have demonstrated significant weight reduction in clinical trials for adults with obesity or overweight.",
      },
      {
        title: "Physician-supervised safety",
        text: "Every patient meets with a licensed physician. Prescriptions are issued only when medically appropriate, with ongoing monitoring.",
      },
      {
        title: "Holistic, personalized plans",
        text: "We combine GLP-1 therapy with nutrition guidance, lifestyle support, and expert follow-ups tailored to your health needs.",
      },
    ],
    badges: [
      { title: "FDA-approved", subtitle: "Weight loss medications" },
      { title: "Licensed", subtitle: "Weight loss specialists" },
      { title: "Evidence-based", subtitle: "Treatment protocols" },
    ],
  },
  medications: {
    eyebrow: "Medications",
    title: "Semaglutide &",
    titleHighlight: "tirzepatide therapies",
    description:
      "Our licensed physicians prescribe clinically proven GLP-1 and dual-action medications tailored to your unique needs — only after a complete medical evaluation.",
    semaglutide: {
      name: "Semaglutide",
      tagline: "GLP-1 receptor agonist",
      description:
        "Semaglutide mimics a natural hormone that regulates appetite and blood sugar. Once-weekly dosing options have helped adults achieve meaningful, sustained weight loss under physician care.",
      brands: [
        {
          id: "wegovy",
          name: "Wegovy®",
          subtitle: "Semaglutide injection",
          image: "/wegovy.webp",
          highlight: "Up to 15% body weight loss",
        },
        {
          id: "ozempic",
          name: "Ozempic®",
          subtitle: "Semaglutide injection",
          image: "/ozempic.webp",
          highlight: "Reduces hunger & cravings",
        },
      ],
      benefits: [
        "Once-weekly injection options",
        "Reduces appetite and food cravings",
        "Supports metabolic health",
        "Compounded semaglutide available when appropriate",
      ],
    },
    tirzepatide: {
      name: "Tirzepatide",
      tagline: "Dual GLP-1 & GIP action",
      description:
        "Tirzepatide activates both GLP-1 and GIP receptors for enhanced appetite control and metabolic support — offering some of the strongest clinical weight-loss outcomes available.",
      brands: [
        {
          id: "zepbound",
          name: "Zepbound®",
          subtitle: "Tirzepatide injection",
          image: "/zepbound.webp",
          highlight: "Up to 20% weight loss",
        },
        {
          id: "mounjaro",
          name: "Mounjaro®",
          subtitle: "Tirzepatide injection",
          image: "/mounjaro.webp",
          highlight: "Powerful appetite control",
        },
      ],
      benefits: [
        "Dual hormone receptor action",
        "Once-weekly dosing",
        "Significant sustained weight reduction",
        "Compounded tirzepatide available when appropriate",
      ],
    },
    note: "Medications are prescribed only when a licensed healthcare provider determines they are clinically appropriate. Individual results may vary.",
  },
  howItWorks: {
    eyebrow: "Process",
    title: "How it works in",
    titleHighlight: "4 simple steps",
    description:
      "A clear path from first question to first results — no waiting rooms, no guesswork.",
    steps: [
      {
        id: "quiz",
        title: "Take a 5-minute quiz",
        description:
          "Answer questions about your health history, current medications, and weight loss goals. A licensed physician reviews your responses to determine if GLP-1 therapy is right for you.",
        icon: "clipboard-list" as const,
      },
      {
        id: "consult",
        title: "Meet your physician",
        description:
          "Connect with a board-certified doctor via secure video or audio. They evaluate BMI, medical history, and health goals to create your personalized treatment plan.",
        icon: "video" as const,
      },
      {
        id: "prescribe",
        title: "Receive your prescription",
        description:
          "If clinically appropriate, your provider issues a prescription and coordinates fulfillment through a licensed U.S. pharmacy — with home delivery in 3 to 5 business days.",
        icon: "package" as const,
      },
      {
        id: "transform",
        title: "Track & transform",
        description:
          "Monitor progress with regular check-ins, dosage adjustments, and 24/7 access to your care team for ongoing support throughout your journey.",
        icon: "trending-up" as const,
      },
    ],
  },
  eligibility: {
    eyebrow: "Eligibility",
    title: "Who",
    titleHighlight: "qualifies",
    description:
      "Eligibility is determined individually by a licensed physician after reviewing your health profile. Our quick assessment helps you understand whether physician-guided GLP-1 therapy may be appropriate for you.",
    qualifies: [
      "Adults seeking physician-guided weight management",
      "Patients with obesity, overweight, or related metabolic conditions",
      "Individuals with BMI and health history reviewed by a licensed clinician",
      "Patients in states where our licensed physicians provide telehealth care (48 states)",
      "Those committed to ongoing medical supervision and lifestyle support",
    ],
    note: "A licensed healthcare provider makes the final determination. GLP-1 medications are not appropriate for everyone. Complete our eligibility quiz to begin.",
    cta: "Check my eligibility",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Everything included in",
    titleHighlight: "your program",
    items: [
      {
        id: "consultations",
        title: "1:1 doctor consultations",
        description: "Same-day virtual visits with licensed physicians — no waiting rooms.",
        icon: "stethoscope" as const,
      },
      {
        id: "medications",
        title: "Six FDA-approved GLP-1 options",
        description: "Access to branded and compounded therapies when clinically appropriate.",
        icon: "pill" as const,
      },
      {
        id: "delivery",
        title: "Discreet home delivery",
        description: "Pharmacy-managed shipping with dosing instructions and medication guides.",
        icon: "truck" as const,
      },
      {
        id: "monitoring",
        title: "Ongoing health monitoring",
        description: "Regular check-ins to adjust your plan and ensure safe, effective progress.",
        icon: "activity" as const,
      },
      {
        id: "support",
        title: "24/7 patient support",
        description: `The ${brand} team is available around the clock for responsive guidance.`,
        icon: "headphones" as const,
      },
      {
        id: "pricing",
        title: "Transparent pricing",
        description: "Plans from $299/month with no hidden fees or long-term contracts.",
        icon: "receipt" as const,
      },
    ],
  },
  journey: {
    eyebrow: "Your journey",
    title: "Patient journey",
    titleHighlight: "timeline",
    phases: [
      {
        phase: "Day 1",
        title: "Eligibility & intake",
        text: "Complete a 5-minute health quiz. Our care team reviews your profile and schedules your virtual consultation.",
      },
      {
        phase: "Same day",
        title: "Physician consultation",
        text: "Meet with a licensed doctor via HIPAA-secure telehealth. Your provider evaluates your full health picture.",
      },
      {
        phase: "If approved",
        title: "Personalized treatment plan",
        text: "Receive a tailored plan combining GLP-1 therapy, nutrition guidance, and lifestyle recommendations.",
      },
      {
        phase: "3–5 days",
        title: "Medication delivery",
        text: "Your prescription is fulfilled by a licensed pharmacy and shipped discreetly to your doorstep.",
      },
      {
        phase: "Weeks 1–2",
        title: "Early adjustments",
        text: "Most patients notice appetite changes within the first 1–2 weeks. Your care team helps manage any side effects.",
      },
      {
        phase: "Ongoing",
        title: "Long-term success",
        text: "Regular check-ins, dose optimization, and continuous support to help you achieve sustainable results.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple,",
    titleHighlight: "transparent plans",
    description: "No surprise fees. No long-term contracts. Everything you need for physician-guided weight loss.",
    plans: [
      {
        name: "Complete care plan",
        price: "$299",
        period: "/month",
        description: "Physician consultation, medication, and ongoing support — all included.",
        features: [
          "Licensed physician evaluation",
          "GLP-1 medication included",
          "Ongoing dosage adjustments",
          "24/7 care team access",
          "Discreet pharmacy delivery",
        ],
        highlighted: true,
      },
      {
        name: "Consultation only",
        price: "Free",
        period: " initial visit",
        description: "Schedule a no-obligation virtual consultation to discuss your options.",
        features: [
          "Same-day telehealth visit",
          "Personalized health assessment",
          "Treatment plan recommendation",
          "No commitment required",
        ],
        highlighted: false,
      },
    ],
    disclaimer:
      "Pricing may vary based on medication selection and insurance. A licensed provider determines the most appropriate treatment for your individual needs.",
    cta: "View plans & get started",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common",
    titleHighlight: "questions",
    items: [
      {
        id: "wl-faq-1",
        question: "How does the eligibility quiz work?",
        answer:
          "Our 5-minute quiz asks about your health history, current medications, and weight loss goals. A licensed physician reviews your responses to determine if GLP-1 therapy is right for you.",
      },
      {
        id: "wl-faq-2",
        question: "Are the medications FDA-approved?",
        answer:
          "Yes. We prescribe FDA-approved medications including Wegovy, Ozempic, Zepbound, Mounjaro, and Saxenda. Compounded options use the same active ingredients under physician supervision.",
      },
      {
        id: "wl-faq-3",
        question: "How much does the program cost?",
        answer:
          "Plans start at $299/month, which includes your physician consultation, medication, and ongoing support. There are no hidden fees or long-term contracts.",
      },
      {
        id: "wl-faq-4",
        question: "How quickly will I see results?",
        answer:
          "Most patients begin noticing appetite changes within the first 1–2 weeks. Significant weight loss typically occurs over 3–6 months with consistent treatment and lifestyle adjustments.",
      },
      {
        id: "wl-faq-5",
        question: "Is this program available in my state?",
        answer:
          "We currently serve patients in 48 states via telehealth. Complete the eligibility quiz to confirm availability in your area.",
      },
    ],
    viewAllHref: "/#faq",
    viewAllLabel: "View all FAQs",
  },
  testimonials: {
    eyebrow: "Stories",
    title: "Real people,",
    titleHighlight: "real transformations",
  },
  cta: {
    title: "Start your weight loss",
    titleHighlight: "journey today",
    description:
      "Join thousands of patients who have transformed their health with physician-guided GLP-1 therapy.",
    primaryCta: "Get started",
    secondaryCta: "Talk to our team",
    secondaryHref: "/contact",
  },
} as const;

export type WeightLossContent = typeof weightLossContent;
