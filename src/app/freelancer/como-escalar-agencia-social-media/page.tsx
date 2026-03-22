import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Como Escalar uma Agência de Social Media com IA | Calango Studio",
  description: "Estratégias para escalar agência de social media usando IA. Mais clientes, mesma equipe, produção centralizada no Calango Studio.",
  openGraph: {
    title: "Como Escalar uma Agência de Social Media com IA | Calango Studio",
    description: "Estratégias para escalar agência de social media usando IA. Mais clientes, mesma equipe, produção centralizada no Calango Studio.",
    url: "https://www.calangostudio.com.br/freelancer/como-escalar-agencia-social-media",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/freelancer/como-escalar-agencia-social-media",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que significa escalar uma agência de social media?", acceptedAnswer: { "@type": "Answer", text: "Aumentar a receita sem aumentar os custos na mesma proporção. Atender mais clientes sem contratar proporcionalmente." } },
        { "@type": "Question", name: "IA substitui a equipe de uma agência?", acceptedAnswer: { "@type": "Answer", text: "A parte operacional sim, em grande parte. A parte estratégica e de relacionamento é e continuará sendo humana." } },
        { "@type": "Question", name: "Como implementar IA na operação de uma agência?", acceptedAnswer: { "@type": "Answer", text: "Comece pela produção de conteúdo. Cadastre os clientes no Calango Studio e meça o tempo economizado." } },
        { "@type": "Question", name: "Qual o primeiro passo para escalar com IA?", acceptedAnswer: { "@type": "Answer", text: "Mapear onde vai o tempo operacional da equipe. 60-70% costuma estar em tarefas que a IA já faz em minutos." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que significa escalar uma agência de social media?",
    answer: "Aumentar a receita sem aumentar os custos na mesma proporção. Na prática: atender mais clientes sem precisar contratar proporcionalmente. Uma agência que contrata uma pessoa para cada 3 clientes novos não está escalando. está crescendo linearmente. Escalar é fazer 10 clientes novos com a mesma equipe.",
  },
  {
    question: "IA substitui a equipe de uma agência?",
    answer: "A parte operacional. produção de imagem, copy, variações de criativo. sim, em grande parte. A parte estratégica e de relacionamento é e continuará sendo humana. A IA não faz reunião com cliente, não decide posicionamento de marca, não analisa contexto competitivo. Ela faz a produção bruta, liberando a equipe para o que importa.",
  },
  {
    question: "Como implementar IA na operação de uma agência?",
    answer: "Comece pela produção de conteúdo. é onde o ganho é mais imediato e mensurável. Cadastre os clientes no Calango Studio, migre a geração de imagem e copy para a plataforma e meça o tempo economizado na primeira semana. O resultado geralmente é visível em dias, não em meses.",
  },
  {
    question: "Qual o primeiro passo para escalar com IA?",
    answer: "Mapear onde vai o tempo operacional da equipe. Na maioria das agências, 60-70% do tempo de produção está em tarefas que a IA já consegue fazer em minutos: gerar imagens, escrever copies, criar variações. Identificar esse tempo perdido é o primeiro passo para recuperá-lo.",
  },
];

const relatedPages = [
  { href: "/freelancer/como-atender-mais-clientes", title: "Atender Mais Clientes", description: "Como escalar a carteira sem aumentar a equipe." },
  { href: "/freelancer/como-automatizar-producao-de-conteudo", title: "Automatizar Produção", description: "Como automatizar a produção de conteúdo para clientes." },
  { href: "/freelancer/como-sair-do-modo-freelancer", title: "Sair do Modo Freelancer", description: "Como operar como agência mesmo sendo solo." },
];

export default function ComoEscalarAgenciaSocialMediaPage() {
  return (
    <SeoLayout schema={schema} slug="freelancer/como-escalar-agencia-social-media">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Escalar uma Agência de Social Media com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Escalar uma agência de social media sem IA geralmente significa: contratar mais produtores, mais revisores, mais gestores. Cada pessoa nova aumenta custo fixo. salário, ferramentas, gestão. A margem corrói. Com IA, a lógica muda. o gargalo de produção deixa de crescer na mesma proporção que a carteira de clientes. O que antes exigia três produtores para 15 clientes agora pode ser feito por um profissional com as ferramentas certas.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que escala e o que não escala em uma agência
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Entender essa distinção é fundamental para escalar de forma inteligente:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Escala com IA:</strong> geração de imagem, copy, variações de criativo, mockups, UGC. Tudo que é produção bruta e repetitiva.</li>
        <li><strong className="text-white">Permanece humano:</strong> estratégia de conteúdo, relacionamento com cliente, aprovações, análise de resultado, posicionamento de marca. Tudo que exige julgamento e contexto social.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O papel do Calango Studio na operação da agência
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio funciona como a camada de produção da agência. A seção Meus Clientes serve como CRM básico de produção. com briefing, referências e contexto de cada cliente organizado e acessível. Toda geração de conteúdo parte desse perfil, garantindo consistência.
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li><strong className="text-white">Meus Clientes</strong>. organização de briefing por cliente que não se perde entre sessões</li>
        <li><strong className="text-white">CopyMaker + Imagem Criativa</strong>. produção de conteúdo com contexto do cliente já carregado</li>
        <li><strong className="text-white">Flow</strong>. automatize a produção de conteúdo com fluxos visuais</li>
        <li><strong className="text-white">UGC Build + Mockup Produto</strong>. produção especializada sem equipe dedicada</li>
      </ul>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A evolução futura inclui contratos e cobranças integrados. o que completa a estrutura de agência dentro da plataforma. O objetivo é que toda a operação. do briefing à cobrança. viva em um único lugar.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="meus-clientes" />
      <ResultadosGaleria />
      <CtaBanner slug="freelancer/como-escalar-agencia-social-media" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
