import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Colocar Produto em Cenário com IA | Calango Studio",
  description: "Insira qualquer produto em cenários profissionais usando IA. Praia, escritório, natureza, lifestyle — gerados em minutos no Calango Studio.",
  openGraph: {
    title: "Como Colocar Produto em Cenário com IA | Calango Studio",
    description: "Insira qualquer produto em cenários profissionais usando IA. Praia, escritório, natureza, lifestyle — gerados em minutos no Calango Studio.",
    url: "https://www.calangostudio.com.br/foto-produto/como-colocar-produto-em-cenario-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/foto-produto/como-colocar-produto-em-cenario-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como colocar produto em cenário com IA",
      description: "Guia para inserir produtos em cenários profissionais usando IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Prepare a imagem do produto", text: "Tenha a imagem com fundo limpo, preferencialmente." },
        { "@type": "HowToStep", position: 2, name: "Acesse Mockup Produto", text: "No Calango Studio, acesse a ferramenta Mockup Produto." },
        { "@type": "HowToStep", position: 3, name: "Upload da imagem", text: "Faça upload da imagem do produto." },
        { "@type": "HowToStep", position: 4, name: "Descreva o cenário", text: "Descreva com detalhes: material, iluminação, estilo visual." },
        { "@type": "HowToStep", position: 5, name: "Gere e refine", text: "Gere e refine com novas gerações se necessário." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "A IA consegue colocar qualquer produto em qualquer cenário?", acceptedAnswer: { "@type": "Answer", text: "Para a maioria dos produtos físicos, sim. Formas muito irregulares podem exigir mais iterações." } },
        { "@type": "Question", name: "Como descrever o cenário para o melhor resultado?", acceptedAnswer: { "@type": "Answer", text: "Seja específico: material de superfície, iluminação, elementos ao redor e estilo visual." } },
        { "@type": "Question", name: "Preciso saber usar Photoshop para isso?", acceptedAnswer: { "@type": "Answer", text: "Não. O processo inteiro acontece dentro do Calango Studio." } },
        { "@type": "Question", name: "Quantas gerações preciso fazer até ter o resultado certo?", acceptedAnswer: { "@type": "Answer", text: "Em média 2 a 4 gerações. Refinar a descrição entre gerações acelera o resultado." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "A IA consegue colocar qualquer produto em qualquer cenário?",
    answer: "Para a maioria dos produtos físicos, sim. Produtos com formas simples e reconhecíveis — garrafas, caixas, embalagens, roupas, eletrônicos — funcionam perfeitamente. Produtos com formas muito irregulares ou transparências complexas podem exigir mais iterações para ficarem convincentes, mas o resultado final geralmente compensa o esforço.",
  },
  {
    question: "Como descrever o cenário para conseguir o melhor resultado?",
    answer: "Seja específico: material de superfície (madeira rústica, mármore, concreto), tipo de iluminação (natural suave, luz de estúdio, golden hour), elementos ao redor (xícara, plantas, livros) e estilo visual geral (minimalista, aconchegante, premium). Quanto mais detalhe no prompt, mais preciso o resultado.",
  },
  {
    question: "Preciso saber usar Photoshop para isso?",
    answer: "Não. O processo inteiro acontece dentro do Calango Studio — upload, descrição do cenário e geração. Não precisa recortar, compor ou ajustar manualmente. A IA faz a composição completa, incluindo iluminação e sombras consistentes com o cenário.",
  },
  {
    question: "Quantas gerações preciso fazer até ter o resultado certo?",
    answer: "Em média 2 a 4 gerações. A primeira geração já dá uma boa indicação da direção. Refinar a descrição do cenário entre as gerações — adicionando ou removendo detalhes — acelera a convergência para o resultado ideal. Com prática, muitos usuários acertam na primeira ou segunda tentativa.",
  },
];

const relatedPages = [
  { href: "/foto-produto/como-fazer-foto-produto-sem-estudio", title: "Foto sem Estúdio", description: "Fotos profissionais de produto com IA." },
  { href: "/foto-produto/como-criar-mockup-embalagem-ia", title: "Mockup de Embalagem", description: "Gere mockups de embalagem sem amostra física." },
  { href: "/ferramentas/sessao-de-fotos-com-ia", title: "Sessão de Fotos com IA", description: "Sessões fotográficas completas geradas por IA." },
];

export default function ComoColocarProdutoEmCenarioComIaPage() {
  return (
    <SeoLayout schema={schema} slug="foto-produto/como-colocar-produto-em-cenario-com-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Colocar Produto em Cenário com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Colocar um produto em um cenário específico exigia, antes da IA, produção fotográfica no local ou composição manual no Photoshop — o que consome horas de trabalho especializado. Alinhar iluminação, perspectiva, sombras e reflexos entre o produto e o cenário era trabalho de profissional experiente. Com IA, você descreve o cenário e gera a imagem em segundos. O produto é inserido com iluminação e sombras consistentes automaticamente. Para e-commerce, redes sociais e anúncios, o resultado é indistinguível de uma foto produzida — e leva uma fração do tempo e do custo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: produto em cenário com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Tenha a imagem do produto com fundo limpo</strong> — preferencialmente fundo branco ou transparente. Isso facilita a inserção natural no cenário gerado.</li>
        <li><strong className="text-white">No Calango Studio, acesse Mockup Produto</strong> — a ferramenta é projetada para esse tipo de composição.</li>
        <li><strong className="text-white">Faça upload da imagem do produto</strong> — suba a foto que será inserida no cenário.</li>
        <li><strong className="text-white">Descreva o cenário com detalhes</strong> — ex: &ldquo;mesa de madeira rústica com luz natural suave, xícara de café ao lado, estilo café aconchegante&rdquo;. Quanto mais específico, mais preciso.</li>
        <li><strong className="text-white">Gere e refine</strong> — a primeira geração mostra a direção. Ajuste a descrição e gere novamente se necessário.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Exemplos de cenários e quando usar cada um
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Natureza/ar livre</strong> — produtos de bem-estar, alimentos naturais, cosméticos orgânicos. Transmite frescor e naturalidade.</li>
        <li><strong className="text-white">Escritório moderno</strong> — produtos de tecnologia, papelaria, ergonomia. Comunica profissionalismo e produtividade.</li>
        <li><strong className="text-white">Cozinha</strong> — alimentos, utensílios, eletrodomésticos. Contexto de uso imediato que facilita a identificação do consumidor.</li>
        <li><strong className="text-white">Mesa de café</strong> — bebidas, livros, produtos lifestyle. Transmite momento de pausa, conforto, lifestyle aspiracional.</li>
        <li><strong className="text-white">Fundo neutro premium</strong> — joias, perfumes, produtos de luxo. Minimalismo que destaca o produto sem distrações.</li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="foto-produto/como-colocar-produto-em-cenario-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
