"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function EmedicCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/bujeti-onboarding",
        nextHref: "/case-studies/life-bank",
        label: "EMEDIC",
        title: "Scaling a digital pharmacy across marketplace, admin, and customer experiences",
        impactItems: [
          "20% increase in total payment volume",
          "Significant uplift in user engagement and retention",
          "Growth in platform subscriptions",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/bujeti-onboarding",
          label: "BUJETI",
          description: "Revamping the onboarding experience",
        },
        next: {
          href: "/case-studies/life-bank",
          label: "LIFE BANK",
          description: "Redesigning the life bank mobile application",
        },
      }}
    >
      {/* ── EM 2: Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/Emedic 2.png"
          alt="Emedic online pharmacy platform"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

      {/* ── Challenges ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Challenges
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Emedicstore is an online pharmacy platform aimed at utilising technology for the safe distribution and delivery of quality medication.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It kept experiencing numerous drop-offs, with a high customer abandonment rate. There were also issues tracking delivery and orders placed. This meant they were unable to meet their conversion targets.
          </p>
        </div>
      </section>

      {/* ── The goal ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The goal
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            <span className="font-bold">The goal</span> was to come up with a strategy to improve user engagement, delivery, and order tracking to boost conversion.
          </p>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I set out to understand the existing platform and identify drop-off points to work on key areas that needed improvement. I also analysed existing data and conducted interviews with our users, as well as the lead sales pharmacist and customer success team.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Based on this feedback and research into modern-day e-commerce, we prioritised features that were needed for an MVP.
          </p>
        </div>
      </section>

      {/* ── Market place ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Market place
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users had a clearer understanding of the product&apos;s offerings, backed by easier navigation, a smoother checkout process, and multiple payment options&mdash;all made possible by collaborating with engineers on feasibility.
          </p>
        </div>

        {/* EM 3 + EM 4 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 3.png"
            alt="Emedic marketplace home page"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 4.png"
            alt="Emedic popular categories and shop"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Shopping for healthcare services ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Shopping for healthcare services
        </p>

        {/* EM 5 + EM 6 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 5.png"
            alt="View doctors listing"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 6.png"
            alt="View doctor profile and product detail"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Check out ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Check out
        </p>

        {/* EM 7 + EM 8 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 7.png"
            alt="Checkout step 1"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 8.png"
            alt="Checkout step 2"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* EM 9 + EM 10 side by side below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 9.png"
            alt="Checkout step 3"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 10.png"
            alt="Checkout step 4"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Customer facing ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Customer facing
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The customer-facing portal enabled users to keep abreast of their orders and appointments.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Overview
        </p>

        {/* EM 11 full width */}
        <LightboxImage
          src="/images/Emedic 11.png"
          alt="Customer portal overview dashboard"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Prescriptions ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Prescriptions
        </p>

        {/* EM 12 + EM 13 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 12.png"
            alt="Prescriptions uploaded view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 13.png"
            alt="Prescriptions upload flow"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Bookings ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Bookings
        </p>

        {/* EM 14 + EM 15 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 14.png"
            alt="Upcoming bookings view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 15.png"
            alt="Medical history view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Admin facing ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Admin facing
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The admin-facing portal enabled better tracking of orders, finances, requests, users, and inventory.
          </p>
        </div>
      </section>

      {/* ── Order management ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Order management
        </p>

        {/* EM 16 + EM 17 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 16.png"
            alt="Order management list view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 17.png"
            alt="Order management detail view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* EM 18 + EM 19 side by side below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 18.png"
            alt="Order management tracking"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 19.png"
            alt="Order management fulfillment"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Inventory management ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Inventory management
        </p>

        {/* EM 20 + EM 21 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 20.png"
            alt="Inventory management list"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 21.png"
            alt="Inventory management detail"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Financials ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Financials
        </p>

        {/* EM 22 + EM 23 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 22.png"
            alt="Financial payments overview"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 23.png"
            alt="Financial payments detail"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* EM 24 + EM 25 side by side below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 24.png"
            alt="Financial reporting"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 25.png"
            alt="Financial analytics"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
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
                Translated PRDs into design solutions that addressed both marketplace usability and back-office operational needs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Worked closely with engineering to understand technical constraints and ensure design feasibility across customer and admin portals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Led feature testing with users, the lead pharmacist and engineers to validate healthcare-specific workflows
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Key takeaways ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Key takeaways
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Designing for an online pharmacy revealed how trust and clarity are non-negotiable in healthcare e-commerce. Users aren&apos;t just buying products — they&apos;re making decisions about their health, which means every interaction from browsing to checkout needs to feel safe, transparent, and guided. The biggest unlock was bridging the gap between the marketplace experience and the admin operations behind it, ensuring that what customers see on the front end is backed by reliable order tracking, inventory accuracy, and financial visibility on the back end.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
