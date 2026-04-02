export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

import { buildOGImage } from "@/lib/og-image";

export default function Image() {
  return buildOGImage({
    title: "Get started",
    tagline: "Free, open-source AI digital worker for Mac, Windows, and Linux",
    pageLabel: "Get Started",
  });
}
