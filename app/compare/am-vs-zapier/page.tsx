import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Zapier — Autonomous Digital Worker vs Workflow Automation | helloam.bot",
  description:
    "Compare AM and Zapier side by side. See how a goal-directed autonomous digital worker differs from an if-this-then-that workflow automation platform.",
  keywords: [
    "AM vs Zapier",
    "Zapier alternative",
    "Zapier AI comparison",
    "AI automation vs Zapier",
    "autonomous AI agent vs Zapier",
    "Zapier replacement",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-zapier",
  },
  openGraph: {
    title: "AM vs Zapier — Autonomous Digital Worker vs Workflow Automation",
    description:
      "Zapier automates tasks. AM gets work done. Compare capabilities, pricing, and fit for teams that need more than rule-based triggers.",
    url: "https://helloam.bot/compare/am-vs-zapier",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Zapier — Autonomous Digital Worker vs Workflow Automation",
    description:
      "Zapier chains rules. AM reasons toward outcomes. Here's what separates them — and which one fits your team.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://helloam.bot/compare/am-vs-zapier#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between AM and Zapier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier is a rule-based automation platform: you define 'if X happens, do Y.' AM is a goal-directed autonomous digital worker: you describe the outcome you want and AM determines the steps, adapts when conditions change, and handles exceptions without you rewriting rules. Zapier is great for predictable, structured data flows. AM handles ambiguous, multi-step work that breaks every Zap.",
      },
    },
    {
      "@type": "Question",
      name: "Is AM a Zapier alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AM is an alternative to Zapier for teams whose workflows involve judgment, unstructured data, or frequent exceptions. If your automation is a simple, stable trigger-action chain on structured data, Zapier works well. If you need to process emails, PDFs, or handle novel situations without programming every edge case, AM is the better fit.",
      },
    },
    {
      "@type": "Question",
      name: "How does AM pricing compare to Zapier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier charges per task — each action in a Zap consumes one task from your monthly allotment. A 15-step workflow running 100 times a day consumes 45,000 tasks per month, quickly exceeding the Professional plan (750 tasks/month at $19.99). AM uses flat-rate seat pricing with free early access available now. For complex, high-volume workflows, AM becomes dramatically cheaper.",
      },
    },
    {
      "@type": "Question",
      name: "Can AM replace all of my Zapier workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AM covers the high-value, high-complexity workflows where Zapier struggles: multi-step reasoning, unstructured inputs, dynamic decision-making, and exception handling. Simple trigger-action pipelines on structured data (e.g. 'when a form is submitted, add a row to Google Sheets') can stay in Zapier. Most teams use AM for the work that matters and simplify or eliminate Zaps that were patching judgment gaps.",
      },
    },
    {
      "@type": "Question",
      name: "Does AM have app connectors like Zapier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier has 7,000+ pre-built connectors. AM connects to the tools your team actually uses — Slack, email, GitHub, Jira, Linear, Intercom, and more — and uses natural language to interact with them rather than requiring you to configure a connector for every field. New integrations are added continuously based on pilot team needs.",
      },
    },
  ],
};

const tableRows = [
  { dimension: "Natural language task setup", am: "yes", zapier: "no" },
  { dimension: "Multi-step autonomous reasoning", am: "yes", zapier: "no" },
  { dimension: "Handles unstructured data (emails, PDFs)", am: "yes", zapier: "partial" },
  { dimension: "Adapts to workflow changes automatically", am: "yes", zapier: "no" },
  { dimension: "Flat-rate pricing (no task meter)", am: "yes", zapier: "no" },
  { dimension: "Pre-built app connectors (breadth)", am: "partial", zapier: "yes" },
  { dimension: "Exception handling without manual rules", am: "yes", zapier: "no" },
  { dimension: "Free early access", am: "yes", zapier: "no" },
];

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="text-[#00E5FF] font-semibold">✓ Yes</span>;
  if (value === "partial") return <span className="text-yellow-400 font-semibold">~ Partial</span>;
  return <span className="text-gray-500">✗ No</span>;
}

export default function AmVsZapierPage() {
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
          AM vs Zapier
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Zapier automates tasks. AM gets work done. Zapier chains rules you define — AM reasons
          toward outcomes you describe, adapts when things change, and handles the exceptions your
          Zaps can&apos;t.
        </p>
      </section>

      {/* Verdict cards */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid gap-4 md:grid-cols-3">
        {[
          { label: "AM wins on", point: "Goal-directed reasoning — describe the outcome, AM figures out the steps" },
          { label: "AM wins on", point: "Unstructured input — reads emails, PDFs, and varied formats natively" },
          { label: "AM wins on", point: "Pricing at scale — flat rate vs. a task meter that multiplies with workflow complexity" },
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
                <th className="px-6 py-4 font-semibold text-gray-400">Zapier</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ dimension, am, zapier }, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-gray-300">{dimension}</td>
                  <td className="px-6 py-4 text-center border-l-2 border-[#00E5FF]/20 bg-[#00E5FF]/3">
                    <Cell value={am} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Cell value={zapier} />
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

      {/* Who is Zapier for / Who is AM for */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is Zapier for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Zapier is purpose-built for teams that need to connect apps with predictable,
              structured data flows. It excels at trigger-action automation — form submissions,
              CRM updates, notification routing — where the inputs are clean and the rules are
              stable. If your workflows fit that pattern and your task volume stays inside your
              plan, Zapier does the job efficiently.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is AM for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              AM is for teams whose work involves judgment, ambiguity, or constant exceptions —
              the work that breaks every Zap. AM reads an email, understands the ask, takes
              action across tools, and handles the edge cases without you writing a rule for
              every scenario. One digital worker that reasons, adapts, and gets work done.
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
