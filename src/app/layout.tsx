import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calango Studio. Plataforma de IA para Designers e Social Media Managers",
  description:
    "Gere imagens, copies e criativos com IA. Gerencie seus clientes, salve briefings e produza 10x mais rápido. 12 ferramentas em uma única plataforma.",
  openGraph: {
    title: "Calango Studio. Plataforma de IA para Designers e Social Media Managers",
    description:
      "Gere imagens, copies e criativos com IA. Gerencie seus clientes, salve briefings e produza 10x mais rápido. 12 ferramentas em uma única plataforma.",
    images: ["/images/og-image.png"],
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
