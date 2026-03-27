export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

import { buildOGImage } from "@/lib/og-image";

export default function Image() {
  return buildOGImage({
    title: "The AI that does the work",
    tagline: "Autonomous digital worker for PMs, developers, and support teams",
  });
}
