"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import AboutSidebar from "@/components/AboutSidebar";
import TestimonialSlider from "@/components/TestimonialSlider";
import type { Testimonial } from "@/components/TestimonialCard";

/* Portraits (one per testimonial) that the sidebar crossfades through.
   Index lines up 1:1 with the `testimonials` array below. */
/* Order per spec: Biyi → B2, Akintayo → B1, Effiong → B3, Bibi → B4 */
const portraits = [
  "/images/B2.png",
  "/images/B1.png",
  "/images/B3.png",
  "/images/B4.png",
];

/* ── Testimonials data (single source of truth, Figma-bound) ── */
const testimonials: Testimonial[] = [
  {
    id: "biyi",
    quote:
      "Barbara is a hardworking and intelligent person who will stop at nothing to achieve her goals. She’s also a good team player who shows empathy towards those around her while ensuring that tasks are completed successfully.",
    name: "Biyi Adetunji",
    role: "Product Designer",
    company: "Booking",
    cardColor: "#C6592A", // orange — B
    quoteBg: "#F5C8B4",
    avatar: "/images/BIYI.png",
  },
  {
    id: "akintayo",
    quote:
      "Barbara played a crucial role in scaling our design team through various phases of rapid organizational growth, adapting seamlessly to changing needs and priorities. She’s an ideal cultural fit for any team aiming to foster close-knit, empathetic relationships. Her unique ability to lead and inspire a team, integrate smoothly into an existing group, and be managed effectively is top tier.",
    name: "Akintayo Olushola",
    role: "Senior Product Designer",
    company: "Interswitch",
    cardColor: "#217C8D", // blue
    quoteBg: "#B7E0E8",
    avatar: "/images/AKINTAYO.png",
  },
  {
    id: "effiong",
    quote:
      "Barbara is very easy to work with. We have discussion before and during implementation of designs so that I can communicate feasibility and constraints early on. It’s a very thoughtful and deliberate way to work and it’s been only good experiences.",
    name: "Effiong Bassey",
    role: "Frontend Developer",
    company: "ARM",
    cardColor: "#709469", // green — F
    quoteBg: "#CAE4C5",
    avatar: "/images/EFFIONG.png",
  },
  {
    id: "bibi",
    quote:
      "We’ve worked on multiple projects together and her deep understanding of users’ behavior and experiences were very valuable and insightful. She’s very good on the job and it was amazing working with her.",
    name: "Bibi Ofuya",
    role: "Product Designer",
    company: "Booking",
    cardColor: "#D68F2D", // yellow — BB
    quoteBg: "#F5DDBC",
    quoteText: "#502310",
    avatar: "/images/BIBI.png",
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleIndexChange = useCallback((i: number) => {
    setActiveTestimonialIndex(i);
  }, []);

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-sage">
      {/* ═══════════ LEFT: Dark profile sidebar ═══════════ */}
      <AboutSidebar
        portraits={portraits}
        activePortraitIndex={activeTestimonialIndex}
        className={`transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
      />

      {/* ═══════════ RIGHT: Sage content panel ═══════════ */}
      <section
        className={`flex-1 bg-sage relative transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top nav — right-aligned, matches the homepage Header */}
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

        {/* Content — same horizontal rhythm as the homepage right panel.
            Sections span the full width of the right panel responsively. */}
        <div className="px-4 md:px-[54px] pt-6 md:pt-8 pb-16 flex flex-col gap-12 md:gap-16">
          {/* ── Testimonials section ───────────────────── */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-section-heading font-bold text-dark-text">
              Take their word for it
            </h2>
            <div className="h-px w-full bg-dark-text/15" />
            <div className="pt-2">
              <TestimonialSlider
                testimonials={testimonials}
                onIndexChange={handleIndexChange}
              />
            </div>
          </div>

          {/* ── When I'm not designing cool stuff ──────── */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-section-heading font-bold text-dark-text">
              When I&rsquo;m not designing cool stuff
            </h2>
            <div className="h-px w-full bg-dark-text/15" />
            <div className="flex flex-col gap-6 font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.55] text-dark-text">
              <p>
                I&rsquo;m a mental health advocate who believes the body and
                the mind move together. You&rsquo;ll find me in the gym most
                mornings, eating clean, and chasing a little better every
                single day&mdash;because a strong body makes for a clearer
                head, and a clearer head makes for better work.
              </p>
              <p>
                Off the mat, I&rsquo;m deep into paranormal books and
                I&rsquo;m the ultimate K-drama and anime fan&mdash;because
                who doesn&rsquo;t love a good plot twist? When I&rsquo;m not
                bugging my friends, of course.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
