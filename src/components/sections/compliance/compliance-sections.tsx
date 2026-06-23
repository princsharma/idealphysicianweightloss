import {
  ArrowUpRight,
  FileCheck,
  Globe,
  Lock,
  Pill,
  Shield,
  ShieldCheck,
  Video,
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
import { complianceContent } from "@/lib/constants/compliance-content";
import { cn } from "@/lib/utils";

const sectionIcons = [Video, FileCheck, Shield, Lock, Pill, Globe, ShieldCheck];

export function ComplianceHero() {
  const { hero } = complianceContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(68vh,640px)] justify-center pt-28 pb-20 sm:pt-32"
    >
      <div className="orb -left-24 top-1/4 size-72 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-96 bg-lime/10" aria-hidden />

      <SectionContainer className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="up" distance={32}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <DisplayHeading size="xl" className="max-w-3xl text-white">
              {hero.title}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{hero.description}</p>
          </Reveal>

          <Reveal variant="scale" duration={0.85} delay={0.1} className="hidden lg:flex lg:justify-end">
            <div className="hub-hero-visual" aria-hidden>
              <ShieldCheck className="size-12 text-lime-bright" />
              <p className="mt-4 font-display text-xl font-semibold text-white">HIPAA · FDA · Licensed</p>
              <p className="mt-1 text-sm text-white/50">Regulated telehealth care</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

function ComplianceBentoSection({
  id,
  title,
  description,
  items,
  iconIndex,
  theme = "light",
  className,
}: {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
  iconIndex: number;
  theme?: "light" | "dark";
  className?: string;
}) {
  const Icon = sectionIcons[iconIndex % sectionIcons.length];
  const isDark = theme === "dark";

  return (
    <ScrollSection id={id} theme={theme} snap={false} className={cn("py-20 sm:py-28", className)}>
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <span
              className={cn(
                "mb-6 flex size-14 items-center justify-center rounded-2xl border",
                isDark ? "border-white/10 bg-white/5" : "border-forest/10 bg-forest/5",
              )}
              aria-hidden
            >
              <Icon className={cn("size-6", isDark ? "text-lime-bright" : "text-forest")} />
            </span>
            <Eyebrow className={isDark ? undefined : "text-forest"}>{title}</Eyebrow>
            <DisplayHeading size="lg" className={isDark ? "text-white" : "text-ink"}>
              {title}
            </DisplayHeading>
            <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", isDark ? "text-white/55" : "text-ink-muted")}>
              {description}
            </p>
          </Reveal>

          <Stagger className="space-y-4 lg:col-span-8" stagger={0.08}>
            {items.map((item) => (
              <StaggerChild key={item.slice(0, 40)}>
                <BentoCard variant={isDark ? "glass" : "light"}>
                  <p className={cn("text-sm leading-relaxed sm:text-base", isDark ? "text-white/70" : "text-ink-muted")}>
                    {item}
                  </p>
                </BentoCard>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function ComplianceTelehealth() {
  const { telehealth } = complianceContent;
  return (
    <ComplianceBentoSection
      id="telehealth"
      title={telehealth.title}
      description={telehealth.description}
      items={telehealth.items}
      iconIndex={0}
      className="gradient-light"
    />
  );
}

export function ComplianceLicensing() {
  const { licensing } = complianceContent;
  return (
    <ComplianceBentoSection
      id="licensing"
      title={licensing.title}
      description={licensing.description}
      items={licensing.items}
      iconIndex={1}
    />
  );
}

export function CompliancePatientSafety() {
  const { patientSafety } = complianceContent;
  return (
    <ComplianceBentoSection
      id="patient-safety"
      title={patientSafety.title}
      description={patientSafety.description}
      items={patientSafety.items}
      iconIndex={2}
      theme="dark"
      className="noise"
    />
  );
}

export function ComplianceHipaa() {
  const { hipaa } = complianceContent;

  return (
    <ScrollSection id="hipaa" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Privacy</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {hipaa.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{hipaa.description}</p>
        </Reveal>

        <Stagger className="mt-12 space-y-4" stagger={0.08}>
          {hipaa.items.map((item) => (
            <StaggerChild key={item.slice(0, 40)}>
              <BentoCard variant="light">
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-10">
          <LinkButton href={hipaa.link.href} variant="outline">
            {hipaa.link.label}
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function CompliancePrescription() {
  const { prescription } = complianceContent;

  return (
    <ScrollSection id="prescription" theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>Prescribing</Eyebrow>
            <DisplayHeading className="text-white">{prescription.title}</DisplayHeading>
            <p className="mt-5 text-white/55">
              From clinical evaluation through pharmacy fulfillment — every step follows regulated pathways.
            </p>
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent lg:left-6" aria-hidden />
            <ol className="space-y-0">
              {prescription.steps.map((step, index) => {
                const isLast = index === prescription.steps.length - 1;
                return (
                  <Reveal key={step.title} delay={index * 0.12} direction="right" distance={24}>
                    <li className={cn("relative pb-14 pl-14 lg:pl-20", isLast && "pb-0")}>
                      <span className="hub-timeline-dot" aria-hidden>
                        {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-white/55">{step.text}</p>
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

export function ComplianceFda() {
  const { fda } = complianceContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Medications</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {fda.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{fda.description}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{fda.text}</p>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {fda.items.map((item, index) => (
              <StaggerChild key={item.slice(0, 40)} className="lg:col-span-4">
                <BentoCard variant="light" className="h-full">
                  <Pill className="size-5 text-forest" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function ComplianceStates() {
  const { states } = complianceContent;

  return (
    <ScrollSection id="states" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">Coverage</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {states.title}
            </DisplayHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">{states.description}</p>
            <div className="mt-10 flex items-center gap-6">
              <div className="hub-stat-ring">
                <span className="font-display text-4xl font-bold text-forest">{states.stat.value}</span>
              </div>
              <p className="max-w-xs text-sm text-ink-muted sm:text-base">{states.stat.label}</p>
            </div>
          </Reveal>

          <Stagger className="space-y-4" stagger={0.08}>
            {states.items.map((item) => (
              <StaggerChild key={item.slice(0, 40)}>
                <div className="hub-glass-card">
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function ComplianceSecurity() {
  const { security } = complianceContent;

  return (
    <ScrollSection id="security" theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Platform security</Eyebrow>
          <DisplayHeading className="text-white">{security.title}</DisplayHeading>
          <p className="mt-5 text-white/55">{security.description}</p>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {security.items.map((item) => (
              <StaggerChild key={item.slice(0, 40)} className="lg:col-span-4">
                <BentoCard variant="glass" className="h-full">
                  <Lock className="size-5 text-lime-bright" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{item}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function ComplianceFaq() {
  const { faq } = complianceContent;

  return (
    <ScrollSection id="faq" theme="light" snap={false} className="py-20 sm:py-28">
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

export function ComplianceCta() {
  const { cta } = complianceContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-24 sm:py-32">
      <SectionContainer className="text-center">
        <Reveal direction="up" distance={28}>
          <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <LinkButton href={cta.primaryHref} size="xl" className="rounded-full">
                {cta.primaryCta}
              </LinkButton>
            </MagneticButton>
            <LinkButton href={cta.secondaryHref} variant="ghost" className="text-white/80 hover:text-white">
              {cta.secondaryCta}
              <ArrowUpRight className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
