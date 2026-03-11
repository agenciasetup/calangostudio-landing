import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o UGC Build | Tutorial Calango Studio",
  description:
    "Crie fotos ultra-realistas de pessoas usando seus produtos. Controle câmera, rosto, bokeh, roupa e cenário.",
  openGraph: {
    title: "Como Usar o UGC Build | Tutorial Calango Studio",
    description: "Fotos UGC realistas com IA — ideal para anúncios e prova social.",
    url: "https://www.calangostudio.com.br/tutoriais/ugc-build",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/ugc-build" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o UGC Build no Calango Studio",
  description: "Tutorial para criar fotos UGC realistas com IA.",
  step: [
    { "@type": "HowToStep", name: "Configurar câmera e rosto", text: "Escolha estilo de câmera e envie fotos de referência." },
    { "@type": "HowToStep", name: "Adicionar produto e cenário", text: "Envie fotos do produto e configure o cenário." },
    { "@type": "HowToStep", name: "Gerar foto UGC", text: "A IA gera a foto principal." },
    { "@type": "HowToStep", name: "Receber 5 variações", text: "5 shots diferentes automaticamente." },
  ],
};

const faqs = [
  { question: "Preciso de um modelo real?", answer: "Não. Você pode enviar fotos de referência de uma pessoa OU deixar a IA gerar um rosto aleatório escolhendo idade e gênero." },
  { question: "O que é o controle de bokeh?", answer: "Um slider de 0 a 100 que controla o desfoque do fundo. Mais bokeh = fundo mais desfocado, estilo iPhone." },
  { question: "As fotos parecem reais?", answer: "Sim. O UGC Build é otimizado para parecer foto real de smartphone ou câmera profissional, com imperfeições naturais." },
  { question: "Quantas variações são geradas?", answer: "5 variações automáticas com posições, expressões e ângulos diferentes." },
];

const relatedPages = [
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com seu próprio rosto." },
  { href: "/tutoriais/mockup-produto", title: "Mockup Produto", description: "Produto em cenários sem pessoas." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Imagens cinematográficas com estilos prontos." },
];

export default function UgcBuildPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/ugc-build">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o UGC Build
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Crie fotos ultra-realistas de pessoas usando seus produtos. Ideal para anúncios, prova social e conteúdo UGC.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure Câmera e Identidade</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Defina o estilo visual da foto:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Estilo de câmera", options: "iPhone (smartphone realista), Câmera Profissional (Sony A7) ou Custom" },
            { label: "Rosto", options: "Envie 1-3 fotos de referência OU gere aleatório (idade + gênero)" },
            { label: "Bokeh", options: "Slider de 0-100 para controlar o desfoque do fundo" },
            { label: "Nível Pro", options: "Slider de 0-100 (amador a profissional)" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build-camera.jpg" alt="Configuração de câmera e identidade no UGC Build" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de câmera e identidade. (4:5)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Adicione Produto e Cenário</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Configure o contexto da foto:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Fotos do produto", options: "1-3 fotos de referência do produto" },
            { label: "Detalhes do produto", options: "Descrição do que é e como aparece" },
            { label: "Roupa", options: "Descreva a roupa da pessoa" },
            { label: "Iluminação", options: "Luz natural, cinematográfica e mais" },
            { label: "Pose/ação", options: "Descreva o que a pessoa está fazendo" },
            { label: "Cenário", options: "Envie referências ou descreva o ambiente" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build-produto.jpg" alt="Configuração de produto e cenário" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de produto e cenário. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a Foto UGC</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA cria uma foto realista de uma pessoa usando seu produto,
          com qualidade de smartphone ou câmera profissional.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build-resultado.jpg" alt="Foto UGC gerada com IA" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: foto UGC gerada. (1:1)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Receba 5 Variações</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A IA gera automaticamente 5 shots diferentes — posições, expressões, enquadramentos e
          interações variadas com o produto.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos UGC realistas, perfeitas para anúncios e redes sociais.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Fotos ultra-realistas", "5 variações automáticas", "Estilo iPhone ou câmera", "Controle de bokeh", "Rosto real ou gerado"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="ugc-build" />
      <CtaBanner slug="tutoriais/ugc-build" message="Pronto para criar fotos UGC incríveis?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
