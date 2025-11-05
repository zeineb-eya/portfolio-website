import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
const toEmail = "zeineb.eya.rahmani@outlook.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("New contact form submission from:", email);
  
  try {
    // Send email with both HTML and plain text for better deliverability
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
              <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">
              <div style="margin-bottom: 20px;">
                <p style="margin: 5px 0;"><strong>From:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>
              <hr style="border: none; border-top: 2px solid #667eea; margin: 20px 0;">
              <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #667eea;">Message:</h3>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="color: #666; font-size: 12px; margin: 10px 0;">
                This message was sent from your portfolio contact form at zeineb-eya.dev.<br>
                You can reply directly to this email to respond to the sender.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${email}.
      `,
    });
    
    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
