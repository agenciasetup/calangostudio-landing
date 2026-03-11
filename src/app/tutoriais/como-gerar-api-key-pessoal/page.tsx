import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Como Gerar sua API Key Pessoal do Google | Calango Studio",
  description:
    "Passo a passo para criar sua API Key pessoal no Google Cloud e ganhar US$ 300 de crédito gratuito — equivalente a ~150.000 Calango Coins.",
  openGraph: {
    title: "Como Gerar sua API Key Pessoal do Google | Calango Studio",
    description:
      "Ganhe US$ 300 de crédito gratuito no Google Cloud e economize Calango Coins.",
    url: "https://www.calangostudio.com.br/tutoriais/como-gerar-api-key-pessoal",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/tutoriais/como-gerar-api-key-pessoal",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Gerar sua API Key Pessoal do Google para o Calango Studio",
  description:
    "Tutorial para criar uma API Key no Google Cloud e usar os créditos gratuitos no Calango Studio.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: "Criar conta no Google Cloud",
      text: "Acesse o Google Cloud e crie sua conta gratuita.",
    },
    {
      "@type": "HowToStep",
      name: "Ativar o período gratuito",
      text: "Ative o free trial com US$ 300 de crédito.",
    },
    {
      "@type": "HowToStep",
      name: "Ativar a API do Gemini",
      text: "Ative a Generative Language API no console.",
    },
    {
      "@type": "HowToStep",
      name: "Criar a API Key",
      text: "Gere sua chave de API no Google AI Studio.",
    },
    {
      "@type": "HowToStep",
      name: "Colar no Calango Studio",
      text: "Cole a API Key nas configurações do Calango Studio.",
    },
  ],
};

const faqs = [
  {
    question: "A API Key do Google é gratuita?",
    answer:
      "Sim. O Google oferece US$ 300 de crédito gratuito para novos usuários. Esse crédito dura até 90 dias ou até acabar.",
  },
  {
    question: "O Google vai me cobrar depois?",
    answer:
      "Não. O Google não cobra automaticamente após o crédito acabar. Você só será cobrado se ativar manualmente o plano pago.",
  },
  {
    question: "Quanto vale US$ 300 em Calango Coins?",
    answer:
      "Aproximadamente 150.000 Calango Coins, o suficiente para gerar milhares de imagens e copys.",
  },
  {
    question: "E se o Google pedir verificação de pagamento?",
    answer:
      "Em alguns casos, o Google faz uma cobrança temporária de R$ 50, R$ 100 ou R$ 200 no cartão para verificar a identidade. Geralmente é estornado. Pagamento no cartão de crédito costuma liberar os US$ 300 gratuitamente.",
  },
  {
    question: "Posso usar a mesma API Key em outra conta?",
    answer:
      "A API Key é vinculada à sua conta Google. Cada conta tem seus próprios créditos.",
  },
];

const relatedPages = [
  {
    href: "/tutoriais/primeiros-passos",
    title: "Primeiros Passos",
    description: "Configure todo o seu perfil antes de começar.",
  },
  {
    href: "/tutoriais/imagem-criativa",
    title: "Como Usar a Imagem Criativa",
    description: "Sua primeira geração de imagem após configurar a API Key.",
  },
  {
    href: "/tutoriais/estudio-de-foto",
    title: "Como Usar o Estúdio de Foto",
    description: "Gere fotos profissionais com seu rosto.",
  },
];

