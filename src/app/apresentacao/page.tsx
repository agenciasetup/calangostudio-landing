"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Building2,
  User,
  Sparkles,
  Clock,
  Zap,
  Users,
  PenTool,
  Camera,
  Palette,
  Box,
  Smartphone,
  Target,
  MessageCircle,
  BarChart3,
  DollarSign,
  Rocket,
  Check,
  ArrowRight,
  Image,
  Layers,
  Wand2,
  Star,
  Timer,
  BrainCircuit,
  UserCheck,
  Send,
  TrendingUp,
  Crown,
} from "lucide-react";

/* ────────────────────────────────────────────────────── */
/*  Types                                                 */
/* ────────────────────────────────────────────────────── */
type UserType = "agencia" | "freelancer" | null;

/* ────────────────────────────────────────────────────── */
/*  Floating Icon Component                               */
/* ────────────────────────────────────────────────────── */
function FloatingIcon({
  icon: Icon,
  className = "",
  size = 20,
  delay = 0,
  color = "text-accent/20",
}: {
  icon: React.ElementType;
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${color} ${className}`}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 5, -5, 0],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────── */
/*  Glass Image Placeholder                              */
/* ────────────────────────────────────────────────────── */

/* ────────────────────────────────────────────────────── */
/*  Progress Bar                                         */
/* ────────────────────────────────────────────────────── */
function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i === current
              ? "w-8 bg-gradient-to-r from-accent to-accent-end"
              : i < current
              ? "w-3 bg-accent/40"
              : "w-3 bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────── */
/*  Time Compare Block                                    */
/* ────────────────────────────────────────────────────── */
function TimeCompare({
  label,
  items,
  total,
  color,
  icon: Icon,
}: {
  label: string;
  items: { name: string; time: string }[];
  total: string;
  color: string;
  icon: React.ElementType;
}) {
  return (
    <div
      className={`flex-1 rounded-2xl border border-white/[0.08] p-5 md:p-6 bg-black/30`}
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon size={18} className="text-white" />
        </div>
        <span className="font-poppins font-bold text-sm md:text-base">
          {label}
        </span>
      </div>
      <ul className="space-y-2.5 mb-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between text-sm text-txt-secondary"
          >
            <span>{item.name}</span>
            <span className="font-bold text-white/80">{item.time}</span>
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-white/[0.06]">
        <div className="flex justify-between items-center">
          <span className="text-xs text-txt-muted uppercase tracking-wider font-bold">
            Total
          </span>
          <span
            className={`font-poppins font-black text-xl md:text-2xl ${
              color.includes("red")
                ? "text-red-400"
                : "text-gradient-animated"
            }`}
          >
            {total}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────── */
/*  Feature Card                                          */
/* ────────────────────────────────────────────────────── */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  gradient = "from-accent/20 to-accent-end/20",
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  gradient?: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent/20 transition-colors">
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
      >
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <h4 className="font-poppins font-bold text-sm mb-1">{title}</h4>
        <p className="text-xs text-txt-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
export default function Apresentacao() {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<UserType>(null);
  const [direction, setDirection] = useState(1);
  const totalSteps = 16;
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Keyboard navigation
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

  // Touch swipe
  const touchStart = useRef<number | null>(null);
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
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const selectUserType = (type: UserType) => {
    setUserType(type);
    setTimeout(() => {
      setDirection(1);
      setStep(1);
    }, 400);
  };

  /* ───── Step Content Renderer ───── */
  const renderStep = () => {
    switch (step) {
      /* ═══════════════════════════════════════════════════
         STEP 0 – Agência ou Freelancer?
         ═══════════════════════════════════════════════════ */
      case 0:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Building2} className="top-10 left-[10%]" size={28} delay={0} />
            <FloatingIcon icon={User} className="top-16 right-[12%]" size={24} delay={1} />
            <FloatingIcon icon={Sparkles} className="bottom-20 left-[15%]" size={20} delay={2} />
            <FloatingIcon icon={Palette} className="bottom-16 right-[10%]" size={22} delay={0.5} />
            <FloatingIcon icon={Zap} className="top-32 left-[30%]" size={18} delay={1.5} />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8">
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                  Apresentação Interativa
                </span>
              </div>

              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1]">
                Você é{" "}
                <span className="text-gradient-animated">Agência</span>
                <br />
                ou{" "}
                <span className="text-gradient-animated">
                  Designer Freelancer
                </span>
                ?
              </h1>
              <p className="text-txt-secondary text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Isso muda{" "}
                <span className="text-white font-bold">completamente</span> a
                forma com que o Calango Studio vai transformar sua operação.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectUserType("agencia")}
                  className={`group relative px-8 py-5 rounded-2xl font-poppins font-black text-lg uppercase tracking-wider transition-all duration-300 border ${
                    userType === "agencia"
                      ? "bg-gradient-to-r from-accent to-accent-end text-black border-transparent shadow-glow"
                      : "bg-white/[0.04] border-white/[0.1] text-white hover:border-accent/30 hover:bg-accent/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 size={22} />
                    <span>Sou Agência</span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectUserType("freelancer")}
                  className={`group relative px-8 py-5 rounded-2xl font-poppins font-black text-lg uppercase tracking-wider transition-all duration-300 border ${
                    userType === "freelancer"
                      ? "bg-gradient-to-r from-accent to-accent-end text-black border-transparent shadow-glow"
                      : "bg-white/[0.04] border-white/[0.1] text-white hover:border-accent/30 hover:bg-accent/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User size={22} />
                    <span>Sou Freelancer</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 1 – Introdução
         ═══════════════════════════════════════════════════ */
      case 1:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Layers} className="top-8 left-[8%]" size={26} delay={0} />
            <FloatingIcon icon={Wand2} className="top-14 right-[10%]" size={22} delay={0.8} />
            <FloatingIcon icon={Star} className="bottom-24 left-[12%]" size={20} delay={1.5} />
            <FloatingIcon icon={BrainCircuit} className="bottom-20 right-[8%]" size={24} delay={0.3} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8">
                <Zap size={14} className="text-accent" />
                <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                  O que é o Calango Studio
                </span>
              </div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-6xl mb-8 tracking-tight leading-[1.1]">
                <span className="text-gradient-animated">+12 ferramentas</span>{" "}
                focadas em automatizar{" "}
                <span className="text-white">
                  imagens, copy e fotos
                </span>
              </h2>

              <p className="text-txt-secondary text-lg md:text-xl mb-8 leading-relaxed">
                {userType === "agencia"
                  ? "Para você e todos os clientes da sua agência."
                  : "Para você e seus clientes como freelancer."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="glass-card p-5 rounded-2xl text-center">
                  <Image size={28} className="text-accent mx-auto mb-3" />
                  <span className="font-bold text-sm">Imagens com IA</span>
                </div>
                <div className="glass-card p-5 rounded-2xl text-center">
                  <PenTool size={28} className="text-accent mx-auto mb-3" />
                  <span className="font-bold text-sm">Copy Automática</span>
                </div>
                <div className="glass-card p-5 rounded-2xl text-center">
                  <Camera size={28} className="text-accent mx-auto mb-3" />
                  <span className="font-bold text-sm">Sessão de Fotos</span>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-bold text-white">
                Sem prompts complexos.{" "}
                <span className="text-gradient-animated">
                  Tudo interligado e intuitivo.
                </span>
              </p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 2 – Comparativo de Tempo
         ═══════════════════════════════════════════════════ */
      case 2:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Clock} className="top-8 left-[6%]" size={24} delay={0} />
            <FloatingIcon icon={Timer} className="top-12 right-[8%]" size={22} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-16 right-[12%]" size={20} delay={0.5} color="text-green-400/20" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Clock size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    Comparativo de tempo
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Quanto tempo{" "}
                  <span className="text-gradient-animated">
                    você leva
                  </span>{" "}
                  pra fazer
                  <br />
                  um carrossel de{" "}
                  <span className="text-white">7 páginas</span>?
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <TimeCompare
                  label="Método Tradicional"
                  icon={Clock}
                  color="bg-red-500/20"
                  items={[
                    { name: "Conteúdo", time: "15 min" },
                    { name: "Escolher imagens", time: "1 hora" },
                    { name: "Capa", time: "30-45 min" },
                    { name: "Card 2 ao 7", time: "1 hora" },
                  ]}
                  total="~3 horas"
                />

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-end flex items-center justify-center shadow-glow">
                    <Zap size={20} className="text-black" />
                  </div>
                </div>

                <TimeCompare
                  label="Com Calango Studio"
                  icon={Zap}
                  color="bg-accent/20"
                  items={[
                    { name: "Conteúdo", time: "2 min" },
                    { name: "Gerar imagens", time: "2-5 min" },
                    { name: "Capa", time: "15 min" },
                    { name: "Card 2 ao 7", time: "20 min" },
                  ]}
                  total="~45 min"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8 text-txt-secondary text-sm md:text-base"
              >
                Assinando{" "}
                <span className="text-white font-bold">uma única</span>{" "}
                plataforma, sem precisar de GPT + Freepik + Midjourney.
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 3 – Meu Perfil / Clientes
         ═══════════════════════════════════════════════════ */
      case 3:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Users} className="top-8 left-[8%]" size={24} delay={0} />
            <FloatingIcon icon={UserCheck} className="top-14 right-[10%]" size={22} delay={0.7} />
            <FloatingIcon icon={BrainCircuit} className="bottom-20 left-[12%]" size={20} delay={1.2} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Users size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    Por que acelera tanto?
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight leading-tight">
                  <span className="text-gradient-animated">
                    Meu perfil
                  </span>{" "}
                  e{" "}
                  <span className="text-gradient-animated">
                    meus clientes
                  </span>
                </h2>
                <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
                  Você cadastra um mini briefing com tudo que importa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="glass-card p-6 rounded-2xl">
                  <img
                    src="/images/funcoes/primeiros-passos-perfil.jpg"
                    alt="Perfil do cliente"
                    className="w-full rounded-xl mb-4 border border-white/[0.06]"
                  />
                  <h4 className="font-poppins font-bold text-base mb-2">
                    Cadastro inteligente
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    Nome, nicho, melhores posts, público-alvo e referências
                    visuais.{" "}
                    {userType === "agencia"
                      ? "Para cada cliente da sua agência."
                      : "Para você e seus clientes."}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <img
                    src="/images/funcoes/primeiros-passos-fotos.jpg"
                    alt="Fotos do cliente"
                    className="w-full rounded-xl mb-4 border border-white/[0.06]"
                  />
                  <h4 className="font-poppins font-bold text-base mb-2">
                    Fotos treinadas
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    Adiciona fotos do rosto, do cliente e até do produto.
                    Tudo fica salvo e pronto pra usar.
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl text-center">
                <p className="text-base md:text-lg font-bold text-white">
                  Ou seja...{" "}
                  <span className="text-gradient-animated">
                    nunca mais precisa dar contexto pra nenhuma IA
                  </span>{" "}
                  para criar algo.
                </p>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 4 – CopyMaker
         ═══════════════════════════════════════════════════ */
      case 4:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={PenTool} className="top-8 left-[10%]" size={24} delay={0} />
            <FloatingIcon icon={Sparkles} className="top-16 right-[8%]" size={20} delay={0.5} />
            <FloatingIcon icon={Zap} className="bottom-24 left-[6%]" size={18} delay={1} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <PenTool size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    CopyMaker
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Abra o{" "}
                  <span className="text-gradient-animated">Copy Maker</span>
                </h2>
                <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
                  Em segundos, seu carrossel tá feito.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <img
                    src="/images/funcoes/copymaker.jpg"
                    alt="CopyMaker Interface"
                    className="w-full rounded-2xl border border-white/[0.08] shadow-glass-lg"
                  />
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      text:
                        userType === "agencia"
                          ? "Seleciona o cliente da sua agência"
                          : "Seleciona você ou seu cliente",
                    },
                    {
                      num: "2",
                      text: "Internamente ele lê todo seu Briefing, todas informações",
                    },
                    {
                      num: "3",
                      text: "Coloca o tema, descrição e CTA",
                    },
                    {
                      num: "4",
                      text: "Escolhe o tom (curioso, polêmico, sério...) e objetivo",
                    },
                    {
                      num: "✓",
                      text: "PRONTO! Carrossel feito em segundos",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        item.num === "✓"
                          ? "bg-accent/[0.08] border-accent/20"
                          : "bg-white/[0.02] border-white/[0.06]"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-poppins font-black text-sm ${
                          item.num === "✓"
                            ? "bg-gradient-to-r from-accent to-accent-end text-black"
                            : "bg-white/[0.06] text-accent"
                        }`}
                      >
                        {item.num}
                      </div>
                      <span
                        className={`text-sm md:text-base ${
                          item.num === "✓"
                            ? "font-bold text-white"
                            : "text-txt-secondary"
                        }`}
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 5 – Estúdio de Foto
         ═══════════════════════════════════════════════════ */
      case 5:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Camera} className="top-8 left-[8%]" size={26} delay={0} />
            <FloatingIcon icon={Sparkles} className="top-20 right-[6%]" size={20} delay={0.6} />
            <FloatingIcon icon={User} className="bottom-20 right-[10%]" size={22} delay={1.2} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Camera size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    Estúdio de Foto
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Uma{" "}
                  <span className="text-gradient-animated">
                    sessão de fotos
                  </span>{" "}
                  em segundos
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="glass-card p-5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <UserCheck size={16} className="text-accent" />
                      </div>
                      <span className="font-bold text-sm">
                        Seleciona{" "}
                        {userType === "agencia"
                          ? "o cliente"
                          : "você ou seu cliente"}
                      </span>
                    </div>
                    <p className="text-sm text-txt-secondary">
                      As fotos do rosto já estão treinadas e salvas.
                    </p>
                  </div>

                  <div className="glass-card p-5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Image size={16} className="text-accent" />
                      </div>
                      <span className="font-bold text-sm">
                        Referência ou prompt
                      </span>
                    </div>
                    <p className="text-sm text-txt-secondary">
                      Escolhe se vai gerar com imagem de referência ou com
                      descrição textual.
                    </p>
                  </div>

                  <div className="glass-card p-5 rounded-2xl bg-accent/[0.04] border-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent to-accent-end flex items-center justify-center">
                        <Check size={16} className="text-black" />
                      </div>
                      <span className="font-bold text-base text-white">
                        Pronto! Sessão de fotos completa.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <img
                    src="/images/funcoes/estudio-de-foto.jpg"
                    alt="Estúdio de Foto"
                    className="w-full rounded-2xl border border-white/[0.08] shadow-glass-lg"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <img
                      src="/images/resultados/Kel_foto.jpg"
                      alt="Resultado foto 1"
                      className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                    />
                    <img
                      src="/images/resultados/raquel_foto_1.png"
                      alt="Resultado foto 2"
                      className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                    />
                    <img
                      src="/images/resultados/raquel_foto_2.png"
                      alt="Resultado foto 3"
                      className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 6 – Imagem Criativa
         ═══════════════════════════════════════════════════ */
      case 6:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Palette} className="top-8 left-[6%]" size={26} delay={0} />
            <FloatingIcon icon={Wand2} className="top-16 right-[10%]" size={22} delay={0.8} />
            <FloatingIcon icon={Star} className="bottom-20 left-[10%]" size={18} delay={1.4} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Palette size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    Imagem Criativa
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Quer gerar{" "}
                  <span className="text-gradient-animated">
                    imagens criativas
                  </span>
                  ?<br />
                  Você pode!
                </h2>
              </div>

              <div className="mb-8">
                <img
                  src="/images/funcoes/estilos-imagem-criativa.jpg"
                  alt="Estilos de Imagem Criativa"
                  className="w-full rounded-2xl border border-white/[0.08] shadow-glass-lg"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
                {[
                  "Animal Art",
                  "Car Design",
                  "Craft Style",
                  "Business",
                  "Hero Style",
                  "Classic",
                ].map((style, i) => (
                  <motion.div
                    key={style}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card p-3 rounded-xl text-center hover:border-accent/20 transition-colors cursor-default"
                  >
                    <span className="text-xs font-bold text-txt-secondary">
                      {style}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  "/images/resultados/animal_criativo.jpg",
                  "/images/resultados/business_criativo.jpg",
                  "/images/resultados/car_criativo.jpg",
                  "/images/resultados/hero_criativo.jpg",
                ].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Resultado criativo ${i + 1}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                  />
                ))}
              </div>

              <p className="text-center mt-6 text-sm text-txt-secondary">
                Só adiciona referência, preenche parâmetros{" "}
                <span className="text-white font-bold">se quiser</span> e gera
                em alto nível.
              </p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 7 – Mockup, Assets 3D, Restaurador
         ═══════════════════════════════════════════════════ */
      case 7:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Box} className="top-8 left-[8%]" size={24} delay={0} />
            <FloatingIcon icon={Layers} className="top-14 right-[6%]" size={22} delay={0.6} />
            <FloatingIcon icon={Wand2} className="bottom-20 left-[10%]" size={20} delay={1} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Box size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    Mockup + Assets + Restaurador
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  <span className="text-gradient-animated">Mockups</span>,{" "}
                  <span className="text-gradient-animated">Assets 3D</span> e{" "}
                  <span className="text-gradient-animated">
                    restauração
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="glass-card p-5 rounded-2xl">
                  <img
                    src="/images/funcoes/mockup-produto.jpg"
                    alt="Mockup Produto"
                    className="w-full rounded-xl mb-4 border border-white/[0.06]"
                  />
                  <h4 className="font-poppins font-bold text-base mb-2">
                    Mockup Produto
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    Sobe o produto, escolhe o cenário e gera.{" "}
                    <span className="text-white font-bold">Simples assim.</span>
                  </p>
                </div>

                <div className="glass-card p-5 rounded-2xl">
                  <img
                    src="/images/funcoes/assets-3d.jpg"
                    alt="Assets 3D"
                    className="w-full rounded-xl mb-4 border border-white/[0.06]"
                  />
                  <h4 className="font-poppins font-bold text-base mb-2">
                    Assets 3D
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    Escolhe um elemento e gera{" "}
                    <span className="text-white font-bold">
                      4 variações sem fundo
                    </span>{" "}
                    em PNG.
                  </p>
                </div>

                <div className="glass-card p-5 rounded-2xl">
                  <img
                    src="/images/funcoes/restaurador-pro.jpg"
                    alt="Restaurador Pro"
                    className="w-full rounded-xl mb-4 border border-white/[0.06]"
                  />
                  <h4 className="font-poppins font-bold text-base mb-2">
                    Restaurador Pro
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    Quer upscale?{" "}
                    <span className="text-white font-bold">
                      Restaura, melhora e amplia
                    </span>{" "}
                    qualquer foto.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 8 – UGC Builder
         ═══════════════════════════════════════════════════ */
      case 8:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={Smartphone} className="top-8 left-[8%]" size={24} delay={0} />
            <FloatingIcon icon={Camera} className="top-14 right-[10%]" size={22} delay={0.7} />
            <FloatingIcon icon={Star} className="bottom-20 left-[12%]" size={20} delay={1.3} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-6">
                  <Smartphone size={14} className="text-accent" />
                  <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                    UGC Builder
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Imagens{" "}
                  <span className="text-gradient-animated">
                    ultra-realistas
                  </span>
                  <br />
                  sem aspecto de IA
                </h2>
                <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
                  {userType === "agencia"
                    ? "Seu cliente mostrando um produto, parecendo foto de iPhone."
                    : "Você mostrando um produto, parecendo foto de iPhone."}
                  <br />
                  <span className="text-white font-bold">
                    Com cara de story. Poucos cliques.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src="/images/funcoes/ugc-build.jpg"
                  alt="UGC Builder"
                  className="w-full rounded-2xl border border-white/[0.08] shadow-glass-lg"
                />

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "/images/resultados/vini_ugc.jpg",
                    "/images/resultados/vini2_ugc.jpg",
                    "/images/resultados/vini3_ugc.jpg",
                    "/images/funcoes/ugc-build-resultado.jpg",
                  ].map((src, i) => (
                    <motion.img
                      key={src}
                      src={src}
                      alt={`UGC resultado ${i + 1}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-full aspect-[3/4] object-cover rounded-xl border border-white/[0.06]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 9 – Fábrica de Clientes (Intro)
         ═══════════════════════════════════════════════════ */
      case 9:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Target} className="top-8 left-[10%]" size={26} delay={0} color="text-emerald-400/20" />
            <FloatingIcon icon={Send} className="top-16 right-[8%]" size={22} delay={0.6} color="text-emerald-400/20" />
            <FloatingIcon icon={Users} className="bottom-20 left-[8%]" size={24} delay={1.2} color="text-emerald-400/20" />
            <FloatingIcon icon={DollarSign} className="bottom-24 right-[12%]" size={20} delay={0.3} color="text-emerald-400/20" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] mb-8">
                <Target size={14} className="text-emerald-400" />
                <span className="text-xs text-emerald-300/80 font-bold uppercase tracking-wider">
                  Prospecção de Clientes
                </span>
              </div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-6xl mb-8 tracking-tight leading-[1.1]">
                Já pensou em{" "}
                <span className="bonus-text-gradient">
                  prospectar clientes
                </span>
                ?
              </h2>

              <div className="space-y-5 text-left max-w-xl mx-auto mb-10">
                {[
                  "90% das pessoas procrastinam na venda por não ter ferramenta",
                  "Têm medo de ser invasivo e não sabem como abordar",
                  "Sem sistema, perdem o foco e esquecem de prospectar",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/[0.04] border border-red-500/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                    <span className="text-base text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl md:text-3xl font-poppins font-black"
              >
                Por isso criamos a{" "}
                <span className="bonus-text-gradient">Fábrica de Clientes</span>
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 10 – Lista de Clientes / Funil
         ═══════════════════════════════════════════════════ */
      case 10:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 relative">
            <FloatingIcon icon={MessageCircle} className="top-8 left-[8%]" size={24} delay={0} color="text-emerald-400/20" />
            <FloatingIcon icon={Send} className="top-14 right-[6%]" size={22} delay={0.5} color="text-emerald-400/20" />
            <FloatingIcon icon={Users} className="bottom-20 left-[10%]" size={20} delay={1} color="text-emerald-400/20" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl w-full"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] mb-6">
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span className="text-xs text-emerald-300/80 font-bold uppercase tracking-wider">
                    Fábrica de Clientes
                  </span>
                </div>

                <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
                  Cadastre clientes e crie{" "}
                  <span className="bonus-text-gradient">funis de venda</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <img
                    src="/images/funcoes/meus-clientes.jpg"
                    alt="Lista de Clientes"
                    className="w-full rounded-2xl border border-emerald-500/10 shadow-glass-lg"
                  />
                </div>

                <div className="space-y-4">
                  <FeatureCard
                    icon={Users}
                    title="Cadastro rápido"
                    desc="Em poucos cliques, cadastra uma lista de prospects."
                    gradient="from-emerald-500/20 to-teal-500/20"
                  />
                  <FeatureCard
                    icon={MessageCircle}
                    title="Mini funil de vendas"
                    desc="Mensagens prontas com cliques direto pro WhatsApp."
                    gradient="from-emerald-500/20 to-teal-500/20"
                  />
                  <FeatureCard
                    icon={ArrowRight}
                    title="Todas as etapas"
                    desc="Primeiro contato, abordagem, follow-up, oferta e reativação."
                    gradient="from-emerald-500/20 to-teal-500/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 11 – Missões / Controle
         ═══════════════════════════════════════════════════ */
      case 11:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={BarChart3} className="top-8 left-[8%]" size={24} delay={0} color="text-emerald-400/20" />
            <FloatingIcon icon={Target} className="top-14 right-[10%]" size={22} delay={0.7} color="text-emerald-400/20" />
            <FloatingIcon icon={TrendingUp} className="bottom-20 left-[12%]" size={20} delay={1.2} color="text-emerald-400/20" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] mb-8">
                <BarChart3 size={14} className="text-emerald-400" />
                <span className="text-xs text-emerald-300/80 font-bold uppercase tracking-wider">
                  Controle de Vendas
                </span>
              </div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
                <span className="bonus-text-gradient">Controle total</span> das
                suas vendas
              </h2>

              <p className="text-txt-secondary text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Receba{" "}
                <span className="text-white font-bold">missões diárias</span>{" "}
                para nunca esquecer de prospectar, enviar mensagens e acompanhar
                clientes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-5 rounded-2xl border-emerald-500/10">
                  <BarChart3
                    size={28}
                    className="text-emerald-400 mx-auto mb-3"
                  />
                  <h4 className="font-bold text-sm mb-1">Dashboard</h4>
                  <p className="text-xs text-txt-secondary">
                    Visão completa das suas vendas
                  </p>
                </div>
                <div className="glass-card p-5 rounded-2xl border-emerald-500/10">
                  <Target
                    size={28}
                    className="text-emerald-400 mx-auto mb-3"
                  />
                  <h4 className="font-bold text-sm mb-1">Missões</h4>
                  <p className="text-xs text-txt-secondary">
                    Tarefas diárias automatizadas
                  </p>
                </div>
                <div className="glass-card p-5 rounded-2xl border-emerald-500/10">
                  <DollarSign
                    size={28}
                    className="text-emerald-400 mx-auto mb-3"
                  />
                  <h4 className="font-bold text-sm mb-1">Produtos</h4>
                  <p className="text-xs text-txt-secondary">
                    Cadastre serviços com preços
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border-emerald-500/10 max-w-md mx-auto">
                <p className="text-sm text-txt-secondary">
                  Cadastre seus produtos e importe serviços com{" "}
                  <span className="text-white font-bold">
                    preços personalizáveis
                  </span>{" "}
                  direto na plataforma.
                </p>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 12 – Resumo das ferramentas
         ═══════════════════════════════════════════════════ */
      case 12:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Sparkles} className="top-8 left-[6%]" size={26} delay={0} />
            <FloatingIcon icon={Layers} className="top-16 right-[8%]" size={22} delay={0.6} />
            <FloatingIcon icon={Zap} className="bottom-20 left-[10%]" size={20} delay={1.2} />
            <FloatingIcon icon={Star} className="bottom-16 right-[6%]" size={24} delay={0.3} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8">
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                  Resumo
                </span>
              </div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
                <span className="text-gradient-animated">+12 ferramentas</span>{" "}
                com IA
                <br />
                em{" "}
                <span className="text-white">uma única plataforma</span>
              </h2>

              <p className="text-txt-secondary text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Acelere seu processo criativo, automatize 90% do serviço e{" "}
                <span className="text-white font-bold">
                  prospecte mais clientes
                </span>
                .
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                {[
                  { icon: PenTool, label: "CopyMaker" },
                  { icon: Camera, label: "Estúdio Foto" },
                  { icon: Palette, label: "Img Criativa" },
                  { icon: Box, label: "Mockup" },
                  { icon: Layers, label: "Assets 3D" },
                  { icon: Wand2, label: "Restaurador" },
                  { icon: Smartphone, label: "UGC Builder" },
                  { icon: Users, label: "Clientes" },
                ].map(({ icon: I, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <I size={22} className="text-accent mx-auto mb-2" />
                    <span className="text-xs font-bold text-txt-secondary">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-poppins font-bold text-white">
                Ou seja...
              </p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 13 – Proposta de valor
         ═══════════════════════════════════════════════════ */
      case 13:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Rocket} className="top-10 left-[10%]" size={28} delay={0} />
            <FloatingIcon icon={TrendingUp} className="top-16 right-[8%]" size={24} delay={0.6} />
            <FloatingIcon icon={Crown} className="bottom-20 left-[8%]" size={22} delay={1} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-8 shadow-glow-lg"
              >
                <Rocket size={36} className="text-black" />
              </motion.div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-6xl mb-8 tracking-tight leading-[1.1]">
                Uma plataforma que{" "}
                <span className="text-gradient-animated">
                  melhora seu workflow
                </span>{" "}
                e faz{" "}
                {userType === "agencia"
                  ? "sua agência"
                  : "você"}{" "}
                <span className="text-gradient-animated">
                  fechar mais clientes
                </span>
              </h2>

              <p className="text-txt-secondary text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Tudo em um único lugar.{" "}
                <span className="text-white font-bold">
                  Sem trocar de ferramenta. Sem prompt complexo.
                </span>
              </p>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 14 – Quanto custa seu tempo
         ═══════════════════════════════════════════════════ */
      case 14:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={DollarSign} className="top-8 left-[8%]" size={26} delay={0} />
            <FloatingIcon icon={Clock} className="top-16 right-[10%]" size={22} delay={0.7} />
            <FloatingIcon icon={TrendingUp} className="bottom-20 left-[12%]" size={20} delay={1.3} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8">
                <DollarSign size={14} className="text-accent" />
                <span className="text-xs text-txt-secondary font-bold uppercase tracking-wider">
                  Reflexão
                </span>
              </div>

              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-10 tracking-tight leading-tight">
                Quanto custa o seu{" "}
                <span className="text-gradient-animated">tempo</span> hoje?
              </h2>

              <div className="space-y-5 max-w-xl mx-auto mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl text-left"
                >
                  <p className="text-base md:text-lg text-txt-secondary leading-relaxed">
                    Se você prospectasse{" "}
                    <span className="text-white font-bold">
                      3 pessoas por dia
                    </span>{" "}
                    (90 no mês) e fechasse{" "}
                    <span className="text-accent font-bold">
                      5 clientes novos
                    </span>{" "}
                    todos os meses...
                    <br />
                    <span className="text-xl md:text-2xl font-poppins font-black text-white mt-3 block">
                      Quanto você lucraria?
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6 rounded-2xl text-left border-accent/10"
                >
                  <p className="text-base md:text-lg text-txt-secondary leading-relaxed">
                    Às vezes, por conta de{" "}
                    <span className="text-gradient-animated font-black text-xl">
                      R$ 169,90/mês
                    </span>
                    <br />
                    você tá deixando de ganhar mais de{" "}
                    <span className="text-white font-black text-2xl">
                      R$ 5.000
                    </span>{" "}
                    a mais todos os meses.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass-card p-6 rounded-2xl text-left border-red-500/10"
                >
                  <p className="text-base md:text-lg text-txt-secondary leading-relaxed">
                    Às vezes, por conta de{" "}
                    <span className="text-white font-bold">R$ 169,90</span>,
                    você tá perdendo{" "}
                    <span className="text-red-400 font-bold">
                      +3 horas do seu dia
                    </span>{" "}
                    procurando imagens e mais{" "}
                    <span className="text-red-400 font-bold">
                      +3h manipulando elas
                    </span>
                    .
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      /* ═══════════════════════════════════════════════════
         STEP 15 – CTA Final / Plano PRO
         ═══════════════════════════════════════════════════ */
      case 15:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
            <FloatingIcon icon={Rocket} className="top-8 left-[6%]" size={28} delay={0} />
            <FloatingIcon icon={Crown} className="top-12 right-[8%]" size={24} delay={0.5} />
            <FloatingIcon icon={Sparkles} className="bottom-20 left-[10%]" size={22} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-16 right-[6%]" size={20} delay={0.3} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg w-full"
            >
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight leading-tight">
                Bora{" "}
                <span className="text-gradient-animated">automatizar</span>{" "}
                sua operação?
              </h2>
              <p className="text-txt-secondary text-base md:text-lg mb-10">
                E construir um sistema de vendas que funciona no piloto
                automático.
              </p>

              {/* PRO Plan Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative rounded-[28px] bg-black/50 border border-accent/30 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.08)]"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-[10px] font-black uppercase tracking-[0.18em] shadow-glow">
                  Mais Popular
                </span>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center shadow-lg">
                    <Sparkles size={24} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-poppins font-black text-2xl">Pro</h3>
                    <p className="text-xs text-txt-muted">
                      Acesso completo às ferramentas
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-5 justify-center">
                  <span className="text-sm text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-5xl text-gradient-animated">
                    169,90
                  </span>
                  <span className="text-sm text-txt-muted">/mês</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Todos os geradores de imagem",
                    "CopyMaker (copy automática)",
                    "Análise de Perfil (Instagram)",
                    "Remix de Layout",
                    "10 Clientes cadastrados",
                    "2 Personagens por cliente",
                    "12k Calangocoins / mês",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check
                        size={14}
                        className="text-accent flex-shrink-0"
                        strokeWidth={3}
                      />
                      <span className="text-txt-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pay.hotmart.com/F104772530K?off=y2uzyv4s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-2xl font-black text-base tracking-[0.14em] uppercase bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Quero Automatizar Minha Operação
                </a>

                <p className="text-[11px] text-txt-muted mt-4 uppercase tracking-wider font-bold">
                  Sem fidelidade. Cancele quando quiser.
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
      ref={containerRef}
      className="min-h-screen bg-bg-primary relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-accent/[0.03] rounded-full blur-[120px] md:blur-[200px]" />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-poppins font-black text-sm text-white">
              CALANGO<span className="text-gradient-animated">.STUDIO</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {step > 0 && (
              <ProgressBar current={step} total={totalSteps} />
            )}
            {step > 0 && (
              <span className="text-xs text-txt-muted font-bold">
                {step + 1}/{totalSteps}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Slide content */}
      <div className="relative min-h-screen flex items-center justify-center pt-16 pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
            }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      {step > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-5">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-txt-secondary hover:text-white hover:border-white/15 transition-all text-sm font-bold"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Voltar</span>
            </motion.button>

            {step < totalSteps - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={goNext}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-end text-black font-black text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Continuar</span>
                <ChevronRight size={16} />
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
