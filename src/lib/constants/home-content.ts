import { siteConfig } from "@/config/site";
import {
  PROGRAM_CONSULTATION_PRICE,
  PROGRAM_LOWEST_RATE,
  PROGRAM_POPULAR_PLAN,
  PROGRAM_PRICING_DISCLAIMER,
  PROGRAM_TRACK_LOWEST_RATE,
} from "@/lib/constants/program-catalog";

const brand = siteConfig.name;

type ImageSlot = { src: string | null; alt: string; label: string };

/**
 * Homepage artwork slots. Assets live in `public/images/home` — see the README
 * there for filenames, ratios, and export guidance. Swap `src` from `null` to
 * the asset path and the placeholder is replaced by the real image.
 */
export const homeImages = {
  stats: {
    src: "/images/home/stats.webp?v=2",
    alt: "Semaglutide vial and injector pen on a pale studio backdrop",
    label: "Medication",
  },
  whyUs: {
    src: "/images/home/why-us.webp",
    alt: "Notepad, reading glasses, and a medication carton on a physician's desk",
    label: "Physician oversight",
  },
  process: {
    src: "/images/home/process.webp",
    alt: "Hands completing an online medical evaluation on a phone",
    label: "Online evaluation",
  },
  eligibility: {
    src: "/images/home/eligibility.webp",
    alt: "Qualification checklist card, pen, and a glass of water on a cream surface",
    label: "Eligibility review",
  },
  benefits: {
    src: "/images/home/Benefits.webp?v=2",
    alt: "Medication package being prepared for discreet home delivery",
    label: "Home delivery",
  },
  experience: {
    src: "/images/home/experience.webp",
    alt: "Hands preparing fresh vegetables on a dark green kitchen counter",
    label: "Ongoing support",
  },
  finalCta: {
    src: null, // "/images/home/final-cta.webp"
    alt: "Soft morning light filtering through green leaves",
    label: "Your next step",
  },
} satisfies Record<string, ImageSlot>;

