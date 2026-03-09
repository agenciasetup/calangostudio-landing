import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Testar Criativos sem Contratar Designer: guia com IA | Calango Studio",
  description: "Como produzir e testar variações de criativos para anúncios sem depender de designer. Use IA para criar, variar e iterar em horas.",
  openGraph: {
    title: "Como Testar Criativos sem Contratar Designer: guia com IA | Calango Studio",
    description: "Como produzir e testar variações de criativos para anúncios sem depender de designer. Use IA para criar, variar e iterar em horas.",
    url: "https://www.calangostudio.com.br/criativos/como-testar-criativos-sem-designer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/como-testar-criativos-sem-designer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como testar criativos sem contratar designer",
      description: "Guia para produzir e testar variações de criativos usando IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Crie o criativo base", text: "No Calango Studio, gere a imagem e copy do criativo base." },
        { "@type": "HowToStep", position: 2, name: "Gere variações", text: "Use o Remix Layout para gerar variações trocando imagem ou texto." },
        { "@type": "HowToStep", position: 3, name: "Exporte as variações", text: "Exporte e suba no gerenciador de anúncios." },
        { "@type": "HowToStep", position: 4, name: "Analise performance", text: "Analise qual criativo performa melhor nos dados." },
        { "@type": "HowToStep", position: 5, name: "Itere sobre o vencedor", text: "Volte ao Calango e crie novas variações do criativo vencedor." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quantas variações de criativo devo testar por campanha?", acceptedAnswer: { "@type": "Answer", text: "O recomendado é ao menos 3 a 5 variações por conjunto de anúncios. Com o Remix Layout do Calango, criar essas variações leva minutos." } },
        { "@type": "Question", name: "O que muda entre as variações de criativo?", acceptedAnswer: { "@type": "Answer", text: "Imagem, headline, copy, cor de fundo ou CTA. Testar uma variável por vez dá mais clareza sobre o que gera resultado." } },
        { "@type": "Question", name: "Posso testar criativos sem saber design?", acceptedAnswer: { "@type": "Answer", text: "Sim. O Calango Studio foi pensado para quem não é designer de formação. Estilos prontos e Remix Layout eliminam edição manual." } },
        { "@type": "Question", name: "Qual ferramenta usar para criar variações de criativo com IA?", acceptedAnswer: { "@type": "Answer", text: "O Remix Layout do Calango Studio foi feito para isso: replique um layout funcional e troque os elementos com poucos cliques." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Quantas variações de criativo devo testar por campanha?",
    answer: "O recomendado é ao menos 3 a 5 variações por conjunto de anúncios para ter dados suficientes para comparação. Com o Remix Layout do Calango, criar essas variações leva minutos — não horas ou dias dependendo de agenda de designer.",
  },
  {
    question: "O que muda entre as variações de criativo?",
    answer: "Imagem, headline, copy, cor de fundo ou CTA. A regra de ouro do teste: mude uma variável por vez. Isso dá mais clareza sobre o que está gerando resultado. Mudar tudo ao mesmo tempo não permite isolar o que funciona.",
  },
  {
    question: "Posso testar criativos sem saber design?",
    answer: "Sim. O Calango Studio foi pensado para quem não é designer de formação. Os estilos prontos eliminam a necessidade de criar do zero, e o Remix Layout permite gerar variações de um criativo existente sem edição manual — só trocando elementos.",
  },
  {
    question: "Qual ferramenta usar para criar variações de criativo com IA?",
    answer: "O Remix Layout do Calango Studio foi feito exatamente para isso: você pega um layout que já funciona e replica trocando os elementos visuais e textuais com poucos cliques. O resultado mantém a estrutura que converte, mas com variação suficiente para teste A/B.",
  },
];

const relatedPages = [
  { href: "/criativos/criativos-para-facebook-ads", title: "Criativos para Facebook Ads", description: "Como produzir criativos para anúncios pagos em escala." },
  { href: "/criativos/o-que-e-creative-fatigue", title: "O que é Creative Fatigue", description: "Entenda o desgaste de criativos e como resolver com IA." },
  { href: "/criativos/como-criar-criativos-com-ia", title: "Como Criar Criativos com IA", description: "Guia completo do brief ao arquivo final." },
];

export default function ComoTestarCriativosSemDesignerPage() {
  return (
    <SeoLayout schema={schema} slug="criativos/como-testar-criativos-sem-designer">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Testar Criativos sem Contratar Designer
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Testar criativos é uma das práticas mais importantes em tráfego pago. A lógica é simples: você não sabe qual criativo vai performar até testar. O problema: cada variação exige uma rodada com o designer — briefing, produção, revisão, aprovação. Um ciclo que leva dias para cada variação. Para quem gerencia campanhas ativas, essa velocidade não serve. Com IA, esse ciclo colapsou. Você cria, varia e itera criativos em horas — sem depender de agenda de ninguém. O Calango Studio foi construído com essa velocidade em mente.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: testar criativos com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Crie o criativo base no Calango Studio</strong> — gere a imagem com a Imagem Criativa e a copy com o CopyMaker. Esse é o criativo &ldquo;controle&rdquo; do seu teste.</li>
        <li><strong className="text-white">Use o Remix Layout para gerar variações</strong> — troque a imagem, o texto ou ambos. Mantenha a estrutura que funciona e mude uma variável por vez.</li>
        <li><strong className="text-white">Exporte as variações e suba no gerenciador de anúncios</strong> — organize cada variação como um criativo separado dentro do mesmo conjunto de anúncios.</li>
        <li><strong className="text-white">Analise qual performa melhor</strong> — CTR, CPA e conversão são as métricas que importam. Dê ao teste pelo menos 3-5 dias antes de concluir.</li>
        <li><strong className="text-white">Volte ao Calango e itere sobre o vencedor</strong> — pegue o criativo que funcionou e crie novas variações a partir dele. Esse ciclo contínuo é o que separa campanhas boas de campanhas excelentes.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Por que testar criativos é essencial
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Creative fatigue — o desgaste de um criativo com o público — é inevitável. Quanto mais vezes a mesma pessoa vê o mesmo anúncio, menos ela reage. A única forma de manter campanhas escalando é rotacionar criativos com frequência. E a única forma de rotacionar com frequência é ter velocidade de produção.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A IA reduziu a barreira de entrada para esse processo. O que antes exigia equipe de design dedicada agora pode ser feito por um gestor de tráfego solo ou um social media manager com o Calango Studio. O volume de teste que antes era privilégio de grandes agências agora é acessível para qualquer profissional.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos/como-testar-criativos-sem-designer" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
