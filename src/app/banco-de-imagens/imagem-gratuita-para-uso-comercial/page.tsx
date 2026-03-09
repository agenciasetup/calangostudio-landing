import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Imagem Gratuita para Uso Comercial: Onde Encontrar e Alternativas | Calango Studio",
  description: "Onde encontrar imagens gratuitas para uso comercial. Unsplash, Pexels, Pixabay — e por que gerar com IA é mais eficiente para profissionais.",
  openGraph: {
    title: "Imagem Gratuita para Uso Comercial: Onde Encontrar e Alternativas | Calango Studio",
    description: "Onde encontrar imagens gratuitas para uso comercial. Unsplash, Pexels, Pixabay — e por que gerar com IA é mais eficiente para profissionais.",
    url: "https://www.calangostudio.com.br/banco-de-imagens/imagem-gratuita-para-uso-comercial",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/banco-de-imagens/imagem-gratuita-para-uso-comercial" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Posso usar imagem gratuita para fins comerciais?", acceptedAnswer: { "@type": "Answer", text: "Depende da licença. Unsplash e Pexels permitem uso comercial. Mas verifique sempre os termos — algumas imagens têm restrições para uso em produtos e merchandising." } },
      { "@type": "Question", name: "Qual a diferença entre uso comercial e uso editorial?", acceptedAnswer: { "@type": "Answer", text: "Uso comercial é para promover produto ou serviço. Uso editorial é para ilustrar notícia ou conteúdo informativo. Bancos gratuitos nem sempre permitem ambos." } },
      { "@type": "Question", name: "Imagem gratuita tem qualidade suficiente para anúncio?", acceptedAnswer: { "@type": "Answer", text: "Algumas sim, mas o acervo é limitado comparado a bancos pagos. E milhares de outros anunciantes usam as mesmas imagens." } },
      { "@type": "Question", name: "Gerar imagem com IA é mais seguro do que usar gratuita?", acceptedAnswer: { "@type": "Answer", text: "Para uso comercial profissional, sim. A imagem gerada é original, sem preocupação com direitos de terceiros ou uso compartilhado." } },
    ],
  }],
};

const faqs = [
  { question: "Posso usar imagem gratuita para fins comerciais?", answer: "Depende da licença específica de cada plataforma e cada imagem. Unsplash e Pexels geralmente permitem uso comercial sob suas licenças próprias. Mas existem exceções — imagens com pessoas reconhecíveis podem exigir liberação de modelo, e alguns usos específicos (como impressão em produtos) podem ter restrições. Sempre verifique os termos antes de usar em materiais comerciais." },
  { question: "Qual a diferença entre uso comercial e uso editorial?", answer: "Uso comercial é qualquer uso que promova, venda ou represente um produto, serviço ou marca — anúncios, posts de redes sociais, catálogos, embalagens. Uso editorial é para ilustrar conteúdo informativo — artigos, reportagens, posts educacionais. Bancos gratuitos nem sempre permitem uso comercial irrestrito, enquanto uso editorial geralmente é mais permissivo." },
  { question: "Imagem gratuita tem qualidade suficiente para anúncio profissional?", answer: "Algumas imagens gratuitas têm qualidade excelente — Unsplash em particular tem fotos de alta resolução. Mas o acervo é significativamente menor que bancos pagos, e as imagens mais populares são usadas por milhares de outros anunciantes. Para campanhas que precisam de originalidade e alinhamento com a marca, bancos gratuitos raramente atendem a necessidade completa." },
  { question: "Gerar imagem com IA é mais seguro do que usar imagem gratuita?", answer: "Para uso comercial profissional, sim. A imagem gerada no Calango Studio é original — criada sob demanda para sua necessidade específica. Não existe preocupação com direitos de imagem de terceiros, uso compartilhado com concorrentes ou limitações de licença. É conteúdo seu, gerado para o seu cliente, pronto para uso comercial." },
];

