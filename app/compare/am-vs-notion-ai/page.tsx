import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Notion AI — Autonomous Digital Worker vs Workspace AI | helloam.bot",
  description:
    "Compare AM and Notion AI. See how an autonomous digital worker that executes tasks across dev, support, and ops differs from an AI assistant built into a docs workspace.",
  keywords: [
    "AM vs Notion AI",
    "Notion AI alternative",
    "Notion AI comparison",
    "AI digital worker vs Notion AI",
    "autonomous AI agent vs Notion",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-notion-ai",
  },
  openGraph: {
    title: "AM vs Notion AI — Autonomous Digital Worker vs Workspace AI",
    description:
      "Notion AI answers questions inside your docs. AM closes tickets, ships code, and triages incidents — without you in the loop. See the full comparison.",
    url: "https://helloam.bot/compare/am-vs-notion-ai",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Notion AI — Autonomous Digital Worker vs Workspace AI",
    description:
      "Notion AI is a docs assistant. AM is a digital worker. Here's what separates them — and which one your team actually needs.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://helloam.bot/compare/am-vs-notion-ai#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between AM and Notion AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notion AI is an AI assistant embedded in the Notion workspace — it writes, summarizes, answers questions about your docs, and runs lightweight agents inside Notion. AM is a cross-functional digital worker that operates outside any single workspace: it picks up tickets from Jira or Linear, writes and ships code, triages customer support queues, and handles on-call incidents — all autonomously, across your entire stack.",
      },
    },
    {
      "@type": "Question",
      name: "Can Notion AI execute tasks like AM does?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notion AI's Custom Agents (launched February 2026) can run multi-step workflows inside the Notion workspace — useful for doc generation, database updates, and workspace-scoped automation. AM executes work across your whole team's toolchain: it opens PRs on GitHub, responds to customer tickets in Intercom, triggers runbooks in PagerDuty, and coordinates across Slack — beyond the boundaries of a single workspace.",
      },
    },
    {
      "@type": "Question",
      name: "Is AM a Notion AI alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AM and Notion AI serve different needs. If your team's bottleneck is getting smarter answers from your Notion docs or automating tasks inside Notion, Notion AI is purpose-built for that. If you need a worker that autonomously handles software tickets, customer support triage, and incident response — without any of it being tied to a single workspace tool — AM fills that role.",
      },
    },
    {
      "@type": "Question",
      name: "How does AM pricing compare to Notion AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full Notion AI access requires Notion's Business plan at $20/user/month; additional usage is metered via Notion Credits. AM early access is free, with team pricing starting at $149/seat/month. AM covers a fundamentally wider scope — dev, support, and ops — so it replaces a stack of single-purpose tools rather than augmenting one workspace.",
      },
    },
    {
      "@type": "Question",
      name: "Does AM integrate with Notion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AM can read and write Notion pages as part of a larger workflow — for example, pulling a spec from a Notion doc, implementing it in code, and logging the result back. AM treats Notion as one integration in its toolchain, not the boundary of its operation.",
      },
    },
  ],
};

const tableRows = [
  { dimension: "Works inside Notion workspace", am: "partial", notion: "yes" },
  { dimension: "Autonomous task execution (cross-tool)", am: "yes", notion: "no" },
  { dimension: "Ticket → Pull Request (end-to-end)", am: "yes", notion: "no" },
  { dimension: "Code review", am: "yes", notion: "no" },
  { dimension: "Customer support triage", am: "yes", notion: "no" },
  { dimension: "On-call incident response", am: "yes", notion: "no" },
  { dimension: "AI writing & summarization", am: "partial", notion: "yes" },
  { dimension: "Works without a human in the loop", am: "yes", notion: "partial" },
  { dimension: "Free early access", am: "yes", notion: "no" },
];

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="text-[#00E5FF] font-semibold">✓ Yes</span>;
  if (value === "partial") return <span className="text-yellow-400 font-semibold">~ Partial</span>;
  return <span className="text-gray-500">✗ No</span>;
}

export default function AmVsNotionAiPage() {
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
          AM vs Notion AI
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Notion AI makes your docs smarter. AM makes your team faster — closing tickets, shipping
          code, and handling triage without anyone needing to be in the loop. Two different tools
          solving two different problems.
        </p>
      </section>

      {/* Verdict cards */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid gap-4 md:grid-cols-3">
        {[
          "Cross-tool execution — AM works across your entire stack, not just one workspace",
          "Dev, support, and ops coverage in a single autonomous worker",
          "No human in the loop required — AM ships results, not drafts",
        ].map((point, i) => (
          <div key={i} className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00E5FF] mb-2">AM wins on</p>
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
                <th className="px-6 py-4 font-semibold text-gray-400">Notion AI</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ dimension, am, notion }, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-gray-300">{dimension}</td>
                  <td className="px-6 py-4 text-center border-l-2 border-[#00E5FF]/20 bg-[#00E5FF]/3">
                    <Cell value={am} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Cell value={notion} />
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
            <h2 className="text-xl font-bold mb-3">Who is Notion AI for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Notion AI is for teams that live in Notion and want AI to make their docs, wikis, and
              databases smarter. It answers questions about your workspace, drafts and summarizes
              content, generates meeting notes, and runs lightweight agents inside Notion. If your
              primary need is AI-powered knowledge management, Notion AI is a natural fit.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is AM for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              AM is for teams that need work executed, not just content organized. AM picks up
              tickets, writes the code, opens the PR, handles customer support triage, and responds
              to on-call alerts — all without a human in the loop. It operates across your entire
              stack: GitHub, Linear, Intercom, PagerDuty, Slack. One digital worker, every
              function.
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
          Join the waitlist and get early pilot access — no credit card required.
        </p>
        <WaitlistForm />
      </section>
    </main>
  );
}
