import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o CopyMaker | Tutorial Calango Studio",
  description:
    "Gere copy pronta para o Instagram em poucos cliques. Escolha o formato, preencha o briefing, defina tom e funil e mande o texto direto para imagem, design ou demandas.",
  openGraph: {
    title: "Como Usar o CopyMaker | Tutorial Calango Studio",
    description:
      "A fábrica de textos do Calango Studio. Copy pronta para post, carrossel, story e reels.",
    url: "https://www.calangostudio.com.br/tutoriais/copymaker",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/copymaker" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o CopyMaker no Calango Studio",
  description: "Tutorial para gerar copy pronta para o Instagram com IA.",
  step: [
    { "@type": "HowToStep", name: "Abrir o Criar Post e escolher o formato", text: "Abra a função Criar Post e escolha um dos 5 formatos de copy." },
    { "@type": "HowToStep", name: "Preencher o briefing", text: "Preencha os campos do briefing e escolha o tom de voz e o estágio do funil." },
    { "@type": "HowToStep", name: "Gerar a copy", text: "Gere a copy e veja o resultado em cards conforme o formato." },
    { "@type": "HowToStep", name: "Copiar ou continuar", text: "Copie o texto ou mande direto para imagem, design ou demandas." },
  ],
};

const faqs = [
  { question: "Onde fica o CopyMaker?", answer: "Ele é a fábrica de textos do Calango Studio e abre pela função Criar Post. É lá que você gera a copy pronta para o seu Instagram." },
  { question: "Quais formatos de copy o CopyMaker faz?", answer: "São 5 formatos: Post Estático (copy única para uma arte), Carrossel (vários cards com headline, corpo e CTA), Story Único (texto curto para uma tela), Sequência de Story (narrativa em várias telas) e Reels/TikTok (roteiro com gancho, corpo e CTA)." },
  { question: "Posso gerar copy para um cliente específico?", answer: "Sim. No bloco de contexto do briefing você escolhe entre Para mim e Para meu cliente. Ao escolher o cliente, o CopyMaker já preenche a marca e o nicho com os dados dele." },
  { question: "O que o botão Gerar tema faz?", answer: "Ele sugere com IA o tema, o resumo e o CTA do post. Serve para quando você ainda não sabe sobre o que falar e quer um ponto de partida." },
  { question: "O que faço com a copy depois de pronta?", answer: "Você pode Copiar Tudo, Refazer Tudo ou Gerar Outra Opção. Também dá para continuar direto: Gerar Imagem, Foto do Produto, Criar Design (abre a arte já diagramada no Studio) ou Salvar Conteúdo (joga o post no pipeline da aba Demandas)." },
];

const relatedPages = [
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Transforme a copy em uma imagem pronta para o feed." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Cadastre clientes para preencher o briefing na hora." },
  { href: "/tutoriais/demandas", title: "Demandas", description: "Organize os posts salvos no seu pipeline de produção." },
];

const formatos = [
  { name: "Post Estático", desc: "Copy única para uma arte", icon: "🖼️" },
  { name: "Carrossel", desc: "Vários cards com headline, corpo e CTA", icon: "🔄" },
  { name: "Story Único", desc: "Texto curto para uma tela", icon: "📱" },
  { name: "Sequência de Story", desc: "Narrativa em várias telas", icon: "🎞️" },
  { name: "Reels/TikTok", desc: "Roteiro com gancho, corpo e CTA", icon: "🎬" },
];

