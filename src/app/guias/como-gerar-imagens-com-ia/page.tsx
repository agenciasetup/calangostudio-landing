import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Como Gerar Imagens com IA: guia prático para designers | Calango Studio",
  description:
    "Guia completo sobre geração de imagens com IA. Aprenda sobre prompts, estilos prontos e como gerar imagens profissionais sem complicação.",
  openGraph: {
    title:
      "Como Gerar Imagens com IA: guia prático para designers | Calango Studio",
    description:
      "Guia completo sobre geração de imagens com IA. Aprenda sobre prompts, estilos prontos e como gerar imagens profissionais sem complicação.",
    url: "https://www.calangostudio.com.br/guias/como-gerar-imagens-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/como-gerar-imagens-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como Gerar Imagens com IA",
      description:
        "Guia passo a passo para gerar imagens profissionais com inteligência artificial usando o Calango Studio.",
      step: [
        {
          "@type": "HowToStep",
          name: "Entenda o que você quer gerar",
          text: "Defina a referência visual, o estilo desejado e o uso final da imagem antes de começar.",
        },
        {
          "@type": "HowToStep",
          name: "Escolha entre prompt livre ou estilo pronto",
          text: "Decida se vai descrever a imagem em texto livre ou usar um dos estilos prontos do Calango Studio.",
        },
        {
          "@type": "HowToStep",
          name: "Selecione a ferramenta correta",
          text: "No Calango Studio, escolha entre Imagem Criativa, Estúdio de Foto ou UGC Build conforme seu objetivo.",
        },
        {
          "@type": "HowToStep",
          name: "Gere e avalie",
          text: "Gere a imagem, avalie o resultado e refine os parâmetros se necessário.",
        },
        {
          "@type": "HowToStep",
          name: "Exporte e use",
          text: "Baixe a imagem gerada e use em seus projetos, posts, anúncios ou materiais de marketing.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Preciso saber escrever prompts para usar IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não no Calango Studio. Os estilos prontos eliminam a necessidade de prompts complexos. Você escolhe o estilo e descreve o que quer em linguagem simples.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a melhor IA para gerar imagens no Brasil em 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Midjourney, FLUX e DALL-E são os mais conhecidos globalmente. O Calango Studio integra múltiplos modelos (Nano Banana, FLUX e OpenAI) e seleciona automaticamente o melhor para cada tipo de geração.",
          },
        },
        {
          "@type": "Question",
          name: "O que é o Nano Banana IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É o modelo principal de geração de imagens integrado ao Calango Studio, calibrado para resultados cinematográficos e realistas.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para gerar uma imagem com IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Em média, menos de 30 segundos por geração no Calango Studio, dependendo da complexidade e do modelo utilizado.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Preciso saber escrever prompts para usar IA?",
    answer:
      "Não no Calango Studio. Os estilos prontos eliminam a necessidade de prompts complexos. Você escolhe o estilo (Animal Art, Hero Style, Car Design, etc.) e descreve o que quer em linguagem simples. O resultado já vem calibrado para o estilo selecionado.",
  },
  {
    question: "Qual a melhor IA para gerar imagens no Brasil em 2025?",
    answer:
      "Midjourney, FLUX e DALL-E são os mais conhecidos globalmente. O Calango Studio integra múltiplos modelos (Nano Banana, FLUX e OpenAI) e seleciona automaticamente o melhor para cada tipo de geração. Para profissionais que atendem clientes, o diferencial do Calango é centralizar geração de imagem, copy e gestão de clientes em um só lugar.",
  },
  {
    question: "O que é o Nano Banana IA?",
    answer:
      "É o modelo principal de geração de imagens integrado ao Calango Studio, calibrado para resultados cinematográficos e realistas. O Calango integra também FLUX e OpenAI, selecionando automaticamente o melhor modelo para cada geração. o usuário não precisa escolher.",
  },
  {
    question: "Quanto tempo leva para gerar uma imagem com IA?",
    answer:
      "Em média, menos de 30 segundos por geração no Calango Studio. A velocidade varia conforme a complexidade da imagem e o modelo utilizado, mas o processo é significativamente mais rápido do que criar a imagem manualmente.",
  },
];

