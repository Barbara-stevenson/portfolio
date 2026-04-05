"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function ARMCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/burning-ram",
        nextHref: "/case-studies/bujeti-bills",
        label: "ARM",
        title: "Creating an omnichannel experience \u2014 Do more with the power of ONE.",
        impactItems: [
          "12% lift in cross-product adoption",
          "50%+ growth in new user acquisition",
          "4.5 star Play Store rating post-launch",
          "Over ₦5 billion in revenue generated",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/burning-ram",
          label: "BURNING RAM",
          description: "A celebration of Nigeria's best meat cuisine.",
        },
        next: {
          href: "/case-studies/bujeti-bills",
          label: "BUJETI",
          description: "Providing users with a centralized system for managing and tracking recurring expenses",
        },
      }}
    >
      {/* ── Hero Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/ARM ONE 2.png"
          alt="ARM ONE investment platform showing laptop and mobile app"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

      {/* ── The Problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The problem
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            ARM, with over 30 years in the industry, offers wealth creation
            opportunities through a unique blend of traditional asset
            management and other investment services. They have a suite of
            products under their belt: investments, pensions, stocks, and
            trustees.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            In a new digital era, the business was falling behind and needed
            to act fast.
          </p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="mb-16 grid grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            38%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Dormant accounts due to lack of awareness of full product
            offerings
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            68%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Revenue driven by only one of five available products
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            52%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Customers distributed worldwide using outdated digital channels
          </p>
        </div>
      </section>

      {/* ── The Goal ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The goal</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-8">
            The goal was to improve customer engagement, acquisition,
            retention, and increase conversion while improving brand outlook.
          </p>
          <LightboxImage
            src="/images/ARM ONE 4.png"
            alt="ARM ONE welcome and login screen on tablet"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Approach</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-8">
            ARM prioritized an omnichannel experience. This meant a deep
            dive into competitor solutions, understanding the user
            segmentation, the relationship between offerings, and creating a
            unified point of entry and purchase to promote all products and
            open up new sources of revenue generation.
          </p>
          <LightboxImage
            src="/images/ARM ONE 5.png"
            alt="Competitors Analysis and customer research insights"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Aligning on the Information Architecture ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Aligning on the information architecture
        </h2>
        <div className="border-t border-white/20 pt-8">
          <LightboxImage
            src="/images/ARM ONE 6.png"
            alt="Information architecture ARM One - Bottom navigation elements and features"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── One Dashboard for All ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          One Dashboard for all
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users could see their products across loans in one platform,
            with access to insights and related products based on their
            financial risk profile, improving engagement and cross-selling
            on the platform. Easy access to key insights lets users
            navigate seamlessly right from the dashboard.
          </p>
        </div>
        <LightboxImage
          src="/images/ARM ONE 7.png"
          alt="ARM ONE unified dashboard showing all products"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Analyse Your Products ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Analyse your products
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users could get deeper insights on their products, with
            detailed information showing progress over time.
          </p>
        </div>
        <LightboxImage
          src="/images/ARM ONE 8.png"
          alt="ARM ONE product portfolio and investment screens"
          className="w-full rounded-[16px] mb-6"
        />
        <LightboxImage
          src="/images/ARM ONE 9.png"
          alt="ARM ONE product analysis dashboard with charts and insights"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Improving Interest ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Improving interest
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Information is provided on products not yet purchased by the
            customer, with detailed descriptions, insights, current trends,
            and the option to purchase other products.
          </p>
        </div>
        <LightboxImage
          src="/images/ARM ONE 10.png"
          alt="ARM ONE product discovery and browsing screens"
          className="w-full rounded-[16px] mb-6"
        />
        <LightboxImage
          src="/images/ARM ONE 11.png"
          alt="ARM ONE product detail and purchase screens"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Auto Invest ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Auto invest
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Users can now choose to auto-reinvest assets from their
            investments.
          </p>
        </div>
        <LightboxImage
          src="/images/ARM ONE 12.png"
          alt="ARM ONE auto invest and reinvestment flow"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Client Profiling ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Client profiling
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            This was introduced to better tailor the customer&rsquo;s investment
            experience and deliver more profitable returns on investment.
          </p>
        </div>
        <LightboxImage
          src="/images/ARM ONE 13.png"
          alt="ARM ONE client profiling and investment recommendations"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Responsibilities ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Responsibilities
        </h2>
        <div className="border-t border-white/20 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Led analysis of customer drop-off patterns across integration flows, identifying friction points and translating findings into actionable design improvements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Planned and facilitated usability testing sessions, synthesising insights to validate design direction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered closely with product management and engineering to continuously assess, prioritise, and evolve the customer experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Owned end-to-end prototyping and iterative redesign across all product verticals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Translated PRDs into high-fidelity designs that balanced customer needs with business objectives
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Conclusion
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Unifying four distinct financial products into a single
            platform required careful navigation of competing user mental
            models. The key insight was that an omnichannel experience
            isn&apos;t just about putting everything in one place — it&apos;s
            about designing a coherent information architecture that lets
            users move fluidly between investments, pensions, stocks, and
            trustees without cognitive overload. The results validated the
            approach: a 12% lift in cross-product adoption and over
            N5&nbsp;billion in revenue generated through the unified
            platform.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
