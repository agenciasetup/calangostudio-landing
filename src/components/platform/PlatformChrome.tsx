"use client";
import React from "react";
import { PlatformSidebar } from "./Sidebar";

export function PlatformChrome({
  active,
  topbar,
  children,
  height = 560,
}: {
  active?: string;
  topbar: React.ReactNode;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <div
      className="flex gap-3 p-3 bg-background rounded-[20px] border border-white/[0.06]"
      style={{ height }}
    >
      <PlatformSidebar active={active} />
      <div className="flex flex-col flex-1 min-w-0 gap-3">
        <div className="shrink-0">{topbar}</div>
        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </div>
  );
}
