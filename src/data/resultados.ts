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
 *    _Manual | _manual      → "Personalizado"
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
  if (/_[Mm]anual/.test(name)) return "Personalizado";
  return "Imagem Criativa";
}

const filenames = [
  "animal_criativo.jpg",
  "animal2_criativo.jpg",
  "animal3_criativo.jpg",
  "animal4_criativo.jpg",
  "animal5_criativo.jpg",
  "animal6_criativo.jpg",
  "animal7_criativo.jpg",
  "animal8_criativo.jpg",
  "animal9_criativo.jpg",
  "animal10_criativo.jpg",
  "animal11_criativo.jpg",
  "business_criativo.jpg",
  "business2_criativo.jpg",
  "car_criativo.jpg",
  "car2_criativo.jpg",
  "classic_criativo.jpg",
  "hero_criativo.jpg",
  "hero3_criativo.jpg",
  "Kel_foto.jpg",
  "homem_foto.jpeg",
  "raquel_foto_1.png",
  "raquel_foto_2.png",
  "raquel_foto_3.png",
  "vini_ugc.jpg",
  "vini2_ugc.jpg",
  "vini3_ugc.jpg",
  "adam_manual.jpeg",
  "book_manual.jpg",
  "personalizado_manual.jpg",
  "personalizado2_manual.jpg",
  "space_manual.jpeg",
  "personalizado.jpeg",
];

export const resultados: ResultadoItem[] = filenames.map((filename) => ({
  filename,
  label: detectLabel(filename),
}));
