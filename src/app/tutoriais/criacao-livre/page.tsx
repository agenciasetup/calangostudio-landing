import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar a Criação Livre | Tutorial Calango Studio",
  description:
    "Componha peças visuais com imagem base, referência de estilo e texto personalizável. Máxima liberdade criativa com IA.",
  openGraph: {
    title: "Como Usar a Criação Livre | Tutorial Calango Studio",
    description: "Liberdade total para criar composições visuais com IA.",
    url: "https://www.calangostudio.com.br/tutoriais/criacao-livre",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/criacao-livre" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar a Criação Livre no Calango Studio",
  description: "Tutorial para criar composições visuais livres com IA.",
  step: [
    { "@type": "HowToStep", name: "Enviar imagens", text: "Imagem base e referência de estilo." },
    { "@type": "HowToStep", name: "Configurar textos", text: "Headline, subtítulo e CTA com cores." },
    { "@type": "HowToStep", name: "Gerar composição", text: "A IA cria a peça visual." },
    { "@type": "HowToStep", name: "Refinar resultado", text: "Gere variações até chegar no ideal." },
  ],
};

const faqs = [
  { question: "Qual a diferença para a Imagem Criativa?", answer: "A Imagem Criativa usa modos e estilos prontos. A Criação Livre dá liberdade total — você controla imagem base, referência de estilo, textos e cores." },
  { question: "Posso usar sem imagem de referência?", answer: "Sim. A imagem de referência de estilo é opcional. Você pode usar apenas a imagem base com texto." },
  { question: "Os textos ficam integrados na imagem?", answer: "Sim. A IA gera a composição com os textos integrados ao design, respeitando cores e hierarquia visual." },
  { question: "Posso refinar o resultado?", answer: "Sim. Use o modo de refinamento com notas adicionais para ajustar o resultado." },
];

const relatedPages = [
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Controle total com prompt de texto." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Estilos prontos para quem quer praticidade." },
  { href: "/tutoriais/remix-layout", title: "Remix Layout", description: "Replique layouts mantendo a estrutura." },
];

export default function CriacaoLivrePage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/criacao-livre">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar a Criação Livre
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Máxima liberdade criativa. Combine imagem base, referência de estilo e textos personalizados para criar peças visuais únicas.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie as Imagens</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Faça upload de:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Imagem base", desc: "A foto principal da composição" },
            { label: "Referência de estilo (opcional)", desc: "Uma imagem cujo estilo a IA vai replicar" },
            { label: "Proporção", desc: "4:5, 16:9, 9:16, 1:1 e mais" },
            { label: "Qualidade", desc: "1K, 2K ou 4K" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/criacao-livre-upload.jpg" alt="Upload de imagem base e referência de estilo" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload de imagem base e referência. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure os Textos</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Adicione textos à composição, cada um com cor independente:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Headline", desc: "Título principal com color picker" },
            { label: "Subtítulo", desc: "Texto secundário com color picker" },
            { label: "CTA", desc: "Chamada para ação com color picker" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-txt-secondary text-sm mb-4">
          Cada elemento pode ser ligado/desligado individualmente. Adicione notas de refinamento se quiser ajustes específicos.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/criacao-livre-textos.jpg" alt="Configuração de textos e cores" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de textos com color pickers. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a Composição</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA combina sua imagem base, referência de estilo e textos
          em uma composição visual profissional.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/criacao-livre-resultado.jpg" alt="Composição gerada na Criação Livre" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: composição final. (1:1)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Refine até o Ideal</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Não ficou perfeito? Use o modo <strong className="text-white">Retry</strong> para gerar variações.
          Adicione notas de refinamento para guiar os ajustes.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Peças visuais únicas com total controle criativo.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Liberdade total", "Textos com cores", "Referência de estilo", "Até 4K", "Modo refinamento"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="criacao-livre" />
      <CtaBanner slug="tutoriais/criacao-livre" message="Pronto para criar com liberdade total?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
