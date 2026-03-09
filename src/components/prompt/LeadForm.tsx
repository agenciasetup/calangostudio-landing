"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Send, Check, X } from "lucide-react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = name.trim() && email.trim() && whatsapp.trim() && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar.");

      setSuccess(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erro ao enviar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-500/3 rounded-full blur-[100px] md:blur-[200px] pointer-events-none" />

      <div className="relative max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Gift size={14} className="text-emerald-400" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              Oferta exclusiva
            </span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl md:text-4xl mb-3 tracking-tight">
            Ganhe{" "}
            <span className="text-emerald-400">10% de desconto</span>{" "}
            no Calango Studio
          </h2>
          <p className="text-txt-secondary text-sm md:text-base">
            Inscreva-se e receba seu cupom exclusivo por WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass-card !rounded-[20px] md:!rounded-[24px] p-6 md:p-8">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl mb-2">
                    Inscrição confirmada!
                  </h3>
                  <p className="text-sm text-txt-muted">
                    Você receberá seu cupom de 10% em breve.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-txt-muted font-black mb-1.5 block">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-txt-muted font-black mb-1.5 block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-txt-muted font-black mb-1.5 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 font-medium flex items-center gap-1.5">
                      <X size={12} /> {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-black text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
                      canSubmit
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_0_24px_rgba(16,185,129,0.22)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
                        : "bg-white/[0.06] text-txt-muted border border-white/[0.06] cursor-not-allowed"
                    }`}
                  >
                    <Send size={15} />
                    {loading ? "Enviando..." : "Quero meu desconto"}
                  </button>

                  <p className="text-[10px] text-txt-muted text-center">
                    Seus dados estão seguros. Não enviamos spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
