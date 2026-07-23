import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where you want to receive the submissions
const TO_EMAIL = "doniaessam2000200@gmail.com";
// Must be an address on a domain you've verified in Resend
// (use "onboarding@resend.dev" only for testing, it's not for production use)
const FROM_EMAIL = "Portfolio Contact Form <contact@yourdomain.com>";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ success: false, message: "Failed to send message. Please try again." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
}