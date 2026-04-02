import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Local AI Assistant — On-Device AI That Never Shares Your Data | helloam.bot",
  description:
    "A local AI assistant processes everything on your own hardware. No prompts, context, or outputs ever leave your network. Learn why local AI matters for privacy, compliance, and security.",
  keywords: [
    "local AI assistant",
    "on-device AI",
    "private AI assistant",
    "AI that doesn't share data",
    "self-hosted AI assistant",
    "local LLM",
    "offline AI assistant",
    "AI privacy",
    "private AI",
    "HIPAA AI",
    "GDPR AI assistant",
    "air-gapped AI",
    "on-premise AI",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot/local-ai-assistant",
  },
  openGraph: {
    title: "Local AI Assistant — On-Device AI That Never Shares Your Data",
    description:
      "A local AI assistant runs entirely on your infrastructure. No data egress, no third-party training, no breach surface. Built for healthcare, legal, finance, and any team where privacy isn't optional.",
    url: "https://helloam.bot/local-ai-assistant",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local AI Assistant — On-Device AI That Never Shares Your Data",
    description:
      "A local AI assistant processes everything in-house. Zero data egress, no cloud training, offline capable. Privacy-first AI for regulated industries.",
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://helloam.bot/local-ai-assistant",
    name: "Local AI Assistant — On-Device AI That Never Shares Your Data",
    url: "https://helloam.bot/local-ai-assistant",
    description:
      "Learn what a local AI assistant is, why running AI on your own hardware matters for privacy and compliance, and how it compares to cloud AI services.",
    publisher: {
      "@type": "Organization",
      name: "helloam.bot",
      url: "https://helloam.bot",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://helloam.bot/local-ai-assistant#product",
    name: "AM — Local AI Assistant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, On-Premise",
    url: "https://helloam.bot/local-ai-assistant",
    image: "https://helloam.bot/og-image.png",
    description:
      "AM is a local AI assistant that runs entirely within your infrastructure. All processing stays on your hardware — no prompts, no context, no outputs ever leave your network.",
    featureList: [
      "Zero data egress",
      "No cloud training on your data",
      "Offline and air-gapped operation",
      "HIPAA, GDPR, SOC 2 compatible",
      "On-premise deployment",
      "No third-party data retention",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://helloam.bot/local-ai-assistant#waitlist",
      description: "Free early access pilot.",
    },
    publisher: {
      "@type": "Organization",
      name: "helloam.bot",
      url: "https://helloam.bot",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://helloam.bot/local-ai-assistant#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a local AI assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local AI assistant is an AI system that runs entirely on your own hardware or within your private infrastructure. Unlike cloud AI services, a local assistant processes all prompts, context, and outputs in-house — nothing transits external networks, CDNs, or third-party servers.",
        },
      },
      {
        "@type": "Question",
        name: "How is a local AI assistant different from ChatGPT or Claude?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cloud AI services like ChatGPT and Claude send your prompts and context to remote servers operated by third parties. A local AI assistant processes everything on your own hardware. Your data never leaves your network, cannot be used to train future models, and is not subject to third-party data retention policies.",
        },
      },
      {
        "@type": "Question",
        name: "Is a local AI assistant compliant with HIPAA, GDPR, and SOC 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local AI assistants significantly simplify compliance because sensitive data never leaves your controlled environment. For HIPAA, PHI never touches a cloud provider. For GDPR, there is no cross-border data transfer. For SOC 2, your audit surface is limited to infrastructure you already control.",
        },
      },
      {
        "@type": "Question",
        name: "Can a local AI assistant work offline or in an air-gapped environment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because all processing happens on-device or on-premise, a local AI assistant operates without any internet connection. This makes it suitable for air-gapped environments, classified networks, and regulated facilities where external connectivity is prohibited.",
        },
      },
      {
        "@type": "Question",
        name: "What industries benefit most from a local AI assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthcare (PHI protection, HIPAA), legal (attorney-client privilege, confidential case strategy), finance (NPI, trading data, M&A), government and defense (classified information, air-gapped networks), and any organization handling sensitive PII or proprietary data.",
        },
      },
    ],
  },
];

const ACCENT = "#a5b4fc";
const HEADING_FONT = "var(--font-space-grotesk), sans-serif";

