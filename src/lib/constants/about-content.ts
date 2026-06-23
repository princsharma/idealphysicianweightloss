import { siteConfig } from "@/config/site";

const brand = siteConfig.name;

export const aboutContent = {
  hero: {
    title: "Transforming Lives Through Healthy Weight Management",
    description: `${brand} offers customized weight-loss programs based on your health profile. Our state-certified doctors assess your needs. They prescribe FDA-approved medications to help you achieve safe, effective results.`,
    image: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",
      alt: "FDA-approved GLP-1 weight loss medications",
    },
    stats: [
      { value: "4,000+", label: "Patients Trust Us" },
      { value: "Same-Day", label: "Virtual Consultations" },
      { value: "FDA-Approved", label: "GLP-1 Medications" },
    ],
  },
  mission: {
    eyebrow: "Our Mission",
    title: "Healthier Lives, Effective Weight Loss Solutions",
    description:
      "Our mission is to make your weight loss journey simple and achievable. We create personalized plans tailored to your health needs. Through virtual consultations, our licensed doctors guide you every step of the way.",
    principles: [
      "Detailed health evaluation by licensed doctors",
      "Continuous support and monitoring",
      "Backed by scientifically proven studies",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      alt: "Active lifestyle and healthy weight management",
    },
  },
  navButtons: [
    { label: "Our Mission and Vision", href: "#founder" },
    { label: "Our Team of Experts", href: "#team" },
    { label: "Our Approach to Weight Loss", href: "#steps" },
  ],
  founder: {
    id: "founder",
    eyebrow: "A Message From Our Founder",
    title: "The Problem That Sparked Our Idea",
    quote: `For many years, there was a gap in healthcare services and the real patient needs. People used to wait for long hours to meet the doctors. While many struggled to travel from one place to another. Patients shared that they avoided going out or socializing due to low confidence, mobility issues, or fear of being judged. This makes it even harder to seek the care they genuinely needed. We started our journey to act as a bridge between patient and doctors by offering a virtual platform. At ${brand}, we empower you to achieve your weight-loss goals comfortably at home. Our mission is to expand access to safe, evidence-based obesity care by connecting patients with licensed medical professionals through secure, same-day telehealth visits. We offer expert guidance and science-backed solutions tailored to your unique health needs.`,
    name: "Deep Chand Sharma",
    role: `Founder & CEO, ${brand}`,
    linkLabel: "Read More About Our Founder",
    image: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80",
      alt: "Deep Chand Sharma, Founder & CEO",
    },
  },
  whyChoose: {
    title: `Why Thousands Choose ${brand}`,
    subtitle:
      "Why wait in a crowded hall? You can consult your doctor digitally. With our pioneering approach, we make healthcare convenient. Our care is personalized to support long-term, healthier habits and improved well-being.",
    items: [
      {
        title: "Convenience With Trusted Experts",
        description:
          "No waiting rooms, no generic plans, and no long hours. You can connect with a licensed provider for a same-day virtual consultation, establishing a transparent patient–provider relationship required for prescribing.",
      },
      {
        title: "Access to Six FDA-Approved GLP-1s",
        description:
          "If a licensed provider determines a GLP-1 medication is clinically appropriate for your condition, a prescription may be issued, allowing you to access treatment through a licensed pharmacy.",
      },
      {
        title: "Personalized Care Beyond Prescriptions",
        description:
          "We believe in a personalized approach. We offer weight-loss plans that combine GLP-1s, nutrition, lifestyle, and expert follow-ups.",
      },
      {
        title: "Pharmacy-Handled Dispensing of GLP-1 Medications",
        description:
          "If prescribed, your medication is dispensed by a licensed U.S. pharmacy, which manages secure and timely shipping directly to your home.",
      },
      {
        title: "Evaluations from Weight Loss Specialists",
        description:
          "You are evaluated by a licensed professional with years of experience in obesity and overweight treatment. Each prescription is doctor-approved and based on your health condition.",
      },
      {
        title: "24/7 Reliable Customer Support",
        description: `The ${brand} team is available around the clock to offer responsive support to our patients.`,
      },
    ],
  },
  steps: {
    id: "steps",
    title: "Steps To Your Weight Loss Journey",
    items: [
      {
        step: "Step 1",
        title: "Schedule a Free Visit",
        description:
          "A member of our care team connects with you to understand your health goals and medication preferences, including FDA-approved options and, when appropriate, compounded medications.",
      },
      {
        step: "Step 2",
        title: "Connect With a Licensed Doctor",
        description:
          "Speak with a licensed clinician who evaluates key factors like BMI, medical history, and health goals through a secure video or audio consultation.",
      },
      {
        step: "Step 3",
        title: "Receive a Prescription if Appropriate",
        description:
          "If clinically appropriate, your provider issues a prescription based on your personalized plan and guides you on next steps, including pharmacy options or home delivery coordination.",
      },
    ],
  },
  values: {
    title: "Our Core Values",
    subtitle:
      "We blend science with a patient-first approach. Our aim is to offer a pioneering patient experience.",
    items: [
      {
        title: "Judgment Free Care",
        description:
          "Your body is unique, and we respect it. Our goal is to help you feel confident and supported as you reach your health goals.",
      },
      {
        title: "Evidence-Based Weight Loss Outcomes",
        description:
          "Our team focuses on evidence-based treatment plans designed to support safe, sustainable weight loss.",
      },
      {
        title: "Led By Science",
        description:
          "Doctors thoroughly evaluate your health and use science-based decisions. They prescribe only FDA-approved medications.",
      },
      {
        title: "Empathy with Expertise",
        description:
          "We offer more than medical solutions. We provide step-by-step guidance, constant tracking, and post-treatment support to help you achieve lasting results.",
      },
    ],
  },
  science: {
    title: "Backed By Science",
    description: `We offer weight loss solutions backed by science. All GLP-1 medications are tested for weight loss or type 2 diabetes. At ${brand}, licensed specialists guide you and monitor your progress.`,
    badges: [
      { title: "100% FDA-Approved Medications", subtitle: "For Weight Loss or Type 2 Diabetes" },
      { title: "Licensed", subtitle: "Weight Loss Specialists" },
      { title: "Clinically Proven", subtitle: "Treatment Options" },
    ],
  },
  team: {
    id: "team",
    title: "The Expertise Behind Our Care",
    subtitle:
      "U.S. board-certified clinicians bring interdisciplinary expertise and years of experience. This ensures the highest standard of care. We invest in top medical talent for the best patient outcomes.",
    members: [
      {
        name: "Dr. Miller",
        bio: "Dr. Miller is a licensed physician who provides physician-guided weight loss and metabolic health consultations aligned with established clinical standards. He earned his medical degree from Columbia University and completed postgraduate training at Washington University in St. Louis. Dr. Miller conducts individualized medical evaluations and may prescribe treatment when clinically appropriate.",
        image: {
          src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
          alt: "Dr. Miller",
        },
      },
      {
        name: "Dr. Niles",
        bio: "Dr. Niles is a licensed physician with over 30 years of clinical experience. She provides physician-guided weight loss consultations focused on individualized medical assessment and patient-centered care. Dr. Niles evaluates each patient's health history and goals to determine appropriate treatment options when clinically indicated.",
        image: {
          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
          alt: "Dr. Niles",
        },
      },
      {
        name: "Dr. Krasne",
        bio: "Dr. Krasne is a board-certified, licensed physician who conducts weight loss evaluations and provides physician-guided care. He completed medical training at the University of Florida and the University of Miami Miller School of Medicine, with residency completed in 2017. Dr. Krasne may prescribe GLP-1 medications when clinically appropriate based on individualized assessment.",
        image: {
          src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
          alt: "Dr. Krasne",
        },
      },
      {
        name: "Dr. Bugailiskis",
        bio: "Dr. Bugailiskis is a licensed physician who provides physician-guided weight loss care focused on individualized treatment planning. She earned her medical degree from the University of Illinois at Chicago and evaluates patients based on their health history, goals, and clinical needs to determine appropriate care options.",
        image: {
          src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
          alt: "Dr. Bugailiskis",
        },
      },
    ],
    cta: "Book Your Free Consultation",
  },
  delivery: {
    eyebrow: "Convenience at Your Door",
    title: "GLP-1 Medications Delivery To Your Doorstep",
    description:
      "Once approved, we send your prescription to a licensed U.S. pharmacy. Your FDA-approved GLP-1 medications are shipped to your doorstep in 3 to 5 business days.",
    checklist: [
      "Secure, Pharmacy-Managed Delivery of Medications",
      "No Spillage, Damage, or Spoilage",
      "Inclusive of GLP-1 Medication User Guide",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80",
      alt: "Medication delivery to your doorstep",
    },
  },
  trust: {
    title: `${brand}: Your Trusted Fitness Partner`,
    description:
      "We empower you through a HIPAA-compliant platform, where licensed providers deliver safe, responsible care that aligns with federal and state telehealth regulations.",
    tagline: "Trusted Medical Care You Can Rely On.",
  },
  join: {
    title: "Connect With Us and Join Thousands of Patients",
    description: `Embrace your fitness journey with ${brand}. Guided by licensed providers, step into a healthier and more confident you.`,
    cta: "Schedule Consultation",
  },
  finalCta: {
    title: "Start Your Journey to a Healthier You Today",
    description: `Take the first step towards a healthier and happier you. Join ${brand} today!`,
    cta: "Get Started Now",
  },
} as const;

export type AboutContent = typeof aboutContent;
