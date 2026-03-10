import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Criar Criativos com IA: guia para designers e social media | Calango Studio",
  description: "Aprenda a criar criativos profissionais com IA em minutos. Do brief ao arquivo final, sem depender de múltiplas ferramentas. Guia prático.",
  openGraph: {
    title: "Como Criar Criativos com IA: guia para designers e social media | Calango Studio",
    description: "Aprenda a criar criativos profissionais com IA em minutos. Do brief ao arquivo final, sem depender de múltiplas ferramentas. Guia prático.",
    url: "https://www.calangostudio.com.br/criativos/como-criar-criativos-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/como-criar-criativos-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como Criar Criativos com IA",
      description: "Guia passo a passo para criar criativos profissionais com inteligência artificial usando o Calango Studio.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Defina o objetivo do criativo", text: "Determine se é um anúncio, post orgânico, story ou carrossel." },
        { "@type": "HowToStep", position: 2, name: "Acesse o perfil do cliente", text: "No Calango Studio, acesse o perfil do cliente. briefing, cores e estilo já estão salvos." },
        { "@type": "HowToStep", position: 3, name: "Gere a imagem base", text: "Use a Imagem Criativa para gerar a imagem base com o estilo escolhido (Animal Art, Hero Style, Business Style, etc.)." },
        { "@type": "HowToStep", position: 4, name: "Gere a copy", text: "Use o CopyMaker para gerar a copy no formato certo (post, carrossel, story, reels)." },
        { "@type": "HowToStep", position: 5, name: "Exporte e finalize", text: "Exporte e finalize no Photoshop ou Figma para refinamentos." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é um criativo no marketing digital?",
          acceptedAnswer: { "@type": "Answer", text: "Criativo é qualquer peça visual usada em anúncios ou conteúdo orgânico. imagem, vídeo, carrossel ou story. A qualidade do criativo é um dos fatores que mais impacta a performance de anúncios." },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para criar um criativo com IA?",
          acceptedAnswer: { "@type": "Answer", text: "Com o Calango Studio, a geração de imagem leva menos de 30 segundos. A copy é gerada em segundos. O processo completo. do brief ao arquivo exportado. cabe em menos de 20 minutos." },
        },
        {
          "@type": "Question",
          name: "IA consegue criar criativos no estilo da marca do cliente?",
          acceptedAnswer: { "@type": "Answer", text: "Sim, quando o briefing está bem cadastrado. No Calango Studio, você salva o estilo visual de cada cliente e a IA usa esse contexto para gerar criativos consistentes com a identidade da marca." },
        },
        {
          "@type": "Question",
          name: "Preciso de Photoshop para finalizar criativos feitos com IA?",
          acceptedAnswer: { "@type": "Answer", text: "Não necessariamente. Para muitos usos. posts, stories, carrosséis. o resultado gerado pelo Calango Studio pode ser usado direto. Para refinamentos mais precisos, o Photoshop ou Figma continuam úteis como etapa final." },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é um criativo no marketing digital?",
    answer: "Criativo é qualquer peça visual usada em anúncios ou conteúdo orgânico. imagem, vídeo, carrossel ou story. A qualidade do criativo é um dos fatores que mais impacta a performance de anúncios. Um bom criativo para o scroll, comunica a proposta de valor em segundos e gera ação. Para quem trabalha com tráfego pago, o criativo é tão importante quanto a segmentação de público.",
  },
  {
    question: "Quanto tempo leva para criar um criativo com IA?",
    answer: "Com o Calango Studio, a geração de imagem leva menos de 30 segundos. A copy é gerada em segundos. O processo completo. do brief ao arquivo exportado. cabe em menos de 20 minutos. Compare com o fluxo tradicional: briefing ao designer (1 dia), produção (1-2 dias), revisão (mais 1 dia). A IA comprime esse ciclo de dias para minutos.",
  },
  {
    question: "IA consegue criar criativos no estilo da marca do cliente?",
    answer: "Sim, quando o briefing está bem cadastrado. No Calango Studio, você salva o estilo visual de cada cliente e a IA usa esse contexto para gerar criativos consistentes com a identidade da marca. Isso resolve um dos maiores problemas da IA genérica: falta de personalização por cliente.",
  },
  {
    question: "Preciso de Photoshop para finalizar criativos feitos com IA?",
    answer: "Não necessariamente. Para muitos usos. posts, stories, carrosséis. o resultado gerado pelo Calango Studio pode ser usado direto. Para refinamentos mais precisos, como tipografia detalhada ou composições complexas, o Photoshop ou Figma continuam úteis como etapa final de acabamento.",
  },
];

