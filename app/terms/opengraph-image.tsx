export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

import { buildOGImage } from "@/lib/og-image";

export default function Image() {
  return buildOGImage({
    title: "Terms of service",
    tagline: "The terms governing your use of helloam.bot",
    pageLabel: "Terms of Service",
  });
}
