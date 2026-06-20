/**
 * /carousel-preview — dev-only preview route for FunctionsCarousel.
 *
 * Renders the carousel on a full dark page so it can be screenshotted.
 * Do NOT add this to the main page.tsx — that integration is a later task.
 */

import dynamic from "next/dynamic";
import { Suspense } from "react";

const FunctionsCarousel = dynamic(
  () => import("@/components/FunctionsCarousel"),
  { ssr: false }
);

export default function CarouselPreviewPage() {
  return (
    <main className="min-h-screen bg-background text-txt-primary font-display">
      {/* Top spacer */}
      <div className="h-16" />

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20 text-zinc-500 text-sm">
            Carregando carousel…
          </div>
        }
      >
        <FunctionsCarousel />
      </Suspense>

      {/* Bottom spacer */}
      <div className="h-16" />
    </main>
  );
}
