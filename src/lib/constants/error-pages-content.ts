export type ErrorPageLink = {
  href: string;
  label: string;
  description: string;
};

export const errorPageLinks: ErrorPageLink[] = [
  {
    href: "/weight-loss/how-it-works",
    label: "How it works",
    description: "See the four-step path from evaluation to results.",
  },
  {
    href: "/weight-loss/faq",
    label: "FAQ",
    description: "Answers to common questions about GLP-1 care.",
  },
  {
    href: "/contact",
    label: "Contact us",
    description: "Reach our care team for help finding the right page.",
  },
];

export const notFoundContent = {
  code: "404",
  eyebrow: "Page not found",
  title: "This page doesn't exist",
  description:
    "The address may be incorrect, or the page may have moved. Use the links below to get back on track.",
  primaryCta: { href: "/", label: "Back to home" },
  contactPrompt: "Need help finding something?",
} as const;

export const goneContent = {
  code: "410",
  eyebrow: "Content removed",
  title: "This content is no longer available",
  description:
    "The page you requested has been permanently removed and will not return. Browse our program resources or return to the homepage.",
  primaryCta: { href: "/", label: "Back to home" },
  contactPrompt: "Questions about your care?",
} as const;
