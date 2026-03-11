import { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import PromptHero from "@/components/prompt/PromptHero";

const CalangoShowcase = dynamic(
  () => import("@/components/prompt/CalangoShowcase")
);
const PromptUsageGuide = dynamic(
  () => import("@/components/prompt/PromptUsageGuide")
);
const LeadForm = dynamic(() => import("@/components/prompt/LeadForm"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title:
    "Prompt Maker | Extraia Prompts de Imagens com IA | Calango Studio by Agência Setup",
  description:
    "Ferramenta gratuita da Agência Setup e Filipe Lourenço. Faça upload de uma imagem e extraia o prompt em JSON em segundos. Use no Calango Studio, Midjourney ou qualquer gerador de imagem com IA.",
  keywords: [
    "prompt maker",
    "extrair prompt de imagem",
    "Calango Studio",
    "Agência Setup",
    "Filipe Lourenço",
    "IA para designers",
    "gerar imagem com IA",
    "prompt de imagem",
    "inteligência artificial design",
  ],
  openGraph: {
    title: "Prompt Maker | Extraia Prompts de Imagens com IA | Calango Studio",
    description:
      "Ferramenta gratuita criada por Filipe Lourenço e Agência Setup. Extraia prompts de qualquer imagem e use no Calango Studio ou em qualquer gerador de IA.",
    images: ["/images/og-image.png"],
    type: "website",
    siteName: "Calango Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Maker | Calango Studio by Agência Setup",
    description:
      "Extraia o prompt de qualquer imagem com IA. Ferramenta gratuita criada por Filipe Lourenço.",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/prompt",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Prompt Maker — Calango Studio",
  description:
    "Extraia o prompt de qualquer imagem com IA. Ferramenta gratuita criada pela Agência Setup.",
  url: "https://www.calangostudio.com.br/prompt",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  creator: {
    "@type": "Organization",
    name: "Agência Setup",
    url: "https://instagram.com/agenciasetup",
    founder: {
      "@type": "Person",
      name: "Filipe Lourenço",
      url: "https://instagram.com/lipeslourenco",
      jobTitle: "Designer e Empreendedor",
    },
  },
};

export default function PromptPage() {
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
        <PromptHero />
        <div className="section-divider" />
        <PromptUsageGuide />
        <div className="section-divider" />
        <CalangoShowcase />
        <div className="section-divider" />
        <LeadForm />
        <div className="section-divider" />
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
