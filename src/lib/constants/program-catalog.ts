/**
 * Plan, pricing, and physician data for the GLP-1 program.
 *
 * Plan rates differ by medication track, so callers must always resolve a price
 * through a track rather than reading a single figure.
 */

export const PROGRAM_CONSULTATION_PRICE = "$39";

export type ProgramTrackId = "semaglutide" | "tirzepatide";

export const PROGRAM_TRACKS = [
  { id: "semaglutide", label: "Semaglutide" },
  { id: "tirzepatide", label: "Tirzepatide" },
] as const satisfies readonly { id: ProgramTrackId; label: string }[];

export type ProgramPlan = {
  id: string;
  name: string;
  /** Billing duration, shown under the plan name. */
  billing: string;
  /** One-word intent used by the comparison table. */
  purpose: string;
  description: string;
  prices: Record<ProgramTrackId, string>;
  period: string;
  /** Monthly saving against the 1-month rate; differs per track. */
  savings: Record<ProgramTrackId, string | null>;
  mostPopular: boolean;
  includesMedication: boolean;
  features: string[];
  cta: string;
};

const EVALUATION_FEATURES = [
  "Health history & goals review",
  "Personalized treatment recommendations",
  "Custom treatment plan",
  "Free health profile report",
  "Prescription evaluation",
];

function planFeatures(months: number) {
  const visits =
    months === 1 ? "Virtual physician consultation" : `${months} virtual physician consultations`;

  return [
    visits,
    ...EVALUATION_FEATURES,
    `${months}-month medication delivery`,
    "Dosage plan",
    "Ongoing progress monitoring",
    "Priority support",
    "Lifestyle guidance",
    "No insurance required",
  ];
}

export const PROGRAM_PLANS = [
  {
    id: "consultation",
    name: "One-Time Consultation",
    billing: "One-time payment",
    purpose: "Evaluate",
    description: "Meet a licensed physician and understand your options before committing to a plan.",
    prices: { semaglutide: PROGRAM_CONSULTATION_PRICE, tirzepatide: PROGRAM_CONSULTATION_PRICE },
    period: "/one time",
    savings: { semaglutide: null, tirzepatide: null },
    mostPopular: false,
    includesMedication: false,
    features: ["Virtual physician consultation", ...EVALUATION_FEATURES],
    cta: "Consult Now",
  },
  {
    id: "kickstart",
    name: "Kickstart",
    billing: "1 month plan",
    purpose: "Start",
    description: "Begin treatment with a full month of care and medication delivery.",
    prices: { semaglutide: "$249", tirzepatide: "$349" },
    period: "/month",
    savings: { semaglutide: null, tirzepatide: null },
    mostPopular: false,
    includesMedication: true,
    features: planFeatures(1),
    cta: "Consult Now",
  },
  {
    id: "momentum",
    name: "Momentum",
    billing: "3 month plan",
    purpose: "Continue",
    description: "Stay with treatment long enough to see how your body responds.",
    prices: { semaglutide: "$199", tirzepatide: "$299" },
    period: "/month",
    savings: { semaglutide: "Save $50/month", tirzepatide: "Save $50/month" },
    mostPopular: true,
    includesMedication: true,
    features: planFeatures(3),
    cta: "Get Started",
  },
  {
    id: "transform",
    name: "Transform",
    billing: "6 month plan",
    purpose: "Build",
    description: "Build on early progress with half a year of continuous care.",
    prices: { semaglutide: "$179", tirzepatide: "$269" },
    period: "/month",
    savings: { semaglutide: "Save $70/month", tirzepatide: "Save $80/month" },
    mostPopular: false,
    includesMedication: true,
    features: planFeatures(6),
    cta: "Consult Now",
  },
  {
    id: "beyond",
    name: "Beyond",
    billing: "12 month plan",
    purpose: "Maintain",
    description: "Maintain your results with a full year of physician-guided care.",
    prices: { semaglutide: "$149", tirzepatide: "$249" },
    period: "/month",
    savings: { semaglutide: "Save $100/month", tirzepatide: "Save $100/month" },
    mostPopular: false,
    includesMedication: true,
    features: planFeatures(12),
    cta: "Consult Now",
  },
] as const satisfies readonly ProgramPlan[];

/** The most popular plan's rate, used for teaser copy. */
export const PROGRAM_POPULAR_PLAN = PROGRAM_PLANS[2];

/**
 * Lowest advertised monthly rate per track, which is the 12-month plan. Only
 * semaglutide and tirzepatide have advertised rates — liraglutide is quoted at
 * consultation, so it has no entry here.
 */
export const PROGRAM_TRACK_LOWEST_RATE = PROGRAM_PLANS[4].prices;

/** Lowest advertised monthly rate across every track and plan. */
export const PROGRAM_LOWEST_RATE = PROGRAM_TRACK_LOWEST_RATE.semaglutide;

/**
 * Medication cost is not bundled into the plan rate. Plan figures combine care
 * and medication for illustration only, so any pricing copy must say so.
 */
export const PROGRAM_PRICING_DISCLAIMER =
  "Rates shown combine medication and ongoing care fees for illustration. Actual pricing depends on the treatment prescribed, dosage, and plan selected. Medication is prescribed only when clinically appropriate.";

