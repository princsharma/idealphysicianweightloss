import type { StatePageContent, StateSlug } from "@/lib/constants/states/state-page-types";
import {
  STATE_TREATMENT_PRODUCTS,
  STATE_TREATMENTS_DISCLAIMER,
} from "@/lib/constants/states/shared-treatments";

type StateConfig = {
  slug: StateSlug;
  stateName: string;
  stateAbbr: string;
  showStateMap: boolean;
  counties: number;
  countiesLabel: string;
  residentAdjective: string;
  residentsLabel: string;
  serviceAreas: string[];
  cities: StatePageContent["cities"]["locations"];
  testimonials: StatePageContent["testimonials"]["items"];
};

const SHARED_APPROACH = {
  eyebrow: "Our Approach",
  title: "A Realistic Approach to",
  titleHighlight: "Medical Weight Loss",
  callout:
    "No assumptions or guesswork. Every plan is tailored after a medical evaluation. Prescriptions are provided only when your physician determines they are appropriate for you.",
  body: "Our mission is simple: we do not rely on unrealistic or rapid weight loss methods. We recognize that no single plan works for everyone, which is why we connect you with licensed healthcare providers who evaluate your health and may prescribe a GLP-1 treatment plan if clinically appropriate. Each plan is tailored to your individual health profile and goals. We focus on long-term, sustainable weight loss through continuous monitoring, progress tracking, and adjustments as your body responds. This approach supports safe, steady results while helping you build healthier habits under ongoing medical guidance designed to align with your evolving needs over time.",
};

const SHARED_TREATMENTS = {
  id: "treatments",
  eyebrow: "Treatment Programs",
  title: "GLP-1 Treatments Your",
  titleHighlight: "Provider May Recommend",
  description:
    "Your healthcare provider may prescribe FDA-approved GLP-1 medications or compounded options based on your eligibility and clinical needs. All prescriptions require a detailed medical evaluation.",
  disclaimer: STATE_TREATMENTS_DISCLAIMER,
  products: STATE_TREATMENT_PRODUCTS,
};

const SHARED_PATH_BASE = {
  eyebrow: "How It Works",
  price: "$75",
  priceNote:
    "Includes a doctor evaluation and, if clinically appropriate, a prescription, along with guidance on dose adjustments and side effect management.",
  priceFeatures: [
    "HIPAA compliant",
    "Doctor Care",
    "Online Evaluation",
    "Insurance Verification",
    "Prescription Based Medication",
  ],
  cta: "Book Your Consultation",
  steps: [
    {
      id: "01",
      title: "Free Care Team Call",
      description:
        "Choose a date and time to speak with our care team about your health goals and medication preferences.",
    },
    {
      id: "02",
      title: "Physician Consultation",
      description: "", // filled per state
    },
    {
      id: "03",
      title: "Prescription Approval (If Clinically Appropriate)",
      description:
        "If approved, you'll receive a prescription and can fill it at a pharmacy, or we can arrange home delivery.",
    },
  ],
};

const SHARED_PERSONAS = [
  {
    id: "busy",
    title: "Too busy for clinic visits?",
    description: "", // filled per state
    icon: "clock" as const,
  },
  {
    id: "tried",
    title: "Tried diets that didn't last?",
    description:
      "Get a medical evaluation first. Your plan is adjusted as your body responds, not a generic meal plan off the shelf.",
    icon: "heart" as const,
  },
  {
    id: "doctor",
    title: "Want a real doctor involved?",
    description:
      "Board-certified physicians review your history and only prescribe GLP-1 therapy when clinically appropriate for you.",
    icon: "stethoscope" as const,
  },
];

