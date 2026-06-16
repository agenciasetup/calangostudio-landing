import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar as Demandas | Tutorial Calango Studio",
  description:
    "Junte numa visão só todas as demandas de conteúdo de todos os clientes. Quadro kanban com arrastar e soltar, link de aprovação e calendário editorial.",
  openGraph: {
    title: "Como Usar as Demandas | Tutorial Calango Studio",
    description:
      "A central de produção do Calango Studio, com kanban, aprovação do cliente e agendamento.",
    url: "https://www.calangostudio.com.br/tutoriais/demandas",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/tutoriais/demandas",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar as Demandas no Calango Studio",
  description:
    "Tutorial para organizar a produção de conteúdo de todos os clientes no kanban de Demandas.",
  step: [
    {
      "@type": "HowToStep",
      name: "Abrir as Demandas",
      text: "Entre em Demandas para ver a central de produção de todos os clientes.",
    },
    {
      "@type": "HowToStep",
      name: "Criar um conteúdo",
      text: "Use o botão Novo conteúdo e preencha título, plataforma, tipo e a copy.",
    },
    {
      "@type": "HowToStep",
      name: "Arrastar o card pelas etapas",
      text: "Arraste o card no kanban, de Rascunho até Postado, para mudar o status.",
    },
    {
      "@type": "HowToStep",
      name: "Enviar para aprovação e agendar",
      text: "Gere o link de aprovação para o cliente e defina a data e hora.",
    },
  ],
};

const faqs = [
  {
    question: "O que são as Demandas?",
    answer:
      "É a central de produção do Calango Studio. Ela junta, numa visão só, todas as demandas de conteúdo de todos os clientes, então você acompanha tudo sem ficar pulando de cliente em cliente.",
  },
  {
    question: "Como o kanban está dividido?",
    answer:
      "O quadro tem arrastar e soltar e é dividido em duas esteiras, em abas. A de Copy vai de Rascunho para Aprovação Copy e depois Copy Aprovado. A de Design vai de Copy Aprovado para Aprovação Criativo, depois Criativo Aprovado, Agendado e Postado. As duas têm também a coluna Reprovado.",
  },
  {
    question: "Como crio uma demanda?",
    answer:
      "Clique no botão Novo conteúdo. Ele pede título (obrigatório), plataforma (Instagram, Facebook, TikTok, LinkedIn, Twitter), tipo (Feed, Story, Reels, Carrossel), a copy do post, legenda, hashtags, imagem e a data e hora de agendamento.",
  },
  {
    question: "Como o cliente aprova o conteúdo?",
    answer:
      "Você gera um link de aprovação que o cliente abre para aprovar a copy ou o post. Também dá para usar o Enviar pro celular.",
  },
  {
    question: "Quais métricas aparecem no topo?",
    answer:
      "No topo você vê o total de demandas ativas, atrasadas, aguardando aprovação e agendadas para hoje.",
  },
  {
    question: "O que é o Plano de Conteúdo?",
    answer:
      "É onde você define quantos posts, stories, reels e carrosséis cada cliente terá por mês, para organizar a produção com antecedência.",
  },
];

const relatedPages = [
  {
    href: "/tutoriais/meus-clientes",
    title: "Como Usar o Meus Clientes",
    description: "Monte cada cliente como uma marca completa.",
  },
  {
    href: "/tutoriais/copymaker",
    title: "Como Usar o CopyMaker",
    description: "Gere a copy do post pronta para entrar na demanda.",
  },
  {
    href: "/tutoriais/design-studio",
    title: "Como Usar o Design Studio",
    description: "Monte o criativo do post antes de agendar.",
  },
];

const colunasCopy = ["Rascunho", "Aprovação Copy", "Copy Aprovado"];
const colunasDesign = [
  "Copy Aprovado",
  "Aprovação Criativo",
  "Criativo Aprovado",
  "Agendado",
  "Postado",
];

const metricas = [
  { label: "Ativas", desc: "Demandas em produção agora" },
  { label: "Atrasadas", desc: "Passaram do prazo" },
  { label: "Aguardando aprovação", desc: "Esperando o cliente" },
  { label: "Hoje", desc: "Agendadas para o dia" },
];

const recursos = [
  "Filtro por cliente",
  "Notas (post-its)",
  "Prontos para postar",
  "Demandas críticas",
  "Reuniões do dia (com Google Calendar)",
  "Aprovações pendentes",
  "Visão do pipeline",
  "Calendário editorial dos próximos dias",
  "Alertas de cobrança",
];

