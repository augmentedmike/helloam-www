"use client";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M2 7L5.5 10.5L12 4" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    title: "Connect your tools",
    body: "AM integrates with your existing stack — Jira, Linear, GitHub, Slack, Zendesk, Intercom, Notion. Setup takes under two hours. AM reads your codebase, knowledge base, and historical data to build context.",
    detail: ["GitHub / GitLab", "Jira / Linear", "Slack / Teams", "Zendesk / Intercom"],
    color: "#00E5FF",
  },
  {
    number: "02",
    title: "Assign work like a teammate",
    body: "Assign AM a ticket, a goal, or a whole workflow. It plans the steps, executes them end-to-end, and works on your schedule — including nights and weekends. No prompt engineering required.",
    detail: ["Assign a ticket", "Set a schedule", "Define a workflow", "Give it a goal"],
    color: "#4A90D9",
  },
  {
    number: "03",
    title: "Review the outcome",
    body: "AM delivers the result — a PR, a resolved ticket, a groomed sprint, a stakeholder update. It explains what it did and why. You review, approve, and ship. It learns from your feedback.",
    detail: ["PR ready for review", "Ticket resolved", "Sprint groomed", "Report delivered"],
    color: "#F5A623",
  },
];

export default function Device() {
  return (
    <section id="how-it-works" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
          How it works
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          From task to outcome —
          <br />
          <span style={{ color: "#00E5FF" }}>without the micromanagement.</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#777777" }}>
          AM works like a senior team member — not a tool you prompt.
          You assign work. AM owns it. You review the result.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Step number */}
            <div
              className="text-6xl font-bold mb-6 select-none"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: `${step.color}20`,
                lineHeight: 1,
              }}
            >
              {step.number}
            </div>

            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {step.title}
            </h3>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#777" }}>
              {step.body}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.detail.map((d) => (
                <span
                  key={d}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}25`,
                    color: step.color,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div
        className="rounded-2xl px-8 py-7 grid sm:grid-cols-3 gap-6 text-center"
        style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.10)" }}
      >
        {[
          { stat: "< 2 hrs", label: "Average setup time" },
          { stat: "1 week", label: "To first real outcome" },
          { stat: "30 days", label: "Structured pilot for every team" },
        ].map((s) => (
          <div key={s.label}>
            <p
              className="text-2xl font-bold mb-1"
              style={{ color: "#00E5FF", fontFamily: "var(--font-space-grotesk)" }}
            >
              {s.stat}
            </p>
            <p className="text-xs" style={{ color: "#666" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
