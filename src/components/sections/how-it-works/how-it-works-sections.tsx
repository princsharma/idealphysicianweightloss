import {
  ArrowUpRight,
  Check,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Reveal, RevealLi, RevealLine, Stagger, StaggerChild } from "@/components/client/reveal";
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
import { howItWorksContent } from "@/lib/constants/how-it-works-content";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

export function HowItWorksHero() {
  const { hero } = howItWorksContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(72vh,680px)] justify-center hero-section-top pb-20"
    >
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-96 bg-lime/10" aria-hidden />

      <SectionContainer className="relative text-center">
        <Reveal direction="up" distance={32}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <DisplayHeading size="xl" className="mx-auto max-w-4xl text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">{hero.description}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
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
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksOverview() {
  const { overview } = howItWorksContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">{overview.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {overview.title}{" "}
            <span className="text-gradient">{overview.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-ink-muted">{overview.description}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {overview.steps.map((step, index) => {
            const Icon = getIcon(step.icon);
            return (
              <StaggerChild key={step.id}>
                <BentoCard variant="light" className="h-full text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-forest/10 bg-forest/5 font-display text-2xl font-bold text-forest">
                    {index + 1}
                  </span>
                  <Icon className="mx-auto mt-4 size-6 text-forest" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </BentoCard>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksTimeline() {
  const { timeline } = howItWorksContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>{timeline.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {timeline.title}{" "}
              <span className="text-gradient">{timeline.titleHighlight}</span>
            </DisplayHeading>
            <RevealLine className="mt-10 bg-accent/30" delay={0.2} />
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" aria-hidden />
            <ol>
              {timeline.phases.map((phase, index) => (
                <RevealLi
                  key={phase.title}
                  delay={index * 0.08}
                  direction="right"
                  distance={20}
                  className={cn("relative pb-12 pl-14 lg:pl-20", index === timeline.phases.length - 1 && "pb-0")}
                >
                    <span className="hub-timeline-dot" aria-hidden>
                      {index + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-lime-bright">{phase.phase}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{phase.text}</p>
                </RevealLi>
              ))}
            </ol>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksMedicalEvaluation() {
  const { medicalEvaluation } = howItWorksContent;

  return (
    <ScrollSection id="evaluation" theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{medicalEvaluation.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {medicalEvaluation.title}{" "}
            <span className="text-gradient">{medicalEvaluation.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-ink-muted">{medicalEvaluation.description}</p>
        </Reveal>
        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {medicalEvaluation.items.map((item) => (
            <StaggerChild key={item.slice(0, 48)}>
              <div className="hub-glass-card flex gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-forest" aria-hidden />
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksPrescription() {
  const { prescription } = howItWorksContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{prescription.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {prescription.title}{" "}
            <span className="text-gradient">{prescription.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.1}>
          <BentoGrid>
            {prescription.steps.map((step, index) => (
              <StaggerChild key={step.title} className="lg:col-span-6">
                <BentoCard variant="light" className="h-full">
                  <span className="font-display text-sm font-bold text-forest">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksDelivery() {
  const { delivery } = howItWorksContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="up" distance={28}>
            <Eyebrow>{delivery.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {delivery.title}{" "}
              <span className="text-gradient">{delivery.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-5 text-white/55">{delivery.description}</p>
            <ul className="mt-8 space-y-3">
              {delivery.checklist.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-3 text-sm text-white/70 sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-lime-bright" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="scale" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={delivery.image.src}
                alt={delivery.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksOngoingSupport() {
  const { ongoingSupport } = howItWorksContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">{ongoingSupport.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {ongoingSupport.title}{" "}
            <span className="text-gradient">{ongoingSupport.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {ongoingSupport.items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerChild key={item.title} className="lg:col-span-6">
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

export function HowItWorksFollowUp() {
  const { followUp } = howItWorksContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">{followUp.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {followUp.title}{" "}
              <span className="text-gradient">{followUp.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-5 text-ink-muted">{followUp.description}</p>
          </Reveal>
          <Stagger className="space-y-4" stagger={0.08}>
            {followUp.items.map((item) => (
              <StaggerChild key={item.slice(0, 48)}>
                <BentoCard variant="light">
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HowItWorksFaq() {
  const { faq } = howItWorksContent;

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

export function HowItWorksCta() {
  const { cta } = howItWorksContent;

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