const relatedPages = [
  { href: "/criativos/criativos-para-facebook-ads", title: "Criativos para Facebook Ads", description: "Como produzir criativos para anúncios pagos em escala com IA." },
  { href: "/criativos/como-testar-criativos-sem-designer", title: "Testar Criativos sem Designer", description: "Produza e teste variações de criativos sem depender de designer." },
  { href: "/ferramentas/ia-para-designers", title: "IA para Designers", description: "Todas as ferramentas de IA para designers em uma plataforma." },
];

export default function ComoCriarCriativosComIaPage() {
  return (
    <SeoLayout schema={schema} slug="criativos/como-criar-criativos-com-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Criar Criativos com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Criar um criativo profissional envolvia, até pouco tempo, uma cadeia longa: brief do cliente, pesquisa de referência visual, geração ou compra de imagem, criação de copy, composição no Photoshop ou Figma, revisão. Cada etapa em uma ferramenta diferente. Com IA, essa cadeia colapsou. Hoje é possível gerar imagem, escrever copy e montar o criativo em uma fração do tempo. desde que a ferramenta certa esteja centralizada. O Calango Studio foi construído exatamente para isso: reunir todo esse processo em uma única plataforma, com o contexto do cliente já carregado. Sem alternar entre ChatGPT, Freepik, Gemini e Photoshop. Sem reexplicar o briefing a cada sessão. O resultado é um workflow que transforma horas de produção em minutos de curadoria.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como criar criativos com IA: passo a passo
      </h2>

      <ol className="list-decimal list-inside text-txt-secondary space-y-4 mb-8">
        <li>
          <strong className="text-white">Defina o objetivo do criativo</strong>. anúncio, post orgânico, story ou carrossel? Cada formato tem estrutura e proporção diferentes. Definir o objetivo antes de gerar evita retrabalho.
        </li>
        <li>
          <strong className="text-white">Acesse o perfil do cliente no Calango Studio</strong>. briefing, cores, tom de voz e referências visuais já estão salvos. A IA parte do contexto certo desde o início.
        </li>
        <li>
          <strong className="text-white">Gere a imagem base com a Imagem Criativa</strong>. escolha o estilo que melhor se encaixa: Animal Art para mascotes, Hero Style para impacto cinematográfico, Business Style para corporativo, ou Personalizado com referências próprias.
        </li>
        <li>
          <strong className="text-white">Gere a copy com o CopyMaker</strong>. selecione o formato (post, carrossel, story, reels) e a IA gera a copy com o tom de voz e contexto do cliente aplicados automaticamente.
        </li>
        <li>
          <strong className="text-white">Exporte e finalize</strong>. para muitos usos, o resultado já sai pronto para publicação. Para composições mais elaboradas, exporte e finalize no Photoshop ou Figma.
        </li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Por que o Calango Studio acelera esse processo
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O diferencial não é só gerar imagem. é ter o contexto do cliente salvo. Quando você abre o ChatGPT para criar uma copy, precisa repassar o briefing. Quando abre o Midjourney para gerar uma imagem, precisa escrever o prompt do zero. Quando abre o Photoshop, precisa importar tudo de fontes diferentes. No Calango Studio, tudo está no mesmo lugar e conectado ao perfil do cliente.
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Sem reexplicar briefing</strong>. o contexto do cliente está sempre ativo</li>
        <li><strong className="text-white">Sem inconsistência visual</strong>. o mesmo estilo é aplicado automaticamente entre criativos</li>
        <li><strong className="text-white">Sem cruzar projetos</strong>. cada cliente é um ambiente isolado</li>
        <li><strong className="text-white">Sem alternar ferramentas</strong>. imagem e copy na mesma plataforma</li>
      </ul>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos/como-criar-criativos-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
