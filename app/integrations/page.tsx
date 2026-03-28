import type { Metadata } from "next";
import ContactButton from "@/components/contact-button";

export const metadata: Metadata = {
  title: "Integrations | helloam.bot",
  description:
    "AM connects with the tools your team already uses — Jira, Linear, GitHub, GitLab, Slack, Zendesk, Intercom, Notion, Confluence, and more.",
  alternates: { canonical: "https://helloam.bot/integrations" },
};

const CATEGORIES = [
  {
    name: "Project Management",
    accent: "#00E5FF",
    integrations: [
      {
        name: "Jira",
        description:
          "AM triages your Jira backlog, assigns issues, and closes tickets autonomously — no manual grooming required.",
      },
      {
        name: "Linear",
        description:
          "AM pulls from your Linear queue, writes code to match specs, and moves issues through your workflow end-to-end.",
      },
    ],
  },
  {
    name: "Code & Dev",
    accent: "#4A90D9",
    integrations: [
      {
        name: "GitHub",
        description:
          "AM opens pull requests, reviews diffs, responds to review comments, and merges when checks pass.",
      },
      {
        name: "GitLab",
        description:
          "AM works natively with GitLab pipelines — creating MRs, resolving CI failures, and shipping code to your branches.",
      },
    ],
  },
  {
    name: "Communication",
    accent: "#4CAF50",
    integrations: [
      {
        name: "Slack",
        description:
          "AM receives task requests via Slack, posts status updates, and surfaces blockers — keeping your team in the loop without meetings.",
      },
    ],
  },
  {
    name: "Customer Support",
    accent: "#F5A623",
    integrations: [
      {
        name: "Zendesk",
        description:
          "AM reads incoming support tickets, drafts resolutions, escalates edge cases, and closes tickets — all within Zendesk.",
      },
      {
        name: "Intercom",
        description:
          "AM handles first-response triage in Intercom, resolves common issues, and hands off complex conversations to humans.",
      },
    ],
  },
  {
    name: "Knowledge & Docs",
    accent: "#9B59B6",
    integrations: [
      {
        name: "Notion",
        description:
          "AM reads your Notion docs as context for tasks and writes back summaries, specs, and changelogs automatically.",
      },
      {
        name: "Confluence",
        description:
          "AM indexes your Confluence knowledge base to answer questions, update pages, and keep documentation in sync with your codebase.",
      },
    ],
  },
];

function Divider() {
  return (
    <div
      className="my-14 mx-auto"
      style={{ width: "60px", height: "1px", background: "rgba(0,229,255,0.25)" }}
    />
  );
}

export default function IntegrationsPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-space-grotesk), sans-serif" }}
    >
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "#00E5FF" }}>
          Integrations
        </p>
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
        >
          Works where<br />
          <span style={{ color: "#00E5FF" }}>your team works.</span>
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#888" }}>
          AM connects directly to your existing tools — no new workflows, no context-switching.
          Just a digital worker who fits right into your stack.
        </p>
      </div>

      {/* Integration categories */}
      <div className="max-w-4xl mx-auto px-6">
        {CATEGORIES.map((category, i) => (
          <div key={category.name}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: category.accent }}
              />
              <h2
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#555" }}
              >
                {category.name}
              </h2>
            </div>

            {/* Integration cards */}
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {category.integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="rounded-xl px-5 py-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: category.accent }}
                    />
                    <p className="text-sm font-semibold text-white">{integration.name}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>

            {i < CATEGORIES.length - 1 && <Divider />}
          </div>
        ))}

        <Divider />

        {/* Request an integration CTA */}
        <div
          className="rounded-2xl px-7 py-8 mb-20 text-center"
          style={{
            background: "rgba(0,229,255,0.03)",
            border: "1px solid rgba(0,229,255,0.12)",
          }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#00E5FF" }}>
            Don&apos;t see your tool?
          </p>
          <h2
            className="font-bold mb-3"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            Request an integration
          </h2>
          <p className="text-sm max-w-md mx-auto mb-6" style={{ color: "#666" }}>
            Tell us what you&apos;re using and we&apos;ll prioritize it. AM is built to fit your stack, not the other way around.
          </p>
          <ContactButton
            category="Integration Request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            style={{
              background: "#00E5FF",
              color: "#0a0a0a",
            }}
          >
            Request an integration
          </ContactButton>
        </div>
      </div>
    </main>
  );
}
