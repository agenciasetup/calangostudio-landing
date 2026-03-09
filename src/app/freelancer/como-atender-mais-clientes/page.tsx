import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Atender Mais Clientes sem Aumentar a Equipe | Calango Studio",
  description: "Como designers e social medias podem atender mais clientes usando IA para centralizar produção, sem contratar mais pessoas.",
  openGraph: {
    title: "Como Atender Mais Clientes sem Aumentar a Equipe | Calango Studio",
    description: "Como designers e social medias podem atender mais clientes usando IA para centralizar produção, sem contratar mais pessoas.",
    url: "https://www.calangostudio.com.br/freelancer/como-atender-mais-clientes",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/freelancer/como-atender-mais-clientes",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qual o limite de clientes que um social media consegue atender sozinho?", acceptedAnswer: { "@type": "Answer", text: "Sem sistema, entre 3 e 6. Com o Calango Studio, pode chegar a 10-15 sem perda de qualidade." } },
        { "@type": "Question", name: "Como organizar o atendimento de múltiplos clientes?", acceptedAnswer: { "@type": "Answer", text: "Cadastre cada cliente com briefing completo. Produza em blocos por cliente." } },
        { "@type": "Question", name: "Preciso contratar para crescer?", acceptedAnswer: { "@type": "Answer", text: "Não necessariamente. Antes de contratar, avalie quanto do seu tempo vai para produção operacional que a IA poderia fazer." } },
        { "@type": "Question", name: "Como precificar mais atendendo mais clientes?", acceptedAnswer: { "@type": "Answer", text: "Com eficiência, você cobra pelo resultado e volume — não pela hora trabalhada." } },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Qual o limite de clientes que um social media consegue atender sozinho?",
    answer: "Sem sistema, normalmente entre 3 e 6 clientes ativos — dependendo da complexidade de cada um. Com uma plataforma como o Calango Studio, esse número pode chegar a 10-15 sem perda de qualidade. A diferença está no tempo operacional: quando a produção é centralizada e o contexto está salvo, cada cliente demanda muito menos horas.",
  },
  {
    question: "Como organizar o atendimento de múltiplos clientes?",
    answer: "Cadastre cada cliente com briefing completo antes de começar a produzir. Produza em blocos por cliente — não misture projetos em uma mesma sessão. No Calango Studio, cada perfil de cliente é um ambiente isolado com briefing, referências e estilo salvos. Isso permite alternar entre clientes sem perder contexto.",
  },
  {
    question: "Preciso contratar para crescer?",
    answer: "Não necessariamente. Antes de contratar, a pergunta certa é: quanto do meu tempo vai para produção operacional que a IA poderia fazer? Com o Calango Studio, muitos freelancers conseguem crescer a carteira de 5 para 10-12 clientes sem adicionar equipe. O investimento em ferramenta é significativamente menor que um salário.",
  },
  {
    question: "Como precificar mais atendendo mais clientes?",
    answer: "Com eficiência de produção, você tem margem para cobrar pelo resultado e pelo volume — não pela hora trabalhada. Isso muda a conversa de preço com o cliente. Em vez de vender horas (que têm teto), você vende resultado e consistência. O Calango Studio é o que viabiliza essa mudança de modelo.",
  },
];

const relatedPages = [
  { href: "/freelancer/como-escalar-agencia-social-media", title: "Escalar Agência de Social Media", description: "Estratégias para escalar agência com IA." },
  { href: "/freelancer/como-sair-do-modo-freelancer", title: "Sair do Modo Freelancer", description: "Como operar como agência mesmo sendo solo." },
  { href: "/social-media/como-criar-posts-para-multiplos-clientes", title: "Posts para Múltiplos Clientes", description: "Produza conteúdo para vários clientes com contexto isolado." },
];

export default function ComoAtenderMaisClientesPage() {
  return (
    <SeoLayout schema={schema} slug="freelancer/como-atender-mais-clientes">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Atender Mais Clientes sem Aumentar a Equipe
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O teto de clientes de um freelancer ou agência pequena raramente é limitado por demanda — é limitado por capacidade de produção. Cada cliente novo aumenta o volume de briefs, reuniões, criativos e revisões. Sem um sistema eficiente, a conta não fecha: atender mais clientes exige mais tempo, que exige contratar, que come a margem. O resultado é um profissional que trabalha cada vez mais para manter o mesmo faturamento. A IA quebra esse ciclo ao comprimir o tempo operacional de produção.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que limita a capacidade de atendimento
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Tempo de produção por cliente</strong> — imagem + copy + revisão. Um carrossel pode levar 3-4 horas sem IA. Com o Calango Studio, leva 20-30 minutos.</li>
        <li><strong className="text-white">Repassar briefing a cada sessão</strong> — no GPT, você reexplica o cliente toda vez. Esse tempo acumula: 15 minutos por sessão × 10 clientes × 4 semanas = 10 horas/mês perdidas.</li>
        <li><strong className="text-white">Falta de padronização que obriga retrabalho</strong> — sem estilos salvos por cliente, o resultado visual varia e o retrabalho aumenta.</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio muda essa equação
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        Com briefing salvo, estilos por cliente e geração rápida, o tempo de produção por cliente cai. O que levava 4 horas passa a levar menos de 1 hora. Com essa eficiência, um freelancer consegue dobrar a carteira de clientes sem trabalhar mais horas.
      </p>
      <p className="text-txt-secondary leading-relaxed mb-4">
        A conta prática: se você atende 5 clientes e cada um demanda 8 horas semanais de produção, são 40 horas — uma semana inteira. Se o Calango reduz o tempo de produção em 70%, cada cliente passa a demandar ~2,5 horas. Total: 12,5 horas para 5 clientes. Com as 27,5 horas livres, você pode atender mais 5 clientes — dobrando o faturamento sem trabalhar mais.
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Briefing salvo por cliente</strong> — sem reexplicar contexto, sem perder tempo</li>
        <li><strong className="text-white">Estilos visuais por cliente</strong> — consistência automática entre peças</li>
        <li><strong className="text-white">Copy com contexto</strong> — CopyMaker integrado ao perfil do cliente</li>
        <li><strong className="text-white">Perfis isolados</strong> — sem cruzar informações entre clientes</li>
      </ul>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="freelancer/como-atender-mais-clientes" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
