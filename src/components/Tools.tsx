"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  {
    icon: "🎬",
    name: "Imagem Criativa",
    short: "Fotos cinematográficas com estilos prontos em segundos",
    description:
      "Gere imagens com estilos profissionais prontos — Animal Art, Car Design, Hero Style, Business, Craft e muito mais. Sem escrever prompt complexo. Só escolher e gerar.",
    example:
      "Gere uma foto estilo Hero para o perfil do seu cliente em 10 segundos.",
    plan: "Base",
  },
  {
    icon: "📸",
    name: "Estúdio de Foto",
    short: "Sessões de foto completas com referências de imagem",
    description:
      "Envie uma referência do Pinterest ou qualquer imagem e gere uma sessão de fotos completa com o mesmo estilo, iluminação e composição.",
    example:
      "Recrie a estética de uma foto viral para o perfil do seu cliente.",
    plan: "Base",
  },
  {
    icon: "🧑‍💻",
    name: "UGC Build",
    short: "Fotos realistas de pessoas com produtos — sem cara de IA",
    description:
      "Crie fotos realistas de pessoas usando produtos. Aparência de foto de iPhone, sem o aspecto artificial de IA. Ideal para e-commerce e campanhas de produto.",
    example:
      "Gere uma foto de unboxing realista para um produto do seu cliente.",
    plan: "Base",
  },
  {
    icon: "📦",
    name: "Mockup Produto",
    short: "Mockups incríveis de qualquer produto em cenários prontos",
    description:
      "Coloque qualquer produto em cenários profissionais com poucos cliques. Sem Photoshop, sem fundo infinito branco.",
    example:
      "Crie um mockup de embalagem em ambiente premium em 30 segundos.",
    plan: "Base",
  },
  {
    icon: "🧊",
    name: "Assets 3D",
    short: "Elementos flutuantes em PNG transparente",
    description:
      "Gere elementos 3D com fundo transparente para usar em composições, posts e criativos. Pronto para arrastar no Photoshop ou Figma.",
    example: "Crie um ícone 3D flutuante para o carrossel do seu cliente.",
    plan: "Base",
  },
  {
    icon: "🔄",
    name: "Remix Layout",
    short: "Replique criativos trocando foto e texto com poucos cliques",
    description:
      "Tem um criativo que funcionou? Replique ele para outros clientes ou datas trocando só a imagem e o texto. Consistência sem retrabalho.",
    example:
      "Adapte um post que viralizou para 5 clientes diferentes em 2 minutos.",
    plan: "Pro",
  },
  {
    icon: "✍️",
    name: "CopyMaker",
    short: "Copies prontas para post, carrossel, story e reels",
    description:
      "Gere copies completas para qualquer formato de conteúdo com base no perfil e briefing do seu cliente. Sem dar contexto toda vez.",
    example:
      "Gere 5 opções de legenda para um post de lançamento em 30 segundos.",
    plan: "Pro",
  },
  {
    icon: "🔍",
    name: "Consultor de Perfil",
    short: "Análise completa de perfil — entregável direto ao cliente",
    description:
      "Analisa o perfil do Instagram do seu cliente e gera um relatório completo com pontos de melhoria, oportunidades e estratégia. Entregável profissional pronto.",
    example:
      "Entregue um diagnóstico de perfil para fechar um novo cliente.",
    plan: "Pro",
  },
  {
    icon: "🪄",
    name: "Restaurador PRO",
    short: "Recupere fotos antigas e faça upscales com qualidade",
    description:
      "Restaure fotos antigas, melhore resolução e faça upscale de imagens com qualidade profissional. Ideal para projetos de branding e reposicionamento.",
    example:
      "Restaure fotos antigas de um cliente para um projeto de rebranding.",
    plan: "Base",
  },
  {
    icon: "🧠",
    name: "Prompt Maker",
    short: "Extraia o prompt de qualquer imagem e aplique na sua foto",
    description:
      "Enviou uma imagem que amou? O Prompt Maker extrai o prompt dela para você aplicar com a sua foto ou do seu cliente. Copie o estilo de qualquer imagem.",
    example:
      "Extraia o estilo de uma foto do Pinterest e aplique no seu cliente.",
    plan: "Base",
  },
  {
    icon: "✏️",
    name: "Modo Manual",
    short: "Edite qualquer imagem com poucos cliques",
    description:
      "Faça ajustes manuais precisos em imagens já geradas. Remova elementos, adicione detalhes ou corrija sem precisar regerar do zero.",
    example: "Ajuste um detalhe específico de uma imagem já aprovada.",
    plan: "Base",
  },
  {
    icon: "🎨",
    name: "Criação Livre",
    short: "Gere criativos com texto — modo experimental",
    description:
      "Modo experimental para geração com texto livre. Ideal para explorar estilos novos e testar ideias fora dos padrões.",
    example:
      "Explore um conceito criativo totalmente novo para uma campanha.",
    plan: "Base",
  },
];

type Tool = (typeof tools)[number];

function ToolModal({
  tool,
  onClose,
}: {
  tool: Tool;
  onClose: () => void;
}) {
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-bg-secondary border border-glass p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-txt-secondary hover:text-white transition-colors text-xl"
        >
          ✕
        </button>

        <span className="text-5xl block mb-4">{tool.icon}</span>
        <h3 className="font-syne font-bold text-2xl mb-2">{tool.name}</h3>
        <p className="text-[#cccccc] mb-4 leading-relaxed">
          {tool.description}
        </p>

        <div className="p-4 rounded-xl bg-bg-primary border border-glass mb-4">
          <p className="text-sm text-txt-secondary mb-1">Exemplo de uso:</p>
          <p className="text-white">{tool.example}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            Plano {tool.plan}
          </span>
          <a
            href="#planos"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black font-semibold text-sm hover:shadow-[0_0_24px_rgba(255,170,0,0.4)] transition-shadow"
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
    <section id="ferramentas" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Tudo que você precisa.{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Em um único lugar.
            </span>
          </h2>
          <p className="text-txt-secondary text-lg">
            Clique em qualquer ferramenta para ver como ela funciona.
          </p>
        </motion.div>

        <div className="p-6 sm:p-8 rounded-2xl bg-bg-secondary/50 border border-glass backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.button
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setSelected(tool)}
                className="text-left p-5 rounded-xl bg-bg-primary border border-glass hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,170,0,0.08)] transition-all duration-300 group"
              >
                <span className="text-3xl block mb-3">{tool.icon}</span>
                <h3 className="font-syne font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-txt-secondary leading-relaxed">
                  {tool.short}
                </p>
                <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 border border-accent/10">
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
