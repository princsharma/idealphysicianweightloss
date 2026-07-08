import { siteConfig } from "@/config/site";
import { faqPageContent } from "@/lib/constants/faq-page-content";
import { homeContent } from "@/lib/constants/home-content";

import type { BrandMedicationPageContent } from "./brand-medication-types";
import type { MedicationProduct, MedicationSlug } from "./registry";
import {
  brandMedicationImages,
  liraglutideVideos,
  semaglutideVideos,
  tirzepatideVideos,
} from "./shared-media";
import { getMedicationProduct } from "./registry";

const brand = siteConfig.name;
const sharedFaq = faqPageContent.categories[0].items;
const prescriptionDisclaimer =
  "All medications must be prescribed by a licensed provider based on medical necessity. GLP-1 medications are not suitable for everyone. Results may vary.";

const accentById: Record<MedicationSlug, BrandMedicationPageContent["accent"]> = {
  ozempic: "blue",
  wegovy: "teal",
  mounjaro: "amber",
  zepbound: "violet",
  rybelsus: "emerald",
  "victoza-saxenda": "rose",
};

const processSteps = [
  {
    step: "Step 1",
    title: "Schedule a Free Visit",
    text: `A member of our care team connects with you to understand your health goals and medication preferences, including FDA-approved options and, when legally permitted and clinically appropriate, compounded medications prescribed at a provider's discretion.`,
  },
  {
    step: "Step 2",
    title: "Connect With a Licensed Doctor",
    text: "We connect you with a licensed clinician who reviews important clinical factors such as BMI, medical conditions, and health goals through a confidential video or audio consultation.",
  },
  {
    step: "Step 3",
    title: "Receive a Prescription if Clinically Appropriate",
    text: "If deemed appropriate, your provider issues a prescription based on your individualized treatment plan, with guidance on next steps for obtaining medication. You may fill at any licensed pharmacy or coordinate home delivery.",
  },
] as const;

const whyChooseItems = [
  {
    title: "Easy Online Process",
    text: "No long waits or confusing steps. Quick consults, simple forms, and prescriptions made straightforward.",
    icon: "clipboard-list" as const,
  },
  {
    title: "Licensed Doctors",
    text: "Board-certified physicians who listen and guide you every step of the way.",
    icon: "stethoscope" as const,
  },
  {
    title: "Home Delivery of Medication",
    text: "We coordinate secure, discreet delivery so medication arrives at your doorstep.",
    icon: "truck" as const,
  },
  {
    title: "Customer Support",
    text: "Our support team is available to help with billing, clinical questions, and program guidance.",
    icon: "headphones" as const,
  },
];

type PageOverrides = {
  hero?: Partial<BrandMedicationPageContent["hero"]>;
  eligibility?: Partial<BrandMedicationPageContent["eligibility"]>;
  safety?: Partial<BrandMedicationPageContent["safety"]>;
  mechanism?: Partial<BrandMedicationPageContent["mechanism"]>;
  usage?: Partial<BrandMedicationPageContent["usage"]>;
  injection?: Partial<BrandMedicationPageContent["injection"]>;
  process?: Partial<BrandMedicationPageContent["process"]>;
  testimonials?: Partial<BrandMedicationPageContent["testimonials"]>;
  preFaqCta?: Partial<BrandMedicationPageContent["preFaqCta"]>;
  faq?: Partial<BrandMedicationPageContent["faq"]>;
};

function plainName(name: string) {
  return name.replace(/®/g, "").trim();
}

