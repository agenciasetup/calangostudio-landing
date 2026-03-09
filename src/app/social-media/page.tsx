import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import CtaBanner from "@/app/components/seo/CtaBanner";

export const metadata: Metadata = {
  title: "Social Media com IA: guias para produzir conteúdo mais rápido | Calango Studio",
  description:
    "Guias práticos para social media managers que usam IA. Aprenda a criar posts, carrosséis, copies e planejar conteúdo em escala.",
  openGraph: {
    title: "Social Media com IA: guias para produzir conteúdo mais rápido | Calango Studio",
    description:
      "Guias práticos para social media managers que usam IA. Aprenda a criar posts, carrosséis, copies e planejar conteúdo em escala.",
    url: "https://www.calangostudio.com.br/social-media",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/social-media",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Social Media com IA",
  description:
    "Guias práticos para social media managers que usam IA para produzir conteúdo mais rápido.",
  url: "https://www.calangostudio.com.br/social-media",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Como Fazer Carrossel para Instagram com IA",
        url: "https://www.calangostudio.com.br/social-media/como-fazer-carrossel-instagram-ia",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Como Criar Copy para Post de Instagram com IA",
        url: "https://www.calangostudio.com.br/social-media/como-criar-copy-para-post",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Como Produzir Mais Conteúdo para Redes Sociais",
        url: "https://www.calangostudio.com.br/social-media/como-produzir-mais-conteudo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Como Planejar Conteúdo de um Mês com IA",
        url: "https://www.calangostudio.com.br/social-media/como-planejar-conteudo-de-um-mes",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Como Criar Posts para Múltiplos Clientes com IA",
        url: "https://www.calangostudio.com.br/social-media/como-criar-posts-para-multiplos-clientes",
      },
    ],
  },
};

const subpages = [
  {
    href: "/social-media/como-fazer-carrossel-instagram-ia",
    title: "Como Fazer Carrossel para Instagram com IA",
    description:
      "Crie carrosséis completos para Instagram com IA: estrutura, copy por slide e imagem gerada em minutos.",
  },
  {
    href: "/social-media/como-criar-copy-para-post",
    title: "Como Criar Copy para Post com IA",
    description:
      "Gere copies para posts, stories, carrosséis e reels com IA em segundos. Com contexto do cliente salvo.",
  },
  {
    href: "/social-media/como-produzir-mais-conteudo",
    title: "Como Produzir Mais Conteúdo sem Travar",
    description:
      "Estratégias e ferramentas para produzir mais conteúdo de qualidade sem aumentar horas de trabalho.",
  },
  {
    href: "/social-media/como-planejar-conteudo-de-um-mes",
    title: "Como Planejar Conteúdo de um Mês com IA",
    description:
      "Planeje e produza o conteúdo de um mês inteiro para redes sociais com IA. Estratégia, copy e criativos.",
  },
  {
    href: "/social-media/como-criar-posts-para-multiplos-clientes",
    title: "Posts para Múltiplos Clientes com IA",
    description:
      "Gerencie a produção de conteúdo para vários clientes ao mesmo tempo sem perder consistência.",
  },
];

export default function SocialMediaHubPage() {
  return (
    <SeoLayout schema={schema} slug="social-media">
      <ClusterHero
        title="Social Media com IA"
        subtitle="Guias para social media managers que querem produzir mais conteúdo, com mais qualidade e em menos tempo usando inteligência artificial."
        icon="📱"
        contentCount={5}
        contentLabel="guias"
        ctaUtmCampaign="social-media"
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
          Sobre social media e IA
        </h2>
        <div className="text-txt-secondary leading-relaxed space-y-4">
          <p>
            Social media managers enfrentam um desafio constante: produzir
            conteúdo em volume sem perder qualidade. Cada cliente exige um tom de
            voz diferente, uma identidade visual específica e um calendário de
            publicações que não pode atrasar. Multiplicar isso por cinco, dez ou
            vinte clientes torna o trabalho insustentável sem automação.
          </p>
          <p>
            A inteligência artificial mudou esse cenário. Hoje é possível gerar
            copies contextualizadas, criar imagens originais no estilo de cada
            marca e planejar o conteúdo de um mês inteiro em horas — não semanas.
            A diferença está em usar uma plataforma que entenda o contexto de cada
            cliente, como o Calango Studio, em vez de ferramentas genéricas que
            exigem reexplicar tudo a cada sessão.
          </p>
          <p>
            Nesta seção, reunimos guias práticos para social media managers que
            querem escalar sua produção. De carrosséis para Instagram a
            planejamento mensal, cada guia foi escrito com base em workflows
            reais de profissionais que atendem múltiplos clientes.
          </p>
        </div>
      </section>

      <CtaBanner slug="social-media" />
    </SeoLayout>
  );
}
