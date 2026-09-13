"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";

import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { howItWorksContent } from "@/lib/constants/how-it-works-content";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function PathBeat({
  phase,
  index,
  count,
  progress,
  active,
  reduce,
}: {
  phase: (typeof howItWorksContent.path.phases)[number];
  index: number;
  count: number;
  progress: MotionValue<number>;
  active: boolean;
  reduce: boolean;
}) {
  const start = index / count;
  const mid = (index + 0.45) / count;
  const opacity = useTransform(progress, [Math.max(0, start - 0.12), start + 0.02, 1], [0.22, 1, 1]);
  const x = useTransform(progress, [Math.max(0, start - 0.1), mid], [reduce ? 0 : 56, 0]);
  const numScale = useTransform(progress, [start, mid, Math.min(1, start + 0.28)], [0.86, 1.06, 1]);

  return (
    <motion.li
      className="hiw-path__item"
      style={reduce ? undefined : { opacity, x }}
    >
      <motion.span
        className={cn("hiw-path__index", active && "is-active")}
        style={reduce ? undefined : { scale: numScale }}
      >
        {phase.phase}
      </motion.span>
      <motion.span
        className={cn("hiw-path__node", active && "is-active")}
        aria-hidden
      />
      <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl">
        {phase.title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
        {phase.text}
      </p>
    </motion.li>
  );
}

export function HowItWorksPath() {
  const { path } = howItWorksContent;
  const count = path.phases.length;
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 70%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 52, damping: 22, mass: 0.4 });
  const lineHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const beadTop = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const barWidth = useTransform(smooth, (value) => `${value * 100}%`);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor(value * count + 0.02))));
  });

  const current = path.phases[active];

  return (
    <section ref={ref} className="hiw-path relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="orb -left-28 top-24 size-80 bg-accent/15" />
        <div className="orb right-[-6rem] bottom-10 size-[26rem] bg-lime/10" />
      </div>

      <SectionContainer className="relative">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:items-stretch lg:gap-20">
          <aside className="lg:col-span-4">
            <div className="hiw-path__pin">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease }}
              >
                <Eyebrow>{path.eyebrow}</Eyebrow>
                <DisplayHeading className="text-white">
                  {path.title}{" "}
                  <span className="text-gradient">{path.titleHighlight}</span>
                </DisplayHeading>
              </motion.div>

              <div className="mt-10" aria-live="polite">
                <p className="font-display text-sm tracking-[0.22em] uppercase text-white/40">
                  {current.phase} / 0{count}
                </p>
                <span className="relative mt-4 block h-px overflow-hidden bg-white/10">
                  <motion.span className="absolute inset-y-0 left-0 bg-accent" style={{ width: barWidth }} />
                </span>
                <p className="mt-5 font-display text-xl font-semibold text-white">{current.title}</p>
              </div>
            </div>
          </aside>

          <div className="relative lg:col-span-8">
            <div className="hiw-path__rail" aria-hidden>
              <span className="hiw-path__rail-track" />
              <motion.span
                className="hiw-path__rail-fill"
                style={{ height: reduce ? "100%" : lineHeight }}
              />
              <motion.span
                className="hiw-path__bead"
                style={reduce ? { top: "100%" } : { top: beadTop }}
              />
            </div>

            <ol className="space-y-20 sm:space-y-28">
              {path.phases.map((phase, index) => (
                <PathBeat
                  key={phase.title}
                  phase={phase}
                  index={index}
                  count={count}
                  progress={smooth}
                  active={active === index}
                  reduce={reduce}
                />
              ))}
            </ol>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
