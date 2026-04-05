"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function BujetiBillsCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/arm",
        nextHref: "/case-studies/bujeti-category",
        label: "BUJETI",
        title: "Providing users with a centralized system for managing and tracking recurring expenses",
        impactItems: [
          "20% increase in total payment volume",
          "Measurable uplift in user engagement",
          "Growth in paid subscriptions",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/arm",
          label: "ARM",
          description: "Creating an omnichannel experience across investments, securities and pensions products.",
        },
        next: {
          href: "/case-studies/bujeti-category",
          label: "BUJETI",
          description: "Enabling better category management of expenses.",
        },
      }}
    >
      {/* ── Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/bujeti bills 3.png"
          alt="Bujeti Bills product interface overview"
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
            The existing platform seamlessly manages a company's budgets
            and invoices. To improve our service, the business had to come up
            with more innovative ways to handle or change expense management.
          </p>
          <h3 className="text-[22px] font-bold text-white mb-3">
            Introducing supplier invoices, also known as bills
          </h3>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Efficiently manage outstanding payments for services already
            rendered.
          </p>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I set out to understand the requirements of the feature, mapping
            out its attributes and functions. It was important to run
            competitive analysis and design a flow that would allow users to
            effectively upload and track bills, while also providing a level
            of assurance.
          </p>
        </div>
      </section>

      {/* ── Bill creation ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Bill creation
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users can upload the supplier invoice via OCR or forward it
            to the permissions mail and have it reflected in their drafts on
            the platform.
          </p>
        </div>

        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Upload your Invoice
        </p>

        {/* 2-up image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/bujeti bills 4.png"
            alt="Bill creation - upload flow step 1"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 5.png"
            alt="Bill creation - upload flow step 2"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* Centered image below */}
        <div className="flex justify-center">
          <LightboxImage
            src="/images/bujeti bills 6.png"
            alt="Bill creation - completed bill view"
            className="w-[85%] rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Employee touch point ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Employee touch point
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Depending on the access level the employee can select category
            and source of funds. They can also save partially, save or bring
            someone else in for approval.
          </p>
        </div>

        {/* 2-up image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/bujeti bills 7.png"
            alt="Employee touch point - category selection"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 8.png"
            alt="Employee touch point - approval flow"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* Single image below */}
        <LightboxImage
          src="/images/bujeti bills 9.png"
          alt="Employee touch point - reports dashboard"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Admin touch point ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Admin touch point
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Admins have the option to edit and approve the request depending
            on the permissions granted to the employee.
          </p>
        </div>

        {/* 2-up image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti bills 10.png"
            alt="Admin touch point - edit and approve view"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 11.png"
            alt="Admin touch point - permissions management"
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
                Translated PRDs into design solutions that addressed both customer workflows and business requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Conducted competitive research into supplier invoice patterns and best practices to inform design decisions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Led feature scoping sessions with users, engineers and customer success to align on requirements and feasibility
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered with marketing to develop launch materials and drive feature adoption
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
            Designing the bills feature reinforced how critical it is to
            map permission structures early in the process. With multiple
            user roles — employees, managers, and admins — each touchpoint
            had to balance autonomy with oversight. The biggest takeaway was
            learning to design flexible approval flows that scale across
            different organizational structures without adding unnecessary
            friction to the end user experience.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
