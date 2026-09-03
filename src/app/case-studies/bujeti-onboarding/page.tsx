"use client";

import { type ReactNode } from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

/**
 * Content card — same surface, radius and padding rhythm as the rest of
 * the case-study pages (mirrors the helper in arm/page.tsx).
 */
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

export default function BujetiOnboardingCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/bujeti-category",
        nextHref: "/case-studies/emedic",
        label: "BUJETI",
        title: "Revamping the onboarding experience",
        impactItems: [
          "40% increase in subscription conversion",
          "15% lift in feature adoption after onboarding",
          "Measurable reduction in early-stage churn",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/bujeti-category",
          label: "BUJETI",
          description: "Enabling better category management of expenses",
        },
        next: {
          href: "/case-studies/emedic",
          label: "EMEDIC",
          description:
            "Scaling a digital pharmacy across marketplace, admin, and customer experiences",
        },
      }}
    >
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BUJETI ONBOARDING 1.png"
          alt="Bujeti onboarding experience"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

      {/* ── At a glance ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">At a glance</h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Role
            </span>
            <span className="text-white text-[20px]">
              Senior Product Designer, end to end
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Deliverables
            </span>
            <span className="text-white text-[20px]">
              Access model &middot; four-step sign-up &middot; intent capture
              &middot; tiered KYC &middot; in-product activation
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Constraint
            </span>
            <span className="text-white text-[20px]">
              Regulated KYC on a product that moves company money
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Context
            </span>
            <span className="text-white text-[20px]">
              Bujeti &middot; spend management for Nigerian businesses
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Collecting every KYC detail before anyone reached the platform was a
            business requirement, not an accident. The reasoning was sound on
            its face: verify first, and every account on the platform is a
            verified one.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            What it produced was drop-off. Plenty of companies did not have
            those documents to hand at the moment they were signing up, so the
            flow stopped there. We were not losing people who had decided
            against Bujeti. We were losing people who had decided{" "}
            <em>for</em> it and could not finish, which meant the requirement
            was buying clean data on a shrinking number of accounts.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The flow also asked everyone for the same things, regardless of what
            they had come to do. A company that wanted to track expenses on
            accounts it already had was put through the same document wall as
            one that wanted corporate cards and a funded business account, even
            though only the second legally required it.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              The tension I had to design against
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              KYC is not a form we chose to add. Bujeti moves company money, and
              verification is a legal condition of doing that.{" "}
              <span className="font-bold">
                The requirement was fixed. Where it sat in the journey was not.
              </span>
            </p>
          </Card>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Research and approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I mapped the existing flow and walked it through with the whole
            product team, including marketing, sales and customer support, since
            those three fielded the abandoned sign-ups and knew where people
            gave up and why. Alongside that I benchmarked onboarding across SaaS
            and fintech, looking specifically at how regulated products handle
            verification without losing the trial.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The question that reorganised the project was not how to shorten the
            form. It was{" "}
            <span className="text-heading-orange font-bold">
              which features actually require which documents
            </span>
            . Once that was written down as a matrix rather than assumed, it was
            obvious the product had been charging every user the highest price
            in the list.
          </p>
        </div>
      </section>

      {/* ── The decision ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The decision: access is a ladder, not a gate
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I split one hard boundary into three soft ones. Sign up and you are
            in. Upload a single document, the CAC certificate of registration,
            and basic features open. Complete full business KYC and the
            regulated surfaces open: a dedicated Bujeti account, corporate
            cards, advanced reporting.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The intent question is what makes the ladder work. Asking which
            features someone plans to use lets the product derive their document
            requirement from their own answer, so nobody is asked for paperwork
            a feature they will never open happens to need.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What it cost
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Three tiers means partially verified accounts are now a permanent
              state the whole product has to handle, every feature needs to know
              which tier it belongs to, and support has to be able to explain
              why something is locked. It also creates a population who use
              Bujeti indefinitely without ever finishing KYC. I took that
              trade because{" "}
              <span className="font-bold">
                a lead inside the product is one we can still convert, and an
                abandoned sign-up is gone
              </span>
              .
            </p>
          </Card>
        </div>
      </section>

      {/* ── Sign up ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Sign-up asks for a person, not a company
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Four steps, numbered, so the length is known before it starts. The
            first screen collects only what identifies a person and opens the
            30-day trial. Marketing consent and the terms agreement are separate
            checkboxes rather than one bundled tick, because consenting to be
            emailed and agreeing to terms of use are two different decisions and
            only one of them is required. The panel alongside carries product
            value while the form is being filled, so the moment of highest
            effort is also the moment we make the case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti on 2.png"
            alt="Sign-up step one: personal details, 30-day trial, separated marketing and terms consent"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 3.png"
            alt="Sign-up continued, with the stepper showing progress through four steps"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Intent ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          One question that does two jobs
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The last step asks how the company plans to use Bujeti, across
            accounts, cards, invoices, bills and budgets. To the person
            answering it reads as personalisation. Underneath, it is the input
            that decides which documents they will be asked for and which tier
            they land on.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It is skippable on purpose. This is the last screen before someone
            gets in, and it was not worth reintroducing a wall to protect a
            question that only improves the experience. A skip falls back to the
            lightest requirement, which is the same place a cautious answer
            would land.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti on 4.png"
            alt="Feature intent selection across accounts, cards, invoices, bills and budgets, with a skip option"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 5.png"
            alt="Feature intent selection confirmed"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Inside first, verified second
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The user lands on a working product with the full navigation in
            front of them. The banner asks for one named document, the CAC
            certificate, and says what it buys. Under it, the setup checklist
            gives the account a shape: complete KYC, invite the team, add funds,
            connect a bank, create a card.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Only KYC carries a primary button. Everything else is secondary, so
            the list can be long without being ambiguous about what matters, and
            it carries a time estimate rather than an open-ended commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti on 6.png"
            alt="Welcome dashboard with the certificate banner and a setup checklist where only KYC has a primary action"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 7.png"
            alt="Welcome dashboard variant showing the KYC completion path"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── The ladder advances ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The banner rewrites itself as you climb
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The upload asks for one file and names it precisely, so nobody has
            to guess what a Corporate Affairs Commission certificate is or
            whether the thing in their downloads folder counts. Submission
            returns a confirmation that it is under review rather than silence.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Then the surface changes. The banner that read{" "}
            <span className="font-bold">unlock basic features</span> becomes{" "}
            <span className="font-bold">discover more possibilities</span>, and
            points at full verification. The same piece of screen is the rung
            the account is standing on, and it re-renders to show the next one
            up rather than sitting there as a static advert.
          </p>
        </div>

        <LightboxImage
          src="/images/bujeti on 8.png"
          alt="Certificate upload, and the welcome banner advancing from basic access to full verification after submission"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── The gate ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The interruption arrives at the moment of intent
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Deferring KYC only works if there is a moment that brings it back,
            and the right moment is when someone reaches for a feature that
            needs it. They have shown intent, so the request is now about
            something they want rather than a form standing between them and the
            product.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The prompt is written in what verification opens: a dedicated
            business account, corporate cards for the team, advanced expense
            reporting. It never says what they are not allowed to do. Same
            requirement, argued from the other end.
          </p>
        </div>

        <div className="flex justify-center">
          <LightboxImage
            src="/images/bujeti on 9.png"
            alt="Business verification prompt listing what full access unlocks, shown when a gated feature is opened"
            className="rounded-[16px] w-full"
          />
        </div>
      </section>

      {/* ── How I worked ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">How I worked</h2>
        <div className="border-t border-white/20 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Reopened a settled business requirement, using the drop-off
                figures to make the case that verifying everyone up front was
                costing more accounts than it was protecting
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Took a brief to shorten the form and returned an access model,
                after establishing which features genuinely required which
                documents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Reviewed the flow with marketing, sales and customer support,
                who between them had the clearest picture of where sign-ups died
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Benchmarked regulated onboarding across SaaS and fintech to see
                how others sequence verification against the trial
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Ran testing with users, engineers and customer success, then
                worked with marketing on a launch that explained the new tiers
                to existing accounts
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Outcomes</h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              +40%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              increase in subscription conversion, against the drop-off that
              opened the brief
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              +15%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              lift in feature adoption after onboarding, which is the intent
              question doing its second job
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Card>
            <p className="text-white text-[20px] leading-[150%]">
              Early-stage churn fell measurably. The accounts that reached the
              product before being asked for paperwork were the ones that stayed
              long enough to find a reason to.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflection</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I was asked to make onboarding shorter, and the thing that worked
            was not making it shorter. The same questions are still there and
            the same documents are still required. What changed is when they are
            asked and what the person has in hand by the time they are asked.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The move that carried the result was refusing to treat a legal
            requirement as a single event. Verification could be staged, and
            once it was staged each stage could be attached to the thing that
            justified it.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What I would do differently
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              I made the intent question skippable and never measured{" "}
              <span className="font-bold">how many people skipped it</span>. The
              entire tiering model reads from that answer, so a high skip rate
              would mean most accounts were being routed by a default rather
              than by intent, and the 15% adoption lift would be coming from
              somewhere other than where I think it is. It was one event to
              instrument and I did not ask for it.
            </p>
          </Card>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