export default function CopyMakerPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/copymaker">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o CopyMaker
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O CopyMaker é a fábrica de textos do Calango Studio. Ele abre pela função{" "}
        <strong className="text-white">Criar Post</strong> e gera copy pronta para o Instagram. Você escolhe o
        formato, preenche um briefing rápido e recebe o texto organizado em cards. Depois é só copiar ou mandar
        direto para a imagem, o design ou a aba de demandas.
      </p>

      <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-10">
        <Image src="/images/funcoes/copymaker.jpg" alt="Tela do CopyMaker no Calango Studio" width={800} height={450} className="w-full h-auto" />
      </div>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra o Criar Post e escolha o formato</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No app, abra a função <strong className="text-white">Criar Post</strong>. A primeira etapa é escolher
          o formato da copy. São 5 opções, cada uma pensada para um tipo de publicação:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {formatos.map((f) => (
            <div key={f.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="text-sm font-semibold text-white">{f.name}</p>
              <p className="text-xs text-txt-muted mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/step1-copymaker.jpg" alt="Escolha do formato de copy na primeira etapa do CopyMaker" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: etapa de escolha do formato no Criar Post. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Preencha o briefing e escolha tom e funil</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A segunda etapa é o briefing. No topo tem um bloco de contexto onde você escolhe{" "}
          <strong className="text-white">Para mim</strong> ou{" "}
          <strong className="text-white">Para meu cliente</strong>. Ao escolher o cliente, o CopyMaker já
          preenche a marca e o nicho com os dados dele.
        </p>
        <p className="text-txt-secondary leading-relaxed mb-4">Os campos obrigatórios são:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Marca/Especialista", options: "Quem assina o conteúdo." },
            { label: "Nicho", options: "A área de atuação da marca." },
            { label: "Tema Principal", options: "Sobre o que é o post." },
            { label: "Resumo/Tópicos", options: "Os pontos que o texto deve cobrir, em até 200 caracteres." },
            { label: "Objetivo (CTA)", options: "A ação que você quer que a pessoa tome." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Sem ideia do que escrever?</p>
          <p className="text-sm text-txt-secondary">
            Use o botão <strong className="text-white">Gerar tema</strong>. Ele sugere com IA um tema, um resumo
            e um CTA para você só ajustar.
          </p>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Ainda no briefing, você define o <strong className="text-white">Tom de Voz</strong> e o{" "}
          <strong className="text-white">Estágio do Funil</strong>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Tom de Voz</p>
            <p className="text-sm text-txt-secondary">Sério, Jovem, Meme, Notícia, Formal, Polêmico, Curioso ou Criativo.</p>
          </div>
          <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
            <p className="text-sm font-semibold text-white mb-1">Estágio do Funil</p>
            <p className="text-sm text-txt-secondary">Topo (atrair), Meio (nutrir) ou Fundo (converter).</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/copymaker-briefing.jpg" alt="Tela do briefing do CopyMaker com campos, tom de voz e funil" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: etapa de briefing com os campos preenchidos. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a copy</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Com o briefing pronto, gere a copy. O resultado vem em cards, organizado conforme o formato que você
          escolheu na primeira etapa. Um carrossel, por exemplo, traz um card para cada lâmina, com headline,
          corpo e CTA.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No resultado você pode:</p>
          <ul className="space-y-1">
            {[
              "Copiar Tudo: leva todo o texto para a área de transferência",
              "Refazer Tudo: gera o conteúdo de novo com o mesmo briefing",
              "Gerar Outra Opção: cria uma versão alternativa para comparar",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          A ideia do formato em cards é deixar cada parte do texto fácil de ler, ajustar e aproveitar.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Copie ou mande direto para imagem, design ou demandas</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O CopyMaker não para no texto. No próprio resultado tem atalhos para continuar o trabalho sem sair do
          fluxo:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Gerar Imagem", options: "Manda o texto para a função Criar Imagem." },
            { label: "Foto do Produto", options: "Cria a foto do produto, quando o cliente tem um produto cadastrado." },
            { label: "Criar Design", options: "Abre a arte já diagramada no Studio." },
            { label: "Salvar Conteúdo", options: "Joga o post no pipeline da aba Demandas." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl overflow-hidden border border-white/[0.06]">
            <Image src="/images/funcoes/copymaker-formatos.jpg" alt="Formatos de copy gerados pelo CopyMaker" width={400} height={400} className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/[0.06]">
            <Image src="/images/funcoes/copymaker-resultado.jpg" alt="Resultado em cards com os atalhos do CopyMaker" width={400} height={400} className="w-full h-auto" />
          </div>
        </div>
        <p className="text-xs text-txt-muted">Imagens: formatos disponíveis e resultado com os atalhos de continuação. (1:1)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Copy pronta para o Instagram no formato certo, no seu tom de voz e no estágio de funil que você
            escolheu. E já encaminhada para virar imagem, design ou uma demanda no seu pipeline.
          </p>
          <div className="flex flex-wrap gap-2">
            {["5 formatos de copy", "Briefing com IA", "Tom de voz e funil", "Resultado em cards", "Vai direto para imagem e demandas"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="copymaker" />
      <CtaBanner slug="tutoriais/copymaker" message="Pronto para gerar a sua próxima copy?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
