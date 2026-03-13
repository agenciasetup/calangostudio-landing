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
  ArrowDown,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá Calango, tenho dúvidas de acesso para o Calango.studio"
);
const whatsappLink = `https://wa.me/5511999675277?text=${whatsappMessage}`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const steps = [
  {
    number: 1,
    label: "Primeiro Passo",
    icon: LogIn,
    title: "Acesse a página de Login",
    description:
      "Clique no botão abaixo para abrir a página de login do Calango Studio. Ele vai abrir em uma nova aba.",
    hasButton: true,
  },
  {
    number: 2,
    label: "Segundo Passo",
    icon: Mail,
    title: 'Clique em "Primeiro Login"',
    description: null,
    hasButton: false,
  },
  {
    number: 3,
    label: "Terceiro Passo",
    icon: KeyRound,
    title: "Acesse o e-mail e crie sua senha",
    description:
      "Abra o link que chegou no seu e-mail, crie uma senha e pronto — seu acesso está liberado!",
    hasButton: false,
  },
];

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#e5e5e5] relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(255,170,0,0.07)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,123,71,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="pt-12 pb-6 md:pt-20 md:pb-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] mb-5 shadow-[0_0_60px_rgba(255,170,0,0.3)]"
            >
              <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-[#0b0b0b]" />
            </motion.div>

            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] mb-4"
            >
              Parabéns!{" "}
              <span className="text-gradient-animated">Você está dentro.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed"
            >
              Agora você tem um{" "}
              <span className="text-white font-semibold">
                arsenal de IA para automatizar 90% das suas operações no Design.
              </span>
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2 mt-5 text-[#71717a]"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="text-sm md:text-base font-medium">
                Siga os 3 passos abaixo para fazer seu primeiro acesso
              </span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ MAIN CONTENT: STEPS + IMAGE ═══════════════════ */}
        <section className="px-4 pt-6 pb-16 md:pt-10 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* ── LEFT: STEPS ── */}
              <div className="w-full lg:w-[58%] xl:w-[55%] space-y-6 md:space-y-8">

                {/* STEP 1 */}
                <motion.div
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="glass-card p-6 md:p-8 group relative overflow-hidden"
                >
                  {/* Decorative accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ffaa00] to-[#ff7b47] rounded-l-3xl" />

                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_25px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                        <span className="text-2xl md:text-3xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                          1
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <LogIn className="w-4 h-4 text-[#ffaa00]" />
                        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#ffaa00]">
                          Primeiro Passo
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl font-bold text-white mb-2">
                        Acesse a página de Login
                      </h2>
                      <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-5">
                        Clique no botão abaixo para abrir a página de login do
                        Calango Studio. Ele vai abrir em uma nova aba.
                      </p>

                      <a
                        href="https://www.calango.studio/#/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 text-sm md:text-base"
                      >
                        <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                        Acessar Login
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Connector line */}
                <div className="flex justify-start pl-10 md:pl-[3.25rem]">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#ffaa00]/30 to-[#ffaa00]/10 rounded-full" />
                </div>

                {/* STEP 2 */}
                <motion.div
                  custom={4}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="glass-card p-6 md:p-8 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ffaa00] to-[#ff7b47] rounded-l-3xl" />

                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_25px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                        <span className="text-2xl md:text-3xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                          2
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Mail className="w-4 h-4 text-[#ffaa00]" />
                        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#ffaa00]">
                          Segundo Passo
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl font-bold text-white mb-2">
                        Clique em &ldquo;Primeiro Login&rdquo;
                      </h2>
                      <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed">
                        Na página de login, clique em{" "}
                        <span className="inline-flex items-center text-white font-semibold bg-white/10 px-2.5 py-0.5 rounded-md text-sm">
                          Primeiro Login
                        </span>{" "}
                        e coloque o{" "}
                        <span className="text-white font-semibold">
                          e-mail que você usou na compra.
                        </span>
                      </p>

                      <div className="mt-4 flex items-center gap-3 bg-[#ffaa00]/5 border border-[#ffaa00]/15 rounded-xl px-4 py-3.5">
                        <Sparkles className="w-4 h-4 text-[#ffaa00] flex-shrink-0" />
                        <p className="text-xs md:text-sm text-[#a1a1aa]">
                          Um{" "}
                          <span className="text-white font-medium">
                            link de acesso
                          </span>{" "}
                          será enviado para o seu e-mail.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connector line */}
                <div className="flex justify-start pl-10 md:pl-[3.25rem]">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#ffaa00]/30 to-[#ffaa00]/10 rounded-full" />
                </div>

                {/* STEP 3 */}
                <motion.div
                  custom={5}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="glass-card p-6 md:p-8 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ffaa00] to-emerald-500 rounded-l-3xl" />

                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#ffaa00] to-[#ff7b47] flex items-center justify-center shadow-[0_0_25px_rgba(255,170,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,170,0,0.3)] transition-shadow duration-500">
                        <span className="text-2xl md:text-3xl font-black text-[#0b0b0b] font-[family-name:var(--font-poppins)]">
                          3
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <KeyRound className="w-4 h-4 text-[#ffaa00]" />
                        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#ffaa00]">
                          Terceiro Passo
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl font-bold text-white mb-2">
                        Acesse o e-mail e crie sua senha
                      </h2>
                      <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-4">
                        Abra o link que chegou no seu e-mail, crie uma senha e
                        pronto — você já pode usar o Calango Studio!
                      </p>

                      <div className="flex items-center gap-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl px-4 py-3.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <p className="text-sm md:text-base font-semibold text-emerald-300">
                          Pronto! Seu acesso está liberado.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ── RIGHT: IMAGE (sticky on desktop, after steps on mobile) ── */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="w-full lg:w-[42%] xl:w-[45%] lg:sticky lg:top-8"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(255,170,0,0.08)]">
                  <Image
                    src="/images/obrigado.jpg"
                    alt="Bem-vindo ao Calango Studio"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303]/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ SUPPORT / WHATSAPP ═══════════════════ */}
        <section className="px-4 pb-16 md:pb-24">
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <div className="section-divider mb-10" />

            <div className="glass-card p-6 md:p-10 text-center">
              <h3 className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl font-bold text-white mb-2">
                Precisa de ajuda?
              </h3>
              <p className="text-[#a1a1aa] text-sm md:text-base mb-6">
                Em caso de dúvidas, chame nosso suporte no WhatsApp:
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm md:text-base rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:shadow-[0_0_50px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com o Suporte
              </a>

              <p className="text-[#71717a] text-xs mt-3">
                +55 11 99967-5277
              </p>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════ FOOTER ═══════════════════ */}
        <footer className="border-t border-white/5 py-6 px-4 text-center">
          <p className="text-[#71717a] text-xs">
            &copy; {new Date().getFullYear()} Calango Studio. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
