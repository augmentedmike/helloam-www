import type { Metadata } from "next";
import DemoClient from "./demo-client";

export const metadata: Metadata = {
  title: "Demo | helloam.bot",
  description:
    "See Am in action — watch her handle backlog triage, ticket-to-PR, and support resolution end-to-end.",
  alternates: { canonical: "https://helloam.bot/demo" },
};

export default function DemoPage() {
  const videoId = process.env.NEXT_PUBLIC_DEMO_VIDEO_ID ?? "";

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "var(--font-space-grotesk), sans-serif",
      }}
    >
      {/* ── Hero ── */}
      <section className="px-6 pt-32 pb-16 max-w-5xl mx-auto text-center">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 inline-block"
          style={{ color: "#00E5FF" }}
        >
          Live demo
        </p>
        <h1
          className="font-bold leading-[1.06] tracking-tight mb-5"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
        >
          See AM in action
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: "#888", lineHeight: 1.7 }}
        >
          Pick a role below and watch Am complete a real task end-to-end —
          no staging, no slides, just work getting done.
        </p>
      </section>

      {/* ── Interactive sections (client) ── */}
      <DemoClient videoId={videoId || undefined} />
    </main>
  );
}
