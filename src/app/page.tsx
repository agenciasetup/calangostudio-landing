import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CouponBar from "@/components/CouponBar";

const FunctionsCarousel = dynamic(() => import("@/components/FunctionsCarousel"));
const AIContext = dynamic(() => import("@/components/AIContext"));
const StudioFocus = dynamic(() => import("@/components/StudioFocus"));
const ResultsGallery = dynamic(() => import("@/components/ResultsGallery"));
const InstagramShowcase = dynamic(() => import("@/components/InstagramShowcase"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const PainPoints = dynamic(() => import("@/components/PainPoints"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const ProspectingImpact = dynamic(() => import("@/components/ProspectingImpact"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const DemoSection = dynamic(() => import("@/components/DemoSection"));
const CTAFinal = dynamic(() => import("@/components/CTAFinal"));
const Founder = dynamic(() => import("@/components/Founder"));
const Footer = dynamic(() => import("@/components/Footer"));
const ProspectPopup = dynamic(() => import("@/components/ProspectPopup"));

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <CouponBar />
      </Suspense>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        {/* 1 — Hero */}
        <Hero />
        {/* 2 — Carousel de funções (âncora para o CTA "Ver funcionando" do Hero) */}
        <section id="funcoes">
          <FunctionsCarousel />
        </section>
        {/* 3 — IA com contexto real do cliente */}
        <AIContext />
        {/* 4 — O que você faz dentro do Calango */}
        <StudioFocus />
        {/* 5 — Galeria de resultados */}
        <ResultsGallery />
        {/* 5b — Feed do cliente: criativos montados num perfil de Instagram */}
        <InstagramShowcase />
        {/* 6 — Pare de pagar 6 assinaturas */}
        <Comparison />
        {/* 7 — Travas do designer */}
        <PainPoints />
        {/* 8 — Como o Studio funciona */}
        <HowItWorks />
        {/* 9 — Visualize o impacto da prospecção */}
        <ProspectingImpact />
        {/* 10 — Prova social / depoimentos */}
        <Testimonials />
        {/* 11 — Planos */}
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        {/* 12 — FAQ */}
        <FAQ />
        {/* 13 — Demo / VSL */}
        <DemoSection />
        {/* 14 — CTA Final */}
        <CTAFinal />
        <div className="section-divider" />
        {/* 15 — Fundador */}
        <Founder />
      </main>
      <Footer />
      <ProspectPopup />
    </>
  );
}
