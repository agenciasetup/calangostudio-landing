"use client";

import React, { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Lock, Unlock } from "lucide-react";

const FreemiumVSLPlayer = dynamic(
  () => import("@/components/freemium/FreemiumVSLPlayer"),
  { ssr: false }
);

const FreemiumForm = dynamic(
  () => import("@/components/freemium/FreemiumForm"),
  { ssr: false }
);

const FEATURES = [
  { icon: "🎨", title: "12 Ferramentas de IA", desc: "Geração de imagens, mockups 3D, estúdio de fotos e mais." },
  { icon: "🚀", title: "CopyMaker + Prompts", desc: "Textos profissionais e prompts otimizados com IA." },
  { icon: "📊", title: "Análise de Perfil", desc: "Consultor visual com IA para otimizar seu conteúdo." },
  { icon: "👥", title: "Gestão de Clientes", desc: "Cadastre clientes e gere conteúdo personalizado." },
];

const RULES = [
  "Teste gratuito de 3 dias com acesso completo",
  "Após 3 dias, as ferramentas serão bloqueadas",
  "Assine um plano para continuar usando",
  "Cada pessoa pode usar o teste apenas uma vez",
  "Verificação via WhatsApp obrigatória",
];

export default function FreemiumPage() {
  const [formUnlocked, setFormUnlocked] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  // Check on mount if already unlocked (from localStorage/cookie)
  useEffect(() => {
    try {
      const ls = localStorage.getItem("freemium_vsl_progress");
      if (ls) {
        const parsed = JSON.parse(ls);
        if (parsed.completed) {
          setFormUnlocked(true);
        }
      } else {
        // Check cookie fallback
        const match = document.cookie.match(/(?:^|; )freemium_vsl=([^;]*)/);
        if (match) {
          const parsed = JSON.parse(decodeURIComponent(match[1]));
          if (parsed.completed) {
            setFormUnlocked(true);
          }
        }
      }
    } catch {
      // ignore
    }
    setCheckedStorage(true);
  }, []);

  const handleUnlock = useCallback(() => {
    setFormUnlocked(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-green-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.02] blur-[100px]" />
      </div>

      {/* Yellow top banner */}
      <div className="relative z-20 bg-gradient-to-r from-yellow-500 to-amber-500 text-black">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-2 text-center">
          <Play size={16} className="shrink-0 fill-current" />
          <p className="text-xs sm:text-sm font-black uppercase tracking-wide">
            Assista o vídeo abaixo para liberar o acesso gratuito
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <span className="text-black font-black text-sm">C</span>
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Calango<span className="text-green-400">.studio</span>
            </span>
          </a>
          <a
            href="https://calango.studio"
            className="text-xs text-zinc-500 hover:text-white transition-colors font-medium"
          >
            Já tem conta? Entrar
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-10 md:py-16">
        {/* Video Section */}
        <section className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">
                Teste Grátis por 3 Dias
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4">
              Experimente o{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Calango Studio
              </span>
              <br />
              gratuitamente
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Acesso completo a todas as ferramentas de IA para criação de
              conteúdo visual profissional. Sem cartão de crédito.
            </p>
          </motion.div>

          {/* VSL Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {checkedStorage && (
              <FreemiumVSLPlayer onUnlock={handleUnlock} />
            )}
          </motion.div>
        </section>

        {/* Form Section - conditionally visible */}
        <section id="formulario">
          <AnimatePresence>
            {formUnlocked ? (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Unlock indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-green-500/40" />
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
                    <Unlock size={12} className="text-green-400" />
                    <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">
                      Formulário Liberado
                    </span>
                  </div>
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-green-500/40" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Left: Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {FEATURES.map((feat, i) => (
                        <motion.div
                          key={feat.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 hover:border-green-500/20 transition-colors"
                        >
                          <span className="text-2xl mb-2 block">{feat.icon}</span>
                          <h3 className="text-white font-bold text-sm mb-1">
                            {feat.title}
                          </h3>
                          <p className="text-zinc-500 text-xs leading-relaxed">
                            {feat.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Rules */}
                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
                      <h3 className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-3">
                        Regras do Teste Gratuito
                      </h3>
                      <ul className="space-y-2">
                        {RULES.map((rule) => (
                          <li
                            key={rule}
                            className="flex items-start gap-2.5 text-xs text-zinc-400"
                          >
                            <svg
                              className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Right: Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                      <div className="text-center mb-8">
                        <h2 className="text-xl font-display font-bold text-white mb-2">
                          Crie sua conta gratuita
                        </h2>
                        <p className="text-zinc-500 text-xs">
                          Preencha seus dados para começar seu teste de 3 dias
                        </p>
                      </div>
                      <FreemiumForm />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-zinc-700" />
                  <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5">
                    <Lock size={12} className="text-zinc-500" />
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                      Formulário Bloqueado
                    </span>
                  </div>
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-zinc-700" />
                </div>
                <p className="text-zinc-600 text-sm">
                  Assista o vídeo completo para desbloquear o cadastro gratuito.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-[10px] text-zinc-600">
            Calango Studio &copy; {new Date().getFullYear()} &mdash; Agencia Setup
          </p>
        </div>
      </footer>
    </div>
  );
}
