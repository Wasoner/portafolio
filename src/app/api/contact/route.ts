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

    if (user && pass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user,
          pass: pass,
        },
      });

      await transporter.sendMail({
        from: `Portafolio Web <${user}>`,
        replyTo: email,
        to: targetEmail,
        subject: `[Portafolio] ${subject || "Nuevo mensaje de contacto"}`,
        text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nDe: ${email}\nAsunto: ${
          subject || "Sin asunto"
        }\n\nDetalles:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a;">
            <h2 style="color: #6366f1;">Nuevo mensaje desde tu portafolio</h2>
            <p><strong>De:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
            <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
            <p><strong>Detalles:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
            ${
              file && file.size > 0
                ? `<p style="margin-top: 15px; color: #475569;"><em>Archivo adjunto incluido: ${file.name}</em></p>`
                : ""
            }
          </div>
        `,
        attachments,
      });

      console.log(`Correo enviado exitosamente a ${targetEmail} de parte de ${email}`);
    } else {
      // Si aún no se configuran EMAIL_USER / EMAIL_PASS en Vercel, registramos los datos
      console.warn(
        "EMAIL_USER o EMAIL_PASS no están configurados en las variables de entorno. Registrando mensaje en consola:"
      );
      console.log({
        to: targetEmail,
        from: email,
        subject: subject || "Sin asunto",
        message,
        hasAttachment: !!(file && file.size > 0),
        fileName: file?.name,
      });
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado exitosamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar el mensaje de contacto:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el correo." },
      { status: 500 }
    );
  }
}

