export type StatePageContent = {
  slug: string;
  stateName: string;
  showStateMap: boolean;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    disclaimer: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    journeyLabel: string;
    highlights: readonly { label: string; detail: string }[];
    serviceAreas: readonly string[];
    badges: readonly string[];
  };
  approach: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    callout: string;
    body: string;
  };
  treatments: {
    id: string;
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    disclaimer: string;
    products: readonly {
      id: string;
      name: string;
      image: string;
      description: string;
      dosing: string;
      color: string;
    }[];
  };
  path: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    price: string;
    priceNote: string;
    priceFeatures: readonly string[];
    cta: string;
    steps: readonly { id: string; title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    items: readonly {
      id: string;
      quote: string;
      name: string;
      location: string;
      detail: string;
    }[];
  };
  cities: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    locations: readonly { city: string; region: string; counties: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  local: {
    stateAbbr: string;
    counties: number;
    countiesLabel: string;
    residentsLabel: string;
    residentAdjective: string;
    tagline: string;
  };
  personas: readonly {
    id: string;
    title: string;
    description: string;
    icon: "clock" | "heart" | "stethoscope";
  }[];
  faq: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { id: string; question: string; answer: string }[];
  };
};

export type StateSlug =
  | "alabama"
  | "louisiana"
  | "california"
  | "georgia"
  | "colorado"
  | "ohio";
