"use client";

import { useState, useEffect, useRef } from "react";
import ScreenshotGallery from "@/components/screenshot-gallery";

// ─── Types ────────────────────────────────────────────────────────────────────

type StepStatus = "pending" | "running" | "done";

interface TerminalStep {
  label: string;
  detail?: string;
}

interface Persona {
  id: string;
  label: string;
  accent: string;
  task: string;
  steps: TerminalStep[];
}

// ─── Scenario Data ────────────────────────────────────────────────────────────

const PERSONAS: Persona[] = [
  {
    id: "pm",
    label: "For PMs",
    accent: "#00E5FF",
    task: "Backlog triage — sprint planning for Q2",
    steps: [
      { label: "Pulling backlog from Linear", detail: "47 open tickets across 6 epics" },
      { label: "Scoring tickets by impact × effort", detail: "Running priority model against sprint velocity" },
      { label: "Grouping into sprint candidates", detail: "18 tickets → 3 must-haves, 9 nice-to-haves, 6 defer" },
      { label: "Drafting sprint brief", detail: "Goals, capacity, risks, acceptance criteria" },
      { label: "Posting to Slack + Linear", detail: "#product-team notified, sprint created" },
    ],
  },
  {
    id: "dev",
    label: "For Developers",
    accent: "#4A90D9",
    task: "Ticket → PR — implement rate limiting on /api/export",
    steps: [
      { label: "Reading ticket and linked context", detail: "Linear TKT-2847: add rate limit, 100 req/min per user" },
      { label: "Locating relevant code", detail: "Found app/api/export/route.ts, middleware/auth.ts" },
      { label: "Implementing token-bucket rate limiter", detail: "Redis-backed, per-user key, sliding window" },
      { label: "Writing tests", detail: "6 unit tests, 2 integration tests — all passing" },
      { label: "Opening pull request", detail: "PR #1204 ready for review — linked to ticket" },
    ],
  },
  {
    id: "support",
    label: "For Support",
    accent: "#F5A623",
    task: "Support ticket — user can't export data to CSV",
    steps: [
      { label: "Reading ticket and user history", detail: "Ticket #8821 — user on Pro plan, 3 prior contacts" },
      { label: "Reproducing the issue", detail: "Export fails silently for datasets > 50k rows" },
      { label: "Finding root cause", detail: "Stream timeout at 30s — hits before large exports complete" },
      { label: "Applying fix and verifying", detail: "Bumped timeout to 120s, tested with 200k row export" },
      { label: "Responding to user + updating KB", detail: "Resolution sent, knowledge base article updated" },
    ],
  },
];

// ─── Spinner ──────────────────────────────────────────────────────────────────

