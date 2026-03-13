"use client";

import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Upload,
  Clock,
} from "lucide-react";

const prospects = [
  {
    name: "Paula",
    company: "",
    status: "OFERTA FEITA",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    substatus: "Aguardar decisão",
    subColor: "text-blue-400",
    date: "hoje",
    value: "",
    initials: "P",
    initialsColor: "bg-purple-500/20 text-purple-400",
    online: true,
    count: 18,
  },
  {
    name: "Andre Santos",
    company: "Barbearia Santos",
    status: "FECHOU",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    substatus: "",
    subColor: "",
    date: "15/03/2026",
    value: "R$ 1.000",
    initials: "A",
    initialsColor: "bg-blue-500/20 text-blue-400",
    online: true,
    count: 3,
  },
  {
    name: "João Paz",
    company: "",
    status: "FECHOU",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    substatus: "",
    subColor: "",
    date: "18/03/2026",
    value: "R$ 90",
    initials: "J",
    initialsColor: "bg-amber-500/20 text-amber-400",
    online: true,
    count: 0,
  },
];

const filters = [
  { label: "Todos", active: true },
  { label: "Prospectar", active: false },
  { label: "Abordar", active: false },
  { label: "Não Respondeu", active: false },
  { label: "Oferta Feita", active: false },
  { label: "Pensando", active: false },
  { label: "Fechou", active: false },
];

export default function MockProspects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full rounded-2xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden shadow-2xl shadow-black/50"
    >
      {/* Top nav bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-black/40">
        <div className="flex items-center gap-3">
          <span className="text-xs text-txt-muted">← Voltar ao Studio</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="font-poppins font-bold text-sm text-white">
              Modo Vendas
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {["Missões", "Dashboard", "Pipeline", "Prospects", "Serviços"].map(
            (tab) => (
              <span
                key={tab}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  tab === "Prospects"
                    ? "bg-accent/10 text-accent"
                    : "text-txt-muted hover:text-white"
                }`}
              >
                {tab}
              </span>
            )
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent/30 text-accent text-xs font-bold"
        >
          <Plus size={12} />
          Novo Prospect
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-poppins font-bold text-lg text-white">
              Prospects
            </h3>
            <span className="text-xs text-txt-muted">3 prospects no total</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-bold"
            >
              <Upload size={12} />
              Importar Lista
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black text-xs font-bold"
            >
              <Plus size={12} />
              Novo Prospect
            </motion.button>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
          <Search size={14} className="text-txt-muted" />
          <span className="text-sm text-txt-muted">
            Buscar por nome, empresa ou nicho...
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-5">
          {filters.map((f) => (
            <span
              key={f.label}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                f.active
                  ? "bg-accent/10 text-accent border border-accent/20"
                  : "bg-white/[0.03] text-txt-muted border border-white/[0.04]"
              }`}
            >
              {f.label}
            </span>
          ))}
        </div>

        {/* Prospect list */}
        <div className="space-y-3">
          {prospects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="text-[10px] text-txt-muted absolute -left-5 top-1/2 -translate-y-1/2">
                    {p.count}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full ${p.initialsColor} flex items-center justify-center font-bold text-sm`}
                  >
                    {p.initials}
                  </div>
                  {p.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0a0c]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">
                      {p.name}
                    </span>
                    {p.company && (
                      <span className="text-xs text-txt-muted">
                        — {p.company}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${p.statusColor}`}
                    >
                      {p.status}
                    </span>
                    {p.substatus && (
                      <span className={`text-xs ${p.subColor}`}>
                        ● {p.substatus}
                      </span>
                    )}
                    <span className="text-xs text-txt-muted flex items-center gap-1">
                      <Clock size={10} />
                      {p.date}
                    </span>
                  </div>
                </div>
              </div>
              {p.value && (
                <span className="font-poppins font-bold text-accent text-sm">
                  {p.value}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
