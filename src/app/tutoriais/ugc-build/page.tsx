import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o UGC Build | Tutorial Calango Studio",
  description:
    "Gere fotos realistas de uma pessoa usando o seu produto, com cara de foto de celular e sem aparência de IA. Escolha câmera, ator, produto e cenário.",
  openGraph: {
    title: "Como Usar o UGC Build | Tutorial Calango Studio",
    description: "Fotos UGC realistas com IA, com cara de foto de celular e sem aparência de IA.",
    url: "https://www.calangostudio.com.br/tutoriais/ugc-build",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/ugc-build" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o UGC Build no Calango Studio",
  description: "Tutorial para gerar fotos UGC realistas de uma pessoa usando o seu produto.",
  step: [
    { "@type": "HowToStep", name: "Abrir a Sessão de Fotos", text: "Entre em Sessão de Fotos e escolha o estilo UGC." },
    { "@type": "HowToStep", name: "Escolher o estilo de câmera", text: "Decida entre iPhone Style, Câmera Pro ou Personalizado." },
    { "@type": "HowToStep", name: "Definir ator, produto e cenário", text: "Configure a pessoa, envie o produto e descreva o cenário." },
    { "@type": "HowToStep", name: "Gerar e criar o pack de variações", text: "Gere a foto e peça mais 5 ângulos diferentes." },
  ],
};

const faqs = [
  { question: "Onde fica o UGC Build?", answer: "Ele é o estilo UGC da Sessão de Fotos. Ao abrir, você escolhe na barrinha do topo entre Estúdio (pessoas), UGC (pessoa com produto) e Produto. Para fotos de alguém usando o seu produto, escolha UGC." },
  { question: "Preciso de uma pessoa real?", answer: "Não. Você pode ligar o Rosto Aleatório e escolher idade e gênero, enviar até 3 fotos de um rosto, ou puxar um personagem já cadastrado do cliente. Para gerar, precisa de uma pessoa (rosto enviado ou aleatório) e pelo menos 1 produto." },
  { question: "O produto é obrigatório?", answer: "Sim. O produto é obrigatório. Você usa o botão Ler Produto para ler o rótulo, envia até 3 fotos do produto e pode escrever os detalhes da embalagem." },
  { question: "Quais estilos de câmera existem?", answer: "São três: iPhone Style (visual de story, nitidez de smartphone, sem desfoque), Câmera Pro (lente 35 ou 50mm, bokeh suave, visual de criador de conteúdo) e Personalizado." },
  { question: "Como gero mais fotos do mesmo ensaio?", answer: "Depois da primeira foto, o Pack de Variações cria mais 5 fotos com ângulos diferentes: Close no Produto, Vista de Perfil, Ângulo de Baixo, Estilo Selfie e Foco na Ação. As variações ficam liberadas nos planos pagos." },
];

const relatedPages = [
  { href: "/tutoriais/mockup-produto", title: "Foto de Produto", description: "Sessão comercial só do produto, sem pessoas." },
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Organize as marcas e os personagens dos seus clientes." },
];

const variacoes = [
  { name: "Close no Produto", desc: "Foco bem perto do produto", icon: "🔍" },
  { name: "Vista de Perfil", desc: "A pessoa vista de lado", icon: "👤" },
  { name: "Ângulo de Baixo", desc: "Câmera de baixo para cima", icon: "📐" },
  { name: "Estilo Selfie", desc: "Como uma foto tirada pela própria pessoa", icon: "🤳" },
  { name: "Foco na Ação", desc: "A pessoa usando o produto", icon: "🎬" },
];

