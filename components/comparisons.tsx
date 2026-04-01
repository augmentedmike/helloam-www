"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

// Comparison matrix — structural data, not translated
type CellValue = "yes" | "partial" | "no" | string;

interface Competitor {
  name: string;
  note?: string;
}

interface Row {
  label: string;
  sublabel?: string;
  am: CellValue;
  devin: CellValue;
  fin: CellValue;
  copilot: CellValue;
  zapier: CellValue;
  notion: CellValue;
}

const COMPETITORS: Competitor[] = [
  { name: "Devin", note: "Cognition" },
  { name: "Fin", note: "Intercom" },
  { name: "Copilot", note: "Microsoft 365" },
  { name: "Zapier AI" },
  { name: "Notion AI" },
];

const ROWS: Row[] = [
  {
    label: "Engineering work",
    sublabel: "Code, PRs, bug fixes",
    am: "yes",
    devin: "yes",
    fin: "no",
    copilot: "partial",
    zapier: "partial",
    notion: "no",
  },
  {
    label: "Customer support",
    sublabel: "Tickets, escalation, resolution",
    am: "yes",
    devin: "no",
    fin: "yes",
    copilot: "partial",
    zapier: "partial",
    notion: "no",
  },
  {
    label: "Project management",
    sublabel: "Sprint grooming, backlogs, PRDs",
    am: "yes",
    devin: "no",
    fin: "no",
    copilot: "partial",
    zapier: "partial",
    notion: "partial",
  },
  {
    label: "Sales & marketing",
    sublabel: "Outreach, content, follow-ups",
    am: "yes",
    devin: "no",
    fin: "no",
    copilot: "partial",
    zapier: "partial",
    notion: "partial",
  },
  {
    label: "Persistent memory",
    sublabel: "Context that carries across tasks",
    am: "yes",
    devin: "partial",
    fin: "no",
    copilot: "partial",
    zapier: "no",
    notion: "no",
  },
  {
    label: "Owns outcomes",
    sublabel: "Does the work, not just assists",
    am: "yes",
    devin: "partial",
    fin: "partial",
    copilot: "no",
    zapier: "no",
    notion: "no",
  },
  {
    label: "Ecosystem agnostic",
    sublabel: "Works with tools you already use",
    am: "yes",
    devin: "partial",
    fin: "no",
    copilot: "partial",
    zapier: "yes",
    notion: "no",
  },
  {
    label: "Starting price",
    am: "Pilot",
    devin: "$20 / mo",
    fin: "$0.99 / outcome",
    copilot: "$18 / user",
    zapier: "Free",
    notion: "$10 / user",
  },
];

function Cell({ value, isAm }: { value: CellValue; isAm?: boolean }) {
  const isPriceRow =
    value !== "yes" && value !== "partial" && value !== "no";

  if (isPriceRow) {
    return (
      <span
        className="text-sm font-semibold tabular-nums"
        style={{ color: isAm ? "#00E5FF" : "rgba(255,255,255,0.55)" }}
      >
        {value}
      </span>
    );
  }

  if (value === "yes") {
    return (
      <span
        aria-label="Yes"
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-base font-bold"
        style={{
          background: isAm ? "rgba(0,229,255,0.12)" : "rgba(52,199,89,0.12)",
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
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-base font-bold"
        style={{
          background: "rgba(255,159,10,0.10)",
          color: "#FF9F0A",
        }}
      >
        ~
      </span>
    );
  }

  return (
    <span
      aria-label="No"
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold"
      style={{
        background: "rgba(255,69,58,0.08)",
        color: "rgba(255,255,255,0.2)",
      }}
    >
      ✗
    </span>
  );
}

export default function Comparisons() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh");

  return (
    <section
      className="px-4 py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#00E5FF" }}
          >
            {t.comparisons.eyebrow}
          </p>
          <h2
            className="text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {t.comparisons.headline}
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "#666" }}
          >
            {t.comparisons.subhead}
          </p>
        </div>

        {/* Chart */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Overflow wrapper for mobile scroll */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              {/* Column headers */}
              <thead>
                <tr>
                  {/* Row label column */}
                  <th
                    className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      width: "30%",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    Capability
                  </th>

                  {/* AM — highlighted */}
                  <th
                    className="px-4 py-4 text-center"
                    style={{
                      borderBottom: "1px solid rgba(0,229,255,0.2)",
                      background: "rgba(0,229,255,0.04)",
                      borderLeft: "1px solid rgba(0,229,255,0.12)",
                      borderRight: "1px solid rgba(0,229,255,0.12)",
                    }}
                  >
                    <span
                      className="block text-sm font-bold tracking-wide"
                      style={{
                        color: "#00E5FF",
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                      }}
                    >
                      AM
                    </span>
                    <span
                      className="block text-xs mt-0.5"
                      style={{ color: "rgba(0,229,255,0.5)" }}
                    >
                      helloam.bot
                    </span>
                  </th>

                  {/* Competitor columns */}
                  {COMPETITORS.map((c) => (
                    <th
                      key={c.name}
                      className="px-4 py-4 text-center"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="block text-sm font-semibold"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {c.name}
                      </span>
                      {c.note && (
                        <span
                          className="block text-xs mt-0.5"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          {c.note}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row, i) => {
                  const isPriceRow = i === ROWS.length - 1;
                  return (
                    <tr
                      key={row.label}
                      style={{
                        borderTop: isPriceRow
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid rgba(255,255,255,0.04)",
                        background: isPriceRow
                          ? "rgba(255,255,255,0.015)"
                          : "transparent",
                      }}
                    >
                      {/* Capability label */}
                      <td className="px-5 py-4">
                        <span
                          className="block text-sm font-semibold text-white"
                          style={{
                            fontFamily:
                              "var(--font-space-grotesk), sans-serif",
                          }}
                        >
                          {row.label}
                        </span>
                        {row.sublabel && (
                          <span
                            className="block text-xs mt-0.5"
                            style={{ color: "rgba(255,255,255,0.3)" }}
                          >
                            {row.sublabel}
                          </span>
                        )}
                      </td>

                      {/* AM cell — highlighted column */}
                      <td
                        className="px-4 py-4 text-center"
                        style={{
                          background: "rgba(0,229,255,0.04)",
                          borderLeft: "1px solid rgba(0,229,255,0.10)",
                          borderRight: "1px solid rgba(0,229,255,0.10)",
                        }}
                      >
                        <div className="flex items-center justify-center">
                          <Cell value={row.am} isAm />
                        </div>
                      </td>

                      {/* Competitor cells */}
                      {(
                        ["devin", "fin", "copilot", "zapier", "notion"] as const
                      ).map((key) => (
                        <td key={key} className="px-4 py-4 text-center">
                          <div className="flex items-center justify-center">
                            <Cell value={row[key]} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div
            className="flex items-center gap-5 px-5 py-3 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {t.comparisons.legend ?? "Key:"}
            </span>
            {[
              { sym: "✓", label: t.comparisons.legendYes ?? "Full support", color: "#34C759" },
              { sym: "~", label: t.comparisons.legendPartial ?? "Partial", color: "#FF9F0A" },
              { sym: "✗", label: t.comparisons.legendNo ?? "Not supported", color: "rgba(255,255,255,0.2)" },
            ].map(({ sym, label, color }) => (
              <span
                key={sym}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                <span style={{ color }} className="font-bold">
                  {sym}
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p
          className="text-center text-xs mt-5"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          {t.comparisons.footnote ??
            "Based on published features and pricing as of Q1 2026. Partial (˜) indicates limited or tool-specific coverage."}
        </p>
      </div>
    </section>
  );
}
