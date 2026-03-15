"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Qual IA vocês usam?",
    a: "Integramos modelos da OpenAI, Google Gemini, FLUX e Claude. Na prática, o Calango seleciona automaticamente o melhor modelo para cada tipo de geração. Você não precisa se preocupar com isso.",
  },
  {
    q: "O Calango Studio é só um gerador de imagem?",
    a: "Não. O Calango Studio é a operação completa do designer. Você prospecta clientes, acompanha o funil de vendas, organiza briefing e contrato, gera conteúdo e imagens com base no cliente, e acompanha toda sua rotina em um só lugar.",
  },
  {
    q: "Como funciona a prospecção dentro do Studio?",
    a: "Você cadastra prospectos, recebe missões diárias para abordar empresas, usa mensagens prontas e acompanha quem respondeu. É um funil comercial integrado ao sistema de produção.",
  },
  {
    q: "Como funcionam os créditos (CalangoCoins)?",
    a: "Cada plano tem um volume mensal de CalangoCoins. Em média, você gera mais de 100 imagens tranquilamente. Os créditos renovam mensalmente. Ainda tem o Incentivo Google, um programa que libera até U$300 em créditos extras.",
  },
  {
    q: "Tem ranking e recompensas?",
    a: "Sim. Quanto mais você prospecta, conversa e fecha clientes, mais sobe no ranking. Seu perfil ganha destaque e visibilidade dentro da plataforma. Conforme você usa o Studio, desbloqueia funções e prêmios exclusivos.",
  },
  {
    q: "Qual a vantagem do Calango sobre outras ferramentas?",
    a: "O Calango não é só uma IA. É um sistema de operação. Ele centraliza prospecção, vendas, gestão de clientes, briefing, produção de conteúdo e análise. Você para de pagar 5 assinaturas separadas e trabalha em um lugar só.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0 group">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 md:py-6 text-left"
      >
        <span className="font-poppins font-bold text-sm md:text-lg pr-4 group-hover:text-accent transition-colors duration-300">
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
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-sm md:text-base text-txt-secondary leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 px-4">
      <div className="section-divider max-w-4xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <HelpCircle size={12} />
            Perguntas frequentes
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Antes de assinar, você{" "}
            <span className="text-gradient-animated">
              provavelmente quer saber:
            </span>
          </h2>
        </motion.div>

        <div className="glass-card !rounded-2xl md:!rounded-3xl p-4 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
