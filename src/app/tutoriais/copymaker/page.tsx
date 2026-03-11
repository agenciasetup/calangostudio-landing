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
    "Gere copy pronta para posts, carrossel, stories e reels em segundos. Tom de voz, nicho e funil personalizados.",
  openGraph: {
    title: "Como Usar o CopyMaker | Tutorial Calango Studio",
    description: "Copy estruturada para qualquer formato de post, pronta para publicar.",
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
  description: "Tutorial para gerar copy pronta para redes sociais com IA.",
  step: [
    { "@type": "HowToStep", name: "Escolher formato", text: "Selecione o tipo de post." },
    { "@type": "HowToStep", name: "Preencher o briefing", text: "Defina marca, tema, tom e funil." },
    { "@type": "HowToStep", name: "Gerar copy", text: "A IA gera variações de copy." },
    { "@type": "HowToStep", name: "Copiar e publicar", text: "Copie a copy e use direto." },
  ],
};

const faqs = [
  { question: "O CopyMaker gera copy para quais formatos?", answer: "Post estático, carrossel (múltiplos cards), story único, sequência de stories e reels/TikTok." },
  { question: "Posso personalizar o tom de voz?", answer: "Sim. Escolha entre 8 tons: Sério, Jovem, Meme, Notícia, Formal, Polêmico, Curioso e Criativo." },
  { question: "O que é o estágio de funil?", answer: "Define a intenção da copy: Topo (atrair atenção), Meio (gerar consideração) ou Fundo (converter em venda)." },
  { question: "Preciso editar a copy depois?", answer: "Na maioria dos casos, não. A copy já vem estruturada com headline, corpo e CTA. Mas você pode ajustar se quiser." },
];

const relatedPages = [
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Crie a imagem para acompanhar sua copy." },
  { href: "/tutoriais/consultor-de-perfil", title: "Consultor de Perfil", description: "Auditoria do seu perfil para melhorar resultados." },
  { href: "/tutoriais/primeiros-passos", title: "Primeiros Passos", description: "Configure seu perfil para copys mais personalizadas." },
];

const formatos = [
  { name: "Post Estático", desc: "Copy única para imagem", icon: "🖼️" },
  { name: "Carrossel", desc: "Múltiplos cards com headline e CTA", icon: "📚" },
  { name: "Story Único", desc: "Copy curta e direta para 1 tela", icon: "📱" },
  { name: "Sequência de Story", desc: "Narrativa dividida em várias telas", icon: "🎞️" },
  { name: "Reels / TikTok", desc: "Roteiro com Hook, Corpo e CTA", icon: "🎬" },
];

const tons = ["Sério", "Jovem", "Meme", "Notícia", "Formal", "Polêmico", "Curioso", "Criativo"];

export default function CopyMakerPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/copymaker">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o CopyMaker
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O CopyMaker gera copy pronta para qualquer formato de post. Defina o tom, o funil e o tema — a IA faz o resto.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o Formato do Post</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Selecione o tipo de conteúdo que você quer criar:</p>
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
          <Image src="/images/funcoes/copymaker-formatos.jpg" alt="Seleção de formato de post no CopyMaker" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: seleção de formatos. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Preencha o Briefing</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Diga à IA sobre o que é a copy:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Marca", options: "Nome da sua marca ou do cliente" },
            { label: "Nicho", options: "Área de atuação (fitness, moda, tech...)" },
            { label: "Tema", options: "Assunto do post" },
            { label: "Objetivo / CTA", options: "O que o leitor deve fazer (comprar, seguir, comentar...)" },
            { label: "Tom de voz", options: tons.join(", ") },
            { label: "Funil", options: "Topo (atrair), Meio (engajar) ou Fundo (converter)" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Dica</p>
          <p className="text-sm text-txt-secondary">
            Se você preencheu as configurações do perfil nos <strong className="text-white">Primeiros Passos</strong>,
            a marca, nicho e tom de voz são preenchidos automaticamente.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/copymaker-briefing.jpg" alt="Formulário de briefing do CopyMaker" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: formulário de briefing preenchido. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a Copy</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA cria variações de copy estruturadas com headline, corpo e CTA.
          Para carrossel, cada card vem separado. Para reels, vem com roteiro completo (Hook, Corpo, CTA).
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/copymaker-resultado.jpg" alt="Cards de copy gerados pelo CopyMaker" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: cards de copy gerados. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Copie e Publique</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cada card tem um botão <strong className="text-white">Copiar</strong>.
          Clique, cole no seu editor ou rede social e publique.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Copy profissional pronta para publicar, personalizada para seu tom de voz e estágio de funil.
          </p>
          <div className="flex flex-wrap gap-2">
            {["5 formatos de post", "8 tons de voz", "3 estágios de funil", "Copy pronta para colar", "Headline + corpo + CTA"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="copymaker" />
      <CtaBanner slug="tutoriais/copymaker" message="Pronto para gerar copy que converte?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
