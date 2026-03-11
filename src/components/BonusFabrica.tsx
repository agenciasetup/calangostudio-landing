"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Clock,
  Users,
  MessageCircle,
  Send,
  DollarSign,
  Star,
  Flame,
  Quote,
  Target,
  BarChart3,
} from "lucide-react";

/* ── Kanban columns ────────────────────────────────────────── */
const pipeline = [
  {
    title: "Prospecção",
    color: "from-blue-500 to-cyan-400",
    dot: "bg-blue-400",
    cards: [
      { name: "Studio Bella", tag: "Instagram" },
      { name: "Advocacia Prado", tag: "Indicação" },
    ],
  },
  {
    title: "Contato",
    color: "from-amber-400 to-orange-500",
    dot: "bg-amber-400",
    cards: [
      { name: "Clínica Renova", tag: "WhatsApp" },
      { name: "Pet House", tag: "Email" },
    ],
  },
  {
    title: "Proposta",
    color: "from-purple-500 to-violet-500",
    dot: "bg-purple-400",
    cards: [{ name: "Prado Advocacia", tag: "R$ 1.200" }],
  },
  {
    title: "Fechado",
    color: "from-emerald-400 to-green-500",
    dot: "bg-emerald-400",
    cards: [
      { name: "Barbearia Kings", tag: "R$ 800" },
      { name: "Dr. Camila", tag: "R$ 1.500" },
    ],
  },
];

const features = [
  { icon: Users, text: "Cadastre sua lista de prospecção" },
  { icon: Send, text: "Mande mensagens prontas para fechar a venda" },
  { icon: BarChart3, text: "Todas etapas do funil de venda para fechar cliente" },
];

