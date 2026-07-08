import { ArrowUpRight, Check } from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function HomeEligibility() {
  const { eligibility } = homeContent;

  return (
    <ScrollSection id="eligibility" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">{eligibility.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {eligibility.title}{" "}
              <span className="text-gradient">{eligibility.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">{eligibility.description}</p>
            <p className="mt-4 text-sm text-ink-subtle">{eligibility.note}</p>
            <div className="mt-8">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="lg" className="rounded-full">
                  {eligibility.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
            </div>
          </Reveal>

          <BentoCard variant="light">
            <h3 className="font-display text-lg font-semibold text-ink">You may qualify if you are:</h3>
            <ul className="mt-6 space-y-4">
              {eligibility.qualifies.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HomeBenefits() {
  const { benefits } = homeContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{benefits.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {benefits.title}{" "}
            <span className="text-gradient">{benefits.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-14" stagger={0.08}>
          <BentoGrid>
            {benefits.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerChild key={item.id} className="lg:col-span-4">
                  <BentoCard variant="light" className="h-full">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-forest/10 bg-forest/5">
                      <Icon className="size-5 text-forest" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                  </BentoCard>
                </StaggerChild>
              );
            })}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HomeExperience() {
  const { experience } = homeContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{experience.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {experience.title}{" "}
            <span className="text-gradient">{experience.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-lg text-white/55">{experience.description}</p>
        </Reveal>

        <Stagger className="mt-14 space-y-6" stagger={0.1}>
          {experience.items.map((item, index) => (
            <StaggerChild key={item.title}>
              <div className="grid gap-4 lg:grid-cols-[3rem_1fr] lg:items-start">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-accent/40 bg-dark font-display text-sm font-semibold text-accent-bright lg:size-12">
                  {index + 1}
                </span>
                <BentoCard variant="glass" hover={false}>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{item.text}</p>
                </BentoCard>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HomePricing() {
  const { pricing } = homeContent;

  return (
    <ScrollSection id="pricing" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{pricing.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {pricing.title}{" "}
            <span className="text-gradient">{pricing.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base text-ink-muted">{pricing.description}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:mx-auto lg:max-w-4xl lg:grid-cols-2" stagger={0.1}>
          {pricing.plans.map((plan) => (
            <StaggerChild key={plan.name}>
              <BentoCard
                variant={plan.highlighted ? "accent" : "light"}
                className={cn("h-full", plan.highlighted && "ring-2 ring-forest/20")}
              >
                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                {"pricePrefix" in plan && plan.pricePrefix ? (
                  <p className="mt-4 text-sm font-medium text-ink-muted">{plan.pricePrefix}</p>
                ) : null}
                <p className={cn("flex items-baseline gap-1", "pricePrefix" in plan && plan.pricePrefix ? "mt-1" : "mt-4")}>
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className={cn("text-sm", plan.highlighted ? "text-accent-foreground/80" : "text-ink-muted")}>
                    {plan.period}
                  </span>
                </p>
                <p className={cn("mt-3 text-sm", plan.highlighted ? "text-accent-foreground/90" : "text-ink-muted")}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex gap-2 text-sm",
                        plan.highlighted ? "text-accent-foreground/90" : "text-ink-muted",
                      )}
                    >
                      <Check className="mt-0.5 size-4 shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-8 text-center">
          <p className="text-sm text-ink-subtle">{pricing.disclaimer}</p>
          <div className="mt-8">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="lg" className="rounded-full">
                {pricing.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </MagneticButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