export const homeContent = {
  hero: {
    eyebrow: "Physician-guided GLP-1 care",
    titleLine1: "Medical weight loss",
    titleLine2: "that actually works",
    title: "Medical weight loss",
    titleHighlight: "that actually works",
    description:
      "Licensed doctors, same-day evaluations, and HIPAA-secure telehealth. You receive personalized GLP-1 programs with FDA-approved medications shipped to your door.",
    /** The single medication featured beside the headline. */
    featuredMedicationId: "wegovy",
    medicationsLink: { label: "See all 8 GLP-1 options", href: "#treatments" },
    trustSignals: [
      { label: "HIPAA secure", icon: "shield" as const },
      { label: "FDA-approved options", icon: "badge-check" as const },
      { label: "48 states covered", icon: "globe" as const },
      { label: `Doctor Consultation at ${PROGRAM_CONSULTATION_PRICE}`, icon: "receipt" as const },
    ],
    primaryCta: "Start My Evaluation",
    secondaryCta: "See How it Works",
    secondaryHref: "#how-it-works",
    benefits: [
      "Licensed physicians and same-day virtual evaluations",
      "FDA-approved GLP-1 medications when clinically appropriate",
      "HIPAA-secure telehealth across 48 states",
      `Physician consultation at ${PROGRAM_CONSULTATION_PRICE} · plans from ${PROGRAM_LOWEST_RATE}/month`,
    ],
    /** Shared: the hero features one card, the medications section renders them all. */
    medicationCta: "Get Started",
    medicationPriceNote: `Rates shown are the 12-month plan and combine medication with ongoing care for illustration. A ${PROGRAM_CONSULTATION_PRICE} physician consultation comes first, and medication is prescribed only when clinically appropriate. Individual results may vary.`,
    medicationCards: [
      {
        id: "wegovy",
        featured: true,
        badge: `From ${PROGRAM_TRACK_LOWEST_RATE.semaglutide}/mo`,
        shortText:
          "Wegovy® is FDA-approved for chronic weight management under medical supervision. Up to 15% body weight loss (results may vary).",
        price: PROGRAM_TRACK_LOWEST_RATE.semaglutide,
        period: "/mo",
      },
      {
        id: "compounded-semaglutide",
        featured: false,
        badge: "New",
        shortText:
          "A personalized semaglutide formula prepared by a licensed U.S. compounding pharmacy. Compounded medications are not FDA-approved.",
        price: PROGRAM_TRACK_LOWEST_RATE.semaglutide,
        period: "/mo",
      },
      {
        id: "compounded-tirzepatide",
        featured: false,
        badge: "New",
        shortText:
          "A personalized tirzepatide formula prepared by a licensed U.S. compounding pharmacy. Compounded medications are not FDA-approved.",
        price: PROGRAM_TRACK_LOWEST_RATE.tirzepatide,
        period: "/mo",
      },
      {
        id: "zepbound",
        featured: false,
        badge: null,
        shortText:
          "Zepbound® is FDA-approved for chronic weight management, with reductions of up to ~20% body weight (results may vary).",
        price: PROGRAM_TRACK_LOWEST_RATE.tirzepatide,
        period: "/mo",
      },
      {
        id: "saxenda",
        featured: false,
        badge: null,
        shortText:
          "Saxenda® is liraglutide taken once daily and is FDA-approved for chronic weight management in qualifying adults.",
        price: null,
        period: "Quoted at consultation",
      },
      {
        id: "ozempic",
        featured: false,
        badge: null,
        shortText:
          "Ozempic® contains semaglutide and is FDA-approved for type 2 diabetes. It may be prescribed off-label for weight management.",
        price: PROGRAM_TRACK_LOWEST_RATE.semaglutide,
        period: "/mo",
      },
      {
        id: "mounjaro",
        featured: false,
        badge: null,
        shortText:
          "Mounjaro® contains tirzepatide and is FDA-approved for type 2 diabetes. It may be prescribed off-label for weight management.",
        price: PROGRAM_TRACK_LOWEST_RATE.tirzepatide,
        period: "/mo",
      },
      {
        id: "victoza",
        featured: false,
        badge: null,
        shortText:
          "Victoza® is liraglutide, FDA-approved for type 2 diabetes. It may be prescribed off-label for weight management.",
        price: null,
        period: "Quoted at consultation",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
      alt: "FDA-approved GLP-1 weight loss medications",
    },
    startBar: {
      cta: "Start My Evaluation",
      steps: "A short health quiz — takes 2–3 minutes",
    },
  },
  trustBar: [
    { label: "HIPAA secure", icon: "shield" as const },
    { label: "FDA-approved options", icon: "badge-check" as const },
    { label: "48 states covered", icon: "globe" as const },
    { label: `Doctor Consultation at ${PROGRAM_CONSULTATION_PRICE}`, icon: "receipt" as const },
  ],
  statsSection: {
    title: "A complete",
    titleHighlight: "weight loss system",
    description: `${brand} offers personalized GLP-1 weight-loss programs based on your unique health profile. Our state-certified doctors assess your needs and prescribe FDA-approved medications when clinically appropriate. All through secure, same-day telehealth.`,
  },
  stats: [
    {
      display: "01",
      icon: "stethoscope" as const,
      label: "Personalized medical evaluation",
      detail: "Licensed physicians review your health history, goals, and lifestyle before any treatment is recommended.",
    },
    {
      display: "02",
      icon: "pill" as const,
      label: "Evidence-based GLP-1 therapy",
      detail: "Access to semaglutide, tirzepatide, and liraglutide options, including Wegovy®, Ozempic®, Zepbound®, and Mounjaro® when medically appropriate.",
    },
    {
      display: "03",
      icon: "activity" as const,
      label: "Ongoing physician oversight",
      detail: "Regular check-ins, dosage adjustments, and dedicated support. We do not offer a one-time prescription.",
    },
    {
      display: "04",
      icon: "truck" as const,
      label: "Pharmacy fulfillment to your door",
      detail: "If prescribed, your medication is dispensed by a licensed U.S. pharmacy and shipped discreetly in 3 to 5 business days.",
    },
  ],
  statsDisclaimer:
    "Medications are prescribed only when deemed appropriate by a licensed healthcare provider and are not suitable for everyone. Individual results may vary.",
  medicalFirst: {
    title: "Why medical weight loss",
    titleHighlight: "outperforms diets alone",
    description:
      "Unlike fad diets and unregulated supplements, our approach is built on clinical evidence and physician oversight at every step. GLP-1 medications work with your body's natural hunger signals, not against them.",
    features: [
      {
        id: "biology",
        title: "Targets biology, not willpower",
        description:
          "GLP-1 therapies help regulate appetite and cravings, making sustainable change more achievable than calorie restriction alone.",
        icon: "activity" as const,
      },
      {
        id: "outcomes",
        title: "Clinically proven outcomes",
        description:
          "FDA-approved semaglutide, liraglutide, and tirzepatide medications have demonstrated significant weight reduction in clinical trials for adults with obesity or overweight.",
        icon: "badge-check" as const,
      },
      {
        id: "safety",
        title: "Physician-supervised safety",
        description:
          "Every patient meets with a licensed physician. Prescriptions are issued only when medically appropriate, with ongoing monitoring.",
        icon: "stethoscope" as const,
      },
      {
        id: "holistic",
        title: "Holistic, personalized plans",
        description:
          "We combine GLP-1 therapy with nutrition guidance, lifestyle support, and expert follow-ups tailored to your health needs.",
        icon: "users" as const,
      },
    ],
    comparison: {
      title: "Medical weight loss vs. diets alone",
      rows: [
        { label: "FDA-approved medications", us: true, them: false },
        { label: "Licensed physician supervision", us: true, them: false },
        { label: "Evidence-based treatment protocols", us: true, them: false },
        { label: "Ongoing medical support", us: true, them: false },
        { label: "Discreet pharmacy delivery", us: true, them: false },
        { label: "Plans from", us: `${PROGRAM_LOWEST_RATE}/mo`, them: "$500+" },
      ],
    },
  },
  overview: {
    eyebrow: "The program",
    title: "A complete",
    titleHighlight: "weight loss system",
    description: `${brand} offers personalized GLP-1 weight-loss programs based on your unique health profile. Our state-certified doctors assess your needs and prescribe FDA-approved medications when clinically appropriate. All through secure, same-day telehealth.`,
    pillars: [
      {
        title: "Personalized medical evaluation",
        text: "Licensed physicians review your health history, goals, and lifestyle before any treatment is recommended.",
      },
      {
        title: "Evidence-based GLP-1 therapy",
        text: "Access to semaglutide, tirzepatide, and liraglutide options, including Wegovy®, Ozempic®, Zepbound®, and Mounjaro® when medically appropriate.",
      },
      {
        title: "Ongoing physician oversight",
        text: "Regular check-ins, dosage adjustments, and dedicated support. We do not offer a one-time prescription.",
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
      "Unlike fad diets and unregulated supplements, our approach is built on clinical evidence and physician oversight at every step. GLP-1 medications work with your body's natural hunger signals, not against them.",
    reasons: [
      {
        title: "Targets biology, not willpower",
        text: "GLP-1 therapies help regulate appetite and cravings, making sustainable change more achievable than calorie restriction alone.",
      },
      {
        title: "Clinically proven outcomes",
        text: "FDA-approved semaglutide, liraglutide, and tirzepatide medications have demonstrated significant weight reduction in clinical trials for adults with obesity or overweight.",
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
      { title: "Licensed", subtitle: "Physicians" },
      { title: "Evidence-based", subtitle: "Treatment protocols" },
    ],
  },
  medications: {
    eyebrow: "Medications",
    title: "GLP-1",
    titleHighlight: "therapies",
    description:
      "Our licensed physicians prescribe compounded, off-label, and FDA-approved GLP-1 options tailored to your needs, only after a complete medical evaluation.",
    detailsCta: "View details",
    semaglutide: {
      name: "Semaglutide",
      tagline: "GLP-1 Receptor Agonist: Semaglutide",
      description:
        "A GLP-1 medicine that helps regulate blood glucose levels and influences appetite pathways involved in weight management.",
      brands: [
        {
          id: "wegovy",
          name: "Wegovy®",
          subtitle: "Semaglutide injection",
          image: "/wegovy.webp",
          highlight: "Up to 15% body weight loss (results may vary)",
        },
        {
          id: "ozempic",
          name: "Ozempic®",
          subtitle: "Semaglutide injection",
          image: "/ozempic.webp",
          highlight: "Primarily prescribed for type 2 diabetes management",
        },
      ],
      benefits: [
        "Once-weekly administration",
        "Supports appetite regulation and metabolic function",
        "Oral semaglutide available as a once-daily tablet",
        "Compounded semaglutide may be prepared by a licensed U.S. compounding pharmacy when clinically appropriate — it is not FDA-approved",
      ],
    },
    tirzepatide: {
      name: "Tirzepatide",
      tagline: "Dual GLP-1 & GIP action",
      description:
        "Tirzepatide targets two hormone pathways involved in glucose regulation, appetite signaling, and metabolic function, delivering strong clinical results in weight management.",
      brands: [
        {
          id: "zepbound",
          name: "Zepbound®",
          subtitle: "Tirzepatide injection",
          image: "/zepbound.webp",
          highlight: "Clinical trials show reductions of up to ~20% body weight (results may vary)",
        },
        {
          id: "mounjaro",
          name: "Mounjaro®",
          subtitle: "Tirzepatide injection",
          image: "/mounjaro.webp",
          highlight: "Primarily used for type 2 diabetes management",
        },
      ],
      benefits: [
        "Dual hormone receptor activity",
        "Once-weekly administration",
        "Supports long-term weight management",
        "Compounded tirzepatide may be prepared by a licensed U.S. compounding pharmacy when clinically appropriate — it is not FDA-approved",
      ],
    },
    products: [
      {
        id: "compounded-semaglutide",
        name: "Compounded Semaglutide",
        subtitle: "Semaglutide Injection",
        image: "/compounded-semaglutide.webp",
        isNew: true,
        description: "A personalized semaglutide formula prepared by a licensed U.S. compounding pharmacy against an individual prescription. Compounded medications are not FDA-approved.",
        benefits: [
          "Personalized, pharmacy-compounded formula",
          "Licensed U.S. pharmacy prepared",
          "Doctor-led prescription",
        ],
        color: "from-teal-500/20 to-emerald-500/10",
      },
      {
        id: "compounded-tirzepatide",
        name: "Compounded Tirzepatide",
        subtitle: "Tirzepatide Injection",
        image: "/compounded-tirzepatide.webp",
        isNew: true,
        description: "A personalized tirzepatide formula prepared by a licensed U.S. compounding pharmacy against an individual prescription. Compounded medications are not FDA-approved.",
        benefits: [
          "Personalized, pharmacy-compounded formula",
          "Licensed U.S. pharmacy prepared",
          "Doctor-led prescription",
        ],
        color: "from-violet-500/20 to-indigo-500/10",
      },
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide Injection",
        image: "/wegovy.webp",
        isNew: false,
        description: "Wegovy® is semaglutide, FDA-approved for chronic weight management in adults with obesity or overweight, alongside diet and exercise.",
        benefits: [
          "FDA-approved for weight management",
          "Doctor-led prescription",
          "Once-weekly injection",
        ],
        color: "from-teal-500/20 to-cyan-500/10",
      },
      {
        id: "zepbound",
        name: "Zepbound®",
        subtitle: "Tirzepatide Injection",
        image: "/zepbound.webp",
        isNew: false,
        description: "Zepbound® is tirzepatide, FDA-approved for chronic weight management and the first dual GIP and GLP-1 receptor agonist approved for weight loss.",
        benefits: [
          "FDA-approved for weight management",
          "Doctor-led prescription",
          "Once-weekly injection",
        ],
        color: "from-violet-500/20 to-purple-500/10",
      },
      {
        id: "saxenda",
        name: "Saxenda®",
        subtitle: "Liraglutide Injection",
        image: "/liraglutide.webp",
        isNew: false,
        description: "Saxenda® is liraglutide, FDA-approved for chronic weight management in adults with obesity or overweight, taken once daily.",
        benefits: [
          "FDA-approved for weight management",
          "Doctor-led prescription",
          "Once-daily injection",
        ],
        color: "from-rose-500/20 to-pink-500/10",
      },
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide Injection",
        image: "/ozempic.webp",
        isNew: false,
        description: "Ozempic® contains the same active ingredient as Wegovy®. It is FDA-approved for type 2 diabetes, not weight loss, and may be prescribed off-label for weight management.",
        benefits: [
          "Same active ingredient as Wegovy®",
          "Doctor-led off-label prescription",
          "Once-weekly injection",
        ],
        color: "from-blue-500/20 to-indigo-500/10",
      },
      {
        id: "mounjaro",
        name: "Mounjaro®",
        subtitle: "Tirzepatide Injection",
        image: "/mounjaro.webp",
        isNew: false,
        description: "Mounjaro® contains the same active ingredient as Zepbound®. It is FDA-approved for type 2 diabetes, not weight loss, and may be prescribed off-label for weight management.",
        benefits: [
          "Same active ingredient as Zepbound®",
          "Doctor-led off-label prescription",
          "Once-weekly injection",
        ],
        color: "from-amber-500/20 to-orange-500/10",
      },
      {
        id: "victoza",
        name: "Victoza®",
        subtitle: "Liraglutide Injection",
        image: "/liraglutide.webp",
        isNew: false,
        description: "Victoza® contains the same active ingredient as Saxenda®. It is FDA-approved for type 2 diabetes, not weight loss, and may be prescribed off-label for weight management.",
        benefits: [
          "Same active ingredient as Saxenda®",
          "Doctor-led off-label prescription",
          "Once-daily injection",
        ],
        color: "from-rose-500/20 to-red-500/10",
      },
    ],
    footnotes: [
      "Medication is only prescribed when a licensed provider determines it is clinically appropriate for you. Compounded medications are prepared by a licensed U.S. compounding pharmacy per individual prescription and are not FDA-approved. FDA-approved products are dispensed as manufactured by their maker. Product packaging, labeling, and appearance may differ from the images shown on this site.",
      "Ozempic®, Victoza®, and Mounjaro® are FDA-approved for type 2 diabetes and, in adults with type 2 diabetes at high cardiovascular risk, for reducing the risk of major cardiovascular events. They are not FDA-approved for weight loss. Where clinically appropriate, a licensed provider may prescribe them off-label for weight management based on individual evaluation.",
      `Wegovy®, Ozempic®, Victoza®, and Saxenda® are registered trademarks of Novo Nordisk A/S. Zepbound® and Mounjaro® are registered trademarks of Eli Lilly and Company. ${brand} is not affiliated with, sponsored by, or endorsed by Novo Nordisk or Eli Lilly.`,
    ],
  },
  howItWorks: {
    eyebrow: "Process",
    title: "How it works in",
    titleHighlight: "simple 4 steps",
    description:
      "A clear path from the first question to the first results. No waiting rooms, no guesswork.",
    disclaimer: "Prescription approval is subject to the doctor's approval.",
    steps: [
      {
        id: "quiz",
        title: "Complete a 5-minute health quiz",
        description:
          "Share your medical history, current medications, and weight goals. A care team will connect with you to understand your health goals and medication preferences.",
        icon: "clipboard-list" as const,
      },
      {
        id: "consult",
        title: "Consult with a physician",
        description:
          "Connect with a board-certified doctor through a secure consultation. Your provider evaluates your health profile and creates a personalized treatment plan.",
        icon: "video" as const,
      },
      {
        id: "prescribe",
        title: "Receive prescription & medication delivery",
        description:
          "If clinically appropriate, your physician approves the prescription and coordinates fulfillment through a licensed U.S. pharmacy. Your medication is shipped directly to your home within 3–5 business days.",
        icon: "package" as const,
      },
      {
        id: "track",
        title: "Track your progress",
        description:
          "Access regular check-ins, treatment adjustments, and continued guidance from your care team throughout your weight management journey.",
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
      "Patients in states where our licensed physicians provide telehealth care (50 states)",
      "Those committed to ongoing medical supervision and lifestyle support",
    ],
    note: "A licensed healthcare provider makes the final determination. GLP-1 medications are not appropriate for everyone. Complete our eligibility quiz to begin.",
    cta: "Start My Evaluation",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Everything is included in",
    titleHighlight: "your program",
    items: [
      {
        id: "consultations",
        title: "1:1 doctor consultations",
        description: "Same-day virtual visits with licensed physicians. No waiting rooms.",
        icon: "stethoscope" as const,
      },
      {
        id: "medications",
        title: "Six GLP-1 options",
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
        description: `Plans from ${PROGRAM_LOWEST_RATE}/month with no hidden fees and no insurance required.`,
        icon: "receipt" as const,
      },
    ],
  },
  experience: {
    eyebrow: "Your journey",
    title: "Your GLP-1",
    titleHighlight: "Experience",
    description: "What to expect throughout your treatment journey",
    items: [
      {
        title: "Understanding Your Treatment",
        text: "Learn how your GLP-1 medication works, what changes to expect, and how your plan is designed around your health goals.",
      },
      {
        title: "Building Healthy Habits",
        text: "Combine your medication plan with nutrition, activity, and lifestyle strategies that support long-term progress.",
      },
      {
        title: "Personalized Progress Tracking",
        text: "Your care team monitors your response, reviews your results, and helps optimize your treatment over time.",
      },
      {
        title: "Managing Your Experience",
        text: "Receive guidance on common adjustments, questions, and concerns as your body adapts to therapy.",
      },
      {
        title: "Staying Consistent",
        text: "Ongoing support helps you stay informed, motivated, and aligned with your health goals.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Choose a plan",
    titleHighlight: "that fits",
    description:
      "Start with a one-time consultation, or commit to a longer plan and your monthly rate drops automatically. No codes to ask for.",
    trackLabel: "Rates depend on the medication prescribed",
    disclaimer: PROGRAM_PRICING_DISCLAIMER,
    cta: "Start My Evaluation",
    viewAllLabel: "View full pricing details",
    viewAllHref: "/weight-loss/pricing",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    titleHighlight: "(FAQs)",
    items: [
      {
        id: "home-faq-1",
        question: "How does the GLP-1 weight loss program work?",
        answer:
          "The program uses GLP-1 medications that help regulate appetite, support blood sugar control, and assist with weight management under physician supervision.",
      },
      {
        id: "home-faq-2",
        question: "Who is eligible for the GLP-1 program?",
        answer:
          "Eligibility is based on factors like BMI, medical history, health goals, and overall suitability determined by a licensed physician.",
      },
      {
        id: "home-faq-3",
        question: "How much weight can I lose with GLP-1 treatment?",
        answer:
          "Results vary by individual. Many patients experience meaningful weight loss when medication is combined with healthy lifestyle changes.",
      },
      {
        id: "home-faq-4",
        question: "Is GLP-1 weight loss treatment safe?",
        answer:
          "GLP-1 medications are prescribed after a medical evaluation and monitored by healthcare professionals to support safe use.",
      },
      {
        id: "home-faq-5",
        question: "What are common side effects?",
        answer:
          "Some people may experience nausea, digestive changes, decreased appetite, or other mild effects, especially when starting treatment.",
      },
      {
        id: "home-faq-6",
        question: "Do I need a prescription for GLP-1 medication?",
        answer:
          "Yes. GLP-1 medications require evaluation and approval from a licensed healthcare provider.",
      },
      {
        id: "home-faq-7",
        question: "How does medication delivery work?",
        answer:
          "If approved, your prescription is fulfilled through a licensed pharmacy and delivered conveniently to your doorstep.",
      },
      {
        id: "home-faq-8",
        question: "What does the program include?",
        answer:
          "The program may include physician guidance, personalized treatment planning, progress monitoring, and ongoing support.",
      },
      {
        id: "home-faq-9",
        question: "How much does the GLP-1 weight loss program cost?",
        answer: `The initial physician consultation is ${PROGRAM_CONSULTATION_PRICE}. Ongoing plans run from ${PROGRAM_POPULAR_PLAN.prices.semaglutide}/month on the 3-month plan down to ${PROGRAM_LOWEST_RATE}/month over 12 months, and medication costs depend on the treatment prescribed. Your provider can explain pricing details during the consultation.`,
      },
    ],
  },
  finalCta: {
    title: "Start Your Weight Loss",
    titleHighlight: "Journey Today",
    description:
      "Join thousands of patients who have transformed their health with physician-guided GLP-1 therapy.",
    primaryCta: "Start My Evaluation",
    secondaryCta: "See How it Works",
  },
  testimonials: {
    title: "Real People,",
    titleHighlight: "Real Transformations",
    items: [
      {
        id: "t1",
        quote:
          "I lost 45 pounds in 6 months with Wegovy. My doctor adjusted my dose along the way and the support team was incredible.",
        name: "Sarah M.",
        location: "Austin, TX",
        rating: 5,
      },
      {
        id: "t2",
        quote:
          "After years of yo-yo dieting, this program finally gave me sustainable results. The physician consultation made all the difference.",
        name: "James R.",
        location: "Denver, CO",
        rating: 5,
      },
      {
        id: "t3",
        quote:
          "Convenient, professional, and effective. Medication arrived within days and I've never felt more supported in my health journey.",
        name: "Michelle K.",
        location: "Chicago, IL",
        rating: 5,
      },
    ],
  },
  footer: {
    newsletter: {
      title: "Stay informed on your health journey",
      description: "Get tips, success stories, and program updates delivered to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    columns: [
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "How It Works", href: "/weight-loss/how-it-works" },
          { label: "Our Physicians", href: "/physicians" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Treatments",
        links: [
          { label: "Weight Loss Program", href: "/weight-loss" },
          { label: "Semaglutide", href: "/weight-loss/semaglutide" },
          { label: "Tirzepatide", href: "/weight-loss/tirzepatide" },
          { label: "Wegovy", href: "/weight-loss/wegovy" },
          { label: "Zepbound", href: "/weight-loss/zepbound" },
          { label: "Saxenda", href: "/weight-loss/saxenda" },
          { label: "Ozempic", href: "/weight-loss/ozempic" },
          { label: "Mounjaro", href: "/weight-loss/mounjaro" },
          { label: "Victoza", href: "/weight-loss/victoza" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "/weight-loss/faq" },
          { label: "Pricing", href: "/weight-loss/pricing" },
          { label: "Contact Us", href: "/contact" },
          { label: "Patient Portal", href: siteConfig.bookingUrl },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Medical Disclaimer", href: "/medical-disclaimer" },
          { label: "Refund & Billing", href: "/refund" },
          { label: "Editorial Policy", href: "/editorial" },
          { label: "Compliance Hub", href: "/compliance" },
          { label: "HIPAA Notice", href: "/hipaa" },
          { label: "Accessibility", href: "/accessibility" },
        ],
      },
    ],
    disclaimer:
      "Ideal Physician Weight Loss provides telehealth services and does not replace emergency medical care. Individual results may vary. Medications are prescribed only when clinically appropriate.",
  },
} as const;

export type HomeContent = typeof homeContent;
