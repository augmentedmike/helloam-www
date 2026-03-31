"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100];

export function useScrollDepth(): void {
  useEffect(() => {
    const fired = new Set<number>();

    function checkDepth() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      if (total === 0) return;
      const pct = (scrolled / total) * 100;
      for (const milestone of MILESTONES) {
        if (!fired.has(milestone) && pct >= milestone) {
          fired.add(milestone);
          track("scroll_depth", { depth: milestone });
        }
      }
    }

    window.addEventListener("scroll", checkDepth, { passive: true });
    checkDepth(); // check on mount in case page is short
    return () => window.removeEventListener("scroll", checkDepth);
  }, []);
}
