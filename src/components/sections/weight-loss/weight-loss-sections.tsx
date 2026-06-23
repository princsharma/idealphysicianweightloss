import {
  ArrowUpRight,
  Check,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, RevealLine, Stagger, StaggerChild } from "@/components/client/reveal";
import { TestimonialsCarousel } from "@/components/client/testimonials-carousel";
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
import { weightLossContent } from "@/lib/constants/weight-loss-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function WeightLossHero() {
  const { hero } = weightLossContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(85vh,820px)] justify-center pt-28 pb-20 sm:pt-32"
    >
      <div className="orb -left-32 top-1/4 size-96 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-[28rem] bg-lime/10" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" direction="up" distance={36}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <DisplayHeading size="xl" className="max-w-4xl text-white">
              {hero.title}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
              {hero.description}
            </p>

            <ul className="mt-10 flex flex-wrap gap-3" aria-label="Program highlights">
              {hero.trustSignals.map((signal) => {
                const Icon = getIcon(signal.icon);
                return (
                  <li
                    key={signal.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                  >
                    <Icon className="size-4 text-lime-bright" aria-hidden />
                    {signal.label}
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
              <LinkButton href={hero.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
                {hero.secondaryCta}
              </LinkButton>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" variant="scale" duration={0.9} delay={0.12}>
            <div className="wl-hero-visual relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="wl-hero-visual__overlay" aria-hidden />
              <div className="wl-hero-visual__badge">
                <span className="font-display text-3xl font-bold text-white">4.8</span>
                <span className="text-sm text-white/60">Patient satisfaction</span>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossOverview() {
  const { overview } = weightLossContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={28} className="max-w-3xl">
          <Eyebrow className="text-forest">{overview.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {overview.title}{" "}
            <span className="text-gradient">{overview.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">{overview.description}</p>
        </Reveal>

        <Stagger className="mt-14" stagger={0.08}>
          <BentoGrid>
            {overview.pillars.map((pillar, index) => (
              <StaggerChild key={pillar.title} className={cn(index < 2 ? "lg:col-span-6" : "lg:col-span-6")}>
                <BentoCard variant="light" className="h-full">
                  <span className="font-display text-sm font-semibold text-forest">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{pillar.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossWhyMedical() {
  const { whyMedical } = weightLossContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-24 sm:py-32">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start" direction="left" distance={32}>
            <Eyebrow>Science-backed</Eyebrow>
            <DisplayHeading className="text-white">
              {whyMedical.title}{" "}
              <span className="text-gradient">{whyMedical.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-lg leading-relaxed text-white/55">{whyMedical.description}</p>
            <RevealLine className="mt-10 bg-accent/30" delay={0.2} />

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1" stagger={0.08}>
              {whyMedical.badges.map((badge) => (
                <StaggerChild key={badge.title}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="font-display text-sm font-semibold text-lime-bright">{badge.title}</p>
                    <p className="mt-1 text-xs text-white/50">{badge.subtitle}</p>
                  </div>
                </StaggerChild>
              ))}
            </Stagger>
          </Reveal>

          <Stagger className="space-y-5 lg:col-span-7" stagger={0.1}>
            {whyMedical.reasons.map((reason) => (
              <StaggerChild key={reason.title}>
                <BentoCard variant="glass" hover={false}>
                  <h3 className="font-display text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{reason.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

function MedicationFamilyCard({
  family,
  variant,
}: {
  family: typeof weightLossContent.medications.semaglutide | typeof weightLossContent.medications.tirzepatide;
  variant: "semaglutide" | "tirzepatide";
}) {
  return (
    <BentoCard variant="light" className="h-full">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">{family.tagline}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{family.name}</h3>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            variant === "semaglutide" ? "bg-teal-500/10 text-teal-800" : "bg-violet-500/10 text-violet-800",
          )}
        >
          {variant === "semaglutide" ? "GLP-1" : "GLP-1 + GIP"}
        </span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">{family.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {family.brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center gap-4 rounded-2xl border border-border-strong bg-paper p-4"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image src={brand.image} alt={brand.name} fill className="object-contain p-1" sizes="64px" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-ink">{brand.name}</p>
              <p className="text-xs text-ink-muted">{brand.subtitle}</p>
              <p className="mt-1 text-xs font-medium text-forest">{brand.highlight}</p>
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-8 grid gap-2 sm:grid-cols-2">
        {family.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2 text-sm text-ink-muted">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden />
            {benefit}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function WeightLossMedications() {
  const { medications } = weightLossContent;

  return (
    <ScrollSection id="medications" theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl" direction="left" distance={28}>
            <Eyebrow className="text-accent">{medications.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {medications.title}{" "}
              <span className="text-gradient">{medications.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.1} direction="right" distance={20} variant="fade">
            <p className="max-w-md text-ink-muted lg:text-right">{medications.description}</p>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.12}>
          <StaggerChild>
            <MedicationFamilyCard family={medications.semaglutide} variant="semaglutide" />
          </StaggerChild>
          <StaggerChild>
            <MedicationFamilyCard family={medications.tirzepatide} variant="tirzepatide" />
          </StaggerChild>
        </Stagger>

        <Reveal delay={0.15} className="mt-8">
          <p className="text-center text-sm text-ink-subtle">{medications.note}</p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossHowItWorks() {
  const { howItWorks } = weightLossContent;

  return (
    <ScrollSection id="how-it-works" theme="dark" snap={false} className="noise justify-center py-20 sm:py-28">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={32}>
            <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {howItWorks.title}{" "}
              <span className="text-gradient">{howItWorks.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-white/50">{howItWorks.description}</p>
            <RevealLine className="mt-10 bg-accent/30" delay={0.2} />
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent lg:left-6" aria-hidden />

            <ol className="space-y-0">
              {howItWorks.steps.map((step, index) => {
                const Icon = getIcon(step.icon);
                const isLast = index === howItWorks.steps.length - 1;

                return (
                  <Reveal key={step.id} delay={index * 0.12} direction="right" distance={24}>
                    <li
                      className={cn(
                        "relative grid gap-6 pb-16 pl-14 lg:grid-cols-[1fr_auto] lg:pl-20",
                        isLast && "pb-0",
                      )}
                    >
                      <span
                        className="absolute left-0 flex size-8 items-center justify-center rounded-full border border-accent/40 bg-dark font-display text-sm font-semibold text-accent-bright lg:size-12 lg:text-base"
                        aria-hidden
                      >
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{step.title}</h3>
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-white/55">{step.description}</p>
                      </div>

                      <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:size-16">
                        <Icon className="size-6 text-accent-bright lg:size-7" aria-hidden />
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossEligibility() {
  const { eligibility } = weightLossContent;

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

export function WeightLossBenefits() {
  const { benefits } = weightLossContent;

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

export function WeightLossJourney() {
  const { journey } = weightLossContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{journey.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {journey.title}{" "}
            <span className="text-gradient">{journey.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-[4.5rem] top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent lg:block" aria-hidden />

          <Stagger className="space-y-6" stagger={0.1}>
            {journey.phases.map((phase, index) => (
              <StaggerChild key={phase.title}>
                <div className="grid gap-4 lg:grid-cols-[9rem_1fr] lg:items-start">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-accent/40 bg-dark font-display text-sm font-semibold text-accent-bright lg:size-12">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-lime-bright">{phase.phase}</span>
                  </div>
                  <BentoCard variant="glass" hover={false}>
                    <h3 className="font-display text-lg font-semibold text-white">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{phase.text}</p>
                  </BentoCard>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossPricing() {
  const { pricing } = weightLossContent;

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
                <p className="mt-4 flex items-baseline gap-1">
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

export function WeightLossFaq() {
  const { faq } = weightLossContent;

  return (
    <ScrollSection id="faq" theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <PolicyFaq
          eyebrow={faq.eyebrow}
          title={faq.title}
          titleHighlight={faq.titleHighlight}
          items={faq.items}
        />
        <Reveal delay={0.2} className="mt-10 text-center lg:col-span-12">
          <LinkButton href={faq.viewAllHref} variant="ghost" className="text-forest">
            {faq.viewAllLabel}
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossTestimonials() {
  const { testimonials } = weightLossContent;

  return (
    <ScrollSection theme="light" snap={false} className="justify-center py-20 sm:py-28">
      <SectionContainer className="flex flex-1 flex-col justify-center">
        <Reveal className="mb-14 text-center" direction="up" distance={28}>
          <Eyebrow className="text-accent">{testimonials.eyebrow}</Eyebrow>
          <DisplayHeading className="mx-auto max-w-3xl text-ink">
            {testimonials.title}{" "}
            <span className="text-gradient">{testimonials.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.15} variant="scale" direction="up" distance={24}>
          <TestimonialsCarousel />
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function WeightLossCta() {
  const { cta } = weightLossContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise justify-center">
      <div className="orb left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/15" aria-hidden />

      <SectionContainer className="relative flex flex-1 flex-col items-center justify-center py-24 text-center sm:py-32">
        <Reveal direction="up" distance={40}>
          <DisplayHeading size="xl" className="max-w-4xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.15} direction="up" distance={24} variant="fade">
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 sm:text-xl">{cta.description}</p>
        </Reveal>
        <Reveal delay={0.25} direction="up" distance={20} variant="scale">
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