const relatedPages = [
  {
    href: "/guias/estilos-de-imagem-com-ia",
    title: "Estilos de Imagem com IA",
    description:
      "Conheça cada estilo: Animal Art, Hero Style, Car Design e mais.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Todas as ferramentas de IA para designers em uma plataforma.",
  },
  {
    href: "/sobre/nano-banana",
    title: "Nano Banana",
    description:
      "Entenda o modelo de IA principal do Calango Studio.",
  },
];

export default function ComoGerarImagensComIaPage() {
  return (
    <SeoLayout schema={schema} slug="guias/como-gerar-imagens-com-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Gerar Imagens com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Gerar imagens com inteligência artificial deixou de ser algo
        experimental e se tornou parte do workflow de designers, social medias
        e criadores de conteúdo no mundo inteiro. O que antes exigia horas de
        trabalho no Photoshop. ou a contratação de um fotógrafo. agora pode
        ser feito em segundos com uma descrição em texto. Mas a realidade
        prática é mais nuançada do que parece: a maioria das ferramentas exige
        prompts complexos em inglês, conhecimento dos modelos disponíveis e
        muita tentativa e erro até chegar no resultado desejado. Para
        profissionais que precisam de velocidade e consistência, esse processo
        ainda é um gargalo. Este guia mostra como gerar imagens profissionais
        com IA de forma prática, usando estilos prontos que eliminam a curva
        de aprendizado.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo para gerar imagens com IA
      </h2>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 1: Entenda o que você quer gerar
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Antes de abrir qualquer ferramenta, defina três coisas: a referência
        visual (que tipo de imagem você precisa), o estilo desejado
        (cinematográfico, artístico, corporate, artesanal) e o uso final
        (post de Instagram, banner, perfil profissional, e-commerce). Essa
        clareza inicial economiza tempo e gerações.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 2: Escolha entre prompt livre ou estilo pronto
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Você tem duas abordagens: escrever um prompt descritivo do zero (mais
        controle, mais complexidade) ou usar um estilo pronto que já vem
        calibrado. No Calango Studio, os estilos prontos (Animal Art, Hero
        Style, Car Design, Business Style, Craft Style, Classic Style)
        eliminam a necessidade de prompts complexos. Você descreve o que quer
        em linguagem simples e o estilo cuida do resto.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 3: Selecione a ferramenta correta
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        No Calango Studio, cada objetivo tem uma ferramenta dedicada: Imagem
        Criativa para gerações com estilos prontos, Estúdio de Foto para
        sessões fotográficas com referência de rosto ou produto, e UGC Build
        para fotos de pessoas usando produtos. Escolher a ferramenta certa
        para o objetivo certo é metade do caminho para um bom resultado.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 4: Gere, avalie e refine
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Gere a imagem, avalie o resultado e refine se necessário. Com estilos
        prontos, o refinamento geralmente é mínimo. ajustar a descrição ou
        trocar o estilo. O Calango usa os modelos Nano Banana (principal),
        FLUX e OpenAI integrados, selecionando automaticamente o melhor para
        cada tipo de geração.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 5: Exporte e use
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Baixe a imagem gerada e use em seus projetos. O resultado vem em alta
        resolução, pronto para redes sociais, materiais impressos, anúncios
        ou qualquer outro uso profissional.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Modelos de IA integrados
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio integra três motores de geração: o Nano Banana
        (modelo principal, calibrado para resultados cinematográficos), FLUX
        (para estilos específicos) e OpenAI (para usos complementares). A
        plataforma seleciona automaticamente o melhor modelo para cada tipo
        de geração. o usuário não precisa escolher ou entender as diferenças
        técnicas entre eles. Para conteúdo textual, o Calango usa Gemini e
        GPT nas versões mais recentes.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="guias/como-gerar-imagens-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
