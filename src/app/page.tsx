import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import BeforeAfter from "@/components/BeforeAfter";
import Tools from "@/components/Tools";
import ClientManagement from "@/components/ClientManagement";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

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
