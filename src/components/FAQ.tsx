"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Qual IA vocês usam?",
    a: "Nano Banana como motor principal, com FLUX e OpenAI integrados. Na prática, você não escolhe — o Calango seleciona automaticamente o melhor modelo para cada geração.",
  },
  {
    q: "Como funcionam os créditos?",
    a: "Cada plano tem um volume mensal focado em assertividade, não volume. Em média, você gera mais de 100 imagens tranquilamente. Ainda tem o Incentivo Google — um programa que libera até U$300 em créditos extras (quase 3.000 gerações). Temos uma aula ensinando a ativar gratuitamente.",
  },
  {
    q: "Tem recompensas e premiações?",
    a: "Sim. Conforme você usa a plataforma, sobe de nível e desbloqueia funções e prêmios exclusivos.",
  },
  {
    q: "Tem programa de afiliados?",
    a: "Sim — o CalangoPartner. Disponível para membros Elite, mediante aprovação da nossa equipe.",
  },
  {
    q: "Vai ter atualizações?",
    a: "Sempre. Já vêm por aí: geração de arquivo editável no Figma, gestão de cobranças e contratos, e muito mais.",
  },
  {
    q: "Qual a vantagem do Calango Studio sobre outras IAs?",
    a: "Tempo, organização e economia. O Calango não é só uma IA de imagem — é uma plataforma de workflow. Ele aprende o briefing de cada cliente seu, elimina o retrabalho de contexto e centraliza tudo que você usaria em 4 ou 5 ferramentas separadas.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border-b border-white/[0.06] last:border-0 group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-6 text-left"
      >
        <span className="font-poppins font-bold text-base md:text-lg pr-4 group-hover:text-accent transition-colors duration-300">
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/[0.05] ${open ? "rotate-180 !border-accent/30 !bg-accent/10" : ""}`}>
          <ChevronDown size={16} className={`transition-colors duration-300 ${open ? "text-accent" : "text-txt-muted"}`} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-txt-secondary leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-4">
      <div className="section-divider max-w-4xl mx-auto mb-28" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <HelpCircle size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Respostas rápidas para quem{" "}
            <span className="text-gradient-animated">
              pensa rápido.
            </span>
          </h2>
        </motion.div>

        <div className="glass-card !rounded-3xl p-6 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
