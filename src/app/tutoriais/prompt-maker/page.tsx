import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Prompt Maker | Tutorial Calango Studio",
  description:
    "Dê uma imagem de referência e receba o prompt detalhado dela, pronto para colar em qualquer gerador. O Prompt Maker é um botão flutuante em qualquer tela do app.",
  openGraph: {
    title: "Como Usar o Prompt Maker | Tutorial Calango Studio",
    description: "Extraia o prompt de qualquer imagem de referência e use onde quiser.",
    url: "https://www.calangostudio.com.br/tutoriais/prompt-maker",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/prompt-maker" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Prompt Maker no Calango Studio",
  description: "Tutorial para extrair o prompt de uma imagem de referência usando o botão flutuante.",
  step: [
    { "@type": "HowToStep", name: "Abrir o botão de lupa", text: "Clique no botão flutuante de lupa em qualquer tela do app." },
    { "@type": "HowToStep", name: "Enviar a imagem de referência", text: "Envie 1 imagem e, se quiser, escolha um contexto de marca ou nicho." },
    { "@type": "HowToStep", name: "Extrair o prompt", text: "Clique em Extrair prompt e receba o texto em formato JSON." },
    { "@type": "HowToStep", name: "Copiar e usar", text: "Copie o prompt com um clique e use onde quiser." },
  ],
};

const faqs = [
  { question: "O que o Prompt Maker faz?", answer: "Ele faz o caminho inverso de um gerador comum. Você dá uma imagem de referência e ele te devolve o prompt detalhado daquela imagem, pronto para colar em qualquer gerador." },
  { question: "Onde fica o Prompt Maker?", answer: "Hoje ele é um botão flutuante que aparece em qualquer tela do app. É um botãozinho redondo com ícone de lupa, no canto inferior direito. Não é mais uma página separada." },
  { question: "O Prompt Maker gera imagem?", answer: "Não. A saída é só o texto do prompt. Você copia com um clique, ou usa Salvar / Vender para publicar o prompt na Loja." },
  { question: "Posso enviar mais de uma imagem?", answer: "Você envia 1 imagem de referência por vez. Antes de extrair, ainda dá para escolher um contexto opcional de marca ou nicho." },
  { question: "O prompt copia o rosto da pessoa da imagem?", answer: "Não. O prompt sai sempre focado em transferência de estilo: cores, luz, composição e textura. Ele ignora de propósito etnia, tipo físico e identidade da pessoa, para você poder aplicar o estilo em qualquer imagem sua." },
  { question: "Em qual formato o prompt sai?", answer: "Ele entrega o prompt em formato JSON. É só copiar e colar no gerador que você usa." },
];

const relatedPages = [
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Crie imagens cinematográficas com estilos prontos." },
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Cole o prompt e gere a imagem com controle total." },
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
];

export default function PromptMakerPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/prompt-maker">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Prompt Maker
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Prompt Maker faz o caminho inverso de um gerador. Em vez de você escrever um prompt para criar uma
        imagem, você dá uma imagem de referência e ele te devolve o prompt detalhado dela, pronto para colar em
        qualquer gerador. Hoje ele vive como um botão flutuante que aparece em qualquer tela do app.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Clique no botão de lupa</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O Prompt Maker é um <strong className="text-white">botão flutuante</strong>, um botãozinho redondo com
          ícone de lupa que fica no <strong className="text-white">canto inferior direito</strong>. Ele aparece
          em qualquer tela, então você não precisa sair do que está fazendo. Clique nele para abrir o painel.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/prompt-maker-widget.jpg" alt="Botão flutuante de lupa do Prompt Maker no canto inferior direito" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: botão de lupa do Prompt Maker e o painel aberto. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie a imagem de referência</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No painel, envie <strong className="text-white">1 imagem de referência</strong>: a foto cujo estilo
          você quer aproveitar. Se fizer sentido, escolha também um{" "}
          <strong className="text-white">contexto</strong> de marca ou nicho. Esse passo é opcional.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No painel você tem:</p>
          <ul className="space-y-1">
            {["Envio de 1 imagem de referência", "Escolha de contexto (marca ou nicho), opcional", "Botão Extrair prompt"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Clique em Extrair prompt</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Extrair prompt</strong>. Ele lê a imagem e entrega o prompt
          em <strong className="text-white">formato JSON</strong>. O prompt sai sempre focado em transferência
          de estilo: cores, luz, composição e textura.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Por que ele ignora a pessoa</p>
          <p className="text-sm text-txt-secondary">
            De propósito, o prompt deixa de fora etnia, tipo físico e identidade da pessoa da imagem. Assim você
            pega só o estilo e aplica em qualquer imagem sua, sem copiar o rosto de ninguém.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/prompt-maker-resultado.jpg" alt="Prompt em formato JSON extraído pelo Prompt Maker" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: prompt extraído em formato JSON. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Copie o prompt e use onde quiser</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O Prompt Maker <strong className="text-white">não gera imagem</strong>. A saída é só o texto do
          prompt. Você copia com um clique e cola no gerador que preferir. Se quiser, use{" "}
          <strong className="text-white">Salvar / Vender</strong> para publicar o prompt na Loja.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">O que fazer com o prompt:</p>
          <ul className="space-y-1">
            {["Copiar com um clique e colar em qualquer gerador", "Salvar / Vender para publicar o prompt na Loja"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Em poucos cliques você transforma uma imagem que gostou num prompt pronto para reaproveitar. Como
            ele foca só no estilo, dá para aplicar o mesmo clima em várias imagens suas. E o botão de lupa fica
            sempre por perto, em qualquer tela.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Botão flutuante em qualquer tela", "Prompt a partir de uma imagem", "Foco em transferência de estilo", "Saída em formato JSON", "Copiar ou vender na Loja"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="prompt-maker" />
      <CtaBanner slug="tutoriais/prompt-maker" message="Pronto para extrair o prompt das suas referências?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
