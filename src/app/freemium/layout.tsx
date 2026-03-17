import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Grátis 3 Dias | Calango Studio",
  description:
    "Experimente o Calango Studio gratuitamente por 3 dias. Acesso completo a todas as ferramentas de IA para criação de conteúdo visual profissional. Sem cartão de crédito.",
  openGraph: {
    title: "Teste Grátis 3 Dias | Calango Studio",
    description:
      "Acesso completo a 12+ ferramentas de IA para criação de conteúdo visual. Teste grátis por 3 dias.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FreemiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
