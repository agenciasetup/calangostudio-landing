import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calango Studio | Plataforma de IA para Designers — Agência Setup & Filipe Lourenço",
  description:
    "Plataforma de IA para Designers e Social Media criada por Filipe Lourenço e Agência Setup. Gere imagens, copies e criativos com IA. 12 ferramentas em uma única plataforma. +10 mil alunos.",
  keywords: [
    "Calango Studio",
    "Agência Setup",
    "Filipe Lourenço",
    "IA para designers",
    "plataforma de IA",
    "gerar imagem com IA",
    "design com inteligência artificial",
    "social media IA",
  ],
  openGraph: {
    title: "Calango Studio | Plataforma de IA para Designers — Agência Setup",
    description:
      "Criada por Filipe Lourenço e Agência Setup. Gere imagens, copies e criativos com IA. 12 ferramentas em uma única plataforma.",
    images: ["/images/og-image.png"],
    type: "website",
    siteName: "Calango Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calango Studio | IA para Designers — Agência Setup",
    description:
      "Plataforma de IA criada por Filipe Lourenço. Gere imagens, copies e criativos profissionais.",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br",
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
                    "Plataforma de IA para Designers e Social Media criada por Filipe Lourenço e Agência Setup.",
                  creator: {
                    "@id": "https://www.calangostudio.com.br/#organization",
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "BRL",
                    lowPrice: "0",
                    offerCount: "3",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.calangostudio.com.br/#website",
                  name: "Calango Studio",
                  url: "https://www.calangostudio.com.br",
                  publisher: {
                    "@id": "https://www.calangostudio.com.br/#organization",
                  },
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
