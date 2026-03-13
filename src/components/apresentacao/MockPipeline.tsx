"use client";

import { motion } from "framer-motion";
import { Plus, Phone, Clock, Zap } from "lucide-react";

const stages = [
  { label: "PROSPECTAR", color: "bg-blue-500", dotColor: "bg-blue-400", count: 0, cards: [] },
  { label: "ABORDAR", color: "bg-purple-500", dotColor: "bg-purple-400", count: 0, cards: [] },
  { label: "NÃO RESPONDEU", color: "bg-orange-500", dotColor: "bg-orange-400", count: 0, cards: [] },
  {
    label: "OFERTA FEITA",
    color: "bg-amber-500",
    dotColor: "bg-amber-400",
    count: 1,
    cards: [
      {
        name: "Paula",
        substatus: "Aguardar decisão",
        subColor: "text-blue-400",
        hasPhone: true,
        days: "0d",
        count: 18,
      },
    ],
  },
  { label: "PENSANDO", color: "bg-yellow-500", dotColor: "bg-yellow-400", count: 0, cards: [] },
  { label: "NÃO QUIS", color: "bg-red-500", dotColor: "bg-red-400", count: 0, cards: [] },
  {
    label: "FECHOU",
    color: "bg-emerald-500",
    dotColor: "bg-emerald-400",
    count: 2,
    cards: [
      {
        name: "Andre Santos",
        substatus: "Barbearia Santos",
        subColor: "text-txt-muted",
        hasPhone: true,
        days: "3d",
        count: 3,
        value: "R$ 1.000",
      },
      {
        name: "João Paz",
        substatus: "",
        subColor: "",
        hasPhone: true,
        days: "0d",
        count: 0,
        value: "R$ 90",
      },
    ],
  },
];

export default function MockPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full rounded-2xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-poppins font-bold text-base text-white">
              Pipeline
            </h3>
            <span className="text-xs text-txt-muted">3 prospects no funil</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <Zap size={12} className="text-txt-muted" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent/30 text-accent text-xs font-bold">
              <Plus size={12} />
              Novo Prospect
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline columns */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-3 min-w-[800px]">
          {stages.map((stage, si) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + si * 0.06 }}
              className="flex-1 min-w-[140px]"
            >
              {/* Column header */}
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stage.dotColor}`} />
                  <span className="text-[10px] font-bold text-txt-secondary uppercase tracking-wider">
                    {stage.label}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    stage.count > 0
                      ? "bg-accent/10 text-accent"
                      : "bg-white/[0.04] text-txt-muted"
                  }`}
                >
                  {stage.count}
                </span>
              </div>

              {/* Column body */}
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] min-h-[180px] p-2 space-y-2">
                {stage.cards.length === 0 && (
                  <p className="text-[10px] text-txt-muted text-center py-8">
                    Nenhum prospect
                  </p>
                )}
                {stage.cards.map((card, ci) => (
                  <motion.div
                    key={card.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + ci * 0.1 }}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 hover:border-accent/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-2 h-2 rounded-full ${stage.dotColor}`} />
                      <span className="text-xs font-bold text-white">
                        {card.name}
                      </span>
                      <span className="text-[10px] text-txt-muted">
                        {card.count}
                      </span>
                    </div>
                    {card.substatus && (
                      <span className={`text-[10px] ${card.subColor} block mb-1`}>
                        ● {card.substatus}
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      {card.hasPhone && (
                        <Phone size={10} className="text-txt-muted" />
                      )}
                      <span className="text-[10px] text-txt-muted flex items-center gap-1">
                        <Clock size={8} />
                        {card.days}
                      </span>
                    </div>
                    {(card as { value?: string }).value && (
                      <span className="text-xs font-bold text-accent mt-1 block">
                        {(card as { value: string }).value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
