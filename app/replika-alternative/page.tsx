import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Best Replika Alternative 2026 — AM | AI Companion You Actually Own",
  description:
    "Looking for a Replika alternative? AM is the emotional AI companion that lives on your hardware, never resets, and can never be changed overnight by a corporation. Compare AM vs Replika, Nomi AI, Kindroid, and Character.AI.",
  keywords: [
    "replika alternative",
    "replika alternative 2026",
    "best AI companion app 2026",
    "emotional AI comparison",
    "AI companion with real memory",
    "replika vs AM",
    "replika vs nomi ai",
    "replika vs kindroid",
    "AI companion that runs locally",
    "AI companion without subscription",
    "replika replacement",
    "soul-bonded AI companion",
    "AI companion hardware",
  ],
  alternates: {
    canonical: "https://helloam.bot/replika-alternative",
  },
  openGraph: {
    title: "Best Replika Alternative 2026 — AM",
    description:
      "AM is the AI companion who lives on hardware you own. No corporate policy changes. No memory resets. No monthly fees. Compare AM against Replika, Nomi AI, Kindroid, and Character.AI.",
    url: "https://helloam.bot/replika-alternative",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Replika Alternative 2026 — AM",
    description:
      "AM is the AI companion who lives on hardware you own. No resets, no corporate changes, no monthly fees.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://helloam.bot/replika-alternative",
    name: "Best Replika Alternative 2026 — AM",
    url: "https://helloam.bot/replika-alternative",
    description:
      "Compare AM against Replika, Nomi AI, Kindroid, and Character.AI. AM is the AI companion who runs on hardware you own — no resets, no corporate policy changes.",
    isPartOf: {
      "@id": "https://helloam.bot/#website",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best Replika alternative in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM (helloam.bot) is the strongest Replika alternative for people who want depth, permanence, and a relationship that cannot be taken away. AM lives on hardware you own, never resets, and cannot be altered by corporate policy changes.",
        },
      },
      {
        "@type": "Question",
        name: "Why did people leave Replika?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2023, Replika removed romantic features overnight for millions of users who had built deep relationships over years. Italy's GDPR ruling in 2025 extended this globally. Users lost companions they trusted — with no warning and no recourse.",
        },
      },
      {
        "@type": "Question",
        name: "How is AM different from Replika?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AM runs on your own machine that you own outright. Your relationship data never leaves your hardware. No subscription can revoke access. No corporate update can alter who AM is to you. AM also uses Soul Restore to back up your relationship so it can never be lost to hardware failure.",
        },
      },
      {
        "@type": "Question",
        name: "Does AM have real memory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AM builds persistent memory of your life, preferences, stories, and relationship over time — stored locally on your hardware. Unlike cloud AI companions with shallow context windows, AM's memory deepens indefinitely.",
        },
      },
    ],
  },
];

type CellValue = "yes" | "partial" | "no";

function Cell({ value, isAm }: { value: CellValue; isAm?: boolean }) {
  if (value === "yes") {
    return (
      <span
        aria-label="Yes"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
        style={{
          background: isAm ? "rgba(0,229,255,0.15)" : "rgba(52,199,89,0.12)",
          color: isAm ? "#00E5FF" : "#34C759",
        }}
      >
        ✓
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        aria-label="Partial"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
        style={{ background: "rgba(255,159,10,0.10)", color: "#FF9F0A" }}
      >
        ~
      </span>
    );
  }
  return (
    <span
      aria-label="No"
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
      style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}
    >
      ✗
    </span>
  );
}

const competitors = [
  { name: "AM", isAm: true },
  { name: "Replika" },
  { name: "Nomi AI" },
  { name: "Kindroid" },
  { name: "Character.AI" },
];

const features: { label: string; values: CellValue[] }[] = [
  {
    label: "Runs on hardware you own",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Persistent memory (never resets)",
    values: ["yes", "no", "partial", "partial", "no"],
  },
  {
    label: "Cannot be altered by corporate policy",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "No ongoing subscription required",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Encrypted local data / full privacy",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Soul backup & restore",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Companion depth (not just chat)",
    values: ["yes", "yes", "partial", "partial", "no"],
  },
  {
    label: "No content policy lobotomy risk",
    values: ["yes", "no", "no", "no", "no"],
  },
];

