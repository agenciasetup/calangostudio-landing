import { lazy } from "react";
import { Camera, Palette, PenLine } from "lucide-react";

/**
 * FUNCTIONS registry — ordered list of platform functions for the mock lab
 * and future FunctionsCarousel.
 */
export const FUNCTIONS = [
  {
    key: "criar-imagem",
    label: "Criar Imagem",
    Icon: Palette,
    accent: "pink",
    Mock: lazy(() => import("./mocks/MockCriarImagem")),
  },
  {
    key: "sessao-fotos",
    label: "Sessão de Fotos",
    Icon: Camera,
    accent: "cyan",
    Mock: lazy(() => import("./mocks/MockSessaoFotos")),
  },
  {
    key: "studio",
    label: "Studio",
    Icon: PenLine,
    accent: "fuchsia",
    Mock: lazy(() => import("./mocks/MockStudio")),
  },
  // Tasks 9-12: add entries here when each Mock file is created:
  // { key:"criar-copy", label:"Criar Copy", Icon:Pencil, accent:"emerald", Mock: lazy(()=>import("./mocks/MockCriarCopy")) },
  // { key:"contexto", label:"Contexto de Cliente", Icon:IdCard, accent:"sky", Mock: lazy(()=>import("./mocks/MockContexto")) },
  // { key:"clientes", label:"Gerenciar Clientes", Icon:Users, accent:"sky", Mock: lazy(()=>import("./mocks/MockClientes")) },
  // { key:"prospeccao", label:"Prospecção", Icon:Target, accent:"primary", Mock: lazy(()=>import("./mocks/MockProspeccao")) },
] as const;

export type FunctionKey = (typeof FUNCTIONS)[number]["key"];
