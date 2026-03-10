import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Calango Studio vs Freepik: qual é melhor para designers profissionais? | Calango Studio",
  description: "Compare Calango Studio e Freepik. Descubra por que gerar a imagem que você precisa é mais rápido e preciso do que procurar no banco.",
  openGraph: {
    title: "Calango Studio vs Freepik: qual é melhor para designers profissionais? | Calango Studio",
    description: "Compare Calango Studio e Freepik. Descubra por que gerar a imagem que você precisa é mais rápido e preciso do que procurar no banco.",
    url: "https://www.calangostudio.com.br/comparativo/calango-vs-freepik",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/comparativo/calango-vs-freepik" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Freepik tem geração de imagem por IA?", acceptedAnswer: { "@type": "Answer", text: "O Freepik lançou funcionalidades de IA, mas o modelo de negócio continua sendo banco de imagens. você busca no acervo. O Calango Studio é construído do zero para geração." } },
      { "@type": "Question", name: "Qual a diferença entre banco de imagens e gerador de imagem com IA?", acceptedAnswer: { "@type": "Answer", text: "Banco de imagens é passivo. você depende do que já foi criado. Gerador com IA é ativo. você descreve o que precisa e a imagem é criada." } },
      { "@type": "Question", name: "O Calango Studio substitui o Freepik completamente?", acceptedAnswer: { "@type": "Answer", text: "Para designers que atendem clientes e precisam de imagens personalizadas, sim. Para elementos genéricos como ícones e vetores técnicos, o Freepik ainda tem seu espaço." } },
      { "@type": "Question", name: "Qual é mais barato: Freepik Premium ou Calango Studio?", acceptedAnswer: { "@type": "Answer", text: "Os preços são comparáveis. A diferença é o que você recebe: o Freepik dá acesso a acervo. O Calango dá acesso a geração de imagem, copy, gestão de clientes e 12 ferramentas integradas." } },
    ],
  }],
};

const faqs = [
  { question: "Freepik tem geração de imagem por IA?", answer: "O Freepik lançou funcionalidades de IA, mas o modelo de negócio continua sendo banco de imagens. você busca no acervo. O Calango Studio é construído do zero para geração: você não procura, você cria. Essa é uma diferença estrutural, não apenas de recurso. A experiência de uso é completamente diferente." },
  { question: "Qual a diferença entre banco de imagens e gerador de imagem com IA?", answer: "Banco de imagens é passivo. você depende do que já foi criado por fotógrafos e designers. Gerador de imagem com IA é ativo. você descreve o que precisa e a imagem é criada especificamente para aquela necessidade. Não depende de acervo, não depende de sorte na busca." },
  { question: "O Calango Studio substitui o Freepik completamente?", answer: "Para designers que atendem clientes e precisam de imagens personalizadas, sim. o Calango gera exatamente o que você precisa sem depender de acervo. Para elementos genéricos como ícones e vetores técnicos, o Freepik ainda tem seu espaço como ferramenta complementar." },
  { question: "Qual é mais barato: Freepik Premium ou Calango Studio?", answer: "Os preços são comparáveis. A diferença é o que você recebe: o Freepik dá acesso a acervo. O Calango dá acesso a geração de imagem, copy, gestão de clientes e 12 ferramentas integradas. tudo em uma assinatura a partir de R$97,90/mês." },
];

const relatedPages = [
  { href: "/comparativo/calango-vs-designi", title: "Calango vs Designi", description: "Comparativo com outra plataforma brasileira popular." },
  { href: "/comparativo/alternativa-ao-freepik", title: "Alternativa ao Freepik", description: "Por que gerar é mais rápido do que procurar." },
  { href: "/banco-de-imagens/como-nao-depender-de-banco-de-imagens", title: "Não Depender de Banco", description: "Como migrar do banco para geração com IA." },
];

export default function CalangoVsFreepikPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo/calango-vs-freepik">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Calango Studio vs Freepik</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Freepik é uma das plataformas de recursos visuais mais usadas por designers no Brasil e no mundo. Milhões de imagens, vetores e templates disponíveis para download. O problema não é a quantidade. é o processo. Você abre o Freepik com uma imagem em mente, busca por palavras-chave, filtra estilo, licença, formato. Depois de 20 minutos, encontra algo &ldquo;quase certo&rdquo;. que ainda vai precisar de ajuste no Photoshop. E se precisar de algo específico para o estilo visual de um cliente? Provavelmente não existe no acervo. Porque não dá para ter tudo. O Calango Studio parte de uma lógica diferente: em vez de procurar, você gera. A imagem que você precisa, no estilo certo, com o contexto do cliente já carregado. É a diferença entre depender do que existe e criar o que você imaginou.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que o Freepik faz bem</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Freepik tem um acervo imenso e é útil para elementos genéricos. ícones, texturas, fundos e vetores padronizados. Para quem precisa de algo padrão rapidamente, é uma solução consolidada e popular. A busca por palavras-chave funciona bem para necessidades genéricas, e a qualidade dos recursos melhorou bastante nos últimos anos. Para designers que trabalham com projetos internos ou materiais institucionais simples, o Freepik resolve boa parte das necessidades visuais.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Onde o Calango Studio vai além</h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Quando você precisa de uma imagem específica. com o estilo do cliente, no cenário certo, com a pessoa ou produto exatos. o Freepik não consegue entregar porque depende do que já foi fotografado ou desenhado por alguém. O Calango gera. Você descreve ou escolhe o estilo e a imagem é criada para aquela necessidade exata. Não existe &ldquo;quase certo&rdquo;. existe exatamente o que você pediu.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead><tr className="border-b border-white/[0.06] bg-bg-tertiary">
            <th className="px-4 py-3 text-white font-semibold">Recurso</th>
            <th className="px-4 py-3 text-white font-semibold">Freepik</th>
            <th className="px-4 py-3 text-white font-semibold">Calango Studio</th>
          </tr></thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Geração de imagem por IA</td><td className="px-4 py-2">✗ (acervo fixo)</td><td className="px-4 py-2 text-accent">✓ (sob demanda)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Imagem com estilo do cliente</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (briefing salvo)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Sessão de fotos com referência</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (Estúdio de Foto)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">UGC realista</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (UGC Build)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Assets 3D em PNG transparente</td><td className="px-4 py-2">Limitado</td><td className="px-4 py-2 text-accent">✓ (Assets 3D)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Mockup de produto por IA</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (Mockup Produto)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Copy para redes sociais</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (CopyMaker)</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Gestão de clientes com briefing</td><td className="px-4 py-2">✗</td><td className="px-4 py-2 text-accent">✓ (Meus Clientes)</td></tr>
            <tr><td className="px-4 py-2">Tempo médio para ter a imagem</td><td className="px-4 py-2">20-40 min de busca</td><td className="px-4 py-2 text-accent">menos de 2 min</td></tr>
          </tbody>
        </table>
      </div>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa,copymaker" />
      <ResultadosGaleria />
      <CtaBanner slug="comparativo/calango-vs-freepik" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
