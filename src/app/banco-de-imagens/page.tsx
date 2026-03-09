import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Banco de Imagens: guias para designers que querem alternativas | Calango Studio",
  description:
    "Tudo sobre bancos de imagens para designers. Comparativos, alternativas gratuitas e por que gerar imagens com IA é mais eficiente.",
  openGraph: {
    title: "Banco de Imagens: guias para designers que querem alternativas | Calango Studio",
    description:
      "Tudo sobre bancos de imagens para designers. Comparativos, alternativas gratuitas e por que gerar imagens com IA é mais eficiente.",
    url: "https://www.calangostudio.com.br/banco-de-imagens",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/banco-de-imagens",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Banco de Imagens",
  description:
    "Guias sobre bancos de imagens e alternativas com IA para designers profissionais.",
  url: "https://www.calangostudio.com.br/banco-de-imagens",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Melhor Banco de Imagens para Designer",
        url: "https://www.calangostudio.com.br/banco-de-imagens/melhor-banco-de-imagens-para-designer",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Como Não Depender de Banco de Imagens",
        url: "https://www.calangostudio.com.br/banco-de-imagens/como-nao-depender-de-banco-de-imagens",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Encontrar Imagem para Post",
        url: "https://www.calangostudio.com.br/banco-de-imagens/como-encontrar-imagem-para-post",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Imagem Gratuita para Uso Comercial",
        url: "https://www.calangostudio.com.br/banco-de-imagens/imagem-gratuita-para-uso-comercial",
      },
    ],
  },
};

const subpages = [
  {
    href: "/banco-de-imagens/melhor-banco-de-imagens-para-designer",
    title: "Melhor Banco de Imagens para Designer",
    description:
      "Ranking dos melhores bancos de imagens para designers profissionais e por que geração com IA é a evolução.",
  },
  {
    href: "/banco-de-imagens/como-nao-depender-de-banco-de-imagens",
    title: "Como Não Depender de Banco de Imagens",
    description:
      "Aprenda a sair da dependência de bancos de imagens usando geração com IA. Conteúdo original e personalizado.",
  },
  {
    href: "/banco-de-imagens/como-encontrar-imagem-para-post",
    title: "Como Encontrar Imagem para Post",
    description:
      "Pare de perder tempo procurando imagem para post. Gere a imagem que você precisa com IA em segundos.",
  },
  {
    href: "/banco-de-imagens/imagem-gratuita-para-uso-comercial",
    title: "Imagem Gratuita para Uso Comercial",
    description:
      "Onde encontrar imagens gratuitas para uso comercial e por que gerar com IA é mais eficiente para profissionais.",
  },
];

export default function BancoDeImagensHubPage() {
  return (
    <SeoLayout schema={schema} slug="banco-de-imagens">
      <ClusterHero
        title="Banco de Imagens"
        subtitle="Guias sobre bancos de imagens, alternativas gratuitas e por que designers profissionais estão migrando para geração com IA."
        icon="🖼️"
        contentCount={4}
        contentLabel="guias"
        ctaUtmCampaign="banco-de-imagens"
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
          Sobre bancos de imagens e IA
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            Bancos de imagens como Freepik, Shutterstock, Unsplash e Pexels
            foram durante anos a principal fonte visual para designers e social
            media managers. Mas o modelo tem limitações claras: imagens genéricas,
            repetidas entre concorrentes, busca demorada e licenças confusas. Para
            quem atende clientes, encontrar a imagem certa pode consumir mais
            tempo do que criar o conteúdo em si.
          </p>
          <p>
            A geração de imagens com IA inverte essa lógica. Em vez de procurar
            algo que se aproxime do que você precisa, você descreve exatamente o
            que quer e a IA gera. Sem royalties, sem imagens repetidas, sem
            compromisso visual. Plataformas como o Calango Studio vão além:
            mantêm o estilo de cada cliente salvo, para que toda geração já saia
            alinhada com a identidade da marca.
          </p>
          <p>
            Nesta seção, exploramos o cenário dos bancos de imagens, comparamos
            opções gratuitas e pagas, e mostramos como a transição para geração
            com IA funciona na prática. Para designers que querem parar de
            depender de bancos e começar a produzir conteúdo original em escala.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,estudio-de-foto,assets-3d" />
      <ResultadosGaleria />
      <CtaBanner slug="banco-de-imagens" />
    </SeoLayout>
  );
}
