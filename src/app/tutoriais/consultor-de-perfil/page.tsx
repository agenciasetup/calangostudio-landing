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
    "Faça uma auditoria estratégica de um perfil do Instagram e receba um relatório com nota, troféu e plano de ação. Serve até como entregável para fechar cliente.",
  openGraph: {
    title: "Como Usar o Consultor de Perfil | Tutorial Calango Studio",
    description:
      "Auditoria de perfil do Instagram com nota, plano de ação e relatório pronto para exportar em PDF.",
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
  description: "Tutorial para auditar um perfil do Instagram e gerar um relatório estratégico com IA.",
  step: [
    { "@type": "HowToStep", name: "Abrir o Consultor de Perfil", text: "Entre na função Consultor de Perfil." },
    { "@type": "HowToStep", name: "Enviar prints e contexto", text: "Envie os 2 prints do perfil e preencha o contexto do negócio." },
    { "@type": "HowToStep", name: "Gerar a análise", text: "Gere a análise e aguarde o relatório." },
    { "@type": "HowToStep", name: "Ler e exportar", text: "Leia o relatório nos dois modos e exporte em PDF." },
  ],
};

const faqs = [
  { question: "O que o Consultor de Perfil faz?", answer: "Ele faz uma auditoria estratégica de um perfil do Instagram e entrega um relatório com nota e plano de ação. Por ser completo, ele serve até como entregável para você fechar um cliente." },
  { question: "O que preciso enviar?", answer: "Dois prints (um do topo do perfil, com nome e bio, e um da grade do feed) e três campos de contexto: o que você faz, qual o objetivo do perfil e quem é o público. Tem um botão para importar esses dados do seu perfil ou de um cliente já cadastrado." },
  { question: "Como funciona a nota do relatório?", answer: "O relatório traz uma nota total de 0 a 10 e três notas menores: Clareza, Confiança e Coerência visual. Junto vem um troféu (Bronze, Prata, Ouro ou Diamante) e XP." },
  { question: "Qual a diferença entre Resumo executivo e Análise completa?", answer: "O Resumo executivo é direto ao ponto, com as top prioridades e um plano de 7 dias. A Análise completa traz diagnóstico, oportunidades, riscos e plano de execução, mais paleta atual e paleta sugerida, checklist de auditoria, roadmap e um mockup de antes e depois do perfil." },
  { question: "Dá para salvar ou entregar o relatório?", answer: "Sim. Você pode exportar o relatório em PDF e também imprimir." },
];

const relatedPages = [
  { href: "/tutoriais/post-analyzer", title: "Post Analyzer", description: "Analise um post antes de publicar." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Cadastre clientes para importar os dados na hora." },
  { href: "/tutoriais/copymaker", title: "CopyMaker", description: "Gere a copy do perfil depois da auditoria." },
];

const notas = [
  { name: "Nota total", desc: "Visão geral de 0 a 10", icon: "⭐" },
  { name: "Clareza", desc: "Quão fácil é entender o perfil", icon: "💡" },
  { name: "Confiança", desc: "Quanto o perfil transmite credibilidade", icon: "🤝" },
  { name: "Coerência visual", desc: "Se o visual fala a mesma língua", icon: "🎨" },
];

export default function ConsultorDePerfilPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/consultor-de-perfil">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Consultor de Perfil
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Consultor de Perfil faz uma auditoria estratégica de um perfil do Instagram e entrega um relatório com
        nota e plano de ação. Você envia dois prints e um pouco de contexto, e recebe um diagnóstico completo.
        Por ser tão detalhado, ele serve até como entregável para fechar um cliente.
      </p>

      <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-10">
        <Image src="/images/funcoes/consultor-de-perfil.jpg" alt="Tela do Consultor de Perfil no Calango Studio" width={800} height={450} className="w-full h-auto" />
      </div>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra o Consultor de Perfil</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No app, abra a função <strong className="text-white">Consultor de Perfil</strong>. É por aqui que você
          inicia a auditoria de qualquer perfil do Instagram, o seu ou o de um cliente.
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie os 2 prints e preencha o contexto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Para a análise sair certeira, você manda duas coisas: os prints e o contexto do negócio.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Print do topo do perfil</p>
            <p className="text-sm text-txt-secondary">A parte de cima, com o nome e a bio.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Print da grade do feed</p>
            <p className="text-sm text-txt-secondary">A visão geral das publicações.</p>
          </div>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">E três campos de contexto:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "O que você faz", options: "A atividade ou o serviço do perfil." },
            { label: "Qual o objetivo do perfil", options: "O que esse Instagram precisa alcançar." },
            { label: "Quem é o público", options: "Para quem o perfil fala." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Atalho para preencher rápido</p>
          <p className="text-sm text-txt-secondary">
            Tem um botão para importar esses dados direto do seu perfil ou de um cliente já cadastrado, sem
            digitar tudo de novo.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/dash-consultor-de-perfil.jpg" alt="Envio dos prints e do contexto no Consultor de Perfil" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: envio dos prints e dos campos de contexto. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a análise</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Com os prints e o contexto prontos, gere a análise. O relatório traz uma nota total de 0 a 10 e três
          notas menores, além de um troféu e XP para você acompanhar a evolução do perfil:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {notas.map((n) => (
            <div key={n.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{n.icon}</span>
              <p className="text-sm font-semibold text-white">{n.name}</p>
              <p className="text-xs text-txt-muted mt-1">{n.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Troféu e XP</p>
          <p className="text-sm text-txt-secondary">
            Junto com as notas vem um troféu (<strong className="text-white">Bronze</strong>,{" "}
            <strong className="text-white">Prata</strong>, <strong className="text-white">Ouro</strong> ou{" "}
            <strong className="text-white">Diamante</strong>) e o XP, que mostram o nível do perfil de um jeito
            fácil de entender.
          </p>
        </div>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Leia o relatório e exporte em PDF</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Você lê o relatório em dois modos, conforme o tempo que tem e a profundidade que precisa:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Resumo executivo</p>
            <p className="text-sm text-txt-secondary">Direto ao ponto, com as top prioridades e um plano de 7 dias.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Análise completa</p>
            <p className="text-sm text-txt-secondary">Diagnóstico, oportunidades, riscos e plano de execução, mais paleta atual e sugerida, checklist de auditoria, roadmap e um mockup de antes e depois do perfil.</p>
          </div>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Quando terminar de ler, você pode <strong className="text-white">exportar em PDF</strong> e também{" "}
          <strong className="text-white">imprimir</strong>. É assim que o relatório vira um material pronto para
          entregar.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/completo-consultor-de-perfil.jpg" alt="Relatório completo do Consultor de Perfil com notas e plano de ação" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: relatório completo com notas, paletas e plano de ação. (4:5)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Uma auditoria completa do perfil, com nota, troféu e um plano de ação claro. Um material que ajuda a
            melhorar o Instagram e que ainda funciona como entregável para apresentar a um cliente.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Nota de 0 a 10", "Notas de Clareza, Confiança e Coerência", "Troféu e XP", "Resumo ou análise completa", "Exporta em PDF"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="consultor-de-perfil" />
      <CtaBanner slug="tutoriais/consultor-de-perfil" message="Pronto para auditar o seu perfil?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
