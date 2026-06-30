import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, RevealLine, Stagger, StaggerChild } from "@/components/client/reveal";
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
import type { MedicationLandingContent } from "@/lib/constants/medication-landing-types";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

const accentBadge: Record<MedicationLandingContent["accent"], string> = {
  teal: "bg-teal-500/10 text-teal-800 border-teal-500/20",
  violet: "bg-violet-500/10 text-violet-800 border-violet-500/20",
};

const accentOrb: Record<MedicationLandingContent["accent"], string> = {
  teal: "bg-teal-400/15",
  violet: "bg-violet-400/15",
};

export function MedicationHero({ content }: { content: MedicationLandingContent }) {
  const { hero, accent } = content;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(82vh,780px)] justify-center hero-section-top pb-20"
    >
      <div className={cn("orb -left-32 top-1/4 size-96", accentOrb[accent])} aria-hidden />
      <div className="orb right-0 top-0 size-[28rem] bg-lime/10" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" direction="up" distance={36}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <DisplayHeading size="xl" className="max-w-4xl text-white">
              {hero.title}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">{hero.description}</p>

            <ul className="mt-10 flex flex-wrap gap-3" aria-label="Treatment highlights">
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
              {hero.stat ? (
                <div className="wl-hero-visual__badge">
                  <span className="font-display text-3xl font-bold text-white">{hero.stat.value}</span>
                  <span className="max-w-[10rem] text-sm text-white/60">{hero.stat.label}</span>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationWhatIs({ content }: { content: MedicationLandingContent }) {
  const { whatIs } = content;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">{whatIs.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {whatIs.title}{" "}
              <span className="text-gradient">{whatIs.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>

          <div>
            <Stagger className="space-y-5" stagger={0.06}>
              {whatIs.paragraphs.map((p) => (
                <StaggerChild key={p.slice(0, 48)}>
                  <p className="text-base leading-relaxed text-ink-muted">{p}</p>
                </StaggerChild>
              ))}
            </Stagger>
            <ul className="mt-8 flex flex-wrap gap-2">
              {whatIs.highlights.map((h) => (
                <li key={h} className="hub-trust-badge text-xs sm:text-sm">
                  <CheckCircle2 className="size-3.5" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationMechanism({ content }: { content: MedicationLandingContent }) {
  const { mechanism } = content;

  return (
    <ScrollSection id="mechanism" theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>{mechanism.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {mechanism.title}{" "}
              <span className="text-gradient">{mechanism.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-white/55">{mechanism.description}</p>
            <RevealLine className="mt-10 bg-accent/30" delay={0.2} />
          </Reveal>

          <Stagger className="space-y-5 lg:col-span-8" stagger={0.1}>
            {mechanism.steps.map((step, index) => {
              const Icon = getIcon(step.icon);
              return (
                <StaggerChild key={step.title}>
                  <BentoCard variant="glass" hover={false}>
                    <div className="flex gap-5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-lg font-semibold text-accent-bright">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-lime-bright" aria-hidden />
                          <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{step.text}</p>
                      </div>
                    </div>
                  </BentoCard>
                </StaggerChild>
              );
            })}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationBenefits({ content }: { content: MedicationLandingContent }) {
  const { benefits } = content;

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

export function MedicationEligibility({ content }: { content: MedicationLandingContent }) {
  const { eligibility } = content;

  return (
    <ScrollSection id="eligibility" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{eligibility.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {eligibility.title}{" "}
            <span className="text-gradient">{eligibility.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{eligibility.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BentoCard variant="light">
            <h3 className="font-display text-lg font-semibold text-ink">You may qualify if:</h3>
            <ul className="mt-6 space-y-4">
              {eligibility.qualifies.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard variant="light" className="border-amber-200/50 bg-amber-50/30">
            <h3 className="font-display text-lg font-semibold text-ink">May not be appropriate if:</h3>
            <ul className="mt-6 space-y-4">
              {eligibility.mayNotQualify.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  <X className="mt-0.5 size-5 shrink-0 text-amber-700" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        <Reveal delay={0.15} className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm text-ink-subtle">{eligibility.note}</p>
          <MagneticButton>
            <LinkButton href={siteConfig.bookingUrl} size="lg" className="rounded-full shrink-0">
              {eligibility.cta}
              <ArrowUpRight className="size-4" aria-hidden />
            </LinkButton>
          </MagneticButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationExpectedResults({ content }: { content: MedicationLandingContent }) {
  const { expectedResults } = content;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{expectedResults.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {expectedResults.title}{" "}
            <span className="text-gradient">{expectedResults.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-white/55">{expectedResults.description}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-3" stagger={0.1}>
          {expectedResults.stats.map((stat) => (
            <StaggerChild key={stat.label}>
              <BentoCard variant="glass" className="text-center" hover={false}>
                <span className="font-display text-4xl font-bold text-lime-bright sm:text-5xl">{stat.value}</span>
                <p className="mt-2 font-display text-lg font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-sm text-white/50">{stat.detail}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>

        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {expectedResults.timeline.map((item) => (
            <StaggerChild key={item.period}>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 lg:grid-cols-[8rem_1fr]">
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-bright">{item.period}</span>
                <p className="text-sm leading-relaxed text-white/65 sm:text-base">{item.text}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationTreatment({ content }: { content: MedicationLandingContent }) {
  const { treatment } = content;

  return (
    <ScrollSection id="treatment" theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow className="text-forest">{treatment.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {treatment.title}{" "}
              <span className="text-gradient">{treatment.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-forest/40 via-ink/10 to-transparent lg:left-6" aria-hidden />
            <ol>
              {treatment.steps.map((step, index) => {
                const Icon = getIcon(step.icon);
                const isLast = index === treatment.steps.length - 1;
                return (
                  <Reveal key={step.title} delay={index * 0.1} direction="right" distance={20}>
                    <li className={cn("relative pb-12 pl-14 lg:pl-20", isLast && "pb-0")}>
                      <span className="absolute left-0 flex size-8 items-center justify-center rounded-full border border-forest/30 bg-surface font-display text-sm font-semibold text-forest lg:size-10">
                        {index + 1}
                      </span>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">{step.text}</p>
                        </div>
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-forest/10 bg-forest/5">
                          <Icon className="size-5 text-forest" aria-hidden />
                        </div>
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

export function MedicationComparison({ content }: { content: MedicationLandingContent }) {
  const comparison = content.comparison;
  if (!comparison) return null;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{comparison.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {comparison.title}{" "}
            <span className="text-gradient">{comparison.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {comparison.products.map((product) => (
            <StaggerChild key={product.id}>
              <BentoCard variant="light" className="flex h-full flex-col">
                <div className="relative mx-auto size-24 overflow-hidden rounded-2xl bg-white">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-2" sizes="96px" />
                </div>
                <h3 className="mt-5 text-center font-display text-xl font-semibold text-ink">{product.name}</h3>
                <p className="text-center text-sm text-ink-muted">{product.subtitle}</p>
                <span
                  className={cn(
                    "mx-auto mt-4 inline-block rounded-full border px-3 py-1 text-xs font-medium",
                    accentBadge[content.accent],
                  )}
                >
                  {product.highlight}
                </span>
                <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-ink-muted">{product.description}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationSafety({ content }: { content: MedicationLandingContent }) {
  const { safety } = content;

  return (
    <ScrollSection id="safety" theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{safety.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {safety.title}{" "}
            <span className="text-gradient">{safety.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {safety.items.map((item) => (
            <StaggerChild key={item.slice(0, 48)}>
              <BentoCard variant="glass" hover={false}>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6">
            <AlertTriangle className="size-6 shrink-0 text-amber-400" aria-hidden />
            <p className="text-sm leading-relaxed text-white/70">{safety.warning}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationSideEffects({ content }: { content: MedicationLandingContent }) {
  const { sideEffects } = content;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{sideEffects.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {sideEffects.title}{" "}
            <span className="text-gradient">{sideEffects.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <BentoCard variant="light">
            <h3 className="font-display text-lg font-semibold text-ink">Common side effects</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {sideEffects.common.map((effect) => (
                <li key={effect} className="flex gap-2 text-sm text-ink-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" aria-hidden />
                  {effect}
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard variant="light" className="border-amber-200/50">
            <h3 className="font-display text-lg font-semibold text-ink">Serious side effects</h3>
            <ul className="mt-5 space-y-3">
              {sideEffects.serious.map((effect) => (
                <li key={effect} className="flex gap-2 text-sm text-ink-muted">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
                  {effect}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="hub-glass-card">
            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
              <strong className="font-medium text-ink">When to seek care: </strong>
              {sideEffects.whenToSeekCare}
            </p>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationFaq({ content }: { content: MedicationLandingContent }) {
  const { faq } = content;

  return (
    <ScrollSection id="faq" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <PolicyFaq
          eyebrow={faq.eyebrow}
          title={faq.title}
          titleHighlight={faq.titleHighlight}
          items={faq.items}
        />
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicationCta({ content }: { content: MedicationLandingContent }) {
  const { cta } = content;

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
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
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

export function MedicationLandingPage({ content }: { content: MedicationLandingContent }) {
  return (
    <>
      <MedicationHero content={content} />
      <MedicationWhatIs content={content} />
      <MedicationMechanism content={content} />
      <MedicationBenefits content={content} />
      <MedicationEligibility content={content} />
      <MedicationExpectedResults content={content} />
      <MedicationTreatment content={content} />
      <MedicationComparison content={content} />
      <MedicationSafety content={content} />
      <MedicationSideEffects content={content} />
      <MedicationFaq content={content} />
      <MedicationCta content={content} />
    </>
  );
}
