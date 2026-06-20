"use client";
/**
 * MockClientes
 * Pixel-faithful replica of pages/clientes/ClientsListPage.tsx from Calango.studio.
 *
 * Accent: sky/blue — "Clientes" nav in the sidebar is sky-400 (Users icon).
 * Active sidebar key: "clientes"
 *
 * This screen does NOT use StudioTopBar — it owns its own hero header (cinematic
 * portfolio section) + grid of client badge cards with logo/initials gradient,
 * name, niche, status chip, monthly value, and action buttons on hover.
 * The topbar slot receives an empty spacer.
 *
 * Hero stats: Faturamento mensal · Nível (medal badge) · Clientes count.
 * Alert strips: shown when atrasados/aguardando counts > 0 (static, none for mock).
 * Grid: grid-cols-2 → grid-cols-3 (mock uses 3 across for the 1180px width).
 *
 * Forge sequence (4 steps, 1400ms, loops):
 *   0 — IDLE: hero loaded, card slots show skeleton (pulse)
 *   1 — STAGGER IN: cards fade-up one by one (stagger per-card), readiness bars at 0%
 *   2 — BARS FILL: readiness bars animate to their target values, status chips pop
 *   3 — HOVER: first card simulates hover (quick-action buttons visible + lift)
 *   (loops to 0)
 *
 * Lucide icons used:
 *   Plus, Users, Lock, Wand2, Kanban, Trash2 (matching real ClientsListPage + ClientBadgeCard)
 *
 * NO overflow-y-auto — FitFrame scales to fit; content lays out fully.
 */
import {
  Plus,
  Users,
  Lock,
  Wand2,
  Kanban,
  Trash2,
} from "lucide-react";
import { clientesList, type Cliente } from "../mockData";
import { useForge } from "../useForge";

// ─── Static data ───────────────────────────────────────────────────────────────

// Three clients from mockData, plus two extras for a fuller grid
const CLIENTS: (Cliente & {
  segmentoFull: string;
  monthlyValue: string;
  statusLabel: string;
  statusColor: "emerald" | "amber" | "blue";
  metricsLabel: string;
  metricsColor: "emerald" | "red" | "yellow";
  colors: string[];
})[] = [
  {
    ...clientesList[0],
    segmentoFull: "Fintech · Pagamentos",
    monthlyValue: "R$ 2.800",
    statusLabel: "Em dia",
    statusColor: "emerald",
    metricsLabel: "Em dia",
    metricsColor: "emerald",
    colors: ["#00c896", "#1f6feb", "#f5f5f5"],
  },
  {
    ...clientesList[1],
    segmentoFull: "Fotografia",
    monthlyValue: "R$ 1.500",
    statusLabel: "1 aguardando",
    statusColor: "amber",
    metricsLabel: "1 aguardando",
    metricsColor: "yellow",
    colors: ["#3f3f46", "#a1a1aa", "#18181b"],
  },
  {
    ...clientesList[2],
    segmentoFull: "Agronegócio",
    monthlyValue: "R$ 900",
    statusLabel: "Em dia",
    statusColor: "emerald",
    metricsLabel: "Em dia",
    metricsColor: "emerald",
    colors: ["#22c55e", "#16a34a", "#052e16"],
  },
  {
    id: "4",
    nome: "Arco Arquitetura",
    initials: "AA",
    color: "#f59e0b",
    segmento: "Arquitetura",
    segmentoFull: "Arquitetura & Interiores",
    monthlyValue: "R$ 2.200",
    statusLabel: "Em dia",
    statusColor: "emerald",
    readiness: 78,
    status: "ativo",
    metricsLabel: "Em dia",
    metricsColor: "emerald",
    colors: ["#f59e0b", "#d97706", "#1c1917"],
  },
  {
    id: "5",
    nome: "Clínica Viva",
    initials: "CV",
    color: "#ec4899",
    segmento: "Saúde",
    segmentoFull: "Saúde & Bem-estar",
    monthlyValue: "R$ 1.800",
    statusLabel: "1 atrasado",
    statusColor: "amber",
    readiness: 55,
    status: "prospecto",
    metricsLabel: "1 atrasado",
    metricsColor: "red",
    colors: ["#ec4899", "#be185d", "#1f0a11"],
  },
];

const TOTAL_MONTHLY = 9200;
const FORMATTED_TOTAL = "R$ 9.200";
const CLIENT_LIMIT = 10;

// ─── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// ─── HeroStat (mirrors real HeroStat) ─────────────────────────────────────────

function HeroStat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{label}</span>
      <div className="flex items-center h-8">{children}</div>
    </div>
  );
}