const relatedPages = [
  { href: "/banco-de-imagens/como-encontrar-imagem-para-post", title: "Imagem para Post", description: "Como encontrar ou gerar imagens para redes sociais." },
  { href: "/banco-de-imagens/melhor-banco-de-imagens-para-designer", title: "Melhor Banco de Imagens", description: "Ranking dos principais bancos para designers." },
  { href: "/banco-de-imagens/como-nao-depender-de-banco-de-imagens", title: "Não Depender de Banco", description: "Como migrar para geração com IA." },
];

export default function ImagemGratuitaParaUsoComericalPage() {
  return (
    <SeoLayout schema={schema} slug="banco-de-imagens/imagem-gratuita-para-uso-comercial">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Imagem Gratuita para Uso Comercial: Onde Encontrar e Alternativas</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A busca por &ldquo;imagem gratuita para uso comercial&rdquo; é uma das mais comuns entre designers, social media managers e empreendedores. A necessidade é real: conteúdo visual é essencial para qualquer presença digital, e nem todo projeto tem orçamento para banco de imagens pago ou produção fotográfica. As boas notícias: existem plataformas que oferecem imagens de qualidade com licença para uso comercial. As notícias menos boas: o acervo é limitado, as imagens são compartilhadas por milhares de outros usuários, e encontrar algo que se alinhe com a identidade visual de uma marca específica pode ser difícil. Para profissionais que precisam de conteúdo original e personalizado, a geração com IA é a evolução natural.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Onde encontrar imagens gratuitas para uso comercial</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead><tr className="border-b border-white/[0.06] bg-bg-tertiary">
            <th className="px-4 py-3 text-white font-semibold">Plataforma</th>
            <th className="px-4 py-3 text-white font-semibold">Tipo de conteúdo</th>
            <th className="px-4 py-3 text-white font-semibold">Uso comercial</th>
            <th className="px-4 py-3 text-white font-semibold">Limitação</th>
          </tr></thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Unsplash</td><td className="px-4 py-2">Fotos</td><td className="px-4 py-2">Sim (licença própria)</td><td className="px-4 py-2">Sem vetores, muito usada</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Pexels</td><td className="px-4 py-2">Fotos e vídeos</td><td className="px-4 py-2">Sim (licença própria)</td><td className="px-4 py-2">Acervo menor, muito usada</td></tr>
            <tr className="border-b border-white/[0.04]"><td className="px-4 py-2">Pixabay</td><td className="px-4 py-2">Fotos, vetores, vídeos</td><td className="px-4 py-2">Sim (com restrições)</td><td className="px-4 py-2">Qualidade variável</td></tr>
            <tr><td className="px-4 py-2">Freepik (gratuito)</td><td className="px-4 py-2">Vetores, fotos, templates</td><td className="px-4 py-2">Sim (com atribuição)</td><td className="px-4 py-2">Exige crédito ao autor</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Os problemas de depender de imagens gratuitas</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Imagens gratuitas resolvem necessidades pontuais, mas para uso profissional contínuo, os problemas se acumulam. Primeiro, o acervo é limitado — para necessidades específicas, simplesmente não existe a imagem certa. Segundo, as imagens mais populares aparecem em milhares de sites e anúncios — seu conteúdo perde originalidade. Terceiro, a busca consome tempo: encontrar, testar, verificar licença, adaptar para o projeto. Para um post ocasional, funciona. Para produção profissional com múltiplos clientes e dezenas de peças por mês, o modelo gratuito se torna ineficiente.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">A alternativa profissional: geração com IA</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Para designers e social media managers que produzem conteúdo profissional, a geração com IA oferece vantagens que nenhum banco gratuito consegue. No Calango Studio, cada imagem é original — criada sob demanda para aquela necessidade específica. Não existe preocupação com licença, atribuição ou uso compartilhado. O conteúdo é gerado no estilo do cliente, com o contexto da marca já carregado. Em menos de 2 minutos, você tem uma imagem personalizada, pronta para uso comercial, sem restrições. A partir de R$97,90/mês, o custo por imagem gerada é uma fração do que se gasta em tempo procurando em bancos gratuitos — quando se calcula o valor da hora de trabalho investida em busca e adaptação.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="banco-de-imagens/imagem-gratuita-para-uso-comercial" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
