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
      "Gere imagens com estilos profissionais prontos. Animal Art, Car Design, Hero Style, Business, Craft e muito mais. Sem escrever prompt complexo. Só escolher o estilo, enviar a foto e gerar. A IA já entende o tom criativo e entrega em segundos.",
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
      "Referência visual direta. Envie qualquer imagem",
      "Mantém estilo e iluminação da referência",
      "Perfeito para personal branding consistente",
    ],
    feedback: { name: "Ruyana Jones", text: "Surpreendeu nos resultados. A qualidade é impressionante." },
  },
  {
    icon: Smartphone,
    name: "UGC Build",
    short: "Fotos ultra-realistas de pessoas com produtos. Sem cara de IA",
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
    name: "Design Studio",
    short: "Editor visual drag-and-drop para montar composições",
    description:
      "Monte layouts e composições visuais com um editor profissional integrado. Arraste elementos, aplique templates e use os dados do cliente para manter a identidade visual consistente.",
    example:
      "Monte um carrossel inteiro arrastando elementos e textos direto no editor.",
    plan: "Pro",
    color: "from-purple-500 to-fuchsia-700",
    glowColor: "rgba(168,85,247,0.15)",
    advantages: [
      "Interface drag-and-drop intuitiva",
      "Biblioteca de templates prontos",
      "Integração com dados e assets do cliente",
    ],
    feedback: { name: "Matheus", text: "Ganho incrível de produtividade. Montar peças ficou muito mais rápido." },
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
    short: "Análise completa de perfil. Entregável direto ao cliente",
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
    name: "Flow",
    short: "Automatize fluxos de trabalho com nós visuais",
    description:
      "Conecte ferramentas, dados de clientes e entregas em um workflow visual. Arraste nós, defina gatilhos e deixe a IA executar o fluxo de produção de conteúdo de ponta a ponta.",
    example:
      "Crie um fluxo que gera copy + imagem + agendamento para 5 clientes de uma vez.",
    plan: "Base",
    color: "from-violet-400 to-purple-600",
    glowColor: "rgba(167,139,250,0.15)",
    advantages: [
      "Construtor de workflows baseado em nós",
      "Encadeie ferramentas e automatize entregas",
      "Produção em escala com contexto inteligente",
    ],
    feedback: { name: "Matheus", text: "Automatizei a produção semanal inteira. Nunca mais fiz tarefa repetitiva." },
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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 md:bg-black/85" />

      {/* Mobile: bottom sheet / Desktop: centered modal */}
      <motion.div
        initial={{ y: "100%", opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-2xl max-h-[90vh] md:max-h-[85vh] bg-[#0a0a0c] md:bg-transparent overflow-hidden rounded-t-[28px] md:rounded-[32px]"
        style={{
          boxShadow: `0 -10px 40px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Mobile drag handle */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Glass card wrapper for desktop */}
        <div className="md:glass-card md:!rounded-[32px] overflow-y-auto max-h-[88vh] md:max-h-[85vh] overscroll-contain">
          {/* Colored top bar */}
          <div className={`h-1 md:h-1.5 bg-gradient-to-r ${tool.color}`} />

          {/* Close button - larger tap target on mobile */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 md:top-5 md:right-5 w-10 h-10 md:w-9 md:h-9 rounded-xl bg-white/10 md:bg-white/5 border border-white/10 flex items-center justify-center text-white md:text-txt-muted hover:text-white hover:bg-white/15 transition-all z-20"
          >
            <X size={18} />
          </button>

          <div className="p-5 pb-8 md:p-8 lg:p-10">
            {/* Header */}
            <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6 pr-10">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tool.color} bg-opacity-20 flex items-center justify-center border border-white/15 shadow-xl flex-shrink-0`}>
                <tool.icon size={24} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl md:text-2xl mb-1">{tool.name}</h3>
                <p className="text-sm text-txt-secondary leading-relaxed max-w-lg">
                  {tool.description}
                </p>
              </div>
            </div>

            {/* Screenshot placeholder */}
            <div className="relative w-full aspect-video rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-5 md:mb-6 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${tool.color} opacity-20 flex items-center justify-center`}>
                  <ImageIcon size={24} className="text-white/60" />
                </div>
                <p className="text-xs text-txt-muted">Screenshot da ferramenta</p>
              </div>
            </div>

            {/* Example of use */}
            <div className="p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-5 md:mb-6">
              <p className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mb-2 font-black">
                Exemplo de uso
              </p>
              <p className="text-white text-sm font-medium leading-relaxed">{tool.example}</p>
            </div>

            {/* Advantages */}
            <div className="mb-5 md:mb-6">
              <p className="text-[10px] text-txt-muted uppercase tracking-[0.18em] mb-3 font-black">
                Vantagens
              </p>
              <div className="space-y-2.5">
                {tool.advantages.map((adv, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-accent" />
                    </div>
                    <span className="text-sm text-txt-secondary">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User feedback */}
            <div className="p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] mb-5 md:mb-6">
              <Quote size={16} className="text-accent/30 mb-2" />
              <p className="text-sm text-txt-secondary italic mb-2">&ldquo;{tool.feedback.text}&rdquo;</p>
              <p className="text-[11px] text-accent/70 font-bold">{tool.feedback.name}</p>
            </div>

            {/* CTA row */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs px-3 md:px-4 py-2 rounded-xl bg-accent/10 text-accent border border-accent/20 font-black uppercase tracking-wider whitespace-nowrap">
                Plano {tool.plan}
              </span>
              <a
                href="#planos"
                onClick={onClose}
                className="btn-primary px-6 md:px-8 py-3 text-xs tracking-widest flex items-center gap-2"
              >
                Assinar agora
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Tools() {
  const [selected, setSelected] = useState<Tool | null>(null);

  return (
    <section id="ferramentas" className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background glows - simplified */}
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="section-divider max-w-6xl mx-auto mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs text-zinc-400 font-semibold uppercase tracking-[0.2em] mb-4 md:mb-5 inline-block">
            12 ferramentas integradas
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-5 tracking-tight">
            Tudo que você precisa pra produzir,<br />em um lugar só.
          </h2>
          <p className="text-txt-secondary text-base md:text-lg max-w-2xl mx-auto">
            Sem aba extra. Sem assinatura duplicada. Cada ferramenta existe porque faz parte do dia a dia real de quem atende clientes.
          </p>
        </motion.div>

        {/* Tool cards */}
        <div className="glass-card !rounded-[24px] md:!rounded-[32px] p-3 sm:p-5 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {tools.map((tool, i) => (
              <motion.button
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(i * 0.03, 0.2), duration: 0.4 }}
                onClick={() => setSelected(tool)}
                className="text-left relative rounded-[16px] md:rounded-[24px] bg-black/40 border border-white/[0.08] overflow-hidden cursor-pointer active:scale-[0.98] md:hover:border-white/[0.18] transition-all duration-300 group min-h-[140px] md:min-h-[180px] p-3.5 md:p-5"
              >
                {/* Colored gradient top bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] md:h-1 rounded-t-[16px] md:rounded-t-[24px] bg-gradient-to-r ${tool.color} opacity-55 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center border border-white/15 shadow-xl mb-3 md:mb-4">
                    <tool.icon size={18} className="text-white md:hidden" strokeWidth={2} />
                    <tool.icon size={22} className="text-white hidden md:block" strokeWidth={2} />
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="font-poppins font-bold text-sm md:text-base mb-0.5 md:mb-1 text-white">
                      {tool.name}
                    </h3>
                    <p className="text-[10px] md:text-[11px] text-zinc-400 leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {tool.short}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] md:text-[8px] font-black text-zinc-500 uppercase tracking-[0.15em] md:tracking-[0.20em] hidden sm:block">
                        Acessar Estúdio
                      </span>
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/10 text-zinc-100 flex items-center justify-center shadow-lg ml-auto">
                        <ChevronRight size={12} strokeWidth={2.5} className="md:hidden" />
                        <ChevronRight size={14} strokeWidth={2.5} className="hidden md:block" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plan badge */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <span className={`text-[7px] md:text-[8px] px-2 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg font-black uppercase tracking-wider ${
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
