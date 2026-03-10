import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Estilos de Imagem com IA: Animal Art, Hero Style, Car Design | Calango Studio",
  description:
    "Conheça os estilos de geração de imagem com IA do Calango Studio: Animal Art, Hero Style, Car Design, Business Style e mais. Um clique, resultado profissional.",
  openGraph: {
    title:
      "Estilos de Imagem com IA: Animal Art, Hero Style, Car Design | Calango Studio",
    description:
      "Conheça os estilos de geração de imagem com IA do Calango Studio: Animal Art, Hero Style, Car Design, Business Style e mais. Um clique, resultado profissional.",
    url: "https://www.calangostudio.com.br/guias/estilos-de-imagem-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/estilos-de-imagem-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é Animal Art com IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É um estilo de geração que cria personagens animais com feições humanas, estilizados e com personalidade. Usado para mascotes de marca, posts criativos e identidade visual divertida.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o Hero Style no Calango?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você descreve a cena ou personagem e o estilo Hero aplica iluminação cinematográfica, poses de impacto e estética heroica automaticamente.",
      },
    },
    {
      "@type": "Question",
      name: "Posso criar meu próprio estilo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. No modo Personalizado, você fornece imagens de referência e descreve o estilo desejado. A IA aprende a partir dessas referências e gera imagens com consistência.",
      },
    },
    {
      "@type": "Question",
      name: "Qual estilo usar para posts de moda ou lifestyle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classic Style para elegância atemporal, ou Personalizado com referências específicas da marca. Business Style também funciona bem para lifestyle corporativo.",
      },
    },
  ],
};

const faqs = [
  {
    question: "O que é Animal Art com IA?",
    answer:
      "É um estilo de geração que cria personagens animais com feições humanas, estilizados e com personalidade. Muito usado para mascotes de marca, posts criativos e identidade visual divertida. O resultado são animais antropomorfizados com expressões marcantes, ideais para marcas que querem um visual único e memorável.",
  },
  {
    question: "Como funciona o Hero Style no Calango?",
    answer:
      "Você descreve a cena ou personagem e o estilo Hero aplica automaticamente iluminação cinematográfica, poses de impacto e estética heroica. Ideal para marcas com posicionamento forte, perfis de liderança e campanhas motivacionais. O resultado tem visual de pôster de cinema.",
  },
  {
    question: "Posso criar meu próprio estilo?",
    answer:
      "Sim. No modo Personalizado, você fornece imagens de referência e descreve o estilo desejado. A IA aprende a partir dessas referências e gera imagens com consistência estilística, permitindo criar uma linguagem visual única para cada marca.",
  },
  {
    question: "Qual estilo usar para posts de moda ou lifestyle?",
    answer:
      "Classic Style para elegância atemporal e sofisticação, ou Personalizado com referências específicas da marca. Business Style funciona bem para lifestyle corporativo. Para marcas de moda premium, o Classic é o ponto de partida mais forte.",
  },
];

const relatedPages = [
  {
    href: "/guias/como-gerar-imagens-com-ia",
    title: "Como Gerar Imagens com IA",
    description:
      "Guia completo passo a passo para gerar imagens profissionais com IA.",
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
      "O modelo de IA principal do Calango Studio para geração de imagens.",
  },
];

export default function EstilosDeImagemComIaPage() {
  return (
    <SeoLayout schema={schema} slug="guias/estilos-de-imagem-com-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Estilos de Imagem com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Uma das maiores barreiras para usar IA na geração de imagens é a
        complexidade dos prompts. Plataformas como Midjourney exigem
        descrições detalhadas em inglês, com parâmetros técnicos de
        iluminação, câmera, resolução e estilo. Para profissionais que
        precisam de velocidade, essa curva de aprendizado é um problema. Os
        estilos prontos do Calango Studio eliminam essa barreira. Em vez de
        escrever um prompt de 200 palavras, você seleciona um estilo com um
        clique e descreve apenas o que quer ver na imagem. O estilo cuida de
        toda a calibragem técnica. iluminação, composição, paleta de cores,
        nível de realismo. O resultado é profissional e consistente, sem
        exigir conhecimento técnico de geração de imagem.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que são estilos prontos
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Estilos prontos são presets de geração de imagem que definem a
        estética visual automaticamente. Cada estilo tem parâmetros de
        iluminação, composição, paleta de cores e nível de detalhe já
        calibrados para um tipo específico de resultado. O usuário precisa
        apenas escolher o estilo e descrever o conteúdo da imagem. a parte
        técnica fica por conta da IA.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Animal Art
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Personagens animais antropomorfizados, com personalidade e expressões
        humanas. Animais estilizados que vestem roupas, usam acessórios e
        têm atitude. Muito usado para mascotes de marca, posts criativos e
        identidade visual divertida. O estilo gera resultados com alto nível
        de detalhe e acabamento, ideais para marcas que querem se diferenciar
        com uma identidade visual única e memorável.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Hero Style
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Estética cinematográfica e heroica. Figuras humanas em poses de
        impacto, iluminação dramática, composição épica. Ideal para marcas
        com posicionamento forte, perfis de liderança, campanhas
        motivacionais, material para coaches e mentores. O resultado tem
        visual de pôster de cinema. grandioso, impactante e profissional.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Car Design
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Visualizações premium de veículos em cenários estilizados. Carros em
        ambientes urbanos, estradas cinematográficas, garagens de luxo. Para
        concessionárias, marcas automotivas, perfis de lifestyle automotivo
        e conteúdo de revistas especializadas. O acabamento é publicitário,
        com reflexos, iluminação e ângulos de catálogo premium.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Business Style
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Pessoas e ambientes corporativos realistas. Profissionais em
        escritórios modernos, reuniões, apresentações, ambientes de
        coworking. Para consultores, empresas B2B, conteúdo profissional no
        LinkedIn, materiais de treinamento corporativo. O estilo prioriza
        naturalidade e credibilidade.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Craft Style
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Estética artesanal e orgânica. Texturas naturais, cores terrosas,
        composições com elementos de natureza e autenticidade. Para marcas
        de produtos naturais, alimentação saudável, artesanato, cosméticos
        orgânicos e tudo que comunique origem, cuidado e processo manual.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Classic Style
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-6">
        Elegante, atemporal, sofisticado. Composições limpas com paleta
        refinada, iluminação suave e atenção ao detalhe. Para marcas premium,
        moda, joalheria, arquitetura, hotéis de luxo e tudo que exige
        sofisticação visual sem exagero.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-8">
        Personalizado
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O usuário fornece imagens de referência e define o próprio estilo. A
        IA aprende a partir das referências e gera imagens com consistência
        estilística. Ideal para marcas que já têm uma identidade visual
        definida e precisam que a IA gere conteúdo dentro dessa linguagem
        específica.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="guias/estilos-de-imagem-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
