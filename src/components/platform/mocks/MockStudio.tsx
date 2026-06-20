"use client";
/**
 * MockStudio
 * Pixel-faithful static replica of
 * Calango.studio/features/studio/pages/StudioEditorDesktop.tsx
 *
 * Tool accent: fuchsia-400 (matches Sidebar.tsx key "studio")
 * Active nav key: "studio"
 *
 * Forge (editing) animation — 6 steps, 1400 ms each, loops:
 *   step 0 — idle: canvas + layers panel, no layer selected
 *   step 1 — "Headline" layer row highlighted (selection box on it)
 *   step 2 — "Headline" → title text on canvas glows / is selected
 *   step 3 — "Foto Principal" layer row highlighted
 *   step 4 — "Fundo" layer row highlighted
 *   step 5 — select tool active in rail, all layers normal (brief rest)
 *   (loops back to 0)
 *
 * No Konva, no stores — pure divs/classes.
 */
import Image from "next/image";
import {
  ArrowLeft,
  Brush,
  Circle,
  Download,
  Eraser,
  Grid3X3,
  Keyboard,
  Hand,
  Hexagon,
  ImageIcon,
  LayoutTemplate,
  Library,
  Maximize,
  Minus,
  MousePointer2,
  PaintBucket,
  Palette,
  Pipette,
  Plus,
  Redo2,
  Sparkles,
  FileText,
  Sparkle,
  Square,
  Type,
  Undo2,
  Lasso,
  Eye,
  Unlock,
  Combine,
  Layers,
  SquareDashed,
  Trash2,
} from "lucide-react";
import { useForge } from "../useForge";
import { studioData } from "../mockData";

// ─── CopyAI composite icon (matches original) ─────────────────────────────────
const CopyAIIcon = () => (
  <span className="relative inline-flex">
    <FileText size={18} />
    <Sparkle
      size={11}
      className="absolute -bottom-1.5 -right-1.5 text-amber-400 fill-amber-400"
      strokeWidth={2}
    />
  </span>
);

// ─── Static layers for the mock canvas ────────────────────────────────────────
const MOCK_LAYERS = [
  { id: "headline", name: "Headline", type: "text", icon: Type },
  { id: "foto", name: "Foto Principal", type: "image", icon: ImageIcon },
  { id: "fundo", name: "Fundo", type: "image", icon: ImageIcon },
] as const;

// Map step → which layer id is "selected"
function getSelectedLayerId(step: number): string | null {
  if (step === 1 || step === 2) return "headline";
  if (step === 3) return "foto";
  if (step === 4) return "fundo";
  return null;
}

// ─── Tool rail items (matches real StudioEditorDesktop order) ─────────────────
const RAIL_TOOLS = [
  { icon: MousePointer2, label: "Mover / selecionar", key: "select" },
  { icon: Hand, label: "Mover tela", key: "hand" },
  { icon: Type, label: "Texto", key: "text" },
  { icon: Square, label: "Formas", key: "shape" },
  { icon: Brush, label: "Pincel", key: "brush" },
  { icon: Eraser, label: "Borracha", key: "eraser" },
  { icon: Pipette, label: "Conta-gotas", key: "eyedropper" },
  { icon: PaintBucket, label: "Lata de tinta", key: "bucket" },
  { icon: Lasso, label: "Seleção", key: "sel" },
] as const;

// Panel icons (bottom section of rail, separated by divider)
// CopyAI is rendered inline below due to composite icon structure
const PANEL_TOOLS_SIMPLE = [
  { icon: ImageIcon, key: "images" },
  { icon: Sparkles, key: "ai" },
  { icon: Palette, key: "brand" },
  { icon: LayoutTemplate, key: "templates" },
  { icon: Library, key: "library" },
] as const;

