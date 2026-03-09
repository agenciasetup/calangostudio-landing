import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Criar UGC para Anúncios com IA: sem modelo, sem produção | Calango Studio",
  description: "Como produzir UGC para Facebook Ads e Instagram Ads usando IA. Fotos realistas de pessoas com produtos sem contratar criador de conteúdo.",
  openGraph: {
    title: "Como Criar UGC para Anúncios com IA: sem modelo, sem produção | Calango Studio",
    description: "Como produzir UGC para Facebook Ads e Instagram Ads usando IA. Fotos realistas de pessoas com produtos sem contratar criador de conteúdo.",
    url: "https://www.calangostudio.com.br/criativos/como-criar-ugc-para-anuncios",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/como-criar-ugc-para-anuncios",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como criar UGC para anúncios com IA",
      description: "Guia para produzir fotos realistas de UGC com IA para uso em anúncios pagos.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Acesse o UGC Build", text: "No Calango Studio, abra a ferramenta UGC Build." },
        { "@type": "HowToStep", position: 2, name: "Upload do produto", text: "Faça upload da imagem do produto." },
        { "@type": "HowToStep", position: 3, name: "Descreva o contexto", text: "Descreva a cena: pessoa usando, segurando, ambiente." },
        { "@type": "HowToStep", position: 4, name: "Gere a imagem", text: "Gere — o resultado tem aparência de foto de iPhone, sem aspecto de IA." },
        { "@type": "HowToStep", position: 5, name: "Exporte e use", text: "Exporte e use diretamente no gerenciador de anúncios." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "UGC gerado por IA é aceito no Facebook Ads?", acceptedAnswer: { "@type": "Answer", text: "Sim. O Meta não restringe imagens geradas por IA nas políticas de anúncio, desde que o conteúdo respeite as diretrizes gerais." } },
        { "@type": "Question", name: "A foto vai parecer gerada por IA?", acceptedAnswer: { "@type": "Answer", text: "O UGC Build do Calango Studio é calibrado para gerar imagens com aparência orgânica e natural — sem artefatos visuais comuns de IA." } },
        { "@type": "Question", name: "Posso usar UGC com IA para qualquer tipo de produto?", acceptedAnswer: { "@type": "Answer", text: "Sim. Funciona para produtos físicos em geral: moda, beleza, alimentos, eletrônicos, acessórios." } },
        { "@type": "Question", name: "Qual a diferença entre UGC real e UGC com IA para anúncios?", acceptedAnswer: { "@type": "Answer", text: "O resultado visual pode ser muito similar. A diferença prática é custo e velocidade." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "UGC gerado por IA é aceito no Facebook Ads?",
    answer: "Sim. O Meta não restringe imagens geradas por IA nas políticas de anúncio, desde que o conteúdo respeite as diretrizes gerais da plataforma. A imagem precisa ser verdadeira em relação ao produto anunciado — não pode criar expectativas falsas. Dentro desses limites, UGC gerado por IA é tratado como qualquer outro criativo.",
  },
  {
    question: "A foto vai parecer gerada por IA?",
    answer: "O UGC Build do Calango Studio é calibrado para gerar imagens com aparência orgânica e natural — sem os artefatos visuais comuns em ferramentas genéricas de IA. O resultado tem aparência de foto casual de celular, que é exatamente o que o público espera ver em conteúdo UGC. Essa naturalidade é o que faz o formato funcionar em anúncios.",
  },
  {
    question: "Posso usar UGC com IA para qualquer tipo de produto?",
    answer: "Sim. O UGC Build funciona para produtos físicos em geral: moda, beleza, alimentos, eletrônicos, acessórios. Produtos com formas simples e reconhecíveis geram os melhores resultados. Para cada tipo de produto, você descreve o contexto de uso e a IA adapta a cena.",
  },
  {
    question: "Qual a diferença entre UGC real e UGC com IA para anúncios?",
    answer: "O resultado visual pode ser muito similar quando a ferramenta é boa. A diferença prática é custo e velocidade: UGC real leva dias (briefing, envio de produto, gravação, edição) e tem custo de produção por peça. UGC com IA leva minutos e cabe em uma assinatura mensal. Para teste de criativos em volume, a IA é significativamente mais viável.",
  },
];

const relatedPages = [
  { href: "/ferramentas/ugc-com-ia", title: "UGC com IA", description: "Ferramenta completa de UGC Build do Calango Studio." },
  { href: "/criativos/criativos-para-facebook-ads", title: "Criativos para Facebook Ads", description: "Como produzir criativos para anúncios em escala." },
  { href: "/criativos/como-testar-criativos-sem-designer", title: "Testar Criativos sem Designer", description: "Produza e teste variações sem depender de designer." },
];

export default function ComoCriarUgcParaAnunciosPage() {
  return (
    <SeoLayout schema={schema} slug="criativos/como-criar-ugc-para-anuncios">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Criar UGC para Anúncios com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        UGC (User Generated Content) é um dos formatos que mais converte em anúncios pagos porque parece orgânico — não parece propaganda. Uma foto de alguém usando um produto, tirada com celular, em ambiente real, gera mais confiança do que um banner produzido. O problema: produzir UGC real exige contratar criadores de conteúdo, enviar produto, aguardar entrega e editar. Para cada variação, o ciclo se repete. Com o UGC Build do Calango Studio, você gera fotos com aparência de UGC real em minutos, sem modelo, sem envio de produto, sem produção. O resultado é indistinguível de uma foto casual — e performa como tal nos anúncios.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: criar UGC com IA para anúncios
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Acesse o UGC Build no Calango Studio</strong> — a ferramenta é acessível diretamente no painel principal.</li>
        <li><strong className="text-white">Faça upload da imagem do produto</strong> — use uma foto real do produto com boa iluminação.</li>
        <li><strong className="text-white">Descreva o contexto</strong> — pessoa usando, segurando, ambiente (casa, rua, escritório). Quanto mais específico, melhor o resultado.</li>
        <li><strong className="text-white">Gere a imagem</strong> — o resultado tem aparência de foto de iPhone, com iluminação natural e enquadramento casual. Sem aspecto de IA.</li>
        <li><strong className="text-white">Exporte e use no gerenciador de anúncios</strong> — a imagem sai pronta para upload no Meta Ads Manager ou qualquer outra plataforma.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Por que UGC performa melhor em anúncios
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O feed do Instagram e Facebook é dominado por conteúdo orgânico — fotos de amigos, stories caseiros, vídeos informais. Anúncios que parecem posts reais competem melhor pela atenção porque se integram ao feed naturalmente. O usuário não levanta a guarda mental de &ldquo;isso é propaganda&rdquo;.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Os números confirmam: anúncios com aparência de UGC historicamente têm taxas de clique maiores que criativos produzidos com estética de anúncio tradicional. A razão é psicológica — confiamos mais em conteúdo que parece vir de pessoas reais do que em peças publicitárias polidas. O UGC Build do Calango Studio explora exatamente essa dinâmica, gerando imagens que parecem ter sido tiradas por um consumidor real usando o produto.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        UGC com IA vs UGC tradicional: quando usar cada um
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Para teste de criativos, validação de conceito e volume de produção, UGC com IA é a escolha prática. Você gera dezenas de variações em uma sessão. Para campanhas de grande escala com necessidade de vídeo ou conteúdo com testemunho real, UGC tradicional com criadores de conteúdo ainda tem seu lugar. A estratégia mais eficiente combina os dois: use IA para testar e descobrir qual conceito funciona, depois invista em produção real para os conceitos vencedores.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="criativos/como-criar-ugc-para-anuncios" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
