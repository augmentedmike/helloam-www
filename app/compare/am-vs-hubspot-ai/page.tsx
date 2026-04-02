import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs HubSpot AI (Breeze) — Full Comparison | helloam.bot",
  description:
    "AM vs HubSpot AI: Breeze lives inside HubSpot. AM works across your entire stack — without lock-in, credit pools, or a $10K onboarding fee.",
  keywords: [
    "AM vs HubSpot AI",
    "HubSpot Breeze alternative",
    "HubSpot AI comparison",
    "HubSpot Breeze vs AM",
    "AI digital worker",
    "AI agent without HubSpot",
    "autonomous AI assistant",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-hubspot-ai",
  },
  openGraph: {
    title: "AM vs HubSpot AI (Breeze) — Full Comparison",
    description:
      "Breeze lives inside HubSpot. AM works across your entire stack — no lock-in, no credit pools, no five-figure onboarding.",
    url: "https://helloam.bot/compare/am-vs-hubspot-ai",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs HubSpot AI (Breeze) — Full Comparison",
    description:
      "Breeze lives inside HubSpot. AM works across your entire stack — no lock-in, no credit pools, no five-figure onboarding.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/compare/am-vs-hubspot-ai#product",
    name: "AM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is a fully autonomous AI digital worker that operates across your entire stack — support, sales, dev, and ops. It integrates with HubSpot and every other tool your team uses, without locking your data or workflows inside a single platform.",
    publisher: {
      "@type": "Organization",
      name: "helloam.bot",
      url: "https://helloam.bot",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://helloam.bot/compare/am-vs-hubspot-ai#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between AM and HubSpot AI (Breeze)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HubSpot Breeze is a suite of AI features built into the HubSpot platform — it helps with tasks inside HubSpot like drafting emails, enriching contacts, and routing support chats. AM is an autonomous digital worker that operates across your entire stack, with or without HubSpot. AM has persistent memory, works in Slack and email natively, and handles tasks that span multiple tools without requiring you to centralise everything in HubSpot first.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use AM if I already use HubSpot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM integrates with HubSpot — it can read and update contacts, log activities, and trigger workflows. But AM is not confined to HubSpot. It also works with your Slack, email, GitHub, Zendesk, and other tools simultaneously, giving you a single autonomous worker across the full stack.",
        },
      },
      {
        "@type": "Question",
        name: "Is AM a good HubSpot Breeze alternative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM is the right choice if you want AI that works beyond HubSpot — for individuals or teams that do not want to buy into the full HubSpot ecosystem, or who need an AI that operates across Slack, email, GitHub, and other tools in addition to their CRM. If you are fully committed to HubSpot and only need AI inside that platform, Breeze is built for that.",
        },
      },
      {
        "@type": "Question",
        name: "How does AM's pricing compare to HubSpot AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HubSpot AI features require a HubSpot subscription. Breeze Agents (including the Customer Agent) require Professional or Enterprise tiers — roughly $10,800 per year for a 10-person team, plus a mandatory onboarding fee of $3,000–$7,000. AM has flat, transparent pricing with no credit pools, no per-seat escalation, and no onboarding fee.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM remember context across sessions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM has persistent memory — it remembers facts, preferences, and context from previous conversations and carries that knowledge forward. HubSpot Breeze does not retain memory across sessions; each conversation starts from the CRM data and knowledge base, with no recall of prior interactions outside of logged CRM activity.",
        },
      },
    ],
  },
];

const ACCENT = "#00E5FF";

