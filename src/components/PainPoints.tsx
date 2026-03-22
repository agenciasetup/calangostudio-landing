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
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const salesPains = [
  {
    question: "Não sabe prospectar?",
    answer: "O Calango organiza sua rotina de prospecção com missões diárias e lembretes.",
    icon: Target,
  },
  {
    question: "Tem medo de ser invasivo?",
    answer: "O Calango já traz um funil de mensagens pensado para abordagem natural.",
    icon: MessageCircle,
  },
  {
    question: "Não sabe o que mandar?",
    answer: "O Calango entrega mensagens prontas para iniciar conversa e avançar na venda.",
    icon: Handshake,
  },
  {
    question: "Fechou e não sabe o próximo passo?",
    answer: "O Calango organiza o onboarding e o briefing do cliente automaticamente.",
    icon: ClipboardList,
  },
];

const productionPains = [
  {
    question: "Não sabe fazer contrato?",
    answer: "O Calango gera a estrutura para você formalizar o serviço com o cliente.",
    icon: FileSignature,
  },
  {
    question: "Não sabe como produzir rápido?",
    answer: "O Calango gera conteúdo, copy e imagem com base no contexto do cliente — e o Flow automatiza o fluxo inteiro.",
    icon: Sparkles,
  },
  {
    question: "Precisa de imagens?",
    answer: "O Calango gera imagens e sessões de fotos direto do briefing salvo.",
    icon: Image,
  },
  {
    question: "Quer analisar o perfil do cliente?",
    answer: "O Calango já faz isso dentro do fluxo, antes de você criar.",
    icon: ScanSearch,
  },
];

function PainCard({
  item,
  index,
  direction,
}: {
  item: { question: string; answer: string; icon: React.ElementType };
  index: number;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, borderColor: "rgba(255,170,0,0.25)" }}
      className="group rounded-2xl bg-black/40 border border-white/[0.08] p-5 md:p-6 transition-all duration-300 relative overflow-hidden cursor-default"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Question with red accent */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 group-hover:border-red-500/30 transition-all duration-300">
            <AlertCircle size={16} className="text-red-400" strokeWidth={2} />
          </div>
          <p className="font-poppins font-bold text-sm md:text-base text-red-400 pt-1.5">
            {item.question}
          </p>
        </div>

        {/* Answer with arrow indicator */}
        <div className="flex items-start gap-3 pl-0 md:pl-[52px]">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300 md:hidden">
            <item.icon size={13} className="text-accent" strokeWidth={2} />
          </div>
          <div className="hidden md:flex w-8 h-8 rounded-lg bg-accent/8 border border-accent/15 items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
            <item.icon size={14} className="text-accent" strokeWidth={2} />
          </div>
          <p className="text-xs md:text-sm text-txt-secondary leading-relaxed pt-1 group-hover:text-txt-primary transition-colors duration-300">
            {item.answer}
          </p>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <ArrowRight size={14} className="text-accent/50" />
      </div>
    </motion.div>
  );
}

export default function PainPoints() {
  return (
    <section className="section-elevated py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Pulsing glow BG */}
      <div className="section-glow-pulse w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-red-500/20 blur-[100px] md:blur-[180px]" />

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] hidden lg:block opacity-[0.04]"
      >
        <AlertCircle size={80} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-[6%] hidden lg:block opacity-[0.04]"
      >
        <Sparkles size={60} />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="badge-pill mb-6 inline-flex" style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "#f87171" }}>
            <AlertCircle size={12} />
            Travas do designer
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight leading-tight">
            Travou em alguma parte
            <br />
            do processo?{" "}
            <span className="text-gradient-animated">O Calango entra aí.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cada etapa onde você trava,
            <br className="sm:hidden" />
            o Studio já tem uma resposta pronta.
          </p>
        </motion.div>

        {/* Two columns: Sales | Production */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Column 1: Sales pains */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-5 md:mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Target size={18} className="text-red-400" />
              </div>
              <div>
                <p className="font-poppins font-bold text-lg md:text-xl text-white">Dores de venda</p>
                <p className="text-[11px] text-txt-muted">Onde você trava antes de fechar</p>
              </div>
            </motion.div>

            <div className="space-y-3 md:space-y-4">
              {salesPains.map((item, i) => (
                <PainCard key={i} item={item} index={i} direction="left" />
              ))}
            </div>
          </div>

          {/* Column 2: Production pains */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-5 md:mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Sparkles size={18} className="text-red-400" />
              </div>
              <div>
                <p className="font-poppins font-bold text-lg md:text-xl text-white">Dores de produção</p>
                <p className="text-[11px] text-txt-muted">Onde você trava depois de fechar</p>
              </div>
            </motion.div>

            <div className="space-y-3 md:space-y-4">
              {productionPains.map((item, i) => (
                <PainCard key={i} item={item} index={i} direction="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
