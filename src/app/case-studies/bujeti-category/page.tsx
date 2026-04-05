"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function BujetiCategoryCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/bujeti-bills",
        nextHref: "/case-studies/bujeti-onboarding",
        label: "BUJETI",
        title: "Enabling better category management of expenses",
        impactItems: [
          "50%+ improvement in expense data quality",
          "36% feature adoption within first quarter",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/bujeti-bills",
          label: "BUJETI",
          description: "Providing users with a centralized system for managing and tracking recurring expenses",
        },
        next: {
          href: "/case-studies/bujeti-onboarding",
          label: "BUJETI",
          description: "Revamping the onboarding experience",
        },
      }}
    >
      {/* ── Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BUJETIC1.png"
          alt="Bujeti Category Management product interface"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

      {/* ── About ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          About
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Category management is the organization of expenses into
            categories so funds can be allocated properly and managed
            effectively. It facilitates better tracking, analysis, and
            management of expenses.
          </p>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The problem
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Users were unable to properly track expenses tied to categories
            on the platform. The default categories set on the platform could
            also not be tracked.
          </p>
        </div>
      </section>

      {/* ── The goal ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The goal
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The goal was to enable finer granularity and more precise
            organization of expenses, providing users with greater
            flexibility and control over their expense tracking and
            management processes.
          </p>
        </div>
        <LightboxImage
          src="/images/bujeti category 2.png"
          alt="Bujeti category management goal overview"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Functional requirements ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Functional requirements
        </h2>
        <div className="border-t border-white/20 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                A user-friendly interface for creating, editing, and managing
                expense categories, with options to specify category
                attributes and hierarchy levels.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Support for creating hierarchical structures of categories,
                with options for nesting categories within parent categories
                to represent relationships and dependencies.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Integration with expense submission forms and reporting tools
                to enable users to select appropriate categories from a
                predefined list when submitting expenses or generating
                reports.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I had a session with our users and stakeholders to better
            understand their needs and the problem. I then carried out
            research into various platforms utilising categories, and
            expanded my findings to solve for our context.
          </p>
        </div>
      </section>

      {/* ── Creating categories and sub categories ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Creating categories and sub categories
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users have various creation options depending on their use
            case, enhancing the usability of the system.
          </p>
        </div>

        {/* Creating a single category */}
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Creating a single category and sub category
        </p>
        <LightboxImage
          src="/images/bujeti category 3.png"
          alt="Creating a single category flow"
          className="w-full rounded-[16px] mb-10"
        />

        {/* Creating multiple categories — BC 4, 5, 6 stacked */}
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Creating multiple categories and sub categories
        </p>
        <div className="space-y-4">
          <LightboxImage
            src="/images/bujeti category 4.png"
            alt="Creating multiple categories - empty and first entry"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 5.png"
            alt="Creating multiple categories - adding entries and sub categories"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 6.png"
            alt="Creating multiple categories - categories list with success"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Upload a CSV file — BC 7, 8 stacked ── */}
      <section className="mb-16">
        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Upload a CSV file
        </p>
        <div className="space-y-4">
          <LightboxImage
            src="/images/bujeti category 7.png"
            alt="Upload CSV - import and map fields"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 8.png"
            alt="Upload CSV - review list and success"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Category review — BC 9 ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Category review
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            View key insights related to your category and improve resource
            allocation.
          </p>
        </div>

        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Review a category and view
        </p>
        <LightboxImage
          src="/images/bujeti category 9.png"
          alt="Category review dashboard with insights and charts"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Single and multiple category edit — BC 10, 11 stacked ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Single and multiple category edit
        </h2>
        <div className="border-t border-white/20 pt-6" />
        <div className="space-y-4 mt-8">
          <LightboxImage
            src="/images/bujeti category 10.png"
            alt="Single and multiple sub-category table views"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 11.png"
            alt="Edit category modal"
            className="w-full md:w-[50%] mx-auto rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Improve transactions — BC 12, 13 side by side ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Improve transactions
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Get a detailed view of transactions tied to a category, and tie
            past and future transactions to a category.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti category 12.png"
            alt="Transaction detail view by category"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 13.png"
            alt="Create categorization rule"
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
                Translated PRDs into design solutions that mapped complex taxonomy requirements to intuitive user interfaces
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Planned and executed feature testing with users and engineers to validate category workflows before launch
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered with customer success and marketing to develop a coordinated launch and adoption strategy
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Drove roadmap prioritisation by aligning design recommendations with business impact and user needs
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
            Designing category management revealed how much complexity
            hides behind seemingly simple taxonomy. The real challenge
            wasn&apos;t building CRUD interfaces — it was understanding how
            finance teams mentally organise spending and translating that
            into a flexible hierarchy that scales. Investing in CSV import
            and bulk editing early proved critical for enterprise adoption,
            and tying categories directly to transaction views closed the
            loop between policy and practice.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
