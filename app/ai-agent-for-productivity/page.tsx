import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AI Agent for Productivity — Email, Calendar & Automation | helloam.bot",
  description:
    "AM is an AI agent for productivity. It reads and sends email, manages your calendar, schedules meetings, protects focus time, and automates repetitive workflows — autonomously, while you focus on what matters.",
  keywords: [
    "AI agent for productivity",
    "AI email agent",
    "AI calendar assistant",
    "email automation AI",
    "AI schedule manager",
    "autonomous email AI",
    "AI for inbox management",
    "AI calendar automation",
    "AI productivity tool",
    "email and calendar AI",
    "AI workflow automation",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/ai-agent-for-productivity",
  },
  openGraph: {
    title: "AI Agent for Productivity — Email, Calendar & Automation",
    description:
      "AM handles your inbox, schedules your meetings, and automates your workflows — so you can focus on the work only you can do. Get early access at helloam.bot.",
    url: "https://helloam.bot/ai-agent-for-productivity",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent for Productivity — Email, Calendar & Automation",
    description:
      "AM is the AI agent for knowledge workers — autonomous email triage, smart calendar scheduling, and workflow automation. Get early access at helloam.bot.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/ai-agent-for-productivity#product",
    name: "AM for Productivity",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot/ai-agent-for-productivity",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is an AI agent for productivity that autonomously handles email triage, drafting, and sending; calendar scheduling, conflict resolution, and focus-time protection; and workflow automation across your tools — 24/7.",
    featureList: [
      "Autonomous email triage and drafting",
      "Smart calendar scheduling and conflict resolution",
      "Focus time protection",
      "Workflow automation across tools",
      "Meeting preparation and follow-up",
      "Cross-tool integrations",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://helloam.bot/ai-agent-for-productivity#waitlist",
      description: "Free early access pilot. Individual and team plans available.",
    },
    publisher: {
      "@type": "Organization",
      name: "helloam.bot",
      url: "https://helloam.bot",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://helloam.bot/ai-agent-for-productivity#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AM handle email autonomously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM reads your inbox, triages messages by urgency and context, drafts replies in your voice, and sends responses for routine threads — without you opening Gmail. For anything requiring your judgment, it surfaces a concise summary so you can decide in seconds, not minutes.",
        },
      },
      {
        "@type": "Question",
        name: "How does AM manage my calendar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM schedules meetings based on your preferences, resolves conflicts automatically, and carves out protected focus blocks before they get eaten. It coordinates with attendees over email so you never have to play scheduling tag.",
        },
      },
      {
        "@type": "Question",
        name: "How is AM different from Superhuman or Reclaim.ai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Superhuman makes email faster to process — you still do all the work. Reclaim.ai automates calendar scheduling. AM is the only tool that handles email, calendar, and workflow automation as a single unified agent with memory across all three. You don't manage AM — you delegate to it.",
        },
      },
      {
        "@type": "Question",
        name: "What workflow automations can AM run?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM can connect your inbox, calendar, Slack, Notion, and other tools to create end-to-end automations: meeting notes routed to Notion, follow-up emails sent after calls, weekly digests prepared from your threads, and more. If it's repetitive, AM can own it.",
        },
      },
      {
        "@type": "Question",
        name: "Is my email and calendar data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM uses OAuth for all integrations — we never store your credentials. Data is encrypted in transit and at rest. You can revoke access at any time from your Google or Microsoft account settings.",
        },
      },
    ],
  },
];

// Accent color for the productivity persona
const PROD = "#00C896";

