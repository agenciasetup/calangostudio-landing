"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      transition={{ delay: index * 0.08 }}
      className="border-b border-glass"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-semibold text-lg pr-4 group-hover:text-accent transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-accent text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#cccccc] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-16"
        >
          Respostas rápidas para quem{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            pensa rápido.
          </span>
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
