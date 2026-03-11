import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Primeiros Passos no Calango Studio | Como Configurar sua Conta",
  description:
    "Configure seu perfil, adicione fotos de referência, conecte o Google Drive e comece a gerar conteúdos incríveis no Calango Studio.",
  openGraph: {
    title: "Primeiros Passos no Calango Studio | Como Configurar sua Conta",
    description:
      "Configure seu perfil, adicione fotos de referência, conecte o Google Drive e comece a gerar conteúdos incríveis.",
    url: "https://www.calangostudio.com.br/tutoriais/primeiros-passos",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/tutoriais/primeiros-passos",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Primeiros Passos no Calango Studio",
  description:
    "Como configurar sua conta no Calango Studio para gerar os melhores resultados.",
  step: [
    {
      "@type": "HowToStep",
      name: "Abrir Configurações",
      text: "Acesse o menu de configurações no Calango Studio.",
    },
    {
      "@type": "HowToStep",
      name: "Preencher Dados do Perfil",
      text: "Adicione seu nome, nicho, público-alvo e informações da sua marca.",
    },
    {
      "@type": "HowToStep",
      name: "Adicionar Fotos de Referência",
      text: "Envie fotos nítidas do seu rosto para gerar imagens personalizadas.",
    },
    {
      "@type": "HowToStep",
      name: "Escrever Melhores Conteúdos",
      text: "Defina tom de voz, pilares de conteúdo e diferenciais da marca.",
    },
    {
      "@type": "HowToStep",
      name: "Conectar Google Drive",
      text: "Conecte sua conta do Google Drive para salvar criações automaticamente.",
    },
    {
      "@type": "HowToStep",
      name: "Configurar API Key Pessoal",
      text: "Configure sua API Key pessoal para economizar Calango Coins.",
    },
  ],
};

const faqs = [
  {
    question: "Preciso preencher tudo para usar a plataforma?",
    answer:
      "Não. Mas quanto mais informações você preencher, melhores serão os resultados gerados pela IA — especialmente no CopyMaker e nos geradores de imagem.",
  },
  {
    question: "Quantas fotos de referência devo adicionar?",
    answer:
      "Recomendamos pelo menos 3 fotos com o rosto bem visível, em boa iluminação e ângulos diferentes. Isso melhora drasticamente o resultado do Estúdio de Foto e outros geradores.",
  },
  {
    question: "O Google Drive é obrigatório?",
    answer:
      "Não é obrigatório. Mas sem ele, você precisará baixar cada imagem manualmente. Com o Drive conectado, suas criações são salvas automaticamente.",
  },
  {
    question: "A API Key pessoal é paga?",
    answer:
      "Não. O Google oferece US$ 300 de crédito gratuito. Isso equivale a aproximadamente 150.000 Calango Coins. Veja o tutorial completo.",
  },
];

const relatedPages = [
  {
    href: "/tutoriais/como-gerar-api-key-pessoal",
    title: "Como Gerar sua API Key Pessoal",
    description: "Ganhe US$ 300 de crédito gratuito e economize Calango Coins.",
  },
  {
    href: "/tutoriais/imagem-criativa",
    title: "Como Usar a Imagem Criativa",
    description: "Crie imagens cinematográficas com estilos prontos.",
  },
  {
    href: "/tutoriais/copymaker",
    title: "Como Usar o CopyMaker",
    description: "Gere copy pronta para qualquer formato de post.",
  },
];

