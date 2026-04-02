import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "ChatGPT Alternative — AM, the AI Digital Worker | helloam.bot",
  description:
    "Looking for a ChatGPT alternative? AM doesn't just answer questions — it executes tasks end-to-end. Compare cloud AI, local LLMs, and AM. See real costs and what you actually get.",
  keywords: [
    "chatgpt alternative",
    "chatgpt alternative 2026",
    "best chatgpt alternative",
    "free chatgpt alternative",
    "ai assistant alternative to chatgpt",
    "local llm alternative",
    "cloud vs local ai",
    "ai digital worker",
    "autonomous ai agent",
    "replace chatgpt",
    "chatgpt vs claude",
    "ai cost comparison",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/chatgpt-alternative",
  },
  openGraph: {
    title: "ChatGPT Alternative — AM, the AI Digital Worker",
    description:
      "Chat assistants answer questions. AM executes tasks. Compare ChatGPT Plus, Claude Pro, local LLMs, and AM — with real pricing and honest trade-offs.",
    url: "https://helloam.bot/chatgpt-alternative",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Alternative — AM, the AI Digital Worker",
    description:
      "Stop paying $20/month/person for a chat assistant. AM autonomously executes tasks — email, calendar, code, projects — and runs 24/7 without prompting.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/chatgpt-alternative#product",
    name: "AM — AI Digital Worker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://helloam.bot/chatgpt-alternative",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is an autonomous AI digital worker — not a chat assistant. It executes tasks end-to-end: email, calendar, code, projects, and more. Compare it to ChatGPT Plus, Claude Pro, and local LLMs.",
    featureList: [
      "Autonomous task execution",
      "Email and calendar management",
      "Code generation and PR review",
      "Project and Kanban management",
      "Runs 24/7 without prompting",
      "Connects to your tools",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://helloam.bot/chatgpt-alternative#waitlist",
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
    "@id": "https://helloam.bot/chatgpt-alternative#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is AM different from ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT is a chat assistant — you ask, it answers. AM is an autonomous digital worker — it executes tasks end-to-end without you staying in the loop. AM connects to your tools (email, calendar, GitHub, Jira), runs a Kanban board, commits code, and manages projects independently. It's a different category entirely.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use cloud AI or run a local LLM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cloud AI (ChatGPT, Claude) is easy to start but costs $20+/user/month with privacy trade-offs on consumer tiers. Local LLMs (Ollama, LM Studio) are free software but require $1,500–$3,500 in hardware and ongoing electricity costs. AM is neither — it's a managed autonomous worker that does the work so you don't have to choose between cost and capability.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data private with AM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM does not use your data to train models. Unlike ChatGPT's consumer tier (where conversations may be used for training by default), AM treats your data as yours. For teams with strict data requirements, AM can be configured to run within your own infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AM cost compared to ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT Plus is $20/user/month — $240/year per person for a Q&A tool. AM is priced as a digital worker, not a chat subscription: the right comparison is to a part-time contractor, not a $20/month SaaS. AM handles tasks that would otherwise require human hours. Early access is free.",
        },
      },
    ],
  },
];

// Accent color for this page
const AM = "#10B981";

