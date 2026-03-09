import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Nano Banana no Calango Studio: guia prático | Calango Studio",
  description: "Guia completo para usar o Nano Banana no Calango Studio. Estilos, prompts, créditos e como maximizar suas gerações.",
  openGraph: {
    title: "Como Usar o Nano Banana no Calango Studio: guia prático | Calango Studio",
    description: "Guia completo para usar o Nano Banana no Calango Studio. Estilos, prompts, créditos e como maximizar suas gerações.",
    url: "https://www.calangostudio.com.br/nano-banana/como-usar-nano-banana",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/nano-banana/como-usar-nano-banana" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como usar o Nano Banana no Calango Studio",
      description: "Guia prático para usar o Nano Banana no Calango Studio, desde a escolha de estilo até a exportação.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Acesse o Calango Studio", text: "Entre na plataforma e acesse a ferramenta Imagem Criativa como ponto de entrada principal." },
        { "@type": "HowToStep", position: 2, name: "Selecione o cliente", text: "Se estiver gerando para um cliente, acesse pelo perfil do cliente — o contexto já estará carregado automaticamente." },
        { "@type": "HowToStep", position: 3, name: "Escolha o estilo", text: "Selecione entre Animal Art, Hero Style, Car Design, Business Style, Craft Style, Classic Style ou Personalizado." },
        { "@type": "HowToStep", position: 4, name: "Descreva a cena", text: "Descreva a cena, personagem ou composição que você precisa em poucas palavras." },
        { "@type": "HowToStep", position: 5, name: "Gere e refine", text: "Gere a imagem e avalie. Se necessário, refine a descrição e gere novamente — 2 a 4 gerações costumam ser suficientes." },
        { "@type": "HowToStep", position: 6, name: "Exporte", text: "Exporte e use diretamente ou finalize no Photoshop/Figma." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Preciso escrever prompts complexos para usar o Nano Banana?", acceptedAnswer: { "@type": "Answer", text: "Não. Os estilos prontos eliminam a necessidade de prompts detalhados. Você escolhe o estilo e descreve a cena com poucas palavras — o modelo interpreta e gera." } },
        { "@type": "Question", name: "Quantas gerações consigo por mês com o Nano Banana?", acceptedAnswer: { "@type": "Answer", text: "No plano Base, 9.000 créditos — mais de 100 gerações. No Pro, 12.000. No Elite, 17.500. Mais o incentivo do Google que pode adicionar quase 3.000 gerações extras." } },
        { "@type": "Question", name: "O Nano Banana gera imagens verticais para Stories?", acceptedAnswer: { "@type": "Answer", text: "Sim. É possível especificar a proporção da imagem na geração para formato vertical (9:16 para Stories) ou quadrado (1:1 para feed)." } },
        { "@type": "Question", name: "Como melhorar a qualidade das imagens geradas?", acceptedAnswer: { "@type": "Answer", text: "Seja específico na descrição: iluminação, ângulo, ambiente, estilo fotográfico. Usar o perfil do cliente com referências visuais salvas também melhora a consistência." } },
      ],
    },
  ],
};

const faqs = [
  { question: "Preciso escrever prompts complexos para usar o Nano Banana?", answer: "Não. Os estilos prontos da plataforma eliminam a necessidade de prompts detalhados. Você escolhe o estilo (Animal Art, Hero Style, Car Design, Business Style, Craft Style, Classic Style ou Personalizado) e descreve a cena com poucas palavras — o modelo interpreta o contexto e gera. Não é necessário engenharia de prompt avançada. O sistema foi projetado para que designers e social medias consigam resultados profissionais sem curva de aprendizado." },
  { question: "Quantas gerações consigo por mês com o Nano Banana?", answer: "No plano Base, 9.000 créditos — mais de 100 gerações com qualidade profissional. No Pro, 12.000 créditos. No Elite, 17.500 créditos. Somando o incentivo do Google Cloud (U$300 em créditos que o Calango ensina a resgatar), você adiciona quase 3.000 gerações extras — totalizando um volume que atende até operações com múltiplos clientes." },
  { question: "O Nano Banana gera imagens verticais para Stories?", answer: "Sim. É possível especificar a proporção da imagem na geração — formato vertical (9:16 para Stories e Reels), quadrado (1:1 para feed do Instagram) ou horizontal (16:9 para thumbnails e banners). A plataforma adapta a geração para o formato solicitado." },
  { question: "Como melhorar a qualidade das imagens geradas?", answer: "Seja específico na descrição: mencione iluminação (luz natural, studio, golden hour), ângulo (close-up, aéreo, frontal), ambiente (escritório, café, natureza) e estilo fotográfico (editorial, lifestyle, product shot). Quanto mais contexto você der, mais preciso o resultado. Usar o perfil do cliente com referências visuais salvas também melhora significativamente a consistência entre gerações." },
];

