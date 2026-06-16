import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Recortar o Fundo e Gerar PNG Transparente | Tutorial Calango Studio",
  description:
    "Hoje a forma de tirar o fundo e gerar um PNG transparente é o Recorte com IA, dentro do Studio. Ele roda no seu navegador, sem custo por uso, e a imagem não sai do seu aparelho.",
  openGraph: {
    title: "Como Recortar o Fundo e Gerar PNG Transparente | Tutorial Calango Studio",
    description:
      "Separe o fundo de um elemento com o Recorte com IA do Studio e exporte em PNG transparente.",
    url: "https://www.calangostudio.com.br/tutoriais/assets-3d",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/assets-3d" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Recortar o Fundo e Gerar PNG Transparente no Calango Studio",
  description:
    "Tutorial para separar o fundo de um elemento com o Recorte com IA do Studio e exportar em PNG.",
  step: [
    { "@type": "HowToStep", name: "Abrir a imagem no Studio", text: "Abra a imagem no Studio e selecione ela." },
    { "@type": "HowToStep", name: "Separar o fundo", text: "Instale o recorte e clique em Separar fundo." },
    { "@type": "HowToStep", name: "Refinar a máscara", text: "Refine as bordas e o cabelo no ajuste fino." },
    { "@type": "HowToStep", name: "Exportar em PNG", text: "Exporte o elemento em PNG transparente." },
  ],
};

const faqs = [
  {
    question: "Como faço hoje para tirar o fundo e gerar um PNG transparente?",
    answer:
      "Essa é a forma atual: use o Recorte com IA, que fica dentro do Studio. Você seleciona a imagem, separa o fundo e exporta em PNG. É assim que se cria um elemento com fundo transparente no Calango.",
  },
  {
    question: "Onde encontro o Recorte com IA?",
    answer:
      "Dentro do Studio. Ao selecionar uma imagem, aparece uma barrinha flutuante em cima dela. É nessa barrinha que ficam o Separar fundo e o Refinar.",
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer:
      "Só na primeira vez. O recorte é um download único e roda no próprio navegador. Depois disso, é só usar quando quiser.",
  },
  {
    question: "Tem custo por uso e a imagem vai para algum servidor?",
    answer:
      "Não tem custo por uso. O recorte roda no seu aparelho, então a imagem não sai dele.",
  },
  {
    question: "O Separar fundo estraga a imagem original?",
    answer:
      "Não. Ele recorta o objeto e cria uma nova camada com ele já sem fundo, sem mexer na imagem original.",
  },
  {
    question: "O que dá para ajustar no Refinar?",
    answer:
      "O Refinar abre um ajuste fino da máscara: pincéis para incluir ou excluir partes, ajuste de força da borda, refino de cabelo e a opção de remover o halo das bordas.",
  },
];

const relatedPages = [
  { href: "/tutoriais/design-studio", title: "Como Usar o Studio", description: "O editor visual onde fica o Recorte com IA." },
  { href: "/tutoriais/mockup-produto", title: "Foto de Produto", description: "Sessão comercial só do produto." },
  { href: "/tutoriais/imagem-criativa", title: "Como Usar a Imagem Criativa", description: "Crie imagens cinematográficas com estilos prontos." },
];

export default function Assets3DPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/assets-3d">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Recortar o Fundo e Gerar PNG Transparente
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Hoje, a forma de tirar o fundo de um elemento e gerar um PNG transparente é o Recorte com
        IA, que fica dentro do Studio. Ele roda no próprio navegador, sem custo por uso, e a imagem
        não sai do seu aparelho. Veja como fazer em poucos passos.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra a imagem no Studio e selecione ela</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Dentro do <strong className="text-white">Studio</strong>, abra a imagem que você quer
          recortar e clique nela para selecionar. Assim que ela fica selecionada, aparece uma
          barrinha flutuante em cima dela, com as opções de recorte.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/assets-3d.jpg" alt="Imagem selecionada no Studio com a barrinha flutuante de recorte" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barrinha flutuante de recorte sobre a imagem selecionada. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Instale e clique em Separar fundo</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Na primeira vez, você instala o recorte. É um download único e ele roda no próprio
          navegador, sem custo por uso, com a imagem ficando no seu aparelho. Depois, clique em{" "}
          <strong className="text-white">Separar fundo</strong>.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">O que acontece</p>
          <p className="text-sm text-txt-secondary">
            A IA recorta o objeto e cria uma nova camada com ele já sem fundo, sem estragar a
            imagem original.
          </p>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Refine as bordas e o cabelo</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Refinar</strong> para abrir um ajuste fino da
          máscara. Ali você acerta os detalhes:
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <ul className="space-y-2">
            {[
              "Pincéis para incluir ou excluir partes",
              "Ajuste de força da borda",
              "Refino de cabelo",
              "Opção de remover o halo das bordas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/dash-assets-3d.jpg" alt="Ajuste fino da máscara no Recorte com IA do Studio" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: ajuste fino da máscara com refino de bordas e cabelo. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Exporte em PNG transparente</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Para salvar o elemento transparente, use o <strong className="text-white">Exportar</strong>{" "}
          do Studio no formato <strong className="text-white">PNG</strong>, que mantém a
          transparência. Pronto, você tem o seu elemento sem fundo para reaproveitar em qualquer
          arte.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Um elemento recortado, sem fundo, em PNG transparente, pronto para entrar em posts,
            carrosséis e qualquer criativo. Tudo feito dentro do Studio, no seu navegador, sem
            custo por uso e sem a imagem sair do seu aparelho.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Recorte com IA no Studio",
              "Roda no navegador",
              "Sem custo por uso",
              "Imagem fica no seu aparelho",
              "Refino de bordas e cabelo",
              "Exporta em PNG transparente",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="assets-3d" />
      <CtaBanner slug="tutoriais/assets-3d" message="Pronto para recortar seus elementos e gerar PNGs transparentes?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
