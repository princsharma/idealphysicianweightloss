"use client";

import { ArrowUpRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { MagneticButton } from "@/components/client/magnetic-button";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/lib/constants/contact-content";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  id?: string;
}

export function ContactForm({ className, id = "contact-form" }: ContactFormProps) {
  const { form } = contactContent;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
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
          "glass-light flex min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center sm:p-12",
          className,
        )}
        role="status"
      >
        <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-accent-soft shadow-soft">
          <span className="font-display text-2xl font-semibold text-accent" aria-hidden>
            ✓
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{form.successTitle}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-base">
          {form.successDescription}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn("glass-light rounded-3xl p-6 sm:p-8 lg:p-10", className)}
      aria-label="Contact form"
    >
      <div className="mt-0 grid gap-4 sm:grid-cols-2">
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
          <label htmlFor="contact-topic" className="text-xs font-medium text-ink-muted">
            Topic
          </label>
          <select
            id="contact-topic"
            name="topic"
            required
            disabled={isSubmitting}
            defaultValue=""
            className="h-11 rounded-xl border border-border-strong bg-white/60 px-4 text-sm text-ink transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          >
            <option value="" disabled>
              Select a topic
            </option>
            {form.topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="contact-message" className="text-xs font-medium text-ink-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            disabled={isSubmitting}
            rows={5}
            placeholder="How can we help you today?"
            className="resize-none rounded-xl border border-border-strong bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          />
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={isSubmitting}
          className="mt-1 size-4 rounded border-border-strong text-accent focus:ring-accent/30 disabled:opacity-60"
        />
        <span className="text-xs leading-relaxed text-ink-muted">
          I agree to be contacted about my inquiry. Protected health information should not be sent via this form.
        </span>
      </label>

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
              Send message
              <ArrowUpRight className="size-4" aria-hidden />
            </>
          )}
        </Button>
      </MagneticButton>

      <p className="mt-4 text-center text-xs text-ink-subtle">{form.footnote}</p>
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
  const id = `contact-${name}`;

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
