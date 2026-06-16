import { Metadata } from "next";
import Image from "next/image";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "Como Fazer Fotos de Produto | Tutorial Calango Studio",
  description:
    "Crie fotos comerciais só do seu produto, sem pessoas. Envie até 4 fotos reais, escolha o tipo de foto, o ângulo e a luz, e gere uma sessão completa em 4K.",
  openGraph: {
    title: "Como Fazer Fotos de Produto | Tutorial Calango Studio",
    description: "Fotos comerciais do seu produto com IA, fiéis ao rótulo e em alta qualidade.",
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
  name: "Como Fazer Fotos de Produto no Calango Studio",
  description: "Tutorial para gerar fotos comerciais só do produto usando IA.",
  step: [
    { "@type": "HowToStep", name: "Abrir a Sessão de Fotos", text: "Entre em Sessão de Fotos e escolha o estilo Produto." },
    { "@type": "HowToStep", name: "Enviar as fotos do produto", text: "Faça upload de até 4 fotos reais e use o botão Ler produto com IA." },
    { "@type": "HowToStep", name: "Escolher tipo, ângulo e luz", text: "Defina o tipo de foto, o ângulo, a iluminação e o cenário." },
    { "@type": "HowToStep", name: "Gerar e criar a sessão completa", text: "Gere a foto principal e peça mais ângulos do mesmo produto." },
  ],
};

const faqs = [
  { question: "Onde fica a Foto de Produto?", answer: "Ela é um dos três estilos da Sessão de Fotos. Ao abrir, você escolhe na barrinha do topo entre Estúdio (pessoas), UGC (pessoa com produto) e Produto. Para fotos só do produto, sem pessoas, escolha o estilo Produto." },
  { question: "Para que serve o botão Ler produto com IA?", answer: "Ele lê o rótulo das fotos que você enviou e ancora os textos da embalagem. Assim os nomes, números e dizeres saem fiéis na imagem final, sem inventar palavras." },
  { question: "As cores da marca pintam o meu produto?", answer: "Não. As cores da marca entram só na cena (no Fundo, que é o padrão, nos Objetos de cena ou na Luz de recorte). O produto nunca é recolorido, ele continua igual ao que você enviou." },
  { question: "Quantas fotos consigo gerar?", answer: "A sessão gera 1 foto principal. Depois, o botão Gerar mais fotos da sessão cria mais 4 ângulos do mesmo produto, sem efeito de foto repetida. Aqui as variações não têm bloqueio de plano." },
  { question: "Em qual qualidade as fotos saem?", answer: "A Foto de Produto já começa em 4K, então as imagens saem nítidas e prontas para anúncios, catálogo e e-commerce. Tudo vai para a Galeria automaticamente e dá para salvar no Drive." },
];

const relatedPages = [
  { href: "/tutoriais/ugc-build", title: "UGC Build", description: "Fotos de pessoas usando os seus produtos." },
  { href: "/tutoriais/estudio-de-foto", title: "Estúdio de Foto", description: "Fotos profissionais com o seu rosto preservado." },
  { href: "/tutoriais/meus-clientes", title: "Meus Clientes", description: "Organize as marcas e os produtos dos seus clientes." },
];

const tiposDeFoto = [
  { name: "Hero / Destaque", desc: "Produto como a estrela, para anúncios", icon: "⭐" },
  { name: "Lifestyle / Contexto", desc: "Produto em uso no dia a dia", icon: "🏡" },
  { name: "E-commerce / Catálogo", desc: "Fundo limpo, produto inteiro e nítido", icon: "🛒" },
  { name: "Detalhe / Macro", desc: "Close nas texturas do produto", icon: "🔍" },
  { name: "Criativa", desc: "Splash, levitação e flat lay", icon: "✨" },
];

