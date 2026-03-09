"use client";

import { motion } from "framer-motion";

export default function WhatIsCalango() {
  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 tracking-tight"
        >
          O Calango Studio{" "}
          <span className="text-gradient-animated">
            não é um gerador de imagem.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-txt-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          É uma plataforma de produção criativa com IA — pensada do zero para
          quem atende clientes.
          <br /><br />
          Você cadastra seus clientes com briefing, fotos, estilo e referências.
          A partir daí, gera imagens, copies e criativos direto do perfil de
          cada cliente — sem dar contexto pra IA toda vez, sem confundir
          projetos, sem perder consistência.
          <br /><br />
          É a diferença entre usar IA como ferramenta e usar IA como parte do
          seu processo.
        </motion.p>
      </div>
    </section>
  );
}
