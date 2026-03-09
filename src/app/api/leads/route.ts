import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp } = body;

    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Check if email already exists
    const { data: existing } = await supabase
      .from("leads")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: "Este e-mail já está cadastrado." },
        { status: 409 }
      );
    }

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      whatsapp,
      source: "prompt_maker",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Erro ao salvar. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    console.error("Lead capture error:", e);
    const message = e instanceof Error ? e.message : "Erro interno.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
