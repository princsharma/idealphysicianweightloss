import {
  Clock,
  HeartHandshake,
  Pill,
  Stethoscope,
  Truck,
  Users,
} from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

const icons = [Clock, Pill, HeartHandshake, Truck, Stethoscope, Users];

export function AboutWhyChooseSection() {
  const { whyChoose } = aboutContent;

  return (
    <section className="about-ref-why">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="about-ref-section-header">
          <h2 className="about-ref-heading text-center">{whyChoose.title}</h2>
          <p className="about-ref-body about-ref-section-header__sub mx-auto mt-4 text-center">
            {whyChoose.subtitle}
          </p>
        </Reveal>

        <Stagger className="about-ref-why__grid mt-12" stagger={0.08}>
          {whyChoose.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerChild key={item.title}>
                <article className="about-ref-card">
                  <span className="about-ref-card__icon" aria-hidden>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="about-ref-card__title">{item.title}</h3>
                  <p className="about-ref-card__body">{item.description}</p>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
