import ContactButton from "@/components/contact-button";

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <path d="M2 6.5L5 9.5L11 3.5" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PILOT_PERKS = [
  "30-day structured pilot with a dedicated success engineer",
  "Direct access to the founding team — your feedback shapes the roadmap",
  "Early-adopter pricing locked in for life",
  "Priority integration support for your specific stack",
  "Recognition as a founding partner team",
];

const WHO_QUALIFIES = [
  { label: "Product teams", desc: "PMs and product leads who spend too much time on process and not enough on product" },
  { label: "Engineering teams", desc: "Eng leads and developers with backlog debt they can never seem to close" },
  { label: "Support teams", desc: "Support leads whose ticket volume has outgrown their team capacity" },
  { label: "Startups & scale-ups", desc: "Companies who need to do more with a lean team, without sacrificing quality" },
  { label: "Enterprises", desc: "Organizations exploring AI workers at the team level before broader rollout" },
];

export default function Pilot() {
  return (
    <section
      id="pilot"
      className="px-6 py-24"
      style={{
        background: "rgba(0,229,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Early Access Program
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Join the founding cohort.
            <br />
            <span style={{ color: "#00E5FF" }}>Shape what AM becomes.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            We&apos;re selecting a small group of teams to get early access and dedicated support —
            in exchange for real-world feedback that makes AM better for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Who qualifies */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h3 className="text-lg font-bold text-white mb-5">Who we&apos;re looking for</h3>
            <div className="space-y-4">
              {WHO_QUALIFIES.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "#00E5FF" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#666666" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What you get */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(0,229,255,0.05)",
              border: "1px solid rgba(0,229,255,0.2)",
              boxShadow: "0 0 40px rgba(0,229,255,0.05)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-5">What early access partners get</h3>
            <ul className="space-y-3">
              {PILOT_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-sm" style={{ color: "#aaaaaa" }}>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ContactButton
            category="Early Access"
            subject="Early Access Application"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#cccccc",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Apply for early access
          </ContactButton>
          <p className="mt-4 text-sm" style={{ color: "#444444" }}>
            Tell us your team&apos;s biggest bottleneck and how you plan to use AM.
            We review applications personally and follow up within a few days.
          </p>
        </div>
      </div>
    </section>
  );
}
