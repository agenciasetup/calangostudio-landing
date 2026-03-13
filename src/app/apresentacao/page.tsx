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
  CheckCircle2,
  ImagePlus,
  CircleDollarSign,
  Quote,
  MessageSquare,
  Heart,
} from "lucide-react";
import {
  FloatingIcon,
  GlowOrb,
  PopupToast,
  ProgressBar,
  SlideLayout,
  SlideCentered,
  Badge,
} from "@/components/apresentacao/shared";
import MockProspects from "@/components/apresentacao/MockProspects";
import MockDashboard from "@/components/apresentacao/MockDashboard";
import FeedbackGrid from "@/components/apresentacao/FeedbackGrid";

type UserType = "agencia" | "freelancer" | null;

export default function Apresentacao() {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<UserType>(null);
  const [direction, setDirection] = useState(1);
  const totalSteps = 18;
  const touchStart = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (step < totalSteps - 1) { setDirection(1); setStep((s) => s + 1); }
  }, [step]);

  const goPrev = useCallback(() => {
    if (step > 0) { setDirection(-1); setStep((s) => s - 1); }
  }, [step]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) { goNext(); } else { goPrev(); } }
    touchStart.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "80%" : "-80%", opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-80%" : "80%", opacity: 0, scale: 0.95 }),
  };

  const selectUserType = (type: UserType) => {
    setUserType(type);
    setTimeout(() => { setDirection(1); setStep(1); }, 400);
  };

  const renderStep = () => {
    switch (step) {

      /* ═══ STEP 0 – Agência ou Freelancer ═══ */
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Building2} className="top-[8%] left-[8%]" size={40} delay={0} />
            <FloatingIcon icon={User} className="top-[12%] right-[10%]" size={36} delay={1} />
            <FloatingIcon icon={Sparkles} className="bottom-[18%] left-[12%]" size={32} delay={2} />
            <FloatingIcon icon={Palette} className="bottom-[15%] right-[8%]" size={34} delay={0.5} />
            <FloatingIcon icon={Zap} className="top-[30%] left-[25%]" size={28} delay={1.5} />
            <FloatingIcon icon={Camera} className="top-[25%] right-[22%]" size={30} delay={2.5} />
            <GlowOrb className="top-1/4 left-1/4" size="w-[600px] h-[600px]" />
            <GlowOrb className="bottom-1/4 right-1/4" color="bg-accent-end/[0.03]" size="w-[500px] h-[500px]" />

            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
              <Badge icon={Sparkles} text="Apresentação Interativa" />

              <h1 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.05]">
                Você é{" "}
                <span className="text-gradient-animated">Agência</span>
                <br />
                ou{" "}
                <span className="text-gradient-animated">Designer Freelancer</span>?
              </h1>
              <p className="text-txt-secondary text-lg md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed">
                Isso muda <span className="text-white font-bold">completamente</span> a forma com que o
                Calango Studio vai transformar sua operação.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                {[
                  { type: "agencia" as const, icon: Building2, label: "Sou Agência" },
                  { type: "freelancer" as const, icon: User, label: "Sou Freelancer" },
                ].map(({ type, icon: I, label }) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => selectUserType(type)}
                    className={`group relative px-10 py-6 rounded-2xl font-poppins font-black text-xl uppercase tracking-wider transition-all duration-300 border ${
                      userType === type
                        ? "bg-gradient-to-r from-accent to-accent-end text-black border-transparent shadow-glow-lg"
                        : "bg-white/[0.04] border-white/[0.1] text-white hover:border-accent/30 hover:bg-accent/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <I size={26} />
                      <span>{label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        );

      /* ═══ STEP 1 – Introdução ═══ */
      case 1:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={Layers} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Wand2} className="top-[10%] right-[7%]" size={30} delay={0.8} />
            <FloatingIcon icon={Star} className="bottom-[15%] left-[8%]" size={28} delay={1.5} />
            <FloatingIcon icon={BrainCircuit} className="bottom-[12%] right-[6%]" size={34} delay={0.3} />
            <GlowOrb className="top-0 left-1/3" />

            <Badge icon={Zap} text="O que é o Calango Studio" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08]">
              <span className="text-gradient-animated">+12 ferramentas</span> focadas em
              <br />automatizar{" "}
              <span className="text-white">imagens, copy e fotos</span>
            </h2>

            <p className="text-txt-secondary text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl">
              {userType === "agencia"
                ? "Para você e todos os clientes da sua agência."
                : "Para você e seus clientes como freelancer."}
              {" "}Sem prompts complexos.{" "}
              <span className="text-white font-bold">Tudo interligado e intuitivo.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                { icon: Image, label: "Imagens com IA", desc: "Gere fotos, criativos e mockups em segundos" },
                { icon: PenTool, label: "Copy Automática", desc: "Textos prontos para postar em qualquer formato" },
                { icon: Camera, label: "Sessão de Fotos", desc: "Fotos profissionais sem fotógrafo ou estúdio" },
              ].map(({ icon: I, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="glass-card p-6 lg:p-8 rounded-2xl text-center"
                >
                  <I size={36} className="text-accent mx-auto mb-4" />
                  <h4 className="font-poppins font-bold text-base mb-2">{label}</h4>
                  <p className="text-sm text-txt-secondary">{desc}</p>
                </motion.div>
              ))}
            </div>
          </SlideCentered>
        );

      /* ═══ STEP 2 – Comparativo de Tempo ═══ */
      case 2:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={Clock} className="top-[6%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Timer} className="top-[8%] right-[6%]" size={32} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-[12%] right-[10%]" size={28} delay={0.5} color="text-green-400/20" />
            <GlowOrb className="top-1/3 right-1/4" color="bg-red-500/[0.02]" />

            <Badge icon={Clock} text="Comparativo de tempo" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight">
              Um carrossel de <span className="text-gradient-animated">7 páginas</span>
            </h2>
            <p className="text-txt-secondary text-lg md:text-xl mb-10">Quanto tempo você leva?</p>

            <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
              {/* Traditional */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Clock size={22} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg">Método Tradicional</h3>
                    <p className="text-xs text-red-400/60">GPT + Freepik + Midjourney + Canva</p>
                  </div>
                </div>
                {[
                  { name: "Criar conteúdo", time: "15 min" },
                  { name: "Escolher imagens", time: "1 hora" },
                  { name: "Fazer a capa", time: "30-45 min" },
                  { name: "Cards 2 ao 7", time: "1 hora" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-white/[0.04] text-base">
                    <span className="text-txt-secondary">{item.name}</span>
                    <span className="font-bold text-white">{item.time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-5">
                  <span className="text-sm text-txt-muted uppercase tracking-wider font-bold">Total</span>
                  <span className="font-poppins font-black text-3xl lg:text-4xl text-red-400">~3 horas</span>
                </div>
              </motion.div>

              {/* VS divider */}
              <div className="flex items-center justify-center lg:flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-accent-end flex items-center justify-center shadow-glow-lg"
                >
                  <Zap size={24} className="text-black" />
                </motion.div>
              </div>

              {/* Calango */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 rounded-2xl border border-accent/10 bg-accent/[0.02] p-6 lg:p-8"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Zap size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg">Com Calango Studio</h3>
                    <p className="text-xs text-accent/60">Tudo em uma plataforma</p>
                  </div>
                </div>
                {[
                  { name: "Gerar conteúdo", time: "2 min" },
                  { name: "Gerar imagens", time: "2-5 min" },
                  { name: "Fazer a capa", time: "15 min" },
                  { name: "Cards 2 ao 7", time: "20 min" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-white/[0.04] text-base">
                    <span className="text-txt-secondary">{item.name}</span>
                    <span className="font-bold text-accent">{item.time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-5">
                  <span className="text-sm text-txt-muted uppercase tracking-wider font-bold">Total</span>
                  <span className="font-poppins font-black text-3xl lg:text-4xl text-gradient-animated">~45 min</span>
                </div>
              </motion.div>
            </div>

            <PopupToast icon={Zap} text="4x mais rápido" className="bottom-[8%] right-[10%]" delay={1} />
          </SlideCentered>
        );

      /* ═══ STEP 3 – Meu Perfil e Clientes ═══ */
      case 3:
        return (
          <SlideLayout>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={Users} className="top-0 right-0" size={32} delay={0} />
              <FloatingIcon icon={BrainCircuit} className="bottom-0 left-0" size={28} delay={1.2} />

              <Badge icon={Users} text="Por que acelera tanto?" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                <span className="text-gradient-animated">Meu perfil</span>
                <br />e <span className="text-gradient-animated">meus clientes</span>
              </h2>

              <p className="text-txt-secondary text-lg md:text-xl mb-8 leading-relaxed">
                Você cadastra um <span className="text-white font-bold">mini briefing</span>, seja para você ou seu cliente.
              </p>

              <div className="space-y-4">
                {[
                  { icon: UserCheck, text: "Nome, nicho, melhores posts, público e referências" },
                  { icon: Camera, text: "Fotos do rosto, do cliente e até do produto" },
                  { icon: BrainCircuit, text: "Área dedicada ao cliente — tudo salvo e pronto" },
                ].map(({ icon: I, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <I size={18} className="text-accent" />
                    </div>
                    <span className="text-base text-txt-secondary leading-relaxed">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-5 rounded-2xl bg-accent/[0.04] border border-accent/10"
              >
                <p className="text-lg font-bold text-white">
                  Nunca mais precisa <span className="text-gradient-animated">dar contexto pra nenhuma IA</span> para criar algo.
                </p>
              </motion.div>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src="/images/funcoes/primeiros-passos-perfil.jpg"
                alt="Perfil do cliente"
                className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
              />
              <motion.img
                src="/images/funcoes/primeiros-passos-fotos.jpg"
                alt="Fotos do cliente"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 w-[55%] rounded-xl border border-white/[0.1] shadow-2xl shadow-black/50"
              />
              <PopupToast icon={CheckCircle2} text="Briefing salvo!" className="-top-3 -right-3" delay={0.8} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 4 – CopyMaker ═══ */
      case 4:
        return (
          <SlideLayout reverse>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={PenTool} className="top-0 left-0" size={32} delay={0} />

              <Badge icon={PenTool} text="CopyMaker" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                Abra o <span className="text-gradient-animated">Copy Maker</span>
              </h2>

              <p className="text-txt-secondary text-lg mb-8">
                Em alguns segundos, seu carrossel tá <span className="text-white font-bold">feito pro cliente</span>.
              </p>

              <div className="space-y-3">
                {[
                  { num: "1", text: userType === "agencia" ? "Seleciona o cliente da sua agência" : "Seleciona você ou seu cliente" },
                  { num: "2", text: "Ele lê todo o Briefing e informações automaticamente" },
                  { num: "3", text: "Coloca o tema, descrição e CTA" },
                  { num: "4", text: "Escolhe o tom (curioso, polêmico, sério...) e objetivo" },
                  { num: "✓", text: "PRONTO! Carrossel completo em segundos" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      item.num === "✓"
                        ? "bg-accent/[0.08] border-accent/20"
                        : "bg-white/[0.02] border-white/[0.06]"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-poppins font-black text-sm flex-shrink-0 ${
                      item.num === "✓"
                        ? "bg-gradient-to-r from-accent to-accent-end text-black"
                        : "bg-white/[0.06] text-accent"
                    }`}>
                      {item.num}
                    </div>
                    <span className={`text-base ${item.num === "✓" ? "font-bold text-white" : "text-txt-secondary"}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src="/images/funcoes/copymaker.jpg"
                alt="CopyMaker"
                className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
              />
              <motion.img
                src="/images/funcoes/copymaker-resultado.jpg"
                alt="CopyMaker resultado"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 w-[50%] rounded-xl border border-white/[0.1] shadow-2xl shadow-black/50"
              />
              <PopupToast icon={PenTool} text="Copy gerada com sucesso!" className="-top-3 right-4" delay={0.9} />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 5 – Estúdio de Foto ═══ */
      case 5:
        return (
          <SlideLayout>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={Camera} className="top-0 right-0" size={34} delay={0} />
              <FloatingIcon icon={Star} className="bottom-8 left-4" size={24} delay={1.5} />

              <Badge icon={Camera} text="Estúdio de Foto" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                Uma <span className="text-gradient-animated">sessão de fotos</span>
                <br />em segundos
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: UserCheck, title: "Seleciona o personagem", desc: "As fotos do rosto já estão treinadas e salvas na plataforma." },
                  { icon: Image, title: "Referência ou prompt", desc: "Escolhe se vai gerar com imagem de referência ou com descrição textual." },
                ].map(({ icon: I, title, desc }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="glass-card p-5 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                        <I size={16} className="text-accent" />
                      </div>
                      <span className="font-bold text-base">{title}</span>
                    </div>
                    <p className="text-sm text-txt-secondary leading-relaxed pl-12">{desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="p-5 rounded-2xl bg-accent/[0.06] border border-accent/15 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-accent-end flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-black" />
                </div>
                <span className="font-bold text-lg text-white">
                  Pronto! Sessão de fotos completa.
                </span>
              </motion.div>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src="/images/funcoes/estudio-de-foto.jpg"
                alt="Estúdio de Foto"
                className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 mb-4"
              />
              <div className="grid grid-cols-3 gap-3">
                {[
                  "/images/resultados/Kel_foto.jpg",
                  "/images/resultados/raquel_foto_1.png",
                  "/images/resultados/raquel_foto_2.png",
                ].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Resultado foto ${i + 1}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                  />
                ))}
              </div>
              <PopupToast icon={ImagePlus} text="Foto gerada para o cliente!" className="-top-3 -left-3" delay={0.7} />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 6 – Imagem Criativa ═══ */
      case 6:
        return (
          <SlideLayout reverse>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={Palette} className="top-0 left-4" size={34} delay={0} />
              <FloatingIcon icon={Wand2} className="bottom-8 right-0" size={28} delay={0.8} />

              <Badge icon={Palette} text="Imagem Criativa" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                Gere imagens <span className="text-gradient-animated">criativas</span> de
                <br />alto nível
              </h2>

              <p className="text-txt-secondary text-lg mb-8 leading-relaxed">
                Escolha entre <span className="text-white font-bold">+10 estilos prontos</span>.
                Com ou sem seu rosto. Adicione referência e gere.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {["Animal Art", "Car Design", "Craft Style", "Business", "Hero Style", "Classic"].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="glass-card p-3 rounded-xl text-center"
                  >
                    <span className="text-xs font-bold text-txt-secondary">{s}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-txt-muted">
                Preenche parâmetros <span className="text-white font-semibold">se quiser</span> e gera a imagem em alto nível.
              </p>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src="/images/funcoes/estilos-imagem-criativa.jpg"
                alt="Estilos de Imagem Criativa"
                className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 mb-4"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  "/images/resultados/animal_criativo.jpg",
                  "/images/resultados/business_criativo.jpg",
                  "/images/resultados/car_criativo.jpg",
                  "/images/resultados/hero_criativo.jpg",
                ].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Criativo ${i + 1}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="w-full aspect-square object-cover rounded-xl border border-white/[0.06]"
                  />
                ))}
              </div>
              <PopupToast icon={ImagePlus} text="Imagem gerada com sucesso!" className="top-2 -right-3" delay={0.8} />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 7 – Mockup, Assets, Restaurador ═══ */
      case 7:
        return (
          <SlideCentered maxW="max-w-[1400px]">
            <FloatingIcon icon={Box} className="top-[5%] left-[5%]" size={36} delay={0} />
            <FloatingIcon icon={Layers} className="top-[8%] right-[6%]" size={30} delay={0.6} />
            <FloatingIcon icon={Wand2} className="bottom-[12%] left-[8%]" size={28} delay={1} />
            <GlowOrb className="top-1/3 left-1/3" />

            <Badge icon={Box} text="Mockup + Assets + Restaurador" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight">
              <span className="text-gradient-animated">Mockups</span>, <span className="text-gradient-animated">Assets 3D</span> e <span className="text-gradient-animated">Restauração</span>
            </h2>
            <p className="text-txt-secondary text-lg mb-10">Três ferramentas poderosas, todas em poucos cliques.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  img: "/images/funcoes/mockup-produto.jpg",
                  title: "Mockup Produto",
                  desc: "Sobe o produto, escolhe o cenário e gera. Simples assim.",
                  toast: "Mockup gerado!",
                },
                {
                  img: "/images/funcoes/assets-3d.jpg",
                  title: "Assets 3D",
                  desc: "Escolhe um elemento e gera 4 variações sem fundo em PNG.",
                  toast: "4 variações prontas!",
                },
                {
                  img: "/images/funcoes/restaurador-pro.jpg",
                  title: "Restaurador Pro",
                  desc: "Restaura, melhora e amplia qualquer foto com um clique.",
                  toast: "Upscale concluído!",
                },
              ].map(({ img, title, desc, toast }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="glass-card rounded-2xl overflow-hidden group relative"
                >
                  <div className="relative">
                    <img src={img} alt={title} className="w-full aspect-video object-cover" />
                    <PopupToast icon={CheckCircle2} text={toast} className="bottom-3 left-3" delay={0.8 + i * 0.15} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-poppins font-bold text-lg mb-2">{title}</h4>
                    <p className="text-sm text-txt-secondary leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideCentered>
        );

      /* ═══ STEP 8 – UGC Builder ═══ */
      case 8:
        return (
          <SlideLayout>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={Smartphone} className="top-0 right-4" size={34} delay={0} />
              <FloatingIcon icon={Camera} className="bottom-8 left-0" size={28} delay={0.7} />

              <Badge icon={Smartphone} text="UGC Builder" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                Imagens <span className="text-gradient-animated">ultra-realistas</span>
                <br /><span className="text-white">sem aspecto de IA</span>
              </h2>

              <p className="text-txt-secondary text-lg md:text-xl mb-8 leading-relaxed">
                {userType === "agencia"
                  ? "Seu cliente mostrando um produto"
                  : "Você mostrando um produto"}
                , parecendo <span className="text-white font-bold">foto de iPhone</span>.
                <br />Com cara de story. <span className="text-accent font-bold">Poucos cliques.</span>
              </p>

              <div className="space-y-3">
                {[
                  "Fotos ultra-realistas com seu rosto ou do cliente",
                  "Perfeito para e-commerce e prova social",
                  "Resultado com cara de conteúdo real",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-base text-txt-secondary"
                  >
                    <Check size={16} className="text-accent flex-shrink-0" strokeWidth={3} />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <img
                src="/images/funcoes/ugc-build.jpg"
                alt="UGC Builder"
                className="w-full rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 mb-4"
              />
              <div className="grid grid-cols-3 gap-3">
                {[
                  "/images/resultados/vini_ugc.jpg",
                  "/images/resultados/vini2_ugc.jpg",
                  "/images/resultados/vini3_ugc.jpg",
                ].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`UGC ${i + 1}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-full aspect-[3/4] object-cover rounded-xl border border-white/[0.06]"
                  />
                ))}
              </div>
              <PopupToast icon={ImagePlus} text="UGC realista gerado!" className="-top-3 -right-3" delay={0.9} />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 9 – Intro Fábrica de Clientes ═══ */
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Target} className="top-[8%] left-[8%]" size={40} delay={0} color="text-emerald-400/20" />
            <FloatingIcon icon={Send} className="top-[12%] right-[6%]" size={32} delay={0.6} color="text-emerald-400/20" />
            <FloatingIcon icon={Users} className="bottom-[15%] left-[6%]" size={36} delay={1.2} color="text-emerald-400/20" />
            <FloatingIcon icon={DollarSign} className="bottom-[18%] right-[10%]" size={30} delay={0.3} color="text-emerald-400/20" />
            <FloatingIcon icon={MessageCircle} className="top-[30%] right-[20%]" size={26} delay={1.8} color="text-emerald-400/15" />
            <GlowOrb className="top-1/3 left-1/3" color="bg-emerald-500/[0.03]" size="w-[600px] h-[600px]" />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-[900px]">
              <Badge icon={Target} text="Prospecção de Clientes" color="text-emerald-400" borderColor="border-emerald-500/20" bgColor="bg-emerald-500/[0.05] border border-emerald-500/20" />

              <h2 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-10 tracking-tight leading-[1.05]">
                Já pensou em <span className="bonus-text-gradient">prospectar clientes</span>?
              </h2>

              <div className="space-y-5 text-left max-w-2xl mx-auto mb-12">
                {[
                  { text: "90% das pessoas procrastinam na venda por não ter ferramenta", icon: Target },
                  { text: "Têm medo de ser invasivo e não sabem como abordar", icon: MessageCircle },
                  { text: "Sem sistema, perdem o foco e esquecem de prospectar", icon: TrendingUp },
                ].map(({ text, icon: I }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    className="flex items-center gap-5 p-5 rounded-xl bg-red-500/[0.04] border border-red-500/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <I size={18} className="text-red-400" />
                    </div>
                    <span className="text-lg text-txt-secondary">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="text-3xl md:text-4xl font-poppins font-black"
              >
                Por isso criamos a <span className="bonus-text-gradient">Fábrica de Clientes</span>
              </motion.p>
            </motion.div>
          </div>
        );

      /* ═══ STEP 10 – Prospects + Pipeline ═══ */
      case 10:
        return (
          <SlideLayout>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={Users} className="top-0 left-0" size={30} delay={0} color="text-emerald-400/20" />

              <Badge icon={Users} text="Cadastro de Prospects" color="text-emerald-400" borderColor="border-emerald-500/20" bgColor="bg-emerald-500/[0.05] border border-emerald-500/20" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                Cadastre clientes e crie <span className="bonus-text-gradient">funis de venda</span>
              </h2>

              <p className="text-txt-secondary text-lg mb-6 leading-relaxed">
                Em poucos cliques, cadastra uma lista de prospects. Para cada um, crie um{" "}
                <span className="text-white font-bold">mini funil de vendas</span> com mensagens prontas direto pro WhatsApp.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Primeiro contato e abordagem personalizada",
                  "Follow-up automático quando não responde",
                  "Pipeline visual tipo Kanban",
                  "Importar lista de prospects",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 text-base text-txt-secondary"
                  >
                    <Check size={16} className="text-emerald-400 flex-shrink-0" strokeWidth={3} />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>

              <PopupToast icon={Send} text="Mensagem enviada via WhatsApp!" className="relative" delay={1} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
            </div>

            {/* Mock UI side */}
            <div className="relative">
              <MockProspects />
              <PopupToast icon={UserCheck} text="Cliente cadastrado!" className="-top-3 -right-3" delay={1.2} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 11 – Dashboard + Controle ═══ */
      case 11:
        return (
          <SlideLayout reverse>
            {/* Text side */}
            <div className="relative">
              <FloatingIcon icon={BarChart3} className="top-0 right-0" size={32} delay={0} color="text-emerald-400/20" />

              <Badge icon={BarChart3} text="Controle de Vendas" color="text-emerald-400" borderColor="border-emerald-500/20" bgColor="bg-emerald-500/[0.05] border border-emerald-500/20" />

              <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight leading-[1.08]">
                <span className="bonus-text-gradient">Controle total</span> das suas vendas
              </h2>

              <p className="text-txt-secondary text-lg mb-8 leading-relaxed">
                Receba <span className="text-white font-bold">missões diárias</span> para nunca esquecer
                de prospectar. Acompanhe funil, receita e conquistas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: BarChart3, label: "Dashboard", desc: "Visão completa de vendas" },
                  { icon: Target, label: "Missões", desc: "Tarefas diárias automáticas" },
                  { icon: DollarSign, label: "Produtos", desc: "Serviços com preços" },
                ].map(({ icon: I, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-card p-4 rounded-xl border-emerald-500/10"
                  >
                    <I size={24} className="text-emerald-400 mb-2" />
                    <h4 className="font-bold text-sm mb-1">{label}</h4>
                    <p className="text-xs text-txt-secondary">{desc}</p>
                  </motion.div>
                ))}
              </div>

              <PopupToast icon={CircleDollarSign} text="Venda aprovada — R$ 1.000!" className="relative" delay={1.5} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
            </div>

            {/* Dashboard mock */}
            <div className="relative">
              <MockDashboard />
              <PopupToast icon={Target} text="Missão concluída!" className="-top-3 -left-3" delay={1} bgColor="bg-amber-500/10" borderColor="border-amber-500/20" color="text-amber-400" />
              <PopupToast icon={CircleDollarSign} text="Pix recebido — R$ 90" className="-bottom-3 -right-3" delay={1.8} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
            </div>
          </SlideLayout>
        );

      /* ═══ STEP 12 – Resumo Ferramentas ═══ */
      case 12:
        return (
          <SlideCentered maxW="max-w-[1200px]">
            <FloatingIcon icon={Sparkles} className="top-[5%] left-[5%]" size={38} delay={0} />
            <FloatingIcon icon={Layers} className="top-[10%] right-[6%]" size={32} delay={0.6} />
            <FloatingIcon icon={Zap} className="bottom-[12%] left-[8%]" size={28} delay={1.2} />
            <FloatingIcon icon={Star} className="bottom-[10%] right-[5%]" size={34} delay={0.3} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Sparkles} text="Resumo" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.08]">
              <span className="text-gradient-animated">+12 ferramentas</span> com IA
              <br />em <span className="text-white">uma única plataforma</span>
            </h2>

            <p className="text-txt-secondary text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
              Acelere seu processo criativo, automatize <span className="text-white font-bold">90% do serviço</span> e
              prospecte mais clientes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-10">
              {[
                { icon: PenTool, label: "CopyMaker" },
                { icon: Camera, label: "Estúdio Foto" },
                { icon: Palette, label: "Img Criativa" },
                { icon: Box, label: "Mockup" },
                { icon: Layers, label: "Assets 3D" },
                { icon: Wand2, label: "Restaurador" },
                { icon: Smartphone, label: "UGC Builder" },
                { icon: Users, label: "Fábrica Clientes" },
              ].map(({ icon: I, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-5 lg:p-6 rounded-2xl text-center"
                >
                  <I size={28} className="text-accent mx-auto mb-3" />
                  <span className="text-sm font-bold text-txt-secondary">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-poppins font-bold text-white"
            >
              Ou seja...
            </motion.p>
          </SlideCentered>
        );

      /* ═══ STEP 13 – Proposta de valor ═══ */
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[8%] left-[8%]" size={42} delay={0} />
            <FloatingIcon icon={TrendingUp} className="top-[12%] right-[6%]" size={34} delay={0.6} />
            <FloatingIcon icon={Crown} className="bottom-[15%] left-[6%]" size={32} delay={1} />
            <FloatingIcon icon={Sparkles} className="bottom-[18%] right-[8%]" size={28} delay={0.3} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[700px] h-[700px]" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center mx-auto mb-10 shadow-glow-xl"
            >
              <Rocket size={44} className="text-black" />
            </motion.div>

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-[1.08] max-w-[1100px]">
              Uma plataforma que <span className="text-gradient-animated">melhora seu workflow</span> e faz{" "}
              {userType === "agencia" ? "sua agência" : "você"}{" "}
              <span className="text-gradient-animated">fechar mais clientes</span>
            </h2>

            <p className="text-txt-secondary text-xl md:text-2xl max-w-2xl leading-relaxed">
              Tudo em um único lugar. <span className="text-white font-bold">Sem trocar de ferramenta. Sem prompt complexo.</span>
            </p>
          </div>
        );

      /* ═══ STEP 14 – Quanto custa seu tempo ═══ */
      case 14:
        return (
          <SlideCentered maxW="max-w-[1000px]">
            <FloatingIcon icon={DollarSign} className="top-[5%] left-[5%]" size={38} delay={0} />
            <FloatingIcon icon={Clock} className="top-[10%] right-[8%]" size={32} delay={0.7} />
            <FloatingIcon icon={TrendingUp} className="bottom-[12%] left-[10%]" size={28} delay={1.3} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" color="bg-accent/[0.03]" />

            <Badge icon={DollarSign} text="Reflexão" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 tracking-tight leading-tight">
              Quanto custa o seu <span className="text-gradient-animated">tempo</span> hoje?
            </h2>

            <div className="space-y-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-2xl text-left"
              >
                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed">
                  Se você prospectasse <span className="text-white font-bold">3 pessoas por dia</span> (90 no mês)
                  e fechasse <span className="text-accent font-bold">5 clientes novos</span> todos os meses...
                </p>
                <p className="font-poppins font-black text-2xl md:text-3xl text-white mt-4">
                  Quanto você lucraria?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 rounded-2xl text-left border-accent/10"
              >
                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed">
                  Às vezes, por conta de <span className="text-gradient-animated font-black text-2xl">R$ 169,90/mês</span>
                </p>
                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed mt-2">
                  você tá deixando de ganhar mais de <span className="text-white font-black text-3xl md:text-4xl">R$ 5.000</span> a mais todos os meses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card p-8 rounded-2xl text-left border-red-500/10"
              >
                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed">
                  Às vezes, por conta de <span className="text-white font-bold">R$ 169,90</span>, você tá
                  perdendo <span className="text-red-400 font-bold">+3 horas do seu dia</span> procurando imagens
                  e mais <span className="text-red-400 font-bold">+3h manipulando elas</span>.
                </p>
              </motion.div>
            </div>
          </SlideCentered>
        );

      /* ═══ STEP 15 – Feedbacks de quem usou (Grid infinito) ═══ */
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 relative overflow-hidden">
            <FloatingIcon icon={MessageSquare} className="top-[6%] left-[6%]" size={36} delay={0} />
            <FloatingIcon icon={Heart} className="top-[8%] right-[8%]" size={30} delay={0.6} />
            <FloatingIcon icon={Star} className="bottom-[14%] left-[10%]" size={28} delay={1.2} />
            <FloatingIcon icon={Sparkles} className="bottom-[12%] right-[6%]" size={32} delay={0.3} />
            <GlowOrb className="top-1/4 left-1/3" />

            <Badge icon={MessageSquare} text="Feedbacks reais" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-[1.08] text-center">
              Quem usa, <span className="text-gradient-animated">não volta atrás</span>
            </h2>
            <p className="text-txt-secondary text-lg md:text-xl mb-10 text-center max-w-2xl">
              Prints reais de designers e social medias que usam o Calango Studio no dia a dia.
            </p>

            <FeedbackGrid />

            <PopupToast icon={Heart} text="Melhor investimento que fiz!" className="bottom-[16%] right-[8%]" delay={1.2} bgColor="bg-pink-500/10" borderColor="border-pink-500/20" color="text-pink-400" />
          </div>
        );

      /* ═══ STEP 16 – Depoimentos em destaque ═══ */
      case 16:
        return (
          <SlideCentered maxW="max-w-[1300px]">
            <FloatingIcon icon={Quote} className="top-[5%] left-[6%]" size={40} delay={0} color="text-accent/15" />
            <FloatingIcon icon={Star} className="top-[8%] right-[8%]" size={32} delay={0.7} />
            <FloatingIcon icon={Heart} className="bottom-[12%] left-[8%]" size={28} delay={1.4} color="text-pink-400/15" />
            <FloatingIcon icon={Sparkles} className="bottom-[10%] right-[6%]" size={30} delay={0.4} />
            <GlowOrb className="top-1/3 left-1/2 -translate-x-1/2" />

            <Badge icon={Star} text="Depoimentos em destaque" />

            <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-12 tracking-tight text-center">
              Resultados que <span className="text-gradient-animated">falam por si</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* Depoimento 1 – Gabriel Castro */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative glass-card p-8 lg:p-10 rounded-2xl text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/[0.06] to-transparent rounded-bl-full pointer-events-none" />
                <Quote size={32} className="text-accent/20 mb-5" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                    G
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-white text-lg">Gabriel Castro</p>
                    <p className="text-sm text-txt-muted">Designer & Social Media</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed">
                  &ldquo;Reuniram <span className="text-white font-bold">tudo que eu precisava</span> e até mais em um lugar só.
                  Meu fluxo de produção ficou <span className="text-gradient-animated font-bold">1000x mais rápido</span>,
                  sem contar a facilidade de usar para o resultado que entrega.&rdquo;
                </p>

                <PopupToast icon={Zap} text="Produção acelerada em 1000%" className="absolute -bottom-2 -right-2" delay={0.8} />
              </motion.div>

              {/* Depoimento 2 – David */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="relative glass-card p-8 lg:p-10 rounded-2xl text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/[0.06] to-transparent rounded-bl-full pointer-events-none" />
                <Quote size={32} className="text-purple-400/20 mb-5" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                    D
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-white text-lg">David</p>
                    <p className="text-sm text-txt-muted">Designer Freelancer</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-lg md:text-xl text-txt-secondary leading-relaxed">
                  &ldquo;Várias funcionalidades em <span className="text-white font-bold">um só lugar</span>,
                  tirando a necessidade de assinar várias IAs.{" "}
                  <span className="text-gradient-animated font-bold">Melhor investimento que fiz em 2026!</span>&rdquo;
                </p>

                <PopupToast icon={CircleDollarSign} text="ROI positivo no primeiro mês" className="absolute -bottom-2 -right-2" delay={1.1} bgColor="bg-emerald-500/10" borderColor="border-emerald-500/20" color="text-emerald-400" />
              </motion.div>
            </div>
          </SlideCentered>
        );

      /* ═══ STEP 17 – CTA / Plano PRO ═══ */
      case 17:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 relative">
            <FloatingIcon icon={Rocket} className="top-[6%] left-[5%]" size={40} delay={0} />
            <FloatingIcon icon={Crown} className="top-[8%] right-[6%]" size={34} delay={0.5} />
            <FloatingIcon icon={Sparkles} className="bottom-[12%] left-[8%]" size={30} delay={1} />
            <FloatingIcon icon={Zap} className="bottom-[10%] right-[5%]" size={28} delay={0.3} />
            <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-accent/[0.04]" size="w-[700px] h-[700px]" />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-lg w-full">
              <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight leading-tight">
                Bora <span className="text-gradient-animated">automatizar</span> sua operação?
              </h2>
              <p className="text-txt-secondary text-lg md:text-xl mb-10">
                E construir um sistema de vendas que funciona no piloto automático.
              </p>

              {/* PRO Plan Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative rounded-[28px] bg-black/50 border border-accent/30 p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_60px_rgba(255,170,0,0.08)]"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-[10px] font-black uppercase tracking-[0.18em] shadow-glow">
                  Mais Popular
                </span>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-end flex items-center justify-center shadow-lg">
                    <Sparkles size={28} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-poppins font-black text-3xl">Pro</h3>
                    <p className="text-sm text-txt-muted">Acesso completo às ferramentas</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-6 justify-center">
                  <span className="text-base text-txt-muted">R$</span>
                  <span className="font-poppins font-black text-6xl text-gradient-animated">169,90</span>
                  <span className="text-base text-txt-muted">/mês</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Todos os geradores de imagem",
                    "CopyMaker (copy automática)",
                    "Análise de Perfil (Instagram)",
                    "Remix de Layout",
                    "Fábrica de Clientes completa",
                    "10 Clientes cadastrados",
                    "2 Personagens por cliente",
                    "12k Calangocoins / mês",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <Check size={16} className="text-accent flex-shrink-0" strokeWidth={3} />
                      <span className="text-txt-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pay.hotmart.com/F104772530K?off=y2uzyv4s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 rounded-2xl font-black text-lg tracking-[0.14em] uppercase bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Quero Automatizar Minha Operação
                </a>

                <p className="text-xs text-txt-muted mt-5 uppercase tracking-wider font-bold">
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
            {step > 0 && <ProgressBar current={step} total={totalSteps} />}
            {step > 0 && (
              <span className="text-xs text-txt-muted font-bold tabular-nums">
                {step + 1}/{totalSteps}
              </span>
            )}
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
