import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Alternativa ao Freepik para Designers Profissionais | Calango Studio",
  description: "Procurando alternativa ao Freepik? Conheça o Calango Studio — gere imagens com IA em vez de procurar no banco. Mais rápido, mais preciso.",
  openGraph: {
    title: "Alternativa ao Freepik para Designers Profissionais | Calango Studio",
    description: "Procurando alternativa ao Freepik? Conheça o Calango Studio — gere imagens com IA em vez de procurar no banco. Mais rápido, mais preciso.",
    url: "https://www.calangostudio.com.br/comparativo/alternativa-ao-freepik",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/comparativo/alternativa-ao-freepik" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Por que procurar alternativa ao Freepik?", acceptedAnswer: { "@type": "Answer", text: "O Freepik é um banco de imagens — depende de acervo fixo. Para necessidades específicas, você gasta tempo procurando algo que talvez não exista. A alternativa é gerar a imagem com IA." } },
      { "@type": "Question", name: "O Calango Studio é um banco de imagens?", acceptedAnswer: { "@type": "Answer", text: "Não. O Calango Studio é uma plataforma de geração de conteúdo com IA. Você descreve o que precisa e a imagem é criada — não baixada de um acervo." } },
      { "@type": "Question", name: "Posso usar o Calango Studio e o Freepik juntos?", acceptedAnswer: { "@type": "Answer", text: "Sim. O Freepik é útil para recursos genéricos. O Calango Studio é ideal para conteúdo original e personalizado. São ferramentas complementares." } },
      { "@type": "Question", name: "Qual a vantagem de gerar imagem em vez de procurar?", acceptedAnswer: { "@type": "Answer", text: "Velocidade e precisão. Gerar leva menos de 2 minutos. Procurar no banco pode levar 20-40 minutos — e o resultado pode não ser exatamente o que você precisava." } },
    ],
  }],
};

const faqs = [
  { question: "Por que procurar alternativa ao Freepik?", answer: "O Freepik é excelente para recursos genéricos — ícones, texturas, vetores padronizados. Mas quando você precisa de algo específico para um cliente, o modelo de banco de imagens mostra suas limitações: você gasta tempo procurando algo que talvez não exista no acervo. A alternativa é gerar a imagem com IA — descrevendo exatamente o que você precisa, no estilo certo, em segundos." },
  { question: "O Calango Studio é um banco de imagens?", answer: "Não. O Calango Studio é uma plataforma de geração de conteúdo com IA. A diferença é fundamental: banco de imagens depende de acervo fixo — se não existe, você não tem. No Calango, você descreve o que precisa e a imagem é criada sob demanda. Não existe &ldquo;não achei&rdquo; — existe &ldquo;descreva o que você quer&rdquo;." },
  { question: "Posso usar o Calango Studio e o Freepik juntos?", answer: "Sim, e muitos designers fazem isso. O Freepik é útil para recursos genéricos que não precisam de personalização — ícones, texturas, elementos decorativos. O Calango Studio é ideal para conteúdo original e personalizado — imagens de campanha, fotos de produto, mockups, UGC. São ferramentas complementares com funções diferentes." },
  { question: "Qual a vantagem de gerar imagem em vez de procurar?", answer: "Velocidade e precisão. Gerar uma imagem no Calango Studio leva menos de 2 minutos. Procurar no Freepik pode levar 20 a 40 minutos — filtrando por estilo, licença, formato — e o resultado pode não ser exatamente o que você precisava. Com IA, você descreve e recebe. Sem compromisso, sem &ldquo;quase certo&rdquo;." },
];

const relatedPages = [
  { href: "/comparativo/calango-vs-freepik", title: "Calango vs Freepik", description: "Comparativo detalhado entre as plataformas." },
  { href: "/comparativo/alternativa-ao-designi", title: "Alternativa ao Designi", description: "Comparativo com a plataforma brasileira." },
  { href: "/banco-de-imagens/como-nao-depender-de-banco-de-imagens", title: "Não Depender de Banco", description: "Como migrar do banco para geração com IA." },
];

export default function AlternativaAoFreepikPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo/alternativa-ao-freepik">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Alternativa ao Freepik para Designers Profissionais</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Se você é designer e usa o Freepik como parte do seu fluxo de trabalho, provavelmente já passou por isso: precisa de uma imagem específica para um cliente, abre o Freepik, digita palavras-chave, filtra por estilo, por licença, por formato. Depois de vários minutos de busca, encontra algo que &ldquo;quase serve&rdquo; — mas precisa de ajuste no Photoshop para ficar do jeito que o cliente quer. E se o estilo visual do cliente é muito específico, talvez nada no acervo sirva. Esse é o limite do modelo de banco de imagens: você depende do que já foi criado. Se não existe, você não tem. A alternativa é mudar a lógica: em vez de procurar, gerar. Em vez de depender de acervo, criar sob demanda. Essa é a proposta do Calango Studio.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O problema do modelo de banco de imagens</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Bancos de imagens foram a melhor solução disponível por muitos anos. Antes da IA generativa, a única alternativa era contratar fotógrafo ou ilustrador para cada necessidade. O banco democratizou o acesso a recursos visuais de qualidade. Mas o modelo tem limitações estruturais: o acervo é finito, a busca depende de palavras-chave que nem sempre descrevem o que você precisa, e milhares de outros designers estão usando as mesmas imagens. Quando você precisa de algo único — algo que represente especificamente o estilo de um cliente — o banco não consegue entregar. E é aí que a geração com IA muda o jogo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Como o Calango Studio funciona como alternativa</h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        No Calango Studio, você não busca — você descreve. A imagem é gerada sob demanda, no estilo que você precisa, com o contexto do cliente já carregado no sistema. Se atende vários clientes, cada um tem seu briefing salvo — e as imagens geradas já respeitam o estilo visual de cada marca. Em vez de gastar 30 minutos buscando e adaptando, você gasta 2 minutos descrevendo e gerando.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Além de imagens, o Calango Studio oferece ferramentas que bancos de imagens não têm: geração de copy para redes sociais, sessão de fotos com IA, UGC realista, mockups de produto, assets 3D e gestão de clientes. É uma plataforma completa de produção de conteúdo — não apenas um repositório de recursos visuais. Para designers que atendem múltiplos clientes e precisam produzir conteúdo original com velocidade, essa diferença é transformadora.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Quando o Freepik ainda faz sentido</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Freepik continua sendo útil para recursos genéricos que não exigem personalização — ícones, texturas, fundos padronizados, vetores técnicos. Se você precisa de um ícone de engrenagem ou uma textura de madeira, o Freepik resolve rápido. Mas para conteúdo original, personalizado e alinhado com a identidade visual de cada cliente, a geração com IA é mais eficiente, mais rápida e mais precisa. A questão não é substituir completamente — é complementar com a ferramenta certa para cada tipo de necessidade.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="comparativo/alternativa-ao-freepik" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
