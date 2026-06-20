"use client";
/**
 * MockContexto
 * Pixel-faithful replica of the "Perfil" tab of ClientWorkspaceLayout + PerfilTab
 * from Calango.studio — the Client Brand Context / Identity screen.
 *
 * Chrome: This screen has its OWN chrome (client workspace header with cover/logo/
 * name/status + a tab bar). The StudioTopBar is NOT used. Instead, the client
 * workspace header + tab bar + PerfilTab content are all rendered in the children
 * area of PlatformChrome. The topbar slot receives an empty spacer.
 *
 * Accent: sky/blue — the "Clientes" nav item in the sidebar is sky-400.
 * Readiness bar uses `from-primary to-emerald-500` (matching the real component).
 *
 * Forge sequence (5 steps, 1600ms, loops):
 *   0 — IDLE: client loaded, readiness bar at 0%, all zone badges unlit
 *   1 — BUILDING: brand color chips pop in (appear staggered), persona text visible
 *   2 — BUILDING: products appear (stagger in)
 *   3 — GROWING: readiness bar fills to 87% (animated), most badges tick
 *   4 — READY: bar at 87%, all done-badges with ✓, "Começar a criar" glows
 *   (loops to 0)
 *
 * Lucide icons (mirroring real component):
 *   ArrowLeft, Save, Sparkles, DollarSign, Camera, CheckCircle2, Wand2,
 *   User, Kanban, Image, BarChart3, Palette, Package, LayoutGrid, FileText,
 *   Crown, Star
 */
import {
  ArrowLeft,
  Save,
  Sparkles,
  DollarSign,
  Camera,
  CheckCircle2,
  Wand2,
  User,
  Kanban,
  Image as ImageIcon,
  BarChart3,
  Palette,
  Package,
  LayoutGrid,
  FileText,
  Crown,
  Star,
} from "lucide-react";
import { clienteExemplo } from "../mockData";
import { useForge } from "../useForge";

// ─── Static data derived from clienteExemplo ─────────────────────────────────

const CLIENT = clienteExemplo;

// Readiness badge items (mirrors real computeClientReadiness output)
const READINESS_ITEMS = [
  { key: "name", label: "Nome", done: true },
  { key: "niche", label: "Nicho", done: true },
  { key: "brand_colors", label: "Cores", done: true },
  { key: "brand_voice", label: "Voz", done: true },
  { key: "characters", label: "Personagem", done: true },
  { key: "products", label: "Produtos", done: true },
  { key: "target_audience", label: "Público", done: false },
  { key: "contents", label: "Pilares", done: false },
];

// Cover gradient built from client color (mirrors real coverFallback)
const coverGradient = `linear-gradient(120deg, ${CLIENT.color} 0%, #0f4c91 55%, #0a0a0c 100%)`;

// Brand color labels for the three brand colors
const BRAND_COLOR_DEFS = [
  { hex: CLIENT.cores[0], label: "Verde Pay" },
  { hex: CLIENT.cores[1], label: "Azul Pay" },
  { hex: CLIENT.cores[2], label: "Neutro" },
];

// Persona character card (mirrors CharacterCard)
const PERSONA = {
  name: "Carlos Mendes",
  role: "Fundador",
  description: "Empreendedor serial, 38 anos. Busca agilidade e segurança nas transações PJ.",
  isPrimary: true,
};

// Products (mirrors ProductCard)
const PRODUCTS = [
  { name: CLIENT.produtos[0], category: "Hardware", price: "R$ 249,00", featured: true },
  { name: CLIENT.produtos[1], category: "App Mobile", price: "R$ 49,90/mês", featured: true },
  { name: CLIENT.produtos[2], category: "Serviço Financeiro", price: "Grátis", featured: false },
];

// TABS definition (mirrors ClientWorkspaceLayout TABS)
const TABS = [
  { key: "perfil", label: "Perfil", Icon: User },
  { key: "criar", label: "Criar", Icon: Wand2 },
  { key: "demandas", label: "Demandas", Icon: Kanban },
  { key: "galeria", label: "Galeria", Icon: ImageIcon },
  { key: "analise", label: "Análise", Icon: BarChart3 },
];

// ─── STAT CHIP (mirrors ClientWorkspaceLayout StatChip) ───────────────────────

