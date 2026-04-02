import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Devin 2026 — Your Personal AI Worker vs a Cloud Coding Agent",
  description:
    "Comparing AM vs Devin: AM is a personal AI digital worker that runs on hardware you own, with persistent memory and no subscription. Devin is a cloud coding agent that costs $20–$500/month, sends your code to a third-party server, and has no memory of you.",
  keywords: [
    "AM vs Devin",
    "Devin alternative",
    "Devin AI alternative",
    "vs Devin",
    "Devin AI review",
    "Devin AI pricing",
    "AI software engineer alternative",
    "local AI worker",
    "AI worker runs locally",
    "personal AI assistant developer",
    "Devin AI limitations",
    "AI coding agent privacy",
    "AM digital worker",
  ],
  alternates: {
    canonical: "https://helloam.bot/vs-devin",
  },
  openGraph: {
    title: "AM vs Devin — Personal AI Worker vs Cloud Coding Agent",
    description:
      "Devin is a cloud coding agent: $20–$500/month, session-scoped memory, your code on their servers. AM runs on hardware you own, knows you deeply, and works across every domain — not just code.",
    url: "https://helloam.bot/vs-devin",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Devin — Personal AI Worker vs Cloud Coding Agent",
    description:
      "Devin costs $20–$500+/month, sends your code to a third-party server, and forgets you after every session. AM lives on your hardware and knows you.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://helloam.bot/vs-devin",
    name: "AM vs Devin — Personal AI Worker vs Cloud Coding Agent",
    url: "https://helloam.bot/vs-devin",
    description:
      "A direct comparison of AM and Devin AI. AM is a personal digital worker running on your local hardware with persistent memory. Devin is a cloud coding agent with per-compute billing and no persistent context.",
    isPartOf: {
      "@id": "https://helloam.bot/#website",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Devin AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Devin is a cloud-based autonomous AI software engineer by Cognition Labs. It runs in a sandboxed cloud environment and can write code, run terminal commands, and browse documentation. It was launched in March 2024 and marketed as the world's first AI software engineer.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Devin cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Devin costs $20/month for the Core plan, $500/month for the Team plan, and custom pricing for Enterprise. All plans use an Agent Compute Unit (ACU) model — complex or failed tasks still consume your budget. The Team plan includes 250 ACUs; additional ACUs cost $2 each.",
        },
      },
      {
        "@type": "Question",
        name: "Is Devin actually good at coding tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In independent testing, Devin completes roughly 15% of complex real-world tasks. A 20-task study by Answer.AI (January 2025) found 3 successes, 14 failures, and 3 inconclusive results. Devin performs well on bounded, isolated tasks — but fails unpredictably on anything requiring deep context or architectural judgment.",
        },
      },
      {
        "@type": "Question",
        name: "Does Devin keep my code private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On the Core and Team plans, your code is transmitted to and processed on Cognition's cloud servers. Zero data retention and VPC deployment are only available on the Enterprise tier. If code privacy matters, the entry-level plans offer no protection.",
        },
      },
      {
        "@type": "Question",
        name: "How is AM different from Devin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM runs on your own machine — your code, files, and conversations never leave your hardware. AM builds persistent long-term memory of your work, preferences, and context across every session. Unlike Devin, AM is not limited to coding: it handles research, writing, scheduling, and personal projects. There is no subscription — you own the device outright.",
        },
      },
      {
        "@type": "Question",
        name: "What does AM cost compared to Devin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM is free and open source. The only cost is your Anthropic API usage, paid directly to Anthropic. Devin costs $20–$500+/month on top of per-ACU compute fees that can compound when tasks fail.",
        },
      },
    ],
  },
];

type CellValue = "yes" | "partial" | "no";

function Cell({ value, isAm }: { value: CellValue; isAm?: boolean }) {
  if (value === "yes") {
    return (
      <span
        aria-label="Yes"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
        style={{
          background: isAm ? "rgba(0,229,255,0.15)" : "rgba(52,199,89,0.12)",
          color: isAm ? "#00E5FF" : "#34C759",
        }}
      >
        ✓
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        aria-label="Partial"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
        style={{ background: "rgba(255,159,10,0.10)", color: "#FF9F0A" }}
      >
        ~
      </span>
    );
  }
  return (
    <span
      aria-label="No"
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
      style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}
    >
      ✗
    </span>
  );
}

const competitors = [
  { name: "AM", isAm: true },
  { name: "Devin" },
];

const features: { label: string; values: CellValue[] }[] = [
  {
    label: "Runs on hardware you own (no cloud)",
    values: ["yes", "no"],
  },
  {
    label: "Persistent memory across all sessions",
    values: ["yes", "no"],
  },
  {
    label: "Your data stays on your device",
    values: ["yes", "no"],
  },
  {
    label: "No ongoing subscription required",
    values: ["yes", "no"],
  },
  {
    label: "Works beyond code (research, writing, scheduling)",
    values: ["yes", "no"],
  },
  {
    label: "Knows your preferences, history, routines",
    values: ["yes", "no"],
  },
  {
    label: "Cannot be altered by a vendor policy change",
    values: ["yes", "no"],
  },
  {
    label: "Handles bounded coding tasks",
    values: ["yes", "yes"],
  },
  {
    label: "Integrates with GitHub / CI pipelines",
    values: ["partial", "yes"],
  },
];

