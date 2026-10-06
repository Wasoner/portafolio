import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;
    const file = formData.get("file") as File | null;

    // Validación básica de campos requeridos
    if (!email || !message) {
      return NextResponse.json(
        { error: "Correo y detalles son obligatorios." },
        { status: 400 }
      );
    }

    // Configuración del transporte de correo (variables de entorno SMTP o fallback Gmail)
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const targetEmail = "tobalpaulrivas@gmail.com";

    // Preparar archivo adjunto si fue provisto
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type || "application/octet-stream",
      });
    }

    if (!user || !pass) {
      console.error(
        "[Contact API] Faltan variables de entorno: EMAIL_USER o EMAIL_PASS no están definidas en Vercel."
      );
      return NextResponse.json(
        {
          error:
            "El servidor no tiene configuradas las credenciales de correo (EMAIL_USER / EMAIL_PASS).",
        },
        { status: 500 }
      );
    }

    // Configuración robusta de transporte SMTP para Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL directo
      auth: {
        user: user.trim(),
        pass: pass.trim().replace(/\s+/g, ""), // Elimina cualquier espacio accidental
      },
    });

    // Enviar el correo
    const info = await transporter.sendMail({
      from: `Portafolio Web <${user.trim()}>`,
      replyTo: email,
      to: targetEmail,
      subject: `[Portafolio] ${subject || "Nuevo mensaje de contacto"}`,
      text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nDe: ${email}\nAsunto: ${
        subject || "Sin asunto"
      }\n\nDetalles:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a; max-width: 600px; margin: auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Nuevo mensaje desde tu portafolio</h2>
          <p><strong>De:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p><strong>Detalles del mensaje:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${message}</div>
          ${
            file && file.size > 0
              ? `<p style="margin-top: 20px; font-size: 13px; color: #475569;"><em>Archivo adjunto: ${file.name} (${(file.size / 1024).toFixed(1)} KB)</em></p>`
              : ""
          }
        </div>
      `,
      attachments,
    });

    console.log(`[Contact API] Correo despachado con éxito. ID: ${info.messageId}`);

    return NextResponse.json(
      { success: true, message: "Mensaje enviado exitosamente." },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[Contact API Error]:", errorMsg);
    return NextResponse.json(
      { error: `Error al enviar el correo: ${errorMsg}` },
      { status: 500 }
    );
  }
}

