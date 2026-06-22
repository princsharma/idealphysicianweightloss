"use client";

import { ArrowUpRight, Globe, Link2, Mail, Share2 } from "lucide-react";

import { Reveal, Stagger, StaggerChild } from "@/components/client/reveal";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/scroll-section";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";

export function Footer() {
  const { footer } = homeContent;
  const year = new Date().getFullYear();

  return (
    <footer className="scroll-stack-after border-t border-white/5 bg-dark py-16 text-white">
      <SectionContainer>
        <div className="flex flex-col gap-10 border-b border-white/5 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal direction="up" distance={24}>
            <div className="max-w-md">
              <Logo size="footer" />
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {siteConfig.description}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" distance={24} delay={0.1}>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
              <input
                type="email"
                name="email"
                placeholder={footer.newsletter.placeholder}
                aria-label="Email address"
                className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-white/30 focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <Button type="submit" className="shrink-0 rounded-full">
                {footer.newsletter.button}
                <ArrowUpRight className="size-4" />
              </Button>
            </form>
          </Reveal>
        </div>

        <Stagger className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {footer.columns.map((column) => (
            <StaggerChild key={column.title} direction="up" distance={20}>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                  {column.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal variant="fade" delay={0.2}>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-xs text-white/30">
              © {year} {siteConfig.name}
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", Icon: Share2, href: siteConfig.social.facebook || "#" },
                { label: "Instagram", Icon: Globe, href: siteConfig.social.instagram || "#" },
                { label: "LinkedIn", Icon: Link2, href: siteConfig.social.linkedin || "#" },
                {
                  label: "Email",
                  Icon: Mail,
                  href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "/contact",
                },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full p-2.5 text-white/30 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/25">
            {footer.disclaimer}
          </p>
        </Reveal>
      </SectionContainer>
    </footer>
  );
}
