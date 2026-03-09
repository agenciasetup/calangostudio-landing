import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Como Criar Mockup de Embalagem com IA | Calango Studio",
  description: "Gere mockups de embalagem profissionais com IA. Apresente o produto em cenários reais sem precisar de amostra física ou estúdio.",
  openGraph: {
    title: "Como Criar Mockup de Embalagem com IA | Calango Studio",
    description: "Gere mockups de embalagem profissionais com IA. Apresente o produto em cenários reais sem precisar de amostra física ou estúdio.",
    url: "https://www.calangostudio.com.br/foto-produto/como-criar-mockup-embalagem-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/foto-produto/como-criar-mockup-embalagem-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como criar mockup de embalagem com IA",
      description: "Guia para gerar mockups de embalagem profissionais com IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Exporte o design", text: "Exporte o design da embalagem com o visual aplicado." },
        { "@type": "HowToStep", position: 2, name: "Acesse Mockup Produto", text: "No Calango Studio, acesse a ferramenta Mockup Produto." },
        { "@type": "HowToStep", position: 3, name: "Upload do design", text: "Faça upload do arquivo de design da embalagem." },
        { "@type": "HowToStep", position: 4, name: "Escolha o cenário", text: "Descreva o cenário: prateleira, mesa, ambiente natural." },
        { "@type": "HowToStep", position: 5, name: "Gere e use", text: "Gere o mockup e use para apresentação, aprovação ou anúncio." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Para que serve um mockup de embalagem?", acceptedAnswer: { "@type": "Answer", text: "Para apresentar visualmente como o produto vai parecer antes da produção. Usado em aprovação, apresentação e conteúdo de lançamento." } },
        { "@type": "Question", name: "Qual a diferença entre mockup com IA e template de mockup?", acceptedAnswer: { "@type": "Answer", text: "Template é fixo. Com IA, o cenário é gerado de acordo com o produto e o ambiente que você descreve." } },
        { "@type": "Question", name: "Posso usar o mockup para anúncio?", acceptedAnswer: { "@type": "Answer", text: "Sim. O resultado pode ser exportado e usado diretamente em Facebook Ads, Instagram Ads e e-commerce." } },
        { "@type": "Question", name: "Preciso do design final da embalagem para gerar o mockup?", acceptedAnswer: { "@type": "Answer", text: "Idealmente sim. Mas é possível gerar uma visualização conceitual com design aproximado." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Para que serve um mockup de embalagem?",
    answer: "Para apresentar visualmente como o produto vai parecer antes da produção. Usado em aprovação de cliente, apresentação para investidores e conteúdo de lançamento. Em vez de esperar a amostra física, você valida o design visualmente em cenários reais — economizando tempo e dinheiro no processo de aprovação.",
  },
  {
    question: "Qual a diferença entre mockup com IA e template de mockup?",
    answer: "Template é fixo — centenas de marcas usam os mesmos ângulos e cenários. Com IA, o cenário é gerado de acordo com o produto e o ambiente que você descreve — não existe limitação de ângulo, iluminação ou estilo. Cada mockup é único para aquele produto e aquela marca.",
  },
  {
    question: "Posso usar o mockup para anúncio?",
    answer: "Sim. O resultado gerado pelo Calango Studio pode ser exportado e usado diretamente em Facebook Ads, Instagram Ads e e-commerce. A qualidade da imagem gerada é suficiente para uso em mídia digital — o que cobre a maioria dos casos de uso de marcas pequenas e médias.",
  },
  {
    question: "Preciso do design final da embalagem para gerar o mockup?",
    answer: "Idealmente sim — o mockup é mais convincente com o design real aplicado. Mas é possível gerar uma visualização conceitual com design aproximado para validar o conceito antes de finalizar o projeto gráfico. Isso é útil na fase de aprovação inicial com o cliente.",
  },
];

const relatedPages = [
  { href: "/foto-produto/como-fazer-foto-produto-sem-estudio", title: "Foto sem Estúdio", description: "Fotos profissionais de produto com IA, sem estúdio." },
  { href: "/foto-produto/como-colocar-produto-em-cenario-com-ia", title: "Produto em Cenário", description: "Insira produtos em cenários profissionais com IA." },
  { href: "/ferramentas/mockup-produto-ia", title: "Mockup de Produto com IA", description: "Ferramenta Mockup Produto do Calango Studio." },
];

export default function ComoCriarMockupEmbalagemIaPage() {
  return (
    <SeoLayout schema={schema} slug="foto-produto/como-criar-mockup-embalagem-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Criar Mockup de Embalagem com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Antes de produzir uma embalagem, marcas precisam validar visualmente o design. Ver como vai ficar na prateleira, na mão do consumidor, no contexto de uso. O processo tradicional: esperar amostra física (dias ou semanas) ou contratar designer 3D para renderização (custo elevado). Com IA, você gera o mockup em minutos, com a embalagem em cenários reais — antes mesmo de imprimir a primeira unidade. Isso acelera o ciclo de aprovação e permite testar múltiplas opções visuais antes de comprometer com a produção.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: mockup de embalagem com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Exporte o design da embalagem</strong> — arquivo com o visual aplicado, preferencialmente em alta resolução. Pode ser o design final ou uma versão de aprovação.</li>
        <li><strong className="text-white">No Calango Studio, acesse Mockup Produto</strong> — a ferramenta aceita a imagem da embalagem como base para geração.</li>
        <li><strong className="text-white">Faça upload do design</strong> — suba o arquivo da embalagem que será visualizada no mockup.</li>
        <li><strong className="text-white">Escolha ou descreva o cenário</strong> — prateleira de supermercado, mesa de madeira, bancada de cozinha, ambiente natural. Quanto mais específico, mais convincente o resultado.</li>
        <li><strong className="text-white">Gere o mockup e use</strong> — para apresentação ao cliente, post de lançamento, anúncio ou material de venda.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Quando usar mockup de embalagem com IA
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O mockup de embalagem com IA é especialmente útil em três momentos: na fase de aprovação (validar o design antes de produzir), no lançamento (criar conteúdo visual antes de ter o produto físico em mãos) e no marketing contínuo (gerar variações de cenário para posts, anúncios e catálogos sem nova produção fotográfica). Para marcas que lançam produtos com frequência, a economia de tempo e custo é significativa — cada novo SKU não exige nova sessão de fotos.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="mockup-produto" />
      <ResultadosGaleria />
      <CtaBanner slug="foto-produto/como-criar-mockup-embalagem-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
