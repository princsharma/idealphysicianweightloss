import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.154", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/semaglutide", destination: "/weight-loss/semaglutide", permanent: true },
      { source: "/tirzepatide", destination: "/weight-loss/tirzepatide", permanent: true },
      { source: "/how-it-works", destination: "/weight-loss/how-it-works", permanent: true },
      { source: "/pricing", destination: "/weight-loss/pricing", permanent: true },
      { source: "/faq", destination: "/weight-loss/faq", permanent: true },
      { source: "/treatments/:slug", destination: "/weight-loss/medications/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
