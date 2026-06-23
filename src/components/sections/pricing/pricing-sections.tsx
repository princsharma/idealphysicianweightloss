import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { LinkButton } from "@/components/ui/link-button";
import { PolicyFaq } from "@/components/ui/policy-faq";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { pricingContent } from "@/lib/constants/pricing-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function PricingHero() {
  const { hero } = pricingContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(68vh,640px)] justify-center pt-28 pb-20 sm:pt-32"
    >
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <SectionContainer className="relative text-center">
        <Reveal direction="up" distance={32}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <DisplayHeading size="xl" className="mx-auto max-w-4xl text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">{hero.description}</p>
          <ul className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
            {hero.trustSignals.map((signal) => {
              const Icon = getIcon(signal.icon);
              return (
                <li
                  key={signal.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  <Icon className="size-4 text-lime-bright" aria-hidden />
                  {signal.label}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingOverview() {
  const { overview } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{overview.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {overview.title}{" "}
            <span className="text-gradient">{overview.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-ink-muted">{overview.description}</p>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {overview.highlights.map((item) => (
            <li key={item.slice(0, 48)} className="hub-glass-card flex gap-3">
              <Check className="size-5 shrink-0 text-forest" aria-hidden />
              <span className="text-sm text-ink-muted sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingIncluded() {
  const { included } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{included.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {included.title}{" "}
            <span className="text-gradient">{included.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-14" stagger={0.08}>
          <BentoGrid>
            {included.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerChild key={item.id} className="lg:col-span-4">
                  <BentoCard variant="light" className="h-full">
                    <Icon className="size-5 text-forest" aria-hidden />
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
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

export function PricingComparePlans() {
  const { plans } = pricingContent;

  return (
    <ScrollSection id="plans" theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow>{plans.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {plans.title}{" "}
            <span className="text-gradient">{plans.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-white/55">{plans.description}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:mx-auto lg:max-w-4xl lg:grid-cols-2" stagger={0.1}>
          {plans.items.map((plan) => (
            <StaggerChild key={plan.id}>
              <BentoCard
                variant={plan.highlighted ? "accent" : "glass"}
                className={cn("flex h-full flex-col", plan.highlighted && "ring-2 ring-lime/30")}
                hover={false}
              >
                {plan.highlighted ? (
                  <span className="mb-4 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  <span className={cn("text-sm", plan.highlighted ? "text-accent-foreground/80" : "text-white/60")}>
                    {plan.period}
                  </span>
                </p>
                <p className={cn("mt-3 text-sm", plan.highlighted ? "text-accent-foreground/90" : "text-white/60")}>
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex gap-2 text-sm",
                        plan.highlighted ? "text-accent-foreground/90" : "text-white/70",
                      )}
                    >
                      <Check className="mt-0.5 size-4 shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <LinkButton
                    href={siteConfig.bookingUrl}
                    size="lg"
                    className={cn("w-full rounded-full", !plan.highlighted && "border-white/20 text-white hover:bg-white/10")}
                    variant={plan.highlighted ? "primary" : "outline-dark"}
                  >
                    {plan.cta}
                  </LinkButton>
                </div>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-sm text-white/45">{plans.disclaimer}</p>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingMedications() {
  const { medications } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{medications.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {medications.title}{" "}
            <span className="text-gradient">{medications.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-ink-muted">{medications.description}</p>
        </Reveal>
        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {medications.items.map((item) => (
            <StaggerChild key={item.slice(0, 48)}>
              <BentoCard variant="light">
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingConsultation() {
  const { consultation } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{consultation.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {consultation.title}{" "}
            <span className="text-gradient">{consultation.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {consultation.items.map((item) => (
            <StaggerChild key={item.title}>
              <BentoCard variant="light" className="h-full">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
        <Reveal delay={0.15} className="mt-8">
          <LinkButton href={consultation.refundHref} variant="ghost" className="text-forest">
            View full refund policy
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingMonthlyProcess() {
  const { monthlyProcess } = pricingContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{monthlyProcess.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {monthlyProcess.title}{" "}
            <span className="text-gradient">{monthlyProcess.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 to-transparent lg:block" aria-hidden />
          <Stagger className="space-y-6" stagger={0.1}>
            {monthlyProcess.steps.map((step, index) => (
              <StaggerChild key={step.title}>
                <BentoCard variant="glass" hover={false} className="lg:ml-12">
                  <span className="text-xs font-semibold uppercase tracking-wider text-lime-bright">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingInsurance() {
  const { insurance } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">{insurance.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {insurance.title}{" "}
              <span className="text-gradient">{insurance.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-5 text-ink-muted">{insurance.description}</p>
            <p className="mt-4 text-sm text-ink-subtle">{insurance.note}</p>
          </Reveal>
          <ul className="space-y-4">
            {insurance.items.map((item) => (
              <li key={item.slice(0, 48)} className="hub-glass-card flex gap-3">
                <Check className="size-5 shrink-0 text-forest" aria-hidden />
                <span className="text-sm text-ink-muted sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingFaq() {
  const { faq } = pricingContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <PolicyFaq eyebrow={faq.eyebrow} title={faq.title} titleHighlight={faq.titleHighlight} items={faq.items} />
        <Reveal delay={0.15} className="mt-8 text-center">
          <LinkButton href={faq.viewAllHref} variant="ghost" className="text-forest">
            {faq.viewAllLabel}
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PricingCta() {
  const { cta } = pricingContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-24 sm:py-32">
      <SectionContainer className="text-center">
        <Reveal direction="up" distance={28}>
          <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {cta.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </LinkButton>
            </MagneticButton>
            <LinkButton href={cta.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
              {cta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
