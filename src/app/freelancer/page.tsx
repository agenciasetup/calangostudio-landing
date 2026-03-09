import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";

export const metadata: Metadata = {
  title: "Freelancer de Design e Social Media: guias para escalar com IA | Calango Studio",
  description:
    "Guias para freelancers de design e social media que querem atender mais clientes, automatizar produção e escalar para agência com IA.",
  openGraph: {
    title: "Freelancer de Design e Social Media: guias para escalar com IA | Calango Studio",
    description:
      "Guias para freelancers de design e social media que querem atender mais clientes, automatizar produção e escalar para agência com IA.",
    url: "https://www.calangostudio.com.br/freelancer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/freelancer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Freelancer de Design e Social Media",
  description:
    "Guias para freelancers que querem escalar sua operação usando IA.",
  url: "https://www.calangostudio.com.br/freelancer",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Como Atender Mais Clientes sem Aumentar a Equipe",
        url: "https://www.calangostudio.com.br/freelancer/como-atender-mais-clientes",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Como Escalar uma Agência de Social Media com IA",
        url: "https://www.calangostudio.com.br/freelancer/como-escalar-agencia-social-media",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Automatizar a Produção de Conteúdo",
        url: "https://www.calangostudio.com.br/freelancer/como-automatizar-producao-de-conteudo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Ferramentas de IA para Freelancer",
        url: "https://www.calangostudio.com.br/freelancer/ferramentas-ia-para-freelancer",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Como Sair do Modo Freelancer",
        url: "https://www.calangostudio.com.br/freelancer/como-sair-do-modo-freelancer",
      },
    ],
  },
};

const subpages = [
  {
    href: "/freelancer/como-atender-mais-clientes",
    title: "Como Atender Mais Clientes",
    description:
      "Como designers e social medias podem atender mais clientes usando IA para centralizar produção, sem contratar mais pessoas.",
  },
  {
    href: "/freelancer/como-escalar-agencia-social-media",
    title: "Escalar Agência de Social Media",
    description:
      "Estratégias para escalar agência de social media usando IA. Mais clientes, mesma equipe, produção centralizada.",
  },
  {
    href: "/freelancer/como-automatizar-producao-de-conteudo",
    title: "Automatizar Produção de Conteúdo",
    description:
      "Como automatizar a produção de conteúdo para clientes usando IA. Briefing salvo, geração rápida, entrega consistente.",
  },
  {
    href: "/freelancer/ferramentas-ia-para-freelancer",
    title: "Ferramentas de IA para Freelancer",
    description:
      "As melhores ferramentas de IA para freelancers de design e social media. Do gerador de imagem ao gestor de clientes.",
  },
  {
    href: "/freelancer/como-sair-do-modo-freelancer",
    title: "Como Sair do Modo Freelancer",
    description:
      "Como freelancers de design e social media podem estruturar uma operação de agência com processos e IA.",
  },
];

export default function FreelancerHubPage() {
  return (
    <SeoLayout schema={schema} slug="freelancer">
      <ClusterHero
        title="Freelancer com IA"
        subtitle="Guias para freelancers de design e social media que querem atender mais clientes, automatizar produção e escalar para agência usando inteligência artificial."
        icon="💼"
        contentCount={5}
        contentLabel="guias"
        ctaUtmCampaign="freelancer"
      />

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Explore os guias
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subpages.map((page, index) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 hover:border-accent/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="text-xs text-txt-muted font-semibold mb-2 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-poppins font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {page.description}
                  </p>
                </div>
                <span className="text-txt-muted group-hover:text-accent transition-colors mt-6 shrink-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-4">
          Sobre freelancing e IA
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            Freelancers de design e social media vivem um paradoxo: para ganhar
            mais, precisam atender mais clientes — mas cada cliente adicional
            consome mais horas de produção. Sem automação, o teto de crescimento
            é limitado pela capacidade individual. A inteligência artificial
            quebra esse teto.
          </p>
          <p>
            Com as ferramentas certas, é possível centralizar briefings, gerar
            conteúdo visual em minutos e manter a consistência entre clientes sem
            retrabalho. O Calango Studio foi construído para esse perfil
            profissional: freelancers que atendem múltiplos clientes e precisam
            de velocidade sem sacrificar qualidade.
          </p>
          <p>
            Nos guias desta seção, abordamos desde como atender mais clientes com
            a mesma carga horária até como estruturar processos de agência usando
            IA. São estratégias testadas por profissionais que já fizeram a
            transição de freelancer solo para operação escalável.
          </p>
        </div>
      </section>

      <CtaBanner slug="freelancer" />
    </SeoLayout>
  );
}