function SpinnerIcon({ color }: { color: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ display: "inline-block", animation: "am-spin 0.8s linear infinite" }}
    >
      <circle
        cx="7"
        cy="7"
        r="5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="22 8"
      />
      <style>{`@keyframes am-spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}

// ─── Terminal Animation ───────────────────────────────────────────────────────

function TerminalAnimation({ persona }: { persona: Persona }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [statuses, setStatuses] = useState<StepStatus[]>(
    persona.steps.map(() => "pending")
  );
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset when persona changes
  useEffect(() => {
    setStepIndex(0);
    setStatuses(persona.steps.map(() => "pending"));
    setDone(false);
  }, [persona.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Advance steps
  useEffect(() => {
    if (done) return;

    const total = persona.steps.length;

    setStatuses((prev) => {
      const next = [...prev];
      next[stepIndex] = "running";
      return next;
    });

    timerRef.current = setTimeout(() => {
      setStatuses((prev) => {
        const next = [...prev];
        next[stepIndex] = "done";
        return next;
      });

      if (stepIndex + 1 < total) {
        setStepIndex((i) => i + 1);
      } else {
        setDone(true);
      }
    }, 1200 + Math.random() * 500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stepIndex, done, persona.id]); // eslint-disable-line react-hooks/exhaustive-deps

  function restart() {
    setStepIndex(0);
    setStatuses(persona.steps.map(() => "pending"));
    setDone(false);
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "rgba(255,255,255,0.035)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-4 text-xs font-mono truncate" style={{ color: "#555" }}>
          am · {persona.task}
        </span>
      </div>

      {/* Output */}
      <div className="px-5 py-5 space-y-3 font-mono text-sm min-h-[300px]">
        <div className="mb-4 text-xs select-none" style={{ color: "#444" }}>
          $ am run --task &quot;{persona.task}&quot;
        </div>

        {persona.steps.map((step, i) => {
          const status = statuses[i];
          return (
            <div
              key={i}
              className="flex items-start gap-3"
              style={{
                opacity: status === "pending" ? 0.22 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <span className="mt-0.5 w-4 flex-shrink-0 text-center leading-none">
                {status === "pending" && <span style={{ color: "#333" }}>·</span>}
                {status === "running" && <SpinnerIcon color={persona.accent} />}
                {status === "done" && <span style={{ color: "#22c55e" }}>✓</span>}
              </span>

              <div className="flex-1 min-w-0">
                <span
                  style={{
                    color:
                      status === "done"
                        ? "#bbb"
                        : status === "running"
                        ? persona.accent
                        : "#444",
                  }}
                >
                  {step.label}
                </span>
                {step.detail && status !== "pending" && (
                  <div
                    className="text-xs mt-0.5 font-mono"
                    style={{ color: "#555" }}
                  >
                    {step.detail}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {done && (
          <div
            className="mt-5 pt-4 flex items-center gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span style={{ color: "#22c55e" }}>✓</span>
            <span style={{ color: "#22c55e" }}>Task complete.</span>
            <button
              onClick={restart}
              className="ml-auto text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-70"
              style={{
                color: persona.accent,
                border: `1px solid ${persona.accent}44`,
                background: `${persona.accent}0a`,
              }}
            >
              Run again ↺
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function DemoClient({
  videoId,
}: {
  videoId?: string;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const persona = PERSONAS[activeTab];

  return (
    <>
      {/* ── Persona tabs + terminal ── */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {PERSONAS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all"
              style={
                activeTab === i
                  ? {
                      background: p.accent + "1a",
                      color: p.accent,
                      border: `1px solid ${p.accent}55`,
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "#666",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Terminal */}
        <TerminalAnimation key={persona.id} persona={persona} />

        <p className="mt-4 text-center text-sm" style={{ color: "#444" }}>
          Scenario:{" "}
          <span style={{ color: "#666" }}>{persona.task}</span>
        </p>
      </section>

      {/* ── Video embed ── */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-center"
          style={{ color: "#00E5FF" }}
        >
          Full walkthrough
        </p>
        <h2
          className="font-bold text-center mb-12"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)" }}
        >
          End-to-end in 3 minutes
        </h2>

        {videoId ? (
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              aspectRatio: "16/9",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Am demo walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "block", width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <div
            className="rounded-2xl flex flex-col items-center justify-center gap-4 py-20 px-8 text-center"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.025)",
              aspectRatio: "16/9",
            }}
          >
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M10 8l12 6-12 6V8z" fill="#00E5FF" />
              </svg>
            </div>
            <p className="font-semibold text-white">Video coming soon</p>
            <p
              className="text-sm max-w-xs"
              style={{ color: "#555", lineHeight: 1.6 }}
            >
              We&apos;re editing the full walkthrough. Drop your email below and
              we&apos;ll send it the moment it&apos;s live.
            </p>
          </div>
        )}
      </section>

      {/* ── Screenshot Gallery ── */}
      <ScreenshotGallery />

      {/* ── CTA ── */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <div
          className="rounded-2xl px-8 py-14"
          style={{
            background: "rgba(0,229,255,0.03)",
            border: "1px solid rgba(0,229,255,0.12)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            Ready to try Am?
          </p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)" }}
          >
            Put Am to work on your team
          </h2>
          <p
            className="text-base mb-10 max-w-md mx-auto"
            style={{ color: "#777", lineHeight: 1.7 }}
          >
            Join teams already using Am to ship faster, triage smarter, and stop
            letting work fall through the cracks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/augmentedmike/am-agi"
              className="rounded-xl px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#00E5FF", color: "#000" }}
            >
              Get early access
            </a>
            <a
              href="/contact"
              className="rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-white"
              style={{
                color: "#aaa",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Request a live demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
