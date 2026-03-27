import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Waitlist | helloam.bot",
  description: "Join the helloam.bot waitlist. Be first to get access when Am launches.",
  alternates: { canonical: "https://helloam.bot/waitlist" },
};

export default function WaitlistPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}
    >
      <div className="max-w-2xl mx-auto px-6 pt-24 pb-32">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "#00E5FF" }}>
          Early Access
        </p>
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
        >
          Get early access to Am.
        </h1>
        <p className="text-lg mb-12" style={{ color: "#666" }}>
          Am is a digital worker built for teams. Join the list and we&apos;ll reach out when your spot is ready.
        </p>

        <WaitlistForm />
      </div>
    </main>
  );
}
