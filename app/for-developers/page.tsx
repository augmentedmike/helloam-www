import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM for Developers — Ticket→PR, Code Review & On-Call Triage | helloam.bot",
  description:
    "AM is an AI digital worker for developer teams. It picks up tickets, writes code, opens PRs with tests, reviews pull requests like a senior engineer, and triages on-call alerts — autonomously.",
  keywords: [
    "AI for developers",
    "automated pull request generation",
    "ticket to PR automation",
    "AI code review tool",
    "on-call triage automation",
    "AI software engineer",
    "automated code review",
    "AI incident triage",
    "AI developer agent",
    "backlog automation for engineers",
    "AI codebase assistant",
    "incident response automation",
    "ticket to PR workflow",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/for-developers",
  },
  openGraph: {
    title: "AM for Developers — Ticket→PR, Code Review & On-Call Triage",
    description:
      "AM picks up tickets, writes code, opens PRs with tests, and reviews pull requests like a senior engineer. On-call triage included. Get early access at helloam.bot.",
    url: "https://helloam.bot/for-developers",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM for Developers — Ticket→PR, Code Review & On-Call Triage",
    description:
      "AM is the AI digital worker for developer teams — autonomous ticket→PR, senior-level code review, and on-call triage. Get early access at helloam.bot.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/for-developers#product",
    name: "AM for Developers",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot/for-developers",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is an AI digital worker for developer teams. It autonomously picks up tickets, reads the codebase, writes code, opens pull requests with tests, reviews incoming PRs like a senior engineer, and triages on-call incidents — 24/7.",
    featureList: [
      "Ticket to Pull Request automation",
      "AI-powered code review",
      "On-call incident triage",
      "Codebase Q&A",
      "Automated test generation",
      "Migration assistance",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://helloam.bot/for-developers#waitlist",
      description: "Free early access pilot. Team pricing from $149/seat/month.",
    },
    creator: {
      "@id": "https://helloam.bot/#organization",
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
    "@id": "https://helloam.bot/for-developers#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AM turn a ticket into a pull request?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM reads the ticket from Jira or Linear, explores the connected GitHub or GitLab repository to understand the codebase, writes the implementation, generates tests, opens a PR, and posts a summary for your team to review. No handholding required — you assign the ticket, AM does the rest.",
        },
      },
      {
        "@type": "Question",
        name: "How is AM different from GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GitHub Copilot is an autocomplete assistant — it helps you write code faster while you're in the editor. AM is autonomous — it picks up tickets independently, reads the full codebase, writes the code end-to-end, opens PRs with tests, and reviews incoming pull requests without you in the loop. You review the output, not the process.",
        },
      },
      {
        "@type": "Question",
        name: "What does AM's code review look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM reviews pull requests for correctness, test coverage, edge cases, and adherence to your team's established patterns. It leaves specific, actionable inline comments — the kind a senior engineer would write, not surface-level lint suggestions. It also flags missing tests and potential regressions.",
        },
      },
      {
        "@type": "Question",
        name: "How does AM handle on-call triage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM monitors your alerting system (PagerDuty, OpsGenie, etc.), correlates firing alerts with recent deployments and code changes, and surfaces the most likely root cause — before you're fully awake. It reduces the time between alert and diagnosis so you can fix the issue faster.",
        },
      },
      {
        "@type": "Question",
        name: "What integrations does AM support for developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM integrates with GitHub, GitLab, Jira, Linear, Slack, PagerDuty, OpsGenie, Confluence, and Notion. It works inside your existing toolchain — no workflow changes required.",
        },
      },
    ],
  },
];

// Accent color for the developer persona
const DEV = "#4A90D9";

