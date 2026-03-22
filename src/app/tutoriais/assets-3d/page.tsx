import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Usar os Assets 3D | Tutorial Calango Studio",
  description:
    "Crie elementos e objetos em PNG com fundo transparente usando IA. Perfeito para artes, apresentações e composições visuais.",
  openGraph: {
    title: "Como Usar os Assets 3D | Tutorial Calango Studio",
    description: "Elementos 3D com fundo transparente, prontos para usar em artes.",
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
  name: "Como Usar os Assets 3D no Calango Studio",
  description: "Tutorial para criar elementos 3D com fundo transparente.",
  step: [
    { "@type": "HowToStep", name: "Descrever o objeto", text: "Digite nome e descrição visual do asset." },
    { "@type": "HowToStep", name: "Escolher material e luz", text: "Selecione material e iluminação." },
    { "@type": "HowToStep", name: "Gerar assets", text: "A IA gera o asset principal + 3 ângulos." },
    { "@type": "HowToStep", name: "Baixar em PNG", text: "Baixe os PNGs com fundo transparente." },
  ],
};

const faqs = [
  { question: "Os assets já vêm com fundo transparente?", answer: "Sim. Todos os assets são gerados em PNG com remoção automática de fundo." },
  { question: "Quais materiais posso escolher?", answer: "Plástico Fosco, Plástico Glossy, Vidro/Cristal, Metal Cromado, Ouro, Neon/Cyber, Argila e Orgânico." },
  { question: "Posso usar referências visuais?", answer: "Sim. Você pode enviar até 4 imagens de referência para guiar a IA." },
  { question: "Quantos ângulos são gerados?", answer: "1 asset principal (frontal) + 3 variações de ângulo (isométrico, lateral e flutuante). Você pode gerar mais 4 por vez." },
];

const relatedPages = [
  { href: "/tutoriais/mockup-produto", title: "Mockup Produto", description: "Coloque seu produto em cenários realistas." },
  { href: "/tutoriais/design-studio", title: "Design Studio", description: "Monte composições usando assets no editor visual." },
  { href: "/tutoriais/imagem-criativa", title: "Imagem Criativa", description: "Imagens cinematográficas com estilos prontos." },
];

const materiais = [
  { name: "Plástico Fosco", icon: "🧱" },
  { name: "Plástico Glossy", icon: "✨" },
  { name: "Vidro/Cristal", icon: "💎" },
  { name: "Metal Cromado", icon: "🪞" },
  { name: "Ouro", icon: "🥇" },
  { name: "Neon/Cyber", icon: "💜" },
  { name: "Argila", icon: "🏺" },
  { name: "Orgânico", icon: "🌿" },
];

export default function Assets3DPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/assets-3d">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Usar os Assets 3D
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        Gere elementos e objetos em PNG com fundo transparente. Qualquer objeto, qualquer material, pronto para usar em artes.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Descreva o Objeto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Digite o nome do asset e uma descrição visual. Opcionalmente, selecione um contexto (produto/cliente)
          para preencher automaticamente ou envie até 4 fotos de referência.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/assets-3d-descricao.jpg" alt="Formulário de descrição do asset 3D" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: formulário de descrição do asset. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha Material e Iluminação</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Selecione o material do seu asset:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {materiais.map((m) => (
            <div key={m.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-3 text-center">
              <span className="text-xl block mb-1">{m.icon}</span>
              <p className="text-xs font-semibold text-white">{m.name}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">E a iluminação:</p>
        <ul className="space-y-1 mb-4">
          {["Estúdio Soft — luz suave e uniforme", "Recorte (Rim) — contorno luminoso", "Cinemático — dramático com sombras", "Luz Natural — realista e orgânico"].map((l) => (
            <li key={l} className="flex items-start gap-2 text-sm text-txt-secondary">
              <span className="text-accent">•</span><span>{l}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/assets-3d-material.jpg" alt="Seleção de material e iluminação" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: seleção de material e iluminação. (16:9)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere os Assets</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA cria 1 asset principal (frontal) + 3 ângulos
          (isométrico, lateral, flutuante), todos com fundo transparente. Gere +4 por vez se quiser mais variações.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/assets-3d-resultado.jpg" alt="Assets 3D gerados com fundo transparente" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: galeria de assets gerados. (16:9)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Baixe em PNG</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Download</strong> para baixar cada asset como PNG com fundo transparente.
          Ou salve direto no Google Drive.
        </p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Elementos 3D em PNG transparente, prontos para usar em artes, apresentações e composições.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Fundo transparente", "8 materiais", "4 ângulos por geração", "PNG pronto para usar", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="assets-3d" />
      <CtaBanner slug="tutoriais/assets-3d" message="Pronto para criar assets 3D incríveis?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
