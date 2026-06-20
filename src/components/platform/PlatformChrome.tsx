"use client";
import React from "react";
import { PlatformSidebar } from "./Sidebar";

/**
 * PlatformChrome — the outer window frame (sidebar rail + content area).
 *
 * Natural width is fixed at 1180 px; height is content-driven (auto).
 * No inner scroll — all content must lay out fully. Wrap with <FitFrame>
 * to scale the whole window down when the viewport is smaller.
 */
export function PlatformChrome({
  active,
  topbar,
  children,
}: {
  active?: string;
  topbar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex gap-3 p-3 bg-background rounded-[20px] border border-white/[0.06]"
      style={{ width: 1180 }}
    >
      <PlatformSidebar active={active} />
      <div className="flex flex-col flex-1 min-w-0 gap-3">
        <div className="shrink-0">{topbar}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
