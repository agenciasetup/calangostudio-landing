"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function Lab() {
  const fn = useSearchParams().get("fn") || "—";
  return (
    <div className="min-h-screen bg-background text-txt-primary p-6 font-display">
      mock-lab: {fn}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Lab />
    </Suspense>
  );
}
