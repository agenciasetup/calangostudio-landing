export interface Funcao {
  slug: string;
  name: string;
  description: string;
  imageSrc: string;
  bullets: string[];
}

export const funcoes: Funcao[] = [
  {
    slug: "imagem-criativa",
    name: "Imagem Criativa",
    description:
      "Crie imagens prontas a partir de estilos guiados, sem precisar escrever prompt",
    imageSrc: "/images/funcoes/estilos-imagem-criativa.jpg",
    bullets: [
      "7 estilos guiados: Animal, Carro, Herói, Business, Craft, Clássico e Personalizado",
      "Você só escolhe as opções e envia a foto, a IA monta o resto",
      "Quando quer mais liberdade, troca para o modo Avançado na mesma tela",
    ],
  },
  {
    slug: "estudio-de-foto",
    name: "Estúdio de Foto",
    description:
      "Fotos profissionais com o rosto da pessoa preservado em qualquer cenário",
    imageSrc: "/images/funcoes/estudio-de-foto.jpg",
    bullets: [
      "Descreva a cena ou use uma foto de referência como base",
      "Slider de semelhança facial para controlar o quanto a IA usa o seu rosto",
      "Gere uma sessão inteira com vários ângulos de uma vez",
    ],
  },
  {
    slug: "ugc-build",
    name: "UGC Build",
    description:
      "Fotos realistas de pessoas usando o seu produto, com cara de foto de celular",
    imageSrc: "/images/funcoes/ugc-build.jpg",
    bullets: [
      "Pessoa real interagindo com o produto, sem aparência de IA",
      "Use o seu rosto, um personagem do cliente ou um rosto aleatório",
      "Pack de variações com close no produto, selfie, perfil e mais",
    ],
  },
  {
    slug: "mockup-produto",
    name: "Foto de Produto",
    description:
      "Sessão comercial só do produto, com o rótulo fiel e as cores da marca",
    imageSrc: "/images/funcoes/mockup-produto.jpg",
    bullets: [
      "Tipos de foto prontos: Hero, Lifestyle, E-commerce, Detalhe e Criativa",
      "Mantém o rótulo 100% fiel e aplica as cores da marca na cena",
      "Gera uma sessão completa com vários ângulos do mesmo produto",
    ],
  },
  {
    slug: "restaurador-pro",
    name: "Restaurador Pro",
    description:
      "Recupere fotos antigas ou melhore a qualidade de qualquer imagem",
    imageSrc: "/images/funcoes/restaurador-pro.jpg",
    bullets: [
      "Restaura danos, coloriza ou só aumenta a nitidez, você escolhe",
      "Comparador de antes e depois para conferir o resultado",
      "Pronto para download em alta ou para salvar no Drive",
    ],
  },
  {
    slug: "modo-manual",
    name: "Modo Avançado",
    description:
      "Edite e crie imagens com prompt livre, até 8 referências e marcação na imagem",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Escreva o que quer e combine várias imagens de referência",
      "Rabisque a área que deve mudar e dê nomes para cada parte",
      "Ajuste a iluminação e gere variações mantendo o conceito",
    ],
  },
  {
    slug: "prompt-maker",
    name: "Prompt Maker",
    description:
      "Extraia um prompt universal de qualquer imagem de referência",
    imageSrc: "/images/funcoes/prompt-maker-widget.jpg",
    bullets: [
      "Disponível como botão flutuante em qualquer tela do app",
      "Envie uma imagem e receba o prompt detalhado em JSON",
      "Copie e use em qualquer gerador de imagem",
    ],
  },
  {
    slug: "design-studio",
    name: "Studio",
    description:
      "Editor visual completo para montar artes com camadas, texto e IA",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Camadas, texto, formas e efeitos no estilo dos editores profissionais",
      "Recorte de fundo com IA e preenchimento generativo dentro da arte",
      "Exporta carrossel fatiado card a card e usa o kit de marca do cliente",
    ],
  },
  {
    slug: "consultor-de-perfil",
    name: "Consultor de Perfil",
    description:
      "Auditoria estratégica do perfil do Instagram com nota e plano de ação",
    imageSrc: "/images/funcoes/completo-consultor-de-perfil.jpg",
    bullets: [
      "Envia dois prints e o contexto do negócio para a IA analisar",
      "Recebe nota, paletas sugeridas e mockup de antes e depois",
      "Entregável pronto para apresentar ou fechar cliente",
    ],
  },
  {
    slug: "post-analyzer",
    name: "Post Analyzer",
    description:
      "Análise card a card do seu post ou carrossel, com nota e checklist",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Avalia função, hierarquia e emoção de cada card",
      "Dá uma nota de 0 a 10 e um checklist de evolução",
      "Acompanha a evolução das suas análises ao longo do tempo",
    ],
  },
  {
    slug: "copymaker",
    name: "CopyMaker",
    description:
      "Copy pronta para post, carrossel, story, sequência de story e reels",
    imageSrc: "/images/funcoes/copymaker.jpg",
    bullets: [
      "Escolha o formato, o tom de voz e o estágio do funil",
      "Usa o perfil e o briefing do cliente para escrever no contexto certo",
      "Manda direto para gerar imagem, foto de produto ou montar no Studio",
    ],
  },
  {
    slug: "meus-clientes",
    name: "Meus Clientes",
    description:
      "Cada cliente vira uma marca com kit, personagens, produtos e demandas",
    imageSrc: "/images/funcoes/meus-clientes.jpg",
    bullets: [
      "Workspace com abas de Perfil, Criar, Demandas, Galeria e Análise",
      "Kit de marca, voz, cores, fontes, personagens e produtos salvos",
      "O perfil alimenta todas as ferramentas para a arte sair com a cara do cliente",
    ],
  },
  {
    slug: "demandas",
    name: "Demandas",
    description:
      "Central de produção com kanban de copy e design para todos os clientes",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Arraste os cards pelas etapas, de Rascunho até Postado",
      "Links de aprovação para o cliente, agenda e calendário editorial",
      "Veja atrasos, aprovações pendentes e cobranças em um lugar só",
    ],
  },
  {
    slug: "assets-3d",
    name: "Recorte com IA",
    description:
      "Separe o fundo e gere PNG transparente direto dentro do Studio",
    imageSrc: "/images/funcoes/assets-3d.jpg",
    bullets: [
      "Remoção de fundo por IA, rodando no próprio navegador",
      "Refine a máscara, incluindo cabelo e bordas finas",
      "Exporte em PNG transparente para usar nas suas artes",
    ],
  },
];
