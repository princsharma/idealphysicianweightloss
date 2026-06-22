"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow, SectionContainer } from "@/components/ui/scroll-section";
import { alabamaContent } from "@/lib/constants/states/alabama-content";
import { cn } from "@/lib/utils";

export function AlabamaFaqSection() {
  const { faq } = alabamaContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-32 bg-paper py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-36 lg:self-start" direction="left" distance={24}>
            <Eyebrow className="text-accent">{faq.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {faq.title}{" "}
              <span className="text-gradient">{faq.titleHighlight}</span>
            </DisplayHeading>
            <p className="mt-5 text-sm text-ink-muted">
              Straight answers for Alabama patients before you book.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink/10 rounded-3xl border border-border-strong bg-white shadow-soft">
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
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
