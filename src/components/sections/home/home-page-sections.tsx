import { HomeProcessDeck as HomeProcessDeckClient } from "@/components/client/home-process-deck";
import { HomeShowcase as HomeShowcaseClient } from "@/components/client/home-showcase";
import { TrustMarquee } from "@/components/client/trust-marquee";

export function HomeTrustBand() {
  return <TrustMarquee />;
}

export function HomeShowcase() {
  return <HomeShowcaseClient />;
}

export function HomeProcessDeck() {
  return <HomeProcessDeckClient />;
}
