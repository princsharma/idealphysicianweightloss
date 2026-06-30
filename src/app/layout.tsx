import { Baloo_2, DM_Sans, Outfit } from "next/font/google";

import { Analytics } from "@/components/shared/analytics";
import { JsonLd } from "@/components/shared/json-ld";
import { SkipLink } from "@/components/layout";
import { defaultMetadata } from "@/config/metadata";
import { buildHomepageSchema } from "@/lib/schema";
import "@/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  adjustFontFallback: true,
  preload: false,
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${baloo2.variable} h-full antialiased`}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd data={buildHomepageSchema()} />
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
