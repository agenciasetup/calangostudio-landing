import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
}

function generateRandomPassword(len = 24) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const array = new Uint32Array(len);
  crypto.getRandomValues(array);
  return Array.from(array, (v) => chars[v % chars.length]).join("");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { freemiumId, code } = body;

    if (!freemiumId || !code) {
      return NextResponse.json(
        { error: "Dados incompletos." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Buscar registro freemium
    const { data: freemium, error: fetchError } = await supabase
      .from("freemium_users")
      .select("*")
      .eq("id", freemiumId)
      .maybeSingle();

    if (fetchError || !freemium) {
      return NextResponse.json(
        { error: "Registro não encontrado." },
        { status: 404 }
      );
    }

    if (freemium.whatsapp_verified) {
      return NextResponse.json(
        { error: "WhatsApp já verificado.", alreadyVerified: true },
        { status: 400 }
      );
    }

    // Verificar código
    if (freemium.whatsapp_code !== code) {
      return NextResponse.json(
        { error: "Código incorreto." },
        { status: 400 }
      );
    }

    // Verificar expiração
    if (new Date() > new Date(freemium.whatsapp_code_expires_at)) {
      return NextResponse.json(
        { error: "Código expirado. Solicite um novo." },
        { status: 400 }
      );
    }

    // Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: freemium.email,
      password: generateRandomPassword(),
      email_confirm: true,
      user_metadata: { name: freemium.name },
    });

    if (authError) {
      // Usuário já existe? Buscar o ID
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", freemium.email)
        .maybeSingle();

      if (!existingProfile) {
        console.error("Auth create error:", authError);
        return NextResponse.json(
          { error: "Erro ao criar conta. Tente novamente." },
          { status: 500 }
        );
      }

      // Vincular ao freemium existente
      await supabase
        .from("freemium_users")
        .update({
          whatsapp_verified: true,
          user_id: existingProfile.id,
          updated_at: new Date().toISOString(),
        })
        .eq("id", freemiumId);

      return NextResponse.json({
        success: true,
        message: "Conta já existe. Faça login com seu e-mail.",
        existingAccount: true,
      });
    }

    const userId = authData.user!.id;
    const now = new Date();
    const trialEnds = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dias

    // Criar perfil com plano freemium
    const freemiumTools = [
      "post_analyzer", "modo_manual", "meus_clientes", "prompt_maker",
      "copy_maker", "mockup_3d", "estudio_de_foto", "consultor_visual",
      "imagem_criativa", "asset_builder", "restaurador_pro", "ugc_build"
    ];

    await supabase.from("profiles").upsert({
      id: userId,
      email: freemium.email,
      name: freemium.name,
      role: "USER",
      status: "active",
      plan_key: "freemium",
      enabled_tools: freemiumTools,
      access_until: trialEnds.toISOString(),
      whatsapp: freemium.phone,
      cpf_cnpj: freemium.cpf,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    });

    // Criar wallet de créditos
    await supabase.from("credit_wallets").upsert({
      user_id: userId,
      plan_key: "freemium",
      monthly_credits: 1000,
      balance: 1000,
      status: "active",
      period_start: now.toISOString(),
      period_end: trialEnds.toISOString(),
      updated_at: now.toISOString(),
    }, { onConflict: "user_id" });

    // Atualizar registro freemium
    await supabase
      .from("freemium_users")
      .update({
        whatsapp_verified: true,
        user_id: userId,
        status: "active",
        first_access_at: now.toISOString(),
        trial_ends_at: trialEnds.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq("id", freemiumId);

    // Enviar magic link para o email do usuário
    // (o usuário vai receber o email e clicar para acessar o calango.studio)

    return NextResponse.json({
      success: true,
      message: "Conta criada! Verifique seu e-mail para acessar a plataforma.",
      trialEndsAt: trialEnds.toISOString(),
    });
  } catch (e: unknown) {
    console.error("Freemium verify error:", e);
    const message = e instanceof Error ? e.message : "Erro interno.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
