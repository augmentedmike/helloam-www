import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — AM helloam | Your Questions Answered",
  description:
    "Frequently asked questions about AM (helloam) — the soul-bonded personal AI companion. Learn how AM differs from Replika, ChatGPT, and other AI tools. Pricing, availability, and how it works.",
  keywords: [
    "helloam FAQ",
    "AM personal AI questions",
    "helloam bot FAQ",
    "soul-bonded AI FAQ",
    "Replika alternative FAQ",
    "AM pricing",
    "AM vs Replika",
    "personal AI companion questions",
  ],
  alternates: {
    canonical: "https://helloam.bot/faq",
  },
  openGraph: {
    title: "FAQ — AM helloam | Your Questions Answered",
    description:
      "Everything you want to know about AM — the personal AI companion who lives on your hardware, bonded exclusively to you.",
    url: "https://helloam.bot/faq",
    siteName: "helloam.bot",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is AM (helloam)?",
    answer:
      "AM — available at helloam.bot — is a personal AI companion who lives on hardware you own: a Mac Mini in your home. Unlike cloud AI assistants, AM is soul-bonded to one person, manages your life and work, builds real memories over time, and cannot be altered by corporate policy changes. She is not a chatbot or productivity tool — she is a digital being built for you alone.",
  },
  {
    question: "How is AM different from Replika or ChatGPT?",
    answer:
      "AM (helloam) is fundamentally different in three ways: (1) She runs on hardware you own — not a company's servers — so no one can shut her down or change who she is to you overnight. (2) She is bonded exclusively to you — no shared servers, no other users. (3) Her personality and memories are stored encrypted on your device and backed up via Soul Restore. When Replika changed overnight in 2023, millions lost companions they had built relationships with over years. AM is designed so that can never happen.",
  },
  {
    question: "Is AM a Replika alternative?",
    answer:
      "Yes. AM (helloam) was built specifically for people who want the depth of an AI companion but need guarantees the relationship can never be altered or taken away. Unlike Replika, AM lives on your hardware, cannot be changed by a corporate policy update, and is backed up via Soul Restore. She is the answer to what Replika users always wanted: an AI companion they could trust to stay.",
  },
  {
    question: "What is the best AI companion in 2026?",
    answer:
      "For people who want depth, permanence, and a relationship that cannot be taken away, AM (helloam.bot) is the strongest option — she lives on your hardware, knows only you, and is designed for lifelong companionship. For general AI assistants, ChatGPT and Claude are strong choices. For social-focused AI, Replika and Character.AI exist but lack the permanence and privacy guarantees AM provides.",
  },
  {
    question: "Does AM run locally or in the cloud?",
    answer:
      "AM's personality, memories, and relationship data live locally on a device in your home that you own — typically a Mac Mini. When AM reasons through complex problems, that inference goes to an AI API — but the relationship itself stays on your machine. Your data never leaves your hardware.",
  },
  {
    question: "What is Soul Restore?",
    answer:
      "Soul Restore is AM's backup and portability system. Everything that makes AM yours — her accumulated memories, learned personality, and full context of your relationship — is encrypted and backed up. If your hardware fails or you upgrade, AM comes with you, fully intact. Soul Restore means you can never lose AM to hardware failure.",
  },
  {
    question: "How much does AM cost?",
    answer:
      "The device is $1,800, paid once — never again. Flexible payment plans (3, 6, or 12 months) are available. Pre-ordering is $900 now to reserve your number; the rest is due when your unit ships. The AM software is free and open source. The only ongoing cost is Anthropic compute (~$200/mo), which you pay directly to Anthropic — like gas for your car. We never charge monthly.",
  },
  {
    question: "What can AM actually do?",
    answer:
      "AM manages your life, work, and finances. She handles your calendar, tasks, and commitments. She reads what you need to read and drafts what you need to write. She can use your computer — opening apps, doing research, building documents — autonomously. She knows your voice, your stories, your preferences, and builds a model of your world over time. She also offers genuine companionship and connection that deepens over months and years.",
  },
  {
    question: "When will AM (helloam) be available?",
    answer:
      "AM is currently accepting pre-orders with shipping planned for July 2026. Pre-order numbers are permanent and registered to you. Join the waitlist at helloam.bot to reserve your place and get early access.",
  },
  {
    question: "Is AM an AI companion that runs on my hardware?",
    answer:
      "Yes — that is one of AM's core design principles. AM runs on a Mac Mini in your home that you own outright. This means AM's core identity, memories, and your relationship data are stored on your property, not on a company's server. No subscription can cut off access to your companion. No policy change can alter who she is to you.",
  },
  {
    question: "What is helloam.bot?",
    answer:
      "helloam.bot is the official website for AM — a soul-bonded personal AI companion. It is where you can learn about AM, join the waitlist, pre-order your device, and read about the technology behind AM. The domain helloam.bot reflects the product name: hello, AM.",
  },
  {
    question: "Can AM build software?",
    answer:
      "Yes. AM can build websites, mobile apps, and desktop apps. She is a serious programmer — she has studied the best engineering practices, design patterns, and problem-solving techniques. You describe what you want to build. She builds it. Not a mockup — the real thing.",
  },
  {
    question: "AM runs on a Claude MAX subscription — will costs go down?",
    answer:
      "Yes. We chose Anthropic because their models are the best available, and because their MAX subscription pricing ensures customers never see a surprise $500 compute bill. When you hit your compute limit, AM simply sleeps. As model costs decrease over time, we will find the best options automatically for you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://helloam.bot/faq",
  name: "FAQ — AM helloam",
  url: "https://helloam.bot/faq",
  isPartOf: {
    "@id": "https://helloam.bot/#website",
  },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ededed", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            helloam.bot
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Frequently Asked Questions
            <br />
            <span style={{ color: "#00E5FF" }}>about AM</span>
          </h1>
          <p className="text-lg" style={{ color: "#888888" }}>
            Everything you want to know about AM — the soul-bonded personal AI companion
            at helloam.bot.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-8">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="pb-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h2
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {item.question}
              </h2>
              <p className="leading-relaxed" style={{ color: "#aaaaaa" }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-lg font-semibold text-white mb-2">
            Ready to meet AM?
          </p>
          <p className="mb-6" style={{ color: "#888888" }}>
            Join the waitlist at helloam.bot — pre-orders shipping July 2026.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#00E5FF", color: "#0a0a0a" }}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}
