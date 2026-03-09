import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Problem = dynamic(() => import("@/components/Problem"));
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const Tools = dynamic(() => import("@/components/Tools"));
const ClientManagement = dynamic(() => import("@/components/ClientManagement"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTAFinal = dynamic(() => import("@/components/CTAFinal"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <BeforeAfter />
        <Tools />
        <ClientManagement />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
