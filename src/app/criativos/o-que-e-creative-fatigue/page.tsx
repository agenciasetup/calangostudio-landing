import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "O que é Creative Fatigue e como resolver com IA | Calango Studio",
  description: "Entenda o que é creative fatigue em anúncios, como identificar e como resolver produzindo novos criativos com IA rapidamente.",
  openGraph: {
    title: "O que é Creative Fatigue e como resolver com IA | Calango Studio",
    description: "Entenda o que é creative fatigue em anúncios, como identificar e como resolver produzindo novos criativos com IA rapidamente.",
    url: "https://www.calangostudio.com.br/criativos/o-que-e-creative-fatigue",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/o-que-e-creative-fatigue",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que é creative fatigue em anúncios?", acceptedAnswer: { "@type": "Answer", text: "É o desgaste de um criativo com o público. Quando a mesma pessoa vê o mesmo anúncio muitas vezes, para de reagir. O resultado é queda de performance sem mudança de estratégia." } },
        { "@type": "Question", name: "Como saber se meu criativo entrou em fadiga?", acceptedAnswer: { "@type": "Answer", text: "Os sinais principais são: frequência alta (acima de 3), CTR caindo, CPM subindo. No gerenciador do Meta, você vê a frequência por criativo." } },
        { "@type": "Question", name: "Com que frequência devo trocar criativos?", acceptedAnswer: { "@type": "Answer", text: "Depende do orçamento e do tamanho do público, mas em campanhas ativas a recomendação geral é ter novos criativos prontos a cada 2-3 semanas." } },
        { "@type": "Question", name: "IA ajuda a resolver creative fatigue?", acceptedAnswer: { "@type": "Answer", text: "Diretamente. O gargalo de creative fatigue é produção lenta. Com o Calango Studio, você cria variações em minutos." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é creative fatigue em anúncios?",
    answer: "É o desgaste de um criativo com o público. Quando a mesma pessoa vê o mesmo anúncio muitas vezes, para de reagir. O resultado é queda de performance sem mudança de estratégia. O orçamento continua o mesmo, o público também, mas o criativo simplesmente parou de funcionar. É um dos problemas mais comuns e mais ignorados em campanhas de tráfego pago.",
  },
  {
    question: "Como saber se meu criativo entrou em fadiga?",
    answer: "Os sinais principais são: frequência alta (acima de 3 no período), CTR caindo de forma consistente, CPM aumentando sem mudança de público, conversões caindo com orçamento estável. No gerenciador do Meta, você consegue ver a frequência por criativo. Esse é o indicador mais direto de fadiga.",
  },
  {
    question: "Com que frequência devo trocar criativos?",
    answer: "Depende do orçamento e do tamanho do público, mas em campanhas ativas a recomendação geral é ter novos criativos prontos a cada 2 a 3 semanas. Em públicos menores ou orçamentos altos, a fadiga chega mais rápido. Ter um pipeline de criação rápida é o que permite manter esse ritmo.",
  },
  {
    question: "IA ajuda a resolver creative fatigue?",
    answer: "Diretamente. O gargalo de creative fatigue é produção lenta. Quando você leva dias para criar um novo criativo, a campanha já perdeu performance. Com o Calango Studio, você cria variações em minutos, resolvendo o problema antes que ele afete a campanha de forma significativa.",
  },
];

const relatedPages = [
  { href: "/criativos/criativos-para-facebook-ads", title: "Criativos para Facebook Ads", description: "Como produzir criativos para anúncios pagos em escala." },
  { href: "/criativos/como-testar-criativos-sem-designer", title: "Testar Criativos sem Designer", description: "Produza e teste variações sem depender de designer." },
  { href: "/criativos/como-criar-ugc-para-anuncios", title: "UGC para Anúncios com IA", description: "Fotos realistas de pessoas com produtos para ads." },
];

export default function OQueECreativeFatiguePage() {
  return (
    <SeoLayout schema={schema} slug="criativos/o-que-e-creative-fatigue">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        O que é Creative Fatigue
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Creative fatigue acontece quando o público já viu seu anúncio vezes suficientes para parar de reagir a ele. O CTR cai, o CPM sobe, a campanha perde eficiência sem que você tenha mudado orçamento ou segmentação. A causa é simples: falta de volume de criativos novos para rotacionar. A solução também é simples: produção rápida de variações. Mas essa simplicidade esbarra em um problema prático: criar criativos novos com velocidade sempre foi caro e lento. Com IA, essa equação mudou. O Calango Studio permite gerar novas variações de imagem e copy em minutos, mantendo a rotação de criativos viável mesmo para operações enxutas.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como identificar creative fatigue
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Os sinais de fadiga criativa são claros quando você sabe o que procurar no gerenciador de anúncios:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Frequência acima de 3-4 no período</strong>: significa que a mesma pessoa está vendo o anúncio 3 ou 4 vezes. A partir desse ponto, a reação natural é ignorar.</li>
        <li><strong className="text-white">CTR em queda consistente</strong>: se o CTR caiu 20-30% em relação ao início da campanha sem mudança de público, o criativo está cansando.</li>
        <li><strong className="text-white">CPM aumentando sem mudança de público</strong>: o algoritmo percebe que o anúncio está gerando menos engajamento e cobra mais para exibi-lo.</li>
        <li><strong className="text-white">Conversões caindo com orçamento estável</strong>: o funil de cima (impressões) continua, mas o meio (cliques) e fundo (conversões) estão secando.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como resolver com IA
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Quando você consegue criar novos criativos em minutos, não em dias, a rotação fica viável. O ciclo se inverte: em vez de esperar o criativo morrer para começar a produzir o próximo, você tem criativos prontos antes de precisar deles.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Com o Calango Studio, o processo de renovação de criativos funciona assim:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li><strong className="text-white">Gere novas variações de imagem</strong>: a Imagem Criativa produz variações visuais do mesmo conceito com estilos diferentes em segundos.</li>
        <li><strong className="text-white">Atualize a copy</strong>: o CopyMaker gera novas headlines e textos mantendo o contexto do cliente.</li>
        <li><strong className="text-white">Replique layouts que funcionaram</strong>: o Remix Layout pega o criativo vencedor e gera variações estruturais com poucos cliques.</li>
      </ul>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O resultado: você tem um criativo novo pronto para subir antes que a campanha perca escala. A produção deixa de ser reativa (esperando a fadiga aparecer) e passa a ser proativa (tendo sempre criativos novos no pipeline).
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        A matemática da rotação de criativos
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Uma campanha com 5 criativos em rotação dura significativamente mais do que uma com apenas 1 ou 2. Cada criativo adicional distribui as impressões, reduzindo a frequência individual e adiando a fadiga. Com o Calango Studio, o custo marginal de cada criativo adicional é praticamente zero, o que torna viável manter pipelines de 5, 10 ou mais criativos em rotação simultânea. Para agências que gerenciam múltiplas contas, essa capacidade de produção muda a dinâmica de performance das campanhas.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos/o-que-e-creative-fatigue" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
