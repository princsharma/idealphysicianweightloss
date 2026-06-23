import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const physiciansContent = {
  hero: {
    eyebrow: "Medical team",
    title: "Expert doctors guiding your",
    titleHighlight: "GLP-1 journey",
    description:
      "Our physicians deliver personalized GLP-1 consultations online, providing professional guidance, empathetic care, and convenient virtual support to help you safely manage your weight.",
    cta: "Talk to your doctor",
  },
  providers: {
    title: "Meet the expertise behind your care",
    subtitle:
      "We have a team of licensed doctors who specialize in weight management and metabolic health.",
    members: [
      {
        id: "miller",
        name: "Dr. Johnathan Miller, MD",
        title: "Weight Loss & Longevity",
        experience: "5+ years",
        bio: "With over five years of experience, he offers weight loss and longevity consultations. Dr. Miller earned his medical degree from Columbia University and completed his internship at Washington University in Saint Louis.",
        credentials: ["MD", "Columbia University", "Washington University in St. Louis"],
        expertise: ["Weight management", "Metabolic health", "GLP-1 therapy"],
        image: {
          src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
          alt: "Dr. Johnathan Miller, MD",
        },
      },
      {
        id: "bugailiskis",
        name: "Dr. Cheryl Bugailiskis",
        title: "Metabolic Health & GLP-1",
        experience: "Pioneer clinician",
        bio: `Dr. Bugailiskis was one of the first physicians to work with ${brand}. She has expertise in prescribing GLP-1 medications when clinically appropriate. Additionally, she provides guidance on metabolic health based on each patient's individual needs. She earned her medical degree from the University of Illinois at Chicago.`,
        credentials: ["Licensed physician", "GLP-1 prescribing"],
        expertise: ["Metabolic health", "GLP-1 medications", "Individualized care"],
        image: {
          src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
          alt: "Dr. Cheryl Bugailiskis",
        },
      },
      {
        id: "krasne",
        name: "Dr. Benjamin Krasne",
        title: "Weight Loss Consultations",
        experience: "10 years",
        bio: "Dr. Krasne has 10 years of experience and specializes in weight loss consultations. He follows a patient-centered approach and offers personalized GLP-1 treatment options when clinically appropriate.",
        credentials: [
          "Board-certified physician",
          "University of Florida",
          "University of Miami Miller School of Medicine",
        ],
        expertise: ["Weight loss", "Patient-centered care", "GLP-1 treatment"],
        image: {
          src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
          alt: "Dr. Benjamin Krasne",
        },
      },
      {
        id: "niles",
        name: "Dr. Vanessa Niles",
        title: "Evidence-Based Weight Loss",
        experience: "30+ years",
        bio: "Dr. Niles has over 30 years of experience. She offers weight loss consultations backed by evidence-based protocols. Dr. Niles supports patients by providing personalized weight loss plans designed to promote safe and sustainable results.",
        credentials: ["Licensed physician", "30+ years clinical experience"],
        expertise: ["Evidence-based protocols", "Sustainable weight loss", "Personalized plans"],
        image: {
          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
          alt: "Dr. Vanessa Niles",
        },
      },
    ],
  },
  whyChoose: {
    title: "Why patients choose our doctors",
    description:
      "Together, our team brings years of multidisciplinary experience from metabolic medicine to telehealth innovation, all dedicated to helping patients achieve safe, sustainable results.",
    items: [
      "We have a team of bariatricians, general physicians, metabolism specialists, health coaches, and nutritional advisors.",
      "All our doctors are affiliated with top U.S. universities and are licensed professionals.",
      "All GLP-1 medication guidance is evidence-based and tailored to each patient's health.",
      "Our doctors offer clear and continuous support in your weight loss journey.",
      "Each doctor evaluates your health, and prescriptions are provided only when medically appropriate.",
    ],
  },
  conditions: {
    title: "Personalized care for every condition",
    items: [
      {
        title: "Obesity and overweight",
        text: "We support your weight-loss journey with personalized treatment plans designed to fit your lifestyle and health goals.",
      },
      {
        title: "Type 2 diabetes",
        text: "Our doctors help you manage blood sugar safely, improve energy, and reduce your risk of long-term complications.",
      },
      {
        title: "Metabolic dysfunction",
        text: "Our team focuses on restoring healthy metabolism so your body can use energy more efficiently and feel balanced again.",
      },
      {
        title: "Prediabetes",
        text: "Early care makes a big difference. Our specialists help you take proactive steps to prevent diabetes before it develops.",
      },
      {
        title: "Cardiometabolic health",
        text: "We help improve heart and metabolic wellness through personalized nutrition, exercise, and medical guidance.",
      },
      {
        title: "Appetite and craving regulation",
        text: "Our evidence-based strategies help you understand and manage hunger cravings for better control and sustainable results.",
      },
    ],
  },
  philosophy: {
    title: "Our medical philosophy",
    intro:
      "Behind every consultation lies a clear medical philosophy that guides how our doctors care for every patient.",
    text: `At ${brand}, our licensed physicians combine evidence-based medicine with compassionate telehealth care. Every consultation is HIPAA-compliant, personalized, and centered on your long-term well-being. We prescribe FDA-approved GLP-1 medications (such as Wegovy®, Ozempic®, Mounjaro®, or Zepbound®) when medically appropriate.`,
    cta: "Book an appointment online",
  },
  reviewProcess: {
    title: "Medical review process",
    steps: [
      "Licensed healthcare professionals review medical content for safety and accuracy.",
      "Each patient receives an individualized medical evaluation before any prescription.",
      "GLP-1 prescriptions are issued only after a complete medical evaluation, in compliance with FDA regulations.",
      "Ongoing support and dose adjustments are provided based on clinical response.",
    ],
  },
  compliance: {
    title: "Compliance & patient safety",
    text: `All ${brand} consultations are conducted by licensed U.S. physicians through HIPAA-secure telehealth platforms. GLP-1 prescriptions are issued only after a complete medical evaluation, in compliance with FDA regulations.`,
    closing:
      "With safety and ethics at the heart of everything we do, we're here to help you take the next confident step in your weight loss journey.",
  },
  states: {
    title: "State coverage",
    stat: { value: "48", label: "States with licensed physician coverage" },
    text: "State-certified doctors assess your needs and may prescribe FDA-approved medications when clinically appropriate.",
  },
  commitment: {
    title: "Patient commitment",
    items: [
      "Evidence-based GLP-1 guidance tailored to each patient's health.",
      "HIPAA-secure telehealth consultations with licensed U.S. physicians.",
      "Prescriptions provided only when medically appropriate after clinical evaluation.",
      "Clear and continuous support throughout your weight loss journey.",
    ],
  },
  cta: {
    title: "Your trusted partner in achieving",
    titleHighlight: "weight loss goals",
    description: "Schedule your consultation with a licensed physician today.",
    primaryCta: "Schedule consultation",
    secondaryCta: "View compliance hub",
    secondaryHref: "/compliance",
  },
} as const;
