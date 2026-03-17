import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, cpf, phone } = body;

    // Validações
    if (!name || !email || !cpf || !phone) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const cleanCpf = cpf.replace(/\D/g, "");
    if (!validateCPF(cleanCpf)) {
      return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
    }

    const cleanPhone = sanitizePhone(phone);
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return NextResponse.json(
        { error: "Telefone inválido." },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const supabase = getSupabase();

    // Verificar duplicidade (email, CPF ou telefone)
    const { data: existingEmail } = await supabase
      .from("freemium_users")
      .select("id, status")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle();

    if (existingEmail) {
      if (existingEmail.status === "converted") {
        return NextResponse.json(
          { error: "Este e-mail já possui uma conta ativa. Faça login na plataforma." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Este e-mail já foi utilizado no período de teste." },
        { status: 409 }
      );
    }

    const { data: existingCpf } = await supabase
      .from("freemium_users")
      .select("id")
      .eq("cpf", cleanCpf)
      .maybeSingle();

    if (existingCpf) {
      return NextResponse.json(
        { error: "Este CPF já foi utilizado no período de teste." },
        { status: 409 }
      );
    }

    const { data: existingPhone } = await supabase
      .from("freemium_users")
      .select("id")
      .eq("phone", cleanPhone)
      .maybeSingle();

    if (existingPhone) {
      return NextResponse.json(
        { error: "Este telefone já foi utilizado no período de teste." },
        { status: 409 }
      );
    }

    // Gerar código de verificação WhatsApp (6 dígitos)
    const whatsappCode = Math.floor(100000 + Math.random() * 900000).toString();
    const codeExpires = new Date();
    codeExpires.setMinutes(codeExpires.getMinutes() + 15);

    // Inserir registro freemium
    const { data: freemiumUser, error: insertError } = await supabase
      .from("freemium_users")
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        cpf: cleanCpf,
        phone: cleanPhone,
        ip_address: ip,
        status: "pending",
        whatsapp_code: whatsappCode,
        whatsapp_code_expires_at: codeExpires.toISOString(),
      })
      .select("id, whatsapp_code")
      .single();

    if (insertError) {
      console.error("Freemium insert error:", insertError);
      const msg = (insertError.message || "").toLowerCase();
      if (msg.includes("duplicate") || msg.includes("unique")) {
        return NextResponse.json(
          { error: "Dados já cadastrados. Cada pessoa pode usar o teste gratuito apenas uma vez." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Erro ao cadastrar. Tente novamente." },
        { status: 500 }
      );
    }

    // Salvar também na tabela leads para tracking (fire-and-forget)
    try {
      await supabase.from("leads").insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        whatsapp: cleanPhone,
        source: "freemium",
      });
    } catch {
      // Ignora erro — lead é secundário
    }

    return NextResponse.json({
      success: true,
      freemiumId: freemiumUser.id,
      whatsappCode: freemiumUser.whatsapp_code,
      message: "Cadastro realizado! Verifique seu WhatsApp.",
    });
  } catch (e: unknown) {
    console.error("Freemium registration error:", e);
    const message = e instanceof Error ? e.message : "Erro interno.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
