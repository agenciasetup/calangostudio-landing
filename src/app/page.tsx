import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CouponBar from "@/components/CouponBar";

const PainPoints = dynamic(() => import("@/components/PainPoints"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const StudioPillars = dynamic(() => import("@/components/StudioPillars"));
const AIContext = dynamic(() => import("@/components/AIContext"));
const ReplaceTools = dynamic(() => import("@/components/ReplaceTools"));
const ProspectingImpact = dynamic(() => import("@/components/ProspectingImpact"));
const MissionsRanking = dynamic(() => import("@/components/MissionsRanking"));
const DesignerGains = dynamic(() => import("@/components/DesignerGains"));
const TargetAudience = dynamic(() => import("@/components/TargetAudience"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTAFinal = dynamic(() => import("@/components/CTAFinal"));
const Founder = dynamic(() => import("@/components/Founder"));
const Footer = dynamic(() => import("@/components/Footer"));

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
        {/* Seção 1 — Hero */}
        <Hero />
        {/* Seção 2 — Travas do designer */}
        <PainPoints />
        {/* Seção 3 — Como o Studio funciona */}
        <HowItWorks />
        {/* Seção 4 — O que você faz dentro do Calango */}
        <StudioPillars />
        {/* Seção 5 — IA com contexto real */}
        <AIContext />
        {/* Seção 6 — Pare de pagar ferramentas soltas */}
        <ReplaceTools />
        {/* Seção 7 — Visualize o impacto */}
        <ProspectingImpact />
        {/* Seção 8 — Missões, lembretes e ranking */}
        <MissionsRanking />
        {/* Seção 9 — O que o designer ganha */}
        <DesignerGains />
        {/* Seção 10 — Pra quem é */}
        <TargetAudience />
        {/* Depoimentos */}
        <Testimonials />
        {/* Seção 11 — Planos */}
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        {/* FAQ */}
        <FAQ />
        {/* Seção 12 — CTA Final */}
        <CTAFinal />
        <div className="section-divider" />
        {/* Fundador */}
        <Founder />
      </main>
      <Footer />
    </>
  );
}
