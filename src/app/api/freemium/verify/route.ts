import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
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
          error: "E-mail já verificado. Verifique seu e-mail para acessar.",
          alreadyVerified: true,
        },
        { status: 400 }
      );
    }

    // Verificar código via Supabase Auth OTP
    const { data: authData, error: authError } = await supabase.auth.verifyOtp({
      email: freemium.email,
      token: cleanCode,
      type: "email",
    });

    if (authError || !authData?.user) {
      console.error("[Verify] OTP error:", authError?.message);
      return NextResponse.json(
        { error: authError?.message === "Token has expired or is invalid"
            ? "Código inválido ou expirado. Volte e solicite um novo."
            : "Código incorreto. Tente novamente."
        },
        { status: 400 }
      );
    }

    const userId = authData.user.id;

    // Marcar como verificado
    await supabase
      .from("freemium_users")
      .update({
        whatsapp_verified: true,
        whatsapp_code: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", freemiumId);

    // Verificar se já existe perfil (conta paga ou freemium anterior)
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id, plan_key, status, enabled_tools")
      .eq("email", freemium.email)
      .maybeSingle();

    if (existingProfile) {
      // Se já tem plano pago, apenas vincular
      if (
        existingProfile.plan_key &&
        existingProfile.plan_key !== "freemium"
      ) {
        await supabase
          .from("freemium_users")
          .update({
            user_id: existingProfile.id,
            status: "converted",
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

    // Usuário criado pelo signInWithOtp — configurar perfil e wallet
    const now = new Date();
    const trialEnds = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dias

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
