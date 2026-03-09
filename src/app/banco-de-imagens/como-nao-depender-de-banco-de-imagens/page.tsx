import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Não Depender de Banco de Imagens: Guia para Designers | Calango Studio",
  description: "Aprenda a sair da dependência de bancos de imagens usando geração com IA. Produza conteúdo original, personalizado e mais rápido.",
  openGraph: {
    title: "Como Não Depender de Banco de Imagens: Guia para Designers | Calango Studio",
    description: "Aprenda a sair da dependência de bancos de imagens usando geração com IA. Produza conteúdo original, personalizado e mais rápido.",
    url: "https://www.calangostudio.com.br/banco-de-imagens/como-nao-depender-de-banco-de-imagens",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/banco-de-imagens/como-nao-depender-de-banco-de-imagens" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como não depender de banco de imagens",
      description: "Guia prático para migrar de bancos de imagens para geração com IA.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Identifique o tempo gasto", text: "Calcule quantas horas por semana você gasta buscando imagens em bancos." },
        { "@type": "HowToStep", position: 2, name: "Teste geração com IA", text: "Experimente gerar as mesmas imagens que você buscaria no banco." },
        { "@type": "HowToStep", position: 3, name: "Configure briefings de clientes", text: "Salve o estilo visual de cada cliente para gerações consistentes." },
        { "@type": "HowToStep", position: 4, name: "Migre gradualmente", text: "Comece usando IA para conteúdo personalizado e banco para recursos genéricos." },
        { "@type": "HowToStep", position: 5, name: "Meça os resultados", text: "Compare tempo, qualidade e originalidade antes e depois da migração." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Preciso cancelar meu banco de imagens para usar IA?", acceptedAnswer: { "@type": "Answer", text: "Não necessariamente. Muitos designers mantêm banco para recursos genéricos e usam IA para conteúdo personalizado." } },
        { "@type": "Question", name: "A transição de banco para IA é difícil?", acceptedAnswer: { "@type": "Answer", text: "Não. O processo é intuitivo: descreva o que precisa e a IA gera. Em poucos dias de uso, a maioria dos designers já se adapta." } },
        { "@type": "Question", name: "Gerar com IA é mais caro que banco de imagens?", acceptedAnswer: { "@type": "Answer", text: "Os preços são comparáveis. Mas quando se calcula o tempo economizado na busca, a geração com IA costuma ser mais econômica." } },
        { "@type": "Question", name: "Clientes percebem a diferença entre imagem de banco e gerada com IA?", acceptedAnswer: { "@type": "Answer", text: "Sim — positivamente. Imagens geradas são personalizadas para a marca. Clientes notam quando o conteúdo parece único e alinhado." } },
      ],
    },
  ],
};

const faqs = [
  { question: "Preciso cancelar meu banco de imagens para usar IA?", answer: "Não necessariamente. A migração pode ser gradual. Muitos designers mantêm um banco de imagens para recursos genéricos — ícones, texturas, elementos decorativos — e usam geração com IA para conteúdo personalizado que precisa ser original e alinhado com a marca do cliente. Com o tempo, a maioria percebe que o uso do banco diminui naturalmente conforme a IA assume mais do fluxo de produção." },
  { question: "A transição de banco de imagens para IA é difícil?", answer: "Não. O processo de geração é intuitivo: você descreve o que precisa — estilo, cenário, elementos — e a IA gera a imagem. Não exige conhecimento técnico de IA ou prompts complexos. Em poucos dias de uso, a maioria dos designers já se adapta e começa a produzir mais rápido do que no fluxo anterior com bancos de imagens." },
  { question: "Gerar com IA é mais caro que banco de imagens?", answer: "Os preços de assinatura são comparáveis — tanto bancos de imagens quanto plataformas de geração com IA operam com assinatura mensal. Mas quando se calcula o tempo economizado na busca, filtro e adaptação, a geração com IA costuma ser significativamente mais econômica. O tempo que você economiza pode ser convertido em mais entregas — o que significa mais receita." },
  { question: "Clientes percebem a diferença entre imagem de banco e gerada com IA?", answer: "Sim — e positivamente. Imagens geradas com IA são personalizadas para a marca do cliente, o que resulta em conteúdo que parece único e intencional. Clientes que estão acostumados com conteúdo genérico de banco de imagens percebem quando as peças visuais estão genuinamente alinhadas com sua identidade visual. Isso aumenta a percepção de valor do seu trabalho." },
];

