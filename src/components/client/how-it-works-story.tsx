"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { StoryBanner } from "@/components/client/story-banner";
import { LinkButton } from "@/components/ui/link-button";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import {
  howItWorksContent,
  howItWorksImages,
} from "@/lib/constants/how-it-works-content";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function splitWords(text: string, reduce: boolean, delay = 0.12) {
  if (reduce) return text;

  return text.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay: delay + index * 0.045, ease }}
      >
        {word}
        {"\u00A0"}
      </motion.span>
    </span>
  ));
}

export function HowItWorksScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

export function HowItWorksStoryHero() {
  const { hero } = howItWorksContent;
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    setIntro(true);
  }, []);
  const animateIntro = intro && !reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.22]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.62], [0, reduce ? 0 : -64]);

  return (
    <section ref={ref} className="relative h-[180vh] bg-dark">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ scale, y }}>
          <StoryBanner
            {...howItWorksImages.hero}
            theme="dark"
            ratio="screen"
            rounded="rounded-none"
            priority
            lockScale
            className="h-full"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/72 to-forest-ink/30"
          aria-hidden
        />
        <div className="orb -left-24 top-1/4 size-80 bg-accent/20" aria-hidden />
        <div className="orb right-[-8rem] bottom-[-4rem] size-[28rem] bg-lime/10" aria-hidden />

        <motion.div
          className="relative z-10 flex h-full flex-col justify-center pt-[var(--header-h)]"
          style={{ opacity: copyOpacity, y: copyY }}
        >
          <SectionContainer className="w-full py-6 sm:py-10">
            <Eyebrow>{hero.kicker}</Eyebrow>
            <h1 className="type-h1 mt-3 max-w-5xl text-white">
              {splitWords(hero.title, !animateIntro)}{" "}
              <span className="text-gradient">{splitWords(hero.titleHighlight, !animateIntro, 0.42)}</span>
            </h1>
            <motion.p
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:mt-8 sm:text-xl"
              initial={false}
              animate={animateIntro ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }}
            >
              {hero.lede}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4 sm:mt-12"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease }}
            >
              <MagneticButton>
                <LinkButton href={siteConfig.bookingUrl} size="xl" className="rounded-full">
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </LinkButton>
              </MagneticButton>
              <LinkButton href={hero.secondaryHref} variant="outline-dark" size="lg" className="rounded-full">
                {hero.secondaryCta}
              </LinkButton>
            </motion.div>
            <p className="hiw-scroll-hint">
              <span className="hiw-scroll-hint__line" aria-hidden />
              {hero.scrollHint}
              <ArrowDown className="size-3.5" aria-hidden />
            </p>
          </SectionContainer>
        </motion.div>
      </div>
    </section>
  );
}

function ChapterSlide({
  item,
  index,
  count,
  progress,
  reduce,
}: {
  item: (typeof howItWorksContent.chapters)[number];
  index: number;
  count: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const image = howItWorksImages[item.image];
  const slice = 1 / count;
  const overlap = slice * 0.28;
  const start = index === 0 ? 0 : index * slice - overlap;
  const end = index === count - 1 ? 1 : (index + 1) * slice + overlap;
  const fade = Math.min(overlap, 0.08);

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 0, end - fade, end]
      : index === count - 1
        ? [start, start + fade, 1, 1]
        : [start, start + fade, end - fade, end],
    index === 0 ? [1, 1, 1, 0] : index === count - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [reduce ? 1 : 1.18, 1]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.div className="h-full w-full origin-center will-change-transform" style={{ scale }}>
        <StoryBanner
          {...image}
          theme="dark"
          ratio="screen"
          rounded="rounded-none"
          sizes="52vw"
          lockScale
          className="h-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forest-ink/10 to-forest-ink/55" />
    </motion.div>
  );
}

function ChapterProgress({ progress }: { progress: MotionValue<number> }) {
  const width = useTransform(progress, (value) => `${value * 100}%`);

  return (
    <span className="relative h-px flex-1 overflow-hidden bg-white/10">
      <motion.span className="absolute inset-y-0 left-0 bg-accent" style={{ width }} />
    </span>
  );
}

