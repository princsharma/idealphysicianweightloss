import { Reveal } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { contactContent } from "@/lib/constants/contact-content";

export function ContactHeroSection() {
  const { hero } = contactContent;

  return (
    <ScrollSection theme="dark" snap={false} className="hero-forest noise relative min-h-[min(72vh,720px)] justify-center hero-section-top pb-16 sm:pb-20">
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-96 bg-lime/10" aria-hidden />

      <SectionContainer className="relative flex flex-col justify-center">
        <Reveal direction="up" distance={32}>
          <Eyebrow>Contact</Eyebrow>
          <DisplayHeading size="xl" className="max-w-4xl text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.12} direction="up" distance={24} variant="fade">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {hero.description}
          </p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
