import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        {/* Mac Mini body */}
        <div
          style={{
            width: 22,
            height: 10,
            background: "#CC2200",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Apple logo dot */}
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
            }}
          />
        </div>
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 16,
            height: 2,
            background: "rgba(204,34,0,0.5)",
            borderRadius: 1,
            filter: "blur(2px)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
