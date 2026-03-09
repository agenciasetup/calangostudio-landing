"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clapperboard,
  Camera,
  UserCircle,
  Package,
  Box,
  RefreshCw,
  PenTool,
  Search,
  Wand2,
  Brain,
  Edit3,
  Palette,
  X,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  example: string;
  plan: string;
  gradient: string;
}

const tools: Tool[] = [
  {
    icon: Clapperboard,
    name: "Imagem Criativa",
    short: "Fotos cinematográficas com estilos prontos em segundos",
    description:
      "Gere imagens com estilos profissionais prontos — Animal Art, Car Design, Hero Style, Business, Craft e muito mais. Sem escrever prompt complexo. Só escolher e gerar.",
    example:
      "Gere uma foto estilo Hero para o perfil do seu cliente em 10 segundos.",
    plan: "Base",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Camera,
    name: "Estúdio de Foto",
    short: "Sessões de foto completas com referências de imagem",
    description:
      "Envie uma referência do Pinterest ou qualquer imagem e gere uma sessão de fotos completa com o mesmo estilo, iluminação e composição.",
    example:
      "Recrie a estética de uma foto viral para o perfil do seu cliente.",
    plan: "Base",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: UserCircle,
    name: "UGC Build",
    short: "Fotos realistas de pessoas com produtos — sem cara de IA",
    description:
      "Crie fotos realistas de pessoas usando produtos. Aparência de foto de iPhone, sem o aspecto artificial de IA. Ideal para e-commerce e campanhas de produto.",
    example:
      "Gere uma foto de unboxing realista para um produto do seu cliente.",
    plan: "Base",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Package,
    name: "Mockup Produto",
    short: "Mockups incríveis de qualquer produto em cenários prontos",
    description:
      "Coloque qualquer produto em cenários profissionais com poucos cliques. Sem Photoshop, sem fundo infinito branco.",
    example:
      "Crie um mockup de embalagem em ambiente premium em 30 segundos.",
    plan: "Base",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Box,
    name: "Assets 3D",
    short: "Elementos flutuantes em PNG transparente",
    description:
      "Gere elementos 3D com fundo transparente para usar em composições, posts e criativos. Pronto para arrastar no Photoshop ou Figma.",
    example: "Crie um ícone 3D flutuante para o carrossel do seu cliente.",
    plan: "Base",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: RefreshCw,
    name: "Remix Layout",
    short: "Replique criativos trocando foto e texto com poucos cliques",
    description:
      "Tem um criativo que funcionou? Replique ele para outros clientes ou datas trocando só a imagem e o texto. Consistência sem retrabalho.",
    example:
      "Adapte um post que viralizou para 5 clientes diferentes em 2 minutos.",
    plan: "Pro",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
  {
    icon: PenTool,
    name: "CopyMaker",
    short: "Copies prontas para post, carrossel, story e reels",
    description:
      "Gere copies completas para qualquer formato de conteúdo com base no perfil e briefing do seu cliente. Sem dar contexto toda vez.",
    example:
      "Gere 5 opções de legenda para um post de lançamento em 30 segundos.",
    plan: "Pro",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Search,
    name: "Consultor de Perfil",
    short: "Análise completa de perfil — entregável direto ao cliente",
    description:
      "Analisa o perfil do Instagram do seu cliente e gera um relatório completo com pontos de melhoria, oportunidades e estratégia. Entregável profissional pronto.",
    example:
      "Entregue um diagnóstico de perfil para fechar um novo cliente.",
    plan: "Pro",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: Wand2,
    name: "Restaurador PRO",
    short: "Recupere fotos antigas e faça upscales com qualidade",
    description:
      "Restaure fotos antigas, melhore resolução e faça upscale de imagens com qualidade profissional. Ideal para projetos de branding e reposicionamento.",
    example:
      "Restaure fotos antigas de um cliente para um projeto de rebranding.",
    plan: "Base",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    icon: Brain,
    name: "Prompt Maker",
    short: "Extraia o prompt de qualquer imagem e aplique na sua foto",
    description:
      "Enviou uma imagem que amou? O Prompt Maker extrai o prompt dela para você aplicar com a sua foto ou do seu cliente. Copie o estilo de qualquer imagem.",
    example:
      "Extraia o estilo de uma foto do Pinterest e aplique no seu cliente.",
    plan: "Base",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Edit3,
    name: "Modo Manual",
    short: "Edite qualquer imagem com poucos cliques",
    description:
      "Faça ajustes manuais precisos em imagens já geradas. Remova elementos, adicione detalhes ou corrija sem precisar regerar do zero.",
    example: "Ajuste um detalhe específico de uma imagem já aprovada.",
    plan: "Base",
    gradient: "from-slate-500/20 to-zinc-500/20",
  },
  {
    icon: Palette,
    name: "Criação Livre",
    short: "Gere criativos com texto — modo experimental",
    description:
      "Modo experimental para geração com texto livre. Ideal para explorar estilos novos e testar ideias fora dos padrões.",
    example:
      "Explore um conceito criativo totalmente novo para uma campanha.",
    plan: "Base",
    gradient: "from-rose-500/20 to-red-500/20",
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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg glass-card p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-txt-muted hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={16} />
        </button>

        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-5`}>
          <tool.icon size={24} className="text-white/90" strokeWidth={2} />
        </div>
        <h3 className="font-poppins font-bold text-2xl mb-2">{tool.name}</h3>
        <p className="text-txt-secondary mb-5 leading-relaxed">
          {tool.description}
        </p>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5">
          <p className="text-[11px] text-txt-muted uppercase tracking-wider mb-1.5 font-semibold">
            Exemplo de uso
          </p>
          <p className="text-white text-sm">{tool.example}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/20 font-bold uppercase tracking-wider">
            Plano {tool.plan}
          </span>
          <a
            href="#planos"
            onClick={onClose}
            className="btn-primary px-6 py-2.5 text-xs tracking-widest"
          >
            Assinar agora
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Tools() {
  const [selected, setSelected] = useState<Tool | null>(null);

  return (
    <section id="ferramentas" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs text-txt-secondary font-semibold uppercase tracking-wider">
              12 Ferramentas integradas
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
            Tudo que você precisa.{" "}
            <span className="text-gradient-animated">
              Em um único lugar.
            </span>
          </h2>
          <p className="text-txt-secondary text-lg">
            Clique em qualquer ferramenta para ver como ela funciona.
          </p>
        </motion.div>

        <div className="glass-card !rounded-3xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.button
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => setSelected(tool)}
                className="text-left p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.02] hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-500 group"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon size={20} className="text-white/80" strokeWidth={2} />
                </div>
                <h3 className="font-poppins font-bold text-base mb-1 group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-sm text-txt-muted leading-relaxed">
                  {tool.short}
                </p>
                <span className="inline-block mt-3 text-[10px] px-2.5 py-1 rounded-lg bg-accent/8 text-accent/80 border border-accent/10 font-bold uppercase tracking-wider">
                  {tool.plan}
                </span>
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
