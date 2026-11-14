import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, sport, location, message } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // SSL on port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 8px;">
        <div style="background: #0a1f44; padding: 24px 32px; border-radius: 6px 6px 0 0; margin-bottom: 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">NEW QUOTE REQUEST</h1>
          <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Omair Sports Flooring — Website Form</p>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; width: 35%;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Sport / Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px;">${sport || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Location</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0a1f44; font-size: 14px;">${location || "—"}</td>
            </tr>
          </table>

          ${
            message
              ? `<div style="margin-top: 24px;">
              <p style="color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message / Project Details</p>
              <div style="background: #f8fafc; border-left: 3px solid #3b82f6; padding: 16px; color: #0a1f44; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</div>
            </div>`
              : ""
          }

          <div style="margin-top: 32px; padding: 16px; background: #eff6ff; border-radius: 4px; text-align: center;">
            <p style="margin: 0; color: #1d4ed8; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply directly to: ${email}</p>
          </div>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 20px;">
          Omair Sports Flooring — omairsportsflooring@gmail.com
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"OSF Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Quote Request — ${name} (${sport || "General"})`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
