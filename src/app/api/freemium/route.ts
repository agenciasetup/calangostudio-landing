import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
}

function validateCPF(cpf: string): boolean {
  const clean = cpf.replace(/\D/g, "");
  if (clean.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(clean)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(clean[i]) * (10 - i);
  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(clean[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(clean[i]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  return remainder === parseInt(clean[10]);
}

function validateBrazilianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) return false;
  const ddd = parseInt(digits.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  // Celular 11 dígitos: 3o dígito deve ser 9
  if (digits.length === 11 && digits[2] !== "9") return false;
  return true;
}

/**
 * Normaliza email para prevenir aliases:
 * - Gmail: remove pontos e +tags do local part
 * - Outros: lowercase + trim
 */
function normalizeEmail(email: string): string {
  const raw = email.toLowerCase().trim();
  const [local, domain] = raw.split("@");
  if (!local || !domain) return raw;

  const gmailDomains = ["gmail.com", "googlemail.com"];
  if (gmailDomains.includes(domain)) {
    const cleaned = local.split("+")[0].replace(/\./g, "");
    return `${cleaned}@${domain}`;
  }

  // Para outros provedores, apenas remove +tags
  const withoutTag = local.split("+")[0];
  return `${withoutTag}@${domain}`;
}

/**
 * Validação de CPF via consulta externa (Brasil API).
 * Retorna true se o CPF é real, false se não encontrado.
 * Em caso de erro na API (instabilidade), retorna true (fail-open para não travar o cadastro).
 */
async function validateCPFExternal(cpf: string): Promise<{ valid: boolean; name?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch(`https://brasilapi.com.br/api/cpf/v1/${cpf}`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.status === 404) {
      return { valid: false }; // CPF não encontrado na base
    }

    if (!res.ok) {
      // API instável — fail-open
      console.warn(`[CPF Validation] Brasil API returned ${res.status}`);
      return { valid: true };
    }

    const data = await res.json();
    return { valid: true, name: data.nome };
  } catch (err) {
    // Timeout ou erro de rede — fail-open
    console.warn("[CPF Validation] External check failed, proceeding:", err);
    return { valid: true };
  }
}

function generateSecureCode(): string {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return String(100000 + (array[0] % 900000));
}

// Rate limit simples em memória (por IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  entry.count++;
  return entry.count <= RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde antes de tentar novamente." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, cpf, phone } = body;

    // Validações
    if (!name || !email || !cpf || !phone) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    // Sanitizar nome (remover tags HTML)
    const safeName = String(name).replace(/<[^>]*>/g, "").trim();
    if (safeName.length < 3 || safeName.length > 120) {
      return NextResponse.json(
        { error: "Nome deve ter entre 3 e 120 caracteres." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const normalizedEmail = normalizeEmail(email);

    const cleanCpf = cpf.replace(/\D/g, "");
    if (!validateCPF(cleanCpf)) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    // Validação externa do CPF (consulta API)
    const cpfCheck = await validateCPFExternal(cleanCpf);
    if (!cpfCheck.valid) {
      return NextResponse.json(
        { error: "CPF não encontrado na base da Receita Federal." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!validateBrazilianPhone(cleanPhone)) {
      return NextResponse.json(
        { error: "Telefone inválido. Use o formato (DDD) + número." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Verificar se já existe conta paga no Calango.studio
    const { data: existingPaidProfile } = await supabase
      .from("profiles")
      .select("id, plan_key, status")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (
      existingPaidProfile &&
      existingPaidProfile.plan_key &&
      existingPaidProfile.plan_key !== "freemium"
    ) {
      return NextResponse.json(
        {
          error:
            "Este e-mail já possui uma conta ativa no Calango Studio. Faça login na plataforma.",
        },
        { status: 409 }
      );
    }

    // Verificar duplicidade — se pendente com código expirado, permite re-registro (UPDATE)
    const { data: existingRecord } = await supabase
      .from("freemium_users")
      .select("id, status, email, cpf, phone, whatsapp_code_expires_at")
      .or(
        `email.eq.${normalizedEmail},cpf.eq.${cleanCpf},phone.eq.${cleanPhone}`
      )
      .limit(1)
      .maybeSingle();

    if (existingRecord) {
      // Se convertido, bloqueia
      if (existingRecord.status === "converted") {
        return NextResponse.json(
          {
            error:
              "Estes dados já estão vinculados a uma conta ativa. Faça login.",
          },
          { status: 409 }
        );
      }

      // Se ativo ou expirado, bloqueia
      if (
        existingRecord.status === "active" ||
        existingRecord.status === "expired"
      ) {
        return NextResponse.json(
          {
            error:
              "Estes dados já foram utilizados no período de teste gratuito.",
          },
          { status: 409 }
        );
      }

      // Se pendente com código expirado, permite re-registro (atualiza o registro)
      if (existingRecord.status === "pending") {
        const codeExpired =
          existingRecord.whatsapp_code_expires_at &&
          new Date() > new Date(existingRecord.whatsapp_code_expires_at);

        if (codeExpired) {
          // Re-registrar: atualizar dados e gerar novo código
          const newCode = generateSecureCode();
          const newExpiry = new Date();
          newExpiry.setMinutes(newExpiry.getMinutes() + 15);

          await supabase
            .from("freemium_users")
            .update({
              name: safeName,
              email: normalizedEmail,
              cpf: cleanCpf,
              phone: cleanPhone,
              ip_address: ip,
              whatsapp_code: newCode,
              whatsapp_code_expires_at: newExpiry.toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", existingRecord.id);

          // TODO: Enviar código via WhatsApp Business API
          // await sendWhatsAppCode(cleanPhone, newCode);

          return NextResponse.json({
            success: true,
            freemiumId: existingRecord.id,
            message:
              "Código reenviado! Verifique seu WhatsApp.",
          });
        }

        // Pendente com código ainda válido — reenviar
        return NextResponse.json({
          success: true,
          freemiumId: existingRecord.id,
          message:
            "Você já tem um cadastro pendente. Verifique seu WhatsApp para o código.",
        });
      }
    }

    // Gerar código de verificação WhatsApp (criptograficamente seguro)
    const whatsappCode = generateSecureCode();
    const codeExpires = new Date();
    codeExpires.setMinutes(codeExpires.getMinutes() + 15);

    // Inserir registro freemium
    const { data: freemiumUser, error: insertError } = await supabase
      .from("freemium_users")
      .insert({
        name: safeName,
        email: normalizedEmail,
        cpf: cleanCpf,
        phone: cleanPhone,
        ip_address: ip,
        status: "pending",
        whatsapp_code: whatsappCode,
        whatsapp_code_expires_at: codeExpires.toISOString(),
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Freemium insert error:", insertError);
      const msg = (insertError.message || "").toLowerCase();
      if (msg.includes("duplicate") || msg.includes("unique")) {
        return NextResponse.json(
          {
            error:
              "Dados já cadastrados. Cada pessoa pode usar o teste gratuito apenas uma vez.",
          },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Erro ao cadastrar. Tente novamente." },
        { status: 500 }
      );
    }

    // TODO: Enviar código via WhatsApp Business API
    // await sendWhatsAppCode(cleanPhone, whatsappCode);

    // Salvar também na tabela leads para tracking (fire-and-forget)
    try {
      await supabase.from("leads").insert({
        name: safeName,
        email: normalizedEmail,
        whatsapp: cleanPhone,
        source: "freemium",
      });
    } catch {
      // Ignora erro — lead é secundário
    }

    return NextResponse.json({
      success: true,
      freemiumId: freemiumUser.id,
      message: "Cadastro realizado! Verifique seu WhatsApp para o código.",
    });
  } catch (e: unknown) {
    console.error("Freemium registration error:", e);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
