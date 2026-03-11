import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calango Studio | Plataforma de IA para Designers",
  description:
    "Gere imagens, copies e criativos com IA. Gerencie seus clientes, salve briefings e produza 10x mais rápido. 12 ferramentas em uma única plataforma para designers e social media.",
  keywords: [
    "Calango Studio",
    "IA para designers",
    "plataforma de IA",
    "gerar imagem com IA",
    "design com inteligência artificial",
    "social media IA",
    "ferramentas de IA para design",
  ],
  openGraph: {
    title: "Calango Studio | Plataforma de IA para Designers",
    description:
      "Gere imagens, copies e criativos com IA. 12 ferramentas em uma única plataforma para designers e social media.",
    images: ["/images/og-image.png"],
    type: "website",
    siteName: "Calango Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calango Studio | Plataforma de IA para Designers",
    description:
      "Gere imagens, copies e criativos com IA. 12 ferramentas em uma plataforma.",
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
