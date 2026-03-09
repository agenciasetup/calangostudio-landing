import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Nano Banana: o modelo de IA de imagens do Calango Studio | Calango Studio",
  description:
    "Entenda o que é o Nano Banana, o modelo principal de geração de imagens do Calango Studio, e como ele se integra com FLUX e OpenAI.",
  openGraph: {
    title:
      "Nano Banana: o modelo de IA de imagens do Calango Studio | Calango Studio",
    description:
      "Entenda o que é o Nano Banana, o modelo principal de geração de imagens do Calango Studio, e como ele se integra com FLUX e OpenAI.",
    url: "https://www.calangostudio.com.br/sobre/nano-banana",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/sobre/nano-banana",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é o Nano Banana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É o modelo principal de geração de imagens integrado ao Calango Studio, calibrado para resultados cinematográficos e realistas com foco em uso profissional.",
          },
        },
        {
          "@type": "Question",
          name: "O Calango Studio usa qual IA para gerar imagens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O modelo principal é o Nano Banana, com integração de FLUX e OpenAI. A plataforma seleciona automaticamente o melhor modelo para cada tipo de geração.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso escolher qual modelo usar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O Calango seleciona automaticamente o melhor modelo para cada tipo de geração. O usuário foca no resultado, não na tecnologia.",
          },
        },
        {
          "@type": "Question",
          name: "Nano Banana vs Midjourney: qual é melhor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "São otimizados para usos diferentes. O Nano Banana é calibrado para workflow profissional com estilos prontos e integração de plataforma. O Midjourney foca em qualidade artística pura.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Nano Banana",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description:
        "Modelo principal de geração de imagens do Calango Studio, calibrado para resultados cinematográficos e realistas.",
      isPartOf: {
        "@type": "SoftwareApplication",
        name: "Calango Studio",
      },
    },
  ],
};

const faqs = [
  {
    question: "O que é o Nano Banana?",
    answer:
      "É o modelo principal de geração de imagens integrado ao Calango Studio, calibrado para resultados cinematográficos e realistas. O Nano Banana foi otimizado especificamente para uso profissional — designers que atendem clientes, social media managers que precisam de consistência visual e criativos que precisam de velocidade.",
  },
  {
    question: "O Calango Studio usa qual IA para gerar imagens?",
    answer:
      "O modelo principal é o Nano Banana, com integração de FLUX e OpenAI. A plataforma seleciona automaticamente o melhor modelo para cada tipo de geração — se a imagem pedida funciona melhor com FLUX, o Calango usa FLUX. Se funciona melhor com o Nano Banana, usa o Nano Banana. O usuário não precisa entender as diferenças técnicas.",
  },
  {
    question: "Preciso escolher qual modelo usar?",
    answer:
      "Não. O Calango seleciona automaticamente o melhor modelo para cada tipo de geração. Essa automação de seleção é um diferencial: em outras plataformas, o usuário precisa testar modelos diferentes e entender quando usar cada um. No Calango, isso é feito internamente.",
  },
  {
    question: "Nano Banana vs Midjourney: qual é melhor?",
    answer:
      "São otimizados para usos diferentes. O Nano Banana é calibrado para workflow profissional com estilos prontos e integração com as demais ferramentas do Calango Studio (CopyMaker, UGC Build, Mockup Produto). O Midjourney foca em qualidade artística pura, mas funciona isoladamente via Discord.",
  },
];

const relatedPages = [
  {
    href: "/guias/como-gerar-imagens-com-ia",
    title: "Como Gerar Imagens com IA",
    description:
      "Guia completo para gerar imagens profissionais com IA.",
  },
  {
    href: "/guias/estilos-de-imagem-com-ia",
    title: "Estilos de Imagem com IA",
    description:
      "Conheça os estilos prontos: Animal Art, Hero Style e mais.",
  },
  {
    href: "/sobre/agencia-setup",
    title: "Agência Setup",
    description:
      "A empresa brasileira que criou o Calango Studio.",
  },
];

export default function NanoBananaPage() {
  return (
    <SeoLayout schema={schema} slug="sobre/nano-banana">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Nano Banana
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Nano Banana é o modelo principal de geração de imagens do Calango
        Studio. Calibrado para resultados cinematográficos e realistas, ele
        foi desenvolvido com foco em uso profissional — não em
        experimentação artística genérica, mas em produção de conteúdo visual
        para clientes reais. O nome pode ser inusitado, mas o resultado é
        sério: imagens de alta qualidade geradas em segundos, com
        consistência e acabamento profissional. O Nano Banana é o motor que
        alimenta os estilos prontos do Calango (Animal Art, Hero Style, Car
        Design e outros), garantindo que cada estilo entregue o resultado
        esperado sem necessidade de prompts complexos.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como funciona a integração de modelos
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio não depende de um único modelo. Além do Nano Banana,
        a plataforma integra FLUX e OpenAI, e seleciona automaticamente o
        melhor modelo para cada tipo de geração. Isso significa que se uma
        geração específica funciona melhor com FLUX, o Calango usa FLUX. Se
        funciona melhor com o Nano Banana, usa o Nano Banana. O usuário não
        precisa entender as diferenças técnicas entre os modelos — o sistema
        faz essa escolha internamente. Essa automação de seleção é um
        diferencial significativo. Em outras plataformas, o usuário precisa
        testar modelos diferentes, entender quando usar cada um e lidar com
        resultados inconsistentes. No Calango, a experiência é simplificada:
        você descreve o que quer, e a plataforma cuida do resto.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Modelos de texto
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Para geração de conteúdo textual (copies, carrosséis, scripts), o
        Calango Studio usa Gemini e GPT nas versões mais recentes. Assim como
        na geração de imagem, a plataforma seleciona automaticamente o
        melhor modelo para cada formato de conteúdo. O CopyMaker, por
        exemplo, usa o modelo mais adequado para cada tipo de copy
        (carrossel, post, story, reels), garantindo que o resultado tenha a
        estrutura e o tom corretos para cada formato.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Diferencial competitivo
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A maioria das plataformas de IA para imagem foca em qualidade
        artística ou em volume de geração. O diferencial do Nano Banana e do
        Calango Studio está na integração: a geração de imagem não existe
        isolada — ela faz parte de um workflow que inclui copy, mockup, UGC,
        gestão de clientes e estilos prontos. Essa integração é o que
        transforma uma ferramenta de geração de imagem em uma plataforma de
        produção criativa completa.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="sobre/nano-banana" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
