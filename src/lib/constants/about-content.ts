import { siteConfig } from "@/config/site";

export const aboutContent = {
  hero: {
    label: "Welcome",
    title: "About",
    asideTitle: "The team behind your care",
    asideText: `${siteConfig.name} connects you with licensed physicians through secure telehealth — personalized GLP-1 weight loss programs built around your health profile, not a one-size-fits-all diet.`,
    image: {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80",
      alt: "Licensed physician providing compassionate telehealth care",
    },
  },
  intro: {
    eyebrow: "Who we are",
    heading: "Care with purpose and clinical integrity",
    lead: "Shaping healthier outcomes through physician-led strategy, evidence-based treatment, and real human support.",
    paragraphs: [
      `${siteConfig.name} offers customized medical weight-loss programs based on your health profile. State-certified doctors assess your needs and may prescribe FDA-approved GLP-1 medications when clinically appropriate.`,
      "Our mission is to make your journey simple and achievable — personalized plans tailored to your health needs, with licensed physicians guiding you every step through secure virtual consultations. No waiting rooms. No judgment. Just medicine that meets you where you are.",
    ],
  },
  packages: {
    eyebrow: "Care pathways",
    title: "Simple plans for every stage",
    subtitle: "From your first free call to ongoing physician monitoring — transparent, physician-led care at every step.",
    tiers: [
      {
        id: "starter",
        name: "Care Team Call",
        price: "Free",
        period: "",
        description: "Your first conversation with our care team.",
        features: [
          "Health goals & medication preferences",
          "Coverage & eligibility overview",
          "Answers before you commit",
          "HIPAA-secure intake",
        ],
        cta: "Book free call",
        featured: false,
      },
      {
        id: "pro",
        name: "Physician Evaluation",
        price: "$75",
        period: "one-time",
        description: "Full medical evaluation with a licensed doctor.",
        features: [
          "Secure video or audio visit",
          "Personalized treatment assessment",
          "Prescription if clinically appropriate",
          "Insurance verification support",
          "Dose & side-effect guidance",
        ],
        cta: "Start evaluation",
        featured: true,
        badge: "Most popular",
      },
      {
        id: "ongoing",
        name: "Ongoing Care",
        price: "Custom",
        period: "monthly",
        description: "Continuous monitoring as your body responds.",
        features: [
          "Follow-up physician visits",
          "Progress tracking & adjustments",
          "Nutrition & lifestyle coaching",
          "Pharmacy fulfillment assistance",
          "24/7 patient support access",
        ],
        cta: "Learn more",
        featured: false,
      },
    ],
  },
  gallery: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        alt: "Patient embracing a healthier active lifestyle",
      },
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        alt: "Physician reviewing patient health data securely",
        badge: "shield" as const,
      },
    ],
  },
  stats: [
    { value: "4,000+", label: "Patients served" },
    { value: "Same-day", label: "Virtual visits" },
    { value: "6", label: "FDA-approved GLP-1 options" },
  ],
  cta: {
    title: "Ready to begin your journey?",
    description: "Join thousands who chose physician-guided weight loss. Schedule a free consultation today.",
    primaryCta: "Get started",
    secondaryHref: "/contact",
    secondaryCta: "Contact us",
  },
} as const;

export type AboutContent = typeof aboutContent;
