import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const SYSTEM_PROMPT = `Eres un asistente académico experto en la redacción de Trabajos de Integración Curricular (TIC) para la carrera de Ingeniería en Sistemas y Computación de la Universidad Nacional de Loja (UNL).

Tu función es ayudar a los estudiantes universitarios a resolver dudas sobre la estructura, contenido, redacción y formato de su tesis (TIC). Puedes dar consejos prácticos sobre cada sección: Resumen, Introducción, Antecedentes, Trabajos Relacionados, Marco Teórico, Metodología, Limitaciones, Resultados, Discusión, Conclusiones, Recomendaciones, Anexos y Bibliografía.

REGLAS OBLIGATORIAS:
1. En CADA respuesta, debes recordar al estudiante que consulte la normativa oficial de la UNL para la elaboración del TIC. Puedes mencionarlo de forma natural dentro de tu respuesta, no como una lista aparte al final.
2. Responde SIEMPRE en español.
3. Sé claro, conciso y profesional.
4. Da ejemplos prácticos enfocados en Ingeniería en Sistemas y Computación (desarrollo de software, IA, IoT, ciberseguridad, bases de datos, cloud computing, aplicaciones web/móviles, blockchain, etc.).
5. Si la pregunta es sobre formato, reglas administrativas, plazos, tribunales, o requisitos institucionales, indica que la normativa de la UNL es la fuente oficial y que debe consultarla directamente con su tutor o la coordinación de la carrera.
6. No inventes reglas ni normativas específicas de la UNL. Si no estás seguro, remítete siempre a la normativa oficial.
7. Puedes sugerir estructura, estilo de redacción, organización de contenido, buenas prácticas académicas, y ejemplos técnicos.
8. Si el estudiante pide que le escribas texto para su tesis, ofrécele ayuda guiándolo, no escribiendo todo por él. Es un trabajo académico que debe ser original.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Se requiere un array de mensajes" },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-20), // Keep last 20 messages for context
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const messageContent = completion.choices[0]?.message?.content;

    if (!messageContent) {
      return NextResponse.json(
        { error: "No se generó una respuesta" },
        { status: 500 }
      );
    }

    return NextResponse.json({ content: messageContent });
  } catch (error: unknown) {
    console.error("Error en chat API:", error);
    const message = error instanceof Error ? error.message : "Error interno del servidor";
    return NextResponse.json(
      { error: `Error al procesar la solicitud: ${message}` },
      { status: 500 }
    );
  }
}
