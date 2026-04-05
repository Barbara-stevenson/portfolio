"use client";

import Image from "next/image";
import Link from "next/link";
import CapsuleButton from "@/components/CapsuleButton";

interface AboutSidebarProps {
  className?: string;
  /** Ordered list of portrait sources to crossfade between (e.g. B1-B4). */
  portraits?: string[];
  /** Index of the portrait currently visible. */
  activePortraitIndex?: number;
}

/**
 * About page dark profile sidebar — mirrors the home page Sidebar's
 * layout system and footer treatment but uses the About-specific
 * content and portrait illustration(s).
 *
 * When multiple `portraits` are provided they are stacked and
 * crossfaded based on `activePortraitIndex`, so the sidebar stays
 * in sync with the active testimonial.
 */
export default function AboutSidebar({
  className = "",
  portraits = ["/images/B1.png"],
  activePortraitIndex = 0,
}: AboutSidebarProps) {
  return (
    <aside
      className={`bg-dark text-white flex flex-col px-6 py-6 md:px-10 md:py-10 md:justify-between relative overflow-hidden md:sticky md:top-0 md:h-screen md:w-[38%] md:min-w-[380px] md:max-w-[548px] md:shrink-0 ${className}`}
    >
      {/* Top: logo + intro paragraph */}
      <div className="relative z-10 flex flex-col gap-[30px]">
        <span className="font-display text-logo font-light text-logo-gray tracking-wide uppercase">
          BARBARA.
        </span>

        <p className="text-body-copper text-[16px] leading-[120%] md:text-body max-w-[485px]">
          I design high-quality, accessible experiences that move people and
          move businesses forward. A background in medicine shaped how I
          work&mdash;with rigor, empathy, and a deep respect for the humans on
          the other side of every screen.
        </p>
      </div>

      {/* Portrait — centered, with subtle ellipse glow behind.
          Multiple portraits are stacked and crossfaded. */}
      <div className="relative z-10 my-10 md:my-0 md:flex-1 md:flex md:items-center md:justify-center">
        <div className="relative w-[240px] h-[300px] md:w-[296px] md:h-[380px]">
          {/* Subtle rotated ellipse background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 55%, transparent 75%)",
              transform: "rotate(-4.53deg)",
              borderRadius: "50%",
            }}
          />
          {portraits.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0"
              style={{
                opacity: i === activePortraitIndex ? 1 : 0,
                transition: "opacity 520ms ease-out",
              }}
              aria-hidden={i !== activePortraitIndex}
            >
              <Image
                src={src}
                alt={
                  i === 0
                    ? "Illustrated portrait of Barbara"
                    : ""
                }
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 240px, 296px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lower: secondary paragraph + CTA */}
      <div className="relative z-10 space-y-6">
        <p className="text-body-copper text-[16px] leading-[120%] md:text-body max-w-[452px]">
          With a keen sense for simplifying complexities, I merge user and
          business needs to deliver successful outcomes.
        </p>

        <Link href="/contact" className="inline-block">
          <CapsuleButton direction="right">Work with me</CapsuleButton>
        </Link>

        {/* Footer — identical treatment to the home page sidebar footer */}
        <div className="hidden md:block border-t border-white/10 pt-6">
          <nav className="flex items-center justify-between">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
            >
              Linkedin
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
            >
              Medium
            </a>
            <a
              href="mailto:Barbarastevenson.design@gmail.com"
              className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
            >
              Barbarastevenson.design@gmail.com
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
}
