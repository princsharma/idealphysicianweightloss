import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  ClipboardCheck,
  HeartPulse,
  Phone,
  Pill,
  Stethoscope,
  Video,
} from "lucide-react";

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
import { medicalDisclaimerContent } from "@/lib/constants/medical-disclaimer-content";

const cardIcons = [Stethoscope, BookOpen, ClipboardCheck, HeartPulse];

export function MedicalDisclaimerHero() {
  const { hero } = medicalDisclaimerContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(68vh,640px)] justify-center pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-96 bg-lime/10" aria-hidden />

      <SectionContainer className="relative">
        <Reveal direction="up" distance={32}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <DisplayHeading size="xl" className="max-w-4xl text-white">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.12} direction="up" distance={24} variant="fade">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {hero.description}
          </p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicalDisclaimerNotice() {
  const { notice } = medicalDisclaimerContent;

  return (
    <div className="md-notice-band">
      <SectionContainer>
        <Reveal direction="up" distance={20}>
          <div className="md-notice-band__inner">
            <span className="md-notice-band__icon" aria-hidden>
              <AlertTriangle className="size-5" />
            </span>
            <div>
              <p className="md-notice-band__title">{notice.title}</p>
              <p className="md-notice-band__text">{notice.text}</p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}

export function MedicalDisclaimerCards() {
  const { cards, intro } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Disclaimer overview</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            What you should know before using our services
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{intro}</p>
        </Reveal>

        <Stagger className="mt-14" stagger={0.08}>
          <BentoGrid>
            {cards.map((card, index) => {
              const Icon = cardIcons[index % cardIcons.length];
              return (
                <StaggerChild key={card.id} className="sm:col-span-1 lg:col-span-6">
                  <BentoCard variant="light" className="h-full">
                    <span className="md-card-icon" aria-hidden>
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {card.text}
                    </p>
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

export function MedicalDisclaimerResponsibility() {
  const { healthcareResponsibility } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <div className="orb left-0 top-1/2 size-80 -translate-y-1/2 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left" distance={28}>
            <div>
              <Eyebrow>Patient responsibility</Eyebrow>
              <DisplayHeading size="lg" className="text-white">
                {healthcareResponsibility.title}
              </DisplayHeading>
            </div>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <BentoCard variant="glass" className="md-glass-panel">
              <div className="space-y-5">
                {healthcareResponsibility.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-sm leading-relaxed text-white/75 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicalDisclaimerTelehealth() {
  const { telehealth } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="up" distance={24}>
            <div className="md-icon-badge" aria-hidden>
              <Video className="size-6" />
            </div>
            <Eyebrow className="mt-6 text-forest">Telehealth</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {telehealth.title}
            </DisplayHeading>
          </Reveal>

          <Reveal direction="up" distance={24} delay={0.1}>
            <BentoCard variant="light" className="h-full">
              <div className="space-y-5">
                {telehealth.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicalDisclaimerFda() {
  const { fda } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light pb-20 sm:pb-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <div className="md-icon-badge mx-auto" aria-hidden>
            <Pill className="size-6" />
          </div>
          <Eyebrow className="mt-6 justify-center text-forest">Medications</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {fda.title}
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" stagger={0.08}>
          {fda.paragraphs.map((paragraph) => (
            <StaggerChild key={paragraph.slice(0, 40)}>
              <BentoCard variant="light" className="h-full">
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{paragraph}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicalDisclaimerEmergency() {
  const { emergency } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="dark" snap={false} className="bg-dark-muted py-16 sm:py-20">
      <SectionContainer>
        <Reveal direction="up" distance={24}>
          <div className="md-emergency-card">
            <div className="md-emergency-card__icon" aria-hidden>
              <Phone className="size-7" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {emergency.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/70">{emergency.text}</p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function MedicalDisclaimerAcknowledgment() {
  const { acknowledgment } = medicalDisclaimerContent;

  return (
    <section className="border-y border-border bg-cream py-10">
      <SectionContainer>
        <Reveal variant="fade">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
            {acknowledgment.text}
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}

export function MedicalDisclaimerCta() {
  const { cta } = medicalDisclaimerContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise justify-center">
      <div
        className="orb left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/15"
        aria-hidden
      />

      <SectionContainer className="relative flex flex-col items-center py-20 text-center">
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
                <ArrowUpRight className="size-4" />
              </LinkButton>
            </MagneticButton>
            <LinkButton
              href={cta.secondaryHref}
              variant="outline-dark"
              size="lg"
              className="rounded-full"
            >
              {cta.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
