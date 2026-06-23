import { HeroStartBand } from "@/components/client/hero-start-band";
import { SectionContainer } from "@/components/ui/scroll-section";

export function HeroStartSection() {
  return (
    <section className="hero-start-section" id="start" aria-label="Start your evaluation">
      <SectionContainer>
        <HeroStartBand />
      </SectionContainer>
    </section>
  );
}
