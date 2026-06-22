export const homeContent = {
  hero: {
    titleLine1: "Lose Weight",
    titleLine2: "Naturally",
    description:
      "Licensed doctors, same-day evaluations, and HIPAA-secure telehealth — physician-guided weight loss from the comfort of home.",
    helpLabel: "Need Any Help?",
    startBar: {
      placeholder: "Select your state to begin…",
      cta: "Start Evaluation",
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
    { value: "4.8", suffix: "/5", label: "Patient satisfaction", detail: "2,000+ reviews" },
    { value: "10k+", suffix: "", label: "Patients served", detail: "Nationwide telehealth" },
    { value: "98%", suffix: "", label: "Approval rate", detail: "Eligible patients" },
    { value: "48", suffix: "", label: "States covered", detail: "Licensed physicians" },
  ],
  howItWorks: {
    title: "Everything You Need for Success in",
    titleHighlight: "4 Simple Steps",
    steps: [
      {
        id: "step-1",
        title: "Take a 5-Min Quiz",
        description:
          "Answer a few quick questions about your health history, goals, and lifestyle to see if you're eligible.",
        icon: "clipboard-list" as const,
      },
      {
        id: "step-2",
        title: "Meet Your Physician",
        description:
          "Connect with a board-certified doctor who reviews your profile and creates a personalized treatment plan.",
        icon: "video" as const,
      },
      {
        id: "step-3",
        title: "Receive Your Medication",
        description:
          "Your prescription is shipped discreetly to your door with clear dosing instructions and ongoing support.",
        icon: "package" as const,
      },
      {
        id: "step-4",
        title: "Track & Transform",
        description:
          "Monitor your progress with regular check-ins, dosage adjustments, and access to your care team anytime.",
        icon: "trending-up" as const,
      },
    ],
  },
  medications: {
    title: "Our Proven Medications &",
    titleHighlight: "Treatment Plans",
    description:
      "Clinically proven GLP-1 therapies prescribed by licensed physicians and tailored to your unique needs.",
    products: [
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide Injection",
        description: "Once-weekly injectable proven to help adults lose significant weight.",
        benefits: ["Up to 15% body weight loss", "Once-weekly dosing", "FDA-approved for weight management"],
        color: "from-teal-500/20 to-cyan-500/10",
      },
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide Injection",
        description: "Trusted GLP-1 therapy that curbs appetite and supports metabolic health.",
        benefits: ["Reduces hunger & cravings", "Improves blood sugar", "Weekly injection"],
        color: "from-blue-500/20 to-indigo-500/10",
      },
      {
        id: "zepbound",
        name: "Zepbound®",
        subtitle: "Tirzepatide Injection",
        description: "Dual-action medication targeting both GLP-1 and GIP receptors for enhanced results.",
        benefits: ["Up to 20% weight loss", "Dual hormone action", "Once-weekly dosing"],
        color: "from-violet-500/20 to-purple-500/10",
      },
      {
        id: "mounjaro",
        name: "Mounjaro®",
        subtitle: "Tirzepatide Injection",
        description: "Advanced therapy for significant, sustained weight reduction under physician care.",
        benefits: ["Powerful appetite control", "Metabolic support", "Physician-monitored"],
        color: "from-amber-500/20 to-orange-500/10",
      },
      {
        id: "saxenda",
        name: "Saxenda®",
        subtitle: "Liraglutide Injection",
        description: "Daily injectable that helps you feel fuller sooner and eat less throughout the day.",
        benefits: ["Daily dosing flexibility", "Proven weight loss", "Appetite regulation"],
        color: "from-rose-500/20 to-pink-500/10",
      },
      {
        id: "compounded",
        name: "Compounded GLP-1",
        subtitle: "Semaglutide / Tirzepatide",
        description: "Affordable compounded options with the same active ingredients, physician-prescribed.",
        benefits: ["Cost-effective option", "Same active ingredients", "Personalized dosing"],
        color: "from-emerald-500/20 to-teal-500/10",
      },
    ],
  },
  medicalFirst: {
    title: "Medical-First",
    titleHighlight: "Weight Loss",
    description:
      "Unlike fad diets and unregulated supplements, our approach is built on clinical evidence and physician oversight at every step.",
    features: [
      {
        id: "consultations",
        title: "1:1 Doctor Consultations",
        description: "Every patient meets with a licensed physician before starting treatment.",
        icon: "stethoscope" as const,
      },
      {
        id: "monitoring",
        title: "Ongoing Health Monitoring",
        description: "Regular check-ins to adjust your plan and ensure safe, effective progress.",
        icon: "activity" as const,
      },
      {
        id: "support",
        title: "Dedicated Care Team",
        description: "Access to nurses, dietitians, and support staff whenever you need guidance.",
        icon: "users" as const,
      },
      {
        id: "transparent",
        title: "Transparent Pricing",
        description: "No surprise fees — clear monthly pricing with medication included.",
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
        question: "How does the eligibility quiz work?",
        answer:
          "Our 5-minute quiz asks about your health history, current medications, and weight loss goals. A licensed physician reviews your responses to determine if GLP-1 therapy is right for you.",
      },
      {
        id: "faq-2",
        question: "Are the medications FDA-approved?",
        answer:
          "Yes. We prescribe FDA-approved medications including Wegovy, Ozempic, Zepbound, Mounjaro, and Saxenda. Compounded options use the same active ingredients under physician supervision.",
      },
      {
        id: "faq-3",
        question: "How much does the program cost?",
        answer:
          "Plans start at $299/month, which includes your physician consultation, medication, and ongoing support. There are no hidden fees or long-term contracts.",
      },
      {
        id: "faq-4",
        question: "How quickly will I see results?",
        answer:
          "Most patients begin noticing appetite changes within the first 1–2 weeks. Significant weight loss typically occurs over 3–6 months with consistent treatment and lifestyle adjustments.",
      },
      {
        id: "faq-5",
        question: "Is this program available in my state?",
        answer:
          "We currently serve patients in 48 states via telehealth. Complete the eligibility quiz to confirm availability in your area.",
      },
      {
        id: "faq-6",
        question: "What if I experience side effects?",
        answer:
          "Your care team is available 24/7 to address any concerns. Physicians can adjust your dosage or recommend supportive measures to manage common side effects like nausea.",
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
          { label: "How It Works", href: "#how-it-works" },
          { label: "Our Physicians", href: "/physicians" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Treatments",
        links: [
          { label: "Wegovy", href: "/treatments/wegovy" },
          { label: "Ozempic", href: "/treatments/ozempic" },
          { label: "Zepbound", href: "/treatments/zepbound" },
          { label: "Compounded GLP-1", href: "/treatments/compounded" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Contact Us", href: "/contact" },
          { label: "Patient Portal", href: "/portal" },
          { label: "Insurance", href: "/insurance" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "HIPAA Notice", href: "/hipaa" },
          { label: "Telehealth Consent", href: "/telehealth" },
        ],
      },
    ],
    disclaimer:
      "Ideal Physician Weight Loss provides telehealth services and does not replace emergency medical care. Individual results may vary. Medications are prescribed only when clinically appropriate.",
  },
} as const;
