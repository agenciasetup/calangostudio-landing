"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Clock,
  Users,
  MessageCircle,
  Send,
  DollarSign,
  ChevronRight,
  Star,
  Flame,
  Quote,
} from "lucide-react";

/* ── Kanban pipeline data ──────────────────────────────────── */
const pipeline = [
  {
    title: "Prospecção",
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/40",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    cards: [
      { name: "Studio Bella", tag: "Instagram" },
      { name: "Advocacia Prado", tag: "Indicação" },
    ],
  },
  {
    title: "Contato",
    color: "from-amber-400 to-orange-500",
    border: "border-amber-500/40",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    cards: [
      { name: "Clínica Renova", tag: "WhatsApp" },
      { name: "Pet House", tag: "Email" },
    ],
  },
  {
    title: "Proposta",
    color: "from-purple-500 to-violet-500",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    cards: [{ name: "Prado Advocacia", tag: "R$ 1.200" }],
  },
  {
    title: "Fechado",
    color: "from-emerald-400 to-green-500",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    cards: [
      { name: "Barbearia Kings", tag: "R$ 800" },
      { name: "Dr. Camila", tag: "R$ 1.500" },
    ],
  },
];

const features = [
  {
    icon: Users,
    text: "Cadastre sua lista de prospecção",
  },
  {
    icon: Send,
    text: "Mande mensagens prontas para fechar a venda",
  },
  {
    icon: ChevronRight,
    text: "Todas etapas do funil de venda para fechar cliente",
  },
];

export default function BonusFabrica() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* ── Background effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-emerald-500/[0.04] rounded-full blur-[120px] md:blur-[200px]" />
        <div className="absolute top-20 right-10 w-[200px] h-[200px] bg-emerald-400/[0.03] rounded-full blur-[80px]" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-cyan-400/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Scarcity badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] bonus-badge-glow">
            <Flame size={16} className="text-emerald-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Bônus exclusivo de lançamento
            </span>
            <Clock size={14} className="text-emerald-400/70" />
          </div>
        </motion.div>

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-4"
        >
          <p className="text-txt-secondary text-base md:text-lg mb-3">
            Apenas nessa oferta, você terá acesso ao
          </p>
          <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl tracking-tight">
            <span className="bonus-text-gradient">Fábrica de Clientes</span>
          </h2>
        </motion.div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center text-txt-muted text-sm md:text-base max-w-xl mx-auto mb-12 md:mb-16"
        >
          Seu CRM de prospecção integrado. Cadastre leads, envie mensagens
          prontas e acompanhe cada etapa do funil até o fechamento.
        </motion.p>

        {/* ── Main content grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* ── LEFT: Kanban mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Kanban board */}
            <div className="rounded-2xl md:rounded-3xl border border-white/[0.08] bg-black/50 p-4 md:p-6 bonus-card-glow">
              {/* Board header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-sm font-bold text-white/80">
                  Fábrica de Clientes
                </span>
                <span className="text-[10px] text-txt-muted ml-auto">
                  Pipeline
                </span>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {pipeline.map((col, ci) => (
                  <div key={ci} className="space-y-2">
                    <div
                      className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded-lg bg-gradient-to-r ${col.color} text-black/80 text-center`}
                    >
                      {col.title}
                    </div>
                    {col.cards.map((card, cdi) => (
                      <motion.div
                        key={cdi}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + ci * 0.1 + cdi * 0.05,
                          duration: 0.3,
                        }}
                        className={`rounded-lg border ${col.border} bg-white/[0.03] p-2 ${col.glow}`}
                      >
                        <p className="text-[9px] md:text-[11px] font-semibold text-white/90 truncate">
                          {card.name}
                        </p>
                        <p className="text-[8px] md:text-[10px] text-txt-muted truncate">
                          {card.tag}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ── WhatsApp popup overlay ── */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute -top-4 -right-2 md:-right-6 z-10"
            >
              <div className="w-[200px] md:w-[240px] rounded-2xl border border-emerald-400/20 bg-[#0b1a14] p-3 shadow-[0_8px_40px_rgba(16,185,129,0.15)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <MessageCircle size={12} className="text-white" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-emerald-300">
                    WhatsApp
                  </span>
                  <span className="text-[8px] text-txt-muted ml-auto">
                    agora
                  </span>
                </div>
                <div className="rounded-xl bg-emerald-900/30 border border-emerald-500/10 p-2.5">
                  <p className="text-[10px] md:text-[11px] text-emerald-100/90 leading-relaxed">
                    Oi! Vi que a Prado Advocacia tá crescendo 🚀 Posso mostrar
                    como a gente ajuda escritórios a atrair mais clientes com
                    social media?
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-2 justify-end">
                  <span className="text-[8px] text-emerald-400/60">
                    Mensagem pronta
                  </span>
                  <Send size={10} className="text-emerald-400/60" />
                </div>
              </div>
            </motion.div>

            {/* ── Payment received popup ── */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              className="absolute -bottom-5 -left-2 md:-left-6 z-10"
            >
              <div className="w-[220px] md:w-[260px] rounded-2xl border border-emerald-400/25 bg-[#0b1a14] p-3 shadow-[0_8px_40px_rgba(16,185,129,0.2)] bonus-payment-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <DollarSign size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-400/70 font-semibold">
                      Você recebeu
                    </p>
                    <p className="text-base md:text-lg font-black text-emerald-300">
                      R$ 1.200,00
                    </p>
                    <p className="text-[10px] text-txt-muted">
                      de Prado Advocacia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Features + Testimonial + Price ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Features list */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-400/[0.08] border border-emerald-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/[0.14] transition-colors">
                    <f.icon
                      size={18}
                      className="text-emerald-400"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-sm md:text-base text-txt-primary font-semibold leading-relaxed pt-2">
                    {f.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Testimonial ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5 md:p-6"
            >
              <Quote size={18} className="text-emerald-400/30 mb-3" />
              <p className="text-sm md:text-[15px] text-txt-secondary leading-relaxed mb-4">
                &ldquo;Eu sempre tive dificuldade em prospectar, por insegurança
                ou não saber o que enviar pra abordar. Com a Fábrica eu
                simplesmente cliquei, enviei as mensagens diárias e{" "}
                <span className="text-emerald-300 font-bold">
                  em 18 dias fechei 6 projetos.
                </span>
                &rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-xs font-bold text-black">
                  PH
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Pedro Henrique</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className="text-emerald-400 fill-emerald-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Price block ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-5 md:p-7 text-center bonus-card-glow"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                <Gift size={14} className="text-red-400" />
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                  Incluso na sua assinatura
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-txt-muted line-through text-lg md:text-xl font-bold">
                  R$ 197/mês
                </span>
                <div className="w-8 h-[2px] bg-emerald-400/40 -rotate-6" />
                <span className="font-poppins font-black text-2xl md:text-3xl bonus-text-gradient">
                  Gratuito
                </span>
              </div>

              <p className="text-xs text-txt-muted">
                Apenas nesta oferta de lançamento
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
