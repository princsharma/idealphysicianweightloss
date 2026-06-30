export const HERO_GALLERY = [
  {
    src: "/hero/hero-1.jpg",
    alt: "Doctor on a telehealth consultation",
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

export const HERO_LCP_IMAGE = HERO_GALLERY[0];
