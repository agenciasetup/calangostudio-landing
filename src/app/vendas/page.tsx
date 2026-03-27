"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  Target,
  MessageCircle,
  BarChart3,
  DollarSign,
  Rocket,
  Send,
  TrendingUp,
  Crown,
  CheckCircle2,
  CircleDollarSign,
  AlertTriangle,
  Search,
  Clock,
  UserX,
  Brain,
  RefreshCw,
  ArrowRight,
  Eye,
  Heart,
  ShieldAlert,
  Repeat,
  CalendarClock,
  Lightbulb,
  Flame,
  Gift,
  Star,
  Users,
  Calculator,
  CreditCard,
  Timer,
  Trophy,
  Copy,
  ExternalLink,
  Bell,
  XCircle,
  CheckCheck,
  Monitor,
  Smartphone,
  Mail,
  PhoneOff,
  MessageSquare,
  Banknote,
  Percent,
  ChevronDown,
} from "lucide-react";
import {
  FloatingIcon,
  GlowOrb,
  PopupToast,
  ProgressBar,
  SlideCentered,
  Badge,
} from "@/components/apresentacao/shared";

/* ═══════════════════════════════════════════
   COMPONENTES REUTILIZÁVEIS
   ═══════════════════════════════════════════ */

/* ── iPhone Mockup ── */
function IPhoneMockup({
  children,
  className = "",
  size = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "normal" | "large";
}) {
  const sizes = {
    small: { maxW: 200, minH: 300, rounded: 28, border: 2, notchW: 20, padding: 1.5 },
    normal: { maxW: 280, minH: 420, rounded: 36, border: 3, notchW: 28, padding: 2 },
    large: { maxW: 320, minH: 500, rounded: 40, border: 3, notchW: 32, padding: 2.5 },
  };
  const s = sizes[size];
  return (
    <div className={`relative mx-auto ${className}`} style={{ maxWidth: s.maxW }}>
      <div
        className="bg-[#111] shadow-2xl shadow-black/60"
        style={{
          borderRadius: s.rounded,
          border: `${s.border}px solid rgba(255,255,255,0.15)`,
          padding: `${s.padding * 4}px`,
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-10"
          style={{ width: s.notchW * 4, height: s.notchW * 0.85 }}
        />
        {/* Screen */}
        <div
          className="bg-[#0a0a0c] overflow-hidden relative"
          style={{ borderRadius: s.rounded - 6, minHeight: s.minH }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Macbook Mockup ── */
function MacbookMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Screen */}
      <div className="rounded-t-xl border-[3px] border-[#333] bg-[#111] p-1.5">
        <div className="rounded-lg bg-[#0a0a0c] overflow-hidden min-h-[280px] relative">
          {children}
        </div>
      </div>
      {/* Base/Hinge */}
      <div className="relative">
        <div className="h-3 bg-gradient-to-b from-[#333] to-[#222] rounded-b-sm" />
        <div className="h-1 bg-[#1a1a1a] mx-auto rounded-b-lg" style={{ width: "80%" }} />
      </div>
    </div>
  );
}

/* ── Calango Message Card (baseado nos screenshots) ── */
function CalangoMessageCard({
  title,
  badge,
  badgeColor = "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  messages,
  delay = 0,
}: {
  title: string;
  badge: string;
  badgeColor?: string;
  messages: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl bg-[#0c0c0e] border border-white/[0.06] p-5 text-left w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-poppins font-bold text-sm text-white">{title}</h4>
        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md border ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <div className="space-y-2 mb-5">
        {messages.map((msg, i) => (
          <p key={i} className="text-sm text-txt-secondary leading-relaxed">{msg}</p>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-bold text-txt-secondary">
          <Copy size={12} /> COPIAR
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-xs font-bold text-emerald-400">
          <ExternalLink size={12} /> WHATSAPP
        </button>
      </div>
    </motion.div>
  );
}

/* ── WhatsApp Chat Bubble ── */
function WAChatBubble({
  text,
  time = "10:32",
  sent = false,
  delay = 0,
  read = true,
}: {
  text: string;
  time?: string;
  sent?: boolean;
  delay?: number;
  read?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.35 }}
      className={`flex ${sent ? "justify-end" : "justify-start"} mb-1.5`}
    >
      <div
        className={`max-w-[85%] px-3 py-2 text-[11px] leading-relaxed shadow-md ${
          sent
            ? "bg-[#005c4b] text-white rounded-2xl rounded-tr-md"
            : "bg-[#1f2c34] text-white/90 rounded-2xl rounded-tl-md"
        }`}
      >
        <p>{text}</p>
        <span className="text-[9px] text-white/40 float-right mt-1 ml-3 flex items-center gap-1">
          {time}
          {sent && (
            <CheckCheck size={10} className={read ? "text-blue-400" : "text-white/30"} />
          )}
        </span>
      </div>
    </motion.div>
  );
}

/* ── WhatsApp Header (inside iPhone) ── */
function WAHeader({ name, status = "online" }: { name: string; status?: string }) {
  return (
    <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-3 border-b border-white/[0.05]">
      <div className="w-2 h-2 rounded-full bg-white/20" />
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
        {name.charAt(0).toUpperCase()}
      </div>
      <div>
        <p className="text-white text-xs font-bold">{name}</p>
        <p className="text-emerald-400/60 text-[9px]">{status}</p>
      </div>
    </div>
  );
}

/* ── Sale Notification Popup ── */
function SaleNotification({
  name,
  value,
  delay = 0,
  className = "",
}: {
  name: string;
  value: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
      className={`absolute z-20 ${className}`}
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-black/30 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <DollarSign size={14} className="text-emerald-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">{name} fechou!</p>
          <p className="text-[10px] text-emerald-400 font-bold">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Notification Toast (client action) ── */
function ClientNotification({
  icon: Icon,
  text,
  subtext,
  color = "text-accent",
  bgColor = "bg-accent/10",
  borderColor = "border-accent/20",
  delay = 0,
  className = "",
}: {
  icon: React.ElementType;
  text: string;
  subtext?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`absolute z-20 ${className}`}
    >
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${bgColor} border ${borderColor} shadow-lg shadow-black/30 backdrop-blur-md`}>
        <Icon size={16} className={color} />
        <div>
          <p className="text-xs font-bold text-white whitespace-nowrap">{text}</p>
          {subtext && <p className={`text-[10px] ${color} font-semibold`}>{subtext}</p>}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Revenue Calculator (interativa) ── */
function RevenueCalculator() {
  const [conversionRate, setConversionRate] = useState(5);
  const [ticketMedio, setTicketMedio] = useState(500);
  const contactsPerDay = 5;
  const contactsPerMonth = contactsPerDay * 30;
  const closedClients = Math.round((contactsPerMonth * conversionRate) / 100);
  const monthlyRevenue = closedClients * ticketMedio;
  const sixMonthRevenue = monthlyRevenue * 6;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-4xl mx-auto">
      {/* Lado esquerdo — Sem prospecção */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <XCircle size={20} className="text-red-400" />
          </div>
          <h3 className="font-poppins font-bold text-base text-red-400">0 Prospecção</h3>
        </div>
        <div className="text-center py-6">
          <p className="font-poppins font-black text-5xl text-red-400 mb-2">R$ 0</p>
          <p className="text-sm text-txt-muted">por mês</p>
        </div>
        <div className="space-y-3 mt-4">
          {["Daqui 1 mês: igual", "Daqui 3 meses: igual", "Daqui 6 meses: igual", "Daqui 2 anos: igual"].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-red-400/70">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
              {t}
            </div>
          ))}
        </div>
        <p className="text-xs text-red-400/50 mt-6 text-center font-bold uppercase tracking-wider">
          Igual você está hoje.
        </p>
      </motion.div>

      {/* Lado direito — Com prospecção (calculadora) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <Calculator size={20} className="text-emerald-400" />
          </div>
          <h3 className="font-poppins font-bold text-base text-emerald-400">Com Prospecção</h3>
        </div>

        {/* Contatos fixos */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-3">
          <span className="text-xs text-txt-secondary">Contatos/dia</span>
          <span className="text-sm font-bold text-white">5 → <span className="text-emerald-400">{contactsPerMonth}/mês</span></span>
        </div>

        {/* Slider: % fechamento */}
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-txt-secondary flex items-center gap-1"><Percent size={10} /> Fechamento</span>
            <span className="text-sm font-bold text-emerald-400">{conversionRate}%</span>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-emerald-400 cursor-pointer"
          />
        </div>

        {/* Input: Ticket médio */}
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-txt-secondary flex items-center gap-1"><Banknote size={10} /> Ticket médio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-txt-muted">R$</span>
            <input
              type="number"
              min={50}
              max={10000}
              step={50}
              value={ticketMedio}
              onChange={(e) => setTicketMedio(Number(e.target.value))}
              className="w-full bg-transparent border-b border-white/10 text-white font-bold text-lg outline-none focus:border-emerald-400 transition-colors pb-1"
            />
          </div>
        </div>

        {/* Resultado */}
        <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-center mb-3">
          <p className="text-xs text-emerald-400/60 uppercase tracking-wider font-bold mb-1">Clientes fechados</p>
          <p className="font-poppins font-black text-2xl text-emerald-400">{closedClients} clientes</p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/[0.12] border border-emerald-500/30 text-center mb-3">
          <p className="text-xs text-emerald-400/60 uppercase tracking-wider font-bold mb-1">Resultado mensal</p>
          <p className="font-poppins font-black text-3xl text-gradient-animated">
            R$ {monthlyRevenue.toLocaleString("pt-BR")}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/[0.08] to-accent/[0.08] border border-accent/20 text-center">
          <p className="text-xs text-accent/60 uppercase tracking-wider font-bold mb-1">Em 6 meses mantendo o ritmo</p>
          <p className="font-poppins font-black text-3xl text-gradient-animated">
            R$ {sixMonthRevenue.toLocaleString("pt-BR")}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Pipeline HTML (Kanban Board) ── */
function PipelineBoard() {
  const columns = [
    {
      label: "PROSPECTAR", dot: "bg-blue-400", count: 3,
      cards: [
        { name: "Studio Arte", tag: "Designer", color: "bg-blue-500/20 text-blue-400" },
        { name: "Café Bloom", tag: "Cafeteria", color: "bg-purple-500/20 text-purple-400" },
        { name: "Dr. Marcos", tag: "Clínica", color: "bg-cyan-500/20 text-cyan-400" },
      ],
    },
    {
      label: "ABORDAR", dot: "bg-purple-400", count: 2,
      cards: [
        { name: "Pet Feliz", tag: "Pet Shop", color: "bg-amber-500/20 text-amber-400" },
        { name: "Barbearia JC", tag: "Barbearia", color: "bg-emerald-500/20 text-emerald-400" },
      ],
    },
    {
      label: "NÃO RESPONDEU", dot: "bg-orange-400", count: 1,
      cards: [{ name: "Ana Souza", tag: "Nutricionista", color: "bg-orange-500/20 text-orange-400" }],
    },
    {
      label: "PENSANDO", dot: "bg-yellow-400", count: 1,
      cards: [{ name: "Fernanda L.", tag: "Advocacia", color: "bg-yellow-500/20 text-yellow-400" }],
    },
    {
      label: "FECHOU", dot: "bg-emerald-400", count: 2,
      cards: [
        { name: "Andre Santos", tag: "R$ 1.000", color: "bg-emerald-500/20 text-emerald-400" },
        { name: "João Paz", tag: "R$ 800", color: "bg-emerald-500/20 text-emerald-400" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full rounded-xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
    >
      <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="font-poppins font-bold text-xs text-white">Pipeline</span>
          <span className="text-[10px] text-txt-muted">9 prospects</span>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-accent/30 text-accent text-[10px] font-bold">
          <Zap size={10} /> Novo
        </button>
      </div>
      <div className="p-3 overflow-x-auto">
        <div className="flex gap-2.5" style={{ minWidth: 700 }}>
          {columns.map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + ci * 0.06 }}
              className="flex-1 min-w-[130px]"
            >
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                  <span className="text-[9px] font-bold text-txt-muted uppercase tracking-wider">{col.label}</span>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/[0.04] text-txt-muted">{col.count}</span>
              </div>
              <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] min-h-[120px] p-1.5 space-y-1.5">
                {col.cards.map((card, i) => (
                  <motion.div
                    key={card.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2 hover:border-accent/20 transition-colors cursor-pointer"
                  >
                    <p className="text-[10px] font-bold text-white mb-0.5">{card.name}</p>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${card.color}`}>{card.tag}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Funnel Pipeline Visual ── */
function FunnelPipeline() {
  const stages = [
    { label: "Prospecção e Pesquisa", icon: Search, color: "from-blue-500 to-blue-600", count: "150", pct: 100 },
    { label: "Primeira Abordagem", icon: Send, color: "from-purple-500 to-purple-600", count: "120", pct: 85 },
    { label: "Conversa de Diagnóstico", icon: MessageCircle, color: "from-cyan-500 to-cyan-600", count: "60", pct: 65 },
    { label: "Follow-up", icon: RefreshCw, color: "from-amber-500 to-amber-600", count: "40", pct: 45 },
    { label: "Proposta e Fechamento", icon: Trophy, color: "from-emerald-500 to-emerald-600", count: "15", pct: 30 },
  ];

  return (
    <div className="w-full max-w-[650px] mx-auto">
      {stages.map((stage, i) => {
        const Icon = stage.icon;
        return (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
            className="flex items-center gap-4 mb-3 mx-auto"
            style={{ width: `${stage.pct}%` }}
          >
            <div
              className={`w-full bg-gradient-to-r ${stage.color} rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-lg shadow-black/20`}
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Icon size={14} className="text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white">{stage.label}</span>
              <span className="text-xs text-white/50 ml-auto font-bold">{stage.count}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Vendas() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSteps = 27;
  const touchStart = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }, [step]);

  const goPrev = useCallback(() => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }, [step]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "80%" : "-80%",
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({
      x: d > 0 ? "-80%" : "80%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const renderStep = () => {
    switch (step) {
      /* ═══ SLIDE 1 — ABERTURA ═══ */
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Target} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={DollarSign} className="top-[12%] right-[10%]" size={36} delay={1} />
            <FloatingIcon icon={Sparkles} className="bottom-[18%] left-[12%]" size={32} delay={2} />
            <FloatingIcon icon={MessageCircle} className="bottom-[15%] right-[8%]" size={34} delay={0.5} />
            <FloatingIcon icon={Zap} className="top-[30%] left-[25%]" size={28} delay={1.5} />
            <FloatingIcon icon={TrendingUp} className="top-[25%] right-[22%]" size={30} delay={2.5} />
            <GlowOrb className="top-1/4 left-1/4" size="w-[600px] h-[600px]" />
            <GlowOrb className="bottom-1/4 right-1/4" color="bg-accent-end/[0.03]" size="w-[500px] h-[500px]" />

            {/* Notificações flutuantes */}
            <SaleNotification name="Andre Santos" value="R$ 1.000" delay={1.2} className="top-[15%] right-[5%] hidden lg:flex" />
            <ClientNotification icon={Send} text="Nova mensagem enviada" subtext="5 prospects hoje" color="text-blue-400" bgColor="bg-blue-500/10" borderColor="border-blue-500/20" delay={2} className="top-[35%] left-[3%] hidden lg:flex" />
            <SaleNotification name="Maria C." value="R$ 800" delay={2.5} className="bottom-[25%] left-[5%] hidden lg:flex" />
            <ClientNotification icon={CheckCheck} text="Fernanda respondeu!" subtext="Quer saber mais" color="text-emerald-400" bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" delay={3} className="bottom-[20%] right-[3%] hidden lg:flex" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <Badge icon={Target} text="Vendas para Designers" />

              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.05]">
                Você não tem problema de{" "}
                <span className="text-gradient-animated">talento</span>.
                <br />
                Você tem problema de{" "}
                <span className="text-gradient-animated">método</span>.
              </h1>
              <p className="text-txt-secondary text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Como sair do medo de vender e construir um{" "}
                <span className="text-white font-bold">
                  processo que trabalha por você
                </span>{" "}
                todos os dias.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-lg uppercase tracking-wider shadow-glow cursor-pointer"
                onClick={goNext}
              >
                <span>Começar</span>
                <ChevronRight size={22} />
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 2 — A DOR ═══ */
      case 1:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={AlertTriangle} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <FloatingIcon icon={Brain} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-red-400/15" />
            <FloatingIcon icon={PhoneOff} className="bottom-[12%] left-[8%]" size={28} delay={1.5} color="text-red-400/15" />
            <GlowOrb className="top-0 left-1/3" color="bg-red-500/[0.04]" />
            <GlowOrb className="bottom-1/4 right-1/4" color="bg-red-500/[0.02]" size="w-[400px] h-[400px]" />

            {/* iPhone mockup flutuando com mensagem ignorada */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute right-[3%] top-[15%] hidden lg:block z-10"
            >
              <IPhoneMockup size="small" className="w-[160px] opacity-60">
                <WAHeader name="Cliente" status="online" />
                <div className="p-2.5 bg-[#0b141a]">
                  <WAChatBubble sent text="Oi! Sou designer, teria interesse nos meus serviços?" time="09:15" delay={1.3} />
                  <WAChatBubble sent text="Posso te mostrar meu portfólio?" time="09:16" delay={1.5} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-center py-6"
                  >
                    <p className="text-[10px] text-red-400/60 italic">Visualizado. Sem resposta.</p>
                  </motion.div>
                </div>
              </IPhoneMockup>
            </motion.div>

            <Badge icon={AlertTriangle} text="Você se identifica?" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              Você já passou por{" "}
              <span className="text-gradient-animated">alguma dessas</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {[
                { text: "Não sei como abordar um cliente novo", icon: UserX },
                { text: "Mando mensagem e fico ansioso esperando", icon: Clock },
                { text: "Fico com medo de parecer chato ou desesperado", icon: ShieldAlert },
                { text: "Não sei quanto cobrar", icon: DollarSign },
                { text: "Tenho medo de que a IA vai me substituir", icon: Brain },
                { text: "Sei trabalhar, mas não sei vender", icon: Target },
              ].map(({ text, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-left hover:bg-red-500/[0.08] hover:border-red-500/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <span className="text-base text-txt-secondary leading-snug">
                    &ldquo;{text}&rdquo;
                  </span>
                </motion.div>
              ))}
            </div>

            <PopupToast icon={AlertTriangle} text="Todo mundo já sentiu isso" className="bottom-[8%] right-[8%]" delay={1.2} bgColor="bg-red-500/10" borderColor="border-red-500/20" color="text-red-400" />
          </div>
        );

      /* ═══ SLIDE 3 — O ELEFANTE NA SALA ═══ */
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            {/* Fundo vermelho intenso */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent pointer-events-none" />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-red-500/[0.05]" size="w-[700px] h-[700px]" />

            {/* Mockups de rejeição flutuando nos cantos */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 0.4, rotate: -5 }}
              transition={{ delay: 0.8 }}
              className="absolute left-[5%] top-[20%] hidden lg:block"
            >
              <div className="rounded-xl bg-red-500/[0.06] border border-red-500/10 p-3 w-[180px] -rotate-3">
                <p className="text-[10px] text-red-400/60">WhatsApp</p>
                <p className="text-xs text-white/40 mt-1">Oi, faço design...</p>
                <p className="text-[9px] text-red-400/40 mt-2">Visualizado ✓✓</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              animate={{ opacity: 0.4, rotate: 5 }}
              transition={{ delay: 1 }}
              className="absolute right-[5%] bottom-[25%] hidden lg:block"
            >
              <div className="rounded-xl bg-red-500/[0.06] border border-red-500/10 p-3 w-[180px] rotate-2">
                <p className="text-[10px] text-red-400/60">Instagram DM</p>
                <p className="text-xs text-white/40 mt-1">Teria interesse?</p>
                <p className="text-[9px] text-red-400/40 mt-2">Visto há 3 dias</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px] relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-8"
              >
                <AlertTriangle size={32} className="text-red-400" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                O problema não é que{" "}
                <span className="text-red-400">você é ruim</span>.
              </h2>
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08]">
                O problema é que{" "}
                <span className="text-gradient-animated">
                  ninguém te ensinou a vender
                </span>
                .
              </h2>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 4 — INTRODUÇÃO AO MÉTODO ═══ */
      case 3:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={BarChart3} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Zap} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <FloatingIcon icon={Target} className="bottom-[12%] right-[6%]" size={28} delay={1.5} />
            <GlowOrb className="top-0 left-1/3" />

            <Badge icon={BarChart3} text="Método" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Os grandes times comerciais{" "}
              <span className="text-gradient-animated">
                não vendem no feeling
              </span>
              .
            </h2>

            <p className="text-txt-secondary text-lg md:text-2xl mb-10 leading-relaxed max-w-3xl">
              Toda empresa que vende bem tem uma coisa que você provavelmente não
              tem:{" "}
              <span className="text-white font-bold">Um processo.</span>
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-center w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex-1 glass-card p-8 rounded-2xl text-left"
              >
                <p className="text-lg text-txt-secondary leading-relaxed">
                  Aquele vendedor que parece que{" "}
                  <span className="text-white font-bold">nasceu pra vender</span>?
                  Ele não é mais talentoso que você. Ele só tem um{" "}
                  <span className="text-gradient-animated font-bold">script</span>.
                  Um{" "}
                  <span className="text-gradient-animated font-bold">método</span>.
                  E ele segue esse método{" "}
                  <span className="text-white font-bold">todos os dias</span>.
                </p>
              </motion.div>

              {/* Mini pipeline visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 w-full"
              >
                <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0c] p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Processo de vendas</span>
                  </div>
                  {[
                    { step: "1", label: "Pesquisar", color: "bg-blue-500" },
                    { step: "2", label: "Abordar", color: "bg-purple-500" },
                    { step: "3", label: "Diagnosticar", color: "bg-cyan-500" },
                    { step: "4", label: "Follow-up", color: "bg-amber-500" },
                    { step: "5", label: "Fechar", color: "bg-emerald-500" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center gap-3 py-2"
                    >
                      <div className={`w-6 h-6 rounded-md ${s.color} flex items-center justify-center text-[10px] font-bold text-white`}>{s.step}</div>
                      <div className="flex-1 h-[1px] bg-white/[0.06]" />
                      <span className="text-xs text-txt-secondary font-semibold">{s.label}</span>
                      {i < 4 && <ChevronDown size={10} className="text-txt-muted" />}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </SlideCentered>
        );

      /* ═══ SLIDE 5 — VISÃO GERAL DO FUNIL ═══ */
      case 4:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={Target} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={TrendingUp} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <FloatingIcon icon={Trophy} className="bottom-[12%] right-[8%]" size={28} delay={1.5} color="text-emerald-400/20" />
            <GlowOrb className="top-0 left-1/3" />

            {/* Notificações de vendas nos cantos */}
            <SaleNotification name="Pet Feliz" value="R$ 1.200" delay={1.5} className="top-[12%] right-[3%] hidden lg:flex" />
            <ClientNotification icon={MessageCircle} text="Lead respondeu!" subtext="Quero saber o preço" color="text-blue-400" bgColor="bg-blue-500/10" borderColor="border-blue-500/20" delay={2} className="bottom-[15%] left-[3%] hidden lg:flex" />

            <Badge icon={Target} text="O Funil" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight leading-[1.08]">
              O funil que os{" "}
              <span className="text-gradient-animated">melhores times</span> usam
            </h2>
            <p className="text-txt-secondary text-lg md:text-xl mb-10">
              5 etapas. Cada uma com objetivo claro.
            </p>

            <FunnelPipeline />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-lg text-txt-secondary mt-8"
            >
              Isso não é mágica. É{" "}
              <span className="text-gradient-animated font-bold">engenharia</span>.
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 6 — PROSPECÇÃO ═══ */
      case 5:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Search} className="top-[6%] left-[5%]" size={36} delay={0} color="text-blue-400/20" />
            <FloatingIcon icon={Eye} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-blue-400/15" />
            <GlowOrb className="top-0 left-1/3" color="bg-blue-500/[0.03]" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-transparent pointer-events-none" />

            <Badge icon={Search} text="Etapa 1 — Prospecção" color="text-blue-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Antes de mandar mensagem,{" "}
              <span className="text-gradient-animated">pesquisa</span>.
            </h2>

            <p className="text-txt-secondary text-lg md:text-xl mb-8 max-w-2xl">
              Você não prospecta às cegas.{" "}
              <span className="text-white font-bold">Você estuda antes.</span>
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-start w-full max-w-5xl">
              {/* Checklist */}
              <div className="flex-1 space-y-3">
                {[
                  { icon: Search, text: "O que o negócio dele faz?" },
                  { icon: Eye, text: "Como está o Instagram, o site, o perfil?" },
                  { icon: Target, text: "O que está fraco? Onde está a oportunidade?" },
                  { icon: Users, text: "Tem alguém em comum que pode abrir a porta?" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/[0.04] border border-blue-500/10 text-left hover:bg-blue-500/[0.08] transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <span className="text-sm text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Calango Message Card + iPhone mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 space-y-4 w-full"
              >
                <CalangoMessageCard
                  title="Pergunta simples"
                  badge="CURIOSIDADE"
                  badgeColor="text-blue-400 bg-blue-400/10 border-blue-400/20"
                  messages={[
                    "Oi Fernanda",
                    "",
                    "Posso te fazer uma pergunta rápida sobre a Advocacia Lopes e Souza?",
                  ]}
                  delay={0.6}
                />
                <CalangoMessageCard
                  title="Apontar oportunidade"
                  badge="DOR"
                  badgeColor="text-red-400 bg-red-400/10 border-red-400/20"
                  messages={[
                    "Perguntei porque vejo muita empresa boa que perde cliente por causa da apresentação.",
                    "",
                    "O produto é bom, mas o visual não passa isso.",
                    "",
                    "É justamente nisso que eu trabalho.",
                  ]}
                  delay={0.8}
                />
              </motion.div>
            </div>

            <PopupToast icon={Search} text="Contexto antes de oferta!" className="bottom-[6%] right-[8%]" delay={1.2} bgColor="bg-blue-500/10" borderColor="border-blue-500/20" color="text-blue-400" />
          </div>
        );

      /* ═══ SLIDE 7 — PRIMEIRA ABORDAGEM ═══ */
      case 6:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Send} className="top-[6%] left-[5%]" size={36} delay={0} color="text-purple-400/20" />
            <FloatingIcon icon={MessageCircle} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-purple-400/15" />
            <GlowOrb className="top-0 right-1/3" color="bg-purple-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/10 via-transparent to-transparent pointer-events-none" />

            <Badge icon={Send} text="Etapa 2 — Abordagem" color="text-purple-400" />

            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight leading-[1.08]">
              O objetivo da primeira mensagem{" "}
              <span className="text-red-400">não é vender</span>.
            </h2>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl mb-8 text-gradient-animated">
              É fazer o lead responder.
            </h3>

            <div className="flex flex-col lg:flex-row gap-6 items-center w-full max-w-5xl">
              {/* iPhone com conversa WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <IPhoneMockup size="normal" className="w-[260px]">
                  <WAHeader name="Fernanda L." status="online" />
                  <div className="p-3 bg-[#0b141a] min-h-[320px]">
                    <WAChatBubble sent text="Oi Fernanda! Vi que a Advocacia Lopes e Souza lançou aquele serviço novo semana passada. Tão rodando tráfego pra isso ou tá só orgânico?" time="10:32" delay={0.5} />
                    <WAChatBubble text="Oi! Tudo bom? Tá só no orgânico ainda, a gente não sabe muito bem como fazer isso haha" time="10:45" delay={1} />
                    <WAChatBubble sent text="Imaginei! É super comum. Posso te dar um toque rápido sobre isso?" time="10:46" delay={1.4} />
                    <WAChatBubble text="Claro! Pode falar sim" time="10:48" delay={1.8} />
                  </div>
                </IPhoneMockup>
                <ClientNotification icon={CheckCheck} text="Fernanda respondeu!" subtext="em 13 min" color="text-emerald-400" bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" delay={2.2} className="-bottom-4 -right-4" />
              </motion.div>

              {/* Tips + Calango Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 space-y-4 w-full"
              >
                <div className="glass-card p-5 rounded-2xl text-left">
                  <p className="text-base text-txt-secondary leading-relaxed">
                    <span className="text-white font-bold">Curta.</span>{" "}
                    <span className="text-white font-bold">Específica.</span>{" "}
                    Não se apresenta. Não vende nada. Só faz uma pergunta que mostra que{" "}
                    <span className="text-purple-400 font-bold">você viu o negócio dele</span>.
                  </p>
                </div>

                <CalangoMessageCard
                  title="Pergunta simples"
                  badge="CURIOSIDADE"
                  badgeColor="text-purple-400 bg-purple-400/10 border-purple-400/20"
                  messages={[
                    "Oi Fernanda",
                    "",
                    "Posso te fazer uma pergunta rápida sobre a Advocacia Lopes e Souza?",
                  ]}
                  delay={0.7}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="p-4 rounded-xl bg-purple-500/[0.06] border border-purple-500/15 text-left"
                >
                  <p className="text-sm text-txt-secondary">
                    Isso abre conversa. E conversa abre{" "}
                    <span className="text-gradient-animated font-bold">venda</span>.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        );

      /* ═══ SLIDE 8 — DIAGNÓSTICO ═══ */
      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Heart} className="top-[6%] left-[5%]" size={36} delay={0} color="text-cyan-400/20" />
            <FloatingIcon icon={MessageCircle} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-cyan-400/15" />
            <GlowOrb className="top-0 left-1/3" color="bg-cyan-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

            <Badge icon={MessageCircle} text="Etapa 3 — Diagnóstico" color="text-cyan-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Você é{" "}
              <span className="text-gradient-animated">médico</span>, não
              vendedor de loja.
            </h2>

            <p className="text-txt-secondary text-lg md:text-xl mb-8 max-w-2xl">
              Quando o lead responde, você{" "}
              <span className="text-red-400 font-bold">não manda proposta</span>.
              Você pergunta. Você ouve. Você entende a{" "}
              <span className="text-white font-bold">dor real</span>.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 items-start w-full max-w-5xl">
              {/* Perguntas de diagnóstico */}
              <div className="flex-1 space-y-3 w-full">
                {[
                  "Me conta... como tá funcionando a parte de [tema] hoje?",
                  "Vocês já tentaram alguma coisa pra resolver isso?",
                  "Se nada mudar nos próximos 6 meses, como fica?",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/10 text-left hover:bg-cyan-500/[0.08] transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-sm text-txt-secondary italic">
                      &ldquo;{text}&rdquo;
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-4 rounded-xl bg-accent/[0.04] border border-accent/10"
                >
                  <p className="text-sm font-bold text-white text-left">
                    O diagnóstico é onde você constrói{" "}
                    <span className="text-gradient-animated">confiança</span> e
                    entende onde dói de verdade.
                  </p>
                </motion.div>
              </div>

              {/* iPhone com conversa de diagnóstico */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <IPhoneMockup size="normal" className="w-[260px]">
                  <WAHeader name="Fernanda L." status="online" />
                  <div className="p-3 bg-[#0b141a] min-h-[320px]">
                    <WAChatBubble sent text="Fernanda, me conta uma coisa... como vocês tão fazendo pra captar clientes novos hoje?" time="14:20" delay={0.5} />
                    <WAChatBubble text="Olha, é basicamente indicação. Quando vem, vem. Quando não vem..." time="14:25" delay={0.9} />
                    <WAChatBubble sent text="E se nada mudar nos próximos 6 meses, como fica?" time="14:26" delay={1.3} />
                    <WAChatBubble text="Complicado. A gente precisa crescer, não pode ficar dependendo só disso" time="14:30" delay={1.7} />
                    <WAChatBubble sent text="Entendo perfeitamente. Posso te mostrar algo que pode ajudar com isso?" time="14:31" delay={2.1} read />
                  </div>
                </IPhoneMockup>
              </motion.div>
            </div>
          </div>
        );

      /* ═══ SLIDE 9 — CLIENTE NÃO RESPONDEU ═══ */
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-amber-500/[0.04]" size="w-[700px] h-[700px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none" />

            {/* iPhones nos cantos mostrando mensagem ignorada */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute left-[3%] top-[12%] hidden lg:block"
            >
              <IPhoneMockup size="small" className="w-[150px]">
                <WAHeader name="Lead 1" status="ult. vez há 3h" />
                <div className="p-2 bg-[#0b141a]">
                  <WAChatBubble sent text="Oi! Vi que vocês lançaram..." time="09:15" delay={0.8} read={false} />
                  <div className="text-center py-4">
                    <Clock size={16} className="text-amber-400/40 mx-auto mb-1" />
                    <p className="text-[9px] text-amber-400/40">Sem resposta</p>
                  </div>
                </div>
              </IPhoneMockup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute right-[3%] bottom-[15%] hidden lg:block"
            >
              <IPhoneMockup size="small" className="w-[150px]">
                <WAHeader name="Lead 2" status="ult. vez ontem" />
                <div className="p-2 bg-[#0b141a]">
                  <WAChatBubble sent text="Posso te fazer uma pergunta?" time="14:30" delay={1} read={false} />
                  <div className="text-center py-4">
                    <PhoneOff size={16} className="text-amber-400/40 mx-auto mb-1" />
                    <p className="text-[9px] text-amber-400/40">Visualizado</p>
                  </div>
                </div>
              </IPhoneMockup>
            </motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px] relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-8"
              >
                <Clock size={32} className="text-amber-400" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                Ele não respondeu.{" "}
                <span className="text-amber-400">E agora?</span>
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-8 rounded-2xl mb-8 border-amber-500/10"
              >
                <p className="font-poppins font-black text-3xl sm:text-4xl text-white mb-4">
                  Calma. Ele não te odiou.
                </p>
                <p className="text-xl text-txt-secondary">
                  Ele só está com a{" "}
                  <span className="text-white font-bold">vida acontecendo</span>.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-txt-secondary max-w-2xl mx-auto"
              >
                Quanto tempo <span className="text-white font-bold">você</span>{" "}
                demora pra responder mensagem de família? Tem alguma
                mensagem que você abriu, viu, e{" "}
                <span className="text-amber-400 font-bold">não respondeu até hoje</span>?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 10 — NÃO É REJEIÇÃO ═══ */
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            {/* Ilustrações de cenários flutuando */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.5 }} className="absolute left-[5%] top-[15%] hidden lg:flex flex-col gap-2">
              {[
                { icon: "🚌", text: "No ônibus" },
                { icon: "💼", text: "Em reunião" },
                { icon: "👶", text: "Com o filho" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.3 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-[10px] text-txt-muted">{s.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* iPhone com notificação não lida */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 3 }}
              animate={{ opacity: 0.6, x: 0, rotate: 3 }}
              transition={{ delay: 1 }}
              className="absolute right-[4%] top-[20%] hidden lg:block"
            >
              <div className="rounded-2xl bg-[#111] border border-white/[0.1] p-3 w-[200px] shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <MessageSquare size={10} className="text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-white font-bold">WhatsApp</span>
                  <span className="text-[9px] text-txt-muted ml-auto">agora</span>
                </div>
                <p className="text-[10px] text-txt-secondary">Designer: Posso te fazer uma pergunta rápida...</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-[9px] text-txt-muted bg-white/[0.04] px-2 py-0.5 rounded">Marcar como lido</span>
                  <span className="text-[9px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Depois</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px] relative z-10"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                A vida dele{" "}
                <span className="text-gradient-animated">não parou</span>
                <br />
                quando você mandou a mensagem.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 max-w-2xl mx-auto"
              >
                {[
                  "Ele abriu sua mensagem no ônibus...",
                  "No meio de uma reunião...",
                  "Quando o filho tava chorando...",
                  "E falou: \"depois eu vejo isso\".",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-txt-secondary">{text}</p>
                  </motion.div>
                ))}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-2xl md:text-3xl font-poppins font-bold text-white pt-6"
                >
                  Isso não é rejeição.{" "}
                  <span className="text-gradient-animated">É o dia a dia.</span>
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 11 — O ESPELHO ═══ */
      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-red-500/[0.04]" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Às vezes você acha que está sendo{" "}
                <span className="text-red-400">rejeitado</span>.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-10 text-txt-secondary">
                Mas a real é outra.
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-8 rounded-2xl border-red-500/10 max-w-2xl mx-auto"
              >
                <p className="text-lg text-txt-secondary leading-relaxed">
                  O problema não é o silêncio do lead. O problema é o que{" "}
                  <span className="text-white font-bold">
                    você faz com esse silêncio na sua cabeça
                  </span>
                  . Você cria uma história de rejeição que{" "}
                  <span className="text-red-400 font-bold">não existe</span>. E
                  aí você para de mandar mensagem. E o mês passa. E o cliente
                  não aparece. Porque{" "}
                  <span className="text-white font-bold">
                    você desistiu de um lead que só estava ocupado
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 12 — FOLLOW-UP ═══ */
      case 11:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={RefreshCw} className="top-[6%] left-[5%]" size={36} delay={0} color="text-amber-400/20" />
            <FloatingIcon icon={CalendarClock} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-amber-400/15" />
            <GlowOrb className="top-0 left-1/3" color="bg-amber-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-transparent pointer-events-none" />

            <Badge icon={RefreshCw} text="Etapa 4 — Follow-up" color="text-amber-400" />

            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight leading-[1.08]">
              <span className="text-gradient-animated">80%</span> das vendas
              acontecem depois do 5º contato.
            </h2>
            <p className="text-lg md:text-xl text-txt-secondary mb-8">
              A maioria das pessoas{" "}
              <span className="text-red-400 font-bold">desiste no 2º</span>.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 items-start w-full max-w-5xl">
              {/* Cadência visual */}
              <div className="flex-1 space-y-2.5 w-full">
                {[
                  { day: "Dia 0", text: "Primeira abordagem", color: "border-blue-500/20 bg-blue-500/[0.04]", dot: "bg-blue-400" },
                  { day: "Dia 2", text: "\"E aí, conseguiu ver?\"", color: "border-purple-500/20 bg-purple-500/[0.04]", dot: "bg-purple-400" },
                  { day: "Dia 5", text: "Manda um insight útil", color: "border-cyan-500/20 bg-cyan-500/[0.04]", dot: "bg-cyan-400" },
                  { day: "Dia 10", text: "Comenta algo que ele postou", color: "border-amber-500/20 bg-amber-500/[0.04]", dot: "bg-amber-400" },
                  { day: "Dia 15", text: "Recontextualiza com novidade", color: "border-accent/20 bg-accent/[0.04]", dot: "bg-accent" },
                  { day: "Dia 30", text: "Último contato com leveza", color: "border-emerald-500/20 bg-emerald-500/[0.04]", dot: "bg-emerald-400" },
                ].map(({ day, text, color, dot }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${color} hover:scale-[1.02] transition-transform`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                    <span className="text-xs font-bold text-white min-w-[55px]">{day}</span>
                    <ArrowRight size={12} className="text-txt-muted flex-shrink-0" />
                    <span className="text-sm text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Calango Message Cards de follow-up */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 space-y-3 w-full"
              >
                <CalangoMessageCard
                  title="Ping simples"
                  badge="LEVE"
                  badgeColor="text-amber-400 bg-amber-400/10 border-amber-400/20"
                  messages={["Oi Fernanda", "", "Minha mensagem chegou aí?"]}
                  delay={0.6}
                />
                <CalangoMessageCard
                  title="Verificar proposta"
                  badge="CHECK"
                  badgeColor="text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
                  messages={["Oi Fernanda", "", "Conseguiu dar uma olhada na proposta?"]}
                  delay={0.8}
                />
                <CalangoMessageCard
                  title="Ajuste possível"
                  badge="FLEXÍVEL"
                  badgeColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                  messages={["Oi Fernanda", "", "Se quiser ajustar algo na proposta me fala.", "", "Dá para adaptar algumas coisas."]}
                  delay={1}
                />
              </motion.div>
            </div>

            <PopupToast icon={Repeat} text="Nunca mande mensagem vazia!" className="bottom-[5%] right-[8%]" delay={1.4} bgColor="bg-amber-500/10" borderColor="border-amber-500/20" color="text-amber-400" />
          </div>
        );

      /* ═══ SLIDE 13 — O PROBLEMA REAL ═══ */
      case 12:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <FloatingIcon icon={AlertTriangle} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-red-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/15 via-transparent to-transparent pointer-events-none" />

            {/* Mockup de caos: ícones de apps flutuando */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.8 }} className="absolute right-[3%] top-[12%] hidden lg:flex flex-col gap-2">
              {[
                { icon: Monitor, label: "Google Sheets", color: "text-emerald-400" },
                { icon: Smartphone, label: "WhatsApp", color: "text-green-400" },
                { icon: Mail, label: "Email", color: "text-blue-400" },
                { icon: Brain, label: "Cabeça", color: "text-red-400" },
              ].map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <app.icon size={12} className={app.color} />
                  <span className="text-[10px] text-txt-muted">{app.label}</span>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-center">
                <p className="text-[10px] text-red-400/60 font-bold">FRAGMENTADO</p>
              </motion.div>
            </motion.div>

            <Badge icon={AlertTriangle} text="O problema real" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Você sabe o que fazer.{" "}
              <span className="text-red-400">Mas não faz.</span>
            </h2>
            <p className="text-2xl text-txt-secondary mb-8">Por quê?</p>

            <div className="space-y-3 w-full max-w-2xl">
              {[
                { icon: AlertTriangle, text: "Falta de ferramentas práticas pra organizar tudo" },
                { icon: Brain, text: "Planilha do lado, WhatsApp do outro, cabeça em mil lugares" },
                { icon: Search, text: "Não sabe quem já foi prospectado, quem respondeu, quem precisa de follow-up" },
                { icon: Timer, text: "Sem controle, você esquece. Sem método, você para." },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-left hover:bg-red-500/[0.08] transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-red-400" />
                  </div>
                  <span className="text-sm text-txt-secondary">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-txt-secondary mt-8 max-w-xl"
            >
              O problema não é preguiça. É{" "}
              <span className="text-gradient-animated font-bold">fricção</span>.
            </motion.p>
          </div>
        );

      /* ═══ SLIDE 14 — CRM NA UNHA ═══ */
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <FloatingIcon icon={Flame} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <GlowOrb className="top-0 left-1/3" color="bg-red-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/15 via-transparent to-transparent pointer-events-none" />

            <Badge icon={Flame} text="O pesadelo do DIY" color="text-red-400" />

            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-8 tracking-tight leading-[1.08]">
              Como é tentar fazer isso{" "}
              <span className="text-red-400">sem ferramenta</span>:
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 items-start w-full max-w-5xl">
              {/* Lista de sofrimento */}
              <div className="flex-1 w-full">
                {[
                  "Abre o Google Sheets e coloca os contatos um por um",
                  "Copia o número e vai manualmente no WhatsApp",
                  "Copia a mensagem, cola, manda",
                  "Volta no Sheets, marca que o contato foi feito",
                  "No dia seguinte, procura quem precisa de follow-up",
                  "Repete tudo isso. Todos. Os. Dias.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3.5 border-b border-white/[0.04] ${i === 5 ? "border-b-0" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center font-poppins font-black text-xs flex-shrink-0 ${
                      i === 5 ? "bg-red-500/20 text-red-400" : "bg-white/[0.06] text-txt-muted"
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-sm text-left ${i === 5 ? "text-red-400 font-bold" : "text-txt-secondary"}`}>
                      {text}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 p-4 rounded-xl bg-red-500/[0.06] border border-red-500/15"
                >
                  <p className="text-sm text-txt-secondary">
                    No terceiro dia você para. Na segunda semana a planilha está{" "}
                    <span className="text-red-400 font-bold">abandonada</span>.
                  </p>
                </motion.div>
              </div>

              {/* Macbook mockup com planilha bagunçada */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 w-full"
              >
                <MacbookMockup>
                  <div className="p-3">
                    {/* Mock planilha */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-[9px] text-txt-muted ml-2">planilha_clientes_v3_FINAL.xlsx</span>
                    </div>
                    <div className="rounded-md border border-white/[0.06] overflow-hidden">
                      <div className="grid grid-cols-4 text-[8px] font-bold text-txt-muted bg-white/[0.03]">
                        <div className="px-2 py-1.5 border-r border-b border-white/[0.04]">Nome</div>
                        <div className="px-2 py-1.5 border-r border-b border-white/[0.04]">WhatsApp</div>
                        <div className="px-2 py-1.5 border-r border-b border-white/[0.04]">Status</div>
                        <div className="px-2 py-1.5 border-b border-white/[0.04]">Follow-up</div>
                      </div>
                      {[
                        { n: "Ana S.", w: "11 9****", s: "Mandei msg", f: "??" },
                        { n: "Pedro", w: "21 9****", s: "Acho q resp", f: "Não sei" },
                        { n: "Café X", w: "Perdi", s: "???", f: "..." },
                        { n: "Loja Y", w: "11 9****", s: "", f: "" },
                        { n: "???", w: "", s: "", f: "" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-4 text-[8px] text-txt-muted/60">
                          <div className="px-2 py-1.5 border-r border-b border-white/[0.03]">{row.n}</div>
                          <div className="px-2 py-1.5 border-r border-b border-white/[0.03]">{row.w}</div>
                          <div className="px-2 py-1.5 border-r border-b border-white/[0.03]">{row.s}</div>
                          <div className="px-2 py-1.5 border-b border-white/[0.03]">{row.f}</div>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="mt-3 text-center"
                    >
                      <p className="text-[10px] text-red-400/60 font-bold">ÚLTIMA EDIÇÃO: HÁ 23 DIAS</p>
                    </motion.div>
                  </div>
                </MacbookMockup>
              </motion.div>
            </div>
          </div>
        );

      /* ═══ SLIDE 15 — CALANGO STUDIO ═══ */
      case 14:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <FloatingIcon icon={Sparkles} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={Zap} className="top-[12%] right-[10%]" size={36} delay={1} />
            <FloatingIcon icon={Rocket} className="bottom-[18%] left-[12%]" size={32} delay={2} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.05]" size="w-[700px] h-[700px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-emerald-500/[0.02] pointer-events-none" />

            {/* Sale popups flutuantes */}
            <SaleNotification name="Andre Santos" value="R$ 1.000" delay={1.5} className="top-[12%] right-[3%] hidden lg:flex" />
            <SaleNotification name="João Paz" value="R$ 800" delay={2} className="bottom-[20%] left-[3%] hidden lg:flex" />
            <ClientNotification icon={Bell} text="Novo prospect adicionado" subtext="Pet Feliz" color="text-blue-400" bgColor="bg-blue-500/10" borderColor="border-blue-500/20" delay={2.5} className="top-[25%] left-[2%] hidden lg:flex" />

            <Badge icon={Sparkles} text="A Solução" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-[1.08]">
              E se tudo isso fosse{" "}
              <span className="text-gradient-animated">num lugar só</span>?
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-gradient-animated font-black text-3xl md:text-4xl font-poppins mb-2">
                Calango Studio
              </p>
              <p className="text-lg text-txt-secondary">
                A plataforma que o designer precisava ter{" "}
                <span className="text-white font-bold">desde sempre</span>.
              </p>
            </motion.div>

            {/* Macbook com Pipeline Board */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-4xl"
            >
              <MacbookMockup>
                <PipelineBoard />
              </MacbookMockup>
            </motion.div>

            <PopupToast icon={Zap} text="Tudo num lugar só!" className="bottom-[6%] right-[8%]" delay={1.2} />
          </div>
        );

      /* ═══ SLIDE 16 — SONHOS E REALIDADE ═══ */
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <Badge icon={Lightbulb} text="Momento de decisão" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                Você chegou até aqui.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-txt-secondary mb-10">
                Agora a pergunta que importa é:
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-gradient-animated"
              >
                O que você vai fazer com isso?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 17 — PADRÃO A QUEBRAR ═══ */
      case 16:
        return (
          <SlideCentered maxW="max-w-[1000px]">
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-red-500/[0.03]" />

            <Badge icon={ShieldAlert} text="Atenção" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tight leading-[1.08]">
              A mudança está{" "}
              <span className="text-gradient-animated">mais perto</span> do que
              parece.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border-red-500/10 w-full"
            >
              <p className="text-lg md:text-xl text-txt-secondary leading-relaxed mb-6">
                Mas existe uma chance grande de que você saia dessa aula e tente
                fazer tudo isso{" "}
                <span className="text-red-400 font-bold">sozinho</span>. Igual
                tentou até hoje.
              </p>
              <div className="space-y-3">
                {[
                  "Vai quebrar a cabeça pra montar uma planilha",
                  "Vai tentar criar um processo do zero",
                  "Vai gastar horas num problema que já tem solução",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl font-poppins font-bold text-white mt-8"
            >
              O problema nunca foi{" "}
              <span className="text-gradient-animated">saber o que fazer</span>.
              <br />É ter o sistema que te{" "}
              <span className="text-white">obriga a fazer</span>.
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 18 — OS DOIS PERFIS ═══ */
      case 17:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={Users} className="top-[6%] left-[5%]" size={36} delay={0} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Users} text="Dois tipos" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-12 tracking-tight leading-[1.08]">
              Tem{" "}
              <span className="text-gradient-animated">dois tipos</span> de
              profissional nessa sala.
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
              {/* Investe */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-emerald-400">
                    Profissional que Investe
                  </h3>
                </div>
                {[
                  "Enxerga ferramenta como alavanca",
                  "Coloca dinheiro no que acelera resultado",
                  "Toma decisão agora",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.04]">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </div>
                ))}
              </motion.div>

              {/* VS */}
              <div className="flex items-center justify-center lg:flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center"
                >
                  <span className="font-poppins font-black text-sm text-txt-muted">VS</span>
                </motion.div>
              </div>

              {/* Economiza */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle size={22} className="text-red-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-red-400">
                    Profissional que Economiza
                  </h3>
                </div>
                {[
                  "Poupa na empresa",
                  "Gasta em coisa que não devolve nada",
                  "Acha que vai dar conta sozinho",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.04]">
                    <AlertTriangle size={16} className="text-red-400/60 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </SlideCentered>
        );

      /* ═══ SLIDE 19 — ABRINDO O PITCH ═══ */
      case 18:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={Brain} className="top-[12%] right-[10%]" size={36} delay={1} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tight leading-[1.08]">
                Você percebeu hoje que prospectar é{" "}
                <span className="text-gradient-animated">simples</span>.
              </h2>

              <div className="space-y-4 max-w-2xl mx-auto text-left">
                {[
                  "Você entendeu que precisa de um método que te prenda nele.",
                  "Você entendeu que a IA está crescendo num ritmo que não espera ninguém.",
                  "E que quem não aprender a gerar resultado com ela vai ficar para trás.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl font-poppins font-bold text-white mt-10"
              >
                A questão agora não é{" "}
                <span className="text-gradient-animated">se</span> você vai
                mudar. É{" "}
                <span className="text-gradient-animated">quando</span>.
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 20 — URGÊNCIA REAL ═══ */
      case 19:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.05]" size="w-[800px] h-[800px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-10 shadow-glow"
              >
                <Flame size={40} className="text-black" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Hoje você está a um passo de{" "}
                <span className="text-red-400">ficar pra trás</span>.
              </h2>
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08]">
                Mas também está a um passo de{" "}
                <span className="text-gradient-animated">sair na frente</span>.
              </h2>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 21 — INTENSIFICANDO A DOR ═══ */
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-red-500/[0.03]" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight leading-[1.08]">
                Você está aqui porque{" "}
                <span className="text-red-400">procrastinou muito</span>.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 text-xl md:text-2xl text-txt-secondary mb-10"
              >
                <p>Ficou sem método.</p>
                <p>Teve medo de rejeição.</p>
                <p>Teve medo do futuro.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-accent/[0.06] border border-accent/15 max-w-xl mx-auto"
              >
                <p className="text-xl md:text-2xl font-poppins font-bold text-white">
                  Agora você tem um{" "}
                  <span className="text-gradient-animated">método</span>. Tem uma{" "}
                  <span className="text-gradient-animated">ferramenta</span>. Tem
                  um <span className="text-gradient-animated">caminho</span>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 22 — A PROPOSTA ═══ */
      case 21:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Gift} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Sparkles} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Gift} text="Proposta" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              Eu tenho uma{" "}
              <span className="text-gradient-animated">proposta</span> pra você.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl w-full max-w-2xl text-left"
            >
              <p className="text-lg text-txt-secondary mb-6 leading-relaxed">
                Nesse semestre, na comunidade, eu vou te ensinar:
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Como criar sites e pequenas plataformas com IA e vender isso pra clientes" },
                  { icon: Target, text: "Como prospectar todos os dias com processo real" },
                  { icon: Rocket, text: "Como usar as ferramentas que colocam você à frente" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-accent/[0.04] border border-accent/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="text-base text-txt-secondary leading-relaxed">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-txt-secondary mt-8"
            >
              E se você aproveitar a oferta de hoje,{" "}
              <span className="text-gradient-animated font-bold">
                vai sair muito na frente
              </span>
              .
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 23 — A OFERTA ═══ */
      case 22:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <FloatingIcon icon={Crown} className="top-[6%] left-[5%]" size={38} delay={0} />
            <FloatingIcon icon={Star} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-accent/[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />

            <Badge icon={Crown} text="Oferta Exclusiva" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tight leading-[1.08]">
              O que está na mesa{" "}
              <span className="text-gradient-animated">hoje</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full max-w-5xl">
              {/* Tabela de valores com economia */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 rounded-2xl border border-white/[0.08] overflow-hidden"
              >
                <div className="bg-white/[0.03] px-5 py-3 border-b border-white/[0.06]">
                  <div className="flex justify-between text-xs font-bold text-txt-muted uppercase tracking-wider">
                    <span>Produto</span>
                    <span>Valor Normal</span>
                  </div>
                </div>
                {[
                  { name: "Comunidade VIP", value: "R$ 997,00", icon: Crown },
                  { name: "Calango Studio", value: "R$ 169,90/mês", icon: Zap },
                  { name: "Designer Criador", value: "R$ 697,00", icon: Sparkles },
                ].map(({ name, value, icon: Icon }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={14} className="text-accent" />
                      <span className="text-sm text-white font-bold">{name}</span>
                    </div>
                    <span className="text-sm text-txt-secondary line-through">{value}</span>
                  </motion.div>
                ))}
                {/* Total economia */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="px-5 py-4 bg-red-500/[0.04]"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-txt-muted font-bold">Total separado</span>
                    <span className="text-lg text-red-400 font-bold line-through">R$ 1.863,90</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Oferta especial */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex-1 relative rounded-[28px] bg-black/50 border-2 border-accent/40 p-6 lg:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.12)] flex flex-col justify-center"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black uppercase tracking-[0.18em] shadow-lg animate-pulse">
                  Apenas Hoje
                </span>

                <p className="text-sm text-txt-secondary mb-4 mt-2">
                  Comunidade VIP + Designer Criador + 1 mês gratuito de Calango Studio
                </p>

                <div className="flex items-baseline gap-1 mb-2 justify-center">
                  <span className="text-base text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-6xl text-gradient-animated">597</span>
                  <span className="text-base text-txt-muted">,00</span>
                </div>

                {/* Economia visual */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="p-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 mb-4"
                >
                  <p className="text-sm text-emerald-400 font-bold">
                    Economia de R$ 1.266,90
                  </p>
                  <p className="text-[10px] text-emerald-400/60">
                    68% de desconto no pacote completo
                  </p>
                </motion.div>

                <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  APENAS HOJE
                </div>
              </motion.div>
            </div>
          </div>
        );

      /* ═══ SLIDE 24 — A MATEMÁTICA (Calculadora Interativa) ═══ */
      case 23:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
            <FloatingIcon icon={Calculator} className="top-[6%] left-[5%]" size={36} delay={0} color="text-emerald-400/20" />
            <FloatingIcon icon={TrendingUp} className="top-[10%] right-[7%]" size={30} delay={0.8} color="text-emerald-400/15" />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-emerald-500/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/10 via-transparent to-transparent pointer-events-none" />

            <Badge icon={Calculator} text="Calculadora de Resultado" color="text-emerald-400" />

            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight leading-[1.08]">
              Para e{" "}
              <span className="text-gradient-animated">pensa comigo</span>.
            </h2>
            <p className="text-base text-txt-secondary mb-8 max-w-xl">
              5 contatos por dia. Ajuste os valores e veja o resultado.
            </p>

            <RevenueCalculator />

            <PopupToast icon={CircleDollarSign} text="O único risco é não tentar" className="bottom-[5%] right-[8%]" delay={1} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
          </div>
        );

      /* ═══ SLIDE 25 — OBJEÇÃO DO DINHEIRO ═══ */
      case 24:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[800px]"
            >
              <Badge icon={CreditCard} text="Objeção" />

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-8 tracking-tight leading-[1.08]">
                &ldquo;De onde vou tirar esse valor?&rdquo;
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 rounded-2xl text-left"
              >
                <p className="text-lg text-txt-secondary leading-relaxed mb-4">
                  Quando você se comprometer de verdade com uma ferramenta, com
                  um processo, com uma meta, o ser humano{" "}
                  <span className="text-white font-bold">
                    encontra o caminho
                  </span>
                  .
                </p>
                <p className="text-lg text-txt-secondary leading-relaxed">
                  Você já encontrou dinheiro pra coisa que{" "}
                  <span className="text-gradient-animated font-bold">
                    queria de verdade
                  </span>{" "}
                  antes, não encontrou?
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 26 — FECHAMENTO FINAL ═══ */
      case 25:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.05]" size="w-[800px] h-[800px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-10 shadow-glow"
              >
                <Crown size={40} className="text-black" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Essa oferta é{" "}
                <span className="text-gradient-animated">única</span>.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-txt-secondary mb-10">
                Exclusiva. Pra hoje. Pra quem toma decisão{" "}
                <span className="text-white font-bold">agora</span>.
              </h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-txt-secondary max-w-2xl mx-auto leading-relaxed"
              >
                Daqui 6 meses, você quer olhar pra trás e ver que{" "}
                <span className="text-gradient-animated font-bold">
                  aproveitou esse momento
                </span>
                ? Ou quer olhar e ver que estava com medo, e que esse medo
                custou{" "}
                <span className="text-red-400 font-bold">
                  clientes, renda e tempo
                </span>
                ?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 27 — CALL TO ACTION ═══ */
      case 26:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[6%] left-[5%]" size={40} delay={0} />
            <FloatingIcon icon={Crown} className="top-[8%] right-[6%]" size={34} delay={0.5} />
            <FloatingIcon icon={Sparkles} className="bottom-[12%] left-[8%]" size={30} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-[10%] right-[5%]" size={28} delay={0.3} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.04]" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg w-full"
            >
              <Badge icon={Rocket} text="Próximos Passos" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-tight">
                O único passo que falta é o{" "}
                <span className="text-gradient-animated">seu</span>.
              </h2>

              <div className="space-y-4 mb-10 text-left">
                {[
                  { num: "1", text: "Entra em contato agora" },
                  { num: "2", text: "Garante sua vaga com a oferta de hoje" },
                  { num: "3", text: "Começa a prospectar amanhã cedo" },
                ].map(({ num, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent/[0.06] border border-accent/15"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-accent-end flex items-center justify-center font-poppins font-black text-black text-sm flex-shrink-0">
                      {num}
                    </div>
                    <span className="text-base font-bold text-white">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card p-6 rounded-2xl mb-8"
              >
                <p className="text-lg text-txt-secondary">
                  Você aprendeu o método. Você tem a ferramenta. Você tem o
                  caminho.
                </p>
              </motion.div>

              {/* CTA card com oferta */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="relative rounded-[28px] bg-black/50 border border-accent/30 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.08)]"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black uppercase tracking-[0.18em] shadow-lg animate-pulse">
                  Oferta Exclusiva
                </span>

                <div className="flex items-baseline gap-1 mb-4 mt-2 justify-center">
                  <span className="text-base text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-5xl text-gradient-animated">
                    597
                  </span>
                  <span className="text-base text-txt-muted">,00</span>
                </div>

                <p className="text-sm text-txt-secondary mb-6">
                  Comunidade VIP + Designer Criador + 1 mês de Calango Studio
                </p>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center py-5 rounded-2xl font-black text-lg tracking-[0.14em] uppercase bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] transition-all duration-300"
                >
                  Quero Garantir Minha Vaga
                </motion.button>

                <p className="text-xs text-txt-muted mt-5 uppercase tracking-wider font-bold flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Apenas hoje — vagas limitadas
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="h-screen w-screen bg-bg-primary relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[200px]" />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="font-poppins font-black text-base text-white">
            CALANGO<span className="text-gradient-animated">.STUDIO</span>
          </span>
          <div className="flex items-center gap-4">
            <ProgressBar current={step} total={totalSteps} />
            <span className="text-xs text-txt-muted font-bold tabular-nums">
              {step + 1}/{totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Slide content */}
      <div className="h-screen flex items-center justify-center pt-14 pb-20 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 28 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 },
            }}
            className="w-full h-full flex items-center justify-center relative"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      {step > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-txt-secondary hover:text-white hover:border-white/15 transition-all text-sm font-bold"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Voltar</span>
            </motion.button>

            {step < totalSteps - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={goNext}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Continuar</span>
                <ChevronRight size={18} />
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
