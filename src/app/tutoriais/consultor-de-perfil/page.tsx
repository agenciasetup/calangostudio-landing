import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Consultor de Perfil | Tutorial Calango Studio",
  description:
    "Faça uma auditoria completa do seu perfil do Instagram com IA. Diagnóstico técnico, análise de feed, plano de ação e foto profissional sugerida.",
  openGraph: {
    title: "Como Usar o Consultor de Perfil | Tutorial Calango Studio",
    description: "Auditoria estratégica do Instagram com diagnóstico, score e plano de ação.",
    url: "https://www.calangostudio.com.br/tutoriais/consultor-de-perfil",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/consultor-de-perfil" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Consultor de Perfil no Calango Studio",
  description: "Tutorial para fazer auditoria do perfil do Instagram com IA.",
  step: [
    { "@type": "HowToStep", name: "Enviar screenshots", text: "Faça prints do seu perfil do Instagram." },
    { "@type": "HowToStep", name: "Receber auditoria", text: "A IA analisa bio, feed, destaques e posicionamento." },
    { "@type": "HowToStep", name: "Ver plano de ação", text: "Receba um plano de 7 dias personalizado." },
  ],
};

const faqs = [
  { question: "Como tiro os prints do perfil?", answer: "Tire screenshots da tela do perfil mostrando: foto, bio, destaques e as primeiras linhas do feed. Quanto mais prints, melhor a análise." },
  { question: "A análise é sobre o perfil inteiro?", answer: "Sim. A IA analisa bio, foto de perfil, destaques, consistência do feed, paleta de cores e posicionamento geral." },
  { question: "O que é o score?", answer: "Uma nota de 0 a 10 com sub-scores para cada aspecto do perfil. Inclui sistema de gamificação com troféus (Bronze, Prata, Ouro, Diamante)." },
  { question: "A IA sugere foto de perfil?", answer: "Sim. Com base nas cores e posicionamento detectados, a IA pode gerar uma sugestão de foto de perfil profissional." },
];

const relatedPages = [
  { href: "/tutoriais/copymaker", title: "CopyMaker", description: "Melhore suas copys após a auditoria." },
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Gere a foto de perfil sugerida." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure seu perfil na plataforma." },
];

export default function ConsultorPerfilPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/consultor-de-perfil">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Consultor de Perfil
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Faça uma auditoria completa do seu perfil do Instagram. A IA analisa tudo e entrega um plano de ação de 7 dias.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie Screenshots do seu Perfil</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Tire prints do seu perfil do Instagram mostrando:
        </p>
        <ul className="space-y-2 mb-4">
          {["Foto de perfil e bio completa", "Destaques (highlights)", "Feed — pelo menos as 9 primeiras publicações", "Estatísticas (seguidores, seguindo, posts)"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/consultor-perfil-upload.jpg" alt="Upload de screenshots do perfil" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload de screenshots do perfil. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Receba a Auditoria Completa</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">A IA analisa e entrega um relatório com:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Score geral", desc: "Nota de 0 a 10 com troféu (Bronze, Prata, Ouro, Diamante)" },
            { label: "Diagnóstico da bio", desc: "Clareza, palavras-chave, CTA" },
            { label: "Análise do feed", desc: "Consistência visual, cores, espaçamento" },
            { label: "Paleta de cores", desc: "Cores atuais vs. cores sugeridas" },
            { label: "Posicionamento", desc: "Análise de mercado e diferenciação" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/consultor-perfil-auditoria.jpg" alt="Relatório de auditoria do perfil" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: relatório de auditoria. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Siga o Plano de Ação de 7 Dias</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A IA entrega um plano prático para os próximos 7 dias com:
        </p>
        <ul className="space-y-2 mb-4">
          {["Top 3 prioridades para melhorar imediatamente", "Ações diárias específicas", "Estratégia de conteúdo com hooks virais", "Oportunidades de mercado identificadas", "Riscos a evitar"].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Diagnóstico profissional do seu perfil com plano de ação claro para crescer.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Score com troféu", "Diagnóstico completo", "Plano de 7 dias", "Paleta de cores", "Foto sugerida"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="consultor-de-perfil" />
      <CtaBanner slug="tutoriais/consultor-de-perfil" message="Pronto para melhorar seu perfil?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
