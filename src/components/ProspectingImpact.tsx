"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Target,
  MessageCircle,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle,
} from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          const duration = 1200;
          const start = performance.now();
          let lastValue = -1;
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * target);
            if (value !== lastValue) {
              lastValue = value;
              setCount(value);
            }
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const impactCards = [
  {
    label: "Contatos por dia",
    value: 5,
    suffix: "",
    detail: "Uma meta leve o suficiente para manter.",
    icon: Target,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    label: "Contatos no mês",
    value: 150,
    suffix: "",
    detail: "Consistência muda o jogo.",
    icon: MessageCircle,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    label: "Novos clientes",
    value: 0,
    suffix: "",
    detail: "Mesmo poucos fechamentos já mudam seu faturamento.",
    icon: Users,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    custom: true,
  },
];

export default function ProspectingImpact() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            E se sua prospecção{" "}
            <span className="text-gradient-animated">virasse rotina?</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Com missões diárias, lembretes e fluxo de abordagem pronto, fica muito mais fácil manter consistência.
            Você não precisa acertar tudo. Só precisa parar de depender do acaso.
          </p>
        </motion.div>

        {/* Impact mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl mb-10"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/missões
              </div>
            </div>

            <div className="bg-bg-primary p-4 md:p-7">
              {/* Missions header */}
              <div className="flex items-center justify-between mb-4 md:mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Target size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Meta diária</p>
                    <p className="text-xs md:text-sm font-bold text-white">5 prospecções por dia</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/[0.08] border border-green-500/20">
                  <CheckCircle size={10} className="text-green-400" />
                  <span className="text-[9px] md:text-[10px] text-green-400 font-bold">3/5 hoje</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Progresso do mês</span>
                  <span className="text-[9px] md:text-[10px] text-accent font-bold">87/150</span>
                </div>
                <div className="h-2 md:h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "58%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-end"
                  />
                </div>
              </div>

              {/* Impact cards */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5">
                {[
                  { label: "Abordagens no mês", value: "87", icon: MessageCircle, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                  { label: "Respostas", value: "23", icon: BarChart3, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                  { label: "Clientes fechados", value: "4", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                ].map((card) => (
                  <div key={card.label} className={`rounded-xl ${card.bg} border ${card.border} p-3 md:p-4 text-center`}>
                    <card.icon size={16} className={`${card.color} mx-auto mb-1.5`} />
                    <p className={`font-poppins font-black text-lg md:text-2xl ${card.color}`}>{card.value}</p>
                    <p className="text-[7px] md:text-[8px] text-zinc-500 uppercase tracking-wider font-bold mt-0.5">{card.label}</p>
                  </div>
                ))}
              </div>

              {/* Pipeline preview */}
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3 md:p-4">
                <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold mb-2 md:mb-3">Pipeline evoluindo</p>
                <div className="flex items-center gap-2">
                  {[
                    { stage: "Prospecção", count: "32", dot: "bg-blue-400" },
                    { stage: "Contato", count: "15", dot: "bg-amber-400" },
                    { stage: "Proposta", count: "6", dot: "bg-purple-400" },
                    { stage: "Fechado", count: "4", dot: "bg-emerald-400" },
                  ].map((stage) => (
                    <div key={stage.stage} className="flex-1 text-center">
                      <div className={`w-2 h-2 rounded-full ${stage.dot} mx-auto mb-1`} />
                      <p className="text-[10px] md:text-xs font-bold text-white">{stage.count}</p>
                      <p className="text-[7px] md:text-[8px] text-zinc-500 font-semibold">{stage.stage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact text blocks */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-center p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <p className="font-poppins font-black text-2xl md:text-3xl text-white text-glow mb-1">
              <AnimatedCounter target={5} />
            </p>
            <p className="text-[10px] md:text-xs text-txt-muted uppercase tracking-wider font-bold mb-2">contatos por dia</p>
            <p className="text-xs text-txt-secondary">Uma meta leve o suficiente para manter.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-center p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <p className="font-poppins font-black text-2xl md:text-3xl text-white text-glow mb-1">
              <AnimatedCounter target={150} />
            </p>
            <p className="text-[10px] md:text-xs text-txt-muted uppercase tracking-wider font-bold mb-2">contatos no mês</p>
            <p className="text-xs text-txt-secondary">Consistência muda o jogo.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center p-4 md:p-5 rounded-2xl bg-accent/[0.04] border border-accent/15"
          >
            <p className="font-poppins font-black text-2xl md:text-3xl text-gradient-animated text-glow mb-1">
              $$$
            </p>
            <p className="text-[10px] md:text-xs text-accent/70 uppercase tracking-wider font-bold mb-2">impacto no caixa</p>
            <p className="text-xs text-txt-secondary">Poucos fechamentos já fazem diferença real.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
