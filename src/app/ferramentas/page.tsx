import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Ferramentas de IA para Designers e Social Media | Calango Studio",
  description:
    "Conheça todas as ferramentas de IA do Calango Studio. Geração de imagens, mockups, UGC, assets 3D, sessões de fotos e muito mais.",
  openGraph: {
    title: "Ferramentas de IA para Designers e Social Media | Calango Studio",
    description:
      "Conheça todas as ferramentas de IA do Calango Studio. Geração de imagens, mockups, UGC, assets 3D, sessões de fotos e muito mais.",
    url: "https://www.calangostudio.com.br/ferramentas",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/ferramentas",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ferramentas de IA para Designers e Social Media",
  description:
    "Todas as ferramentas de IA do Calango Studio para designers e social media managers.",
  url: "https://www.calangostudio.com.br/ferramentas",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "IA para Designers",
        url: "https://www.calangostudio.com.br/ferramentas/ia-para-designers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IA para Social Media",
        url: "https://www.calangostudio.com.br/ferramentas/ia-para-social-media",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sessão de Fotos com IA",
        url: "https://www.calangostudio.com.br/ferramentas/sessao-de-fotos-com-ia",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Mockup de Produto com IA",
        url: "https://www.calangostudio.com.br/ferramentas/mockup-produto-ia",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "UGC com IA",
        url: "https://www.calangostudio.com.br/ferramentas/ugc-com-ia",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Elementos 3D com Fundo Transparente",
        url: "https://www.calangostudio.com.br/ferramentas/elementos-3d-transparente-ia",
      },
    ],
  },
};

const subpages = [
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Como usar inteligência artificial para acelerar o workflow de design. Imagens cinematográficas, mockups, assets 3D e mais.",
  },
  {
    href: "/ferramentas/ia-para-social-media",
    title: "IA para Social Media",
    description:
      "Plataforma de IA para social media managers. Gere posts, carrosséis, copies e gerencie todos seus clientes em um só lugar.",
  },
  {
    href: "/ferramentas/sessao-de-fotos-com-ia",
    title: "Sessão de Fotos com IA",
    description:
      "Gere sessões de fotos profissionais com IA usando referências de imagem. Sem estúdio, sem fotógrafo.",
  },
  {
    href: "/ferramentas/mockup-produto-ia",
    title: "Mockup de Produto com IA",
    description:
      "Gere mockups profissionais de qualquer produto em cenários incríveis com IA. Sem Photoshop, sem estúdio.",
  },
  {
    href: "/ferramentas/ugc-com-ia",
    title: "UGC com IA",
    description:
      "Crie fotos de UGC realistas com IA. Pessoas usando produtos, sem modelo, sem produção, sem aspecto artificial.",
  },
  {
    href: "/ferramentas/elementos-3d-transparente-ia",
    title: "Elementos 3D com Fundo Transparente",
    description:
      "Gere elementos e objetos 3D em PNG com fundo transparente usando IA. Ideal para composições e criativos.",
  },
];

export default function FerramentasHubPage() {
  return (
    <SeoLayout schema={schema} slug="ferramentas">
      <ClusterHero
        title="Ferramentas de IA"
        subtitle="Conheça todas as ferramentas de inteligência artificial do Calango Studio. De geração de imagens a mockups de produto. tudo em uma plataforma."
        icon="🛠️"
        contentCount={6}
        contentLabel="ferramentas"
        ctaUtmCampaign="ferramentas"
      />

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Explore as ferramentas
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
          Sobre as ferramentas do Calango Studio
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            O Calango Studio reúne diversas ferramentas de IA projetadas
            especificamente para designers e social media managers que atendem
            clientes. Diferente de ferramentas genéricas como ChatGPT ou
            Midjourney, cada módulo do Calango Studio foi pensado para resolver
            problemas reais do dia a dia criativo. com o contexto do cliente
            sempre carregado.
          </p>
          <p>
            Do gerador de imagens cinematográficas ao criador de mockups de
            produto, passando por UGC realista e elementos 3D com fundo
            transparente, a plataforma cobre todo o espectro de produção visual.
            O diferencial é a integração: você não precisa alternar entre
            ferramentas, exportar e importar arquivos ou repassar briefings. Tudo
            funciona dentro do mesmo ambiente, com os mesmos perfis de cliente.
          </p>
          <p>
            Nesta seção, detalhamos cada ferramenta disponível no Calango Studio.
            Você vai entender o que cada módulo faz, como usá-lo e quais
            resultados esperar. Ideal para quem está avaliando a plataforma ou
            quer descobrir funcionalidades que ainda não explorou.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,copymaker,mockup-produto" />

      <ResultadosGaleria />

      <CtaBanner slug="ferramentas" />
    </SeoLayout>
  );
}
