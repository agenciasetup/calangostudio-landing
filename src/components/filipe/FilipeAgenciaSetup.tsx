"use client";

import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Layout,
  Share2,
  Briefcase,
  ShoppingCart,
  Instagram,
  ExternalLink,
} from "lucide-react";

const skills = [
  { icon: Palette, label: "Design gráfico profissional" },
  { icon: Share2, label: "Criação de conteúdo para redes sociais" },
  { icon: PenTool, label: "Produção de artes para clientes" },
  { icon: Layout, label: "Posicionamento no mercado digital" },
  { icon: Briefcase, label: "Construção de portfólio" },
  { icon: ShoppingCart, label: "Vendas de serviços criativos" },
];

export default function FilipeAgenciaSetup() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Agência Setup
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            A maior comunidade de{" "}
            <span className="text-gradient-animated">design</span> do Brasil
          </h2>
          <p className="text-txt-secondary max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            A Agência Setup nasceu como um projeto educacional para ajudar
            designers iniciantes a entender o mercado digital. Hoje é uma das
            maiores comunidades brasileiras voltadas para designers, social media
            e criadores digitais.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="glass-panel rounded-xl p-4 md:p-5 flex items-center gap-3 group hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Icon size={16} className="text-accent" />
              </div>
              <span className="text-sm text-txt-secondary group-hover:text-white transition-colors">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-txt-secondary leading-relaxed mb-6">
            Através da Agência Setup e dos programas de formação, milhares de
            alunos já aprenderam a construir carreira real com design. Somando
            projetos próprios, trabalhos com clientes e iniciativas digitais, já
            ultrapassamos{" "}
            <strong className="text-white">
              milhões de reais movimentados dentro do mercado criativo
            </strong>
            .
          </p>

          <a
            href="https://instagram.com/agenciasetup"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel hover:bg-white/[0.06] transition-colors text-sm"
          >
            <Instagram size={16} className="text-accent" />
            <span className="text-txt-secondary group-hover:text-white transition-colors font-medium">
              Siga a Agência Setup no Instagram
            </span>
            <ExternalLink size={12} className="text-txt-muted opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
