import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-forest">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
          The page you are looking for may have moved or no longer exists. Try the homepage or
          browse our weight loss program resources.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-deep"
          >
            Back to homepage
          </Link>
          <Link
            href="/weight-loss/faq"
            className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
          >
            Browse FAQ
          </Link>
        </div>
        <p className="mt-8 text-sm text-ink-subtle">
          Need help?{" "}
          <Link href="/contact" className="font-medium text-forest hover:underline">
            Contact {siteConfig.name}
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
