import { GoogleTagManager } from "@next/third-parties/google";
import { Baloo_2, DM_Sans, Outfit } from "next/font/google";

import { defaultMetadata } from "@/config/metadata";
import { env } from "@/config/env";
import { SkipLink } from "@/components/layout";
import "@/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  adjustFontFallback: true,
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
      <GoogleTagManager gtmId={env.gtmId} />
      <body className="min-h-full bg-background font-sans text-foreground">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
