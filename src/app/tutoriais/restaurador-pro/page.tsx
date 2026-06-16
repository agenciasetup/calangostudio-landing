import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Restaurador Pro | Tutorial Calango Studio",
  description:
    "Recupere fotos antigas e melhore a qualidade de qualquer imagem. Envie de 1 a 5 fotos, escolha o modo e o nível de dano, e compare o antes e depois.",
  openGraph: {
    title: "Como Usar o Restaurador Pro | Tutorial Calango Studio",
    description: "Restaure fotos antigas e aumente a qualidade das suas imagens com IA.",
    url: "https://www.calangostudio.com.br/tutoriais/restaurador-pro",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/restaurador-pro" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Restaurador Pro no Calango Studio",
  description: "Tutorial para restaurar fotos antigas e melhorar a qualidade de imagens com IA.",
  step: [
    { "@type": "HowToStep", name: "Abrir o Restaurador Pro", text: "Entre no Restaurador Pro pelo menu da plataforma." },
    { "@type": "HowToStep", name: "Enviar a foto", text: "Envie de 1 a 5 fotos ou importe do seu perfil ou de um cliente." },
    { "@type": "HowToStep", name: "Escolher o modo e o nível de dano", text: "Selecione um dos 5 modos e defina o nível de dano da foto." },
    { "@type": "HowToStep", name: "Restaurar e comparar", text: "Restaure a imagem e use o comparador para ver o antes e depois." },
  ],
};

const faqs = [
  { question: "Para que serve o Restaurador Pro?", answer: "Ele recupera fotos antigas e melhora a qualidade de qualquer imagem. Serve tanto para tirar rasgos e manchas de uma foto velha quanto para deixar uma imagem atual mais nítida e detalhada." },
  { question: "Quantas fotos posso enviar de uma vez?", answer: "De 1 a 5 fotos. Você pode subir as imagens do seu computador ou usar o botão de importar para puxar fotos do seu perfil ou de um cliente." },
  { question: "Qual modo eu escolho?", answer: "São 5 modos. Restaurar e Colorir (Fiel) remove rasgos e manchas e coloriza mantendo os traços, é o padrão. Modernizar (Digital) melhora pele e texturas para um visual atual. Upscale (2x) Nitidez Pro mantém tudo igual e só aumenta nitidez e detalhe. Apenas Limpar mantém os tons originais e tira só os danos. Recriar Cenário reconstrói fundo e detalhes perdidos." },
  { question: "O que é o Nível de Dano?", answer: "É o quanto a foto está danificada: Leve, Médio (padrão) ou Grave. Quanto maior o dano, mais a IA trabalha na recuperação. Esse ajuste não é usado no modo Upscale." },
  { question: "Em qual qualidade a foto sai?", answer: "A qualidade começa em 2K. No final, você ainda pode usar o botão Baixar em Ultra HD para salvar a versão em alta resolução." },
  { question: "Como vejo o resultado?", answer: "O resultado abre num comparador de antes e depois. Você arrasta a barrinha sobre a imagem para comparar os dois lados. De lá dá para baixar em Ultra HD, salvar no Drive ou começar uma Nova Foto." },
];

const relatedPages = [
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
  { href: "/tutoriais/mockup-produto", title: "Foto de Produto", description: "Sessão comercial só do produto." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Organize os perfis e as fotos de cada cliente." },
];

const modos = [
  { name: "Restaurar e Colorir (Fiel)", desc: "Remove rasgos e manchas e coloriza mantendo os traços. É o padrão.", icon: "🎨" },
  { name: "Modernizar (Digital)", desc: "Melhora pele e texturas para um visual atual.", icon: "✨" },
  { name: "Upscale (2x) Nitidez Pro", desc: "Mantém tudo igual e só aumenta nitidez e detalhe.", icon: "🔎" },
  { name: "Apenas Limpar", desc: "Mantém os tons originais e tira só os danos.", icon: "🧽" },
  { name: "Recriar Cenário", desc: "Reconstrói fundo e detalhes perdidos.", icon: "🏞️" },
];

export default function RestauradorProPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/restaurador-pro">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Restaurador Pro
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Restaurador Pro recupera fotos antigas e melhora a qualidade de qualquer imagem. Você envia a foto,
        escolhe como quer tratar ela e, no final, compara o antes e o depois arrastando uma barrinha. Serve
        tanto para salvar aquela foto de família com rasgos e manchas quanto para deixar uma imagem atual mais
        nítida.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra o Restaurador Pro</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu da plataforma, clique em <strong className="text-white">Restaurador Pro</strong>. É a tela
          onde você envia a foto e escolhe como a IA vai tratar ela.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro.jpg" alt="Tela inicial do Restaurador Pro no Calango Studio" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela inicial do Restaurador Pro. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie a foto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Você pode enviar de <strong className="text-white">1 a 5 fotos</strong> de uma vez. Suba as imagens
          do seu computador ou use o botão de importar para puxar fotos que já estão no seu perfil ou no perfil
          de um cliente.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">Duas formas de enviar:</p>
          <ul className="space-y-1">
            {["Subir de 1 a 5 fotos direto do seu dispositivo", "Importar fotos do seu perfil ou de um cliente"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-upload.jpg" alt="Envio de fotos no Restaurador Pro" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: área de envio de fotos com o botão de importar. (16:9)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o modo e o nível de dano</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Agora você decide como a IA vai tratar a foto. São 5 modos, cada um com um objetivo:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {modos.map((m) => (
            <div key={m.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4">
              <span className="text-2xl block mb-2">{m.icon}</span>
              <p className="text-sm font-semibold text-white mb-1">{m.name}</p>
              <p className="text-sm text-txt-secondary">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Depois do modo, escolha o <strong className="text-white">Nível de Dano</strong> da foto:
        </p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { name: "Leve", desc: "Poucos danos" },
            { name: "Médio", desc: "Padrão" },
            { name: "Grave", desc: "Foto bem danificada" },
          ].map((n) => (
            <div key={n.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-white">{n.name}</p>
              <p className="text-xs text-txt-muted mt-1">{n.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Fique de olho</p>
          <p className="text-sm text-txt-secondary">
            O Nível de Dano não é usado no modo <strong className="text-white">Upscale (2x) Nitidez Pro</strong>,
            porque ali a IA só aumenta nitidez e detalhe. A qualidade começa em <strong className="text-white">2K</strong>.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-modos.jpg" alt="Modos e nível de dano do Restaurador Pro" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: seleção de modo e nível de dano. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Restaure e compare o antes e depois</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique para restaurar e a IA processa a sua foto. O resultado abre num{" "}
          <strong className="text-white">comparador de antes e depois</strong>: você arrasta a barrinha sobre a
          imagem para ver os dois lados e conferir o que mudou.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">O que você faz com o resultado:</p>
          <ul className="space-y-1">
            {["Baixar em Ultra HD", "Salvar no Drive", "Começar uma Nova Foto"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/restaurador-pro-resultado.jpg" alt="Comparador de antes e depois no Restaurador Pro" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: comparador de antes e depois com a barrinha de arrastar. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos antigas recuperadas e imagens com mais nitidez e detalhe, prontas para guardar, imprimir ou
            usar onde quiser. Você compara o antes e depois, baixa em Ultra HD e ainda pode salvar no Drive.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Fotos antigas recuperadas", "5 modos de restauração", "Nível de dano ajustável", "Qualidade a partir de 2K", "Antes e depois lado a lado"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="restaurador-pro" />
      <CtaBanner slug="tutoriais/restaurador-pro" message="Pronto para recuperar suas fotos antigas?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
