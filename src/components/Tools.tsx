"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Camera,
  Smartphone,
  Package,
  Shapes,
  PencilRuler,
  Sparkles,
  ScanLine,
  History,
  FileText,
  Users,
  Briefcase,
  X,
  ChevronRight,
  CheckCircle,
  Quote,
  ImageIcon,
  type LucideIcon,
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  example: string;
  plan: string;
  color: string;
  glowColor: string;
  advantages: string[];
  feedback: { name: string; text: string };
}

const tools: Tool[] = [
  {
    icon: Palette,
    name: "Imagem Criativa",
    short: "Crie imagens cinematográficas com estilos prontos em poucos segundos",
    description:
      "Gere imagens com estilos profissionais prontos — Animal Art, Car Design, Hero Style, Business, Craft e muito mais. Sem escrever prompt complexo. Só escolher o estilo, enviar a foto e gerar. A IA já entende o tom criativo e entrega em segundos.",
    example:
      "Gere uma foto estilo Hero para o perfil do seu cliente em 10 segundos.",
    plan: "Base",
    color: "from-rose-500 to-pink-600",
    glowColor: "rgba(244,63,94,0.15)",
    advantages: [
      "Mais de 30 estilos prontos para escolher",
      "Resultado profissional sem prompt complexo",
      "Gere variações ilimitadas em segundos",
    ],
    feedback: { name: "Gabriel Castro", text: "Reduziu meu tempo de criação de 2h para 5 minutos. Inacreditável." },
  },
  {
    icon: Camera,
    name: "Estúdio de Foto",
    short: "Coloque seu rosto em qualquer foto",
    description:
      "Envie uma referência do Pinterest ou qualquer imagem e gere uma sessão de fotos completa com o mesmo estilo, iluminação e composição. Ideal para personal branding e conteúdo autoral.",
    example:
      "Recrie a estética de uma foto viral para o perfil do seu cliente.",
    plan: "Base",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(34,211,238,0.15)",
    advantages: [
      "Referência visual direta — envie qualquer imagem",
      "Mantém estilo e iluminação da referência",
      "Perfeito para personal branding consistente",
    ],
    feedback: { name: "Ruyana Jones", text: "Surpreendeu nos resultados. A qualidade é impressionante." },
  },
  {
    icon: Smartphone,
    name: "UGC Build",
    short: "Fotos ultra-realistas de pessoas com produtos — sem cara de IA",
    description:
      "Crie fotos realistas de pessoas usando produtos. Aparência de foto de iPhone, sem o aspecto artificial de IA. Ideal para e-commerce, unboxing e campanhas de produto com fidelidade máxima.",
    example:
      "Gere uma foto de unboxing realista para um produto do seu cliente.",
    plan: "Base",
    color: "from-orange-500 to-amber-600",
    glowColor: "rgba(249,115,22,0.15)",
    advantages: [
      "Fotos com aparência 100% real",
      "Sem necessidade de modelo ou estúdio",
      "Perfeito para e-commerce e social",
    ],
    feedback: { name: "David", text: "As fotos UGC parecem tiradas por uma pessoa real. Meus clientes amaram." },
  },
  {
    icon: Package,
    name: "Mockup Produto",
    short: "Mockups incríveis de qualquer produto em cenários incríveis",
    description:
      "Coloque qualquer produto em cenários profissionais com poucos cliques. Sem Photoshop, sem fundo infinito. Cenários únicos e realistas para cada tipo de produto.",
    example:
      "Crie um mockup de embalagem em ambiente premium em 30 segundos.",
    plan: "Base",
    color: "from-emerald-400 to-teal-700",
    glowColor: "rgba(52,211,153,0.15)",
    advantages: [
      "Cenários automáticos e realistas",
      "Sem Photoshop ou edição manual",
      "Ideal para apresentação de produto",
    ],
    feedback: { name: "Matheus", text: "Mockups que antes levavam 1h agora saem em 30 segundos." },
  },
  {
    icon: Shapes,
    name: "Assets 3D",
    short: "Elementos e objetos em PNG transparente",
    description:
      "Gere elementos 3D com fundo transparente para usar em composições, posts e criativos. Pronto para arrastar no Photoshop, Figma ou Canva. Elementos únicos e estilizados.",
    example: "Crie um ícone 3D flutuante para o carrossel do seu cliente.",
    plan: "Base",
    color: "from-red-500 to-rose-700",
    glowColor: "rgba(239,68,68,0.15)",
    advantages: [
      "PNG transparente pronto para usar",
      "Compatível com Figma, Photoshop e Canva",
      "Elementos únicos sob demanda",
    ],
    feedback: { name: "Gabriel Castro", text: "Uso em quase todo post. Os assets ficam incríveis." },
  },
  {
    icon: ScanLine,
    name: "Remix Layout",
    short: "Replique layouts trocando foto e texto com poucos cliques",
    description:
      "Tem um criativo que funcionou? Replique ele para outros clientes ou datas trocando só a imagem e o texto. Consistência visual sem retrabalho manual.",
    example:
      "Adapte um post que viralizou para 5 clientes diferentes em 2 minutos.",
    plan: "Pro",
    color: "from-purple-500 to-fuchsia-700",
    glowColor: "rgba(168,85,247,0.15)",
    advantages: [
      "Replique criativos de sucesso instantaneamente",
      "Mantenha consistência visual entre clientes",
      "Escale sua produção sem perder qualidade",
    ],
    feedback: { name: "Matheus", text: "Ganho incrível de produtividade. Um post que viralizou vira template." },
  },
  {
    icon: FileText,
    name: "CopyMaker",
    short: "Copy pronta para posts, carrossel, stories e reels",
    description:
      "Gere copies completas para qualquer formato de conteúdo com base no perfil e briefing do seu cliente. A IA já conhece o tom de voz e entrega legendas, CTAs e hashtags.",
    example:
      "Gere 5 opções de legenda para um post de lançamento em 30 segundos.",
    plan: "Pro",
    color: "from-green-400 to-emerald-700",
    glowColor: "rgba(74,222,128,0.15)",
    advantages: [
      "Tom de voz personalizado por cliente",
      "Legendas, CTAs e hashtags inclusos",
      "Múltiplas variações em segundos",
    ],
    feedback: { name: "David", text: "Economizo pelo menos 1h por dia só em copies." },
  },
  {
    icon: Briefcase,
    name: "Consultor de Perfil",
    short: "Análise completa de perfil — entregável direto ao cliente",
    description:
      "Analisa o perfil do Instagram do seu cliente e gera um relatório completo com pontos de melhoria, oportunidades e estratégia. Entregável profissional pronto para apresentar.",
    example:
      "Entregue um diagnóstico de perfil para fechar um novo cliente.",
    plan: "Pro",
    color: "from-blue-400 to-indigo-600",
    glowColor: "rgba(96,165,250,0.15)",
    advantages: [
      "Relatório profissional automático",
      "Use como ferramenta de vendas",
      "Diagnóstico técnico completo",
    ],
    feedback: { name: "Ruyana Jones", text: "Fechei 3 clientes novos usando o relatório como portfólio." },
  },
  {
    icon: History,
    name: "Restaurador PRO",
    short: "Recupere fotos antigas e faça upscales com qualidade",
    description:
      "Restaure fotos antigas, melhore resolução e faça upscale de imagens com qualidade profissional. Ideal para projetos de branding, reposicionamento e resgate de acervo.",
    example:
      "Restaure fotos antigas de um cliente para um projeto de rebranding.",
    plan: "Base",
    color: "from-amber-400 to-amber-700",
    glowColor: "rgba(251,191,36,0.15)",
    advantages: [
      "Upscale sem perda de qualidade",
      "Restauração inteligente de fotos antigas",
      "Ideal para projetos de rebranding",
    ],
    feedback: { name: "Ruyana Jones", text: "Surpreendeu nos mockups e Upscale. Duas ferramentas boas demais!" },
  },
  {
    icon: PencilRuler,
    name: "Modo Manual",
    short: "Edite apenas os detalhes que você quiser com múltiplas referências",
    description:
      "Faça ajustes manuais precisos em imagens já geradas. Remova elementos, adicione detalhes ou corrija composições sem precisar regerar do zero.",
    example: "Ajuste um detalhe específico de uma imagem já aprovada.",
    plan: "Base",
    color: "from-lime-400 to-green-600",
    glowColor: "rgba(163,230,53,0.15)",
    advantages: [
      "Controle total sobre a edição",
      "Sem regerar a imagem inteira",
      "Múltiplas referências visuais",
    ],
    feedback: { name: "Gabriel Castro", text: "Ajustes finais ficaram muito mais rápidos." },
  },
  {
    icon: Sparkles,
    name: "Criação Livre",
    short: "Gere criativos com texto — modo experimental",
    description:
      "Modo experimental para geração com imagem base, referência textual e geração refinável. Ideal para explorar estilos novos e testar ideias criativas fora dos padrões.",
    example:
      "Explore um conceito criativo totalmente novo para uma campanha.",
    plan: "Base",
    color: "from-yellow-400 to-orange-600",
    glowColor: "rgba(250,204,21,0.15)",
    advantages: [
      "Liberdade criativa total",
      "Combine texto + imagem + referência",
      "Ideal para brainstorming visual",
    ],
    feedback: { name: "Matheus", text: "Uso quando quero algo completamente diferente. Sempre surpreende." },
  },
  {
    icon: Users,
    name: "Meus Clientes",
    short: "Gerencie sua base de clientes e dados estratégicos",
    description:
      "Gerencie sua base de clientes e dados estratégicos em um único lugar. Briefings salvos, paletas de cores, tom de voz e histórico de geração. A IA já conhece cada cliente.",
    example:
      "Cadastre um cliente e todas as ferramentas já entendem o contexto dele.",
    plan: "Base",
    color: "from-sky-400 to-cyan-700",
    glowColor: "rgba(56,189,248,0.15)",
    advantages: [
      "Briefing centralizado e persistente",
      "IA entende cada cliente automaticamente",
      "Paleta, tom de voz e histórico salvos",
    ],
    feedback: { name: "David", text: "Não preciso mais explicar cada cliente do zero. Genial." },
  },
];