export default function DemandasPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/demandas">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar as Demandas
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Demandas é a central de produção. Ela junta, numa visão só, todas as
        demandas de conteúdo de todos os clientes. O coração da tela é um quadro
        kanban com arrastar e soltar, onde você acompanha cada post da ideia até
        o ar.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            1
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Abra as Demandas
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, clique em <strong className="text-white">Demandas</strong>.
          No topo aparecem as métricas para você bater o olho e saber o que
          precisa de atenção:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {metricas.map((m) => (
            <div
              key={m.label}
              className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold text-white">{m.label}</p>
              <p className="text-xs text-txt-muted mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/dashboard.jpg"
            alt="Central de Demandas no Calango Studio com métricas e quadro kanban"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: central de Demandas com métricas no topo e o kanban. (16:9)
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            2
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Crie um conteúdo
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique no botão <strong className="text-white">Novo conteúdo</strong>.
          Ele abre um formulário com tudo que a demanda precisa:
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <ul className="space-y-2">
            {[
              "Título (obrigatório)",
              "Plataforma (Instagram, Facebook, TikTok, LinkedIn, Twitter)",
              "Tipo (Feed, Story, Reels, Carrossel)",
              "A copy do post, legenda e hashtags",
              "Imagem",
              "Data e hora de agendamento",
            ].map((campo) => (
              <li
                key={campo}
                className="flex items-start gap-2 text-sm text-txt-secondary"
              >
                <span className="text-accent mt-0.5">✓</span>
                <span>{campo}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed">
          Só o título é obrigatório. O resto você completa no caminho, conforme a
          demanda avança no quadro.
        </p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            3
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Arraste o card pelas etapas
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Para mudar o status, basta arrastar o card entre as colunas. O quadro
          tem duas esteiras em abas. Comece pela de Copy e depois siga para a de
          Design:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-3">Esteira Copy</p>
            <ol className="space-y-2">
              {colunasCopy.map((col, i) => (
                <li
                  key={col}
                  className="flex items-center gap-2 text-sm text-txt-secondary"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-[10px] font-bold text-accent shrink-0">
                    {i + 1}
                  </span>
                  <span>{col}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-3">
              Esteira Design
            </p>
            <ol className="space-y-2">
              {colunasDesign.map((col, i) => (
                <li
                  key={col}
                  className="flex items-center gap-2 text-sm text-txt-secondary"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-[10px] font-bold text-accent shrink-0">
                    {i + 1}
                  </span>
                  <span>{col}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          As duas esteiras têm também a coluna{" "}
          <strong className="text-white">Reprovado</strong>, para o que precisa
          voltar e ser ajustado.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/galeria.jpg"
            alt="Cards de demanda sendo arrastados entre as colunas do kanban"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: cards de demanda passando pelas colunas do kanban. (16:9)
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            4
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Envie o link de aprovação e agende
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Quando a copy ou o post estiver pronto, gere um{" "}
          <strong className="text-white">link de aprovação</strong>. O cliente
          abre esse link para aprovar a copy ou o post, sem precisar de conta. Se
          preferir, use o <strong className="text-white">Enviar pro celular</strong>.
          Com o ok, defina a data e a hora e deixe a demanda agendada.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">
            A tela ainda traz:
          </p>
          <ul className="space-y-1">
            {recursos.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-sm text-txt-secondary"
              >
                <span className="text-accent">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-accent font-semibold mb-1">
            Plano de Conteúdo
          </p>
          <p className="text-sm text-txt-secondary">
            Use o Plano de Conteúdo para definir quantos posts, stories, reels e
            carrosséis cada cliente terá por mês, e organizar a produção com
            antecedência.
          </p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">
            Resultado
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Toda a produção de conteúdo dos seus clientes numa visão só, da ideia
            até o post no ar. Você acompanha o status no kanban, manda para
            aprovação e agenda sem sair da tela.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Kanban com arrastar e soltar",
              "Esteiras de Copy e Design",
              "Link de aprovação do cliente",
              "Calendário editorial",
              "Plano de Conteúdo",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="demandas" />
      <CtaBanner
        slug="tutoriais/demandas"
        message="Pronto para organizar toda a sua produção num lugar só?"
      />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
