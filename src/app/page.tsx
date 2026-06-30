import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/home/hero-section";
import { Header } from "@/components/layout";
import { HERO_LCP } from "@/lib/constants/hero-gallery";

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

export default function HomePage() {
  return (
    <>
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
