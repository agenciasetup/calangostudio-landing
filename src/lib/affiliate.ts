/**
 * Ponte de afiliados da landing (calangostudio.com.br).
 *
 * A landing e o app (calango.studio) são domínios diferentes — cookie de um não
 * é lido pelo outro. A regra é simples: a landing pega o `?ref=` (e `?c=`) da
 * própria URL e GRUDA em todo link que aponta para `calango.studio` ou `/pay`.
 * O app faz o resto sozinho (captura, guarda 30 dias, aplica desconto e marca a
 * venda). Não há backend/API a chamar aqui — só repasse do código.
 */

export const AFF_KEY = "cs_aff_ref";
export const AFF_SUB_KEY = "cs_aff_sub";

/** Desconto concedido a quem chega por link de afiliado (20% OFF). */
export const AFFILIATE_DISCOUNT = 0.2;

const REF_RE = /^[A-Z0-9-]{3,32}$/;

/**
 * Lê `?ref=`/`?c=` da URL e persiste em localStorage (first-touch: só sobrescreve
 * quando o código vem de fato na URL). Idempotente e seguro para SSR.
 */
export function captureAffiliate(): void {
  if (typeof window === "undefined") return;
  const qs = new URLSearchParams(window.location.search);
  const ref = (qs.get("ref") || "").trim().toUpperCase();
  const sub = (qs.get("c") || qs.get("sub") || "").trim().toLowerCase();
  if (!REF_RE.test(ref)) return;
  try {
    localStorage.setItem(AFF_KEY, ref);
    if (sub) localStorage.setItem(AFF_SUB_KEY, sub);
    else localStorage.removeItem(AFF_SUB_KEY);
  } catch {
    /* localStorage indisponível (modo privado, etc.) — ignora */
  }
}

export function getAffiliateCode(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(AFF_KEY) || "";
  } catch {
    return "";
  }
}

export function getAffiliateSub(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(AFF_SUB_KEY) || "";
  } catch {
    return "";
  }
}

/**
 * Anexa `?ref=`/`&c=` a uma URL apenas se ela apontar para o app (calango.studio)
 * ou para `/pay`. Para qualquer outro link, devolve a URL original intacta.
 */
export function decorateUrl(url: string, code: string, sub: string): string {
  if (typeof window === "undefined") return url;
  try {
    const u = new URL(url, window.location.href);
    const isApp = /(^|\.)calango\.studio$/i.test(u.hostname);
    const isPay = u.pathname === "/pay" || u.pathname.startsWith("/pay");
    if (!isApp && !isPay) return url; // só decora links do app/pagamento
    if (code && !u.searchParams.get("ref")) u.searchParams.set("ref", code);
    if (sub && !u.searchParams.get("c")) u.searchParams.set("c", sub);
    return u.toString();
  } catch {
    return url;
  }
}

/** Aplica o desconto de afiliado a um preço "1.234,56" e devolve no mesmo formato. */
export function applyAffiliateDiscount(price: string): string {
  const n = parseFloat(price.replace(/\./g, "").replace(",", "."));
  if (!isFinite(n)) return price;
  return (n * (1 - AFFILIATE_DISCOUNT)).toFixed(2).replace(".", ",");
}

/** Converte um preço no formato BR ("1.234,56") para número. */
function priceToNumber(price: string): number {
  return parseFloat(price.replace(/\./g, "").replace(",", "."));
}

/**
 * Economia (em R$) entre o preço normal e o de afiliado. Devolve já formatado,
 * sem centavos quando forem zero ("30"), ou com centavos ("29,90") quando houver.
 */
export function affiliateSavings(normal: string, affiliate: string): string {
  const diff = priceToNumber(normal) - priceToNumber(affiliate);
  if (!isFinite(diff) || diff <= 0) return "";
  return diff % 1 === 0 ? String(diff) : diff.toFixed(2).replace(".", ",");
}
