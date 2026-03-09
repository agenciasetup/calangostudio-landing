import { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import PromptHero from "@/components/prompt/PromptHero";

const CalangoShowcase = dynamic(
  () => import("@/components/prompt/CalangoShowcase")
);
const LeadForm = dynamic(() => import("@/components/prompt/LeadForm"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title:
    "Prompt Maker — Extraia o Prompt de Qualquer Imagem | Calango Studio",
  description:
    "Faça upload de uma imagem de referência e extraia o prompt em JSON em segundos. Use em qualquer gerador de imagem. Ferramenta gratuita do Calango Studio.",
  openGraph: {
    title: "Prompt Maker — Extraia o Prompt de Qualquer Imagem",
    description:
      "Faça upload de uma imagem e extraia o prompt em JSON. Funciona com qualquer gerador de imagem.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function PromptPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <PromptHero />
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
