"use client";

import { Reveal } from "@/components/client/reveal";
import { StoryBanner } from "@/components/client/story-banner";
import { DisplayHeading, Eyebrow, ScrollSection, SectionContainer } from "@/components/ui/scroll-section";
import {
  howItWorksContent,
  howItWorksImages,
} from "@/lib/constants/how-it-works-content";
import { useInView } from "@/lib/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function HowItWorksChapters() {
  return (
    <>
      {howItWorksContent.chapters.map((chapter) => (
        <HowItWorksChapter key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
}

function HowItWorksChapter({
  chapter,
}: {
  chapter: (typeof howItWorksContent.chapters)[number];
}) {
  const image = howItWorksImages[chapter.image];
  const dark = chapter.theme === "dark";
  const { ref, inView } = useInView<HTMLElement>({
    once: false,
    amount: 0,
    rootMargin: "-12% 0px -48% 0px",
  });

  return (
    <ScrollSection
      ref={ref}
      id={chapter.id}
      theme={chapter.theme}
      snap={false}
      className={cn("hiw-chapter", dark && "noise", inView && "is-active")}
    >
      <SectionContainer className="py-20 sm:py-24 lg:py-28">
        <div
          className={cn(
            "hiw-chapter__grid",
            chapter.mediaSide === "left" && "hiw-chapter--media-left",
            chapter.mediaSide === "right" && "hiw-chapter--media-right",
          )}
        >
          <div className="hiw-chapter__copy max-w-xl">
            <p
              className={cn("hiw-chapter__number", inView && "is-active")}
              aria-hidden
            >
              {chapter.number}
            </p>
            <Reveal
              direction={chapter.mediaSide === "left" ? "right" : "left"}
              distance={32}
            >
              <Eyebrow className={dark ? undefined : "text-forest"}>{chapter.kicker}</Eyebrow>
              <DisplayHeading className={dark ? "text-white" : "text-ink"}>
                {chapter.title}{" "}
                <span className="text-gradient">{chapter.titleHighlight}</span>
              </DisplayHeading>
              <p
                className={cn(
                  "mt-6 text-base leading-relaxed sm:text-lg",
                  dark ? "text-white/60" : "text-ink-muted",
                )}
              >
                {chapter.body}
              </p>
              <ul className="mt-8 space-y-3">
                {chapter.notes.map((note) => (
                  <li
                    key={note}
                    className={cn(
                      "border-l-2 border-accent pl-4 text-sm leading-relaxed",
                      dark ? "text-white/70" : "text-ink",
                    )}
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            className="hiw-chapter__media lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]"
            variant="zoom"
            distance={18}
            duration={1}
            delay={0.08}
          >
            <StoryBanner
              {...image}
              theme={chapter.theme}
              ratio="portrait"
              rounded="rounded-[1.75rem]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="overflow-hidden rounded-[1.75rem] shadow-elevated"
            />
          </Reveal>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}
