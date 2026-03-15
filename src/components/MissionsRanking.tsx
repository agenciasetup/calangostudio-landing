"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Target,
  Crown,
  User,
  Star,
  MessageCircle,
} from "lucide-react";

const ranking = [
  { position: 1, name: "Lucas Martins", score: "342 pts", avatar: "LM", highlight: true },
  { position: 2, name: "Ana Carolina", score: "298 pts", avatar: "AC", highlight: false },
  { position: 3, name: "Pedro Santos", score: "267 pts", avatar: "PS", highlight: false },
  { position: 4, name: "Mariana Costa", score: "231 pts", avatar: "MC", highlight: false },
  { position: 5, name: "Gabriel Lima", score: "198 pts", avatar: "GL", highlight: false },
];

export default function MissionsRanking() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="section-divider max-w-5xl mx-auto mb-14 md:mb-20" />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] hidden lg:block opacity-[0.05]"
      >
        <Trophy size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-28 right-[6%] hidden lg:block opacity-[0.04]"
      >
        <Target size={50} />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge-pill mb-6 inline-flex">
            <Trophy size={12} />
            Gamificação
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Nós destacamos quem{" "}
            <span className="text-gradient-animated">prospecta mais!</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            No Calango Studio, quanto mais você prospecta, quanto mais mensagens manda, mais visibilidade você vai ter.
            Nós destacamos o usuário mais empenhado e deixamos seu perfil em ênfase, para receber mais visitas e seguidores.
          </p>
        </motion.div>

        {/* Ranking mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
                calango.studio/ranking
              </div>
            </div>

            <div className="bg-bg-primary p-4 md:p-7">
              {/* Header */}
              <div className="flex items-center gap-2 mb-5 md:mb-6 pb-3 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Trophy size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Ranking semanal</p>
                  <p className="text-xs md:text-sm font-bold text-white">Top prospecções</p>
                </div>
              </div>

              {/* Ranking list */}
              <div className="space-y-2.5 md:space-y-3">
                {ranking.map((user, i) => (
                  <motion.div
                    key={user.position}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all duration-300 ${
                      user.highlight
                        ? "bg-accent/[0.08] border border-accent/25 shadow-[0_0_30px_rgba(255,170,0,0.06)]"
                        : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Position */}
                    <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      user.position === 1
                        ? "bg-accent/15 border border-accent/30"
                        : user.position <= 3
                        ? "bg-white/[0.06] border border-white/[0.10]"
                        : "bg-white/[0.03] border border-white/[0.06]"
                    }`}>
                      {user.position === 1 ? (
                        <Crown size={14} className="text-accent" />
                      ) : (
                        <span className={`text-xs font-black ${user.position <= 3 ? "text-zinc-300" : "text-zinc-500"}`}>#{user.position}</span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-[10px] md:text-xs font-black flex-shrink-0 ${
                      user.highlight
                        ? "bg-gradient-to-br from-accent/25 to-accent-end/25 text-accent border border-accent/25"
                        : "bg-white/[0.06] text-zinc-400 border border-white/[0.08]"
                    }`}>
                      {user.avatar}
                    </div>

                    {/* Name & Score */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate ${user.highlight ? "text-white" : "text-zinc-300"}`}>
                        {user.name}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle size={9} className={user.highlight ? "text-accent/60" : "text-zinc-600"} />
                        <p className={`text-[10px] md:text-xs ${user.highlight ? "text-accent/70" : "text-zinc-500"} font-semibold`}>
                          {user.score}
                        </p>
                      </div>
                    </div>

                    {/* Badges */}
                    {user.highlight && (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20">
                        <Star size={10} className="text-accent fill-accent" />
                        <span className="text-[8px] md:text-[9px] text-accent font-bold uppercase tracking-wider">Destaque</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Profile CTA */}
              <div className="mt-4 md:mt-5 p-3 md:p-4 rounded-xl bg-accent/[0.04] border border-accent/10 text-center">
                <div className="flex items-center justify-center gap-2">
                  <User size={12} className="text-accent/60" />
                  <span className="text-xs text-zinc-400">
                    Seu perfil fica clicável. Mais execução = mais visibilidade e seguidores.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 w-2/3 h-16 md:h-24 bg-accent/8 blur-[40px] md:blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
