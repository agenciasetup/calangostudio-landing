import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Agente de IA para Social Media: workflow com contexto por cliente | Calango Studio",
  description:
    "O que é um agente de IA para social media e como ele aprende sobre seus clientes. Veja como o Calango Studio funciona como agente personalizado.",
  openGraph: {
    title:
      "Agente de IA para Social Media: workflow com contexto por cliente | Calango Studio",
    description:
      "O que é um agente de IA para social media e como ele aprende sobre seus clientes. Veja como o Calango Studio funciona como agente personalizado.",
    url: "https://www.calangostudio.com.br/guias/agente-para-social-media",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/agente-para-social-media",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é um agente de IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É um sistema de IA que mantém contexto entre sessões, aprende preferências e executa tarefas de forma persistente, diferente de ferramentas que começam do zero a cada uso.",
          },
        },
        {
          "@type": "Question",
          name: "Como o Calango Studio funciona como agente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Através da seção Meus Clientes, você cadastra briefing completo de cada cliente. A IA usa esse contexto em todas as gerações, mantendo consistência sem reexplicações.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre usar o ChatGPT e o Calango Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No ChatGPT, você reexplica o cliente toda vez. No Calango, o briefing está sempre salvo e ativo, garantindo consistência automática em todas as ferramentas.",
          },
        },
        {
          "@type": "Question",
          name: "O agente aprende com o tempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Quanto mais você usa e refina o briefing do cliente, mais preciso fica o conteúdo gerado. O sistema melhora continuamente com base no uso.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description:
        "Plataforma de IA com agente personalizado para social media managers.",
      offers: {
        "@type": "Offer",
        price: "97.90",
        priceCurrency: "BRL",
      },
    },
  ],
};

const faqs = [
  {
    question: "O que é um agente de IA?",
    answer:
      "É um sistema de IA que mantém contexto entre sessões, aprende preferências e executa tarefas de forma persistente. Diferente de uma ferramenta simples (como o ChatGPT), onde você começa do zero a cada conversa, um agente lembra o que foi feito antes e usa esse histórico para gerar resultados melhores.",
  },
  {
    question: "Como o Calango Studio funciona como agente?",
    answer:
      "Através da seção Meus Clientes, você cadastra briefing completo de cada cliente — tom de voz, público-alvo, referências visuais, informações do negócio. A IA usa esse contexto em todas as gerações: CopyMaker, Imagem Criativa, Remix Layout. Não é preciso reexplicar nada a cada sessão.",
  },
  {
    question: "Qual a diferença entre usar o ChatGPT e o Calango Studio?",
    answer:
      "No ChatGPT, você reexplica o cliente toda vez que abre uma nova conversa. O contexto se perde entre sessões. No Calango, o briefing está sempre salvo e ativo, garantindo consistência automática em todas as ferramentas de geração. É a diferença entre uma ferramenta genérica e um agente especializado.",
  },
  {
    question: "O agente aprende com o tempo?",
    answer:
      "Sim. Quanto mais você usa e refina o briefing do cliente, mais preciso fica o conteúdo gerado. A evolução futura inclui funcionalidades como contratos, cobranças e notificações integradas, tornando o Calango um agente cada vez mais completo para a gestão de clientes.",
  },
];

const relatedPages = [
  {
    href: "/ferramentas/ia-para-social-media",
    title: "IA para Social Media",
    description:
      "Plataforma completa de IA para social media managers.",
  },
  {
    href: "/guias/como-criar-conteudo-com-ia",
    title: "Como Criar Conteúdo com IA",
    description:
      "Guia prático do post ao carrossel com contexto do cliente.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Ferramentas de IA para designers profissionais.",
  },
];

export default function AgenteParaSocialMediaPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Agente de IA para Social Media
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A maioria das ferramentas de IA para redes sociais funciona como um
        bloco de notas inteligente: você escreve, ela responde, e no dia
        seguinte ela esqueceu tudo. Isso é uma ferramenta, não um agente. Um
        agente de IA é diferente — ele lembra, aprende e mantém contexto
        entre sessões. Quando um social media manager gerencia dez clientes,
        a diferença entre ferramenta e agente é brutal: com uma ferramenta,
        você reexplica cada cliente a cada sessão. Com um agente, o briefing
        está sempre ativo. Essa distinção parece sutil, mas na prática é a
        diferença entre produzir conteúdo consistente em minutos ou gastar
        horas repetindo informações que a IA já deveria saber.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que diferencia ferramenta de agente
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Uma ferramenta de IA (como o ChatGPT usado diretamente) é reativa:
        responde ao que você pede, mas não lembra de sessões anteriores. Cada
        conversa é independente. Um agente de IA mantém contexto persistente
        — ele sabe quem é o cliente, qual o tom de voz, quais referências
        foram aprovadas, o que já foi gerado antes. O GPT comum esquece o
        cliente entre sessões. O Calango Studio mantém o briefing sempre
        ativo. Essa persistência de contexto é o que transforma a IA de uma
        ferramenta genérica em um agente especializado para social media.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio funciona como agente
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio implementa o conceito de agente de IA através da
        seção Meus Clientes e da integração desse contexto em todas as
        ferramentas da plataforma.
      </p>

      <h3 className="text-lg font-semibold text-white mb-3">
        Como funciona na prática
      </h3>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li>
          <strong className="text-white">Meus Clientes</strong> — cadastre o
          briefing completo de cada cliente: tom de voz, público-alvo,
          referências visuais, fotos, informações do negócio, estilo de
          comunicação.
        </li>
        <li>
          <strong className="text-white">Contexto automático</strong> — ao
          selecionar um cliente, todas as ferramentas (CopyMaker, Imagem
          Criativa, Remix Layout) já consideram o briefing automaticamente.
        </li>
        <li>
          <strong className="text-white">Consistência entre sessões</strong>
          — diferente do ChatGPT, o contexto não se perde. O conteúdo gerado
          hoje e daqui a um mês terá o mesmo tom e estilo.
        </li>
        <li>
          <strong className="text-white">Evolução contínua</strong> — quanto
          mais você refina o briefing, mais preciso fica o resultado.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-white mb-3 mt-6">
        O que vem por aí
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio está evoluindo para ser um agente cada vez mais
        completo. As próximas funcionalidades incluem gestão de contratos,
        cobranças integradas e notificações, transformando a plataforma em
        um hub completo para social media managers que atendem múltiplos
        clientes. O objetivo é que o profissional gerencie toda a operação
        — do briefing à cobrança — em um único lugar.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
