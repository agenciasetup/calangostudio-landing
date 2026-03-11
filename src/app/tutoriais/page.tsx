import { Metadata } from "next";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import ClusterHero from "@/app/components/seo/ClusterHero";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import CtaBanner from "@/app/components/seo/CtaBanner";

export const metadata: Metadata = {
  title: "Tutoriais — Como Usar o Calango Studio | Passo a Passo",
  description:
    "Aprenda a usar todas as funções do Calango Studio com tutoriais passo a passo. Imagem Criativa, Estúdio de Foto, CopyMaker, Mockup, UGC e muito mais.",
  openGraph: {
    title: "Tutoriais — Como Usar o Calango Studio | Passo a Passo",
    description:
      "Aprenda a usar todas as funções do Calango Studio com tutoriais passo a passo.",
    url: "https://www.calangostudio.com.br/tutoriais",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tutoriais do Calango Studio",
  description:
    "Central de tutoriais com passo a passo de todas as funções da plataforma Calango Studio.",
  url: "https://www.calangostudio.com.br/tutoriais",
  publisher: {
    "@type": "Organization",
    name: "Calango Studio",
    url: "https://www.calangostudio.com.br",
  },
};

const comecePorAqui = [
  {
    href: "/tutoriais/primeiros-passos",
    title: "Primeiros Passos",
    description:
      "Configure seu perfil, adicione fotos, conecte o Drive e comece a criar.",
    icon: "🚀",
  },
  {
    href: "/tutoriais/como-gerar-api-key-pessoal",
    title: "Como Gerar sua API Key Pessoal",
    description:
      "Ganhe US$ 300 de crédito gratuito no Google e economize Calango Coins.",
    icon: "🔑",
  },
];

const geradoresDeImagem = [
  {
    href: "/tutoriais/imagem-criativa",
    title: "Imagem Criativa",
    description:
      "Crie imagens cinematográficas com +10 estilos prontos em poucos segundos.",
    icon: "🎨",
  },
  {
    href: "/tutoriais/estudio-de-foto",
    title: "Estúdio de Foto",
    description:
      "Gere fotos ultra-realistas com o seu rosto em qualquer cenário.",
    icon: "📸",
  },
  {
    href: "/tutoriais/mockup-produto",
    title: "Mockup Produto",
    description:
      "Crie mockups profissionais do seu produto em cenários realistas.",
    icon: "📦",
  },
  {
    href: "/tutoriais/assets-3d",
    title: "Assets 3D",
    description: "Gere elementos e objetos em PNG com fundo transparente.",
    icon: "💎",
  },
  {
    href: "/tutoriais/ugc-build",
    title: "UGC Build",
    description:
      "Crie fotos ultra-realistas de pessoas usando seus produtos.",
    icon: "🤳",
  },
  {
    href: "/tutoriais/restaurador-pro",
    title: "Restaurador Pro",
    description:
      "Restaure fotos antigas ou melhore a qualidade de qualquer imagem.",
    icon: "🔧",
  },
  {
    href: "/tutoriais/criacao-livre",
    title: "Criação Livre",
    description:
      "Componha peças com imagem base, referência e geração refinável.",
    icon: "✨",
  },
  {
    href: "/tutoriais/modo-manual",
    title: "Modo Manual",
    description:
      "Edite com controle total usando múltiplas referências visuais.",
    icon: "🎛️",
  },
  {
    href: "/tutoriais/remix-layout",
    title: "Remix Layout",
    description:
      "Replique layouts trocando fotos, cores e texto mantendo a estrutura.",
    icon: "🔄",
  },
];

const outrasFerramentas = [
  {
    href: "/tutoriais/copymaker",
    title: "CopyMaker",
    description:
      "Gere copy pronta para posts, carrossel, stories e reels.",
    icon: "✍️",
  },
  {
    href: "/tutoriais/consultor-de-perfil",
    title: "Consultor de Perfil",
    description:
      "Auditoria estratégica do seu perfil do Instagram com plano de ação.",
    icon: "📊",
  },
  {
    href: "/tutoriais/meus-clientes",
    title: "Meus Clientes",
    description:
      "Gerencie sua base de clientes e dados estratégicos.",
    icon: "👥",
  },
  {
    href: "/tutoriais/prompt-maker",
    title: "Prompt Maker",
    description:
      "Extraia prompts detalhados de qualquer imagem de referência.",
    icon: "🧠",
  },
];

function CardGrid({
  items,
}: {
  items: { href: string; title: string; description: string; icon: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((page, index) => (
        <Link
          key={page.href}
          href={page.href}
          className="group block bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 hover:border-accent/30 transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{page.icon}</span>
            <span className="text-xs text-txt-muted font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-base font-poppins font-semibold text-white mb-2 group-hover:text-accent transition-colors">
            {page.title}
          </h3>
          <p className="text-sm text-txt-secondary">{page.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default function TutoriaisPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais">
      <ClusterHero
        title="Tutoriais"
        subtitle="Aprenda a usar cada função do Calango Studio com guias passo a passo, simples e diretos."
        icon="📚"
        contentCount={15}
        contentLabel="tutoriais"
        ctaUtmCampaign="tutoriais"
      />

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Comece por aqui
        </h2>
        <CardGrid items={comecePorAqui} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Geradores de Imagem
        </h2>
        <CardGrid items={geradoresDeImagem} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-poppins font-bold text-white mb-6">
          Outras Ferramentas
        </h2>
        <CardGrid items={outrasFerramentas} />
      </section>

      <ResultadosGaleria />
      <CtaBanner slug="tutoriais" />
    </SeoLayout>
  );
}