type Tone = "emerald" | "amber" | "blue" | "red";
const TONES: Record<Tone, { text: string; bg: string; border: string }> = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/[0.07]", border: "border-emerald-500/20" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/[0.07]", border: "border-amber-500/20" },
  red: { text: "text-red-400", bg: "bg-red-500/[0.07]", border: "border-red-500/20" },
  blue: { text: "text-blue-400", bg: "bg-blue-500/[0.07]", border: "border-blue-500/20" },
};

function StatChip({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  tone: Tone;
}) {
  const t = TONES[tone];
  return (
    <div className={`flex items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-xl border ${t.bg} ${t.border}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${t.bg} ${t.text}`}>
        <Icon size={14} />
      </div>
      <div className="leading-tight">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">{label}</p>
        <p className={`text-xs font-bold ${t.text}`}>{value}</p>
      </div>
    </div>
  );
}

// ─── CLIENT WORKSPACE HEADER (mirrors ClientWorkspaceLayout hero section) ─────

function ClientHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0E] shadow-2xl">
      {/* Cover image */}
      <div className="relative h-40 w-full">
        <div className="absolute inset-0" style={{ background: coverGradient }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <ArrowLeft size={18} className="text-white/80" />
        </div>

        {/* Camera cover button */}
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
          <Camera size={15} className="text-white/80" />
          <span className="text-[11px] font-bold text-white/80">Trocar capa</span>
        </div>
      </div>

      {/* Identity row */}
      <div className="relative px-5 pb-5">
        <div className="flex flex-row items-end gap-4 -mt-12">
          {/* Logo avatar — gradient box with initials (no image, mirrors "no logo" state) */}
          <div
            className="relative flex-shrink-0 w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#0B0B0E] shadow-xl flex items-center justify-center font-black text-2xl text-white"
            style={{ background: `linear-gradient(135deg, ${CLIENT.color} 0%, #0f4c91 100%)` }}
          >
            {CLIENT.initials}
          </div>

          {/* Name + niche + badges */}
          <div className="flex-1 min-w-0 pb-1">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-2xl font-black tracking-tight text-white">
                {CLIENT.nome}
              </span>
              {/* MedalBadge equivalent — gold medal for high monthly value */}
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-300">
                Gold
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/45">
                {CLIENT.segmento}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-300">
                Mensal
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30 flex items-center justify-center">
              <DollarSign size={17} className="text-amber-400" />
            </div>
            <div className="h-10 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs tracking-wide flex items-center gap-2 shadow-lg shadow-purple-600/20">
              <Sparkles size={15} /> Resumo IA
            </div>
            <div className="h-10 px-5 rounded-xl bg-emerald-600 text-white font-bold text-xs tracking-wide flex items-center gap-2">
              <Save size={15} /> Salvar
            </div>
          </div>
        </div>

        {/* Stat chips strip */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <StatChip icon={DollarSign} tone="emerald" label="Faturamento mensal" value="R$ 2.800,00" />
          <StatChip icon={Wand2} tone="amber" label="Perfil" value="87% completo" />
        </div>
      </div>
    </section>
  );
}

// ─── TAB BAR (mirrors ClientWorkspaceLayout sticky tab bar) ───────────────────

