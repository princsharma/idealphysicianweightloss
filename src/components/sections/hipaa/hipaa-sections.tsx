"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CreditCard,
  Eye,
  FileCheck,
  HeartHandshake,
  Mail,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { DisplayHeading, Eyebrow, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import { hipaaContent } from "@/lib/constants/hipaa-content";

const usageIcons = [Stethoscope, CreditCard, Building2, Users];
const rightIcons = [Eye, FileCheck, Scale, Shield, Mail, ShieldCheck];

export function HipaaReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (doc.scrollTop / scrollHeight) * 100 : 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="hipaa-progress"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="hipaa-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function HipaaHero() {
  const { hero } = hipaaContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(70vh,680px)] justify-center pt-28 pb-20 sm:pt-32"
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

          <Reveal variant="scale" duration={0.85} delay={0.1} className="hidden lg:block">
            <div className="hipaa-hero-visual" aria-hidden>
              <div className="hipaa-hero-visual__card">
                <Shield className="size-10 text-lime-bright" />
                <p className="mt-4 font-display text-lg font-semibold text-white">HIPAA NPP</p>
                <p className="mt-1 text-sm text-white/50">Protected Health Information</p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaCommitment() {
  const { commitment, promise } = hipaaContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Stagger className="grid gap-5 lg:grid-cols-2" stagger={0.1}>
          <StaggerChild>
            <BentoCard variant="light" className="h-full">
              <span className="hipaa-icon-badge" aria-hidden>
                <HeartHandshake className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{commitment.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{commitment.text}</p>
            </BentoCard>
          </StaggerChild>
          <StaggerChild>
            <BentoCard variant="light" className="h-full">
              <span className="hipaa-icon-badge" aria-hidden>
                <ShieldCheck className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{promise.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{promise.text}</p>
            </BentoCard>
          </StaggerChild>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaInformationUsage() {
  const { informationUsage, disclosures } = hipaaContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28" id="information-usage">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Information usage</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {informationUsage.title}
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {informationUsage.items.map((item, index) => {
              const Icon = usageIcons[index % usageIcons.length];
              return (
                <StaggerChild key={item.id} className="lg:col-span-6">
                  <BentoCard variant="light" className="h-full">
                    <span className="hipaa-icon-badge" aria-hidden>
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{item.text}</p>
                  </BentoCard>
                </StaggerChild>
              );
            })}
          </BentoGrid>
        </Stagger>

        <Reveal delay={0.15} direction="up" distance={20} className="mt-8">
          <div className="hipaa-disclosure-banner">
            <p className="hipaa-disclosure-banner__title">{disclosures.title}</p>
            <p className="hipaa-disclosure-banner__text">{disclosures.text}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaPatientRights() {
  const { patientRights } = hipaaContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28" id="patient-rights">
      <div className="orb left-0 top-1/2 size-80 -translate-y-1/2 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Your rights</Eyebrow>
          <DisplayHeading size="lg" className="text-white">
            {patientRights.title}
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {patientRights.items.map((right, index) => {
            const Icon = rightIcons[index % rightIcons.length];
            return (
              <StaggerChild key={right.id}>
                <BentoCard variant="glass" className="h-full">
                  <div className="flex gap-4">
                    <span className="hipaa-right-icon" aria-hidden>
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{right.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{right.text}</p>
                    </div>
                  </div>
                </BentoCard>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaResponsibilities() {
  const { responsibilities } = hipaaContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28" id="responsibilities">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal direction="left" distance={24}>
            <Eyebrow className="text-forest">Our duties</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {responsibilities.title}
            </DisplayHeading>
            <p className="mt-4 text-base text-ink-muted">{responsibilities.intro}</p>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <BentoCard variant="light">
              <ul className="space-y-4">
                {responsibilities.items.map((item) => (
                  <li key={item.slice(0, 40)} className="hipaa-responsibility-item">
                    <ShieldCheck className="size-4 shrink-0 text-forest" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaComplaints() {
  const { complaints } = hipaaContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28" id="complaints">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-forest">Complaints</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {complaints.title}
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.1} direction="up" distance={20}>
          <BentoCard variant="light" className="mx-auto mt-10 max-w-3xl">
            <div className="space-y-4">
              {complaints.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={complaints.hhsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hipaa-external-link mt-6 inline-flex"
            >
              {complaints.hhsNote}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </BentoCard>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function HipaaContact() {
  const { contact } = hipaaContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-20 sm:py-28" id="contact">
      <div className="orb left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <DisplayHeading size="lg" className="text-white">
            {contact.title}
          </DisplayHeading>
          <p className="mt-4 text-base text-white/60">{contact.rightsNote}</p>
        </Reveal>

        <Reveal delay={0.12} variant="scale" className="mt-10">
          <div className="hipaa-contact-card mx-auto max-w-lg">
            <div className="hipaa-contact-card__icon" aria-hidden>
              <Shield className="size-6" />
            </div>
            <p className="hipaa-contact-card__org">{contact.organization}</p>
            <a href={`mailto:${contact.email}`} className="hipaa-contact-card__link">
              <Mail className="size-4 shrink-0" aria-hidden />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="hipaa-contact-card__link"
            >
              <Phone className="size-4 shrink-0" aria-hidden />
              {contact.phone}
            </a>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
