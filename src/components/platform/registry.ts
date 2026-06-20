import { lazy } from "react";
import { Camera } from "lucide-react";

/**
 * FUNCTIONS registry — ordered list of platform functions for the mock lab
 * and future FunctionsCarousel.
 *
 * Only MockSessaoFotos is implemented in Fase 0.
 * Other mocks will be added when their tasks (7-12) are completed.
 */
export const FUNCTIONS = [
  {
    key: "sessao-fotos",
    label: "Sessão de Fotos",
    Icon: Camera,
    accent: "cyan",
    Mock: lazy(() => import("./mocks/MockSessaoFotos")),
  },
  // Tasks 7-12: add entries here when each Mock file is created:
  // { key:"criar-imagem", label:"Criar Imagem", Icon:Sparkles, accent:"pink", Mock: lazy(()=>import("./mocks/MockCriarImagem")) },
  // { key:"studio", label:"Studio", Icon:Palette, accent:"primary", Mock: lazy(()=>import("./mocks/MockStudio")) },
  // { key:"criar-copy", label:"Criar Copy", Icon:Pencil, accent:"emerald", Mock: lazy(()=>import("./mocks/MockCriarCopy")) },
  // { key:"contexto", label:"Contexto de Cliente", Icon:IdCard, accent:"sky", Mock: lazy(()=>import("./mocks/MockContexto")) },
  // { key:"clientes", label:"Gerenciar Clientes", Icon:Users, accent:"sky", Mock: lazy(()=>import("./mocks/MockClientes")) },
  // { key:"prospeccao", label:"Prospecção", Icon:Target, accent:"primary", Mock: lazy(()=>import("./mocks/MockProspeccao")) },
] as const;

export type FunctionKey = (typeof FUNCTIONS)[number]["key"];
