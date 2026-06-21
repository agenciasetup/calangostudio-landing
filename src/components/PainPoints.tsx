"use client";

/**
 * PainPoints — "Onde você trava, o Calango destrava."
 *
 * Reframed from a wall of red alarms into a calm, confident "trava → destrava"
 * read: the trava (the blocker) is a quiet muted label, the Calango answer is
 * the lit hero line with a single amber accent. No red glow, no eight identical
 * alarm icons. Two calm columns: before vs. after closing the client.
 */

import { motion } from "framer-motion";
import {
  Target,
  MessageCircle,
  Handshake,
  ClipboardList,
  FileSignature,
  Sparkles,
  Image as ImageIcon,
  ScanSearch,
} from "lucide-react";
import { reveal, revealX, staggerContainer, inView } from "@/lib/motion";

type Pain = { trava: string; destrava: string; icon: React.ElementType };

const salesPains: Pain[] = [
  {
    trava: "Não sabe prospectar?",
    destrava: "Missões diárias e lembretes organizam sua rotina de prospecção.",
    icon: Target,
  },
  {
    trava: "Tem medo de ser invasivo?",
    destrava: "Um funil de mensagens pensado pra abordagem natural já vem pronto.",
    icon: MessageCircle,
  },
  {
    trava: "Não sabe o que mandar?",
    destrava: "Mensagens prontas pra iniciar a conversa e avançar na venda.",
    icon: Handshake,
  },
  {
    trava: "Fechou e travou no próximo passo?",
    destrava: "O onboarding e o briefing do cliente se organizam sozinhos.",
    icon: ClipboardList,
  },
];

const productionPains: Pain[] = [
  {
    trava: "Não sabe fazer contrato?",
    destrava: "O Calango gera a estrutura pra você formalizar o serviço.",
    icon: FileSignature,
  },
  {
    trava: "Precisa produzir rápido?",
    destrava: "Copy e imagem saem do contexto do cliente, e o Flow automatiza o fluxo.",
    icon: Sparkles,
  },
  {
    trava: "Precisa de imagens?",
    destrava: "Imagens e sessões de foto direto do briefing salvo.",
    icon: ImageIcon,
  },
  {
    trava: "Quer analisar o perfil do cliente?",
    destrava: "A análise acontece dentro do fluxo, antes de você criar.",
    icon: ScanSearch,
  },
];

function PainCard({ item, direction }: { item: Pain; direction: "left" | "right" }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={revealX(direction === "left" ? -20 : 20)}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 transition-colors duration-300 hover:border-accent/20 md:p-6"
    >
      {/* left accent bar — lights amber on hover */}
      <span className="absolute left-0 top-0 h-full w-[2px] bg-accent/0 transition-colors duration-300 group-hover:bg-accent/70" />

      {/* trava — quiet, muted */}
      <p className="mb-3 text-sm font-semibold text-zinc-500">{item.trava}</p>

      {/* destrava — the confident answer */}
      <div className="flex items-start gap-3">
        <span className="mt-px flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-accent/15 bg-accent/[0.08] text-accent transition-colors duration-300 group-hover:bg-accent/15">
          <Icon size={15} strokeWidth={2} />
        </span>
        <p className="text-sm leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-white">
          {item.destrava}
        </p>
      </div>
    </motion.div>
  );
}

function Column({
  label,
  caption,
  pains,
  direction,
}: {
  label: string;
  caption: string;
  pains: Pain[];
  direction: "left" | "right";
}) {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal(10)}
        className="mb-6 flex items-baseline gap-3"
      >
        <p className="font-display text-lg font-bold text-white md:text-xl">{label}</p>
        <p className="text-[11px] uppercase tracking-wider text-zinc-600">{caption}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={staggerContainer(0.08)}
        className="space-y-3 md:space-y-4"
      >
        {pains.map((item, i) => (
          <PainCard key={i} item={item} direction={direction} />
        ))}
      </motion.div>
    </div>
  );
}

export default function PainPoints() {
  return (
    <section
      className="atmo relative overflow-hidden section-pad px-4"
      style={{ background: "#040404" }}
      aria-label="Travas do designer"
    >
      <div className="fade-seam absolute inset-x-0 top-0" aria-hidden />
      {/* single calm amber whisper, top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{ background: "rgba(255,170,0,0.045)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mb-14 text-center md:mb-20"
        >
          <motion.span variants={reveal(12)} className="eyebrow mb-6 inline-flex">
            Da venda à entrega
          </motion.span>
          <motion.h2
            variants={reveal(20)}
            className="headline-tight font-display text-4xl font-black sm:text-5xl md:text-6xl"
          >
            Onde você trava,{" "}
            <span className="text-gradient-animated">o Calango destrava.</span>
          </motion.h2>
          <motion.p
            variants={reveal(16)}
            className="mx-auto mt-5 max-w-xl text-base text-txt-secondary md:text-lg"
          >
            Todo gargalo do designer já vem com resposta pronta.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          <Column
            label="Antes de fechar"
            caption="a venda"
            pains={salesPains}
            direction="left"
          />
          <Column
            label="Depois de fechar"
            caption="a entrega"
            pains={productionPains}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
