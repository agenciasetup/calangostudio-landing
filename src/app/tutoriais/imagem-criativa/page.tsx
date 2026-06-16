import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar a Imagem Criativa | Tutorial Calango Studio",
  description:
    "Crie imagens com estilos prontos e campos guiados. Escolha um dos 7 estilos, preencha as opções, envie a foto pedida e gere sem precisar escrever prompt.",
  openGraph: {
    title: "Como Usar a Imagem Criativa | Tutorial Calango Studio",
    description: "Imagens criativas com estilos prontos, sem precisar escrever prompt.",
    url: "https://www.calangostudio.com.br/tutoriais/imagem-criativa",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/imagem-criativa" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar a Imagem Criativa no Calango Studio",
  description: "Tutorial para criar imagens com estilos prontos e campos guiados, sem escrever prompt.",
  step: [
    { "@type": "HowToStep", name: "Abrir Criar Imagem", text: "Entre em Criar Imagem e fique no modo Estilos, que é o padrão." },
    { "@type": "HowToStep", name: "Escolher um estilo", text: "Selecione um dos 7 estilos prontos nos cards." },
    { "@type": "HowToStep", name: "Preencher as opções", text: "Escolha as opções guiadas e envie a foto que o estilo pedir." },
    { "@type": "HowToStep", name: "Gerar e baixar", text: "Gere a imagem, baixe em HD ou peça as variações." },
  ],
};

const faqs = [
  { question: "Onde fica a Imagem Criativa?", answer: "Ela fica dentro da função Criar Imagem. Ao abrir, há uma barrinha no topo com dois modos: Estilos e Avançado. O modo Estilos é o padrão e é o desta página. O Avançado é o Modo Avançado, que tem tutorial próprio." },
  { question: "Preciso escrever prompt para usar os estilos?", answer: "Não. Cada estilo abre um painel com campos guiados. Você só escolhe opções, tipo luz, cenário e intensidade, e envia a foto que o estilo pedir. A IA monta o resto." },
  { question: "Quais estilos estão disponíveis?", answer: "São 7 cards: Animal Art, Car Design, Hero Style, Business Style, Craft Style (a pessoa vira realista dentro de um mundo Minecraft), Classic Style (a pessoa entra numa obra clássica, tipo Renascimento ou Barroco) e o Modo Personalizado." },
  { question: "Para que serve o Contexto de criação?", answer: "É um bloco opcional para puxar um personagem já calibrado ou um cliente cadastrado. Ele entra como referência automática, então a imagem sai mais fiel à pessoa ou à marca." },
  { question: "O que dá para fazer depois de gerar?", answer: "Você pode baixar em HD, salvar no Drive, pedir +3 Variações (3 ângulos diferentes, bloqueado no plano Freemium), tentar de novo ou vender a imagem. Ao vender, só o estilo vai para a Loja, sem as suas fotos pessoais." },
];

