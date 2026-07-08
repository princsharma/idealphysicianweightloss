import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const homeContent = {
  hero: {
    titleLine1: "Medical weight loss",
    titleLine2: "that actually works",
    title: "Medical weight loss",
    titleHighlight: "that actually works",
    description:
      "Licensed doctors, same-day evaluations, and HIPAA-secure telehealth. You receive personalized GLP-1 programs with FDA-approved medications shipped to your door.",
    trustSignals: [
      { label: "HIPAA secure", icon: "shield" as const },
      { label: "FDA-approved options", icon: "badge-check" as const },
      { label: "48 states covered", icon: "globe" as const },
      { label: "Doctor Evaluation at $75", icon: "receipt" as const },
    ],
    primaryCta: "Start My Evaluation",
    secondaryCta: "See How it Works",
    secondaryHref: "#how-it-works",
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
      alt: "FDA-approved GLP-1 weight loss medications",
    },
    startBar: {
      placeholder: "Select your state to begin…",
      cta: "Start My Evaluation",
      steps: "Select your state — takes 2–3 minutes",
    },
  },
  trustBar: [
    { label: "HIPAA secure", icon: "shield" as const },
    { label: "FDA-approved options", icon: "badge-check" as const },
    { label: "48 states covered", icon: "globe" as const },
    { label: "Doctor Evaluation at $75", icon: "receipt" as const },
  ],
  statsSection: {
    title: "A complete",
    titleHighlight: "weight loss system",
    description: `${brand} offers personalized GLP-1 weight-loss programs based on your unique health profile. Our state-certified doctors assess your needs and prescribe FDA-approved medications when clinically appropriate. All through secure, same-day telehealth.`,
  },
  stats: [
    {
      display: "01",
      label: "Personalized medical evaluation",
      detail: "Licensed physicians review your health history, goals, and lifestyle before any treatment is recommended.",
    },
    {
      display: "02",
      label: "Evidence-based GLP-1 therapy",
      detail: "Access to semaglutide, tirzepatide, and liraglutide options, including Wegovy®, Ozempic®, Zepbound®, and Mounjaro® when medically appropriate.",
    },
    {
      display: "03",
      label: "Ongoing physician oversight",
      detail: "Regular check-ins, dosage adjustments, and dedicated support. We do not offer a one-time prescription.",
    },
    {
      display: "04",
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
        { label: "Plans from", us: "$299/mo", them: "$500+" },
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
      "Our licensed physicians prescribe clinically proven GLP-1 and dual-action medications tailored to your unique needs only after a complete medical evaluation.",
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
        "Compounded versions may be available when clinically appropriate",
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
        "Compounded options may be considered when appropriate",
      ],
    },
    products: [
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide Injection",
        image: "/ozempic.webp",
        description: "Ozempic® contains semaglutide and is primarily prescribed for type 2 diabetes management.",
        benefits: [
          "FDA-approved for type 2 diabetes",
          "Semaglutide injection",
          "Once-weekly self-injection",
        ],
        color: "from-blue-500/20 to-indigo-500/10",
      },
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide Injection",
        image: "/wegovy.webp",
        description: "Wegovy® supports chronic weight management under medical supervision. Up to 15% body weight loss (results may vary).",
        benefits: [
          "FDA-approved for chronic weight management",
          "Up to 15% body weight loss (results may vary)",
          "Once-weekly injectable medication",
        ],
        color: "from-teal-500/20 to-cyan-500/10",
      },
      {
        id: "mounjaro",
        name: "Mounjaro®",
        subtitle: "Tirzepatide Injection",
        image: "/mounjaro.webp",
        description: "Mounjaro® contains tirzepatide and is primarily used for type 2 diabetes management.",
        benefits: [
          "FDA-approved for type 2 diabetes",
          "Tirzepatide injection",
          "Once-weekly injectable treatment",
        ],
        color: "from-amber-500/20 to-orange-500/10",
      },
      {
        id: "zepbound",
        name: "Zepbound®",
        subtitle: "Tirzepatide Injection",
        image: "/zepbound.webp",
        description: "Zepbound® is FDA-approved for chronic weight management. Clinical trials show reductions of up to ~20% body weight (results may vary).",
        benefits: [
          "FDA-approved for chronic weight management",
          "Up to ~20% body weight loss (results may vary)",
          "Once-weekly medically supervised injection",
        ],
        color: "from-violet-500/20 to-purple-500/10",
      },
      {
        id: "rybelsus",
        name: "Rybelsus®",
        subtitle: "Oral Semaglutide",
        image: "/rybluss.webp",
        description: "Non-injectable oral semaglutide may support off-label weight management.",
        benefits: [
          "FDA-approved for type 2 diabetes",
          "May be prescribed off-label for weight loss",
          "Taken daily as an oral tablet",
        ],
        color: "from-emerald-500/20 to-teal-500/10",
      },
      {
        id: "victoza-saxenda",
        name: "Victoza® / Saxenda®",
        subtitle: "Liraglutide Injection",
        image: "/liraglutide.webp",
        description: "Victoza and Saxenda are liraglutide-based prescription GLP-1 medications.",
        benefits: [
          "Liraglutide for diabetes and chronic weight management",
          "Personalized treatment under medical supervision",
          "Once-daily prescription injection",
        ],
        color: "from-rose-500/20 to-pink-500/10",
      },
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
        description: "Plans from $299/month with no hidden fees or long-term contracts.",
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
    title: "Simple, transparent",
    titleHighlight: "plans",
    description:
      "No surprise fees. No long-term contracts. Everything you need for physician-guided weight loss.",
    plans: [
      {
        name: "Complete care plan",
        price: "$299",
        period: "/month",
        pricePrefix: "Starting at",
        description: "Medication and ongoing support.",
        features: [
          "Dosage adjustments",
          "24/7 care team access",
          "Discreet pharmacy delivery",
        ],
        highlighted: true,
      },
      {
        name: "Care Team Consultation only",
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
    cta: "Start My Evaluation",
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
        answer:
          "The initial evaluation fee is $75. Medication costs vary based on the treatment plan and services included. Your provider can explain pricing details during the consultation.",
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
          { label: "Ozempic", href: "/weight-loss/ozempic" },
          { label: "Mounjaro", href: "/weight-loss/mounjaro" },
          { label: "Zepbound", href: "/weight-loss/zepbound" },
          { label: "Rybelsus", href: "/weight-loss/rybelsus" },
          { label: "Victoza / Saxenda", href: "/weight-loss/victoza-saxenda" },
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
