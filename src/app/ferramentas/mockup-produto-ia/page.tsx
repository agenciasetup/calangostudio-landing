import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title:
    "Mockup de Produto com IA: crie mockups em segundos | Calango Studio",
  description:
    "Gere mockups profissionais de qualquer produto em cenários incríveis com IA. Sem Photoshop, sem estúdio. Ferramenta Mockup Produto do Calango Studio.",
  openGraph: {
    title:
      "Mockup de Produto com IA: crie mockups em segundos | Calango Studio",
    description:
      "Gere mockups profissionais de qualquer produto em cenários incríveis com IA. Sem Photoshop, sem estúdio. Ferramenta Mockup Produto do Calango Studio.",
    url: "https://www.calangostudio.com.br/ferramentas/mockup-produto-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/ferramentas/mockup-produto-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description:
        "Gere mockups profissionais de qualquer produto em cenários gerados por IA.",
      offers: {
        "@type": "Offer",
        price: "97.90",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é mockup de produto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É uma imagem do produto inserido em um cenário ou superfície realista para fins de apresentação, marketing ou vendas. Mostra como o produto fica em contexto real.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre mockup com IA e template?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Templates são fixos. você encaixa o produto em cenários pré-definidos. Com IA, o cenário é gerado de acordo com o produto e a descrição que você fornece, resultando em composições únicas.",
          },
        },
        {
          "@type": "Question",
          name: "Mockup de produto serve para Instagram e anúncios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O resultado pode ser exportado e usado diretamente em posts, stories, anúncios e catálogos de e-commerce com qualidade profissional.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso remover o fundo do produto antes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende. O Calango Studio facilita esse processo dentro da própria plataforma, integrando remoção de fundo e geração de mockup em um fluxo contínuo.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é mockup de produto?",
    answer:
      "É uma imagem do produto inserido em um cenário ou superfície realista para fins de apresentação, marketing ou vendas. Mostra como o produto fica em contexto real. sobre uma mesa, em uma vitrine, nas mãos de alguém. Mockups são essenciais para e-commerce, redes sociais e materiais de marketing.",
  },
  {
    question: "Qual a diferença entre mockup com IA e template?",
    answer:
      "Templates são fixos. você encaixa o produto em cenários pré-definidos que centenas de outras marcas também usam. Com IA, o cenário é gerado de acordo com o produto e a descrição que você fornece, resultando em composições únicas e personalizadas para cada marca.",
  },
  {
    question: "Mockup de produto serve para Instagram e anúncios?",
    answer:
      "Sim. O resultado pode ser exportado e usado diretamente em posts, stories, anúncios e catálogos de e-commerce com qualidade profissional. A vantagem do mockup com IA é que cada imagem é única, diferenciando sua marca da concorrência.",
  },
  {
    question: "Preciso remover o fundo do produto antes?",
    answer:
      "Depende do caso. O Calango Studio facilita esse processo dentro da própria plataforma, integrando remoção de fundo e geração de mockup em um fluxo contínuo. Você não precisa de Photoshop ou outras ferramentas externas.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/ugc-com-ia",
    title: "UGC com IA",
    description:
      "Fotos realistas de pessoas usando produtos, geradas por IA.",
  },
  {
    href: "/ferramentas/sessao-de-fotos-com-ia",
    title: "Sessão de Fotos com IA",
    description:
      "Sessões fotográficas completas geradas por IA com referência.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Todas as ferramentas de IA para designers em uma plataforma.",
  },
];

export default function MockupProdutoIaPage() {
  return (
    <SeoLayout schema={schema} slug="ferramentas/mockup-produto-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Mockup de Produto com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Mockups de produto são essenciais para e-commerce e marketing. Uma boa
        foto do produto em contexto pode ser a diferença entre uma venda e um
        cliente que passa direto. Tradicionalmente, criar mockups envolve duas
        abordagens: fotografia de produto (estúdio, fotógrafo, cenário) ou
        composição no Photoshop (encontrar template, ajustar perspectiva,
        iluminação, sombras). Ambas consomem tempo e exigem habilidades
        específicas. Para uma marca com dezenas de produtos, o custo escala
        rapidamente. A inteligência artificial trouxe uma terceira via: você
        fornece a imagem do produto e descreve o cenário desejado, e a IA
        gera o mockup completo em segundos. O resultado não usa templates
        fixos. cada composição é única, gerada especificamente para o seu
        produto.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é mockup de produto
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Mockup de produto é uma representação visual do produto em um cenário
        realista. Em vez de mostrar o produto isolado em fundo branco, o
        mockup posiciona o produto em um contexto que comunica seu uso, estilo
        e valor. sobre uma mesa de escritório, em uma vitrine elegante, nas
        mãos de uma pessoa, em um ambiente de lifestyle. Mockups bem feitos
        aumentam a percepção de valor do produto e ajudam o consumidor a
        visualizar como ele ficaria em sua vida real. Para lojas online, a
        qualidade das imagens de produto impacta diretamente nas taxas de
        conversão.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Mockup Produto do Calango Studio automatiza a criação de mockups
        usando IA generativa, eliminando a necessidade de Photoshop, templates
        ou fotografia de produto.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Como funciona o Mockup Produto
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">Upload do produto</strong>. suba a
          imagem do produto que será apresentado no mockup.
        </li>
        <li>
          <strong className="text-white">Escolha de cenário</strong>.
          descreva ou selecione o cenário desejado para a composição.
        </li>
        <li>
          <strong className="text-white">Geração por IA</strong>. a
          plataforma gera o mockup com iluminação, perspectiva e sombras
          realistas em segundos.
        </li>
        <li>
          <strong className="text-white">Exportação profissional</strong>.
          o resultado pode ser usado diretamente em e-commerce, Instagram,
          anúncios e catálogos impressos.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="mockup-produto" />

      <ResultadosGaleria />

      <CtaBanner slug="ferramentas/mockup-produto-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
