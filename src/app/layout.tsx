import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calango Studio | Plataforma de IA para Designers e Social Media",
  description:
    "Prospecte clientes, feche contratos, organize briefings e produza conteúdo com IA. 12 ferramentas de inteligência artificial em uma única plataforma para designers freelancers e social media managers no Brasil.",
  keywords: [
    "Calango Studio",
    "IA para designers",
    "plataforma de IA",
    "gerar imagem com IA",
    "design com inteligência artificial",
    "social media IA",
    "ferramentas de IA para design",
    "prospectar clientes design",
    "gestão de clientes designer",
    "IA para social media",
    "gerar conteúdo com IA",
    "plataforma para freelancer",
    "CRM para designer",
    "produzir posts com IA",
    "copy com inteligência artificial",
    "ferramenta de design online",
    "alternativa ao Canva com IA",
    "gerador de imagem IA Brasil",
  ],
  openGraph: {
    title: "Calango Studio | Plataforma de IA para Designers e Social Media",
    description:
      "Prospecte, feche e produza conteúdo com IA. 12 ferramentas em uma única plataforma para designers e social media. Pare de pagar várias assinaturas.",
    images: ["/images/og-image.png"],
    type: "website",
    siteName: "Calango Studio",
    locale: "pt_BR",
    url: "https://www.calangostudio.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calango Studio | IA para Designers e Social Media",
    description:
      "12 ferramentas de IA em uma plataforma. Prospecte, feche e produza conteúdo para seus clientes.",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
    "content-language": "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#030303" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-inter bg-bg-primary text-txt-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.calangostudio.com.br/#organization",
                  name: "Agência Setup",
                  url: "https://www.calangostudio.com.br",
                  logo: "https://www.calangostudio.com.br/images/og-image.png",
                  sameAs: [
                    "https://instagram.com/agenciasetup",
                    "https://instagram.com/calango.studio",
                  ],
                  founder: {
                    "@type": "Person",
                    "@id": "https://www.calangostudio.com.br/#founder",
                    name: "Filipe Lourenço",
                    url: "https://www.calangostudio.com.br/filipe-lourenco",
                    sameAs: ["https://instagram.com/lipeslourenco"],
                    jobTitle: "Designer e Empreendedor Digital",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "BR",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://www.calangostudio.com.br/#software",
                  name: "Calango Studio",
                  applicationCategory: "DesignApplication",
                  operatingSystem: "Web",
                  url: "https://www.calangostudio.com.br",
                  description:
                    "Plataforma de IA para designers e social media. Prospecte clientes, feche contratos, organize briefings e produza conteúdo com inteligência artificial. 12 ferramentas integradas.",
                  creator: {
                    "@id": "https://www.calangostudio.com.br/#organization",
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "BRL",
                    lowPrice: "97.90",
                    highPrice: "319.90",
                    offerCount: "3",
                  },
                  featureList: [
                    "Geração de imagens com IA",
                    "Geração de copies e conteúdo",
                    "Prospecção de clientes",
                    "Gestão de clientes e briefing",
                    "Análise de perfil",
                    "Sessão de fotos com IA",
                    "CRM para designers",
                    "Contrato e onboarding",
                    "Ranking e gamificação",
                  ],
                  inLanguage: "pt-BR",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    ratingCount: "127",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.calangostudio.com.br/#website",
                  name: "Calango Studio",
                  url: "https://www.calangostudio.com.br",
                  inLanguage: "pt-BR",
                  publisher: {
                    "@id": "https://www.calangostudio.com.br/#organization",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.calangostudio.com.br/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Qual IA o Calango Studio usa?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Integramos modelos da OpenAI, Google Gemini, FLUX e Claude. O Calango seleciona automaticamente o melhor modelo para cada tipo de geração.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "O Calango Studio é só um gerador de imagem?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Não. O Calango Studio é a operação completa do designer. Você prospecta clientes, acompanha o funil de vendas, organiza briefing e contrato, gera conteúdo e imagens com base no cliente, e acompanha toda sua rotina em um só lugar.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Como funciona a prospecção dentro do Studio?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Você cadastra prospectos, recebe missões diárias para abordar empresas, usa mensagens prontas e acompanha quem respondeu. É um funil comercial integrado ao sistema de produção.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Como funcionam os créditos (CalangoCoins)?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cada plano tem um volume mensal de CalangoCoins. Em média, você gera mais de 100 imagens tranquilamente. Os créditos renovam mensalmente.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Qual a vantagem do Calango sobre outras ferramentas?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "O Calango não é só uma IA. É um sistema de operação. Centraliza prospecção, vendas, gestão de clientes, briefing, produção de conteúdo e análise. Você para de pagar 5 assinaturas separadas.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
