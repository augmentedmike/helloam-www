import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Claude — AI Digital Worker vs Chat Assistant | helloam.bot",
  description:
    "Comparing AM to Claude? Claude Pro answers questions. AM executes tasks end-to-end — email, calendar, code, projects — autonomously, 24/7. See the real difference between a chat assistant and a digital worker.",
  keywords: [
    "am vs claude",
    "claude alternative",
    "claude pro alternative",
    "claude vs am",
    "claude replacement",
    "ai digital worker vs claude",
    "autonomous ai vs claude",
    "claude pro comparison",
    "claude api alternative",
    "anthropic claude vs",
    "ai agent vs claude",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/vs-claude",
  },
  openGraph: {
    title: "AM vs Claude — AI Digital Worker vs Chat Assistant",
    description:
      "Claude Pro answers questions. AM executes tasks. Compare Claude Pro, Claude API, ChatGPT Plus, and Devin against AM — with honest trade-offs.",
    url: "https://helloam.bot/vs-claude",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Claude — AI Digital Worker vs Chat Assistant",
    description:
      "Stop paying $20/month for a chat assistant. AM autonomously executes tasks — email, calendar, code, projects — and runs 24/7 without prompting.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/vs-claude#product",
    name: "AM — AI Digital Worker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot/vs-claude",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is an autonomous AI digital worker — not a chat assistant. It executes tasks end-to-end: email, calendar, code, projects, and more. Compare it to Claude Pro, Claude API, ChatGPT Plus, and Devin.",
    featureList: [
      "Autonomous task execution",
      "Email and calendar management",
      "Code generation and PR commits",
      "Project and Kanban management",
      "Runs 24/7 without prompting",
      "Persistent indefinite memory",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://helloam.bot/vs-claude#waitlist",
      description: "Free early access pilot.",
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
    "@id": "https://helloam.bot/vs-claude#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is AM different from Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claude is a chat assistant — you ask, it answers, you act on the response. AM is an autonomous digital worker — you assign work, AM executes it end-to-end, you review the outcome. AM connects to your real tools (email, calendar, GitHub, Jira, Slack), runs a Kanban board, commits code, and manages projects independently. It's a fundamentally different category.",
        },
      },
      {
        "@type": "Question",
        name: "Is AM a Claude wrapper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AM is not a Claude wrapper or API re-skin. AM is a complete autonomous agent system with its own memory, task execution loop, tool integrations, and Kanban board. It uses frontier AI models under the hood, but the product is the autonomous execution layer — not the underlying model.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM have persistent memory unlike Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Claude Pro's memory is session-scoped — even with Projects, memory is shallow and manually curated. AM builds an indefinitely-growing memory of your codebase, team preferences, past decisions, and work context. Memory persists across every task, every session, without manual management.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AM cost compared to Claude Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claude Pro is $20/user/month — $240/year per person for a Q&A interface that can't take action in your tools. AM is priced as a digital worker, not a chat subscription. The right comparison is AM vs a part-time contractor's rate, not AM vs $20/month SaaS. Early access is free.",
        },
      },
      {
        "@type": "Question",
        name: "Can AM replace Claude for coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For interactive coding questions and pair-programming conversations, Claude remains excellent. For executing end-to-end coding tasks — reading the codebase, writing code, running tests, committing PRs, and closing tickets — AM does the work without you staying in the loop. They serve different jobs.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data private with AM vs Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM never uses your data to train models. Claude does not use data from paid tiers for training. Both respect your privacy on paid plans. The key difference: AM can be deployed within your own infrastructure for teams with strict compliance requirements, giving you full data sovereignty.",
        },
      },
    ],
  },
];

const AM = "#00E5FF";

type CellValue = true | false | "partial";

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <span style={{ color: AM }}>✓</span>;
  if (value === false) return <span style={{ color: "#333" }}>—</span>;
  return <span style={{ color: "#666", fontSize: "0.7rem" }}>partial</span>;
}

