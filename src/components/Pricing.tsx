"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Sparkles, Crown, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Plan {
  name: string;
  icon: LucideIcon;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  popular: boolean;
  iconGradient: string;
  checkColor: string;
  coins: string;
  borderColor: string;
}

const plans: Plan[] = [
  {
    name: "Base",
    icon: Zap,
    price: "97,90",
    subtitle: "Acesso aos geradores de imagem e ferramentas essenciais.",
    features: [
      "Geradores de Imagem (todos)",
      "Extrator de Prompt",
      "Vínculo ao Google Drive",
      "4 Clientes cadastrados",
      "1 Personagem por cliente",
    ],
    cta: "Assinar Base",
    popular: false,
    iconGradient: "from-blue-500 to-cyan-500",
    checkColor: "text-blue-400",
    coins: "9k",
    borderColor: "border-white/[0.08]",
  },
  {
    name: "Pro",
    icon: Sparkles,
    price: "169,90",
    subtitle: "Todas as ferramentas do Base + Copy, Análise e Remix.",
    features: [
      "Tudo do plano Base",
      "CopyMaker",
      "Análise de Perfil",
      "Remix de Layout",
      "10 Clientes cadastrados",
      "2 Personagens por cliente",
    ],
    cta: "Assinar Pro",
    popular: true,
    iconGradient: "from-accent to-accent-end",
    checkColor: "text-accent",
    coins: "12k",
    borderColor: "border-accent/30",
  },
  {
    name: "Elite",
    icon: Crown,
    price: "319,90",
    subtitle: "Acesso total + comunidade, mentorias e cursos.",
    features: [
      "Tudo do plano Pro",
      "30 Clientes cadastrados",
      "3 Personagens por cliente",
      "Acesso antecipado às features",
      "Comunidade Calango PRO com mentorias ao vivo",
      "Cursos da Agência Setup",
    ],
    cta: "Assinar Elite",
    popular: false,
    iconGradient: "from-purple-500 to-violet-500",
    checkColor: "text-purple-400",
    coins: "17,5k",
    borderColor: "border-purple-500/20",
  },
];

function AnimatedPrice({ price }: { price: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(price);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !inView) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const target = parseFloat(price.replace(",", "."));
    const duration = 1200;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed((eased * target).toFixed(2).replace(".", ","));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, price]);

  return <span ref={ref}>{displayed}</span>;
}

export default function Pricing() {
  return (
    <section id="planos" className="py-16 md:py-20 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/3 rounded-full blur-[100px] md:blur-[200px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">Planos flexíveis</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">Escolha seu ritmo.</h2>
          <p className="text-txt-secondary text-base md:text-lg">Sem fidelidade. Cancele quando quiser.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative rounded-[24px] md:rounded-[28px] bg-black/40 border p-6 md:p-8 transition-all duration-300 group hover:border-white/15 ${plan.borderColor} ${
                plan.popular
                  ? "shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.06)] md:scale-[1.03]"
                  : "shadow-[0_15px_40px_rgba(0,0,0,0.3)] md:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-6 px-4 py-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-[9px] font-black uppercase tracking-[0.18em] shadow-glow">
                  Mais Popular
                </span>
              )}

              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center mb-4 md:mb-5 shadow-lg`}>
                <plan.icon size={22} className="text-white" strokeWidth={2} />
              </div>

              <h3 className="font-poppins font-black text-xl md:text-2xl mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-2">
                <span className="text-sm text-txt-muted">R$</span>
                <span className={`font-poppins font-black text-3xl md:text-4xl ${plan.popular ? "text-gradient-animated" : "text-white"}`}>
                  <AnimatedPrice price={plan.price} />
                </span>
                <span className="text-sm text-txt-muted">/mês</span>
              </div>
              <p className="text-sm text-txt-muted mb-5 md:mb-6 leading-relaxed">{plan.subtitle}</p>

              <div className="flex items-center gap-2.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5 md:mb-6 w-fit">
                <Sparkles size={14} className="text-accent" />
                <span className="font-poppins font-black text-sm text-white">{plan.coins}</span>
                <span className="text-[9px] text-txt-muted font-bold uppercase tracking-wider">Calangocoins / mês</span>
              </div>

              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={14} className={`${plan.checkColor} flex-shrink-0 mt-0.5`} strokeWidth={3} />
                    <span className="text-txt-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_24px_rgba(249,115,22,0.22)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
                    : "border border-white/10 text-txt-secondary hover:text-white hover:border-accent/30 hover:bg-accent/[0.03]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] text-txt-muted mt-8 md:mt-10 max-w-3xl mx-auto uppercase tracking-wider font-bold"
        >
          Créditos renovam mensalmente e não acumulam. Ao mudar de plano, seu saldo é redefinido para o valor do novo plano.
        </motion.p>
      </div>
    </section>
  );
}
