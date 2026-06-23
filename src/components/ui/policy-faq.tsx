"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { DisplayHeading, Eyebrow } from "@/components/ui/scroll-section";
import { cn } from "@/lib/utils";

type FaqItem = { id: string; question: string; answer: string };

type PolicyFaqProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  items: readonly FaqItem[];
  className?: string;
};

export function PolicyFaq({ eyebrow, title, titleHighlight, items, className }: PolicyFaqProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("grid gap-16 lg:grid-cols-12", className)}>
      <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" direction="left" distance={28}>
        <Eyebrow className="text-accent">{eyebrow}</Eyebrow>
        <DisplayHeading className="text-ink">
          {title}{" "}
          <span className="text-gradient">{titleHighlight}</span>
        </DisplayHeading>
      </Reveal>

      <div className="lg:col-span-8">
        <div className="divide-y divide-ink/10 rounded-3xl border border-border-strong bg-surface px-6 shadow-soft sm:px-8">
          {items.map((item, index) => {
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
                        "mt-1 size-5 shrink-0 text-ink/40 transition-transform duration-300",
                        isOpen && "rotate-180 text-accent",
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
                      <p className="pt-4 text-base leading-relaxed text-ink-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
