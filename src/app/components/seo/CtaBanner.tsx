import Link from "next/link";

interface CtaBannerProps {
  message?: string;
  slug: string;
}

export default function CtaBanner({
  message = "Pronto para produzir mais rápido?",
  slug,
}: CtaBannerProps) {
  const utmUrl = `https://calangostudio.com.br/?utm_source=site&utm_medium=seo&utm_campaign=${encodeURIComponent(slug)}`;

  return (
    <section className="mt-12 bg-bg-tertiary border border-white/[0.06] rounded-2xl p-8 text-center">
      <p className="text-xl font-poppins font-bold text-white mb-6">
        {message}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={utmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Assinar agora
        </a>
        <Link
          href="/#pricing"
          className="border border-white/[0.1] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:border-white/[0.2] transition-colors"
        >
          Ver planos
        </Link>
      </div>
    </section>
  );
}
