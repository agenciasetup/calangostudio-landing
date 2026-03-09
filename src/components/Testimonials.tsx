"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Gabriel Castro",
    role: "Designer & Social Media",
    text: "Reuniram tudo que eu precisava e até mais em um lugar só. Meu fluxo de produção ficou 1000x mais rápido, sem contar a facilidade de usar para o resultado que entrega.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Matheus",
    role: "Social Media Manager",
    text: "Surpreendeu em absolutamente tudo — layout, qualidade e agilidade, tudo com base no nosso serviço. Acelerou meu trampo em MUITOS %.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "David",
    role: "Designer Freelancer",
    text: "Várias funcionalidades em um só lugar, tirando a necessidade de assinar várias IAs. Melhor investimento que fiz em 2026!",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Ruyana Jones",
    role: "Diretora de Arte",
    text: "Surpreendeu nos mockups e Upscale. Duas ferramentas boas demais!",
    gradient: "from-pink-500 to-rose-500",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="text-accent fill-accent" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 px-4">
      <div className="section-divider max-w-5xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <MessageSquare size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Depoimentos reais
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Quem usa,{" "}
            <span className="text-gradient-animated">
              não volta atrás.
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="group glass-card p-7 hover:!border-white/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/0 group-hover:bg-accent/5 blur-[60px] rounded-full transition-all duration-700" />

              <div className="relative">
                {/* Quote icon */}
                <Quote size={24} className="text-accent/20 mb-4" />

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-white text-sm">{t.name}</p>
                    <p className="text-[11px] text-txt-muted">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating />
                  </div>
                </div>
                <p className="text-txt-secondary leading-relaxed text-[15px]">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