const relatedPages = [
  { href: "/nano-banana/nano-banana-pro", title: "Nano Banana Pro", description: "A versão avançada do modelo de geração." },
  { href: "/guias/como-gerar-imagens-com-ia", title: "Como Gerar Imagens com IA", description: "Guia completo de geração de imagens." },
  { href: "/guias/estilos-de-imagem-com-ia", title: "Estilos de Imagem com IA", description: "Todos os estilos disponíveis na plataforma." },
];

export default function ComoUsarNanoBananaPage() {
  return (
    <SeoLayout schema={schema} slug="nano-banana/como-usar-nano-banana">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Como Usar o Nano Banana</h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Nano Banana é o motor de geração de imagens do Calango Studio. Você não precisa configurar nada — ele já está integrado à plataforma e é ativado automaticamente quando você usa a Imagem Criativa, o Estúdio de Foto, o UGC Build ou o Mockup Produto. O que você precisa saber é como extrair o melhor resultado de cada geração — e este guia cobre exatamente isso.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Passo a passo</h2>
      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li><strong className="text-white">Acesse o Calango Studio</strong> — entre na plataforma e acesse a ferramenta Imagem Criativa, que é o ponto de entrada principal para geração de imagens.</li>
        <li><strong className="text-white">Selecione o cliente</strong> — se estiver gerando para um cliente específico, acesse pelo perfil dele. O contexto (estilo visual, paleta de cores, preferências) já estará carregado automaticamente.</li>
        <li><strong className="text-white">Escolha o estilo de geração</strong> — selecione entre Animal Art, Hero Style, Car Design, Business Style, Craft Style, Classic Style ou Personalizado. Cada estilo é calibrado para um tipo de necessidade profissional.</li>
        <li><strong className="text-white">Descreva a cena</strong> — descreva a cena, personagem ou composição que você precisa. Não é necessário prompt longo — o estilo já carrega a maior parte do contexto visual.</li>
        <li><strong className="text-white">Gere e avalie</strong> — gere a imagem e veja o resultado. Se necessário, refine a descrição e gere novamente. Em geral, 2 a 4 gerações são suficientes para chegar no resultado ideal.</li>
        <li><strong className="text-white">Exporte e use</strong> — exporte a imagem e use diretamente no post, anúncio ou material. Se precisar de ajustes de texto ou composição, finalize no Photoshop ou Figma.</li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Como escolher o estilo certo</h2>
      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li><strong className="text-white">Animal Art:</strong> mascotes, personagens criativos, posts com personalidade e carisma</li>
        <li><strong className="text-white">Hero Style:</strong> posts de impacto, liderança, marcas fortes e posicionamento premium</li>
        <li><strong className="text-white">Car Design:</strong> automotivo, lifestyle premium, performance e velocidade</li>
        <li><strong className="text-white">Business Style:</strong> corporativo, profissional, B2B e conteúdo institucional</li>
        <li><strong className="text-white">Craft Style:</strong> natural, artesanal, orgânico, comida e lifestyle</li>
        <li><strong className="text-white">Classic Style:</strong> elegante, atemporal, luxo e sofisticação</li>
        <li><strong className="text-white">Personalizado:</strong> você define com referências visuais próprias do cliente</li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">Como maximizar seus créditos</h2>
      <p className="text-txt-secondary leading-relaxed mb-8">
        Cada geração consome créditos do seu plano. Para usar mais sem aumentar o custo, o Calango Studio tem uma aula exclusiva ensinando como resgatar U$300 em créditos do Google Cloud — equivalente a aproximadamente 125.000 créditos adicionais, ou quase 3.000 gerações extras. Disponível dentro da plataforma para todos os assinantes, independente do plano escolhido. É a forma mais inteligente de ampliar o volume de geração com o menor custo possível.
      </p>

      <FaqSection faqs={faqs} />
      <CtaBanner message="Ver planos a partir de R$97,90" slug="nano-banana/como-usar-nano-banana" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
