import { Baloo_2, DM_Sans, Inter, Outfit, Syne } from "next/font/google";

import { defaultMetadata } from "@/config/metadata";
import { SkipLink } from "@/components/layout";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
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
      className={`${inter.variable} ${syne.variable} ${outfit.variable} ${dmSans.variable} ${baloo2.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
