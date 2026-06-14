"use client";

import { useEffect, useState } from "react";
import { captureAffiliate, getAffiliateCode } from "@/lib/affiliate";

/**
 * Hook que devolve o código de afiliado ativo (ou "" se não houver). Faz a
 * captura do `?ref=` da URL no mount, então é seguro usar em qualquer
 * componente que precise reagir à presença de um afiliado — por exemplo, para
 * mostrar o preço com 20% de desconto na seção de planos.
 *
 * Começa sempre vazio para casar com o HTML renderizado no servidor (evita
 * hydration mismatch) e só atualiza após o efeito no cliente.
 */
export function useAffiliate(): string {
  const [code, setCode] = useState("");
  useEffect(() => {
    captureAffiliate();
    setCode(getAffiliateCode());
  }, []);
  return code;
}
