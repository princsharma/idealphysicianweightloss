import { siteConfig } from "@/config/site";

const brand = siteConfig.name;
const email = siteConfig.contact.email;
const phone = siteConfig.contact.phone;

export const termsContent = {
  lastUpdated: "June 22, 2024",
  hero: {
    title: "Terms & Conditions",
    intro: `Welcome to ${brand} ("we," "us," or "our"). These Terms & Conditions ("Terms") govern your access to and use of our website, online consultation services, and related features (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use the Services.`,
  },
  sections: [
    {
      id: "about-our-services",
      number: 1,
      title: "About Our Services",
      blocks: [
        {
          type: "list" as const,
          items: [
            `${brand} provides online medical consultations for weight management, which may include evaluation for GLP-1 medications when clinically appropriate.`,
            `${brand} does not manufacture medications. If a licensed provider issues a prescription, the medication is dispensed and delivered by a licensed partner pharmacy in accordance with applicable laws.`,
            `${brand} coordinates prescription fulfillment and remains responsible for assisting with billing, shipping, delivery concerns, and related support matters throughout the process.`,
          ],
        },
      ],
    },
    {
      id: "eligibility",
      number: 2,
      title: "Eligibility & Patient Responsibilities",
      blocks: [
        {
          type: "list" as const,
          items: [
            "You must be at least 18 years old and legally able to enter into these Terms.",
            "You agree to provide accurate, complete, and current information during registration, intake, and consultations, and to update information as needed.",
            "Eligibility for any prescription is determined solely by a licensed healthcare provider after clinical evaluation. No outcome or prescription is guaranteed.",
            "The Services are not for emergencies. If you are experiencing a medical emergency, call your local emergency number immediately.",
          ],
        },
      ],
    },
    {
      id: "telehealth-consent",
      number: 3,
      title: "Telehealth Consent",
      blocks: [
        {
          type: "paragraph" as const,
          text: "By using our Services, you consent to receive healthcare via telehealth, which may include audio, video, asynchronous chat, and electronic data transmission. You understand the potential benefits and limitations of telehealth, including risks related to data transmission and the absence of in-person examination. You may withdraw consent at any time by discontinuing use of the Services.",
        },
      ],
    },
    {
      id: "no-medical-advice",
      number: 4,
      title: "No Medical Advice Guarantee",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Information on the website is for general educational purposes and does not substitute for professional medical advice, diagnosis, or treatment. Always follow the advice of your healthcare provider. Individual results vary.",
        },
      ],
    },
    {
      id: "dispensaries-shipping",
      number: 5,
      title: "Third-Party Dispensaries & Shipping",
      blocks: [
        {
          type: "list" as const,
          items: [
            "If a prescription is issued, it is dispensed and delivered by a licensed partner pharmacy in accordance with applicable state and federal laws.",
            `Shipping timelines, costs, packaging requirements, cold-chain handling (if applicable), delivery carriers, and related logistics are determined by the licensed pharmacy. While fulfillment and shipment are performed by the pharmacy, ${brand} coordinates the process and remains available to assist with shipping inquiries, delivery concerns, or related support matters.`,
            `In the event of delays, losses, damage, or dispensing issues, patients should contact ${brand} directly so the team can coordinate with the pharmacy to help resolve the matter as efficiently as possible.`,
            "See our Shipping Policy for additional details.",
          ],
        },
      ],
    },
    {
      id: "fees-payments",
      number: 6,
      title: "Fees, Payments, Cancellations & Refunds",
      blocks: [
        {
          type: "list" as const,
          items: [
            "Consultation fees and any platform charges (if applicable) are disclosed at booking and are due at the time of scheduling.",
            "Once your consultation has been completed, consultation fees are non-refundable.",
            "If you need to cancel or reschedule, please do so at least 24 hours in advance where possible; additional terms may apply at booking.",
            `Medication charges, returns, and medication-related refunds are coordinated by ${brand} in collaboration with the dispensing pharmacy under applicable policies and laws.`,
            "Chargebacks and payment disputes may result in suspension or termination of access to the Services.",
            "See our Refund Policy for full details on refunds for consultation services.",
          ],
        },
      ],
    },
    {
      id: "accounts-security",
      number: 7,
      title: "Accounts & Security",
      blocks: [
        {
          type: "list" as const,
          items: [
            "You are responsible for safeguarding your login credentials and for all activity under your account.",
            "Notify us immediately of any unauthorized use or security breach.",
            "We may, in our discretion, suspend or terminate accounts for suspected fraud, abuse, or violation of these Terms.",
          ],
        },
      ],
    },
    {
      id: "user-conduct",
      number: 8,
      title: "User Conduct",
      blocks: [
        {
          type: "list" as const,
          items: [
            "Do not use the Services for any unlawful purpose or to obtain medications without a valid prescription.",
            "Do not interfere with the security or operation of the Services, attempt to access other users' data, or submit false or misleading information.",
            "Do not upload content that is defamatory, obscene, infringing, or otherwise objectionable or harmful.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      number: 9,
      title: "Intellectual Property",
      blocks: [
        {
          type: "paragraph" as const,
          text: `The website, its content, design, trademarks, service marks, and logos are owned by or licensed to ${brand} and are protected by applicable laws. Except as expressly allowed, you may not copy, modify, distribute, or create derivative works from our content without prior written consent.`,
        },
      ],
    },
    {
      id: "content-you-provide",
      number: 10,
      title: "Content You Provide",
      blocks: [
        {
          type: "paragraph" as const,
          text: `You represent that you have all rights to the information and materials you submit. You grant ${brand} a limited, non-exclusive, royalty-free license to use such content solely to operate and provide the Services, consistent with our Privacy Policy.`,
        },
      ],
    },
    {
      id: "privacy",
      number: 11,
      title: "Privacy",
      blocks: [
        {
          type: "paragraph" as const,
          text: "Our collection and use of personal and health information is described in our Privacy Policy. By using the Services, you consent to such processing and represent that all information provided is accurate.",
        },
      ],
    },
    {
      id: "third-party-services",
      number: 12,
      title: "Third-Party Services & Links",
      blocks: [
        {
          type: "paragraph" as const,
          text: `The Services may contain links to third-party websites or services (including dispensaries and payment processors). ${brand} is not responsible for third-party content, policies, or practices. Your use of third-party services is at your own risk and subject to their terms.`,
        },
      ],
    },
    {
      id: "disclaimers",
      number: 13,
      title: "Disclaimers",
      blocks: [
        {
          type: "list" as const,
          items: [
            'The Services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
            "We do not warrant that the Services will be uninterrupted, timely, secure, or error-free.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: 14,
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph" as const,
          text: `To the fullest extent permitted by law, ${brand} and its affiliates, officers, employees, and providers will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, data, goodwill, or other intangible losses, arising from or relating to your use of (or inability to use) the Services. In no event will our total liability exceed the amount you paid to ${brand} for the consultation giving rise to the claim in the twelve (12) months preceding the event.`,
        },
      ],
    },
    {
      id: "indemnification",
      number: 15,
      title: "Indemnification",
      blocks: [
        {
          type: "paragraph" as const,
          text: `You agree to indemnify, defend, and hold harmless ${brand} and its affiliates, officers, employees, contractors, and providers from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any law or third-party right; or (d) any content you submit.`,
        },
      ],
    },
    {
      id: "suspension-termination",
      number: 16,
      title: "Suspension, Termination & Changes",
      blocks: [
        {
          type: "list" as const,
          items: [
            "We may modify or discontinue any part of the Services at any time, with or without notice, where lawful.",
            "We may suspend or terminate your access for any violation of these Terms, suspected fraud, or to comply with law.",
            "We may update these Terms from time to time. Changes are effective when posted, and your continued use constitutes acceptance.",
          ],
        },
      ],
    },
    {
      id: "force-majeure",
      number: 17,
      title: "Force Majeure",
      blocks: [
        {
          type: "paragraph" as const,
          text: "We will not be liable for any delay or failure in performance resulting from events beyond our reasonable control, including but not limited to acts of God, labor disputes, acts of government, war, epidemics, pandemics, supply chain disruptions, carrier delays, or internet/service outages.",
        },
      ],
    },
    {
      id: "severability",
      number: 18,
      title: "Severability & Entire Agreement",
      blocks: [
        {
          type: "paragraph" as const,
          text: `If any provision of these Terms is held unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect. These Terms, together with our Privacy Policy and any supplemental terms presented at the time of purchase or use, constitute the entire agreement between you and ${brand} regarding the Services.`,
        },
      ],
    },
    {
      id: "contact-us",
      number: 19,
      title: "Contact Us",
      blocks: [
        {
          type: "contact" as const,
          organization: brand,
          email,
          phone,
        },
      ],
    },
  ],
} as const;

export type TermsContent = typeof termsContent;
export type TermsSection = (typeof termsContent.sections)[number];
export type TermsBlock = TermsSection["blocks"][number];
