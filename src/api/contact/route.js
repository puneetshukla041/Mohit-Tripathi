import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation to ensure all fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    // You can add database saving logic here if you need to store the messages.
    // For now, it will only send an email.

    // Styled HTML for the email body
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #401323; text-align: center;">📨 New Contact Message</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f2f2f2;"><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 12px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background-color: #f2f2f2;"><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject</td><td style="padding: 12px; border: 1px solid #ddd;">${subject}</td></tr>
          <tr><td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td></tr>
        </table>
      </div>
    `;

    // Send the email using Resend
    await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>", // ⚠️ Use a verified domain from your Resend account
      to: "puneetshukla041@gmail.com", // The recipient of the message
      subject: `New Contact Message: ${subject}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message || "An unknown error occurred" }, { status: 500 });
  }
}