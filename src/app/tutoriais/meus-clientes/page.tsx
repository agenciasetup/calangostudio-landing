import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Meus Clientes | Tutorial Calango Studio",
  description:
    "Monte a base da sua carteira. Cada cliente vira uma marca com perfil, kit de marca, personagens, produtos e demandas, e esse perfil alimenta todas as ferramentas de criação.",
  openGraph: {
    title: "Como Usar o Meus Clientes | Tutorial Calango Studio",
    description:
      "Crie cada cliente como uma marca completa e deixe a arte sair com a cara dele.",
    url: "https://www.calangostudio.com.br/tutoriais/meus-clientes",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/tutoriais/meus-clientes",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Meus Clientes no Calango Studio",
  description:
    "Tutorial para criar clientes, montar o kit de marca e usar o workspace de cada um.",
  step: [
    {
      "@type": "HowToStep",
      name: "Abrir Clientes e criar um novo",
      text: "Entre em Clientes e clique para criar um novo cliente.",
    },
    {
      "@type": "HowToStep",
      name: "Preencher o passo a passo",
      text: "Preencha identidade, direção criativa e contrato. Só o nome é obrigatório.",
    },
    {
      "@type": "HowToStep",
      name: "Completar o kit de marca",
      text: "Na aba Perfil, complete logo, cores, voz, público, personagem e produto.",
    },
    {
      "@type": "HowToStep",
      name: "Usar o workspace do cliente",
      text: "Use as abas Criar, Demandas, Galeria e Análise no contexto do cliente.",
    },
  ],
};

const faqs = [
  {
    question: "O que o cadastro do cliente muda na hora de criar?",
    answer:
      "Cada cliente vira uma marca com perfil estratégico, kit de marca, personagens, produtos, contrato e demandas. Esse perfil alimenta todas as ferramentas de criação, então a arte sai com a cara do cliente, nas cores e na voz dele.",
  },
  {
    question: "Preciso preencher tudo para criar um cliente?",
    answer:
      "Não. O cadastro é um passo a passo de 3 etapas e só o nome é obrigatório. O resto você preenche depois, no seu ritmo, pela aba Perfil.",
  },
  {
    question: "Quais são as etapas do cadastro?",
    answer:
      "São três: Identidade (nome, nicho, logo e cores da marca), Direção criativa (voz da marca, público-alvo e até 3 imagens de referência) e Contrato (tipo Mensal ou Freela, valor, e o dia do pagamento ou a data de entrega).",
  },
  {
    question: "Para que serve a barrinha de perfil completo?",
    answer:
      "Ela fica na aba Perfil e enche conforme você preenche logo, cores, voz, público, personagem e produto. Quanto mais cheia, mais contexto a IA tem para criar.",
  },
  {
    question: "O que faz o botão Resumo IA?",
    answer:
      "Ele monta um resumo estratégico do cliente para você ter a visão geral em poucos segundos. O cliente também ganha níveis e medalhas conforme o faturamento.",
  },
  {
    question: "Tem limite de clientes?",
    answer:
      "O número de clientes que você pode cadastrar depende do seu plano.",
  },
];

const relatedPages = [
  {
    href: "/tutoriais/demandas",
    title: "Como Usar as Demandas",
    description: "Organize a produção de todos os clientes num kanban só.",
  },
  {
    href: "/tutoriais/copymaker",
    title: "Como Usar o CopyMaker",
    description: "Gere copy pronta usando o kit de marca do cliente.",
  },
  {
    href: "/tutoriais/estudio-de-foto",
    title: "Como Usar o Estúdio de Foto",
    description: "Crie fotos profissionais no contexto da marca.",
  },
];

const etapas = [
  {
    titulo: "Identidade",
    desc: "Nome do cliente (obrigatório), nicho, logo e as cores da marca (primária, secundária e apoio).",
  },
  {
    titulo: "Direção criativa",
    desc: "Voz da marca (como a marca fala), público-alvo e os melhores criativos (até 3 imagens de referência).",
  },
  {
    titulo: "Contrato",
    desc: "Tipo Mensal ou Freela, valor, e o dia do pagamento (mensal) ou a data de entrega (freela).",
  },
];

