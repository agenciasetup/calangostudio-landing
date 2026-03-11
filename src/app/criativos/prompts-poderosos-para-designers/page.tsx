import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title: "25 Prompts Poderosos para Designers: Posts, Anúncios e Imagens com IA | Calango Studio",
  description: "Descubra 25 prompts poderosos que designers profissionais usam para criar posts, anúncios e imagens com IA. Exemplos prontos para usar com dicas de customização.",
  openGraph: {
    title: "25 Prompts Poderosos para Designers: Posts, Anúncios e Imagens com IA | Calango Studio",
    description: "Descubra 25 prompts poderosos que designers profissionais usam para criar posts, anúncios e imagens com IA. Exemplos prontos para usar com dicas de customização.",
    url: "https://www.calangostudio.com.br/criativos/prompts-poderosos-para-designers",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.calangostudio.com.br/criativos/prompts-poderosos-para-designers",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "25 Prompts Poderosos que Designers Usam para Criar Posts, Anúncios e Imagens com IA",
      description: "Guia completo com 25 prompts profissionais para designers criarem posts, anúncios e imagens com inteligência artificial.",
      author: {
        "@type": "Organization",
        name: "Calango Studio",
        url: "https://www.calangostudio.com.br",
      },
      publisher: {
        "@type": "Organization",
        name: "Calango Studio",
        url: "https://www.calangostudio.com.br",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.calangostudio.com.br/criativos/prompts-poderosos-para-designers",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é prompt engineering para designers?",
          acceptedAnswer: { "@type": "Answer", text: "Prompt engineering para designers é a habilidade de escrever instruções precisas para ferramentas de IA generativa, controlando estilo visual, composição, iluminação, mood e detalhes técnicos para obter resultados profissionais consistentes." },
        },
        {
          "@type": "Question",
          name: "Qual o tamanho ideal de um prompt para gerar imagens com IA?",
          acceptedAnswer: { "@type": "Answer", text: "O tamanho ideal varia entre 30 e 150 palavras. Prompts muito curtos geram resultados genéricos, enquanto prompts muito longos podem confundir a IA. O segredo é ser específico nos elementos que importam: sujeito, estilo, iluminação, composição e mood." },
        },
        {
          "@type": "Question",
          name: "Posso usar os mesmos prompts em diferentes ferramentas de IA?",
          acceptedAnswer: { "@type": "Answer", text: "Sim, a estrutura dos prompts é transferível entre ferramentas como Midjourney, DALL-E, Stable Diffusion e Calango Studio. Cada ferramenta pode interpretar ligeiramente diferente, mas a lógica de construção do prompt é universal." },
        },
        {
          "@type": "Question",
          name: "Como adaptar um prompt para manter a identidade visual de uma marca?",
          acceptedAnswer: { "@type": "Answer", text: "Inclua no prompt as cores da marca (em hexadecimal ou nome), o estilo visual desejado (minimalista, bold, corporate), e referências consistentes. No Calango Studio, o briefing do cliente fica salvo e a IA aplica automaticamente esses parâmetros." },
        },
        {
          "@type": "Question",
          name: "Preciso saber inglês para escrever bons prompts?",
          acceptedAnswer: { "@type": "Answer", text: "Depende da ferramenta. Muitas IAs ainda performam melhor com prompts em inglês, mas ferramentas como o Calango Studio aceitam prompts em português e traduzem internamente. Saber termos técnicos em inglês (como golden hour, flat lay, bokeh) ajuda em qualquer caso." },
        },
        {
          "@type": "Question",
          name: "Com que frequência devo atualizar meus prompts?",
          acceptedAnswer: { "@type": "Answer", text: "Recomenda-se revisar e atualizar sua biblioteca de prompts a cada 2-3 meses. As ferramentas de IA evoluem rapidamente e novos parâmetros e capacidades surgem com frequência. Manter prompts atualizados garante que você aproveite ao máximo cada versão da IA." },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O que é prompt engineering para designers?",
    answer: "Prompt engineering para designers é a habilidade de escrever instruções precisas para ferramentas de IA generativa, controlando estilo visual, composição, iluminação, mood e detalhes técnicos para obter resultados profissionais consistentes. Não se trata de saber programar, mas de entender como descrever visualmente o que você quer de forma que a IA consiga reproduzir com qualidade.",
  },
  {
    question: "Qual o tamanho ideal de um prompt para gerar imagens com IA?",
    answer: "O tamanho ideal varia entre 30 e 150 palavras. Prompts muito curtos geram resultados genéricos, enquanto prompts muito longos podem confundir a IA. O segredo é ser específico nos elementos que importam: sujeito, estilo, iluminação, composição e mood. Comece com o essencial e adicione detalhes progressivamente até alcançar o resultado desejado.",
  },
  {
    question: "Posso usar os mesmos prompts em diferentes ferramentas de IA?",
    answer: "Sim, a estrutura dos prompts é transferível entre ferramentas como Midjourney, DALL-E, Stable Diffusion e Calango Studio. Cada ferramenta pode interpretar ligeiramente diferente, mas a lógica de construção do prompt é universal. Adapte parâmetros técnicos específicos de cada plataforma conforme necessário.",
  },
  {
    question: "Como adaptar um prompt para manter a identidade visual de uma marca?",
    answer: "Inclua no prompt as cores da marca (em hexadecimal ou nome), o estilo visual desejado (minimalista, bold, corporate), e referências consistentes. No Calango Studio, o briefing do cliente fica salvo e a IA aplica automaticamente esses parâmetros, garantindo consistência visual em todos os criativos gerados.",
  },
  {
    question: "Preciso saber inglês para escrever bons prompts?",
    answer: "Depende da ferramenta. Muitas IAs ainda performam melhor com prompts em inglês, mas ferramentas como o Calango Studio aceitam prompts em português e traduzem internamente. Saber termos técnicos em inglês (como golden hour, flat lay, bokeh) ajuda em qualquer caso e amplia seu repertório de resultados.",
  },
  {
    question: "Com que frequência devo atualizar meus prompts?",
    answer: "Recomenda-se revisar e atualizar sua biblioteca de prompts a cada 2-3 meses. As ferramentas de IA evoluem rapidamente e novos parâmetros e capacidades surgem com frequência. Manter prompts atualizados garante que você aproveite ao máximo cada versão da IA e acompanhe as tendências visuais do mercado.",
  },
];

