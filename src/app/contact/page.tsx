"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HandshakeIllustration from "@/components/HandshakeIllustration";
import ContactCard from "@/components/ContactCard";
import SkillPill from "@/components/SkillPill";
import ContactFooterLinks from "@/components/ContactFooterLinks";
import MobileMenu from "@/components/MobileMenu";

/* ── Skill pills ───────────────────────────── */
const skills: { label: string; width: number }[] = [
  // Research & strategy
  { label: "Research", width: 130 },
  { label: "Discovery", width: 130 },
  { label: "Product Strategy", width: 155 },
  { label: "UX Strategy", width: 140 },
  // Design craft
  { label: "UX Design", width: 130 },
  { label: "UI Design", width: 130 },
  { label: "Interaction Design", width: 170 },
  { label: "Design Systems", width: 150 },
  { label: "Prototyping", width: 130 },
  { label: "Accessibility", width: 140 },
  // Validation
  { label: "Usability Testing", width: 160 },
  { label: "Innovation", width: 130 },
  { label: "Problem Solving", width: 150 },
  { label: "Presentation Docs", width: 160 },
  // AI
  { label: "AI-Assisted Design", width: 175 },
  { label: "AI Prototyping", width: 150 },
  { label: "Prompt Design", width: 145 },
  { label: "LLM Workflows", width: 155 },
  // Product & project management
  { label: "Product Vision", width: 145 },
  { label: "Roadmapping", width: 135 },
  { label: "Backlog Prioritization", width: 195 },
  { label: "Go-to-Market", width: 140 },
  { label: "Cross-functional Leadership", width: 240 },
  { label: "Stakeholder Alignment", width: 200 },
  { label: "Agile Delivery", width: 140 },
  { label: "OKRs & Goal Setting", width: 180 },
  { label: "Workshop Facilitation", width: 200 },
  { label: "Product Analytics", width: 165 },
];

/* ── Contact cards from Figma ─────────────────────────── */
// Desktop grid: using Figma's exact positions, scaled to a 12-column feel
// Row 1: Linkedin (wide ~399/786) + Email (~355/786)
// Row 2: Instagram (~323/786) + Medium (~190/786) + Twitter (~207/786)

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
    <main className="min-h-screen flex flex-col md:flex-row bg-sage">
      {/* ═══════════ LEFT PANEL: Dark sidebar ═══════════ */}
      <aside
        className={`bg-dark text-white flex flex-col px-6 py-6 md:px-10 md:py-10 md:justify-between relative overflow-hidden md:sticky md:top-0 md:h-screen md:w-[38%] md:min-w-[380px] md:max-w-[548px] md:shrink-0 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
      >
        {/* Decorative ellipse behind handshake — desktop only */}
        <div
          aria-hidden
          className="hidden md:block absolute pointer-events-none"
          style={{
            width: "306px",
            height: "398px",
            left: "calc(50% - 20px)",
            top: "35%",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            transform: "rotate(-4.74deg)",
          }}
        />

        {/* Mobile top bar: left-aligned logo + right-aligned hamburger */}
        <div className="flex items-center justify-between md:hidden mb-6 relative z-10">
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

        {/* Top: logo (desktop only) + heading */}
        <div className="relative z-10">
          <span className="hidden md:inline font-display text-logo font-light text-logo-gray tracking-wide uppercase">
            BARBARA.
          </span>
          <h1 className="md:mt-[30px] text-heading-orange font-sans font-medium text-[24px] leading-[110%] md:text-hero-heading max-w-[468px]">
            Let&rsquo;s make magic together
          </h1>
        </div>

        {/* Handshake — flow block on mobile (scaled up with overflow-hidden so hand edges clip),
            absolute positioned on desktop */}
        <div
          aria-hidden
          className="relative z-10 md:hidden h-[260px] -mx-6 mt-6 overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{ transform: "scale(1.35)", transformOrigin: "center" }}
          >
            <HandshakeIllustration />
          </div>
        </div>
        <div
          aria-hidden
          className="hidden md:block pointer-events-none absolute left-0 right-0"
          style={{ top: "35%", bottom: "120px" }}
        >
          <HandshakeIllustration />
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-6 md:mt-0">
          <ContactFooterLinks />
        </div>
      </aside>

      {/* ═══════════ RIGHT PANEL: Sage content ═══════════ */}
      <section
        className={`flex-1 bg-sage relative transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top nav — matches homepage Header exactly */}
        <header className="hidden md:flex items-center justify-end px-[54px] pt-10 pb-0">
          <nav className="flex items-center gap-nav">
            <Link
              href="/"
              className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Content — left-aligned to match homepage rhythm */}
        <div className="px-4 md:px-[54px] pt-6 md:pt-8 pb-10">
          {/* Section heading */}
          <h2 className="text-section-heading font-bold text-dark-text mb-4 md:mb-6">
            What i can do for you
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap gap-4 mb-8 md:mb-10">
            {skills.map((skill) => (
              <SkillPill
                key={skill.label}
                label={skill.label}
                width={skill.width}
              />
            ))}
          </div>

          {/* ─── Contact cards — Figma asymmetric layout, responsive ─── */}
          {/* Desktop: two rows of CSS grids using Figma's proportional widths */}
          <div className="hidden md:flex flex-col gap-4 w-full">
            {/* Row 1: Linkedin (399fr) + Email (355fr) */}
            <div
              className="grid gap-4 w-full"
              style={{ gridTemplateColumns: "399fr 355fr" }}
            >
              <ContactCard
                label="Linkedin"
                href="https://www.linkedin.com/in/barbara-odusola-stevenson/"
                bgColor="#C6592A"
              />
              <ContactCard
                label="Email"
                href="mailto:Barbarastevenson.design@gmail.com"
                bgColor="#217C8D"
              />
            </div>

            {/* Row 2: Instagram (323fr) + Medium (190fr) + Twitter (207fr) */}
            <div
              className="grid gap-4 w-full"
              style={{ gridTemplateColumns: "323fr 190fr 207fr" }}
            >
              <ContactCard
                label="Instagram"
                href="https://www.instagram.com/barbarastevenson_/"
                bgColor="#BA7C27"
                labelPosition="top"
              />
              <ContactCard
                label="Medium"
                href="https://medium.com/@barbara-stevenson"
                bgColor="#73986C"
              />
              <ContactCard
                label="Twitter"
                href="https://x.com/Barbarastevensn"
                bgColor="#C6592A"
              />
            </div>
          </div>

          {/* Mobile stack */}
          <div className="md:hidden flex flex-col gap-4">
            <ContactCard
              label="Linkedin"
              href="https://www.linkedin.com/in/barbara-odusola-stevenson/"
              bgColor="#C6592A"
            />
            <ContactCard
              label="Email"
              href="mailto:Barbarastevenson.design@gmail.com"
              bgColor="#217C8D"
            />
            <ContactCard
              label="Instagram"
              href="https://www.instagram.com/barbarastevenson_/"
              bgColor="#BA7C27"
              labelPosition="top"
            />
            <div className="grid grid-cols-2 gap-4">
              <ContactCard
                label="Medium"
                href="https://medium.com/@barbara-stevenson"
                bgColor="#73986C"
              />
              <ContactCard
                label="Twitter"
                href="https://x.com/Barbarastevensn"
                bgColor="#C6592A"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
