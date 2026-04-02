"use client";

import { useLocale } from "@/context/locale-context";
import { getTranslation } from "@/lib/translations";

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
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.2)",
      }}
    >
      ✗
    </span>
  );
}

export default function Comparisons() {
  const { locale } = useLocale();
  const t = getTranslation(locale as "en" | "es" | "zh" | "de");
  const c = t.comparisons;

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
            {c.eyebrow}
          </p>
          <h2
            className="text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {c.headline}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
            {c.subhead}
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
          {/* Mobile scroll wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ minWidth: 560 }}>
              <thead>
                <tr>
                  {/* Tool column header */}
                  <th
                    className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      width: "28%",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    Tool
                  </th>

                  {/* Feature column headers */}
                  {c.columns.map((col) => (
                    <th
                      key={col.key}
                      className="px-3 py-4 text-center text-xs font-semibold"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                        lineHeight: "1.3",
                        maxWidth: 100,
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {c.rows.map((row, i) => {
                  const isAm = "am" in row && row.am === true;
                  const isLast = i === c.rows.length - 1;

                  return (
                    <tr
                      key={row.name}
                      style={{
                        borderTop: i === 0
                          ? "none"
                          : isAm
                          ? "none"
                          : "1px solid rgba(255,255,255,0.04)",
                        background: isAm
                          ? "rgba(0,229,255,0.04)"
                          : "transparent",
                        ...(isLast && !isAm
                          ? { borderBottom: "none" }
                          : {}),
                      }}
                    >
                      {/* Tool name cell */}
                      <td
                        className="px-5 py-3.5"
                        style={{
                          borderLeft: isAm
                            ? "2px solid rgba(0,229,255,0.4)"
                            : "2px solid transparent",
                        }}
                      >
                        <span
                          className="block text-sm font-semibold"
                          style={{
                            color: isAm ? "#00E5FF" : "rgba(255,255,255,0.8)",
                            fontFamily: isAm
                              ? "var(--font-space-grotesk), sans-serif"
                              : "inherit",
                          }}
                        >
                          {row.name}
                        </span>
                        {"note" in row && row.note && (
                          <span
                            className="block text-xs mt-0.5"
                            style={{
                              color: isAm
                                ? "rgba(0,229,255,0.45)"
                                : "rgba(255,255,255,0.25)",
                            }}
                          >
                            {row.note}
                          </span>
                        )}
                      </td>

                      {/* Feature cells */}
                      {c.columns.map((col) => (
                        <td
                          key={col.key}
                          className="px-3 py-3.5 text-center"
                        >
                          <div className="flex items-center justify-center">
                            <Cell
                              value={(row.cells as Record<string, string>)[col.key] as CellValue}
                              isAm={isAm}
                            />
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
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              {c.legend}
            </span>
            {[
              { sym: "✓", label: c.legendYes, color: "#34C759" },
              { sym: "~", label: c.legendPartial, color: "#FF9F0A" },
              { sym: "✗", label: c.legendNo, color: "rgba(255,255,255,0.2)" },
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
          {c.footnote}
        </p>
      </div>
    </section>
  );
}
