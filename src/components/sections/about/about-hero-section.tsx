import Image from "next/image";
import { Users } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutHeroSection() {
  const { hero } = aboutContent;

  return (
    <section className="about-ref-hero">
      <SectionContainer>
        <div className="about-ref-hero__grid">
          <Reveal direction="left" distance={28}>
            <div className="about-ref-hero__copy">
              <h1 className="about-ref-hero__title">{hero.title}</h1>
              <p className="about-ref-hero__desc">{hero.description}</p>
            </div>
          </Reveal>

          <Reveal variant="scale" duration={0.85} delay={0.08}>
            <div className="about-ref-hero__image-wrap">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" distance={20} delay={0.15}>
          <ul className="about-ref-hero__stats">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="about-ref-stat">
                <span className="about-ref-stat__icon" aria-hidden>
                  <Users className="size-5" />
                </span>
                <div>
                  <p className="about-ref-stat__value">{stat.value}</p>
                  <p className="about-ref-stat__label">{stat.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
