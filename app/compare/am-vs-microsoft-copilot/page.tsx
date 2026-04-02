import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs Microsoft Copilot — Autonomous Agent vs M365 AI Assistant | helloam.bot",
  description:
    "Compare AM and Microsoft Copilot. See how an autonomous digital worker that executes full tasks differs from an AI assistant embedded in Microsoft 365 apps.",
  keywords: [
    "AM vs Microsoft Copilot",
    "Microsoft Copilot alternative",
    "Microsoft 365 Copilot comparison",
    "autonomous AI vs Microsoft Copilot",
    "M365 Copilot vs AI agent",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare/am-vs-microsoft-copilot",
  },
  openGraph: {
    title: "AM vs Microsoft Copilot — Autonomous Agent vs M365 AI Assistant",
    description:
      "Microsoft Copilot assists you inside Word, Excel, and Teams. AM works independently — tickets, PRs, support triage, and ops — without requiring you in the loop.",
    url: "https://helloam.bot/compare/am-vs-microsoft-copilot",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs Microsoft Copilot — Autonomous Agent vs M365 AI Assistant",
    description:
      "Copilot helps inside M365 apps. AM works independently — tickets, PRs, reviews, triage. See the full comparison.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://helloam.bot/compare/am-vs-microsoft-copilot#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between AM and Microsoft Copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot is an AI assistant embedded in Microsoft 365 apps — it drafts emails in Outlook, summarizes meetings in Teams, and generates content in Word and PowerPoint. AM is an autonomous digital worker that operates independently outside any single app ecosystem: it reads tickets, writes full implementations, opens pull requests, reviews code, and handles customer support triage — without you needing to prompt it inside an app.",
      },
    },
    {
      "@type": "Question",
      name: "Does Microsoft Copilot write or review code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft 365 Copilot does not write production code or review pull requests — that is a separate product, GitHub Copilot. M365 Copilot focuses on productivity inside Office apps: drafting documents, summarizing emails, recapping meetings, and analyzing spreadsheets. AM covers the engineering workflow end-to-end: ticket to PR, code review, test generation, and incident triage.",
      },
    },
    {
      "@type": "Question",
      name: "Is Microsoft Copilot useful outside Microsoft 365?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot's value is almost entirely tied to the M365 ecosystem. If your team does not use Microsoft 365 apps as their primary toolchain, M365 Copilot provides little benefit. AM works across any stack — GitHub, GitLab, Jira, Slack, PagerDuty — and does not require a particular vendor's ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "How does Microsoft Copilot pricing compare to AM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft 365 Copilot is a paid add-on: $18/user/month for Business, $30/user/month for Enterprise — on top of existing M365 subscription costs. AM early access is free; team pricing starts at $149/seat/month. The key difference is scope: M365 Copilot augments productivity inside Microsoft apps, while AM executes autonomous multi-step work across your entire engineering and support operation.",
      },
    },
    {
      "@type": "Question",
      name: "What is Microsoft Copilot Cowork and how does it compare to AM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copilot Cowork is Microsoft's early-access agentic layer that allows Copilot to take multi-step actions inside M365 workflows — such as scheduling across calendars or drafting and sending communications. It is constrained to the M365 ecosystem and is still in limited preview as of early 2026. AM's autonomous loop is production-grade and operates across engineering, support, and operations workflows — not limited to a single vendor's app suite.",
      },
    },
  ],
};

const tableRows = [
  { dimension: "Works inside Microsoft 365 apps (Word, Excel, Teams)", am: "no", copilot: "yes" },
  { dimension: "Autonomous task execution", am: "yes", copilot: "partial" },
  { dimension: "Ticket → Pull Request (end-to-end)", am: "yes", copilot: "no" },
  { dimension: "Full PR code review", am: "yes", copilot: "no" },
  { dimension: "Works outside Microsoft ecosystem", am: "yes", copilot: "no" },
  { dimension: "Customer support triage", am: "yes", copilot: "no" },
  { dimension: "On-call incident response", am: "yes", copilot: "no" },
  { dimension: "Works without developer in the loop", am: "yes", copilot: "no" },
];

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="text-[#00E5FF] font-semibold">✓ Yes</span>;
  if (value === "partial") return <span className="text-yellow-400 font-semibold">~ Partial</span>;
  return <span className="text-gray-500">✗ No</span>;
}

export default function AmVsMicrosoftCopilotPage() {
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
          AM vs Microsoft Copilot
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Microsoft Copilot assists you inside Word, Teams, and Outlook. AM works independently —
          tickets, pull requests, code review, and support triage — without needing you in the
          loop. Different scopes, different problems.
        </p>
      </section>

      {/* Verdict cards */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid gap-4 md:grid-cols-3">
        {[
          { label: "AM wins on", point: "Stack independence — AM works across any toolchain, not just M365" },
          { label: "AM wins on", point: "Engineering coverage — code review, PRs, and incident triage included" },
          { label: "AM wins on", point: "Autonomous execution — AM completes tasks, not just drafts inside apps" },
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
                <th className="px-6 py-4 font-semibold text-gray-400">Microsoft Copilot</th>
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
            <h2 className="text-xl font-bold mb-3">Who is Microsoft Copilot for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Microsoft Copilot is for organizations already deep in the Microsoft 365 ecosystem —
              teams that spend most of their day in Word, Excel, PowerPoint, Teams, and Outlook.
              It helps knowledge workers draft documents faster, recap meetings, summarize email
              threads, and surface insights from spreadsheets. If your workflows live in M365,
              Copilot adds genuine productivity value within that ecosystem.
            </p>
          </div>
          <div className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-6">
            <h2 className="text-xl font-bold mb-3">Who is AM for?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              AM is for engineering and operations teams that want work done, not just content
              drafted. AM picks up tickets, writes implementations, opens PRs, handles code review,
              and covers support and incident triage — across any stack, not just Microsoft apps.
              You focus on decisions that require human judgment; AM handles the execution.
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
