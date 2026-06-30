import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Globe,
  Heart,
  Shield,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

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
import { physiciansContent } from "@/lib/constants/physicians-content";
import { cn } from "@/lib/utils";

export function PhysiciansHero() {
  const { hero } = physiciansContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="hero-forest noise relative min-h-[min(72vh,680px)] justify-center hero-section-top pb-20"
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
            <div className="mt-8">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                  {hero.cta}
                </LinkButton>
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal variant="scale" duration={0.85} delay={0.1} className="hidden lg:flex lg:justify-end">
            <div className="hub-hero-visual" aria-hidden>
              <Stethoscope className="size-12 text-lime-bright" />
              <p className="mt-4 font-display text-xl font-semibold text-white">Licensed U.S. physicians</p>
              <p className="mt-1 text-sm text-white/50">Board-certified care</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansProviders() {
  const { providers } = physiciansContent;

  return (
    <ScrollSection id="providers" theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-forest">Our team</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {providers.title}
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{providers.subtitle}</p>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2" stagger={0.1}>
          {providers.members.map((doctor) => (
            <StaggerChild key={doctor.id}>
              <article className="hub-profile-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" aria-hidden />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-forest">
                    {doctor.experience}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-medium text-forest">{doctor.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{doctor.bio}</p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Credentials</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {doctor.credentials.map((cred) => (
                        <li key={cred} className="hub-trust-badge text-xs">
                          <Award className="size-3.5" aria-hidden />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Areas of expertise</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {doctor.expertise.map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-border-strong bg-paper px-3 py-1 text-xs text-ink-muted"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansWhyChoose() {
  const { whyChoose } = physiciansContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow className="text-forest">Why us</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {whyChoose.title}
            </DisplayHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">{whyChoose.description}</p>
          </Reveal>

          <ol className="relative space-y-0 lg:col-span-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-forest/30 via-ink/10 to-transparent lg:left-6" aria-hidden />
            {whyChoose.items.map((item, index) => (
              <Reveal key={item.slice(0, 40)} delay={index * 0.1} direction="right" distance={20}>
                <li className={cn("relative pb-10 pl-14 lg:pl-20", index === whyChoose.items.length - 1 && "pb-0")}>
                  <span className="absolute left-0 flex size-8 items-center justify-center rounded-full border border-forest/30 bg-surface font-display text-sm font-semibold text-forest lg:size-10">
                    {index + 1}
                  </span>
                  <p className="text-base leading-relaxed text-ink-muted">{item}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansConditions() {
  const { conditions } = physiciansContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Conditions</Eyebrow>
          <DisplayHeading className="text-white">{conditions.title}</DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {conditions.items.map((item) => (
              <StaggerChild key={item.title} className="lg:col-span-4">
                <BentoCard variant="glass" className="h-full">
                  <Heart className="size-5 text-lime-bright" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansPhilosophy() {
  const { philosophy } = physiciansContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="up" distance={28}>
            <Eyebrow className="text-forest">Philosophy</Eyebrow>
            <DisplayHeading size="lg" className="text-ink">
              {philosophy.title}
            </DisplayHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">{philosophy.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{philosophy.text}</p>
            <div className="mt-8">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="lg" className="rounded-full">
                  {philosophy.cta}
                </LinkButton>
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={0.1}>
            <BentoCard variant="light">
              <Shield className="size-8 text-forest" aria-hidden />
              <p className="mt-4 font-display text-lg font-semibold text-ink">HIPAA-compliant · FDA-regulated</p>
              <p className="mt-2 text-sm text-ink-muted">
                Every consultation is personalized and centered on your long-term well-being.
              </p>
            </BentoCard>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansReviewProcess() {
  const { reviewProcess } = physiciansContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Process</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {reviewProcess.title}
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-12" stagger={0.08}>
          <BentoGrid>
            {reviewProcess.steps.map((step, index) => (
              <StaggerChild key={step.slice(0, 40)} className="lg:col-span-3">
                <BentoCard variant="light" className="h-full">
                  <span className="font-display text-2xl font-bold text-forest">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{step}</p>
                </BentoCard>
              </StaggerChild>
            ))}
          </BentoGrid>
        </Stagger>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansCompliance() {
  const { compliance } = physiciansContent;

  return (
    <ScrollSection theme="dark" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>Safety</Eyebrow>
          <DisplayHeading className="text-white">{compliance.title}</DisplayHeading>
          <p className="mt-5 text-white/55">{compliance.text}</p>
          <p className="mt-4 text-white/55">{compliance.closing}</p>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansStates() {
  const { states } = physiciansContent;

  return (
    <ScrollSection theme="light" snap={false} className="gradient-light py-20 sm:py-28">
      <SectionContainer>
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <div className="hub-stat-ring shrink-0">
            <span className="font-display text-4xl font-bold text-forest">{states.stat.value}</span>
          </div>
          <div>
            <Eyebrow className="text-forest justify-center sm:justify-start">{states.title}</Eyebrow>
            <DisplayHeading size="md" className="text-ink">
              {states.stat.label}
            </DisplayHeading>
            <p className="mt-3 max-w-xl text-base text-ink-muted">{states.text}</p>
            <LinkButton href="/compliance" variant="ghost" className="mt-4 text-forest">
              View compliance hub
              <ArrowUpRight className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansCommitment() {
  const { commitment } = physiciansContent;

  return (
    <ScrollSection theme="light" snap={false} className="py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow className="text-forest">Commitment</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {commitment.title}
          </DisplayHeading>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {commitment.items.map((item) => (
            <StaggerChild key={item.slice(0, 40)}>
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

export function PhysiciansCta() {
  const { cta } = physiciansContent;

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
              <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                {cta.primaryCta}
              </LinkButton>
            </MagneticButton>
            <LinkButton href={cta.secondaryHref} variant="ghost" className="text-white/80 hover:text-white">
              {cta.secondaryCta}
              <Globe className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}
