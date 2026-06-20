"use client";
import {
  LayoutGrid,
  Users,
  Target,
  LayoutDashboard,
  Trophy,
  Palette,
  Pencil,
  Sparkles,
  Camera,
  Image,
  Settings,
  LogOut,
} from "lucide-react";

type SidebarItem =
  | { icon: React.ElementType; color: string; key?: string }
  | "divider";

const ITEMS: SidebarItem[] = [
  { icon: LayoutGrid, color: "text-zinc-500" },
  { icon: Users, color: "text-sky-400" },
  { icon: Target, color: "text-primary" },
  { icon: LayoutDashboard, color: "text-violet-400" },
  { icon: Trophy, color: "text-amber-400" },
  "divider",
  { icon: Palette, color: "text-fuchsia-400", key: "studio" },
  { icon: Pencil, color: "text-emerald-400", key: "criar-copy" },
  { icon: Sparkles, color: "text-pink-400", key: "criar-imagem" },
  { icon: Camera, color: "text-cyan-400", key: "sessao-fotos" },
  { icon: Image, color: "text-zinc-500" },
];

export function PlatformSidebar({ active }: { active?: string }) {
  return (
    <div className="flex flex-col shrink-0 w-20 bg-black/40 backdrop-blur-[40px] border border-white/10 rounded-[32px] overflow-hidden self-stretch">
      {/* Logo */}
      <div className="p-6 pb-4 flex items-center justify-center">
        <div className="text-xl font-display font-black text-primary">
          C
          <span className="text-[10px] text-transparent bg-clip-text bg-brand-gradient">
            .AI
          </span>
        </div>
      </div>

      {/* Top divider */}
      <div className="px-4 py-2">
        <div className="h-px bg-white/5 w-full" />
      </div>

      {/* Nav items */}
      <div className="px-2 py-2 space-y-1 flex-1 overflow-hidden">
        {ITEMS.map((it, i) => {
          if (it === "divider") {
            return (
              <div key={i} className="px-2 py-2">
                <div className="h-px bg-white/5 w-full" />
              </div>
            );
          }
          const Icon = it.icon;
          const on = it.key != null && it.key === active;
          return (
            <div
              key={i}
              className={`relative flex items-center justify-center px-4 py-3 rounded-[16px] ${
                on
                  ? "bg-gradient-to-r from-white/[0.08] to-transparent border border-white/10 text-primary"
                  : it.color
              }`}
            >
              {on && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 rounded-[16px]" />
              )}
              <Icon
                size={18}
                strokeWidth={on ? 2.5 : 2}
                className="relative z-10"
              />
              {on && (
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary shadow-[0_0_15px_rgba(255,170,0,1)]" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div className="px-2 pb-4 space-y-1">
        <div className="px-2 py-2">
          <div className="h-px bg-white/5 w-full" />
        </div>
        <div className="flex items-center justify-center px-4 py-3 rounded-[16px] text-zinc-500">
          <Settings size={18} strokeWidth={2} />
        </div>
        <div className="flex items-center justify-center px-4 py-3 rounded-[16px] text-zinc-500">
          <LogOut size={18} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
