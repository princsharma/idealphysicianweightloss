import { ArrowUpRight, Check } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal } from "@/components/client/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { alabamaContent } from "@/lib/constants/states/alabama-content";

export function AlabamaPathSection() {
  const { path } = alabamaContent;

  return (
    <section id="path" className="scroll-mt-32 bg-paper py-14 sm:py-16">
      <SectionContainer>
        <Reveal direction="up" distance={20}>
          <Eyebrow className="text-accent">{path.eyebrow}</Eyebrow>
          <DisplayHeading className="max-w-3xl text-ink">
            {path.title}{" "}
            <span className="text-gradient">{path.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">{path.description}</p>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="overflow-visible" direction="left" distance={24} delay={0.05}>
            <div className="state-price-panel overflow-visible p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">Evaluation</p>
              <p className="mt-1 font-display text-[clamp(2.5rem,7vw,3.75rem)] font-semibold leading-none text-white">
                {path.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{path.priceNote}</p>
              <ul className="state-price-features mt-5 space-y-2.5">
                {path.priceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-snug text-white/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-bright" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 px-1">
                <MagneticButton className="block w-full">
                  <LinkButton href={siteConfig.bookingUrl} size="lg" className="w-full rounded-full">
                    {path.cta}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </LinkButton>
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal className="overflow-visible" direction="right" distance={20} delay={0.1}>
            <div className="state-timeline">
              {path.steps.map((step, index) => (
                <div key={step.id} className="state-timeline__item">
                  <div className="state-timeline__marker" aria-hidden>
                    <span className="state-timeline__dot" />
                    {index < path.steps.length - 1 ? <span className="state-timeline__line" /> : null}
                  </div>
                  <div className="state-timeline__content min-w-0">
                    <p className="font-display text-sm font-semibold text-accent">{step.id}</p>
                    <h3 className="mt-0.5 font-display text-xl font-semibold text-ink sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
