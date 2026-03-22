import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** Read image filenames from a directory inside public/images/ (server-only). */
export function getImageFilenames(dir: string): string[] {
  const fullPath = path.join(process.cwd(), "public", "images", dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort();
}

const LABEL_RULES: [RegExp, string][] = [
  [/_[Cc]riativo/, "Imagem Criativa"],
  [/_[Ff]oto/, "Estúdio de Foto"],
  [/_[Uu][Gg][Cc]/, "UGC Build"],
  [/_[Mm]ockup/, "Mockup Produto"],
  [/_3[Dd]/, "Assets 3D"],
  [/_[Dd]esign/, "Design Studio"],
  [/_[Rr]estaurador|_[Rr]est/, "Restaurador PRO"],
  [/_[Mm]anual/, "Personalizado"],
];

export function detectLabel(filename: string): string {
  const name = filename.replace(/\.\w+$/, "");
  for (const [re, label] of LABEL_RULES) {
    if (re.test(name)) return label;
  }
  return "Imagem Criativa";
}