export default function ChatGPTAlternativePage() {
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
            ChatGPT Alternative · AI Digital Worker
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            <span className="text-white">Stop chatting with AI.</span>
            <br />
            <span style={{ color: AM }}>Let it do the work.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "#888888" }}
          >
            ChatGPT answers questions. AM executes tasks — email, calendar, code, projects — end-to-end,
            autonomously, without you staying in the loop.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: AM, color: "#ffffff" }}
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
              { stat: "$20/mo", label: "per user — what teams pay for a Q&A tool that can't execute" },
              { stat: "<45%", label: "ChatGPT market share — down from 60%+ in early 2025" },
              { stat: "0 hrs", label: "of work done by a chat assistant while you sleep" },
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

      {/* ── Cloud vs Local vs AM ─────────────────────────────── */}
      <section
        id="cloud-vs-local"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: AM }}
            >
              Three Options, Honestly Explained
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Cloud AI, local LLMs, or AM.{" "}
              <span style={{ color: AM }}>Here&apos;s the truth.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cloud chat tools */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: "#555" }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#888" }}
              >
                Cloud Chat Tools
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  ChatGPT · Claude · Gemini
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#777" }}>
                  Easy to start. Powerful for Q&A, drafting, and research. But they answer questions —
                  they don&apos;t execute tasks. You stay in the loop for every step.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#555" }}>→</span>
                    <span>$20–25/user/month (consumer to team tier)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#555" }}>→</span>
                    <span>Consumer tiers may use your data for training</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#555" }}>→</span>
                    <span>Can&apos;t run overnight — needs a human in the loop</span>
                  </div>
                </div>
              </div>
              <div
                className="mt-auto px-4 py-3 rounded-xl text-sm font-semibold text-center"
                style={{ background: "rgba(255,255,255,0.04)", color: "#555" }}
              >
                Best for: one-off questions and drafts
              </div>
            </div>

            {/* Local LLMs */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: "#8B5CF6" }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", color: "#8B5CF6" }}
              >
                Local LLMs
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Ollama · LM Studio · GPT4All
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#777" }}>
                  Free software, full privacy. Data never leaves your machine. But you need serious
                  hardware to run capable models — and you&apos;re still just chatting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#8B5CF6" }}>→</span>
                    <span>$0/month software — but $1,500–$3,500 in hardware upfront</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#8B5CF6" }}>→</span>
                    <span>$50–150/month electricity for continuous workloads</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#666" }}>
                    <span style={{ color: "#8B5CF6" }}>→</span>
                    <span>Still a chat interface — execution is still on you</span>
                  </div>
                </div>
              </div>
              <div
                className="mt-auto px-4 py-3 rounded-xl text-sm font-semibold text-center"
                style={{ background: "rgba(139,92,246,0.08)", color: "#8B5CF6" }}
              >
                Best for: privacy-first, technical users
              </div>
            </div>

            {/* AM */}
            <div
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: `${AM}08`,
                border: `1px solid ${AM}35`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: AM }}
              />
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold self-start"
                style={{ background: `${AM}18`, border: `1px solid ${AM}40`, color: AM }}
              >
                AM
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  Not a chat assistant. A digital worker.
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
                  AM connects to your tools, executes tasks end-to-end, and runs 24/7 without you
                  staying in the loop. You review outcomes — not conversations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                    <span style={{ color: AM }}>✓</span>
                    <span>No hardware cost. No per-message billing.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                    <span style={{ color: AM }}>✓</span>
                    <span>Your data is never used to train models</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                    <span style={{ color: AM }}>✓</span>
                    <span>Executes tasks — email, code, calendar, projects</span>
                  </div>
                </div>
              </div>
              <div
                className="mt-auto px-4 py-3 rounded-xl text-sm font-semibold text-center"
                style={{ background: `${AM}15`, color: AM }}
              >
                Best for: teams that want work done, not answers
              </div>
            </div>
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
              AM vs ChatGPT vs Claude vs Local LLMs
            </h2>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-5 text-xs font-bold uppercase tracking-widest py-4 px-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#555",
              }}
            >
              <div className="col-span-1">Feature</div>
              <div className="text-center" style={{ color: AM }}>AM</div>
              <div className="text-center">ChatGPT Plus</div>
              <div className="text-center">Claude Pro</div>
              <div className="text-center">Local LLMs</div>
            </div>

            {[
              {
                feature: "Executes tasks autonomously",
                am: true, chatgpt: false, claude: false, local: false,
              },
              {
                feature: "Runs without human in the loop",
                am: true, chatgpt: false, claude: false, local: false,
              },
              {
                feature: "Connects to your tools",
                am: true, chatgpt: "partial", claude: "partial", local: false,
              },
              {
                feature: "Data stays private (no training)",
                am: true, chatgpt: false, claude: "partial", local: true,
              },
              {
                feature: "No hardware cost",
                am: true, chatgpt: true, claude: true, local: false,
              },
              {
                feature: "Manages projects end-to-end",
                am: true, chatgpt: false, claude: false, local: false,
              },
              {
                feature: "Writing, Q&A, drafting",
                am: true, chatgpt: true, claude: true, local: true,
              },
              {
                feature: "Code generation",
                am: true, chatgpt: true, claude: true, local: true,
              },
            ].map((row, i) => {
              const renderCell = (val: boolean | string) => {
                if (val === true) return <span style={{ color: AM }}>✓</span>;
                if (val === false) return <span style={{ color: "#333" }}>—</span>;
                return <span style={{ color: "#666", fontSize: "0.7rem" }}>partial</span>;
              };
              return (
                <div
                  key={row.feature}
                  className="grid grid-cols-5 items-center py-4 px-6 text-sm"
                  style={{
                    borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}
                >
                  <div className="col-span-1" style={{ color: "#aaa" }}>{row.feature}</div>
                  <div className="text-center">{renderCell(row.am)}</div>
                  <div className="text-center">{renderCell(row.chatgpt)}</div>
                  <div className="text-center">{renderCell(row.claude)}</div>
                  <div className="text-center">{renderCell(row.local)}</div>
                </div>
              );
            })}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "#444" }}>
            "Partial" = available on enterprise/team tiers or with third-party plugins. Claude consumer tier does not use data for training.
          </p>
        </div>
      </section>

      {/* ── Cost breakdown ───────────────────────────────────── */}
      <section
        id="cost"
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
              Real Numbers
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              What you&apos;re actually paying for AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Cloud AI cost */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#555" }}>
                Cloud AI (per team)
              </p>
              <div
                className="text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "#888" }}
              >
                $20/mo
              </div>
              <p className="text-sm mb-1" style={{ color: "#555" }}>per user × every user</p>
              <p className="text-xs leading-relaxed mt-4" style={{ color: "#444" }}>
                10-person team = $200/month = $2,400/year. For a Q&A tool that still requires a human
                to read every response and take every action.
              </p>
              <div className="mt-4 space-y-1.5">
                {["ChatGPT Plus: $20/user", "ChatGPT Team: $25/user (annual)", "Claude Pro: $20/user", "Claude Team: $25/user (annual)"].map(item => (
                  <div key={item} className="text-xs" style={{ color: "#444" }}>· {item}</div>
                ))}
              </div>
            </div>

            {/* Local LLM cost */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#555" }}>
                Local LLMs
              </p>
              <div
                className="text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "#8B5CF6" }}
              >
                $0/mo*
              </div>
              <p className="text-sm mb-1" style={{ color: "#555" }}>*after hardware investment</p>
              <p className="text-xs leading-relaxed mt-4" style={{ color: "#444" }}>
                Software is free. But capable models need real GPU muscle — and you&apos;re still
                just chatting, not executing.
              </p>
              <div className="mt-4 space-y-1.5">
                {["RTX 4060 Ti build: ~$1,500–2,000", "RTX 4090 build: ~$2,500–3,500", "Electricity: $50–150/mo continuous", "Setup and maintenance: your time"].map(item => (
                  <div key={item} className="text-xs" style={{ color: "#444" }}>· {item}</div>
                ))}
              </div>
            </div>

            {/* AM */}
            <div
              className="rounded-2xl p-6"
              style={{ background: `${AM}08`, border: `1px solid ${AM}30` }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AM }}>
                AM
              </p>
              <div
                className="text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)", color: AM }}
              >
                Worker
              </div>
              <p className="text-sm mb-1" style={{ color: "#666" }}>not a chat subscription</p>
              <p className="text-xs leading-relaxed mt-4" style={{ color: "#666" }}>
                The right comparison isn&apos;t AM vs $20/month. It&apos;s AM vs a part-time contractor.
                AM handles tasks that would otherwise require human hours — and it runs 24/7.
              </p>
              <div className="mt-4 space-y-1.5">
                {["No hardware cost", "No per-message fees", "No maintenance overhead", "Early access: free"].map(item => (
                  <div key={item} className="text-xs" style={{ color: `${AM}99` }}>✓ {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why AM is different ──────────────────────────────── */}
      <section id="why-am" className="px-6 py-24">
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
              Chat assistants answer.{" "}
              <span style={{ color: AM }}>AM executes.</span>
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
              Every chat assistant — ChatGPT, Claude, Gemini — is fundamentally a question-answering
              machine. AM is built on a different premise: work happens without you in the loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Chat assistants",
                icon: "💬",
                points: [
                  "You ask. It answers. You act.",
                  "You write every prompt.",
                  "Stops when you close the tab.",
                  "Forgets context between sessions.",
                  "Can't take action in your tools.",
                ],
                dim: true,
              },
              {
                label: "AM",
                icon: "⚡",
                points: [
                  "You assign work. AM completes it.",
                  "AM drives the task — you review.",
                  "Runs 24/7 while you sleep.",
                  "Maintains full project context.",
                  "Connects to email, calendar, code, and more.",
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
          background: "rgba(255,255,255,0.012)",
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
              Questions people ask before switching.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is AM different from ChatGPT?",
                a: "ChatGPT is a chat assistant — you ask, it answers, you act. AM is an autonomous digital worker — you assign work, AM executes it, you review the outcome. AM connects to your tools (email, calendar, GitHub, Jira, Slack) and runs tasks end-to-end without staying in the loop. It's a fundamentally different category.",
              },
              {
                q: "Should I use cloud AI or run a local LLM?",
                a: "Cloud AI (ChatGPT, Claude, Gemini) is easy to start but costs $20+/user/month with privacy trade-offs on consumer tiers. Local LLMs (Ollama, LM Studio) are free software with full privacy, but require $1,500–$3,500 in GPU hardware plus electricity. Both options are still chat interfaces — execution remains your job. AM is a third path: a managed autonomous worker, no hardware required.",
              },
              {
                q: "Is my data private with AM?",
                a: "AM never uses your data to train models. Unlike ChatGPT's consumer tier — where conversations may be used for training by default — AM treats your data as yours. For teams with strict compliance requirements, AM can be configured for private deployment within your own infrastructure.",
              },
              {
                q: "How much does AM cost compared to ChatGPT?",
                a: "ChatGPT Plus is $20/user/month — $240/year per person for a tool that answers questions but can't execute tasks. AM is priced as a digital worker, not a chat subscription. The right comparison is AM vs a part-time contractor's hourly rate, not AM vs $20/month SaaS. Early access is free — join the list to see team pricing.",
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
            style={{ color: AM }}
          >
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Ready for AI that actually does the work?
            <br />
            <span style={{ color: AM }}>Get early access to AM.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Sign up for early access. We&apos;ll reach out when your spot is ready.
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
