"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { StoryBanner } from "@/components/client/story-banner";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent, homeImages } from "@/lib/constants/home-content";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SCROLL_MARKER = 0.42;

export function HomeJourneySection() {
  const { experience } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const beatsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [railFill, setRailFill] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], ["-3%", "5%"]);

  const active = experience.items[activeIndex] ?? experience.items[0];
  const count = experience.items.length;

  const setBeatRef = useCallback((index: number) => {
    return (node: HTMLLIElement | null) => {
      beatsRef.current[index] = node;
    };
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const beats = beatsRef.current.filter((node): node is HTMLLIElement => node !== null);
      if (beats.length === 0) return;

      const markerY = window.innerHeight * SCROLL_MARKER;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      beats.forEach((beat, index) => {
        const rect = beat.getBoundingClientRect();
        const anchorY = rect.top + rect.height * 0.38;
        const distance = Math.abs(anchorY - markerY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      const timeline = beats[0]?.closest(".home-journey__timeline") as HTMLElement | null;
      const rail = timeline?.querySelector(".home-journey__rail") as HTMLElement | null;
      const node = beats[closestIndex]?.querySelector(".home-journey__node") as HTMLElement | null;

      if (rail && node) {
        const railRect = rail.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const nodeCenter = nodeRect.top + nodeRect.height / 2 - railRect.top;
        const fill = Math.max(0, Math.min(100, (nodeCenter / railRect.height) * 100));
        setRailFill(fill);
      }
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [count]);

  return (
    <ScrollSection
      ref={sectionRef}
      theme="dark"
      snap={false}
      className="home-journey noise relative overflow-hidden py-28 sm:py-36"
    >
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -left-20 top-12 size-[22rem] bg-accent/12" />
        <div className="orb bottom-[-4rem] right-[-5rem] size-[30rem] bg-lime/10" />
      </div>

      <SectionContainer className="relative">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease }}
        >
          <Eyebrow>{experience.eyebrow}</Eyebrow>
          <DisplayHeading size="lg" className="mt-2 text-balance text-white">
            {experience.title}{" "}
            <span className="text-gradient">{experience.titleHighlight}</span>
          </DisplayHeading>
          <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">{experience.description}</p>
        </motion.header>

        <div className="home-journey__nav mt-10 lg:hidden" role="tablist" aria-label="Journey phases">
          {experience.items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={cn("home-journey__pill", activeIndex === index && "is-active")}
              onClick={() => {
                beatsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveIndex(index);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="home-journey__stage mt-12 lg:mt-16">
          <aside className="home-journey__visual-wrap">
            <motion.div className="home-journey__visual" style={{ y: visualY }}>
              <StoryBanner
                {...homeImages.experience}
                theme="dark"
                ratio="portrait"
                rounded="rounded-[1.85rem]"
                sizes="(max-width: 1024px) 100vw, 480px"
                className="mx-auto h-full min-h-full w-full max-w-[unset] [&>div]:h-full [&_.relative]:h-full [&_img]:object-cover [&_img]:object-right"
              />
              <div className="home-journey__visual-scrim" aria-hidden />
              <div className="home-journey__visual-caption">
                <p className="home-journey__visual-phase" aria-live="polite">
                  Phase {String(activeIndex + 1).padStart(2, "0")}{" "}
                  <span className="text-white/35">/ {String(count).padStart(2, "0")}</span>
                </p>
                <p className="home-journey__visual-title type-h3 text-white">{active.title}</p>
              </div>
            </motion.div>
          </aside>

          <div className="home-journey__timeline">
            <div className="home-journey__rail" aria-hidden>
              <span className="home-journey__rail-track" />
              <span className="home-journey__rail-fill" style={{ height: `${railFill}%` }} />
            </div>

            <ol className="home-journey__beats">
              {experience.items.map((item, index) => (
                <li
                  key={item.title}
                  ref={setBeatRef(index)}
                  className={cn("home-journey__beat", activeIndex === index && "is-active")}
                >
                  <div className="home-journey__marker">
                    <span className="home-journey__node" />
                  </div>
                  <button
                    type="button"
                    className="home-journey__beat-btn"
                    aria-current={activeIndex === index ? "step" : undefined}
                    onClick={() => {
                      beatsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      setActiveIndex(index);
                    }}
                  >
                    <span className="home-journey__beat-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="home-journey__beat-copy">
                      <span className="home-journey__beat-title type-h4 text-white">{item.title}</span>
                      <span className="home-journey__beat-text">{item.text}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}
