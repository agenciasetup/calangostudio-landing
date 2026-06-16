import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Studio | Tutorial Calango Studio",
  description:
    "O Studio é o editor visual de criativos do Calango, no estilo Canva e Photoshop, direto no navegador. Crie posts, carrosséis e stories com camadas, texto, formas e IA.",
  openGraph: {
    title: "Como Usar o Studio | Tutorial Calango Studio",
    description:
      "Crie criativos completos no editor visual do Calango, com camadas, texto, recorte com IA e exportação em PNG ou JPG.",
    url: "https://www.calangostudio.com.br/tutoriais/design-studio",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/tutoriais/design-studio",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Studio no Calango Studio",
  description:
    "Tutorial para criar criativos no editor visual do Calango, do formato à exportação.",
  step: [
    {
      "@type": "HowToStep",
      name: "Abrir o Studio",
      text: "Abra o Studio e clique em Criar design.",
    },
    {
      "@type": "HowToStep",
      name: "Escolher o formato",
      text: "Escolha um formato de post ou monte um carrossel.",
    },
    {
      "@type": "HowToStep",
      name: "Montar a arte",
      text: "Monte a arte com camadas, texto, formas e ferramentas de IA.",
    },
    {
      "@type": "HowToStep",
      name: "Exportar ou salvar",
      text: "Exporte em PNG ou JPG ou salve direto na Galeria.",
    },
  ],
};

const faqs = [
  {
    question: "O que é o Studio?",
    answer:
      "É o editor visual de criativos do Calango, no estilo dos editores profissionais (parecido com Canva e Photoshop), só que rodando dentro do navegador. Você cria e edita suas artes ali, sem instalar nada.",
  },
  {
    question: "Quais formatos eu posso criar?",
    answer:
      "Pelo botão Criar design você escolhe Post Quadrado (1:1), Retrato 3:4, Retrato 4:5 (recomendado), Story/Reels (9:16) ou Paisagem (16:9). Também dá para criar um Carrossel (de 2 a 10 cards) ou um tamanho Personalizado.",
  },
  {
    question: "Como funciona o Recorte com IA?",
    answer:
      "Ele separa o fundo de uma imagem e deixa você refinar a máscara, ajustando bordas e cabelo. A Imagem Criativa de PNG transparente sai daqui.",
  },
  {
    question: "O que é o Preenchimento generativo?",
    answer:
      "Você seleciona uma área da arte e a IA gera ou troca só aquele pedaço. Dentro do editor você ainda tem a Imagem express e a Copy express, para gerar imagem e texto por IA na própria arte.",
  },
  {
    question: "Como o Studio se conecta com o resto do Calango?",
    answer:
      "O projeto salva sozinho e usa o kit de marca do cliente. Dá para compartilhar por link, e quem abre recebe uma cópia na conta dele. O CopyMaker também manda a copy direto para o Studio pelo botão Criar Design.",
  },
  {
    question: "Como exportar o resultado?",
    answer:
      "No Exportar você escolhe PNG ou JPG, escala 1x ou 2x, e depois Baixar ou Salvar na Galeria. Quando é um carrossel, ele sai fatiado, um arquivo por card.",
  },
];

const relatedPages = [
  {
    href: "/tutoriais/assets-3d",
    title: "Recortar Fundo e Gerar PNG",
    description: "Separe o fundo de um elemento com IA dentro do Studio.",
  },
  {
    href: "/tutoriais/copymaker",
    title: "Como Usar o CopyMaker",
    description: "Gere a copy e mande direto para o Studio.",
  },
  {
    href: "/tutoriais/meus-clientes",
    title: "Meus Clientes",
    description: "Organize o kit de marca de cada cliente.",
  },
];

const ferramentas = [
  { name: "Camadas", desc: "Organize cada elemento da arte em camadas", icon: "🗂️" },
  { name: "Texto", desc: "Fontes do Google ou enviadas por você", icon: "🔤" },
  { name: "Formas", desc: "Retângulos, círculos e outras formas", icon: "⬛" },
  { name: "Pincel e borracha", desc: "Desenhe e apague livremente", icon: "🖌️" },
  { name: "Conta-gotas e lata de tinta", desc: "Pegue e aplique cores", icon: "🎨" },
  { name: "Seleção", desc: "Laço, retângulo, elipse e polígono", icon: "✂️" },
];

