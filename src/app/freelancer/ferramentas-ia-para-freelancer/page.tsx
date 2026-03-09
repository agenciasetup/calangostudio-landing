import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Ferramentas de IA para Freelancer de Design e Social Media | Calango Studio",
  description: "As melhores ferramentas de IA para freelancers de design e social media. Do gerador de imagem ao gestor de clientes — tudo em uma plataforma.",
  openGraph: {
    title: "Ferramentas de IA para Freelancer de Design e Social Media | Calango Studio",
    description: "As melhores ferramentas de IA para freelancers de design e social media. Do gerador de imagem ao gestor de clientes — tudo em uma plataforma.",
    url: "https://www.calangostudio.com.br/freelancer/ferramentas-ia-para-freelancer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/freelancer/ferramentas-ia-para-freelancer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quais ferramentas de IA um freelancer de social media deve ter?", acceptedAnswer: { "@type": "Answer", text: "Gerador de imagem, ferramenta de copy, mockup e organização de clientes. O Calango Studio reúne tudo." } },
        { "@type": "Question", name: "Vale a pena pagar por plataforma de IA sendo freelancer?", acceptedAnswer: { "@type": "Answer", text: "Sim, quando o retorno em tempo economizado justifica. Uma hora por dia são 20 horas por mês." } },
        { "@type": "Question", name: "Preciso de todas as ferramentas ou só de algumas?", acceptedAnswer: { "@type": "Answer", text: "Depende do seu serviço. O Calango tem tudo disponível em um plano só." } },
        { "@type": "Question", name: "Como o Calango Studio se compara a ter várias assinaturas separadas?", acceptedAnswer: { "@type": "Answer", text: "Em custo é geralmente mais barato. Em tempo, a vantagem é maior — sem alternar entre plataformas." } },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Calango Studio",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      url: "https://www.calangostudio.com.br",
      description: "Plataforma de IA para freelancers de design e social media.",
      offers: { "@type": "Offer", price: "97.90", priceCurrency: "BRL" },
    },
  ],
};

const faqs = [
  {
    question: "Quais ferramentas de IA um freelancer de social media deve ter?",
    answer: "Gerador de imagem, ferramenta de copy, mockup e alguma forma de organizar clientes com briefing. O Calango Studio reúne tudo em uma única assinatura — sem precisar de Freepik, ChatGPT, Midjourney e planilha de briefing separados.",
  },
  {
    question: "Vale a pena pagar por plataforma de IA sendo freelancer?",
    answer: "Sim, quando o retorno em tempo economizado justifica. Com o Calango Studio, uma hora economizada por dia equivale a mais de 20 horas por mês — tempo que pode ser convertido em mais clientes (mais receita) ou mais descanso (mais qualidade de vida). O plano Base começa em R$97,90/mês.",
  },
  {
    question: "Preciso de todas as ferramentas ou só de algumas?",
    answer: "Depende do seu serviço. Se você atende social media, CopyMaker e Imagem Criativa são essenciais. Se faz e-commerce, Mockup Produto e UGC Build ganham peso. O Calango tem tudo disponível em um plano só — você usa o que precisa sem pagar a mais por ferramentas específicas.",
  },
  {
    question: "Como o Calango Studio se compara a ter várias assinaturas separadas?",
    answer: "Em custo, o Calango é geralmente mais barato que Freepik + ferramenta de copy + gerador de imagem separados. Em tempo, a vantagem é maior ainda — você não alterna entre plataformas e o contexto do cliente está sempre no mesmo lugar. A centralização é o diferencial real.",
  },
];

const relatedPages = [
  { href: "/freelancer/como-atender-mais-clientes", title: "Atender Mais Clientes", description: "Como escalar a carteira sem aumentar a equipe." },
  { href: "/comparativo/calango-vs-canva", title: "Calango vs Canva", description: "Comparativo para designers profissionais." },
  { href: "/ferramentas/ia-para-designers", title: "IA para Designers", description: "Ferramentas de IA para designers em uma plataforma." },
];

export default function FerramentasIaParaFreelancerPage() {
  return (
    <SeoLayout schema={schema} slug="freelancer/ferramentas-ia-para-freelancer">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Ferramentas de IA para Freelancer de Design e Social Media
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Freelancer usa muitas ferramentas. O problema não é custo — é o tempo perdido alternando entre elas e repassando contexto a cada sessão. ChatGPT para copy, Freepik para imagem, Midjourney para geração, Photoshop para composição, planilha para briefing. Cada troca consome tempo e atenção. A tendência do mercado é centralização: uma plataforma que reúne o essencial funciona melhor do que dez ferramentas separadas. O Calango Studio foi construído com essa premissa.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que um freelancer de design precisa de IA
      </h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Geração de imagem profissional</strong> — sem depender de banco de fotos ou Midjourney via Discord</li>
        <li><strong className="text-white">Geração de copy para clientes</strong> — com tom de voz e contexto por cliente</li>
        <li><strong className="text-white">Mockup de produto</strong> — para e-commerce e apresentações</li>
        <li><strong className="text-white">UGC para anúncios</strong> — fotos realistas de pessoas com produtos</li>
        <li><strong className="text-white">Gestão básica de clientes</strong> — com briefing salvo e acessível</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        O que o Calango Studio entrega para freelancers
      </h2>
      <p className="text-txt-secondary leading-relaxed mb-4">
        O Calango Studio reúne 12 ferramentas de IA em uma única plataforma, cobrindo cada uma das necessidades listadas acima:
      </p>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-4">
        <li><strong className="text-white">Imagem Criativa</strong> — geração de imagens com estilos prontos (Animal Art, Hero Style, Business Style e mais)</li>
        <li><strong className="text-white">CopyMaker</strong> — copy para post, carrossel, story e reels com contexto do cliente</li>
        <li><strong className="text-white">Mockup Produto</strong> — produto em cenários gerados por IA</li>
        <li><strong className="text-white">UGC Build</strong> — fotos realistas de pessoas com produtos</li>
        <li><strong className="text-white">Estúdio de Foto</strong> — sessão de fotos com IA usando referência</li>
        <li><strong className="text-white">Assets 3D</strong> — elementos PNG transparente para composições</li>
        <li><strong className="text-white">Remix Layout</strong> — variações de criativos existentes</li>
        <li><strong className="text-white">Meus Clientes</strong> — briefing e contexto salvo por cliente</li>
      </ul>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O plano Base (R$97,90/mês) já inclui acesso a todas as ferramentas com 4 clientes cadastrados. Para quem atende mais clientes, os planos Pro e Elite escalam até 30 clientes. Para freelancers em início de carreira, o plano Base é o ponto de entrada acessível que já resolve a maioria das necessidades.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="freelancer/ferramentas-ia-para-freelancer" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
