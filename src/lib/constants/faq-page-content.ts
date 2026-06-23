import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

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
    ids: [
      "faq-3",
      "faq-1",
      "med-sg-1",
      "med-sg-6",
      "pr-faq-1",
      "safe-sg-1",
      "treat-results",
    ],
  },
  categories: [
    {
      id: "treatment",
      title: "Treatment questions",
      icon: "clipboard-list" as const,
      items: [
        {
          id: "faq-1",
          question: "How does the eligibility quiz work?",
          answer:
            "Our 5-minute quiz asks about your health history, current medications, and weight loss goals. A licensed physician reviews your responses to determine if GLP-1 therapy is right for you.",
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
          id: "treat-results",
          question: "How long does it take to see results with semaglutide?",
          answer:
            "Individual results may vary, but many people start experiencing weight loss within the first few weeks of treatment. Significant results are often seen after several months of consistent use, along with a healthy lifestyle.",
        },
        {
          id: "treat-combine",
          question: "Can I continue other weight loss methods while using GLP-1 medication?",
          answer:
            "It is crucial to discuss any other weight loss methods or medications you are using with your healthcare provider. Combining GLP-1 therapy with a balanced diet and regular exercise can enhance its effectiveness.",
        },
        {
          id: "treat-regain",
          question: "Will I regain weight after stopping treatment?",
          answer:
            "GLP-1 therapy helps establish healthy eating habits and sustainable weight loss. However, maintaining your weight loss will depend on continuing a healthy lifestyle after completing treatment.",
        },
        {
          id: "treat-diet",
          question: "Are there any dietary restrictions while using GLP-1 medication?",
          answer:
            "There are no specific dietary restrictions associated with GLP-1 use. However, adopting a balanced, nutrient-dense diet can optimize your weight loss journey.",
        },
        {
          id: "treat-diabetes",
          question: "Can GLP-1 medication help with weight-related conditions like diabetes?",
          answer:
            "Yes, GLP-1 medications can help improve insulin sensitivity and blood sugar control in individuals with type 2 diabetes. They may also lead to reduced medication requirements for managing diabetes.",
        },
        {
          id: "hiw-process",
          question: "How long does the entire process take?",
          answer:
            "Most patients complete their eligibility quiz and consultation within the same day. Medication typically arrives within 3 to 5 business days after prescription approval.",
        },
        {
          id: "hiw-inperson",
          question: "Do I need to visit a clinic in person?",
          answer:
            "No. All consultations are conducted via HIPAA-secure telehealth. You can complete the entire process from home.",
        },
      ],
    },
    {
      id: "medication",
      title: "Medication questions",
      icon: "pill" as const,
      items: [
        {
          id: "faq-2",
          question: "Are the medications FDA-approved?",
          answer:
            "Yes. We prescribe FDA-approved medications including Wegovy, Ozempic, Zepbound, Mounjaro, and Saxenda. Compounded options use the same active ingredients under physician supervision.",
        },
        {
          id: "med-sg-1",
          question: "What is semaglutide, and how does it work for weight loss?",
          answer:
            "Semaglutide is a GLP-1 receptor agonist medication used for weight management. It works by suppressing appetite, promoting feelings of fullness, and enhancing insulin sensitivity, leading to reduced food intake and sustainable weight loss.",
        },
        {
          id: "med-sg-2",
          question: "Is semaglutide FDA-approved for weight loss?",
          answer:
            "Yes, semaglutide has received FDA approval for weight management. It is available under the brand name Wegovy for individuals struggling with obesity or excess weight.",
        },
        {
          id: "med-sg-3",
          question: "Can anyone use semaglutide for weight loss?",
          answer:
            "Semaglutide is suitable for adults with obesity or those with excess weight and at least one weight-related condition (e.g., hypertension, type 2 diabetes). However, it is essential to consult a healthcare professional to determine if semaglutide is appropriate for individual health needs.",
        },
        {
          id: "med-sg-4",
          question: "How is semaglutide administered?",
          answer:
            "Semaglutide is administered as a once-weekly injection. The dosage and administration instructions will be determined by your healthcare provider based on your specific needs.",
        },
        {
          id: "med-sg-5",
          question: "What is the difference between Wegovy and Ozempic?",
          answer:
            "Both contain semaglutide as the active ingredient. Wegovy is FDA-approved specifically for chronic weight management in adults. Ozempic is FDA-approved for type 2 diabetes. A licensed physician determines which formulation is clinically appropriate for your needs.",
        },
        {
          id: "med-tz-1",
          question: "How is tirzepatide different from semaglutide?",
          answer:
            "Semaglutide activates GLP-1 receptors only. Tirzepatide activates both GLP-1 and GIP receptors, which may produce greater average weight loss in clinical trials. Your physician helps determine which medication is best for you.",
        },
        {
          id: "med-generic",
          question: "Is semaglutide available in generic form?",
          answer:
            "As of now, semaglutide is only available under brand names like Wegovy for weight management and Ozempic for diabetes treatment. Compounded options with the same active ingredient may be available when clinically appropriate.",
        },
        {
          id: "med-otc",
          question: "Can I purchase GLP-1 medication over-the-counter?",
          answer:
            "GLP-1 medications are not available over-the-counter and require a prescription from a licensed healthcare provider for use in weight management.",
        },
        {
          id: "med-interact",
          question: "Can GLP-1 medication interact with other medications I'm taking?",
          answer:
            "It's important to inform your healthcare provider about all the medications, supplements, and herbal products you are taking to ensure there are no potential interactions.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing questions",
      icon: "receipt" as const,
      items: [
        {
          id: "faq-3",
          question: "How much does the program cost?",
          answer:
            "Plans start at $299/month, which includes your physician consultation, medication, and ongoing support. There are no hidden fees or long-term contracts.",
        },
        {
          id: "pr-cost",
          question: "How much does semaglutide treatment cost?",
          answer: `The cost can vary based on dosage and formulation. Plans at ${brand} start at $299/month including consultation, medication, and support.`,
        },
        {
          id: "pr-assist",
          question: "Are there financial assistance programs available?",
          answer:
            "Some manufacturers offer patient assistance programs or copay savings cards to help eligible individuals afford medication. Inquire with your healthcare provider or the manufacturer for more information.",
        },
        {
          id: "pr-additional",
          question: "Are there additional costs associated with treatment?",
          answer:
            "In addition to the medication cost, there may be costs related to consultations with your healthcare provider and any required medical tests during your weight loss journey.",
        },
        {
          id: "pr-refund",
          question: "What is your refund policy?",
          answer: `If a consultation has not yet taken place, patients may request a cancellation or refund. Once completed, consultation fees are non-refundable. See our refund policy for full details.`,
        },
        {
          id: "contact-insurance",
          question: "Do you accept insurance?",
          answer:
            "Coverage varies by plan and state. Our team can help you understand options during your evaluation — many patients use HSA/FSA or transparent self-pay pricing.",
        },
      ],
    },
    {
      id: "safety",
      title: "Safety questions",
      icon: "shield" as const,
      items: [
        {
          id: "faq-6",
          question: "What if I experience side effects?",
          answer:
            "Your care team is available 24/7 to address any concerns. Physicians can adjust your dosage or recommend supportive measures to manage common side effects like nausea.",
        },
        {
          id: "safe-sg-1",
          question: "Is semaglutide safe for weight loss?",
          answer:
            "Semaglutide is generally well-tolerated. However, like any medication, it may have side effects. It is essential to discuss your medical history and any existing health conditions with your healthcare provider before starting treatment.",
        },
        {
          id: "safe-common",
          question: "What are the common side effects of GLP-1 medication?",
          answer:
            "Common side effects include nausea, vomiting, and diarrhea, which are usually mild and transient. Your healthcare provider can suggest ways to manage these side effects if they occur.",
        },
        {
          id: "safe-serious",
          question: "Are there serious side effects I should be aware of?",
          answer:
            "Serious side effects are rare but can include pancreatitis, kidney problems, and thyroid tumors. It's essential to seek medical attention immediately if you experience any unusual symptoms.",
        },
        {
          id: "safe-pregnancy",
          question: "Is GLP-1 medication safe during pregnancy or breastfeeding?",
          answer:
            "GLP-1 medications are not recommended during pregnancy or breastfeeding. If you are pregnant, planning to become pregnant, or breastfeeding, consult your healthcare provider for suitable weight management options.",
        },
        {
          id: "safe-pediatric",
          question: "Can GLP-1 medication be used in adolescents or children?",
          answer:
            "GLP-1 medications are not approved for use in individuals under the age of 18 years. Safety and efficacy in this age group have not been established.",
        },
        {
          id: "safe-emergency",
          question: "Is this service for medical emergencies?",
          answer:
            "No. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room. Our team handles non-urgent weight-loss care and program support.",
        },
        {
          id: "safe-alcohol",
          question: "Can I drink alcohol while using GLP-1 medication?",
          answer:
            "It's best to limit alcohol consumption, as excessive alcohol intake may interfere with your weight loss efforts and overall health.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & support",
      icon: "user-check" as const,
      items: [
        {
          id: "acct-response",
          question: "How quickly will I hear back from support?",
          answer:
            "Patient support typically responds within two hours during business hours and within one business day for email and form messages submitted after hours.",
        },
        {
          id: "acct-existing",
          question: "I'm already a patient — who should I contact?",
          answer:
            "Use the patient portal for prescriptions and appointments. For billing or clinical questions, call our support line or send a message with your patient ID.",
        },
        {
          id: "acct-exercise",
          question: "Do I need to follow a specific exercise routine?",
          answer:
            "Regular physical activity is beneficial for overall health and weight management. Your healthcare provider can recommend an exercise plan tailored to your fitness level and goals.",
        },
        {
          id: "acct-lifestyle",
          question: "How can I support my weight loss journey?",
          answer:
            "Alongside medication, adopting a balanced diet, staying physically active, and cultivating positive lifestyle habits can optimize your weight loss results.",
        },
        {
          id: "acct-energy",
          question: "Will GLP-1 medication affect my energy levels?",
          answer:
            "GLP-1 therapy is designed to enhance well-being, and many individuals report increased energy levels as they progress on their weight loss journey.",
        },
        {
          id: "acct-counseling",
          question: "Is counseling or support available during treatment?",
          answer:
            "Many healthcare providers offer counseling and support to patients using GLP-1 medications for weight management. Discuss with your provider if these resources are available to you.",
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
