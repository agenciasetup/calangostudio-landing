import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Como gerar fotos realistas com GPT ou Gemini usando prompts profissionais | Calango Studio",
  description:
    "Aprenda a gerar fotos realistas com GPT e Gemini usando prompts profissionais. Guia completo com exemplos de prompts para retrato, produto, moda e mais.",
  openGraph: {
    title:
      "Como gerar fotos realistas com GPT ou Gemini usando prompts profissionais | Calango Studio",
    description:
      "Aprenda a gerar fotos realistas com GPT e Gemini usando prompts profissionais. Guia completo com exemplos de prompts para retrato, produto, moda e mais.",
    url: "https://www.calangostudio.com.br/guias/como-gerar-fotos-realistas-gpt-gemini",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/como-gerar-fotos-realistas-gpt-gemini",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como gerar fotos realistas com GPT ou Gemini usando prompts profissionais",
      description:
        "Guia passo a passo para gerar fotos realistas com inteligência artificial usando prompts profissionais no GPT, Gemini e Calango Studio.",
      step: [
        {
          "@type": "HowToStep",
          name: "Defina o tipo de fotografia desejada",
          text: "Escolha o estilo fotográfico: retrato, produto, moda ou corporativo. Defina o objetivo final da imagem.",
        },
        {
          "@type": "HowToStep",
          name: "Estruture o prompt com elementos técnicos",
          text: "Inclua descrições de iluminação, lente, abertura, ambiente e sujeito no prompt para obter resultados realistas.",
        },
        {
          "@type": "HowToStep",
          name: "Insira o prompt no GPT ou Gemini",
          text: "Cole o prompt estruturado no ChatGPT com DALL-E ou no Google Gemini e gere a imagem.",
        },
        {
          "@type": "HowToStep",
          name: "Avalie e refine o resultado",
          text: "Analise a imagem gerada, ajuste parâmetros do prompt como iluminação, ângulo ou expressão e gere novamente se necessário.",
        },
        {
          "@type": "HowToStep",
          name: "Use o Calango Studio para simplificar",
          text: "Utilize o Calango Studio para gerar fotos realistas sem precisar escrever prompts complexos, usando estilos prontos e ferramentas dedicadas.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O GPT consegue gerar fotos realistas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O ChatGPT, através do modelo DALL-E 3 integrado, consegue gerar fotos com alto grau de realismo quando o prompt inclui descrições técnicas de iluminação, lente e ambiente.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre gerar fotos no GPT e no Gemini?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O GPT usa o DALL-E como motor de geração de imagens, enquanto o Gemini utiliza o Imagen. Ambos aceitam prompts em português, mas cada modelo tem características próprias de estilo e interpretação.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso escrever prompts em inglês para ter bons resultados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não necessariamente. Tanto o GPT quanto o Gemini aceitam prompts em português. No entanto, termos técnicos de fotografia em inglês (como softbox, bokeh, golden hour) tendem a gerar resultados mais precisos.",
          },
        },
        {
          "@type": "Question",
          name: "Como descrever iluminação em um prompt de foto realista?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use termos específicos como golden hour, luz natural suave, softbox lateral, rim light, iluminação Rembrandt ou luz difusa de estúdio. Quanto mais específica a descrição, mais realista o resultado.",
          },
        },
        {
          "@type": "Question",
          name: "Posso usar essas fotos geradas para fins comerciais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No GPT (plano pago) e no Gemini, as imagens geradas geralmente podem ser usadas comercialmente conforme os termos de uso de cada plataforma. Sempre verifique os termos atualizados antes do uso comercial.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "O GPT consegue gerar fotos realistas?",
    answer:
      "Sim. O ChatGPT, através do modelo DALL-E 3 integrado, consegue gerar fotos com alto grau de realismo quando o prompt inclui descrições técnicas de iluminação, lente e ambiente. A chave para resultados convincentes está na qualidade e especificidade do prompt utilizado.",
  },
  {
    question: "Qual a diferença entre gerar fotos no GPT e no Gemini?",
    answer:
      "O GPT usa o DALL-E como motor de geração de imagens, enquanto o Gemini utiliza o Imagen. Ambos aceitam prompts em português, mas cada modelo tem características próprias de estilo e interpretação. O GPT tende a gerar imagens mais estilizadas, enquanto o Gemini costuma produzir resultados com textura mais fotográfica em certos cenários.",
  },
  {
    question: "Preciso escrever prompts em inglês para ter bons resultados?",
    answer:
      "Não necessariamente. Tanto o GPT quanto o Gemini aceitam prompts em português e geram bons resultados. No entanto, termos técnicos de fotografia em inglês (como softbox, bokeh, golden hour) tendem a ser interpretados com mais precisão pelos modelos. Uma boa prática é escrever o prompt em português e manter os termos técnicos em inglês.",
  },
  {
    question: "Como descrever iluminação em um prompt de foto realista?",
    answer:
      "Use termos específicos como golden hour, luz natural suave, softbox lateral, rim light, iluminação Rembrandt ou luz difusa de estúdio. Evite descrições genéricas como 'boa iluminação'. Quanto mais específica a descrição da luz, mais realista e profissional será o resultado da imagem gerada.",
  },
  {
    question: "Posso usar essas fotos geradas para fins comerciais?",
    answer:
      "No GPT (plano pago) e no Gemini, as imagens geradas geralmente podem ser usadas comercialmente conforme os termos de uso de cada plataforma. Sempre verifique os termos atualizados antes do uso comercial. No Calango Studio, todas as imagens geradas podem ser usadas comercialmente sem restrições adicionais.",
  },
  {
    question:
      "Qual é o melhor modelo de IA para gerar fotos de produtos?",
    answer:
      "Depende do tipo de produto e do resultado desejado. O GPT com DALL-E 3 funciona bem para composições criativas. O Gemini com Imagen gera boas texturas. O Calango Studio, com seus modelos integrados (Nano Banana, FLUX e OpenAI), seleciona automaticamente o melhor motor para cada tipo de geração, incluindo fotos de produtos.",
  },
  {
    question:
      "O Calango Studio é melhor que usar o GPT ou Gemini diretamente?",
    answer:
      "Para profissionais que precisam de velocidade e consistência, sim. O Calango Studio elimina a necessidade de escrever prompts complexos através de estilos prontos e ferramentas dedicadas como o Estúdio de Foto. Além disso, centraliza geração de imagem, copy e gestão de clientes em uma só plataforma.",
  },
];

