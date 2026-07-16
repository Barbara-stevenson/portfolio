"use client";

import type { ReactNode } from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

/** Content card — same surface and rhythm as the other case-study pages. */
function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-[#2E2E2E] rounded-[16px] p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function BujetiBillsCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/arm",
        nextHref: "/case-studies/bujeti-category",
        label: "BUJETI",
        title:
          "Bills — accounts payable that's fast to capture and safe to pay.",
        impactItems: [
          "+20% total payment volume",
          "Measurable uplift in user engagement",
          "Growth in paid subscriptions",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/arm",
          label: "ARM",
          description:
            "Creating an omnichannel experience across investments, securities and pensions products.",
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

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Bujeti is spend management for businesses — budgets, cards, and
            customer invoicing all lived on the platform. But that only covered
            money coming <span className="italic">in</span>. The money a
            company <span className="italic">owed</span> — supplier invoices
            for work already delivered — lived everywhere else: arriving in
            email, tracked by hand in spreadsheets, paid from a separate bank
            app. Invoices got lost in inboxes, and what a company actually owed
            was a month-end surprise instead of a number anyone could see.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Customers were asking for it directly. Bills became the missing
            mirror of the invoicing we already had:{" "}
            <span className="text-heading-orange font-bold">
              accounts payable, inside the platform
            </span>{" "}
            — captured in seconds, visible in one place, and paid under the
            company&rsquo;s own controls.
          </p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            Top
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            most-requested feature in customer conversations
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            ~70%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            of customers tracked supplier payments in spreadsheets
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            1 in 4
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            bills surfaced late — lost in email or discovered at month-end
          </p>
        </div>
      </section>

      {/* ── How might we ── */}
      <section className="mb-16">
        <Card className="!p-8">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
            How might we
          </span>
          <p className="text-white text-[22px] md:text-[26px] leading-[140%] italic font-light">
            &ldquo;How might we let any employee capture a bill in seconds —
            while making sure no payment leaves the company without the right
            eyes on it?&rdquo;
          </p>
        </Card>
      </section>

      {/* ── Capture ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Capture — a bill in seconds, not a form
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Competitive research and customer conversations pointed at the same
            adoption killer: data entry. Nobody re-types an invoice into a
            form — they keep the spreadsheet. So capture had to meet invoices
            where they actually arrive.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Two paths in:{" "}
            <span className="text-heading-orange font-bold">
              upload the invoice and OCR reads it
            </span>{" "}
            — amounts, vendor, dates pre-filled — or{" "}
            <span className="text-heading-orange font-bold">
              forward it to a dedicated email address
            </span>{" "}
            and it lands in drafts on the platform. The inbox stopped being
            where bills got lost and became the way they got captured.
          </p>
        </div>

        <p className="text-white/70 text-[18px] font-medium text-center mb-6 tracking-wide">
          Upload your invoice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/bujeti bills 4.png"
            alt="Bill creation — invoice upload with OCR pre-fill"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 5.png"
            alt="Bill creation — reviewing extracted invoice details"
            className="w-full rounded-[16px]"
          />
        </div>

        <div className="flex justify-center">
          <LightboxImage
            src="/images/bujeti bills 6.png"
            alt="Bill creation — completed bill view"
            className="w-[85%] rounded-[16px]"
          />
        </div>
      </section>

      {/* ── The approval flow ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Autonomy with oversight — the approval flow
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            This was the real design problem. Money leaving a company needs
            control — but if control means every bill queues behind one
            person, teams route around the product and you&rsquo;re back to
            spreadsheets. So the flow is role-based: an{" "}
            <span className="text-heading-orange font-bold">employee</span>{" "}
            captures a bill, scopes it — category, source of funds — saves it
            partially, or submits it and pulls in an approver. Nothing they
            aren&rsquo;t permitted to do is offered to them.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            An <span className="text-heading-orange font-bold">admin</span>{" "}
            reviews on the other side — editing or approving based on the
            permissions the employee holds. The payment only moves once the
            right eyes have been on it. Everyday capture stays effortless;
            the consequential step carries the weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/bujeti bills 7.png"
            alt="Employee flow — category and source-of-funds selection"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 8.png"
            alt="Employee flow — submitting a bill for approval"
            className="w-full rounded-[16px]"
          />
        </div>

        <LightboxImage
          src="/images/bujeti bills 9.png"
          alt="Bills overview — everything owed, visible in one place"
          className="w-full rounded-[16px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <LightboxImage
            src="/images/bujeti bills 10.png"
            alt="Admin flow — edit and approve a submitted bill"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti bills 11.png"
            alt="Admin flow — permission-scoped approval"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── How I worked ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">How I worked</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I translated the PRD into flows, ran competitive research on how
            supplier-invoice products handle capture and approvals, and led
            scoping sessions with customers, engineers, and customer success
            to align on what version one had to do. At launch I partnered
            with marketing on the materials that drove adoption.
          </p>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Outcomes</h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              +20%
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              total payment volume — payables money moved onto the platform
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              ↑
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              user engagement — bills gave teams a daily reason to be in
              Bujeti
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              ↑
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              paid subscriptions — payables became part of the paid tier
            </p>
          </div>
        </div>
      </section>

      {/* ── How we measured it ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          How we measured it
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-8">
            Beyond the headline numbers, we instrumented the funnel in three
            layers: did capture get effortless, did the approval flow hold, and
            did the old workaround die.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
                Capture
              </span>
              <span className="text-white text-[24px] font-bold block leading-tight">
                ~8 min → under 60 sec
              </span>
              <p className="text-white/70 text-[14px] leading-[150%] mt-3">
                to capture a bill — OCR pre-fill and email forwarding replaced
                the form.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
                Approval
              </span>
              <span className="text-white text-[24px] font-bold block leading-tight">
                ~2 days → under 4 hrs
              </span>
              <p className="text-white/70 text-[14px] leading-[150%] mt-3">
                median submission-to-approval — and every paid bill carried a
                completed approval chain, because it&rsquo;s the only path.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
                The old workaround
              </span>
              <span className="text-white text-[24px] font-bold block leading-tight">
                ~70% → under 15%
              </span>
              <p className="text-white/70 text-[14px] leading-[150%] mt-3">
                of companies still keeping a parallel spreadsheet within a
                quarter — the honest test of a replacement feature is whether
                people stop doing the old thing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── What I learned ── */}
      <section className="mb-16">
        <Card className="!p-8">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
            What I learned
          </span>
          <p className="text-white text-[20px] leading-[150%]">
            Map permission structures early — with employees, managers, and
            admins in one flow, every touchpoint is a balance of autonomy and
            oversight. Approval flows have to flex across very different
            organisational structures without adding friction to the everyday
            path. Capture should be effortless; moving money should carry
            weight. That asymmetry — friction proportional to consequence —
            is now how I design anything that touches money or power.
          </p>
        </Card>
      </section>
    </CaseStudyLayout>
  );
}
