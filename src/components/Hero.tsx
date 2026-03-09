"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          O studio completo para{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            Designers
          </span>{" "}
          e{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            Social Media Managers.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Gere imagens, crie copies, gerencie clientes e acelere todo o seu
          workflow — sem trocar de aba, sem assinar várias ferramentas, sem
          perder horas no processo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#planos"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-end text-black font-bold text-lg hover:shadow-[0_0_32px_rgba(255,170,0,0.5)] transition-shadow"
          >
            Assinar agora
          </a>
          <a
            href="#ferramentas"
            className="text-txt-secondary hover:text-white transition-colors text-lg"
          >
            Ver ferramentas ↓
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-sm text-txt-secondary mb-12"
        >
          Usado por designers e agências que entregam mais rápido.
        </motion.p>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="animate-float">
            {/* Browser frame */}
            <div className="rounded-xl border border-glass bg-bg-secondary/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-glass">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4 h-6 rounded bg-white/5 flex items-center justify-center text-xs text-txt-secondary">
                  app.calango.studio
                </div>
              </div>
              {/* Screenshot placeholder */}
              <div className="relative aspect-video bg-bg-primary flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">🦎</span>
                  <p className="font-syne font-bold text-2xl text-white mb-2">
                    Calango Studio
                  </p>
                  <p className="text-txt-secondary text-sm">
                    Dashboard — Ferramentas Criativas
                  </p>
                  {/* Simulated dashboard grid */}
                  <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto">
                    {["🎬", "📸", "🧑‍💻", "📦", "🧊", "✍️"].map(
                      (icon, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-glass border border-glass text-center"
                        >
                          <span className="text-2xl">{icon}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
