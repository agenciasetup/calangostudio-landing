import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Agência Setup: a empresa por trás do Calango Studio | Calango Studio",
  description:
    "Conheça a Agência Setup, criadora do Calango Studio. A dor do próprio workflow de agência que virou produto para designers e social medias.",
  openGraph: {
    title:
      "Agência Setup: a empresa por trás do Calango Studio | Calango Studio",
    description:
      "Conheça a Agência Setup, criadora do Calango Studio. A dor do próprio workflow de agência que virou produto para designers e social medias.",
    url: "https://www.calangostudio.com.br/sobre/agencia-setup",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/sobre/agencia-setup",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é a Agência Setup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É a agência de design e marketing digital brasileira que criou o Calango Studio a partir da experiência interna de atender múltiplos clientes com workflow fragmentado.",
          },
        },
        {
          "@type": "Question",
          name: "Quem criou o Calango Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Calango Studio foi criado pela Agência Setup, a partir da experiência real de atender clientes e enfrentar o problema de ferramentas fragmentadas.",
          },
        },
        {
          "@type": "Question",
          name: "Os cursos da Agência Setup estão no Calango?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. No plano Elite, o usuário tem acesso aos cursos da Agência Setup sobre design, marketing digital e uso profissional de IA.",
          },
        },
        {
          "@type": "Question",
          name: "Como falar com a equipe do Calango Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pelo Instagram @calango.studio ou pelo site calangostudio.com.br.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "Agência Setup",
      url: "https://www.calangostudio.com.br",
      foundingLocation: "Brasil",
      product: {
        "@type": "SoftwareApplication",
        name: "Calango Studio",
      },
    },
  ],
};

const faqs = [
  {
    question: "O que é a Agência Setup?",
    answer:
      "É a agência de design e marketing digital brasileira que criou o Calango Studio. A Agência Setup atende múltiplos clientes e enfrentava diariamente o problema de alternar entre diversas ferramentas, perder contexto e retrabalhar. O Calango Studio nasceu para resolver essa dor interna e depois se tornou produto disponível para o mercado.",
  },
  {
    question: "Quem criou o Calango Studio?",
    answer:
      "O Calango Studio foi criado pela Agência Setup, a partir da experiência real de atender clientes e enfrentar o problema de ferramentas fragmentadas. A equipe construiu internamente a plataforma que precisava, testou no próprio workflow da agência e depois disponibilizou para designers e social media managers.",
  },
  {
    question: "Os cursos da Agência Setup estão no Calango?",
    answer:
      "Sim. No plano Elite do Calango Studio, o usuário tem acesso aos cursos da Agência Setup sobre design, marketing digital e uso profissional de IA. Os cursos complementam as ferramentas, ensinando como extrair o máximo da plataforma e como aplicar IA no workflow criativo.",
  },
  {
    question: "Como falar com a equipe do Calango Studio?",
    answer:
      "Pelo Instagram @calango.studio ou pelo site calangostudio.com.br. A equipe responde dúvidas, ouve feedback e acompanha de perto a experiência dos assinantes com a plataforma.",
  },
];

const relatedPages = [
  {
    href: "/sobre/nano-banana",
    title: "Nano Banana",
    description:
      "Conheça o modelo de IA principal do Calango Studio.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Ferramentas de IA para acelerar o workflow de design.",
  },
  {
    href: "/ferramentas/ia-para-social-media",
    title: "IA para Social Media",
    description:
      "Plataforma completa de IA para social media managers.",
  },
];

export default function AgenciaSetupPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Agência Setup
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A Agência Setup é uma agência de design e marketing digital
        brasileira. O trabalho diário de atender múltiplos clientes
        simultaneamente expôs um problema que a maioria dos profissionais
        criativos conhece: o workflow fragmentado. Para produzir conteúdo
        para um único cliente, era necessário alternar entre cinco ou seis
        ferramentas — uma para gerar imagem, outra para copy, outra para
        mockup, outra para remover fundo, e assim por diante. O contexto de
        cada cliente se perdia entre abas. A consistência visual dependia da
        memória do profissional. O tempo desperdiçado em tarefas operacionais
        tirava espaço da criatividade. O Calango Studio nasceu dessa dor.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        De problema interno a produto para o mercado
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A equipe da Agência Setup construiu internamente a plataforma que
        precisava: um lugar onde fosse possível gerar imagens com IA, criar
        copies para redes sociais, produzir mockups e manter o briefing de
        cada cliente salvo e acessível em qualquer ferramenta. O que começou
        como solução interna se provou eficaz o suficiente para ser
        disponibilizado para outros profissionais. O Calango Studio é,
        portanto, um produto que nasceu da prática — não de um pitch de
        startup, mas da necessidade real de uma agência que precisava
        produzir mais rápido sem sacrificar qualidade.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Cursos da Agência Setup
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Além das ferramentas, a Agência Setup produz cursos sobre design,
        marketing digital e uso profissional de IA. Esses cursos estão
        disponíveis no plano Elite do Calango Studio, complementando as
        ferramentas com conhecimento prático.
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Cursos inclusos no plano Elite do Calango Studio
        </li>
        <li>
          Conteúdo prático focado em workflow e produtividade
        </li>
        <li>
          Atualizações constantes com novas técnicas e funcionalidades
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Contato
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A equipe do Calango Studio está disponível pelo Instagram{" "}
        <strong className="text-white">@calango.studio</strong> e pelo site{" "}
        <strong className="text-white">calangostudio.com.br</strong>. A
        agência mantém contato próximo com os assinantes, ouvindo feedback e
        incorporando sugestões no desenvolvimento da plataforma.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
