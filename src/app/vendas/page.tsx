"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  Target,
  MessageCircle,
  BarChart3,
  DollarSign,
  Rocket,
  Send,
  TrendingUp,
  Crown,
  CheckCircle2,
  CircleDollarSign,
  AlertTriangle,
  Search,
  Clock,
  UserX,
  Brain,
  RefreshCw,
  ArrowRight,
  Eye,
  Heart,
  ShieldAlert,
  Repeat,
  CalendarClock,
  Lightbulb,
  Flame,
  Gift,
  Star,
  Users,
  Calculator,
  CreditCard,
  Timer,
  Trophy,
} from "lucide-react";
import {
  FloatingIcon,
  GlowOrb,
  PopupToast,
  ProgressBar,
  SlideCentered,
  Badge,
} from "@/components/apresentacao/shared";

/* ── iPhone Mockup ── */
function IPhoneMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ maxWidth: 280 }}>
      {/* Phone frame */}
      <div className="rounded-[36px] border-[3px] border-white/[0.15] bg-[#111] p-2 shadow-2xl shadow-black/60">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#111] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[28px] bg-[#0a0a0c] overflow-hidden min-h-[420px] relative">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Pipeline Visual ── */
function FunnelPipeline() {
  const stages = [
    { label: "Prospecção", icon: Search, color: "from-blue-500 to-blue-600", count: "150" },
    { label: "Abordagem", icon: Send, color: "from-purple-500 to-purple-600", count: "120" },
    { label: "Diagnóstico", icon: MessageCircle, color: "from-cyan-500 to-cyan-600", count: "60" },
    { label: "Follow-up", icon: RefreshCw, color: "from-amber-500 to-amber-600", count: "40" },
    { label: "Fechamento", icon: Trophy, color: "from-emerald-500 to-emerald-600", count: "15" },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto">
      {stages.map((stage, i) => {
        const Icon = stage.icon;
        const width = 100 - i * 15;
        return (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="flex items-center gap-4 mb-3"
          >
            <div
              className={`bg-gradient-to-r ${stage.color} rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg`}
              style={{ width: `${width}%` }}
            >
              <Icon size={16} className="text-white flex-shrink-0" />
              <span className="text-sm font-bold text-white">{stage.label}</span>
              <span className="text-xs text-white/60 ml-auto font-bold">{stage.count}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Vendas() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSteps = 27;
  const touchStart = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }, [step]);

  const goPrev = useCallback(() => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }, [step]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "80%" : "-80%",
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({
      x: d > 0 ? "-80%" : "80%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const renderStep = () => {
    switch (step) {
      /* ═══ SLIDE 1 — ABERTURA ═══ */
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Target} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={DollarSign} className="top-[12%] right-[10%]" size={36} delay={1} />
            <FloatingIcon icon={Sparkles} className="bottom-[18%] left-[12%]" size={32} delay={2} />
            <FloatingIcon icon={MessageCircle} className="bottom-[15%] right-[8%]" size={34} delay={0.5} />
            <FloatingIcon icon={Zap} className="top-[30%] left-[25%]" size={28} delay={1.5} />
            <FloatingIcon icon={TrendingUp} className="top-[25%] right-[22%]" size={30} delay={2.5} />
            <GlowOrb className="top-1/4 left-1/4" size="w-[600px] h-[600px]" />
            <GlowOrb className="bottom-1/4 right-1/4" color="bg-accent-end/[0.03]" size="w-[500px] h-[500px]" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Badge icon={Target} text="Vendas para Designers" />

              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.05]">
                Você não tem problema de{" "}
                <span className="text-gradient-animated">talento</span>.
                <br />
                Você tem problema de{" "}
                <span className="text-gradient-animated">método</span>.
              </h1>
              <p className="text-txt-secondary text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Como sair do medo de vender e construir um{" "}
                <span className="text-white font-bold">
                  processo que trabalha por você
                </span>{" "}
                todos os dias.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-lg uppercase tracking-wider shadow-glow cursor-pointer"
                onClick={goNext}
              >
                <span>Começar</span>
                <ChevronRight size={22} />
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 2 — A DOR ═══ */
      case 1:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={AlertTriangle} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <FloatingIcon icon={Brain} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" color="bg-red-500/[0.03]" />

            <Badge icon={AlertTriangle} text="Você se identifica?" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              Você já passou por{" "}
              <span className="text-gradient-animated">alguma dessas</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {[
                { text: "Não sei como abordar um cliente novo", icon: UserX },
                { text: "Mando mensagem e fico ansioso esperando", icon: Clock },
                { text: "Fico com medo de parecer chato ou desesperado", icon: ShieldAlert },
                { text: "Não sei quanto cobrar", icon: DollarSign },
                { text: "Tenho medo de que a IA vai me substituir", icon: Brain },
                { text: "Sei trabalhar, mas não sei vender", icon: Target },
              ].map(({ text, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <span className="text-base text-txt-secondary leading-snug">
                    &ldquo;{text}&rdquo;
                  </span>
                </motion.div>
              ))}
            </div>

            <PopupToast
              icon={AlertTriangle}
              text="Todo mundo já sentiu isso"
              className="bottom-[8%] right-[8%]"
              delay={1.2}
              bgColor="bg-red-500/10"
              borderColor="border-red-500/20"
              color="text-red-400"
            />
          </SlideCentered>
        );

      /* ═══ SLIDE 3 — O ELEFANTE NA SALA ═══ */
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                O problema não é que{" "}
                <span className="text-red-400">você é ruim</span>.
              </h2>
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08]">
                O problema é que{" "}
                <span className="text-gradient-animated">
                  ninguém te ensinou a vender
                </span>
                .
              </h2>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 4 — INTRODUÇÃO AO MÉTODO ═══ */
      case 3:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={BarChart3} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Zap} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" />

            <Badge icon={BarChart3} text="Método" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Os grandes times comerciais{" "}
              <span className="text-gradient-animated">
                não vendem no feeling
              </span>
              .
            </h2>

            <p className="text-txt-secondary text-lg md:text-2xl mb-10 leading-relaxed max-w-3xl">
              Toda empresa que vende bem tem uma coisa que você provavelmente não
              tem:{" "}
              <span className="text-white font-bold">Um processo.</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-2xl max-w-2xl w-full"
            >
              <p className="text-lg text-txt-secondary leading-relaxed">
                Aquele vendedor que parece que{" "}
                <span className="text-white font-bold">nasceu pra vender</span>?
                Ele não é mais talentoso que você. Ele só tem um{" "}
                <span className="text-gradient-animated font-bold">script</span>.
                Um{" "}
                <span className="text-gradient-animated font-bold">método</span>.
                E ele segue esse método{" "}
                <span className="text-white font-bold">todos os dias</span>.
              </p>
            </motion.div>
          </SlideCentered>
        );

      /* ═══ SLIDE 5 — VISÃO GERAL DO FUNIL ═══ */
      case 4:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={Target} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={TrendingUp} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" />

            <Badge icon={Target} text="O Funil" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight leading-[1.08]">
              O funil que os{" "}
              <span className="text-gradient-animated">melhores times</span> usam
            </h2>
            <p className="text-txt-secondary text-lg md:text-xl mb-10">
              5 etapas. Cada uma com objetivo claro.
            </p>

            <FunnelPipeline />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-txt-secondary mt-8"
            >
              Isso não é mágica. É{" "}
              <span className="text-gradient-animated font-bold">engenharia</span>.
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 6 — PROSPECÇÃO ═══ */
      case 5:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={Search} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Eye} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" />

            <Badge icon={Search} text="Etapa 1 — Prospecção" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Antes de mandar mensagem,{" "}
              <span className="text-gradient-animated">pesquisa</span>.
            </h2>

            <p className="text-txt-secondary text-lg md:text-xl mb-10 max-w-2xl">
              Você não prospecta às cegas.{" "}
              <span className="text-white font-bold">Você estuda antes.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
              {[
                { icon: Search, text: "O que o negócio dele faz?" },
                { icon: Eye, text: "Como está o Instagram, o site, o perfil?" },
                { icon: Target, text: "O que está fraco? Onde está a oportunidade?" },
                { icon: Users, text: "Tem alguém em comum que pode abrir a porta?" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-blue-500/[0.04] border border-blue-500/10 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <span className="text-base text-txt-secondary">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* iPhone mockup com imagem de prospect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <IPhoneMockup className="w-[220px]">
                <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div>
                    <p className="text-white text-xs font-bold">Prospect</p>
                    <p className="text-white/50 text-[9px]">online</p>
                  </div>
                </div>
                <div className="p-3">
                  <img
                    src="/images/vendas/prospect.webp"
                    alt="Mensagem de prospecção"
                    className="w-full rounded-lg"
                  />
                </div>
              </IPhoneMockup>
            </motion.div>

            <PopupToast icon={Search} text="Contexto antes de oferta!" className="bottom-[8%] right-[10%]" delay={1} bgColor="bg-blue-500/10" borderColor="border-blue-500/20" color="text-blue-400" />
          </SlideCentered>
        );

      /* ═══ SLIDE 7 — PRIMEIRA ABORDAGEM ═══ */
      case 6:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={Send} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={MessageCircle} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 right-1/3" color="bg-purple-500/[0.03]" />

            <Badge icon={Send} text="Etapa 2 — Abordagem" color="text-purple-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight leading-[1.08]">
              O objetivo da primeira mensagem{" "}
              <span className="text-red-400">não é vender</span>.
            </h2>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl md:text-4xl mb-10 text-gradient-animated">
              É fazer o lead responder.
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-center w-full max-w-4xl">
              {/* iPhone mockup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <IPhoneMockup className="w-[250px]">
                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <div>
                      <p className="text-white text-xs font-bold">Lead</p>
                      <p className="text-white/50 text-[9px]">online</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <img
                      src="/images/vendas/abordar.webp"
                      alt="Mensagem de abordagem"
                      className="w-full rounded-lg"
                    />
                  </div>
                </IPhoneMockup>
              </motion.div>

              {/* Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1 space-y-4"
              >
                <div className="glass-card p-6 rounded-2xl text-left">
                  <p className="text-lg text-txt-secondary leading-relaxed">
                    <span className="text-white font-bold">Curta.</span>{" "}
                    <span className="text-white font-bold">Específica.</span>{" "}
                    Não se apresenta. Não vende nada.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-purple-500/[0.06] border border-purple-500/15 text-left">
                  <p className="text-base text-txt-secondary leading-relaxed">
                    Só faz uma pergunta que mostra que{" "}
                    <span className="text-white font-bold">
                      você viu o negócio dele
                    </span>
                    . Isso abre conversa. E conversa abre venda.
                  </p>
                </div>
              </motion.div>
            </div>

            <PopupToast icon={CheckCircle2} text="Lead respondeu!" className="bottom-[8%] left-[10%]" delay={1.2} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
          </SlideCentered>
        );

      /* ═══ SLIDE 8 — DIAGNÓSTICO ═══ */
      case 7:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Heart} className="top-[6%] left-[5%]" size={36} delay={0} color="text-cyan-400/20" />
            <FloatingIcon icon={MessageCircle} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" color="bg-cyan-500/[0.03]" />

            <Badge icon={MessageCircle} text="Etapa 3 — Diagnóstico" color="text-cyan-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Você é{" "}
              <span className="text-gradient-animated">médico</span>, não
              vendedor de loja.
            </h2>

            <p className="text-txt-secondary text-lg md:text-xl mb-10 max-w-2xl">
              Quando o lead responde, você{" "}
              <span className="text-red-400 font-bold">não manda proposta</span>.
              Você pergunta. Você ouve. Você entende a{" "}
              <span className="text-white font-bold">dor real</span>.
            </p>

            <div className="space-y-4 w-full max-w-2xl mb-8">
              {[
                "Me conta... como tá funcionando a parte de [tema] hoje?",
                "Vocês já tentaram alguma coisa pra resolver isso?",
                "Se nada mudar nos próximos 6 meses, como fica?",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/10 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-base text-txt-secondary italic">
                    &ldquo;{text}&rdquo;
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-5 rounded-2xl bg-accent/[0.04] border border-accent/10 max-w-2xl"
            >
              <p className="text-lg font-bold text-white">
                O diagnóstico é onde você constrói{" "}
                <span className="text-gradient-animated">confiança</span> e
                entende onde dói de verdade.
              </p>
            </motion.div>
          </SlideCentered>
        );

      /* ═══ SLIDE 9 — CLIENTE NÃO RESPONDEU ═══ */
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-amber-500/[0.03]" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <Badge icon={Clock} text="E agora?" color="text-amber-400" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                Ele não respondeu.{" "}
                <span className="text-amber-400">E agora?</span>
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <p className="font-poppins font-black text-3xl sm:text-4xl text-white mb-4">
                  Calma. Ele não te odiou.
                </p>
                <p className="text-xl text-txt-secondary">
                  Ele só está com a{" "}
                  <span className="text-white font-bold">
                    vida acontecendo
                  </span>
                  .
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-txt-secondary max-w-2xl mx-auto"
              >
                Quanto tempo <span className="text-white font-bold">você</span>{" "}
                demora pra responder mensagem de família? De amigo? Tem alguma
                mensagem que você abriu, viu, e{" "}
                <span className="text-amber-400 font-bold">
                  não respondeu até hoje
                </span>
                ?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 10 — NÃO É REJEIÇÃO ═══ */
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                A vida dele{" "}
                <span className="text-gradient-animated">não parou</span>
                <br />
                quando você mandou a mensagem.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 max-w-2xl mx-auto"
              >
                {[
                  "Ele abriu sua mensagem no ônibus...",
                  "No meio de uma reunião...",
                  "Quando o filho tava chorando...",
                  "E falou: \"depois eu vejo isso\".",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    className="text-lg md:text-xl text-txt-secondary"
                  >
                    {text}
                  </motion.p>
                ))}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-2xl md:text-3xl font-poppins font-bold text-white pt-4"
                >
                  Isso não é rejeição.{" "}
                  <span className="text-gradient-animated">É o dia a dia.</span>
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 11 — O ESPELHO ═══ */
      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-red-500/[0.04]" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Às vezes você acha que está sendo{" "}
                <span className="text-red-400">rejeitado</span>.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-10 text-txt-secondary">
                Mas a real é outra.
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-8 rounded-2xl border-red-500/10 max-w-2xl mx-auto"
              >
                <p className="text-lg text-txt-secondary leading-relaxed">
                  O problema não é o silêncio do lead. O problema é o que{" "}
                  <span className="text-white font-bold">
                    você faz com esse silêncio na sua cabeça
                  </span>
                  . Você cria uma história de rejeição que{" "}
                  <span className="text-red-400 font-bold">não existe</span>. E
                  aí você para de mandar mensagem. E o mês passa. E o cliente
                  não aparece. Porque{" "}
                  <span className="text-white font-bold">
                    você desistiu de um lead que só estava ocupado
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 12 — FOLLOW-UP ═══ */
      case 11:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={RefreshCw} className="top-[6%] left-[5%]" size={36} delay={0} color="text-amber-400/20" />
            <FloatingIcon icon={CalendarClock} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-0 left-1/3" color="bg-amber-500/[0.03]" />

            <Badge icon={RefreshCw} text="Etapa 4 — Follow-up" color="text-amber-400" />

            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight leading-[1.08]">
              <span className="text-gradient-animated">80%</span> das vendas
              acontecem depois do 5º contato.
            </h2>
            <p className="text-xl md:text-2xl text-txt-secondary mb-10">
              A maioria das pessoas{" "}
              <span className="text-red-400 font-bold">desiste no 2º</span>.
            </p>

            {/* Cadência visual */}
            <div className="w-full max-w-2xl space-y-3">
              {[
                { day: "Dia 0", text: "Primeira abordagem", color: "border-blue-500/20 bg-blue-500/[0.04]", dot: "bg-blue-400" },
                { day: "Dia 2", text: "\"E aí, conseguiu ver?\"", color: "border-purple-500/20 bg-purple-500/[0.04]", dot: "bg-purple-400" },
                { day: "Dia 5", text: "Manda um insight útil pro negócio dele", color: "border-cyan-500/20 bg-cyan-500/[0.04]", dot: "bg-cyan-400" },
                { day: "Dia 10", text: "Comenta algo que ele postou", color: "border-amber-500/20 bg-amber-500/[0.04]", dot: "bg-amber-400" },
                { day: "Dia 15", text: "Recontextualiza com alguma novidade", color: "border-accent/20 bg-accent/[0.04]", dot: "bg-accent" },
                { day: "Dia 30", text: "Último contato com leveza", color: "border-emerald-500/20 bg-emerald-500/[0.04]", dot: "bg-emerald-400" },
              ].map(({ day, text, color, dot }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${color}`}
                >
                  <div className="flex items-center gap-3 min-w-[80px]">
                    <div className={`w-3 h-3 rounded-full ${dot}`} />
                    <span className="text-sm font-bold text-white">{day}</span>
                  </div>
                  <ArrowRight size={14} className="text-txt-muted flex-shrink-0" />
                  <span className="text-base text-txt-secondary">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Mockup com imagem de follow-up */}
            <div className="flex gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <IPhoneMockup className="w-[180px]">
                  <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20" />
                    <p className="text-white text-[10px] font-bold">Não respondeu</p>
                  </div>
                  <div className="p-2">
                    <img src="/images/vendas/noresposta.webp" alt="Follow-up não respondeu" className="w-full rounded-lg" />
                  </div>
                </IPhoneMockup>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <IPhoneMockup className="w-[180px]">
                  <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20" />
                    <p className="text-white text-[10px] font-bold">Pensando</p>
                  </div>
                  <div className="p-2">
                    <img src="/images/vendas/pesando.webp" alt="Follow-up pensando" className="w-full rounded-lg" />
                  </div>
                </IPhoneMockup>
              </motion.div>
            </div>

            <PopupToast icon={Repeat} text="Nunca mande mensagem vazia!" className="bottom-[6%] right-[10%]" delay={1.4} bgColor="bg-amber-500/10" borderColor="border-amber-500/20" color="text-amber-400" />
          </SlideCentered>
        );

      /* ═══ SLIDE 13 — O PROBLEMA REAL ═══ */
      case 12:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={AlertTriangle} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-red-500/[0.03]" />

            <Badge icon={AlertTriangle} text="O problema real" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Você sabe o que fazer.{" "}
              <span className="text-red-400">Mas não faz.</span>
            </h2>
            <p className="text-2xl text-txt-secondary mb-10">Por quê?</p>

            <div className="space-y-4 w-full max-w-2xl">
              {[
                { icon: AlertTriangle, text: "Falta de ferramentas práticas pra organizar tudo" },
                { icon: Brain, text: "Planilha do lado, WhatsApp do outro, cabeça em mil lugares" },
                { icon: Search, text: "Não sabe quem já foi prospectado, quem respondeu, quem precisa de follow-up" },
                { icon: Timer, text: "Sem controle, você esquece. Sem método, você para." },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-red-500/[0.04] border border-red-500/10 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <span className="text-base text-txt-secondary">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-txt-secondary mt-8 max-w-xl"
            >
              O problema não é preguiça. É{" "}
              <span className="text-gradient-animated font-bold">fricção</span>.
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 14 — CRM NA UNHA ═══ */
      case 13:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Flame} className="top-[6%] left-[5%]" size={36} delay={0} color="text-red-400/20" />
            <GlowOrb className="top-0 left-1/3" color="bg-red-500/[0.03]" />

            <Badge icon={Flame} text="O pesadelo do DIY" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              Como é tentar fazer isso{" "}
              <span className="text-red-400">sem ferramenta</span>:
            </h2>

            <div className="w-full max-w-2xl">
              {[
                "Abre o Google Sheets e vai colocar os contatos um por um",
                "Copia o número e vai manualmente no WhatsApp",
                "Copia a mensagem, cola, manda",
                "Volta no Sheets, marca que o contato foi feito",
                "No dia seguinte, abre de novo, vai procurar quem precisa de follow-up",
                "Repete tudo isso. Todos. Os. Dias.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 border-b border-white/[0.04] ${
                    i === 5 ? "border-b-0" : ""
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-poppins font-black text-sm flex-shrink-0 ${
                    i === 5
                      ? "bg-red-500/20 text-red-400"
                      : "bg-white/[0.06] text-txt-muted"
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`text-base text-left ${
                    i === 5
                      ? "text-red-400 font-bold"
                      : "text-txt-secondary"
                  }`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 p-6 rounded-2xl bg-red-500/[0.06] border border-red-500/15 max-w-xl"
            >
              <p className="text-lg text-txt-secondary">
                No terceiro dia você para. No quarto finge que vai retomar.
                Na segunda semana a planilha está{" "}
                <span className="text-red-400 font-bold">abandonada</span>.
              </p>
            </motion.div>
          </SlideCentered>
        );

      /* ═══ SLIDE 15 — CALANGO STUDIO ═══ */
      case 14:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Sparkles} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={Zap} className="top-[12%] right-[10%]" size={36} delay={1} />
            <FloatingIcon icon={Rocket} className="bottom-[18%] left-[12%]" size={32} delay={2} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[1000px]"
            >
              <Badge icon={Sparkles} text="A Solução" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                E se tudo isso fosse{" "}
                <span className="text-gradient-animated">num lugar só</span>?
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <p className="text-xl md:text-2xl text-txt-secondary mb-4">
                  <span className="text-gradient-animated font-black text-3xl md:text-4xl">
                    Calango Studio
                  </span>
                </p>
                <p className="text-lg text-txt-secondary">
                  A plataforma que o designer precisava ter{" "}
                  <span className="text-white font-bold">desde sempre</span>.
                </p>
              </motion.div>

              {/* Pipeline mockup + Funil image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative w-full max-w-3xl mx-auto"
              >
                <img
                  src="/images/vendas/funil.webp"
                  alt="Pipeline do Calango Studio"
                  className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
                />
                <PopupToast icon={Zap} text="Tudo automatizado!" className="-top-3 -right-3" delay={1} />
              </motion.div>

              {/* Proposta mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-6"
              >
                <IPhoneMockup className="w-[200px]">
                  <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20" />
                    <p className="text-white text-[10px] font-bold">Proposta enviada</p>
                  </div>
                  <div className="p-2">
                    <img src="/images/vendas/proposta.webp" alt="Proposta" className="w-full rounded-lg" />
                  </div>
                </IPhoneMockup>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 16 — SONHOS E REALIDADE ═══ */
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <Badge icon={Lightbulb} text="Momento de decisão" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
                Você chegou até aqui.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-txt-secondary mb-10">
                Agora a pergunta que importa é:
              </h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-gradient-animated"
              >
                O que você vai fazer com isso?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 17 — PADRÃO A QUEBRAR ═══ */
      case 16:
        return (
          <SlideCentered maxW="max-w-[1000px]">
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-red-500/[0.03]" />

            <Badge icon={ShieldAlert} text="Atenção" color="text-red-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tight leading-[1.08]">
              A mudança está{" "}
              <span className="text-gradient-animated">mais perto</span> do que
              parece.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border-red-500/10 w-full"
            >
              <p className="text-lg md:text-xl text-txt-secondary leading-relaxed mb-6">
                Mas existe uma chance grande de que você saia dessa aula e tente
                fazer tudo isso{" "}
                <span className="text-red-400 font-bold">sozinho</span>. Igual
                tentou até hoje.
              </p>
              <div className="space-y-3">
                {[
                  "Vai quebrar a cabeça pra montar uma planilha",
                  "Vai tentar criar um processo do zero",
                  "Vai gastar horas num problema que já tem solução",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl font-poppins font-bold text-white mt-8"
            >
              O problema nunca foi{" "}
              <span className="text-gradient-animated">saber o que fazer</span>.
              <br />É ter o sistema que te{" "}
              <span className="text-white">obriga a fazer</span>.
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 18 — OS DOIS PERFIS ═══ */
      case 17:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={Users} className="top-[6%] left-[5%]" size={36} delay={0} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Users} text="Dois tipos" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-12 tracking-tight leading-[1.08]">
              Tem{" "}
              <span className="text-gradient-animated">dois tipos</span> de
              profissional nessa sala.
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
              {/* Investe */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-emerald-400">
                    Profissional que Investe
                  </h3>
                </div>
                {[
                  "Enxerga ferramenta como alavanca",
                  "Coloca dinheiro no que acelera resultado",
                  "Toma decisão agora",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.04]">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </div>
                ))}
              </motion.div>

              {/* VS */}
              <div className="flex items-center justify-center lg:flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center"
                >
                  <span className="font-poppins font-black text-sm text-txt-muted">VS</span>
                </motion.div>
              </div>

              {/* Economiza */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle size={22} className="text-red-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-red-400">
                    Profissional que Economiza
                  </h3>
                </div>
                {[
                  "Poupa na empresa",
                  "Gasta em coisa que não devolve nada",
                  "Acha que vai dar conta sozinho",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.04]">
                    <AlertTriangle size={16} className="text-red-400/60 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </SlideCentered>
        );

      /* ═══ SLIDE 19 — ABRINDO O PITCH ═══ */
      case 18:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={Brain} className="top-[12%] right-[10%]" size={36} delay={1} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-8 tracking-tight leading-[1.08]">
                Você percebeu hoje que prospectar é{" "}
                <span className="text-gradient-animated">simples</span>.
              </h2>

              <div className="space-y-4 max-w-2xl mx-auto text-left">
                {[
                  "Você entendeu que precisa de um método que te prenda nele.",
                  "Você entendeu que a IA está crescendo num ritmo que não espera ninguém.",
                  "E que quem não aprender a gerar resultado com ela vai ficar para trás.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl md:text-2xl font-poppins font-bold text-white mt-10"
              >
                A questão agora não é{" "}
                <span className="text-gradient-animated">se</span> você vai
                mudar. É{" "}
                <span className="text-gradient-animated">quando</span>.
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 20 — URGÊNCIA REAL ═══ */
      case 19:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.05]" size="w-[800px] h-[800px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-10 shadow-glow"
              >
                <Flame size={40} className="text-black" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Hoje você está a um passo de{" "}
                <span className="text-red-400">ficar pra trás</span>.
              </h2>
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08]">
                Mas também está a um passo de{" "}
                <span className="text-gradient-animated">sair na frente</span>.
              </h2>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 21 — INTENSIFICANDO A DOR ═══ */
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-red-500/[0.03]" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight leading-[1.08]">
                Você está aqui porque{" "}
                <span className="text-red-400">procrastinou muito</span>.
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 text-xl md:text-2xl text-txt-secondary mb-10"
              >
                <p>Ficou sem método.</p>
                <p>Teve medo de rejeição.</p>
                <p>Teve medo do futuro.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-accent/[0.06] border border-accent/15 max-w-xl mx-auto"
              >
                <p className="text-xl md:text-2xl font-poppins font-bold text-white">
                  Agora você tem um{" "}
                  <span className="text-gradient-animated">método</span>. Tem uma{" "}
                  <span className="text-gradient-animated">ferramenta</span>. Tem
                  um <span className="text-gradient-animated">caminho</span>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 22 — A PROPOSTA ═══ */
      case 21:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Gift} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Sparkles} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Gift} text="Proposta" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              Eu tenho uma{" "}
              <span className="text-gradient-animated">proposta</span> pra você.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl w-full max-w-2xl text-left"
            >
              <p className="text-lg text-txt-secondary mb-6 leading-relaxed">
                Nesse semestre, na comunidade, eu vou te ensinar:
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Como criar sites e pequenas plataformas com IA e vender isso pra clientes" },
                  { icon: Target, text: "Como prospectar todos os dias com processo real" },
                  { icon: Rocket, text: "Como usar as ferramentas que colocam você à frente" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-accent/[0.04] border border-accent/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="text-base text-txt-secondary leading-relaxed">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-txt-secondary mt-8"
            >
              E se você aproveitar a oferta de hoje,{" "}
              <span className="text-gradient-animated font-bold">
                vai sair muito na frente
              </span>
              .
            </motion.p>
          </SlideCentered>
        );

      /* ═══ SLIDE 23 — A OFERTA ═══ */
      case 22:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Crown} className="top-[6%] left-[5%]" size={38} delay={0} />
            <FloatingIcon icon={Star} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-accent/[0.04]" />

            <Badge icon={Crown} text="Oferta Exclusiva" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-[1.08]">
              O que está na mesa{" "}
              <span className="text-gradient-animated">hoje</span>
            </h2>

            {/* Tabela de valores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-xl rounded-2xl border border-white/[0.08] overflow-hidden mb-8"
            >
              <div className="bg-white/[0.03] px-6 py-4 border-b border-white/[0.06]">
                <div className="flex justify-between text-sm font-bold text-txt-muted uppercase tracking-wider">
                  <span>Produto</span>
                  <span>Valor Normal</span>
                </div>
              </div>
              {[
                { name: "Comunidade VIP", value: "R$ 997,00" },
                { name: "Calango Studio", value: "R$ 169,90/mês" },
                { name: "Designer Criador", value: "R$ 697,00" },
              ].map(({ name, value }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex justify-between px-6 py-4 border-b border-white/[0.04]"
                >
                  <span className="text-base text-white font-bold">{name}</span>
                  <span className="text-base text-txt-secondary line-through">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Oferta especial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative rounded-[28px] bg-black/50 border-2 border-accent/40 p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.12)] max-w-xl w-full"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black uppercase tracking-[0.18em] shadow-lg animate-pulse">
                Apenas Hoje
              </span>

              <p className="text-lg text-txt-secondary mb-2 mt-2">
                Comunidade VIP + Designer Criador + 1 mês gratuito de Calango
                Studio
              </p>

              <div className="flex items-baseline gap-1 mb-4 justify-center">
                <span className="text-base text-txt-muted">R$</span>
                <span className="font-poppins font-black text-6xl text-gradient-animated">
                  597
                </span>
                <span className="text-base text-txt-muted">,00</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                APENAS HOJE
              </div>
            </motion.div>
          </SlideCentered>
        );

      /* ═══ SLIDE 24 — A MATEMÁTICA ═══ */
      case 23:
        return (
          <SlideCentered maxW="max-w-[1100px]">
            <FloatingIcon icon={Calculator} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={TrendingUp} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-emerald-500/[0.03]" />

            <Badge icon={Calculator} text="Faça a conta" color="text-emerald-400" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.08]">
              Para e{" "}
              <span className="text-gradient-animated">pensa comigo</span>.
            </h2>

            <p className="text-lg text-txt-secondary mb-8 max-w-2xl">
              Com 1 mês gratuito de Calango Studio, você pode prospectar{" "}
              <span className="text-white font-bold">150 clientes</span> com
              facilidade. 5 contatos por dia. Só.
            </p>

            {/* Tabela de conversão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-md rounded-2xl border border-emerald-500/20 overflow-hidden mb-8"
            >
              <div className="bg-emerald-500/[0.06] px-6 py-4 border-b border-emerald-500/10">
                <div className="flex justify-between text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  <span>Conversão</span>
                  <span>Clientes Fechados</span>
                </div>
              </div>
              {[
                { rate: "10%", clients: "15 clientes", highlight: false },
                { rate: "5%", clients: "7 clientes", highlight: false },
                { rate: "Conservador", clients: "4 clientes", highlight: true },
              ].map(({ rate, clients, highlight }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className={`flex justify-between px-6 py-4 border-b border-white/[0.04] ${
                    highlight ? "bg-emerald-500/[0.08]" : ""
                  }`}
                >
                  <span className="text-base text-txt-secondary">{rate}</span>
                  <span className={`text-base font-bold ${
                    highlight ? "text-emerald-400" : "text-white"
                  }`}>
                    {clients}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="p-6 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/15 max-w-xl"
            >
              <p className="text-xl font-poppins font-bold text-white">
                <span className="text-emerald-400">4 clientes</span> paga esse
                investimento e ainda te dá{" "}
                <span className="text-gradient-animated">lucro</span>.
              </p>
            </motion.div>

            <PopupToast icon={CircleDollarSign} text="O único risco é não tentar" className="bottom-[8%] right-[10%]" delay={1.4} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
          </SlideCentered>
        );

      /* ═══ SLIDE 25 — OBJEÇÃO DO DINHEIRO ═══ */
      case 24:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[600px] h-[600px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[800px]"
            >
              <Badge icon={CreditCard} text="Objeção" />

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-8 tracking-tight leading-[1.08]">
                &ldquo;De onde vou tirar esse valor?&rdquo;
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 rounded-2xl text-left"
              >
                <p className="text-lg text-txt-secondary leading-relaxed mb-4">
                  Quando você se comprometer de verdade com uma ferramenta, com
                  um processo, com uma meta, o ser humano{" "}
                  <span className="text-white font-bold">
                    encontra o caminho
                  </span>
                  .
                </p>
                <p className="text-lg text-txt-secondary leading-relaxed">
                  Você já encontrou dinheiro pra coisa que{" "}
                  <span className="text-gradient-animated font-bold">
                    queria de verdade
                  </span>{" "}
                  antes, não encontrou?
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 26 — FECHAMENTO FINAL ═══ */
      case 25:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.05]" size="w-[800px] h-[800px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-[900px]"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-10 shadow-glow"
              >
                <Crown size={40} className="text-black" />
              </motion.div>

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
                Essa oferta é{" "}
                <span className="text-gradient-animated">única</span>.
              </h2>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-txt-secondary mb-10">
                Exclusiva. Pra hoje. Pra quem toma decisão{" "}
                <span className="text-white font-bold">agora</span>.
              </h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-txt-secondary max-w-2xl mx-auto leading-relaxed"
              >
                Daqui 6 meses, você quer olhar pra trás e ver que{" "}
                <span className="text-gradient-animated font-bold">
                  aproveitou esse momento
                </span>
                ? Ou quer olhar e ver que estava com medo, e que esse medo
                custou{" "}
                <span className="text-red-400 font-bold">
                  clientes, renda e tempo
                </span>
                ?
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ SLIDE 27 — CALL TO ACTION ═══ */
      case 26:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[6%] left-[5%]" size={40} delay={0} />
            <FloatingIcon icon={Crown} className="top-[8%] right-[6%]" size={34} delay={0.5} />
            <FloatingIcon icon={Sparkles} className="bottom-[12%] left-[8%]" size={30} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-[10%] right-[5%]" size={28} delay={0.3} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.04]" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg w-full"
            >
              <Badge icon={Rocket} text="Próximos Passos" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-10 tracking-tight leading-tight">
                O único passo que falta é o{" "}
                <span className="text-gradient-animated">seu</span>.
              </h2>

              <div className="space-y-4 mb-10 text-left">
                {[
                  { num: "1", text: "Entra em contato agora" },
                  { num: "2", text: "Garante sua vaga com a oferta de hoje" },
                  { num: "3", text: "Começa a prospectar amanhã cedo" },
                ].map(({ num, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent/[0.06] border border-accent/15"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-accent-end flex items-center justify-center font-poppins font-black text-black text-sm flex-shrink-0">
                      {num}
                    </div>
                    <span className="text-base font-bold text-white">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card p-6 rounded-2xl mb-8"
              >
                <p className="text-lg text-txt-secondary">
                  Você aprendeu o método. Você tem a ferramenta. Você tem o
                  caminho.
                </p>
              </motion.div>

              {/* CTA card com oferta */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="relative rounded-[28px] bg-black/50 border border-accent/30 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.08)]"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black uppercase tracking-[0.18em] shadow-lg animate-pulse">
                  Oferta Exclusiva
                </span>

                <div className="flex items-baseline gap-1 mb-4 mt-2 justify-center">
                  <span className="text-base text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-5xl text-gradient-animated">
                    597
                  </span>
                  <span className="text-base text-txt-muted">,00</span>
                </div>

                <p className="text-sm text-txt-secondary mb-6">
                  Comunidade VIP + Designer Criador + 1 mês de Calango Studio
                </p>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center py-5 rounded-2xl font-black text-lg tracking-[0.14em] uppercase bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] transition-all duration-300"
                >
                  Quero Garantir Minha Vaga
                </motion.button>

                <p className="text-xs text-txt-muted mt-5 uppercase tracking-wider font-bold flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Apenas hoje — vagas limitadas
                </p>
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="h-screen w-screen bg-bg-primary relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[200px]" />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="font-poppins font-black text-base text-white">
            CALANGO<span className="text-gradient-animated">.STUDIO</span>
          </span>
          <div className="flex items-center gap-4">
            <ProgressBar current={step} total={totalSteps} />
            <span className="text-xs text-txt-muted font-bold tabular-nums">
              {step + 1}/{totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Slide content */}
      <div className="h-screen flex items-center justify-center pt-14 pb-20 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 28 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 },
            }}
            className="w-full h-full flex items-center justify-center relative"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      {step > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-txt-secondary hover:text-white hover:border-white/15 transition-all text-sm font-bold"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Voltar</span>
            </motion.button>

            {step < totalSteps - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={goNext}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Continuar</span>
                <ChevronRight size={18} />
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
