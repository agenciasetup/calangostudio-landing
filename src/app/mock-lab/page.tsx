"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FUNCTIONS } from "@/components/platform/registry";
import { PlatformSidebar } from "@/components/platform/Sidebar";

function Lab() {
  const fn = useSearchParams().get("fn") ?? "";

  const entry = FUNCTIONS.find((f) => f.key === fn);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background text-txt-primary p-6 font-display">
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

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Platform shell: sidebar rail + content area */}
      <div
        className="flex gap-3 p-3 bg-background rounded-[20px] border border-white/[0.06]"
        style={{ minHeight: 700 }}
      >
        <PlatformSidebar active={key} />
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full text-zinc-500 text-sm">
                Carregando...
              </div>
            }
          >
            <Mock active />
          </Suspense>
        </div>
      </div>
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