const STATE_CONFIGS: Record<StateSlug, StateConfig> = {
  alabama: {
    slug: "alabama",
    stateName: "Alabama",
    stateAbbr: "AL",
    showStateMap: true,
    counties: 67,
    countiesLabel: "All 67 Alabama counties",
    residentAdjective: "Alabamians",
    residentsLabel: "Alabama residents",
    serviceAreas: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover"],
    cities: [
      { city: "Birmingham", region: "Metro Birmingham Area", counties: "Jefferson · Shelby" },
      { city: "Montgomery", region: "River Region", counties: "Montgomery County" },
      { city: "Mobile", region: "Coastal Alabama", counties: "Mobile · Baldwin" },
      { city: "Huntsville", region: "North Alabama", counties: "Madison · Limestone" },
      { city: "Tuscaloosa", region: "West Alabama", counties: "Tuscaloosa County" },
      { city: "Hoover", region: "Greater Birmingham Area", counties: "Jefferson · Shelby" },
      { city: "Dothan", region: "Southeast Alabama", counties: "Houston County" },
      { city: "Auburn", region: "East Alabama", counties: "Lee County" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "After years of trying on my own, having a real physician guide every step made all the difference. I lost 47 lbs in four months, and I've kept every pound off.",
        name: "M. Thompson",
        location: "Birmingham, AL",
        detail: "Lost 47 lbs",
      },
      {
        id: "t2",
        quote:
          "The personalized plan and my provider's support gave me energy I hadn't felt in years. The staff are genuinely invested in your success.",
        name: "D. Williams",
        location: "Mobile, AL",
        detail: "Lost 31 lbs",
      },
      {
        id: "t3",
        quote:
          "Real doctors, real accountability, real results. The difference between this and a regular weight-loss program is night and day. I only wish I'd started sooner.",
        name: "R. Patterson",
        location: "Huntsville, AL",
        detail: "Lost 58 lbs",
      },
    ],
  },
  louisiana: {
    slug: "louisiana",
    stateName: "Louisiana",
    stateAbbr: "LA",
    showStateMap: false,
    counties: 64,
    countiesLabel: "All 64 Louisiana parishes",
    residentAdjective: "Louisianans",
    residentsLabel: "Louisiana residents",
    serviceAreas: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Metairie"],
    cities: [
      { city: "New Orleans", region: "Greater New Orleans", counties: "Orleans · Jefferson" },
      { city: "Baton Rouge", region: "Capital Region", counties: "East Baton Rouge Parish" },
      { city: "Shreveport", region: "Northwest Louisiana", counties: "Caddo Parish" },
      { city: "Lafayette", region: "Acadiana", counties: "Lafayette Parish" },
      { city: "Lake Charles", region: "Southwest Louisiana", counties: "Calcasieu Parish" },
      { city: "Metairie", region: "Jefferson Parish", counties: "Jefferson Parish" },
      { city: "Kenner", region: "Metro New Orleans", counties: "Jefferson Parish" },
      { city: "Monroe", region: "Northeast Louisiana", counties: "Ouachita Parish" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "I was skeptical about telehealth, but my Louisiana provider made the process simple. Down 38 lbs and feeling more confident every week.",
        name: "C. Boudreaux",
        location: "Lafayette, LA",
        detail: "Lost 38 lbs",
      },
      {
        id: "t2",
        quote:
          "Having a physician check in on my progress kept me accountable. The care team answered every question before I started.",
        name: "T. Nguyen",
        location: "New Orleans, LA",
        detail: "Lost 29 lbs",
      },
      {
        id: "t3",
        quote:
          "No crash diets, just a plan built around my health history. I finally feel like someone is listening, not just selling a program.",
        name: "A. Martin",
        location: "Baton Rouge, LA",
        detail: "Lost 44 lbs",
      },
    ],
  },
  california: {
    slug: "california",
    stateName: "California",
    stateAbbr: "CA",
    showStateMap: false,
    counties: 58,
    countiesLabel: "All 58 California counties",
    residentAdjective: "Californians",
    residentsLabel: "California residents",
    serviceAreas: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno"],
    cities: [
      { city: "Los Angeles", region: "Greater Los Angeles", counties: "Los Angeles County" },
      { city: "San Francisco", region: "Bay Area", counties: "San Francisco County" },
      { city: "San Diego", region: "Southern California", counties: "San Diego County" },
      { city: "Sacramento", region: "Capital Region", counties: "Sacramento County" },
      { city: "San Jose", region: "South Bay", counties: "Santa Clara County" },
      { city: "Fresno", region: "Central Valley", counties: "Fresno County" },
      { city: "Oakland", region: "East Bay", counties: "Alameda County" },
      { city: "Irvine", region: "Orange County", counties: "Orange County" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "Between work and family, I needed care that fit my schedule. Video visits from home made it easy to stay consistent.",
        name: "J. Rivera",
        location: "Los Angeles, CA",
        detail: "Lost 42 lbs",
      },
      {
        id: "t2",
        quote:
          "My doctor explained every option clearly. I appreciated that nothing was pushed until we reviewed my labs and history.",
        name: "S. Chen",
        location: "San Francisco, CA",
        detail: "Lost 35 lbs",
      },
      {
        id: "t3",
        quote:
          "Steady progress without the guilt trips. The medical team adjusted my plan when side effects showed up early on.",
        name: "K. Patel",
        location: "San Diego, CA",
        detail: "Lost 51 lbs",
      },
    ],
  },
  georgia: {
    slug: "georgia",
    stateName: "Georgia",
    stateAbbr: "GA",
    showStateMap: false,
    counties: 159,
    countiesLabel: "All 159 Georgia counties",
    residentAdjective: "Georgians",
    residentsLabel: "Georgia residents",
    serviceAreas: ["Atlanta", "Augusta", "Savannah", "Columbus", "Macon", "Athens"],
    cities: [
      { city: "Atlanta", region: "Metro Atlanta", counties: "Fulton · DeKalb" },
      { city: "Augusta", region: "East Georgia", counties: "Richmond County" },
      { city: "Savannah", region: "Coastal Georgia", counties: "Chatham County" },
      { city: "Columbus", region: "West Georgia", counties: "Muscogee County" },
      { city: "Macon", region: "Central Georgia", counties: "Bibb County" },
      { city: "Athens", region: "Northeast Georgia", counties: "Clarke County" },
      { city: "Marietta", region: "North Metro Atlanta", counties: "Cobb County" },
      { city: "Alpharetta", region: "North Fulton", counties: "Fulton County" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "I had tried everything in Atlanta traffic and busy seasons. Telehealth let me keep appointments without losing half a day.",
        name: "L. Johnson",
        location: "Atlanta, GA",
        detail: "Lost 40 lbs",
      },
      {
        id: "t2",
        quote:
          "The physician took time to understand my goals. I felt heard, not rushed through a checklist.",
        name: "M. Davis",
        location: "Savannah, GA",
        detail: "Lost 33 lbs",
      },
      {
        id: "t3",
        quote:
          "Clear guidance on medication, nutrition, and follow-ups. This felt like real medical care, not a fad program.",
        name: "E. Wilson",
        location: "Augusta, GA",
        detail: "Lost 46 lbs",
      },
    ],
  },
  colorado: {
    slug: "colorado",
    stateName: "Colorado",
    stateAbbr: "CO",
    showStateMap: false,
    counties: 64,
    countiesLabel: "All 64 Colorado counties",
    residentAdjective: "Coloradans",
    residentsLabel: "Colorado residents",
    serviceAreas: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder", "Lakewood"],
    cities: [
      { city: "Denver", region: "Metro Denver", counties: "Denver County" },
      { city: "Colorado Springs", region: "Front Range South", counties: "El Paso County" },
      { city: "Aurora", region: "East Metro Denver", counties: "Arapahoe · Adams" },
      { city: "Fort Collins", region: "Northern Colorado", counties: "Larimer County" },
      { city: "Boulder", region: "Boulder Valley", counties: "Boulder County" },
      { city: "Lakewood", region: "West Metro Denver", counties: "Jefferson County" },
      { city: "Pueblo", region: "Southern Colorado", counties: "Pueblo County" },
      { city: "Grand Junction", region: "Western Slope", counties: "Mesa County" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "Living at altitude and staying active, I needed a plan that matched my lifestyle. My provider built something realistic from day one.",
        name: "R. Miller",
        location: "Denver, CO",
        detail: "Lost 36 lbs",
      },
      {
        id: "t2",
        quote:
          "I appreciated the transparency on costs and next steps. No surprises after the first consultation.",
        name: "H. Brooks",
        location: "Boulder, CO",
        detail: "Lost 28 lbs",
      },
      {
        id: "t3",
        quote:
          "Follow-up visits kept me on track when motivation dipped. Having a doctor in the loop made the difference.",
        name: "N. Garcia",
        location: "Colorado Springs, CO",
        detail: "Lost 49 lbs",
      },
    ],
  },
  ohio: {
    slug: "ohio",
    stateName: "Ohio",
    stateAbbr: "OH",
    showStateMap: false,
    counties: 88,
    countiesLabel: "All 88 Ohio counties",
    residentAdjective: "Ohioans",
    residentsLabel: "Ohio residents",
    serviceAreas: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton"],
    cities: [
      { city: "Columbus", region: "Central Ohio", counties: "Franklin County" },
      { city: "Cleveland", region: "Northeast Ohio", counties: "Cuyahoga County" },
      { city: "Cincinnati", region: "Southwest Ohio", counties: "Hamilton County" },
      { city: "Toledo", region: "Northwest Ohio", counties: "Lucas County" },
      { city: "Akron", region: "Summit County", counties: "Summit County" },
      { city: "Dayton", region: "Miami Valley", counties: "Montgomery County" },
      { city: "Canton", region: "Stark County", counties: "Stark County" },
      { city: "Youngstown", region: "Mahoning Valley", counties: "Mahoning County" },
    ],
    testimonials: [
      {
        id: "t1",
        quote:
          "I wanted a doctor involved, not an app algorithm. My Ohio physician walked me through risks and benefits before anything was prescribed.",
        name: "B. Taylor",
        location: "Columbus, OH",
        detail: "Lost 41 lbs",
      },
      {
        id: "t2",
        quote:
          "The process was straightforward from the first call. I knew what to expect at each step.",
        name: "P. Anderson",
        location: "Cleveland, OH",
        detail: "Lost 30 lbs",
      },
      {
        id: "t3",
        quote:
          "Sustainable changes, not a quick fix. Six months in, I am still losing steadily and feel supported.",
        name: "G. Lewis",
        location: "Cincinnati, OH",
        detail: "Lost 52 lbs",
      },
    ],
  },
};

