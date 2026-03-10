import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Criativos para Facebook Ads com IA: como produzir em escala | Calango Studio",
  description: "Como criar criativos para Facebook Ads e Instagram Ads com IA. Produza variações em escala, reduza custo por criativo e melhore sua performance.",
  openGraph: {
    title: "Criativos para Facebook Ads com IA: como produzir em escala | Calango Studio",
    description: "Como criar criativos para Facebook Ads e Instagram Ads com IA. Produza variações em escala, reduza custo por criativo e melhore sua performance.",
    url: "https://www.calangostudio.com.br/criativos/criativos-para-facebook-ads",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/criativos-para-facebook-ads",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como criar criativos para Facebook Ads com IA",
      description: "Guia para produzir criativos para anúncios pagos em escala usando o Calango Studio.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Defina o formato do anúncio", text: "Escolha entre imagem única, carrossel ou vídeo estático para o Facebook Ads." },
        { "@type": "HowToStep", position: 2, name: "Gere a imagem de alto impacto", text: "Use a Imagem Criativa do Calango Studio com estilos prontos para gerar imagens que param o scroll." },
        { "@type": "HowToStep", position: 3, name: "Crie variações com Remix Layout", text: "Replique o layout do criativo base trocando imagem e texto para testes A/B." },
        { "@type": "HowToStep", position: 4, name: "Gere a copy do anúncio", text: "Use o CopyMaker para gerar headline e texto do anúncio com contexto do cliente." },
        { "@type": "HowToStep", position: 5, name: "Exporte e suba no gerenciador", text: "Exporte as variações e suba no Meta Ads Manager para teste." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qual o tipo de criativo que mais converte no Facebook Ads?",
          acceptedAnswer: { "@type": "Answer", text: "Varia por nicho, mas criativos com rosto humano, UGC e imagens de produto em contexto real tendem a performar melhor. O Calango Studio tem ferramentas específicas para cada formato." },
        },
        {
          "@type": "Question",
          name: "Como criar variações de criativo para teste A/B com IA?",
          acceptedAnswer: { "@type": "Answer", text: "No Calango Studio, use o Remix Layout: ele replica o layout de um criativo existente trocando a imagem e o texto. Em poucos cliques você tem 3, 5 ou 10 variações." },
        },
        {
          "@type": "Question",
          name: "UGC gerado por IA funciona em anúncios pagos?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. O UGC Build do Calango gera imagens com aparência de foto orgânica que performam bem em feeds de anúncio." },
        },
        {
          "@type": "Question",
          name: "Como reduzir o custo de produção de criativos para ads?",
          acceptedAnswer: { "@type": "Answer", text: "Centralizando a produção em uma única plataforma com IA. Com o Calango Studio, você elimina banco de imagens pago e horas de briefing de designer." },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Qual o tipo de criativo que mais converte no Facebook Ads?",
    answer: "Varia por nicho, mas criativos com rosto humano, UGC (aparência orgânica) e imagens de produto em contexto real tendem a performar melhor. O Calango Studio tem ferramentas específicas para cada um desses formatos: Imagem Criativa para imagens de impacto, UGC Build para fotos com aparência orgânica e Mockup Produto para produto em cenário.",
  },
  {
    question: "Como criar variações de criativo para teste A/B com IA?",
    answer: "No Calango Studio, use o Remix Layout: ele replica o layout de um criativo existente trocando a imagem e o texto. Em poucos cliques você tem 3, 5 ou 10 variações do mesmo criativo, prontas para teste A/B no gerenciador de anúncios. Isso elimina o ciclo de briefing-designer-revisão para cada variação.",
  },
  {
    question: "UGC gerado por IA funciona em anúncios pagos?",
    answer: "Sim. O UGC Build do Calango gera imagens com aparência de foto orgânica. sem aspecto de IA. que performam bem em feeds de anúncio onde o usuário está acostumado a ver conteúdo real. Anúncios com aparência de UGC historicamente têm CTR maior que criativos com estética de propaganda tradicional.",
  },
  {
    question: "Como reduzir o custo de produção de criativos para ads?",
    answer: "Centralizando a produção em uma única plataforma com IA. Com o Calango Studio, você elimina Freepik, banco de imagens pago e horas de briefing de designer. produzindo criativos em minutos com uma assinatura. Para agências e gestores de tráfego com volume, a economia é significativa.",
  },
];

const relatedPages = [
  { href: "/criativos/como-testar-criativos-sem-designer", title: "Testar Criativos sem Designer", description: "Produza e teste variações sem depender de designer." },
  { href: "/criativos/como-criar-ugc-para-anuncios", title: "UGC para Anúncios com IA", description: "Fotos realistas de pessoas com produtos para ads." },
  { href: "/criativos/como-criar-criativos-com-ia", title: "Como Criar Criativos com IA", description: "Guia completo do brief ao arquivo final." },
];

export default function CriativosParaFacebookAdsPage() {
  return (
    <SeoLayout schema={schema} slug="criativos/criativos-para-facebook-ads">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Criativos para Facebook Ads com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Performance de anúncio depende, em grande parte, do criativo. O problema para gestores de tráfego e agências: produzir volume de criativos com qualidade consistente é caro e lento quando depende de designer ou banco de imagens. Cada campanha precisa de pelo menos 3 a 5 variações para teste. Cada variação é um ciclo de briefing, produção e revisão. Multiplique isso por vários clientes e o gargalo fica claro. A IA resolveu esse gargalo. Com o Calango Studio, você gera imagens, copy e variações de criativo em minutos. sem precisar de uma equipe de produção dedicada.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que faz um bom criativo para Facebook Ads
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Imagem que para o scroll</strong>. contraste, rosto humano ou produto em destaque. O feed é competitivo; o criativo precisa chamar atenção em menos de 2 segundos.</li>
        <li><strong className="text-white">Copy curta e direta</strong>. benefício claro na headline, CTA visível. Sem enrolação.</li>
        <li><strong className="text-white">Consistência com a marca</strong>. o anúncio precisa parecer da marca, não de um banco de imagens genérico.</li>
        <li><strong className="text-white">Volume de variações</strong>. ao menos 3 a 5 criativos por campanha para teste A/B eficiente.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio reúne as ferramentas necessárias para produzir criativos para ads em uma única plataforma, com contexto do cliente salvo.
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Imagem Criativa</strong>. gera imagens de alto impacto visual com estilos prontos (Hero Style, Business Style, Animal Art e outros). Resultados cinematográficos sem dominar prompts complexos.</li>
        <li><strong className="text-white">UGC Build</strong>. foto realista de pessoa com produto, com aparência de foto de iPhone. Formato que performa especialmente bem em anúncios de feed.</li>
        <li><strong className="text-white">CopyMaker</strong>. copy para o criativo e legenda do anúncio, com tom de voz do cliente já aplicado.</li>
        <li><strong className="text-white">Remix Layout</strong>. pega um criativo que funcionou e replica trocando imagem e texto. Variações em cliques, não em horas.</li>
      </ul>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos/criativos-para-facebook-ads" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
