import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar o Mockup Produto | Tutorial Calango Studio",
  description:
    "Crie mockups profissionais do seu produto em cenários realistas sem estúdio. Controle iluminação, ângulo e posição.",
  openGraph: {
    title: "Como Usar o Mockup Produto | Tutorial Calango Studio",
    description: "Mockups profissionais com IA — sem fotógrafo, sem estúdio.",
    url: "https://www.calangostudio.com.br/tutoriais/mockup-produto",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "https://www.calangostudio.com.br/tutoriais/mockup-produto" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Usar o Mockup Produto no Calango Studio",
  description: "Tutorial para criar mockups de produto com IA.",
  step: [
    { "@type": "HowToStep", name: "Enviar fotos do produto", text: "Faça upload das imagens do produto." },
    { "@type": "HowToStep", name: "Configurar cena e iluminação", text: "Escolha cenário, posição, ângulo e cores de luz." },
    { "@type": "HowToStep", name: "Gerar mockup", text: "A IA gera o mockup em cenário realista." },
    { "@type": "HowToStep", name: "Gerar variações", text: "Crie variações com ângulos diferentes." },
  ],
};

const faqs = [
  { question: "Preciso de fotos profissionais do produto?", answer: "Não. Fotos simples tiradas com celular funcionam. A IA reconstrói o produto no cenário selecionado." },
  { question: "Quantas fotos posso enviar?", answer: "Você pode enviar múltiplas fotos do produto para dar mais referência à IA." },
  { question: "Posso personalizar a iluminação?", answer: "Sim. Você controla a cor da luz principal (key light) e da luz de contorno (rim light)." },
  { question: "Os mockups servem para e-commerce?", answer: "Sim. São ideais para e-commerce, catálogos, lançamentos e anúncios." },
];

const relatedPages = [
  { href: "/tutoriais/assets-3d", title: "Assets 3D", description: "Crie elementos e objetos com fundo transparente." },
  { href: "/tutoriais/ugc-build", title: "UGC Build", description: "Pessoas reais usando seu produto." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Imagens cinematográficas com estilos prontos." },
];

export default function MockupProdutoPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/mockup-produto">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar o Mockup Produto
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Crie mockups profissionais do seu produto em cenários realistas. Sem fotógrafo, sem estúdio — apenas IA.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie as Fotos do Produto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload das fotos do seu produto. Adicione nome e descrição para a IA entender melhor.
          Opcionalmente, envie imagens de referência do cenário que você quer.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-upload.jpg" alt="Upload de fotos do produto no Mockup Produto" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: upload de produto e referência de cenário. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Configure Cena e Iluminação</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Personalize como o produto aparecerá:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Cenário", options: "Cozinha, quarto, escritório, outdoor e mais" },
            { label: "Posição", options: "Mesa, mão ou destaque (hero shot)" },
            { label: "Ângulo", options: "Frontal, lateral, inclinado ou detalhe" },
            { label: "Luz principal", options: "Escolha a cor da key light" },
            { label: "Luz de contorno", options: "Escolha a cor da rim light" },
            { label: "Cenário personalizado", options: "Descreva com texto o cenário que quiser" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-config.jpg" alt="Configuração de cena e iluminação" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: configuração de cenário e iluminação. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere o Mockup</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA cria o mockup com o produto inserido no cenário, iluminação e composição profissional.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-resultado.jpg" alt="Mockup de produto gerado com IA" width={800} height={800} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: mockup final do produto. (1:1)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere Variações</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Gere variações com ângulos e posições diferentes. Cada variação mantém a identidade do produto com composições únicas.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Mockups profissionais prontos para e-commerce, catálogos e anúncios.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Cenários realistas", "Iluminação customizável", "Múltiplas variações", "Pronto para e-commerce", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="mockup-produto" />
      <CtaBanner slug="tutoriais/mockup-produto" message="Pronto para criar mockups profissionais?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
