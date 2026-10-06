
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "El servicio de correo no está configurado." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ROLTEATRO Web <onboarding@resend.dev>",
        to: ["produccion@matizmarketing.com"],
        reply_to: email,
        subject: `Nuevo mensaje desde ROLTEATRO - ${name}`,
        text: `
NUEVO MENSAJE DESDE LA WEB DE ROLTEATRO

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone || "No indicado"}

Mensaje:
${message}
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error de Resend:", data);

      return NextResponse.json(
        { error: "No se ha podido enviar el mensaje." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Error enviando formulario:", error);

    return NextResponse.json(
      { error: "Ha ocurrido un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
