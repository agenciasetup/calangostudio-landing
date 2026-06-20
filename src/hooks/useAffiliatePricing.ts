"use client";

import { useEffect, useState } from "react";

// ─── Easy-to-change affiliate param names ─────────────────────────────────────
// If ANY of these query params is present and non-empty the visitor is treated
// as an affiliate and receives the discounted Pro price.
// NOTE: "ref" is also used by the existing affiliate.ts / useAffiliate hook for
// code capture — changing it here is safe (this hook only reads presence/absence).
const AFFILIATE_PARAMS = ["ref", "aff", "afiliado"] as const;

const SESSION_KEY = "cs_affiliate";

const PRO_PRICE_DIRECT    = "199,90";
const PRO_PRICE_AFFILIATE = "169,90";

function detectAffiliate(): boolean {
  try {
    // 1. Already persisted from an earlier page load this session?
    if (sessionStorage.getItem(SESSION_KEY) === "1") return true;

    // 2. Any of the affiliate params in the current URL?
    const qs = new URLSearchParams(window.location.search);
    const found = AFFILIATE_PARAMS.some(
      (param) => (qs.get(param) ?? "").trim() !== ""
    );
    if (found) {
      sessionStorage.setItem(SESSION_KEY, "1");
      return true;
    }
  } catch {
    // SSR or private-mode storage — silently ignore
  }
  return false;
}

/**
 * Returns the correct Pro plan price based on how the visitor arrived.
 *
 * Detection order:
 *   1. sessionStorage key "cs_affiliate" (persists within the tab session)
 *   2. URL query param matching any entry in AFFILIATE_PARAMS
 *
 * Hydration-safe: defaults to direct price on the server and first render;
 * flips to affiliate price (if applicable) after the first useEffect run.
 * A brief 199→169 flash for affiliate visitors is acceptable.
 */
export function useAffiliatePricing() {
  // Default to direct — matches server-rendered HTML, avoids hydration mismatch.
  const [isAffiliate, setIsAffiliate] = useState(false);

  useEffect(() => {
    setIsAffiliate(detectAffiliate());
  }, []);

  return {
    isAffiliate,
    proPrice: isAffiliate ? PRO_PRICE_AFFILIATE : PRO_PRICE_DIRECT,
    proPriceOriginal: PRO_PRICE_DIRECT,
  } as const;
}
