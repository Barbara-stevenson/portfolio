"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Premium handshake animation.
 *
 * Phase 1 (entry, 0–0.8s): The separate "left hand" and "Right hand"
 * PNGs slide in from opposite sides of the frame and meet in the middle.
 * No clip-paths — these are the actual individual hand assets, so there
 * is no seam.
 *
 * Phase 2 (settled, 0.85s+): The two separate hands crossfade into the
 * single combined "hands shaking.png" and a subtle translate + rotate
 * loop plays on that one continuous image.
 */
export default function HandshakeIllustration() {
  const [entered, setEntered] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    const t = setTimeout(() => setSettled(true), 520);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  const ENTRY_TRANSITION =
    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      aria-hidden
      className="relative w-full h-full pointer-events-none select-none"
    >
      {/* Wider stage so forearms sit off-screen */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: "-18%", right: "-18%" }}
      >
        {/* Shared wrapper — runs the bob loop once settled */}
        <div
          className={`absolute inset-0 ${settled ? "handshake-bob" : ""}`}
          style={{ transformOrigin: "50% 55%" }}
        >
          {/* SETTLED: single combined image, fades in when hands meet */}
          <div
            className="absolute inset-0"
            style={{
              opacity: settled ? 1 : 0,
              zIndex: 3,
            }}
          >
            <Image
              src="/images/hands shaking.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          {/* ENTRY — LEFT hand (separate asset, sized to match its area in the combined image) */}
          <div
            className="absolute top-0 bottom-0 left-0 will-change-transform"
            style={{
              width: "62%",
              transform: entered
                ? "translateX(0) rotate(0deg)"
                : "translateX(-140%) rotate(-12deg)",
              transformOrigin: "right center",
              transition: ENTRY_TRANSITION,
              opacity: settled ? 0 : 1,
              zIndex: 1,
            }}
          >
            <Image
              src="/images/left hand.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 60vw, 450px"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          {/* ENTRY — RIGHT hand (separate asset, sized to match its area in the combined image) */}
          <div
            className="absolute top-0 bottom-0 right-0 will-change-transform"
            style={{
              width: "62%",
              transform: entered
                ? "translateX(0) rotate(0deg)"
                : "translateX(140%) rotate(12deg)",
              transformOrigin: "left center",
              transition: ENTRY_TRANSITION,
              opacity: settled ? 0 : 1,
              zIndex: 2,
            }}
          >
            <Image
              src="/images/Right hand.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 60vw, 450px"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Subtle handshake loop — translate + rotate only, no scale */
        @keyframes handshake-bob {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(1px, -5px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 3px) rotate(-1deg);
          }
          75% {
            transform: translate(0, -3px) rotate(0.5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        .handshake-bob {
          animation: handshake-bob 2.8s ease-in-out 0.1s infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .handshake-bob {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
