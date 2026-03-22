import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Modo Manual | Tutorial Calango Studio",
  description:
    "Edite imagens com controle total usando prompt de texto e até 6 referências visuais. Formatos prontos para Story, Feed e Banner.",
  openGraph: {
    title: "Como Usar o Modo Manual | Tutorial Calango Studio",
    description: "Controle total sobre a geração de imagens com múltiplas referências.",
    url: "https://www.calangostudio.com.br/tutoriais/modo-manual",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/modo-manual" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Modo Manual no Calango Studio",
  description: "Tutorial para editar imagens com controle total e múltiplas referências.",
  step: [
    { "@type": "HowToStep", name: "Enviar imagens", text: "Imagem base + até 6 referências." },
    { "@type": "HowToStep", name: "Escolher formato", text: "Story, Feed ou Banner." },
    { "@type": "HowToStep", name: "Escrever prompt", text: "Descreva as modificações desejadas." },
    { "@type": "HowToStep", name: "Gerar resultado", text: "A IA gera a imagem editada." },
  ],
};

const faqs = [
  { question: "Qual a diferença para o Design Studio?", answer: "O Modo Manual é focado em edição precisa via prompt de texto. O Design Studio oferece um editor visual drag-and-drop para montar composições." },
  { question: "Posso usar até 6 referências?", answer: "Sim. Cada referência tem um código de cor para você referenciar no prompt (ex: 'use a cor da imagem vermelha')." },
  { question: "O que são os tokens rápidos?", answer: "São tags predefinidas que você insere no prompt com um clique para melhorias comuns (ex: 'mais contraste', 'remover fundo')." },
  { question: "Quais formatos estão disponíveis?", answer: "Story (9:16), Feed (4:5) e Banner (16:9). A proporção é aplicada automaticamente." },
];

const relatedPages = [
  { href: "/tutoriais/design-studio", title: "Design Studio", description: "Editor visual para montar composições." },
  { href: "/tutoriais/prompt-maker", title: "Prompt Maker", description: "Extraia prompts de imagens de referência." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Estilos prontos sem precisar de prompt." },
];

export default function ModoManualPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/modo-manual">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Modo Manual
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Para quem quer controle total. Envie imagens de referência, escreva o prompt e defina exatamente o resultado.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie a Imagem Base e Referências</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload da imagem principal e até 6 referências adicionais. Cada referência recebe um código de cor
          para facilitar a referenciação no prompt.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/modo-manual-upload.jpg" alt="Upload de imagem base e referências no Modo Manual" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload de imagem base e referências coloridas. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o Formato</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Selecione o formato de saída:</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { name: "Story", ratio: "9:16", icon: "📱" },
            { name: "Feed", ratio: "4:5", icon: "🖼️" },
            { name: "Banner", ratio: "16:9", icon: "🖥️" },
          ].map((f) => (
            <div key={f.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="text-sm font-semibold text-white">{f.name}</p>
              <p className="text-xs text-txt-muted">{f.ratio}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary text-sm mb-4">Escolha também a resolução: 1K, 2K ou 4K.</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escreva o Prompt</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Descreva exatamente o que você quer. Use os <strong className="text-white">tokens rápidos</strong> para inserir
          melhorias com um clique (ex: mais contraste, remover fundo, mudar cor).
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Dica</p>
          <p className="text-sm text-txt-secondary">
            Referencie as imagens pelo código de cor: &quot;Use a paleta da imagem azul com o cenário da imagem vermelha&quot;.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/modo-manual-prompt.jpg" alt="Editor de prompt com tokens rápidos" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: editor de prompt com tokens rápidos. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere o Resultado</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA processa todas as referências + prompt e cria a imagem.
          Gere variações com o botão Retry.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/modo-manual-resultado.jpg" alt="Resultado do Modo Manual" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: resultado gerado. (1:1)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Imagens editadas com precisão total, exatamente como você descreveu.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Até 6 referências", "Tokens rápidos", "3 formatos prontos", "Até 4K", "Controle total"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="modo-manual" />
      <CtaBanner slug="tutoriais/modo-manual" message="Pronto para ter controle total?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
