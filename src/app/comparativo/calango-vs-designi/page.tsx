import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Calango Studio vs Designi: qual plataforma rende mais para designers? | Calango Studio",
  description: "Compare Calango Studio e Designi. Veja por que gerar imagens com IA é mais produtivo do que baixar recursos prontos de um banco.",
  openGraph: {
    title: "Calango Studio vs Designi: qual plataforma rende mais para designers? | Calango Studio",
    description: "Compare Calango Studio e Designi. Veja por que gerar imagens com IA é mais produtivo do que baixar recursos prontos de um banco.",
    url: "https://www.calangostudio.com.br/comparativo/calango-vs-designi",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/comparativo/calango-vs-designi" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "O Designi tem geração de imagem com IA?", acceptedAnswer: { "@type": "Answer", text: "Não. O Designi é um banco de recursos visuais. O Calango Studio gera imagens sob demanda usando IA." } },
      { "@type": "Question", name: "Qual a diferença entre Designi e Calango Studio?", acceptedAnswer: { "@type": "Answer", text: "O Designi oferece templates e recursos para download. O Calango Studio gera imagens, copies e mockups com IA, personalizados para cada cliente." } },
      { "@type": "Question", name: "O Calango Studio substitui o Designi?", acceptedAnswer: { "@type": "Answer", text: "Para designers que precisam de conteúdo original e personalizado, sim. Para quem precisa de templates genéricos editáveis, o Designi ainda tem seu espaço." } },
      { "@type": "Question", name: "Qual é mais barato: Designi ou Calango Studio?", acceptedAnswer: { "@type": "Answer", text: "Os preços são comparáveis. A diferença é o que você recebe: o Designi dá acesso a acervo de templates. O Calango dá acesso a geração com IA, copy, gestão de clientes e 12 ferramentas integradas." } },
    ],
  }],
};

const faqs = [
  { question: "O Designi tem geração de imagem com IA?", answer: "Não. O Designi é um banco de recursos visuais — templates, fontes, mockups, vetores e fotos para download. Não gera imagens sob demanda. O Calango Studio é construído do zero para geração com IA: você descreve o que precisa e a imagem é criada. São modelos de negócio fundamentalmente diferentes." },
  { question: "Qual a diferença entre Designi e Calango Studio?", answer: "O Designi oferece templates e recursos prontos para download e edição. O Calango Studio gera imagens, copies e mockups com IA, personalizados para cada cliente e briefing. No Designi, você adapta o que existe. No Calango, você cria o que precisa — do zero, em segundos." },
  { question: "O Calango Studio substitui o Designi?", answer: "Para designers que atendem clientes e precisam de conteúdo original e personalizado, sim — o Calango gera exatamente o que você precisa sem depender de acervo. Para quem precisa de templates genéricos editáveis ou recursos como fontes e ícones, o Designi ainda tem seu espaço como ferramenta complementar." },
  { question: "Qual é mais barato: Designi ou Calango Studio?", answer: "Os preços são comparáveis. A diferença é o que você recebe: o Designi dá acesso a acervo de templates e recursos. O Calango dá acesso a geração de imagem, copy, gestão de clientes e 12 ferramentas integradas — tudo em uma assinatura a partir de R$97,90/mês." },
];

const relatedPages = [
  { href: "/comparativo/calango-vs-freepik", title: "Calango vs Freepik", description: "Comparativo com o maior banco de imagens do mundo." },
  { href: "/comparativo/alternativa-ao-designi", title: "Alternativa ao Designi", description: "Por que gerar é mais produtivo do que adaptar." },
  { href: "/banco-de-imagens/melhor-banco-de-imagens-para-designer", title: "Melhor Banco de Imagens", description: "Ranking e análise dos principais bancos." },
];

export default function CalangoVsDesigniPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo/calango-vs-designi">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Calango Studio vs Designi</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Designi é uma plataforma brasileira muito popular entre designers. Milhares de templates, fontes, mockups, vetores e fotos disponíveis por assinatura. Para quem trabalha com design gráfico, é um recurso valioso — especialmente pelo acervo em português e com estética adaptada ao mercado brasileiro. Mas o modelo é o mesmo de todo banco de recursos: você busca, filtra, baixa e adapta. Se o template não existe no acervo, você não tem. Se o estilo visual do cliente é específico, você precisa editar pesado para chegar no resultado. O Calango Studio parte de uma premissa diferente: em vez de procurar e adaptar, você descreve e gera. A imagem é criada sob demanda, no estilo que você precisa, com o contexto do cliente já carregado. Não depende de acervo. Não depende de sorte na busca. É a diferença entre trabalhar com o que existe e criar o que você imaginou.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que o Designi faz bem</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Designi tem um acervo robusto de templates para redes sociais, apresentações, materiais impressos e muito mais. As fontes e mockups são de boa qualidade, e o fato de ser brasileiro significa que o conteúdo é adaptado para o mercado local — datas comemorativas, formatos de post populares no Brasil, estética que faz sentido para o público brasileiro. Para designers que trabalham com projetos padronizados e precisam de recursos editáveis rapidamente, o Designi é uma ferramenta sólida e com bom custo-benefício.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Onde o Calango Studio vai além</h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Quando você precisa de algo que não existe em nenhum banco — uma imagem específica para o estilo de um cliente, um mockup de produto no cenário exato, uma sessão de fotos com referência visual — o Calango Studio gera. Você não depende de acervo. Não precisa gastar tempo adaptando templates que &ldquo;quase servem&rdquo;. A imagem é criada sob demanda, no estilo certo, em segundos.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead><tr className="border-b border-white/[0.06] bg-bg-tertiary">
            <th className="px-4 py-3 text-white font-semibold">Recurso</th>
            <th className="px-4 py-3 text-white font-semibold">Designi</th>
            <th className="px-4 py-3 text-white font-semibold">Calango Studio</th>
          </tr></thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Geração de imagem por IA</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (sob demanda)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Templates editáveis</td><td className="px-4 py-2">✓ (acervo)</td><td className="px-4 py-2">✗ (gera do zero)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Imagem com estilo do cliente</td><td className="px-4 py-2">✗ (adaptação manual)</td><td className="px-4 py-2 text-accent">✓ (briefing salvo)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Sessão de fotos com referência</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (Estúdio de Foto)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">UGC realista</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (UGC Build)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Mockup de produto por IA</td><td className="px-4 py-2">✗ (templates fixos)</td><td className="px-4 py-2 text-accent">✓ (Mockup Produto)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Copy para redes sociais</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (CopyMaker)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Gestão de clientes com briefing</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (Meus Clientes)</td></tr>
            <tr><td className="px-4 py-2">Conteúdo original por cliente</td><td className="px-4 py-2">✗ (mesmo acervo para todos)</td><td className="px-4 py-2 text-accent">✓ (único por briefing)</td></tr>
          </tbody>
        </table>
      </div>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="comparativo/calango-vs-designi" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
