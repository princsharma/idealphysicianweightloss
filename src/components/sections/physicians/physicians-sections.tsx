import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { PhysiciansHeroWall } from "@/components/client/physicians-hero-wall";
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

export function PhysiciansHero() {
  const { hero } = physiciansContent;

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

          <Reveal variant="fade" duration={0.85} delay={0.08} className="flex justify-center lg:justify-end">
            <PhysiciansHeroWall />
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
                <h3 className="type-h3 tracking-tight text-white">
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
            <p className="mt-4 type-h3 text-white">
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
    <ScrollSection
      theme="dark"
      snap={false}
      className="gradient-cta noise relative justify-center overflow-hidden py-24 sm:py-32"
    >
      {art.src ? (
        <>
          <Image
            src={art.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/82 to-forest-ink/55"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="orb left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/15"
            aria-hidden
          />
          <div className="orb -right-24 top-10 size-72 bg-lime/15" aria-hidden />
        </>
      )}

      <SectionContainer className="relative flex min-h-[min(52vh,440px)] flex-1 flex-col items-center justify-center py-16 text-center sm:min-h-[min(58vh,480px)] sm:py-20">
        <Reveal direction="up" distance={28}>
          <DisplayHeading size="lg" className="mx-auto max-w-3xl text-white">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleHighlight}</span>
          </DisplayHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 sm:text-xl">{cta.description}</p>
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
