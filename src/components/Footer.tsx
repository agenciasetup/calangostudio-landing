export default function Footer() {
  return (
    <footer className="border-t border-glass py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🦎</span>
            <span className="font-syne font-bold text-lg text-white">
              Calango{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                Studio
              </span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-txt-secondary">
            <a
              href="https://instagram.com/calango.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @calango.studio
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-glass text-center space-y-2">
          <p className="text-sm text-txt-secondary">
            © 2026 Calango Studio. Todos os direitos reservados.
          </p>
          <p className="text-sm text-txt-secondary">
            Feito para designers que querem ganhar mais tempo e mais dinheiro.
          </p>
        </div>
      </div>
    </footer>
  );
}
