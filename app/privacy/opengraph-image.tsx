export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

import { buildOGImage } from "@/lib/og-image";

export default function Image() {
  return buildOGImage({
    title: "Your privacy matters",
    tagline: "How we collect, use, and protect your data",
    pageLabel: "Privacy Policy",
  });
}
