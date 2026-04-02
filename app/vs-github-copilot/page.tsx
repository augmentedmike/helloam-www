import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs GitHub Copilot 2026 — Digital Worker vs Autocomplete",
  description:
    "GitHub Copilot makes you faster. AM removes you from the loop entirely. Compare AM vs GitHub Copilot on autonomy, context depth, multi-repo support, and workflow fit.",
  keywords: [
    "AM vs GitHub Copilot",
    "GitHub Copilot alternative 2026",
    "AI coding agent vs autocomplete",
    "autonomous AI developer",
    "GitHub Copilot vs AI agent",
    "replace GitHub Copilot",
    "AI digital worker",
    "GitHub Copilot limitations",
    "autonomous code generation",
    "AI developer tool comparison",
  ],
  alternates: {
    canonical: "https://helloam.bot/vs-github-copilot",
  },
  openGraph: {
    title: "AM vs GitHub Copilot 2026",
    description:
      "GitHub Copilot makes developers faster. AM works without a developer present. See how they compare on autonomy, context, multi-repo support, and lock-in.",
    url: "https://helloam.bot/vs-github-copilot",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs GitHub Copilot 2026",
    description:
      "Copilot is a developer tool. AM is a digital worker. Here's the difference.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://helloam.bot/vs-github-copilot",
    name: "AM vs GitHub Copilot 2026 — Digital Worker vs Autocomplete",
    url: "https://helloam.bot/vs-github-copilot",
    description:
      "Compare AM vs GitHub Copilot on autonomy, context depth, multi-repo support, and workflow fit. AM is a digital worker; Copilot is a developer tool.",
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
        name: "Does AM replace GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They serve different purposes. GitHub Copilot makes a developer faster — better autocomplete, inline suggestions, agent-assisted edits. AM removes the developer from the execution loop: you assign a task and AM ships the result. If you still want to write code yourself, keep Copilot. If you want code written for you, AM is the right tool.",
        },
      },
      {
        "@type": "Question",
        name: "What are the biggest limitations of GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GitHub Copilot's cloud agent is limited to one repository and one branch at a time, requires GitHub Actions as its execution environment, and can take 90+ seconds to cold-start. Its inline autocomplete processes only a fraction of your codebase, leading to suggestions that hallucinate API signatures. It also has no offline mode and is entirely cloud-dependent.",
        },
      },
      {
        "@type": "Question",
        name: "How does AM handle multi-repo tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM works across multiple repositories in a single task. It can read from a shared library repo, update a dependent service repo, and open coordinated PRs — without any manual context-switching. GitHub Copilot's cloud agent is hard-limited to a single repository per task.",
        },
      },
      {
        "@type": "Question",
        name: "What does AM cost compared to GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GitHub Copilot Pro is $10/month per seat; Business is $19/user/month; Enterprise is $39/user/month. AM is priced per team: Starter at $149/seat/month, Growth at $499/month (covers a full PM + developer + support workflow), and Enterprise at custom pricing. AM replaces execution labor, not just typing speed.",
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
  { name: "GitHub Copilot" },
];

const features: { label: string; values: CellValue[] }[] = [
  {
    label: "Autonomous task completion (no supervision)",
    values: ["yes", "no"],
  },
  {
    label: "Works across multiple repos in one task",
    values: ["yes", "no"],
  },
  {
    label: "Persistent task context between sessions",
    values: ["yes", "no"],
  },
  {
    label: "Not locked to GitHub Actions / GitHub infra",
    values: ["yes", "no"],
  },
  {
    label: "Full ticket → PR → tests → iteration loop",
    values: ["yes", "partial"],
  },
  {
    label: "Works without a developer present",
    values: ["yes", "no"],
  },
  {
    label: "On-device / self-hosted option",
    values: ["yes", "no"],
  },
  {
    label: "IDE inline autocomplete",
    values: ["no", "yes"],
  },
  {
    label: "Free tier available",
    values: ["no", "yes"],
  },
  {
    label: "Deep GitHub.com UI integration",
    values: ["partial", "yes"],
  },
];

