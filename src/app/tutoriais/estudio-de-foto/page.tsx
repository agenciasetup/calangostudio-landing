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
    "Crie fotos profissionais com o seu rosto preservado. Descreva a cena ou use uma foto de referência, ajuste a semelhança facial e gere uma sessão completa.",
  openGraph: {
    title: "Como Usar o Estúdio de Foto | Tutorial Calango Studio",
    description: "Fotos profissionais com IA mantendo a sua identidade em qualquer cenário.",
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
  description: "Tutorial para gerar fotos profissionais com o seu rosto usando IA.",
  step: [
    { "@type": "HowToStep", name: "Abrir a Sessão de Fotos", text: "Entre em Sessão de Fotos e escolha o estilo Estúdio." },
    { "@type": "HowToStep", name: "Escolher o tipo de sessão", text: "Decida entre descrever a cena (Prompt) ou usar uma foto de referência." },
    { "@type": "HowToStep", name: "Enviar as fotos do rosto", text: "Faça upload de até 5 fotos da pessoa que vai aparecer." },
    { "@type": "HowToStep", name: "Gerar e criar variações", text: "Gere a foto principal e peça as variações de ângulo." },
  ],
};

const faqs = [
  { question: "Onde fica o Estúdio de Foto?", answer: "Ele faz parte da Sessão de Fotos. Ao abrir, você escolhe entre três estilos na barrinha do topo: Estúdio (pessoas), UGC (pessoa com produto) e Produto (só o produto). Para fotos pessoais, escolha Estúdio." },
  { question: "Qual a diferença entre o modo Prompt e o modo Referência?", answer: "No modo Prompt você descreve a cena em texto e a IA fotografa a pessoa dentro dela. No modo Referência você envia uma foto pronta de cenário, pose e roupa, e a IA encaixa o rosto da pessoa ali." },
  { question: "Para que serve o slider de Semelhança Facial?", answer: "Ele aparece no modo Referência e controla o quanto a IA usa o rosto das suas fotos. Até 30 mantém a pessoa que já estava na foto base, na faixa do meio ela mistura os traços, e de 80 para cima troca o rosto por completo pelas suas referências. O padrão é 90." },
  { question: "Quantas fotos de referência preciso enviar?", answer: "De 1 a 5 fotos da mesma pessoa. O ideal são de 3 a 5 fotos em ângulos diferentes, com boa luz e o rosto bem visível. Quanto mais variadas, mais fiel fica o resultado." },
  { question: "Consigo gerar vários ângulos de uma vez?", answer: "Sim. Depois da primeira foto, o botão de variações cria uma sessão completa: 5 ângulos no modo Referência e 3 ângulos no modo Prompt. As variações ficam liberadas nos planos pagos." },
];

