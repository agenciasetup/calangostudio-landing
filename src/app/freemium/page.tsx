"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-green-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.02] blur-[100px]" />
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
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-[10px] font-black uppercase tracking-widest">
                Teste Grátis por 3 Dias
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4">
                Experimente o{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Calango Studio
                </span>
                <br />
                gratuitamente
              </h1>
              <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                Acesso completo a todas as ferramentas de IA para criação de
                conteúdo visual profissional. Sem cartão de crédito.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-8"
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
