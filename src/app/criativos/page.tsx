import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Criativos com IA: guias para designers e social media | Calango Studio",
  description:
    "Tudo sobre criação de criativos com inteligência artificial. Guias práticos para produzir anúncios, UGC, variações e escalar sua produção visual.",
  openGraph: {
    title: "Criativos com IA: guias para designers e social media | Calango Studio",
    description:
      "Tudo sobre criação de criativos com inteligência artificial. Guias práticos para produzir anúncios, UGC, variações e escalar sua produção visual.",
    url: "https://www.calangostudio.com.br/criativos",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Criativos com IA",
  description:
    "Guias práticos sobre criação de criativos com inteligência artificial para designers e social media managers.",
  url: "https://www.calangostudio.com.br/criativos",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Como Criar Criativos com IA",
        url: "https://www.calangostudio.com.br/criativos/como-criar-criativos-com-ia",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Criativos para Facebook Ads com IA",
        url: "https://www.calangostudio.com.br/criativos/criativos-para-facebook-ads",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Testar Criativos sem Designer",
        url: "https://www.calangostudio.com.br/criativos/como-testar-criativos-sem-designer",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "O que é Creative Fatigue e como resolver com IA",
        url: "https://www.calangostudio.com.br/criativos/o-que-e-creative-fatigue",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Como Criar UGC para Anúncios com IA",
        url: "https://www.calangostudio.com.br/criativos/como-criar-ugc-para-anuncios",
      },
    ],
  },
};

const subpages = [
  {
    href: "/criativos/como-criar-criativos-com-ia",
    title: "Como Criar Criativos com IA",
    description:
      "Aprenda a criar criativos profissionais com IA em minutos. Do brief ao arquivo final, sem depender de múltiplas ferramentas.",
  },
  {
    href: "/criativos/criativos-para-facebook-ads",
    title: "Criativos para Facebook Ads com IA",
    description:
      "Como criar criativos para Facebook Ads e Instagram Ads com IA. Produza variações em escala e melhore sua performance.",
  },
  {
    href: "/criativos/como-testar-criativos-sem-designer",
    title: "Testar Criativos sem Designer",
    description:
      "Como produzir e testar variações de criativos para anúncios sem depender de designer. Use IA para criar e iterar.",
  },
  {
    href: "/criativos/o-que-e-creative-fatigue",
    title: "O que é Creative Fatigue",
    description:
      "Entenda o que é creative fatigue em anúncios, como identificar e como resolver produzindo novos criativos com IA.",
  },
  {
    href: "/criativos/como-criar-ugc-para-anuncios",
    title: "Como Criar UGC para Anúncios",
    description:
      "Como produzir UGC para Facebook Ads e Instagram Ads usando IA. Fotos realistas de pessoas com produtos sem contratar criador.",
  },
];

export default function CriativosHubPage() {
  return (
    <SeoLayout schema={schema} slug="criativos">
      <ClusterHero
        title="Criativos com IA"
        subtitle="Guias práticos para criar criativos profissionais usando inteligência artificial. De anúncios a UGC, tudo o que você precisa para escalar sua produção visual."
        icon="🎨"
        contentCount={5}
        contentLabel="guias"
        ctaUtmCampaign="criativos"
      />

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Explore os guias
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subpages.map((page, index) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 hover:border-accent/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="text-xs text-txt-muted font-semibold mb-2 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-poppins font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {page.description}
                  </p>
                </div>
                <span className="text-txt-muted group-hover:text-accent transition-colors mt-6 shrink-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-4">
          Sobre criativos com IA
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            A produção de criativos é uma das etapas mais repetitivas e demoradas
            no marketing digital. Designers e social media managers passam horas
            buscando referências, gerando variações e adaptando peças para
            diferentes formatos — anúncios, stories, carrosséis, reels. Com o
            avanço da inteligência artificial, esse processo mudou radicalmente.
          </p>
          <p>
            Hoje, é possível gerar imagens originais, criar copies contextualizadas
            e produzir variações de criativos em minutos. O segredo não está
            apenas na IA genérica, mas em plataformas que centralizam o contexto
            do cliente — briefing, estilo visual, tom de voz — para que cada
            geração já saia alinhada com a marca. É exatamente isso que o Calango
            Studio faz: reunir todo o workflow criativo em um único lugar, eliminando
            a alternância entre ferramentas e o retrabalho de repassar briefings.
          </p>
          <p>
            Nos guias desta seção, você vai aprender desde o básico — como criar
            seu primeiro criativo com IA — até estratégias avançadas de produção
            em escala, testes A/B automatizados e soluções para creative fatigue.
            Cada guia foi escrito para profissionais que precisam de resultados
            práticos, não teoria.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,copymaker,ugc-build" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos" />
    </SeoLayout>
  );
}
