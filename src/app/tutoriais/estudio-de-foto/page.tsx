import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Estúdio de Foto | Tutorial Calango Studio",
  description:
    "Gere fotos ultra-realistas com seu rosto em qualquer cenário. Sessão com 5 poses automáticas e controle de identidade.",
  openGraph: {
    title: "Como Usar o Estúdio de Foto | Tutorial Calango Studio",
    description: "Fotos profissionais com IA usando seu rosto em qualquer cenário.",
    url: "https://www.calangostudio.com.br/tutoriais/estudio-de-foto",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/estudio-de-foto" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Estúdio de Foto no Calango Studio",
  description: "Tutorial para gerar fotos profissionais com seu rosto usando IA.",
  step: [
    { "@type": "HowToStep", name: "Enviar fotos de referência", text: "Faça upload de 1-3 fotos do seu rosto." },
    { "@type": "HowToStep", name: "Configurar a sessão", text: "Defina identidade, cenário, roupa e modo." },
    { "@type": "HowToStep", name: "Gerar foto principal", text: "Gere a primeira foto da sessão." },
    { "@type": "HowToStep", name: "Gerar variações", text: "A IA gera 5 poses automaticamente." },
  ],
};

const faqs = [
  { question: "Quantas fotos de referência preciso enviar?", answer: "Mínimo 1, recomendado 3. Quanto mais fotos em ângulos diferentes, melhor a fidelidade do rosto." },
  { question: "O que é o controle de identidade?", answer: "Um slider de 0 a 100 que define o quanto a IA preserva seu rosto. De 0-30 preserva a imagem original, 40-70 é balanceado, 80-100 faz substituição completa do rosto." },
  { question: "As 5 poses são automáticas?", answer: "Sim. No modo Sessão, a IA gera automaticamente 5 ângulos: low angle, 3/4 perfil, close-up, corpo inteiro e ângulo superior." },
  { question: "Posso definir cenário e roupa?", answer: "Sim. Você pode enviar uma imagem de fundo de referência, definir roupa e adicionar elementos extras." },
];

const relatedPages = [
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Estilos cinematográficos prontos." },
  { href: "/tutoriais/ugc-build", title: "UGC Build", description: "Fotos de pessoas usando seus produtos." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure suas fotos de referência." },
];

const poses = [
  { name: "Low Angle", desc: "Ângulo de baixo, transmite poder", icon: "📐" },
  { name: "3/4 Perfil", desc: "Cinematográfico, over-shoulder", icon: "🎬" },
  { name: "Close-up", desc: "Detalhe extremo do rosto", icon: "🔍" },
  { name: "Corpo Inteiro", desc: "Ambiental, corpo todo visível", icon: "🧍" },
  { name: "Ângulo Superior", desc: "De cima para baixo, bird's-eye", icon: "🦅" },
];

export default function EstudioFotoPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/estudio-de-foto">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Estúdio de Foto
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Gere fotos ultra-realistas com seu rosto em qualquer cenário. A IA cria sessões com 5 poses
        automáticas e controle total de identidade.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie suas Fotos de Referência</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload de 1 a 3 fotos do seu rosto. A IA usa essas imagens para manter a fidelidade
          na geração.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">Dicas para melhores resultados:</p>
          <ul className="space-y-1">
            {["Rosto nítido e bem iluminado", "Ângulos variados (frente, 3/4, perfil)", "Sem óculos escuros ou acessórios cobrindo o rosto"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-upload.jpg" alt="Upload de fotos de referência no Estúdio de Foto" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela de upload de referências. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure a Sessão</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Defina como sua foto será gerada:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Modo", options: "Sessão (5 poses automáticas) ou Prompt (direção customizada)" },
            { label: "Identidade", options: "Slider de 0-100 (quanto o rosto será preservado)" },
            { label: "Roupa", options: "Descreva a roupa desejada (opcional)" },
            { label: "Cenário", options: "Envie imagem de fundo ou descreva o cenário" },
            { label: "Proporção", options: "4:5, 16:9, 9:16, 1:1" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-config.jpg" alt="Configuração da sessão de fotos" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela de configuração da sessão. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a Foto Principal</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA processa suas referências e cria a foto principal.
          O progresso aparece em etapas: análise, extração de estilo, renderização e finalização.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-gerando.jpg" alt="Barra de progresso durante a geração da foto" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: progresso da geração. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Receba 5 Poses Automáticas</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No modo Sessão, a IA gera automaticamente 5 variações com ângulos diferentes:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {poses.map((p) => (
            <div key={p.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{p.icon}</span>
              <p className="text-sm font-semibold text-white">{p.name}</p>
              <p className="text-xs text-txt-muted mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-resultado.jpg" alt="Galeria com 5 poses geradas no Estúdio de Foto" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: galeria de resultados com 5 poses. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos profissionais com seu rosto, prontas para usar em redes sociais, sites e materiais de marketing.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Fotos ultra-realistas", "5 poses por sessão", "Controle de identidade", "Qualquer cenário", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="estudio-de-foto" />
      <CtaBanner slug="tutoriais/estudio-de-foto" message="Pronto para criar suas fotos profissionais?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