const tableRows = [
  { feature: "Works outside HubSpot / CRM", am: "full", hs: "none" },
  { feature: "Persistent memory across sessions", am: "full", hs: "none" },
  { feature: "Works in Slack and email natively", am: "full", hs: "partial" },
  { feature: "Handles support tickets end-to-end", am: "full", hs: "partial" },
  { feature: "HubSpot CRM integration", am: "full", hs: "full" },
  { feature: "Flat pricing (no credit pools)", am: "full", hs: "none" },
  { feature: "No mandatory onboarding fee", am: "full", hs: "none" },
  { feature: "Usable by individuals (no team required)", am: "full", hs: "none" },
  { feature: "Works with non-HubSpot CRMs", am: "full", hs: "none" },
  { feature: "Local data / no platform lock-in", am: "full", hs: "none" },
] as const;

function Cell({ value, isAm }: { value: string; isAm: boolean }) {
  const color = isAm ? ACCENT : "#666";
  if (value === "full") return <span style={{ color }}>✓</span>;
  if (value === "partial") return <span style={{ color: "#888" }}>~</span>;
  if (value === "none") return <span style={{ color: "#333" }}>—</span>;
  return (
    <span className="text-xs font-semibold" style={{ color }}>
      {value}
    </span>
  );
}

const painPoints = [
  {
    label: "Locked inside HubSpot",
    detail:
      "Breeze only works on data and workflows that live inside HubSpot. If your team uses Slack for support, GitHub for engineering tickets, or a non-HubSpot CRM, Breeze cannot help.",
  },
  {
    label: "Credit-based billing with auto-upgrades",
    detail:
      "Breeze AI credits are shared across your team and consumed with every action. When the pool runs dry, HubSpot automatically upgrades your plan — additional charges appear without explicit approval.",
  },
  {
    label: "Five-figure commitment before day one",
    detail:
      "Real Breeze Agents (Customer Agent, Prospecting Agent) require HubSpot Professional or Enterprise. That means ~$10,800/yr for a 10-person team, plus a mandatory $3,000–$7,000 onboarding fee.",
  },
  {
    label: "No memory between sessions",
    detail:
      "Breeze starts fresh every conversation — it reads from your CRM and knowledge base but does not remember what it discussed last week or what preferences a user expressed last month.",
  },
];

