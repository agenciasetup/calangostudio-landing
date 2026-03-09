import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "IA para Designers: ferramentas e workflow para 2025 | Calango Studio",
  description:
    "Como usar inteligência artificial para acelerar o workflow de design. Gere imagens cinematográficas, mockups, assets 3D e muito mais — tudo em uma plataforma.",
  openGraph: {
    title:
      "IA para Designers: ferramentas e workflow para 2025 | Calango Studio",
    description:
      "Como usar inteligência artificial para acelerar o workflow de design. Gere imagens cinematográficas, mockups, assets 3D e muito mais — tudo em uma plataforma.",
    url: "https://www.calangostudio.com.br/ferramentas/ia-para-designers",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/ferramentas/ia-para-designers",
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
        "Plataforma de IA para designers. Gere imagens, mockups, assets 3D e gerencie clientes.",
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
          name: "O que é IA para designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ferramentas de inteligência artificial que automatizam partes do processo criativo, como geração de imagens, criação de mockups, remoção de fundo e composições visuais, permitindo que o designer foque no que realmente importa: a direção criativa.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a melhor IA para designers em 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende do uso. Para quem atende clientes e precisa de consistência, o Calango Studio centraliza geração de imagem, mockup, assets 3D, UGC e gestão de clientes em uma plataforma só.",
          },
        },
        {
          "@type": "Question",
          name: "IA substitui o designer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. IA elimina o trabalho operacional repetitivo, liberando o designer para focar em criatividade, direção de arte e estratégia visual.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso saber criar prompts complexos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No Calango Studio, não. Os estilos prontos (Animal Art, Hero Style, Car Design, etc.) eliminam a necessidade de prompts complexos. Você escolhe o estilo e descreve o que quer em linguagem simples.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é IA para designers?",
    answer:
      "Ferramentas de inteligência artificial que automatizam partes do processo criativo, como geração de imagens, criação de mockups, remoção de fundo e composições visuais, permitindo que o designer foque no que realmente importa: a direção criativa.",
  },
  {
    question: "Qual a melhor IA para designers em 2025?",
    answer:
      "Depende do uso. Para quem atende clientes e precisa de consistência, o Calango Studio centraliza geração de imagem, mockup, assets 3D, UGC e gestão de clientes em uma plataforma só. Se você trabalha sozinho e só precisa gerar imagens artísticas, o Midjourney é forte. Mas para workflow profissional completo, o Calango é mais prático.",
  },
  {
    question: "IA substitui o designer?",
    answer:
      "Não. IA elimina o trabalho operacional repetitivo, liberando o designer para focar em criatividade, direção de arte e estratégia visual. O designer que usa IA produz mais em menos tempo, atende mais clientes e entrega resultados mais consistentes.",
  },
  {
    question: "Preciso saber criar prompts complexos?",
    answer:
      "No Calango Studio, não. Os estilos prontos (Animal Art, Hero Style, Car Design, Business Style, Craft Style, Classic Style) eliminam a necessidade de prompts complexos. Você escolhe o estilo e descreve o que quer em linguagem simples. O resultado já vem calibrado.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/sessao-de-fotos-com-ia",
    title: "Sessão de Fotos com IA",
    description:
      "Gere fotos profissionais sem estúdio, sem fotógrafo, direto na plataforma.",
  },
  {
    href: "/ferramentas/elementos-3d-transparente-ia",
    title: "Elementos 3D com Fundo Transparente",
    description:
      "Assets 3D em PNG transparente para composições e criativos.",
  },
  {
    href: "/guias/estilos-de-imagem-com-ia",
    title: "Estilos de Imagem com IA",
    description:
      "Animal Art, Hero Style, Car Design e mais — conheça cada estilo.",
  },
];

export default function IaParaDesignersPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        IA para Designers
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A inteligência artificial transformou o dia a dia dos designers. O que
        antes exigia horas de trabalho manual — buscar referências, gerar
        variações, criar mockups, remover fundos — agora pode ser feito em
        minutos. Mas a realidade de quem trabalha com múltiplos clientes ainda
        é fragmentada: uma ferramenta para gerar imagem, outra para criar
        copy, outra para mockups, outra para remover fundo. O contexto de
        cada cliente se perde entre abas e plataformas. Prompts complexos que
        funcionam para um estilo não funcionam para outro. O resultado? Tempo
        desperdiçado, inconsistência visual e frustração. Uma plataforma
        unificada muda esse cenário. Em vez de alternar entre cinco
        ferramentas, você centraliza tudo: geração de imagem, mockups, assets
        3D, UGC e gestão de clientes em um só lugar, com o briefing de cada
        cliente sempre acessível. Essa é a proposta do Calango Studio.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é IA para designers
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        IA para designers refere-se a um conjunto de ferramentas baseadas em
        inteligência artificial que automatizam partes do processo criativo.
        Isso inclui geração de imagens a partir de descrições de texto,
        criação automática de mockups de produto, geração de assets 3D com
        fundo transparente, produção de fotos realistas sem estúdio e até
        criação de conteúdo visual para redes sociais. O objetivo não é
        substituir o designer, mas eliminar o trabalho operacional repetitivo
        e deixar o profissional livre para focar na parte que realmente exige
        talento humano: a direção criativa, o conceito e a estratégia visual.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio é uma plataforma que reúne todas as ferramentas de IA
        que um designer profissional precisa, sem exigir conhecimento técnico
        de prompts ou modelos. A plataforma foi criada pela Agência Setup,
        que enfrentava exatamente esse problema no dia a dia da agência.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Funcionalidades para designers
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">Imagem Criativa</strong> — estilos
          prontos como Animal Art, Hero Style, Car Design, Business Style,
          Craft Style e Classic Style. Sem prompts complexos.
        </li>
        <li>
          <strong className="text-white">Assets 3D</strong> — elementos em
          PNG transparente gerados por IA, prontos para composições.
        </li>
        <li>
          <strong className="text-white">Mockup Produto</strong> — upload do
          produto e geração de mockups com cenários por IA.
        </li>
        <li>
          <strong className="text-white">UGC Build</strong> — fotos realistas
          de pessoas usando produtos, com aparência orgânica.
        </li>
        <li>
          <strong className="text-white">Estúdio de Foto</strong> — sessões
          fotográficas completas geradas por IA com referência de rosto ou
          produto.
        </li>
        <li>
          <strong className="text-white">Meus Clientes</strong> — cadastro de
          briefing por cliente, mantendo contexto e consistência entre
          gerações.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
