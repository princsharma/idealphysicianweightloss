import {
  FaqSection,
  FinalCtaSection,
  HeroSection,
  ProcessSection,
  StatsSection,
  TestimonialsSection,
  TreatmentsSection,
  WhyUsSection,
} from "@/components/sections/home";
import { Footer, Header } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="scroll-snap-page" tabIndex={-1}>
        <div className="scroll-stack">
          <div className="snap-section scroll-stack-section flex min-h-[100svh] flex-col bg-[#265934]">
            <HeroSection />
          </div>
          <StatsSection />
          <ProcessSection />
          <TreatmentsSection />
          <WhyUsSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