const relatedPages = [
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
  { href: "/tutoriais/modo-manual", title: "Modo Avançado", description: "Crie e edite imagens com controle fino." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure seu perfil e suas fotos de referência." },
];

const estilos = [
  { name: "Animal Art", desc: "Arte a partir das fotos de um animal", icon: "🐾" },
  { name: "Car Design", desc: "Visual de carro com acabamento de estúdio", icon: "🚗" },
  { name: "Hero Style", desc: "A pessoa vira herói, com poderes e roupa", icon: "🦸" },
  { name: "Business Style", desc: "Retrato corporativo com luz de estúdio", icon: "💼" },
  { name: "Craft Style", desc: "A pessoa vira realista num mundo Minecraft", icon: "🧱" },
  { name: "Classic Style", desc: "A pessoa entra numa obra clássica de arte", icon: "🖼️" },
  { name: "Modo Personalizado", desc: "Você define a base, o rosto e o que criar", icon: "🎨" },
];

export default function ImagemCriativaPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/imagem-criativa">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar a Imagem Criativa
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        A Imagem Criativa fica dentro da função Criar Imagem, no modo Estilos. Você escolhe um estilo pronto,
        preenche opções simples e envia a foto pedida. Não precisa escrever prompt: a IA cuida do resto e
        entrega a imagem em poucos cliques.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra Criar Imagem e fique no modo Estilos</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, abra a função <strong className="text-white">Criar Imagem</strong>. No topo da tela
          tem uma barrinha com dois modos: <strong className="text-white">Estilos</strong> (o modo simples,
          padrão, é o desta página) e <strong className="text-white">Avançado</strong> (o Modo Avançado, que
          tem tutorial próprio). Deixe selecionado o <strong className="text-white">Estilos</strong>.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No topo você também encontra três seletores e o botão Gerar imagem:</p>
          <ul className="space-y-2">
            {[
              { label: "Modelo de IA", options: "Nano Banana PRO é o padrão. Também tem Nano Banana 2, FLUX 2 Pro, FLUX Kontext e GPT Image." },
              { label: "Formato", options: "Feed 4:5, Banner 16:9 ou Story 9:16." },
              { label: "Qualidade", options: "1K Rápido, 2K Padrão ou 4K Premium." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span>
                <span><strong className="text-white">{item.label}:</strong> {item.options}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/hero-imagem-criativa.jpg" alt="Tela da Imagem Criativa no modo Estilos dentro de Criar Imagem" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barra de modos e seletores da Imagem Criativa. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha um dos 7 estilos</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O modo Estilos tem 7 estilos prontos em cards. Clique no que combina com a sua ideia:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {estilos.map((e) => (
            <div key={e.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{e.icon}</span>
              <p className="text-sm font-semibold text-white">{e.name}</p>
              <p className="text-xs text-txt-muted mt-1">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estilos-imagem-criativa.jpg" alt="Cards dos 7 estilos prontos da Imagem Criativa" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: cards dos estilos prontos. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Preencha as opções e envie a foto pedida</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cada estilo abre um painel com campos guiados. Você só escolhe opções, sem precisar escrever prompt.
          Veja alguns exemplos reais do que cada um pede:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { name: "Animal Art", fields: "Fotos do animal, subestilo, luz, cenário e a intensidade da IA (baixo, médio ou alto)." },
            { name: "Business Style", fields: "Uma foto do rosto (obrigatória), luz de estúdio, cenário corporativo, expressão, pose e vestimenta." },
            { name: "Hero Style", fields: "Referência do rosto, poderes (vários selecionáveis), roupa do herói e luz." },
            { name: "Modo Personalizado", fields: "Uma base ou estilo, o rosto e o campo \"O que você quer criar?\" (obrigatório), mais iluminação e cenário." },
          ].map((item) => (
            <div key={item.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
              <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
              <p className="text-sm text-txt-secondary">{item.fields}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Contexto de criação (opcional)</p>
          <p className="text-sm text-txt-secondary">
            Esse bloco deixa você puxar um personagem já calibrado ou um cliente cadastrado. Ele entra como
            referência automática, então a imagem fica mais fiel à pessoa ou à marca.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-config.jpg" alt="Painel de opções guiadas de um estilo da Imagem Criativa" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: painel com os campos guiados do estilo. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere, baixe ou peça as variações</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar imagem</strong>. Quando a imagem ficar pronta, você
          tem algumas ações:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Baixar HD", options: "Salva a imagem em alta no seu aparelho." },
            { label: "Salvar no Drive", options: "Manda a imagem direto para o seu Google Drive conectado." },
            { label: "+3 Variações", options: "Gera 3 ângulos diferentes. Fica bloqueado no plano Freemium." },
            { label: "Tentar novamente", options: "Refaz a geração com as mesmas opções." },
            { label: "Vender imagem", options: "Publica o estilo na Loja, sem incluir as suas fotos pessoais." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-resultado.jpg" alt="Imagem gerada na Imagem Criativa com as opções de baixar e variar" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: resultado gerado com as ações de baixar e variar. (4:5)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Imagens criativas prontas em poucos cliques, com estilos guiados e sem precisar escrever prompt.
            Dá para baixar em HD, salvar no Drive, gerar variações de ângulo e até colocar o estilo à venda na
            Loja.
          </p>
          <div className="flex flex-wrap gap-2">
            {["7 estilos prontos", "Campos guiados, sem prompt", "Contexto de criação", "Baixar HD ou salvar no Drive", "Vender na Loja"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <CtaBanner slug="tutoriais/imagem-criativa" message="Pronto para criar sua primeira imagem com estilos?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
