import type { IconName } from "@/lib/utils/icons";

export type MedicationProduct = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  highlight: string;
  description: string;
};

export type MedicationLandingContent = {
  slug: string;
  accent: "teal" | "violet";
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    trustSignals: ReadonlyArray<{ label: string; icon: IconName }>;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    image: { src: string; alt: string };
    stat?: { value: string; label: string };
  };
  whatIs: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    paragraphs: readonly string[];
    highlights: readonly string[];
  };
  mechanism: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: ReadonlyArray<{ title: string; text: string; icon: IconName }>;
  };
  benefits: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    items: ReadonlyArray<{ id: string; title: string; description: string; icon: IconName }>;
  };
  eligibility: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    qualifies: readonly string[];
    mayNotQualify: readonly string[];
    note: string;
    cta: string;
  };
  expectedResults: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    stats: ReadonlyArray<{ value: string; label: string; detail: string }>;
    timeline: ReadonlyArray<{ period: string; text: string }>;
  };
  treatment: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    steps: ReadonlyArray<{ title: string; text: string; icon: IconName }>;
  };
  comparison?: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    products: readonly MedicationProduct[];
  };
  safety: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    items: readonly string[];
    warning: string;
  };
  sideEffects: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    common: readonly string[];
    serious: readonly string[];
    whenToSeekCare: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    items: ReadonlyArray<{ id: string; question: string; answer: string }>;
  };
  cta: {
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
};
