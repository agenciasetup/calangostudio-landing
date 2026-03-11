import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar a Imagem Criativa | Tutorial Calango Studio",
  description:
    "Aprenda a criar imagens cinematográficas com +10 estilos prontos: Animal, Car, Hero, Business, Classic, Craft e mais. Sem prompt complexo.",
  openGraph: {
    title: "Como Usar a Imagem Criativa | Tutorial Calango Studio",
    description:
      "Crie imagens cinematográficas com estilos prontos em poucos segundos.",
    url: "https://www.calangostudio.com.br/tutoriais/imagem-criativa",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/tutoriais/imagem-criativa",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar a Imagem Criativa no Calango Studio",
  description:
    "Tutorial passo a passo para criar imagens cinematográficas com a função Imagem Criativa.",
  step: [
    { "@type": "HowToStep", name: "Escolher modo criativo", text: "Selecione entre 7 modos: Animal, Car, Hero, Business, Custom, Craft ou Classic." },
    { "@type": "HowToStep", name: "Configurar estilo", text: "Defina sub-estilo, iluminação, cenário e intensidade mágica." },
    { "@type": "HowToStep", name: "Adicionar referências", text: "Envie fotos de referência opcionais para guiar a IA." },
    { "@type": "HowToStep", name: "Gerar imagem", text: "Clique em gerar e receba sua imagem cinematográfica." },
  ],
};

const faqs = [
  { question: "Preciso saber escrever prompts?", answer: "Não. A Imagem Criativa tem estilos prontos. Você só escolhe o modo, configura as opções e gera." },
  { question: "Qual a diferença entre os modos?", answer: "Cada modo tem opções específicas. Animal foca em estilos de fauna, Car em veículos, Hero em personagens heroicos, Business em fotos corporativas, Classic em arte clássica, Craft em estilo Minecraft e Custom é livre." },
  { question: "Posso gerar em 4K?", answer: "Sim. Você pode escolher entre 1K, 2K e 4K de resolução." },
  { question: "A imagem é salva automaticamente?", answer: "Sim, se você conectou o Google Drive. Caso contrário, basta clicar em Download." },
];

const relatedPages = [
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Gere fotos realistas com seu rosto." },
  { href: "/tutoriais/criacao-livre", title: "Criação Livre", description: "Para quem quer liberdade total na criação." },
  { href: "/tutoriais/modo-manual", title: "Modo Manual", description: "Controle total com múltiplas referências." },
];

const modos = [
  { name: "Animal", desc: "Fauna cinematográfica com 8 sub-estilos", icon: "🦁" },
  { name: "Car", desc: "Veículos em ação com ângulos e cenários", icon: "🏎️" },
  { name: "Hero", desc: "Personagens heroicos estilo blockbuster", icon: "🦸" },
  { name: "Business", desc: "Fotos corporativas profissionais", icon: "💼" },
  { name: "Custom", desc: "Prompt livre — você descreve o que quiser", icon: "✏️" },
  { name: "Craft", desc: "Estilo Minecraft mixed-media criativo", icon: "⛏️" },
  { name: "Classic", desc: "Arte clássica: Romano, Grego, Michelangelo...", icon: "🏛️" },
];

export default function ImagemCriativaPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/imagem-criativa">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar a Imagem Criativa
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        A Imagem Criativa gera imagens cinematográficas com estilos prontos.
        Escolha um modo, configure as opções e gere — sem precisar escrever prompts complexos.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o Modo Criativo</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Na tela inicial da ferramenta, você verá 7 modos. Cada um é otimizado para um tipo de imagem:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {modos.map((m) => (
            <div key={m.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{m.icon}</span>
              <p className="text-sm font-semibold text-white">{m.name}</p>
              <p className="text-xs text-txt-muted mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-modos.jpg" alt="Dashboard de seleção de modos da Imagem Criativa" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: dashboard com os 7 modos criativos. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure o Estilo</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Cada modo tem opções específicas. Exemplo no modo <strong className="text-white">Animal</strong>:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Sub-estilo", options: "Mágico, Realismo Cinematográfico, Fantasia, Épico, Sombrio..." },
            { label: "Iluminação", options: "Noite, Fim de Tarde, Dia, Luz dramática, Luz cinematográfica" },
            { label: "Cenário", options: "Natureza, Caverna, Oceano, Vulcão, Floresta, Deserto..." },
            { label: "Intensidade mágica", options: "Baixo, Médio, Alto" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-config.jpg" alt="Tela de configuração de estilo no modo Animal" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de estilo no modo Animal. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Adicione Referências (Opcional)</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Envie fotos de referência para guiar a IA. Isso é opcional, mas ajuda a gerar resultados mais específicos.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-referencias.jpg" alt="Upload de imagens de referência" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: área de upload de referências. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere sua Imagem</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. Em poucos segundos, sua imagem cinematográfica estará pronta.
          Você pode escolher a resolução (1K, 2K ou 4K) e gerar variações.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/imagem-criativa-resultado.jpg" alt="Imagem cinematográfica gerada no modo Animal" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: resultado gerado no modo Animal. (1:1)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Imagens cinematográficas prontas para usar em posts, artes e campanhas. Sem conhecimento técnico.
          </p>
          <div className="flex flex-wrap gap-2">
            {["7 modos criativos", "Até 4K de resolução", "Sem escrever prompt", "Variações ilimitadas", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa" />
      <CtaBanner slug="tutoriais/imagem-criativa" message="Pronto para criar imagens cinematográficas?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
