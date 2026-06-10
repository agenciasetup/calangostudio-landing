/**
 * Link estável de pagamento/assinatura.
 *
 * Os botões de compra da landing apontam todos para cá. A resolução do destino
 * real (Asaas, Hotmart ou Hubla) é feita no servidor do app calango.studio pelo
 * endpoint `/api/pay`, que lê `tool_configs('landing_pay')` no Supabase e faz o
 * redirect 302. Assim, trocar o provedor/link no Admin → Pagamentos do
 * calango.studio muda o destino na hora, sem precisar de deploy na landing.
 */
export const PAY_URL = "https://calango.studio/pay";
