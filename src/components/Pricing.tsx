"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Zap, Sparkles, Crown, Check, CreditCard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Plan {
  name: string;
  icon: LucideIcon;
  price: string;
  subtitle: string;
  capacity: string;
  features: string[];
  cta: string;
  popular: boolean;
  iconGradient: string;
  checkColor: string;
  coins: string;
  borderColor: string;
  checkoutUrl: string;
}

function withCoupon(url: string, coupon: string | null): string {
  if (!coupon || url === "#") return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}offDiscount=${coupon}`;
}

const plans: Plan[] = [
  {
    name: "Base",
    icon: Zap,
    price: "97,90",
    subtitle: "Para quem quer começar com estrutura e operar até 5 clientes.",
    capacity: "5 clientes",
    features: [
      "Geradores de Imagem (todos)",
      "Prospecção e mensagens prontas",
      "Gestão de clientes e briefing",
      "Extrator de Prompt",
      "Vínculo ao Google Drive",
      "1 Personagem por cliente",
    ],
    cta: "Assinar Base",
    popular: false,
    iconGradient: "from-blue-500 to-cyan-500",
    checkColor: "text-blue-400",
    coins: "9k",
    borderColor: "border-white/[0.08]",
    checkoutUrl: "https://pay.hotmart.com/F104772530K?off=wat2yhev",
  },
  {
    name: "Pro",
    icon: Sparkles,
    price: "169,90",
    subtitle: "Para quem já quer ganhar volume com mais controle.",
    capacity: "12 clientes",
    features: [
      "Tudo do plano Base",
      "CopyMaker",
      "Análise de Perfil",
      "Remix de Layout",
      "Contrato e onboarding avançado",
      "2 Personagens por cliente",
    ],
    cta: "Assinar Pro",
    popular: true,
    iconGradient: "from-accent to-accent-end",
    checkColor: "text-accent",
    coins: "12k",
    borderColor: "border-accent/30",
    checkoutUrl: "https://pay.hotmart.com/F104772530K?off=y2uzyv4s",
  },
  {
    name: "Elite",
    icon: Crown,
    price: "319,90",
    subtitle: "Para quem quer rodar como operação forte e escalar.",
    capacity: "25 clientes",
    features: [
      "Tudo do plano Pro",
      "25 Clientes cadastrados",
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
    checkoutUrl: "https://pay.hotmart.com/F104772530K?off=owgp5cz5",
  },
];

function AnimatedPrice({ price }: { price: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(price);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          const target = parseFloat(price.replace(",", "."));
          const duration = 1000;
          const start = performance.now();
          let lastDisplay = "";
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const display = (eased * target).toFixed(2).replace(".", ",");
            if (display !== lastDisplay) {
              lastDisplay = display;
              setDisplayed(display);
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
  }, [price]);

  return <span ref={ref}>{displayed}</span>;
}

export default function Pricing() {
  const searchParams = useSearchParams();
  const coupon = searchParams.get("coupon");

  return (
    <section id="planos" className="section-elevated py-16 md:py-20 px-4 relative">
      {/* Pulsing glow */}
      <div className="section-glow-pulse w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/15 blur-[100px] md:blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="badge-pill mb-6 inline-flex">
            <CreditCard size={12} />
            Planos e preços
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Escolha o plano ideal para a operação{" "}
            <span className="text-gradient-animated">que você quer construir.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg">Sem fidelidade. Cancele quando quiser.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-[24px] md:rounded-[28px] bg-black/40 border p-6 md:p-8 transition-all duration-300 group hover:border-white/15 ${plan.borderColor} ${
                plan.popular
                  ? "shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.06)] md:scale-[1.03] ring-1 ring-accent/10"
                  : "shadow-[0_15px_40px_rgba(0,0,0,0.3)] md:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-6 px-4 py-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-[9px] font-black uppercase tracking-[0.18em] shadow-glow">
                  Mais Popular
                </span>
              )}

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-[24px] md:rounded-[28px] bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center mb-4 md:mb-5 shadow-lg`}>
                  <plan.icon size={22} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="font-poppins font-black text-xl md:text-2xl mb-1">{plan.name}</h3>

                {/* Capacity badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] mb-2">
                  <span className="text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Até {plan.capacity}</span>
                </div>

                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-sm text-txt-muted">R$</span>
                  <span className={`font-poppins font-black text-3xl md:text-4xl ${plan.popular ? "text-gradient-animated" : "text-white"}`}>
                    <AnimatedPrice price={plan.price} />
                  </span>
                  <span className="text-sm text-txt-muted">/mês</span>
                </div>
                <p className="text-sm text-txt-muted mb-5 md:mb-6 leading-relaxed">{plan.subtitle}</p>

                <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check size={14} className={`${plan.checkColor} flex-shrink-0 mt-0.5`} strokeWidth={3} />
                      <span className="text-txt-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6 md:mb-8 w-fit">
                  <Sparkles size={14} className="text-accent" />
                  <span className="font-poppins font-black text-sm text-white">{plan.coins}</span>
                  <span className="text-[9px] text-txt-muted font-bold uppercase tracking-wider">Calangocoins / mês</span>
                </div>

                <a
                  href={withCoupon(plan.checkoutUrl, coupon)}
                  className={`block w-full text-center py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_24px_rgba(249,115,22,0.22)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
                      : "border border-white/10 text-txt-secondary hover:text-white hover:border-accent/30 hover:bg-accent/[0.03]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-[11px] text-txt-muted mt-8 md:mt-10 max-w-3xl mx-auto uppercase tracking-wider font-bold"
        >
          Créditos renovam mensalmente e não acumulam. Ao mudar de plano, seu saldo é redefinido para o valor do novo plano.
        </motion.p>
      </div>
    </section>
  );
}
