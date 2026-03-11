"use client";

import { motion } from "framer-motion";
import { Wand2, Image as ImageIcon, MousePointerClick, ArrowRight } from "lucide-react";

export default function PromptUsageGuide() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-5">
            Quer turbinar sua experiência com{" "}
            <span className="text-gradient-animated">IA no Design</span>?
          </h2>
          <p className="text-base md:text-lg text-txt-secondary max-w-3xl mx-auto leading-relaxed">
            Combine o <strong className="text-white">Prompt Maker</strong> com
            as ferramentas do{" "}
            <a
              href="https://www.calangostudio.com.br"
              className="text-accent hover:text-accent-hover transition-colors font-semibold"
            >
              Calango Studio
            </a>{" "}
            e transforme qualquer referência em arte profissional em minutos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Modo Manual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent-end/10 flex items-center justify-center mb-5">
              <Wand2 size={20} className="text-accent" />
            </div>
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-3">
              Use no Modo Manual
            </h3>
            <p className="text-txt-secondary leading-relaxed mb-4">
              Pegue o estilo de qualquer imagem com o Prompt Maker, copie o
              prompt gerado e cole no{" "}
              <strong className="text-white">Modo Manual</strong> do Calango
              Studio. Em apenas <strong className="text-white">2 cliques</strong>
              , gere uma foto sua no estilo do prompt.
            </p>
            <ol className="space-y-2 text-sm text-txt-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                Extraia o prompt da imagem de referência aqui
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                Cole o prompt no Modo Manual do Calango Studio
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                Adicione sua foto e gere a imagem
              </li>
            </ol>
          </motion.div>

          {/* Card 2 - Imagem Criativa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent-end/10 flex items-center justify-center mb-5">
              <ImageIcon size={20} className="text-accent" />
            </div>
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-3">
              Ou use a Imagem Criativa
            </h3>
            <p className="text-txt-secondary leading-relaxed mb-4">
              Não quer escrever prompts? Sem problema. Na ferramenta{" "}
              <strong className="text-white">Imagem Criativa</strong> do Calango
              Studio, basta clicar no estilo desejado e adicionar sua imagem de
              referência. A IA faz o resto.
            </p>
            <ol className="space-y-2 text-sm text-txt-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                Escolha um estilo pronto na galeria
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                Adicione a imagem de referência
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                Clique em gerar — sem escrever nenhum prompt
              </li>
            </ol>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10 md:mt-14"
        >
          <a
            href="https://www.calangostudio.com.br"
            className="group inline-flex items-center gap-3 btn-primary px-8 md:px-10 py-4 md:py-5 text-sm md:text-base tracking-widest"
          >
            <MousePointerClick size={18} />
            Conhecer o Calango Studio
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <p className="mt-4 text-sm text-txt-muted">
            Plataforma de IA para Designers criada pela{" "}
            <a
              href="https://instagram.com/agenciasetup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/80 hover:text-accent transition-colors"
            >
              Agência Setup
            </a>{" "}
            de{" "}
            <a
              href="https://instagram.com/lipeslourenco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/80 hover:text-accent transition-colors"
            >
              Filipe Lourenço
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
