import Link from "next/link";

interface SeoLayoutProps {
  children: React.ReactNode;
  schema: object;
}

export default function SeoLayout({ children, schema }: SeoLayoutProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="border-b border-white/[0.06] py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-poppins font-bold text-base text-white tracking-tight"
          >
            Calango <span className="text-accent">Studio</span>
          </Link>
          <Link
            href="/#pricing"
            className="bg-accent text-black font-semibold text-sm px-5 py-2 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Assinar agora
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">{children}</main>

      <footer className="border-t border-white/[0.06] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-txt-muted justify-center">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/#pricing"
              className="hover:text-white transition-colors"
            >
              Planos
            </Link>
            <Link
              href="/ferramentas/ia-para-designers"
              className="hover:text-white transition-colors"
            >
              IA para Designers
            </Link>
            <Link
              href="/guias/como-gerar-imagens-com-ia"
              className="hover:text-white transition-colors"
            >
              Como Gerar Imagens com IA
            </Link>
            <Link
              href="/comparativo/calango-vs-canva"
              className="hover:text-white transition-colors"
            >
              Calango vs Canva
            </Link>
          </nav>
          <p className="text-xs text-txt-muted/60 text-center mt-6">
            &copy; 2026 Calango Studio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
