import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title:
    "IA para Social Media: crie posts, copies e criativos em minutos | Calango Studio",
  description:
    "Plataforma de IA para social media managers. Gere posts, carrosséis, copies e gerencie todos seus clientes em um só lugar.",
  openGraph: {
    title:
      "IA para Social Media: crie posts, copies e criativos em minutos | Calango Studio",
    description:
      "Plataforma de IA para social media managers. Gere posts, carrosséis, copies e gerencie todos seus clientes em um só lugar.",
    url: "https://www.calangostudio.com.br/ferramentas/ia-para-social-media",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/ferramentas/ia-para-social-media",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description:
        "Plataforma de IA para social media managers. Posts, copies, criativos e gestão de clientes.",
      offers: {
        "@type": "Offer",
        price: "97.90",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qual a melhor IA para social media em 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para quem gerencia múltiplos clientes, o diferencial está em não precisar reexplicar o contexto de cada cliente toda vez. O Calango Studio salva o briefing de cada cliente e usa esse contexto para gerar copy, imagens e criativos consistentes.",
          },
        },
        {
          "@type": "Question",
          name: "Como criar posts com IA sem perder identidade do cliente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Calango Studio salva o briefing de cada cliente separadamente, incluindo tom de voz, referências visuais e informações do negócio. Ao gerar conteúdo, a IA já considera esse contexto automaticamente.",
          },
        },
        {
          "@type": "Question",
          name: "IA consegue criar carrossel completo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Com o CopyMaker do Calango Studio, você gera copy para carrossel em segundos, com texto estruturado para cada slide, adaptado ao tom de voz do cliente.",
          },
        },
        {
          "@type": "Question",
          name: "Como gerenciar vários clientes com IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na seção Meus Clientes do Calango, você cadastra cada cliente com briefing completo. Ao alternar entre clientes, o contexto carrega automaticamente em todas as ferramentas.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Qual a melhor IA para social media em 2025?",
    answer:
      "Para quem gerencia múltiplos clientes, o diferencial está em não precisar reexplicar o contexto de cada cliente toda vez. O Calango Studio salva o briefing de cada cliente e usa esse contexto para gerar copy, imagens e criativos consistentes. Ferramentas genéricas como ChatGPT exigem que você reexplique tudo a cada sessão.",
  },
  {
    question: "Como criar posts com IA sem perder identidade do cliente?",
    answer:
      "O Calango Studio salva o briefing de cada cliente separadamente, incluindo tom de voz, referências visuais e informações do negócio. Ao gerar conteúdo, a IA já considera esse contexto automaticamente, mantendo a identidade visual e textual consistente em cada peça.",
  },
  {
    question: "IA consegue criar carrossel completo?",
    answer:
      "Sim. Com o CopyMaker do Calango Studio, você gera copy para carrossel em segundos, com texto estruturado para cada slide, adaptado ao tom de voz do cliente. O resultado vem pronto para ser diagramado ou usado diretamente.",
  },
  {
    question: "Como gerenciar vários clientes com IA?",
    answer:
      "Na seção Meus Clientes do Calango, você cadastra cada cliente com briefing completo. tom de voz, público-alvo, referências, informações do produto. Ao alternar entre clientes, o contexto carrega automaticamente em todas as ferramentas de geração.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Ferramentas de IA para acelerar o workflow de design profissional.",
  },
  {
    href: "/guias/como-criar-conteudo-com-ia",
    title: "Como Criar Conteúdo com IA",
    description:
      "Guia prático do post ao carrossel, com contexto do cliente salvo.",
  },
  {
    href: "/guias/agente-para-social-media",
    title: "Agente de IA para Social Media",
    description:
      "Como um agente de IA aprende sobre seus clientes e mantém contexto.",
  },
];

export default function IaParaSocialMediaPage() {
  return (
    <SeoLayout schema={schema} slug="ferramentas/ia-para-social-media">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        IA para Social Media
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A rotina de um social media manager é fragmentada por natureza. Para
        criar um único post, o profissional abre o ChatGPT para gerar a copy,
        vai ao Freepik buscar imagens, passa pelo Canva para montar o
        criativo, usa o Gemini para revisar o texto e ainda precisa do
        Photoshop para ajustes finais. Esse processo pode consumir até quatro
        horas por post. e quando você gerencia cinco, dez ou quinze clientes,
        o tempo se torna o maior gargalo do negócio. Cada minuto gasto
        alternando entre ferramentas é um minuto que não está sendo usado para
        atender novos clientes, criar estratégias ou simplesmente viver. A
        fragmentação não é apenas improdutiva, ela limita diretamente o
        faturamento. Uma plataforma que centraliza copy, imagem, criativo e
        gestão de clientes em um único lugar muda essa equação por completo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é IA para Social Media
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        IA para social media engloba ferramentas que automatizam a criação de
        conteúdo para redes sociais: copies para posts, carrosséis, stories e
        reels, geração de imagens e criativos, e até a gestão do contexto de
        cada cliente atendido. O objetivo é reduzir drasticamente o tempo de
        produção sem perder qualidade ou identidade visual. A grande diferença
        entre usar uma IA genérica e uma plataforma especializada está no
        contexto: ferramentas genéricas esquecem o cliente entre sessões,
        gerando inconsistência. Uma plataforma dedicada mantém o briefing
        sempre ativo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio foi criado pela Agência Setup exatamente para
        resolver esse problema. A plataforma centraliza todas as ferramentas
        que um social media precisa, com o diferencial de manter o contexto
        de cada cliente salvo e acessível em qualquer ferramenta.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Funcionalidades para Social Media
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">CopyMaker</strong>. gere copies
          para posts, carrosséis, stories e reels com o tom de voz do cliente
          já configurado. Sem reexplicar nada.
        </li>
        <li>
          <strong className="text-white">Imagem Criativa</strong>. gere
          imagens profissionais com estilos prontos, sem precisar dominar
          prompts complexos.
        </li>
        <li>
          <strong className="text-white">Remix Layout</strong>. replique
          criativos de sucesso trocando foto e texto. Ideal para manter
          consistência visual na feed.
        </li>
        <li>
          <strong className="text-white">Meus Clientes</strong>. cada
          cliente tem seu perfil com briefing, tom de voz e referências
          salvos. Alterne entre clientes em segundos.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="copymaker" />

      <ResultadosGaleria />

      <CtaBanner slug="ferramentas/ia-para-social-media" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
