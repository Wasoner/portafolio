import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // In a production app, here you would connect to Resend / SendGrid / NodeMailer:
    // e.g.: await resend.emails.send({ from: '...', to: 'victor@domain.com', subject, ... })
    // For now we log and return success
    console.log("Nuevo mensaje de contacto recibido:", {
      name,
      email,
      subject: subject || "Sin asunto",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Mensaje recibido correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno procesando la solicitud." },
      { status: 500 }
    );
  }
}
