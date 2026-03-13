"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  UserCheck,
  TrendingUp,
  DollarSign,
  Target,
  Rocket,
  Trophy,
  Zap,
} from "lucide-react";

const statsCards = [
  {
    icon: Users,
    label: "PROSPECTS",
    value: "3 / 5",
    sub: "Faltam 2",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    label: "MENSAGENS",
    value: "7",
    sub: "",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: UserCheck,
    label: "ATIVOS",
    value: "2",
    sub: "Excluindo fechados",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: TrendingUp,
    label: "TAXA FECHAMENTO",
    value: "67%",
    sub: "Fechou / abordados",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
];

const funnelStages = [
  { label: "Prospectar", color: "bg-blue-500", count: 1, width: "w-[15%]" },
  { label: "Abordar", color: "bg-purple-500", count: 0, width: "w-[5%]" },
  { label: "Não Respondeu", color: "bg-orange-500", count: 0, width: "w-[5%]" },
  { label: "Oferta Feita", color: "bg-amber-500", count: 1, width: "w-[40%]" },
  { label: "Pensando", color: "bg-yellow-500", count: 0, width: "w-[5%]" },
  { label: "Fechou", color: "bg-emerald-500", count: 2, width: "w-[60%]" },
];

const victories = [
  { name: "João Paz", date: "18/03/2026", value: "R$ 90", color: "bg-amber-500/20 text-amber-400" },
  { name: "Andre Santos", company: "Barbearia Santos", date: "15/03/2026", value: "R$ 1.000", color: "bg-blue-500/20 text-blue-400" },
];

const achievements = [
  { icon: Target, label: "Primeiro Alvo", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Trophy, label: "Primeiro Fechamento", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: MessageCircle, label: "Contato Feito", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: DollarSign, label: "Primeiro R$", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Rocket, label: "R$ 1.000", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function MockDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full rounded-2xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
    >
      {/* Banner */}
      <div className="px-5 py-3 border-b border-white/[0.06] bg-emerald-500/[0.04]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Zap size={14} className="text-emerald-400" />
          </div>
          <span className="text-sm text-emerald-300/80">
            Que dia! Você fechou um negócio hoje. Mantenha o ritmo.
          </span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* HOJE cards */}
        <div>
          <span className="text-xs font-bold text-white uppercase tracking-wider mb-3 block">
            HOJE
          </span>
          <div className="grid grid-cols-4 gap-3">
            {statsCards.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-6 h-6 rounded-lg ${s.iconBg} flex items-center justify-center`}
                  >
                    <s.icon size={12} className={s.iconColor} />
                  </div>
                  <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <span className="font-poppins font-black text-xl text-white block">
                  {s.value}
                </span>
                {s.sub && (
                  <span className="text-[10px] text-txt-muted">{s.sub}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <DollarSign size={12} className="text-emerald-400" />
              </div>
              <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                RECEITA FECHADA
              </span>
            </div>
            <span className="font-poppins font-black text-2xl text-white">
              R$ 1.090
            </span>
            <span className="text-[10px] text-txt-muted block">
              2 contratos
            </span>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <MessageCircle size={12} className="text-amber-400" />
              </div>
              <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                EM NEGOCIAÇÃO
              </span>
            </div>
            <span className="font-poppins font-black text-2xl text-white">
              R$ 500
            </span>
            <span className="text-[10px] text-txt-muted block">
              1 prospect · Potencial em aberto
            </span>
          </div>
        </div>

        {/* Funnel + victories */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              FUNIL DE VENDAS
            </span>
            <div className="space-y-2">
              {funnelStages.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-semibold w-24 ${
                      s.label === "Fechou"
                        ? "text-emerald-400"
                        : s.label === "Oferta Feita"
                        ? "text-amber-400"
                        : "text-txt-muted"
                    }`}
                  >
                    {s.label}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: s.width.replace("w-[", "").replace("]", "") }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.8 }}
                      className={`h-full rounded-full ${s.color}`}
                    />
                  </div>
                  <span className="text-xs font-bold text-white w-5 text-right">
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider flex items-center gap-2 mb-3">
              <Trophy size={12} className="text-amber-400" />
              MURAL DE VITÓRIAS
            </span>
            <div className="space-y-3">
              {victories.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${v.color} flex items-center justify-center text-xs font-bold`}
                    >
                      {v.name[0]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {v.name}
                      </span>
                      <span className="text-[10px] text-txt-muted">
                        {v.date}
                      </span>
                    </div>
                  </div>
                  <span className="font-poppins font-bold text-sm text-accent">
                    {v.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-4 pt-3 border-t border-white/[0.04]">
              <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider flex items-center gap-2 mb-2">
                <Trophy size={10} className="text-amber-400" />
                Conquistas 5/16
              </span>
              <div className="flex gap-2">
                {achievements.map((a) => (
                  <div
                    key={a.label}
                    className={`w-9 h-9 rounded-lg ${a.bg} flex items-center justify-center`}
                    title={a.label}
                  >
                    <a.icon size={14} className={a.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