export default function LocalAIAssistantPage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#ededed",
        minHeight: "100vh",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      {/* JSON-LD structured data */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[92dvh] px-6 py-24 text-center overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${ACCENT}0d 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              background: `${ACCENT}14`,
              border: `1px solid ${ACCENT}40`,
              color: ACCENT,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
            Local AI · Privacy-First · On-Device
          </div>

          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: HEADING_FONT,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            <span className="text-white">AI that works for you.</span>
            <br />
            <span style={{ color: ACCENT }}>Not one that watches you.</span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "#888888" }}
          >
            A local AI assistant runs entirely on your own hardware. Your prompts, context, and
            outputs never leave your network — no cloud transit, no third-party training, no breach
            surface that isn&apos;t yours to control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: ACCENT, color: "#0a0a0a" }}
            >
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#why-local"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#cccccc",
              }}
            >
              Why local matters
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { stat: "100%", label: "of your data stays on your infrastructure" },
              { stat: "0", label: "cloud servers that can be subpoenaed for your data" },
              { stat: "∞", label: "uptime — works offline, air-gapped, always" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: ACCENT }}
                >
                  {item.stat}
                </div>
                <div className="text-xs leading-snug" style={{ color: "#555" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Local Matters ─────────────────────────────────── */}
      <section
        id="why-local"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: ACCENT }}
            >
              Why it matters
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: HEADING_FONT }}
            >
              Six reasons local AI{" "}
              <span style={{ color: ACCENT }}>changes everything.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔒",
                title: "Zero data egress",
                body: "Prompts, context, and outputs never transit cloud infrastructure, CDN layers, or any network outside your own. Your data is physically incapable of leaving your environment.",
              },
              {
                icon: "🚫",
                title: "No training on your data",
                body: "Cloud providers may use your inputs to fine-tune future models. With a local assistant, there is no upstream connection — your data cannot be used to train anything.",
              },
              {
                icon: "🛡️",
                title: "No breach surface",
                body: "Data can't leak from a server it never touched. The most common vector for enterprise AI data exposure — a third-party provider breach — is structurally impossible.",
              },
              {
                icon: "📡",
                title: "Offline & air-gapped",
                body: "Works without internet. Critical for air-gapped networks, classified environments, field operations, and regulated facilities where external connectivity is prohibited.",
              },
              {
                icon: "⚖️",
                title: "Regulatory compliance",
                body: "HIPAA, GDPR, SOC 2, CCPA — regulated industries have strict rules about where sensitive data can travel. Local AI keeps data inside your compliance boundary by design.",
              },
              {
                icon: "⚡",
                title: "Latency & reliability",
                body: "No round-trip to remote servers. Sub-second responses, no API rate limits, no outage dependency. Your AI uptime equals your own infrastructure uptime.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${ACCENT}22`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}60, transparent)` }}
                />
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cloud vs Local comparison ─────────────────────────── */}
      <section id="privacy" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: ACCENT }}
            >
              The privacy gap
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: HEADING_FONT }}
            >
              Cloud AI vs local AI.{" "}
              <span style={{ color: ACCENT }}>The data handling difference.</span>
            </h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#777" }}>
              When you send a prompt to a cloud AI, that data travels through multiple systems outside
              your control. Local AI eliminates every step of that exposure.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest py-4 px-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                color: "#555",
              }}
            >
              <div>Data handling</div>
              <div className="text-center" style={{ color: "#f87171" }}>Cloud AI</div>
              <div className="text-center" style={{ color: ACCENT }}>Local AI</div>
            </div>

            {[
              { aspect: "Data leaves your network", cloud: true, local: false },
              { aspect: "Transits third-party CDN / infra", cloud: true, local: false },
              { aspect: "May be used for model training", cloud: true, local: false },
              { aspect: "Stored on provider servers", cloud: true, local: false },
              { aspect: "Subject to provider data breach", cloud: true, local: false },
              { aspect: "Requires internet connection", cloud: true, local: false },
              { aspect: "Works in air-gapped environments", cloud: false, local: true },
              { aspect: "You control data retention", cloud: false, local: true },
            ].map((row, i) => (
              <div
                key={row.aspect}
                className="grid grid-cols-3 items-center py-4 px-6 text-sm"
                style={{
                  borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <div style={{ color: "#aaa" }}>{row.aspect}</div>
                <div className="text-center">
                  {row.cloud ? (
                    <span style={{ color: "#f87171" }}>✓ Yes</span>
                  ) : (
                    <span style={{ color: "#2d5a27", fontWeight: 600 }}>✗ No</span>
                  )}
                </div>
                <div className="text-center">
                  {row.local ? (
                    <span style={{ color: ACCENT }}>✓ Yes</span>
                  ) : (
                    <span style={{ color: "#2d5a27", fontWeight: 600 }}>✗ No</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────── */}
      <section
        id="who"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: ACCENT }}
            >
              Who it&apos;s for
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: HEADING_FONT }}
            >
              Built for industries where{" "}
              <span style={{ color: ACCENT }}>privacy isn&apos;t optional.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                vertical: "Healthcare",
                icon: "🏥",
                tag: "HIPAA",
                tagColor: "#34d399",
                body: "PHI — patient records, clinical notes, diagnostic data — cannot legally touch most cloud AI infrastructure. A local assistant processes it all in-house, keeping you HIPAA-compliant and your patients protected.",
                examples: ["Clinical documentation", "EHR summarization", "Prior auth drafting"],
              },
              {
                vertical: "Legal",
                icon: "⚖️",
                tag: "Privilege",
                tagColor: "#fbbf24",
                body: "Client communications, case strategy, and deposition prep are privileged. Uploading them to a cloud AI service may waive privilege. Local AI keeps privileged work product exactly where it belongs.",
                examples: ["Contract review", "Case research", "Discovery analysis"],
              },
              {
                vertical: "Finance",
                icon: "🏦",
                tag: "NPI / MNPI",
                tagColor: "#60a5fa",
                body: "Non-public financial data, M&A deal flow, and trading strategies are heavily regulated. A local assistant can analyze sensitive financial documents without creating a data egress event.",
                examples: ["Deal memo drafting", "Financial modeling", "Regulatory filings"],
              },
              {
                vertical: "Government & Defense",
                icon: "🛡️",
                tag: "Air-Gapped",
                tagColor: "#f472b6",
                body: "Classified and sensitive government work happens on air-gapped networks by design. Local AI is the only AI architecture that works in these environments — no cloud connection ever required.",
                examples: ["Intelligence analysis", "Secure document review", "Policy drafting"],
              },
              {
                vertical: "HR & People Ops",
                icon: "👥",
                tag: "PII",
                tagColor: "#a78bfa",
                body: "Employee records, performance reviews, compensation data, and disciplinary files are some of the most sensitive PII an organization holds. Keep it out of cloud AI pipelines entirely.",
                examples: ["Performance review drafting", "Job description writing", "Policy updates"],
              },
              {
                vertical: "Enterprise Security",
                icon: "🔐",
                tag: "Zero Trust",
                tagColor: "#fb923c",
                body: "Security teams analyze threat intelligence, vulnerability data, and incident logs — material that should never leave a controlled environment. Local AI fits naturally into a zero-trust architecture.",
                examples: ["Threat report summarization", "Incident response", "Runbook generation"],
              },
            ].map((item) => (
              <div
                key={item.vertical}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <h3
                    className="text-base font-bold text-white"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {item.vertical}
                  </h3>
                  <span
                    className="ml-auto text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: `${item.tagColor}18`,
                      border: `1px solid ${item.tagColor}40`,
                      color: item.tagColor,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#666",
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        id="faq"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: ACCENT }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: HEADING_FONT }}
            >
              Local AI, explained.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What exactly is a local AI assistant?",
                a: "A local AI assistant is an AI system that runs entirely on your own hardware or within your private infrastructure. Unlike cloud AI services (ChatGPT, Claude.ai, Gemini), a local assistant processes all prompts, context, and outputs in-house. Nothing transits external networks or touches third-party servers — ever.",
              },
              {
                q: "How is local AI different from cloud AI like ChatGPT?",
                a: "Cloud AI sends your prompts and data to remote servers run by a third party. Your data is in transit, at rest on their infrastructure, potentially subject to human safety review, and governed by their retention policies. Local AI processes everything on hardware you control. The data never moves. There is no third party.",
              },
              {
                q: "Is local AI really necessary if cloud AI providers have privacy policies?",
                a: "Privacy policies govern intent, not capability. A cloud provider can be breached, subpoenaed, or acquired. Their data centers exist in multiple legal jurisdictions with varying compelled disclosure rules. Local AI eliminates this attack surface entirely — it is architectural privacy, not contractual privacy.",
              },
              {
                q: "Can local AI work offline or in an air-gapped environment?",
                a: "Yes. Because all processing happens on-device or on-premise, a local AI assistant requires no internet connection. It works in air-gapped networks, classified facilities, field operations, and offline environments by design.",
              },
              {
                q: "Does local AI mean the model is smaller or less capable?",
                a: "Not necessarily. Modern open-weight models (Llama, Mistral, Qwen, and others) are highly capable and can be deployed locally on enterprise hardware. The tradeoff is compute cost, not capability ceiling. For many enterprise use cases — document analysis, drafting, summarization — local models perform at or near frontier-model quality.",
              },
              {
                q: "What compliance frameworks does local AI help with?",
                a: "HIPAA (PHI protection), GDPR (data residency and transfer restrictions), SOC 2 (limiting data exposure scope), CCPA (consumer data rights), and sector-specific regulations like FINRA, ITAR, and FedRAMP. Local AI simplifies compliance by keeping data inside your existing compliance boundary.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3
                  className="text-base font-bold text-white mb-3"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Waitlist ───────────────────────────────────── */}
      <section
        id="waitlist"
        className="px-6 py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            Early Access
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Keep your data yours.
            <br />
            <span style={{ color: ACCENT }}>Get early access to AM.</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Join the list for AM&apos;s local AI assistant. We&apos;ll reach out when your
            team&apos;s spot is ready. No credit card. No commitment.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
