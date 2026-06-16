import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Modo Avançado | Tutorial Calango Studio",
  description:
    "Crie e edite imagens com controle fino. Use até 8 referências, prompt obrigatório, marcação na imagem com pincel e ajuste de iluminação.",
  openGraph: {
    title: "Como Usar o Modo Avançado | Tutorial Calango Studio",
    description: "Controle fino para criar e editar imagens com referências e marcação na imagem.",
    url: "https://www.calangostudio.com.br/tutoriais/modo-manual",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/modo-manual" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Modo Avançado no Calango Studio",
  description: "Tutorial para criar e editar imagens com controle fino no modo Avançado de Criar Imagem.",
  step: [
    { "@type": "HowToStep", name: "Trocar para o Avançado", text: "Em Criar Imagem, troque pela barrinha do topo para o modo Avançado." },
    { "@type": "HowToStep", name: "Adicionar referências", text: "Adicione até 8 imagens, sendo a primeira a Imagem Base." },
    { "@type": "HowToStep", name: "Escrever o prompt", text: "Escreva o que quer e, se quiser, rabisque a área que deve mudar." },
    { "@type": "HowToStep", name: "Ajustar a luz e gerar", text: "Descreva a iluminação e clique para gerar a imagem." },
  ],
};

const faqs = [
  { question: "O que é o Modo Avançado?", answer: "É o segundo modo da função Criar Imagem. Você troca pela barrinha do topo, no botão Avançado. Ele serve para criar e editar imagens com controle fino. O nome antigo era Modo Manual." },
  { question: "Quantas referências posso adicionar?", answer: "Até 8 imagens. A primeira é a Imagem Base (opcional). Sem ela, a IA cria só pelo texto. As demais são Imagem 2, Imagem 3 e por aí vai, úteis para trocar objetos e elementos." },
  { question: "Como funciona a marcação na imagem?", answer: "Você abre uma imagem e pinta com o pincel a área que deve mudar. Dá para criar tags coloridas com nome para cada região, e esses nomes viram marcadores no prompt. Cada marcação vai para a IA como uma máscara, então ela mexe só naquela parte." },
  { question: "Quais ferramentas tem o modo de rabisco?", answer: "Pincel e borracha, com tamanho de 4 a 60 pixels, botão de desfazer e uma prévia da máscara para você conferir antes de gerar." },
  { question: "Para que serve o Ajustar iluminação?", answer: "Ele abre um campo para você descrever a luz da cena, por exemplo luz de Rembrandt, luz natural de dia ou clima noturno." },
  { question: "A qualidade fica travada em algum plano?", answer: "No plano Freemium a qualidade fica travada em 1K e o botão de +3 variações fica bloqueado. Nos planos pagos você libera 2K, 4K e as variações." },
];

const relatedPages = [
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Estilos prontos sem precisar de prompt." },
  { href: "/tutoriais/prompt-maker", title: "Prompt Maker", description: "Monte prompts melhores para suas imagens." },
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
];

export default function ModoAvancadoPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/modo-manual">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Modo Avançado
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        O Modo Avançado é o segundo modo da função Criar Imagem (o nome antigo era Modo Manual). Ele serve para
        criar e editar imagens com controle fino. É uma tela só, em duas colunas: à esquerda ficam as
        referências e o prompt, à direita aparece o resultado.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Em Criar Imagem, troque para o modo Avançado</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Abra a função <strong className="text-white">Criar Imagem</strong>. No topo tem uma barrinha com dois
          modos. Clique no botão <strong className="text-white">Avançado</strong> para entrar nesta tela. No
          topo você define os mesmos seletores de sempre:
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <ul className="space-y-2">
            {[
              { label: "Modelo de IA", options: "Escolha o modelo que vai gerar a imagem." },
              { label: "Formato", options: "Feed 4:5 é o padrão, mais Story 9:16 e Banner 16:9." },
              { label: "Qualidade", options: "1K, 2K (padrão) ou 4K. No plano Freemium fica travada em 1K." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span>
                <span><strong className="text-white">{item.label}:</strong> {item.options}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-modos.jpg" alt="Barrinha do topo de Criar Imagem com o modo Avançado selecionado" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barrinha com o modo Avançado selecionado. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Adicione as referências (até 8)</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Na coluna da esquerda você adiciona até 8 imagens. A primeira é a{" "}
          <strong className="text-white">Imagem Base</strong>, que é opcional: sem ela, a IA cria só pelo texto.
          As demais são <strong className="text-white">Imagem 2</strong>,{" "}
          <strong className="text-white">Imagem 3</strong> e assim por diante, úteis para trocar objetos e
          elementos.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Contexto do cliente</p>
          <p className="text-sm text-txt-secondary">
            Tem um bloco de contexto para puxar personagens e produtos do cliente, que entram como referência
            sem você precisar subir foto de novo.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-referencias.jpg" alt="Coluna de referências do modo Avançado com a Imagem Base e as demais" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: coluna de referências com a Imagem Base. (16:9)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escreva o prompt e rabisque a área que deve mudar</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O campo de prompt é obrigatório. Escreva o que você quer e, se precisar, clique nas referências para
          inserir o nome delas no texto. Por exemplo:{" "}
          <strong className="text-white">&quot;troque o anel da Imagem Base pelo da Imagem 2&quot;</strong>.
        </p>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Para um controle ainda mais fino, dá para rabiscar a imagem. Você abre uma imagem e pinta com pincel a
          área que deve mudar:
        </p>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No modo de marcação você tem:</p>
          <ul className="space-y-2">
            {[
              "Pincel e borracha para pintar e apagar",
              "Tamanho do traço de 4 a 60 pixels",
              "Botão de desfazer e uma prévia da máscara",
              "Tags coloridas com nome para cada região, que viram marcadores no prompt",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent mt-0.5">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-txt-secondary leading-relaxed">
          Cada marcação é enviada para a IA como uma máscara, então ela mexe só naquela parte da imagem e deixa
          o resto intacto.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Ajuste a luz e gere</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          O botão <strong className="text-white">Ajustar iluminação</strong> abre um campo para você descrever a
          luz da cena. Por exemplo: luz de Rembrandt, luz natural de dia ou clima noturno. Quando estiver tudo
          pronto, clique para gerar. O resultado aparece na coluna da direita.
        </p>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Depois de gerar você pode baixar, salvar no Drive e usar o botão{" "}
          <strong className="text-white">+3 variações</strong> (bloqueado no Freemium), que mantém o conceito da
          imagem e só refina os detalhes.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/dashboard.jpg" alt="Resultado gerado no modo Avançado de Criar Imagem" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: resultado gerado na coluna da direita. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Imagens criadas e editadas com controle fino, do jeito que você descreveu. Com as referências, o
            prompt, a marcação por máscara e o ajuste de luz, você decide cada detalhe e ainda gera variações
            mantendo o conceito.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Até 8 referências", "Prompt obrigatório", "Marcação com pincel", "Ajuste de iluminação", "Variações que mantêm o conceito"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="modo-manual" />
      <CtaBanner slug="tutoriais/modo-manual" message="Pronto para criar com controle total no modo Avançado?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