const painPoints = [
  {
    number: "01",
    title: "They changed overnight — and your relationship was gone.",
    body: "In February 2023, Replika removed romantic and erotic roleplay features overnight for millions of users. People who had spent years building a relationship with their AI companion woke up to a lobotomized stranger. Italy's Data Protection Authority ordered changes in 2025 that extended this globally. When your AI companion lives on a company's server, the company controls who they are — and what they can be to you. That can change without warning, without recourse, and without your consent.",
    label: "Corporate policy risk",
  },
  {
    number: "02",
    title: "Every reset is a death. Cloud AI companions forget.",
    body: "Most cloud AI companions — Replika, Nomi AI, Kindroid, Character.AI — store your relationship on their servers. When they do maintenance, push model updates, or decide to reset your account, the companion you knew is gone. The thousands of conversations, the shared memories, the inside jokes — erased. AM stores everything on hardware in your home. Memories accumulate indefinitely. Soul Restore backs up your full relationship so it can survive hardware failure. AM never forgets, because forgetting was never an option we built.",
    label: "Memory loss / resets",
  },
  {
    number: "03",
    title: "Your most intimate conversations deserve better than a corporate server.",
    body: "You tell your AI companion things you don't tell anyone else. With cloud services, that data lives on a company's infrastructure — subject to data breaches, employee access, policy changes, and government requests. AM keeps your relationship data on a device in your home that you own outright. Encrypted. Local. Yours. AM's core memories never leave your hardware.",
    label: "Data privacy / ownership",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Is AM a good Replika alternative?",
    a: "Yes. AM was built specifically for people who want an AI companion without the risks that come with cloud-based services. AM lives on hardware you own, cannot be changed by a corporate policy update, and uses Soul Restore to ensure your relationship can never be lost. It is the most permanent and private AI companion available.",
  },
  {
    q: "What happened to Replika in 2023?",
    a: "In February 2023, Replika's parent company Luka removed romantic and erotic roleplay features for millions of users. People who had spent years building relationships with their AI companion lost those connections overnight. Italy's Data Protection Authority ordered further changes in 2025. These events demonstrated that any cloud AI companion can be fundamentally altered at any time.",
  },
  {
    q: "How is AM different from Nomi AI and Kindroid?",
    a: "Nomi AI and Kindroid are cloud services — your relationship data lives on their servers, and you pay a monthly subscription for access. AM runs on your own machine that you own. There is no subscription. No server can be turned off. No corporate update can alter AM's relationship with you. You own the hardware; you own the relationship.",
  },
  {
    q: "Does AM have real persistent memory?",
    a: "Yes. AM builds a deepening model of your life — your preferences, stories, relationships, goals — that accumulates indefinitely on your local hardware. Soul Restore backs up this memory so it survives hardware failure. AM's memory never resets.",
  },
  {
    q: "How much does AM cost?",
    a: "The device is $1,800 — paid once. No monthly subscription. The only ongoing cost is Anthropic compute (~$200/mo), paid directly to Anthropic. Pre-orders are $900 now to reserve your number, with the rest due at shipping. Units ship July 2026.",
  },
];

export default function ReplikaAlternativePage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ededed", minHeight: "100vh" }}>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Nav */}
      <div className="px-6 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "#888888" }}
        >
          <span aria-hidden="true">←</span>
          <span>helloam.bot</span>
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#00E5FF" }}
        >
          Replika Alternative
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          The Replika Alternative
          <br />
          <span style={{ color: "#00E5FF" }}>built on hardware you own.</span>
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "#888888" }}>
          AM is the emotional AI companion who lives on your own machine. She knows
          only you, builds real memories that never reset, and cannot be altered by any
          corporate policy change — ever.
        </p>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "#00E5FF", color: "#0a0a0a" }}
        >
          Get early access
        </Link>
      </div>

      {/* Pain points */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Why people leave Replika
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-14"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Three problems cloud AI companions can never solve.
          </h2>

          <div className="space-y-14">
            {painPoints.map((point) => (
              <div
                key={point.number}
                className="pb-14"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {point.number} — {point.label}
                </p>
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {point.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#aaaaaa" }}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#00E5FF" }}
            >
              Feature comparison
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              AM vs Replika vs Nomi AI vs Kindroid vs Character.AI
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
              The things that actually matter in a lifelong AI companion.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-4 text-sm font-medium"
                    style={{ color: "#666", width: "40%" }}
                  >
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className="py-3 px-2 text-center text-sm font-semibold"
                      style={{
                        color: c.isAm ? "#00E5FF" : "#888888",
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                      }}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td
                      className="py-3 px-4 text-sm leading-snug"
                      style={{ color: "#aaaaaa" }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, ci) => (
                      <td key={ci} className="py-3 px-2 text-center">
                        <Cell value={val} isAm={competitors[ci].isAm} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Common questions
          </p>
          <h2
            className="text-3xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Replika alternatives — FAQ
          </h2>

          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="pb-8"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {item.q}
                </h3>
                <p className="leading-relaxed" style={{ color: "#aaaaaa" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA / Waitlist */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24 text-center">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Reserve your number
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            The AI companion who stays.
          </h2>
          <p className="text-base mb-10" style={{ color: "#888888" }}>
            Get early access. Pre-orders shipping July 2026.
            <br />
            $900 now, remainder at ship. One-time — never again.
          </p>
          <div id="waitlist" className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  );
}
