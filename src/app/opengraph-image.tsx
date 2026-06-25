import { ImageResponse } from "next/og";

export const alt = "Barbara Stevenson — Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A1A1A",
          padding: "84px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#9CA79A",
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Barbara Stevenson
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FE9161",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Senior Product Designer
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.72)",
              fontSize: 34,
              marginTop: 24,
            }}
          >
            Fintech · B2B SaaS · Health Tech · Media
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
