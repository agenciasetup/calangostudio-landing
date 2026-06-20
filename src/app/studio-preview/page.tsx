import StudioFocus from "@/components/StudioFocus";

/**
 * Dev preview route — renders StudioFocus full-page.
 * Visit: http://localhost:3000/studio-preview
 */
export default function StudioPreviewPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-center">
      <StudioFocus />
    </main>
  );
}