export default function BonusFabrica() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[700px] md:h-[1100px] bg-emerald-500/[0.035] rounded-full blur-[150px] md:blur-[250px]" />
      </div>

      {/* ── Floating dollar icon ── */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[8%] md:right-[12%] hidden md:flex w-16 h-16 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.1)]"
      >
        <DollarSign size={28} className="text-emerald-400/60" />
      </motion.div>

      {/* ── Floating target icon ── */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 left-[6%] md:left-[10%] hidden md:flex w-14 h-14 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.08)]"
      >
        <Target size={24} className="text-emerald-400/50" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] bonus-badge-glow">
            <Flame size={14} className="text-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Bônus exclusivo de lançamento
            </span>
            <Clock size={13} className="text-emerald-400/60" />
          </div>
        </motion.div>

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-txt-secondary text-sm md:text-base mb-2">
            Apenas nessa oferta, você terá acesso ao
          </p>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="bonus-text-gradient">Fábrica de Clientes</span>
          </h2>
        </motion.div>

        {/* ── Mockup visual (Kanban + popups) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-3xl mx-auto mb-14 md:mb-20"
        >
          {/* Kanban board */}
          <div className="rounded-2xl md:rounded-3xl border border-white/[0.08] bg-black/60 p-3 sm:p-4 md:p-6 bonus-card-glow">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4 md:mb-5 pb-3 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs md:text-sm font-bold text-white/80">Fábrica de Clientes</span>
              <span className="text-[9px] md:text-[10px] text-txt-muted ml-auto uppercase tracking-wider font-semibold">Pipeline</span>
            </div>

            {/* Columns grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
              {pipeline.map((col, ci) => (
                <div key={ci} className="space-y-2">
                  {/* Column header */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className={`w-2 h-2 rounded-full ${col.dot}`} />
                    <span className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-wider">
                      {col.title}
                    </span>
                    <span className="text-[9px] text-txt-muted ml-auto">{col.cards.length}</span>
                  </div>
                  {/* Cards */}
                  {col.cards.map((card, cdi) => (
                    <motion.div
                      key={cdi}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + ci * 0.08 + cdi * 0.04, duration: 0.3 }}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2 md:p-2.5 hover:bg-white/[0.05] transition-colors"
                    >
                      <p className="text-[10px] md:text-[11px] font-semibold text-white/90 truncate">{card.name}</p>
                      <p className="text-[9px] md:text-[10px] text-txt-muted truncate">{card.tag}</p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── WhatsApp popup ── */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-3 right-2 sm:-top-5 sm:-right-3 md:-right-8 z-10 w-[180px] sm:w-[210px] md:w-[250px]"
          >
            <div className="rounded-xl md:rounded-2xl border border-emerald-400/20 bg-[#0a1a12]/95 p-2.5 md:p-3 shadow-[0_8px_40px_rgba(16,185,129,0.18)] backdrop-blur-sm">
              <div className="flex items-center gap-1.5 md:gap-2 mb-2">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={10} className="text-white md:hidden" />
                  <MessageCircle size={12} className="text-white hidden md:block" />
                </div>
                <span className="text-[9px] md:text-[11px] font-bold text-emerald-300">WhatsApp</span>
                <span className="text-[7px] md:text-[9px] text-txt-muted ml-auto">agora</span>
              </div>
              <div className="rounded-lg md:rounded-xl bg-emerald-900/30 border border-emerald-500/10 p-2 md:p-2.5">
                <p className="text-[9px] md:text-[11px] text-emerald-100/90 leading-relaxed">
                  Olá Paulo, tudo bem? Você conseguiu avaliar a proposta que te mandei? Aguardo sua resposta.
                </p>
              </div>
              <div className="flex items-center gap-1 mt-1.5 justify-end">
                <span className="text-[7px] md:text-[8px] text-emerald-400/50 font-medium">Mensagem pronta</span>
                <Send size={8} className="text-emerald-400/50" />
              </div>
            </div>
          </motion.div>

          {/* ── Payment popup ── */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-3 md:-left-8 z-10 w-[200px] sm:w-[230px] md:w-[260px]"
          >
            <div className="rounded-xl md:rounded-2xl border border-emerald-400/25 bg-[#0a1a12]/95 p-2.5 md:p-3.5 shadow-[0_8px_40px_rgba(16,185,129,0.2)] backdrop-blur-sm bonus-payment-pulse">
              <div className="flex items-center gap-2.5 md:gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <DollarSign size={18} className="text-black md:hidden" />
                  <DollarSign size={22} className="text-black hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] text-emerald-400/70 font-semibold">Você recebeu</p>
                  <p className="text-sm md:text-lg font-black text-emerald-300 leading-tight">R$ 1.200,00</p>
                  <p className="text-[9px] md:text-[10px] text-txt-muted truncate">de Prado Advocacia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Features row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-14"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3.5 p-4 md:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-400/15 hover:bg-emerald-400/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-400/[0.08] border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <f.icon size={18} className="text-emerald-400" strokeWidth={2} />
              </div>
              <p className="text-sm md:text-[15px] text-txt-primary font-semibold leading-relaxed pt-1.5">
                {f.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Testimonial + Price row ── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.03] p-5 md:p-6 flex flex-col justify-between"
          >
            <div>
              <Quote size={20} className="text-emerald-400/25 mb-3" />
              <p className="text-sm md:text-[15px] text-txt-secondary leading-relaxed mb-5">
                &ldquo;Eu sempre tive dificuldade em prospectar, por insegurança ou não saber o que enviar pra abordar.
                Com a Fábrica eu simplesmente cliquei, enviei as mensagens diárias e{" "}
                <span className="text-emerald-300 font-bold">em 18 dias fechei 6 projetos.</span>&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-xs font-black text-black shadow-lg">
                PH
              </div>
              <div>
                <p className="text-sm font-bold text-white">Pedro Henrique</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.05] to-transparent p-5 md:p-6 flex flex-col items-center justify-center text-center bonus-card-glow"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
              <Gift size={13} className="text-red-400" />
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                Incluso na sua assinatura
              </span>
            </div>

            <div className="mb-2">
              <span className="text-txt-muted line-through text-base md:text-lg font-bold">R$ 197/mês</span>
            </div>

            <div className="mb-4">
              <span className="font-poppins font-black text-3xl md:text-4xl bonus-text-gradient">Gratuito</span>
            </div>

            <p className="text-[11px] text-txt-muted font-semibold uppercase tracking-wider">
              Apenas nesta oferta de lançamento
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
