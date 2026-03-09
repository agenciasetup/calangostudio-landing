import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Criar Copy para Post de Instagram com IA | Calango Studio",
  description: "Gere copies para posts, stories, carrosséis e reels com IA em segundos. Com contexto do cliente salvo, sem reexplicar o briefing.",
  openGraph: {
    title: "Como Criar Copy para Post de Instagram com IA | Calango Studio",
    description: "Gere copies para posts, stories, carrosséis e reels com IA em segundos. Com contexto do cliente salvo, sem reexplicar o briefing.",
    url: "https://www.calangostudio.com.br/social-media/como-criar-copy-para-post",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/social-media/como-criar-copy-para-post",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como criar copy para post de Instagram com IA",
      description: "Guia para gerar copies com IA mantendo consistência por cliente.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Acesse o perfil do cliente", text: "No Calango Studio, acesse o perfil do cliente." },
        { "@type": "HowToStep", position: 2, name: "Abra o CopyMaker", text: "Abra o CopyMaker a partir do perfil." },
        { "@type": "HowToStep", position: 3, name: "Escolha o formato", text: "Post, carrossel, story ou reels." },
        { "@type": "HowToStep", position: 4, name: "Informe o tema", text: "A IA gera a copy com tom de voz e contexto do cliente." },
        { "@type": "HowToStep", position: 5, name: "Revise e use", text: "Revise, ajuste mínimo, copie e use." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qual a diferença entre usar o ChatGPT e o CopyMaker do Calango?", acceptedAnswer: { "@type": "Answer", text: "No ChatGPT, você começa do zero toda vez. No CopyMaker, o briefing do cliente já está carregado." } },
        { "@type": "Question", name: "IA consegue escrever no tom de voz do meu cliente?", acceptedAnswer: { "@type": "Answer", text: "Sim, desde que o briefing esteja bem preenchido com tom de voz, exemplos e referências." } },
        { "@type": "Question", name: "Copy gerada por IA precisa de revisão?", acceptedAnswer: { "@type": "Answer", text: "Uma revisão rápida é recomendada, mas o volume de edição é muito menor do que escrever do zero." } },
        { "@type": "Question", name: "O CopyMaker cria hashtags também?", acceptedAnswer: { "@type": "Answer", text: "Sim. O CopyMaker gera a copy completa do post, incluindo sugestão de hashtags relevantes." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Qual a diferença entre usar o ChatGPT e o CopyMaker do Calango?",
    answer: "No ChatGPT, você começa do zero toda vez. Precisa repassar nome do cliente, produto, tom de voz, público, diferenciais. Na maioria das sessões, o GPT mistura memórias de outros clientes ou perde consistência de tom. No CopyMaker, o briefing do cliente já está carregado — tom de voz, produto e público são considerados automaticamente em cada geração.",
  },
  {
    question: "IA consegue escrever no tom de voz do meu cliente?",
    answer: "Sim, desde que o briefing esteja bem preenchido. No Calango Studio, você cadastra tom de voz, exemplos de copy aprovada e referências de comunicação. A IA usa tudo isso na geração, mantendo consistência entre posts diferentes do mesmo cliente. Quanto mais detalhado o briefing, mais preciso o resultado.",
  },
  {
    question: "Copy gerada por IA precisa de revisão?",
    answer: "Uma revisão rápida é recomendada, especialmente para ajustes de personalidade e detalhes específicos da marca. Mas o volume de edição é muito menor do que escrever do zero. Na prática, a maioria dos profissionais faz ajustes em 2-3 minutos — não em 30 minutos escrevendo tudo.",
  },
  {
    question: "O CopyMaker cria hashtags também?",
    answer: "Sim. O CopyMaker gera a copy completa do post, incluindo sugestão de hashtags relevantes para o conteúdo e o nicho do cliente. As hashtags são geradas com base no tema do post e no perfil do cliente, não são genéricas.",
  },
];

const relatedPages = [
  { href: "/social-media/como-fazer-carrossel-instagram-ia", title: "Carrossel para Instagram", description: "Crie carrosséis completos com estrutura e copy por slide." },
  { href: "/social-media/como-produzir-mais-conteudo", title: "Produzir Mais Conteúdo", description: "Estratégias para aumentar produção sem aumentar horas." },
  { href: "/ferramentas/ia-para-social-media", title: "IA para Social Media", description: "Plataforma completa para social media managers." },
];

export default function ComoCriarCopyParaPostPage() {
  return (
    <SeoLayout schema={schema} slug="social-media/como-criar-copy-para-post">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Criar Copy para Post de Instagram com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Escrever copy para redes sociais parece simples até você estar fazendo isso para 10 clientes diferentes toda semana. O problema não é criatividade — é contexto. Cada cliente tem tom de voz, público e produto diferente. No GPT, você reexplica isso a cada sessão. No meio do caminho, o modelo mistura memórias de clientes anteriores e entrega algo genérico. No Calango Studio, o briefing do cliente está salvo e a IA já parte do ponto certo — sem reexplicações, sem contaminação de contexto entre clientes diferentes.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: copy para post com IA
      </h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Acesse o perfil do cliente no Calango Studio</strong> — briefing, tom de voz, público-alvo e referências estão salvos no perfil.</li>
        <li><strong className="text-white">Abra o CopyMaker a partir do perfil</strong> — isso garante que a IA use o contexto daquele cliente específico.</li>
        <li><strong className="text-white">Escolha o formato</strong> — post, carrossel, story ou reels. Cada formato tem estrutura e extensão diferentes.</li>
        <li><strong className="text-white">Informe o tema ou objetivo da publicação</strong> — pode ser um lançamento, conteúdo educativo, bastidores, prova social.</li>
        <li><strong className="text-white">A IA gera a copy com o tom de voz do cliente</strong> — headline, corpo, CTA e hashtags. Tudo calibrado para o formato escolhido.</li>
        <li><strong className="text-white">Revise, ajuste mínimo, copie e use</strong> — a revisão é rápida quando o ponto de partida já está no tom certo.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O problema do GPT para copy de cliente
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Quando você usa o ChatGPT para criar copy de cliente, precisa repassar o briefing toda vez — nome, produto, tom de voz, público, diferenciais. Na maioria das sessões, o GPT mistura memórias de outros clientes ou perde consistência de tom. Resultado: a copy do Cliente A sai com o tom do Cliente B, e você gasta mais tempo revisando do que escrevendo do zero.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio isola o contexto por cliente, eliminando esse problema estruturalmente. Cada cliente tem seu próprio perfil — e a IA só acessa o briefing daquele cliente quando você está produzindo para ele. Sem contaminação, sem confusão, sem retrabalho. Isso parece um detalhe, mas para quem produz conteúdo para 5, 10 ou 15 clientes por semana, é a diferença entre 2 horas e 20 minutos por cliente.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="social-media/como-criar-copy-para-post" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
