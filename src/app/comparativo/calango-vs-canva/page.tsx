import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Calango Studio vs Canva: qual é melhor para designers profissionais? | Calango Studio",
  description:
    "Comparativo completo entre Calango Studio e Canva. Descubra qual plataforma entrega mais para designers e social media que atendem clientes.",
  openGraph: {
    title:
      "Calango Studio vs Canva: qual é melhor para designers profissionais? | Calango Studio",
    description:
      "Comparativo completo entre Calango Studio e Canva. Descubra qual plataforma entrega mais para designers e social media que atendem clientes.",
    url: "https://www.calangostudio.com.br/comparativo/calango-vs-canva",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/comparativo/calango-vs-canva",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calango Studio substitui o Canva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do uso. O Canva é excelente para criar apresentações e materiais simples. O Calango Studio é focado em produção criativa profissional com IA: geração de imagem, mockups, UGC e gestão de clientes.",
      },
    },
    {
      "@type": "Question",
      name: "Qual tem mais ferramentas de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calango Studio tem ferramentas de IA especializadas para produção criativa: Imagem Criativa com estilos prontos, Assets 3D, UGC Build, Mockup Produto, CopyMaker e gestão de clientes.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é mais barato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Canva tem plano gratuito. O Calango começa em R$97,90/mês, mas é focado em produção profissional com IA e gestão de clientes — funcionalidades que o Canva não oferece.",
      },
    },
    {
      "@type": "Question",
      name: "Canva tem gestão de clientes como o Calango?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O Canva não tem um sistema de briefing por cliente integrado à geração de conteúdo. Cada projeto é independente, sem contexto persistente.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Calango Studio substitui o Canva?",
    answer:
      "Depende do uso. O Canva é excelente para criar apresentações, materiais internos e designs simples com templates. O Calango Studio é focado em produção criativa profissional com IA: geração de imagem cinematográfica, mockups, UGC e gestão de clientes com briefing salvo. São ferramentas complementares para alguns profissionais.",
  },
  {
    question: "Qual tem mais ferramentas de IA?",
    answer:
      "O Calango Studio tem ferramentas de IA especializadas para produção criativa profissional: Imagem Criativa com 7 estilos prontos, Assets 3D com transparência, UGC Build para fotos orgânicas, Mockup Produto, CopyMaker para redes sociais e gestão de clientes com contexto persistente. O Canva tem o Magic Studio, que é mais básico.",
  },
  {
    question: "Qual é mais barato?",
    answer:
      "O Canva tem plano gratuito e Pro a partir de R$34,90/mês. O Calango começa em R$97,90/mês, mas é focado em produção profissional com IA e gestão de clientes — funcionalidades que o Canva não oferece. Para quem atende clientes, o retorno em produtividade justifica o investimento.",
  },
  {
    question: "Canva tem gestão de clientes como o Calango?",
    answer:
      "Não. O Canva não tem um sistema de briefing por cliente integrado à geração de conteúdo. Você pode organizar pastas por cliente, mas não há contexto persistente que a IA use para gerar conteúdo consistente. Cada projeto é independente.",
  },
];

const relatedPages = [
  {
    href: "/comparativo/calango-vs-midjourney",
    title: "Calango Studio vs Midjourney",
    description:
      "Compare Calango e Midjourney para geração de imagem profissional.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Todas as ferramentas de IA para designers em uma plataforma.",
  },
  {
    href: "/ferramentas/ia-para-social-media",
    title: "IA para Social Media",
    description:
      "Plataforma completa de IA para social media managers.",
  },
];

export default function CalangoVsCanvaPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo/calango-vs-canva">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Calango Studio vs Canva
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Canva e Calango Studio são ferramentas para criação de conteúdo
        visual, mas resolvem problemas diferentes para públicos diferentes.
        Entender essas diferenças é essencial para escolher a ferramenta
        certa para o seu tipo de trabalho. Este comparativo é honesto: o
        Canva é uma ferramenta excelente para o que se propõe. A questão é se
        o que ele oferece é o que você precisa como profissional que atende
        clientes.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Para quem é o Canva
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Canva é ótimo para não-designers que precisam criar materiais
        visuais: apresentações, posts simples, cartões, convites, materiais
        internos. Sua força está nos templates prontos e na interface
        intuitiva. O Canva tem o Magic Studio para IA básica, mas não oferece
        geração de imagem cinematográfica, gestão de clientes com briefing,
        UGC Build ou mockups gerados por IA. É uma ferramenta de template, não
        uma plataforma de produção com IA.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Para quem é o Calango Studio
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio é para profissionais que atendem clientes e precisam
        de consistência visual, geração de imagem de alta qualidade e
        workflow centralizado. Não é ferramenta de template — é plataforma
        de produção criativa com IA. Cada cliente tem briefing salvo,
        garantindo que toda geração mantém o tom e estilo corretos. As
        ferramentas são especializadas: Imagem Criativa, UGC Build, Assets
        3D, Mockup Produto, CopyMaker.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Tabela comparativa
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead>
            <tr className="border-b border-white/[0.06] bg-bg-tertiary">
              <th className="px-4 py-3 text-white font-semibold">Recurso</th>
              <th className="px-4 py-3 text-white font-semibold">Canva</th>
              <th className="px-4 py-3 text-white font-semibold">
                Calango Studio
              </th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Gestão de clientes com briefing</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Geração de imagem cinematográfica</td>
              <td className="px-4 py-3">Básico</td>
              <td className="px-4 py-3 text-accent">
                Avançado (Nano Banana + FLUX)
              </td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">UGC com aparência orgânica</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓ (UGC Build)</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Assets 3D em PNG transparente</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Mockup de produto com IA</td>
              <td className="px-4 py-3">Templates fixos</td>
              <td className="px-4 py-3 text-accent">Geração por IA</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Copy para redes sociais</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓ (CopyMaker)</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Contexto de cliente salvo</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Cursos inclusos no plano</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓ (plano Elite)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa,copymaker" />
      <ResultadosGaleria />
      <CtaBanner slug="comparativo/calango-vs-canva" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