const relatedPages = [
  {
    href: "/guias/como-gerar-imagens-com-ia",
    title: "Como Gerar Imagens com IA",
    description:
      "Guia completo sobre geração de imagens com inteligência artificial.",
  },
  {
    href: "/guias/estilos-de-imagem-com-ia",
    title: "Estilos de Imagem com IA",
    description:
      "Conheça os principais estilos de imagem que você pode criar com IA.",
  },
  {
    href: "/ferramentas/sessao-de-fotos-com-ia",
    title: "Sessão de Fotos com IA",
    description: "Gere sessões de fotos profissionais com IA.",
  },
];

export default function ComoGerarFotosRealistasGptGeminiPage() {
  return (
    <SeoLayout
      schema={schema}
      slug="guias/como-gerar-fotos-realistas-gpt-gemini"
    >
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Como gerar fotos realistas com GPT ou Gemini usando prompts
        profissionais
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A geração de fotos realistas com inteligência artificial evoluiu de
        forma impressionante nos últimos meses. Ferramentas como o ChatGPT
        (com DALL-E integrado) e o Google Gemini (com Imagen) agora são
        capazes de criar imagens que se confundem com fotografias reais,
        desde retratos corporativos até fotos de produtos para e-commerce.
        Mas existe uma diferença enorme entre gerar uma imagem genérica e
        criar uma foto que realmente parece ter saído de uma câmera
        profissional. O segredo está no prompt. Um prompt bem estruturado,
        com descrições técnicas de iluminação, lente, ambiente e sujeito,
        transforma o resultado de uma ilustração digital em algo que parece
        ter sido capturado por um fotógrafo experiente. Neste guia, você vai
        aprender exatamente como estruturar prompts profissionais para gerar
        fotos realistas no GPT e no Gemini, com exemplos práticos que você
        pode copiar e adaptar imediatamente.
      </p>

      {/* ── Como os modelos de IA geram imagens ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como os modelos de IA geram imagens realistas
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Antes de mergulhar nos prompts, vale entender brevemente como esses
        modelos funcionam. Tanto o DALL-E (usado pelo GPT) quanto o Imagen
        (usado pelo Gemini) são modelos de difusão. Eles foram treinados com
        bilhões de imagens e suas descrições textuais, aprendendo a relação
        entre palavras e elementos visuais. Quando você escreve um prompt, o
        modelo decodifica cada palavra e tenta reconstruir uma imagem que
        corresponda àquela descrição.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O ponto crucial é que esses modelos entendem termos técnicos de
        fotografia. Se você escreve &quot;foto com lente 85mm, abertura
        f/1.4, bokeh suave ao fundo&quot;, o modelo sabe que isso significa
        um retrato com fundo desfocado e o sujeito em foco nítido. Se você
        escreve &quot;iluminação Rembrandt com softbox lateral&quot;, ele
        reproduz o padrão clássico de luz e sombra que caracteriza essa
        técnica. Quanto mais específico e técnico for o seu prompt, mais
        realista será o resultado.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A diferença entre um resultado amador e um profissional não está no
        modelo de IA escolhido. Está na qualidade do prompt. Um prompt
        genérico como &quot;foto de uma mulher sorrindo&quot; gera uma
        imagem genérica. Um prompt profissional que descreve iluminação,
        lente, ambiente, expressão e estilo fotográfico gera algo que parece
        ter saído de um ensaio real. Vamos aprender a construir esses
        prompts.
      </p>

      {/* ── Elementos essenciais de um prompt profissional ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Os 4 elementos essenciais de um prompt para fotos realistas
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-6">
        Todo prompt profissional para geração de fotos realistas precisa
        conter quatro elementos fundamentais. Dominar esses elementos é o
        que separa resultados mediocres de imagens que impressionam.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        1. Descrição de iluminação
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A iluminação é o elemento mais importante de qualquer fotografia, e
        o mesmo vale para fotos geradas por IA. A forma como a luz incide
        sobre o sujeito define o clima, a profundidade e o realismo da
        imagem. Existem vários tipos de iluminação que você pode especificar
        no seu prompt:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Golden hour:</strong> luz dourada e
          quente, típica do nascer ou pôr do sol. Ideal para retratos ao ar
          livre com tom emocional.
        </li>
        <li>
          <strong className="text-white">Softbox lateral:</strong> luz
          suave vinda de um lado, criando sombras graduais. Muito usada em
          retratos de estúdio.
        </li>
        <li>
          <strong className="text-white">Rim light:</strong> luz que contorna
          o sujeito por trás, separando-o do fundo. Perfeita para criar
          profundidade.
        </li>
        <li>
          <strong className="text-white">Iluminação Rembrandt:</strong> padrão
          clássico com um triângulo de luz em uma das bochechas. Elegante e
          dramática.
        </li>
        <li>
          <strong className="text-white">Luz natural difusa:</strong> luz do
          dia filtrada por nuvens ou janelas. Resultado suave e natural.
        </li>
        <li>
          <strong className="text-white">Luz de estúdio com fundo
          infinito:</strong> iluminação controlada com ciclorama branco ou
          colorido. Ideal para fotos de produto e moda.
        </li>
      </ul>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        2. Descrição de lente e abertura
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Especificar a lente e a abertura no prompt muda drasticamente o
        resultado. Cada lente tem características visuais distintas que os
        modelos de IA reconhecem e reproduzem:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Lente 85mm f/1.4:</strong> a
          clássica lente de retrato. Produz bokeh cremoso e isola o sujeito
          do fundo. Ideal para retratos individuais.
        </li>
        <li>
          <strong className="text-white">Lente 50mm f/1.8:</strong> versátil
          e natural, reproduz a perspectiva próxima ao olho humano. Boa para
          fotos ambientais e lifestyle.
        </li>
        <li>
          <strong className="text-white">Lente 35mm f/2.0:</strong> grande
          angular moderada. Captura mais do ambiente e funciona bem para
          fotos editoriais e de rua.
        </li>
        <li>
          <strong className="text-white">Lente 100mm macro:</strong> para
          detalhes extremos de produtos, joias, texturas e close-ups.
        </li>
        <li>
          <strong className="text-white">Lente 24-70mm f/2.8:</strong> zoom
          profissional versátil. Funciona bem para fotos corporativas e
          eventos.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-6">
        A abertura (valor f/) controla a profundidade de campo. Valores
        baixos como f/1.4 ou f/1.8 criam fundo desfocado (bokeh). Valores
        altos como f/8 ou f/11 mantêm tudo em foco. Incluir esses detalhes
        no prompt faz com que a IA reproduza essas características visuais
        com precisão.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        3. Descrição do ambiente e cenário
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O ambiente onde a foto acontece define o contexto e a narrativa
        visual. Seja específico sobre onde o sujeito está e como o cenário
        contribui para a composição:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Estúdio com fundo infinito
          branco:</strong> limpo e profissional. Ideal para e-commerce e
          fotos corporativas.
        </li>
        <li>
          <strong className="text-white">Escritório moderno com plantas e luz
          natural:</strong> perfeito para retratos de founders e LinkedIn.
        </li>
        <li>
          <strong className="text-white">Rua urbana com textura de
          concreto:</strong> estilo editorial e streetwear.
        </li>
        <li>
          <strong className="text-white">Café com iluminação quente e
          aconchegante:</strong> lifestyle e branding pessoal.
        </li>
        <li>
          <strong className="text-white">Mesa de madeira rústica com
          elementos de decoração:</strong> flat lay para produtos artesanais.
        </li>
      </ul>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        4. Descrição do sujeito
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A descrição do sujeito deve incluir aparência, expressão, postura,
        roupa e ação. Quanto mais detalhada for essa descrição, mais
        controle você terá sobre o resultado final. Para retratos, inclua
        idade aproximada, tom de pele, tipo de cabelo, expressão facial e
        direção do olhar. Para produtos, descreva material, cor, textura,
        tamanho e posicionamento. Evite descrições vagas como &quot;pessoa
        bonita&quot; ou &quot;produto elegante&quot;. Prefira descrições
        concretas como &quot;mulher de 30 anos com cabelo castanho ondulado,
        sorriso sutil, vestindo blazer azul-marinho, olhando diretamente
        para a câmera&quot;.
      </p>

      {/* ── Prompts práticos ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompts profissionais prontos para usar
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-6">
        Abaixo estão quatro prompts completos que você pode copiar e colar
        diretamente no ChatGPT ou no Google Gemini. Cada prompt foi
        estruturado com os quatro elementos que acabamos de cobrir:
        iluminação, lente, ambiente e sujeito. Após cada prompt, você
        encontra a explicação detalhada de cada elemento e dicas para
        adaptar o resultado.
      </p>

      {/* ── Prompt 1: Retrato ── */}

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 1: Retrato profissional (estilo LinkedIn / corporativo)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este prompt gera um retrato profissional ideal para perfis
        corporativos, páginas de equipe em sites institucionais ou fotos de
        LinkedIn. O resultado tem aparência de foto feita em estúdio por um
        fotógrafo profissional.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Professional headshot photograph of a 35-year-old Brazilian man with
          short dark hair and a confident, approachable smile. He is wearing a
          well-fitted navy blue suit with a light gray open-collar shirt. Shot
          with a Canon EOS R5, 85mm lens at f/1.8. Soft studio lighting with a
          key light at 45 degrees and subtle fill light. Clean, slightly blurred
          neutral gray background. Sharp focus on the eyes. Color grading:
          natural tones with warm highlights. The image conveys professionalism,
          trust, and approachability. Photorealistic, 8K resolution.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no GPT:</strong>{" "}
        Abra o ChatGPT (versão Plus ou superior), inicie uma nova conversa e
        cole o prompt acima. O ChatGPT vai usar o DALL-E 3 para gerar a
        imagem automaticamente. Se quiser ajustar, peça na mesma conversa:
        &quot;mude a roupa para uma camisa social branca&quot; ou &quot;faça
        o fundo mais escuro&quot;.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no Gemini:</strong>{" "}
        Acesse o Google Gemini, cole o prompt e solicite a geração da
        imagem. O Gemini usa o modelo Imagen para criar a foto. Você pode
        refinar pedindo alterações específicas na mesma conversa.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Explicação dos elementos:</strong>{" "}
        A lente 85mm f/1.8 cria o desfoque suave no fundo que caracteriza
        retratos profissionais. A iluminação com key light a 45 graus é o
        padrão de estúdio mais utilizado para headshots. A menção à câmera
        Canon EOS R5 ajuda o modelo a reproduzir a textura e o look de uma
        foto real. A instrução &quot;sharp focus on the eyes&quot; garante
        que o ponto de foco esteja correto.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas para melhorar:</strong> Se o
        resultado parecer artificial, adicione &quot;natural skin texture
        with subtle imperfections&quot; ao prompt. Para um tom mais quente,
        inclua &quot;warm color temperature, 5600K&quot;. Se quiser um
        fundo mais interessante, substitua o fundo neutro por &quot;modern
        office with blurred bookshelves in the background&quot;.
      </p>

      {/* ── Prompt 2: Produto ── */}

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 2: Fotografia de produto (e-commerce / catálogo)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este prompt gera fotos de produto com qualidade de catálogo
        profissional. O resultado é ideal para e-commerce, marketplaces,
        redes sociais de marca e materiais de vendas.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Commercial product photography of a premium matte black ceramic coffee
          mug on a rustic wooden table. Shot with a 100mm macro lens at f/5.6
          for sharp detail across the entire product. Three-point studio
          lighting: main softbox at 45 degrees from the left, fill light from
          the right, and a subtle backlight for rim definition. Light steam
          rising from the mug suggesting hot coffee. Shallow depth of field on
          the background showing blurred green plants and a cozy kitchen
          environment. Clean, editorial composition with negative space on the
          right for text placement. Color palette: warm earth tones, dark moody
          aesthetic. Photorealistic, product catalog quality, 8K.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no GPT:</strong>{" "}
        Cole o prompt no ChatGPT e aguarde a geração. Para adaptar ao seu
        produto, substitua &quot;matte black ceramic coffee mug&quot; pela
        descrição do seu produto, mantendo toda a estrutura de iluminação e
        lente. Se o resultado não tiver o ângulo desejado, adicione
        &quot;shot from a 45-degree angle above&quot; ou &quot;eye-level
        straight-on perspective&quot;.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no Gemini:</strong>{" "}
        O processo é similar. Cole no Gemini e gere. O Imagen tende a
        interpretar bem instruções de composição como &quot;negative space
        on the right&quot;, o que é útil para criar imagens prontas para
        receber texto em peças publicitárias.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Explicação dos elementos:</strong>{" "}
        A lente macro 100mm é específica para fotografia de produto, capturando
        detalhes de textura e material. A abertura f/5.6 mantém o produto
        inteiro em foco enquanto desfoca suavemente o fundo. A iluminação de
        três pontos (key, fill, backlight) é o setup padrão de estúdio para
        produtos. O vapor saindo da caneca adiciona vida e contexto à cena.
        A instrução de espaço negativo garante que a composição permita
        adição de texto.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas para melhorar:</strong> Para
        produtos com superfícies reflexivas (vidro, metal), adicione
        &quot;controlled reflections, no harsh specular highlights&quot;. Para
        alimentos, inclua &quot;food styling, appetizing presentation,
        garnish details&quot;. Se precisar de fundo branco puro para
        marketplace, substitua o cenário por &quot;pure white seamless
        background, product floating with subtle shadow beneath&quot;.
      </p>

      {/* ── Prompt 3: Founder ── */}

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 3: Retrato de founder de startup (estilo editorial)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fotos de founders precisam transmitir confiança, inovação e
        acessibilidade ao mesmo tempo. Este prompt cria retratos no estilo
        das fotos editoriais que aparecem em revistas como Forbes, Exame ou
        Bloomberg. O resultado funciona para sites institucionais, matérias
        de imprensa, pitch decks e redes sociais profissionais.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Editorial portrait photograph of a 40-year-old Brazilian female tech
          startup founder. She has shoulder-length black hair, warm brown skin,
          and a confident, determined expression with a slight smile. Wearing a
          modern minimalist black turtleneck. Shot with a Sony A7IV, 50mm lens
          at f/2.0. She is standing in a bright modern coworking space with
          floor-to-ceiling windows, natural daylight streaming in from the left
          side. Blurred team members working at desks visible in the deep
          background. The composition follows the rule of thirds with the
          subject slightly off-center. Natural color grading with slightly
          desaturated tones for an editorial magazine feel. Photorealistic, shot
          by Annie Leibovitz style, 8K resolution.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no GPT:</strong>{" "}
        Cole no ChatGPT e gere. Para personalizar, ajuste a descrição da
        pessoa (idade, cabelo, tom de pele), a roupa e o ambiente. Mantenha
        a estrutura de lente, iluminação e estilo editorial. Se quiser uma
        versão masculina, ajuste os pronomes e descrições físicas.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no Gemini:</strong>{" "}
        Cole o prompt no Gemini. O modelo Imagen interpreta bem referências
        a estilos fotográficos específicos e composições baseadas em regras
        como a regra dos terços. Se precisar de mais de uma variação, peça
        &quot;gere 3 variações diferentes deste retrato&quot;.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Explicação dos elementos:</strong>{" "}
        A lente 50mm f/2.0 produz uma perspectiva natural e versátil,
        perfeita para retratos editoriais que incluem contexto ambiental. A
        menção à câmera Sony A7IV reforça o estilo fotojornalístico. A
        referência ao estilo Annie Leibovitz guia o modelo para um look
        editorial sofisticado. Os tons levemente dessaturados são
        característicos de revistas de negócios. A equipe desfocada no fundo
        contextualiza a pessoa como líder.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-6">
        <strong className="text-white">Dicas para melhorar:</strong> Para
        um tom mais tecnológico, adicione &quot;subtle blue accent lighting
        from monitors in the background&quot;. Para um mood mais sério,
        substitua o sorriso por &quot;thoughtful, contemplative
        expression&quot;. Se o fundo estiver muito distrativo, adicione
        &quot;shallow depth of field with heavy background blur&quot;.
      </p>

      {/* ── Prompt 4: Moda ── */}

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Prompt 4: Fotografia de moda (editorial / lookbook)
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fotos de moda exigem atenção a detalhes como textura do tecido,
        caimento da roupa, postura do modelo e cenário que complemente o
        estilo. Este prompt gera imagens no nível de lookbooks e editoriais
        de moda para marcas que querem criar conteúdo visual sem a produção
        tradicional.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          High-fashion editorial photograph of a young Brazilian woman, 25 years
          old, with long curly dark brown hair, wearing an oversized beige linen
          blazer over a white silk camisole and high-waisted wide-leg trousers.
          She is walking confidently down a sunlit cobblestone street in a
          historic district. Shot with a Nikon Z9, 35mm lens at f/2.8.
          Beautiful golden hour sunlight creating long warm shadows and a golden
          glow on her skin. Motion blur on her hair suggesting gentle wind.
          Background shows aged European-style architecture with warm-toned
          walls, slightly out of focus. Full body shot with dynamic composition.
          Color grading: warm golden tones with lifted shadows, film-like grain.
          Vogue Brasil editorial style. Photorealistic, 8K resolution.
        </p>
      </div>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no GPT:</strong>{" "}
        Cole o prompt no ChatGPT. Para adaptar a uma coleção específica,
        substitua a descrição das roupas mantendo a estrutura de iluminação,
        lente e cenário. Você pode pedir variações na mesma conversa:
        &quot;agora faça a mesma modelo sentada em um café ao lado dessa
        rua&quot; para criar uma série coerente.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Como usar este prompt no Gemini:</strong>{" "}
        Cole no Gemini e gere. O modelo Imagen costuma reproduzir bem
        texturas de tecido e detalhes de roupas. Se precisar de mais
        detalhes no tecido, adicione &quot;visible linen texture, natural
        fabric draping&quot;.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Explicação dos elementos:</strong>{" "}
        A lente 35mm f/2.8 captura mais do cenário, essencial para fotos de
        moda que mostram o look completo no contexto. A golden hour fornece
        a iluminação mais desejada para editoriais de moda ao ar livre. O
        motion blur no cabelo adiciona dinamismo e naturalidade. A
        referência ao estilo Vogue Brasil orienta o modelo para o visual
        editorial desejado. O grain de filme dá uma estética analógica que
        está em alta na moda.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        <strong className="text-white">Dicas para melhorar:</strong> Para
        fotos de estúdio de moda, substitua o cenário externo por &quot;clean
        white cyclorama studio with dramatic directional lighting&quot;.
        Para streetwear, mude para &quot;urban concrete environment with
        graffiti walls and moody overcast lighting&quot;. Se quiser mais
        foco na textura da roupa, adicione &quot;detailed fabric texture
        visible, high-resolution material rendering&quot;.
      </p>

      {/* ── Passo a passo por plataforma ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: como gerar fotos no GPT
      </h2>

      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li>
          <strong className="text-white">Acesse o ChatGPT:</strong> entre em
          chat.openai.com e faça login na sua conta. Você precisa de um
          plano Plus, Team ou Enterprise para ter acesso à geração de
          imagens com DALL-E 3.
        </li>
        <li>
          <strong className="text-white">Inicie uma nova conversa:</strong>{" "}
          clique em &quot;New chat&quot; para começar uma conversa limpa.
          Isso evita que contextos anteriores interfiram na geração.
        </li>
        <li>
          <strong className="text-white">Cole o prompt:</strong> copie um
          dos prompts acima (ou crie o seu seguindo a estrutura de 4
          elementos) e cole no campo de mensagem. Pressione Enter.
        </li>
        <li>
          <strong className="text-white">Aguarde a geração:</strong> o GPT
          vai processar o prompt e gerar a imagem usando o DALL-E 3. Isso
          geralmente leva entre 15 e 45 segundos.
        </li>
        <li>
          <strong className="text-white">Avalie e refine:</strong> se o
          resultado não estiver ideal, peça ajustes na mesma conversa.
          Exemplos: &quot;faça a iluminação mais dramática&quot;,
          &quot;mude o ângulo para mais de cima&quot;, &quot;adicione mais
          desfoque no fundo&quot;.
        </li>
        <li>
          <strong className="text-white">Baixe a imagem:</strong> clique na
          imagem gerada e depois no botão de download. A imagem vem em
          resolução padrão do DALL-E 3 (1024x1024 ou 1792x1024 dependendo
          do formato).
        </li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Passo a passo: como gerar fotos no Gemini
      </h2>

      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li>
          <strong className="text-white">Acesse o Google Gemini:</strong>{" "}
          entre em gemini.google.com e faça login com sua conta Google.
          A geração de imagens está disponível no plano gratuito e no
          Advanced.
        </li>
        <li>
          <strong className="text-white">Peça a geração de imagem:</strong>{" "}
          cole o prompt e, se necessário, preceda com &quot;gere uma
          imagem:&quot; para deixar claro que você quer uma imagem e não
          apenas uma resposta textual.
        </li>
        <li>
          <strong className="text-white">Aguarde o processamento:</strong>{" "}
          o Gemini usa o modelo Imagen para processar seu prompt. O tempo
          de geração varia, mas geralmente leva entre 10 e 30 segundos.
        </li>
        <li>
          <strong className="text-white">Revise as variações:</strong> o
          Gemini costuma gerar múltiplas variações de uma vez. Analise
          todas e escolha a que mais se aproxima do resultado desejado.
        </li>
        <li>
          <strong className="text-white">Refine se necessário:</strong>{" "}
          peça ajustes específicos na mesma conversa. O Gemini mantém o
          contexto e consegue aplicar alterações incrementais à imagem.
        </li>
        <li>
          <strong className="text-white">Exporte a imagem:</strong> clique
          na imagem escolhida e faça o download. Verifique a resolução e,
          se necessário, use um upscaler para aumentar a qualidade.
        </li>
      </ol>

      {/* ── Diferenças práticas ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Diferenças práticas entre GPT e Gemini para fotos
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Embora ambos gerem fotos realistas, existem diferenças práticas que
        vale considerar na hora de escolher qual usar:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Fidelidade ao prompt:</strong> o GPT
          com DALL-E 3 tende a seguir instruções mais literalmente, o que é
          útil quando você precisa de controle preciso sobre composição e
          elementos. O Gemini às vezes interpreta o prompt de forma mais
          livre.
        </li>
        <li>
          <strong className="text-white">Textura de pele:</strong> o Gemini
          com Imagen costuma produzir texturas de pele mais naturais em
          certos cenários, enquanto o DALL-E 3 pode ocasionalmente gerar
          pele com aparência ligeiramente plastificada.
        </li>
        <li>
          <strong className="text-white">Iluminação:</strong> ambos
          interpretam bem descrições de iluminação, mas o DALL-E 3 tende a
          ser mais consistente com esquemas de luz complexos envolvendo
          múltiplas fontes.
        </li>
        <li>
          <strong className="text-white">Velocidade:</strong> o Gemini
          costuma ser mais rápido na geração e frequentemente produz
          múltiplas variações, enquanto o GPT gera uma imagem por vez.
        </li>
        <li>
          <strong className="text-white">Custo:</strong> o Gemini oferece
          geração de imagens no plano gratuito (com limites). O GPT requer
          plano Plus (US$ 20/mês) ou superior.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Na prática, muitos profissionais usam ambos e comparam os
        resultados, escolhendo o melhor para cada situação específica. A
        qualidade final depende mais da qualidade do prompt do que da
        escolha entre GPT ou Gemini.
      </p>

      {/* ── Erros comuns ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Erros comuns ao gerar fotos realistas com IA
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Mesmo com bons prompts, alguns erros frequentes podem comprometer
        o resultado. Conheça os mais comuns e como evitá-los:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Prompts vagos demais:</strong>{" "}
          &quot;foto bonita de uma pessoa&quot; nunca vai gerar um resultado
          profissional. Sempre inclua os 4 elementos: iluminação, lente,
          ambiente e sujeito.
        </li>
        <li>
          <strong className="text-white">Ignorar a iluminação:</strong> a
          iluminação é o que mais impacta o realismo. Um prompt sem
          descrição de luz gera resultados com aparência artificial e
          iluminação plana.
        </li>
        <li>
          <strong className="text-white">Não especificar a lente:</strong>{" "}
          sem informação de lente e abertura, o modelo escolhe um padrão
          genérico que raramente parece profissional.
        </li>
        <li>
          <strong className="text-white">Excesso de instruções
          conflitantes:</strong> pedir &quot;iluminação dramática e suave ao
          mesmo tempo&quot; confunde o modelo. Seja consistente nas
          instruções.
        </li>
        <li>
          <strong className="text-white">Não iterar:</strong> raramente a
          primeira geração será perfeita. Planeje pelo menos 2-3 iterações
          de refinamento para chegar no resultado ideal.
        </li>
        <li>
          <strong className="text-white">Misturar idiomas sem
          critério:</strong> use uma base consistente (português ou inglês)
          e insira termos técnicos de fotografia em inglês apenas quando
          necessário. Misturar frases completas nos dois idiomas pode
          confundir o modelo.
        </li>
      </ul>

      {/* ── Calango Studio ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como o Calango Studio simplifica a geração de fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Escrever prompts profissionais funciona, mas exige tempo,
        conhecimento técnico de fotografia e muita iteração. Para designers,
        social medias e criadores de conteúdo que precisam gerar fotos
        realistas com frequência e velocidade, o Calango Studio oferece uma
        alternativa mais eficiente.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O <strong className="text-white">Estúdio de Foto</strong> do
        Calango Studio é uma ferramenta dedicada para gerar sessões
        fotográficas com IA. Em vez de escrever prompts complexos, você
        seleciona o tipo de foto desejada, envia uma referência de rosto ou
        produto, e a plataforma gera automaticamente múltiplas fotos
        profissionais com iluminação, composição e estilo já calibrados.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A ferramenta <strong className="text-white">Imagem Criativa</strong>{" "}
        permite gerar fotos estilizadas com estilos prontos como Hero
        Style, Business Style, Classic Style e outros. Cada estilo é um
        conjunto pré-configurado de parâmetros que inclui iluminação, lente,
        composição e pós-produção. Você descreve o que quer em linguagem
        simples e o estilo cuida do resto.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O diferencial do Calango Studio em relação ao uso direto do GPT ou
        Gemini é a combinação de três fatores: estilos prontos que eliminam
        a necessidade de prompts técnicos, múltiplos modelos integrados
        (Nano Banana, FLUX e OpenAI) que são selecionados automaticamente
        conforme o tipo de geração, e a centralização de ferramentas de
        imagem, copy e gestão de clientes em uma única plataforma.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Para quem está começando a explorar a geração de fotos com IA, usar
        os prompts deste guia no GPT ou Gemini é um excelente ponto de
        partida. Para quem já incorporou IA no workflow diário e precisa de
        velocidade e consistência profissional, o Calango Studio é o
        próximo passo natural.
      </p>

      {/* ── Dicas avançadas ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Dicas avançadas para fotos ainda mais realistas
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Se você já domina a estrutura básica de 4 elementos, estas dicas
        avançadas podem levar seus resultados a outro patamar:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Mencione marcas de câmera e
          lente:</strong> &quot;shot with a Hasselblad X2D 100C&quot; ou
          &quot;Leica M11 with Summilux 50mm&quot; fazem o modelo reproduzir
          as características visuais específicas desses equipamentos.
        </li>
        <li>
          <strong className="text-white">Adicione imperfeições:</strong>{" "}
          &quot;subtle lens flare&quot;, &quot;natural skin pores
          visible&quot;, &quot;slight motion blur on hands&quot; tornam a
          imagem mais crível como foto real.
        </li>
        <li>
          <strong className="text-white">Especifique a pós-produção:</strong>{" "}
          &quot;edited in Capture One with a warm film preset&quot; ou
          &quot;Lightroom color grading with teal and orange split
          toning&quot; definem o look final da imagem.
        </li>
        <li>
          <strong className="text-white">Use referências de
          fotógrafos:</strong> &quot;in the style of Peter Lindbergh&quot;
          ou &quot;shot by Mario Testino&quot; guiam o modelo para um
          estilo fotográfico reconhecível.
        </li>
        <li>
          <strong className="text-white">Defina a paleta de cores:</strong>{" "}
          &quot;muted earth tones&quot;, &quot;high contrast black and
          white&quot; ou &quot;pastel color palette with soft
          highlights&quot; dão coerência visual ao resultado.
        </li>
        <li>
          <strong className="text-white">Inclua detalhes de
          ambiente:</strong> elementos como &quot;condensation on a nearby
          glass window&quot;, &quot;dust particles visible in the light
          beam&quot; ou &quot;reflection on a wet street surface&quot;
          adicionam camadas de realismo.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Lembre-se de que cada detalhe adicionado ao prompt é uma instrução
        a mais para o modelo. Prompts muito longos (acima de 300 palavras)
        podem fazer o modelo ignorar algumas instruções. O ideal é manter
        o prompt entre 80 e 200 palavras, priorizando os elementos que mais
        impactam o resultado.
      </p>

      {/* ── Quando usar IA vs fotógrafo ── */}

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Quando usar fotos geradas por IA e quando contratar um fotógrafo
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A geração de fotos por IA não substitui completamente a fotografia
        tradicional. Existem situações onde cada abordagem funciona melhor.
        Saber quando usar cada uma é parte de ser um profissional completo.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        <strong className="text-white">Use fotos geradas por IA
        quando:</strong> você precisa de conteúdo visual rápido para redes
        sociais, está validando conceitos visuais antes de uma produção
        real, precisa de fotos de pessoas diversas sem disponibilidade de
        modelos, quer criar mockups e protótipos de campanhas, ou quando o
        orçamento não permite uma produção fotográfica completa.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        <strong className="text-white">Contrate um fotógrafo
        quando:</strong> a campanha exige uma pessoa real e identificável
        (embaixador de marca, CEO em matéria de imprensa), o produto tem
        detalhes físicos que precisam ser 100% fiéis ao real (joias, relógios
        de luxo, maquiagem), o evento é ao vivo e precisa ser documentado, ou
        quando a autenticidade verificável é um requisito legal ou
        contratual. A combinação inteligente de ambas as abordagens é onde
        os melhores profissionais se destacam.
      </p>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="estudio-de-foto,imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="guias/como-gerar-fotos-realistas-gpt-gemini" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
