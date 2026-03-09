import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

const UNIVERSAL_HEADER =
  "#Aplique as instruções acima e estilize com o prompt abaixo";

const schema = {
  type: Type.OBJECT,
  properties: {
    universal_instruction: { type: Type.STRING },
    prompt: { type: Type.STRING },
  },
  required: ["universal_instruction", "prompt"],
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

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key não configurada no servidor." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { image } = body;

    if (!image || typeof image !== "string") {
      return NextResponse.json(
        { error: "Imagem não fornecida." },
        { status: 400 }
      );
    }

    // Extract base64 data and mime type from data URL
    const match = image.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) {
      return NextResponse.json(
        { error: "Formato de imagem inválido." },
        { status: 400 }
      );
    }

    const mimeType = match[1];
    const base64Data = match[2];

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: instruction },
            {
              inlineData: {
                mimeType,
                data: base64Data,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        responseSchema: schema as any,
      },
    });

    const raw = (response.text || "{}")
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(raw);
    const result = {
      universal_instruction:
        parsed?.universal_instruction || UNIVERSAL_HEADER,
      prompt: parsed?.prompt || "",
    };

    return NextResponse.json(result);
  } catch (e: unknown) {
    console.error("Prompt extract error:", e);
    const message = e instanceof Error ? e.message : "Falha ao extrair prompt.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
