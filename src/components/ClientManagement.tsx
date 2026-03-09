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
    <section id="clientes" className="py-16 md:py-20 px-4">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Users size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Gestão de clientes
            </span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-5 md:mb-6 tracking-tight">
            Sua agência{" "}
            <span className="text-gradient-animated">
              dentro da plataforma.
            </span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
            Cadastre seus clientes, adicione briefing, fotos, estilos e
            referências. A partir daí, gere imagens e conteúdos para eles em
            segundos — sem dar contexto pra IA toda vez.
          </p>

          <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            {bullets.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                  <item.icon size={15} className="text-accent" strokeWidth={2} />
                </div>
                <span className="text-sm md:text-base text-txt-secondary group-hover:text-txt-primary transition-colors duration-300">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="font-poppins font-bold text-base sm:text-lg md:text-xl leading-relaxed">
            Você para de ser freelancer apagando incêndio e começa a operar
            como{" "}
            <span className="text-gradient-animated text-glow">
              uma agência de verdade.
            </span>
          </p>
        </motion.div>

        {/* Client card mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            {/* Main card */}
            <div className="glass-card p-5 md:p-7 hover:!border-accent/20 transition-all duration-500">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6 md:mb-7">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-end/20 flex items-center justify-center border border-accent/20">
                  <ShoppingBag size={20} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-base md:text-lg">Nike Brasil</h4>
                  <p className="text-sm text-txt-muted">
                    nike@empresa.com.br
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 md:mb-7">
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
              <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-7 text-sm">
                <div className="flex justify-between items-center p-3 md:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-txt-muted" />
                    <span className="text-txt-muted">Faturamento</span>
                  </div>
                  <span className="text-green-400 font-bold">
                    R$ 12.000,00
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 md:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={14} className="text-txt-muted" />
                    <span className="text-txt-muted">Imagens geradas</span>
                  </div>
                  <span className="text-white font-bold">247</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-primary py-2.5 md:py-3 text-[10px] md:text-[11px] tracking-widest flex items-center justify-center gap-2">
                  <Sparkles size={13} />
                  Gerar Imagem
                </button>
                <button className="btn-secondary py-2.5 md:py-3 text-[10px] md:text-[11px] tracking-widest flex items-center justify-center gap-2 !text-accent !border-accent/20">
                  <PenTool size={13} />
                  Criar Copy
                </button>
              </div>
            </div>

            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-accent/5 blur-[40px] md:blur-[60px] rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
