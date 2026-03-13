import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, message, category } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2)
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    if (!email || typeof email !== "string" || !isValidEmail(email.trim()))
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (!message || typeof message !== "string" || message.trim().length < 5)
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });

    const cleanName     = name.trim().slice(0, 100);
    const cleanEmail    = email.trim().toLowerCase().slice(0, 254);
    const cleanMessage  = message.trim().slice(0, 5000);
    const cleanCategory = typeof category === "string" ? category.trim().slice(0, 50) : "General";

    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    if (!gmailPass) {
      console.error("[contact] GMAIL_APP_PASSWORD not set");
      return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", port: 587, secure: false,
      auth: { user: "augmentedmike@gmail.com", pass: gmailPass },
    });

    const toAddress = cleanCategory === "Support"
      ? "amelia+helloamsupport@helloam.bot"
      : "amelia+www@helloam.bot";

    await transporter.sendMail({
      from: '"Amelia — helloam.bot" <augmentedmike@gmail.com>',
      to: toAddress,
      cc: "augmentedmike@gmail.com",
      replyTo: cleanEmail,
      subject: `[${cleanCategory}] Contact from ${cleanName}`,
      text: [
        `Contact form submission on helloam.bot`,
        `Category: ${cleanCategory}`,
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `IP: ${ip}`,
        ``,
        `Message:`,
        cleanMessage,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
