/**
 * mockData.ts
 * Static data used by platform mock components.
 * Image paths are under /images/resultados/ (public directory) and MUST exist.
 * Client logos use color + initials (gradient box), not image files —
 * mirrors the platform's "no logo" state.
 * No secrets; strings and paths only.
 */

// ─── Sessão de Fotos ────────────────────────────────────────────────────────

export const sessaoFotosData = {
  sessionTitle: "Nova Foto de Estúdio",
  model: "Nano Banana PRO",
  format: "Feed · 4:5",
  quality: "2K · Padrão",
  coins: "4,0K",
  scenePlaceholder:
    "Ex: Foto profissional corporativa em estúdio com fundo cinza neutro, vestindo terno slim azul marinho, iluminação Rembrandt suave, expressão confiante, câmera na altura dos olhos, lente 85mm, bokeh suave...",
  detailPlaceholder: "Ex: Relógio dourado no pulso, óculos aviador...",
  // Result image shown in the "done" animation step
  resultImage: "/images/resultados/homem_foto.jpeg",
};

// ─── Criar Imagem ────────────────────────────────────────────────────────────

export type ImageStyle = {
  key: string;
  label: string;
  image: string;
};

export const criarImagemStyles: ImageStyle[] = [
  { key: "animal", label: "Animal Art", image: "/images/resultados/animal_criativo.jpg" },
  { key: "car", label: "Car Design", image: "/images/resultados/car_criativo.jpg" },
  { key: "hero", label: "Hero Style", image: "/images/resultados/hero_criativo.jpg" },
  { key: "business", label: "Business", image: "/images/resultados/business_criativo.jpg" },
  { key: "craft", label: "Craft", image: "/images/resultados/hero3_criativo.jpg" },
  { key: "classic", label: "Classic", image: "/images/resultados/classic_criativo.jpg" },
];

// ─── Criar Copy ──────────────────────────────────────────────────────────────

export type CopyPost = {
  id: string;
  platform: "instagram" | "linkedin" | "twitter";
  caption: string;
  hashtags: string[];
  cta: string;
};

export const criarCopyPosts: CopyPost[] = [
  {
    id: "1",
    platform: "instagram",
    caption:
      "Sua marca merece mais do que posts genéricos. Criamos conteúdo que converte, engaja e posiciona você como autoridade no mercado.",
    hashtags: ["#marketingdigital", "#designgrafico", "#conteudo"],
    cta: "Comece agora →",
  },
  {
    id: "2",
    platform: "instagram",
    caption:
      "Em 2024, design não é diferencial — é sobrevivência. Veja como os nossos clientes triplicaram o engajamento em 30 dias.",
    hashtags: ["#resultados", "#crescimento", "#agencia"],
    cta: "Ver caso de sucesso →",
  },
  {
    id: "3",
    platform: "linkedin",
    caption:
      "O que separa uma marca inesquecível de uma esquecível? Consistência visual e mensagem clara. Aprenda como aplicar isso no seu negócio.",
    hashtags: ["#branding", "#marketing", "#business"],
    cta: "Saiba mais →",
  },
];

// ─── Contexto de Cliente ─────────────────────────────────────────────────────

export const clienteExemplo = {
  nome: "Calango Pay",
  initials: "CP",
  color: "#1f6feb",
  segmento: "Fintech · Pagamentos",
  persona: "Empreendedores 25–45 anos",
  cores: ["#00c896", "#0066ff", "#f5f5f5"],
  produtos: ["Maquininha Flex", "App de Pagamentos", "Conta PJ"],
  readiness: 87,
};

// ─── Gerenciar Clientes ──────────────────────────────────────────────────────

export type Cliente = {
  id: string;
  nome: string;
  initials: string;
  color: string;
  segmento: string;
  readiness: number;
  status: "ativo" | "prospecto" | "pausado";
};

export const clientesList: Cliente[] = [
  { id: "1", nome: "Calango Pay", initials: "CP", color: "#1f6feb", segmento: "Fintech", readiness: 87, status: "ativo" },
  { id: "2", nome: "Studio Noir", initials: "SN", color: "#3f3f46", segmento: "Fotografia", readiness: 65, status: "ativo" },
  { id: "3", nome: "Fazenda Verde", initials: "FV", color: "#22c55e", segmento: "Agronegócio", readiness: 42, status: "prospecto" },
];

// ─── Studio ──────────────────────────────────────────────────────────────────

export const studioData = {
  projectName: "Campanha Criativa 2025",
  // Image rendered inside the artboard canvas — must exist in /public/images/resultados/
  canvasImage: "/images/resultados/hero_criativo.jpg",
  // Zoom shown in the pill
  zoomPercent: 75,
};

// ─── Prospecção ──────────────────────────────────────────────────────────────

export type Prospect = {
  id: string;
  nome: string;
  segmento: string;
  valor: string;
  stage: "prospectos" | "negociacao" | "proposta";
};

export const prospectosList: Prospect[] = [
  { id: "1", nome: "Bella Modas", segmento: "Moda", valor: "R$ 1.200/mês", stage: "prospectos" },
  { id: "2", nome: "Tech Inovação", segmento: "SaaS", valor: "R$ 3.500/mês", stage: "prospectos" },
  { id: "3", nome: "Clínica Saúde+", segmento: "Saúde", valor: "R$ 2.800/mês", stage: "negociacao" },
  { id: "4", nome: "Gourmet House", segmento: "Gastronomia", valor: "R$ 1.800/mês", stage: "negociacao" },
  { id: "5", nome: "Construtora Opus", segmento: "Construção", valor: "R$ 4.200/mês", stage: "proposta" },
];
