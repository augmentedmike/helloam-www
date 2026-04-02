import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs GitHub Copilot — Autonomous Agent vs Autocomplete Assistant | helloam.bot",
  description:
    "Compare AM and GitHub Copilot. See how an autonomous digital worker that executes full tasks differs from an in-editor autocomplete assistant.",
  keywords: [
    "AM vs GitHub Copilot",
    "GitHub Copilot alternative",
    "Copilot vs AI agent",
    "autonomous AI vs Copilot",
    "AI coding assistant comparison",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-github-copilot",
  },
  openGraph: {
    title: "AM vs GitHub Copilot — Autonomous Agent vs Autocomplete Assistant",
    description:
      "Copilot completes your code. AM completes your tasks. See the full comparison of how an autonomous digital worker differs from an AI coding assistant.",
    url: "https://helloam.bot/compare/am-vs-github-copilot",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs GitHub Copilot — Autonomous Agent vs Autocomplete Assistant",
    description:
      "Copilot helps you write code. AM works independently — tickets, PRs, reviews, triage. See the full comparison.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://helloam.bot/compare/am-vs-github-copilot#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between AM and GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GitHub Copilot is an AI autocomplete tool that suggests code as you type inside your editor. AM is an autonomous digital worker that operates independently: it reads tickets, explores your codebase, writes the full implementation, opens a PR with tests, and reviews incoming pull requests — without you in the editor. Copilot accelerates what you do; AM does work without you.",
        },
      },
      {
        "@type": "Question",
        name: "Can AM replace GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For teams whose main use of Copilot is boosting developer velocity inside the editor, AM operates at a different layer — it handles whole tasks, not inline suggestions. Many teams use both: Copilot for fast editor autocomplete while writing, and AM for autonomous task execution when a ticket needs end-to-end handling.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM review pull requests like Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM reviews pull requests with the depth of a senior engineer — checking correctness, test coverage, edge cases, and adherence to your codebase patterns. It leaves specific, actionable inline comments. GitHub Copilot can generate review comments but lacks the autonomous PR review workflow AM provides.",
        },
      },
      {
        "@type": "Question",
        name: "Is AM more expensive than GitHub Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GitHub Copilot Individual is $10/month; Business is $19/seat/month. AM early access is free; team pricing starts at $149/seat/month. AM covers a fundamentally wider scope — autonomous task execution, support triage, on-call response — so the comparison is less about price and more about what work you need covered.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM work with GitHub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM integrates directly with GitHub and GitLab — it reads repositories, opens PRs, posts code review comments, and operates on your existing workflow. You do not need to change how your team uses GitHub to add AM.",
        },
      },
    ],
};

const tableRows = [
  { dimension: "Works inside editor (autocomplete)", am: "no", copilot: "yes" },
  { dimension: "Autonomous task execution", am: "yes", copilot: "no" },
  { dimension: "Ticket → Pull Request (end-to-end)", am: "yes", copilot: "no" },
  { dimension: "Full PR code review", am: "yes", copilot: "partial" },
  { dimension: "Test generation", am: "yes", copilot: "partial" },
  { dimension: "Customer support triage", am: "yes", copilot: "no" },
  { dimension: "On-call incident response", am: "yes", copilot: "no" },
  { dimension: "Works without developer in the loop", am: "yes", copilot: "no" },
];

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="text-[#00E5FF] font-semibold">✓ Yes</span>;
  if (value === "partial") return <span className="text-yellow-400 font-semibold">~ Partial</span>;
  return <span className="text-gray-500">✗ No</span>;
}

export default function AmVsCopilotPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#00E5FF] mb-4">
          Comparison
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          AM vs GitHub Copilot
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          GitHub Copilot makes you faster in the editor. AM works independently — tickets, pull
          requests, code review, and triage — without you needing to be there. Different tools for
          different problems.
        </p>
      </section>

      {/* Verdict cards */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid gap-4 md:grid-cols-3">
        {[
          { label: "AM wins on", point: "Autonomous execution — AM completes tasks, not just code lines" },
          { label: "AM wins on", point: "Works outside the editor — no developer in the loop required" },
          { label: "AM wins on", point: "Full-stack coverage — dev, support, and ops in one worker" },
        ].map(({ label, point }, i) => (
          <div key={i} className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00E5FF] mb-2">{label}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Feature comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 font-semibold text-gray-400">Capability</th>
                <th className="px-6 py-4 font-bold text-[#00E5FF] border-l-2 border-[#00E5FF]/40 bg-[#00E5FF]/5">
                  AM
                </th>
                <th className="px-6 py-4 font-semibold text-gray-400">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ dimension, am, copilot }, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-gray-300">{dimension}</td>
                  <td className="px-6 py-4 text-center border-l-2 border-[#00E5FF]/20 bg-[#00E5FF]/3">
                    <Cell value={am} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Cell value={copilot} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500 text-center">
          Based on publicly available information. Last reviewed April 2026.
        </p>
      </section>

      {/* Who is each for */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is GitHub Copilot for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Copilot is for individual developers and teams that want to write code faster. It
              completes lines, generates functions, and suggests implementations while you type. If
              you spend most of your day in a code editor and want an accelerant, Copilot is
              purpose-built for that experience.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is AM for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              AM is for teams that want work done, not just code suggested. AM picks up tickets,
              writes the implementation, opens the PR, handles code review, and covers support and
              triage — without requiring a developer to be in the loop for every step. You focus on
              what needs human judgment; AM handles the rest.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Common questions</h2>
        <div className="space-y-6">
          {jsonLd.mainEntity.map((qa, i) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <h3 className="font-semibold text-white mb-2">{qa.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{qa.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Try AM free</h2>
        <p className="text-gray-400 mb-8">
          Get early access — no credit card required.
        </p>
        <WaitlistForm />
      </section>
    </main>
  );
}
