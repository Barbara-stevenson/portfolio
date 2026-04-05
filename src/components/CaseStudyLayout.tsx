"use client";

import Link from "next/link";
import CapsuleButton from "@/components/CapsuleButton";
import { useSlideNav } from "@/components/SlideTransition";

/* ── Types ── */

interface NavCard {
  href: string;
  label: string;
  description: string;
}

interface CaseStudyLayoutProps {
  sidebar: {
    prevHref: string;
    nextHref: string;
    label: string;
    title: string;
    impactItems?: string[];
    impactParagraph?: string;
  };
  bottomNav: {
    prev: NavCard;
    next: NavCard;
  };
  children: React.ReactNode;
}

/* ── Component ── */

export default function CaseStudyLayout({
  sidebar,
  bottomNav,
  children,
}: CaseStudyLayoutProps) {
  const { slideNavigate } = useSlideNav();

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#1A1A1A]">
      {/* ── Left Panel: Sticky sage sidebar ── */}
      <aside className="bg-sage text-dark-text flex flex-col px-6 py-8 md:px-10 md:py-10 md:justify-between relative overflow-hidden md:sticky md:top-0 md:h-screen md:w-[30%] md:min-w-[304px] md:max-w-[438px] md:shrink-0">
        {/* Decorative circles */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "460px",
            height: "460px",
            left: "-140px",
            top: "15%",
            borderRadius: "50%",
            background: "rgba(175,187,173,0.5)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: "360px",
            height: "360px",
            right: "-80px",
            bottom: "10%",
            borderRadius: "50%",
            background: "rgba(175,187,173,0.5)",
          }}
        />

        {/* Top section: Navigation arrows + Label + Title */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div
              role="button"
              tabIndex={0}
              onClick={() => slideNavigate(sidebar.prevHref, "left")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") slideNavigate(sidebar.prevHref, "left"); }}
              className="cursor-pointer"
              aria-label="Previous case study"
            >
              <CapsuleButton direction="left" />
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => slideNavigate(sidebar.nextHref, "right")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") slideNavigate(sidebar.nextHref, "right"); }}
              className="cursor-pointer"
              aria-label="Next case study"
            >
              <CapsuleButton direction="right" />
            </div>
          </div>

          <span className="text-dark-text font-sans text-[14px] md:text-[16px] font-bold tracking-wide uppercase">
            {sidebar.label}
          </span>

          <h1
            className="mt-3 md:mt-4 font-sans font-bold text-[24px] md:text-[32px] leading-[120%] text-dark-text"
            style={{ textWrap: "balance" }}
          >
            {sidebar.title}
          </h1>
        </div>

        {/* Spacer — desktop only */}
        <div className="hidden md:block flex-1" />

        {/* Bottom section: Impact */}
        <div className="relative z-10 mt-6 md:mt-0">
          <h3 className="text-[18px] md:text-[20px] font-medium text-dark-text mb-2">
            Impact
          </h3>

          {sidebar.impactItems && sidebar.impactItems.length > 0 ? (
            <div className="border-t border-dark-text/20 pt-4 space-y-3">
              {sidebar.impactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-dark-text/40 shrink-0 mt-[10px]" />
                  <span className="text-[16px] md:text-[20px] leading-[140%] text-dark-text">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ) : sidebar.impactParagraph ? (
            <div className="border-t border-dark-text/20 pt-4">
              <p className="text-[16px] md:text-[20px] leading-[140%] text-dark-text">
                {sidebar.impactParagraph}
              </p>
            </div>
          ) : null}
        </div>
      </aside>

      {/* ── Right Panel: Dark scrollable content ── */}
      <section className="flex-1 bg-[#1A1A1A] min-h-screen">
        {/* Header nav — desktop only */}
        <header className="hidden md:flex items-center justify-end px-[54px] pt-10 pb-4 sticky top-0 z-20 bg-[#1A1A1A]">
          <nav className="flex items-center gap-nav">
            <Link
              href="/"
              className="text-nav font-medium text-white/80 hover:text-heading-orange transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-nav font-medium text-white/80 hover:text-heading-orange transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-nav font-medium text-white/80 hover:text-heading-orange transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Content */}
        <div className="px-4 md:px-[54px] pt-6 md:pt-12 pb-0">
          {children}

          {/* ── Bottom Navigation Cards ── */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Previous */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => slideNavigate(bottomNav.prev.href, "left")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") slideNavigate(bottomNav.prev.href, "left"); }}
              className="bg-[#2E2E2E] rounded-[16px] p-6 md:p-8 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200 text-left cursor-pointer"
            >
              <div className="mb-3 md:mb-4">
                <CapsuleButton direction="left" />
              </div>
              <span className="text-[#F4F4F4] font-sans text-[14px] md:text-[16px] font-bold tracking-wide uppercase block mb-2">
                {bottomNav.prev.label}
              </span>
              <span className="text-[#F4F4F4] text-[18px] md:text-[22px] leading-[140%]">
                {bottomNav.prev.description}
              </span>
            </div>

            {/* Next */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => slideNavigate(bottomNav.next.href, "right")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") slideNavigate(bottomNav.next.href, "right"); }}
              className="bg-[#2E2E2E] rounded-[16px] p-6 md:p-8 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200 text-left cursor-pointer"
            >
              <div className="mb-3 md:mb-4 flex justify-end">
                <CapsuleButton direction="right" />
              </div>
              <span className="text-[#F4F4F4] font-sans text-[14px] md:text-[16px] font-bold tracking-wide uppercase block mb-2">
                {bottomNav.next.label}
              </span>
              <span className="text-[#F4F4F4] text-[18px] md:text-[22px] leading-[140%] block">
                {bottomNav.next.description}
              </span>
            </div>
          </section>
        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-white/10 px-4 md:px-[54px] py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
              >
                Linkedin
              </a>
              <a
                href="https://medium.com"
                className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
              >
                Medium
              </a>
            </nav>
            <a
              href="mailto:Barbarastevenson.design@gmail.com"
              className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
            >
              Barbarastevenson.design@gmail.com
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
