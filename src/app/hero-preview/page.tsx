/**
 * hero-preview — isolated preview route for the new Hero section.
 * Renders Hero on a full dark page so you can screenshot it without
 * the rest of the landing page interfering.
 *
 * Visit: http://localhost:3000/hero-preview
 * This file intentionally has no Navbar or other sections.
 */

import Hero from "@/components/Hero";

export const metadata = {
  title: "Hero Preview — Calango Studio",
  robots: "noindex",
};

export default function HeroPreviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
    </div>
  );
}