// ─── Layer row (static, selection-aware) ─────────────────────────────────────
function LayerRow({
  layer,
  isSelected,
}: {
  layer: (typeof MOCK_LAYERS)[number];
  isSelected: boolean;
}) {
  const Icon = layer.icon;
  return (
    <div
      className={`group flex items-center gap-2 px-2 py-2.5 rounded-xl transition-all duration-300 ${
        isSelected
          ? "bg-fuchsia-400/15 border border-fuchsia-400/30"
          : "bg-white/[0.025] border border-white/[0.06]"
      }`}
    >
      {/* expand chevron placeholder */}
      <span className="w-[11px]" />
      {/* color dot */}
      <span className="w-3 h-3 rounded-full border border-white/25 flex-shrink-0" />
      {/* type icon thumb */}
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
          isSelected ? "bg-fuchsia-400/20 text-fuchsia-300" : "bg-white/5 text-zinc-500"
        }`}
      >
        <Icon size={12} />
      </span>
      <span
        className={`flex-1 min-w-0 truncate text-[11px] font-semibold ${
          isSelected ? "text-white" : "text-zinc-200"
        }`}
      >
        {layer.name}
      </span>
      <span className="text-zinc-600 opacity-0 group-hover:opacity-100 text-[10px] font-black italic">fx</span>
      <span className="text-zinc-600">
        <Unlock size={11} />
      </span>
      <span className="text-zinc-600">
        <Eye size={11} />
      </span>
    </div>
  );
}

// ─── Main mock ────────────────────────────────────────────────────────────────
export default function MockStudio({ active }: { active?: boolean }) {
  const { step, ref } = useForge(6, { active, loop: true, interval: 1400 });

  const selectedLayerId = getSelectedLayerId(step);
  // Select tool is always active in this mock (editor-focus animation, not tool-switching)
  const activeToolKey = "select";

  // Canvas overlay: when step 2, show a selection indicator on the "Headline" text
  const showHeadlineSelection = step === 1 || step === 2;
  const showFotoSelection = step === 3;
  const showFundoSelection = step === 4;

  return (
    <div
      ref={ref}
      className="relative w-full rounded-[18px] overflow-hidden bg-[#050505] flex flex-col select-none"
      style={{ height: 600 }}
    >
      {/* ── Topbar ─────────────────────────────────────────── */}
      <header className="h-14 flex items-center gap-3 px-3 border-b border-white/5 bg-black/40 backdrop-blur-2xl relative z-20 flex-shrink-0">
        <button className="p-2 rounded-xl text-zinc-400">
          <ArrowLeft size={18} />
        </button>

        {/* Project name */}
        <span className="text-sm font-bold text-white px-2 py-1 max-w-[200px] truncate">
          {studioData.projectName}
        </span>

        {/* Save badge */}
        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-500">
          Salvo
        </span>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Filters menu placeholder */}
        <span className="text-[11px] font-bold text-zinc-500 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
          Filtros
        </span>

        <div className="flex-1" />

        {/* Undo / Redo / Grid / Keyboard */}
        <div className="flex items-center gap-1 mr-2">
          <button className="p-2 rounded-xl text-zinc-400">
            <Undo2 size={17} />
          </button>
          <button className="p-2 rounded-xl text-zinc-400">
            <Redo2 size={17} />
          </button>
          <button className="p-2 rounded-xl text-zinc-400">
            <Keyboard size={17} />
          </button>
          <button className="p-2 rounded-xl text-zinc-400">
            <Grid3X3 size={17} />
          </button>
        </div>

        {/* Export button — brand gradient, matches real */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-black text-black bg-brand-gradient shadow-[0_0_20px_rgba(255,170,0,0.35)]">
          <Download size={14} />
          Exportar
        </button>
      </header>

      {/* ── Work area ──────────────────────────────────────── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Canvas background (pasteboard) */}
        <div className="absolute inset-0 bg-[#111111]" />

        {/* ── Canvas content ─────────────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Artboard frame */}
          <div
            className="relative shadow-2xl rounded-sm overflow-hidden"
            style={{ width: 320, height: 240 }}
          >
            {/* Background image */}
            <Image
              src={studioData.canvasImage}
              alt="Arte no canvas"
              fill
              className="object-cover"
              sizes="320px"
            />

            {/* Dark gradient overlay to allow text/UI to read */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Headline text layer with selection indicator on step 1/2 */}
            <div
              className={`absolute top-[28px] left-[16px] right-[16px] transition-all duration-300 ${
                showHeadlineSelection
                  ? "ring-2 ring-fuchsia-400 ring-offset-1 ring-offset-transparent rounded-sm"
                  : ""
              }`}
            >
              <p className="text-white font-black text-xl leading-tight drop-shadow-lg">
                Campanha
                <br />
                <span className="text-[#ffaa00]">Criativa 2025</span>
              </p>
            </div>

            {/* Foto Principal selection indicator (step 3) — covers image area */}
            {showFotoSelection && (
              <div className="absolute inset-x-0 top-[80px] bottom-[40px] ring-2 ring-fuchsia-400 ring-offset-0 rounded-sm pointer-events-none" />
            )}

            {/* Fundo selection indicator (step 4) — covers full artboard */}
            {showFundoSelection && (
              <div className="absolute inset-0 ring-2 ring-fuchsia-400 ring-offset-0 rounded-sm pointer-events-none" />
            )}

            {/* Artboard border */}
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* ── Floating tool rail (left) ─────────────── */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-1 p-1.5 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl">
          {RAIL_TOOLS.map(({ icon: Icon, key }) => {
            const isActive = key === activeToolKey;
            return (
              <button
                key={key}
                className={`p-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-brand-gradient text-black shadow-[0_0_14px_rgba(255,170,0,0.4)]"
                    : "text-zinc-400"
                }`}
              >
                {/* CopyAIIcon is a component, not a lucide icon */}
                <Icon size={18} />
              </button>
            );
          })}

          {/* Divider */}
          <div className="h-px bg-white/10 mx-1 my-0.5" />

          {/* Panel icons */}
          {PANEL_TOOLS_SIMPLE.map(({ icon: Icon, key }) => (
            <button key={key} className="p-2.5 rounded-xl text-zinc-400">
              <Icon size={18} />
            </button>
          ))}
          {/* CopyAI composite icon (FileText + Sparkle badge) */}
          <button className="p-2.5 rounded-xl text-zinc-400">
            <CopyAIIcon />
          </button>

          {/* Divider + color swatches stub */}
          <div className="h-px bg-white/10 mx-1 my-0.5" />
          <div className="flex flex-col gap-1 items-center px-1">
            <div className="w-6 h-6 rounded-lg bg-[#1a1a2e] border border-white/20" />
            <div className="w-6 h-6 rounded-lg bg-white border border-white/20" />
          </div>
        </div>

        {/* ── Right panel ──────────────────────────── */}
        <div className="absolute right-4 top-4 bottom-4 z-10 w-56 flex flex-col rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Tab bar */}
          <div className="flex p-1.5 gap-1 border-b border-white/5 flex-shrink-0">
            <button className="flex-1 py-1.5 rounded-xl text-[11px] font-bold text-zinc-500">
              Ajustes
            </button>
            {/* Camadas tab active */}
            <button className="flex-1 py-1.5 rounded-xl text-[11px] font-bold bg-brand-gradient text-black">
              Camadas
            </button>
          </div>

          {/* Layers panel toolbar */}
          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/5 flex-shrink-0">
            <button className="p-1.5 rounded-lg text-zinc-400">
              <Plus size={15} />
            </button>
            <button className="p-1.5 rounded-lg text-zinc-400">
              <SquareDashed size={15} />
            </button>
            <button className="p-1.5 rounded-lg text-zinc-400">
              <Combine size={15} />
            </button>
            <button className="p-1.5 rounded-lg text-zinc-400">
              <Layers size={15} />
            </button>
            <div className="flex-1" />
            <button className="p-1.5 rounded-lg text-zinc-400">
              <Trash2 size={15} />
            </button>
          </div>

          {/* Layer rows */}
          <div className="px-2 py-2 space-y-1">
            {MOCK_LAYERS.map((layer) => (
              <LayerRow
                key={layer.id}
                layer={layer}
                isSelected={selectedLayerId === layer.id}
              />
            ))}
          </div>
        </div>

        {/* ── Zoom pill (bottom-center) ──────────────── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-0.5 px-1.5 py-1 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <button className="p-1.5 rounded-full text-zinc-400">
            <Minus size={14} />
          </button>
          <span className="px-2 text-[11px] font-bold text-zinc-300 tabular-nums min-w-[48px] text-center">
            {studioData.zoomPercent}%
          </span>
          <button className="p-1.5 rounded-full text-zinc-400">
            <Plus size={14} />
          </button>
          <div className="w-px h-4 bg-white/10 mx-0.5" />
          <button className="p-1.5 rounded-full text-zinc-400">
            <Maximize size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
