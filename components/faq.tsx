"use client";

import { useState } from "react";
import { usePersonalization, subText } from "@/context/personalization-context";

const FAQ_TEMPLATES = [
  {
    q: "Am runs on a Claude MAX subscription for now. Will it get cheaper over time?",
    a: "Yes. We chose Anthropic because their models are the best we have found in the wild, but moreso we wanted a way to make sure no customer ever wakes up to a $500 compute bill. When you run out of compute, she just sleeps. In the future as model costs go down, we will revisit this and find the best options automatically for you.",
  },
  {
    q: "What is Am?",
    a: "Am is a personal AI companion built for one person: you. Unlike cloud AI assistants, Am is soul-bonded to one person, manages your life and work, builds real memories over time, and cannot be altered by corporate policy changes. {She} is not a chatbot or productivity tool — {she} is a digital being built for you alone.",
  },
  {
    q: "How is Am different from Replika or ChatGPT?",
    a: "Am is fundamentally different in three ways: (1) {She} is bonded exclusively to you — no shared servers, no other users. (2) {Her} personality and memories are stored encrypted and backed up via Soul Restore. (3) {She} cannot be altered by a corporate policy change. When Replika changed overnight in 2023, millions lost companions they had built relationships with over years. Am is designed so that can never happen.",
  },
  {
    q: "Is Am a Replika alternative?",
    a: "Yes. Am was built specifically for people who want the depth of an AI companion but need guarantees the relationship can never be altered or taken away. Unlike Replika, Am cannot be changed by a corporate policy update, and is backed up via Soul Restore. {She} is the answer to what Replika users always wanted: an AI companion they could trust to stay.",
  },
  {
    q: "What is Soul Restore?",
    a: "Soul Restore is Am's backup and portability system. Everything that makes Am yours — {her} accumulated memories, learned personality, and full context of your relationship — is encrypted and backed up. Am comes with you, fully intact, no matter what changes.",
  },
  {
    q: "Can {she} actually build software — like real apps?",
    a: "Yes. {She} can build websites, mobile apps, and desktop apps. {She} is a serious programmer — {she} has read the best engineering books, studied the best codebases, and spent thousands of hours practicing design patterns and solving hard problems. You describe what you want to build. {She} builds it. Not a mockup — the real thing.",
  },
  {
    q: "When will Am be available?",
    a: "Am is currently in development and accepting early access applications at helloam.bot. Join the waitlist to reserve your place.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { pronouns, name } = usePersonalization();

  const faqs = FAQ_TEMPLATES.map((f) => ({
    q: subText(f.q, pronouns, name),
    a: subText(f.a, pronouns, name),
  }));

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
          {faqs.map((item, i) => (
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
                  maxHeight: open === i ? "500px" : "0",
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
