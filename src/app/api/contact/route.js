import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "aaryapandey669@gmail.com";
const MAX_MESSAGE_LENGTH = 5_000;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const department = typeof body.department === "string" ? body.department.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!fullName || !email || !phone || !department || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all fields with a valid email address." }, { status: 400 });
  }

  if (
    fullName.length > 200 ||
    email.length > 320 ||
    phone.length > 100 ||
    department.length > 100 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact form email is not configured.");
    return NextResponse.json({ error: "Email service is temporarily unavailable." }, { status: 503 });
  }

  const escaped = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    department: escapeHtml(department),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `Website contact enquiry: ${department}`,
        html: `<h2>New website contact enquiry</h2><p><strong>Name:</strong> ${escaped.fullName}</p><p><strong>Email:</strong> ${escaped.email}</p><p><strong>Phone:</strong> ${escaped.phone}</p><p><strong>Department:</strong> ${escaped.department}</p><p><strong>Message:</strong><br />${escaped.message}</p>`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact form email:", response.status, await response.text());
      return NextResponse.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
    }
  } catch (error) {
    console.error("Unable to send contact form email:", error);
    return NextResponse.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
