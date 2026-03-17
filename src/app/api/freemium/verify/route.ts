import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const MAX_VERIFY_ATTEMPTS = 5;

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
}

function generateRandomPassword(len = 24) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
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

    // Validar formato do código
    const cleanCode = String(code).replace(/\D/g, "");
    if (cleanCode.length !== 6) {
      return NextResponse.json(
        { error: "Código deve ter 6 dígitos." },
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
        {
          error: "WhatsApp já verificado. Verifique seu e-mail para acessar.",
          alreadyVerified: true,
        },
        { status: 400 }
      );
    }

    // Brute-force protection
    const attempts = (freemium.whatsapp_code_attempts || 0) + 1;

    if (attempts > MAX_VERIFY_ATTEMPTS) {
      return NextResponse.json(
        {
          error:
            "Muitas tentativas incorretas. Cadastre-se novamente para receber um novo código.",
          blocked: true,
        },
        { status: 429 }
      );
    }

    // Incrementar contador de tentativas ANTES de verificar (previne race condition)
    await supabase
      .from("freemium_users")
      .update({
        whatsapp_code_attempts: attempts,
        updated_at: new Date().toISOString(),
      })
      .eq("id", freemiumId);

    // Verificar código
    if (freemium.whatsapp_code !== cleanCode) {
      const remaining = MAX_VERIFY_ATTEMPTS - attempts;
      return NextResponse.json(
        {
          error: `Código incorreto. ${remaining > 0 ? `${remaining} tentativa(s) restante(s).` : "Limite atingido."}`,
        },
        { status: 400 }
      );
    }

    // Verificar expiração
    if (new Date() > new Date(freemium.whatsapp_code_expires_at)) {
      return NextResponse.json(
        { error: "Código expirado. Volte e cadastre-se novamente para receber um novo." },
        { status: 400 }
      );
    }

    // Marcar como verificado PRIMEIRO (previne replay)
    const { error: verifyUpdateError } = await supabase
      .from("freemium_users")
      .update({
        whatsapp_verified: true,
        whatsapp_code: null, // Limpar código após uso
        updated_at: new Date().toISOString(),
      })
      .eq("id", freemiumId)
      .eq("whatsapp_verified", false); // Condição extra para idempotência

    if (verifyUpdateError) {
      return NextResponse.json(
        { error: "Erro ao verificar. Tente novamente." },
        { status: 500 }
      );
    }

    // Verificar se já existe conta paga no Calango.studio
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id, plan_key, status, enabled_tools")
      .eq("email", freemium.email)
      .maybeSingle();

    if (existingProfile) {
      // Se já tem plano pago, apenas vincular e não sobrescrever
      if (
        existingProfile.plan_key &&
        existingProfile.plan_key !== "freemium"
      ) {
        await supabase
          .from("freemium_users")
          .update({
            user_id: existingProfile.id,
            status: "converted", // Já tem conta paga
            converted_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", freemiumId);

        return NextResponse.json({
          success: true,
          message:
            "Você já possui uma conta ativa! Faça login com seu e-mail.",
          existingAccount: true,
        });
      }

      // Conta existe mas sem plano (ou plano freemium) — ativar trial
      const now = new Date();
      const trialEnds = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
      const freemiumTools = [
        "post_analyzer", "modo_manual", "meus_clientes", "prompt_maker",
        "copy_maker", "mockup_3d", "estudio_de_foto", "consultor_visual",
        "imagem_criativa", "asset_builder", "restaurador_pro", "ugc_build",
      ];

      await supabase
        .from("profiles")
        .update({
          plan_key: "freemium",
          enabled_tools: freemiumTools,
          access_until: trialEnds.toISOString(),
          whatsapp: freemium.phone,
          cpf_cnpj: freemium.cpf,
          updated_at: now.toISOString(),
        })
        .eq("id", existingProfile.id);

      await supabase.from("credit_wallets").upsert(
        {
          user_id: existingProfile.id,
          plan_key: "freemium",
          monthly_credits: 1000,
          balance: 1000,
          status: "active",
          period_start: now.toISOString(),
          period_end: trialEnds.toISOString(),
          updated_at: now.toISOString(),
        },
        { onConflict: "user_id" }
      );

      await supabase
        .from("freemium_users")
        .update({
          user_id: existingProfile.id,
          status: "active",
          first_access_at: now.toISOString(),
          trial_ends_at: trialEnds.toISOString(),
          updated_at: now.toISOString(),
        })
        .eq("id", freemiumId);

      return NextResponse.json({
        success: true,
        message:
          "Trial ativado! Verifique seu e-mail para acessar a plataforma.",
        trialEndsAt: trialEnds.toISOString(),
        existingAccount: true,
      });
    }

    // Criar novo usuário no Supabase Auth
    const { data: authData, error: authError } =
      await supabase.auth.admin.createUser({
        email: freemium.email,
        password: generateRandomPassword(),
        email_confirm: true,
        user_metadata: { name: freemium.name },
      });

    if (authError || !authData?.user) {
      console.error("Auth create error:", authError);
      // Reverter verificação
      await supabase
        .from("freemium_users")
        .update({
          whatsapp_verified: false,
          updated_at: new Date().toISOString(),
        })
        .eq("id", freemiumId);

      return NextResponse.json(
        { error: "Erro ao criar conta. Tente novamente." },
        { status: 500 }
      );
    }

    const userId = authData.user.id;
    const now = new Date();
    const trialEnds = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dias

    // Criar perfil com plano freemium
    const freemiumTools = [
      "post_analyzer", "modo_manual", "meus_clientes", "prompt_maker",
      "copy_maker", "mockup_3d", "estudio_de_foto", "consultor_visual",
      "imagem_criativa", "asset_builder", "restaurador_pro", "ugc_build",
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
    await supabase.from("credit_wallets").upsert(
      {
        user_id: userId,
        plan_key: "freemium",
        monthly_credits: 1000,
        balance: 1000,
        status: "active",
        period_start: now.toISOString(),
        period_end: trialEnds.toISOString(),
        updated_at: now.toISOString(),
      },
      { onConflict: "user_id" }
    );

    // Atualizar registro freemium
    await supabase
      .from("freemium_users")
      .update({
        user_id: userId,
        status: "active",
        first_access_at: now.toISOString(),
        trial_ends_at: trialEnds.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq("id", freemiumId);

    return NextResponse.json({
      success: true,
      message:
        "Conta criada! Verifique seu e-mail para acessar a plataforma.",
      trialEndsAt: trialEnds.toISOString(),
    });
  } catch (e: unknown) {
    console.error("Freemium verify error:", e);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
