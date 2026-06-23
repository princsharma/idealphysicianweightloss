import { siteConfig } from "@/config/site";

import type { MedicationLandingContent } from "./medication-landing-types";

const brand = siteConfig.name;

export const semaglutideContent: MedicationLandingContent = {
  slug: "semaglutide",
  accent: "teal",
  hero: {
    eyebrow: "GLP-1 therapy",
    title: "Physician-guided",
    titleHighlight: "semaglutide",
    description:
      "FDA-approved semaglutide medications prescribed by licensed physicians — clinically proven appetite regulation and meaningful weight loss under medical supervision.",
    trustSignals: [
      { label: "FDA-approved options", icon: "badge-check" },
      { label: "Once-weekly dosing", icon: "pill" },
      { label: "Licensed physicians", icon: "stethoscope" },
      { label: "Ships to your door", icon: "truck" },
    ],
    primaryCta: "Check eligibility",
    secondaryCta: "How it works",
    secondaryHref: "#mechanism",
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
      alt: "Semaglutide weight loss medication",
    },
    stat: { value: "15%", label: "Average body weight loss in clinical trials" },
  },
  whatIs: {
    eyebrow: "Overview",
    title: "What is",
    titleHighlight: "semaglutide?",
    paragraphs: [
      "Semaglutide is a GLP-1 (glucagon-like peptide-1) receptor agonist that mimics a natural hormone your body produces after eating. It helps regulate appetite, slow digestion, and support blood sugar control.",
      `At ${brand}, licensed physicians evaluate whether semaglutide is clinically appropriate as part of a supervised weight management program. Prescriptions may include FDA-approved branded medications or compounded options when medically appropriate.`,
      "Semaglutide is not a substitute for lifestyle changes. Physician-guided programs combine medication with nutrition guidance, ongoing monitoring, and dose adjustments for safe, sustainable results.",
    ],
    highlights: [
      "GLP-1 receptor agonist",
      "Once-weekly injection options",
      "Wegovy® approved for chronic weight management",
      "Ozempic® contains semaglutide for type 2 diabetes",
    ],
  },
  mechanism: {
    eyebrow: "Science",
    title: "How semaglutide",
    titleHighlight: "works",
    description:
      "Semaglutide activates GLP-1 receptors in the brain and gut to reduce hunger signals and help you feel satisfied with smaller portions.",
    steps: [
      {
        title: "Appetite regulation",
        text: "Semaglutide acts on brain centers that control hunger, helping reduce cravings and the urge to overeat.",
        icon: "activity",
      },
      {
        title: "Slower gastric emptying",
        text: "Food moves more slowly through your digestive system, promoting longer-lasting fullness after meals.",
        icon: "pill",
      },
      {
        title: "Blood sugar support",
        text: "GLP-1 activity helps the body manage blood glucose, supporting metabolic health alongside weight loss.",
        icon: "shield",
      },
      {
        title: "Physician-guided dosing",
        text: "Your provider starts at a low dose and increases gradually to minimize side effects and optimize results.",
        icon: "stethoscope",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Why patients choose",
    titleHighlight: "semaglutide",
    items: [
      {
        id: "weight",
        title: "Clinically proven weight loss",
        description:
          "In clinical trials, adults using semaglutide for weight management achieved meaningful, sustained body weight reduction compared to lifestyle changes alone.",
        icon: "trending-up",
      },
      {
        id: "appetite",
        title: "Reduced hunger & cravings",
        description: "Many patients report feeling less preoccupied with food within the first few weeks of treatment.",
        icon: "activity",
      },
      {
        id: "weekly",
        title: "Convenient weekly dosing",
        description: "Most semaglutide formulations require just one injection per week — simple to fit into your routine.",
        icon: "pill",
      },
      {
        id: "metabolic",
        title: "Metabolic health support",
        description: "Beyond weight, semaglutide may help improve markers related to blood sugar and cardiometabolic wellness.",
        icon: "shield",
      },
      {
        id: "supervised",
        title: "Physician-supervised care",
        description: "Every prescription follows a licensed medical evaluation with ongoing check-ins and dose adjustments.",
        icon: "stethoscope",
      },
      {
        id: "delivery",
        title: "Discreet home delivery",
        description: "If prescribed, medication is fulfilled by a licensed U.S. pharmacy and shipped to your door in 3 to 5 business days.",
        icon: "truck",
      },
    ],
  },
  eligibility: {
    eyebrow: "Eligibility",
    title: "Who is",
    titleHighlight: "eligible",
    description:
      "Eligibility for semaglutide is determined individually by a licensed physician after reviewing your complete health profile.",
    qualifies: [
      "Adults with obesity or overweight seeking physician-guided treatment",
      "Patients whose BMI and medical history support GLP-1 therapy",
      "Individuals without contraindications identified during medical evaluation",
      "Patients in states where our licensed physicians provide telehealth (48 states)",
      "Those committed to ongoing medical supervision and lifestyle support",
    ],
    mayNotQualify: [
      "Personal or family history of medullary thyroid carcinoma or MEN 2",
      "Pregnancy or planning to become pregnant",
      "History of serious allergic reaction to semaglutide",
      "Certain pancreatic or kidney conditions — determined by your physician",
    ],
    note: "Only a licensed healthcare provider can determine if semaglutide is appropriate for you. Complete our eligibility assessment to begin.",
    cta: "Am I eligible?",
  },
  expectedResults: {
    eyebrow: "Outcomes",
    title: "Expected",
    titleHighlight: "results",
    description:
      "Individual results vary. Your physician will set realistic goals based on your health profile, starting dose, and adherence to your treatment plan.",
    stats: [
      { value: "1–2", label: "Weeks", detail: "Many patients notice reduced appetite" },
      { value: "15%", label: "Body weight", detail: "Average reduction in clinical trials (Wegovy®)" },
      { value: "3–6", label: "Months", detail: "Typical timeframe for significant progress" },
    ],
    timeline: [
      { period: "Weeks 1–4", text: "Gradual dose escalation. Possible mild nausea as your body adjusts — your care team can help manage this." },
      { period: "Months 1–3", text: "Noticeable appetite changes and early weight loss as therapeutic dose is reached." },
      { period: "Months 3–6+", text: "Continued progress with physician monitoring, dose optimization, and lifestyle support." },
    ],
  },
  treatment: {
    eyebrow: "Your care",
    title: "Treatment",
    titleHighlight: "process",
    steps: [
      {
        title: "Health assessment",
        text: "Complete a brief quiz about your health history, medications, and weight loss goals.",
        icon: "clipboard-list",
      },
      {
        title: "Physician consultation",
        text: "Meet with a licensed doctor via HIPAA-secure telehealth to determine if semaglutide is right for you.",
        icon: "video",
      },
      {
        title: "Personalized prescription",
        text: "If clinically appropriate, your provider selects the right semaglutide formulation and starting dose.",
        icon: "pill",
      },
      {
        title: "Pharmacy fulfillment",
        text: "Your prescription is dispensed by a licensed pharmacy and delivered discreetly to your home.",
        icon: "package",
      },
      {
        title: "Ongoing monitoring",
        text: "Regular check-ins for dose adjustments, side effect management, and long-term success.",
        icon: "trending-up",
      },
    ],
  },
  comparison: {
    eyebrow: "Options",
    title: "Semaglutide",
    titleHighlight: "formulations",
    products: [
      {
        id: "wegovy",
        name: "Wegovy®",
        subtitle: "Semaglutide injection",
        image: "/wegovy.webp",
        highlight: "FDA-approved for weight management",
        description:
          "Once-weekly injectable proven to help adults lose significant weight when combined with a reduced-calorie diet and increased physical activity.",
      },
      {
        id: "ozempic",
        name: "Ozempic®",
        subtitle: "Semaglutide injection",
        image: "/ozempic.webp",
        highlight: "FDA-approved for type 2 diabetes",
        description:
          "Contains semaglutide and may be prescribed off-label for weight management when a licensed provider determines it is clinically appropriate.",
      },
      {
        id: "compounded",
        name: "Compounded semaglutide",
        subtitle: "Same active ingredient",
        image: "/rybluss.webp",
        highlight: "Physician-prescribed alternative",
        description:
          "Compounded options with the same active ingredient may be available when clinically appropriate and prescribed by your physician.",
      },
    ],
  },
  safety: {
    eyebrow: "Safety",
    title: "Safety",
    titleHighlight: "information",
    items: [
      "Semaglutide is available only by prescription and must be used under licensed medical supervision.",
      "Your physician reviews your full medical history before prescribing and monitors you throughout treatment.",
      "Dosing starts low and increases gradually to reduce the risk of gastrointestinal side effects.",
      "GLP-1 medications carry a boxed warning regarding thyroid C-cell tumors in rodents; human risk is unknown. Discuss your history with your provider.",
      "Not for use during pregnancy. Inform your physician of all medications and supplements you take.",
    ],
    warning:
      "Individual results may vary, and all medications carry potential risks and side effects. This information is educational and not a substitute for medical advice.",
  },
  sideEffects: {
    eyebrow: "Side effects",
    title: "Possible",
    titleHighlight: "side effects",
    common: [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Constipation",
      "Abdominal pain",
      "Headache",
      "Fatigue",
    ],
    serious: [
      "Pancreatitis (severe abdominal pain that may radiate to the back)",
      "Gallbladder problems",
      "Kidney problems or worsening kidney disease",
      "Serious allergic reactions",
      "Changes in vision (reported with rapid blood sugar improvement)",
    ],
    whenToSeekCare:
      "Contact your care team or seek emergency care if you experience severe abdominal pain, persistent vomiting, signs of allergic reaction, or any symptoms that concern you. Your physician can adjust your dose or recommend supportive measures.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Semaglutide",
    titleHighlight: "questions",
    items: [
      {
        id: "sg-faq-1",
        question: "What is the difference between Wegovy and Ozempic?",
        answer:
          "Both contain semaglutide as the active ingredient. Wegovy is FDA-approved specifically for chronic weight management in adults. Ozempic is FDA-approved for type 2 diabetes. A licensed physician determines which formulation is clinically appropriate for your needs.",
      },
      {
        id: "sg-faq-2",
        question: "How is semaglutide administered?",
        answer:
          "Most semaglutide formulations are self-administered as a subcutaneous injection once per week. Your pharmacy shipment includes dosing instructions, and your care team guides you through the process.",
      },
      {
        id: "sg-faq-3",
        question: "How quickly will I see results?",
        answer:
          "Many patients notice reduced appetite within 1–2 weeks. Significant weight loss typically develops over 3–6 months as your dose is optimized and you follow your treatment plan.",
      },
      {
        id: "sg-faq-4",
        question: "Are compounded semaglutide options available?",
        answer:
          "When clinically appropriate, your physician may prescribe compounded semaglutide with the same active ingredient. All compounded medications are prescribed and supervised by licensed providers.",
      },
      {
        id: "sg-faq-5",
        question: "How much does semaglutide treatment cost?",
        answer:
          `Plans at ${brand} start at $299/month, including physician consultation, medication, and ongoing support. Pricing may vary based on formulation and insurance.`,
      },
    ],
  },
  cta: {
    title: "Ready to explore",
    titleHighlight: "semaglutide?",
    description:
      "Connect with a licensed physician to see if semaglutide is the right fit for your weight loss goals.",
    primaryCta: "Start my evaluation",
    secondaryCta: "View weight loss program",
    secondaryHref: "/weight-loss",
  },
};