const formatos = [
  { name: "Post Quadrado", ratio: "1:1" },
  { name: "Retrato", ratio: "3:4" },
  { name: "Retrato (recomendado)", ratio: "4:5" },
  { name: "Story / Reels", ratio: "9:16" },
  { name: "Paisagem", ratio: "16:9" },
];

export default function DesignStudioPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/design-studio">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Studio
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Studio é o editor visual de criativos do Calango, no estilo dos editores profissionais
        (parecido com Canva e Photoshop), só que rodando dentro do navegador. Você monta posts,
        carrosséis e stories com camadas, texto, formas e ferramentas de IA, e exporta na hora.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            1
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Abra o Studio e clique em Criar design
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, abra o <strong className="text-white">Studio</strong>. Para começar uma
          arte do zero, clique no botão <strong className="text-white">Criar design</strong>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/dashboard.jpg"
            alt="Tela inicial do Studio no Calango com o botão Criar design"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: tela inicial do Studio com o botão Criar design. (16:9)
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            2
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Escolha o formato ou um carrossel
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Selecione o formato da sua arte. O Retrato 4:5 é o recomendado para o feed:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {formatos.map((f) => (
            <div
              key={f.name}
              className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center"
            >
              <p className="text-sm font-semibold text-white">{f.name}</p>
              <p className="text-xs text-txt-muted mt-1">{f.ratio}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Carrossel ou tamanho próprio</p>
          <p className="text-sm text-txt-secondary">
            Também dá para criar um <strong className="text-white">Carrossel</strong> de 2 a 10
            cards ou um tamanho <strong className="text-white">Personalizado</strong>, com as
            medidas que você quiser.
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
            Monte a arte com camadas, texto, formas e IA
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Dentro do editor você tem todas as ferramentas para montar a arte:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {ferramentas.map((t) => (
            <div
              key={t.name}
              className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center"
            >
              <span className="text-2xl block mb-2">{t.icon}</span>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-txt-muted mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cada camada aceita efeitos como sombra, brilho, traçado e mais. E você ainda conta com
          recursos de IA dentro da arte:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            {
              label: "Recorte com IA",
              options:
                "Separa o fundo de uma imagem e deixa você refinar a máscara, ajustando bordas e cabelo. A Imagem Criativa de PNG transparente sai daqui.",
            },
            {
              label: "Preenchimento generativo",
              options:
                "Você seleciona uma área e a IA gera ou troca só aquele pedaço da arte.",
            },
            {
              label: "Imagem express e Copy express",
              options:
                "Geram imagem e texto por IA dentro da própria arte, sem sair do editor.",
            },
            {
              label: "Templates e biblioteca",
              options:
                "Salve e reaproveite modelos seus e da comunidade, com uma biblioteca de elementos, cores e degradês.",
            },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm">
                <strong className="text-white">{item.label}:</strong> {item.options}
              </span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/galeria.jpg"
            alt="Editor do Studio com camadas, texto e ferramentas de IA"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: editor do Studio com a arte montada. (16:9)
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            4
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Exporte ou salve na Galeria
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Quando a arte estiver pronta, abra o <strong className="text-white">Exportar</strong> e
          escolha:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Formato", options: "PNG ou JPG." },
            { label: "Escala", options: "1x ou 2x, para sair com mais resolução." },
            { label: "Destino", options: "Baixar para o seu aparelho ou Salvar na Galeria." },
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
          <p className="text-sm text-accent font-semibold mb-1">Carrossel sai fatiado</p>
          <p className="text-sm text-txt-secondary">
            Se a sua arte for um carrossel, a exportação gera um arquivo por card, já na ordem
            certa para subir no feed.
          </p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Criativos prontos para o feed, com camadas, texto e IA, salvos sozinhos e usando o kit
            de marca do cliente. Você ainda compartilha o projeto por link, e quem abre recebe uma
            cópia na conta dele.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Editor no navegador",
              "Camadas, texto e formas",
              "Recorte com IA",
              "Preenchimento generativo",
              "Exportar PNG ou JPG",
              "Salva sozinho",
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
      <FuncaoShowcase slug="design-studio" />
      <CtaBanner
        slug="tutoriais/design-studio"
        message="Pronto para criar seus criativos no Studio?"
      />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
