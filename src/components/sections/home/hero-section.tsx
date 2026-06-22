import { HeroCarousel } from "@/components/client/hero-carousel";
import { HeroStartBand } from "@/components/client/hero-start-band";
import { HeroReveal } from "@/components/client/hero-reveal";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <>
      <section className="mary-hero">
        <svg className="mary-hero__deco mary-hero__deco--1" viewBox="0 0 48 48" aria-hidden>
          <path d="M24 43C24 43 7 28.5 7 17.5C7 11 11.5 6.5 18 6.5C20.8 6.5 23.2 8.3 24 11C24.8 8.3 27.2 6.5 30 6.5C36.5 6.5 41 11 41 17.5C41 28.5 24 43 24 43Z" />
        </svg>
        <svg className="mary-hero__deco mary-hero__deco--2" viewBox="0 0 120 130" aria-hidden>
          <path d="M60 8 C98 36 100 88 60 122 C20 88 22 36 60 8 Z" />
          <path d="M60 14 L60 122" />
          <path d="M60 50 C72 44 80 36 84 26 M60 50 C48 44 40 36 36 26 M60 86 C74 80 84 70 88 58 M60 86 C46 80 36 70 32 58" />
        </svg>
        <svg className="mary-hero__deco mary-hero__deco--3" viewBox="0 0 48 48" aria-hidden>
          <circle cx="24" cy="24" r="20" />
          <path d="M24 14v20M14 24h20" />
        </svg>

        <div className="mary-hero__wrap">
          <aside className="mary-hero__side reveal">
            <a href="#start" className="mary-spin" aria-label="Start your evaluation">
              <svg className="mary-spin__ring" viewBox="0 0 158 158" aria-hidden>
                <defs>
                  <path id="spinPath" d="M79,79 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
                </defs>
                <circle cx="79" cy="79" r="77" />
                <text>
                  <textPath href="#spinPath" textLength="350">
                    START YOUR EVALUATION&#160;&#160;•&#160;&#160;START YOUR EVALUATION&#160;&#160;•&#160;&#160;
                  </textPath>
                </text>
              </svg>
              <span className="mary-spin__core">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden>
                  <path d="M24 43C24 43 7 28.5 7 17.5C7 11 11.5 6.5 18 6.5C20.8 6.5 23.2 8.3 24 11C24.8 8.3 27.2 6.5 30 6.5C36.5 6.5 41 11 41 17.5C41 28.5 24 43 24 43Z" fill="#98c54e" />
                  <path d="M24 39C24 39 11 27 11 17.8C11 13.4 14.4 10 18.8 10C21.2 10 23.3 11.6 24 13.9C24.7 11.6 26.8 10 29.2 10C33.6 10 37 13.4 37 17.8C37 27 24 39 24 39Z" fill="#1f6838" />
                </svg>
              </span>
            </a>

            <p className="mary-hero__note">{hero.description}</p>

            <div className="mary-hero__help">
              <span className="mary-hero__help-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <b>{hero.helpLabel}</b>
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>{siteConfig.contact.phone}</a>
              </div>
            </div>
          </aside>

          <div className="mary-hero__main">
            <h1 className="mary-hero__title reveal">
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </h1>
            <HeroCarousel />
          </div>
        </div>

        <HeroReveal />
      </section>

      <HeroStartBand />
    </>
  );
}
