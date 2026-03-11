import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Restaurador Pro | Tutorial Calango Studio",
  description:
    "Restaure fotos antigas, melhore resolução e recupere imagens danificadas com IA. 4 modos de restauração profissional.",
  openGraph: {
    title: "Como Usar o Restaurador Pro | Tutorial Calango Studio",
    description: "Restaure fotos antigas e melhore a qualidade de qualquer imagem com IA.",
    url: "https://www.calangostudio.com.br/tutoriais/restaurador-pro",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/restaurador-pro" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Restaurador Pro no Calango Studio",
  description: "Tutorial para restaurar fotos antigas e melhorar qualidade de imagens.",
  step: [
    { "@type": "HowToStep", name: "Enviar foto", text: "Faça upload da foto que deseja restaurar." },
    { "@type": "HowToStep", name: "Escolher modo", text: "Selecione o modo de restauração e nível de dano." },
    { "@type": "HowToStep", name: "Gerar restauração", text: "A IA restaura a imagem." },
    { "@type": "HowToStep", name: "Comparar antes/depois", text: "Use o slider para comparar o resultado." },
  ],
};

const faqs = [
  { question: "Funciona com fotos muito danificadas?", answer: "Sim. Você pode indicar o nível de dano (leve, médio, pesado) e a IA prioriza as áreas mais críticas." },
  { question: "Qual a diferença entre os modos?", answer: "Fiel: colorização cinematográfica. Moderno: textura de fotografia digital. Purista: preserva tons originais. Criativo: reconstrói cenário/fundo." },
  { question: "Posso apenas aumentar a resolução?", answer: "Sim. O modo Upscale preserva a imagem original e apenas melhora nitidez e textura." },
  { question: "A restauração preserva os rostos?", answer: "Sim. A IA tem proteção especial para características faciais e identidade." },
];

const relatedPages = [
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Gere novas fotos profissionais após restaurar." },
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Edite detalhes específicos com controle total." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Crie imagens cinematográficas." },
];

const modos = [
  { name: "Fiel", desc: "Colorização cinematográfica natural", icon: "🎨" },
  { name: "Moderno", desc: "Textura de fotografia digital contemporânea", icon: "📷" },
  { name: "Purista", desc: "Preserva tons originais, limpa danos", icon: "🖤" },
  { name: "Criativo", desc: "Reconstrói cenário e fundo", icon: "✨" },
  { name: "Upscale", desc: "Aumenta resolução sem alterar a imagem", icon: "🔍" },
];

export default function RestauradorProPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/restaurador-pro">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Restaurador Pro
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Restaure fotos antigas, melhore a resolução e recupere imagens danificadas. 5 modos profissionais com comparação antes/depois.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie a Foto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload da foto que deseja restaurar. A IA detecta automaticamente as dimensões e
          seleciona a melhor proporção.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-upload.jpg" alt="Upload de foto para restauração" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload de foto para restauração. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o Modo de Restauração</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Selecione o modo e o nível de dano:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {modos.map((m) => (
            <div key={m.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{m.icon}</span>
              <p className="text-sm font-semibold text-white">{m.name}</p>
              <p className="text-xs text-txt-muted mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Nível de dano:</p>
        <ul className="space-y-1 mb-4">
          {["Leve — pequenos arranhões ou perda de cor", "Médio — áreas danificadas visíveis", "Pesado — danos extensos, partes faltando"].map((l) => (
            <li key={l} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">•</span><span>{l}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-modos.jpg" alt="Seleção de modo de restauração" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: seleção de modo e nível de dano. (16:9)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a Restauração</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA restaura a imagem em qualidade 8K HDR,
          preservando a identidade e os detalhes faciais.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Compare Antes e Depois</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Use o slider de comparação para ver o resultado lado a lado com a imagem original.
          Baixe ou salve no Drive.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-resultado.jpg" alt="Comparação antes e depois da restauração" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: comparação antes/depois. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Foto restaurada em alta qualidade, pronta para imprimir ou compartilhar.
          </p>
          <div className="flex flex-wrap gap-2">
            {["5 modos de restauração", "Qualidade 8K HDR", "Comparação antes/depois", "Preserva rostos", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="restaurador-pro" />
      <CtaBanner slug="tutoriais/restaurador-pro" message="Pronto para restaurar suas fotos?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
