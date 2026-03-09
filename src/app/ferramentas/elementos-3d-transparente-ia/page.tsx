import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Elementos 3D com Fundo Transparente: PNG com IA | Calango Studio",
  description:
    "Gere elementos e objetos 3D em PNG com fundo transparente usando IA. Ideal para composições, criativos e posts. Ferramenta Assets 3D do Calango Studio.",
  openGraph: {
    title:
      "Elementos 3D com Fundo Transparente: PNG com IA | Calango Studio",
    description:
      "Gere elementos e objetos 3D em PNG com fundo transparente usando IA. Ideal para composições, criativos e posts. Ferramenta Assets 3D do Calango Studio.",
    url: "https://www.calangostudio.com.br/ferramentas/elementos-3d-transparente-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/ferramentas/elementos-3d-transparente-ia",
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
        "Gere elementos 3D em PNG com fundo transparente usando IA para composições e criativos.",
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
          name: "O que são elementos 3D com fundo transparente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "São objetos ou formas geradas em 3D exportados como PNG com canal alfa (transparência). Podem ser usados em composições visuais, sobrepostos em fotos, inseridos em criativos e posts sem fundo visível.",
          },
        },
        {
          "@type": "Question",
          name: "Como criar PNG transparente com IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No Assets 3D do Calango Studio, você descreve o elemento desejado e a IA gera o objeto em 3D com fundo transparente, pronto para uso em composições.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso do Photoshop para usar esses assets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não necessariamente. O PNG já vem com transparência e pode ser usado diretamente em qualquer editor, incluindo Canva, Figma ou ferramentas mais simples.",
          },
        },
        {
          "@type": "Question",
          name: "Que tipos de objetos 3D posso gerar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esferas, cubos, objetos flutuantes, elementos abstratos, formas geométricas, ícones 3D, objetos temáticos e muito mais. A variedade depende apenas da sua descrição.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que são elementos 3D com fundo transparente?",
    answer:
      "São objetos ou formas geradas em 3D exportados como PNG com canal alfa (transparência). Podem ser usados em composições visuais, sobrepostos em fotos, inseridos em criativos e posts sem fundo visível. É o tipo de asset que dá profundidade e sofisticação a qualquer peça visual.",
  },
  {
    question: "Como criar PNG transparente com IA?",
    answer:
      "No Assets 3D do Calango Studio, você descreve o elemento desejado e a IA gera o objeto em 3D com fundo transparente, pronto para uso em composições. O processo leva segundos e não exige conhecimento de modelagem 3D, Cinema 4D ou Blender.",
  },
  {
    question: "Preciso do Photoshop para usar esses assets?",
    answer:
      "Não necessariamente. O PNG já vem com transparência e pode ser usado diretamente em qualquer editor: Canva, Figma, Photoshop, Illustrator ou até apresentações no Google Slides. Basta arrastar e posicionar.",
  },
  {
    question: "Que tipos de objetos 3D posso gerar?",
    answer:
      "Esferas, cubos, objetos flutuantes, elementos abstratos, formas geométricas, ícones 3D, objetos temáticos (como frutas, gadgets, elementos de moda) e muito mais. A variedade depende apenas da sua descrição — a IA gera o que você pedir.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Todas as ferramentas de IA para designers em uma plataforma.",
  },
  {
    href: "/ferramentas/mockup-produto-ia",
    title: "Mockup de Produto com IA",
    description:
      "Mockups profissionais gerados por IA, sem Photoshop.",
  },
  {
    href: "/guias/estilos-de-imagem-com-ia",
    title: "Estilos de Imagem com IA",
    description:
      "Conheça os estilos de geração: Animal Art, Hero Style e mais.",
  },
];

export default function Elementos3dTransparenteIaPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Elementos 3D com Fundo Transparente
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Assets 3D com fundo transparente são peças fundamentais no arsenal de
        qualquer designer. Eles adicionam profundidade, dimensão e sofisticação
        a composições visuais — seja um post de Instagram, um banner
        publicitário, uma apresentação corporativa ou um criativo para
        anúncios. Tradicionalmente, criar esses elementos exige softwares de
        modelagem 3D como Cinema 4D, Blender ou 3ds Max, além de conhecimento
        técnico significativo em iluminação, materiais e renderização. O
        processo pode levar horas para um único elemento. Com inteligência
        artificial, essa barreira caiu. Agora é possível descrever o elemento
        que você precisa em linguagem natural e receber um PNG com fundo
        transparente em segundos, pronto para ser usado em qualquer
        composição. Sem instalar software pesado, sem curva de aprendizado,
        sem renderização demorada.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que são assets 3D transparentes
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Assets 3D transparentes são imagens de objetos tridimensionais
        renderizados e exportados em formato PNG com canal alfa — ou seja, sem
        fundo. Isso permite que o elemento seja sobreposto a qualquer imagem
        ou cenário sem bordas visíveis. São amplamente usados em design
        gráfico para criar composições com profundidade, posts com elementos
        flutuantes, banners com objetos que &ldquo;saem&rdquo; da tela e criativos que se
        destacam pela dimensionalidade. A demanda por esses assets é alta, mas
        a produção tradicional sempre foi lenta e cara.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        A ferramenta Assets 3D do Calango Studio simplifica todo o processo
        de geração de elementos 3D com transparência.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Como funciona o Assets 3D
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">Descrição em texto</strong> — você
          descreve o elemento que precisa em linguagem natural (ex: &ldquo;esfera
          metálica dourada com reflexos&rdquo;).
        </li>
        <li>
          <strong className="text-white">Geração instantânea</strong> — a IA
          gera o objeto em 3D com fundo transparente em segundos.
        </li>
        <li>
          <strong className="text-white">PNG pronto para uso</strong> — o
          arquivo vem com canal alfa, pronto para arrastar e usar em
          qualquer editor.
        </li>
        <li>
          <strong className="text-white">Casos de uso</strong> — posts de
          Instagram, banners, criativos publicitários, apresentações,
          composições visuais complexas.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
