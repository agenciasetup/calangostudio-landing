"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9)
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type Step = "form" | "verify" | "success";

export default function FreemiumForm() {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });
  const [verifyCode, setVerifyCode] = useState("");
  const [freemiumId, setFreemiumId] = useState("");
  const [whatsappCode, setWhatsappCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trialEndsAt, setTrialEndsAt] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/freemium", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao cadastrar.");
        return;
      }

      setFreemiumId(data.freemiumId);
      setWhatsappCode(data.whatsappCode);
      setStep("verify");
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/freemium/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ freemiumId, code: verifyCode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro na verificação.");
        return;
      }

      setTrialEndsAt(data.trialEndsAt || "");
      setStep("success");
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 transition-all text-sm";

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {/* STEP 1: Formulário */}
        {step === "form" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClass}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClass}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="CPF (000.000.000-00)"
                value={formData.cpf}
                onChange={(e) =>
                  setFormData({ ...formData, cpf: formatCPF(e.target.value) })
                }
                className={inputClass}
                required
                maxLength={14}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="WhatsApp (00) 00000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: formatPhone(e.target.value) })
                }
                className={inputClass}
                required
                maxLength={15}
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-bold py-4 rounded-2xl text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Cadastrando...
                </span>
              ) : (
                "Começar Teste Grátis"
              )}
            </button>

            <p className="text-[10px] text-zinc-600 text-center leading-relaxed">
              Ao se cadastrar, você concorda com nossos{" "}
              <a href="/termos" className="text-zinc-400 underline">
                Termos de Uso
              </a>
              . Seus dados são protegidos e usados apenas para validação do teste gratuito.
            </p>
          </motion.form>
        )}

        {/* STEP 2: Verificação WhatsApp */}
        {step === "verify" && (
          <motion.div
            key="verify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Verifique seu WhatsApp
              </h3>
              <p className="text-zinc-400 text-sm">
                Enviamos um código de 6 dígitos para seu WhatsApp.
              </p>
              {/* Em dev, mostra o código para teste */}
              {whatsappCode && (
                <p className="text-green-400 text-xs mt-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2 inline-block">
                  Código de verificação: <strong>{whatsappCode}</strong>
                </p>
              )}
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Código de 6 dígitos"
                value={verifyCode}
                onChange={(e) =>
                  setVerifyCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                className={`${inputClass} text-center text-2xl tracking-[0.5em] font-mono`}
                maxLength={6}
                required
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={loading || verifyCode.length < 6}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold py-4 rounded-2xl text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verificando..." : "Verificar e Criar Conta"}
              </button>
            </form>
          </motion.div>
        )}

        {/* STEP 3: Sucesso */}
        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Conta Criada com Sucesso!
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Enviamos um link de acesso para o seu e-mail.
                <br />
                Clique nele para acessar o <strong className="text-white">Calango Studio</strong>.
              </p>
            </div>

            {trialEndsAt && (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                  Seu teste gratuito expira em
                </p>
                <p className="text-green-400 font-bold text-lg font-display">
                  {new Date(trialEndsAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <a
                href="https://calango.studio"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold py-4 rounded-2xl text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(34,197,94,0.3)] text-center"
              >
                Acessar Calango Studio
              </a>
              <p className="text-[10px] text-zinc-600">
                Verifique sua caixa de entrada (e spam) para o link de acesso.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
