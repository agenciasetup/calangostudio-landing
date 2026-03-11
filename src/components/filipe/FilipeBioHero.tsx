"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram, ExternalLink, Users, BadgeDollarSign, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "+10k", label: "Alunos formados" },
  { icon: Heart, value: "130k+", label: "Seguidores" },
  { icon: BadgeDollarSign, value: "R$2MI+", label: "Faturados com Design" },
];

export default function FilipeBioHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center px-4 pt-28 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-to-br from-accent/8 via-accent-end/4 to-transparent blur-[100px] md:blur-[160px]" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden">
                <img
                  src="/images/filipe-lourenco.webp"
                  alt="Filipe Lourenço — Designer, empreendedor digital e fundador da Agência Setup"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
              {/* Accent glow behind photo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/10 to-accent-end/5 blur-2xl -z-10" />
            </div>

            {/* Social links under photo */}
            <div className="flex gap-3 mt-6 justify-center">
              <a
                href="https://instagram.com/lipeslourenco"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={15} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @lipeslourenco
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://instagram.com/agenciasetup"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={15} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @agenciasetup
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              Fundador
            </span>

            <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 tracking-tight">
              Filipe{" "}
              <span className="text-gradient-animated">Lourenço</span>
            </h1>

            <p className="text-lg md:text-xl text-txt-secondary leading-relaxed mb-4">
              <strong className="text-white">Designer, empreendedor digital</strong>{" "}
              e fundador da{" "}
              <strong className="text-white">Agência Setup</strong> e do{" "}
              <strong className="text-white">Calango Studio</strong>.
            </p>

            <p className="text-base md:text-lg text-txt-secondary leading-relaxed mb-8">
              Minha missão é simples:{" "}
              <strong className="text-white">
                ajudar pessoas comuns a viverem de design e criação digital.
              </strong>
            </p>

            <p className="text-txt-secondary leading-relaxed mb-8">
              Nos últimos anos construí uma das maiores comunidades de design do
              Brasil, com mais de{" "}
              <strong className="text-white">130 mil pessoas</strong>{" "}
              acompanhando diariamente conteúdos sobre design gráfico, criação de
              conteúdo, inteligência artificial e mercado digital. Ao longo dessa
              jornada já ajudei mais de{" "}
              <strong className="text-white">10 mil alunos</strong> a aprender
              design, conquistar clientes e transformar habilidades criativas em
              profissão.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3"
                >
                  <Icon size={18} className="text-accent flex-shrink-0" />
                  <div>
                    <span className="font-poppins font-bold text-lg text-white block leading-tight">
                      {value}
                    </span>
                    <span className="text-xs text-txt-muted">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
