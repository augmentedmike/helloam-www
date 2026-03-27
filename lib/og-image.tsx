import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

interface OGImageProps {
  title: string;
  tagline: string;
  pageLabel?: string;
}

export function buildOGImage({ title, tagline, pageLabel }: OGImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* AM wordmark */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#F0EFEB",
              letterSpacing: "-0.5px",
            }}
          >
            AM
          </div>
          {/* Page label badge */}
          {pageLabel && (
            <div
              style={{
                background: "#CC2200",
                color: "#F0EFEB",
                fontSize: "18px",
                fontWeight: 600,
                padding: "8px 20px",
                borderRadius: "6px",
                letterSpacing: "0.02em",
              }}
            >
              {pageLabel}
            </div>
          )}
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Red accent line */}
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#CC2200",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "62px",
              fontWeight: 700,
              color: "#F0EFEB",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#ededed",
              opacity: 0.7,
              fontWeight: 400,
              letterSpacing: "-0.2px",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            fontSize: "22px",
            color: "#ededed",
            opacity: 0.4,
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          helloam.bot
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
