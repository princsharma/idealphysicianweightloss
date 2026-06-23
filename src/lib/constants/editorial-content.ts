import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;

export const editorialContent = {
  lastUpdated: "November 10, 2025",
  hero: {
    eyebrow: "Editorial standards",
    title: "Editorial",
    titleHighlight: "policy",
    description:
      "How we create, review, and publish content you can trust for your health journey — accurate, evidence-based, and transparent.",
    cta: "Contact editorial team",
  },
  intro: {
    title: "Introduction",
    paragraphs: [
      `Welcome to ${brand} ("we," "us," or "our"). Our Editorial Policy outlines how we create, review, and publish content on our website, social media, and other digital channels (collectively, the "Content"). By accessing our Content, you agree to our standards for accuracy, safety, and transparency.`,
      `Company: ${brand} and the licensed healthcare professionals we collaborate with.`,
      "Content: Articles, blog posts, guides, videos, and social media posts on weight management, GLP-1 medications like WEGOVY®, and healthy lifestyle habits.",
      "User: Any individual accessing or consuming our Content.",
    ],
  },
  standards: {
    title: "Editorial standards",
    description: "All content is reviewed and approved by licensed healthcare professionals to ensure accuracy, reliability, and safety.",
    items: [
      "Clear, readable, and compliant with U.S. health communication guidelines.",
      "Sources are cited, and updates are documented for transparency.",
      "Content is educational and evidence-based, using reputable research, including peer-reviewed journals and trusted health organizations.",
    ],
    privacy: {
      title: "Patient privacy & data protection",
      text: `${brand} adheres to all applicable privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA). Any personal or medical information collected through our telehealth services or communications is protected through secure, encrypted systems. We never disclose patient information without consent.`,
    },
    tone: {
      title: "Patient-centric tone",
      description:
        "Our content is designed to be empathetic, motivational, and non-stigmatizing. We avoid fear-based messaging or unrealistic promises. Language is inclusive of all body types, genders, ages, and backgrounds.",
      principle:
        "We focus on small, achievable steps for long-term health improvement rather than quick fixes or sensational claims.",
    },
  },
  reviewProcess: {
    title: "Medical review process",
    creation: {
      title: "Guidelines for creation",
      items: [
        "All content must be clear, accurate, and readable.",
        "Medical claims must be supported by credible sources.",
        "Patient safety and regulatory compliance are prioritized.",
      ],
    },
    steps: [
      "Licensed healthcare professionals review medical content for safety and accuracy.",
      "Editorial staff ensures grammar, clarity, accessibility, and compliance with U.S. health regulations.",
      "Updates are made as new research, guidelines, or regulations become available.",
      `If an error is identified in our content, ${brand} promptly reviews and updates the material to ensure ongoing accuracy and reliability.`,
    ],
  },
  factChecking: {
    title: "Fact checking",
    items: [
      "References include publication dates and links for transparency.",
      "Medical reviewers cross-check facts and figures before publication.",
      "Content integrity and quality review are performed on all medical articles.",
    ],
  },
  sources: {
    title: "Medical sources",
    items: [
      { title: "Peer-reviewed studies", description: "Evidence from published scientific research" },
      { title: "CDC guidelines", description: "Centers for Disease Control and Prevention" },
      { title: "NIH resources", description: "National Institutes of Health" },
    ],
  },
  updates: {
    title: "Content updates",
    text: `${brand} regularly updates its editorial standards to reflect the latest research, best practices, and regulatory requirements. Continued use of our Content constitutes acceptance of these standards.`,
    testimonials: {
      title: "Testimonials & user content",
      items: [
        "Authenticity and consent are ensured.",
        "Results may vary; no guarantees are made.",
        "Content does not exaggerate outcomes.",
      ],
    },
  },
  professionals: {
    title: "Healthcare professionals",
    subtitle:
      "We have a team of licensed medical professionals, experienced writers, and editors who ensure the accuracy, integrity, and reliability of all our services and content.",
    authors: [
      {
        name: "Dr. Marcus Cole",
        role: "GLP-1 Expert · Obesity Medicine Expert Writer",
        bio: "A skilled medical writer with over 12 years of experience producing high-quality, science-backed, and accessible content and guide about GLP-1 medications.",
      },
      {
        name: "Dr. Emily Carter",
        role: "Medical Weight Loss · Metabolic Health Writer",
        bio: "Dr. Carter is an expert medical writer with over 10 years of experience specializing in GLP-1–based weight loss materials, including blogs, articles, and patient guides.",
      },
    ],
    reviewers: [
      {
        name: "Dr. Ryan Mitchell",
        credentials: "PharmD, MPH, GLP-1 Therapy & Obesity Care Specialist",
        role: "Medical Review Director & Weight Management Specialist",
        bio: "Dr. Mitchell ensures the final proofreading of all content before publication on our website. He cross-checks all facts and figures to maintain accuracy and compliance with medical standards. With extensive expertise in GLP-1 therapy and obesity care, he guarantees that all information published on our website is current, accurate, and reliable.",
        duties: [
          "GLP-1 Therapy Oversight",
          "Content Integrity & Quality Review",
          "Clinical Data Validation",
          "Compliance & Safety Assurance",
        ],
      },
      {
        name: "Dr. Sophia Wilson",
        credentials: "MD, Board-Certified in Obesity & Metabolic Medicine",
        role: "Lead Medical Reviewer & Chronic Weight Management Specialist",
        bio: "Dr. Sophia Wilson reviews all medical content before publication on our website. She verifies facts, figures, and references to ensure accuracy, regulatory compliance, and medical credibility. With expertise in GLP-1 therapy and obesity care, she ensures all published information is current, evidence-based, trustworthy, and clinically reliable for readers seeking safe, informed weight-loss guidance.",
        duties: [
          "Clinical Data Validation",
          "Compliance & Safety Assurance",
          "GLP-1 Therapy Oversight",
          "Content Integrity & Quality Review",
        ],
      },
    ],
  },
  independence: {
    title: "Editorial independence",
    text: `${brand} is committed to delivering accurate, supportive, and empowering content. Our editorial policy ensures that every blog, article, video, and post meets high standards of integrity, safety, and transparency, helping our audience make informed choices on their weight-loss journey.`,
    ip: `All content, graphics, and media on ${brand} are owned or licensed by us. Users may not copy, modify, or redistribute content without permission.`,
  },
  timeline: {
    title: "Review timeline",
    steps: [
      { title: "Draft & research", text: "Writers create content using peer-reviewed sources and clinical guidelines." },
      { title: "Medical review", text: "Licensed healthcare professionals review medical content for safety and accuracy." },
      { title: "Editorial polish", text: "Editorial staff ensures grammar, clarity, accessibility, and regulatory compliance." },
      { title: "Publish & monitor", text: "Content is published with citations; updates are made as new research becomes available." },
    ],
  },
  disclaimers: {
    title: "Disclaimers",
    items: [
      "All content is educational only and not a substitute for medical advice, diagnosis, or treatment.",
      "Always consult a licensed healthcare provider before making health-related decisions.",
      "Individual results from weight-loss programs or medications vary.",
    ],
  },
  cta: {
    title: "Your trust,",
    titleHighlight: "our responsibility",
    description: "Questions about our editorial process or content accuracy? Reach out to our team.",
    email,
    phone,
    button: "Contact editorial team",
    href: "/contact",
  },
} as const;
