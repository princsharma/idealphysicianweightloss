"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-card";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import type { StatePageContent } from "@/lib/constants/states/state-page-types";
import { cn } from "@/lib/utils";

type StateFaqSectionProps = {
  content: StatePageContent;
};

export function StateFaqSection({ content }: StateFaqSectionProps) {
  const { faq, local } = content;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section id="faq" className="state-bento-section scroll-mt-32 bg-paper py-20 sm:py-28">
      <SectionContainer>
        <BentoGrid className="items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-36 lg:self-start" direction="left" distance={24}>
            <BentoCard variant="dark" className="h-full">
              <Eyebrow>{faq.eyebrow}</Eyebrow>
              <DisplayHeading className="mt-4 text-white">
                {faq.title}{" "}
                <span className="text-gradient">{faq.titleHighlight}</span>
              </DisplayHeading>
              <p className="mt-5 text-sm leading-relaxed text-white/55">{faq.subtitle}</p>
              <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent-bright">
                {local.stateAbbr} · {local.countiesLabel}
              </p>
            </BentoCard>
          </Reveal>

          <div className="lg:col-span-8">
            <BentoCard variant="light" hover={false} className="!p-0 divide-y divide-ink/10">
              {faq.items.map((item, index) => {
                const isOpen = openId === item.id;
                return (
                  <Reveal key={item.id} delay={index * 0.06} direction="right" distance={16}>
                    <div className="px-6 py-5 sm:px-8">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <span className="font-display text-lg font-medium text-ink">{item.question}</span>
                        <ChevronDown
                          className={cn(
                            "mt-1 size-5 shrink-0 text-accent transition-transform duration-300",
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
                          <p className="pt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </BentoCard>
          </div>
        </BentoGrid>
      </SectionContainer>
    </section>
  );
}
