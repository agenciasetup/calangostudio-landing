import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Melhor Banco de Imagens para Designer em 2026 | Calango Studio",
  description: "Ranking dos melhores bancos de imagens para designers profissionais. Freepik, Designi, Envato — e por que geração com IA é a evolução.",
  openGraph: {
    title: "Melhor Banco de Imagens para Designer em 2026 | Calango Studio",
    description: "Ranking dos melhores bancos de imagens para designers profissionais. Freepik, Designi, Envato — e por que geração com IA é a evolução.",
    url: "https://www.calangostudio.com.br/banco-de-imagens/melhor-banco-de-imagens-para-designer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/banco-de-imagens/melhor-banco-de-imagens-para-designer" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Qual o melhor banco de imagens para designer?", acceptedAnswer: { "@type": "Answer", text: "Depende da necessidade. Freepik para recursos genéricos, Designi para mercado brasileiro, Envato para templates premium. Mas para conteúdo original, geração com IA é superior." } },
      { "@type": "Question", name: "Banco de imagens gratuito vale a pena?", acceptedAnswer: { "@type": "Answer", text: "Para uso pessoal ou projetos com orçamento zero, sim. Para uso profissional, as limitações de licença e qualidade costumam não compensar." } },
      { "@type": "Question", name: "Geração com IA substitui banco de imagens?", acceptedAnswer: { "@type": "Answer", text: "Para conteúdo original e personalizado, sim. Para recursos genéricos como ícones e texturas, bancos ainda são úteis." } },
      { "@type": "Question", name: "Qual banco de imagens tem melhor custo-benefício?", acceptedAnswer: { "@type": "Answer", text: "Considerando o que você recebe por real investido, plataformas de geração com IA oferecem mais valor — conteúdo ilimitado e original por assinatura fixa." } },
    ],
  }],
};

const faqs = [
  { question: "Qual o melhor banco de imagens para designer?", answer: "Depende da necessidade. O Freepik é excelente para recursos genéricos e vetores. O Designi é forte para o mercado brasileiro com templates localizados. O Envato Elements oferece templates premium de alta qualidade. Mas se você precisa de conteúdo original e personalizado para cada cliente, geração com IA — como o Calango Studio — é superior em velocidade, precisão e originalidade." },
  { question: "Banco de imagens gratuito vale a pena para uso profissional?", answer: "Para uso pessoal ou projetos com orçamento zero, bancos gratuitos como Unsplash e Pexels são úteis. Para uso profissional, as limitações são significativas: acervo menor, sem vetores ou templates, licenças que podem não cobrir uso comercial em todos os contextos, e imagens que milhares de outros designers já usaram. Para trabalho profissional, o investimento em ferramentas pagas se paga rapidamente." },
  { question: "Geração com IA substitui banco de imagens?", answer: "Para conteúdo original e personalizado — imagens de campanha, fotos de produto, mockups, UGC — sim. A geração com IA cria exatamente o que você precisa, no estilo do cliente, em segundos. Para recursos genéricos como ícones técnicos, texturas e elementos decorativos padronizados, bancos de imagens ainda são úteis como complemento." },
  { question: "Qual banco de imagens tem melhor custo-benefício?", answer: "Considerando o que você recebe por real investido, plataformas de geração com IA oferecem mais valor. O Calango Studio, por exemplo, inclui geração de imagem, copy, mockups, UGC, assets 3D e gestão de clientes — tudo por uma assinatura a partir de R$97,90/mês. Em bancos tradicionais, você paga por acesso a acervo. Com IA, você paga por capacidade de criação ilimitada." },
];

const relatedPages = [
  { href: "/comparativo/calango-vs-freepik", title: "Calango vs Freepik", description: "Comparativo com o maior banco de imagens." },
  { href: "/comparativo/calango-vs-designi", title: "Calango vs Designi", description: "Comparativo com a plataforma brasileira." },
  { href: "/banco-de-imagens/como-nao-depender-de-banco-de-imagens", title: "Não Depender de Banco", description: "Como migrar para geração com IA." },
];

