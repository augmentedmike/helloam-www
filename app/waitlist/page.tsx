import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Get Started | helloam.bot",
  description: "AM is free and open source. Install on Mac, Windows, or Linux in one command.",
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
          Open Source
        </p>
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
        >
          Get started with AM.
        </h1>
        <p className="text-lg mb-12" style={{ color: "#666" }}>
          AM is free and open source. Install on Mac, Windows, or Linux in one command.
        </p>

        <WaitlistForm />
      </div>
    </main>
  );
}