// ─── MedalBadge (mirrors real MedalBadge from meus_clientes/ui) ──────────────

function MedalBadge({ totalValue }: { totalValue: number }) {
  if (totalValue >= 10000) {
    return (
      <span className="px-3 py-1 rounded-xl text-sm font-black uppercase tracking-wider bg-violet-500/15 border border-violet-500/30 text-violet-300">
        Diamante
      </span>
    );
  }
  if (totalValue >= 5000) {
    return (
      <span className="px-3 py-1 rounded-xl text-sm font-black uppercase tracking-wider bg-amber-500/15 border border-amber-500/30 text-amber-300">
        Gold
      </span>
    );
  }
  return (
    <span className="px-3 py-1 rounded-xl text-sm font-black uppercase tracking-wider bg-zinc-500/15 border border-zinc-500/30 text-zinc-300">
      Prata
    </span>
  );
}

// ─── StatusChip (mirrors real StatusChip from ClientBadgeCard) ────────────────

function StatusChip({ label, color }: { label: string; color: "emerald" | "red" | "yellow" }) {
  const cls: Record<string, string> = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    red: "bg-red-500/10 border-red-500/20 text-red-400",
    yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  };
  return (
    <span className={`px-2 py-0.5 rounded-md ${cls[color]} border text-[9px] font-bold uppercase tracking-wider`}>
      {label}
    </span>
  );
}

// ─── BadgeFrame (mirrors real BadgeFrame from ClientBadgeCard.tsx) ────────────

