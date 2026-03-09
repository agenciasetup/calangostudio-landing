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
      "Crie imagens cinematográficas com estilos prontos em poucos segundos",
    imageSrc: "/images/funcoes/estilos-imagem-criativa.jpg",
    bullets: [
      "Mais de 10 estilos prontos: Business, Hero, Classic, Car, Craft e mais",
      "Resultado cinematográfico em segundos",
      "Sem conhecimento técnico ou prompt complexo",
    ],
  },
  {
    slug: "estudio-de-foto",
    name: "Estúdio de Foto",
    description:
      "Coloque seu rosto em qualquer foto com realismo profissional",
    imageSrc: "/images/funcoes/estudio-de-foto.jpg",
    bullets: [
      "Fotos ultra-realistas com seu rosto",
      "Qualquer cenário, estilo ou contexto",
      "Ideal para personal brands e criadores",
    ],
  },
  {
    slug: "restaurador-pro",
    name: "Restaurador Pro",
    description:
      "Recupere fotos antigas ou melhore a qualidade de qualquer imagem",
    imageSrc: "/images/funcoes/restaurador-pro.jpg",
    bullets: [
      "Restaura fotos danificadas ou antigas",
      "Aumenta resolução sem perder qualidade",
      "Resultado profissional em segundos",
    ],
  },
  {
    slug: "mockup-produto",
    name: "Mockup Produto",
    description:
      "Crie mockups incríveis em cenários realistas sem precisar de estúdio",
    imageSrc: "/images/funcoes/mockup-produto.jpg",
    bullets: [
      "Cenários realistas sem fotógrafo ou estúdio",
      "Ideal para e-commerce e lançamentos",
      "Resultado pronto para usar em segundos",
    ],
  },
  {
    slug: "assets-3d",
    name: "Assets 3D",
    description: "Crie elementos e objetos em PNG com fundo transparente",
    imageSrc: "/images/funcoes/assets-3d.jpg",
    bullets: [
      "Fundo transparente, pronto para usar em artes",
      "Qualquer objeto, elemento ou ícone",
      "Qualidade 3D sem software especializado",
    ],
  },
  {
    slug: "consultor-de-perfil",
    name: "Consultor de Perfil",
    description:
      "Auditoria estratégica do seu perfil e feed do Instagram com plano de ação",
    imageSrc: "/images/funcoes/completo-consultor-de-perfil.jpg",
    bullets: [
      "Diagnóstico técnico completo do perfil",
      "Análise de feed, bio e posicionamento",
      "Plano de ação personalizado para crescer",
    ],
  },
  {
    slug: "ugc-build",
    name: "UGC Build",
    description:
      "Crie fotos ultra-realistas de pessoas usando seus produtos",
    imageSrc: "/images/funcoes/ugc-build.jpg",
    bullets: [
      "Pessoas reais interagindo com seu produto",
      "Fidelidade máxima — parece foto de verdade",
      "Ideal para anúncios e prova social",
    ],
  },
  {
    slug: "copymaker",
    name: "CopyMaker",
    description:
      "Crie copy pronta para posts, carrossel, stories e reels em segundos",
    imageSrc: "/images/funcoes/copymaker.jpg",
    bullets: [
      "Copy estruturada para qualquer formato",
      "Tom de voz e nicho personalizados",
      "Pronto para publicar, sem editar",
    ],
  },
  {
    slug: "meus-clientes",
    name: "Meus Clientes",
    description:
      "Gerencie sua base de clientes e dados estratégicos em um único lugar",
    imageSrc: "/images/funcoes/meus-clientes.jpg",
    bullets: [
      "CRM integrado à produção de criativos",
      "Histórico e dados de cada cliente",
      "Ideal para agências e freelancers que escalam",
    ],
  },
  {
    slug: "remix-layout",
    name: "Remix Layout",
    description:
      "Replique layouts trocando fotos, cores e texto mantendo a estrutura",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Adapte qualquer layout com sua identidade",
      "Mantém proporções e hierarquia visual",
      "Produção em escala sem perder qualidade",
    ],
  },
  {
    slug: "modo-manual",
    name: "Modo Manual",
    description:
      "Edite exatamente os detalhes que você quer com múltiplas referências",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Controle total sobre o resultado final",
      "Use múltiplas referências visuais",
      "Para criações que exigem precisão",
    ],
  },
  {
    slug: "criacao-livre",
    name: "Criação Livre",
    description:
      "Componha peças com imagem base, referência textual e geração refinável",
    imageSrc: "/images/funcoes/dashboard.jpg",
    bullets: [
      "Máxima liberdade criativa",
      "Combina imagem base com prompt textual",
      "Resultado refinável até chegar no ideal",
    ],
  },
];
