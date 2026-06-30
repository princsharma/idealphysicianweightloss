import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/home/hero-section";
import { Header } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { HERO_LCP } from "@/lib/constants/hero-gallery";
import { createPageMetadata } from "@/lib/seo";
import { buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { homeContent } from "@/lib/constants/home-content";
import { JsonLd } from "@/components/shared/json-ld";

const HeroStartSection = dynamic(() =>
  import("@/components/sections/home/hero-start-section").then((m) => ({ default: m.HeroStartSection })),
);
const StatsSection = dynamic(() =>
  import("@/components/sections/home/stats-section").then((m) => ({ default: m.StatsSection })),
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/home/process-section").then((m) => ({ default: m.ProcessSection })),
);
const TreatmentsSection = dynamic(() =>
  import("@/components/sections/home/treatments-section").then((m) => ({ default: m.TreatmentsSection })),
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/home/why-us").then((m) => ({ default: m.WhyUsSection })),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/home/testimonials-section").then((m) => ({ default: m.TestimonialsSection })),
);
const FaqSection = dynamic(() =>
  import("@/components/sections/home/faq").then((m) => ({ default: m.FaqSection })),
);
const FinalCtaSection = dynamic(() =>
  import("@/components/sections/home/final-cta").then((m) => ({ default: m.FinalCtaSection })),
);
const Footer = dynamic(() =>
  import("@/components/layout/footer").then((m) => ({ default: m.Footer })),
);

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "medical weight loss",
    "GLP-1 weight loss",
    "online weight loss doctor",
    "semaglutide telehealth",
    "tirzepatide prescription online",
    "physician weight loss program",
  ],
});

export default function HomePage() {
  const faqSchema = buildFaqSchema(
    homeContent.faq.items.map((item) => ({ question: item.question, answer: item.answer })),
  );
  const serviceSchema = buildServiceSchema({
    name: "Physician-Guided Weight Loss Program",
    description: siteConfig.description,
    path: "/",
  });

  return (
    <>
      <JsonLd data={[faqSchema, serviceSchema]} />
      <link
        rel="preload"
        as="image"
        href={HERO_LCP.src}
        type="image/webp"
        fetchPriority="high"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <HeroStartSection />
        <StatsSection />
        <ProcessSection />
        <TreatmentsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </>
  );
}