export default function VsClaudePage() {
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

      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav
        className="flex items-center px-6 py-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <a
          href="https://helloam.bot"
          className="text-sm transition-colors duration-200 hover:opacity-80"
          style={{ color: "#555" }}
        >
          ← helloam.bot
        </a>
      </nav>

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
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${AM}0f 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              background: `${AM}14`,
              border: `1px solid ${AM}40`,
              color: AM,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: AM }} />
            AM vs Claude · Digital Worker vs Chat Assistant
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            <span className="text-white">Claude answers questions.</span>
            <br />
            <span style={{ color: AM }}>AM gets things done.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "#888888" }}
          >
            Claude Pro is $20/user/month for a text box. AM executes tasks — email, calendar, code,
            projects — end-to-end, autonomously, without you staying in the loop.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: AM, color: "#000000" }}
            >
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#cccccc",
              }}
            >
              See comparison
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { stat: "$20/mo", label: "per user — Claude Pro pricing for a Q&A interface that can't execute tasks" },
              { stat: "0 hrs", label: "of work done by Claude while you sleep — it's reactive, not autonomous" },
              { stat: "∞", label: "AM memory — vs Claude's session-scoped context that resets between chats" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: AM }}
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

      {/* ── Pain points ──────────────────────────────────────── */}
      <section
        id="pain-points"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: AM }}
            >
              Why Claude Pro Isn&apos;t Enough
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Three problems Claude{" "}
              <span style={{ color: AM }}>can&apos;t solve.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Claude stops working when you close the tab.",
                body: "Every Claude session is reactive. You write a prompt, Claude responds, you act on it. When you're away — sleeping, in meetings, on vacation — nothing gets done. AM runs its own task queue 24/7, executing work continuously without you in the loop.",
              },
              {
                number: "02",
                title: "Claude forgets everything between sessions.",
                body: "Even with Claude Projects, memory is shallow and manually curated — you have to tell it what to remember. AM builds a persistent, indefinitely-growing memory of your codebase, team preferences, past decisions, and project context. It knows your stack. It remembers your patterns.",
              },
              {
                number: "03",
                title: "Claude talks. It doesn't act in your tools.",
                body: "Claude can write an email draft. It cannot send it. It can describe a calendar event. It cannot create one. AM has native integrations: Gmail, Google Calendar, GitHub, Jira, Slack — writing real commits, sending real emails, creating real calendar events, closing real tickets.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex gap-8 rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-4xl font-bold shrink-0 leading-none"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: `${AM}30`,
                  }}
                >
                  {item.number}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature comparison table ─────────────────────────── */}
      <section id="comparison" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: AM }}
            >
              Side-by-side
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Claude vs ChatGPT vs Devin
            </h2>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-6 text-xs font-bold uppercase tracking-widest py-4 px-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#555",
              }}
            >
              <div className="col-span-2">Feature</div>
              <div className="text-center" style={{ color: AM }}>AM</div>
              <div className="text-center">Claude Pro</div>
              <div className="text-center">ChatGPT+</div>
              <div className="text-center">Devin</div>
            </div>

            {[
              {
                feature: "Executes tasks autonomously",
                am: true, claude: false, chatgpt: false, devin: "partial",
              },
              {
                feature: "Runs 24/7 without human in loop",
                am: true, claude: false, chatgpt: false, devin: "partial",
              },
              {
                feature: "Persistent cross-session memory",
                am: true, claude: false, chatgpt: false, devin: false,
              },
              {
                feature: "Email & calendar integrations",
                am: true, claude: false, chatgpt: false, devin: false,
              },
              {
                feature: "Code commits & PR workflow",
                am: true, claude: false, chatgpt: false, devin: true,
              },
              {
                feature: "Project & Kanban management",
                am: true, claude: false, chatgpt: false, devin: false,
              },
              {
                feature: "Writing, Q&A, drafting",
                am: true, claude: true, chatgpt: true, devin: false,
              },
              {
                feature: "Data not used for model training",
                am: true, claude: true, chatgpt: "partial", devin: "partial",
              },
              {
                feature: "No per-seat subscription cost",
                am: true, claude: false, chatgpt: false, devin: false,
              },
            ].map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-6 items-center py-4 px-6 text-sm"
                style={{
                  borderBottom: i < 8 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div className="col-span-2" style={{ color: "#aaa" }}>{row.feature}</div>
                <div className="text-center"><Cell value={row.am as CellValue} /></div>
                <div className="text-center"><Cell value={row.claude as CellValue} /></div>
                <div className="text-center"><Cell value={row.chatgpt as CellValue} /></div>
                <div className="text-center"><Cell value={row.devin as CellValue} /></div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "#444" }}>
            &ldquo;Partial&rdquo; = limited scope or enterprise-tier only. Claude Pro / Team does not use data for model training.
          </p>
        </div>
      </section>

      {/* ── Why AM is different ──────────────────────────────── */}
      <section
        id="why-am"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: AM }}
            >
              Different category
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Claude is a brilliant assistant.{" "}
              <span style={{ color: AM }}>AM is a digital worker.</span>
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
              Claude is genuinely excellent at what it does: reasoning, writing, coding conversations.
              But it&apos;s built to respond — not to act. AM is built on a different premise entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Claude Pro",
                icon: "💬",
                points: [
                  "You write a prompt. It responds. You act.",
                  "Forgets context when the session ends.",
                  "Stops working when you close the tab.",
                  "Can't send email — only draft it.",
                  "Can't commit code — only write it.",
                  "$20/user/month per seat.",
                ],
                dim: true,
              },
              {
                label: "AM",
                icon: "⚡",
                points: [
                  "You assign work. AM executes. You review.",
                  "Persistent memory across every task.",
                  "Runs 24/7 — works while you sleep.",
                  "Sends real emails via Gmail integration.",
                  "Commits real code with full PR workflow.",
                  "Worker pricing — not per-seat SaaS.",
                ],
                dim: false,
              },
            ].map((col) => (
              <div
                key={col.label}
                className="rounded-2xl p-8"
                style={{
                  background: col.dim ? "rgba(255,255,255,0.02)" : `${AM}08`,
                  border: col.dim ? "1px solid rgba(255,255,255,0.06)" : `1px solid ${AM}30`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{col.icon}</span>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      color: col.dim ? "#555" : "white",
                    }}
                  >
                    {col.label}
                  </h3>
                </div>
                <div className="space-y-3">
                  {col.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm">
                      <span style={{ color: col.dim ? "#333" : AM, marginTop: "1px" }}>
                        {col.dim ? "·" : "✓"}
                      </span>
                      <span style={{ color: col.dim ? "#444" : "#999" }}>{point}</span>
                    </div>
                  ))}
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
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: AM }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Claude — questions answered.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is AM different from Claude?",
                a: "Claude is a chat assistant — you ask, it answers, you act on the response. AM is an autonomous digital worker — you assign work, AM executes it end-to-end, you review the outcome. AM connects to your real tools (email, calendar, GitHub, Jira, Slack), runs a Kanban board, commits code, and manages projects independently. It's a fundamentally different category of product.",
              },
              {
                q: "Is AM a Claude wrapper?",
                a: "No. AM is not a Claude wrapper or API re-skin. AM is a complete autonomous agent system with its own persistent memory, task execution loop, tool integrations, and Kanban board. It uses frontier AI models under the hood, but the product is the autonomous execution layer — not the underlying model.",
              },
              {
                q: "Does AM have persistent memory unlike Claude?",
                a: "Yes. Claude Pro's memory is session-scoped — even with Projects, memory is shallow and manually curated. AM builds an indefinitely-growing memory of your codebase, team preferences, past decisions, and work context. Memory persists across every task, every session, without manual management.",
              },
              {
                q: "Can AM replace Claude for coding tasks?",
                a: "For interactive coding Q&A and pair-programming conversations, Claude remains excellent. For executing end-to-end coding tasks — reading the codebase, writing code, running tests, committing PRs, and closing tickets — AM does the full job without you staying in the loop. They serve genuinely different roles.",
              },
              {
                q: "How much does AM cost compared to Claude Pro?",
                a: "Claude Pro is $20/user/month — $240/year per person for a Q&A interface. AM is priced as a digital worker, not a chat subscription. The right comparison is AM vs a part-time contractor's hourly rate, not AM vs $20/month SaaS. AM handles tasks that would otherwise require human hours. Early access is free.",
              },
              {
                q: "Is my data private with AM compared to Claude?",
                a: "Both AM and Claude (paid tiers) do not use your data to train models. The key difference: AM can be deployed within your own infrastructure for teams with strict compliance requirements, giving you full data sovereignty. Claude routes everything through Anthropic's servers.",
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
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: AM }}
          >
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Ready for AI that executes,
            <br />
            <span style={{ color: AM }}>not just answers?</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Join the waitlist. We&apos;ll reach out when your spot is ready.
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
