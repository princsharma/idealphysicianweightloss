import type { IconName } from "@/lib/utils/icons";

export type BrandMedicationAccent =
  | "blue"
  | "teal"
  | "violet"
  | "amber"
  | "emerald"
  | "rose";

export type BrandMedicationFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BrandMedicationVideo = {
  youtubeId: string;
  title: string;
};

export type BrandMedicationPageContent = {
  slug: string;
  accent: BrandMedicationAccent;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    description: string;
    pricingNote: string;
    image: string;
    imageAlt: string;
    primaryCta: string;
  };
  eligibility: {
    title: string;
    titleHighlight: string;
    items: readonly { text: string; icon: IconName }[];
    disclaimer: string;
    image: { src: string; alt: string };
    cta: string;
  };
  process: {
    title: string;
    description: string;
    steps: readonly { step: string; title: string; text: string }[];
    cta: string;
  };
  safety: {
    title: string;
    intro: string;
    cards: readonly { title: string; text: string; icon: IconName }[];
    disclaimer: string;
    cta: string;
  };
  mechanism: {
    title: string;
    titleHighlight: string;
    paragraphs: readonly string[];
    video?: BrandMedicationVideo;
    cta: string;
  };
  usage: {
    title: string;
    description: string;
    video?: BrandMedicationVideo;
  };
  injection: {
    title: string;
    paragraphs: readonly string[];
    image: { src: string; alt: string };
  };
  whyChoose: {
    title: string;
    titleHighlight: string;
    description: string;
    items: readonly { title: string; text: string; icon: IconName }[];
    image: { src: string; alt: string };
    disclaimer: string;
    cta: string;
  };
  testimonials: {
    title: string;
    description: string;
    items: readonly { quote: string; name: string; rating: number }[];
    cta: string;
  };
  physicians: {
    title: string;
    subtitle: string;
  };
  preFaqCta: {
    title: string;
    image: { src: string; alt: string };
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: readonly BrandMedicationFaqItem[];
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
  };
};
