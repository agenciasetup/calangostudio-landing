"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FUNCTIONS } from "@/components/platform/registry";
import { FitFrame } from "@/components/platform/FitFrame";
import { PlatformChrome } from "@/components/platform/PlatformChrome";

function Lab() {
  const fn = useSearchParams().get("fn") ?? "";

  const entry = FUNCTIONS.find((f) => f.key === fn);

  if (!entry) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-background text-txt-primary p-6 font-display">
        <p className="text-zinc-500 text-sm">
          mock-lab: função <code className="text-primary">{fn || "—"}</code> não encontrada.
        </p>
        <ul className="mt-4 space-y-1">
          {FUNCTIONS.map((f) => (
            <li key={f.key}>
              <a
                href={`/mock-lab?fn=${f.key}`}
                className="text-cyan-400 hover:underline text-sm"
              >
                ?fn={f.key}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const { Mock, key } = entry;
  const fullscreen = "fullscreen" in entry ? entry.fullscreen : false;

  return (
    <div className="h-screen w-screen overflow-hidden bg-background p-4">
      <FitFrame className="h-full w-full">
        <PlatformChrome active={key} topbar={null} sidebar={!fullscreen}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20 text-zinc-500 text-sm">
                Carregando...
              </div>
            }
          >
            <Mock active />
          </Suspense>
        </PlatformChrome>
      </FitFrame>
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