const relatedPages = [
  { href: "/banco-de-imagens/melhor-banco-de-imagens-para-designer", title: "Melhor Banco de Imagens", description: "Ranking dos principais bancos para designers." },
  { href: "/comparativo/alternativa-ao-freepik", title: "Alternativa ao Freepik", description: "Por que gerar é mais rápido que procurar." },
  { href: "/ferramentas/ia-para-designers", title: "IA para Designers", description: "Todas as ferramentas de IA para designers." },
];

export default function ComoNaoDependeDeBancoDeImagensPage() {
  return (
    <SeoLayout schema={schema} slug="banco-de-imagens/como-nao-depender-de-banco-de-imagens">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Como Não Depender de Banco de Imagens</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Bancos de imagens foram a solução padrão por anos. Precisava de uma foto? Abria o banco, buscava, baixava. O modelo funcionou — e ainda funciona para necessidades genéricas. Mas se você é designer profissional que atende clientes, já percebeu as limitações: o acervo é finito, as boas imagens são usadas por milhares de outros designers, e encontrar algo que se encaixe no estilo visual de um cliente específico é uma busca que consome tempo e energia. A dependência de banco de imagens cria um gargalo silencioso no seu fluxo de trabalho — você não percebe quanto tempo gasta até que calcule. E quando calcula, o número assusta: para muitos designers, são 5 a 10 horas por semana apenas buscando, filtrando e adaptando imagens de banco.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O custo oculto dos bancos de imagens</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O custo de um banco de imagens não é apenas a assinatura mensal. É o tempo investido em busca, filtro, download, teste no layout, ajuste de cores, adaptação de composição. Para cada imagem que você usa, provavelmente abriu 20 opções antes de encontrar uma que &ldquo;mais ou menos serve&rdquo;. Esse tempo tem valor — é tempo que poderia estar sendo investido em atendimento ao cliente, estratégia criativa ou produção original. Quando você depende de banco para a maioria do seu conteúdo visual, está trocando tempo por conveniência — mas a conveniência tem um preço que poucos calculam.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Passo a passo: migrar para geração com IA</h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Calcule seu tempo atual</strong> — durante uma semana, anote quanto tempo gasta buscando imagens em bancos. Inclua busca, filtro, download, teste e adaptação. O número provavelmente vai surpreender.</li>
        <li><strong className="text-white">Teste a geração com IA</strong> — no Calango Studio, tente gerar as mesmas imagens que você buscaria no banco. Descreva o que precisa e compare o resultado com o que encontraria no acervo.</li>
        <li><strong className="text-white">Configure briefings de clientes</strong> — salve o estilo visual, paleta de cores e preferências de cada cliente. As gerações futuras já virão alinhadas com a identidade da marca.</li>
        <li><strong className="text-white">Migre gradualmente</strong> — comece usando IA para conteúdo que precisa ser personalizado (imagens de campanha, fotos de produto, mockups) e mantenha o banco para recursos genéricos (ícones, texturas).</li>
        <li><strong className="text-white">Meça os resultados</strong> — depois de um mês, compare: tempo gasto, qualidade das entregas, feedback dos clientes, volume de produção. Os números falam por si.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que muda na prática</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Designers que migraram de bancos de imagens para geração com IA relatam mudanças significativas no fluxo de trabalho: menos tempo em busca e adaptação, mais tempo em criação e estratégia. O conteúdo entregue é mais original e alinhado com cada cliente, o que aumenta a percepção de valor do trabalho. Muitos conseguem atender mais clientes no mesmo tempo — ou entregar mais peças por cliente, aumentando o ticket médio. A IA não substitui o designer — libera o designer para fazer o que só ele pode fazer: pensar criativamente, entender o cliente, construir marca.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="banco-de-imagens/como-nao-depender-de-banco-de-imagens" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