export default function PrimeirosPassosPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/primeiros-passos">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Primeiros Passos no Calango Studio
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-10">
        Antes de criar qualquer conteúdo, configure seu perfil corretamente.
        Isso garante que a IA gere resultados personalizados e de alta
        qualidade para você.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            1
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Abra as Configurações
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral da plataforma, clique em{" "}
          <strong className="text-white">Configurações</strong>. É aqui que
          você define tudo sobre o seu perfil e sua marca.
        </p>
        {/* Imagem: screenshot da sidebar com "Configurações" destacado */}
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/primeiros-passos-configuracoes.jpg"
            alt="Menu lateral do Calango Studio com a opção Configurações destacada"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: menu lateral com &quot;Configurações&quot; em destaque. (16:9)
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            2
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Preencha os Dados do seu Perfil
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Preencha todas as informações sobre você e sua marca:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            { icon: "👤", text: "Seu nome e nome da marca" },
            { icon: "🎯", text: "Nicho de atuação (ex: fitness, moda, tech)" },
            { icon: "👥", text: "Público-alvo (quem você quer atingir)" },
            { icon: "🗣️", text: "Tom de voz (sério, jovem, criativo...)" },
            { icon: "📝", text: "Pilares de conteúdo e diferenciais" },
          ].map((item) => (
            <li
              key={item.text}
              className="flex items-start gap-3 text-txt-secondary"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">
            Por que isso importa?
          </p>
          <p className="text-sm text-txt-secondary">
            Essas informações alimentam o <strong className="text-white">CopyMaker</strong> e
            os geradores de imagem. Quanto mais completo, mais personalizado o
            resultado.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/primeiros-passos-perfil.jpg"
            alt="Tela de configurações do perfil no Calango Studio"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: tela de configurações do perfil com campos preenchidos. (16:9)
        </p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            3
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Adicione Fotos de Referência
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Envie fotos suas que mostrem seu rosto com clareza. A IA usa essas
          imagens para gerar fotos personalizadas no{" "}
          <strong className="text-white">Estúdio de Foto</strong>,{" "}
          <strong className="text-white">Imagem Criativa</strong> e{" "}
          <strong className="text-white">UGC Build</strong>.
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">
            Dicas para fotos perfeitas:
          </p>
          <ul className="space-y-2">
            {[
              "Rosto visível e nítido (sem óculos escuros)",
              "Boa iluminação (luz natural é ideal)",
              "Ângulos diferentes (frontal, 3/4, perfil)",
              "Mínimo 3 fotos para melhores resultados",
              "Fundo limpo, sem muitas distrações",
            ].map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-sm text-txt-secondary"
              >
                <span className="text-accent mt-0.5">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/primeiros-passos-fotos.jpg"
            alt="Seção de upload de fotos de referência no Calango Studio"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: seção de upload de fotos de referência. (16:9)
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            4
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Conecte seu Google Drive
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Com o Drive conectado, todas as imagens que você gerar serão salvas
          automaticamente na sua conta do Google. Sem precisar baixar uma por
          uma.
        </p>
        <ol className="space-y-3 mb-4">
          {[
            "Vá em Configurações → Integrações",
            "Clique em \"Conectar Google Drive\"",
            "Autorize o acesso na janela do Google",
            "Pronto! Suas criações serão salvas automaticamente",
          ].map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-3 text-txt-secondary"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-xs font-bold text-accent shrink-0">
                {i + 1}
              </span>
              <span className="text-sm">{step}</span>
            </li>
          ))}
        </ol>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image
            src="/images/funcoes/primeiros-passos-drive.jpg"
            alt="Conexão do Google Drive nas configurações do Calango Studio"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: tela de conexão com Google Drive. (16:9)
        </p>
      </section>

      {/* STEP 5 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            5
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Configure sua API Key Pessoal (Opcional)
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Essa é a maior vantagem para quem quer economizar. Ao usar sua API
          Key pessoal do Google, você ganha:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-5 text-center">
            <p className="text-3xl font-poppins font-bold text-accent mb-1">
              US$ 300
            </p>
            <p className="text-sm text-txt-secondary">
              de crédito gratuito do Google
            </p>
          </div>
          <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-5 text-center">
            <p className="text-3xl font-poppins font-bold text-accent mb-1">
              ~150.000
            </p>
            <p className="text-sm text-txt-secondary">
              Calango Coins equivalentes
            </p>
          </div>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Isso significa que você pode gerar milhares de imagens e copys sem
          gastar seus Calango Coins.
        </p>
        <Link
          href="/tutoriais/como-gerar-api-key-pessoal"
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent-hover text-black font-bold rounded-xl transition-colors text-sm"
        >
          Ver tutorial completo da API Key →
        </Link>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">
            Resultado
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Com tudo configurado, você está pronto para usar qualquer função
            do Calango Studio com resultados otimizados e personalizados.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Imagens com seu rosto",
              "Copys no seu tom de voz",
              "Salvamento automático no Drive",
              "Economia com API Key pessoal",
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
      <CtaBanner
        slug="tutoriais/primeiros-passos"
        message="Pronto para configurar sua conta e começar a criar?"
      />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
