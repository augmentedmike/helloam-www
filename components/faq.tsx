"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What exactly does AM do?",
    a: "AM is a digital worker — an autonomous AI that handles end-to-end job functions for PMs, developers, and support teams. For PMs, it triages backlogs, grooms sprints, and drafts release notes. For developers, it picks up tickets, writes code, and opens PRs. For support teams, it resolves tickets autonomously and escalates edge cases. AM doesn't just respond to prompts — it owns outcomes.",
  },
  {
    q: "How is AM different from GitHub Copilot, Devin, or Intercom Fin?",
    a: "Copilot is a coding assistant — it helps you write code, but you're still doing the work. Devin is end-to-end for engineering only. Fin is end-to-end for support only. AM covers all three team functions — PM, developer, and support — under one platform. It also has persistent context across your whole team, not just one user or one workflow.",
  },
  {
    q: "What integrations does AM support?",
    a: "AM integrates with Jira, Linear, GitHub, GitLab, Slack, Zendesk, Intercom, Notion, Confluence, and more. It works inside your existing tools — it doesn't require you to change your workflow. We add integrations based on what our customers use, and enterprise customers can request custom integrations.",
  },
  {
    q: "Is my company's data secure?",
    a: "Yes. AM processes your data under a data processing agreement and does not train on your company's data. All data is encrypted in transit and at rest. We support SSO, role-based access controls, and audit logs for enterprise customers. We're SOC 2 Type II in progress.",
  },
  {
    q: "How does team onboarding work?",
    a: "Onboarding takes 1–2 hours. We connect AM to your tools (GitHub, Jira, Slack, etc.), give it read access to your codebase and knowledge base, and run a context-building session. Within the first week, AM has enough context to handle real work. We provide a dedicated success engineer for teams on Growth and above.",
  },
  {
    q: "What happens when AM doesn't know something or makes a mistake?",
    a: "AM is built to escalate, not fail silently. When it encounters a situation outside its confidence threshold — a regulatory edge case, an ambiguous customer situation, a complex architectural decision — it surfaces the issue to a human with full context and a recommended path forward. We track escalation rates and work with you to improve them over time.",
  },
  {
    q: "Can AM work autonomously overnight or on a schedule?",
    a: "Yes. AM runs on schedules, triggers, and events. You can configure it to triage incoming support tickets continuously, run a nightly backlog review, or post a weekly sprint summary to Slack every Monday morning — without anyone asking. It works while your team is offline.",
  },
  {
    q: "How does pricing work?",
    a: "AM is priced by team size and usage tier. We offer a Starter tier for small teams trying AM on a single function, a Growth tier for teams using AM across multiple functions, and Enterprise for larger organizations needing SLAs and custom integrations. See the pricing section for current rates. All plans include a free trial period.",
  },
  {
    q: "We're not ready to buy — can we try AM first?",
    a: "Yes. Join the early access waitlist and we'll reach out to schedule a live demo with your team. We do a structured pilot with 3–5 team members over 30 days, with a dedicated success engineer. You see real outcomes before you commit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Questions
          </p>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Everything you want to know.
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: open === i
                  ? "1px solid rgba(0,229,255,0.2)"
                  : "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                aria-expanded={open === i}
              >
                <h3
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg transition-transform duration-200"
                  style={{
                    color: "#00E5FF",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: open === i ? "600px" : "0",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
