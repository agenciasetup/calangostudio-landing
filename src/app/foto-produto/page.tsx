import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Foto de Produto com IA: sem estúdio, sem fotógrafo | Calango Studio",
  description:
    "Guias para criar fotos profissionais de produto usando IA. Mockups, cenários, e-commerce e lifestyle. sem estúdio e sem fotógrafo.",
  openGraph: {
    title: "Foto de Produto com IA: sem estúdio, sem fotógrafo | Calango Studio",
    description:
      "Guias para criar fotos profissionais de produto usando IA. Mockups, cenários, e-commerce e lifestyle. sem estúdio e sem fotógrafo.",
    url: "https://www.calangostudio.com.br/foto-produto",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/foto-produto",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Foto de Produto com IA",
  description:
    "Guias para criar fotos profissionais de produto com inteligência artificial.",
  url: "https://www.calangostudio.com.br/foto-produto",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Como Fazer Foto de Produto sem Estúdio usando IA",
        url: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-produto-sem-estudio",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Como Criar Mockup de Embalagem com IA",
        url: "https://www.calangostudio.com.br/foto-produto/como-criar-mockup-embalagem-ia",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Fazer Foto para E-commerce sem Fotógrafo",
        url: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-ecommerce-sem-fotografo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Como Colocar Produto em Cenário com IA",
        url: "https://www.calangostudio.com.br/foto-produto/como-colocar-produto-em-cenario-com-ia",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Como Fazer uma Sessão de Fotos Completa Usando IA",
        url: "https://www.calangostudio.com.br/foto-produto/como-fazer-sessao-de-fotos-com-ia",
      },
    ],
  },
};

const subpages = [
  {
    href: "/foto-produto/como-fazer-foto-produto-sem-estudio",
    title: "Foto de Produto sem Estúdio",
    description:
      "Crie fotos profissionais de produto sem estúdio fotográfico. IA gera imagens em cenários realistas em minutos.",
  },
  {
    href: "/foto-produto/como-criar-mockup-embalagem-ia",
    title: "Mockup de Embalagem com IA",
    description:
      "Gere mockups de embalagem profissionais com IA. Apresente o produto em cenários reais sem amostra física.",
  },
  {
    href: "/foto-produto/como-fazer-foto-ecommerce-sem-fotografo",
    title: "Foto para E-commerce sem Fotógrafo",
    description:
      "Crie fotos profissionais para e-commerce usando IA. Produto em cenários, fundo branco e lifestyle.",
  },
  {
    href: "/foto-produto/como-colocar-produto-em-cenario-com-ia",
    title: "Produto em Cenário com IA",
    description:
      "Insira qualquer produto em cenários profissionais usando IA. Praia, escritório, natureza, lifestyle.",
  },
  {
    href: "/foto-produto/como-fazer-sessao-de-fotos-com-ia",
    title: "Sessão de Fotos Completa com IA",
    description:
      "Como simular uma sessão de fotos profissional completa usando IA. Produto, moda, retrato e lifestyle.",
  },
];

export default function FotoProdutoHubPage() {
  return (
    <SeoLayout schema={schema} slug="foto-produto">
      <ClusterHero
        title="Foto de Produto com IA"
        subtitle="Guias para criar fotos profissionais de produto sem estúdio e sem fotógrafo. Mockups, cenários realistas e imagens para e-commerce. tudo gerado com IA."
        icon="📸"
        contentCount={5}
        contentLabel="guias"
        ctaUtmCampaign="foto-produto"
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
          Sobre foto de produto e IA
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            Fotografia de produto sempre foi uma das etapas mais caras e lentas
            do marketing. Estúdio, iluminação, fotógrafo, pós-produção. cada
            sessão consome horas e centenas de reais. Para pequenos negócios e
            e-commerces com catálogos extensos, isso se torna um gargalo que
            atrasa lançamentos e limita a qualidade visual das lojas.
          </p>
          <p>
            Com inteligência artificial, o cenário mudou. Hoje é possível gerar
            fotos de produto em cenários profissionais. praia, escritório,
            lifestyle, fundo branco. em minutos. Ferramentas como o Mockup
            Produto e o Estúdio de Foto do Calango Studio permitem inserir
            qualquer produto em ambientações realistas sem precisar de amostra
            física ou equipamento profissional.
          </p>
          <p>
            Nesta seção, reunimos guias práticos para quem precisa criar fotos de
            produto com qualidade profissional usando IA. Desde mockups de
            embalagem até imagens completas para e-commerce, cada guia mostra o
            passo a passo com resultados aplicáveis imediatamente.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="mockup-produto,estudio-de-foto,ugc-build" />
      <ResultadosGaleria />
      <CtaBanner slug="foto-produto" />
    </SeoLayout>
  );
}
