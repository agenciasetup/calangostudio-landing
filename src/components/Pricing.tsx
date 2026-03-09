"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Base",
    icon: "⚡",
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
  },
  {
    name: "Pro",
    icon: "🚀",
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
  },
  {
    name: "Elite",
    icon: "👑",
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
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Escolha seu ritmo.
          </h2>
          <p className="text-txt-secondary text-lg">
            Sem fidelidade. Cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm ${
                plan.popular
                  ? "bg-bg-secondary border-accent/40 shadow-[0_0_40px_rgba(255,170,0,0.1)] scale-[1.03]"
                  : "bg-bg-secondary border-glass"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-accent-end text-black text-xs font-bold">
                  ⭐ MAIS POPULAR
                </span>
              )}

              <div className="text-center mb-6">
                <span className="text-4xl block mb-2">{plan.icon}</span>
                <h3 className="font-syne font-bold text-2xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-txt-secondary mb-4">
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-txt-secondary">R$</span>
                  <span className="font-syne font-extrabold text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-txt-secondary">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span className="text-[#cccccc]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-shadow ${
                  plan.accent
                    ? "bg-gradient-to-r from-accent to-accent-end text-black hover:shadow-[0_0_24px_rgba(255,170,0,0.4)]"
                    : "border border-accent/30 text-accent hover:bg-accent/5"
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
          className="text-center text-sm text-txt-secondary mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          Créditos renovam mensalmente. Em média, você gera mais de 100 imagens
          por mês. Existe ainda o Incentivo Google que pode liberar até 3.000
          gerações extras — ensinamos como ativar.
        </motion.p>
      </div>
    </section>
  );
}
