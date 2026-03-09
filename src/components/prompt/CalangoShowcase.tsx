"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Camera,
  Smartphone,
  Package,
  History,
  PencilRuler,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    label: "Imagem Criativa",
    description:
      "Gere imagens profissionais a partir de um prompt. Estilos ilimitados, resolução alta e controle total.",
    icon: Palette,
    color: "from-rose-500 to-pink-600",
    hero: true,
  },
  {
    label: "UGC Builder",
    description:
      "Crie conteúdo UGC com personagens consistentes para anúncios e redes sociais.",
    icon: Smartphone,
    color: "from-orange-500 to-amber-600",
  },
  {
    label: "Restaurador PRO",
    description:
      "Restaure, melhore e aumente a resolução de qualquer imagem com IA.",
    icon: History,
    color: "from-amber-400 to-amber-700",
  },
  {
    label: "Estúdio de Foto",
    description:
      "Foto de produto profissional sem estúdio físico. Cenários e iluminação com IA.",
    icon: Camera,
    color: "from-cyan-400 to-blue-500",
  },
  {
    label: "Mockup Produto",
    description:
      "Insira seu produto em cenários reais automaticamente. Perfeito para e-commerce.",
    icon: Package,
    color: "from-emerald-400 to-teal-700",
  },
  {
    label: "Modo Manual",
    description:
      "Controle total sobre cada parâmetro de geração. Para quem sabe o que quer.",
    icon: PencilRuler,
    color: "from-lime-400 to-green-600",
  },
];

export default function CalangoShowcase() {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/3 rounded-full blur-[100px] md:blur-[200px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Muito mais que um extrator de prompt
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Conheça o{" "}
            <span className="text-gradient-animated">Calango Studio</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-3xl mx-auto">
            Uma plataforma completa com geradores de imagem por IA. Crie fotos
            de produto, UGC, criativos para ads e muito mais — tudo em um só
            lugar.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group relative rounded-[20px] md:rounded-[24px] bg-black/40 border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/[0.18] ${
                tool.hero ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 inset-x-0 h-[2px] md:h-[3px] rounded-t-2xl bg-gradient-to-r ${tool.color} opacity-50`}
              />

              <div className="relative z-10 p-5 md:p-6 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center border shadow-lg mb-4 bg-gradient-to-br ${tool.color} border-white/10`}
                >
                  <tool.icon size={20} className="text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-base md:text-lg text-white mb-2">
                  {tool.label}
                </h3>
                <p className="text-sm text-txt-muted leading-relaxed flex-1">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10 md:mt-14"
        >
          <a
            href="https://calango.studio/?utm_source=promptmaker&utm_medium=showcase_cta&utm_campaign=conhecer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-primary px-8 py-4 text-sm tracking-widest"
          >
            Conhecer Calango Studio
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <p className="text-xs text-txt-muted mt-4 uppercase tracking-wider font-bold">
            12+ ferramentas de IA em uma plataforma
          </p>
        </motion.div>
      </div>
    </section>
  );
}
