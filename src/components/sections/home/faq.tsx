"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/client/reveal";
import {
  DisplayHeading,
  Eyebrow,
  ScrollSection,
  SectionContainer,
} from "@/components/ui/scroll-section";
import { homeContent } from "@/lib/constants/home-content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { faq } = homeContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <ScrollSection id="faq" theme="dark" snap={false} className="noise relative justify-center overflow-hidden py-28 sm:py-36">
      <div className="home-atmosphere" aria-hidden>
        <div className="home-grid-lines" />
        <div className="orb -left-16 top-1/3 size-80 bg-accent/12" />
      </div>
      <SectionContainer className="relative flex flex-1 flex-col justify-center">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow>FAQ</Eyebrow>
            <DisplayHeading className="text-white">
              {faq.title}{" "}
              <span className="text-gradient">{faq.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-6 text-white/50">
              Everything you need to know before starting your journey.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 backdrop-blur-md sm:px-8">
              {faq.items.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <Reveal key={item.id} delay={index * 0.07} direction="right" distance={16}>
                    <div className="py-6">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-6 text-left"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <span className="type-h4 font-medium text-white">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "mt-1 size-5 shrink-0 text-accent-bright transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                          aria-hidden
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-4 max-w-2xl text-base leading-relaxed text-white/55">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </ScrollSection>
  );
}
