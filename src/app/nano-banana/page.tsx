import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Nano Banana: o modelo de IA de imagens do Calango Studio | Calango Studio",
  description:
    "Tudo sobre o Nano Banana, o modelo de IA de geração de imagens do Calango Studio. Versão grátis, Pro, como usar e dicas para maximizar resultados.",
  openGraph: {
    title: "Nano Banana: o modelo de IA de imagens do Calango Studio | Calango Studio",
    description:
      "Tudo sobre o Nano Banana, o modelo de IA de geração de imagens do Calango Studio. Versão grátis, Pro, como usar e dicas para maximizar resultados.",
    url: "https://www.calangostudio.com.br/nano-banana",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/nano-banana",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nano Banana",
  description:
    "Tudo sobre o Nano Banana, o modelo de IA de geração de imagens do Calango Studio.",
  url: "https://www.calangostudio.com.br/nano-banana",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Nano Banana Grátis",
        url: "https://www.calangostudio.com.br/nano-banana/nano-banana-gratis",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nano Banana Pro",
        url: "https://www.calangostudio.com.br/nano-banana/nano-banana-pro",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Usar o Nano Banana",
        url: "https://www.calangostudio.com.br/nano-banana/como-usar-nano-banana",
      },
    ],
  },
};

const subpages = [
  {
    href: "/nano-banana/nano-banana-gratis",
    title: "Nano Banana Grátis",
    description:
      "Entenda o que é o Nano Banana, como ele funciona e como maximizar suas gerações com créditos gratuitos.",
  },
  {
    href: "/nano-banana/nano-banana-pro",
    title: "Nano Banana Pro",
    description:
      "Conheça o Nano Banana Pro, o modelo profissional de geração de imagens. Como funciona e como usá-lo com máxima eficiência.",
  },
  {
    href: "/nano-banana/como-usar-nano-banana",
    title: "Como Usar o Nano Banana",
    description:
      "Guia completo para usar o Nano Banana no Calango Studio. Estilos, prompts, créditos e dicas práticas.",
  },
];

export default function NanoBananaHubPage() {
  return (
    <SeoLayout schema={schema} slug="nano-banana">
      <ClusterHero
        title="Nano Banana"
        subtitle="Conheça o Nano Banana, o modelo de IA de geração de imagens do Calango Studio. Versão gratuita, Pro e guia completo de uso."
        icon="🍌"
        contentCount={3}
        contentLabel="guias"
        ctaUtmCampaign="nano-banana"
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
          Sobre o Nano Banana
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            O Nano Banana é o modelo de inteligência artificial de geração de
            imagens desenvolvido para o Calango Studio. Diferente de modelos
            genéricos como Midjourney ou DALL-E, o Nano Banana foi otimizado
            para o workflow de designers e social media managers que atendem
            clientes — gerando imagens que já respeitam o contexto visual de
            cada marca.
          </p>
          <p>
            Existem duas versões: o Nano Banana gratuito, disponível com
            créditos de incentivo do Google, e o Nano Banana Pro, que oferece
            maior resolução, mais estilos e gerações ilimitadas dentro do plano
            assinado. Ambas as versões funcionam integradas ao perfil do cliente,
            aplicando automaticamente cores, estilo e referências visuais
            cadastradas.
          </p>
          <p>
            Nesta seção, você encontra guias completos sobre como usar o Nano
            Banana: desde a configuração inicial até técnicas avançadas de
            prompt, estilos disponíveis e estratégias para maximizar créditos.
            Seja na versão gratuita ou Pro, esses guias vão te ajudar a tirar o
            máximo do modelo.
          </p>
        </div>
      </section>

      <FuncaoShowcase slug="imagem-criativa,estudio-de-foto,assets-3d" />
      <ResultadosGaleria />
      <CtaBanner slug="nano-banana" />
    </SeoLayout>
  );
}