function buildBaseContent(
  product: MedicationProduct,
  overrides: PageOverrides,
): BrandMedicationPageContent {
  const displayName = product.name;
  const name = plainName(displayName);

  const defaultHero = {
    eyebrow: product.subtitle,
    title: `Physician-guided ${displayName}`,
    description: product.description,
    pricingNote:
      "Program pricing starts at $75. Medication costs vary and are determined after provider evaluation.",
    image: product.image,
    imageAlt: `${displayName} — ${product.subtitle}`,
    primaryCta: "Start Medical Evaluation",
  };

  const defaultEligibility = {
    title: `Is ${displayName}`,
    titleHighlight: "right for you?",
    items: product.benefits.map((text, index) => ({
      text,
      icon: (["user-check", "activity", "pill", "stethoscope"] as const)[index % 4],
    })),
    disclaimer: prescriptionDisclaimer,
    image: {
      src: brandMedicationImages.eligibility,
      alt: "Patient reviewing weight management goals",
    },
    cta: "Check your eligibility",
  };

  const defaultSafety = {
    title: "Important safety guidelines",
    intro: `Before starting ${name}, your provider needs to review your health history. It is not safe for everyone. Always follow medical advice and report side effects promptly.`,
    cards: [
      {
        title: "Thyroid concerns",
        text: "If you have had thyroid cancer or MEN 2, GLP-1 medications may not be safe. Share your full medical history with your provider.",
        icon: "shield" as const,
      },
      {
        title: "Avoid use in pregnancy",
        text: "If you are pregnant, planning pregnancy, or breastfeeding, treatment may not be appropriate. Your provider can discuss safer options.",
        icon: "shield" as const,
      },
      {
        title: "Gastrointestinal conditions",
        text: "Nausea, bloating, or stomach issues can occur, especially early in treatment. Your care team can suggest supportive measures.",
        icon: "pill" as const,
      },
      {
        title: "Prescription only",
        text: "Medications are prescribed only when clinically appropriate after a licensed medical evaluation.",
        icon: "badge-check" as const,
      },
    ],
    disclaimer: prescriptionDisclaimer,
    cta: "Book your consultation",
  };

  const defaultMechanism = {
    title: `How does ${name}`,
    titleHighlight: "work in the body?",
    paragraphs: [
      `${displayName} is a GLP-1-based therapy that helps regulate appetite and blood sugar by slowing digestion and promoting a longer-lasting sense of fullness.`,
      `At ${brand}, licensed physicians evaluate whether ${name} is clinically appropriate as part of a supervised plan that may include lifestyle changes and ongoing follow-up.`,
    ],
    cta: "Schedule consultation",
  };

  const defaultUsage = {
    title: `How to use ${displayName} safely`,
    description:
      "Follow your doctor's instructions. Report side effects promptly and never change your dose without medical guidance.",
  };

  const defaultInjection = {
    title: `Where to inject ${displayName}?`,
    paragraphs: [
      "The most common injection sites are the abdomen, outer thigh, or upper arm. These areas have enough soft tissue to make the injection more comfortable.",
      "Rotate injection sites each week to minimize irritation. If you have questions, your physician or care team can walk you through the process.",
    ],
    image: {
      src: brandMedicationImages.injectionSites,
      alt: `Injection site guidance for ${displayName}`,
    },
  };

  const defaultTestimonials = {
    title: "Read what patients say about us",
    description:
      "Real people. Real change. Members receive expert care, access to licensed providers, and guidance to start GLP-1 treatment the right way.",
    items: homeContent.testimonials.items.map((item) => ({
      quote: item.quote,
      name: item.name,
      rating: item.rating,
    })),
    cta: "Schedule consultation",
  };

  const defaultPreFaqCta = {
    title: `Is ${displayName} and the ${brand} program right for your goals?`,
    image: {
      src: product.image,
      alt: displayName,
    },
    cta: "Book your consultation",
  };

  return {
    slug: product.id,
    accent: accentById[product.id],
    hero: { ...defaultHero, ...overrides.hero },
    eligibility: { ...defaultEligibility, ...overrides.eligibility },
    process: {
      title: `How ${brand} guides your journey`,
      description:
        "We follow a simple 3-step process to connect you with a licensed healthcare provider for evaluation and clinician-guided care from home.",
      steps: processSteps,
      cta: "Start Medical Evaluation",
      ...overrides.process,
    },
    safety: { ...defaultSafety, ...overrides.safety },
    mechanism: { ...defaultMechanism, ...overrides.mechanism },
    usage: { ...defaultUsage, ...overrides.usage },
    injection: { ...defaultInjection, ...overrides.injection },
    whyChoose: {
      title: "Why choose",
      titleHighlight: brand,
      description:
        "We make your GLP-1 journey simple, safe, and doctor-directed so you can focus on feeling better.",
      items: whyChooseItems,
      image: {
        src: brandMedicationImages.whyChoose,
        alt: "Patient feeling confident during weight loss journey",
      },
      disclaimer: prescriptionDisclaimer,
      cta: "Schedule consultation",
    },
    testimonials: { ...defaultTestimonials, ...overrides.testimonials },
    physicians: {
      title: "Our doctors team",
      subtitle: "Licensed physicians who evaluate your health and determine appropriate treatment options.",
    },
    preFaqCta: { ...defaultPreFaqCta, ...overrides.preFaqCta },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked",
      titleHighlight: "questions",
      description: `${brand} helps you get started with GLP-1 treatment online. Answers to common questions so you can move forward informed and confident.`,
      items: sharedFaq,
      ...overrides.faq,
    },
    finalCta: {
      title: `A healthier you is one decision away. Start your journey with ${name}.`,
      description: "Connect with a licensed physician for a personalized evaluation.",
      primaryCta: "Connect with a specialist",
    },
  };
}

