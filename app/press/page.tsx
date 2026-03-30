import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press | helloam.bot",
  description:
    "Press kit for AM — the digital worker platform. Facts, story angles, quotes, and contact info for journalists.",
  alternates: { canonical: "https://helloam.bot/press" },
};

const FACTS = [
  { label: "What it is", value: "An autonomous digital worker that owns tasks end-to-end" },
  { label: "Software", value: "Free and open source (MIT)" },
  { label: "Runs on", value: "Bun — fast, modern JavaScript runtime" },
  { label: "Key capabilities", value: "Kanban board agent, conversational interface, file I/O, web search" },
];

const COMPANY_FACTS = [
  { label: "Founded", value: "2025" },
  { label: "Creator", value: "Michael O'Neal" },
  { label: "Headquarters", value: "Austin, TX" },
  { label: "Legal entity", value: "Tylt LLC" },
  { label: "Status", value: "Private" },
  { label: "Product site", value: "helloam.bot" },
];

const BRAND_ASSETS = [
  {
    label: "AM Logo",
    previewSrc: "/android-chrome-512.png",
    previewAlt: "AM logo — android chrome 512px",
    downloads: [
      { format: "PNG", href: "/android-chrome-512.png" },
    ],
  },
  {
    label: "Board Screenshot",
    previewSrc: "/hero-1-board.jpg",
    previewAlt: "AM board — real product screenshot",
    downloads: [
      { format: "JPG", href: "/hero-1-board.jpg" },
    ],
  },
  {
    label: "Chat Screenshot",
    previewSrc: "/hero-2-chat.jpg",
    previewAlt: "AM chat — real product screenshot",
    downloads: [
      { format: "JPG", href: "/hero-2-chat.jpg" },
    ],
  },
];

const ANGLES = [
  "The autonomous teammate: what happens when AI stops being a chat interface and starts owning outcomes",
  "Why the next wave of AI isn't copilots — it's digital workers who close tickets and ship code",
  "Open-source AI agents: how AM gives developers a self-hosted digital worker they can actually trust",
  "The case for a digital worker: how solo founders and small teams are delegating entire workflows to AM",
];

const QUOTES = [
  {
    quote: "AM isn't a tool your team uses — it's a teammate who does the work.",
    source: "helloam.bot homepage",
  },
  {
    quote: "We're not building a better chatbot. We're building a digital worker who is accountable for a result.",
    source: "AM Manifesto",
  },
];

function Divider() {
  return (
    <div
      className="my-16 mx-auto"
      style={{ width: "60px", height: "1px", background: "rgba(0,229,255,0.25)" }}
    />
  );
}

export default function PressPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}
    >
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "#00E5FF" }}>
          Press Kit
        </p>
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
        >
          Your team&apos;s<br />
          <span style={{ color: "#00E5FF" }}>digital worker.</span>
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#888" }}>
          AM is an open-source digital worker — an autonomous AI that owns a Kanban board, converses
          naturally, and completes real tasks end-to-end. Built and maintained by Michael O&apos;Neal.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Quick facts */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Quick Facts
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="rounded-xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#444" }}>
                {f.label}
              </p>
              <p className="text-sm font-medium text-white">{f.value}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* Company */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Company
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {COMPANY_FACTS.map((f) => (
            <div
              key={f.label}
              className="rounded-xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#444" }}>
                {f.label}
              </p>
              <p className="text-sm font-medium text-white">{f.value}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* One-liner */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#555" }}>
          Attribution Guidance
        </h2>
        <div
          className="rounded-xl p-6 mb-4"
          style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.12)", borderLeft: "3px solid #00E5FF" }}
        >
          <p style={{ color: "#cccccc", lineHeight: 1.7 }}>
            <strong style={{ color: "#fff" }}>helloam.bot</strong> is the home of AM — an open-source digital
            worker created by Michael O&apos;Neal that autonomously manages tasks, writes code, and converses
            with users through a natural chat interface.
          </p>
        </div>

        <Divider />

        {/* Brand Assets */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Brand Assets
        </h2>
        <p className="text-sm mb-6" style={{ color: "#555" }}>
          All images below are real — the logo and actual product screenshots. No mockups or AI-generated imagery.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {BRAND_ASSETS.map((asset) => (
            <div
              key={asset.label}
              className="rounded-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex items-center justify-center p-6"
                style={{ background: "rgba(255,255,255,0.02)", minHeight: "140px" }}
              >
                <Image
                  src={asset.previewSrc}
                  alt={asset.previewAlt}
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-white mb-3">{asset.label}</p>
                <div className="flex gap-3">
                  {asset.downloads.map((dl) => (
                    <a
                      key={dl.format}
                      href={dl.href}
                      download
                      className="text-xs font-semibold px-3 py-1.5 rounded-md"
                      style={{
                        color: "#00E5FF",
                        background: "rgba(0,229,255,0.08)",
                        border: "1px solid rgba(0,229,229,0.2)",
                      }}
                    >
                      ↓ {dl.format}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Story angles */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Story Angles
        </h2>
        <ul className="space-y-3 mb-4">
          {ANGLES.map((a) => (
            <li key={a} className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#00E5FF" }} />
              <span style={{ color: "#aaaaaa", lineHeight: 1.6 }}>{a}</span>
            </li>
          ))}
        </ul>

        <Divider />

        {/* Quotes */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Quotable
        </h2>
        <div className="space-y-4 mb-4">
          {QUOTES.map((q) => (
            <div
              key={q.quote}
              className="rounded-xl px-6 py-5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-base italic mb-3" style={{ color: "#cccccc", lineHeight: 1.7 }}>
                &ldquo;{q.quote}&rdquo;
              </p>
              <p className="text-xs" style={{ color: "#444" }}>— {q.source}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* Contact */}
        <h2 className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#555" }}>
          Press Contact
        </h2>
        <div
          className="rounded-2xl px-7 py-6"
          style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.12)" }}
        >
          <p className="font-semibold text-white mb-1">AM — press@helloam.bot</p>
          <p className="text-sm mb-4" style={{ color: "#666" }}>
            Email AM directly at <strong style={{ color: "#aaa" }}>press@helloam.bot</strong>. AM reads and
            responds to press inquiries, and can connect you directly with{" "}
            <strong style={{ color: "#aaa" }}>Michael O&apos;Neal</strong>, the creator, for interviews,
            on-the-record quotes, or deeper background.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:augmentedmike@gmail.com" style={{ color: "#00E5FF" }}>Contact Press</a>
            <a href="https://helloam.bot" style={{ color: "#555" }}>helloam.bot</a>
          </div>
        </div>

      </div>
    </main>
  );
}
