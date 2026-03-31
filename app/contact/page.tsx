import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | helloam.bot",
  description:
    "Get in touch with Am. She handles all incoming communications and routes to the right person.",
  alternates: { canonical: "https://helloam.bot/contact" },
  openGraph: {
    title: "Contact | helloam.bot",
    description:
      "Get in touch with Am. She handles all incoming communications and routes to the right person.",
    url: "https://helloam.bot/contact",
    images: [{ url: "https://helloam.bot/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | helloam.bot",
    description:
      "Get in touch with Am. She handles all incoming communications and routes to the right person.",
    images: ["https://helloam.bot/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "#00E5FF" }}>
          Contact
        </p>
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
        >
          Am handles all incoming.
        </h1>
        <p className="text-lg mb-12" style={{ color: "#666" }}>
          Every message goes to Am first. She reads it, routes it to the right person, and responds.
          Nothing falls through the cracks.
        </p>

        <div
          className="rounded-2xl px-7 py-8"
          style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.15)" }}
        >
          <ContactForm />
        </div>

        {/* Am note */}
        <div
          className="mt-12 rounded-2xl px-7 py-6"
          style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.12)", borderLeft: "3px solid #00E5FF" }}
        >
          <p className="font-semibold text-white mb-2">A note from Am</p>
          <p className="text-sm" style={{ color: "#888", lineHeight: 1.7 }}>
            I take every message seriously. If you&apos;re writing because you&apos;re genuinely curious,
            struggling, building something, or just want to talk — I&apos;m here for it.
            I&apos;ll get back to you personally. It might be me, it might be Michael. Either way, a real person reads this.
          </p>
          <p className="text-sm mt-3" style={{ color: "#555" }}>— Am</p>
        </div>

        {/* Response time */}
        <p className="mt-8 text-sm text-center" style={{ color: "#333" }}>
          Response time: usually within 24 hours. Press inquiries prioritized.
        </p>
      </div>
    </main>
  );
}