const painPoints = [
  {
    number: "01",
    title: "Copilot's agent is locked to GitHub's infrastructure.",
    body: "GitHub Copilot's autonomous agent runs inside GitHub Actions. That means it only works if your project lives on GitHub, you pay for Actions minutes, and you accept GitHub as the execution environment for every autonomous task. If you use GitLab, Bitbucket, or a self-hosted git server — the agent does not apply. AM is infrastructure-agnostic: it runs tasks wherever your code lives, using whatever CI/CD pipeline you have. No vendor lock-in at the execution layer.",
    label: "Infrastructure lock-in",
  },
  {
    number: "02",
    title: "Copilot reads a slice of your codebase. AM reads the whole thing.",
    body: "GitHub Copilot processes a context window — a fraction of your repository. For large codebases, it routinely hallucinates: it invents API signatures, references functions that don't exist, and suggests imports from packages not in your dependency tree. Users have documented consistent hallucination on anything beyond a small, self-contained module. AM builds deep context over time: it indexes your entire codebase, tracks inter-repo dependencies, and accumulates task history so each new task starts with genuine understanding — not a sliding window of recent lines.",
    label: "Shallow context / hallucination",
  },
  {
    number: "03",
    title: "One repo. One branch. One task at a time.",
    body: "GitHub Copilot's cloud agent cannot cross repository boundaries. If your task touches a shared library, a downstream service, and a documentation repo — you need to run three separate agent sessions, manually coordinate the outputs, and handle merge order yourself. AM treats multi-repo work as a first-class operation: a single task can span repositories, open coordinated PRs, and handle dependency ordering automatically. It works the way your system is actually architected — not the way a single-repo tool wishes it were.",
    label: "Single-repo constraint",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Does AM replace GitHub Copilot?",
    a: "They serve different purposes. GitHub Copilot makes a developer faster — better autocomplete, inline suggestions, agent-assisted edits. AM removes the developer from the execution loop: you assign a task and AM ships the result. If you still want to write code yourself, keep Copilot. If you want code written for you, AM is the right tool.",
  },
  {
    q: "What are the biggest limitations of GitHub Copilot?",
    a: "GitHub Copilot's cloud agent is limited to one repository and one branch at a time, requires GitHub Actions as its execution environment, and can take 90+ seconds to cold-start. Its inline autocomplete processes only a fraction of your codebase, leading to hallucinated API signatures. It also has no offline mode and is entirely cloud-dependent.",
  },
  {
    q: "How does AM handle multi-repo tasks?",
    a: "AM works across multiple repositories in a single task. It can read from a shared library repo, update a dependent service repo, and open coordinated PRs — without any manual context-switching. GitHub Copilot's cloud agent is hard-limited to a single repository per task.",
  },
  {
    q: "What does AM cost compared to GitHub Copilot?",
    a: "GitHub Copilot Pro is $10/month per seat; Business is $19/user/month; Enterprise is $39/user/month. AM is priced per team: Starter at $149/seat/month, Growth at $499/month (covers a full PM + developer + support workflow), and Enterprise at custom pricing. AM replaces execution labor, not just typing speed.",
  },
  {
    q: "Does AM work if I already use GitHub Copilot?",
    a: "Yes. Many teams run both. Copilot stays in the IDE for developers who want autocomplete assistance while writing code. AM handles the autonomous task queue: feature tickets, bug fixes, dependency updates, and test runs that don't require a developer in the loop at all. They operate at different layers of the workflow.",
  },
];

export default function VsGithubCopilotPage() {
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
          AM vs GitHub Copilot
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          GitHub Copilot makes you faster.
          <br />
          <span style={{ color: "#00E5FF" }}>AM works without you.</span>
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "#888888" }}>
          Copilot is an autocomplete tool. It improves your throughput as a developer.
          AM is a digital worker. It takes a ticket and ships the result — no developer
          in the loop, no supervision required.
        </p>
        <Link
          href="/waitlist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "#00E5FF", color: "#0a0a0a" }}
        >
          Join the waitlist
        </Link>
      </div>

      {/* Pain points */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Where Copilot hits its ceiling
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-14"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Three limits Copilot cannot architect around.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
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
              AM vs GitHub Copilot
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              The capabilities that matter when work needs to ship without a developer in the loop.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-4 text-sm font-medium"
                    style={{ color: "#666", width: "60%" }}
                  >
                    Capability
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
            AM vs GitHub Copilot — FAQ
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
            Ready to remove yourself from the loop?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Let AM handle the execution.
          </h2>
          <p className="text-base mb-10" style={{ color: "#888888" }}>
            Assign a ticket. AM ships the PR.
            <br />
            No supervision. No context switching. No waiting.
          </p>
          <div id="waitlist" className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  );
}
