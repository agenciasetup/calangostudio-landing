import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Post Analyzer | Tutorial Calango Studio",
  description:
    "O Post Analyzer analisa o design e a narrativa de um post do Instagram, estático ou carrossel, e dá uma nota de 0 a 10 com um plano de evolução.",
  openGraph: {
    title: "Como Usar o Post Analyzer | Tutorial Calango Studio",
    description:
      "Receba uma nota, a análise card a card e um checklist de evolução para os seus posts do Instagram.",
    url: "https://www.calangostudio.com.br/tutoriais/post-analyzer",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/post-analyzer" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Post Analyzer no Calango Studio",
  description:
    "Tutorial para analisar o design e a narrativa de um post do Instagram e receber uma nota com plano de evolução.",
  step: [
    { "@type": "HowToStep", name: "Enviar os cards", text: "Abra o Post Analyzer e envie os cards do post." },
    { "@type": "HowToStep", name: "Colar o texto", text: "Cole o texto do post (passo opcional)." },
    { "@type": "HowToStep", name: "Escolher o contexto", text: "Escolha o contexto e rode a análise." },
    { "@type": "HowToStep", name: "Ler o resultado", text: "Leia a nota, a análise por card e o checklist." },
  ],
};

const faqs = [
  {
    question: "O que o Post Analyzer faz?",
    answer:
      "Ele analisa o design e a narrativa de um post do Instagram, estático ou carrossel, e dá uma nota com um plano de evolução para você melhorar o post.",
  },
  {
    question: "Quantas imagens eu posso enviar?",
    answer:
      "De 1 a 10 cards, em JPG, PNG ou WEBP. Dá para reordenar arrastando, e a ordem importa para a leitura da narrativa. O primeiro card vira a Capa e o último vira o CTA.",
  },
  {
    question: "Preciso colar o texto do post?",
    answer:
      "Não é obrigatório. Colar os títulos, o corpo, o CTA e a legenda ajuda na análise, mas esse passo é opcional.",
  },
  {
    question: "O que é o contexto da análise?",
    answer:
      "É o ponto de vista que a IA usa para avaliar. Você escolhe entre Para mim, Universal ou um cliente específico antes de rodar a análise.",
  },
  {
    question: "O que vem no resultado?",
    answer:
      "Uma nota final de 0 a 10, a análise card a card, uma avaliação geral, um checklist de evolução, um histórico das suas notas ao longo do tempo e um chat para tirar dúvidas. Dá para exportar tudo em PDF.",
  },
  {
    question: "Consigo guardar o histórico das análises?",
    answer:
      "Sim. O Post Analyzer guarda um histórico das suas notas ao longo do tempo, então você acompanha a evolução dos seus posts.",
  },
];

const relatedPages = [
  { href: "/tutoriais/consultor-de-perfil", title: "Consultor de Perfil", description: "Análise do seu perfil como um todo." },
  { href: "/tutoriais/copymaker", title: "Como Usar o CopyMaker", description: "Gere a copy pronta para o seu post." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Analise posts no contexto de cada cliente." },
];

export default function PostAnalyzerPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/post-analyzer">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Post Analyzer
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Post Analyzer analisa o design e a narrativa de um post do Instagram, estático ou
        carrossel, e dá uma nota com um plano de evolução. Você envia os cards, escolhe o contexto
        e recebe a leitura completa do post.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra o Post Analyzer e envie os cards</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, abra o <strong className="text-white">Post Analyzer</strong>. Envie os
          cards do post, de 1 a 10 imagens, em JPG, PNG ou WEBP.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">A ordem importa</p>
          <p className="text-sm text-txt-secondary">
            Dá para reordenar arrastando, e a ordem conta para a leitura da narrativa. O primeiro
            card vira a <strong className="text-white">Capa</strong> e o último vira o{" "}
            <strong className="text-white">CTA</strong>.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/dashboard.jpg" alt="Tela de envio dos cards no Post Analyzer" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: envio e ordenação dos cards do post. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Cole o texto do post (opcional)</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cole o texto do post: títulos, corpo, CTA e legenda. Esse passo é opcional, mas ajuda a
          IA a entender melhor a mensagem e a casar o texto com o design de cada card.
        </p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o contexto e analise</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Escolha o contexto da análise e rode:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { name: "Para mim", desc: "Avalia pensando no seu próprio perfil" },
            { name: "Universal", desc: "Avalia por critérios gerais, sem um perfil definido" },
            { name: "Cliente específico", desc: "Avalia no contexto de um cliente seu" },
          ].map((c) => (
            <div key={c.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-white">{c.name}</p>
              <p className="text-xs text-txt-muted mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/dash-consultor-de-perfil.jpg" alt="Seleção de contexto e início da análise no Post Analyzer" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: escolha do contexto antes de rodar a análise. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Leia a nota, a análise por card e o checklist</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O resultado traz tudo o que você precisa para melhorar o post:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Nota final", options: "Uma nota de 0 a 10 para o post." },
            { label: "Análise card a card", options: "Se cada card cumpre a função, a hierarquia de leitura, a coerência de emoção e os ajustes necessários." },
            { label: "Avaliação geral", options: "Uma leitura do post como um todo." },
            { label: "Checklist de evolução", options: "O que mexer para o próximo post ficar melhor." },
            { label: "Histórico de notas", options: "As suas notas ao longo do tempo, para acompanhar a evolução." },
            { label: "Chat de dúvidas", options: "Um chat para tirar dúvidas sobre a análise." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm">
                <strong className="text-white">{item.label}:</strong> {item.options}
              </span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-accent font-semibold mb-1">Exportar em PDF</p>
          <p className="text-sm text-txt-secondary">
            Quando quiser guardar ou mandar para alguém, dá para exportar a análise em PDF.
          </p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Uma leitura completa do seu post, com nota, análise por card e um plano claro do que
            melhorar. Você acompanha a evolução pelo histórico e ainda tira dúvidas no chat ou
            exporta tudo em PDF.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Nota de 0 a 10",
              "Análise card a card",
              "Avaliação geral",
              "Checklist de evolução",
              "Histórico de notas",
              "Exportar em PDF",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="post-analyzer" />
      <CtaBanner slug="tutoriais/post-analyzer" message="Pronto para analisar e evoluir seus posts?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
