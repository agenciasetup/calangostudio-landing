import { Metadata } from "next";
import SeoLayout from "@/app/components/seo/SeoLayout";
import FaqSection from "@/app/components/seo/FaqSection";
import CtaBanner from "@/app/components/seo/CtaBanner";
import FuncaoShowcase from "@/app/components/seo/FuncaoShowcase";
import ResultadosGaleria from "@/app/components/seo/ResultadosGaleria";
import RelatedPages from "@/app/components/seo/RelatedPages";

export const metadata: Metadata = {
  title:
    "Prompts para Fotos Profissionais com IA: LinkedIn, Perfil e Fotos Empresariais | Calango Studio",
  description:
    "Aprenda a criar prompts para gerar fotos profissionais com IA. Modelos prontos para LinkedIn, retratos corporativos, fotos de equipe e estúdio. Guia completo em português.",
  openGraph: {
    title:
      "Prompts para Fotos Profissionais com IA: LinkedIn, Perfil e Fotos Empresariais | Calango Studio",
    description:
      "Aprenda a criar prompts para gerar fotos profissionais com IA. Modelos prontos para LinkedIn, retratos corporativos, fotos de equipe e estúdio. Guia completo em português.",
    url: "https://www.calangostudio.com.br/guias/prompts-para-fotos-profissionais-com-ia",
    siteName: "Calango Studio",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.calangostudio.com.br/guias/prompts-para-fotos-profissionais-com-ia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como usar prompts para criar fotos profissionais com IA",
      description:
        "Guia passo a passo para criar prompts eficientes e gerar fotos profissionais com inteligência artificial para LinkedIn, perfis corporativos e fotos empresariais.",
      step: [
        {
          "@type": "HowToStep",
          name: "Defina o objetivo da foto",
          text: "Determine se a foto será para LinkedIn, site corporativo, cartão de visitas ou material de marketing. Isso define o tom e o estilo do prompt.",
        },
        {
          "@type": "HowToStep",
          name: "Escolha o tipo de enquadramento",
          text: "Defina se o retrato será close-up, meio corpo ou corpo inteiro, e se o fundo será neutro, de escritório ou estúdio.",
        },
        {
          "@type": "HowToStep",
          name: "Escreva o prompt com detalhes técnicos",
          text: "Inclua no prompt informações sobre iluminação, fundo, vestimenta, expressão facial e estilo fotográfico desejado.",
        },
        {
          "@type": "HowToStep",
          name: "Gere a imagem e avalie o resultado",
          text: "Use a ferramenta de IA para gerar a imagem. Avalie enquadramento, realismo e qualidade geral antes de aprovar.",
        },
        {
          "@type": "HowToStep",
          name: "Refine o prompt se necessário",
          text: "Ajuste detalhes do prompt como iluminação, ângulo ou expressão para obter o resultado ideal.",
        },
        {
          "@type": "HowToStep",
          name: "Exporte em alta resolução",
          text: "Baixe a imagem final em alta resolução para usar em LinkedIn, site, materiais impressos ou redes sociais.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Posso usar fotos geradas por IA no LinkedIn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O LinkedIn não proíbe o uso de fotos geradas por IA como foto de perfil. O importante é que a imagem transmita profissionalismo e represente você de forma autêntica.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a melhor IA para gerar fotos profissionais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ferramentas como GPT com geração de imagem, Midjourney e Stable Diffusion produzem bons resultados. O Calango Studio integra múltiplos modelos e oferece estilos prontos otimizados para fotos profissionais.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso saber inglês para escrever prompts de fotos profissionais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A maioria das ferramentas funciona melhor com prompts em inglês, mas o Calango Studio aceita descrições em português e traduz automaticamente para obter os melhores resultados.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto custa gerar fotos profissionais com IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Varia conforme a ferramenta. Algumas oferecem planos gratuitos limitados. O Calango Studio oferece planos acessíveis com gerações ilimitadas para profissionais.",
          },
        },
        {
          "@type": "Question",
          name: "A foto gerada por IA fica realista o suficiente para uso profissional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Os modelos atuais de IA geram imagens com qualidade fotográfica. Com o prompt certo, o resultado é praticamente indistinguível de uma foto de estúdio real.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Posso usar fotos geradas por IA no LinkedIn?",
    answer:
      "Sim. O LinkedIn não proíbe o uso de fotos geradas por IA como foto de perfil. O importante é que a imagem transmita profissionalismo e represente você de forma autêntica. Muitos profissionais já utilizam fotos geradas por IA para manter um perfil atualizado e com aparência profissional, sem precisar agendar uma sessão fotográfica.",
  },
  {
    question: "Qual a melhor IA para gerar fotos profissionais?",
    answer:
      "Ferramentas como GPT com geração de imagem, Midjourney e Stable Diffusion produzem bons resultados para fotos profissionais. O Calango Studio integra múltiplos modelos (Nano Banana, FLUX e OpenAI) e oferece estilos prontos otimizados para fotos profissionais, eliminando a necessidade de prompts complexos.",
  },
  {
    question: "Preciso saber inglês para escrever prompts de fotos profissionais?",
    answer:
      "A maioria das ferramentas de IA funciona melhor com prompts em inglês, já que foram treinadas predominantemente com dados nesse idioma. No entanto, o Calango Studio aceita descrições em português e traduz automaticamente para obter os melhores resultados, facilitando o uso para profissionais brasileiros.",
  },
  {
    question: "Quanto custa gerar fotos profissionais com IA?",
    answer:
      "O custo varia conforme a ferramenta. Midjourney cobra a partir de US$10/mês, DALL-E cobra por geração e Stable Diffusion pode ser usado gratuitamente com hardware próprio. O Calango Studio oferece planos acessíveis em reais, com gerações incluídas e sem necessidade de configuração técnica.",
  },
  {
    question:
      "A foto gerada por IA fica realista o suficiente para uso profissional?",
    answer:
      "Sim. Os modelos atuais de geração de imagem produzem resultados com qualidade fotográfica impressionante. Com o prompt certo, incluindo detalhes sobre iluminação, enquadramento e estilo, o resultado é praticamente indistinguível de uma foto tirada em estúdio profissional.",
  },
  {
    question: "Posso usar uma foto de referência para gerar minha foto profissional com IA?",
    answer:
      "Sim. Ferramentas como o Estúdio de Foto do Calango Studio permitem enviar uma foto de referência do seu rosto e gerar variações profissionais a partir dela. Isso garante que a foto final se pareça com você, mas com iluminação, fundo e enquadramento de estúdio profissional.",
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

export default function PromptsParaFotosProfissionaisComIaPage() {
  return (
    <SeoLayout
      schema={schema}
      slug="guias/prompts-para-fotos-profissionais-com-ia"
    >
      <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
        Prompts para criar fotos profissionais com IA (LinkedIn, perfil e fotos
        empresariais)
      </h1>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A demanda por fotos profissionais geradas com inteligência artificial
        cresceu de forma exponencial nos últimos dois anos. O que antes era uma
        curiosidade tecnológica se transformou em uma ferramenta real de trabalho
        para designers, social medias, consultores de imagem pessoal e
        profissionais de marketing. A razão é simples: agendar uma sessão de
        fotos profissional em estúdio custa caro, leva tempo e exige
        coordenação. Com as ferramentas certas de IA, é possível gerar retratos
        corporativos, fotos de perfil para LinkedIn e imagens empresariais com
        qualidade de estúdio em minutos, não em dias. Mas existe um detalhe
        crucial que separa resultados amadores de resultados profissionais: a
        qualidade do prompt. Neste guia completo, você vai aprender exatamente
        como escrever prompts que geram fotos profissionais convincentes, com
        exemplos prontos para usar e dicas práticas para cada tipo de situação.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Por que fotos profissionais com IA estão em alta
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O mercado de trabalho brasileiro exige cada vez mais presença digital
        profissional. Um perfil no LinkedIn sem foto tem 14 vezes menos
        visualizações do que um com foto profissional, segundo dados da própria
        plataforma. Para empresas, ter fotos consistentes da equipe transmite
        credibilidade e organização. Para freelancers e consultores, uma boa
        foto de perfil é o primeiro ponto de contato com potenciais clientes.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Tradicionalmente, conseguir essas fotos significava contratar um
        fotógrafo, alugar um estúdio, se deslocar, fazer maquiagem e dedicar
        pelo menos meio dia ao processo. O custo médio de uma sessão
        profissional no Brasil varia de R$300 a R$1.500 dependendo da cidade e
        do fotógrafo. Para equipes maiores, esse custo se multiplica
        rapidamente.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        A geração de fotos por IA resolve esses problemas de forma prática.
        Com um bom prompt e a ferramenta certa, qualquer pessoa pode gerar um
        retrato profissional em segundos, com controle total sobre iluminação,
        fundo, vestimenta e enquadramento. E o melhor: pode gerar múltiplas
        variações até encontrar a imagem perfeita, algo impraticável em uma
        sessão de fotos tradicional.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como designers tradicionalmente criam fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Antes da IA, o workflow para produzir fotos profissionais envolvia
        diversas etapas e ferramentas. Entender esse processo ajuda a valorizar
        o que a IA automatiza e onde ela ainda precisa de orientação humana.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O processo começa com a captura da imagem, feita por um fotógrafo com
        equipamento profissional, iluminação controlada e direção de poses. Em
        seguida, as fotos são importadas para softwares de edição como Adobe
        Photoshop ou Lightroom. No Photoshop, o designer faz retoque de pele,
        correção de cores, remoção de imperfeições, ajuste de contraste e
        recorte do enquadramento. No Lightroom, aplica presets de cor, ajusta
        exposição e cria um padrão visual consistente para todas as fotos de
        uma mesma sessão.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para materiais de marketing, muitos designers usam o Canva para montar
        composições com essas fotos: adicionar textos, molduras, fundos
        gradientes e adaptar os formatos para diferentes plataformas (LinkedIn,
        Instagram, site, cartão de visitas). Esse workflow completo pode levar
        de algumas horas a vários dias, dependendo do volume de fotos e do
        nível de retoque necessário.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O ponto importante é que cada etapa desse processo exige habilidade
        técnica específica. Saber operar Photoshop no nível necessário para
        retoque profissional leva meses ou anos de prática. E mesmo
        profissionais experientes gastam tempo considerável em tarefas
        repetitivas como recorte de fundo, correção de iluminação e
        padronização de cores.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como a IA está mudando o workflow de fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Ferramentas de geração de imagem por IA como GPT com image generation,
        Google Gemini, Midjourney e Stable Diffusion estão redefinindo
        completamente esse processo. Em vez de fotografar e editar, o
        profissional descreve a imagem que precisa em texto e a IA gera o
        resultado. Isso elimina a necessidade de equipamento fotográfico,
        estúdio, iluminação e até mesmo de um modelo humano em muitos casos.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O GPT com geração de imagem (DALL-E integrado ao ChatGPT) se tornou
        popular pela facilidade de uso: você descreve o que quer em linguagem
        natural e recebe uma imagem gerada. O Google Gemini oferece capacidades
        semelhantes com boa compreensão de contexto. O Midjourney continua sendo
        referência em qualidade estética, especialmente para retratos. E o
        Stable Diffusion, por ser open source, permite personalização profunda
        para quem tem conhecimento técnico.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para designers e social medias, a grande mudança é que o tempo gasto em
        produção técnica pode ser redirecionado para direção criativa. Em vez
        de passar horas no Photoshop retocando pele e ajustando iluminação, o
        profissional investe tempo na criação do prompt perfeito, que é
        essencialmente um exercício de direção de arte em formato de texto.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Porém, existe uma curva de aprendizado significativa. Escrever prompts
        que geram fotos profissionais convincentes exige entender como as IAs
        interpretam descrições visuais, quais termos técnicos produzem
        melhores resultados e como estruturar o prompt para obter consistência.
        É exatamente isso que vamos ensinar nas próximas seções.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Anatomia de um bom prompt para fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Antes de ver os exemplos específicos, é fundamental entender a
        estrutura de um prompt eficiente para fotos profissionais. Todo bom
        prompt para esse tipo de imagem deve incluir os seguintes elementos:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Tipo de foto:</strong> retrato,
          headshot, foto meio corpo, foto de equipe, etc.
        </li>
        <li>
          <strong className="text-white">Sujeito:</strong> descrição da pessoa
          (gênero, faixa etária, etnia se relevante, expressão facial).
        </li>
        <li>
          <strong className="text-white">Vestimenta:</strong> terno, camisa
          social, blazer, roupa casual-profissional, etc.
        </li>
        <li>
          <strong className="text-white">Iluminação:</strong> softbox, luz
          natural, Rembrandt lighting, butterfly lighting, etc.
        </li>
        <li>
          <strong className="text-white">Fundo:</strong> fundo neutro, gradiente,
          escritório desfocado, estúdio, etc.
        </li>
        <li>
          <strong className="text-white">Estilo fotográfico:</strong> editorial,
          corporativo, lifestyle, documentary, etc.
        </li>
        <li>
          <strong className="text-white">Detalhes técnicos:</strong> lente usada
          (85mm, 50mm), profundidade de campo, resolução, aspect ratio.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Quanto mais detalhes relevantes você incluir no prompt, mais controle
        terá sobre o resultado final. Vamos agora ver exemplos práticos para
        cada tipo de foto profissional.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompt 1: Retrato corporativo clássico
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O retrato corporativo clássico é o tipo mais comum de foto profissional.
        É usado em sites institucionais, relatórios anuais, apresentações de
        equipe e materiais de marketing B2B. O objetivo é transmitir
        credibilidade, competência e acessibilidade.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Professional corporate headshot portrait of a [man/woman], age
          [30-45], wearing a dark navy blue tailored suit with a white dress
          shirt. Confident and approachable expression with a slight natural
          smile. Shot with an 85mm lens at f/2.8 for smooth background blur.
          Soft studio lighting with a key light at 45 degrees and a fill light
          to reduce shadows. Clean neutral gray gradient background. Sharp focus
          on the eyes. Color grading with warm skin tones and desaturated
          background. High-end corporate photography style. 4K resolution,
          photorealistic.
        </p>
      </div>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Por que esse prompt funciona
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este prompt funciona por vários motivos. Primeiro, especifica o tipo
        exato de foto (corporate headshot portrait), o que direciona a IA para
        o estilo correto desde o início. A descrição da vestimenta (dark navy
        blue tailored suit, white dress shirt) cria uma imagem mental precisa
        que a IA consegue reproduzir com fidelidade. A menção à lente 85mm e
        abertura f/2.8 instrui a IA a criar o desfoque de fundo característico
        de retratos profissionais. E os detalhes de iluminação (key light at
        45 degrees, fill light) replicam exatamente a configuração de estúdio
        que fotógrafos profissionais usam para retratos corporativos.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Dicas para melhorar o resultado
      </h3>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Substitua {`"neutral gray gradient background"`} por{" "}
          {`"modern office environment with bokeh"`} para um visual mais
          contextualizado.
        </li>
        <li>
          Adicione {`"looking directly at camera"`} para garantir contato visual
          direto, essencial para fotos corporativas.
        </li>
        <li>
          Inclua {`"well-groomed hair, clean skin"`} para evitar artefatos
          comuns em geração de IA.
        </li>
        <li>
          Experimente trocar {`"confident and approachable"`} por{" "}
          {`"serious and authoritative"`} para cargos de liderança executiva.
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompt 2: Foto de perfil para LinkedIn
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A foto de perfil do LinkedIn tem características específicas que a
        diferenciam de um retrato corporativo tradicional. Ela precisa funcionar
        em tamanho pequeno (o avatar do LinkedIn é exibido em círculo), ser
        reconhecível rapidamente e transmitir profissionalismo sem parecer
        excessivamente formal. O estilo mais moderno de foto para LinkedIn
        tende a ser mais casual e acessível do que o retrato corporativo
        clássico.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Professional LinkedIn profile photo, close-up headshot of a [man/woman]
          in their [30s], wearing a smart casual outfit - a well-fitted blazer
          over a clean crew neck t-shirt. Warm, genuine smile showing slight
          teeth. Natural daylight coming from a large window on the left side,
          creating soft shadows. Shallow depth of field with a blurred modern
          coworking space in the background. Shot at eye level with a 50mm lens.
          Clean, modern aesthetic with natural color tones. The subject fills
          about 60% of the frame with some headroom. Professional but
          approachable vibe. 4K, photorealistic, magazine quality.
        </p>
      </div>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Por que esse prompt funciona
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este prompt foi projetado especificamente para o formato do LinkedIn. A
        indicação de que o sujeito ocupa 60% do frame garante que o rosto fique
        bem visível mesmo no avatar circular pequeno. A escolha de smart casual
        (blazer com camiseta) reflete a tendência atual do LinkedIn, onde
        profissionalismo não significa necessariamente terno e gravata. A luz
        natural de janela cria um visual mais autêntico e contemporâneo do que
        iluminação de estúdio. E o fundo de coworking contextualiza o
        profissional em um ambiente de trabalho moderno.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Dicas para melhorar o resultado
      </h3>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Para áreas criativas (design, marketing, publicidade), experimente
          adicionar {`"colorful background elements"`} ou trocar o blazer por
          uma jaqueta mais descontraída.
        </li>
        <li>
          Para áreas mais tradicionais (direito, finanças, consultoria),
          substitua o smart casual por {`"formal business attire with tie"`}.
        </li>
        <li>
          Adicione {`"square crop, 1:1 aspect ratio"`} para já gerar no formato
          ideal do LinkedIn.
        </li>
        <li>
          Inclua {`"catch light in the eyes"`} para garantir brilho natural nos
          olhos, um detalhe sutil mas importante.
        </li>
        <li>
          Se o resultado parecer artificial, adicione {`"subtle skin texture,
          natural imperfections"`} para aumentar o realismo.
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompt 3: Foto de equipe de startup moderna
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Fotos de equipe são fundamentais para páginas {`"Sobre nós"`} de sites,
        decks de apresentação para investidores e materiais de employer
        branding. O desafio com fotos de equipe geradas por IA é manter
        consistência visual entre os membros, algo que exige um prompt bem
        estruturado. Startups e empresas de tecnologia geralmente preferem um
        visual mais descontraído e colaborativo, diferente da rigidez de fotos
        corporativas tradicionais.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Professional team photo of a diverse group of 4 young professionals in
          a modern tech startup office. The team includes men and women of
          different ethnicities, ages 25-35. They are wearing smart casual
          clothing - button-down shirts, blazers, clean sneakers. Standing in a
          relaxed group formation, some with arms crossed casually, others with
          hands in pockets. Genuine smiles and natural interaction between team
          members. Background shows a bright, open-plan office with plants,
          whiteboards, and large windows. Natural daylight flooding the space.
          Shot with a 35mm lens at f/4 to keep the entire group in focus.
          Editorial photography style, candid feel. Warm, optimistic color
          palette. High resolution, photorealistic.
        </p>
      </div>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Por que esse prompt funciona
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        A especificação de diversidade no grupo é importante tanto para
        representatividade quanto para gerar uma imagem visualmente interessante
        com diferentes características faciais e corporais. A descrição
        detalhada das poses (arms crossed casually, hands in pockets) evita que
        a IA gere poses rígidas ou artificiais. O uso de uma lente 35mm com
        abertura f/4 é tecnicamente correto para fotos de grupo, onde você
        precisa de profundidade de campo maior para manter todos em foco. E a
        menção a {`"candid feel"`} e {`"natural interaction"`} direciona a IA
        para gerar uma imagem que parece espontânea, não posada.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Dicas para melhorar o resultado
      </h3>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Para manter consistência visual em múltiplas gerações, adicione{" "}
          {`"consistent lighting and color grading across all subjects"`}.
        </li>
        <li>
          Se a empresa tem um dress code específico, substitua a descrição de
          vestimenta por detalhes mais precisos (ex:{" "}
          {`"all wearing company-branded polo shirts in navy blue"`}).
        </li>
        <li>
          Para decks de investidores, adicione{" "}
          {`"confident, determined expressions"`} em vez de{" "}
          {`"genuine smiles"`}.
        </li>
        <li>
          Experimente gerar cada membro da equipe individualmente com o mesmo
          estilo de iluminação e fundo para ter mais controle sobre o resultado.
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompt 4: Retrato de estúdio profissional (editorial)
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O retrato de estúdio editorial é o mais sofisticado dos tipos de foto
        profissional. É usado por CEOs em entrevistas para revistas, palestrantes
        em materiais de divulgação, autores em capas de livros e profissionais
        que querem transmitir autoridade e liderança. A diferença para o retrato
        corporativo clássico está no nível de produção: iluminação mais
        dramática, composição mais artística e um acabamento que remete a
        revistas como Forbes, Exame ou Harvard Business Review.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          High-end editorial portrait of a [man/woman] executive in their [40s/50s],
          exuding confidence and authority. Wearing a perfectly tailored charcoal
          gray three-piece suit with a subtle pinstripe pattern and a silk
          burgundy tie. Dramatic Rembrandt lighting with a strong key light from
          the upper right creating a defined triangle of light on the shadow side
          of the face. Deep, rich black background fading into darkness. Shot
          with a 70-200mm lens at 135mm, f/2.0, creating a cinematic depth of
          field. The subject is positioned slightly off-center using the rule of
          thirds. Intense, focused gaze directly at camera. Subtle rim light
          separating the subject from the background. Color grading inspired by
          Annie Leibovitz - rich shadows, warm highlights on skin, cool
          background tones. Magazine cover quality, 8K resolution,
          photorealistic, ultra-detailed.
        </p>
      </div>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Por que esse prompt funciona
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este é o prompt mais técnico e detalhado da lista, e é intencional. Para
        resultados de nível editorial, cada detalhe importa. A referência a
        Rembrandt lighting é um termo que fotógrafos profissionais usam para
        descrever um padrão de iluminação específico com triângulo de luz na
        bochecha do lado mais escuro. As IAs reconhecem esse termo e produzem o
        efeito correto. A menção a Annie Leibovitz como referência de color
        grading direciona a estética para um estilo reconhecidamente sofisticado.
        E detalhes como rim light e rule of thirds demonstram conhecimento
        fotográfico que as IAs interpretam fielmente.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Dicas para melhorar o resultado
      </h3>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Para um visual mais contemporâneo, substitua o fundo preto por{" "}
          {`"minimalist architectural background with clean lines"`}.
        </li>
        <li>
          Adicione {`"hair light from behind"`} para criar separação adicional
          entre o sujeito e o fundo.
        </li>
        <li>
          Para profissionais de áreas criativas, substitua o terno por{" "}
          {`"designer black turtleneck, minimalist aesthetic"`} no estilo Steve
          Jobs.
        </li>
        <li>
          Experimente adicionar {`"slight head tilt"`} para uma pose mais natural
          e menos rígida.
        </li>
        <li>
          Se o resultado tiver iluminação muito dramática, suavize com{" "}
          {`"balanced fill ratio 1:2"`} em vez de Rembrandt puro.
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Prompt 5: Foto profissional para redes sociais e personal branding
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Nem toda foto profissional precisa parecer corporativa. Com o
        crescimento do personal branding, muitos profissionais precisam de fotos
        que sejam ao mesmo tempo profissionais e pessoais, transmitindo
        personalidade além de competência. Este tipo de foto é ideal para
        Instagram profissional, bios de newsletter, thumbnails de YouTube e
        perfis em plataformas de freelance.
      </p>

      <div className="bg-bg-tertiary border border-white/[0.06] rounded-xl p-5 mb-6">
        <p className="text-white font-mono text-sm leading-relaxed">
          Lifestyle personal branding portrait of a [man/woman] creative
          professional, age [28-35]. Wearing a stylish but professional outfit -
          a textured blazer over a minimalist white t-shirt, with tasteful
          accessories (simple watch, delicate necklace). Relaxed, authentic
          smile with a confident posture. Sitting casually at a clean wooden
          desk in a beautifully designed home office or creative studio.
          Background includes curated bookshelves, a plant, and warm ambient
          lighting. Golden hour sunlight streaming through the window. Shot with
          a 50mm lens at f/1.8 for a dreamy bokeh effect. Warm, editorial color
          palette with slightly lifted shadows. Instagram-ready aesthetic.
          Photorealistic, high detail, 4K.
        </p>
      </div>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Por que esse prompt funciona
      </h3>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Este prompt equilibra profissionalismo com personalidade. A descrição
        do ambiente (home office, creative studio) contextualiza o profissional
        em seu espaço de trabalho, criando uma narrativa visual. A menção a
        golden hour sunlight produz aquela iluminação quente e dourada que é
        esteticamente atraente e universalmente favorável para retratos. O
        termo {`"Instagram-ready aesthetic"`} direciona a IA para um estilo
        visual moderno que funciona bem em redes sociais. E detalhes como
        {`"curated bookshelves"`} e {`"tasteful accessories"`} adicionam
        camadas de personalidade sem perder o profissionalismo.
      </p>

      <h3 className="text-lg font-poppins font-semibold text-white mb-3">
        Dicas para melhorar o resultado
      </h3>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-8">
        <li>
          Para coaches e consultores, adicione elementos que remetam à sua
          área de atuação no cenário (ex: {`"whiteboard with strategy diagrams
          in the background"`}).
        </li>
        <li>
          Substitua {`"sitting at a desk"`} por {`"standing with arms crossed
          leaning against a bookshelf"`} para uma pose mais dinâmica.
        </li>
        <li>
          Adicione {`"color palette: warm earth tones, terracotta and sage
          green accents"`} para um visual mais coeso e instagramável.
        </li>
        <li>
          Para um resultado mais autêntico, inclua{" "}
          {`"candid moment, caught mid-laugh"`} em vez de um sorriso posado.
        </li>
      </ul>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Erros comuns ao escrever prompts para fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Mesmo com bons exemplos de referência, é comum cometer erros que
        comprometem o resultado. Conhecer esses erros antecipadamente economiza
        tempo e gerações desperdiçadas.
      </p>

      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li>
          <strong className="text-white">Prompts genéricos demais:</strong>{" "}
          escrever apenas {`"professional photo of a man"`} produz resultados
          inconsistentes. A IA precisa de detalhes específicos sobre iluminação,
          vestimenta, fundo e estilo para gerar algo profissional.
        </li>
        <li>
          <strong className="text-white">Ignorar a iluminação:</strong> a
          iluminação é o elemento mais importante de qualquer foto profissional.
          Prompts sem menção a iluminação resultam em imagens com luz
          flat e sem dimensão.
        </li>
        <li>
          <strong className="text-white">Misturar estilos conflitantes:</strong>{" "}
          pedir {`"casual portrait with dramatic studio lighting in an outdoor
          park"`} confunde a IA. Mantenha consistência entre ambiente,
          iluminação e vestimenta.
        </li>
        <li>
          <strong className="text-white">Esquecer o enquadramento:</strong> sem
          indicação de lente, distância ou composição, a IA decide sozinha, e
          nem sempre acerta. Especifique se quer close-up, meio corpo ou corpo
          inteiro.
        </li>
        <li>
          <strong className="text-white">
            Não especificar a expressão facial:
          </strong>{" "}
          a expressão define completamente a percepção da foto. {`"Confident
          smile"`} é muito diferente de {`"serious, thoughtful expression"`}.
          Sempre inclua esse detalhe.
        </li>
        <li>
          <strong className="text-white">Excesso de detalhes irrelevantes:</strong>{" "}
          incluir informações que não afetam o visual (como o nome da pessoa ou
          seu cargo) pode confundir a IA sem melhorar o resultado.
        </li>
      </ol>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Termos técnicos de fotografia que melhoram seus prompts
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Conhecer alguns termos técnicos de fotografia faz uma diferença enorme
        na qualidade dos resultados. As IAs foram treinadas com milhões de
        imagens e seus metadados, então reconhecem e reproduzem fielmente
        terminologia fotográfica. Aqui estão os termos mais úteis para fotos
        profissionais:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Rembrandt lighting:</strong> padrão de
          iluminação com triângulo de luz na bochecha do lado com sombra.
          Clássico para retratos executivos.
        </li>
        <li>
          <strong className="text-white">Butterfly lighting:</strong> luz
          principal posicionada diretamente acima e à frente do rosto, criando
          uma sombra em formato de borboleta sob o nariz. Favorece a maioria
          dos rostos.
        </li>
        <li>
          <strong className="text-white">Rim light / backlight:</strong> luz
          vinda de trás do sujeito que cria um contorno luminoso ao redor do
          cabelo e ombros, separando a pessoa do fundo.
        </li>
        <li>
          <strong className="text-white">Catch light:</strong> reflexo da fonte
          de luz nos olhos. Essencial para dar vida e brilho ao retrato.
        </li>
        <li>
          <strong className="text-white">Bokeh:</strong> qualidade do desfoque
          no fundo da imagem. Bokeh suave e circular é característico de
          retratos profissionais.
        </li>
        <li>
          <strong className="text-white">Key light e fill light:</strong> a luz
          principal (key) define o formato do rosto. A luz de preenchimento
          (fill) suaviza as sombras. A proporção entre elas define o drama da
          foto.
        </li>
        <li>
          <strong className="text-white">Color grading:</strong> o tratamento de
          cor final da imagem. Pode ser quente, frio, desaturado, cinematográfico,
          etc.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Usar esses termos nos seus prompts é como dar instruções técnicas a um
        fotógrafo experiente. A IA entende exatamente o que você quer e produz
        resultados muito mais precisos do que descrições vagas como {`"good
        lighting"`} ou {`"nice background"`}.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Como gerar fotos profissionais mais rápido com o Calango Studio
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Escrever prompts detalhados funciona, mas exige conhecimento técnico e
        tempo. Para designers e social medias que precisam de volume e
        consistência, o Calango Studio oferece um atalho significativo. Em vez
        de escrever prompts complexos do zero, você pode usar a ferramenta
        Estúdio de Foto com estilos prontos que já vêm calibrados para
        diferentes tipos de fotos profissionais.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        O processo no Calango Studio funciona em três passos simples. Primeiro,
        você escolhe a ferramenta Estúdio de Foto ou Imagem Criativa, dependendo
        se vai usar uma foto de referência ou gerar do zero. Segundo, seleciona
        o estilo que mais se aproxima do resultado desejado (como Business Style
        ou Classic Style). Terceiro, descreve em português simples o que precisa
        e a plataforma cuida de toda a parte técnica: tradução do prompt,
        seleção do modelo de IA mais adequado, configuração de parâmetros e
        geração da imagem.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para profissionais que atendem múltiplos clientes, o diferencial do
        Calango Studio vai além da geração de imagem. A plataforma centraliza
        geração de fotos, criação de copies, gestão de projetos e organização
        por cliente em um único lugar. Isso significa que você pode gerar as
        fotos profissionais do cliente, criar os textos dos posts e organizar
        tudo na mesma ferramenta, sem alternar entre cinco aplicativos
        diferentes.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Outro ponto importante é a consistência. Quando você usa estilos prontos,
        todas as fotos geradas para o mesmo cliente seguem o mesmo padrão visual
        de iluminação, cor e estilo. Isso é especialmente valioso para fotos de
        equipe, onde a uniformidade entre os retratos individuais faz toda a
        diferença na apresentação final.
      </p>

      <p className="text-txt-secondary leading-relaxed mb-8">
        O Calango Studio integra os modelos Nano Banana, FLUX e OpenAI,
        selecionando automaticamente o melhor para cada tipo de geração. Para
        fotos profissionais, o modelo é otimizado para realismo fotográfico,
        produzindo resultados que rivalizam com fotos de estúdio reais em
        termos de qualidade técnica.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Comparação: prompt manual vs. estilo pronto para fotos profissionais
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para ilustrar a diferença prática entre as duas abordagens, veja esta
        comparação:
      </p>

      <ul className="list-disc list-inside text-txt-secondary space-y-2 mb-6">
        <li>
          <strong className="text-white">Tempo com prompt manual:</strong> 5-15
          minutos para escrever, testar e refinar o prompt até chegar no
          resultado desejado.
        </li>
        <li>
          <strong className="text-white">Tempo com estilo pronto:</strong> menos
          de 1 minuto para selecionar o estilo e descrever o que você precisa em
          uma frase.
        </li>
        <li>
          <strong className="text-white">Conhecimento técnico necessário com prompt manual:</strong>{" "}
          alto. Exige conhecimento de iluminação, composição, termos
          fotográficos e funcionamento dos modelos de IA.
        </li>
        <li>
          <strong className="text-white">Conhecimento técnico necessário com estilo pronto:</strong>{" "}
          mínimo. Basta saber descrever o que você quer em linguagem natural.
        </li>
        <li>
          <strong className="text-white">Consistência com prompt manual:</strong>{" "}
          baixa. Cada geração pode variar significativamente, mesmo com o mesmo
          prompt.
        </li>
        <li>
          <strong className="text-white">Consistência com estilo pronto:</strong>{" "}
          alta. O estilo garante padronização entre gerações.
        </li>
      </ul>

      <p className="text-txt-secondary leading-relaxed mb-8">
        Para profissionais que estão aprendendo sobre IA, os prompts manuais
        são uma excelente forma de entender como as ferramentas funcionam. Mas
        para produção em escala, onde tempo é dinheiro, usar estilos prontos é
        a abordagem mais eficiente.
      </p>

      <h2 className="text-xl font-poppins font-bold text-white mb-4">
        Dicas finais para fotos profissionais com IA
      </h2>

      <p className="text-txt-secondary leading-relaxed mb-4">
        Para encerrar este guia, aqui estão algumas dicas que se aplicam a
        qualquer tipo de foto profissional com IA, independentemente da
        ferramenta ou do prompt utilizado:
      </p>

      <ol className="list-decimal list-inside text-txt-secondary space-y-3 mb-8">
        <li>
          <strong className="text-white">Sempre gere múltiplas variações.</strong>{" "}
          Mesmo o melhor prompt produz resultados diferentes a cada geração.
          Gere pelo menos 4-5 variações e escolha a melhor.
        </li>
        <li>
          <strong className="text-white">Preste atenção nas mãos e orelhas.</strong>{" "}
          São as áreas onde a IA mais erra em retratos. Se possível, enquadre a
          foto de forma que as mãos não apareçam ou estejam em posições simples.
        </li>
        <li>
          <strong className="text-white">Use referências visuais.</strong>{" "}
          Ferramentas que aceitam imagens de referência (como o Estúdio de Foto
          do Calango Studio) produzem resultados mais próximos do que você
          imaginou.
        </li>
        <li>
          <strong className="text-white">Mantenha a simplicidade.</strong>{" "}
          Fundos simples, roupas sólidas e iluminação limpa quase sempre
          produzem resultados mais profissionais do que composições complexas.
        </li>
        <li>
          <strong className="text-white">Adapte o prompt para cada plataforma.</strong>{" "}
          Uma foto para LinkedIn tem necessidades diferentes de uma foto para
          Instagram ou para um site corporativo. Ajuste enquadramento, estilo e
          proporção conforme o destino final.
        </li>
        <li>
          <strong className="text-white">Teste em diferentes tamanhos.</strong>{" "}
          Uma foto que parece ótima em tela cheia pode perder detalhes quando
          reduzida para um avatar de 200x200 pixels. Sempre teste o resultado
          no tamanho real de uso.
        </li>
      </ol>

      <FaqSection faqs={faqs} />
      <FuncaoShowcase slug="estudio-de-foto,imagem-criativa" />
      <ResultadosGaleria />
      <CtaBanner slug="guias/prompts-para-fotos-profissionais-com-ia" />
      <RelatedPages items={relatedPages} />
    </SeoLayout>
  );
}
