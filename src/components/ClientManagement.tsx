"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  ImageIcon,
  TrendingUp,
  Sparkles,
  PenTool,
  Users,
  FolderOpen,
  Shield,
  Bell,
} from "lucide-react";

const bullets = [
  { text: "Identidade visual por cliente salva e pronta", icon: FolderOpen },
  { text: "Geração de imagem e copy direto do perfil do cliente", icon: Sparkles },
  { text: "Sem confusão de contexto entre projetos", icon: Shield },
  { text: "Em breve: contratos, cobranças e notificações integrados", icon: Bell },
];

export default function ClientManagement() {
  return (
    <section id="clientes" className="py-28 px-4">
      <div className="section-divider max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Users size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Gestão de clientes
            </span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
            Sua agência{" "}
            <span className="text-gradient-animated">
              dentro da plataforma.
            </span>
          </h2>
          <p className="text-txt-secondary text-lg mb-10 leading-relaxed">
            Cadastre seus clientes, adicione briefing, fotos, estilos e
            referências. A partir daí, gere imagens e conteúdos para eles em
            segundos — sem dar contexto pra IA toda vez.
          </p>

          <ul className="space-y-5 mb-10">
            {bullets.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                  <item.icon size={16} className="text-accent" strokeWidth={2} />
                </div>
                <span className="text-txt-secondary group-hover:text-txt-primary transition-colors duration-300">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="font-poppins font-bold text-lg sm:text-xl leading-relaxed">
            Você para de ser freelancer apagando incêndio e começa a operar
            como{" "}
            <span className="text-gradient-animated text-glow">
              uma agência de verdade.
            </span>
          </p>
        </motion.div>

        {/* Client card mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent-end/10 border border-accent/10 flex items-center justify-center"
            >
              <ImageIcon size={18} className="text-accent/60" />
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/10 flex items-center justify-center"
            >
              <TrendingUp size={16} className="text-green-400/60" />
            </motion.div>

            {/* Main card */}
            <div className="w-full max-w-sm glass-card p-7 hover:!border-accent/20 transition-all duration-500">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-end/20 flex items-center justify-center border border-accent/20">
                  <ShoppingBag size={22} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-lg">Nike Brasil</h4>
                  <p className="text-sm text-txt-muted">
                    nike@empresa.com.br
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {["E-commerce", "Lifestyle", "Produto"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-3 py-1.5 rounded-lg bg-accent/8 text-accent border border-accent/15 font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info rows */}
              <div className="space-y-3 mb-7 text-sm">
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-txt-muted" />
                    <span className="text-txt-muted">Faturamento</span>
                  </div>
                  <span className="text-green-400 font-bold">
                    R$ 12.000,00
                  </span>
                </div>
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={14} className="text-txt-muted" />
                    <span className="text-txt-muted">Imagens geradas</span>
                  </div>
                  <span className="text-white font-bold">247</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-primary py-3 text-[11px] tracking-widest flex items-center justify-center gap-2">
                  <Sparkles size={14} />
                  Gerar Imagem
                </button>
                <button className="btn-secondary py-3 text-[11px] tracking-widest flex items-center justify-center gap-2 !text-accent !border-accent/20">
                  <PenTool size={14} />
                  Criar Copy
                </button>
              </div>
            </div>

            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-accent/5 blur-[60px] rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
