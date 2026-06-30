import {
  Accessibility,
  ArrowUpRight,
  BookOpen,
  Globe,
  Keyboard,
  Mail,
  Monitor,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
  Volume2,
} from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { AccessibilityFeedbackForm } from "@/components/forms/accessibility-feedback-form";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { accessibilityContent } from "@/lib/constants/accessibility-content";

const techIcons = [Globe, Volume2, Monitor, BookOpen];
const improvementIcons = [TrendingUp, Sparkles, Users, Accessibility];

export function AccessibilityHero() {
  const { hero } = accessibilityContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(68vh,640px)] justify-center hero-section-top pb-20"
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
            <div className="a11y-hero-visual" aria-hidden>
              <Accessibility className="size-12 text-lime-bright" />
              <p className="mt-4 font-display text-xl font-semibold text-white">WCAG 2.1 AA</p>
              <p className="mt-1 text-sm text-white/50">Inclusive by design</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityCommitment() {
  const { commitment } = accessibilityContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Our commitment</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {commitment.title}
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-10 space-y-5" stagger={0.08}>
          {commitment.paragraphs.map((paragraph) => (
            <StaggerChild key={paragraph.slice(0, 48)}>
              <BentoCard variant="light">
                <p className="text-base leading-relaxed text-ink-muted">{paragraph}</p>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityTechnologies() {
  const { supportedTechnologies } = accessibilityContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Compatibility</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {supportedTechnologies.title}
          </DisplayHeading>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {supportedTechnologies.description}
          </p>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {supportedTechnologies.items.map((item, index) => {
              const Icon = techIcons[index % techIcons.length];
              return (
                <StaggerChild key={item.id} className="lg:col-span-6">
                  <BentoCard variant="light" className="h-full">
                    <span className="a11y-icon-badge" aria-hidden>
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
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityKeyboard() {
  const { keyboard } = accessibilityContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <div className="orb right-0 top-1/2 size-80 -translate-y-1/2 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left" distance={28}>
            <div className="a11y-icon-badge a11y-icon-badge--dark" aria-hidden>
              <Keyboard className="size-6" />
            </div>
            <Eyebrow className="mt-6">Navigation</Eyebrow>
            <DisplayHeading size="lg" className="text-white">
              {keyboard.title}
            </DisplayHeading>
            <p className="mt-4 text-base leading-relaxed text-white/60">{keyboard.description}</p>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <BentoCard variant="glass">
              <ul className="space-y-4">
                {keyboard.items.map((item) => (
                  <li key={item.slice(0, 40)} className="a11y-list-item a11y-list-item--dark">
                    <span className="a11y-kbd-dot" aria-hidden />
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

export function AccessibilityScreenReader() {
  const { screenReader } = accessibilityContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left" distance={28}>
            <BentoCard variant="light">
              <ul className="space-y-4">
                {screenReader.items.map((item) => (
                  <li key={item.slice(0, 40)} className="a11y-list-item">
                    <span className="a11y-kbd-dot a11y-kbd-dot--forest" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>

          <Reveal direction="right" distance={24} delay={0.1}>
            <div className="a11y-icon-badge" aria-hidden>
              <Volume2 className="size-6" />
            </div>
            <Eyebrow className="mt-6 text-forest">Assistive technology</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {screenReader.title}
            </DisplayHeading>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{screenReader.description}</p>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityImprovements() {
  const { improvements } = accessibilityContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-forest">Continuous effort</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {improvements.title}
          </DisplayHeading>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{improvements.description}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {improvements.items.map((item, index) => {
            const Icon = improvementIcons[index % improvementIcons.length];
            return (
              <StaggerChild key={item.title}>
                <BentoCard variant="light" className="h-full">
                  <span className="a11y-icon-badge" aria-hidden>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                </BentoCard>
              </StaggerChild>
            );
          })}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityFeedback() {
  const { feedback } = accessibilityContent;

  return (
    <ScrollSection
      id="accessibility-feedback"
      theme="dark"
      snap={false}
      className="noise justify-center py-20 sm:py-28"
    >
      <div className="orb -right-32 bottom-0 size-80 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>{feedback.eyebrow}</Eyebrow>
            <DisplayHeading className="text-white">
              {feedback.title}{" "}
              <span className="text-gradient">{feedback.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">{feedback.description}</p>
          </Reveal>

          <Reveal className="lg:col-span-7" direction="right" distance={32} variant="scale" delay={0.1}>
            <AccessibilityFeedbackForm />
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function AccessibilityContact() {
  const { contact } = accessibilityContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-20 sm:py-28">
      <div className="orb left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 bg-accent/10" aria-hidden />
      <SectionContainer className="relative">
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <DisplayHeading size="lg" className="text-white">
            {contact.title}
          </DisplayHeading>
          <p className="mt-4 text-base text-white/60">{contact.description}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/50">{contact.alternateFormats}</p>
        </Reveal>

        <Reveal delay={0.12} variant="scale" className="mt-10">
          <div className="a11y-contact-card mx-auto max-w-lg">
            <p className="a11y-contact-card__org">{contact.organization}</p>
            <a href={`mailto:${contact.email}`} className="a11y-contact-card__link">
              <Mail className="size-4 shrink-0" aria-hidden />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="a11y-contact-card__link"
            >
              <Phone className="size-4 shrink-0" aria-hidden />
              {contact.phone}
            </a>
            <a href="#accessibility-feedback" className="a11y-contact-card__cta">
              Use the feedback form
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
