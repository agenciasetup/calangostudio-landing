"use client";

import { motion } from "framer-motion";
import {
  Target,
  MessageCircle,
  Handshake,
  ClipboardList,
  FileSignature,
  Sparkles,
  Image,
  ScanSearch,
} from "lucide-react";

const blocks = [
  {
    question: "Não sabe prospectar?",
    answer: "O Calango organiza sua rotina de prospecção com missões e lembretes.",
    icon: Target,
  },
  {
    question: "Tem medo de ser invasivo?",
    answer: "O Calango já traz um funil de mensagens pensado para abordagem.",
    icon: MessageCircle,
  },
  {
    question: "Não sabe o que mandar?",
    answer: "O Calango entrega mensagens prontas para iniciar conversa e avançar.",
    icon: Handshake,
  },
  {
    question: "Fechou e não sabe o próximo passo?",
    answer: "O Calango organiza o onboarding e o briefing do cliente.",
    icon: ClipboardList,
  },
  {
    question: "Não sabe fazer contrato?",
    answer: "O Calango gera a estrutura para você formalizar o serviço.",
    icon: FileSignature,
  },
  {
    question: "Não sabe como produzir rápido?",
    answer: "O Calango gera conteúdo, copy e imagem com base no contexto do cliente.",
    icon: Sparkles,
  },
  {
    question: "Precisa de imagens?",
    answer: "O Calango gera imagens e sessões de fotos direto do briefing.",
    icon: Image,
  },
  {
    question: "Quer analisar o perfil do cliente?",
    answer: "O Calango já faz isso dentro do fluxo, antes de você criar.",
    icon: ScanSearch,
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-20 px-4 relative">
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
            Travou em alguma parte do processo?{" "}
            <span className="text-gradient-animated">O Calango entra aí.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Cada etapa onde você trava, o Studio já tem uma resposta pronta.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.04, 0.2), duration: 0.3 }}
              className="group rounded-2xl bg-black/40 border border-white/[0.08] p-4 md:p-5 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-accent to-accent-end opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-3 group-hover:bg-accent/15 transition-colors duration-300">
                <block.icon size={16} className="text-accent" strokeWidth={2} />
              </div>

              <p className="font-poppins font-bold text-sm md:text-[15px] text-white mb-1.5">
                {block.question}
              </p>
              <p className="text-xs md:text-sm text-txt-secondary leading-relaxed">
                {block.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
