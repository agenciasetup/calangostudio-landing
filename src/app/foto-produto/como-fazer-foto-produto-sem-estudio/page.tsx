import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Fazer Foto de Produto sem Estúdio usando IA | Calango Studio",
  description: "Crie fotos profissionais de produto sem estúdio fotográfico. IA gera imagens de produto em cenários realistas em minutos.",
  openGraph: {
    title: "Como Fazer Foto de Produto sem Estúdio usando IA | Calango Studio",
    description: "Crie fotos profissionais de produto sem estúdio fotográfico. IA gera imagens de produto em cenários realistas em minutos.",
    url: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-produto-sem-estudio",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/foto-produto/como-fazer-foto-produto-sem-estudio",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como fazer foto de produto sem estúdio usando IA",
      description: "Guia para criar fotos profissionais de produto com IA sem estúdio fotográfico.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Fotografe o produto", text: "Tire uma foto do produto em qualquer fundo com boa iluminação." },
        { "@type": "HowToStep", position: 2, name: "Acesse o Calango Studio", text: "Use o Estúdio de Foto ou Mockup Produto." },
        { "@type": "HowToStep", position: 3, name: "Upload da imagem", text: "Faça upload da imagem do produto." },
        { "@type": "HowToStep", position: 4, name: "Escolha o cenário", text: "Descreva ou selecione o cenário desejado." },
        { "@type": "HowToStep", position: 5, name: "Gere e exporte", text: "Gere a imagem final e exporte para uso." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "A foto de produto gerada por IA parece profissional?", acceptedAnswer: { "@type": "Answer", text: "Sim, para a maioria dos usos digitais. Qualidade suficiente para e-commerce, anúncios e redes sociais." } },
        { "@type": "Question", name: "Preciso remover o fundo do produto antes?", acceptedAnswer: { "@type": "Answer", text: "Para melhores resultados, sim. Uma foto com fundo limpo facilita a inserção no cenário." } },
        { "@type": "Question", name: "Quantos cenários diferentes posso gerar para o mesmo produto?", acceptedAnswer: { "@type": "Answer", text: "Tantos quanto quiser. Cada geração é um cenário diferente." } },
        { "@type": "Question", name: "Foto de produto com IA funciona para qualquer tipo de produto?", acceptedAnswer: { "@type": "Answer", text: "Para produtos físicos — embalagem, moda, acessório, alimento, eletrônico — sim." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "A foto de produto gerada por IA parece profissional?",
    answer: "Sim, para a maioria dos usos digitais. O Calango Studio gera imagens de produto em cenários realistas com qualidade suficiente para e-commerce, anúncios e redes sociais. Para catálogos impressos de alta resolução, a resolução pode precisar de upscale — mas para digital, o resultado é profissional.",
  },
  {
    question: "Preciso remover o fundo do produto antes?",
    answer: "Para melhores resultados, sim. Uma foto com fundo limpo facilita a inserção no cenário gerado pela IA. Mas não precisa ser perfeito — o Calango Studio lida bem com fotos em fundo branco ou neutro tiradas com celular.",
  },
  {
    question: "Quantos cenários diferentes posso gerar para o mesmo produto?",
    answer: "Tantos quanto quiser. Cada geração é um cenário diferente — você pode criar variações para Instagram, site, anúncio e apresentação na mesma sessão. Um único produto pode ter dezenas de fotos em contextos diferentes, sem custo adicional por geração.",
  },
  {
    question: "Foto de produto com IA funciona para qualquer tipo de produto?",
    answer: "Para produtos físicos — embalagem, moda, acessório, alimento, eletrônico — sim. Produtos com formas muito complexas ou transparentes (como vidro) podem exigir mais iterações para resultados convincentes. Mas a maioria dos produtos de e-commerce funciona perfeitamente.",
  },
];

const relatedPages = [
  { href: "/foto-produto/como-criar-mockup-embalagem-ia", title: "Mockup de Embalagem", description: "Gere mockups de embalagem sem amostra física." },
  { href: "/foto-produto/como-fazer-foto-ecommerce-sem-fotografo", title: "Foto para E-commerce", description: "Fotos profissionais para loja virtual sem fotógrafo." },
  { href: "/ferramentas/mockup-produto-ia", title: "Mockup de Produto com IA", description: "Ferramenta Mockup Produto do Calango Studio." },
];

export default function ComoFazerFotoProdutoSemEstudioPage() {
  return (
    <SeoLayout schema={schema} slug="foto-produto/como-fazer-foto-produto-sem-estudio">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Fazer Foto de Produto sem Estúdio
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Foto de produto profissional costumava exigir estúdio, luz, fundo e fotógrafo. Para e-commerce, marcas pequenas e freelancers, esse custo é proibitivo — especialmente quando o catálogo tem dezenas de SKUs e cada um precisa de múltiplas fotos. Com IA, você gera fotos de produto em cenários realistas com apenas a imagem do produto como referência. Uma foto simples tirada com celular se transforma em imagem de catálogo profissional em minutos, sem estúdio, sem fotógrafo, sem pós-produção manual.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: foto de produto com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Fotografe o produto</strong> — em qualquer fundo (branco, neutro ou até caixa), com boa iluminação natural. Celular com câmera decente já resolve.</li>
        <li><strong className="text-white">No Calango Studio, acesse Estúdio de Foto ou Mockup Produto</strong> — escolha a ferramenta conforme o resultado desejado: foto em cenário (Estúdio) ou mockup de apresentação (Mockup Produto).</li>
        <li><strong className="text-white">Faça upload da imagem</strong> — suba a foto do produto que será usada como referência.</li>
        <li><strong className="text-white">Escolha ou descreva o cenário</strong> — mesa de madeira, prateleira, natureza, fundo branco premium, lifestyle. Quanto mais específico, melhor.</li>
        <li><strong className="text-white">Gere e exporte</strong> — a IA gera a imagem final com iluminação e composição realistas. Exporte e use.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Quando a IA é suficiente e quando o fotógrafo faz sentido
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Para e-commerce, redes sociais, ads e apresentações: IA resolve com qualidade profissional. O custo por foto é praticamente zero depois da assinatura, e a velocidade permite gerar dezenas de variações em uma sessão. Para editorial de moda de alto padrão, campanha de grande escala com necessidade de aprovação rigorosa ou conteúdo que precisa de modelo real em movimento: fotógrafo profissional ainda tem vantagem em controle criativo total. A estratégia mais eficiente combina os dois: IA para volume e variação, fotógrafo para peças-chave.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="foto-produto/como-fazer-foto-produto-sem-estudio" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
