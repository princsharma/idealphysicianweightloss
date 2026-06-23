import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutMissionSection() {
  const { mission, navButtons } = aboutContent;

  return (
    <>
      <section className="about-ref-mission" id="mission">
        <SectionContainer>
          <div className="about-ref-mission__grid">
            <Reveal variant="scale" duration={0.85}>
              <div className="about-ref-mission__image-wrap">
                <Image
                  src={mission.image.src}
                  alt={mission.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </Reveal>

            <Reveal direction="right" distance={24} delay={0.1}>
              <div>
                <span className="about-ref-pill">{mission.eyebrow}</span>
                <h2 className="about-ref-heading">{mission.title}</h2>
                <p className="about-ref-body mt-4">{mission.description}</p>

                <p className="about-ref-subheading mt-8">Our Core Principles</p>
                <ul className="about-ref-checklist mt-4">
                  {mission.principles.map((item) => (
                    <li key={item}>
                      <Check className="size-4 shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>

      <section className="about-ref-nav-buttons" aria-label="Page sections">
        <SectionContainer>
          <Reveal direction="up" distance={16}>
            <div className="about-ref-nav-buttons__row">
              {navButtons.map((btn) => (
                <a key={btn.href} href={btn.href} className="about-ref-nav-btn">
                  {btn.label}
                </a>
              ))}
            </div>
          </Reveal>
        </SectionContainer>
      </section>
    </>
  );
}
