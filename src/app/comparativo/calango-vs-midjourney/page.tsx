import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Calango Studio vs Midjourney: geração de imagem para profissionais | Calango Studio",
  description:
    "Compare Calango Studio e Midjourney para uso profissional. Qual é mais prático para designers que atendem clientes e precisam de consistência e velocidade?",
  openGraph: {
    title:
      "Calango Studio vs Midjourney: geração de imagem para profissionais | Calango Studio",
    description:
      "Compare Calango Studio e Midjourney para uso profissional. Qual é mais prático para designers que atendem clientes e precisam de consistência e velocidade?",
    url: "https://www.calangostudio.com.br/comparativo/calango-vs-midjourney",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/comparativo/calango-vs-midjourney",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calango Studio é melhor que Midjourney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para quem trabalha com clientes e precisa de workflow completo, sim. O Calango centraliza geração de imagem, copy, mockups, UGC e gestão de clientes. O Midjourney é exclusivamente um gerador de imagens.",
      },
    },
    {
      "@type": "Question",
      name: "Qual gera imagens mais realistas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Midjourney tem vantagem em qualidade artística pura. O Calango tem vantagem em praticidade e workflow profissional com estilos prontos e gestão de clientes integrada.",
      },
    },
    {
      "@type": "Question",
      name: "Midjourney tem gestão de clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. É exclusivamente um gerador de imagens que funciona via Discord, sem gestão de clientes, copy ou mockups.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é mais fácil de usar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calango Studio, com margem. Midjourney exige domínio de prompts complexos via Discord. O Calango tem interface web intuitiva com estilos prontos.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Calango Studio é melhor que Midjourney?",
    answer:
      "Para quem trabalha com clientes e precisa de workflow completo, sim. O Calango centraliza geração de imagem, copy, mockups, UGC e gestão de clientes. O Midjourney é exclusivamente um gerador de imagens, poderoso, mas limitado a essa função. Se você precisa apenas gerar arte pura, o Midjourney é forte. Se você precisa produzir para clientes, o Calango é mais completo.",
  },
  {
    question: "Qual gera imagens mais realistas?",
    answer:
      "Midjourney tem vantagem em qualidade artística pura, especialmente em ilustrações e arte conceitual. O Calango tem vantagem em praticidade: estilos prontos que eliminam a curva de prompt, gestão de clientes integrada e ferramentas complementares (UGC, mockup, copy) que o Midjourney não oferece.",
  },
  {
    question: "Midjourney tem gestão de clientes?",
    answer:
      "Não. O Midjourney é exclusivamente um gerador de imagens que funciona via Discord. Não tem gestão de clientes, geração de copy, mockups ou qualquer ferramenta além da geração de imagem. Para workflow profissional, você precisaria complementar com outras ferramentas.",
  },
  {
    question: "Qual é mais fácil de usar?",
    answer:
      "O Calango Studio, com margem. Midjourney exige domínio de prompts complexos em inglês, via interface do Discord, que não foi projetada para produção criativa. O Calango tem interface web intuitiva, estilos prontos e toda operação em português.",
  },
];

const relatedPages = [
  {
    href: "/comparativo/calango-vs-canva",
    title: "Calango Studio vs Canva",
    description:
      "Compare Calango e Canva para designers profissionais.",
  },
  {
    href: "/guias/como-gerar-imagens-com-ia",
    title: "Como Gerar Imagens com IA",
    description:
      "Guia completo para gerar imagens profissionais com IA.",
  },
  {
    href: "/sobre/nano-banana",
    title: "Nano Banana",
    description:
      "O modelo de IA principal do Calango Studio para geração de imagens.",
  },
];

export default function CalangoVsMidjourneyPage() {
  return (
    <SeoLayout schema={schema} slug="comparativo/calango-vs-midjourney">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Calango Studio vs Midjourney
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Midjourney e Calango Studio são ferramentas de geração de imagem com
        IA, mas atendem públicos e necessidades diferentes. O Midjourney é
        artisticamente poderoso. Reconhecer isso é importante. Mas para
        profissionais que atendem clientes e precisam de mais do que geração
        de imagem pura, as diferenças são significativas. Este comparativo é
        honesto e direto: cada plataforma tem seus pontos fortes.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Para quem é o Midjourney
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Midjourney é ideal para artistas, ilustradores e criativos que
        valorizam qualidade artística acima de tudo. A qualidade de imagem é
        impressionante, especialmente em estilos artísticos e ilustrativos.
        Porém, requer domínio de prompts complexos em inglês (curva de
        aprendizado alta), funciona exclusivamente via Discord (não é
        intuitivo para produção profissional) e não oferece gestão de
        clientes, geração de copy, mockups ou UGC. É uma ferramenta
        especializada em uma única função.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Para quem é o Calango Studio
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio é para designers e social media managers que atendem
        clientes e precisam de velocidade, consistência e uma plataforma
        completa. Os estilos prontos eliminam a curva de aprendizado de
        prompts. A gestão de clientes integrada mantém o briefing de cada
        cliente sempre acessível. E as ferramentas complementares (UGC Build,
        Mockup Produto, CopyMaker, Assets 3D) eliminam a necessidade de
        alternar entre múltiplas plataformas.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Tabela comparativa
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border border-white/[0.06]">
          <thead>
            <tr className="border-b border-white/[0.06] bg-bg-tertiary">
              <th className="px-4 py-3 text-white font-semibold">Recurso</th>
              <th className="px-4 py-3 text-white font-semibold">Midjourney</th>
              <th className="px-4 py-3 text-white font-semibold">
                Calango Studio
              </th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary">
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Interface</td>
              <td className="px-4 py-3">Discord</td>
              <td className="px-4 py-3 text-accent">Web (direto no navegador)</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Curva de aprendizado</td>
              <td className="px-4 py-3">Alta (prompts complexos)</td>
              <td className="px-4 py-3 text-accent">Baixa (estilos prontos)</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Gestão de clientes</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Copy integrada</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Mockup de produto</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">UGC Build</td>
              <td className="px-4 py-3">✗</td>
              <td className="px-4 py-3 text-accent">✓</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="px-4 py-3">Qualidade artística pura</td>
              <td className="px-4 py-3 text-accent">Excelente</td>
              <td className="px-4 py-3">Alta</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Preço</td>
              <td className="px-4 py-3">A partir de $10/mês (USD)</td>
              <td className="px-4 py-3">A partir de R$97,90/mês</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa,copymaker" />
      <ResultadosGaleria />
      <CtaBanner slug="comparativo/calango-vs-midjourney" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
