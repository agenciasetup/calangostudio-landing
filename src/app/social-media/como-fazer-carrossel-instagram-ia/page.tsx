import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Fazer Carrossel para Instagram com IA | Calango Studio",
  description: "Crie carrosséis completos para Instagram com IA: estrutura, copy por slide e imagem gerada. Do zero ao arquivo em minutos.",
  openGraph: {
    title: "Como Fazer Carrossel para Instagram com IA | Calango Studio",
    description: "Crie carrosséis completos para Instagram com IA: estrutura, copy por slide e imagem gerada. Do zero ao arquivo em minutos.",
    url: "https://www.calangostudio.com.br/social-media/como-fazer-carrossel-instagram-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/social-media/como-fazer-carrossel-instagram-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como fazer carrossel para Instagram com IA",
      description: "Guia passo a passo para criar carrosséis completos com IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Acesse o perfil do cliente", text: "No Calango Studio, acesse o perfil do cliente com briefing já carregado." },
        { "@type": "HowToStep", position: 2, name: "Abra o CopyMaker", text: "Selecione o formato Carrossel no CopyMaker." },
        { "@type": "HowToStep", position: 3, name: "Informe o tema", text: "A IA gera a copy slide a slide com contexto do cliente." },
        { "@type": "HowToStep", position: 4, name: "Gere as imagens", text: "Use a Imagem Criativa para gerar imagens de cada slide." },
        { "@type": "HowToStep", position: 5, name: "Monte e exporte", text: "Exporte e monte no Photoshop, Figma ou Canva." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quantos slides deve ter um carrossel no Instagram?", acceptedAnswer: { "@type": "Answer", text: "Entre 5 e 10 slides. O primeiro slide precisa prender. O último deve ter um CTA claro." } },
        { "@type": "Question", name: "IA consegue criar a estrutura completa de um carrossel?", acceptedAnswer: { "@type": "Answer", text: "Sim. O CopyMaker do Calango Studio gera título, copy de cada slide e CTA final." } },
        { "@type": "Question", name: "Como manter consistência visual nos slides do carrossel?", acceptedAnswer: { "@type": "Answer", text: "Usando o mesmo estilo de geração de imagem para todos os slides. No Calango, o estilo fica salvo no perfil do cliente." } },
        { "@type": "Question", name: "Quanto tempo leva para criar um carrossel completo com IA?", acceptedAnswer: { "@type": "Answer", text: "A geração de copy e imagens leva menos de 10 minutos. A diagramação final leva mais 15-20 minutos." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Quantos slides deve ter um carrossel no Instagram?",
    answer: "Entre 5 e 10 slides é o intervalo mais comum e mais eficiente. O primeiro slide é o mais importante. precisa prender a atenção e convencer o usuário a passar para o próximo. O último deve ter um CTA claro. o que você quer que a pessoa faça depois de ver o conteúdo. Os slides do meio entregam o valor prometido no primeiro.",
  },
  {
    question: "IA consegue criar a estrutura completa de um carrossel?",
    answer: "Sim. O CopyMaker do Calango Studio gera título, copy de cada slide e CTA final. com o contexto do cliente já considerado. Você informa o tema e o formato, e a IA entrega a estrutura completa. A revisão fica por conta do profissional, mas o volume de edição é muito menor do que criar do zero.",
  },
  {
    question: "Como manter consistência visual nos slides do carrossel?",
    answer: "Usando o mesmo estilo de geração de imagem para todos os slides. No Calango Studio, o estilo visual fica salvo no perfil do cliente e é aplicado automaticamente em cada geração. Isso garante que os 10 slides do carrossel tenham a mesma linguagem visual. sem precisar ajustar manualmente.",
  },
  {
    question: "Quanto tempo leva para criar um carrossel completo com IA?",
    answer: "Com o Calango Studio, a geração de copy e imagens leva menos de 10 minutos. A diagramação final no Photoshop ou Figma. que é a parte de acabamento criativo. leva mais 15-20 minutos dependendo da complexidade. Total: menos de 30 minutos para um carrossel completo.",
  },
];

const relatedPages = [
  { href: "/social-media/como-criar-copy-para-post", title: "Copy para Post com IA", description: "Gere copies para posts, stories e reels com contexto do cliente." },
  { href: "/ferramentas/ia-para-social-media", title: "IA para Social Media", description: "Plataforma completa para social media managers." },
  { href: "/guias/como-criar-conteudo-com-ia", title: "Como Criar Conteúdo com IA", description: "Guia do post ao carrossel em minutos." },
];

export default function ComoFazerCarrosselInstagramIaPage() {
  return (
    <SeoLayout schema={schema} slug="social-media/como-fazer-carrossel-instagram-ia">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Fazer Carrossel para Instagram com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O carrossel é um dos formatos de maior engajamento no Instagram. O algoritmo favorece conteúdo que gera tempo de tela. e carrosséis geram swipes, que geram permanência, que aumentam alcance. O problema: é também um dos formatos mais trabalhosos de produzir. Copy por slide, imagem consistente em cada frame, diagramação que funcione em sequência. Para quem atende múltiplos clientes, multiplicar isso por 10 ou 15 carrosséis por mês consome horas. Com IA, você gera a estrutura e o conteúdo em minutos. e compõe o visual muito mais rápido. O Calango Studio centraliza copy e imagem no mesmo lugar, com o contexto do cliente já carregado.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: carrossel com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Acesse o perfil do cliente no Calango Studio</strong>. briefing, tom de voz e referências visuais já estão salvos. A IA parte do contexto certo.</li>
        <li><strong className="text-white">Abra o CopyMaker e selecione &ldquo;Carrossel&rdquo;</strong>. informe o tema do carrossel e a IA gera a copy slide a slide: título, desenvolvimento e CTA final.</li>
        <li><strong className="text-white">Use a Imagem Criativa para gerar as imagens</strong>. gere as imagens de cada slide no estilo visual do cliente. O mesmo estilo é aplicado automaticamente, garantindo consistência entre os frames.</li>
        <li><strong className="text-white">Exporte e monte a diagramação final</strong>. leve as imagens e copies para o Photoshop, Figma ou Canva para o acabamento. Essa etapa criativa é onde o designer agrega valor.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Por que o carrossel funciona no Instagram
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O algoritmo do Instagram prioriza métricas de engajamento. e o carrossel acumula várias delas: swipes (interação), tempo de tela (retenção), salvamentos (intenção) e compartilhamentos (distribuição). Um carrossel de 10 slides com copy boa nos primeiros frames retém o usuário por 20-30 segundos. muito mais que um post de imagem única.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A copy nos primeiros slides é decisiva. Se o primeiro slide não convence o usuário a passar para o segundo, o carrossel morre ali. Por isso a estrutura importa tanto: promessa clara no slide 1, desenvolvimento nos slides 2-8, CTA no último. O CopyMaker do Calango Studio já gera nessa estrutura por padrão.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="copymaker" />
      <ResultadosGaleria />
      <CtaBanner slug="social-media/como-fazer-carrossel-instagram-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
