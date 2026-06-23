import { siteConfig } from "@/config/site";

export const homeContent = {
  hero: {
    titleLine1: "Lose Weight",
    titleLine2: "Clinically",
    description:
      "Access FDA-approved GLP-1 medications with licensed provider consultations and ongoing support for sustainable weight management.",
    helpLabel: "Need Any Help?",
    startBar: {
      placeholder: "Select your state to begin…",
      cta: "Start your evaluation",
      steps: "Select your state — takes 2–3 minutes",
    },
    trustSignals: [
      { label: "HIPAA secure", icon: "shield" as const },
      { label: "Money-back guarantee", icon: "badge-check" as const },
      { label: "2-min signup", icon: "user-check" as const },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
        alt: "Physician in a telehealth consultation",
      },
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
        alt: "Doctor reviewing patient health data",
      },
      {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
        alt: "Patient training with a wellness coach",
      },
      {
        src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
        alt: "Smiling patient on a health journey",
      },
      {
        src: "https://images.unsplash.com/photo-1666214280557-f1b1562ebfca?w=500&q=80",
        alt: "Healthy lifestyle and nutrition",
      },
    ],
  },
  trustBar: [
    { label: "Doctor-Led Care", icon: "stethoscope" as const },
    { label: "Personalized Plans", icon: "user-check" as const },
    { label: "No Hidden Fees", icon: "shield" as const },
    { label: "FDA-Approved Options", icon: "badge-check" as const },
    { label: "Ships to Your Door", icon: "truck" as const },
  ],
  stats: [
    { display: "Up to 15–20%", label: "avg. body weight loss*", detail: "Backed by clinical studies." },
    { display: "Ongoing care", label: "team support", detail: "Support throughout treatment." },
    { display: "6 Rx", label: "medications available", detail: "Options tailored to you." },
    { value: "100%", suffix: "Licensed", label: "healthcare providers", detail: "Expert guidance you can trust." },
  ],
  statsDisclaimer:
    "*Based on clinical studies. Individual results may vary. GLP-1 medications are prescribed only when deemed appropriate by a licensed healthcare provider and are not suitable for everyone.",
  howItWorks: {
    title: "From Evaluation to Prescription",
    titleHighlight: "In 4 Simple Steps",
    steps: [
      {
        id: "step-1",
        title: "Take a 5-Minute Quiz",
        description:
          "Answer a few questions about your health, goals, and lifestyle to begin your evaluation.",
        icon: "clipboard-list" as const,
      },
      {
        id: "step-2",
        title: "Meet Your Physician",
        description:
          "A board-certified physician reviews your information and determines if treatment is appropriate.",
        icon: "video" as const,
      },
      {
        id: "step-3",
        title: "Receive Your Medication",
        description:
          "If prescribed, your medication is shipped from a licensed pharmacy with dosing instructions.",
        icon: "package" as const,
      },
      {
        id: "step-4",
        title: "Track Your Progress",
        description:
          "Receive ongoing check-ins, treatment adjustments when appropriate, and clinical support.",
        icon: "trending-up" as const,
      },
    ],
    disclaimer: "Prescription approval is subject to the doctor's approval.",
  },
  medications: {
    title: "Six Clinically Studied",
    titleHighlight: "GLP-1 Medications",
    description:
      "Your doctor may prescribe one of these medications based on your eligibility for the treatment.",
    products: [
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide Injection",
        image: "/ozempic.webp",
        description: "Ozempic may be prescribed off-label to support weight management.",
        benefits: [
          "FDA-approved for type 2 diabetes",
          "Off-label use for weight loss",
          "Once-weekly self-injection",
        ],
        color: "from-blue-500/20 to-indigo-500/10",
      },
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide Injection",
        image: "/wegovy.webp",
        description:
          "FDA-approved Wegovy supports chronic weight management under medical supervision.",
        benefits: [
          "FDA-approved for chronic weight management",
          "Supported by clinical studies for weight reduction",
          "Once-weekly injectable medication",
        ],
        color: "from-teal-500/20 to-cyan-500/10",
      },
      {
        id: "mounjaro",
        name: "Mounjaro®",
        subtitle: "Tirzepatide Injection",
        image: "/mounjaro.webp",
        description: "Mounjaro may support off-label weight management when medically prescribed.",
        benefits: [
          "FDA-approved for type 2 diabetes",
          "Off-label use for weight loss",
          "Once-weekly injectable treatment",
        ],
        color: "from-amber-500/20 to-orange-500/10",
      },
      {
        id: "zepbound",
        name: "Zepbound®",
        subtitle: "Tirzepatide Injection",
        image: "/zepbound.webp",
        description: "Zepbound is FDA-approved for chronic weight management in adults.",
        benefits: [
          "FDA-approved for chronic weight management",
          "Clinical studies show sustained weight reduction",
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
  medicalFirst: {
    title: "Medical-First",
    titleHighlight: "Patient-Centered",
    description:
      "Our care is built on trust, expertise, and personalized support ",
    features: [
      {
        id: "consultations",
        title: "Board-Certified Physicians Only",
        description: "Every consultation is with a licensed physician. You receive real medical expertise every time.",
        icon: "stethoscope" as const,
      },
      {
        id: "monitoring",
        title: "100% HIPAA Compliant & Private",
        description: "Your health information is securely encrypted. We never sell or share your data with third parties.",
        icon: "activity" as const,
      },
      {
        id: "support",
        title: "Optional Medication Delivery",
        description: "We coordinate with U.S.-licensed pharmacies. Medication home delivery is available, if preferred.",
        icon: "users" as const,
      },
      {
        id: "transparent",
        title: "Continuous Care Team Access",
        description: "Connect with our care team for ongoing support throughout your treatment.",
        icon: "receipt" as const,
      },
    ],
    comparison: {
      title: "Ideal Physician vs. Traditional Methods",
      rows: [
        { label: "Physician supervision", us: true, them: false },
        { label: "FDA-approved medications", us: true, them: false },
        { label: "Personalized dosing", us: true, them: false },
        { label: "Ongoing support", us: true, them: false },
        { label: "Delivered to your door", us: true, them: false },
        { label: "Average cost per month", us: "$299", them: "$500+" },
      ],
    },
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
  faq: {
    title: "Frequently Asked",
    titleHighlight: "Questions",
    items: [
      {
        id: "faq-1",
        question: "Do I need insurance to get started?",
        answer:
          "No. You can get started without insurance. Our consultation fee is $75 out-of-pocket, and medication costs vary depending on insurance coverage or discount programs.",
      },
      {
        id: "faq-2",
        question: "Am I a candidate for GLP-1 medication?",
        answer:
          "GLP-1 medications may be considered for adults with a BMI of 27 or higher with at least one weight-related condition, or a BMI of 30 or higher. A licensed physician will determine eligibility based on your full health history.",
      },
      {
        id: "faq-3",
        question: "How quickly will I receive my prescription?",
        answer:
          "Most patients receive a prescription within 24–48 hours after their consultation, if approved. Pharmacy fulfillment times vary, with some offering same-day pickup.",
      },
      {
        id: "faq-4",
        question: "What's the difference between Ozempic and Wegovy?",
        answer:
          "Both contain semaglutide. Wegovy is FDA-approved for weight management, while Ozempic may be prescribed off-label. A licensed physician will determine the most appropriate option based on your health profile.",
      },
      {
        id: "faq-5",
        question: "Are the consultations really with real doctors?",
        answer:
          "Yes. All consultations are conducted by licensed, board-certified physicians who evaluate your health and treatment options.",
      },
      {
        id: "faq-6",
        question: "Can I cancel my membership at any time?",
        answer:
          "Yes. Monthly memberships can be canceled at any time before the next billing date with no penalties. Annual plans are prorated based on usage.",
      },
      {
        id: "faq-7",
        question: "Do you prescribe compounded semaglutide?",
        answer:
          "We may work with licensed compounding pharmacies when appropriate, especially if brand-name medications are unavailable or cost-prohibitive.",
      },
      {
        id: "faq-8",
        question: "What states do you operate in?",
        answer:
          "We provide telehealth consultations across the U.S., with physicians licensed in the states where they practice to ensure compliant care.",
      },
    ],
  },
  finalCta: {
    title: "Start Your Weight Loss",
    titleHighlight: "Journey Today",
    description:
      "Join thousands of patients who have transformed their health with physician-guided GLP-1 therapy.",
    primaryCta: "Get Started",
    secondaryCta: "Check Eligibility",
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
          { label: "Wegovy", href: "/weight-loss/medications/wegovy" },
          { label: "Ozempic", href: "/weight-loss/medications/ozempic" },
          { label: "Mounjaro", href: "/weight-loss/medications/mounjaro" },
          { label: "Zepbound", href: "/weight-loss/medications/zepbound" },
          { label: "Rybelsus", href: "/weight-loss/medications/rybelsus" },
          { label: "Victoza / Saxenda", href: "/weight-loss/medications/victoza-saxenda" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "/weight-loss/faq" },
          { label: "Pricing", href: "/weight-loss/pricing" },
          { label: "Contact Us", href: "/contact" },
          { label: "Patient Portal", href: siteConfig.bookingUrl },
          { label: "Insurance", href: "/insurance" },
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
          { label: "Telehealth Consent", href: "/telehealth" },
        ],
      },
    ],
    disclaimer:
      "Ideal Physician Weight Loss provides telehealth services and does not replace emergency medical care. Individual results may vary. Medications are prescribed only when clinically appropriate.",
  },
} as const;
