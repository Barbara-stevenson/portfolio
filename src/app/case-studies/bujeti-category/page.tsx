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
          "36% feature adoption in the first quarter",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/bujeti-bills",
          label: "BUJETI",
          description:
            "Accounts payable inside Bujeti: supplier invoices captured in seconds, approved before they're paid.",
        },
        next: {
          href: "/case-studies/bujeti-onboarding",
          label: "BUJETI",
          description: "Revamping the onboarding experience",
        },
      }}
    >
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BUJETIC1.png"
          alt="Bujeti category management product interface"
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
              Category model &middot; three creation paths &middot; rules engine
              &middot; category insights &middot; bulk editing
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Users
            </span>
            <span className="text-white text-[20px]">
              Finance teams and admins at African businesses
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Context
            </span>
            <span className="text-white text-[20px]">
              Bujeti &middot; spend management &middot; cards, budgets and
              approvals
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Bujeti already had categories. They were labels attached to
            expenses, and the default set that shipped with every account could
            not be tracked at all. A finance lead could tag a transaction
            &ldquo;Travel&rdquo; and then have no way to ask what Travel had
            cost this month, who was spending it, or whether it was over.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            So the work happened somewhere else. Teams exported transactions,
            re-categorised them in a spreadsheet at month end, and made
            decisions from that copy. The categorisation inside the product was
            not wrong so much as inert, and the data quality problem that showed
            up in reporting was really an incentive problem: nobody categorises
            carefully when the category does nothing.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              How I reframed the brief
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              I was handed a request for finer granularity, which reads as a
              request for deeper folders. Granularity was not going to fix
              anything on its own.{" "}
              <span className="font-bold">
                A category nobody trusts is a category nobody fills in
                accurately
              </span>
              , at any depth.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Research and approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I ran sessions with finance users and internal stakeholders, then
            studied how other platforms model categories: accounting tools,
            spend management products, and the chart-of-accounts structures
            these teams already keep outside the product.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Two things came back that shaped everything after:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
                01 &middot; The taxonomy already existed
              </span>
              <p className="text-white text-[20px] leading-[150%]">
                Finance teams were not waiting for us to give them categories.
                They had a structure already, in a spreadsheet or an accounting
                package, and any product that made them retype it was going to
                lose.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
                02 &middot; Accuracy is not an effort problem
              </span>
              <p className="text-white text-[20px] leading-[150%]">
                Miscategorised spend was not carelessness. People categorise
                well when something depends on it, and they categorise badly
                when the field is decoration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── The decision ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The decision: a category is a control, not a label
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I redefined the category from a tag into an object that owns things.
            A category now carries a spend limit, an approval rule, a set of
            categorisation rules, its sub-categories, and every transaction that
            has landed against it. That single change is why it moved in the
            navigation and now sits under{" "}
            <span className="text-heading-orange font-bold">Compliance</span>,
            beside approval rules and policies, rather than filed under
            expenses.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The list view carries the argument. It leads with{" "}
            <span className="font-bold">Amount spent</span> and{" "}
            <span className="font-bold">Available</span>, so the first thing a
            category tells you is how much room is left in it, not what it is
            called.
          </p>
          <Card className="!p-8 mb-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What it cost
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              A category that owns limits and rules is a heavier object to
              create, and setup got slower for a small team who only wanted five
              labels. It also put category management behind an admin
              permission, which means a spender can no longer invent a category
              mid-expense. I took that trade because uncontrolled category
              creation is the thing that destroys the reporting the feature
              exists to produce.
            </p>
          </Card>
        </div>

        <LightboxImage
          src="/images/bujeti category 2.png"
          alt="Categories list leading with amount spent and available, with expandable sub-category rows"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Three ways in ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Three ways in, because setup is not one situation
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Making the category heavier made the first run at it harder, and
            research had already told me the taxonomy usually exists somewhere
            else. So creation is not one flow. It is three, each aimed at a
            different starting state.
          </p>
        </div>

        {/* 1 — single */}
        <div className="mb-10">
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              01 &middot; One at a time, for a system already running
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              The everyday case. Someone needs one more category, or one
              sub-category under an existing parent, and should not have to open
              a bulk tool to get it.
            </p>
          </Card>
          <LightboxImage
            src="/images/bujeti category 3.png"
            alt="Creating a single category and sub-category"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* 2 — bulk table */}
        <div className="mb-10">
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              02 &middot; A table, for building the structure from scratch
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              An editable grid with{" "}
              <span className="font-bold">Add a category</span> and{" "}
              <span className="font-bold">Add a sub category</span> as inline row
              actions, sub-rows indented under their parent, and a running count
              at the bottom so the person can see the shape of what they have
              built. Limit is a column, so the control is set at the moment the
              category is created rather than as a second pass nobody comes back
              for.
            </p>
          </Card>
          <div className="space-y-4">
            <LightboxImage
              src="/images/bujeti category 4.png"
              alt="Bulk creation table, empty state and first entries"
              className="w-full rounded-[16px]"
            />
            <LightboxImage
              src="/images/bujeti category 5.png"
              alt="Bulk creation with sub-categories nested under a parent and a running count"
              className="w-full rounded-[16px]"
            />
            <LightboxImage
              src="/images/bujeti category 6.png"
              alt="Completed category list after bulk creation"
              className="w-full rounded-[16px]"
            />
          </div>
        </div>

        {/* 3 — CSV */}
        <div>
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              03 &middot; CSV import, for the taxonomy that already exists
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              The import maps the customer&rsquo;s column headers onto
              Bujeti&rsquo;s fields, with their own sample data shown beside
              each mapping so they can confirm the match rather than trust it.
              For anyone without a file ready there is a pre-formatted template
              to download, which quietly teaches the required shape instead of
              rejecting a bad upload later.
            </p>
          </Card>
          <div className="space-y-4">
            <LightboxImage
              src="/images/bujeti category 7.png"
              alt="CSV import with column mapping against sample data and a downloadable template"
              className="w-full rounded-[16px]"
            />
            <LightboxImage
              src="/images/bujeti category 8.png"
              alt="CSV import review list and confirmation"
              className="w-full rounded-[16px]"
            />
          </div>
        </div>
      </section>

      {/* ── The category page ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The limit, and the buffer under it
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            A hard limit fails in a specific way: it stops a legitimate purchase
            at the worst possible moment, usually with someone standing at a
            counter. No limit fails the other way, quietly, and only shows up in
            the month-end report.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            So the limit is stated with an explicit{" "}
            <span className="text-heading-orange font-bold">buffer</span>{" "}
            beside it, and the progress bar shows three zones rather than two:
            what has been spent, what remains inside the limit, and the declared
            overage the business has already agreed to absorb. The category is
            still controlled, and going slightly over is a visible, sanctioned
            state instead of a failure.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Everything the category owns is on this page as a tab:
            transactions, sub-categories, approval rules and categorisation
            rules. Insights sit under the limit, cutting the same spend by top
            sub-category, by trend and by person.
          </p>
        </div>

        <LightboxImage
          src="/images/bujeti category 9.png"
          alt="Category detail page with limit plus buffer, three-zone progress bar, insights, and tabs for transactions, sub-categories, approval rules and categorisation rules"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Rules ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Rules are what actually moved data quality
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Research said accuracy would not improve by asking people to try
            harder, so the system had to do the categorising. A categorisation
            rule matches on transaction description or narration and assigns a
            category automatically, with{" "}
            <span className="font-bold">any</span> or{" "}
            <span className="font-bold">all</span> of its conditions required,
            and each condition using an explicit operator rather than a hidden
            fuzzy match.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            I kept the rule readable on purpose. Someone in finance has to be
            able to look at a rule six months later and understand why a
            transaction landed where it did, which is also what makes a wrong
            rule fixable rather than mysterious. Rules run alongside the manual
            path, they never replace it, and the category&rsquo;s transaction
            list is where a bad assignment gets caught.
          </p>
        </div>

        <LightboxImage
          src="/images/bujeti category 13.png"
          alt="Create categorisation rule with any or all condition matching and a target category"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Transactions ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Where the category meets the money
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The transactions tab lists what has actually hit the category:
            counterparty, amount, the person who spent it, the account, status,
            and whether a receipt is attached. The receipt column carries an add
            affordance where the file is missing, which turns a reporting gap
            into a one-click fix at the row where it happened. Past transactions
            can be pulled into a category as well as future ones, so adopting
            the feature does not mean starting the history over.
          </p>
        </div>

        <LightboxImage
          src="/images/bujeti category 12.png"
          alt="Category transactions tab showing counterparty, amount, spender, account, status and receipt state"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Editing ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Editing has to work at the same scale as creating
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            A structure imported from a CSV is a structure that will need
            correcting in bulk, so selection and multi-edit mirror the creation
            table rather than forcing a per-row modal. The single edit stays
            small and focused for the one-field change, which is the far more
            common case.
          </p>
        </div>

        <div className="space-y-4">
          <LightboxImage
            src="/images/bujeti category 10.png"
            alt="Category and sub-category tables with multi-select editing"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti category 11.png"
            alt="Single category edit modal"
            className="w-full md:w-[50%] mx-auto rounded-[16px]"
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
                Translated PRDs into a category model, taking the request for
                deeper hierarchy and returning a definition of what a category
                owns
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Planned and ran feature testing with users and engineers,
                validating the creation paths before any of them were built out
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered with customer success and marketing on launch, since a
                feature that changes where something lives in the navigation
                needs telling, not discovering
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Drove roadmap prioritisation by arguing the rules engine up the
                order, because without automation the accuracy target was not
                reachable
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
              50%+
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              improvement in expense data quality, which is the number the
              rules engine was built to move
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              36%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              feature adoption inside the first quarter, on a feature that
              requires setup before it returns anything
            </p>
          </Card>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflection</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The useful lesson here was about reading a request. I was asked for
            granularity, and granularity was a real need, but shipping only that
            would have produced a deeper version of a field people already
            ignored. The work got good when I went after why the field was
            ignored instead.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The second lesson was that data quality is a systems problem wearing
            a behaviour problem&rsquo;s clothes. Every intervention that worked
            here removed a human decision or gave one a consequence. None of
            them asked anyone to be more diligent.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What I would do differently
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              36% adoption in a quarter is decent for a feature with a setup
              cost, and I still do not know what stopped the other 64%. I never
              instrumented{" "}
              <span className="font-bold">
                which creation path people chose
              </span>
              , or how many started setup and abandoned it. If CSV import was
              carrying adoption, that is where the next investment goes. If
              nobody found it, that is a different and cheaper problem. I built
              three paths and shipped without the means to learn which one
              earned its keep.
            </p>
          </Card>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
