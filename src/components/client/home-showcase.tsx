"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { HomeJourneySection } from "@/components/client/home-journey-section";
import { MagneticButton } from "@/components/client/magnetic-button";
import { Stagger, StaggerChild } from "@/components/client/reveal";
import { StoryBanner } from "@/components/client/story-banner";
import { LinkButton } from "@/components/ui/link-button";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { homeContent, homeImages } from "@/lib/constants/home-content";
import { getIcon, type IconName } from "@/lib/utils/icons";

export function HomeShowcase() {
  return (
    <>
      <HomeProgramSpotlight />
      <HomeEligibilitySection />
      <HomeJourneySection />
    </>
  );
}

function HomeProgramSpotlight() {
  const { statsSection, stats, statsDisclaimer, overview } = homeContent;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["-5%", "7%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.45, 1], [1.08, 1, 1.04]);

  return (
    <ScrollSection
      ref={ref}
      id="program"
      theme="light"
      snap={false}
      className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-20"
    >
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -left-32 top-20 size-[22rem] bg-lime/25" />
        <div className="orb right-[-8rem] top-1/3 size-[26rem] bg-forest/15" />
      </div>

      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-5"
          >
            <Eyebrow className="text-forest">{overview.eyebrow}</Eyebrow>
            <DisplayHeading size="lg" className="mt-2 text-balance text-ink">
              {statsSection.title}{" "}
              <span className="text-gradient">{statsSection.titleHighlight}</span>
            </DisplayHeading>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.06 }}
            className="text-base leading-relaxed text-ink-muted sm:text-lg lg:col-span-7 lg:max-w-2xl lg:justify-self-end"
          >
            {statsSection.description}
          </motion.p>
        </div>

        <div className="home-spotlight">
          <motion.div className="home-spotlight__media" style={{ y: mediaY, scale: mediaScale }}>
            <StoryBanner
              {...homeImages.stats}
              theme="light"
              ratio="panorama"
              rounded="rounded-[2rem]"
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="w-full"
            />
          </motion.div>

          <motion.div
            className="home-spotlight__card"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            <ul className="home-stat-grid">
              {stats.map((stat) => {
                const Icon = getIcon(stat.icon as IconName);
                return (
                  <li key={stat.label} className="home-stat-pill" data-index={stat.display}>
                    <span className="home-stat-pill__icon">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <p className="home-stat-pill__label">{stat.label}</p>
                    <p className="home-stat-pill__detail">{stat.detail}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic leading-relaxed text-ink-subtle">
          {statsDisclaimer}
        </p>
      </SectionContainer>
    </ScrollSection>
  );
}

const eligibilityCriterionIcons: IconName[] = [
  "user-check",
  "activity",
  "clipboard-list",
  "globe",
  "trending-up",
];

function HomeEligibilitySection() {
  const { eligibility } = homeContent;

  return (
    <ScrollSection
      id="eligibility"
      theme="light"
      snap={false}
      className="home-eligibility gradient-light relative overflow-hidden py-28 sm:py-36"
    >
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -left-24 top-1/4 size-[22rem] bg-lime/20" />
        <div className="orb right-[-8rem] bottom-0 size-[26rem] bg-forest/10" />
      </div>

      <SectionContainer className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75 }}
        >
          <Eyebrow className="text-forest">{eligibility.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="mt-2 text-balance text-ink">
            {eligibility.title}{" "}
            <span className="text-gradient">{eligibility.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {eligibility.description}
          </p>
        </motion.div>

        <div className="home-eligibility__stage mt-14 lg:mt-16">
          <motion.div
            className="home-eligibility__media"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85 }}
          >
            <StoryBanner
              {...homeImages.eligibility}
              theme="light"
              ratio="portrait"
              rounded="rounded-[2rem]"
              sizes="(max-width: 1024px) 100vw, 480px"
              className="h-full w-full"
            />
            <div className="home-eligibility__badge" aria-hidden>
              <span className="home-eligibility__badge-label">Physician review</span>
              <span className="home-eligibility__badge-value">Required</span>
            </div>
          </motion.div>

          <div className="home-eligibility__content">
            <p className="home-eligibility__kicker">You may qualify if you are</p>
            <Stagger className="home-eligibility__grid" stagger={0.07}>
              {eligibility.qualifies.map((item, index) => {
                const Icon = getIcon(eligibilityCriterionIcons[index] ?? "badge-check");
                const isWide = index === eligibility.qualifies.length - 1;

                return (
                  <StaggerChild
                    key={item.slice(0, 48)}
                    direction="up"
                    distance={20}
                    className={isWide ? "home-eligibility__card--wide" : undefined}
                  >
                    <article className="home-eligibility__card card-hover">
                      <span className="home-eligibility__card-icon" aria-hidden>
                        <Icon className="size-[1.15rem]" />
                      </span>
                      <p className="home-eligibility__card-text">{item}</p>
                    </article>
                  </StaggerChild>
                );
              })}
            </Stagger>

            <div className="home-eligibility__footer">
              <p className="home-eligibility__note">{eligibility.note}</p>
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="lg" className="shrink-0 rounded-full">
                  {eligibility.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}

