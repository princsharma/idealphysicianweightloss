export const HERO_LCP = {
  src: "/hero/hero-lcp.webp",
  width: 384,
  height: 304,
  alt: "Doctor on a telehealth consultation",
} as const;

export const HERO_GALLERY = [
  {
    src: HERO_LCP.src,
    alt: HERO_LCP.alt,
  },
  {
    src: "/hero/hero-2.jpg",
    alt: "Patient enjoying a healthy, active life",
  },
  {
    src: "/hero/hero-3.jpg",
    alt: "Licensed physician at her desk",
  },
  {
    src: "/hero/hero-4.jpg",
    alt: "Completing the application on a phone",
  },
  {
    src: "/hero/hero-5.jpg",
    alt: "Happy certified patient",
  },
] as const;

export const HERO_IMAGE_SIZES = "(max-width: 640px) 280px, (max-width: 1024px) 340px, 385px";

export const HERO_LCP_IMAGE = HERO_LCP;
