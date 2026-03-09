import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import OpenAI from "openai";

const GEMINI_TIMEOUT_MS = 30_000;

const UNIVERSAL_HEADER =
  "#Aplique as instruções acima e estilize com o prompt abaixo";

const geminiSchema = {
  type: Type.OBJECT,
  properties: {
    universal_instruction: { type: Type.STRING },
    prompt: { type: Type.STRING },
  },
  required: ["universal_instruction", "prompt"],
};

const openaiJsonSchema = {
  type: "object" as const,
  properties: {
    universal_instruction: { type: "string" as const },
    prompt: { type: "string" as const },
  },
  required: ["universal_instruction", "prompt"],
  additionalProperties: false,
};

const instruction = `You are an elite visual-style reverse-engineering assistant.

TASK:
Analyze the provided reference image and extract ONLY what is necessary to reproduce its visual style in another image generation pipeline.

ABSOLUTE RULES:
1) Output must be in strict JSON format following the schema.
2) Always output in ENGLISH.
3) The result MUST be universal: ignore ethnicity, body type, height, and any unnecessary personal identity traits.
4) Focus on visual style transfer cues only.
5) Extract, when present and relevant:
   - camera angle/composition
   - camera/lens characteristics (focal length style, distortion, wide-angle signs, etc.)
   - blur/bokeh/depth-of-field level
   - color palette and grading
   - scenario/environment/background
   - perspective distortion
   - pose/body language
   - clothing/fabric styling
   - rendering/finish (photoreal, cinematic, editorial, film grain, etc.)
   - lighting setup and atmosphere
   - key details needed to recreate the same style
6) Do not invent details that are not visible.
7) If a field is not necessary, do not force it in the prompt text.

OUTPUT FORMAT:
{
  "universal_instruction": "${UNIVERSAL_HEADER}",
  "prompt": "Ultra-detailed universal style prompt in English"
}

The "prompt" value must be highly detailed, structured, and production-ready for image generation.`;

/* ── Gemini (primary) with 30s timeout ── */
async function callGemini(mimeType: string, base64Data: string): Promise<string> {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("GOOGLE_GEMINI_API_KEY not set");

  const ai = new GoogleGenAI({ apiKey });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort("GEMINI_TIMEOUT"), GEMINI_TIMEOUT_MS);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: instruction },
            { inlineData: { mimeType, data: base64Data } },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        responseSchema: geminiSchema as any,
        abortSignal: controller.signal,
      },
    });

    const text = (response.text || "")
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Validate it's real JSON before returning
    JSON.parse(text);
    return text;
  } finally {
    clearTimeout(timeout);
  }
}

/* ── OpenAI GPT fallback ── */
async function callOpenAIFallback(mimeType: string, base64Data: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not set for fallback");

  const model = process.env.OPENAI_FALLBACK_MODEL || "gpt-5.2";
  const openai = new OpenAI({ apiKey });

  const dataUrl = `data:${mimeType};base64,${base64Data}`;

  const response = await openai.responses.create({
    model,
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: instruction },
          { type: "input_image", image_url: dataUrl, detail: "high" },
        ],
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "prompt_maker_result",
        schema: openaiJsonSchema,
        strict: true,
      },
    },
  });

  const text = (response.output_text || "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  JSON.parse(text);
  return text;
}

/* ── Route handler: Gemini → OpenAI fallback ── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image } = body;

    if (!image || typeof image !== "string") {
      return NextResponse.json(
        { error: "Imagem não fornecida." },
        { status: 400 }
      );
    }

    const match = image.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) {
      return NextResponse.json(
        { error: "Formato de imagem inválido." },
        { status: 400 }
      );
    }

    const mimeType = match[1];
    const base64Data = match[2];

    let text: string;
    let provider: string;

    // Primary: Gemini → Fallback: OpenAI GPT-5.2
    try {
      text = await callGemini(mimeType, base64Data);
      provider = "gemini";
    } catch (geminiError: unknown) {
      const reason = geminiError instanceof Error ? geminiError.message : "unknown";
      console.warn(`Gemini failed (${reason}), falling back to OpenAI…`);

      text = await callOpenAIFallback(mimeType, base64Data);
      provider = "openai";
    }

    const parsed = JSON.parse(text);
    const result = {
      universal_instruction: parsed?.universal_instruction || UNIVERSAL_HEADER,
      prompt: parsed?.prompt || "",
    };

    return NextResponse.json({ ...result, provider });
  } catch (e: unknown) {
    console.error("Prompt extract error:", e);
    const message = e instanceof Error ? e.message : "Falha ao extrair prompt.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
