import Image from "next/image";
import { funcoes, type Funcao } from "@/data/funcoes";

interface FuncaoShowcaseProps {
  slug: string;
}

function FuncaoCard({ funcao, ctaUtmCampaign }: { funcao: Funcao; ctaUtmCampaign: string }) {
  const utmUrl = `https://calangostudio.com.br/?utm_source=site&utm_medium=seo&utm_campaign=${encodeURIComponent(ctaUtmCampaign)}`;

  return (
    <div className="bg-bg-tertiary border border-white/[0.06] rounded-2xl overflow-hidden hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[45%] shrink-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={funcao.imageSrc}
              alt={`Resultado da função ${funcao.name} no Calango Studio`}
              fill
              className="object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">
            Disponível no Calango Studio
          </span>

          <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-3">
            {funcao.name}
          </h3>

          <p className="text-txt-secondary leading-relaxed mb-5">
            {funcao.description}
          </p>

          <ul className="space-y-2 mb-6">
            {funcao.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent mt-0.5 shrink-0">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            href={utmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors w-fit"
          >
            Experimentar agora
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FuncaoShowcase({ slug }: FuncaoShowcaseProps) {
  const slugs = slug.includes(",") ? slug.split(",").map((s) => s.trim()) : [slug];
  const matched = slugs
    .map((s) => funcoes.find((f) => f.slug === s))
    .filter((f): f is Funcao => !!f);

  if (matched.length === 0) return null;

  if (matched.length === 1) {
    return (
      <section className="mt-12">
        <FuncaoCard funcao={matched[0]} ctaUtmCampaign={matched[0].slug} />
      </section>
    );
  }

  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-xl font-poppins font-bold text-white">
        Conheça as ferramentas do Calango Studio
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {matched.map((funcao) => (
          <FuncaoCard key={funcao.slug} funcao={funcao} ctaUtmCampaign={funcao.slug} />
        ))}
      </div>
    </section>
  );
}
