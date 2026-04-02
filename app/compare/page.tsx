import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "AM vs AI Tools — Side-by-Side Comparisons | helloam.bot",
  description:
    "Compare AM to Devin, GitHub Copilot, Intercom Fin, and other AI tools. See exactly how an autonomous digital worker stacks up against coding assistants and support bots.",
  keywords: [
    "AI comparison",
    "AM vs Devin",
    "AM vs GitHub Copilot",
    "AM vs Intercom Fin",
    "AI digital worker vs AI assistant",
    "autonomous AI agent comparison",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/compare",
  },
  openGraph: {
    title: "AM vs AI Tools — Side-by-Side Comparisons",
    description:
      "Compare AM to Devin, GitHub Copilot, Intercom Fin, and other AI tools. Find out which tool fits your team.",
    url: "https://helloam.bot/compare",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM vs AI Tools — Side-by-Side Comparisons",
    description:
      "Compare AM to Devin, GitHub Copilot, Intercom Fin, and more. See how an autonomous digital worker differs from AI assistants.",
    images: ["/og-image.png"],
  },
};

const comparisons = [
  {
    slug: "am-vs-devin",
    competitor: "Devin",
    tagline: "AI software engineer vs autonomous digital worker",
    description:
      "Devin focuses on writing code end-to-end. AM does that and handles tickets, customer support, on-call triage, and cross-functional work — without staying in the dev lane.",
  },
  {
    slug: "am-vs-github-copilot",
    competitor: "GitHub Copilot",
    tagline: "Autocomplete assistant vs autonomous agent",
    description:
      "Copilot helps you type faster. AM works independently — picking up tasks, writing full implementations, reviewing PRs, and shipping results without you in the loop.",
  },
  {
    slug: "am-vs-intercom-fin",
    competitor: "Intercom Fin",
    tagline: "Support-only bot vs full-stack digital worker",
    description:
      "Fin handles customer conversations. AM handles conversations and the work behind them — ticket routing, code changes, cross-team coordination — all in one worker.",
  },
  {
    slug: "am-vs-hubspot-ai",
    competitor: "HubSpot AI",
    tagline: "CRM-locked AI vs stack-wide digital worker",
    description:
      "HubSpot Breeze lives inside HubSpot. AM works across your entire stack — Slack, email, GitHub, Zendesk — without lock-in, credit pools, or a five-figure onboarding fee.",
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#00E5FF] mb-4">
          Comparisons
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          AM vs the alternatives
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          AI tools are not all the same. Coding assistants, support bots, and autonomous digital
          workers solve different problems. See how AM compares to the tools your team is already
          evaluating.
        </p>
      </section>

      {/* Comparison Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid gap-6 md:grid-cols-3">
        {comparisons.map(({ slug, competitor, tagline, description }) => (
          <Link
            key={slug}
            href={`/compare/${slug}`}
            className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#00E5FF]/40 hover:bg-white/8 transition-all"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00E5FF] mb-2">
              AM vs {competitor}
            </p>
            <h2 className="text-xl font-bold mb-2 group-hover:text-[#00E5FF] transition-colors">
              {tagline}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            <p className="mt-4 text-sm font-semibold text-[#00E5FF]">
              See comparison →
            </p>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to try AM?</h2>
        <p className="text-gray-400 mb-8">
          Get early access to the digital worker that handles the work, not
          just the suggestions.
        </p>
        <WaitlistForm />
      </section>
    </main>
  );
}
