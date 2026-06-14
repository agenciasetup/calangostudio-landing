"use client";

import { useEffect } from "react";
import {
  captureAffiliate,
  decorateUrl,
  getAffiliateCode,
  getAffiliateSub,
} from "@/lib/affiliate";

/**
 * Ponte de afiliado: captura `?ref=`/`?c=` da URL, persiste no navegador e
 * reescreve todo link que aponta para `calango.studio` ou `/pay`, anexando o
 * código. Reaplica via MutationObserver para cobrir links renderizados depois
 * (animações, conteúdo dinâmico). Não chama nenhuma API — só repassa o código.
 *
 * Montar uma única vez no layout raiz.
 */
export default function AffiliateLinkBridge() {
  useEffect(() => {
    captureAffiliate();
    const code = getAffiliateCode();
    const sub = getAffiliateSub();
    if (!code) return;

    const apply = () =>
      document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
        a.href = decorateUrl(a.getAttribute("href") || "", code, sub);
      });

    apply();
    // Observa só childList/subtree: setar href dispara mutação de atributo, que
    // não é observada — então não há loop.
    const mo = new MutationObserver(apply);
    mo.observe(document.documentElement, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}
