"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  LogIn,
  Mail,
  KeyRound,
  ExternalLink,
  MessageCircle,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá Calango, tenho dúvidas de acesso para o Calango.studio"
);
const whatsappLink = `https://wa.me/5511999675277?text=${whatsappMessage}`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#e5e5e5] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,170,0,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,123,71,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* ========== HERO / CONGRATS ========== */}
        <section className="pt-16 pb-10 md:pt-24 md:pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] mb-6 shadow-[0_0_60px_rgba(255,170,0,0.3)]"
            >
              <PartyPopper className="w-10 h-10 md:w-12 md:h-12 text-[#0b0b0b]" />
            </motion.div>

            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
            >
              Parabéns!{" "}
              <span className="text-gradient-animated">Você está dentro.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed"
            >
              Agora você tem um{" "}
              <span className="text-white font-semibold">
                arsenal de IA para automatizar 90% das suas operações no Design.
              </span>
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-[#71717a] mt-3"
            >
              Siga os 3 passos abaixo para fazer seu primeiro acesso:
            </motion.p>
          </div>
        </section>

        {/* ========== IMAGE ========== */}
        <motion.section
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="px-4 pb-8 md:pb-12"
        >
          <div className="max-w-md mx-auto">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(255,170,0,0.1)]">
              <Image
                src="/images/obrigado.jpg"
                alt="Bem-vindo ao Calango Studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.section>

        {/* ========== STEPS ========== */}
        <section className="px-4 pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            {/* ── STEP 1 ── */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-10 relative group"
            >
              {/* Step number */}
              <div className="flex items-start gap-5 md:gap-7">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_30px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_50px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                    <span className="text-3xl md:text-4xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                      1
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <LogIn className="w-5 h-5 text-[#ffaa00]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ffaa00]">
                      Primeiro Passo
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    Acesse a página de Login
                  </h2>
                  <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed mb-6">
                    Clique no botão abaixo para abrir a página de login do
                    Calango Studio em uma nova aba.
                  </p>

                  <a
                    href="https://www.calango.studio/#/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-base md:text-lg"
                  >
                    <LogIn className="w-5 h-5" />
                    Acessar Login
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── STEP 2 ── */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-10 relative group"
            >
              <div className="flex items-start gap-5 md:gap-7">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_30px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_50px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                    <span className="text-3xl md:text-4xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                      2
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-[#ffaa00]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ffaa00]">
                      Segundo Passo
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    Clique em &ldquo;Primeiro Login&rdquo;
                  </h2>
                  <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">
                    Na página de login, clique em{" "}
                    <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-md">
                      Primeiro Login
                    </span>{" "}
                    e coloque o{" "}
                    <span className="text-white font-semibold">
                      e-mail que você usou na compra.
                    </span>
                  </p>

                  <div className="mt-5 flex items-center gap-3 bg-[#ffaa00]/5 border border-[#ffaa00]/15 rounded-xl px-5 py-4">
                    <Sparkles className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                    <p className="text-sm md:text-base text-[#a1a1aa]">
                      Um <span className="text-white font-medium">link de acesso</span> será enviado
                      para o seu e-mail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── STEP 3 ── */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 md:p-10 relative group"
            >
              <div className="flex items-start gap-5 md:gap-7">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_30px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_50px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                    <span className="text-3xl md:text-4xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                      3
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <KeyRound className="w-5 h-5 text-[#ffaa00]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ffaa00]">
                      Terceiro Passo
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                    Acesse o link e crie sua senha
                  </h2>
                  <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed mb-5">
                    Abra o link recebido no seu e-mail, crie sua senha e pronto
                    &mdash; você já pode usar o Calango Studio!
                  </p>

                  <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/15 rounded-xl px-5 py-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <p className="text-base md:text-lg font-semibold text-emerald-300">
                      Pronto! Seu acesso está liberado.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== SUPPORT / WHATSAPP ========== */}
        <section className="px-4 pb-20 md:pb-28">
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <div className="section-divider mb-12" />

            <div className="text-center">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl font-bold text-white mb-3">
                Precisa de ajuda?
              </h3>
              <p className="text-[#a1a1aa] text-base md:text-lg mb-8">
                Em caso de dúvidas, chame nosso suporte no WhatsApp:
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base md:text-lg rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:shadow-[0_0_50px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com o Suporte
              </a>

              <p className="text-[#71717a] text-sm mt-4">
                +55 11 99967-5277
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="border-t border-white/5 py-8 px-4 text-center">
          <p className="text-[#71717a] text-sm">
            &copy; {new Date().getFullYear()} Calango Studio. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
