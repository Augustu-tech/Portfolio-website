import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✅ Ensure API key exists
if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Send email
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // safe test sender
      to: ["chipondepondeaugustus@gmail.com"], // your inbox
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2>📩 New Message from Your Portfolio</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <hr />

    <p><strong>Message:</strong></p>
    <p>${message}</p>

    <br />

    <small>This message was sent from your portfolio website.</small>
  </div>
`
    });

    // ✅ LOG RESPONSE (IMPORTANT)
    console.log("Resend response:", response);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error: any) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}