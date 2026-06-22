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
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
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