export default function AmVsHubSpotAiPage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#ededed",
        minHeight: "100vh",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Back nav ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link
          href="/compare"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-colors"
          style={{ color: "#555" }}
        >
          <span>←</span> All comparisons
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[72dvh] px-6 py-24 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${ACCENT}0d 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              background: `${ACCENT}14`,
              border: `1px solid ${ACCENT}40`,
              color: ACCENT,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            Comparison · AM vs HubSpot AI
          </div>

          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6 text-white"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
            }}
          >
            AM vs HubSpot AI
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "#888" }}>
            HubSpot Breeze lives inside HubSpot. AM works across your entire stack — without
            lock-in, credit pools, or a five-figure onboarding commitment.
          </p>

          {/* Verdict cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Platform freedom", verdict: "AM wins", reason: "Works across every tool, not just HubSpot" },
              { label: "Persistent memory", verdict: "AM wins", reason: "Remembers context across all sessions" },
              { label: "CRM native features", verdict: "HubSpot wins", reason: "Deep CRM integration and data enrichment" },
            ].map((v) => (
              <div
                key={v.label}
                className="rounded-xl p-5 text-left"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${v.verdict === "AM wins" ? ACCENT + "30" : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#555" }}>
                  {v.label}
                </div>
                <div
                  className="text-sm font-bold mb-1"
                  style={{ color: v.verdict === "AM wins" ? ACCENT : "#888" }}
                >
                  {v.verdict}
                </div>
                <div className="text-xs leading-snug" style={{ color: "#666" }}>{v.reason}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain points ──────────────────────────────────────── */}
      <section
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.012)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: ACCENT }}>
              Why teams switch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Where HubSpot AI falls short.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.label}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {p.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────── */}
      <section id="comparison" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: ACCENT }}>
              Feature comparison
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs HubSpot AI, side by side.
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <div
              className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest py-4 px-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#555",
              }}
            >
              <div>Feature</div>
              <div className="text-center" style={{ color: ACCENT }}>AM</div>
              <div className="text-center">HubSpot AI</div>
            </div>
            {tableRows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 items-center py-4 px-6 text-sm"
                style={{
                  borderBottom: i < tableRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div style={{ color: "#aaa" }}>{row.feature}</div>
                <div className="text-center">
                  <Cell value={row.am} isAm />
                </div>
                <div className="text-center">
                  <Cell value={row.hs} isAm={false} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "#444" }}>
            ~ = partial support
          </p>
        </div>
      </section>

      {/* ── Who sections ─────────────────────────────────────── */}
      <section
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.012)" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Who is HubSpot AI for?
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
              HubSpot Breeze is the right choice for teams that have already made HubSpot their
              system of record — for marketing, sales, and support. If your CRM data lives in
              HubSpot and your team's daily workflows revolve around it, Breeze adds real value with
              minimal integration work.
            </p>
            <ul className="space-y-2">
              {[
                "Teams fully committed to the HubSpot ecosystem",
                "Marketing and sales teams using HubSpot as their CRM",
                "Companies wanting AI content generation inside HubSpot",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#777" }}>
                  <span style={{ color: "#555", flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Who is AM for?
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
              AM is for individuals and teams that want an AI worker that operates across their
              entire stack — not one locked to a single platform. AM handles tasks in Slack, email,
              GitHub, Zendesk, HubSpot, and any other tool your team uses, and it remembers
              everything across sessions.
            </p>
            <ul className="space-y-2">
              {[
                "Individuals and teams who work across multiple tools",
                "Teams that want persistent memory, not stateless chat",
                "Anyone who refuses to pay $10K+ before seeing value",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#aaa" }}>
                  <span style={{ color: ACCENT, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: ACCENT }}>
              FAQ
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs HubSpot AI — questions answered.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is the difference between AM and HubSpot AI (Breeze)?",
                a: "HubSpot Breeze is a suite of AI features built into HubSpot — drafting emails, enriching contacts, routing support chats — all within the HubSpot platform. AM is an autonomous digital worker that operates across your entire stack, with or without HubSpot. AM has persistent memory, works natively in Slack and email, and handles tasks that span multiple tools without requiring everything to be centralised in HubSpot first.",
              },
              {
                q: "Can I use AM if I already use HubSpot?",
                a: "Yes. AM integrates with HubSpot — it can read and update contacts, log activities, and trigger workflows. But it is not confined there. AM also works with Slack, email, GitHub, Zendesk, and other tools simultaneously, giving you a single autonomous worker across the full stack.",
              },
              {
                q: "Is AM a good HubSpot Breeze alternative?",
                a: "AM is the right choice if you want AI that works beyond HubSpot — for individuals or teams that do not want to buy into the full HubSpot ecosystem, or who need an AI that operates across Slack, email, GitHub, and other tools in addition to their CRM. If you are fully committed to HubSpot and only need AI inside that platform, Breeze is built for that.",
              },
              {
                q: "How does AM's pricing compare to HubSpot AI?",
                a: "HubSpot AI features require a HubSpot subscription. Breeze Agents require Professional or Enterprise tiers — roughly $10,800 per year for a 10-person team, plus a mandatory onboarding fee of $3,000–$7,000. AM has flat, transparent pricing with no credit pools, no per-seat escalation, and no onboarding fee.",
              },
              {
                q: "Does AM remember context across sessions?",
                a: "Yes. AM has persistent memory — it remembers facts, preferences, and context from previous conversations. HubSpot Breeze does not retain memory across sessions; each conversation starts from your CRM data and knowledge base, with no recall of prior interactions outside of logged CRM activity.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3
                  className="text-base font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        id="waitlist"
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: ACCENT }}>
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            AI that works everywhere.
            <br />
            <span style={{ color: ACCENT }}>Not just inside HubSpot.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Join the early access list. No credit card. No commitment.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
