import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";

export const metadata: Metadata = {
  title: "Como Sair do Modo Freelancer e Operar como Agência | Calango Studio",
  description: "Como freelancers de design e social media podem estruturar uma operação de agência com processos, clientes organizados e IA.",
  openGraph: {
    title: "Como Sair do Modo Freelancer e Operar como Agência | Calango Studio",
    description: "Como freelancers de design e social media podem estruturar uma operação de agência com processos, clientes organizados e IA.",
    url: "https://www.calangostudio.com.br/freelancer/como-sair-do-modo-freelancer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/freelancer/como-sair-do-modo-freelancer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qual a diferença entre ser freelancer e ter uma agência?", acceptedAnswer: { "@type": "Answer", text: "A principal diferença é sistema. Agência tem processos replicáveis que funcionam independente de um profissional específico." } },
        { "@type": "Question", name: "Preciso de equipe para ter uma agência?", acceptedAnswer: { "@type": "Answer", text: "Não necessariamente. Uma agência solo pode operar com sistema, processo e ferramentas." } },
        { "@type": "Question", name: "Como organizar os clientes de forma profissional?", acceptedAnswer: { "@type": "Answer", text: "O primeiro passo é tirar o briefing do WhatsApp e da memória. No Calango Studio, cada cliente tem perfil estruturado." } },
        { "@type": "Question", name: "Quanto dá para faturar como agência solo com IA?", acceptedAnswer: { "@type": "Answer", text: "Freelancers que estruturam a operação com IA relatam conseguir dobrar a carteira sem aumentar horas." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Qual a diferença entre ser freelancer e ter uma agência?",
    answer: "A principal diferença é sistema. Agência tem processos replicáveis que funcionam independente de um profissional específico. Freelancer carrega tudo na cabeça. briefing, histórico, preferências de cada cliente. Quando o freelancer fica doente ou tira férias, a operação para. Quando a agência tem sistema, a operação continua.",
  },
  {
    question: "Preciso de equipe para ter uma agência?",
    answer: "Não necessariamente. Uma agência de um só pode operar com sistema, processo e ferramentas que substituem o que seria feito manualmente por uma equipe. O Calango Studio é uma dessas ferramentas. centraliza produção, organiza clientes e automatiza a parte operacional do trabalho.",
  },
  {
    question: "Como organizar os clientes de forma profissional?",
    answer: "O primeiro passo é tirar o briefing do WhatsApp e da memória. No Calango Studio, cada cliente tem perfil com briefing estruturado. produto, público, tom de voz, referências visuais, histórico de conteúdo aprovado. Isso já é o básico de uma operação de agência: informação organizada e acessível.",
  },
  {
    question: "Quanto dá para faturar como agência solo com IA?",
    answer: "Depende do posicionamento e dos serviços. Mas freelancers que estruturam uma operação com IA relatam conseguir dobrar a carteira de clientes sem aumentar horas de trabalho. o que impacta diretamente o faturamento. Se cada cliente paga R$2.000/mês e você vai de 5 para 10, o faturamento dobra com o mesmo esforço.",
  },
];

const relatedPages = [
  { href: "/freelancer/como-escalar-agencia-social-media", title: "Escalar Agência", description: "Estratégias para escalar agência de social media com IA." },
  { href: "/freelancer/como-atender-mais-clientes", title: "Atender Mais Clientes", description: "Como escalar a carteira sem aumentar a equipe." },
  { href: "/sobre/agencia-setup", title: "Agência Setup", description: "A empresa por trás do Calango Studio." },
];

export default function ComoSairDoModoFreelancerPage() {
  return (
    <SeoLayout schema={schema} slug="freelancer/como-sair-do-modo-freelancer">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Sair do Modo Freelancer e Operar como Agência
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A diferença entre freelancer e agência não é tamanho da equipe. é sistema. Freelancer apaga incêndio. Agência tem processo. O que impede a maioria dos freelancers de dar esse salto não é demanda. é a falta de estrutura para absorver mais clientes sem quebrar a operação. Quando o briefing está na memória, o histórico está no WhatsApp e a produção depende de 5 ferramentas diferentes, cada cliente novo é uma bomba-relógio. IA e ferramentas certas mudam isso ao criar a estrutura que faltava.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que muda quando você opera como agência
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Clientes organizados com briefing</strong>. não na memória. Cada cliente tem perfil com informações acessíveis e atualizadas.</li>
        <li><strong className="text-white">Produção padronizada</strong>. não recriada do zero para cada cliente. O fluxo é o mesmo: perfil → geração → revisão → entrega.</li>
        <li><strong className="text-white">Entregas previsíveis</strong>. não dependentes do humor criativo do dia. O sistema garante consistência independente de como você está se sentindo.</li>
        <li><strong className="text-white">Margem para crescer</strong>. não teto por hora trabalhada. Com eficiência, cada hora vale mais.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio suporta essa transição
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio oferece a infraestrutura que um freelancer precisa para operar como agência:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li><strong className="text-white">Meus Clientes</strong>. base de organização com briefing, referências e contexto por cliente. É o CRM mínimo viável para produção de conteúdo.</li>
        <li><strong className="text-white">Produção centralizada</strong>. imagem, copy, mockup e UGC na mesma plataforma. Sem depender de ferramentas externas para cada etapa.</li>
        <li><strong className="text-white">Contexto persistente</strong>. o briefing do cliente está sempre ativo. Não se perde entre sessões, não mistura com outros clientes.</li>
      </ul>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A evolução futura inclui contratos e cobranças integrados. o que completa a estrutura de agência dentro da plataforma. O objetivo é que o profissional gerencie toda a operação. do briefing à cobrança. em um único lugar. Essa é a diferença entre usar ferramentas soltas e ter um sistema.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="meus-clientes" />
      <ResultadosGaleria />
      <CtaBanner slug="freelancer/como-sair-do-modo-freelancer" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
