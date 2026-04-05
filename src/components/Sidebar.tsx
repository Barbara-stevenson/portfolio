"use client";

import { useState } from "react";
import CapsuleButton from "@/components/CapsuleButton";
import MobileMenu from "@/components/MobileMenu";

export default function Sidebar({ className = "" }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside
        className={`sidebar bg-dark text-white flex flex-col px-6 py-6 md:px-10 md:py-10 md:justify-between relative overflow-hidden md:sticky md:top-0 md:h-screen md:w-[38%] md:min-w-[380px] md:max-w-[548px] md:shrink-0 ${className}`}
      >
        {/* Decorative circle */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "460px",
            height: "460px",
            right: "-140px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            background: "#2a2a2a",
          }}
        />

        {/* Top section: Logo + Headline */}
        <div className="relative z-10">
          {/* Mobile: left-aligned logo + right-aligned hamburger */}
          <div className="flex items-center justify-between md:hidden mb-6">
            <span className="font-display text-logo font-light text-logo-gray tracking-wide uppercase">
              BARBARA.
            </span>
            <button
              aria-label="Open menu"
              className="p-3 -mr-3"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                <path
                  d="M0 1h24M0 7h24M0 13h24"
                  stroke="#A0A1A1"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop: just logo */}
          <div className="hidden md:block">
            <span className="font-display text-logo font-light text-logo-gray tracking-wide uppercase">
              BARBARA.
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 md:mt-[30px] text-heading-orange font-sans font-medium text-[24px] leading-[110%] md:text-hero-heading">
            I&rsquo;m Barbara. I design products that simplify the complex
            and deliver real business results.
          </h1>
        </div>

        {/* Spacer — only on desktop to push bottom content down */}
        <div className="hidden md:block flex-1" />

        {/* Bottom section: Body + CTA + Social */}
        <div className="relative z-10 space-y-6 mt-8 md:mt-0">
          <p className="text-body-copper text-[16px] leading-[120%] md:text-body">
            I&rsquo;ve spent years at the intersection of user needs and
            business strategy, shipping products in fintech, health tech,
            and beyond.
          </p>

          <a
            href="mailto:Barbarastevenson.design@gmail.com"
            className="inline-block"
          >
            <CapsuleButton direction="right">Work with me</CapsuleButton>
          </a>

          {/* Social links — desktop only (mobile has them in the menu overlay) */}
          <div className="hidden md:block border-t border-white/10 pt-6">
            <nav className="flex items-center justify-between">
              <a
                href="https://www.linkedin.com/in/barbara-odusola-stevenson/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
              >
                Linkedin
              </a>
              <a
                href="https://medium.com/@barbara-stevenson"
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

      {/* Mobile menu overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
