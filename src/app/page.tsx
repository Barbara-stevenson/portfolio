"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import CaseStudyCard from "@/components/CaseStudyCard";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  href?: string;
  imagePosition?: string;
}

const caseStudiesByCategory: Record<string, CaseStudy[]> = {
  "Fin Tech": [
    {
      title: "ARM",
      category: "ARM",
      description:
        "Creating an omnichannel experience across investments, securities and pensions products.",
      imageSrc: "/images/ARM ONE 2.png",
      imageAlt: "ARM investment platform showing laptop and mobile app",
      bgColor: "#C6592A",
      href: "/case-studies/arm",
    },
    {
      title: "Bujeti Bills",
      category: "BUJETI",
      description:
        "Providing users with a centralized system for managing and tracking recurring expenses",
      imageSrc: "/images/bujeti bills 1.png",
      imageAlt: "Bujeti expense management dashboard",
      bgColor: "#73986C",
      href: "/case-studies/bujeti-bills",
      imagePosition: "center 30%",
    },
    {
      title: "Bujeti Category",
      category: "BUJETI",
      description: "Enabling better category management of expenses",
      imageSrc: "/images/BUJETIC2.png",
      imageAlt: "Bujeti category management interface",
      bgColor: "#D68F2D",
      href: "/case-studies/bujeti-category",
    },
    {
      title: "Bujeti Onboarding",
      category: "BUJETI",
      description: "Revamping the onboarding experience",
      imageSrc: "/images/BUJETI ONBOARDING 1.png",
      imageAlt: "Bujeti onboarding flow redesign",
      bgColor: "#217C8D",
      href: "/case-studies/bujeti-onboarding",
    },
  ],
  "Health Tech": [
    {
      title: "eMedic",
      category: "EMEDIC",
      description:
        "Improving the market place, admin and customer facing portal of an online pharmacy",
      imageSrc: "/images/EMEDIC 1.png",
      imageAlt: "eMedic healthcare marketplace platform",
      bgColor: "#73986C",
      href: "/case-studies/emedic",
    },
    {
      title: "LifeBank",
      category: "LIFE BANK",
      description:
        "Redesigning the life bank mobile application",
      imageSrc: "/images/LIFE BANK 1.png",
      imageAlt: "LifeBank blood delivery platform",
      bgColor: "#D68F2D",
      href: "/case-studies/life-bank",
    },
  ],
  "Digital Media": [
    {
      title: "Zikoko Website",
      category: "ZIKOKO",
      description:
        "Thinking big - The zikoko experience",
      imageSrc: "/images/ZIKOKO WEBSITE 1.png",
      imageAlt: "Zikoko website redesign",
      bgColor: "#217C8D",
      href: "/case-studies/zikoko",
    },
    {
      title: "Citizen",
      category: "CITIZEN",
      description:
        "A home for policy and governance related content",
      imageSrc: "/images/CITIZEN 1.png",
      imageAlt: "Citizen civic engagement platform",
      bgColor: "#73986C",
      href: "/case-studies/citizen",
    },
    {
      title: "Zikoko Memes",
      category: "ZIKOKO MEMES",
      description:
        "Building the largest repository of memes in Africa",
      imageSrc: "/images/ZIKOKO MEMES 1.png",
      imageAlt: "Zikoko memes platform",
      bgColor: "#C6592A",
      href: "/case-studies/zikoko-memes",
    },
  ],
  "Marketing Sites": [
    {
      title: "BCM Website",
      category: "BIG CABAL MEDIA",
      description:
        "Revamping the website to promote services invested in improving African content and storytelling",
      imageSrc: "/images/BCM WEBSITE 1.png",
      imageAlt: "BCM website redesign",
      bgColor: "#D68F2D",
      href: "/case-studies/bcm",
    },
    {
      title: "Burning Ram",
      category: "BURNING RAM",
      description:
        "Revamping the website to promote services invested in improving African content and storytelling",
      imageSrc: "/images/BURNING RAM 1.png",
      imageAlt: "Burning Ram creative agency website",
      bgColor: "#217C8D",
      href: "/case-studies/burning-ram",
    },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Fin Tech");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const visibleStudies = caseStudiesByCategory[activeCategory] || [];

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* ── Left Panel: Sticky dark sidebar ── */}
      <Sidebar
        className={`transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
      />

      {/* ── Right Panel: Sage content area ── */}
      <section
        className={`flex-1 bg-sage relative transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Sticky wrapper: nav + heading + pills */}
        <div className="md:sticky md:top-0 md:z-20 bg-sage">
          <Header />

          <div className="px-4 md:px-[54px] pt-6 md:pt-8 pb-4 md:pb-6 space-y-4 md:space-y-6">
            <h2 className="text-section-heading font-bold text-dark-text">
              Selected Case Studies
            </h2>
            <CategoryPills
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Scrollable case study cards */}
        <div className="px-4 md:px-[54px] pb-10 space-y-8 md:space-y-10">
          {visibleStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              category={study.category}
              description={study.description}
              imageSrc={study.imageSrc}
              imageAlt={study.imageAlt}
              bgColor={study.bgColor}
              href={study.href}
              imagePosition={study.imagePosition}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
