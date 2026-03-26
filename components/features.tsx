"use client";

import { useState } from "react";

type Category = "pm" | "dev" | "support" | "all";

const TABS: { id: Category; label: string }[] = [
  { id: "pm",      label: "For PMs"        },
  { id: "dev",     label: "For Developers" },
  { id: "support", label: "For Support"    },
  { id: "all",     label: "All"            },
];

const ACCENTS: Record<Category, string> = {
  pm:      "#00E5FF",
  dev:     "#4A90D9",
  support: "#F5A623",
  all:     "#00E5FF",
};

const FEATURES: {
  title: string;
  stat: string;
  body: string;
  accent: string;
  categories: Category[];
}[] = [
  // ── FOR PMs ────────────────────────────────────────────────────────────────
  {
    title: "Backlog Triage",
    stat: "Zero backlog debt",
    body: "AM reads every incoming ticket, labels it, prioritizes it against sprint goals, and surfaces what needs immediate attention. Your backlog stays clean without you touching it.",
    accent: "#00E5FF",
    categories: ["pm"],
  },
  {
    title: "Sprint Grooming",
    stat: "Always sprint-ready",
    body: "AM prepares tickets for grooming — writes acceptance criteria, identifies missing context, flags blockers, and estimates complexity based on your team's history. Show up to grooming with a ready board.",
    accent: "#00E5FF",
    categories: ["pm"],
  },
  {
    title: "Release Notes & Changelogs",
    stat: "Ship faster",
    body: "AM reads merged PRs and writes release notes in your product voice. Customer-facing changelog, internal engineering summary, and stakeholder email — generated and ready to send.",
    accent: "#00BCD4",
    categories: ["pm"],
  },
  {
    title: "Meeting Notes → Tickets",
    stat: "Nothing falls through",
    body: "Drop in a meeting transcript. AM extracts action items, creates tickets with owners and due dates, and links them to the right epics. Every decision becomes a tracked item.",
    accent: "#4A90D9",
    categories: ["pm"],
  },
  {
    title: "PRD Drafts",
    stat: "From idea to doc in minutes",
    body: "Tell AM what you're building. It drafts the PRD — problem statement, success metrics, user stories, open questions. You refine the thinking, not the formatting.",
    accent: "#00E5FF",
    categories: ["pm"],
  },
  {
    title: "Stakeholder Updates",
    stat: "Always in the loop",
    body: "AM monitors sprint progress and auto-drafts weekly stakeholder updates. One click to send — no manual status aggregation, no chasing engineers for updates.",
    accent: "#9B59B6",
    categories: ["pm"],
  },
  // ── FOR DEVELOPERS ─────────────────────────────────────────────────────────
  {
    title: "Ticket → Pull Request",
    stat: "Ship the backlog",
    body: "Assign AM a Jira or Linear ticket. It reads the codebase, writes the code, opens a PR with tests, and posts a summary for review. End-to-end task ownership without the hand-holding.",
    accent: "#4A90D9",
    categories: ["dev"],
  },
  {
    title: "Code Review Partner",
    stat: "Faster reviews, better PRs",
    body: "AM reviews incoming PRs for correctness, test coverage, edge cases, and adherence to your team's patterns. It comments like a senior engineer — specific, actionable, not nitpicky.",
    accent: "#4A90D9",
    categories: ["dev"],
  },
  {
    title: "On-Call Triage",
    stat: "Quieter nights",
    body: "AM monitors alerts, correlates incidents with recent deployments, and surfaces the most likely root cause before you're fully awake. Less time diagnosing, more time fixing.",
    accent: "#CC2200",
    categories: ["dev"],
  },
  {
    title: "Migration & Refactor Work",
    stat: "Tackle the tech debt",
    body: "AM handles boilerplate-heavy migrations — library upgrades, linting rule enforcement, API version bumps across hundreds of files. Systematic work that blocks your roadmap but no one wants to do.",
    accent: "#4A90D9",
    categories: ["dev"],
  },
  {
    title: "Documentation",
    stat: "Code that explains itself",
    body: "AM reads your codebase and writes inline docs, README updates, and architecture decision records. Your next hire understands the system faster.",
    accent: "#00BCD4",
    categories: ["dev"],
  },
  {
    title: "Codebase Q&A",
    stat: "Instant context",
    body: "Ask AM anything about your codebase. Where is the auth logic? What does this function do? Why was this approach chosen? It has read everything and answers like someone who wrote it.",
    accent: "#9B59B6",
    categories: ["dev"],
  },
  // ── FOR SUPPORT ────────────────────────────────────────────────────────────
  {
    title: "Autonomous Ticket Resolution",
    stat: "66% fewer escalations",
    body: "AM resolves support tickets end-to-end — reads the issue, finds the answer in your knowledge base, and sends a response in your brand voice. Human escalation only when genuinely needed.",
    accent: "#F5A623",
    categories: ["support"],
  },
  {
    title: "24/7 Coverage",
    stat: "Always on",
    body: "AM covers nights, weekends, and spikes without staffing changes. Your customers get responses in under two minutes regardless of when they write in.",
    accent: "#F5A623",
    categories: ["support"],
  },
  {
    title: "Smart Escalation",
    stat: "Right person, right context",
    body: "AM knows when a ticket needs a human — regulatory issues, edge cases, frustrated customers. It escalates with full context: the conversation, the customer's history, and a recommended next step.",
    accent: "#E8006A",
    categories: ["support"],
  },
  {
    title: "Knowledge Base Maintenance",
    stat: "Always accurate",
    body: "AM identifies gaps in your knowledge base from recurring ticket themes and drafts new articles to fill them. Your docs get better the more AM works.",
    accent: "#F5A623",
    categories: ["support"],
  },
  {
    title: "CSAT & Trend Analysis",
    stat: "See problems coming",
    body: "AM tracks patterns in ticket volume, resolution time, and customer sentiment. It surfaces emerging issues before they become incidents — and tells you why CSAT moved last week.",
    accent: "#00E5FF",
    categories: ["support"],
  },
  {
    title: "Multilingual Support",
    stat: "No language barrier",
    body: "AM reads and responds in over 40 languages. Respond to your French, Spanish, Japanese, or German customers in their language, with the same quality and voice.",
    accent: "#4A90D9",
    categories: ["support"],
  },
  // ── ALL ONLY ───────────────────────────────────────────────────────────────
  {
    title: "Persistent Context",
    stat: "Never re-explains",
    body: "AM builds a model of your team — codebase, customer history, product decisions, team patterns. It brings this context to every task, every time, without needing to be caught up.",
    accent: "#00E5FF",
    categories: [],
  },
  {
    title: "Outcome Ownership",
    stat: "Not a copilot",
    body: "AM owns end-to-end outcomes, not just individual responses. Give it a goal, not a task. It plans the steps, executes them, and reports back — like a team member, not a tool.",
    accent: "#9B59B6",
    categories: [],
  },
  {
    title: "Works While You Sleep",
    stat: "Runs on schedules",
    body: "AM runs on triggers, schedules, and events. Morning backlog summary, nightly build health report, weekly stakeholder digest — all autonomous, all delivered without anyone asking.",
    accent: "#4A90D9",
    categories: [],
  },
  {
    title: "Ecosystem Agnostic",
    stat: "Works with your stack",
    body: "AM integrates with Jira, Linear, GitHub, Slack, Zendesk, Intercom, Notion, and more. It works in your existing workflow — not a new one you have to adopt.",
    accent: "#F5A623",
    categories: [],
  },
];

