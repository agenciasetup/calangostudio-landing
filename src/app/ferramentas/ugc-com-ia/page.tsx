import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "UGC com IA: fotos realistas de pessoas com produtos | Calango Studio",
  description:
    "Crie fotos de UGC realistas com IA. Pessoas usando produtos, sem modelo, sem produção, sem aspecto artificial. Ferramenta UGC Build do Calango Studio.",
  openGraph: {
    title:
      "UGC com IA: fotos realistas de pessoas com produtos | Calango Studio",
    description:
      "Crie fotos de UGC realistas com IA. Pessoas usando produtos, sem modelo, sem produção, sem aspecto artificial. Ferramenta UGC Build do Calango Studio.",
    url: "https://www.calangostudio.com.br/ferramentas/ugc-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/ferramentas/ugc-com-ia",
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
        "Crie fotos de UGC realistas com IA. Pessoas usando produtos sem modelo e sem produção.",
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
          name: "O que é UGC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "User Generated Content — conteúdo visual que parece ter sido criado por um consumidor real, não por uma marca. Fotos casuais, com aparência de iPhone, mostrando produtos em uso no dia a dia.",
          },
        },
        {
          "@type": "Question",
          name: "UGC gerado por IA funciona para anúncios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, especialmente quando tem aparência orgânica e realista. Anúncios com UGC tendem a performar melhor que anúncios produzidos, porque geram mais identificação com o público.",
          },
        },
        {
          "@type": "Question",
          name: "Como fazer foto de produto com pessoa usando IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No UGC Build do Calango Studio, você fornece a imagem do produto e descreve o cenário desejado. A IA gera fotos realistas de pessoas usando o produto.",
          },
        },
        {
          "@type": "Question",
          name: "A foto vai parecer artificial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O UGC Build é calibrado para gerar imagens com aparência de foto casual de iPhone — iluminação natural, poses orgânicas, cenários do dia a dia.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é UGC?",
    answer:
      "User Generated Content — conteúdo visual que parece ter sido criado por um consumidor real, não por uma marca. São fotos casuais, com aparência de foto de iPhone, mostrando produtos em uso no dia a dia. Esse tipo de conteúdo gera mais confiança e identificação do que fotos de estúdio tradicionais.",
  },
  {
    question: "UGC gerado por IA funciona para anúncios?",
    answer:
      "Sim, especialmente quando tem aparência orgânica e realista. Anúncios com UGC tendem a performar melhor que anúncios produzidos, porque geram mais identificação com o público. Marcas de e-commerce, moda e produtos físicos têm usado UGC com IA com excelentes resultados em campanhas de Meta Ads e Google Ads.",
  },
  {
    question: "Como fazer foto de produto com pessoa usando IA?",
    answer:
      "No UGC Build do Calango Studio, você fornece a imagem do produto e descreve o cenário desejado. A IA gera fotos realistas de pessoas usando o produto em situações cotidianas, com aparência natural e sem aspecto de imagem gerada por computador.",
  },
  {
    question: "A foto vai parecer artificial?",
    answer:
      "O UGC Build é calibrado para gerar imagens com aparência de foto casual de iPhone — iluminação natural, poses orgânicas, cenários do dia a dia. O objetivo é que a foto pareça ter sido tirada por um consumidor real, não por um estúdio de produção.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/sessao-de-fotos-com-ia",
    title: "Sessão de Fotos com IA",
    description:
      "Fotos profissionais geradas por IA sem estúdio e sem fotógrafo.",
  },
  {
    href: "/ferramentas/mockup-produto-ia",
    title: "Mockup de Produto com IA",
    description:
      "Mockups de produtos em cenários gerados por IA em segundos.",
  },
  {
    href: "/ferramentas/ia-para-social-media",
    title: "IA para Social Media",
    description:
      "Plataforma completa para social media managers com gestão de clientes.",
  },
];

export default function UgcComIaPage() {
  return (
    <SeoLayout schema={schema} slug="ferramentas/ugc-com-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        UGC com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        UGC — User Generated Content — se tornou um dos formatos mais eficazes
        para marketing digital. Fotos que parecem ter sido tiradas por
        consumidores reais, mostrando produtos em uso no dia a dia, geram mais
        confiança e engajamento do que fotos de estúdio polidas. Mas produzir
        UGC real tem seus custos: encontrar criadores de conteúdo, briefar,
        negociar, esperar a produção, revisar e aprovar. Para uma marca que
        precisa de volume — muitas fotos para múltiplos produtos — o
        investimento em tempo e dinheiro é significativo. A inteligência
        artificial chegou para mudar essa equação. Agora é possível gerar
        fotos de UGC com aparência completamente orgânica, com pessoas
        usando produtos em cenários reais, sem contratar modelo, sem produção
        fotográfica e sem o aspecto artificial que marcava as primeiras
        gerações de imagens por IA.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é UGC e por que importa
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        UGC é qualquer conteúdo visual que parece ter sido criado por um
        consumidor real, não pela marca. Esse formato funciona porque gera
        identificação: o público vê alguém usando o produto como eles usariam,
        em um cenário familiar, com uma foto que parece casual. Dados de
        mercado mostram que anúncios com UGC têm taxas de conversão
        significativamente maiores do que anúncios com fotos de estúdio. O
        formato é especialmente eficaz para marcas de e-commerce, moda,
        beleza, alimentação e produtos físicos em geral. O desafio sempre foi
        a escala: produzir UGC autêntico para dezenas de produtos é caro e
        demorado.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O UGC Build do Calango Studio é a ferramenta dedicada à geração de
        fotos de UGC com IA. O diferencial está na calibragem: as imagens
        são geradas com aparência de foto de iPhone, não de renderização 3D.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Como funciona o UGC Build
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">Upload do produto</strong> —
          forneça a imagem do produto que será apresentado.
        </li>
        <li>
          <strong className="text-white">Descrição do cenário</strong> —
          descreva a situação desejada (pessoa usando o produto no café,
          na academia, em casa).
        </li>
        <li>
          <strong className="text-white">Aparência orgânica</strong> — a IA
          gera fotos com iluminação natural, poses casuais e cenários reais.
        </li>
        <li>
          <strong className="text-white">Uso em anúncios</strong> — o
          resultado pode ser usado diretamente em campanhas de Meta Ads,
          Google Ads, posts orgânicos e e-commerce.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="ferramentas/ugc-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
