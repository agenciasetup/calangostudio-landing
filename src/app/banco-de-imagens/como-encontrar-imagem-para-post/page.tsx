import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Encontrar Imagem para Post de Redes Sociais | Calango Studio",
  description: "Pare de perder tempo procurando imagem para post. Gere a imagem que você precisa com IA. no estilo do cliente, em segundos.",
  openGraph: {
    title: "Como Encontrar Imagem para Post de Redes Sociais | Calango Studio",
    description: "Pare de perder tempo procurando imagem para post. Gere a imagem que você precisa com IA. no estilo do cliente, em segundos.",
    url: "https://www.calangostudio.com.br/banco-de-imagens/como-encontrar-imagem-para-post",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/banco-de-imagens/como-encontrar-imagem-para-post" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Onde encontrar imagem para post de Instagram?", acceptedAnswer: { "@type": "Answer", text: "Bancos de imagens como Freepik e Unsplash. Mas a forma mais eficiente é gerar a imagem com IA no Calango Studio. personalizada para o cliente." } },
      { "@type": "Question", name: "Como escolher a imagem certa para um post?", acceptedAnswer: { "@type": "Answer", text: "A imagem deve comunicar a mensagem do post e estar alinhada com a identidade visual da marca. Com IA, você descreve exatamente o que precisa." } },
      { "@type": "Question", name: "Posso usar imagem de banco em post comercial?", acceptedAnswer: { "@type": "Answer", text: "Depende da licença. Bancos gratuitos nem sempre permitem uso comercial sem restrições. Com IA, a imagem gerada é original." } },
      { "@type": "Question", name: "Quanto tempo se gasta procurando imagem para post?", acceptedAnswer: { "@type": "Answer", text: "Em média 15 a 30 minutos por imagem em bancos. Com geração por IA, menos de 2 minutos." } },
    ],
  }],
};

const faqs = [
  { question: "Onde encontrar imagem para post de Instagram?", answer: "As fontes tradicionais são bancos de imagens como Freepik, Unsplash, Pexels e Designi. Mas a forma mais eficiente em 2026 é gerar a imagem com IA. no Calango Studio, você descreve o que precisa e a imagem é criada sob demanda, já alinhada com o estilo visual do cliente. Sem busca, sem filtro, sem adaptação." },
  { question: "Como escolher a imagem certa para um post?", answer: "A imagem deve comunicar a mensagem do post e estar alinhada com a identidade visual da marca. Cores, estilo e tom precisam ser consistentes. Em bancos de imagens, isso significa filtrar e adaptar até encontrar algo próximo. Com IA, você descreve exatamente o que precisa. estilo, cenário, elementos. e a imagem é gerada para aquela necessidade específica." },
  { question: "Posso usar imagem de banco em post comercial?", answer: "Depende da licença. Bancos gratuitos como Unsplash permitem uso comercial, mas com restrições em alguns contextos. Bancos pagos geralmente oferecem licença comercial ampla. Com geração por IA no Calango Studio, a imagem é original e criada para você. sem preocupação com licença de terceiros ou uso compartilhado." },
  { question: "Quanto tempo se gasta procurando imagem para post?", answer: "Em média 15 a 30 minutos por imagem em bancos. entre busca, filtro, download, teste no layout e eventuais ajustes. Multiplicado por 20 a 30 posts por mês por cliente, são horas de trabalho apenas buscando imagens. Com geração por IA, o processo leva menos de 2 minutos por imagem. e o resultado é personalizado." },
];

const relatedPages = [
  { href: "/social-media/como-criar-copy-para-post", title: "Copy para Post", description: "Gere textos para redes sociais com IA." },
  { href: "/social-media/como-fazer-carrossel-instagram-ia", title: "Carrossel para Instagram", description: "Crie carrosséis com imagens geradas por IA." },
  { href: "/banco-de-imagens/imagem-gratuita-para-uso-comercial", title: "Imagem Gratuita", description: "Opções gratuitas vs geração com IA." },
];

export default function ComoEncontrarImagemParaPostPage() {
  return (
    <SeoLayout schema={schema} slug="banco-de-imagens/como-encontrar-imagem-para-post">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Como Encontrar Imagem para Post de Redes Sociais</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Todo designer e social media manager conhece a rotina: precisa criar um post, abre o banco de imagens, digita palavras-chave, filtra por estilo, formato, orientação, licença. Depois de 20 minutos, encontra algo que &ldquo;mais ou menos serve&rdquo;. mas precisa de ajuste de cor, recorte ou composição. E quando o cliente tem um estilo visual específico, a busca fica ainda mais frustrante. Porque bancos de imagens dependem do que já existe. Se ninguém criou exatamente o que você precisa, o recurso simplesmente não está lá. Essa é a realidade do modelo de banco. e é o motivo pelo qual cada vez mais profissionais estão migrando para geração com IA.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O processo tradicional: buscar, filtrar, adaptar</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O fluxo clássico para encontrar imagem para post envolve vários passos: abrir o banco de imagens, pensar nas palavras-chave certas (que nem sempre descrevem o que você tem em mente), filtrar resultados por estilo e formato, baixar as opções mais próximas, testar no layout do post, fazer ajustes de cor e composição. Para um único post, esse processo pode levar 15 a 30 minutos. Para um calendário mensal com 20 posts, são 5 a 10 horas apenas buscando imagens. Tempo que poderia ser investido em estratégia, criação e atendimento ao cliente.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">A alternativa: gerar em vez de procurar</h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        No Calango Studio, o processo é diferente: você descreve a imagem que precisa e ela é gerada em segundos. Não existe busca por palavra-chave, não existe filtro, não existe &ldquo;quase certo&rdquo;. Se o cliente tem uma padaria artesanal e você precisa de uma foto de pães rústicos em bancada de madeira com luz natural quente, é exatamente isso que a IA gera. Não uma foto genérica de padaria. uma imagem feita para aquele post, aquele cliente, aquele momento.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Cada cliente pode ter seu briefing salvo no sistema. estilo visual, paleta de cores, tom de voz, preferências. Quando você gera conteúdo para aquele cliente, a IA já conhece o contexto. O resultado é consistente com a identidade da marca sem precisar ajustar manualmente cada imagem. Para social media managers que atendem múltiplos clientes, isso elimina horas de trabalho repetitivo por semana.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Dicas para quem ainda usa bancos de imagens</h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Use palavras-chave em inglês</strong>. mesmo em bancos brasileiros, o acervo em inglês costuma ser maior e mais variado.</li>
        <li><strong className="text-white">Filtre por orientação primeiro</strong>. isso elimina rapidamente resultados que não servem para o formato do post (quadrado, vertical, horizontal).</li>
        <li><strong className="text-white">Salve coleções por cliente</strong>. organize imagens por marca para manter consistência visual ao longo do tempo.</li>
        <li><strong className="text-white">Considere migrar para geração</strong>. se você gasta mais de 2 horas por semana buscando imagens, a geração com IA provavelmente já compensa financeiramente.</li>
      </ul>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="banco-de-imagens/como-encontrar-imagem-para-post" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
