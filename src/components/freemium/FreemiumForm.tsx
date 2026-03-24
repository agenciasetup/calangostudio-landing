"use client";

import React, { useState, useEffect } from "react";
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
  if (digits.length <= 2) return digits.length > 0 ? `(${digits}` : "";
  if (digits.length <= 6)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type Step = "form" | "verify" | "success";

const STORAGE_KEY = "freemium_registration";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trialEndsAt, setTrialEndsAt] = useState("");

  // Restaurar estado do sessionStorage (caso refresh durante verify)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.freemiumId && parsed.step === "verify") {
          setFreemiumId(parsed.freemiumId);
          setStep("verify");
        }
      }
    } catch {
      // Ignora
    }
  }, []);

  // Salvar estado no sessionStorage
  useEffect(() => {
    if (step === "verify" && freemiumId) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ freemiumId, step: "verify" })
      );
    } else if (step === "success") {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [step, freemiumId]);

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
        if (data.blocked) {
          // Limpar storage e voltar ao form para re-registro
          sessionStorage.removeItem(STORAGE_KEY);
          setTimeout(() => {
            setStep("form");
            setError("Limite de tentativas atingido. Cadastre-se novamente.");
          }, 2000);
        }
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
                minLength={3}
                maxLength={120}
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
                inputMode="numeric"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="WhatsApp (00) 00000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: formatPhone(e.target.value),
                  })
                }
                className={inputClass}
                required
                maxLength={15}
                inputMode="tel"
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
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
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
              . Seus dados são protegidos e usados apenas para validação do
              teste gratuito.
            </p>
          </motion.form>
        )}

        {/* STEP 2: Verificação por E-mail */}
        {step === "verify" && (
          <motion.div
            key="verify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Verifique seu E-mail
              </h3>
              <p className="text-zinc-400 text-sm">
                Enviamos um código de 6 dígitos para seu e-mail.
                <br />
                <span className="text-zinc-600 text-xs">
                  Verifique também a caixa de spam.
                </span>
              </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="000000"
                value={verifyCode}
                onChange={(e) =>
                  setVerifyCode(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  )
                }
                className={`${inputClass} text-center text-2xl tracking-[0.5em] font-mono`}
                maxLength={6}
                inputMode="numeric"
                autoComplete="one-time-code"
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

              <button
                type="button"
                onClick={() => {
                  sessionStorage.removeItem(STORAGE_KEY);
                  setStep("form");
                  setError("");
                  setVerifyCode("");
                }}
                className="w-full text-zinc-600 hover:text-zinc-400 text-xs font-medium py-2 transition-colors"
              >
                Voltar e corrigir dados
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
                Clique nele para acessar o{" "}
                <strong className="text-white">Calango Studio</strong>.
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
                href="https://chat.whatsapp.com/JAKwiyNyGc7Gt3ZeAVjVAA?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(37,211,102,0.35)] animate-pulse-cta"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Entrar no Grupo
              </a>
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
