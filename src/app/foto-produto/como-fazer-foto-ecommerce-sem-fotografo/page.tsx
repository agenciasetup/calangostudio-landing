import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Como Fazer Foto para E-commerce sem Fotógrafo | Calango Studio",
  description: "Crie fotos profissionais para e-commerce usando IA. Produto em cenários, fundo branco e lifestyle — sem estúdio nem fotógrafo.",
  openGraph: {
    title: "Como Fazer Foto para E-commerce sem Fotógrafo | Calango Studio",
    description: "Crie fotos profissionais para e-commerce usando IA. Produto em cenários, fundo branco e lifestyle — sem estúdio nem fotógrafo.",
    url: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-ecommerce-sem-fotografo",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-ecommerce-sem-fotografo",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como fazer foto para e-commerce sem fotógrafo",
      description: "Guia para criar fotos profissionais para loja virtual usando IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Tire foto base do produto", text: "Uma foto com boa luz, tirada com celular, já serve como referência." },
        { "@type": "HowToStep", position: 2, name: "Escolha o tipo de foto", text: "Fundo branco, lifestyle, flat lay ou cenário temático." },
        { "@type": "HowToStep", position: 3, name: "Use o Calango Studio", text: "Acesse Mockup Produto ou Estúdio de Foto para gerar a imagem." },
        { "@type": "HowToStep", position: 4, name: "Gere variações", text: "Crie múltiplas fotos em cenários diferentes para o mesmo produto." },
        { "@type": "HowToStep", position: 5, name: "Exporte e publique", text: "Use as imagens no site, marketplace e anúncios." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Foto de produto com IA é aceita em marketplaces?", acceptedAnswer: { "@type": "Answer", text: "Marketplaces exigem imagem real do produto. A IA é usada para inserir o produto real em cenários, não para criar produto fictício." } },
        { "@type": "Question", name: "Como gerar fundo branco com IA?", acceptedAnswer: { "@type": "Answer", text: "No Calango Studio, especifique fundo branco neutro como cenário. O resultado é equivalente a foto de estúdio." } },
        { "@type": "Question", name: "Quantas fotos diferentes posso gerar para o mesmo produto?", acceptedAnswer: { "@type": "Answer", text: "Sem limite prático. Diferentes cenários, ângulos e estilos para o mesmo produto." } },
        { "@type": "Question", name: "Preciso de câmera profissional para a foto original?", acceptedAnswer: { "@type": "Answer", text: "Não. Uma foto com boa luz natural tirada com celular já serve como referência." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Foto de produto com IA é aceita em marketplaces?",
    answer: "Marketplaces exigem imagem real do produto, não imagem fictícia. A IA é usada para inserir o produto real em cenários — não para criar um produto que não existe. Desde que a foto represente fielmente o produto vendido, o uso de IA para cenários e composição é aceito nas principais plataformas.",
  },
  {
    question: "Como gerar fundo branco com IA?",
    answer: "No Calango Studio, você pode especificar fundo branco neutro como cenário na geração. O resultado é equivalente a uma foto de estúdio com fundo infinito — limpo, sem sombras indesejadas, pronto para uso em marketplaces que exigem esse padrão.",
  },
  {
    question: "Quantas fotos diferentes posso gerar para o mesmo produto?",
    answer: "Sem limite prático. Você gera quantas variações quiser — diferentes cenários, ângulos e estilos para o mesmo produto. Isso é especialmente valioso para e-commerce, onde múltiplas fotos por produto aumentam a taxa de conversão.",
  },
  {
    question: "Preciso de câmera profissional para tirar a foto original do produto?",
    answer: "Não. Uma foto com boa luz natural, tirada com celular, já serve como referência para a IA gerar imagens profissionais. O importante é que a foto tenha boa iluminação e mostre o produto de forma clara. Fundo limpo ajuda, mas não é obrigatório.",
  },
];

const relatedPages = [
  { href: "/foto-produto/como-fazer-foto-produto-sem-estudio", title: "Foto sem Estúdio", description: "Fotos profissionais de produto com IA." },
  { href: "/ferramentas/ugc-com-ia", title: "UGC com IA", description: "Fotos de pessoas usando produtos para e-commerce." },
  { href: "/criativos/como-criar-ugc-para-anuncios", title: "UGC para Anúncios", description: "Fotos realistas de UGC para Facebook Ads." },
];

export default function ComoFazerFotoEcommerceSemFotografoPage() {
  return (
    <SeoLayout schema={schema} slug="foto-produto/como-fazer-foto-ecommerce-sem-fotografo">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Fazer Foto para E-commerce sem Fotógrafo
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Foto de produto é um dos maiores custos de loja virtual. Cada SKU novo exige sessão fotográfica — ou banco de imagens que nunca tem exatamente o que você precisa. Para lojas com dezenas ou centenas de produtos, o custo acumula rápido: fotógrafo, estúdio, pós-produção, e depois a mesma coisa para cada produto novo. Com IA, você gera as fotos de produto a partir de uma imagem simples do item, em qualquer cenário — fundo branco, lifestyle, flat lay, cenário temático. Tudo sem estúdio e sem fotógrafo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Tipos de foto para e-commerce
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Fundo branco (padrão marketplace)</strong> — limpo, neutro, sem distração. Obrigatório em marketplaces como Mercado Livre e Amazon. O Calango Studio gera esse padrão com qualidade de estúdio.</li>
        <li><strong className="text-white">Lifestyle (produto em uso)</strong> — contexto real que ajuda o consumidor a se imaginar usando. Gera mais conversão que fundo branco puro.</li>
        <li><strong className="text-white">Flat lay</strong> — produto disposto em superfície com elementos complementares. Muito usado para moda, cosméticos e alimentos.</li>
        <li><strong className="text-white">Cenário temático</strong> — produto em ambiente específico (cozinha, escritório, ao ar livre). Ideal para comunicar estilo de vida associado ao produto.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve cada tipo
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Mockup Produto e o Estúdio de Foto cobrem todos os formatos de foto para e-commerce. Você escolhe o tipo de imagem e gera — sem precisar montar set, contratar fotógrafo ou fazer pós-produção manual.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O processo é simples: tire uma foto do produto com celular (boa luz, fundo neutro), suba no Calango Studio, descreva o cenário desejado e gere. Em minutos, você tem fotos profissionais prontas para uso. Para catálogos com muitos SKUs, essa velocidade muda a dinâmica do negócio — cada produto novo pode ter fotos profissionais no mesmo dia em que chega ao estoque.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="mockup-produto" />
      <ResultadosGaleria />
      <CtaBanner slug="foto-produto/como-fazer-foto-ecommerce-sem-fotografo" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
