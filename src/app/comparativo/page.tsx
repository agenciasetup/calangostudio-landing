import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Comparativos: Calango Studio vs Canva, Freepik, Designi e mais | Calango Studio",
  description:
    "Compare o Calango Studio com Canva, Freepik, Designi e Midjourney. Descubra qual plataforma entrega mais para designers e social media.",
  openGraph: {
    title: "Comparativos: Calango Studio vs Canva, Freepik, Designi e mais | Calango Studio",
    description:
      "Compare o Calango Studio com Canva, Freepik, Designi e Midjourney. Descubra qual plataforma entrega mais para designers e social media.",
    url: "https://www.calangostudio.com.br/comparativo",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/comparativo",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Comparativos do Calango Studio",
  description:
    "Compare o Calango Studio com as principais ferramentas do mercado.",
  url: "https://www.calangostudio.com.br/comparativo",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Calango Studio vs Canva",
        url: "https://www.calangostudio.com.br/comparativo/calango-vs-canva",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calango Studio vs Freepik",
        url: "https://www.calangostudio.com.br/comparativo/calango-vs-freepik",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Calango Studio vs Designi",
        url: "https://www.calangostudio.com.br/comparativo/calango-vs-designi",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Calango Studio vs Midjourney",
        url: "https://www.calangostudio.com.br/comparativo/calango-vs-midjourney",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Alternativa ao Freepik",
        url: "https://www.calangostudio.com.br/comparativo/alternativa-ao-freepik",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Alternativa ao Designi",
        url: "https://www.calangostudio.com.br/comparativo/alternativa-ao-designi",
      },
    ],
  },
};

const subpages = [
  {
    href: "/comparativo/calango-vs-canva",
    title: "Calango Studio vs Canva",
    description:
      "Comparativo completo. Descubra qual plataforma entrega mais para designers e social media que atendem clientes.",
  },
  {
    href: "/comparativo/calango-vs-freepik",
    title: "Calango Studio vs Freepik",
    description:
      "Compare as duas plataformas. Por que gerar a imagem que você precisa é mais rápido do que procurar no banco.",
  },
  {
    href: "/comparativo/calango-vs-designi",
    title: "Calango Studio vs Designi",
    description:
      "Veja por que gerar imagens com IA é mais produtivo do que baixar recursos prontos de um banco.",
  },
  {
    href: "/comparativo/calango-vs-midjourney",
    title: "Calango Studio vs Midjourney",
    description:
      "Qual é mais prático para designers que atendem clientes e precisam de consistência e velocidade?",
  },
  {
    href: "/comparativo/alternativa-ao-freepik",
    title: "Alternativa ao Freepik",
    description:
      "Gere imagens originais com IA em vez de procurar no banco. Mais rápido e mais preciso.",
  },
  {
    href: "/comparativo/alternativa-ao-designi",
    title: "Alternativa ao Designi",
    description:
      "Gere imagens originais com IA em vez de adaptar templates. Mais rápido e personalizado.",
  },
];

export default function ComparativoHubPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo">
      <ClusterHero
        title="Comparativos"
        subtitle="Compare o Calango Studio com as ferramentas mais usadas por designers e social media managers. Análises detalhadas para você decidir com dados."
        icon="⚖️"
        contentCount={6}
        contentLabel="comparativos"
        ctaUtmCampaign="comparativo"
      />

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Explore os comparativos
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
          Por que comparar ferramentas?
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            O mercado de ferramentas para designers e social media managers é
            vasto e confuso. Canva, Freepik, Designi, Midjourney. cada uma
            resolve uma parte do problema, mas nenhuma centraliza todo o workflow
            criativo. Profissionais acabam assinando múltiplas plataformas,
            alternando entre elas e perdendo tempo com integrações manuais.
          </p>
          <p>
            O Calango Studio foi construído com uma proposta diferente: reunir
            geração de imagem, copy, mockups, UGC e gestão de clientes em uma
            única plataforma. Nos comparativos desta seção, analisamos
            funcionalidade por funcionalidade, preço por preço, para que você
            entenda exatamente onde cada ferramenta se destaca e onde fica
            limitada.
          </p>
          <p>
            Cada análise foi feita do ponto de vista de quem trabalha com design
            e social media profissionalmente. não para uso casual. Se você
            atende clientes, produz em volume e precisa de consistência visual,
            esses comparativos vão te ajudar a tomar a decisão certa para o seu
            workflow.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,copymaker,mockup-produto" />
      <ResultadosGaleria />
      <CtaBanner slug="comparativo" />
    </SeoLayout>
  );
}
