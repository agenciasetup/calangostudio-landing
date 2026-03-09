"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Seu próximo post pode sair em{" "}
          <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
            20 minutos.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#cccccc] mb-10"
        >
          Ou você continua gastando 4 horas. A escolha é sua.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#planos"
            className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-accent to-accent-end text-black font-bold text-xl hover:shadow-[0_0_40px_rgba(255,170,0,0.5)] transition-shadow"
          >
            Assinar agora
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-sm text-txt-secondary"
        >
          Dúvidas? Fala com a gente →{" "}
          <a
            href="https://instagram.com/calango.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @calango.studio
          </a>
        </motion.p>
      </div>
    </section>
  );
}
