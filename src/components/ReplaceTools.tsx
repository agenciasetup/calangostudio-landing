"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle,
  ArrowRight,
  FileText,
  Image,
  FolderOpen,
  Users,
  LayoutDashboard,
} from "lucide-react";

const scattered = [
  { name: "IA de texto", icon: FileText },
  { name: "IA de imagem", icon: Image },
  { name: "Banco de referências", icon: FolderOpen },
  { name: "Organização de cliente", icon: Users },
  { name: "Ferramenta de CRM", icon: LayoutDashboard },
];

export default function ReplaceTools() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Pare de montar{" "}
            <span className="text-gradient-animated">gambiarra</span>{" "}
            para trabalhar.
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Hoje muita gente paga separado por IA de texto, IA de imagem, banco de referências, ferramenta de organização e sistema para clientes. No Calango Studio, isso deixa de ficar espalhado.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center max-w-4xl mx-auto">
          {/* Before - scattered tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="glass-card p-5 md:p-7 !border-white/[0.06] hover:!border-red-500/15 transition-all duration-500"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500/30 to-red-900/20 rounded-t-3xl" />

            <div className="flex items-center gap-2 mb-5 md:mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XCircle size={16} className="text-red-400" />
              </div>
              <p className="font-poppins font-bold text-sm md:text-base text-zinc-300">Ferramentas soltas</p>
            </div>

            <div className="space-y-2.5 md:space-y-3">
              {scattered.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-red-500/[0.03] border border-red-500/10">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-red-500/[0.06] border border-red-500/10 flex items-center justify-center flex-shrink-0">
                    <tool.icon size={13} className="text-red-400/60" />
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 line-through decoration-red-500/30">{tool.name}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] md:text-xs text-red-400/70 font-semibold mt-4 text-center">
              5+ assinaturas separadas
            </p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
            className="hidden md:flex w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-end items-center justify-center shadow-glow mx-auto"
          >
            <ArrowRight size={22} className="text-black" strokeWidth={2.5} />
          </motion.div>

          {/* After - Calango */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="glass-card p-5 md:p-7 !border-accent/20"
            style={{
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,170,0,0.06)",
            }}
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-accent via-accent-end to-accent rounded-t-3xl animate-gradient-shift" style={{ backgroundSize: "200% 100%" }} />

            <div className="flex items-center gap-2 mb-5 md:mb-6">
              <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shadow-[0_0_20px_rgba(255,170,0,0.15)]">
                <CheckCircle size={16} className="text-accent" />
              </div>
              <p className="font-poppins font-bold text-sm md:text-base text-white">Calango Studio</p>
            </div>

            <div className="space-y-2.5 md:space-y-3">
              {[
                "Prospecte e feche clientes",
                "Organize briefing e contrato",
                "Gere conteúdo e imagens",
                "Analise perfis",
                "Acompanhe tudo em um lugar",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-accent/[0.04] border border-accent/15">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-accent" />
                  </div>
                  <span className="text-xs md:text-sm text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] md:text-xs text-accent font-bold mt-4 text-center">
              Uma assinatura. Tudo integrado.
            </p>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-center mt-10 md:mt-14 max-w-2xl mx-auto leading-snug"
        >
          Menos assinatura solta. Mais trabalho acontecendo{" "}
          <span className="text-gradient-animated text-glow">dentro do seu Studio.</span>
        </motion.p>
      </div>
    </section>
  );
}
