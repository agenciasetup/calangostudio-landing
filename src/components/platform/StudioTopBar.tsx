"use client";
import { ChevronDown } from "lucide-react";
import React from "react";

export function StudioSelect({
  label,
  value,
  className = "",
  width,
}: {
  label: string;
  value: string;
  className?: string;
  width?: string;
}) {
  return (
    <div className={`relative ${width ? "" : ""} ${className}`} style={width ? { width } : undefined}>
      <label className="block text-[9px] font-black text-zinc-500 uppercase tracking-[0.18em] mb-1 ml-0.5">
        {label}
      </label>
      <button className="w-full flex items-center justify-between gap-2 bg-black/50 border border-white/10 hover:border-white/20 rounded-xl pl-3 pr-2.5 py-2.5 text-[11px] font-bold text-white">
        <span className="truncate">{value}</span>
        <ChevronDown size={13} className="text-zinc-500 shrink-0" />
      </button>
    </div>
  );
}

export function StudioTopBar({
  titleSlot,
  rightSlot,
  children,
  className = "",
}: {
  titleSlot: React.ReactNode;
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-panel rounded-2xl border border-white/[0.08] bg-black/30 backdrop-blur-xl px-4 py-3 ${className}`}
    >
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        <div className="w-full md:flex-1 md:w-auto md:mr-auto self-center min-w-0">
          {titleSlot}
        </div>
        <div className="flex items-end gap-3 w-full md:w-auto md:contents">
          {children}
        </div>
        {rightSlot && (
          <div className="hidden md:flex items-center self-center pl-1 gap-2">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}
