import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CouponBar from "@/components/CouponBar";
import { getImageFilenames, detectLabel } from "@/lib/getImages";

const Problem = dynamic(() => import("@/components/Problem"));
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const ResultadosGallery = dynamic(() => import("@/components/ResultadosGallery"));
const WhatIsCalango = dynamic(() => import("@/components/WhatIsCalango"));
const Tools = dynamic(() => import("@/components/Tools"));
const ClientManagement = dynamic(() => import("@/components/ClientManagement"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ArtesGallery = dynamic(() => import("@/components/ArtesGallery"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTAFinal = dynamic(() => import("@/components/CTAFinal"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const resultadosItems = getImageFilenames("resultados").map((f) => ({
    filename: f,
    label: detectLabel(f),
  }));
  const artesFilenames = getImageFilenames("artes");

  return (
    <>
      <Suspense fallback={null}>
        <CouponBar />
      </Suspense>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <BeforeAfter />
        <ResultadosGallery items={resultadosItems} />
        <WhatIsCalango />
        <Tools />
        <ClientManagement />
        <Testimonials />
        <ArtesGallery filenames={artesFilenames} />
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
