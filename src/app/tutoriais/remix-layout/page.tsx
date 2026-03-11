import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Remix Layout | Tutorial Calango Studio",
  description:
    "Replique layouts trocando fotos, cores e texto mantendo a estrutura original. Produção em escala sem perder qualidade.",
  openGraph: {
    title: "Como Usar o Remix Layout | Tutorial Calango Studio",
    description: "Adapte layouts com sua identidade mantendo a hierarquia visual.",
    url: "https://www.calangostudio.com.br/tutoriais/remix-layout",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/remix-layout" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Remix Layout no Calango Studio",
  description: "Tutorial para replicar layouts com sua identidade visual.",
  step: [
    { "@type": "HowToStep", name: "Enviar imagem de layout", text: "Faça upload do layout que quer replicar." },
    { "@type": "HowToStep", name: "Configurar adaptações", text: "Defina proporção, cores, fidelidade e roupa." },
    { "@type": "HowToStep", name: "Editar textos", text: "Ajuste ou remova textos detectados." },
    { "@type": "HowToStep", name: "Gerar remix", text: "A IA recria o layout com suas personalizações." },
  ],
};

const faqs = [
  { question: "O layout original precisa ser meu?", answer: "Não. Você pode enviar qualquer layout como referência. A IA recria a estrutura com seus elementos visuais." },
  { question: "A IA detecta textos automaticamente?", answer: "Sim. O Remix Layout usa OCR para identificar textos na imagem e permite que você edite ou remova cada um." },
  { question: "Posso mudar o rosto da pessoa?", answer: "Sim. O slider de fidelidade controla quanto a pessoa original é preservada. Use referências de personagens do seu cliente." },
  { question: "Funciona para qualquer proporção?", answer: "Sim. Você pode alterar a proporção de saída (4:5, 16:9, 9:16 etc.) mesmo que o layout original tenha outra." },
];

const relatedPages = [
  { href: "/tutoriais/criacao-livre", title: "Criação Livre", description: "Para composições totalmente livres." },
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Edição com controle total via prompt." },
  { href: "/tutoriais/copymaker", title: "CopyMaker", description: "Gere a copy para o novo layout." },
];

export default function RemixLayoutPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/remix-layout">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Remix Layout
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Replique qualquer layout trocando fotos, cores e texto — mantendo a estrutura e hierarquia visual original.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie o Layout de Referência</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload da imagem do layout que você quer replicar. Pode ser um post, arte ou qualquer peça visual.
          A IA analisa a estrutura, textos e composição automaticamente.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/remix-layout-upload.jpg" alt="Upload de layout de referência" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload do layout de referência. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure as Adaptações</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Personalize o que será alterado:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Proporção", options: "4:5, 16:9, 9:16, 1:1 e mais" },
            { label: "Cor de fundo", options: "Color picker para mudar o background" },
            { label: "Roupa/acessórios", options: "Descreva as mudanças de roupa da pessoa" },
            { label: "Fidelidade da pessoa", options: "Slider que controla quanto o rosto original é preservado (90% padrão)" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/remix-layout-config.jpg" alt="Configuração do remix" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de adaptações. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Edite os Textos</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A IA detecta automaticamente os textos do layout via OCR. Você pode:
        </p>
        <ul className="space-y-2 mb-4">
          {["Editar o texto original para colocar o seu", "Remover textos que não quer no resultado", "Manter textos como estão"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere o Remix</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA recria o layout mantendo a estrutura e hierarquia visual,
          mas com seus textos, cores e identidade.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/remix-layout-resultado.jpg" alt="Layout remixado com nova identidade" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: layout remixado. (1:1)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Layout replicado com sua identidade visual, mantendo a estrutura profissional do original.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Mantém estrutura", "OCR automático", "Troca textos e cores", "Controle de fidelidade", "Produção em escala"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="remix-layout" />
      <CtaBanner slug="tutoriais/remix-layout" message="Pronto para remixar layouts?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