export default function Features() {
  const [active, setActive] = useState<Category>("pm");

  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Capabilities
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            One worker, three team functions.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888888" }}>
            AM covers the work your PMs, developers, and support teams spend their time on —
            not just a task here and there.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-1 mb-12 flex-wrap">
          {TABS.map((tab, i) => {
            const isActive = active === tab.id;
            const accentColor = ACCENTS[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200"
                style={{
                  color: isActive ? accentColor : "rgba(255,255,255,0.4)",
                  background: isActive ? `${accentColor}18` : "transparent",
                  border: isActive
                    ? `1px solid ${accentColor}44`
                    : "1px solid transparent",
                }}
              >
                {tab.label}
                {i < TABS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[3px] top-1/2 -translate-y-1/2 text-xs select-none pointer-events-none"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  >
                    |
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => {
            const visible =
              active === "all" ||
              (feature.categories.length > 0 && feature.categories.includes(active));
            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  display: visible ? undefined : "none",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${feature.accent}33`;
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${feature.accent}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.3)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: feature.accent, opacity: 0.85 }}
                />

                {/* Subtle background glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${feature.accent}0D 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Stat + index */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: feature.accent,
                        background: `${feature.accent}18`,
                        border: `1px solid ${feature.accent}30`,
                      }}
                    >
                      {feature.stat}
                    </span>
                    <span
                      className="text-xs font-mono font-bold tabular-nums"
                      style={{ color: "rgba(255,255,255,0.12)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#777777" }}>
                    {feature.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
