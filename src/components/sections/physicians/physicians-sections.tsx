import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { MagneticButton } from "@/components/client/magnetic-button";
import {
  PhysiciansCoverageStat,
  PhysiciansReviewSteps,
} from "@/components/client/physicians-motion";
import { PhysiciansSpotlight } from "@/components/client/physicians-spotlight";
import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { ImageFrame } from "@/components/ui/image-frame";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { physiciansContent, physiciansImages } from "@/lib/constants/physicians-content";
import { cn } from "@/lib/utils";

export function PhysiciansHero() {
  const { hero, providers } = physiciansContent;

  return (
    <ScrollSection
      theme="dark"
      snap={false}
      className="phys-hero hero-forest noise relative hero-section-top overflow-hidden pb-20 sm:pb-24"
    >
      <div className="orb -left-24 top-1/4 size-80 bg-accent/20" aria-hidden />
      <div className="orb right-0 top-0 size-[28rem] bg-lime/10" aria-hidden />

      <SectionContainer className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="up" distance={32} duration={0.9}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <DisplayHeading as="h1" size="xl" className="max-w-3xl text-white">
              {hero.title}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{hero.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                  {hero.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
              <LinkButton href={hero.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
                {hero.secondaryCta}
              </LinkButton>
            </div>
          </Reveal>

          <Reveal variant="zoom" duration={1} delay={0.08} className="flex justify-center lg:justify-end">
            <div className="phys-hero__wall">
              {providers.members.map((doctor) => (
                <div key={doctor.id} className="phys-plate">
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 200px"
                    className="phys-plate__img"
                    priority={doctor.id === "miller" || doctor.id === "okonkwo"}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

export { PhysiciansSpotlight };

export function PhysiciansConditions() {
  const { conditions } = physiciansContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-28">
      <SectionContainer>
        <Reveal direction="up" distance={24} className="max-w-3xl">
          <Eyebrow>{conditions.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">{conditions.title}</DisplayHeading>
        </Reveal>
        <Reveal variant="scale" delay={0.08} className="mt-10">
          <ImageFrame
            {...physiciansImages.conditions}
            theme="dark"
            ratio="wide"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-x-16 sm:grid-cols-2" stagger={0.08}>
          {conditions.items.map((item) => (
            <StaggerChild key={item.title}>
              <article className="phys-condition">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">{item.text}</p>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
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
          <Eyebrow className="text-forest">{reviewProcess.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="text-ink">
            {reviewProcess.title}
          </DisplayHeading>
        </Reveal>
        <Reveal variant="scale" delay={0.08} className="mt-10">
          <ImageFrame
            {...physiciansImages.review}
            ratio="wide"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </Reveal>
        <PhysiciansReviewSteps />
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansCoverage() {
  const { states, compliance, commitment } = physiciansContent;

  return (
    <ScrollSection theme="dark" snap={false} className="noise py-20 sm:py-32">
      <SectionContainer>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6" variant="zoom" distance={20}>
            <Eyebrow>{states.eyebrow}</Eyebrow>
            <PhysiciansCoverageStat value={states.stat.value} />
            <p className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
              {states.stat.label}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">{states.text}</p>
          </Reveal>

          <Reveal className="lg:col-span-6" direction="up" distance={24} delay={0.08}>
            <ImageFrame
              {...physiciansImages.coverage}
              theme="dark"
              ratio="wide"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <Eyebrow className="mt-10">{compliance.eyebrow}</Eyebrow>
            <DisplayHeading size="md" className="text-white">
              {compliance.title}
            </DisplayHeading>
            <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">{compliance.text}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">{compliance.closing}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-16 border-t border-white/10 pt-12">
          <Eyebrow>{commitment.eyebrow}</Eyebrow>
          <DisplayHeading size="md" className="text-white">
            {commitment.title}
          </DisplayHeading>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {commitment.items.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-white/70 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <LinkButton href="/compliance" variant="outline-dark" size="lg" className="mt-10 rounded-full">
            View compliance hub
            <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </Reveal>
      </SectionContainer>
    </ScrollSection>
  );
}

export function PhysiciansCta() {
  const { cta } = physiciansContent;
  const art = physiciansImages.cta;

  return (
    <ScrollSection theme="dark" snap={false} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageFrame
          {...art}
          theme="dark"
          ratio="screen"
          rounded="rounded-none"
          className="h-full min-h-full border-0"
          sizes="100vw"
        />
      </div>
      <div
        className={cn("absolute inset-0", art.src ? "bg-forest-ink/75" : "bg-forest-ink/20")}
        aria-hidden
      />
      <SectionContainer className="relative py-24 text-center sm:py-32">
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
