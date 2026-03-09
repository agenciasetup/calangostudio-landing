"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Rocket, Crown, Check, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Plan {
  name: string;
  icon: LucideIcon;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  popular: boolean;
  accent: boolean;
  iconGradient: string;
}

const plans: Plan[] = [
  {
    name: "Base",
    icon: Zap,
    price: "97,90",
    subtitle: "Para quem quer começar a produzir mais rápido",
    features: [
      "Todos os Geradores de Imagem",
      "Prompt Maker",
      "Google Drive integrado",
      "Até 4 clientes cadastrados",
      "1 personagem por cliente",
    ],
    cta: "Assinar Base",
    popular: false,
    accent: false,
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "169,90",
    subtitle: "O workflow completo para designers sérios",
    features: [
      "Tudo do Base",
      "CopyMaker",
      "Consultor de Perfil",
      "Remix de Layout",
      "Até 10 clientes cadastrados",
      "2 personagens por cliente",
    ],
    cta: "Assinar Pro",
    popular: true,
    accent: true,
    iconGradient: "from-accent to-accent-end",
  },
  {
    name: "Elite",
    icon: Crown,
    price: "319,90",
    subtitle: "Para quem opera no nível agência",
    features: [
      "Tudo do Pro",
      "Até 30 clientes cadastrados",
      "3 personagens por cliente",
      "Acesso antecipado a novas features",
      "Comunidade Calango PRO com mentorias ao vivo",
      "Cursos da Agência Setup",
      "CalangoPartner (programa de afiliados)",
    ],
    cta: "Assinar Elite",
    popular: false,
    accent: false,
    iconGradient: "from-purple-500 to-violet-500",
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
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (eased * target).toFixed(2).replace(".", ",");
      setDisplayed(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, price]);

  return <span ref={ref}>{displayed}</span>;
}

export default function Pricing() {
  return (
    <section id="planos" className="py-28 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Planos flexíveis
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Escolha seu ritmo.
          </h2>
          <p className="text-txt-secondary text-lg">
            Sem fidelidade. Cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className={`relative glass-card p-8 hover:!border-white/15 transition-all duration-500 group ${
                plan.popular
                  ? "!border-accent/30 !shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_60px_rgba(255,170,0,0.08)] md:scale-[1.04]"
                  : ""
              }`}
            >
              {plan.popular && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-[10px] font-black uppercase tracking-widest shadow-glow"
                >
                  Mais Popular
                </motion.span>
              )}

              <div className="text-center mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <plan.icon size={24} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-txt-muted mb-5">
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-4xl text-white text-glow">
                    <AnimatedPrice price={plan.price} />
                  </span>
                  <span className="text-sm text-txt-muted">/mês</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="w-5 h-5 rounded-md bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-accent" strokeWidth={3} />
                    </div>
                    <span className="text-txt-secondary">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                  plan.accent
                    ? "btn-primary"
                    : "border border-white/10 text-txt-secondary hover:text-white hover:border-accent/30 hover:bg-accent/[0.03] hover:shadow-glow-sm"
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
          className="text-center text-sm text-txt-muted mt-14 max-w-2xl mx-auto leading-relaxed"
        >
          Créditos renovam mensalmente. Em média, você gera mais de 100 imagens
          por mês. Existe ainda o Incentivo Google que pode liberar até 3.000
          gerações extras — ensinamos como ativar.
        </motion.p>
      </div>
    </section>
  );
}