export function HowItWorksStoryChapters() {
  const chapters = howItWorksContent.chapters;
  const count = chapters.length;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 68, damping: 22, mass: 0.32 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(count - 1, Math.max(0, Math.floor(value * count + 0.001)));
    setActive(next);
  });

  const chapter = chapters[active];

  return (
    <div ref={ref} className="relative bg-dark" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-[var(--header-h)] flex h-[calc(100dvh-var(--header-h))] overflow-hidden">
        <div className="relative hidden w-[52%] lg:block">
          {chapters.map((item, index) => (
            <ChapterSlide
              key={item.id}
              item={item}
              index={index}
              count={count}
              progress={smooth}
              reduce={reduce}
            />
          ))}
        </div>

        <div className="relative flex w-full flex-col justify-center bg-dark px-6 py-24 lg:w-[48%] lg:px-16">
          <div className="mb-10 hidden items-center gap-4 lg:flex" aria-hidden>
            <span className="font-display text-xs tracking-[0.22em] uppercase text-white/40">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <ChapterProgress progress={smooth} />
          </div>

          <div className="relative mb-10 overflow-hidden rounded-3xl lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id}
                initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease }}
              >
                <StoryBanner
                  {...howItWorksImages[chapter.image]}
                  theme="dark"
                  ratio="wide"
                  rounded="rounded-3xl"
                  sizes="100vw"
                  lockScale
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={chapter.id}
              initial={reduce ? false : { opacity: 0, y: 52 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -36 }}
              transition={{ duration: 0.55, ease }}
              className="max-w-lg"
            >
              <p className="hiw-chapter__number text-accent">{chapter.number}</p>
              <Eyebrow>{chapter.kicker}</Eyebrow>
              <DisplayHeading className="text-white">
                {chapter.title}{" "}
                <span className="text-gradient">{chapter.titleHighlight}</span>
              </DisplayHeading>
              <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">{chapter.body}</p>
              <ul className="mt-8 space-y-3">
                {chapter.notes.map((note, noteIndex) => (
                  <motion.li
                    key={note}
                    className="border-l-2 border-accent pl-4 text-sm text-white/70"
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + noteIndex * 0.08, duration: 0.5, ease }}
                  >
                    {note}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <ol className="mt-12 flex gap-3 lg:mt-16" aria-label="Story chapters">
            {chapters.map((item, index) => (
              <li key={item.id}>
                <span
                  className={cn(
                    "block h-1 w-8 rounded-full transition-colors duration-500",
                    index === active ? "bg-accent" : "bg-white/15",
                  )}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksStoryPath() {
  const { path } = howItWorksContent;
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 75%"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 55, damping: 24 });
  const height = useTransform(line, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark py-28 sm:py-36">
      <SectionContainer>
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease }}
        >
          <Eyebrow>{path.eyebrow}</Eyebrow>
          <DisplayHeading className="text-white">
            {path.title}{" "}
            <span className="text-gradient">{path.titleHighlight}</span>
          </DisplayHeading>
        </motion.div>

        <div className="relative mt-24">
          <div className="absolute bottom-8 left-[1.15rem] top-2 w-px bg-white/10 sm:left-[1.7rem]" aria-hidden />
          <motion.div
            className="absolute left-[1.15rem] top-2 w-px origin-top bg-accent sm:left-[1.7rem]"
            style={{ height: reduce ? "100%" : height }}
            aria-hidden
          />

          <ol className="space-y-16 sm:space-y-24">
            {path.phases.map((phase) => (
              <motion.li
                key={phase.title}
                className="hiw-path__item"
                initial={reduce ? false : { opacity: 0, x: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease }}
              >
                <span className="hiw-path__index">{phase.phase}</span>
                <h3 className="type-h3 tracking-tight text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
                  {phase.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </SectionContainer>
    </section>
  );
}

export function HowItWorksStoryCta() {
  const { cta } = howItWorksContent;
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 1.16, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale, y }}>
        <StoryBanner
          {...howItWorksImages.cta}
          theme="dark"
          ratio="screen"
          rounded="rounded-none"
          lockScale
          className="h-full min-h-[28rem]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest-ink/78" aria-hidden />
      <SectionContainer className="relative py-28 text-center sm:py-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
        >
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
        </motion.div>
      </SectionContainer>
    </section>
  );
}
