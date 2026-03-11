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
    "Gerencie clientes, personagens e produtos em um único lugar. CRM integrado à produção de criativos com IA.",
  openGraph: {
    title: "Como Usar o Meus Clientes | Tutorial Calango Studio",
    description: "CRM integrado à produção de criativos para agências e freelancers.",
    url: "https://www.calangostudio.com.br/tutoriais/meus-clientes",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/meus-clientes" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Meus Clientes no Calango Studio",
  description: "Tutorial para gerenciar clientes e dados no Calango Studio.",
  step: [
    { "@type": "HowToStep", name: "Criar cliente", text: "Adicione um novo cliente com dados da marca." },
    { "@type": "HowToStep", name: "Definir identidade", text: "Logo, cores, nicho, público e tom de voz." },
    { "@type": "HowToStep", name: "Adicionar personagens/produtos", text: "Cadastre personagens e produtos do cliente." },
    { "@type": "HowToStep", name: "Usar nas ferramentas", text: "Selecione o cliente ao criar conteúdo." },
  ],
};

const faqs = [
  { question: "Quantos clientes posso cadastrar?", answer: "Depende do seu plano. Você pode expandir o limite através de recompensas na plataforma." },
  { question: "Os dados do cliente são usados nas ferramentas?", answer: "Sim. Ao selecionar um cliente como contexto, as ferramentas (CopyMaker, geradores de imagem) usam automaticamente as informações da marca." },
  { question: "Posso adicionar vários personagens por cliente?", answer: "Sim. Cada cliente pode ter múltiplos personagens (com fotos, nome e descrição) e produtos." },
  { question: "Serve para freelancers?", answer: "Sim. É ideal para freelancers e agências que gerenciam múltiplos clientes e precisam produzir conteúdo em escala." },
];

const relatedPages = [
  { href: "/tutoriais/copymaker", title: "CopyMaker", description: "Gere copy usando os dados do cliente." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Crie imagens com contexto do cliente." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure seu próprio perfil primeiro." },
];

export default function MeusClientesPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/meus-clientes">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Meus Clientes
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Gerencie todos os seus clientes em um único lugar. Os dados alimentam automaticamente as ferramentas de criação.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Crie um Novo Cliente</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Na tela de <strong className="text-white">Meus Clientes</strong>, clique em criar novo. Preencha os dados básicos:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Nome do cliente", desc: "Nome da marca ou empresa" },
            { label: "Logo", desc: "Upload do logotipo" },
            { label: "Cores da marca", desc: "Paleta de cores (múltiplas cores)" },
            { label: "Nicho", desc: "Área de atuação" },
            { label: "Modelo de negócio", desc: "Tipo de empresa" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/meus-clientes-criar.jpg" alt="Formulário de criação de cliente" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: formulário de criação de cliente. (4:5)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Defina a Identidade e Estratégia</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Complete o perfil estratégico:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Público-alvo", desc: "Quem o cliente quer atingir" },
            { label: "Pilares de conteúdo", desc: "Tipos de conteúdo que a marca produz" },
            { label: "Tom de voz", desc: "Como a marca se comunica" },
            { label: "Palavras-chave", desc: "Tags da marca" },
            { label: "Diferenciais", desc: "O que torna a marca única" },
            { label: "Objeções", desc: "Dúvidas comuns do público" },
            { label: "Melhores criativos", desc: "Upload de exemplos de artes que performaram bem" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/meus-clientes-estrategia.jpg" alt="Aba de estratégia do cliente" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: aba de estratégia. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Adicione Personagens e Produtos</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cadastre as pessoas e produtos do cliente:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Personagens", desc: "Nome, função, descrição e fotos (rosto)" },
            { label: "Produtos", desc: "Nome, categoria, descrição, preço e fotos" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/meus-clientes-personagens.jpg" alt="Cadastro de personagens e produtos" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: cadastro de personagens e produtos. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Use o Cliente nas Ferramentas</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Ao usar qualquer ferramenta (CopyMaker, Imagem Criativa, UGC Build etc.),
          selecione o cliente no <strong className="text-white">seletor de contexto</strong>.
          Os dados da marca, personagens e produtos são preenchidos automaticamente.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Gestão centralizada de clientes integrada à produção de conteúdo.
          </p>
          <div className="flex flex-wrap gap-2">
            {["CRM integrado", "Personagens e produtos", "Contexto automático", "Cores e logo", "Ideal para agências"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="meus-clientes" />
      <CtaBanner slug="tutoriais/meus-clientes" message="Pronto para organizar seus clientes?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
