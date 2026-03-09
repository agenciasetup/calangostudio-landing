"use client";

import { motion } from "framer-motion";

const bullets = [
  "Identidade visual por cliente salva e pronta",
  "Geração de imagem e copy direto do perfil do cliente",
  "Sem confusão de contexto entre projetos",
  "Em breve: contratos, cobranças e notificações integrados",
];

export default function ClientManagement() {
  return (
    <section id="clientes" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            Sua agência{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              dentro da plataforma.
            </span>
          </h2>
          <p className="text-[#cccccc] text-lg mb-8 leading-relaxed">
            Cadastre seus clientes, adicione briefing, fotos, estilos e
            referências. A partir daí, gere imagens e conteúdos para eles em
            segundos — sem dar contexto pra IA toda vez.
          </p>

          <ul className="space-y-4 mb-8">
            {bullets.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-accent mt-0.5">✅</span>
                <span className="text-[#cccccc]">{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="font-syne font-bold text-lg sm:text-xl">
            Você para de ser freelancer apagando incêndio e começa a operar
            como{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              uma agência de verdade.
            </span>
          </p>
        </motion.div>

        {/* Client card mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-sm p-6 rounded-2xl bg-bg-secondary border border-accent/20 backdrop-blur-sm shadow-[0_0_40px_rgba(255,170,0,0.05)]">
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-accent-end/30 flex items-center justify-center text-2xl border-2 border-accent/30">
                👟
              </div>
              <div>
                <h4 className="font-syne font-bold text-lg">Nike Brasil</h4>
                <p className="text-sm text-txt-secondary">
                  nike@empresa.com.br
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["E-commerce", "Lifestyle", "Produto"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Info rows */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between p-3 rounded-lg bg-bg-primary border border-glass">
                <span className="text-txt-secondary">Faturamento</span>
                <span className="text-green-400 font-semibold">
                  R$ 12.000,00
                </span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-bg-primary border border-glass">
                <span className="text-txt-secondary">Imagens geradas</span>
                <span className="text-white font-semibold">247</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-sm font-semibold text-center">
                Gerar Imagem
              </div>
              <div className="p-3 rounded-lg border border-accent/30 text-accent text-sm font-semibold text-center">
                Criar Copy
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
