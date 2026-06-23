import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { aboutContent } from "@/lib/constants/about-content";

export function AboutStepsSection() {
  const { steps } = aboutContent;

  return (
    <section className="about-ref-steps" id={steps.id}>
      <SectionContainer>
        <Reveal direction="up" distance={24} className="about-ref-section-header">
          <h2 className="about-ref-heading text-center">{steps.title}</h2>
        </Reveal>

        <Stagger className="about-ref-steps__grid mt-12" stagger={0.1}>
          {steps.items.map((item, index) => (
            <StaggerChild key={item.step}>
              <article className="about-ref-step-card">
                <span className="about-ref-step-card__num" aria-hidden>
                  {index + 1}
                </span>
                <p className="about-ref-step-card__label">{item.step}</p>
                <h3 className="about-ref-step-card__title">{item.title}</h3>
                <p className="about-ref-step-card__body">{item.description}</p>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