function BadgeFrame({
  client,
  readinessPct,
  showStatus,
}: {
  client: (typeof CLIENTS)[0];
  readinessPct: number;
  showStatus: boolean;
}) {
  const palette = client.colors.length > 0 ? client.colors : [client.color];
  const gradient =
    palette.length === 1
      ? palette[0]
      : `linear-gradient(135deg, ${palette.join(", ")})`;

  const initials = client.initials || getInitials(client.nome);

  return (
    <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-[#0B0B0E] border border-white/10 flex flex-col shadow-lg">
      {/* Top color band — brand gradient */}
      <div className="relative h-[34%] flex-shrink-0" style={{ background: gradient }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#0B0B0E]" />
        {/* Badge hole */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-black/60 border border-white/15 shadow-inner" />
      </div>

      {/* Logo overlapping the band */}
      <div className="relative -mt-12 flex justify-center flex-shrink-0">
        <div
          className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#0B0B0E] border border-white/10 shadow-xl flex items-center justify-center font-black text-xl text-white"
          style={{ background: `linear-gradient(135deg, ${client.color} 0%, rgba(0,0,0,0.6) 100%)` }}
        >
          {initials}
        </div>
      </div>

      {/* Identity */}
      <div className="flex-1 flex flex-col items-center px-4 pt-3 min-h-0">
        <h3 className="text-white font-bold text-base text-center leading-tight tracking-tight line-clamp-2">
          {client.nome}
        </h3>
        <span className="mt-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[9px] font-bold uppercase tracking-widest text-white/50 truncate max-w-full">
          {client.segmento}
        </span>

        {/* Status chip */}
        {showStatus && (
          <div className="mt-2.5 transition-all duration-500">
            <StatusChip label={client.metricsLabel} color={client.metricsColor} />
          </div>
        )}

        {/* Mini palette */}
        <div className="mt-auto mb-2 flex gap-1.5">
          {palette.slice(0, 3).map((hex, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full border border-white/20"
              style={{ background: hex }}
            />
          ))}
        </div>
      </div>

      {/* Footer — value + readiness */}
      <div className="flex-shrink-0 border-t border-white/[0.06] px-4 py-3 bg-white/[0.02]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-emerald-400 font-mono text-sm font-bold tracking-tight">
              {client.monthlyValue}
            </p>
            <p className="text-white/25 text-[9px] uppercase tracking-widest font-black">mensal</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-sm font-bold">{readinessPct}%</p>
            <p className="text-white/25 text-[9px] uppercase tracking-widest font-black">pronto</p>
          </div>
        </div>
        {/* Readiness progress bar */}
        <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${readinessPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── ClientBadgeCard (mirrors ClientBadgeCard with hover actions) ─────────────

function ClientBadgeCard({
  client,
  readinessPct,
  showStatus,
  hovered,
}: {
  client: (typeof CLIENTS)[0];
  readinessPct: number;
  showStatus: boolean;
  hovered: boolean;
}) {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-300 ${
        hovered ? "-translate-y-1.5" : ""
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          hovered ? "shadow-2xl border-white/25" : ""
        }`}
      >
        <BadgeFrame
          client={client}
          readinessPct={readinessPct}
          showStatus={showStatus}
        />
      </div>

      {/* Hover quick-actions */}
      {hovered && (
        <div className="absolute inset-x-3 bottom-[52px] flex gap-2 z-10 transition-all duration-300">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-black text-[10px] font-black uppercase tracking-wider shadow-lg"
          >
            <Wand2 size={13} /> Criar
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-zinc-900/95 border border-white/15 text-white/80 text-[10px] font-black uppercase tracking-wider shadow-lg backdrop-blur-md"
          >
            <Kanban size={13} /> Demandas
          </button>
        </div>
      )}

      {/* Delete button on hover */}
      {hovered && (
        <button
          type="button"
          className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/60 border border-white/10 text-white/40 flex items-center justify-center z-10 backdrop-blur-md"
        >
          <Trash2 size={14} />
        </button>
      )}
    </div>
  );
}

// ─── Hero section (mirrors the real cinematic hero card) ─────────────────────

function ClientsHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0E] shadow-2xl">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-20 w-[34rem] h-[34rem] rounded-full bg-sky-500/15 blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-transparent" />
        <Users
          className="absolute -right-6 -bottom-12 w-72 h-72 text-white/[0.03]"
          strokeWidth={1}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(130% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {/* Row 1 — title + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sky-400/80 mb-3">
              Minha carteira
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05]">
              Clientes
            </h1>
            <p className="mt-3 text-sm text-white/45 leading-relaxed">
              Sua carteira em crachás. Abra um cliente para criar arte e acompanhar as demandas dele.
            </p>
          </div>

          <button
            type="button"
            className="group self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primaryHover text-black font-bold text-sm tracking-tight whitespace-nowrap shadow-[0_8px_24px_-8px_rgba(255,170,0,0.6)] transition-all"
          >
            <Plus size={18} />
            Novo cliente
          </button>
        </div>

        {/* Row 2 — metadata strip */}
        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/[0.07] pt-6">
          <HeroStat label="Faturamento mensal">
            <span className="text-2xl font-mono font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.25)]">
              {FORMATTED_TOTAL}
            </span>
          </HeroStat>

          <div className="hidden sm:block h-9 w-px bg-white/10" />

          <HeroStat label="Nível">
            <MedalBadge totalValue={TOTAL_MONTHLY} />
          </HeroStat>

          <div className="hidden sm:block h-9 w-px bg-white/10" />

          <HeroStat label="Clientes">
            <span className="text-2xl font-bold text-white tracking-tight">
              {CLIENTS.length}
              <span className="text-base font-medium text-white/30">/{CLIENT_LIMIT}</span>
            </span>
          </HeroStat>
        </div>
      </div>
    </section>
  );
}

// ─── Skeleton card (loading state) ────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="aspect-[4/5] bg-white/5 rounded-[28px] animate-pulse border border-white/[0.04]" />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Forge sequence (4 steps, 1400ms each, loops):
 *   0 — IDLE: hero loaded, grid shows skeleton cards (pulse)
 *   1 — STAGGER IN: cards fade-up, readiness bars at 0% (no status chips yet)
 *   2 — BARS FILL: readiness bars animate to target %, status chips pop in
 *   3 — HOVER: first card lifts with hover-state (quick-action buttons visible)
 *   (loops to 0)
 */
export default function MockClientes({ active }: { active?: boolean }) {
  const { step, ref } = useForge(4, { active, loop: true, interval: 1400 });

  // Cards show when step >= 1; skeleton at step 0
  const showCards = step >= 1;
  // Readiness bars fill at step >= 2
  const showBars = step >= 2;
  // Status chips appear at step >= 2
  const showStatus = step >= 2;
  // Hover simulation on first card at step 3
  const hoveredIdx = step === 3 ? 0 : -1;

  // Per-card readiness values (animate from 0 when showBars is false)
  const readinessValues = CLIENTS.map((c) => (showBars ? c.readiness : 0));

  return (
    <div ref={ref} className="space-y-5">
      {/* Cinematic hero / wallet header */}
      <ClientsHero />

      {/* Client cards grid */}
      {!showCards ? (
        // Skeleton loading state
        <div className="grid grid-cols-3 gap-5">
          {CLIENTS.map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {CLIENTS.map((client, i) => (
            <div
              key={client.id}
              className="transition-all duration-500"
              style={{
                opacity: showCards ? 1 : 0,
                transform: showCards ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <ClientBadgeCard
                client={client}
                readinessPct={readinessValues[i]}
                showStatus={showStatus}
                hovered={hoveredIdx === i}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
