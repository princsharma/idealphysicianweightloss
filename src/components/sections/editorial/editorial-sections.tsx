import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  Shield,
  Stethoscope,
  Users,
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
import { editorialContent } from "@/lib/constants/editorial-content";
import { cn } from "@/lib/utils";

export function EditorialHero() {
  const { hero, lastUpdated } = editorialContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(68vh,640px)] justify-center pt-28 pb-20 sm:pt-32"
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
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{hero.description}</p>
          <p className="mt-4 text-sm text-white/40">Last updated: {lastUpdated}</p>
          <div className="mt-8">
            <LinkButton href="/contact" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              {hero.cta}
              <ArrowUpRight className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialIntro() {
  const { intro } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-16 sm:py-20">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Overview</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {intro.title}
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-8 space-y-4" stagger={0.06}>
          {intro.paragraphs.map((p) => (
            <StaggerChild key={p.slice(0, 48)}>
              <p className="text-base leading-relaxed text-ink-muted">{p}</p>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialStandards() {
  const { standards } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">E-E-A-T</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {standards.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{standards.description}</p>
        </Reveal>

        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {standards.items.map((item) => (
              <StaggerChild key={item.slice(0, 40)} className="lg:col-span-4">
                <BentoCard variant="light" className="h-full">
                  <CheckCircle2 className="size-5 text-forest" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
                </BentoCard>
              </StaggerChild>
            ))}
            <StaggerChild className="lg:col-span-6">
              <BentoCard variant="light" className="h-full">
                <Shield className="size-5 text-forest" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{standards.privacy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{standards.privacy.text}</p>
              </BentoCard>
            </StaggerChild>
            <StaggerChild className="lg:col-span-6">
              <BentoCard variant="light" className="h-full">
                <Users className="size-5 text-forest" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{standards.tone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{standards.tone.description}</p>
                <p className="mt-4 rounded-xl border border-forest/10 bg-forest/5 p-4 text-sm font-medium text-forest">
                  {standards.tone.principle}
                </p>
              </BentoCard>
            </StaggerChild>
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialReviewProcess() {
  const { reviewProcess } = editorialContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>Review</Eyebrow>
            <DisplayHeading className="text-white">{reviewProcess.title}</DisplayHeading>
          </Reveal>

          <div className="space-y-8 lg:col-span-8">
            <BentoCard variant="glass">
              <h3 className="font-display text-lg font-semibold text-white">{reviewProcess.creation.title}</h3>
              <ul className="mt-4 space-y-2">
                {reviewProcess.creation.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/70 sm:text-base">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-bright" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" aria-hidden />
              <ol>
                {reviewProcess.steps.map((step, index) => (
                  <Reveal key={step.slice(0, 40)} delay={index * 0.1} direction="right" distance={20}>
                    <li className={cn("relative pb-10 pl-14", index === reviewProcess.steps.length - 1 && "pb-0")}>
                      <span className="hub-timeline-dot" aria-hidden>
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-white/70 sm:text-base">{step}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialFactChecking() {
  const { factChecking } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Integrity</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {factChecking.title}
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-10 space-y-4" stagger={0.08}>
          {factChecking.items.map((item) => (
            <StaggerChild key={item.slice(0, 40)}>
              <div className="hub-glass-card flex gap-4">
                <FileText className="size-5 shrink-0 text-forest" aria-hidden />
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialSources() {
  const { sources } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Sources</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {sources.title}
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {sources.items.map((source) => (
              <StaggerChild key={source.title} className="lg:col-span-4">
                <BentoCard variant="light" className="h-full text-center">
                  <BookOpen className="mx-auto size-6 text-forest" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{source.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{source.description}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialUpdates() {
  const { updates } = editorialContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal direction="up" distance={24}>
            <Eyebrow>Updates</Eyebrow>
            <DisplayHeading className="text-white">{updates.title}</DisplayHeading>
            <p className="mt-5 text-white/55">{updates.text}</p>
          </Reveal>
          <BentoCard variant="glass">
            <h3 className="font-display text-lg font-semibold text-white">{updates.testimonials.title}</h3>
            <ul className="mt-4 space-y-3">
              {updates.testimonials.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/70 sm:text-base">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-bright" aria-hidden />
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

export function EditorialProfessionals() {
  const { professionals } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">Experts</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {professionals.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{professionals.subtitle}</p>
        </Reveal>

        <div className="mt-14">
          <h3 className="mb-6 text-center font-display text-xl font-semibold text-ink">Content authors</h3>
          <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {professionals.authors.map((author) => (
              <StaggerChild key={author.name}>
                <BentoCard variant="light" className="h-full">
                  <Stethoscope className="size-5 text-forest" aria-hidden />
                  <h4 className="mt-4 font-display text-lg font-semibold text-ink">{author.name}</h4>
                  <p className="mt-1 text-sm font-medium text-forest">{author.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{author.bio}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialIndependence() {
  const { independence } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Independence</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {independence.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{independence.text}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{independence.ip}</p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialTimeline() {
  const { timeline } = editorialContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Process</Eyebrow>
          <DisplayHeading className="text-white">{timeline.title}</DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.1}>
          <BentoGrid>
            {timeline.steps.map((step, index) => (
              <StaggerChild key={step.title} className="lg:col-span-3">
                <BentoCard variant="glass" className="h-full">
                  <span className="font-display text-2xl font-bold text-lime-bright">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialReviewTeam() {
  const { professionals } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">Review team</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            Meet our medical reviewers
          </DisplayHeading>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 lg:grid-cols-2" stagger={0.1}>
          {professionals.reviewers.map((reviewer) => (
            <StaggerChild key={reviewer.name}>
              <BentoCard variant="light" className="h-full">
                <span className="hub-trust-badge">
                  <Shield className="size-4" aria-hidden />
                  Medical reviewer
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{reviewer.name}</h3>
                <p className="mt-1 text-sm font-medium text-forest">{reviewer.credentials}</p>
                <p className="mt-1 text-sm text-ink-muted">{reviewer.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{reviewer.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {reviewer.duties.map((duty) => (
                    <li
                      key={duty}
                      className="rounded-full border border-border-strong bg-paper px-3 py-1 text-xs text-ink-muted"
                    >
                      {duty}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialDisclaimers() {
  const { disclaimers } = editorialContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-16 sm:py-20">
      <SectionContainer>
        <BentoCard variant="light" className="border-amber-200/60 bg-amber-50/50">
          <div className="flex gap-4">
            <AlertTriangle className="size-6 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{disclaimers.title}</h3>
              <ul className="mt-4 space-y-2">
                {disclaimers.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BentoCard>
      </SectionContainer>
    </ScrollSection>
  );
}

export function EditorialCta() {
  const { cta } = editorialContent;

  return (
    <ScrollSection theme="dark" snap={false} className="gradient-cta noise py-24 sm:py-32">
      <SectionContainer className="text-center">
        <Reveal direction="up" distance={28}>
          <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/70">
            <a href={`mailto:${cta.email}`} className="inline-flex items-center gap-2 hover:text-lime-bright">
              <Mail className="size-4" aria-hidden />
              {cta.email}
            </a>
            <a href={`tel:${cta.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 hover:text-lime-bright">
              <Phone className="size-4" aria-hidden />
              {cta.phone}
            </a>
          </div>
          <div className="mt-10">
            <MagneticButton>
              <LinkButton href={cta.href} size="xl" className="rounded-full">
                {cta.button}
              </LinkButton>
            </MagneticButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
