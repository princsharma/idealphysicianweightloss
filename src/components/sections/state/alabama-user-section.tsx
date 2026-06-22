import { Clock, Heart, Stethoscope } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

const ICONS = {
  clock: Clock,
  heart: Heart,
  stethoscope: Stethoscope,
} as const;

export function AlabamaUserSection() {
  const { personas, local } = alabamaContent;

  return (
    <section id="for-you" className="scroll-mt-32 bg-paper py-20 sm:py-24">
      <SectionContainer>
        <Reveal direction="up" distance={24}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Built for you</p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-ink">
            Weight loss care that fits{" "}
            <span className="text-gradient">real {local.residentsLabel}</span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {personas.map((persona) => {
            const Icon = ICONS[persona.icon];
            return (
              <StaggerChild key={persona.id}>
                <article className="state-persona-card h-full">
                  <div className="state-persona-card__icon">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{persona.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{persona.description}</p>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </section>
  );
}
