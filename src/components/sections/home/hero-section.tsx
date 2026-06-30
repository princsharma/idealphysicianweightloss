import { HeroCarousel } from "@/components/client/hero-carousel";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/lib/constants/home-content";

const bookingLinkProps = {
  href: siteConfig.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function HeroSection() {
  const { hero } = homeContent;

  return (
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
        <aside className="mary-hero__side">
          <a {...bookingLinkProps} className="mary-spin" aria-label="Start your evaluation">
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
              <img
                src={siteConfig.logo}
                alt=""
                width={48}
                height={48}
                className="block h-8 w-auto max-w-[3.5rem] object-contain"
              />
            </span>
          </a>

          <p className="mary-hero__note">{hero.description}</p>
        </aside>

        <div className="mary-hero__main">
          <h1 className="mary-hero__title">
            <span className="mary-hero__title-line">{hero.titleLine1}</span>
            <span className="mary-hero__title-line mary-hero__title-line--accent">{hero.titleLine2}</span>
          </h1>
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
