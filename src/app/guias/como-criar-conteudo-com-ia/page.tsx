import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Como Criar Conteúdo com IA: do post ao carrossel em minutos | Calango Studio",
  description:
    "Guia prático para criar conteúdo para redes sociais com IA. Posts, carrosséis, stories e reels gerados com contexto do cliente já salvo.",
  openGraph: {
    title:
      "Como Criar Conteúdo com IA: do post ao carrossel em minutos | Calango Studio",
    description:
      "Guia prático para criar conteúdo para redes sociais com IA. Posts, carrosséis, stories e reels gerados com contexto do cliente já salvo.",
    url: "https://www.calangostudio.com.br/guias/como-criar-conteudo-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/como-criar-conteudo-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como Criar Conteúdo com IA",
      description:
        "Guia passo a passo para criar conteúdo para redes sociais usando IA com contexto do cliente salvo.",
      step: [
        {
          "@type": "HowToStep",
          name: "Cadastre o cliente no Calango",
          text: "Acesse Meus Clientes e cadastre o briefing completo: tom de voz, público-alvo, referências visuais e informações do negócio.",
        },
        {
          "@type": "HowToStep",
          name: "Acesse o CopyMaker a partir do perfil do cliente",
          text: "Com o cliente selecionado, abra o CopyMaker. O contexto do briefing já estará carregado automaticamente.",
        },
        {
          "@type": "HowToStep",
          name: "Escolha o formato",
          text: "Selecione entre post, carrossel, story ou reels. Cada formato tem estrutura e tom específicos.",
        },
        {
          "@type": "HowToStep",
          name: "Gere com contexto do cliente",
          text: "A IA gera o conteúdo considerando o tom de voz, público e informações do cliente automaticamente.",
        },
        {
          "@type": "HowToStep",
          name: "Revise e exporte",
          text: "Revise o resultado, faça ajustes mínimos se necessário e exporte para uso.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Como manter consistência de conteúdo para vários clientes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No Calango Studio, cada cliente tem seu próprio perfil com briefing, tom de voz e referências salvos. A IA usa esse contexto em todas as gerações, garantindo consistência.",
          },
        },
        {
          "@type": "Question",
          name: "IA consegue criar carrossel completo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O CopyMaker gera copy estruturada para cada slide do carrossel, adaptada ao tom de voz e público do cliente.",
          },
        },
        {
          "@type": "Question",
          name: "Qual IA é melhor para criar copy para redes sociais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Calango usa Gemini e GPT integrados, escolhendo o melhor modelo para cada formato de conteúdo automaticamente.",
          },
        },
        {
          "@type": "Question",
          name: "Posso criar conteúdo para vários clientes no mesmo dia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Com os perfis de clientes salvos, você alterna entre clientes em segundos, sem reexplicar nada a cada troca.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Como manter consistência de conteúdo para vários clientes?",
    answer:
      "No Calango Studio, cada cliente tem seu próprio perfil com briefing, tom de voz e referências salvos. Ao gerar conteúdo, a IA já considera essas informações automaticamente. Isso elimina o problema do GPT convencional, que 'esquece' o cliente entre sessões e gera conteúdo genérico.",
  },
  {
    question: "IA consegue criar carrossel completo?",
    answer:
      "Sim. O CopyMaker do Calango Studio gera copy estruturada para cada slide do carrossel, adaptada ao tom de voz e público do cliente. O resultado vem com texto para capa, slides de conteúdo e slide de fechamento com CTA, pronto para diagramar.",
  },
  {
    question: "Qual IA é melhor para criar copy para redes sociais?",
    answer:
      "O Calango usa Gemini e GPT integrados, escolhendo o melhor modelo para cada formato de conteúdo automaticamente. A vantagem sobre usar o ChatGPT diretamente é que o contexto do cliente já está salvo — você não precisa reexplicar nada.",
  },
  {
    question: "Posso criar conteúdo para vários clientes no mesmo dia?",
    answer:
      "Sim. Com os perfis de clientes salvos, você alterna entre clientes em segundos, sem reexplicar nada a cada troca. Isso permite produzir conteúdo para múltiplos clientes em uma única sessão de trabalho, mantendo a consistência de cada um.",
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
    href: "/guias/agente-para-social-media",
    title: "Agente de IA para Social Media",
    description:
      "Como um agente de IA aprende sobre seus clientes e mantém contexto.",
  },
  {
    href: "/ferramentas/ia-para-designers",
    title: "IA para Designers",
    description:
      "Ferramentas de IA para designers profissionais.",
  },
];

export default function ComoCriarConteudoComIaPage() {
  return (
    <SeoLayout schema={schema}>
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Criar Conteúdo com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Criar conteúdo para redes sociais com IA já é realidade, mas a maioria
        dos profissionais ainda enfrenta um problema fundamental: a IA esquece
        o cliente. Você abre o ChatGPT, explica quem é o cliente, o tom de
        voz, o público, as referências, gera o conteúdo, fecha a aba, e no
        dia seguinte precisa explicar tudo de novo. Multiplique isso por dez
        clientes e você tem um workflow que desperdiça mais tempo do que
        economiza. O problema não é a IA em si — é a falta de contexto
        persistente. Um social media que gerencia múltiplos clientes precisa
        de uma ferramenta que lembre quem é cada cliente, como falar com o
        público de cada um e o que já foi produzido. Este guia mostra como
        criar conteúdo com IA de forma prática, mantendo consistência e
        velocidade.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo para criar conteúdo com IA
      </h2>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 1: Cadastre o cliente no Calango
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Na seção Meus Clientes do Calango Studio, cadastre o briefing completo
        de cada cliente: tom de voz, público-alvo, referências visuais,
        informações do negócio, estilo de comunicação. Esse cadastro é feito
        uma vez e fica salvo permanentemente.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 2: Acesse o CopyMaker a partir do perfil do cliente
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Com o cliente selecionado, abra o CopyMaker. O contexto do briefing
        já estará carregado automaticamente. Tudo que a IA gerar a partir
        daqui considerará o tom de voz, público e estilo daquele cliente
        específico.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 3: Escolha o formato
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Selecione entre post único, carrossel, story ou script para reels.
        Cada formato tem estrutura e tom específicos. O CopyMaker adapta a
        geração ao formato escolhido — um carrossel tem slides estruturados,
        um reels tem gancho e CTA.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 4: A IA gera com o contexto do cliente
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-4">
        A IA gera o conteúdo considerando automaticamente o tom de voz,
        público e informações do cliente. Diferente do ChatGPT, onde você
        reexplica tudo a cada sessão, aqui o contexto já está persistente.
      </p>

      <h3 className="text-lg font-semibold text-white mb-2 mt-6">
        Passo 5: Revise, ajuste mínimo, exporte
      </h3>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Revise o resultado gerado, faça ajustes mínimos se necessário e
        exporte para uso. Como o contexto do cliente já está carregado, os
        ajustes tendem a ser menores do que com ferramentas genéricas.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O problema central: a IA esquece
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A grande limitação do ChatGPT para social media managers é que ele não
        mantém contexto entre sessões. Você explica o cliente detalhadamente,
        gera um ótimo conteúdo, e no dia seguinte precisa explicar tudo de
        novo. Isso gera inconsistência (cada sessão produz algo ligeiramente
        diferente) e desperdiça tempo. O Calango Studio resolve isso com a
        seção Meus Clientes, onde o briefing de cada cliente fica salvo e
        acessível em qualquer ferramenta — CopyMaker, Imagem Criativa, Remix
        Layout. O contexto é sempre o mesmo, gerando consistência real.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
