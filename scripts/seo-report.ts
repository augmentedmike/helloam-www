#!/usr/bin/env npx tsx

import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const SITE_URL = "https://helloam.bot";

interface LighthouseResult {
  categories: Record<string, { title: string; score: number | null }>;
  audits: Record<
    string,
    {
      title: string;
      score: number | null;
      displayValue?: string;
      description?: string;
    }
  >;
}

function runLighthouse(url: string, strategy: "mobile" | "desktop"): LighthouseResult {
  const tmpFile = `/tmp/lh-${strategy}.json`;
  const flags = [
    `--output=json`,
    `--output-path=${tmpFile}`,
    `--only-categories=performance,accessibility,best-practices,seo`,
    `--chrome-flags="--headless --no-sandbox"`,
    strategy === "desktop" ? '--preset=desktop' : '',
    '--quiet',
  ].filter(Boolean).join(" ");

  console.log(`  Running Lighthouse (${strategy})...`);
  execSync(`npx lighthouse "${url}" ${flags}`, {
    stdio: "pipe",
    timeout: 120_000,
  });

  return JSON.parse(readFileSync(tmpFile, "utf-8"));
}

function formatReport(mobile: LighthouseResult, desktop: LighthouseResult): string {
  const now = new Date().toISOString().split("T")[0];

  let report = `# PageSpeed & SEO Report — ${SITE_URL}\n`;
  report += `**Date:** ${now}\n`;
  report += `**Tool:** Lighthouse (local audit)\n\n`;

  // Scores table
  report += `## Lighthouse Scores\n\n`;
  report += `| Category | Mobile | Desktop |\n`;
  report += `| --- | --- | --- |\n`;

  const allCats = new Set([
    ...Object.keys(mobile.categories),
    ...Object.keys(desktop.categories),
  ]);

  for (const key of allCats) {
    const mCat = mobile.categories[key];
    const dCat = desktop.categories[key];
    const title = mCat?.title ?? dCat?.title ?? key;
    const mScore = mCat?.score != null ? Math.round(mCat.score * 100) : "N/A";
    const dScore = dCat?.score != null ? Math.round(dCat.score * 100) : "N/A";
    report += `| ${title} | ${mScore}/100 | ${dScore}/100 |\n`;
  }

  // Core Web Vitals
  const vitalKeys = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
    "interactive",
  ];

  report += `\n## Core Web Vitals\n\n`;
  for (const label of ["Mobile", "Desktop"] as const) {
    const data = label === "Mobile" ? mobile : desktop;
    report += `### ${label}\n`;
    for (const key of vitalKeys) {
      const audit = data.audits[key];
      if (audit) {
        report += `- **${audit.title}:** ${audit.displayValue ?? "N/A"}\n`;
      }
    }
    report += `\n`;
  }

  // SEO audits
  const seoCategory = mobile.categories.seo;
  if (seoCategory) {
    const passed: string[] = [];
    const failed: string[] = [];

    // Check all audits that look SEO-related
    const seoAuditKeys = Object.keys(mobile.audits).filter(
      (k) =>
        mobile.audits[k].score !== null &&
        (k.includes("meta") ||
          k.includes("link") ||
          k.includes("crawl") ||
          k.includes("robot") ||
          k.includes("canonical") ||
          k.includes("hreflang") ||
          k.includes("font-size") ||
          k.includes("tap-target") ||
          k.includes("document-title") ||
          k.includes("http-status") ||
          k.includes("image-alt") ||
          k.includes("structured-data") ||
          k.includes("viewport") ||
          k.includes("is-crawlable"))
    );

    for (const key of seoAuditKeys) {
      const audit = mobile.audits[key];
      if (audit.score === 1) {
        passed.push(audit.title);
      } else {
        const desc = audit.description?.split("[")[0]?.trim() ?? "";
        failed.push(`${audit.title}${desc ? ` — ${desc}` : ""}`);
      }
    }

    report += `## SEO Audit Details\n\n`;
    if (failed.length > 0) {
      report += `### Failed / Needs Work\n`;
      for (const item of failed) report += `- ${item}\n`;
      report += `\n`;
    }
    if (passed.length > 0) {
      report += `### Passed\n`;
      for (const item of passed) report += `- ${item}\n`;
    }
  }

  return report;
}

async function main() {
  console.log(`\nRunning SEO report for ${SITE_URL}\n`);

  const mobile = runLighthouse(SITE_URL, "mobile");
  const desktop = runLighthouse(SITE_URL, "desktop");

  const report = formatReport(mobile, desktop);
  const outPath = `reports/pagespeed-${new Date().toISOString().split("T")[0]}.md`;
  writeFileSync(outPath, report);

  console.log(`\nReport saved to ${outPath}\n`);
  console.log(report);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