const abas = [
  {
    nome: "Perfil",
    desc: "O kit de marca completo (cores, voz, tipografia, personagens, produtos), mais estratégia e contrato. Tem a barrinha de perfil completo, que enche conforme você preenche logo, cores, voz, público, personagem e produto.",
  },
  {
    nome: "Criar",
    desc: "Atalhos para criar já no contexto do cliente: Criar Post, Criar Imagem e Sessão de Fotos, todos usando o kit de marca dele.",
  },
  {
    nome: "Demandas",
    desc: "O kanban daquele cliente, mais um Plano de Conteúdo com quantos posts, stories, reels e carrosséis por mês.",
  },
  {
    nome: "Galeria",
    desc: "Todas as artes criadas para aquele cliente, reunidas num só lugar.",
  },
  {
    nome: "Análise",
    desc: "Atalhos para o Consultor de Perfil e o Post Analyzer do cliente.",
  },
];

export default function MeusClientesPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/meus-clientes">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Meus Clientes
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Em Clientes você cria a base da sua carteira. Cada cliente vira uma
        marca, com perfil estratégico, kit de marca, personagens, produtos,
        contrato e demandas. Esse perfil alimenta todas as ferramentas de
        criação, para a arte sair com a cara do cliente.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            1
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Abra Clientes e crie um novo cliente
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, clique em <strong className="text-white">Clientes</strong>.
          Depois clique no botão de novo cliente para começar o cadastro. Cada
          cliente que você cria aqui passa a ter o próprio espaço dentro do
          Calango Studio.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/meus-clientes.jpg"
            alt="Tela de Clientes no Calango Studio com o botão de novo cliente"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: tela de Clientes com a carteira e o botão de novo cliente.
          (16:9)
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            2
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Preencha identidade, direção criativa e contrato
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O cadastro é um passo a passo de 3 etapas. Só o nome é obrigatório, o
          resto dá para preencher depois.
        </p>
        <div className="space-y-3 mb-4">
          {etapas.map((etapa, i) => (
            <div
              key={etapa.titulo}
              className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-xs font-bold text-accent shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm font-semibold text-white">
                  {etapa.titulo}
                </p>
              </div>
              <p className="text-sm text-txt-secondary">{etapa.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-accent font-semibold mb-1">
            Dica rápida
          </p>
          <p className="text-sm text-txt-secondary">
            Quer começar logo? Digite só o nome e avance. Você volta para
            completar a identidade, a direção criativa e o contrato quando
            quiser.
          </p>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            3
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Complete o kit de marca na aba Perfil
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Abra a aba <strong className="text-white">Perfil</strong> do cliente.
          É lá que fica o kit de marca completo: cores, voz, tipografia,
          personagens e produtos, além da estratégia e do contrato. Uma barrinha
          de <strong className="text-white">perfil completo</strong> enche
          conforme você preenche cada parte.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">
            A barrinha enche quando você preenche:
          </p>
          <ul className="space-y-1">
            {["Logo", "Cores", "Voz", "Público", "Personagem", "Produto"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-txt-secondary"
                >
                  <span className="text-accent">✓</span>
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed">
          Quanto mais cheio o perfil, mais contexto a IA usa, e mais a arte sai
          parecida com a marca do cliente.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            4
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Use as abas Criar, Demandas, Galeria e Análise
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O workspace do cliente tem 5 abas. Cada uma trabalha já no contexto
          dele, usando o kit de marca:
        </p>
        <div className="space-y-3 mb-4">
          {abas.map((aba) => (
            <div
              key={aba.nome}
              className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4"
            >
              <p className="text-sm font-semibold text-white mb-1">
                {aba.nome}
              </p>
              <p className="text-sm text-txt-secondary">{aba.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/dashboard.jpg"
            alt="Workspace do cliente com as abas Perfil, Criar, Demandas, Galeria e Análise"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: workspace do cliente com as abas no topo. (16:9)
        </p>
        <p className="text-txt-secondary leading-relaxed mt-4">
          No topo ainda tem o botão{" "}
          <strong className="text-white">Resumo IA</strong>, que monta um resumo
          estratégico do cliente, e os níveis e medalhas que sobem conforme o
          faturamento.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">
            Resultado
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Cada cliente vira uma marca completa dentro do Calango Studio, com
            kit de marca, contrato, demandas e galeria no mesmo lugar. A partir
            daí, toda criação sai com a cara do cliente.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Cliente como marca completa",
              "Kit de marca em uma aba",
              "Criar no contexto do cliente",
              "Galeria por cliente",
              "Resumo IA estratégico",
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
      <FuncaoShowcase slug="meus-clientes" />
      <CtaBanner
        slug="tutoriais/meus-clientes"
        message="Pronto para montar a sua carteira de clientes?"
      />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