function ClientTabBar() {
  return (
    <div className="flex gap-1 bg-white/[0.03] p-1 rounded-2xl border border-white/[0.06]">
      {TABS.map((tab) => {
        const Icon = tab.Icon;
        const isActive = tab.key === "perfil";
        return (
          <div
            key={tab.key}
            className={`flex-1 min-w-[64px] flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              isActive ? "bg-white/[0.08] text-white shadow-sm" : "text-white/35"
            }`}
          >
            <Icon size={15} />
            <span>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── READINESS BAR (mirrors PerfilTab readiness section) ─────────────────────

function ReadinessBar({
  readinessPct,
  itemsDone,
}: {
  readinessPct: number;
  itemsDone: boolean[];
}) {
  const items = READINESS_ITEMS.map((item, i) => ({
    ...item,
    done: itemsDone[i] ?? item.done,
  }));
  const missing = items.filter((i) => !i.done);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-4">
      <div className="flex flex-row items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <p className="text-sm font-bold text-white/90">
              {readinessPct === 100 ? "Perfil completo, arte consistente garantida" : "Pronto para criar arte?"}
            </p>
            <span className="text-[10px] font-mono font-bold text-white/40">
              {readinessPct}%
            </span>
          </div>
          <div className="mt-2 w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-700"
              style={{ width: `${readinessPct}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {items.map((item) => (
              <span
                key={item.key}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border transition-all duration-500 ${
                  item.done
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-white/[0.03] border-white/[0.08] text-white/30"
                }`}
              >
                {item.done && <CheckCircle2 size={10} />}
                {item.label}
              </span>
            ))}
          </div>
          {missing.length > 0 && (
            <p className="mt-2 text-[11px] text-white/30">
              Falta preencher:{" "}
              <span className="text-white/50 font-semibold">
                {missing.map((m) => m.label).join(", ")}
              </span>
            </p>
          )}
        </div>
        <div className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider shadow-glow">
          <Wand2 size={15} /> Começar a criar
        </div>
      </div>
    </div>
  );
}

// ─── ZONE HEADER (mirrors Zone component) ─────────────────────────────────────

function Zone({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="px-1 mb-3">
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">{label}</p>
      <p className="text-[11px] text-white/25 mt-0.5">{hint}</p>
    </div>
  );
}

// ─── COLLAPSIBLE SECTION HEADER (mirrors Collapsible) ────────────────────────

function SectionHeader({
  title,
  icon: Icon,
  badge,
  accent,
}: {
  title: string;
  icon: React.ElementType;
  badge?: number;
  accent?: string;
}) {
  const accentClass = accent ?? "text-sky-400";
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
      <div className="flex items-center gap-2.5">
        <Icon size={15} className={accentClass} />
        <span className="text-sm font-bold text-white/80">{title}</span>
      </div>
      {badge !== undefined && (
        <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-bold text-white/40 border border-white/10">
          {badge}
        </span>
      )}
    </div>
  );
}

// ─── BRAND COLORS SECTION ─────────────────────────────────────────────────────

function BrandColorsSection({ showColors }: { showColors: boolean }) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <SectionHeader title="Identidade Visual" icon={Palette} accent="text-sky-400" />
      <div className="p-4 space-y-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-3">
            Cores da Marca
          </p>
          <div className="flex gap-4 items-end">
            {BRAND_COLOR_DEFS.map((bc, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${
                  showColors
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl border border-white/10 shadow-lg"
                  style={{ backgroundColor: bc.hex }}
                />
                <span className="text-[9px] text-white/40 font-bold">{bc.label}</span>
                <span className="text-[8px] text-white/25 font-mono">{bc.hex}</span>
              </div>
            ))}
            {/* Dashed add-more slot */}
            {showColors && (
              <div className="w-10 h-10 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center text-white/20">
                <span className="text-lg leading-none">+</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">
            Voz da Marca
          </p>
          <div className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-[11px] text-white/50 leading-relaxed">
            Direta, confiável e inovadora. Sem jargões financeiros desnecessários.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PERSONA / CHARACTER SECTION ──────────────────────────────────────────────

function PersonaSection({ showPersona }: { showPersona: boolean }) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <SectionHeader title="Personagens" icon={User} badge={1} accent="text-sky-400" />
      <div className="p-4">
        <div
          className={`transition-all duration-500 ${
            showPersona ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Character card (mirrors CharacterCard from ui.tsx) */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-sky-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{PERSONA.name}</span>
                {PERSONA.isPrimary && (
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    <Crown size={9} /> Principal
                  </span>
                )}
              </div>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-0.5">
                {PERSONA.role}
              </p>
              <p className="text-[11px] text-white/50 mt-1.5 leading-relaxed line-clamp-2">
                {PERSONA.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PRODUCTS SECTION ─────────────────────────────────────────────────────────

function ProductsSection({ showProducts }: { showProducts: boolean }) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <SectionHeader title="Produtos" icon={Package} badge={3} accent="text-sky-400" />
      <div className="p-4 space-y-2">
        {PRODUCTS.map((prod, idx) => (
          <div
            key={prod.name}
            className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-500 ${
              showProducts
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${idx * 90}ms` }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Package size={13} className="text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white">{prod.name}</span>
                {prod.featured && (
                  <Star size={10} className="text-amber-400 fill-amber-400" />
                )}
              </div>
              <p className="text-[10px] text-white/35">{prod.category}</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 flex-shrink-0">
              {prod.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── RIGHT COLUMN — Content direction placeholders ────────────────────────────

function ContentDirectionColumn() {
  return (
    <div className="space-y-4">
      <Zone
        label="Direção de Conteúdo"
        hint="Opcional. Refine para copys e estratégias mais precisas."
      />
      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
        <SectionHeader title="Estratégia & Marketing" icon={LayoutGrid} accent="text-violet-400" />
        <div className="p-4 space-y-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">
              Modelo de Negócio
            </p>
            <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-[11px] text-white/60">
              Marketplace
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">
              Público-alvo
            </p>
            <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-[11px] text-white/60">
              {CLIENT.persona}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">
              Pilares de Conteúdo
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["Educação financeira", "Cases de sucesso", "Produto em uso"].map((pilar) => (
                <div
                  key={pilar}
                  className="bg-black/40 border border-white/10 rounded-xl px-2.5 py-2 text-[10px] text-white/50 text-center"
                >
                  {pilar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
        <SectionHeader title="Briefing" icon={FileText} accent="text-violet-400" />
        <div className="p-4">
          <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-[11px] text-white/40 leading-relaxed min-h-[80px]">
            Calango Pay atende empreendedores PJ que precisam de agilidade no dia a dia financeiro.
            Tom direto e confiante — foco em praticidade, não em burocracia.
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
        <SectionHeader title="Contrato & Financeiro" icon={DollarSign} accent="text-emerald-400" />
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">Tipo</p>
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                <div className="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-center bg-blue-600 text-white">
                  Mensal
                </div>
                <div className="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-center text-white/30">
                  Freela
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">Valor</p>
              <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-[13px] font-mono font-bold text-emerald-400">
                R$ 2.800,00
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500 mb-1.5">Pagamento</p>
              <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-[11px] text-white/60 flex items-center">
                5 <span className="text-white/30 ml-1">do mês</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PERFIL TAB CONTENT ───────────────────────────────────────────────────────

function PerfilTabContent({
  readinessPct,
  itemsDone,
  showColors,
  showPersona,
  showProducts,
}: {
  readinessPct: number;
  itemsDone: boolean[];
  showColors: boolean;
  showPersona: boolean;
  showProducts: boolean;
}) {
  return (
    <div className="space-y-5">
      {/* Readiness bar */}
      <ReadinessBar readinessPct={readinessPct} itemsDone={itemsDone} />

      {/* Two-column grid */}
      <div className="grid grid-cols-2 gap-5 items-start">
        {/* Column A — Kit de Marca */}
        <div className="space-y-4">
          <Zone
            label="Kit de Marca"
            hint="É isso que a IA usa para gerar arte com a cara do cliente."
          />
          <BrandColorsSection showColors={showColors} />
          <PersonaSection showPersona={showPersona} />
          <ProductsSection showProducts={showProducts} />
        </div>

        {/* Column B — Direção & Gestão */}
        <ContentDirectionColumn />
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

/**
 * Forge sequence (5 steps, 1600ms, loops):
 *   0 — IDLE: client loaded, readiness = 0%, color/persona/product zones empty
 *   1 — BUILDING: brand colors pop in (stagger), readiness = 35%
 *   2 — BUILDING: persona card appears, readiness = 60%
 *   3 — GROWING: products appear (stagger), readiness = 80%
 *   4 — READY: bar at 87%, all key badges ticked, "Começar a criar" glows
 *   (loops to 0)
 */
export default function MockContexto({ active }: { active?: boolean }) {
  const { step, ref } = useForge(5, { active, loop: true, interval: 1600 });

  // Derive animation state from step
  const showColors = step >= 1;
  const showPersona = step >= 2;
  const showProducts = step >= 3;

  // Readiness pct animates across steps
  const readinessPct =
    step === 0 ? 0 :
    step === 1 ? 35 :
    step === 2 ? 60 :
    step === 3 ? 80 :
    CLIENT.readiness; // 87 at step 4

  // Which readiness badges are lit at each step
  const itemsDone =
    step === 0
      ? [true, true, false, false, false, false, false, false]
      : step === 1
      ? [true, true, true, true, false, false, false, false]
      : step === 2
      ? [true, true, true, true, true, false, false, false]
      : step === 3
      ? [true, true, true, true, true, true, false, false]
      : [true, true, true, true, true, true, false, false]; // step 4: same 6 done (87%)

  return (
    <div ref={ref} className="space-y-3">
      {/* Client workspace header (cover + logo + name + stat chips) */}
      <ClientHeader />

      {/* Tab bar */}
      <ClientTabBar />

      {/* Perfil tab content */}
      <div className="mt-1">
        <PerfilTabContent
          readinessPct={readinessPct}
          itemsDone={itemsDone}
          showColors={showColors}
          showPersona={showPersona}
          showProducts={showProducts}
        />
      </div>
    </div>
  );
}
