/**
 * Galeria de resultados reais gerados no Calango Studio.
 *
 * Para adicionar novas imagens:
 * 1. Coloque o arquivo em /public/images/resultados/
 * 2. Adicione um objeto abaixo com { filename, label }
 * 3. O label é detectado pelo sufixo do nome do arquivo:
 *    _Criativo | _criativo  → "Imagem Criativa"
 *    _Foto | _foto          → "Estúdio de Foto"
 *    _UGC | _ugc            → "UGC Build"
 *    _Mockup | _mockup      → "Mockup Produto"
 *    _3D | _3d              → "Assets 3D"
 *    _Remix | _remix        → "Remix Layout"
 *    _Restaurador | _rest   → "Restaurador PRO"
 */

export interface ResultadoItem {
  filename: string;
  label: string;
}

function detectLabel(filename: string): string {
  const name = filename.replace(/\.\w+$/, "");
  if (/_[Cc]riativo/.test(name)) return "Imagem Criativa";
  if (/_[Ff]oto/.test(name)) return "Estúdio de Foto";
  if (/_[Uu][Gg][Cc]/.test(name)) return "UGC Build";
  if (/_[Mm]ockup/.test(name)) return "Mockup Produto";
  if (/_3[Dd]/.test(name)) return "Assets 3D";
  if (/_[Rr]emix/.test(name)) return "Remix Layout";
  if (/_[Rr]estaurador|_[Rr]est/.test(name)) return "Restaurador PRO";
  return "Imagem Criativa";
}

const filenames = [
  "resultado-1.jpg",
  "resultado-2.jpg",
  "resultado-3.jpg",
  "resultado-4.jpg",
  "resultado-5.jpg",
  "resultado-6.jpg",
  "resultado-7.jpg",
  "resultado-8.jpg",
  "resultado-9.jpg",
  "resultado-10.jpg",
  "resultado-11.jpg",
  "resultado-12.jpg",
  "resultado-13.jpg",
];

export const resultados: ResultadoItem[] = filenames.map((filename) => ({
  filename,
  label: detectLabel(filename),
}));
