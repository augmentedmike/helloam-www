export default function Comparisons() {
  return (
    <section
      className="px-6 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            How AM compares
          </p>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            AM vs the alternatives
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "#666" }}>
            Single-function agents are too narrow. Generic assistants are too passive.
            AM is the unified digital worker for the whole team.
          </p>
        </div>

        <div className="space-y-6">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Devin
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Devin is engineering-only — it takes a ticket and writes code. AM does the same for
              developers, but also covers PM workflows (backlog triage, sprint grooming, PRDs) and
              support (ticket resolution, escalation). You get one worker that covers three team
              functions instead of three separate point solutions. AM also costs significantly less
              per outcome than Devin&apos;s per-task pricing.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Intercom Fin
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Fin is excellent at support — but only if you&apos;re already on Intercom. AM is
              ecosystem-agnostic and works with Zendesk, Intercom, email, Slack, and custom
              ticketing systems. It also covers PM and developer workflows Fin cannot touch.
              AM escalates intelligently and learns from every ticket resolved — your resolution
              rate improves the longer AM works.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Linear AI / Notion AI
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Linear AI and Notion AI are assistants — they help you do work faster, but you&apos;re
              still doing the work. AM is a worker — it does the work end-to-end and reports back.
              It owns outcomes, not responses. If you tell AM to groom the sprint, it grooms the
              sprint. You don&apos;t write a prompt and edit the output.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.12)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              The gap AM owns
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              No single platform covers PM + developer + support under one worker with shared context.
              AM bridges all three — so when a customer ticket surfaces a product bug, the same
              worker that resolved the ticket can triage the bug and draft the fix. That
              cross-function context is the compounding advantage AM builds over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
