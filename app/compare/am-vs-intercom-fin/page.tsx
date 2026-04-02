import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Intercom Fin — Full Comparison | helloam.bot",
  description:
    "AM vs Intercom Fin: Fin answers support questions. AM resolves them — by reading docs, checking order status, triggering actions, escalating with full context, and writing follow-up tickets.",
  keywords: [
    "AM vs Intercom Fin",
    "Intercom Fin alternative",
    "Fin AI comparison",
    "AI support agent",
    "AI customer support automation",
    "support ticket resolution AI",
    "Intercom alternative",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-intercom-fin",
  },
  openGraph: {
    title: "AM vs Intercom Fin — Full Comparison",
    description:
      "Fin answers support questions. AM resolves them — taking actions, escalating with context, and writing follow-up tickets autonomously.",
    url: "https://helloam.bot/compare/am-vs-intercom-fin",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Intercom Fin — Full Comparison",
    description:
      "Fin answers support questions. AM resolves them — taking actions, escalating with context, and writing follow-up tickets autonomously.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/compare/am-vs-intercom-fin#product",
    name: "AM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is a fully autonomous AI digital worker for support teams. It triages incoming tickets, reads your help center and internal docs, checks order status via integrations, triggers actions (refunds, escalations), and writes follow-up tickets — not just replies.",
    publisher: {
      "@type": "Organization",
      name: "helloam.bot",
      url: "https://helloam.bot",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://helloam.bot/compare/am-vs-intercom-fin#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between AM and Intercom Fin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Intercom Fin is an AI chatbot built on top of your help center — it answers questions by retrieving relevant articles. AM is an autonomous support worker — it reads your help center and internal docs, but also takes actions: it can check order status via API integrations, trigger refunds or escalations in your CRM, escalate to human agents with full summarized context, and write follow-up engineering tickets for recurring bugs. Fin replies; AM resolves.",
        },
      },
      {
        "@type": "Question",
        name: "Can AM work inside Intercom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM integrates with Intercom and can work alongside Fin or as a replacement for it. AM handles the same inbound triage, adds actions (not just answers), and escalates to your human agents in Intercom with a full conversation summary when needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is AM a good Intercom Fin alternative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM is the right choice if your support team needs more than FAQ-style answers — if you need an AI that can check order status, trigger actions in your backend, escalate with context, and create engineering tickets for product bugs. If your needs are primarily answered by your help center articles, Fin may be sufficient.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM work across Slack and email, not just chat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM handles support across Slack (internal and external shared channels), email, Intercom, Zendesk, and other ticketing systems. Fin is primarily a chat widget. AM covers the full surface area of where your customers and team ask for help.",
        },
      },
      {
        "@type": "Question",
        name: "How does AM handle escalations compared to Fin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fin hands off to a human agent when it can't answer. AM escalates with full context: a summary of the conversation, what was tried, the customer's history, and a recommended action. Human agents spend less time reading back-and-forth and more time resolving. AM also knows when NOT to escalate — it can trigger simple actions (status checks, refunds) itself.",
        },
      },
    ],
  },
];

const ACCENT = "#00E5FF";

const tableRows = [
  { feature: "Answers FAQ from help center", am: "full", fin: "full" },
  { feature: "Checks order / account status via API", am: "full", fin: "none" },
  { feature: "Triggers actions (refunds, escalations)", am: "full", fin: "none" },
  { feature: "Escalates with full summarized context", am: "full", fin: "partial" },
  { feature: "Works in Slack and email (not just chat)", am: "full", fin: "none" },
  { feature: "Creates engineering tickets for bugs", am: "full", fin: "none" },
  { feature: "Handles internal ops questions", am: "full", fin: "none" },
  { feature: "Built-in chat widget (Intercom native)", am: "none", fin: "full" },
] as const;

type CellValue = string;

function Cell({ value, isAm }: { value: CellValue; isAm: boolean }) {
  const color = isAm ? ACCENT : "#666";
  if (value === "full") return <span style={{ color }}>✓</span>;
  if (value === "partial") return <span style={{ color: "#888" }}>~</span>;
  if (value === "none") return <span style={{ color: "#333" }}>—</span>;
  return (
    <span className="text-xs font-semibold" style={{ color: isAm ? ACCENT : "#666" }}>
      {value}
    </span>
  );
}

export default function AmVsIntercomFinPage() {
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
            Comparison · AM vs Intercom Fin
          </div>

          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6 text-white"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
            }}
          >
            AM vs Intercom Fin
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "#888" }}>
            Fin replies to support tickets from your help center. AM resolves them — by taking
            actions, escalating with full context, and working across every channel your team uses.
          </p>

          {/* Verdict cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Resolution depth", verdict: "AM wins", reason: "Takes actions, doesn't just reply" },
              { label: "Channel coverage", verdict: "AM wins", reason: "Slack, email, Intercom, Zendesk" },
              { label: "Intercom native", verdict: "Fin wins", reason: "Built-in chat widget and workspace" },
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
              AM vs Intercom Fin, side by side.
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
              <div className="text-center">Intercom Fin</div>
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
                  <Cell value={row.fin} isAm={false} />
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
              Who is Intercom Fin for?
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
              Fin is best for teams already on Intercom that want to deflect common FAQ-style support
              questions using their existing help center content. If most of your support volume is
              "how do I do X?" questions that are already answered in your docs, Fin can handle them
              without additional configuration.
            </p>
            <ul className="space-y-2">
              {[
                "Teams fully committed to the Intercom platform",
                "High FAQ-deflection, low action-required support",
                "Simple chat-first support workflows",
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
              AM is for support teams whose tickets require more than an article link. When resolution
              means checking an order status, triggering a refund, escalating with a full summary, or
              filing a bug ticket with engineering — AM handles the full chain, not just the reply.
            </p>
            <ul className="space-y-2">
              {[
                "Support teams that need action, not just answers",
                "Omnichannel: Slack, email, Intercom, Zendesk",
                "Teams bridging support and engineering workflows",
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
              AM vs Intercom Fin — questions answered.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is the difference between AM and Intercom Fin?",
                a: "Fin is an AI chatbot that answers questions by retrieving help center articles. AM is an autonomous support worker that reads your docs and takes actions — checking order status, triggering refunds, escalating with full context, and writing follow-up engineering tickets. Fin replies; AM resolves.",
              },
              {
                q: "Can AM work inside Intercom?",
                a: "Yes. AM integrates with Intercom and can work alongside Fin or replace it. It handles inbound triage, adds action-taking capabilities, and escalates to your human agents in Intercom with a full conversation summary when needed.",
              },
              {
                q: "Is AM a good Intercom Fin alternative?",
                a: "AM is the right choice if your support team needs more than FAQ-style answers — if you need an AI that checks order status, triggers backend actions, escalates with context, and creates engineering tickets for product bugs. If FAQ deflection is all you need, Fin may be sufficient.",
              },
              {
                q: "Does AM work in Slack and email?",
                a: "Yes. AM handles support across Slack (internal and external shared channels), email, Intercom, Zendesk, and other ticketing systems. Fin is primarily a chat widget. AM covers the full surface area of where your customers and team ask for help.",
              },
              {
                q: "How does AM handle escalations compared to Fin?",
                a: "Fin hands off to a human when it can't answer. AM escalates with full context: a summary of the conversation, what was tried, the customer's history, and a recommended action. Human agents spend less time catching up and more time resolving. AM also handles simple actions itself — so fewer escalations are needed overall.",
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
            From reply to resolution.
            <br />
            <span style={{ color: ACCENT }}>Autonomously.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Free and open source — no credit card, no subscription, ever.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
