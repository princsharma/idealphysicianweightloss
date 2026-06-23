import { Atom } from "lucide-react";

import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutScienceSection() {
  const { science } = aboutContent;

  return (
    <section className="about-ref-science">
      <SectionContainer>
        <Reveal direction="up" distance={24}>
          <div className="about-ref-science__inner">
            <span className="about-ref-science__icon" aria-hidden>
              <Atom className="size-10" />
            </span>
            <h2 className="about-ref-science__title">{science.title}</h2>
            <p className="about-ref-science__desc">{science.description}</p>

            <ul className="about-ref-science__badges">
              {science.badges.map((badge) => (
                <li key={badge.title} className="about-ref-science__badge">
                  <p className="about-ref-science__badge-title">{badge.title}</p>
                  <p className="about-ref-science__badge-sub">{badge.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
