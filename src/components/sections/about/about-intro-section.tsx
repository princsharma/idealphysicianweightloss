import { Reveal } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutIntroSection() {
  const { intro } = aboutContent;

  return (
    <section className="about-intro">
      <SectionContainer>
        <div className="about-intro__grid">
          <Reveal direction="left" distance={28}>
            <div>
              <p className="about-intro__eyebrow">{intro.eyebrow}</p>
              <h2 className="about-intro__heading">{intro.heading}</h2>
            </div>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <div>
              <p className="about-intro__lead">{intro.lead}</p>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="about-intro__body">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
