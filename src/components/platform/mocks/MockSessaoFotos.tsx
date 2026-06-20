"use client";
/**
 * MockSessaoFotos
 * Pixel-faithful port of public/estudio-identico.html into React/Tailwind.
 * Tabler icons → lucide-react equivalents (see substitution notes below).
 *
 * Icon substitutions from Tabler → lucide-react:
 *   ti-typography     → Type
 *   ti-photo-plus     → ImagePlus
 *   ti-user           → User
 *   ti-users          → Users
 *   ti-camera         → Camera
 *   ti-photo          → Image (aliased as ImageIcon to avoid conflict with next/image)
 *   ti-chevron-down   → ChevronDown
 *   ti-pencil         → Pencil
 *   ti-plus           → Plus
 *   ti-trophy         → Trophy
 *   ti-key            → Key
 *   ti-coins          → Coins
 *   ti-user-star      → UserStar
 *   ti-package        → Package
 */
import {
  Camera,
  Type,
  ImagePlus,
  User,
  Users,
  Image as ImageIcon,
  Pencil,
  Plus,
  Trophy,
  Key,
  Coins,
  UserStar,
  Package,
} from "lucide-react";
import { StudioTopBar, StudioSelect } from "../StudioTopBar";
import { sessaoFotosData } from "../mockData";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MockSessaoFotos({ active }: { active?: boolean }) {
  const d = sessaoFotosData;

  const titleSlot = (
    <div className="flex items-center gap-2 min-w-0">
      {/* Tool icon badge */}
      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
        <Camera size={17} />
      </div>
      {/* Session title */}
      <button className="group flex items-center gap-1.5 min-w-0">
        <span className="font-display font-bold text-white text-[15px] truncate">
          {d.sessionTitle}
        </span>
        <Pencil size={12} className="text-zinc-600" />
      </button>
      {/* Mode switcher tabs */}
      <div className="ml-1 hidden sm:flex items-center gap-0.5 bg-black/40 border border-white/10 rounded-lg p-0.5 flex-shrink-0">
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-cyan-500/20 text-cyan-300">
          <Camera size={12} />
          <span className="hidden lg:inline">Estúdio</span>
        </button>
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide text-zinc-500">
          <UserStar size={12} />
          <span className="hidden lg:inline">UGC</span>
        </button>
        <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide text-zinc-500">
          <Package size={12} />
          <span className="hidden lg:inline">Produto</span>
        </button>
      </div>
    </div>
  );

  const rightSlot = (
    <>
      {/* Trophy / rewards button */}
      <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-amber-300 flex items-center justify-center">
        <Trophy size={16} />
      </button>
      {/* Key + Coins widget */}
      <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-2.5 py-1.5">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider flex items-center gap-1">
          <Key size={13} /> Key
        </span>
        <span className="flex items-center gap-1 text-[12px] font-black text-primary bg-primary/10 rounded-lg px-2 py-1">
          <Coins size={13} /> {d.coins}
        </span>
        <button className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center">
          <Plus size={13} />
        </button>
      </div>
    </>
  );

  return (
    <div className="flex flex-col h-full gap-3">
      {/* StudioTopBar */}
      <StudioTopBar titleSlot={titleSlot} rightSlot={rightSlot}>
        <StudioSelect label="Modelo de IA" value={d.model} width="190px" />
        <StudioSelect label="Formato" value={d.format} width="120px" />
        <StudioSelect label="Qualidade" value={d.quality} width="126px" />
      </StudioTopBar>

      {/* Main grid: inspector + preview */}
      <div className="grid md:grid-cols-[minmax(300px,400px)_1fr] gap-3 flex-1 min-h-0 items-stretch">

        {/* ─── INSPECTOR ─────────────────────────────────── */}
        <div className="flex flex-col min-h-0 gap-3">
          <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-2 space-y-4">

            {/* Card: Tipo de sessão + Contexto */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-4">
              {/* Tipo de sessão */}
              <div className="space-y-1.5">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.18em] ml-0.5">
                  Tipo de sessão
                </p>
                <div className="flex gap-1 bg-black/40 border border-white/10 p-1 rounded-xl">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <Type size={13} /> Prompt
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-500">
                    <ImagePlus size={13} /> Referência
                  </button>
                </div>
                <p className="text-[10px] text-zinc-600 leading-snug ml-0.5">
                  Descreva a cena: a IA fotografa você nela.
                </p>
              </div>

              {/* Contexto */}
              <div className="space-y-1.5 pt-3 border-t border-white/5">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.18em] ml-0.5">
                  Contexto (opcional) · usa as fotos cadastradas
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-[12px] font-bold">
                    <User size={15} /> Para mim
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-[12px] font-bold">
                    <Users size={15} /> Para meu cliente
                  </button>
                </div>
              </div>
            </div>

            {/* Card: Quem será fotografado */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <User size={16} />
                </div>
                <h2 className="text-sm font-bold text-white">Quem será fotografado</h2>
              </div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Fotos do rosto (até 5)
              </label>
              {/* Upload dropzone */}
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-white/[0.03] border-2 border-dashed border-white/15"
                style={{ height: 128 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-zinc-500">
                  <User size={24} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Upload</span>
                </div>
              </div>
              <div className="flex">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black uppercase text-zinc-400">
                  <Plus size={12} /> +1 Ref (0/5)
                </button>
              </div>
              <p className="text-[10px] text-zinc-500 leading-snug">
                3–5 fotos da mesma pessoa, ângulos diferentes, boa luz e rosto visível.
              </p>
            </div>

            {/* Card: A cena */}
            <div className="glass-panel p-5 rounded-[28px] border border-white/5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <Type size={16} />
                </div>
                <h2 className="text-sm font-bold text-white">A cena</h2>
              </div>
              <textarea
                className="w-full glass-input p-4 rounded-2xl text-white text-sm resize-y"
                style={{ minHeight: 140 }}
                placeholder={d.scenePlaceholder}
                readOnly
              />
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Destaque extra (opcional)
                </label>
                <input
                  type="text"
                  className="w-full glass-input p-3.5 rounded-2xl text-white text-xs"
                  placeholder={d.detailPlaceholder}
                  readOnly
                />
              </div>
            </div>

          </div>

          {/* Footer: Generate button */}
          <div className="shrink-0">
            <button className="btn-generate">
              <Camera size={18} /> Gerar foto
            </button>
          </div>
        </div>

        {/* ─── PREVIEW STAGE ─────────────────────────────── */}
        <div className="flex flex-col gap-3 min-h-0">
          <div className="flex-1 w-full rounded-[24px] border border-white/[0.08] bg-black/55 overflow-hidden flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-600">
                <ImageIcon size={30} />
              </div>
              <p className="text-white font-bold text-sm">Sua foto aparecerá aqui</p>
              <p className="text-zinc-500 text-xs max-w-[260px] leading-relaxed">
                Envie o rosto, descreva a cena e toque em Gerar.
              </p>
            </div>
          </div>
          <p className="text-zinc-600 text-[11px] shrink-0 pl-1">Suas fotos vão aparecer aqui.</p>
        </div>

      </div>
    </div>
  );
}
