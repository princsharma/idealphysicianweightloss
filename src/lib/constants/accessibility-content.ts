import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;

export const accessibilityContent = {
  hero: {
    eyebrow: "Accessibility",
    title: "Care that is",
    titleHighlight: "accessible to everyone",
    description: `${brand} is committed to ensuring our website and telehealth services are accessible to people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.`,
  },
  commitment: {
    title: "Our Accessibility Commitment",
    paragraphs: [
      `${brand} strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. We believe accessible design is essential to delivering equitable, patient-centered healthcare.`,
      "We regularly review our digital properties, test with assistive technologies, and address barriers reported by users. Accessibility is an ongoing effort — not a one-time project.",
      "If you encounter any difficulty accessing content or using our services, please contact us. We take your feedback seriously and will work to provide the information or assistance you need in an alternative format when possible.",
    ],
  },
  supportedTechnologies: {
    title: "Supported Technologies",
    description:
      "Our website is designed to work with current versions of major browsers and common assistive technologies.",
    items: [
      {
        id: "browsers",
        title: "Modern Web Browsers",
        text: "We support current versions of Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge on desktop and mobile devices.",
      },
      {
        id: "assistive",
        title: "Assistive Technologies",
        text: "We aim to support screen readers (such as NVDA, JAWS, and VoiceOver), screen magnification software, speech recognition tools, and keyboard-only navigation.",
      },
      {
        id: "responsive",
        title: "Responsive Design",
        text: "Our layouts adapt to different screen sizes, zoom levels up to 200%, and both portrait and landscape orientations on phones and tablets.",
      },
      {
        id: "standards",
        title: "Standards & Guidelines",
        text: "We reference WCAG 2.1 Level AA, WAI-ARIA authoring practices, and Section 508 requirements where applicable to federal accessibility law.",
      },
    ],
  },
  keyboard: {
    title: "Keyboard Navigation",
    description: "All core functionality on our website can be operated without a mouse.",
    items: [
      "Use Tab and Shift+Tab to move between interactive elements in a logical order.",
      "Press Enter or Space to activate buttons, links, and form controls.",
      "Use Escape to close menus, drawers, and modal dialogs.",
      "Arrow keys navigate within dropdown menus, accordions, and tab interfaces where supported.",
      "A skip link at the top of each page lets you jump directly to the main content.",
    ],
  },
  screenReader: {
    title: "Screen Reader Support",
    description: "We structure content so assistive technologies can interpret it accurately.",
    items: [
      "Semantic HTML landmarks (header, main, nav, footer) help you navigate page regions quickly.",
      "Images include descriptive alternative text where they convey meaningful information.",
      "Form fields are associated with visible labels and clear error messages.",
      "Interactive components use appropriate ARIA roles, states, and properties.",
      "Headings follow a logical hierarchy so you can scan content by section.",
    ],
  },
  improvements: {
    title: "Ongoing Improvements",
    description: "Accessibility is a continuous process. Here is how we maintain and improve our standards.",
    items: [
      {
        title: "Regular audits",
        text: "We conduct periodic automated and manual accessibility reviews of new and existing pages.",
      },
      {
        title: "Inclusive design",
        text: "Accessibility requirements are considered during design and development — not added after launch.",
      },
      {
        title: "User feedback",
        text: "Reports from patients and visitors directly inform our remediation priorities.",
      },
      {
        title: "Team training",
        text: "Our development and content teams stay current on WCAG guidelines and inclusive design practices.",
      },
    ],
  },
  feedback: {
    eyebrow: "Share feedback",
    title: "Help us",
    titleHighlight: "improve access.",
    description:
      "If you experience difficulty using our website or need content in an alternative format, please let us know. Include the page URL and a description of the barrier you encountered.",
    successTitle: "Feedback received",
    successDescription:
      "Thank you for helping us improve accessibility. Our team will review your report and respond within two business days.",
    footnote: "Do not include protected health information in this form.",
  },
  contact: {
    title: "Contact Us About Accessibility",
    description: `You may also reach us directly to request assistance or report an accessibility concern.`,
    organization: brand,
    email,
    phone,
    alternateFormats:
      "If you need this accessibility statement or any page content in an alternative format (such as large print or email), contact us and we will work to accommodate your request.",
  },
} as const;

export type AccessibilityContent = typeof accessibilityContent;
