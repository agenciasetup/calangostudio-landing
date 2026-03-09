"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Search, Wand2, Copy, Check } from "lucide-react";
import UsageLimitPopup from "./UsageLimitPopup";

/* ── Fingerprint: canvas + screen + timezone + webgl ── */
function generateFingerprint(): string {
  const parts: string[] = [];

  // Canvas fingerprint
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 50;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.textBaseline = "top";
      ctx.font = "14px Arial";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.fillText("Calango.fp", 2, 15);
      ctx.fillStyle = "rgba(102,204,0,0.7)";
      ctx.fillText("Calango.fp", 4, 17);
      parts.push(canvas.toDataURL());
    }
  } catch {
    /* ignore */
  }

  // Screen
  parts.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);

  // Timezone
  parts.push(Intl.DateTimeFormat().resolvedOptions().timeZone);

  // Navigator
  parts.push(navigator.language);
  parts.push(String(navigator.hardwareConcurrency || 0));
  parts.push(String(navigator.maxTouchPoints || 0));

  // WebGL renderer
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    if (gl) {
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      if (ext) {
        parts.push(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || "");
      }
    }
  } catch {
    /* ignore */
  }

  // Hash
  let hash = 0;
  const str = parts.join("|");
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash + chr) | 0;
  }
  return Math.abs(hash).toString(36);
}

export default function PromptExtractor() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const fingerprintRef = useRef<string>("");

  // Generate fingerprint on mount
  useEffect(() => {
    fingerprintRef.current = generateFingerprint();
  }, []);

  const canExtract = useMemo(
    () => !!image && !loading && !blocked,
    [image, loading, blocked]
  );

  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) setImage(e.target.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) handleFile(file);
    },
    [handleFile]
  );

  const handleExtract = async () => {
    if (!image || loading || blocked) return;
    setLoading(true);
    setError("");
    setResult("");
    setProgress(8);

    const timer = window.setInterval(() => {
      setProgress((v) =>
        v >= 90 ? v : v + Math.max(2, Math.round((95 - v) / 8))
      );
    }, 300);

    try {
      const res = await fetch("/api/prompt-extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-fingerprint": fingerprintRef.current,
        },
        body: JSON.stringify({ image }),
      });

      const data = await res.json();

      // Rate limited
      if (res.status === 429) {
        setBlocked(true);
        setShowLimitPopup(true);
        return;
      }

      if (!res.ok) throw new Error(data.error || "Falha ao extrair prompt.");

      setProgress(100);

      // Remove provider from displayed JSON (internal only)
      const displayData = {
        universal_instruction: data.universal_instruction,
        prompt: data.prompt,
      };
      setResult(JSON.stringify(displayData, null, 2));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Falha ao extrair prompt.");
    } finally {
      window.clearInterval(timer);
      setLoading(false);
      setTimeout(() => setProgress(0), 800);
    }
  };

  const copyPrompt = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="glass-card overflow-hidden !rounded-[20px] md:!rounded-[28px]">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-3 md:mx-6 h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] md:text-xs text-txt-muted font-medium tracking-wide">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 mr-1.5 md:mr-2 rounded-full bg-green-400/60" />
              prompt-maker
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-7 grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: Upload + Extract */}
            <div className="space-y-4">
              {/* Dropzone */}
              <div
                onClick={() => !blocked && fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                role="button"
                tabIndex={0}
                className={`relative w-full aspect-[4/3] rounded-2xl border-2 border-dashed transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden ${
                  image
                    ? "border-accent/30 bg-black/20"
                    : "border-white/10 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04]"
                } ${loading || blocked ? "opacity-50 pointer-events-none" : ""}`}
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Referência"
                      className="w-full h-full object-contain"
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-3 p-2 bg-black/70 text-white rounded-full hover:bg-red-500 transition-colors z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setImage(null);
                        setResult("");
                        setError("");
                      }}
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-txt-muted">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Upload size={24} className="text-txt-muted" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-txt-secondary">
                        Upload referência
                      </p>
                      <p className="text-[10px] text-txt-muted mt-1">
                        Arraste ou clique para selecionar
                      </p>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFile(file);
                    e.currentTarget.value = "";
                  }}
                />
              </div>

              {/* Extract button */}
              <button
                type="button"
                onClick={
                  blocked ? () => setShowLimitPopup(true) : handleExtract
                }
                disabled={!canExtract && !blocked}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-black text-sm tracking-[0.14em] uppercase transition-all duration-300 ${
                  blocked
                    ? "bg-red-500/20 text-red-300 border border-red-500/20 cursor-pointer"
                    : canExtract
                    ? "bg-gradient-to-r from-accent to-accent-end text-black shadow-[0_0_24px_rgba(249,115,22,0.22)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
                    : "bg-white/[0.06] text-txt-muted border border-white/[0.06] cursor-not-allowed"
                }`}
              >
                {blocked ? (
                  <>Limite atingido — Ver oferta</>
                ) : loading ? (
                  <>
                    <Wand2 className="animate-spin" size={16} />
                    Extraindo...
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    Extrair prompt
                  </>
                )}
              </button>

              {/* Progress bar */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="w-full"
                  >
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-end"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error */}
              {error && (
                <p className="text-xs text-red-400 font-medium">{error}</p>
              )}
            </div>

            {/* Right: Output */}
            <div className="rounded-2xl border border-white/10 bg-black/30 min-h-[280px] md:min-h-[340px] flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-txt-muted font-black">
                  Prompt JSON
                </span>
                <button
                  type="button"
                  onClick={copyPrompt}
                  disabled={!result}
                  className={`p-2 rounded-lg border border-white/10 transition-colors ${
                    result
                      ? "hover:bg-white/10 text-txt-secondary"
                      : "opacity-30 cursor-not-allowed text-txt-muted"
                  }`}
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
              <pre className="text-xs text-zinc-200 p-4 overflow-auto whitespace-pre-wrap break-words flex-1 font-mono">
                {result ||
                  '{\n  "universal_instruction": "...",\n  "prompt": "..."\n}'}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>

      <UsageLimitPopup
        open={showLimitPopup}
        onClose={() => setShowLimitPopup(false)}
      />
    </>
  );
}
