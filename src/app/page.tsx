import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CouponBar from "@/components/CouponBar";

const FunctionsCarousel = dynamic(() => import("@/components/FunctionsCarousel"));
const AIContext = dynamic(() => import("@/components/AIContext"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const StudioPillars = dynamic(() => import("@/components/StudioPillars"));
const ToolsShowcase = dynamic(() => import("@/components/ToolsShowcase"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const PainPoints = dynamic(() => import("@/components/PainPoints"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const ProspectingImpact = dynamic(() => import("@/components/ProspectingImpact"));
const MissionsRanking = dynamic(() => import("@/components/MissionsRanking"));
const DesignerGains = dynamic(() => import("@/components/DesignerGains"));
const TargetAudience = dynamic(() => import("@/components/TargetAudience"));
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
        {/* 4 — Pare de pagar 6 assinaturas → R$169,90 */}
        <Comparison />
        {/* 5 — O que você faz dentro do Calango */}
        <StudioPillars />
        {/* 6 — Galeria de resultados */}
        <ToolsShowcase />
        {/* 7 — Prova social / depoimentos */}
        <Testimonials />
        {/* 8 — Travas do designer */}
        <PainPoints />
        {/* 9 — Como o Studio funciona */}
        <HowItWorks />
        {/* 10 — Visualize o impacto */}
        <ProspectingImpact />
        {/* 11 — Missões, lembretes e ranking */}
        <MissionsRanking />
        {/* 12 — O que o designer ganha */}
        <DesignerGains />
        {/* 13 — Pra quem é */}
        <TargetAudience />
        {/* 14 — Planos */}
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        {/* 15 — FAQ */}
        <FAQ />
        {/* 16 — Demo / VSL */}
        <DemoSection />
        {/* 17 — CTA Final */}
        <CTAFinal />
        <div className="section-divider" />
        {/* 18 — Fundador */}
        <Founder />
      </main>
      <Footer />
      <ProspectPopup />
    </>
  );
}
