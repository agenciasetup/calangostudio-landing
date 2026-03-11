"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, ArrowRight } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Sobre o criador
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Filipe Lourenço
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden">
              <img
                src="/images/filipe-lourenco.webp"
                alt="Filipe Lourenço — Designer, empreendedor e fundador da Agência Setup e Calango Studio"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-base md:text-lg text-txt-secondary leading-relaxed mb-4">
              <strong className="text-white">Designer, empreendedor digital</strong> e
              fundador da{" "}
              <strong className="text-white">Agência Setup</strong>, uma das
              maiores comunidades de design do Brasil.
            </p>

            <p className="text-txt-secondary leading-relaxed mb-4">
              Ao longo da sua jornada, já ajudou mais de{" "}
              <strong className="text-white">10 mil alunos</strong> a aprender
              design e construir carreira no mercado digital. Hoje, sua
              comunidade reúne mais de{" "}
              <strong className="text-white">130 mil seguidores</strong>,
              formada por designers, social media e criadores de conteúdo.
            </p>

            <p className="text-txt-secondary leading-relaxed mb-4">
              Somente com projetos de design e marketing digital, já ultrapassou{" "}
              <strong className="text-white">R$ 2 milhões em faturamento</strong>.
            </p>

            <p className="text-sm text-txt-muted mb-6">
              O{" "}
              <strong className="text-txt-secondary">Calango Studio</strong>{" "}
              nasceu dessa experiência: uma plataforma criada para ajudar
              designers a produzirem mais, melhor e mais rápido usando
              inteligência artificial.
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <a
                href="https://instagram.com/agenciasetup"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={15} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @agenciasetup
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://instagram.com/lipeslourenco"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={15} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @lipeslourenco
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="/filipe-lourenco"
                className="group inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                Conheça a história completa
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
