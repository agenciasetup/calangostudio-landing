import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Nano Banana Pro: geração de imagens profissional no Calango Studio | Calango Studio",
  description: "Conheça o Nano Banana Pro, o modelo de IA de imagens do Calango Studio. Como ele funciona, quais estilos gera e como usá-lo com máxima eficiência.",
  openGraph: {
    title: "Nano Banana Pro: geração de imagens profissional no Calango Studio | Calango Studio",
    description: "Conheça o Nano Banana Pro, o modelo de IA de imagens do Calango Studio. Como ele funciona, quais estilos gera e como usá-lo com máxima eficiência.",
    url: "https://www.calangostudio.com.br/nano-banana/nano-banana-pro",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/nano-banana/nano-banana-pro" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Nano Banana Pro",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description: "Versão avançada do modelo de geração de imagens com IA do Calango Studio, otimizado para produção profissional com estilos pré-treinados.",
      offers: { "@type": "Offer", price: "97.90", priceCurrency: "BRL", description: "Disponível nos planos do Calango Studio" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qual a diferença entre Nano Banana e Nano Banana Pro?", acceptedAnswer: { "@type": "Answer", text: "O Nano Banana Pro é a versão do modelo otimizada para produção profissional, com maior precisão em estilos específicos e melhor consistência entre gerações." } },
        { "@type": "Question", name: "O Nano Banana Pro está disponível no plano Base?", acceptedAnswer: { "@type": "Answer", text: "O plano Base já inclui acesso aos geradores de imagem com o Nano Banana. Os planos Pro e Elite têm acesso ampliado a todas as ferramentas e maior volume de créditos mensais." } },
        { "@type": "Question", name: "Como o Nano Banana Pro compara com o FLUX?", acceptedAnswer: { "@type": "Answer", text: "São complementares. O FLUX é usado pelo Calango Studio para determinados tipos de geração onde performa melhor. A plataforma seleciona automaticamente." } },
        { "@type": "Question", name: "O Nano Banana Pro gera texto dentro da imagem?", acceptedAnswer: { "@type": "Answer", text: "A geração de texto dentro de imagem é um dos desafios de todos os modelos de imagem. Para texto em criativos, o fluxo recomendado é gerar a imagem no Calango e inserir o texto na composição final." } },
      ],
    },
  ],
};

const faqs = [
  { question: "Qual a diferença entre Nano Banana e Nano Banana Pro?", answer: "O Nano Banana Pro é a versão do modelo otimizada para produção profissional, com maior precisão em estilos específicos e melhor consistência entre gerações. É o modelo padrão nos planos Pro e Elite do Calango Studio, com acesso ampliado a todas as capacidades de geração e maior volume de créditos mensais." },
  { question: "O Nano Banana Pro está disponível no plano Base?", answer: "O plano Base (R$97,90/mês) já inclui acesso aos geradores de imagem com o Nano Banana. Os planos Pro e Elite têm acesso ampliado a todas as ferramentas, maior volume de créditos mensais e capacidades adicionais do Nano Banana Pro. Todos os planos podem ser ampliados com o incentivo de U$300 do Google Cloud." },
  { question: "Como o Nano Banana Pro compara com o FLUX?", answer: "São complementares. O FLUX é usado pelo Calango Studio para determinados tipos de geração onde performa melhor — a plataforma seleciona automaticamente qual modelo usar para cada solicitação. Você nunca precisa escolher entre eles; recebe o melhor resultado independente de qual modelo foi usado nos bastidores." },
  { question: "O Nano Banana Pro gera texto dentro da imagem?", answer: "A geração de texto dentro de imagem é um dos desafios técnicos de todos os modelos de IA atuais — incluindo Midjourney, DALL-E e Stable Diffusion. Para texto em criativos, o fluxo recomendado é gerar a imagem no Calango Studio e inserir o texto na composição final no Photoshop, Figma ou Canva." },
];

const relatedPages = [
  { href: "/nano-banana/nano-banana-gratis", title: "Nano Banana Grátis", description: "Como maximizar gerações com incentivo Google." },
  { href: "/nano-banana/como-usar-nano-banana", title: "Como Usar o Nano Banana", description: "Guia prático de uso na plataforma." },
  { href: "/sobre/nano-banana", title: "Sobre o Nano Banana", description: "A história e tecnologia por trás do modelo." },
];

export default function NanoBananaProPage() {
  return (
    <SeoLayout schema={schema} slug="nano-banana/nano-banana-pro">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Nano Banana Pro</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Nano Banana Pro é a versão avançada do modelo de geração de imagens integrado ao Calango Studio. Desenvolvido para produção profissional, ele é calibrado para gerar imagens cinematográficas, realistas e com alta consistência de estilo — especialmente quando combinado com o sistema de briefing de clientes da plataforma. Para designers e social media managers que produzem conteúdo em volume, é a diferença entre imagens genéricas e conteúdo que realmente parece feito sob medida para cada marca.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que diferencia o Nano Banana Pro</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        A maioria dos geradores de imagem exige que você escreva prompts detalhados para conseguir um resultado consistente. O Nano Banana Pro opera com estilos pré-treinados para as necessidades reais de designers e social medias — Animal Art para mascotes e personagens, Hero Style para posts de impacto, Car Design para automotivo, Business Style para corporativo, Craft Style para orgânico e artesanal, Classic Style para elegância atemporal, e Personalizado para quando você quer definir com referências próprias. Você escolhe o estilo, descreve o que precisa e o modelo entrega com consistência — sem necessidade de prompts longos ou engenharia de prompt. Além disso, o Calango Studio integra FLUX e OpenAI como modelos complementares. A plataforma seleciona automaticamente qual modelo usar para cada tipo de geração — o usuário nunca precisa escolher nem testar modelos manualmente.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Casos de uso do Nano Banana Pro</h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>Imagens cinematográficas para posts de alto impacto em redes sociais</li>
        <li>Sessão de fotos com referência de rosto ou produto via Estúdio de Foto</li>
        <li>UGC com aparência de foto orgânica para anúncios via UGC Build</li>
        <li>Assets 3D em PNG transparente para composições e criativos</li>
        <li>Mockup de produto em cenários realistas via Mockup Produto</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Como maximizar o uso com o incentivo do Google</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio tem uma aula exclusiva ensinando como resgatar U$300 em créditos do Google Cloud — o que equivale a aproximadamente 125.000 créditos extras na plataforma, ou quase 3.000 gerações adicionais. Para quem usa o Nano Banana Pro intensivamente — produzindo dezenas de imagens por semana para múltiplos clientes — esse incentivo é a forma mais inteligente de ampliar o volume disponível sem aumentar o custo mensal. Combinado com os créditos do plano (9.000 no Base, 12.000 no Pro, 17.500 no Elite), o volume total atende até as operações mais exigentes.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner message="Ver planos a partir de R$97,90" slug="nano-banana/nano-banana-pro" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
