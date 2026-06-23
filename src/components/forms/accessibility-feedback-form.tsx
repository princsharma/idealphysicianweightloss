"use client";

import { ArrowUpRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Button } from "@/components/ui/button";
import { accessibilityContent } from "@/lib/constants/accessibility-content";
import { cn } from "@/lib/utils";

const TOPIC = "Accessibility feedback";

interface AccessibilityFeedbackFormProps {
  className?: string;
}

export function AccessibilityFeedbackForm({ className }: AccessibilityFeedbackFormProps) {
  const { feedback } = accessibilityContent;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const pageUrl = String(formData.get("pageUrl") ?? "").trim();
    const messageBody = String(formData.get("message") ?? "").trim();
    const message = pageUrl ? `Page URL: ${pageUrl}\n\n${messageBody}` : messageBody;

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: TOPIC,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "glass-light flex min-h-[380px] flex-col items-center justify-center rounded-3xl p-10 text-center sm:p-12",
          className,
        )}
        role="status"
      >
        <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-accent-soft shadow-soft">
          <span className="font-display text-2xl font-semibold text-accent" aria-hidden>
            ✓
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">{feedback.successTitle}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-base">
          {feedback.successDescription}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Submit another report
        </Button>
      </div>
    );
  }

  return (
    <form
      id="accessibility-feedback"
      onSubmit={handleSubmit}
      className={cn("glass-light rounded-3xl p-6 sm:p-8 lg:p-10", className)}
      aria-label="Accessibility feedback form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Jane Smith" autoComplete="name" disabled={isSubmitting} />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          autoComplete="email"
          disabled={isSubmitting}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          autoComplete="tel"
          className="sm:col-span-2"
          disabled={isSubmitting}
        />
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="a11y-page-url" className="text-xs font-medium text-ink-muted">
            Page URL (optional)
          </label>
          <input
            id="a11y-page-url"
            name="pageUrl"
            type="url"
            disabled={isSubmitting}
            placeholder="https://example.com/page"
            className="h-11 rounded-xl border border-border-strong bg-white/60 px-4 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="a11y-message" className="text-xs font-medium text-ink-muted">
            Describe the accessibility barrier
          </label>
          <textarea
            id="a11y-message"
            name="message"
            required
            disabled={isSubmitting}
            rows={5}
            placeholder="Tell us what you were trying to do, what happened, and which assistive technology you use (if any)."
            className="resize-none rounded-xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          />
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <MagneticButton className="mt-6 w-full">
        <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send accessibility feedback
              <ArrowUpRight className="size-4" aria-hidden />
            </>
          )}
        </Button>
      </MagneticButton>

      <p className="mt-4 text-center text-xs text-ink-subtle">{feedback.footnote}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  className,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  disabled?: boolean;
}) {
  const id = `a11y-${name}`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-xs font-medium text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        disabled={disabled}
        className="h-11 rounded-xl border border-border-strong bg-white/60 px-4 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
      />
    </div>
  );
}