const relatedPages = [
  { href: "/criativos/como-criar-criativos-com-ia", title: "Como Criar Criativos com IA", description: "Guia para criar criativos profissionais com inteligência artificial." },
  { href: "/criativos/criativos-para-facebook-ads", title: "Criativos para Facebook Ads", description: "Como criar criativos para Facebook Ads e Instagram Ads com IA." },
  { href: "/guias/como-gerar-imagens-com-ia", title: "Como Gerar Imagens com IA", description: "Guia completo sobre geração de imagens com IA." },
];

export default function PromptsPoderososParaDesignersPage() {
  return (
    <SeoLayout schema={schema} slug="criativos/prompts-poderosos-para-designers">
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        25 Prompts Poderosos que Designers Usam para Criar Posts, Anúncios e Imagens com IA
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O mercado de design mudou. Ferramentas de inteligência artificial generativa se tornaram parte do
        toolkit profissional de designers, social media managers e diretores de arte. Mas existe uma
        diferença enorme entre digitar uma frase genérica numa ferramenta de IA e escrever um prompt
        que realmente gera resultados publicáveis. Essa diferença tem nome: <strong className="text-white">prompt engineering</strong>.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Prompt engineering para designers não é sobre programação ou linguagem técnica. É sobre
        saber descrever visualmente o que você quer com precisão suficiente para que a IA entregue
        algo utilizável. É traduzir um briefing criativo em instruções que a máquina compreende.
        Cor, composição, iluminação, estilo, mood, formato, resolução. cada detalhe importa.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Neste guia, reunimos <strong className="text-white">25 prompts poderosos para designers</strong> que
        cobrem os cenários mais comuns da rotina criativa: posts para Instagram, anúncios para
        tráfego pago, thumbnails, imagens de produto, identidade visual, stories e banners para
        e-commerce. Cada prompt foi construído com uma estrutura profissional que você pode adaptar
        para seus clientes e projetos. Seis deles recebem tratamento completo, com o texto do prompt,
        explicação de por que funciona e dicas de customização.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Se você trabalha com criação de conteúdo visual, seja como freelancer, em agência ou como
        social media, este artigo vai se tornar sua referência para <strong className="text-white">AI prompts para design</strong>.
        Salve, compartilhe e use como ponto de partida para construir sua própria biblioteca de
        prompts para criativos.
      </p>

      {/* ==================== SEÇÃO: ANATOMIA DE UM BOM PROMPT ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        A anatomia de um bom prompt para design
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Antes de mergulhar nos 25 prompts, é fundamental entender a estrutura que faz um prompt
        funcionar. Pense no prompt como um briefing compactado. Quanto mais preciso for o briefing,
        melhor o resultado. Um bom prompt para geração de imagens profissionais inclui seis elementos-chave:
      </p>

      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li>
          <strong className="text-white">Sujeito principal</strong> — O que aparece na imagem? Uma pessoa, um produto, um cenário, um objeto? Seja específico. Em vez de &quot;uma mulher&quot;, diga &quot;uma mulher jovem, cabelo cacheado, vestindo blazer azul-marinho, sorrindo naturalmente&quot;.
        </li>
        <li>
          <strong className="text-white">Estilo visual</strong> — Qual a linguagem estética? Minimalista, editorial, fotorrealista, ilustração flat, 3D render, aquarela, cinematográfico? O estilo define a interpretação da IA sobre todo o resto.
        </li>
        <li>
          <strong className="text-white">Iluminação</strong> — Golden hour, luz de estúdio suave, rim light, neon, luz natural difusa? A iluminação sozinha pode transformar completamente o mood de uma imagem.
        </li>
        <li>
          <strong className="text-white">Composição</strong> — Flat lay, close-up, wide angle, regra dos terços, simetria central, vista aérea? Defina como os elementos se organizam no espaço.
        </li>
        <li>
          <strong className="text-white">Mood e atmosfera</strong> — Profissional e corporativo, jovem e vibrante, sofisticado e luxuoso, acolhedor e caloroso? O mood guia as escolhas de cor e tom.
        </li>
        <li>
          <strong className="text-white">Especificações técnicas</strong> — Proporção (16:9, 1:1, 9:16), resolução, profundidade de campo, tipo de lente simulada. Esses detalhes fazem a diferença entre uma imagem amadora e uma profissional.
        </li>
      </ol>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Quando você combina esses seis elementos, o resultado é um prompt que funciona como um
        briefing visual completo. A IA não precisa adivinhar o que você quer. ela recebe
        instruções claras e entrega resultados consistentes. Agora vamos aos prompts.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA POSTS DE INSTAGRAM ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para posts de Instagram
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O Instagram é o campo de batalha visual mais disputado do marketing digital. Posts que
        param o scroll precisam de imagens impactantes, bem compostas e alinhadas com a identidade
        da marca. Os prompts abaixo são voltados para os formatos mais usados no feed.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 1 — Post de produto lifestyle
      </h3>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Fotografia editorial de um frasco de perfume artesanal sobre uma mesa de madeira rústica,
          rodeado por ramos de lavanda fresca e gotas de orvalho. Luz natural suave entrando por
          uma janela lateral, criando sombras delicadas. Paleta de cores em tons terrosos e lilás.
          Composição flat lay levemente angulada, profundidade de campo rasa com bokeh suave ao
          fundo. Estilo clean e sofisticado, formato quadrado 1:1, resolução alta para Instagram feed.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Por que funciona:</strong> Este prompt combina todos os seis
        elementos da estrutura profissional. O sujeito é claro (frasco de perfume), o estilo é definido
        (editorial/clean), a iluminação é específica (luz natural lateral), a composição tem direção
        (flat lay angulada), o mood está presente (sofisticado) e as specs técnicas estão inclusas
        (1:1, alta resolução, bokeh).
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas de customização:</strong> Troque o produto pelo do seu
        cliente. Ajuste a paleta de cores para as cores da marca. Substitua os elementos de cenário
        (lavanda, madeira) por objetos que façam sentido para o nicho. Para um produto tech, por
        exemplo, use &quot;superfície de concreto polido, com reflexos metálicos e iluminação de estúdio LED&quot;.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 2 — Carrossel educativo com visual impactante
      </h3>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Imagem de fundo abstrata para slide de carrossel educativo no Instagram. Gradiente suave
          de azul-escuro para roxo profundo, com formas geométricas fluidas e translúcidas flutuando
          no espaço. Textura sutil de ruído granulado. Estilo moderno e tech, com espaço vazio
          generoso no centro para sobreposição de texto. Formato 1:1, alta resolução, visual
          premium e contemporâneo.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Por que funciona:</strong> Carrosséis educativos precisam de
        fundos que suportem texto sem competir com ele. Este prompt pede explicitamente &quot;espaço
        vazio generoso no centro&quot;, que é uma instrução de composição crucial. O gradiente e as
        formas geométricas criam interesse visual sem poluir. O ruído granulado adiciona textura e
        evita o look artificial de gradientes limpos demais.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas de customização:</strong> Mude as cores do gradiente
        para as cores da marca do cliente. Para nichos de saúde, troque para tons de verde e branco.
        Para finanças, use azul-marinho e dourado. Adicione ou remova o ruído granulado conforme o
        estilo da marca.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 3 — Post de citação/frase motivacional
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Cenário fotográfico minimalista com parede de textura de cimento queimado em tom cinza médio.
        Iluminação de estúdio com um ponto de luz quente vindo do canto superior esquerdo, criando
        um degradê natural na parede. Uma planta monstera delicata parcialmente visível no canto
        inferior direito. Área central limpa e livre para composição de texto. Formato 1:1, estilo
        editorial contemporâneo.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 4 — Reels cover / post de bastidores
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Fotografia espontânea de um espaço de trabalho criativo: mesa com laptop aberto, caderno
        de esboços, canetas coloridas espalhadas e uma xícara de café. Vista de cima (flat lay),
        iluminação natural vinda de uma janela grande. Tons quentes e acolhedores, estilo lifestyle
        autêntico. Leve desfoque nos cantos, foco no centro. Formato 1:1, visual orgânico e
        convidativo para conteúdo de bastidores.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA CRIATIVOS PUBLICITÁRIOS ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para criativos publicitários
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Criativos para anúncios têm um objetivo direto: parar o scroll e gerar clique. O visual
        precisa ser impactante, a mensagem precisa ser clara e a composição precisa guiar o olhar
        para a ação desejada. Estes prompts são otimizados para Facebook Ads, Instagram Ads e
        campanhas de tráfego pago em geral.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 5 — Anúncio de oferta/promoção
      </h3>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Composição visual para anúncio de promoção de e-commerce. Fundo vibrante em gradiente de
          coral para laranja-queimado, com explosão de confetes dourados e partículas brilhantes.
          Espaço central amplo para headline e badge de desconto. Cantos com elementos decorativos
          geométricos (triângulos e círculos) em branco semi-transparente. Formato 1:1, estilo
          energético e urgente, visual premium com sensação de celebração e oportunidade. Alta
          resolução, cores saturadas, contraste forte.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Por que funciona:</strong> Anúncios de promoção precisam
        transmitir urgência e energia. Este prompt usa cores quentes e saturadas (coral, laranja),
        elementos de celebração (confetes dourados) e pede explicitamente &quot;sensação de urgência&quot;.
        O espaço central para headline é essencial porque o texto da oferta é o protagonista.
        Os elementos geométricos semi-transparentes adicionam dinamismo sem poluir.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas de customização:</strong> Para marcas de luxo, troque
        o gradiente vibrante por fundo preto com acentos dourados. Para marcas jovens, adicione
        texturas de glitch ou elementos neon. Ajuste as cores do gradiente para a paleta da marca.
        Troque &quot;confetes&quot; por &quot;partículas de luz&quot; para algo mais sóbrio.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 6 — Anúncio de serviço profissional (B2B)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fotografia corporativa de um ambiente de escritório moderno e luminoso, com profissional
        confiante em primeiro plano olhando diretamente para a câmera. Fundo levemente desfocado
        mostrando equipe trabalhando em espaço open office. Iluminação de estúdio suave e natural,
        tons de azul, branco e cinza claro. Composição com regra dos terços, sujeito posicionado
        à esquerda com espaço à direita para sobreposição de texto. Formato 1200x628px para
        Facebook Ads, estilo profissional e confiável.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 7 — Anúncio de app ou produto digital
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Mockup 3D de smartphone flutuando em ângulo de três quartos sobre fundo gradiente de azul
        elétrico para púrpura. Tela do smartphone brilhando com interface UI simplificada. Raios de
        luz suaves emanando da tela. Partículas de dados e ícones minimalistas flutuando ao redor.
        Sombra projetada suave embaixo. Estilo tech futurista e clean, formato 1:1 para Instagram
        Ads, resolução 4K, visual de lançamento de produto.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 8 — Anúncio de curso online / infoproduto
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Composição visual split-screen: lado esquerdo mostrando pessoa frustrada em mesa bagunçada
        com papéis e tela cheia de planilhas (tons frios, dessaturados, iluminação cinza); lado
        direito mostrando a mesma pessoa relaxada, confiante, com dashboard organizado na tela e
        ambiente limpo (tons quentes, iluminação dourada, cores vibrantes). Divisão diagonal
        dinâmica entre os dois lados. Formato 1200x628 para Facebook Ads. Visual de transformação
        antes e depois, estilo editorial moderno.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA THUMBNAILS ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para thumbnails
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Thumbnails são a porta de entrada do conteúdo em vídeo. No YouTube, um bom thumbnail pode
        dobrar a taxa de clique. No Reels e TikTok, a imagem de capa determina se o vídeo será
        assistido na aba de perfil. Prompts para thumbnails precisam priorizar impacto visual,
        expressão facial forte e contraste de cores.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 9 — Thumbnail YouTube estilo reaction
      </h3>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Retrato close-up de pessoa com expressão de surpresa genuína, boca aberta e olhos
          arregalados. Fundo em amarelo vibrante e saturado, completamente liso e sem textura.
          Iluminação de estúdio frontal potente, sem sombras duras no rosto. Contorno de rim light
          branco separando o sujeito do fundo. Estilo fotográfico hiper-nítido, cores pop e
          saturadas. Formato 16:9 landscape, resolução 1920x1080, visual de thumbnail YouTube
          de alto CTR. Espaço à direita do sujeito para texto grande.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Por que funciona:</strong> Thumbnails de YouTube com alto CTR
        seguem um padrão: rosto com expressão forte, fundo de cor sólida vibrante e espaço para
        texto. Este prompt captura exatamente essa fórmula. O rim light separa visualmente o sujeito
        do fundo (técnica clássica de estúdio). O fundo amarelo é estatisticamente uma das cores de
        melhor performance em thumbnails. A instrução de &quot;espaço à direita&quot; garante que o texto
        não cubra o rosto.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas de customização:</strong> Troque a expressão conforme o
        conteúdo: &quot;surpresa&quot; para revelações, &quot;concentração séria&quot; para tutoriais, &quot;sorriso largo&quot;
        para conteúdo positivo. Mude a cor do fundo para criar identidade de série (vermelho para
        urgência, verde para dinheiro, azul para tech). Adicione &quot;com óculos&quot; ou &quot;com barba&quot; para
        personalizar o sujeito.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 10 — Thumbnail de tutorial / how-to
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Composição visual com mão segurando ferramenta ou objeto relevante em primeiro plano (foco
        nítido), fundo desfocado em tom escuro com pontos de luz bokeh coloridos. Ângulo de câmera
        levemente de baixo para cima, transmitindo autoridade. Iluminação lateral dramática com
        contraste forte. Formato 16:9, estilo cinematográfico com color grading em tons teal e
        laranja. Resolução alta, visual profissional de canal tech/tutorial.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA IMAGENS DE PRODUTO ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para imagens de produto
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fotos de produto são a base do e-commerce e do catálogo visual de qualquer marca.
        Com IA, é possível gerar imagens de produto em contextos variados sem precisar de estúdio
        fotográfico, cenários físicos ou sessões de fotos caras. Os prompts abaixo cobrem os
        principais estilos de fotografia de produto.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 11 — Produto em fundo clean (packshot)
      </h3>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Fotografia de produto em estúdio: tênis esportivo branco e cinza posicionado em ângulo
          de três quartos sobre superfície branca infinita (fundo seamless). Iluminação de estúdio
          com três pontos: key light suave à direita, fill light sutil à esquerda e backlight
          criando contorno. Sombra de contato realista e sutil embaixo do produto. Estilo
          packshot profissional de e-commerce, cores fiéis ao produto, nitidez extrema. Formato
          1:1 para catálogo online, resolução ultra-alta, sem distorção de lente.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Por que funciona:</strong> Este prompt simula o setup de um
        estúdio fotográfico profissional. A menção específica de &quot;três pontos de luz&quot; (key, fill,
        backlight) orienta a IA para reproduzir a iluminação padrão de fotografia de produto.
        &quot;Fundo seamless branco&quot; é o padrão para e-commerce. &quot;Sombra de contato realista&quot; evita
        que o produto pareça flutuar. A especificação de &quot;sem distorção de lente&quot; mantém as
        proporções do produto fiéis.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas de customização:</strong> Substitua &quot;tênis esportivo
        branco e cinza&quot; pelo produto do seu cliente. Para produtos alimentícios, adicione &quot;com
        gotas de condensação&quot; ou &quot;vapor subindo sutilmente&quot;. Para joias, especifique &quot;macro
        photography, reflexos de luz nas facetas&quot;. Mude para &quot;fundo cinza 18%&quot; para um look
        mais editorial.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 12 — Produto em contexto lifestyle
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Garrafa de vinho tinto em cena de jantar intimista ao ar livre durante golden hour.
        Mesa rústica de madeira com taças, uvas, queijo e velas acesas. Vegetação verde
        desfocada ao fundo. Iluminação de golden hour com tons quentes e dourados. Profundidade
        de campo rasa, foco na garrafa com bokeh no ambiente. Estilo fotografia editorial de
        gastronomia, formato vertical 4:5 para Instagram, atmosfera romântica e sofisticada.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA IDENTIDADE VISUAL ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para identidade visual e branding
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Criar elementos visuais para identidade de marca é um dos usos mais estratégicos da IA no
        design. Desde texturas e padrões até mockups e avatares, os prompts abaixo ajudam a gerar
        assets visuais que reforçam o posicionamento da marca.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 13 — Padrão visual para marca (brand pattern)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Padrão geométrico minimalista e repetitivo (seamless tileable pattern) usando apenas duas
        cores: azul-petróleo (#1A5276) e dourado claro (#D4AC0D) sobre fundo branco. Formas
        abstratas inspiradas em folhas tropicais estilizadas. Linhas finas e elegantes, espaçamento
        generoso entre elementos. Estilo sofisticado e contemporâneo. Formato quadrado, resolução
        alta, pronto para aplicação em papelaria, embalagens e redes sociais.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 14 — Mockup de cartão de visita
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Mockup fotorrealista de dois cartões de visita sobre superfície de mármore branco com veios
        dourados. Um cartão deitado e outro apoiado em ângulo. Iluminação natural suave de janela
        lateral. Sombras delicadas e realistas. Cartões com acabamento fosco premium. Ramo de
        eucalipto seco posicionado sutilmente no canto. Estilo editorial de branding, formato
        landscape, profundidade de campo rasa, visual de portfólio de design.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 15 — Avatar corporativo / foto de perfil
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Retrato profissional headshot de executivo(a) com sorriso sutil e confiante. Fundo em
        gradiente suave de cinza-azulado. Iluminação de estúdio tipo Rembrandt com key light a
        45 graus. Vestuário corporativo em tons neutros. Enquadramento do peito para cima, olhar
        direto para a câmera. Estilo fotográfico corporativo moderno, formato 1:1, resolução
        alta para LinkedIn e sites institucionais. Pele com textura natural, sem excesso de
        retoque artificial.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA STORIES ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para stories e conteúdo vertical
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Stories no Instagram, TikTok e WhatsApp Status exigem formato vertical (9:16) e visual que
        funcione em tela cheia de smartphone. Os prompts para stories precisam considerar que o
        conteúdo será consumido rapidamente e que elementos de texto serão sobrepostos pela própria
        plataforma.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 16 — Background para story de enquete/pergunta
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fundo abstrato vibrante para Instagram Story em formato 9:16. Gradiente fluido de rosa-choque
        para violeta intenso com manchas de luz branca difusa. Textura de grão de filme analógico
        sutil. Bolhas de luz (lens flare) suaves flutuando pelo quadro. Estilo moderno e energético.
        Área central e superior limpa para sobreposição de stickers interativos. Visual jovem,
        dinâmico e instagramável.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 17 — Story de bastidores / dia a dia
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Fotografia autêntica de espaço criativo em formato vertical 9:16: ateliê com materiais de
        arte, telas parcialmente pintadas, pincéis em potes de vidro e paleta de tintas coloridas.
        Luz natural da manhã entrando por janela grande, criando feixes de luz com partículas de
        poeira visíveis. Tons quentes e orgânicos. Estilo editorial lifestyle, leve haze atmosférica,
        sensação de momento genuíno capturado espontaneamente.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA YOUTUBE ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para banners e capas de YouTube
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Além de thumbnails, o YouTube exige banners de canal e arte para playlists. Esses elementos
        visuais precisam funcionar em múltiplos dispositivos (desktop, mobile, TV) e transmitir a
        identidade do canal imediatamente.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 18 — Banner de canal YouTube
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Banner panorâmico para canal YouTube em estilo tech futurista. Fundo em azul-escuro
        (#0A1628) com grid de perspectiva em linhas de neon azul claro. Partículas de dados e
        elementos de circuito digital flutuando. Degradê sutil para as extremidades. Área
        central limpa e destacada para nome do canal e tagline. Formato 2560x1440, visual premium
        e moderno, com atenção à safe zone central de 1546x423 onde ficará o texto principal.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 19 — Capa de playlist / série de vídeos
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Composição visual temática para capa de série de vídeos sobre produtividade. Elementos
        icônicos estilizados: relógio, checklist, foguete, gráfico ascendente, dispostos em
        composição equilibrada sobre fundo gradiente de verde-escuro para preto. Estilo ilustração
        vetorial moderna com sombras longas (long shadow). Traços limpos e geométricos, paleta
        reduzida a três cores. Formato 16:9, visual consistente para série.
      </p>

      {/* ==================== SEÇÃO: PROMPTS PARA E-COMMERCE ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts para banners de e-commerce
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Banners de e-commerce precisam ser visualmente impactantes e funcionais ao mesmo tempo.
        Eles devem comunicar a oferta, o produto e a ação desejada em poucos segundos, enquanto
        mantêm a identidade visual da loja.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 20 — Banner hero para homepage
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Banner hero widescreen para homepage de e-commerce de moda feminina. Modelo usando vestido
        fluido em tons terracota, caminhando em ambiente externo urbano com parede de tijolos claros
        ao fundo. Iluminação de golden hour lateral, cabelo em movimento com o vento. Composição
        com modelo à direita e espaço generoso à esquerda para headline e CTA. Formato 1920x600,
        estilo editorial de moda, cores quentes e saturação média, atmosfera aspiracional.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 21 — Banner de categoria / coleção
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Grid visual de produtos de skincare organizados em composição flat lay sobre fundo rosa-pálido
        (#F8E8E0). Frascos, tubos e potes dispostos simetricamente com folhas verdes e fatias de
        frutas cítricas como elementos decorativos. Iluminação flat e uniforme de estúdio, sem
        sombras duras. Estilo clean e fresco, formato banner horizontal 1200x400. Cores pastel
        suaves, visual premium e organizado, ideal para seção de categoria em loja online.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 22 — Banner de Black Friday / evento sazonal
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Banner dramático para campanha Black Friday de e-commerce. Fundo preto absoluto com explosão
        de partículas douradas e faíscas. Letras 3D brilhantes com textura metálica dourada e reflexos
        realistas. Efeito de fumaça escura sutil nas bordas. Contraste extremo entre preto e dourado.
        Formato 1920x600, estilo premium e luxuoso, visual de alto impacto para conversão. Sem
        elementos que distraiam da mensagem central.
      </p>

      {/* ==================== SEÇÃO: PROMPTS EXTRAS ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts extras para completar seu arsenal criativo
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para fechar os 25 prompts, aqui estão três cenários adicionais que cobrem necessidades
        frequentes na rotina de designers e social media managers.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 23 — Infográfico visual / data visualization
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fundo visual para infográfico vertical: superfície de papel texturizado em tom creme claro
        (#FFF8F0) com linhas-guia sutis em cinza claro formando um grid. Elementos decorativos
        minimalistas nos cantos: ícones de gráfico de barras, pizza e linha em estilo outline
        fino. Manchas suaves de aquarela em azul e coral nos cantos. Estilo editorial infográfico
        clean, formato vertical 1080x1920 para stories ou Pinterest, muito espaço para dados e texto.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 24 — Imagem para email marketing header
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Header visual para newsletter de marca de café artesanal. Composição de xícaras de café
        vistas de cima em diferentes estágios de preparo (grãos, moído, espresso, cappuccino)
        dispostas em linha horizontal. Superfície de madeira escura como fundo. Iluminação de
        estúdio quente e aconchegante. Formato widescreen 600x200 para email marketing. Estilo
        fotográfico artesanal e acolhedor, vapor subindo das xícaras quentes, cores ricas de
        marrom, caramelo e creme.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 25 — Imagem para apresentação / pitch deck
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Background clean para slide de pitch deck de startup de tecnologia. Fundo branco com formas
        geométricas abstratas sutis em azul claro (#E8F4FD) no canto inferior direito, sugerindo
        crescimento e inovação. Linhas finas conectivas formando um padrão de rede (network mesh).
        Estilo corporativo moderno e minimalista, formato 16:9 widescreen. Muito espaço negativo
        para texto e gráficos. Visual limpo, profissional e confiável.
      </p>

      {/* ==================== SEÇÃO: FERRAMENTAS MODERNAS ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Canva, Photoshop e Calango Studio: o workflow moderno do designer
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O designer moderno não usa uma ferramenta só. O workflow profissional em 2025 combina
        diferentes ferramentas em etapas complementares, e entender o papel de cada uma é tão
        importante quanto dominar os prompts.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O <strong className="text-white">Canva</strong> se consolidou como a ferramenta de composição
        rápida. Templates, elementos gráficos, colaboração em equipe e publicação direta para redes
        sociais. É onde muitos social media managers montam o layout final, adicionam texto, logo
        e ajustes de marca. Sua integração com IA para geração de imagens e textos tem melhorado,
        mas os resultados ainda são genéricos quando comparados com ferramentas especializadas.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O <strong className="text-white">Adobe Photoshop</strong> continua imbatível para refinamento
        e acabamento. Retoque de pele, composição avançada, manipulação de luz, trabalho com
        camadas complexas. Para designers que precisam de controle pixel a pixel, o Photoshop é
        insubstituível. Sua integração com IA generativa (Generative Fill, Generative Expand) trouxe
        capacidades de edição que antes exigiam horas de trabalho manual, como remover fundos
        complexos, expandir cenários e gerar variações dentro da própria imagem.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O <strong className="text-white">Calango Studio</strong> ocupa um espaço diferente: é onde o
        processo criativo começa. Enquanto o Canva é para montar e o Photoshop é para refinar, o
        Calango Studio é para gerar. Gerar a imagem base com a função Imagem Criativa, gerar a
        copy com o CopyMaker, gerar o roteiro com o UGC Build. tudo isso com o contexto do cliente
        já carregado. Sem reexplicar briefing, sem alternar entre ChatGPT, Midjourney e Freepik.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O fluxo ideal é: <strong className="text-white">Calango Studio</strong> (geração e ideação)
        &rarr; <strong className="text-white">Photoshop</strong> (refinamento e acabamento quando necessário)
        &rarr; <strong className="text-white">Canva</strong> (composição final e publicação). Para muitos
        projetos do dia a dia. posts orgânicos, stories, criativos para teste. o resultado do
        Calango Studio já sai pronto para publicação, pulando as etapas intermediárias.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A vantagem competitiva do Calango Studio nesse workflow é o contexto persistente do cliente.
        Quando você cadastra o briefing. marca, cores, tom de voz, público, estilo visual. toda
        geração subsequente já parte desse contexto. Isso elimina o principal problema de usar
        ferramentas genéricas de IA: ter que reexplicar quem é o cliente a cada nova sessão.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Para designers que gerenciam múltiplos clientes, essa diferença é transformadora. Em vez
        de manter pastas de briefing, bibliotecas de referência e templates de prompt para cada
        cliente, tudo está centralizado em um único lugar. O resultado é mais velocidade, mais
        consistência e mais tempo para curadoria criativa em vez de produção repetitiva.
      </p>

      {/* ==================== SEÇÃO: COMO MONTAR SUA BIBLIOTECA ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como montar sua biblioteca pessoal de prompts
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Os 25 prompts deste artigo são pontos de partida. O verdadeiro poder está em adaptá-los
        para seus clientes e projetos específicos e construir uma biblioteca pessoal que cresce
        com sua experiência. Aqui estão as melhores práticas para organizar seus prompts:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Organize por categoria</strong> — Separe seus prompts por
          tipo de uso: posts, anúncios, thumbnails, produto, identidade visual. Use uma planilha,
          Notion ou documento simples.
        </li>
        <li>
          <strong className="text-white">Documente variações que funcionaram</strong> — Quando um
          prompt gerar um resultado excelente, salve tanto o prompt quanto o resultado. Anote o que
          você mudou em relação ao prompt original.
        </li>
        <li>
          <strong className="text-white">Crie templates por cliente</strong> — Para cada cliente,
          tenha um template base que já inclua cores da marca, estilo visual e mood padrão. No
          Calango Studio, isso já acontece automaticamente com o perfil do cliente.
        </li>
        <li>
          <strong className="text-white">Itere em cima de resultados</strong> — Não aceite o primeiro
          resultado. Gere variações, ajuste parâmetros de iluminação, mude a composição. Cada
          iteração refina seu entendimento do que funciona.
        </li>
        <li>
          <strong className="text-white">Compartilhe com seu time</strong> — Uma biblioteca de
          prompts compartilhada garante consistência visual quando múltiplas pessoas criam conteúdo
          para o mesmo cliente.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A diferença entre um designer que &quot;usa IA&quot; e um designer que domina IA está na qualidade
        dos prompts e na consistência dos resultados. Quem investe tempo em construir uma boa
        biblioteca de prompts para criativos transforma a IA de uma ferramenta curiosa em uma
        verdadeira extensão do seu processo criativo.
      </p>

      {/* ==================== SEÇÃO: ERROS COMUNS ==================== */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Erros comuns ao escrever prompts para design (e como evitá-los)
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Mesmo com bons exemplos de referência, alguns erros são recorrentes entre designers que
        estão começando a usar IA generativa. Reconhecê-los acelera sua curva de aprendizado.
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Ser vago demais</strong> — &quot;Uma imagem bonita para Instagram&quot;
          não é um prompt. Especifique sujeito, estilo, iluminação, composição e formato. Quanto
          mais preciso, melhor o resultado.
        </li>
        <li>
          <strong className="text-white">Ignorar o formato final</strong> — Não especificar se a
          imagem é 1:1, 16:9, 9:16 ou outra proporção resulta em imagens que precisam de recorte,
          perdendo elementos importantes da composição.
        </li>
        <li>
          <strong className="text-white">Sobrecarregar o prompt</strong> — Pedir muitos elementos
          diferentes na mesma imagem confunde a IA. Mantenha uma ideia central clara e adicione
          detalhes que a complementem, não que a disputem.
        </li>
        <li>
          <strong className="text-white">Não pensar no espaço para texto</strong> — Para qualquer
          criativo que receberá texto sobreposto, é fundamental pedir &quot;espaço livre&quot; ou &quot;área
          limpa&quot; na composição. Sem isso, a IA preencherá o quadro inteiro.
        </li>
        <li>
          <strong className="text-white">Esquecer a iluminação</strong> — A iluminação é o elemento
          que mais impacta a qualidade percebida de uma imagem. Especificar o tipo de luz (natural,
          estúdio, golden hour, neon) eleva dramaticamente o resultado.
        </li>
        <li>
          <strong className="text-white">Não iterar</strong> — Aceitar o primeiro resultado é o erro
          mais comum. Profissionais geram 3 a 5 variações e selecionam a melhor, ajustando o prompt
          entre as gerações.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Evitar esses erros já coloca seus resultados em outro patamar. Combine isso com os 25
        prompts deste artigo e com uma ferramenta que entende o contexto do seu cliente. como o
        Calango Studio. e você terá um workflow de geração de criativos consistente e escalável.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="imagem-criativa,copymaker,ugc-build" />
      <ResultadosGaleria />
      <CtaBanner slug="criativos/prompts-poderosos-para-designers" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
