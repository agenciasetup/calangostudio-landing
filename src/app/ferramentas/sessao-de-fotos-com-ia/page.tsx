import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Sessão de Fotos com IA: fotos profissionais sem estúdio | Calango Studio",
  description:
    "Gere sessões de fotos profissionais com IA usando referências de imagem. Sem estúdio, sem fotógrafo. Ferramenta Estúdio de Foto do Calango Studio.",
  openGraph: {
    title:
      "Sessão de Fotos com IA: fotos profissionais sem estúdio | Calango Studio",
    description:
      "Gere sessões de fotos profissionais com IA usando referências de imagem. Sem estúdio, sem fotógrafo. Ferramenta Estúdio de Foto do Calango Studio.",
    url: "https://www.calangostudio.com.br/ferramentas/sessao-de-fotos-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/ferramentas/sessao-de-fotos-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description:
        "Gere sessões de fotos profissionais com IA usando referências de imagem.",
      offers: {
        "@type": "Offer",
        price: "97.90",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Como fazer uma sessão de fotos com IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No Calango Studio, você acessa o Estúdio de Foto, sobe uma foto de referência do rosto ou produto, escolhe o cenário e estilo desejado, e a IA gera a sessão completa em minutos.",
          },
        },
        {
          "@type": "Question",
          name: "A foto gerada por IA parece real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende da ferramenta. O Calango usa modelos calibrados para realismo cinematográfico, gerando resultados com iluminação natural e detalhes convincentes.",
          },
        },
        {
          "@type": "Question",
          name: "Posso usar minha própria foto como referência?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O Estúdio de Foto aceita foto de referência do rosto ou produto para gerar variações em diferentes cenários e estilos.",
          },
        },
        {
          "@type": "Question",
          name: "Serve para e-commerce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. É possível gerar o produto em diferentes cenários e ângulos, criando um catálogo visual completo sem fotografia tradicional.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Como fazer uma sessão de fotos com IA?",
    answer:
      "No Calango Studio, você acessa o Estúdio de Foto, sobe uma foto de referência do rosto ou produto, escolhe o cenário e estilo desejado, e a IA gera a sessão completa em minutos. Você pode gerar múltiplas variações até encontrar o resultado ideal.",
  },
  {
    question: "A foto gerada por IA parece real?",
    answer:
      "Depende da ferramenta. O Calango usa modelos calibrados para realismo cinematográfico, gerando resultados com iluminação natural e detalhes convincentes. Para a maioria dos usos em redes sociais, e-commerce e marketing, o resultado é indistinguível de uma foto real.",
  },
  {
    question: "Posso usar minha própria foto como referência?",
    answer:
      "Sim. O Estúdio de Foto aceita foto de referência do rosto ou produto. A partir dessa referência, a IA gera variações em diferentes cenários, iluminações e estilos, mantendo a identidade do rosto ou as características do produto.",
  },
  {
    question: "Serve para e-commerce?",
    answer:
      "Sim. É possível gerar o produto em diferentes cenários e ângulos, criando um catálogo visual completo sem fotografia tradicional. Isso reduz drasticamente o custo e o tempo de produção de imagens para lojas online.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/mockup-produto-ia",
    title: "Mockup de Produto com IA",
    description:
      "Crie mockups profissionais de qualquer produto em cenários gerados por IA.",
  },
  {
    href: "/ferramentas/ugc-com-ia",
    title: "UGC com IA",
    description:
      "Fotos realistas de pessoas usando produtos, sem modelo e sem produção.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Todas as ferramentas de IA para designers em uma plataforma.",
  },
];

export default function SessaoDeFotosComIaPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Sessão de Fotos com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Uma sessão de fotos profissional envolve custos significativos:
        aluguel de estúdio, contratação de fotógrafo, modelo (quando
        necessário), maquiagem, iluminação e horas de pós-produção. Para
        pequenos negócios, marcas pessoais e profissionais autônomos, esse
        investimento pode ser proibitivo. A inteligência artificial mudou essa
        realidade. Hoje é possível gerar sessões de fotos com qualidade
        cinematográfica usando apenas uma foto de referência, sem sair de
        casa, sem equipamento e sem gastar milhares de reais. O resultado pode
        ser usado para perfis profissionais, e-commerce, redes sociais e
        materiais de marketing. A tecnologia evoluiu ao ponto em que a maioria
        das pessoas não consegue distinguir uma foto gerada por IA de uma foto
        real, especialmente quando os modelos são calibrados para realismo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é sessão de fotos com IA
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Sessão de fotos com IA é o processo de gerar imagens fotográficas
        realistas usando inteligência artificial. Em vez de montar um set
        físico, você fornece uma foto de referência (rosto ou produto) e a IA
        cria variações em diferentes cenários, iluminações e estilos. O
        resultado são imagens prontas para uso profissional, com qualidade
        comparável à de uma sessão fotográfica tradicional. Essa abordagem é
        especialmente útil para quem precisa de volume — muitas fotos em pouco
        tempo — ou para quem não tem acesso a estúdios e fotógrafos.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio resolve
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Estúdio de Foto do Calango Studio é a ferramenta dedicada a sessões
        fotográficas com IA. O processo é simples e direto:
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Como funciona o Estúdio de Foto
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          <strong className="text-white">Upload de referência</strong> — suba
          uma foto do rosto ou produto que será a base da sessão.
        </li>
        <li>
          <strong className="text-white">Escolha de cenário</strong> —
          selecione o ambiente e estilo desejado para a sessão.
        </li>
        <li>
          <strong className="text-white">Geração por IA</strong> — a
          plataforma gera múltiplas variações com qualidade cinematográfica.
        </li>
        <li>
          <strong className="text-white">Casos de uso</strong> — perfil
          pessoal, fotos para LinkedIn, catálogo de e-commerce, conteúdo para
          redes sociais, materiais de marketing para clientes.
        </li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
