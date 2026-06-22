"use client";

import { useState, type FormEvent } from "react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EligibilityFormProps {
  className?: string;
}

export function EligibilityForm({ className }: EligibilityFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "glass-light flex flex-col items-center justify-center rounded-3xl p-10 text-center",
          className,
        )}
      >
        <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent-soft">
          <span className="text-2xl text-accent" aria-hidden>✓</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">You may be eligible</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
          A physician will review your profile and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("glass-light rounded-3xl p-6 sm:p-8", className)}
      aria-label="Check eligibility form"
    >
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
        Free assessment
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
        Check your eligibility
      </h3>
      <p className="mt-1 text-sm text-ink-muted">Takes less than 60 seconds</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Field label="Age" name="age" type="number" placeholder="35" />
        <Field label="Weight (lbs)" name="weight" type="number" placeholder="220" />
        <Field label="Height" name="height" placeholder={'5\'8"'} />
        <Field label="Gender" name="gender" placeholder="Select" />
        <div className="sm:col-span-2">
          <Field label="Goal weight (lbs)" name="goalWeight" type="number" placeholder="170" />
        </div>
      </div>

      <MagneticButton className="mt-6 w-full">
        <Button type="submit" size="lg" className="w-full rounded-full">
          Check Eligibility
        </Button>
      </MagneticButton>

      <p className="mt-4 text-center text-xs text-ink-subtle">
        HIPAA secure · No commitment · Physician-reviewed
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="h-11 rounded-xl border border-border-strong bg-white/60 px-4 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