export default function AiAgentForProductivityPage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#ededed",
        minHeight: "100vh",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      {/* JSON-LD structured data */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[92dvh] px-6 py-24 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${PROD}0f 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              background: `${PROD}14`,
              border: `1px solid ${PROD}40`,
              color: PROD,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PROD }} />
            AI Digital Worker · For Productivity
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            <span className="text-white">Your inbox. Your calendar.</span>
            <br />
            <span style={{ color: PROD }}>Handled.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "#888888" }}
          >
            AM is an AI agent that reads email, schedules meetings, protects your focus time, and
            automates the repetitive work — so you can spend your hours on what only you can do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: PROD, color: "#ffffff" }}
            >
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#cccccc",
              }}
            >
              See how it works
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { stat: "3 hrs", label: "avg knowledge worker time lost to email daily" },
              { stat: "31%", label: "of meetings could be replaced by async communication" },
              { stat: "68%", label: "of workday spent on tasks with no direct output" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: PROD }}
                >
                  {item.stat}
                </div>
                <div className="text-xs leading-snug" style={{ color: "#555" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow cards ───────────────────────────────────── */}
      <section id="workflow" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: PROD }}
            >
              What AM handles for you
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Three workflows.{" "}
              <span style={{ color: PROD }}>One agent.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Email */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${PROD}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: PROD }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${PROD}18`, border: `1px solid ${PROD}35`, color: PROD }}
              >
                Email
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Inbox zero, automatically.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  AM triages your inbox, drafts replies in your voice, and handles routine threads
                  autonomously. Anything requiring your attention gets surfaced as a crisp summary —
                  decide in seconds, not minutes.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Gmail / Outlook", "Triage & draft", "Send autonomously", "Your voice"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#777",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${PROD}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: PROD }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${PROD}18`, border: `1px solid ${PROD}35`, color: PROD }}
              >
                Calendar
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Schedule meetings. Protect focus.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  AM schedules meetings based on your preferences, resolves conflicts before they happen,
                  and carves out focus blocks. It coordinates with attendees over email — no more
                  scheduling tag.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Google / Outlook Calendar", "Conflict resolution", "Focus blocks", "Auto-coordinate"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#777",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Automation */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${PROD}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: PROD }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${PROD}18`, border: `1px solid ${PROD}35`, color: PROD }}
              >
                Automation
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Connect your tools. Eliminate the busywork.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  AM bridges your inbox, calendar, Slack, Notion, and other tools into seamless
                  workflows. Meeting notes to Notion. Follow-ups after calls. Weekly digests.
                  If it&apos;s repetitive, AM owns it.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Slack / Notion", "Meeting notes", "Follow-up emails", "Weekly digests"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#777",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: PROD }}
            >
              How it works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Set up in minutes. Runs on its own.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect your accounts",
                body: "Link Gmail or Outlook and your calendar. AM learns your communication style, your schedule preferences, and your meeting habits — no manual configuration needed.",
              },
              {
                step: "02",
                title: "Set your preferences",
                body: "Tell AM what to handle autonomously and what to flag for you. Define your focus hours, response style, and which threads it can own. AM adapts as it learns.",
              },
              {
                step: "03",
                title: "Review what matters",
                body: "AM handles the routine. You get a daily digest of decisions made and a short list of items that need your attention. Your time goes to work only you can do.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <div
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: `${PROD}50`,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────── */}
      <section id="vs" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: PROD }}
            >
              How AM stacks up
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Not a faster tool. An autonomous agent.
            </h2>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-4 text-xs font-bold uppercase tracking-widest py-4 px-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#555",
              }}
            >
              <div>Feature</div>
              <div className="text-center" style={{ color: PROD }}>AM</div>
              <div className="text-center">Superhuman</div>
              <div className="text-center">Reclaim.ai</div>
            </div>

            {[
              { feature: "Autonomous email triage & send", am: true, superhuman: false, reclaim: false },
              { feature: "Calendar scheduling & conflicts", am: true, superhuman: false, reclaim: true },
              { feature: "Focus time protection", am: true, superhuman: false, reclaim: true },
              { feature: "Cross-tool workflow automation", am: true, superhuman: false, reclaim: false },
              { feature: "Meeting notes & follow-ups", am: true, superhuman: false, reclaim: false },
              { feature: "Faster email UI", am: false, superhuman: true, reclaim: false },
            ].map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 items-center py-4 px-6 text-sm"
                style={{
                  borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div style={{ color: "#aaa" }}>{row.feature}</div>
                <div className="text-center">
                  {row.am ? (
                    <span style={{ color: PROD }}>✓</span>
                  ) : (
                    <span style={{ color: "#333" }}>—</span>
                  )}
                </div>
                <div className="text-center">
                  {row.superhuman ? (
                    <span style={{ color: "#666" }}>✓</span>
                  ) : (
                    <span style={{ color: "#333" }}>—</span>
                  )}
                </div>
                <div className="text-center">
                  {row.reclaim ? (
                    <span style={{ color: "#666" }}>✓</span>
                  ) : (
                    <span style={{ color: "#333" }}>—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        id="faq"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: PROD }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Your questions, answered.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does AM handle email autonomously?",
                a: "AM reads your inbox, triages messages by urgency and context, drafts replies in your voice, and sends responses for routine threads — without you opening Gmail. For anything requiring your judgment, it surfaces a concise summary so you can decide in seconds, not minutes.",
              },
              {
                q: "How does AM manage my calendar?",
                a: "AM schedules meetings based on your preferences, resolves conflicts automatically, and carves out protected focus blocks before they get eaten. It coordinates with attendees over email so you never have to play scheduling tag.",
              },
              {
                q: "How is AM different from Superhuman or Reclaim.ai?",
                a: "Superhuman makes email faster to process — you still do all the work. Reclaim.ai automates calendar scheduling. AM is the only tool that handles email, calendar, and workflow automation as a single unified agent with memory across all three. You don't manage AM — you delegate to it.",
              },
              {
                q: "What workflow automations can AM run?",
                a: "AM can connect your inbox, calendar, Slack, Notion, and other tools to create end-to-end automations: meeting notes routed to Notion, follow-up emails sent after calls, weekly digests prepared from your threads, and more. If it's repetitive, AM can own it.",
              },
              {
                q: "Is my email and calendar data secure?",
                a: "Yes. AM uses OAuth for all integrations — we never store your credentials. Data is encrypted in transit and at rest. You can revoke access at any time from your Google or Microsoft account settings.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3
                  className="text-base font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Waitlist ───────────────────────────────────── */}
      <section
        id="waitlist"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: PROD }}
          >
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let AM handle the inbox.
            <br />
            <span style={{ color: PROD }}>You handle everything else.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Join the early access list. We&apos;ll reach out when your spot is ready.
            No credit card. No commitment.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
