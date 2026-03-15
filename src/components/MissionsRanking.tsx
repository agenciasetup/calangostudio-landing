"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Target,
  Bell,
  MessageCircle,
  DollarSign,
  FileText,
  Star,
  Crown,
  User,
} from "lucide-react";

const missions = [
  { text: "Prospectar 5 empresas", icon: Target, done: true },
  { text: "Responder 3 mensagens", icon: MessageCircle, done: true },
  { text: "Cobrar pagamento atrasado", icon: DollarSign, done: false },
  { text: "Produzir 2 posts", icon: FileText, done: false },
];

const ranking = [
  { position: 1, name: "Lucas Martins", score: "342 pts", avatar: "LM", highlight: true },
  { position: 2, name: "Ana Carolina", score: "298 pts", avatar: "AC", highlight: false },
  { position: 3, name: "Pedro Santos", score: "267 pts", avatar: "PS", highlight: false },
];

export default function MissionsRanking() {
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
            O Calango{" "}
            <span className="text-gradient-animated">não deixa você esfriar.</span>
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            O Studio te lembra do que precisa acontecer: quem prospectar, quem responder, quem cobrar, o que produzir. E quanto mais você executa, mais destaque ganha dentro da plataforma.
          </p>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px] !shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
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
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                {/* Missions panel */}
                <div className="rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-3 md:p-5">
                  <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-white/[0.06]">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Target size={12} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Missões do dia</p>
                      <p className="text-xs md:text-sm font-bold text-white">2 de 4 concluídas</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-2.5">
                    {missions.map((mission, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2.5 p-2 md:p-2.5 rounded-lg ${
                          mission.done
                            ? "bg-green-500/[0.06] border border-green-500/15"
                            : "bg-white/[0.02] border border-white/[0.06]"
                        }`}
                      >
                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                          mission.done
                            ? "bg-green-500/15 border border-green-500/25"
                            : "bg-white/[0.04] border border-white/[0.08]"
                        }`}>
                          {mission.done ? (
                            <div className="w-2 h-2 rounded-sm bg-green-400" />
                          ) : (
                            <div className="w-2 h-2 rounded-sm bg-white/10" />
                          )}
                        </div>
                        <mission.icon size={12} className={mission.done ? "text-green-400" : "text-zinc-500"} />
                        <span className={`text-[10px] md:text-xs ${mission.done ? "text-green-400 line-through" : "text-zinc-300"}`}>
                          {mission.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Reminders */}
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 rounded-lg bg-amber-500/[0.06] border border-amber-500/15">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Bell size={10} className="text-amber-400" />
                      <span className="text-[8px] md:text-[9px] text-amber-400 font-bold uppercase tracking-wider">Lembrete</span>
                    </div>
                    <p className="text-[9px] md:text-[10px] text-zinc-400">Studio Bella não respondeu há 3 dias. Envie um follow-up.</p>
                  </div>
                </div>

                {/* Ranking panel */}
                <div className="rounded-xl md:rounded-2xl bg-black/40 border border-white/[0.08] p-3 md:p-5">
                  <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-white/[0.06]">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Trophy size={12} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Ranking</p>
                      <p className="text-xs md:text-sm font-bold text-white">Top prospecções</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-2.5">
                    {ranking.map((user) => (
                      <div
                        key={user.position}
                        className={`flex items-center gap-2.5 md:gap-3 p-2.5 md:p-3 rounded-xl ${
                          user.highlight
                            ? "bg-accent/[0.06] border border-accent/20 shadow-[0_0_20px_rgba(255,170,0,0.05)]"
                            : "bg-white/[0.02] border border-white/[0.06]"
                        }`}
                      >
                        {/* Position */}
                        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          user.position === 1
                            ? "bg-accent/15 border border-accent/30"
                            : "bg-white/[0.04] border border-white/[0.08]"
                        }`}>
                          {user.position === 1 ? (
                            <Crown size={12} className="text-accent" />
                          ) : (
                            <span className="text-[10px] font-black text-zinc-500">#{user.position}</span>
                          )}
                        </div>

                        {/* Avatar */}
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-[9px] md:text-[10px] font-black flex-shrink-0 ${
                          user.highlight
                            ? "bg-gradient-to-br from-accent/20 to-accent-end/20 text-accent border border-accent/20"
                            : "bg-white/[0.06] text-zinc-400 border border-white/[0.08]"
                        }`}>
                          {user.avatar}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className={`text-[10px] md:text-xs font-bold truncate ${user.highlight ? "text-white" : "text-zinc-300"}`}>
                            {user.name}
                          </p>
                          <p className={`text-[8px] md:text-[9px] ${user.highlight ? "text-accent/70" : "text-zinc-500"} font-semibold`}>
                            {user.score}
                          </p>
                        </div>

                        {user.highlight && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                            <Star size={8} className="text-accent fill-accent" />
                            <span className="text-[7px] md:text-[8px] text-accent font-bold uppercase tracking-wider">Destaque</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Profile visibility */}
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 rounded-lg bg-accent/[0.04] border border-accent/10">
                    <div className="flex items-center gap-1.5">
                      <User size={10} className="text-accent/60" />
                      <span className="text-[8px] md:text-[9px] text-zinc-400">
                        Seu perfil fica clicável. Mais execução = mais visibilidade.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-poppins font-bold text-base sm:text-lg md:text-xl text-center mt-8 md:mt-12 max-w-2xl mx-auto leading-snug"
        >
          Você ganha organizando sua operação — e ainda pode ganhar{" "}
          <span className="text-gradient-animated text-glow">visibilidade fazendo isso.</span>
        </motion.p>
      </div>
    </section>
  );
}
