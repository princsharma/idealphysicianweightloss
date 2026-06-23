import { Award, FlaskConical, Heart, ShieldCheck } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

const icons = [Heart, Award, FlaskConical, ShieldCheck];

export function AboutValuesSection() {
  const { values } = aboutContent;

  return (
    <section className="about-ref-values">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="about-ref-section-header">
          <h2 className="about-ref-heading text-center">{values.title}</h2>
          <p className="about-ref-body about-ref-section-header__sub mx-auto mt-4 text-center">
            {values.subtitle}
          </p>
        </Reveal>

        <Stagger className="about-ref-values__grid mt-12" stagger={0.08}>
          {values.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerChild key={item.title}>
                <article className="about-ref-value-card">
                  <span className="about-ref-value-card__icon" aria-hidden>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="about-ref-value-card__title">{item.title}</h3>
                  <p className="about-ref-value-card__body">{item.description}</p>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