export default function MelhorBancoDeImagensParaDesignerPage() {
  return (
    <SeoLayout schema={schema} slug="banco-de-imagens/melhor-banco-de-imagens-para-designer">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Melhor Banco de Imagens para Designer em 2026</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Se você é designer profissional, provavelmente assina ou já assinou pelo menos um banco de imagens. Freepik, Designi, Envato Elements, Shutterstock, Adobe Stock — cada um com suas vantagens e limitações. A pergunta &ldquo;qual o melhor banco de imagens?&rdquo; depende do que você precisa. Mas em 2026, a resposta mais honesta inclui uma categoria que não existia há poucos anos: geração de imagem com IA. Porque para muitas necessidades de designers profissionais, gerar a imagem é mais rápido, mais preciso e mais original do que procurar em qualquer banco.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Os principais bancos de imagens</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead><tr className="border-b border-white/[0.06] bg-bg-tertiary">
            <th className="px-4 py-3 text-white font-semibold">Plataforma</th>
            <th className="px-4 py-3 text-white font-semibold">Foco</th>
            <th className="px-4 py-3 text-white font-semibold">Melhor para</th>
            <th className="px-4 py-3 text-white font-semibold">Limitação</th>
          </tr></thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Freepik</td><td className="px-4 py-2">Vetores, fotos, templates</td><td className="px-4 py-2">Recursos genéricos</td><td className="px-4 py-2">Acervo fixo, busca por keyword</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Designi</td><td className="px-4 py-2">Templates BR, fontes, mockups</td><td className="px-4 py-2">Mercado brasileiro</td><td className="px-4 py-2">Sem geração, templates compartilhados</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Envato Elements</td><td className="px-4 py-2">Templates premium, vídeo</td><td className="px-4 py-2">Templates de alta qualidade</td><td className="px-4 py-2">Preço elevado, acervo fixo</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Shutterstock</td><td className="px-4 py-2">Fotos, vídeo, música</td><td className="px-4 py-2">Fotografia profissional</td><td className="px-4 py-2">Caro, acervo genérico</td></tr>
            <tr><td className="px-4 py-2 text-accent font-semibold">Calango Studio</td><td className="px-4 py-2">Geração com IA</td><td className="px-4 py-2">Conteúdo original e personalizado</td><td className="px-4 py-2">Não tem acervo de templates</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Por que geração com IA é a evolução</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Bancos de imagens foram essenciais para democratizar o acesso a recursos visuais de qualidade. Antes deles, cada necessidade visual exigia contratação de fotógrafo, ilustrador ou designer. O banco resolveu isso com escala — milhões de recursos acessíveis por assinatura. Mas o modelo tem um limite estrutural: depende do que já foi criado. Se ninguém fotografou ou desenhou exatamente o que você precisa, o recurso simplesmente não existe no acervo. A geração com IA remove essa limitação. Você descreve o que precisa — o estilo, o cenário, o contexto — e a imagem é criada sob demanda. Não depende de acervo. Não depende de sorte na busca. O resultado é original, personalizado e produzido em segundos.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que o Calango Studio oferece além de imagens</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio não é apenas um gerador de imagem — é uma plataforma completa de produção de conteúdo. Além de gerar imagens em diversos estilos, oferece geração de copy para redes sociais com CopyMaker, sessão de fotos virtual com Estúdio de Foto, UGC realista para anúncios com UGC Build, mockups de produto por IA, assets 3D em PNG transparente, remoção e troca de fundo e gestão de clientes com briefing salvo. São 12 ferramentas integradas em uma única plataforma, a partir de R$97,90/mês. Para designers que atendem múltiplos clientes e precisam de volume com qualidade, essa integração elimina a necessidade de alternar entre diversas plataformas e ferramentas diferentes.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="banco-de-imagens/melhor-banco-de-imagens-para-designer" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
