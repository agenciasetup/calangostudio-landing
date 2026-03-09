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

        {/* SEO Internal Links */}
        <nav aria-label="Páginas do Calango Studio" className="mt-10 pt-8 border-t border-white/[0.04]">
          <h3 className="text-sm font-semibold text-txt-secondary mb-3 text-center">
            Explore o Calango Studio
          </h3>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-txt-muted">
            <li><a href="/ferramentas/ia-para-designers" className="hover:text-white transition-colors">IA para Designers</a></li>
            <li><a href="/ferramentas/ia-para-social-media" className="hover:text-white transition-colors">IA para Social Media</a></li>
            <li><a href="/guias/como-gerar-imagens-com-ia" className="hover:text-white transition-colors">Como Gerar Imagens com IA</a></li>
            <li><a href="/guias/como-criar-conteudo-com-ia" className="hover:text-white transition-colors">Como Criar Conteúdo com IA</a></li>
            <li><a href="/guias/estilos-de-imagem-com-ia" className="hover:text-white transition-colors">Estilos de Imagem com IA</a></li>
            <li><a href="/comparativo/calango-vs-canva" className="hover:text-white transition-colors">Calango vs Canva</a></li>
            <li><a href="/comparativo/calango-vs-midjourney" className="hover:text-white transition-colors">Calango vs Midjourney</a></li>
            <li><a href="/sobre/agencia-setup" className="hover:text-white transition-colors">Agência Setup</a></li>
            <li><a href="/sobre/nano-banana" className="hover:text-white transition-colors">Nano Banana</a></li>
            <li><a href="/criativos/como-criar-criativos-com-ia" className="hover:text-white transition-colors">Como Criar Criativos com IA</a></li>
            <li><a href="/criativos/criativos-para-facebook-ads" className="hover:text-white transition-colors">Criativos para Facebook Ads</a></li>
            <li><a href="/criativos/o-que-e-creative-fatigue" className="hover:text-white transition-colors">O que é Creative Fatigue</a></li>
            <li><a href="/social-media/como-fazer-carrossel-instagram-ia" className="hover:text-white transition-colors">Carrossel para Instagram com IA</a></li>
            <li><a href="/social-media/como-criar-copy-para-post" className="hover:text-white transition-colors">Copy para Post com IA</a></li>
            <li><a href="/freelancer/como-atender-mais-clientes" className="hover:text-white transition-colors">Como Atender Mais Clientes</a></li>
            <li><a href="/freelancer/como-sair-do-modo-freelancer" className="hover:text-white transition-colors">Sair do Modo Freelancer</a></li>
            <li><a href="/foto-produto/como-fazer-foto-produto-sem-estudio" className="hover:text-white transition-colors">Foto de Produto sem Estúdio</a></li>
            <li><a href="/foto-produto/como-colocar-produto-em-cenario-com-ia" className="hover:text-white transition-colors">Produto em Cenário com IA</a></li>
          </ul>
        </nav>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center space-y-2">
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
