import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "IA Gratuita para Designers: o que existe e o que realmente vale | Calango Studio",
  description: "Quais IAs gratuitas existem para designers, o que entregam de verdade e quando vale investir em uma plataforma profissional.",
  openGraph: {
    title: "IA Gratuita para Designers: o que existe e o que realmente vale | Calango Studio",
    description: "Quais IAs gratuitas existem para designers, o que entregam de verdade e quando vale investir em uma plataforma profissional.",
    url: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-designers",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/ia-gratuita/ia-gratuita-para-designers" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Existe IA realmente gratuita para gerar imagens profissionais?", acceptedAnswer: { "@type": "Answer", text: "Existem planos gratuitos com créditos limitados (Adobe Firefly, Leonardo.ai). Para uso profissional e volume, esses planos se esgotam rápido e a qualidade é menor. A alternativa mais inteligente é uma plataforma paga que justifica o custo pelo tempo economizado." } },
      { "@type": "Question", name: "O Calango Studio tem versão gratuita?", acceptedAnswer: { "@type": "Answer", text: "Não tem plano gratuito, mas tem uma aula exclusiva ensinando como resgatar U$300 em créditos Google. o que equivale a quase 3.000 gerações extras na plataforma. Os planos começam em R$97,90/mês." } },
      { "@type": "Question", name: "Vale a pena pagar por IA sendo designer freelancer?", acceptedAnswer: { "@type": "Answer", text: "Sim, quando o retorno em tempo compensa. Se você economiza 2 horas por dia com o Calango Studio, isso é mais de 40 horas por mês. tempo que você pode converter em mais clientes ou mais descanso." } },
      { "@type": "Question", name: "Qual a IA gratuita mais completa para designers?", acceptedAnswer: { "@type": "Answer", text: "Para uso esporádico, Adobe Firefly ou Canva IA são as opções mais completas no gratuito. Para uso profissional diário, o custo do tempo supera qualquer economia com plano gratuito." } },
    ],
  }],
};

const faqs = [
  { question: "Existe IA realmente gratuita para gerar imagens profissionais?", answer: "Existem planos gratuitos com créditos limitados. Adobe Firefly, Leonardo.ai, Ideogram. Para uso esporádico ou testes, funcionam. Para uso profissional com volume, esses planos se esgotam rápido e a qualidade costuma ser inferior aos planos pagos. A alternativa mais inteligente é uma plataforma paga que justifica o custo pelo tempo economizado. o que no caso de designers profissionais acontece já na primeira semana de uso." },
  { question: "O Calango Studio tem versão gratuita?", answer: "Não tem plano gratuito. Os planos começam em R$97,90/mês. Mas dentro da plataforma existe uma aula exclusiva ensinando como resgatar U$300 em créditos do Google Cloud. o que equivale a aproximadamente 125.000 créditos adicionais, ou quase 3.000 gerações extras. É a forma mais inteligente de maximizar o uso com o menor custo possível." },
  { question: "Vale a pena pagar por IA sendo designer freelancer?", answer: "Sim, quando o retorno em tempo compensa. e para a maioria dos freelancers, compensa rápido. Se você economiza 2 horas por dia com o Calango Studio, isso é mais de 40 horas por mês. Se sua hora vale R$50, são R$2.000 em tempo recuperado contra R$97,90 de assinatura. Esse tempo pode ser convertido em mais clientes, mais entregas ou mais descanso." },
  { question: "Qual a IA gratuita mais completa para designers?", answer: "Para uso esporádico, Adobe Firefly é a opção mais completa no gratuito. boa qualidade de imagem, integração com o ecossistema Adobe. O Canva IA também oferece recursos básicos no plano gratuito. Para uso profissional diário com múltiplos clientes, nenhuma opção gratuita oferece gestão de clientes, copy integrada ou workflow completo. O custo do tempo perdido com ferramentas limitadas supera qualquer economia com plano gratuito." },
];

const relatedPages = [
  { href: "/nano-banana/nano-banana-pro", title: "Nano Banana Pro", description: "O modelo de geração de imagens do Calango Studio." },
  { href: "/ia-gratuita/ia-gratuita-para-gerar-imagens", title: "IA Gratuita para Gerar Imagens", description: "Opções gratuitas e seus limites reais." },
  { href: "/ferramentas/ia-para-designers", title: "IA para Designers", description: "Todas as ferramentas de IA para designers." },
];

export default function IaGratuitaParaDesignersPage() {
  return (
    <SeoLayout schema={schema} slug="ia-gratuita/ia-gratuita-para-designers">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">IA Gratuita para Designers</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Buscar por IA gratuita faz sentido. especialmente quando você ainda não sabe se a ferramenta vai funcionar para o seu fluxo. O mercado tem opções gratuitas. Mas é importante entender o que você recebe, o que fica de fora e qual é o custo real de usar ferramentas limitadas no dia a dia profissional. Porque &ldquo;grátis&rdquo; no contexto de ferramenta profissional raramente é realmente sem custo. o que você não paga em dinheiro, paga em tempo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que existe de gratuito para designers</h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Canva gratuito:</strong> editor com templates. IA limitada ao plano pago. Para uso básico resolve, mas sem geração de imagem avançada nem estilos personalizados por cliente.</li>
        <li><strong className="text-white">Adobe Firefly (plano gratuito):</strong> geração de imagem com créditos mensais limitados. Boa qualidade, integrado ao ecossistema Adobe. Sem gestão de clientes, sem copy, sem workflow integrado.</li>
        <li><strong className="text-white">ChatGPT gratuito (GPT-3.5):</strong> geração de texto. Não gera imagem no plano free. Esquece o contexto do cliente entre sessões. você reexplica tudo a cada conversa.</li>
        <li><strong className="text-white">Canva IA (Magic Studio):</strong> disponível parcialmente no gratuito. Funcionalidades de IA mais avançadas exigem plano pago. Qualidade inferior ao Canva Pro.</li>
        <li><strong className="text-white">Ideogram, Leonardo.ai:</strong> geradores de imagem com plano gratuito. Créditos limitados por dia, interface em inglês, sem gestão de clientes ou workflow de agência.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O custo real do gratuito</h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Ferramentas gratuitas têm limite de gerações, qualidade reduzida, suporte limitado a português e nenhuma integração de workflow. Para quem usa profissionalmente. atendendo clientes, produzindo volume. o gratuito vira gargalo rápido. Você alterna entre 3 ou 4 ferramentas, reexplica o contexto do cliente em cada uma, perde tempo testando prompts e depois ainda precisa ajustar o resultado.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Faça a conta: se você cobra R$50 por post e perde 3 horas procurando imagem e testando prompts em ferramentas gratuitas, você perdeu R$150 em tempo. Uma assinatura do Calango Studio por R$97,90 se paga em dois posts. Em um mês inteiro, a economia em tempo é de dezenas de horas. tempo que pode ser convertido em mais clientes, mais entregas ou simplesmente mais descanso.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O incentivo que muda a conta</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Google oferece U$300 em créditos para novas contas Google Cloud. O Calango Studio tem uma aula dentro da plataforma ensinando como resgatar esse incentivo. que equivale a aproximadamente 125.000 créditos na plataforma, ou quase 3.000 gerações. Isso não é gratuito, mas é o mais próximo de gratuito que existe com qualidade profissional. Para designers que estão começando e precisam de volume, esse incentivo faz a diferença: você paga a assinatura de R$97,90/mês e tem acesso a milhares de gerações adicionais sem custo extra.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner message="Ver planos a partir de R$97,90" slug="ia-gratuita/ia-gratuita-para-designers" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