export default function ForDevelopersPage() {
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
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${DEV}0f 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              background: `${DEV}14`,
              border: `1px solid ${DEV}40`,
              color: DEV,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: DEV }} />
            AI Digital Worker · For Developers
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            <span className="text-white">Ship the backlog.</span>
            <br />
            <span style={{ color: DEV }}>Kill the context switches.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "#888888" }}
          >
            AM picks up your tickets, reads the codebase, writes the code, and opens PRs — autonomously.
            It reviews incoming pull requests like a senior engineer and triages on-call alerts before
            you&apos;re fully awake.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: DEV, color: "#ffffff" }}
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
              { stat: "40%", label: "of eng time spent on maintenance, not building" },
              { stat: "2 hrs", label: "avg wait time for a PR review" },
              { stat: "4am", label: "when on-call pages don't care about context" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: DEV }}
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
              style={{ color: DEV }}
            >
              What AM does for developers
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Three workflows.{" "}
              <span style={{ color: DEV }}>Zero babysitting.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ticket → PR */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${DEV}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: DEV }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${DEV}18`, border: `1px solid ${DEV}35`, color: DEV }}
              >
                Ticket → PR
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Assign a ticket. Get a pull request.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  Assign AM a Jira or Linear ticket. It reads the codebase, understands the context,
                  writes the implementation, generates tests, opens a PR, and posts a summary for review.
                  End-to-end task ownership — you review the output, not the process.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Jira / Linear", "GitHub / GitLab", "Tests included", "PR summary"].map((tag) => (
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

            {/* Code Review */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${DEV}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: DEV }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${DEV}18`, border: `1px solid ${DEV}35`, color: DEV }}
              >
                Code Review
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Reviews PRs like a senior engineer.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  AM reviews incoming pull requests for correctness, test coverage, edge cases, and
                  adherence to your team&apos;s established patterns. It leaves specific, actionable
                  inline comments — not lint noise. Faster reviews, better PRs.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Correctness", "Edge cases", "Coverage gaps", "Pattern adherence"].map((tag) => (
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

            {/* On-Call Triage */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${DEV}33`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: DEV }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${DEV}18`, border: `1px solid ${DEV}35`, color: DEV }}
              >
                On-Call Triage
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Root cause before you&apos;re awake.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  AM monitors your alerts, correlates incidents with recent deployments, and surfaces
                  the most likely root cause — before you&apos;re fully awake. Less time diagnosing,
                  more time fixing. Quieter nights.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["PagerDuty / OpsGenie", "Deployment correlation", "Root cause", "Runbooks"].map((tag) => (
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
              style={{ color: DEV }}
            >
              How it works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Up and running in an afternoon.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect your tools",
                body: "Link your GitHub or GitLab repo, your issue tracker (Jira or Linear), and your alerting system. AM reads your codebase and learns your team's patterns.",
              },
              {
                step: "02",
                title: "Assign work to AM",
                body: "Assign a ticket to AM like you would any team member. It picks it up, asks clarifying questions if needed, and starts working autonomously.",
              },
              {
                step: "03",
                title: "Review & ship",
                body: "AM opens a PR, posts a summary, and requests your review. You review the output — not the process. Approve and merge. Done.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <div
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: `${DEV}50`,
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
              style={{ color: DEV }}
            >
              How AM stacks up
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Not an assistant. An engineer.
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
              <div className="text-center" style={{ color: DEV }}>AM</div>
              <div className="text-center">GitHub Copilot</div>
              <div className="text-center">Devin</div>
            </div>

            {[
              { feature: "Ticket → PR (autonomous)", am: true, copilot: false, devin: true },
              { feature: "Code review on PRs", am: true, copilot: false, devin: false },
              { feature: "On-call / incident triage", am: true, copilot: false, devin: false },
              { feature: "PM & support workflows", am: true, copilot: false, devin: false },
              { feature: "Works in your IDE", am: false, copilot: true, devin: false },
              { feature: "Codebase Q&A", am: true, copilot: true, devin: true },
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
                    <span style={{ color: DEV }}>✓</span>
                  ) : (
                    <span style={{ color: "#333" }}>—</span>
                  )}
                </div>
                <div className="text-center">
                  {row.copilot ? (
                    <span style={{ color: "#666" }}>✓</span>
                  ) : (
                    <span style={{ color: "#333" }}>—</span>
                  )}
                </div>
                <div className="text-center">
                  {row.devin ? (
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
              style={{ color: DEV }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Developer questions, answered.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does AM turn a ticket into a pull request?",
                a: "AM reads the ticket from Jira or Linear, explores your GitHub or GitLab repository to understand context and patterns, writes the implementation, generates tests, opens a PR, and posts a human-readable summary. You assign the ticket — AM does the rest. You review the output, not the process.",
              },
              {
                q: "How is AM different from GitHub Copilot?",
                a: "Copilot is an in-editor autocomplete tool — it makes you faster while you write code. AM is autonomous — it picks up tickets independently, reads the full codebase, writes the code end-to-end, opens PRs with tests, and reviews incoming pull requests without you in the loop. Different tools for different jobs.",
              },
              {
                q: "What does AM's code review actually look like?",
                a: "AM reviews PRs for correctness, test coverage, edge cases, and adherence to your team's patterns. It leaves specific, actionable inline comments — the kind a senior engineer writes, not surface-level lint noise. It also flags missing tests and potential regressions before they hit main.",
              },
              {
                q: "How does on-call triage work?",
                a: "AM monitors your alerting system (PagerDuty, OpsGenie, etc.), correlates firing alerts with recent deployments and code changes, and surfaces the most likely root cause — often before you've finished reading the page. Less time diagnosing. More time fixing.",
              },
              {
                q: "What integrations does AM support?",
                a: "GitHub, GitLab, Jira, Linear, Slack, PagerDuty, OpsGenie, Confluence, and Notion. AM works inside your existing toolchain — no workflow changes required.",
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
            style={{ color: DEV }}
          >
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let AM handle the backlog.
            <br />
            <span style={{ color: DEV }}>You handle the product.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Join the early access list. We&apos;ll reach out when your team&apos;s spot is ready.
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
