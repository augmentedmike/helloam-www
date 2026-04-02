"use client";

import { track } from "@/lib/analytics";

export default function WaitlistForm() {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href="https://github.com/augmentedmike/am-agi"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_click", { label: "get_started_github", location: "cta" })}
        className="inline-flex items-center gap-3 py-4 px-10 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-100"
        style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 40px rgba(0,229,255,0.20)" }}
      >
        Get Started Free on GitHub
      </a>
      <p className="text-center text-xs font-mono" style={{ color: "#555555" }}>
        curl -fsSL https://raw.githubusercontent.com/augmentedmike/am-agi/main/install.sh | bash
      </p>
    </div>
  );
}
