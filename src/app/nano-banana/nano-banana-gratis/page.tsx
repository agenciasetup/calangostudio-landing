import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Nano Banana Grátis: como usar o modelo de IA do Calango Studio | Calango Studio",
  description: "Entenda o que é o Nano Banana, como ele funciona no Calango Studio e como maximizar suas gerações com o incentivo de créditos do Google.",
  openGraph: {
    title: "Nano Banana Grátis: como usar o modelo de IA do Calango Studio | Calango Studio",
    description: "Entenda o que é o Nano Banana, como ele funciona no Calango Studio e como maximizar suas gerações com o incentivo de créditos do Google.",
    url: "https://www.calangostudio.com.br/nano-banana/nano-banana-gratis",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/nano-banana/nano-banana-gratis" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Nano Banana",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description: "Modelo de geração de imagens com IA integrado ao Calango Studio, otimizado para produção profissional de conteúdo visual.",
      offers: { "@type": "Offer", price: "97.90", priceCurrency: "BRL", description: "Plano Base do Calango Studio" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O Nano Banana tem plano gratuito?", acceptedAnswer: { "@type": "Answer", text: "Não. O Nano Banana está disponível nos planos do Calango Studio, a partir de R$97,90/mês. Para ampliar as gerações, existe o incentivo de U$300 do Google Cloud que a plataforma ensina a resgatar." } },
        { "@type": "Question", name: "Qual é o plano mais barato para usar o Nano Banana?", acceptedAnswer: { "@type": "Answer", text: "O plano Base do Calango Studio (R$97,90/mês) já inclui acesso a todos os geradores de imagem, incluindo o Nano Banana." } },
        { "@type": "Question", name: "Quantas imagens dá para gerar por mês com o Nano Banana?", acceptedAnswer: { "@type": "Answer", text: "No plano Base, 9.000 créditos mensais, o suficiente para mais de 100 imagens com qualidade. Com o incentivo do Google ativado, você adiciona quase 3.000 gerações extras." } },
        { "@type": "Question", name: "O Nano Banana gera imagens melhores que o Midjourney?", acceptedAnswer: { "@type": "Answer", text: "São modelos com calibrações diferentes. O Nano Banana é otimizado para uso profissional em marketing e social media, com estilos prontos e consistência de resultado." } },
      ],
    },
  ],
};

const faqs = [
  { question: "O Nano Banana tem plano gratuito?", answer: "Não. O Nano Banana está disponível nos planos do Calango Studio, a partir de R$97,90/mês. Para ampliar as gerações sem custo adicional, existe o incentivo de U$300 do Google Cloud. O Calango Studio tem uma aula exclusiva ensinando como resgatar esses créditos, que equivalem a quase 3.000 gerações extras na plataforma." },
  { question: "Qual é o plano mais barato para usar o Nano Banana?", answer: "O plano Base do Calango Studio (R$97,90/mês) já inclui acesso a todos os geradores de imagem: Nano Banana, FLUX e OpenAI. A plataforma seleciona automaticamente o modelo mais adequado para cada geração. Você não precisa escolher; recebe o melhor resultado possível." },
  { question: "Quantas imagens dá para gerar por mês com o Nano Banana?", answer: "No plano Base, são 9.000 créditos mensais, o suficiente para mais de 100 imagens com qualidade profissional. No Pro, 12.000 créditos. No Elite, 17.500. Com o incentivo do Google Cloud ativado, você adiciona aproximadamente 125.000 créditos extras, quase 3.000 gerações adicionais." },
  { question: "O Nano Banana gera imagens melhores que o Midjourney?", answer: "São modelos com calibrações diferentes. O Nano Banana é otimizado para uso profissional em marketing e social media, com estilos prontos (Animal Art, Hero Style, Car Design, Business Style, Craft Style, Classic Style) e alta consistência de resultado. Para uso dentro de uma plataforma de workflow completo com gestão de clientes, a experiência do Nano Banana no Calango Studio supera o Midjourney em praticidade e velocidade." },
];

const relatedPages = [
  { href: "/nano-banana/nano-banana-pro", title: "Nano Banana Pro", description: "A versão avançada do modelo de geração." },
  { href: "/nano-banana/como-usar-nano-banana", title: "Como Usar o Nano Banana", description: "Guia prático de uso na plataforma." },
  { href: "/sobre/nano-banana", title: "Sobre o Nano Banana", description: "A história e tecnologia por trás do modelo." },
];

export default function NanoBananaGratisPage() {
  return (
    <SeoLayout schema={schema} slug="nano-banana/nano-banana-gratis">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Nano Banana Grátis</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Nano Banana é o modelo principal de geração de imagens do Calango Studio. Quem está pesquisando por &ldquo;Nano Banana grátis&rdquo; provavelmente já conhece a qualidade do modelo e quer saber se dá para usá-lo sem pagar. A resposta direta: o Nano Banana está disponível dentro dos planos do Calango Studio, que começam em R$97,90/mês. Não existe plano gratuito. Mas existe um caminho inteligente para ampliar significativamente suas gerações, e ele começa com um incentivo do Google.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">O que é o Nano Banana</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        É o modelo de geração de imagens que roda como motor principal dentro do Calango Studio. Foi escolhido por sua capacidade de gerar imagens cinematográficas e realistas com alta consistência, especialmente quando usado com os estilos prontos da plataforma: Animal Art, Hero Style, Car Design, Business Style, Craft Style e Classic Style. Cada estilo é calibrado para um tipo de necessidade profissional, eliminando a necessidade de prompts longos e detalhados. O Calango Studio integra também FLUX e OpenAI como modelos complementares, selecionando automaticamente o modelo mais adequado para cada tipo de geração. O usuário não precisa escolher. A plataforma decide pelo melhor resultado.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Como maximizar gerações com o incentivo do Google</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        O Google Cloud oferece U$300 em créditos para novas contas. O Calango Studio tem uma aula exclusiva ensinando como resgatar esse incentivo, disponível dentro da plataforma para todos os assinantes. Com esses créditos ativados, você tem acesso a aproximadamente 125.000 créditos adicionais, o equivalente a quase 3.000 gerações extras. Somados aos créditos do plano (9.000 no Base, 12.000 no Pro, 17.500 no Elite), o volume total disponível é significativo. É a forma mais inteligente de usar o Nano Banana com o maior volume possível pelo menor custo.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Por que o Nano Banana não tem plano gratuito</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Modelos de geração de imagem de alta qualidade têm custo de infraestrutura real. Cada imagem gerada consome recursos computacionais que não são baratos. Oferecer Nano Banana gratuito sem limite não é economicamente viável e comprometeria a qualidade do serviço para quem paga. O que o Calango Studio oferece é a melhor relação entre qualidade de geração e custo de assinatura, com o incentivo do Google como complemento para quem quer maximizar o volume. O custo real, quando dividido pelo número de imagens geradas e pelo tempo economizado, é uma fração do que designers gastam com ferramentas fragmentadas e horas de trabalho manual.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner message="Ver planos a partir de R$97,90" slug="nano-banana/nano-banana-gratis" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