export default function UgcBuildPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/ugc-build">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o UGC Build
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O UGC Build gera fotos realistas de uma pessoa usando o seu produto, com cara de foto de celular e sem
        aparência de IA. Você escolhe o estilo de câmera, define quem é o ator, envia o produto e monta o
        cenário. Depois, dá para gerar um pack inteiro de variações.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra a Sessão de Fotos e escolha o UGC</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, clique em <strong className="text-white">Sessão de Fotos</strong>. No topo da tela
          aparece uma barrinha com três estilos: <strong className="text-white">Estúdio</strong>,{" "}
          <strong className="text-white">UGC</strong> e <strong className="text-white">Produto</strong>. Para
          fotos de alguém usando o seu produto, escolha o <strong className="text-white">UGC</strong>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build.jpg" alt="Tela inicial do UGC Build na Sessão de Fotos" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barra de estilos da Sessão de Fotos com o UGC selecionado. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o estilo de câmera</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A primeira etapa é decidir a cara da foto. São três opções:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">iPhone Style</p>
            <p className="text-sm text-txt-secondary">Visual de story, com a nitidez de um smartphone e sem desfoque.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Câmera Pro</p>
            <p className="text-sm text-txt-secondary">Lente 35 ou 50mm, bokeh suave e visual de criador de conteúdo.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Personalizado</p>
            <p className="text-sm text-txt-secondary">Você ajusta o visual da câmera do seu jeito.</p>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Defina o ator, o produto e o cenário</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Na segunda etapa você monta a foto. Comece pela{" "}
          <strong className="text-white">identidade do ator</strong>:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            { label: "Rosto Aleatório", options: "Ligue para a IA criar a pessoa. Escolha a Idade (Criança, Jovem, Adulto que é o padrão, Idoso) e o Gênero (Homem, Mulher que é o padrão)." },
            { label: "Rosto enviado", options: "Desligue o Rosto Aleatório e envie até 3 fotos do rosto que você quer." },
            { label: "Personagem do cliente", options: "Puxe um personagem já cadastrado no perfil do cliente." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Depois, configure o <strong className="text-white">produto</strong> (ele é obrigatório):
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-6">
          <ul className="space-y-2">
            {[
              "Botão Ler Produto, que lê o rótulo do produto",
              "Upload de até 3 fotos do produto",
              "Campo para escrever os detalhes da embalagem",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Por fim, ajuste o <strong className="text-white">cenário e o mood</strong>:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Referências de cenário", options: "Envie até 3 imagens do ambiente que você quer." },
            { label: "Descrição do cenário", options: "Escreva em texto o lugar e o clima da foto." },
            { label: "Luz do Ambiente", options: "Natural (padrão), Luz de Casa, Luz Baixa, Luz de Estúdio, Luz Rembrandt e Golden Hour." },
            { label: "Pose do ator", options: "Diga o que a pessoa está fazendo na foto." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No topo da tela você ainda define:</p>
          <ul className="space-y-1">
            {["Formato: Feed 4:5, Banner 16:9 ou Story 9:16", "Qualidade, que aqui começa em 2K", "O botão Gerar UGC, que fica no topo"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build-produto.jpg" alt="Configuração do ator, do produto e do cenário no UGC Build" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela de configuração do ator e do produto. (4:5)</p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mt-4 mb-4">
          <Image src="/images/funcoes/product-ugc-build.jpg" alt="Upload do produto e referências de cenário no UGC Build" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: produto e referências de cenário. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a foto e crie o pack de variações</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Com uma pessoa definida (rosto enviado ou aleatório) e pelo menos 1 produto, clique em{" "}
          <strong className="text-white">Gerar UGC</strong> no topo. Depois da primeira foto, o{" "}
          <strong className="text-white">Pack de Variações</strong> cria mais 5 fotos com ângulos diferentes:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {variacoes.map((v) => (
            <div key={v.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{v.icon}</span>
              <p className="text-sm font-semibold text-white">{v.name}</p>
              <p className="text-xs text-txt-muted mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          As variações ficam <strong className="text-white">liberadas nos planos pagos</strong>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/ugc-build-resultado.jpg" alt="Galeria com as fotos UGC geradas e o pack de variações" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: galeria de resultados do UGC Build. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos realistas de uma pessoa usando o seu produto, com cara de foto de celular e sem aparência de
            IA, perfeitas para anúncios, prova social e conteúdo de redes sociais.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Cara de foto de celular", "Rosto real ou aleatório", "Produto obrigatório e fiel", "Pack com 5 variações", "Estilo iPhone ou Câmera Pro"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="ugc-build" />
      <CtaBanner slug="tutoriais/ugc-build" message="Pronto para criar fotos UGC do seu produto?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
