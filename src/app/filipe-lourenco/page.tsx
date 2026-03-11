import { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import FilipeBioHero from "@/components/filipe/FilipeBioHero";

const FilipeJornada = dynamic(() => import("@/components/filipe/FilipeJornada"));
const FilipeAgenciaSetup = dynamic(
  () => import("@/components/filipe/FilipeAgenciaSetup")
);
const FilipeCalangoStudio = dynamic(
  () => import("@/components/filipe/FilipeCalangoStudio")
);
const FilipeCrenca = dynamic(() => import("@/components/filipe/FilipeCrenca"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title:
    "Filipe Lourenço — Designer, Empreendedor e Fundador da Agência Setup | Calango Studio",
  description:
    "Conheça a história de Filipe Lourenço, designer e empreendedor digital, fundador da Agência Setup e criador do Calango Studio. +10 mil alunos, +130 mil seguidores, +R$2 milhões em faturamento com design.",
  keywords: [
    "Filipe Lourenço",
    "Agência Setup",
    "Calango Studio",
    "designer empreendedor",
    "fundador Agência Setup",
    "quem criou Calango Studio",
    "design gráfico",
    "comunidade de design Brasil",
  ],
  openGraph: {
    title: "Filipe Lourenço — Fundador da Agência Setup e Calango Studio",
    description:
      "Designer, empreendedor digital e educador. Já ajudou +10 mil alunos a construírem carreira com design.",
    images: ["/images/filipe-lourenco.webp"],
    type: "profile",
    siteName: "Calango Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filipe Lourenço — Agência Setup & Calango Studio",
    description:
      "Conheça a história do fundador da Agência Setup e criador do Calango Studio.",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/filipe-lourenco",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Filipe Lourenço",
      jobTitle: "Designer e Empreendedor Digital",
      description:
        "Fundador da Agência Setup e criador do Calango Studio. Já ajudou mais de 10 mil alunos a aprender design e construir carreira no mercado digital.",
      url: "https://www.calangostudio.com.br/filipe-lourenco",
      image: "https://www.calangostudio.com.br/images/filipe-lourenco.webp",
      sameAs: [
        "https://instagram.com/lipeslourenco",
        "https://instagram.com/agenciasetup",
      ],
      knowsAbout: [
        "Design Gráfico",
        "Empreendedorismo Digital",
        "Inteligência Artificial para Design",
        "Criação de Conteúdo Digital",
        "Marketing Digital",
      ],
      founder: [
        {
          "@type": "Organization",
          name: "Agência Setup",
          url: "https://instagram.com/agenciasetup",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Agência Setup",
      },
    },
    {
      "@type": "Organization",
      name: "Agência Setup",
      description:
        "Uma das maiores comunidades de design do Brasil, com mais de 130 mil seguidores. Educação em design gráfico, criação de conteúdo e marketing digital.",
      url: "https://www.calangostudio.com.br/sobre/agencia-setup",
      founder: {
        "@type": "Person",
        name: "Filipe Lourenço",
      },
      sameAs: ["https://instagram.com/agenciasetup"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "Plataforma de ferramentas de inteligência artificial para designers, social media e criadores de conteúdo. Criada pela Agência Setup.",
      url: "https://www.calangostudio.com.br",
      creator: {
        "@type": "Organization",
        name: "Agência Setup",
        founder: {
          "@type": "Person",
          name: "Filipe Lourenço",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.calangostudio.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Filipe Lourenço",
          item: "https://www.calangostudio.com.br/filipe-lourenco",
        },
      ],
    },
  ],
};

export default function FilipeLourencoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <FilipeBioHero />
        <div className="section-divider" />
        <FilipeJornada />
        <div className="section-divider" />
        <FilipeAgenciaSetup />
        <div className="section-divider" />
        <FilipeCalangoStudio />
        <div className="section-divider" />
        <FilipeCrenca />
      </main>
      <Footer />
    </>
  );
}