const painPoints = [
  {
    number: "01",
    title: "Your code is on their servers — by default.",
    body: "On Devin's Core and Team plans, every file you share, every codebase you connect, every command you run goes through Cognition's cloud infrastructure. Zero data retention and private VPC deployment are locked behind an Enterprise contract. If you are an individual developer or small team, you get none of those protections — the entry plans don't offer them. AM runs entirely on your own machine. Nothing leaves your hardware. Not your code, not your conversation, not your memory.",
    label: "Cloud privacy risk",
  },
  {
    number: "02",
    title: "Devin forgets you after every session.",
    body: "Devin has no persistent memory of who you are. Each new task starts from zero — no preferences, no project history, no understanding of how you think or what you have already tried. You re-explain context every time. AM builds a deepening model of your work over weeks and months. It remembers your projects, your decisions, your constraints, and your preferences. The longer you work with AM, the more useful it becomes — because it actually knows you.",
    label: "Session-scoped memory",
  },
  {
    number: "03",
    title: "You pay whether it works or not.",
    body: "Devin's Agent Compute Unit (ACU) model means every minute of agent runtime consumes budget — including the time Devin spends going down dead ends, misunderstanding requirements, or failing tasks. Independent testing found roughly a 15% success rate on complex tasks. The answer.AI review (January 2025) found 14 failures in 20 tasks. The Team plan starts at $500/month before ACU add-ons. AM is free and open source — you only pay Anthropic for API usage on tasks that actually run.",
    label: "ACU cost model / failure rate",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Is AM a good Devin alternative?",
    a: "AM is built for people who want a personal AI worker — not a cloud coding agent. AM runs locally, builds persistent memory of your work and life, and is not limited to code. It handles research, writing, scheduling, and complex personal projects. If Devin's cloud-only model, session-scoped memory, or monthly subscription is a problem for you, AM was built to solve those problems.",
  },
  {
    q: "Can AM write and run code like Devin?",
    a: "Yes. AM can write, review, and iterate on code. Unlike Devin, it does so with full context of your project history, your preferences, and your architecture decisions — accumulated over time. AM is also not limited to code: it works across every domain you bring to it.",
  },
  {
    q: "What are the biggest criticisms of Devin?",
    a: "Independent reviews consistently found that Devin fails on anything beyond bounded, well-defined tasks. Answer.AI's month-long test (January 2025) found 3 successes and 14 failures across 20 tasks. The Register called it 'bad at its job.' The original Upwork demo was publicly debunked as a cherry-picked example that a human completed in 30 minutes. The SWE-Bench benchmark score of 13.86% was compared to zero-shot LLMs rather than other agents.",
  },
  {
    q: "How does AM handle developer tasks specifically?",
    a: "AM operates with full knowledge of your local environment — your repos, your tools, your terminal, your files. It can execute commands, read and write code, search documentation, and run tests. Because it knows your history, it doesn't start from zero every time. It knows which solutions you've already tried and which constraints you're working inside.",
  },
  {
    q: "How much does AM cost?",
    a: "AM is free and open source (MIT license). Install it on Mac, Windows, or Linux in one command. The only cost is your Anthropic API usage, paid directly to Anthropic. No AM subscription, ever.",
  },
];

export default function VsDevinPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ededed", minHeight: "100vh" }}>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Nav */}
      <div className="px-6 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "#888888" }}
        >
          <span aria-hidden="true">←</span>
          <span>helloam.bot</span>
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#00E5FF" }}
        >
          AM vs Devin
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Devin is a cloud coding agent.
          <br />
          <span style={{ color: "#00E5FF" }}>AM lives on hardware you own.</span>
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "#888888" }}>
          Devin costs $20–$500/month, sends your code to a third-party server, and
          forgets everything after each session. AM runs on your own machine,
          builds persistent memory of your work, and handles every domain — not just code.
        </p>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "#00E5FF", color: "#0a0a0a" }}
        >
          Get early access
        </Link>
      </div>

      {/* Pain points */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Three problems Devin cannot solve
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-14"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Why the cloud coding agent model has real limits.
          </h2>

          <div className="space-y-14">
            {painPoints.map((point) => (
              <div
                key={point.number}
                className="pb-14"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {point.number} — {point.label}
                </p>
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {point.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#aaaaaa" }}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#00E5FF" }}
            >
              Feature comparison
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Devin
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              The things that actually matter in a long-term AI worker.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-4 text-sm font-medium"
                    style={{ color: "#666", width: "70%" }}
                  >
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className="py-3 px-2 text-center text-sm font-semibold"
                      style={{
                        color: c.isAm ? "#00E5FF" : "#888888",
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                      }}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td
                      className="py-3 px-4 text-sm leading-snug"
                      style={{ color: "#aaaaaa" }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, ci) => (
                      <td key={ci} className="py-3 px-2 text-center">
                        <Cell value={val} isAm={competitors[ci].isAm} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Common questions
          </p>
          <h2
            className="text-3xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            AM vs Devin — FAQ
          </h2>

          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="pb-8"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.q}
                </h3>
                <p className="leading-relaxed" style={{ color: "#aaaaaa" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA / Waitlist */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 text-center">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Get started
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            The AI worker who knows you.
          </h2>
          <p className="text-base mb-10" style={{ color: "#888888" }}>
            Free and open source. Runs on Mac, Windows, and Linux.
          </p>
          <div id="waitlist" className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  );
}
