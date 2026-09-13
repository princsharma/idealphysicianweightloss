"use client";

import type { ReactNode } from "react";

import { physiciansContent } from "@/lib/constants/physicians-content";
import { useInView } from "@/lib/hooks/use-in-view";
import { cn } from "@/lib/utils";

function InViewMark({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({
    once: false,
    amount: 0,
    rootMargin: "-18% 0px -42% 0px",
  });

  return (
    <li ref={ref} className={cn(className, inView && "is-active")}>
      {children}
    </li>
  );
}

export function PhysiciansReviewSteps() {
  const { reviewProcess } = physiciansContent;

  return (
    <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {reviewProcess.steps.map((step, index) => (
        <InViewMark key={step.slice(0, 40)} className="phys-step">
          <p className="phys-step__num" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{step}</p>
        </InViewMark>
      ))}
    </ol>
  );
}

export function PhysiciansCoverageStat({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLParagraphElement>({
    once: false,
    amount: 0,
    rootMargin: "-12% 0px -30% 0px",
  });

  return (
    <p
      ref={ref}
      className={cn("phys-coverage__stat", inView && "is-active")}
      aria-hidden
    >
      {value}
    </p>
  );
}
