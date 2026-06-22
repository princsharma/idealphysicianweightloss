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
import { contactContent } from "@/lib/constants/contact-content";
import { cn } from "@/lib/utils";

export function ContactFaqSection() {
  const { faq } = contactContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <ScrollSection theme="light" snap={false} className="justify-center py-20 sm:py-28">
      <SectionContainer>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
            <Eyebrow className="text-accent">{faq.eyebrow}</Eyebrow>
            <DisplayHeading className="text-ink">
              {faq.title}{" "}
              <span className="text-gradient">{faq.titleHighlight}</span>
            </DisplayHeading>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink/10 rounded-3xl border border-border-strong bg-surface px-6 shadow-soft sm:px-8">
              {faq.items.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <Reveal key={item.id} delay={index * 0.07} direction="right" distance={16}>
                    <div className="py-6">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-6 text-left transition-colors hover:text-accent"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <span className="font-display text-lg font-medium text-ink sm:text-xl">
                          {item.question}
                        </span>
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
                          <p className="max-w-2xl pt-4 text-base leading-relaxed text-ink-muted">
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
