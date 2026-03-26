"use client";

const PERSONAS = [
  {
    role: "For PMs",
    color: "#00E5FF",
    headline: "Stop managing process. Start managing product.",
    pain: "60% of PM time goes to triage, grooming, status updates, and meeting prep — not product thinking.",
    value: "AM handles the backlog, grooms tickets before every sprint, drafts release notes, and writes the weekly stakeholder update. Your PMs show up to every meeting ready and spend their time on the work that actually requires them.",
    capabilities: ["Backlog triage & labeling", "Sprint grooming", "PRD drafts", "Release notes", "Stakeholder updates"],
  },
  {
    role: "For Developers",
    color: "#4A90D9",
    headline: "Ship the backlog. Kill the context switches.",
    pain: "Engineers spend 40% of their time on maintenance, migrations, documentation, and code review — not building.",
    value: "AM picks up tickets, reads the codebase, writes the code, and opens PRs. It reviews incoming PRs like a senior engineer, handles migrations, and answers codebase questions instantly. Your engineers build, not babysit.",
    capabilities: ["Ticket → PR", "Code review", "On-call triage", "Migrations & refactors", "Codebase Q&A"],
  },
  {
    role: "For Support",
    color: "#F5A623",
    headline: "Resolve more tickets. Hire fewer people.",
    pain: "Ticket volume grows faster than you can hire. CSAT drops. Nights and weekends go uncovered.",
    value: "AM resolves tickets autonomously 24/7, escalates edge cases with full context, and gets better with every interaction. Your team handles the complex cases that need human judgment — not the hundred tickets that don't.",
    capabilities: ["Autonomous resolution", "24/7 coverage", "Smart escalation", "KB maintenance", "CSAT analytics"],
  },
];

export default function Lifestyle() {
  return (
    <section id="personas" className="px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#00E5FF" }}
        >
          Who AM works for
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          One worker.
          <br />
          <span style={{ color: "#00E5FF" }}>Three team functions.</span>
        </h2>
      </div>

      {/* Persona cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PERSONAS.map((p) => (
          <div
            key={p.role}
            className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}44`;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${p.color}22`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ background: p.color, opacity: 0.9 }}
            />

            {/* Role badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: `${p.color}15`, border: `1px solid ${p.color}35`, color: p.color }}
            >
              {p.role}
            </div>

            {/* Headline */}
            <h3
              className="text-xl font-bold text-white mb-3 leading-snug"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {p.headline}
            </h3>

            {/* Pain point */}
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#666" }}>
              {p.pain}
            </p>

            {/* Value prop */}
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#999" }}>
              {p.value}
            </p>

            {/* Capabilities */}
            <div className="flex flex-wrap gap-2">
              {p.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#888",
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