export default function MockupProdutoPage() {
  return (
    <SeoLayout schema={schema} slug="tutoriais/mockup-produto">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como Fazer Fotos de Produto
      </h1>
      <p className="text-txt-secondary leading-relaxed mb-10">
        A Foto de Produto cria imagens comerciais só do seu produto, sem pessoas na cena. Você envia fotos
        reais, a IA lê o rótulo para manter tudo fiel e você escolhe o tipo de foto, o ângulo e a luz. No fim,
        dá para gerar uma sessão inteira com vários ângulos do mesmo produto.
      </p>

      {/* STEP 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">1</span>
          <h2 className="text-xl font-poppins font-bold text-white">Abra a Sessão de Fotos e escolha o Produto</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          No menu lateral, clique em <strong className="text-white">Sessão de Fotos</strong>. No topo da tela
          aparece uma barrinha com três estilos: <strong className="text-white">Estúdio</strong>,{" "}
          <strong className="text-white">UGC</strong> e <strong className="text-white">Produto</strong>. Para
          fotografar só o produto, sem pessoas, escolha o <strong className="text-white">Produto</strong>.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto.jpg" alt="Tela inicial da Foto de Produto na Sessão de Fotos" width={800} height={450} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: barra de estilos da Sessão de Fotos com o Produto selecionado. (16:9)</p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">2</span>
          <h2 className="text-xl font-poppins font-bold text-white">Envie as fotos do produto e use o Ler produto com IA</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Faça upload de até <strong className="text-white">4 fotos reais</strong> do produto. Essas imagens são
          o que a IA usa para manter o formato, a embalagem e o rótulo fiéis.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Botão Ler produto com IA</p>
          <p className="text-sm text-txt-secondary">
            Clique nele depois de enviar as fotos. A IA lê o rótulo e ancora os textos da embalagem, para os
            nomes e os dizeres saírem certos na imagem final.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-upload.jpg" alt="Upload de fotos do produto com o botão Ler produto com IA" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: área de envio das fotos do produto. (4:5)</p>
      </section>

      {/* STEP 3 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">3</span>
          <h2 className="text-xl font-poppins font-bold text-white">Escolha o tipo de foto, o ângulo, a luz e o cenário</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Comece pelo <strong className="text-white">tipo de foto</strong>. São 5 opções, e você escolhe uma:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {tiposDeFoto.map((t) => (
            <div key={t.name} className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{t.icon}</span>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-txt-muted mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">Depois, ajuste o resto da cena:</p>
        <ul className="space-y-2 mb-4">
          {[
            { label: "Ângulo", options: "Frontal, 45 graus (padrão), Heroico (de baixo), Topo (flat lay) e Macro." },
            { label: "Iluminação", options: "Estúdio (padrão), Dramática, Natural e Neon." },
            { label: "Cenário", options: "Aparecem sugestões em pílulas conforme o nicho do cliente, e tem um campo livre para você escrever o cenário." },
            { label: "Cores da marca", options: "A IA aplica as cores da marca na cena: no Fundo (padrão), nos Objetos de cena ou na Luz de recorte. As cores entram só na cena, nunca recolorem o produto." },
            { label: "Detalhes extras", options: "Um campo para pedir coisas como gelo, vapor, gotas e props." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-txt-secondary">
              <span className="text-accent font-bold text-sm shrink-0">•</span>
              <span className="text-sm"><strong className="text-white">{item.label}:</strong> {item.options}</span>
            </li>
          ))}
        </ul>
        <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-white mb-2">No topo da tela você ainda define:</p>
          <ul className="space-y-1">
            {["Modelo de IA", "Formato: Feed 4:5, Banner 16:9 ou Story 9:16", "Qualidade, que aqui já começa em 4K"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-txt-secondary">
                <span className="text-accent">✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-config.jpg" alt="Configuração da Foto de Produto com tipo de foto, ângulo e luz" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: tela de configuração da Foto de Produto. (4:5)</p>
      </section>

      {/* STEP 4 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-lg">4</span>
          <h2 className="text-xl font-poppins font-bold text-white">Gere a foto e crie a sessão completa</h2>
        </div>
        <p className="text-txt-secondary leading-relaxed mb-4">
          Clique em <strong className="text-white">Gerar</strong>. A IA cria a{" "}
          <strong className="text-white">foto principal</strong> do produto. Depois dela, o botão{" "}
          <strong className="text-white">Gerar mais fotos da sessão</strong> cria mais 4 ângulos do mesmo
          produto, sem aquele efeito de foto repetida.
        </p>
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-4 mb-4">
          <p className="text-sm text-accent font-semibold mb-1">Sem bloqueio de plano</p>
          <p className="text-sm text-txt-secondary">
            Na Foto de Produto, as variações não têm bloqueio de plano. Tudo vai para a Galeria
            automaticamente, e você ainda pode salvar no Drive.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/[0.06] mb-4">
          <Image src="/images/funcoes/mockup-produto-resultado.jpg" alt="Galeria com as fotos de produto geradas" width={800} height={500} className="w-full h-auto" />
        </div>
        <p className="text-xs text-txt-muted">Imagem: galeria de resultados da sessão de produto. (16:9)</p>
      </section>

      {/* RESULTADO */}
      <section className="mb-10">
        <div className="bg-bg-tertiary border border-accent/20 rounded-xl p-6">
          <h2 className="text-xl font-poppins font-bold text-white mb-3">Resultado</h2>
          <p className="text-txt-secondary leading-relaxed mb-4">
            Fotos comerciais do seu produto em 4K, fiéis ao rótulo e prontas para anúncios, catálogo e
            e-commerce. Você ainda pode salvar no Drive, mandar para a Galeria ou colocar a sessão à venda na
            Loja.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Só o produto, sem pessoas", "Rótulo fiel com Ler produto", "5 tipos de foto", "Sessão com vários ângulos", "Qualidade 4K", "Salvar no Drive"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">✓ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="mockup-produto" />
      <CtaBanner slug="tutoriais/mockup-produto" message="Pronto para criar as fotos do seu produto?" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