function ToolModal({ tool, onClose }: { tool: Tool; onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-lg" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-card !rounded-[32px] overflow-hidden"
        style={{
          boxShadow: `0 30px 100px rgba(0,0,0,0.6), 0 0 80px ${tool.glowColor}`,
        }}
      >
        {/* Colored top bar */}
        <div className={`h-1.5 bg-gradient-to-r ${tool.color}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-txt-muted hover:text-white hover:bg-white/10 transition-all z-20"
        >
          <X size={16} />
        </button>

        <div className="p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} bg-opacity-20 flex items-center justify-center border border-white/15 shadow-xl flex-shrink-0`}>
              <tool.icon size={26} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-1">{tool.name}</h3>
              <p className="text-sm text-txt-secondary leading-relaxed max-w-lg">
                {tool.description}
              </p>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="relative w-full aspect-video rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-6 overflow-hidden group">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} opacity-20 flex items-center justify-center`}>
                <ImageIcon size={28} className="text-white/60" />
              </div>
              <p className="text-xs text-txt-muted">Screenshot da ferramenta — 1920x1080</p>
            </div>
            {/* Subtle animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-30 animate-gradient-shift"
              style={{
                background: `linear-gradient(135deg, ${tool.glowColor}, transparent, ${tool.glowColor})`,
                backgroundSize: "200% 200%",
              }}
            />
          </div>

          {/* Example of use */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
            <p className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mb-2 font-black">
              Exemplo de uso
            </p>
            <p className="text-white text-sm font-medium leading-relaxed">{tool.example}</p>
          </div>

          {/* Advantages */}
          <div className="mb-6">
            <p className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mb-3 font-black">
              Vantagens
            </p>
            <div className="space-y-2.5">
              {tool.advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-accent" />
                  </div>
                  <span className="text-sm text-txt-secondary">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* User feedback */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] mb-6">
            <Quote size={16} className="text-accent/30 mb-2" />
            <p className="text-sm text-txt-secondary italic mb-2">&ldquo;{tool.feedback.text}&rdquo;</p>
            <p className="text-[11px] text-accent/70 font-bold">{tool.feedback.name}</p>
          </div>

          {/* CTA row */}
          <div className="flex items-center justify-between">
            <span className="text-xs px-4 py-2 rounded-xl bg-accent/10 text-accent border border-accent/20 font-black uppercase tracking-wider">
              Plano {tool.plan}
            </span>
            <a
              href="#planos"
              onClick={onClose}
              className="btn-primary px-8 py-3 text-xs tracking-widest flex items-center gap-2"
            >
              Assinar agora
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Tools() {
  const [selected, setSelected] = useState<Tool | null>(null);

  return (
    <section id="ferramentas" className="py-20 px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-divider max-w-6xl mx-auto mb-16" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel mb-8">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              12 Ferramentas integradas
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-5 tracking-tight">
            Tudo que você precisa.{" "}
            <span className="text-gradient-animated text-glow">
              Em um único lugar.
            </span>
          </h2>
          <p className="text-txt-secondary text-lg max-w-2xl mx-auto">
            Clique em qualquer ferramenta para ver os detalhes, vantagens e exemplos de uso.
          </p>
        </motion.div>

        {/* Tool cards - matching Calango.studio dashboard style */}
        <div className="glass-card !rounded-[32px] p-5 sm:p-6 lg:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.button
                key={tool.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => setSelected(tool)}
                className="text-left relative rounded-[24px] bg-black/40 border border-white/[0.08] overflow-hidden cursor-pointer hover:border-white/[0.18] transition-all duration-500 group min-h-[180px] p-5"
                style={{
                  boxShadow: "0 20px 60px rgba(8,14,30,0.45)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(8,14,30,0.45), 0 0 40px ${tool.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(8,14,30,0.45)";
                }}
              >
                {/* Colored gradient top bar */}
                <div className={`absolute top-0 inset-x-0 h-1 rounded-t-[24px] bg-gradient-to-r ${tool.color} opacity-55 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Radial light */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

                {/* Hover highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.04]" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15 shadow-xl mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <tool.icon size={22} className="text-white" strokeWidth={2} />
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="font-poppins font-bold text-base mb-1 text-white">
                      {tool.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed mb-4 line-clamp-2">
                      {tool.short}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-black text-zinc-500 group-hover:text-zinc-200 uppercase tracking-[0.20em] transition-colors">
                        Acessar Estúdio Criativo
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/10 text-zinc-100 group-hover:bg-accent group-hover:text-black flex items-center justify-center shadow-lg transition-all duration-300">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plan badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-[8px] px-2.5 py-1 rounded-lg font-black uppercase tracking-wider ${
                    tool.plan === "Pro"
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : "bg-accent/8 text-accent/70 border border-accent/15"
                  }`}>
                    {tool.plan}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ToolModal tool={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
