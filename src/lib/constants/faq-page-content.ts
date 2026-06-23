export type FaqItem = { id: string; question: string; answer: string };

export type FaqCategory = {
  id: string;
  title: string;
  icon: "clipboard-list" | "pill" | "receipt" | "shield" | "user-check";
  items: readonly FaqItem[];
};

export const faqPageContent = {
  hero: {
    eyebrow: "Help center",
    title: "Frequently asked",
    titleHighlight: "questions",
    description:
      "Have questions? We've got answers. Explore information about our services, pricing, safety protocols, medications, and more.",
    searchPlaceholder: "Search questions…",
  },
  popular: {
    title: "Popular questions",
    ids: ["faq-1", "faq-2", "faq-3", "faq-4", "faq-5", "faq-6", "faq-7", "faq-8"],
  },
  categories: [
    {
      id: "general",
      title: "FAQs",
      icon: "clipboard-list" as const,
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
  ] as const satisfies readonly FaqCategory[],
  disclaimer:
    "The information provided in this FAQ section is for general informational purposes only and is not a substitute for professional medical advice. Always consult with your healthcare provider for personalized guidance.",
  cta: {
    title: "Still have",
    titleHighlight: "questions?",
    description: "Our patient support team is here to help — no pressure, just clear answers.",
    primaryCta: "Contact support",
    primaryHref: "/contact",
    secondaryCta: "Start evaluation",
  },
} as const;

/** Flat list of all FAQ items for search */
export function getAllFaqItems(): FaqItem[] {
  return faqPageContent.categories.flatMap((cat) => [...cat.items]);
}

export function getPopularFaqItems(): FaqItem[] {
  const all = getAllFaqItems();
  return faqPageContent.popular.ids
    .map((id) => all.find((item) => item.id === id))
    .filter((item): item is FaqItem => item !== undefined);
}
