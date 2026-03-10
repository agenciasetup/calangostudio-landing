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
    text: "Surpreendeu em absolutamente tudo. Layout, qualidade e agilidade, tudo com base no nosso serviço. Acelerou meu trampo em MUITOS %.",
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
    <section className="py-16 md:py-20 px-4">
      <div className="section-divider max-w-5xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
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

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.06, 0.2), duration: 0.4 }}
              className="group glass-card p-5 md:p-7 hover:!border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative">
                <Quote size={20} className="text-accent/20 mb-3 md:mb-4" />

                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
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
                <p className="text-txt-secondary leading-relaxed text-sm md:text-[15px]">
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