const relatedPages = [
  { href: "/tutoriais/ugc-build", title: "UGC Build", description: "Fotos de pessoas usando os seus produtos." },
  { href: "/tutoriais/mockup-produto", title: "Foto de Produto", description: "Sessão comercial só do produto." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure suas fotos de referência." },
];

const poses = [
  { name: "Ângulo baixo", desc: "Câmera de baixo para cima, transmite presença", icon: "📐" },
  { name: "3/4 por trás", desc: "Cinematográfico, sobre o ombro", icon: "🎬" },
  { name: "Close no rosto", desc: "Detalhe extremo, foco no olhar", icon: "🔍" },
  { name: "Corpo inteiro", desc: "Ambiental, a pessoa de corpo todo", icon: "🧍" },
  { name: "Ângulo alto", desc: "De cima para baixo, estilo editorial", icon: "🦅" },
];

export default function EstudioFotoPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/estudio-de-foto">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Estúdio de Foto
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Estúdio de Foto cria fotos profissionais mantendo a identidade da pessoa. Você pode descrever a cena
        em texto ou partir de uma foto de referência, ajustar o quanto a IA usa o seu rosto e ainda gerar uma
        sessão inteira com vários ângulos automáticos.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra a Sessão de Fotos e escolha o Estúdio</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, clique em <strong className="text-white">Sessão de Fotos</strong>. No topo da tela
          aparece uma barrinha com três estilos: <strong className="text-white">Estúdio</strong>,{" "}
          <strong className="text-white">UGC</strong> e <strong className="text-white">Produto</strong>. Para
          fotos de pessoas, escolha o <strong className="text-white">Estúdio</strong>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-upload.jpg" alt="Tela inicial do Estúdio de Foto na Sessão de Fotos" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barra de estilos da Sessão de Fotos com o Estúdio selecionado. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o tipo de sessão</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Logo no começo você decide como a foto vai nascer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Prompt</p>
            <p className="text-sm text-txt-secondary">Você descreve a cena em texto e a IA fotografa a pessoa dentro dela. Bom quando você já sabe o cenário que quer.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Referência</p>
            <p className="text-sm text-txt-secondary">Você envia uma foto pronta de cenário, pose e roupa, e a IA coloca o rosto da pessoa naquela imagem.</p>
          </div>
        </div>
        <p className="text-xs text-txt-muted">A sessão começa no modo Prompt por padrão. Você troca quando quiser.</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie as fotos do rosto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload de até 5 fotos da pessoa que vai aparecer. Essas imagens são o que a IA usa para manter a
          identidade. Se você já cadastrou um personagem no perfil do cliente, dá para puxar as fotos dele
          automaticamente pelo bloco de contexto.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">Para o rosto sair fiel:</p>
          <ul className="space-y-1">
            {["Rosto nítido e bem iluminado", "De 3 a 5 fotos em ângulos diferentes", "Sem óculos escuros ou nada cobrindo o rosto"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed">
          No modo Referência, você também envia a <strong className="text-white">foto base</strong> com o
          cenário e a pose que quer copiar.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Ajuste a cena, a roupa e a semelhança facial</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Antes de gerar, você refina os detalhes:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "A cena", options: "No modo Prompt, descreva o cenário e a luz. No modo Referência, isso vem da foto base." },
            { label: "Personalizar roupas", options: "Adicione até 5 peças com foto de referência e uma nota de cor, caimento ou marca." },
            { label: "Personalizar cenário", options: "Envie uma imagem de ambiente ou escreva o cenário em texto." },
            { label: "Semelhança facial", options: "Só no modo Referência. Slider de 0 a 100 (padrão 90) que controla o quanto a IA usa o seu rosto." },
            { label: "Formato e qualidade", options: "Feed 4:5, Banner 16:9 ou Story 9:16. Qualidade 1K, 2K (padrão) ou 4K." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Como ler o slider de Semelhança Facial</p>
          <p className="text-sm text-txt-secondary">
            Até 30 a IA mantém a pessoa que já estava na foto base e só pega dicas das suas fotos. Na faixa do
            meio ela mistura os traços. De 80 para cima ela troca o rosto por completo pelo das suas
            referências, como um clone fiel.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-config.jpg" alt="Configuração da sessão de fotos com roupas, cenário e semelhança facial" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela de configuração da sessão. (4:5)</p>
      </section>

      {/* STEP 5 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">5</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a foto e crie a sessão completa</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar foto</strong>. A IA processa suas referências e cria a
          foto principal. Depois dela, o botão de variações monta uma sessão inteira com ângulos bem diferentes,
          sem aquele efeito de foto clonada:
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
        <p className="text-txt-secondary leading-relaxed mb-4">
          No modo Referência saem <strong className="text-white">5 ângulos</strong> de uma vez. No modo Prompt
          saem <strong className="text-white">3 ângulos</strong>. As variações ficam disponíveis nos planos
          pagos.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/estudio-foto-resultado.jpg" alt="Galeria com as fotos geradas no Estúdio de Foto" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: galeria de resultados da sessão. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos profissionais com o rosto da pessoa preservado, prontas para redes sociais, sites e materiais
            de marketing. Você ainda pode salvar no Drive, mandar para a Galeria ou colocar a sessão à venda na
            Loja.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Identidade preservada", "Modo Prompt ou Referência", "Sessão com vários ângulos", "Roupas e cenário sob controle", "Salvar no Drive"].map((item) => (
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