export const PROGRAM_IMPORTANT_INFO = [
  `The ${PROGRAM_CONSULTATION_PRICE} initial evaluation fee is separate from ongoing care fees and medication costs. Pricing and availability are subject to change.`,
  "Medication costs are separate from care fees and depend on the treatment prescribed, dosage, pharmacy, and any applicable coverage.",
  "Prescription medications are prescribed only when clinically appropriate and are not guaranteed. Eligibility and treatment options may vary by patient, state, and pharmacy.",
  "Compounded medications are not FDA-approved and should only be used when appropriate for an individual patient and permitted under applicable federal and state law.",
  "Results vary from person to person. Weight loss is not guaranteed.",
];

export type ProgramPhysician = {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  /** Condensed bio for the smaller about-page card. */
  shortBio: string;
  credentials: string[];
  expertise: string[];
  image: { src: string; alt: string };
};

const DOCTOR_IMAGE_BASE = "/doctors";

export const PROGRAM_PHYSICIANS = [
  {
    id: "miller",
    name: "Dr. Johnathan Miller, MD",
    title: "Weight Management & Longevity Care",
    experience: "Weight management",
    bio: "Dr. Miller believes weight loss care starts with listening. By understanding each patient's health, challenges, and goals, he provides personalized medical guidance and practical strategies designed to fit their everyday life.",
    shortBio:
      "Dr. Miller focuses on weight management and longevity care. He believes weight loss care starts with listening, and builds personalized medical guidance around each patient's health, challenges, and goals.",
    credentials: ["MD", "Licensed physician"],
    expertise: ["Weight management", "Longevity care", "GLP-1 therapy"],
    image: {
      src: `${DOCTOR_IMAGE_BASE}/miller.webp`,
      alt: "Dr. Johnathan Miller, MD",
    },
  },
  {
    id: "okonkwo",
    name: "Dr. David Okonkwo, MD, MBA",
    title: "Neurology & Child Neurology",
    experience: "Adult & pediatric care",
    bio: "Dr. Okonkwo is an adult and pediatric neurologist with subspecialty certification in Child Neurology and extensive experience in psychiatry, caring for patients at every stage of life. That combination helps him when symptoms do not fit neatly into one category, whether the concern is a child's development or an adult's memory, mood, or recovery after an injury. He has cared for patients in hospital, outpatient, and telemedicine settings and has served in physician leadership roles. He listens closely and explains complicated medicine in plain language.",
    shortBio:
      "Dr. Okonkwo is an adult and pediatric neurologist with subspecialty certification in Child Neurology and extensive experience in psychiatry. He has cared for patients in hospital, outpatient, and telemedicine settings and has served in physician leadership roles.",
    credentials: ["MD", "MBA", "Subspecialty certification in Child Neurology"],
    expertise: ["Neurology", "Child neurology", "Telemedicine"],
    image: {
      src: `${DOCTOR_IMAGE_BASE}/okonkwo.webp`,
      alt: "Dr. David Okonkwo, MD, MBA",
    },
  },
  {
    id: "kramer",
    name: "Dr. Zachary B. Kramer, MD",
    title: "Emergency Medicine & Obesity Medicine",
    experience: "15+ years",
    bio: "Dr. Kramer is a board-certified Emergency Medicine physician with over 15 years of clinical experience, now focused on telehealth and obesity medicine. He is preparing to sit for the American Board of Obesity Medicine exam. His approach is practical, evidence-based, and built on clear communication.",
    shortBio:
      "Dr. Kramer is a board-certified Emergency Medicine physician with over 15 years of clinical experience, now focused on telehealth and obesity medicine. His approach is practical, evidence-based, and built on clear communication.",
    credentials: ["MD", "Board-certified in Emergency Medicine", "15+ years clinical experience"],
    expertise: ["Obesity medicine", "Telehealth", "Evidence-based care"],
    image: {
      src: `${DOCTOR_IMAGE_BASE}/kramer.webp`,
      alt: "Dr. Zachary B. Kramer, MD",
    },
  },
  {
    id: "patel",
    name: "Dr. Gaurav K. Patel, MD",
    title: "Family Medicine & Obesity Medicine",
    experience: "48 states & D.C.",
    bio: "Dr. Patel is a board-certified family medicine physician licensed in 48 states and Washington, D.C. He has broad clinical experience spanning ICU care, adult and pediatric hospital medicine, newborn care, telemedicine, primary and urgent care, obesity and addiction medicine, and lifestyle and integrative medicine. His additional expertise includes hormone replacement and peptide therapies, clinical quality, documentation improvement, and multidisciplinary care.",
    shortBio:
      "Dr. Patel is a board-certified family medicine physician licensed in 48 states and Washington, D.C. His clinical experience spans ICU and hospital medicine, telemedicine, primary and urgent care, obesity medicine, and lifestyle and integrative medicine.",
    credentials: ["MD", "Board-certified in Family Medicine", "Licensed in 48 states & D.C."],
    expertise: ["Obesity medicine", "Family medicine", "Integrative medicine"],
    image: {
      src: `${DOCTOR_IMAGE_BASE}/patel.webp`,
      alt: "Dr. Gaurav K. Patel, MD",
    },
  },
] as const satisfies readonly ProgramPhysician[];
