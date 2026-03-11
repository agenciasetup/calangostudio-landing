import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Prompt Maker | Tutorial Calango Studio",
  description:
    "Extraia prompts detalhados de qualquer imagem de referência. A IA analisa câmera, iluminação, cores, estilo e composição.",
  openGraph: {
    title: "Como Usar o Prompt Maker | Tutorial Calango Studio",
    description: "Extraia prompts profissionais de qualquer imagem com IA.",
    url: "https://www.calangostudio.com.br/tutoriais/prompt-maker",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/prompt-maker" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Prompt Maker no Calango Studio",
  description: "Tutorial para extrair prompts detalhados de imagens.",
  step: [
    { "@type": "HowToStep", name: "Enviar imagem", text: "Faça upload da imagem de referência." },
    { "@type": "HowToStep", name: "Extrair prompt", text: "A IA analisa e gera o prompt." },
    { "@type": "HowToStep", name: "Copiar e usar", text: "Copie o prompt para usar no Modo Manual." },
  ],
};

const faqs = [
  { question: "Para que serve o Prompt Maker?", answer: "Ele analisa uma imagem e extrai um prompt detalhado com câmera, iluminação, cores, estilo e composição. Você pode usar esse prompt no Modo Manual ou em outras ferramentas." },
  { question: "O prompt é em português?", answer: "O prompt é gerado em inglês (formato universal para IA) com instruções detalhadas sobre estilo visual." },
  { question: "Funciona com qualquer imagem?", answer: "Sim. Fotos, ilustrações, designs — o Prompt Maker analisa e descreve qualquer estilo visual." },
  { question: "Onde encontro o Prompt Maker?", answer: "É um widget flutuante no canto inferior direito da plataforma. Está sempre acessível, em qualquer tela." },
];

const relatedPages = [
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Use o prompt extraído para gerar imagens." },
  { href: "/tutoriais/criacao-livre", title: "Criação Livre", description: "Composições livres com referência de estilo." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Estilos prontos sem precisar de prompt." },
];

export default function PromptMakerPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/prompt-maker">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Prompt Maker
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Prompt Maker analisa qualquer imagem e extrai um prompt detalhado com informações de câmera,
        iluminação, cores e estilo. Use-o para replicar estilos visuais.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra o Widget e Envie uma Imagem</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O Prompt Maker é um <strong className="text-white">widget flutuante</strong> no canto inferior direito da plataforma.
          Clique para abrir e faça upload da imagem de referência.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/prompt-maker-widget.jpg" alt="Widget do Prompt Maker no canto inferior direito" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: widget do Prompt Maker aberto. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Extraia o Prompt</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Extrair</strong>. A IA analisa a imagem e gera um prompt com:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Ângulo e composição da câmera",
            "Características da lente",
            "Blur, bokeh e profundidade de campo",
            "Paleta de cores e color grading",
            "Ambiente e cenário",
            "Setup de iluminação",
            "Estilo de renderização",
            "Detalhes visuais-chave",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/prompt-maker-resultado.jpg" alt="Prompt extraído pelo Prompt Maker" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: prompt extraído com detalhes técnicos. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Copie e Use</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Copiar</strong> para copiar o prompt. Use-o no{" "}
          <strong className="text-white">Modo Manual</strong> ou em qualquer ferramenta que aceite prompt de texto.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Prompt profissional extraído automaticamente, pronto para replicar qualquer estilo visual.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Análise completa", "Prompt em inglês", "Copiar com 1 clique", "Widget sempre acessível", "Use no Modo Manual"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBanner slug="tutoriais/prompt-maker" message="Pronto para extrair prompts profissionais?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
