"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Users, BadgeDollarSign } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Quem desenvolveu
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Filipe Lourenço
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
              <img
                src="/images/filipe-lourenco.webp"
                alt="Filipe Lourenço — Designer, empreendedor e fundador da Agência Setup e Calango Studio"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-5 justify-center">
              <div className="glass-panel rounded-xl px-5 py-3 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Users size={14} className="text-accent" />
                  <span className="font-poppins font-bold text-lg text-white">+10k</span>
                </div>
                <span className="text-xs text-txt-muted">Alunos</span>
              </div>
              <div className="glass-panel rounded-xl px-5 py-3 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <BadgeDollarSign size={14} className="text-accent" />
                  <span className="font-poppins font-bold text-lg text-white">+2MI</span>
                </div>
                <span className="text-xs text-txt-muted">com Design</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-base md:text-lg text-txt-secondary leading-relaxed mb-5">
              <strong className="text-white">Designer e empreendedor</strong>,
              fundador da{" "}
              <strong className="text-white">Agência Setup</strong>. Hoje somos
              mais de{" "}
              <strong className="text-white">130 mil seguidores</strong> e{" "}
              <strong className="text-white">milhares de alunos</strong>{" "}
              espalhados pelo Brasil e pelo mundo.
            </p>

            <p className="text-txt-secondary leading-relaxed mb-4">
              Ao longo dessa jornada, já ajudei:
            </p>
            <ul className="space-y-2 text-txt-secondary mb-5">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                Designers iniciantes que estavam começando do zero
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                Profissionais perdidos, sem direção ou posicionamento
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                Pessoas comuns que nunca tinham trabalhado com Design
              </li>
            </ul>

            <p className="text-txt-secondary leading-relaxed mb-5">
              Muitos deles saíram do absoluto zero seguindo{" "}
              <strong className="text-white">método</strong>, não talento. Eu
              não ensino design como arte.{" "}
              <strong className="text-white">
                Ensino design como profissão.
              </strong>
            </p>

            <p className="text-txt-secondary leading-relaxed mb-5">
              O que você aprende aqui é o mesmo processo que eu uso em{" "}
              <strong className="text-white">projetos reais</strong>, com{" "}
              <strong className="text-white">clientes reais</strong>, e que
              aplico diariamente na minha operação. Somente através do Design,
              já faturei quase{" "}
              <strong className="text-white">R$ 2 milhões</strong> com projetos,
              clientes e parcerias. E somando os resultados de mais de{" "}
              <strong className="text-white">10 mil alunos</strong>, já
              ultrapassamos{" "}
              <strong className="text-white">
                dezenas de milhões de reais faturados
              </strong>
              .
            </p>

            <p className="text-sm text-txt-muted mb-6">
              O <strong className="text-txt-secondary">Calango Studio</strong>{" "}
              é a plataforma de IA para designers criada pela Agência Setup para
              ajudar profissionais a produzirem mais, melhor e mais rápido.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com/agenciasetup"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={16} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @agenciasetup
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://instagram.com/lipeslourenco"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
              >
                <Instagram size={16} className="text-accent" />
                <span className="text-txt-secondary group-hover:text-white transition-colors">
                  @lipeslourenco
                </span>
                <ExternalLink size={10} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