export default function ApiKeyTutorialPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/como-gerar-api-key-pessoal">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Gerar sua API Key Pessoal do Google
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Com sua API Key pessoal, você usa os créditos gratuitos do Google
        diretamente no Calango Studio — economizando seus Calango Coins.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-5 text-center">
          <p className="text-3xl font-poppins font-bold text-accent mb-1">
            US$ 300
          </p>
          <p className="text-sm text-txt-secondary">crédito gratuito</p>
        </div>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-5 text-center">
          <p className="text-3xl font-poppins font-bold text-accent mb-1">
            ~150.000
          </p>
          <p className="text-sm text-txt-secondary">Calango Coins</p>
        </div>
      </div>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            1
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Entenda o Free Trial do Google Cloud
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O Google Cloud oferece um período gratuito com US$ 300 em créditos
          para novos usuários. Leia a documentação oficial para entender os
          detalhes:
        </p>
        <a
          href="https://docs.cloud.google.com/free/docs/free-cloud-features?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-accent hover:bg-white/10 transition-colors mb-4"
        >
          📄 Documentação oficial do Google Cloud Free →
        </a>
        <p className="text-txt-secondary leading-relaxed">
          O crédito é válido por 90 dias e pode ser usado com as APIs de IA
          generativa (Gemini) — exatamente o que o Calango Studio utiliza.
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            2
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Crie sua Conta no Google Cloud
          </h2>
        </div>
        <ol className="space-y-3 mb-4">
          {[
            "Acesse cloud.google.com e clique em \"Comece gratuitamente\"",
            "Faça login com sua conta Google (ou crie uma nova)",
            "Preencha os dados solicitados (nome, país)",
            "Adicione um método de pagamento (cartão de crédito ou débito)",
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
            src="/images/funcoes/api-key-google-cloud-signup.jpg"
            alt="Tela de cadastro do Google Cloud com botão Comece gratuitamente"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: página inicial do Google Cloud. (16:9)
        </p>

        {/* AVISO IMPORTANTE */}
        <div className="bg-bg-tertiary border border-yellow-500/30 rounded-xl p-4 mt-4">
          <p className="text-sm font-semibold text-yellow-400 mb-2">
            ⚠️ Aviso sobre verificação de pagamento
          </p>
          <p className="text-sm text-txt-secondary mb-2">
            Ao adicionar o cartão, o Google pode fazer uma{" "}
            <strong className="text-white">cobrança temporária</strong> de R$ 50,
            R$ 100 ou até R$ 200 para verificar sua identidade. Essa cobrança
            geralmente é estornada em alguns dias.
          </p>
          <p className="text-sm text-txt-secondary mb-2">
            <strong className="text-white">Dica:</strong> Pagamento no{" "}
            <strong className="text-white">cartão de crédito</strong> costuma
            liberar os US$ 300 gratuitamente, sem retenção.
          </p>
          <p className="text-sm text-txt-secondary">
            Muitos usuários relatam que, em caso de problemas, criar uma conta
            nova do Google ou tentar com a conta de um amigo ou familiar
            resolve a situação.
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
            Acesse o Google AI Studio
          </h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O jeito mais rápido de gerar sua API Key é pelo Google AI Studio:
        </p>
        <ol className="space-y-3 mb-4">
          {[
            "Acesse aistudio.google.com",
            "Faça login com a mesma conta Google do Cloud",
            "No menu lateral, clique em \"Get API Key\"",
            "Clique em \"Create API Key\"",
            "Selecione seu projeto (ou crie um novo)",
            "Copie a API Key gerada",
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
            src="/images/funcoes/api-key-aistudio-create.jpg"
            alt="Google AI Studio com botão Create API Key destacado"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: Google AI Studio — criação de API Key. (16:9)
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">
            4
          </span>
          <h2 className="text-xl font-poppins font-bold text-white">
            Cole a API Key no Calango Studio
          </h2>
        </div>
        <ol className="space-y-3 mb-4">
          {[
            "Abra o Calango Studio e vá em Configurações",
            "Encontre a seção \"API Key Pessoal\"",
            "Cole sua API Key no campo indicado",
            "Clique em \"Salvar\"",
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
            src="/images/funcoes/api-key-calango-config.jpg"
            alt="Campo de API Key nas configurações do Calango Studio"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-txt-muted">
          Imagem: configurações do Calango Studio com campo de API Key. (16:9)
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">
            Resultado
          </h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Com a API Key configurada, suas gerações passam a usar os créditos
            gratuitos do Google em vez dos Calango Coins. Você pode gerar
            milhares de imagens e copys sem custo adicional.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "US$ 300 em crédito",
              "~150.000 Calango Coins economizados",
              "90 dias de validade",
              "Milhares de gerações",
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
        slug="tutoriais/como-gerar-api-key-pessoal"
        message="Pronto para economizar com sua API Key pessoal?"
      />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
