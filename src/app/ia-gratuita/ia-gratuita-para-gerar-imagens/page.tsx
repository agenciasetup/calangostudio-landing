import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "IA Gratuita para Gerar Imagens: opções reais e seus limites | Calango Studio",
  description: "As melhores IAs gratuitas para gerar imagens, o que cada uma entrega e por que profissionais migram para plataformas pagas.",
  openGraph: {
    title: "IA Gratuita para Gerar Imagens: opções reais e seus limites | Calango Studio",
    description: "As melhores IAs gratuitas para gerar imagens, o que cada uma entrega e por que profissionais migram para plataformas pagas.",
    url: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-gerar-imagens",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-gerar-imagens" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Qual a melhor IA gratuita para gerar imagens em português?", acceptedAnswer: { "@type": "Answer", text: "A maioria das IAs gratuitas é em inglês. Para uso em português com resultado profissional, o Calango Studio é a opção mais completa — 100% em PT-BR, com estilos prontos e workflow de agência." } },
      { "@type": "Question", name: "Dá para usar IA gratuita para gerar imagens de cliente?", acceptedAnswer: { "@type": "Answer", text: "Tecnicamente sim, mas com limitações sérias: créditos limitados, sem contexto de cliente salvo, sem consistência visual entre gerações. Para trabalho profissional, essas limitações aparecem rápido." } },
      { "@type": "Question", name: "Qual IA gratuita gera imagens mais realistas?", acceptedAnswer: { "@type": "Answer", text: "Adobe Firefly e Ideogram têm boa qualidade no plano gratuito. Para fotorrealismo com contexto de cliente e estilo consistente, o Nano Banana integrado ao Calango Studio entrega resultados superiores." } },
      { "@type": "Question", name: "Como gerar mais imagens com IA gastando menos?", acceptedAnswer: { "@type": "Answer", text: "A estratégia mais eficiente é usar o incentivo de U$300 do Google Cloud junto com um plano do Calango Studio. O Calango tem uma aula ensinando como resgatar esses créditos — o que equivale a quase 3.000 gerações adicionais." } },
    ],
  }],
};

const faqs = [
  { question: "Qual a melhor IA gratuita para gerar imagens em português?", answer: "A maioria das IAs gratuitas opera em inglês — prompts em português funcionam, mas com resultados menos precisos. Para uso profissional em português, com interface e suporte 100% em PT-BR, estilos prontos calibrados para marketing e workflow de agência, o Calango Studio é a opção mais completa. Não é gratuito, mas o custo se justifica em produtividade desde a primeira semana." },
  { question: "Dá para usar IA gratuita para gerar imagens de cliente?", answer: "Tecnicamente sim, mas com limitações sérias: créditos limitados por dia, sem contexto de cliente salvo entre sessões, sem consistência visual entre gerações e sem gestão de múltiplos clientes. Para um teste pontual funciona. Para produção profissional atendendo 5, 10, 20 clientes — as limitações aparecem rápido e o tempo perdido supera qualquer economia." },
  { question: "Qual IA gratuita gera imagens mais realistas?", answer: "Adobe Firefly e Ideogram têm boa qualidade de imagem no plano gratuito. Para fotorrealismo com contexto de cliente, estilo consistente entre gerações e workflow integrado, o Nano Banana — modelo de geração do Calango Studio — entrega resultados superiores, especialmente com os estilos prontos como Hero Style e Business Style." },
  { question: "Como gerar mais imagens com IA gastando menos?", answer: "A estratégia mais eficiente é usar o incentivo de U$300 do Google Cloud junto com um plano do Calango Studio. Dentro da plataforma existe uma aula ensinando como resgatar esses créditos — o que equivale a aproximadamente 125.000 créditos adicionais, ou quase 3.000 gerações extras. É o caminho mais inteligente para maximizar o volume de geração com o menor custo possível." },
];

const relatedPages = [
  { href: "/nano-banana/nano-banana-pro", title: "Nano Banana Pro", description: "O modelo de geração de imagens do Calango Studio." },
  { href: "/ia-gratuita/melhor-ia-gratuita-para-social-media", title: "IA Gratuita para Social Media", description: "Opções gratuitas para social media managers." },
  { href: "/guias/como-gerar-imagens-com-ia", title: "Como Gerar Imagens com IA", description: "Guia completo de geração de imagens." },
];

export default function IaGratuitaParaGerarImagensPage() {
  return (
    <SeoLayout schema={schema} slug="ia-gratuita/ia-gratuita-para-gerar-imagens">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">IA Gratuita para Gerar Imagens</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Existem opções gratuitas para gerar imagens com IA. Algumas são boas para testar o conceito. Poucas são viáveis para uso profissional no dia a dia. Entender o que cada uma entrega — e o que fica de fora — é o primeiro passo para escolher a ferramenta certa para o seu fluxo de trabalho. Porque o que parece economia pode estar custando mais caro do que você imagina quando o preço é medido em horas perdidas.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">As principais opções gratuitas em 2025</h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">DALL-E via ChatGPT (plano gratuito):</strong> gera imagens, mas com limite de gerações por dia. Interface dentro do ChatGPT — não é uma plataforma de workflow. Não tem gestão de clientes, não tem estilos prontos, não tem copy integrada.</li>
        <li><strong className="text-white">Adobe Firefly (gratuito):</strong> boa qualidade, integrado ao ecossistema Adobe. Créditos mensais limitados no plano free. Sem gestão de clientes, sem copy, sem português nativo na interface.</li>
        <li><strong className="text-white">Ideogram (gratuito):</strong> forte em texto dentro de imagem. Créditos limitados por dia. Interface em inglês. Sem workflow integrado para produção profissional.</li>
        <li><strong className="text-white">Leonardo.ai (gratuito):</strong> créditos diários limitados. Boa qualidade artística. Curva de aprendizado maior para resultados consistentes. Sem português, sem gestão de clientes.</li>
        <li><strong className="text-white">Bing Image Creator (gratuito):</strong> baseado no DALL-E. Gratuito mas com fila de espera e qualidade variável. Sem nenhum workflow profissional.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que o gratuito não entrega</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Nenhuma das opções gratuitas acima tem: estilos prontos calibrados para marketing, briefing de cliente salvo entre sessões, copy integrada na mesma plataforma, gestão de múltiplos clientes, UGC Build para anúncios, mockup de produto por IA ou sessão de fotos com referência de rosto. São geradores isolados — úteis para testes pontuais, limitados para produção profissional. O designer que usa 3 ferramentas gratuitas diferentes para cobrir o que uma plataforma paga oferece integrado está gastando mais tempo (e portanto mais dinheiro) do que imagina.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O incentivo do Google que muda o jogo</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Se você já decidiu que quer qualidade profissional mas está pesando o custo, existe um caminho inteligente: o Google oferece U$300 em créditos para novas contas Google Cloud. O Calango Studio tem uma aula exclusiva ensinando como resgatar esse incentivo — disponível dentro da plataforma para todos os assinantes. Com esses créditos ativados, você tem acesso a aproximadamente 125.000 créditos adicionais, o equivalente a quase 3.000 gerações extras. É o caminho mais inteligente para quem quer o máximo de uso com o menor custo possível — longe de ser gratuito, mas com um custo real muito menor do que parece à primeira vista.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner message="Ver planos a partir de R$97,90" slug="ia-gratuita/ia-gratuita-para-gerar-imagens" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
