"use client";

import { Sparkles, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-end flex items-center justify-center">
              <Sparkles size={13} className="text-black" strokeWidth={2.5} />
            </div>
            <span className="font-poppins font-bold text-base text-white tracking-tight">
              Calango{" "}
              <span className="text-gradient-animated">Studio</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-txt-muted">
            <a
              href="https://instagram.com/calango.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <Instagram size={14} className="text-txt-muted group-hover:text-accent transition-colors" />
              @calango.studio
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#planos" className="hover:text-white transition-colors duration-300">
              Planos
            </a>
            <a href="#faq" className="hover:text-white transition-colors duration-300">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.04] text-center space-y-2">
          <p className="text-sm text-txt-muted">
            &copy; 2026 Calango Studio. Todos os direitos reservados.
          </p>
          <p className="text-xs text-txt-muted/60">
            Feito para designers que querem ganhar mais tempo e mais dinheiro.
          </p>
        </div>
      </div>
    </footer>
  );
}