function buildStateContent(config: StateConfig): StatePageContent {
  const { stateName, slug } = config;

  return {
    slug,
    stateName,
    showStateMap: config.showStateMap,
    hero: {
      eyebrow: `${stateName}'s Clinician-Guided`,
      title: "Online",
      titleHighlight: "Weight Loss",
      titleEnd: "Program",
      description:
        "We connect you with licensed providers who offer a GLP-1 treatment plan personalized to your medical condition.",
      disclaimer: "Prescription is issued only when it is clinically appropriate.",
      primaryCta: "Start Your Doctor Evaluation",
      secondaryCta: "Explore Options",
      secondaryHref: "#treatments",
      journeyLabel: `Your ${stateName} path`,
      highlights: [
        { label: "FDA", detail: "Approved Treatments" },
        { label: "Free", detail: "Initial Consultation" },
        { label: "Available", detail: "Compounded Options" },
      ],
      serviceAreas: config.serviceAreas,
      badges: [
        "Board-certified Physicians",
        "Ongoing Monitoring",
        "HIPAA Compliant",
        "Pharmacy Fulfillment Assistance",
      ],
    },
    approach: SHARED_APPROACH,
    treatments: SHARED_TREATMENTS,
    path: {
      ...SHARED_PATH_BASE,
      title: `${stateName} Residents`,
      titleHighlight: "Weight Loss Path",
      description: `The journey of ${config.residentsLabel} starts with a simple free care team call, followed by a medical evaluation, and if appropriate a prescription is provided.`,
      steps: [
        SHARED_PATH_BASE.steps[0],
        {
          ...SHARED_PATH_BASE.steps[1],
          description: `Meet your ${stateName} licensed physician via secure video or audio call. They'll review your history and determine the suitable GLP-1 medication for you.`,
        },
        SHARED_PATH_BASE.steps[2],
      ],
    },
    testimonials: {
      eyebrow: "Patient Stories",
      title: `${config.residentAdjective} who transformed`,
      titleHighlight: "their lives",
      items: config.testimonials,
    },
    cities: {
      eyebrow: `Find Us in ${stateName}`,
      title: "Serving communities",
      titleHighlight: "statewide",
      description: `Medical weight loss consultation is available across ${stateName}. Find a location near you.`,
      locations: config.cities,
    },
    cta: {
      eyebrow: "Start Your Plan",
      title: "Ready to begin your personalized",
      titleHighlight: "weight loss journey?",
      description: `Connect with a licensed ${stateName}-based provider for a medical evaluation. If appropriate, you may receive a tailored treatment plan designed around your health needs.`,
      primaryCta: "Get Started Today",
      secondaryCta: "Contact Us",
      secondaryHref: "/contact",
    },
    local: {
      stateAbbr: config.stateAbbr,
      counties: config.counties,
      countiesLabel: config.countiesLabel,
      residentsLabel: config.residentsLabel,
      residentAdjective: config.residentAdjective,
      tagline: "Physician-guided care built for your schedule, not a one-size-fits-all diet plan.",
    },
    personas: SHARED_PERSONAS.map((persona) =>
      persona.id === "busy"
        ? {
            ...persona,
            description: `Meet your provider by secure video from home, work, or anywhere in ${stateName}. Evenings and weekends available.`,
          }
        : persona,
    ),
    faq: {
      eyebrow: `${stateName} FAQ`,
      title: "Questions",
      titleHighlight: "locals ask us",
      subtitle: `Straight answers for ${stateName} patients before you book.`,
      items: [
        {
          id: "eligible",
          question: "Do I need to live in a major city to qualify?",
          answer: `No. Our telehealth program serves residents across ${config.countiesLabel.toLowerCase()}. As long as you're in ${stateName} during your consultation, you can connect with a licensed provider.`,
        },
        {
          id: "insurance",
          question: "Is this covered by insurance?",
          answer:
            "Coverage varies by plan. Our care team can help verify benefits during your initial call. Many patients also use transparent self-pay or HSA/FSA options.",
        },
        {
          id: "medication",
          question: "Will I definitely get a prescription?",
          answer:
            "Not everyone qualifies. A licensed physician reviews your medical history and only prescribes treatment when it's clinically appropriate for your health profile.",
        },
        {
          id: "time",
          question: "How long until I can start?",
          answer:
            "Many patients complete their first care team call within days. After your physician consultation, prescriptions are typically processed quickly if approved.",
        },
      ],
    },
  };
}

const STATE_CONTENT_CACHE = Object.fromEntries(
  (Object.keys(STATE_CONFIGS) as StateSlug[]).map((slug) => [
    slug,
    buildStateContent(STATE_CONFIGS[slug]),
  ]),
) as Record<StateSlug, StatePageContent>;

export function getStatePageContent(slug: StateSlug): StatePageContent {
  return STATE_CONTENT_CACHE[slug];
}