const pageOverrides: Record<MedicationSlug, PageOverrides> = {
  ozempic: {
    hero: {
      eyebrow: "Semaglutide Injection",
      title: "Ozempic® Prescription for Type 2 Diabetes and",
      titleHighlight: "Weight Loss (Off-Label)",
      description:
        "Connect with a licensed healthcare provider through our HIPAA-compliant platform for an evaluation of Ozempic® (semaglutide) for type 2 diabetes management. Following an individualized medical assessment, a provider may prescribe treatment if clinically appropriate.",
      pricingNote:
        "Program pricing starts at $75. Medication costs vary and are determined after provider evaluation.",
      image: "/ozempic.webp",
      imageAlt: "Ozempic semaglutide injection pens",
      primaryCta: "Start Medical Evaluation",
    },
    eligibility: {
      title: "Is Ozempic®",
      titleHighlight: "right for you?",
      items: [
        { text: "Have type 2 diabetes, as determined during a medical evaluation", icon: "user-check" },
        { text: "Are seeking improved blood sugar control alongside diet and lifestyle changes", icon: "activity" },
        { text: "Want a once-weekly, medically supervised treatment option", icon: "pill" },
        { text: "Prefer care guided by a licensed healthcare provider", icon: "stethoscope" },
      ],
      disclaimer: prescriptionDisclaimer,
      image: { src: brandMedicationImages.eligibility, alt: "Woman measuring weight at home" },
      cta: "Book your free consultation",
    },
    safety: {
      title: "Important safety guidelines",
      intro:
        "Before starting Ozempic, your provider needs to review your health history. It is not safe for everyone, especially those with certain thyroid conditions or a family history of thyroid cancer.",
      cards: [
        {
          title: "Not meant for type 1 diabetes",
          text: "Ozempic is approved for type 2 diabetes. It is not meant for type 1 diabetes or diabetic ketoacidosis.",
          icon: "shield",
        },
        {
          title: "Thyroid concerns",
          text: "If you have had thyroid cancer or MEN 2, Ozempic may not be safe. Share your full medical history with your provider.",
          icon: "shield",
        },
        {
          title: "Avoid use in pregnancy",
          text: "If you are pregnant, planning pregnancy, or breastfeeding, Ozempic may not be appropriate.",
          icon: "shield",
        },
        {
          title: "Gastrointestinal conditions",
          text: "Nausea, bloating, or stomach issues can happen, especially with existing GI sensitivities.",
          icon: "pill",
        },
      ],
      disclaimer: prescriptionDisclaimer,
      cta: "Book your free consultation",
    },
    mechanism: {
      title: "How does Ozempic®",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Ozempic (semaglutide) is a once-weekly injectable diabetes medication that mimics GLP-1. This hormone helps regulate appetite and blood sugar by slowing digestion and promoting a longer-lasting sense of fullness. It also supports insulin function to help reduce blood sugar spikes.",
        "Ozempic is developed to treat type 2 diabetes but is often prescribed off-label for weight management when clinically appropriate. GLP-1 medications like Wegovy® are FDA-approved for chronic weight management in qualifying adults.",
      ],
      video: semaglutideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    usage: {
      title: "How to use Ozempic® safely",
      description:
        "Using Ozempic starts with one rule: follow your doctor's instructions. Inject once a week on the same day every week. Stick to the prescribed dose and always report side effects.",
      video: semaglutideVideos.howToUse,
    },
    injection: {
      title: "Where to inject Ozempic®?",
      paragraphs: [
        "The most common places to inject are your belly, outer thigh, or upper arm. The needle is very small and goes just under the skin, not into the muscle.",
        "Rotate injection sites each week to avoid irritation. If you have questions, your doctor or nurse is there to help.",
      ],
      image: { src: brandMedicationImages.injectionSites, alt: "Where to inject Ozempic" },
    },
    testimonials: {
      title: "Read what customers say about us",
      description:
        "Real people. Real change. Here is how members started their GLP-1 journey with licensed physician guidance.",
      items: [
        {
          quote:
            "I had no idea where to start or how to get an Ozempic prescription online. With this team I got a real consultation, a real doctor, and a treatment plan made for me.",
          name: "Jasmine R., 37",
          rating: 5,
        },
        {
          quote:
            "They did not just hand over meds. They reviewed my medical history, explained how GLP-1 medications work, and helped me stay consistent.",
          name: "Daniel M., 42",
          rating: 5,
        },
        {
          quote:
            "They helped me understand if I was a good fit for treatment and guided me with meal tips, tracking, and coaching after I started.",
          name: "Lena T., 29",
          rating: 5,
        },
        {
          quote:
            "I needed an option that worked without insurance. Clear pricing, fast delivery, and doctor-led check-ins throughout.",
          name: "Kevin M., 34",
          rating: 5,
        },
      ],
      cta: "Schedule consultation",
    },
    preFaqCta: {
      title: "Is Ozempic® and the weight loss program right for your goals?",
      image: { src: "/ozempic.webp", alt: "Ozempic injection pen" },
      cta: "Book your free consultation",
    },
    faq: {
      items: [
        {
          id: "ozempic-faq-1",
          question: "How quickly will I receive my prescription?",
          answer:
            "If approved, your prescription is typically processed after your consultation. Medication is fulfilled through a licensed pharmacy and delivered to your home within 3 to 5 business days.",
        },
        {
          id: "ozempic-faq-2",
          question: "Can I cancel my membership at any time?",
          answer:
            "Yes. You can cancel your monthly membership anytime before your next billing date. There are no long-term commitments or cancellation fees.",
        },
      ],
    },
  },
  wegovy: {
    hero: {
      title: "Wegovy® Prescription for",
      titleHighlight: "Chronic Weight Management",
      description:
        "FDA-approved Wegovy® (semaglutide) supports chronic weight management under medical supervision. Connect with a licensed physician for an individualized evaluation.",
    },
    mechanism: {
      title: "How does Wegovy®",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Wegovy contains semaglutide, a GLP-1 receptor agonist FDA-approved for chronic weight management in adults with obesity or overweight with at least one weight-related condition.",
        "Clinical studies support meaningful body weight reduction when combined with a reduced-calorie diet, increased physical activity, and physician-guided care.",
      ],
      video: semaglutideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    usage: { video: semaglutideVideos.howToUse },
    faq: {
      items: [
        {
          id: "wegovy-faq-1",
          question: "How quickly will I receive my prescription?",
          answer:
            "If approved, your prescription is typically processed after your consultation. Medication delivery usually takes 3 to 5 business days through a licensed pharmacy. Delivery timelines may vary based on pharmacy processing and location.",
        },
        {
          id: "wegovy-faq-2",
          question: "Are the consultations really with real doctors?",
          answer:
            "Yes. Consultations are conducted by licensed physicians who evaluate your health history, goals, and treatment options to determine the right approach for you.",
        },
        {
          id: "wegovy-faq-3",
          question: "Can I cancel my membership at any time?",
          answer:
            "Yes. Monthly memberships can be canceled at any time before your next billing date. There are no long-term commitments or cancellation penalties.",
        },
      ],
    },
  },
  mounjaro: {
    hero: {
      title: "Mounjaro® for Type 2 Diabetes &",
      titleHighlight: "Off-Label Weight Support",
      description:
        "Mounjaro® (tirzepatide) may support off-label weight management when medically prescribed. Connect with a licensed provider for a confidential evaluation.",
    },
    mechanism: {
      title: "How does Mounjaro®",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Mounjaro activates both GLP-1 and GIP receptors, supporting appetite regulation and metabolic health under physician supervision.",
        "Mounjaro is FDA-approved for type 2 diabetes. A licensed physician determines whether it is clinically appropriate for your goals.",
      ],
      video: tirzepatideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    usage: { video: tirzepatideVideos.howToUse },
    faq: {
      items: [
        {
          id: "mounjaro-faq-1",
          question: "Do I need insurance to get started with Mounjaro®?",
          answer:
            "No. Insurance is not required to start. Your eligibility and treatment options are reviewed by a licensed physician.",
        },
        {
          id: "mounjaro-faq-2",
          question: "Am I a candidate for Mounjaro® (tirzepatide)?",
          answer:
            "Eligibility depends on factors like BMI, medical history, health goals, and your physician's evaluation.",
        },
        {
          id: "mounjaro-faq-3",
          question: "How quickly will I receive my Mounjaro® prescription?",
          answer:
            "If approved, your prescription is processed after your consultation. Medication is fulfilled through a licensed pharmacy and delivered within 3 to 5 business days.",
        },
        {
          id: "mounjaro-faq-4",
          question: "What is the difference between Mounjaro® and Zepbound®?",
          answer:
            "Both contain tirzepatide. Mounjaro® is primarily approved for type 2 diabetes management, while Zepbound® is approved for chronic weight management.",
        },
        {
          id: "mounjaro-faq-5",
          question: "Are the consultations really with real doctors?",
          answer:
            "Yes. Consultations are conducted by licensed physicians who review your health profile and treatment options.",
        },
        {
          id: "mounjaro-faq-6",
          question: "Can I cancel my membership at any time?",
          answer:
            "Yes. Monthly memberships can be canceled anytime before your next billing date with no long-term commitment.",
        },
        {
          id: "mounjaro-faq-7",
          question: "Do you prescribe compounded tirzepatide?",
          answer:
            "Compounded tirzepatide may be available when clinically appropriate and prescribed by a licensed provider.",
        },
        {
          id: "mounjaro-faq-8",
          question: "What states do you operate in?",
          answer:
            "Availability varies by state. Our team can confirm whether services are available in your location.",
        },
      ],
    },
  },
  zepbound: {
    hero: {
      title: "Zepbound® Prescription for",
      titleHighlight: "Chronic Weight Management",
      description:
        "Zepbound® is FDA-approved for chronic weight management in adults. Receive physician-guided tirzepatide care through our HIPAA-compliant telehealth platform.",
    },
    mechanism: {
      title: "How does Zepbound®",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Zepbound (tirzepatide) targets GLP-1 and GIP pathways involved in appetite control and energy balance.",
        "Clinical studies show sustained weight reduction in qualifying adults when combined with lifestyle support and medical supervision.",
      ],
      video: tirzepatideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    usage: { video: tirzepatideVideos.howToUse },
    faq: {
      items: [
        {
          id: "zepbound-faq-1",
          question: "What is Zepbound® used for?",
          answer:
            "Zepbound® is a prescription medication used for chronic weight management in eligible adults alongside lifestyle changes.",
        },
        {
          id: "zepbound-faq-2",
          question: "How does Zepbound® help with weight management?",
          answer:
            "Zepbound® works by activating GLP-1 and GIP hormone pathways that help regulate appetite, food intake, and metabolism.",
        },
        {
          id: "zepbound-faq-3",
          question: "How often is Zepbound® taken?",
          answer:
            "Zepbound® is administered once weekly as a subcutaneous injection, as prescribed by your healthcare provider.",
        },
        {
          id: "zepbound-faq-4",
          question: "How much weight can I lose with Zepbound®?",
          answer:
            "Weight loss results vary by individual. Clinical outcomes depend on factors such as dosage, health status, and lifestyle habits.",
        },
        {
          id: "zepbound-faq-5",
          question: "What happens during a Zepbound® consultation?",
          answer:
            "A licensed physician reviews your health history, goals, and eligibility to determine if Zepbound® may be suitable for you.",
        },
        {
          id: "zepbound-faq-6",
          question: "What dose of Zepbound® will I start with?",
          answer:
            "Your provider determines the appropriate starting dose based on your medical profile and treatment response.",
        },
        {
          id: "zepbound-faq-7",
          question: "How long do people typically stay on Zepbound®?",
          answer:
            "Treatment duration is personalized and depends on your progress, health goals, and physician recommendations.",
        },
        {
          id: "zepbound-faq-8",
          question: "What side effects may occur with Zepbound®?",
          answer:
            "Some people may experience nausea, digestive discomfort, decreased appetite, or other effects that are monitored during treatment.",
        },
        {
          id: "zepbound-faq-9",
          question: "Can Zepbound® be used with other weight loss methods?",
          answer:
            "Yes. Zepbound® is commonly used alongside nutrition and lifestyle changes as part of a comprehensive weight management plan.",
        },
        {
          id: "zepbound-faq-10",
          question: "Is Zepbound® available for home delivery?",
          answer:
            "If prescribed, medication can be fulfilled through a licensed pharmacy and delivered based on pharmacy availability and location.",
        },
      ],
    },
  },
  rybelsus: {
    hero: {
      title: "Rybelsus® Oral Semaglutide",
      titleHighlight: "Physician-Guided Evaluation",
      description:
        "Non-injectable oral semaglutide may support off-label weight management when clinically appropriate. Connect with a licensed physician for evaluation.",
    },
    process: {
      title: `How ${brand} supports your journey`,
      description:
        "Our streamlined 3-step approach helps you access expert medical guidance, personalized treatment options, and ongoing support from licensed healthcare providers at home.",
      steps: [
        {
          step: "Step 1",
          title: "Start With a Free Consultation",
          text: "A care team member learns about your health goals, treatment expectations, and preferences while helping you explore available medication options based on your provider's guidance.",
        },
        {
          step: "Step 2",
          title: "Meet With a Licensed Provider",
          text: "Connect with a licensed clinician through a secure video or audio visit to review your health history, BMI, medical factors, and weight management goals.",
        },
        {
          step: "Step 3",
          title: "Get Your Prescription When Approved",
          text: "If appropriate, your provider creates a personalized treatment plan and provides prescription guidance. Medication can be obtained through a licensed pharmacy or convenient home delivery.",
        },
      ],
    },
    usage: {
      title: "How to use Rybelsus® safely",
      description:
        "Take Rybelsus daily as prescribed on an empty stomach with water. Follow your physician's instructions and report any side effects.",
    },
    injection: {
      title: "Oral dosing guidance",
      paragraphs: [
        "Rybelsus is taken as a daily oral tablet, not an injection. Your provider will guide you on timing, dosing, and what to do if you miss a dose.",
        "Always follow the prescribing information and contact your care team with questions about administration or side effects.",
      ],
      image: { src: "/rybluss.webp", alt: "Rybelsus oral semaglutide" },
    },
    mechanism: {
      title: "How does Rybelsus®",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Rybelsus delivers oral semaglutide, a GLP-1 receptor agonist that helps regulate appetite and blood sugar.",
        "It is FDA-approved for type 2 diabetes. Off-label use for weight management is determined by your licensed physician.",
      ],
      video: semaglutideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    faq: {
      items: [
        {
          id: "rybelsus-faq-1",
          question: "What is Rybelsus®?",
          answer:
            "Rybelsus® is an oral prescription medication containing semaglutide, used to help improve blood sugar control in adults with type 2 diabetes.",
        },
        {
          id: "rybelsus-faq-2",
          question: "How does Rybelsus® work?",
          answer:
            "Rybelsus® mimics a natural hormone called GLP-1 that helps regulate blood glucose levels and supports appetite control.",
        },
        {
          id: "rybelsus-faq-3",
          question: "Is Rybelsus® a pill or an injection?",
          answer: "Unlike many GLP-1 medications, Rybelsus® is taken as a once-daily oral tablet.",
        },
        {
          id: "rybelsus-faq-4",
          question: "Who may be prescribed Rybelsus®?",
          answer:
            "A healthcare provider determines eligibility based on your medical history, diabetes management needs, and overall health profile.",
        },
        {
          id: "rybelsus-faq-5",
          question: "How should Rybelsus® be taken?",
          answer:
            "Rybelsus® should be taken exactly as prescribed by your provider, including instructions regarding timing and food intake.",
        },
        {
          id: "rybelsus-faq-6",
          question: "Can Rybelsus® help with weight management?",
          answer:
            "Some people may experience weight changes while taking Rybelsus®, though it is primarily prescribed for type 2 diabetes management.",
        },
        {
          id: "rybelsus-faq-7",
          question: "How long does it take to see results with Rybelsus®?",
          answer:
            "Response times vary. Your provider monitors your progress and adjusts treatment based on your individual needs.",
        },
        {
          id: "rybelsus-faq-8",
          question: "Can I switch from another GLP-1 medication to Rybelsus®?",
          answer: "Medication changes should only be made with guidance from a licensed healthcare provider.",
        },
        {
          id: "rybelsus-faq-9",
          question: "Does Rybelsus® require a prescription?",
          answer:
            "Yes. Rybelsus® is a prescription medication that requires evaluation and approval from a qualified healthcare provider.",
        },
      ],
    },
  },
  "victoza-saxenda": {
    hero: {
      title: "Victoza® / Saxenda®",
      titleHighlight: "Liraglutide GLP-1 Care",
      description:
        "Victoza and Saxenda are liraglutide-based prescription GLP-1 medications. Your physician determines which formulation is clinically appropriate.",
    },
    process: {
      title: `How ${brand} supports your care journey`,
      description:
        "Our simple 3-step approach helps you access personalized medical guidance, connect with a licensed provider, and receive treatment support from the comfort of your home.",
      steps: [
        {
          step: "Step 1",
          title: "Begin With a Free Consultation",
          text: "A care team member speaks with you about your health goals, preferences, and treatment interests while helping you understand available medication options based on provider recommendations.",
        },
        {
          step: "Step 2",
          title: "Meet With a Qualified Healthcare Provider",
          text: "A licensed clinician reviews key health details, including medical history, BMI, and wellness goals, through a secure video or audio consultation.",
        },
        {
          step: "Step 3",
          title: "Receive Treatment Guidance & Prescription Approval",
          text: "If appropriate, your provider develops a personalized plan and provides prescription guidance. Medication can be obtained through a licensed pharmacy or arranged for home delivery.",
        },
      ],
    },
    mechanism: {
      title: "How does liraglutide",
      titleHighlight: "work in the body?",
      paragraphs: [
        "Liraglutide is a GLP-1 receptor agonist that helps regulate appetite and supports weight management or blood sugar control depending on the formulation.",
        "Victoza® is FDA-approved for type 2 diabetes; Saxenda® is FDA-approved for chronic weight management in qualifying adults.",
      ],
      video: liraglutideVideos.howItWorks,
      cta: "Schedule consultation",
    },
    usage: {
      title: "How to use liraglutide safely",
      description:
        "Liraglutide is typically administered once daily. Follow your doctor's instructions, rotate injection sites, and report side effects promptly.",
      video: liraglutideVideos.howToUse,
    },
    faq: {
      title: "Liraglutide",
      titleHighlight: "FAQ",
      items: [
        {
          id: "liraglutide-faq-1",
          question: "What is liraglutide?",
          answer:
            "Liraglutide is a GLP-1 receptor agonist medication that helps regulate appetite and blood sugar levels.",
        },
        {
          id: "liraglutide-faq-2",
          question: "How does liraglutide work for weight management?",
          answer:
            "Liraglutide works by mimicking a natural hormone that helps control hunger, increase feelings of fullness, and support weight management.",
        },
        {
          id: "liraglutide-faq-3",
          question: "Is liraglutide an injection?",
          answer:
            "Yes. Liraglutide is administered as a once-daily injection under the skin, as prescribed by a healthcare provider.",
        },
        {
          id: "liraglutide-faq-4",
          question: "Who may be a candidate for liraglutide?",
          answer:
            "A licensed provider evaluates factors such as BMI, medical history, health goals, and overall suitability before recommending treatment.",
        },
        {
          id: "liraglutide-faq-5",
          question: "How quickly can I start liraglutide treatment?",
          answer:
            "After completing a medical evaluation and receiving provider approval, your treatment plan can be started based on your prescription and pharmacy fulfillment.",
        },
        {
          id: "liraglutide-faq-6",
          question: "What are the common side effects of Saxenda?",
          answer:
            "Some people may experience nausea, digestive discomfort, decreased appetite, or other mild effects when starting treatment.",
        },
        {
          id: "liraglutide-faq-7",
          question: "How long do people take Victoza?",
          answer:
            "Treatment duration depends on your progress, goals, and recommendations from your healthcare provider.",
        },
        {
          id: "liraglutide-faq-8",
          question: "Can Saxenda be combined with lifestyle changes?",
          answer:
            "Yes. Saxenda is typically used along with healthy nutrition, physical activity, and lifestyle strategies for better outcomes.",
        },
        {
          id: "liraglutide-faq-9",
          question: "Do I need a prescription for Victoza?",
          answer:
            "Yes. Victoza requires evaluation and approval from a licensed healthcare provider before use.",
        },
      ],
    },
  },
};

export function getBrandMedicationPageContent(slug: MedicationSlug): BrandMedicationPageContent {
  const product = getMedicationProduct(slug);
  if (!product) {
    throw new Error(`Unknown medication slug: ${slug}`);
  }

  return buildBaseContent(product, pageOverrides[slug] ?? {});
}
