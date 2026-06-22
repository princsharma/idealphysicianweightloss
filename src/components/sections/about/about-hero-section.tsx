import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutHeroSection() {
  const { hero } = aboutContent;

  return (
    <section className="about-hero noise">
      <SectionContainer className="about-hero__grid pb-12 lg:pb-16">
        <Reveal direction="left" distance={32}>
          <div className="pb-6 lg:pb-12">
            <p className="about-hero__label">{hero.label}</p>
            <h1 className="about-hero__title">{hero.title}</h1>
          </div>
        </Reveal>

        <Reveal variant="scale" duration={0.9} delay={0.08} className="about-hero__portrait-wrap">
          <div className="about-hero__portrait relative h-full w-full max-w-[380px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 70vw, 380px"
              priority
            />
          </div>
        </Reveal>

        <Reveal direction="right" distance={28} delay={0.12}>
          <div className="pb-6 lg:pb-12 lg:text-left">
            <h2 className="about-hero__aside-title">{hero.asideTitle}</h2>
            <p className="about-hero__aside-text">{hero.asideText}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
