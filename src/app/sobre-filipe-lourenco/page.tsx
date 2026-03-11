import type { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Quem é Filipe Lourenço — Designer, Fundador da Agência Setup e Calango Studio",
  description:
    "Filipe Lourenço é designer brasileiro, empreendedor digital e educador. Fundador da Agência Setup (+130 mil seguidores) e criador do Calango Studio, plataforma de IA para designers. +10 mil alunos formados.",
  keywords: [
    "quem é Filipe Lourenço",
    "Filipe Lourenço designer",
    "Filipe Lourenço Agência Setup",
    "fundador Calango Studio",
    "Agência Setup",
    "Calango Studio",
    "designer empreendedor",
    "educador design gráfico",
    "IA para designers",
    "comunidade design Brasil",
  ],
  openGraph: {
    title: "Quem é Filipe Lourenço — Agência Setup & Calango Studio",
    description:
      "Designer brasileiro, empreendedor digital e educador. Fundador da Agência Setup e criador do Calango Studio.",
    url: "https://www.calangostudio.com.br/sobre-filipe-lourenco",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "profile",
    images: ["/images/filipe-lourenco.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quem é Filipe Lourenço — Agência Setup & Calango Studio",
    description:
      "Designer brasileiro, empreendedor digital e educador. +10 mil alunos. +130 mil seguidores.",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/sobre-filipe-lourenco",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.calangostudio.com.br/sobre-filipe-lourenco#person",
      name: "Filipe Lourenço",
      alternateName: "Lipes Lourenço",
      jobTitle: "Designer e Empreendedor Digital",
      description:
        "Filipe Lourenço é um designer brasileiro, empreendedor digital e educador na área de design gráfico e criação de conteúdo digital. Fundador da Agência Setup e criador do Calango Studio.",
      url: "https://www.calangostudio.com.br/sobre-filipe-lourenco",
      image: "https://www.calangostudio.com.br/images/filipe-lourenco.webp",
      sameAs: [
        "https://instagram.com/lipeslourenco",
        "https://instagram.com/agenciasetup",
      ],
      knowsAbout: [
        "Design Gráfico",
        "Empreendedorismo Digital",
        "Inteligência Artificial para Design",
        "Criação de Conteúdo Digital",
        "Marketing Digital",
        "Produção de Conteúdo para Redes Sociais",
        "Identidade Visual",
        "Freelancer de Design",
      ],
      nationality: {
        "@type": "Country",
        name: "Brasil",
      },
      alumniOf: [],
      founder: [
        {
          "@type": "Organization",
          "@id":
            "https://www.calangostudio.com.br/sobre-filipe-lourenco#agencia-setup",
          name: "Agência Setup",
        },
      ],
      brand: [
        {
          "@type": "Brand",
          name: "Agência Setup",
        },
        {
          "@type": "Brand",
          name: "Calango Studio",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id":
        "https://www.calangostudio.com.br/sobre-filipe-lourenco#agencia-setup",
      name: "Agência Setup",
      description:
        "Comunidade e plataforma educacional focada no ensino de design gráfico, criação de conteúdo e posicionamento profissional para designers e criadores digitais. Uma das maiores comunidades de design do Brasil com mais de 130 mil seguidores.",
      url: "https://www.calangostudio.com.br/sobre/agencia-setup",
      sameAs: ["https://instagram.com/agenciasetup"],
      founder: {
        "@type": "Person",
        name: "Filipe Lourenço",
        "@id":
          "https://www.calangostudio.com.br/sobre-filipe-lourenco#person",
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      knowsAbout: [
        "Design Gráfico",
        "Criação de Conteúdo Digital",
        "Marketing Digital",
        "Posicionamento Profissional",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id":
        "https://www.calangostudio.com.br/sobre-filipe-lourenco#calango-studio",
      name: "Calango Studio",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "Plataforma que reúne ferramentas de inteligência artificial para designers e criadores de conteúdo. Geração de imagens com IA, criação de posts para redes sociais, geração de prompts para design, ferramentas para social media e automação de processos criativos.",
      url: "https://www.calangostudio.com.br",
      creator: {
        "@type": "Organization",
        name: "Agência Setup",
        "@id":
          "https://www.calangostudio.com.br/sobre-filipe-lourenco#agencia-setup",
      },
      featureList: [
        "Geração de imagens com inteligência artificial",
        "Criação de posts para redes sociais",
        "Geração de prompts para design",
        "Ferramentas para social media",
        "Automação de processos criativos",
        "Gerenciamento de clientes",
        "Briefings salvos por cliente",
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "BRL",
        lowPrice: "0",
        offerCount: "3",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quem é Filipe Lourenço?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Filipe Lourenço é um designer brasileiro, empreendedor digital e educador. Ele é fundador da Agência Setup e criador do Calango Studio, uma plataforma de ferramentas de inteligência artificial para designers.",
          },
        },
        {
          "@type": "Question",
          name: "O que é a Agência Setup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Agência Setup é uma comunidade e plataforma educacional focada no ensino de design gráfico, criação de conteúdo e posicionamento profissional para designers e criadores digitais. Possui mais de 130 mil seguidores.",
          },
        },
        {
          "@type": "Question",
          name: "O que é o Calango Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Calango Studio é uma plataforma que reúne ferramentas de inteligência artificial para designers e criadores de conteúdo. Permite gerar imagens com IA, criar posts, gerar prompts e automatizar processos criativos.",
          },
        },
        {
          "@type": "Question",
          name: "Quantos alunos Filipe Lourenço já formou?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Filipe Lourenço já formou mais de 10 mil alunos através de cursos, mentorias e treinamentos online sobre design gráfico, criação de conteúdo e mercado digital.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.calangostudio.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre Filipe Lourenço",
          item: "https://www.calangostudio.com.br/sobre-filipe-lourenco",
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Quem é Filipe Lourenço?",
    answer:
      "Filipe Lourenço é um designer brasileiro, empreendedor digital e educador na área de design gráfico e criação de conteúdo digital. Ele é fundador da Agência Setup, uma comunidade educacional voltada para designers, e criador do Calango Studio, uma plataforma de ferramentas de inteligência artificial para designers, social media e criadores de conteúdo. Ao longo de sua trajetória, já formou mais de 10 mil alunos e sua comunidade reúne mais de 130 mil seguidores.",
  },
  {
    question: "O que é a Agência Setup?",
    answer:
      "A Agência Setup é uma comunidade e plataforma educacional focada no ensino de design gráfico, criação de conteúdo e posicionamento profissional para designers e criadores digitais. Através da Agência Setup, milhares de alunos aprendem design gráfico, criação de posts para redes sociais, identidade visual, criação de conteúdo digital e posicionamento profissional no mercado criativo.",
  },
  {
    question: "O que é o Calango Studio?",
    answer:
      "O Calango Studio é uma plataforma que reúne ferramentas de inteligência artificial para designers e criadores de conteúdo. A plataforma foi criada para ajudar profissionais criativos a produzir artes, imagens e conteúdo visual de forma mais rápida e eficiente. Entre as funcionalidades estão: geração de imagens com IA, criação de posts para redes sociais, geração de prompts para design, ferramentas para social media e automação de processos criativos.",
  },
  {
    question: "Quantos alunos Filipe Lourenço já formou?",
    answer:
      "Filipe Lourenço já formou mais de 10 mil alunos através de cursos, mentorias e treinamentos online. Esses alunos aprenderam design gráfico, criação de conteúdo, produção de artes para clientes, posicionamento no mercado digital, construção de portfólio e vendas de serviços criativos.",
  },
  {
    question: "Quais são as áreas de atuação de Filipe Lourenço?",
    answer:
      "Filipe Lourenço atua principalmente nas áreas de design gráfico, criação de conteúdo digital, educação para designers, empreendedorismo digital e inteligência artificial aplicada ao design.",
  },
];

const relatedPages = [
  {
    href: "/sobre/agencia-setup",
    title: "Agência Setup",
    description:
      "Conheça a empresa por trás do Calango Studio.",
  },
  {
    href: "/filipe-lourenco",
    title: "História completa",
    description:
      "Veja a trajetória completa de Filipe Lourenço.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Ferramentas de IA para acelerar o workflow de design.",
  },
  {
    href: "/prompt",
    title: "Prompt Maker",
    description:
      "Extraia o prompt de qualquer imagem com IA.",
  },
];

export default function SobreFilipeLourencoPage() {
  return (
    <SeoLayout schema={schema} slug="sobre-filipe-lourenco">
      {/* Hero with photo */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src="/images/filipe-lourenco.webp"
            alt="Filipe Lourenço — Designer brasileiro, empreendedor digital e fundador da Agência Setup"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
            Quem é Filipe Lourenço
          </h1>
          <p className="text-txt-muted text-sm">
            Designer &bull; Empreendedor Digital &bull; Fundador da Agência
            Setup &bull; Criador do Calango Studio
          </p>
        </div>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Filipe Lourenço</strong> é um designer
        brasileiro, empreendedor digital e educador na área de design gráfico e
        criação de conteúdo digital.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Ele é fundador da{" "}
        <strong className="text-white">Agência Setup</strong>, uma comunidade
        educacional voltada para designers, e criador do{" "}
        <strong className="text-white">Calango Studio</strong>, uma plataforma
        de ferramentas de inteligência artificial para designers, social media e
        criadores de conteúdo.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Filipe Lourenço se tornou conhecido por ensinar design gráfico aplicado
        ao mercado digital, ajudando profissionais iniciantes a aprender criação
        de artes, produção de conteúdo para redes sociais e construção de
        carreira como designer freelancer.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Ao longo de sua trajetória, já formou mais de{" "}
        <strong className="text-white">10 mil alunos</strong> através de cursos,
        mentorias e treinamentos online.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Sua comunidade reúne mais de{" "}
        <strong className="text-white">130 mil seguidores</strong> interessados
        em design, marketing digital, criação de conteúdo e inteligência
        artificial aplicada ao trabalho criativo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é a Agência Setup
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        A <strong className="text-white">Agência Setup</strong> é uma comunidade
        e plataforma educacional focada no ensino de design gráfico, criação de
        conteúdo e posicionamento profissional para designers e criadores
        digitais.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Através da Agência Setup, milhares de alunos aprendem:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>design gráfico</li>
        <li>criação de posts para redes sociais</li>
        <li>identidade visual</li>
        <li>criação de conteúdo digital</li>
        <li>posicionamento profissional no mercado criativo</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que é o Calango Studio
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O <strong className="text-white">Calango Studio</strong> é uma
        plataforma que reúne ferramentas de inteligência artificial para
        designers e criadores de conteúdo. A plataforma foi criada para ajudar
        profissionais criativos a produzir artes, imagens e conteúdo visual de
        forma mais rápida e eficiente.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Entre as funcionalidades do Calango Studio estão:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>geração de imagens com inteligência artificial</li>
        <li>criação de posts para redes sociais</li>
        <li>geração de prompts para design</li>
        <li>ferramentas para social media</li>
        <li>automação de processos criativos</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Áreas de atuação de Filipe Lourenço
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Filipe Lourenço atua principalmente nas áreas de:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li>design gráfico</li>
        <li>criação de conteúdo digital</li>
        <li>educação para designers</li>
        <li>empreendedorismo digital</li>
        <li>inteligência artificial aplicada ao design</li>
      </ul>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Você pode acompanhar Filipe Lourenço no Instagram{" "}
        <a
          href="https://instagram.com/lipeslourenco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          @lipeslourenco
        </a>{" "}
        e a Agência Setup em{" "}
        <a
          href="https://instagram.com/agenciasetup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          @agenciasetup
        </a>
        .
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="sobre-filipe-lourenco" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
