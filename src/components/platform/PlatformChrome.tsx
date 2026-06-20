"use client";
import React from "react";
import { PlatformSidebar } from "./Sidebar";

/**
 * PlatformChrome — the outer window frame (sidebar rail + content area).
 *
 * Fixed viewport: 1320 × 820 px with overflow hidden.
 * Content is top-aligned; anything taller than 820 is cropped below the fold.
 * No inner scroll — the outer overflow:hidden handles cropping.
 *
 * Wrap with <FitFrame> to scale this fixed-size frame to fit the available space.
 *
 * Props:
 *   sidebar  — when true (default) renders the PlatformSidebar rail.
 *              Set to false for fullscreen tools (e.g. Studio) that have no
 *              platform sidebar; the content then fills the full 1320 width.
 */

const CHROME_W = 1320;
const CHROME_H = 820;

export function PlatformChrome({
  active,
  topbar,
  children,
  sidebar = true,
}: {
  active?: string;
  topbar: React.ReactNode;
  children: React.ReactNode;
  sidebar?: boolean;
}) {
  return (
    <div
      className="flex gap-3 p-3 bg-background rounded-[20px] border border-white/[0.06]"
      style={{ width: CHROME_W, height: CHROME_H, overflow: "hidden" }}
    >
      {sidebar && <PlatformSidebar active={active} />}
      <div className="flex flex-col flex-1 min-w-0 gap-3">
        <div className="shrink-0">{topbar}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
