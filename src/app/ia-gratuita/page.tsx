import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "IA Gratuita para Designers e Social Media: o que funciona | Calango Studio",
  description:
    "Guias sobre IAs gratuitas para designers e social media. O que cada ferramenta entrega, seus limites reais e quando vale investir em uma plataforma profissional.",
  openGraph: {
    title: "IA Gratuita para Designers e Social Media: o que funciona | Calango Studio",
    description:
      "Guias sobre IAs gratuitas para designers e social media. O que cada ferramenta entrega, seus limites reais e quando vale investir em uma plataforma profissional.",
    url: "https://www.calangostudio.com.br/ia-gratuita",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/ia-gratuita",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "IA Gratuita para Designers e Social Media",
  description:
    "Guias sobre IAs gratuitas, seus limites e quando vale investir em plataformas profissionais.",
  url: "https://www.calangostudio.com.br/ia-gratuita",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "IA Gratuita para Designers",
        url: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-designers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IA Gratuita para Gerar Imagens",
        url: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-gerar-imagens",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Melhor IA Gratuita para Social Media",
        url: "https://www.calangostudio.com.br/ia-gratuita/melhor-ia-gratuita-para-social-media",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "GPT Grátis para Criar Conteúdo",
        url: "https://www.calangostudio.com.br/ia-gratuita/gpt-gratis-para-criar-conteudo",
      },
    ],
  },
};

const subpages = [
  {
    href: "/ia-gratuita/ia-gratuita-para-designers",
    title: "IA Gratuita para Designers",
    description:
      "Quais IAs gratuitas existem para designers, o que entregam de verdade e quando vale investir em plataforma profissional.",
  },
  {
    href: "/ia-gratuita/ia-gratuita-para-gerar-imagens",
    title: "IA Gratuita para Gerar Imagens",
    description:
      "As melhores IAs gratuitas para gerar imagens, o que cada uma entrega e por que profissionais migram para plataformas pagas.",
  },
  {
    href: "/ia-gratuita/melhor-ia-gratuita-para-social-media",
    title: "Melhor IA Gratuita para Social Media",
    description:
      "As IAs gratuitas mais usadas por social media managers, seus limites reais e alternativas profissionais.",
  },
  {
    href: "/ia-gratuita/gpt-gratis-para-criar-conteudo",
    title: "GPT Grátis para Criar Conteúdo",
    description:
      "O GPT gratuito serve para criar conteúdo profissional? Entenda os limites e quando uma plataforma especializada faz mais sentido.",
  },
];

export default function IaGratuitaHubPage() {
  return (
    <SeoLayout schema={schema} slug="ia-gratuita">
      <ClusterHero
        title="IA Gratuita"
        subtitle="Guias honestos sobre ferramentas de IA gratuitas para designers e social media. O que funciona, o que não funciona e quando vale investir em algo profissional."
        icon="🆓"
        contentCount={4}
        contentLabel="guias"
        ctaUtmCampaign="ia-gratuita"
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
          Sobre IA gratuita e uso profissional
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            A busca por ferramentas de IA gratuitas é natural. todo profissional
            quer testar antes de investir. ChatGPT, Bing Image Creator, Leonardo
            AI, Playground AI. existem dezenas de opções gratuitas para gerar
            texto e imagens. O problema é que, para uso profissional, essas
            ferramentas têm limites que impactam diretamente a produtividade.
          </p>
          <p>
            Limites de geração por dia, falta de controle sobre estilo, ausência
            de gestão por cliente, prompts genéricos sem contexto. tudo isso
            significa mais tempo ajustando resultados e menos tempo entregando
            para o cliente. Para quem produz conteúdo em volume, o custo real de
            uma ferramenta gratuita é o tempo perdido no processo.
          </p>
          <p>
            Nesta seção, analisamos as principais IAs gratuitas do mercado com
            honestidade. Mostramos o que cada uma faz bem, onde falha e para
            quem é a escolha certa. Se você está avaliando se vale investir em
            uma plataforma profissional como o Calango Studio, esses guias vão
            te dar clareza para decidir.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,copymaker,assets-3d" />
      <ResultadosGaleria />
      <CtaBanner slug="ia-gratuita" />
    </SeoLayout>
  );
}
