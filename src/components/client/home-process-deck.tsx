"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";
import { getIcon, type IconName } from "@/lib/utils/icons";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeProcessDeck() {
  const { howItWorks } = homeContent;
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 24 });
  const barScale = useTransform(smooth, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(howItWorks.steps.length - 1, Math.max(0, Math.floor(value * howItWorks.steps.length + 0.05))));
  });

  return (
    <ScrollSection
      ref={ref}
      id="how-it-works"
      theme="dark"
      snap={false}
      className="home-process-shell noise relative overflow-hidden py-28 sm:py-36"
    >
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb left-1/2 top-0 size-[32rem] -translate-x-1/2 bg-lime/10" />
      </div>

      <SectionContainer className="relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="mt-2 text-white">
            {howItWorks.title}{" "}
            <span className="text-gradient">{howItWorks.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">{howItWorks.description}</p>
        </motion.div>

        <div className="home-process-progress" aria-hidden>
          <motion.span className="home-process-progress__fill block w-full" style={{ scaleX: barScale }} />
        </div>

        <ol className="home-process-deck">
          {howItWorks.steps.map((step, index) => {
            const Icon = getIcon(step.icon as IconName);
            const isActive = active === index;

            return (
              <motion.li
                key={step.id}
                className={cn("home-process-card list-none", isActive && "is-active")}
                data-step={`0${index + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.07, ease }}
              >
                <span className="home-process-card__icon" aria-hidden>
                  <Icon className="size-5" />
                </span>
                <p className="home-process-card__step">Step {index + 1}</p>
                <h3 className="mt-2 type-h4 leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
              </motion.li>
            );
          })}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs italic leading-relaxed text-white/40">
          {howItWorks.disclaimer}
        </p>
      </SectionContainer>
    </ScrollSection>
  );
}
