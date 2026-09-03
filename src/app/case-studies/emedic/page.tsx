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

export default function EmedicCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/bujeti-onboarding",
        nextHref: "/case-studies/life-bank",
        label: "EMEDIC",
        title:
          "Scaling a digital pharmacy across marketplace, admin, and customer experiences",
        impactItems: [
          "+16% checkout conversion",
          "+20% total payment volume",
          "+20% back-office operational efficiency",
          "$3M revenue through the vendor storefront",
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
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/Emedic 2.png"
          alt="Emedic online pharmacy platform"
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
              Senior Product Designer, leading 2 designers
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Duration
            </span>
            <span className="text-white text-[20px]">
              14 months, contract (2023&ndash;24)
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Deliverables
            </span>
            <span className="text-white text-[20px]">
              Marketplace &middot; prescription checkout &middot; customer
              portal &middot; admin portal &middot; vendor storefront
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Context
            </span>
            <span className="text-white text-[20px]">
              Emedic Technologies &middot; regulated online pharmacy, Nigeria
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Emedicstore sells medication, lab tests and doctor consultations
            online. It was losing customers at a rate the business could not
            absorb: high cart abandonment, and no reliable way for a customer or
            the pharmacy to see where an order actually was. Conversion targets
            were being missed quarter after quarter.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The obvious read was that checkout had too much friction. The real
            read was more awkward. A pharmacy cannot sell prescription
            medication the way a shop sells socks. A pharmacist has to verify a
            prescription before anything is dispensed, and that verification
            lands in the single most fragile part of e&#8209;commerce.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              The tension I had to design against
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Every instinct said{" "}
              <span className="font-bold">take friction out of checkout</span>.
              The law said{" "}
              <span className="font-bold">
                a human has to approve this order
              </span>
              . Both were correct, and the design had to hold them at the same
              time.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Research</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I mapped the existing platform end to end to find where people
            stopped, then went to the people on both sides of the counter:
            customers, the lead sales pharmacist, and the customer success team
            who fielded every &ldquo;where is my order&rdquo; call.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Two causes of abandonment came back that had nothing to do with
            page speed or form length:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
                01 &middot; The prescription wall
              </span>
              <p className="text-white text-[20px] leading-[150%]">
                Customers reached payment before learning their item needed a
                prescription. The order stopped there with no way forward, so
                they left and did not come back.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
                02 &middot; Affordability, not friction
              </span>
              <p className="text-white text-[20px] leading-[150%]">
                A full basket of medication is a large one&#8209;off cost. People
                were not abandoning because checkout was hard. They were
                abandoning because they could not pay for all of it today.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── The decision ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The decision: keep the gate, give it exits
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The tempting move was to let the order through and chase the
            prescription afterwards. I ruled that out. In a pharmacy an unpaid
            unverified order is an inventory problem; a{" "}
            <em>paid</em> unverified order is a refund, a compliance exposure and
            a phone call to a customer who now feels misled.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            So the gate stayed. What changed is that it stopped being a wall.
            Three things moved:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-bold text-white">
                  The gate moved earlier.
                </span>{" "}
                A prescription&#8209;required item is flagged in the cart, not
                discovered at payment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-bold text-white">
                  One dead end became three routes.
                </span>{" "}
                Upload a physical prescription, request a digital one from your own
                doctor, or book a consultation on the platform.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-bold text-white">
                  The blocker became a product.
                </span>{" "}
                The third route sends the customer into the doctors marketplace,
                so the thing stopping the sale now starts one.
              </span>
            </li>
          </ul>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What it cost
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Three routes is three flows to build, three states to track, and a
              pharmacist review queue that has to be staffed. Checkout also got{" "}
              <span className="font-bold">longer</span>, not shorter, for anyone
              buying prescription medication. I accepted that: the customers who
              completed were customers whose orders could actually be dispensed,
              which is a different and better number than raw checkout speed.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Marketplace ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The marketplace: sort by what people are actually buying
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The catalogue mixes three different kinds of thing: goods you can
            buy outright, goods that need a prescription, and services you book.
            Navigation had to make that difference visible before anyone
            committed to a basket, which meant category structure and search
            scope built around the purchase type rather than around the
            pharmacy&rsquo;s internal departments. I worked through feasibility
            with engineering as I went, so the taxonomy matched what the
            catalogue could actually support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 3.png"
            alt="Emedic marketplace home page"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 4.png"
            alt="Popular categories and shop listing"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Doctors ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Consultations: the way out of the blocker
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            43 doctors, filterable by specialty, condition, availability and
            price, with the consultation fee on the card before anyone clicks.
            This surface exists in its own right, but it earns most of its
            traffic from the prescription blocker: a customer who cannot check
            out is one tap from the person who can unblock them. Showing price
            up front mattered more here than anywhere else on the platform,
            because the customer has already been stopped once and a second
            surprise would end the session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 5.png"
            alt="Doctors listing with specialty, condition and price filters"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 6.png"
            alt="Doctor profile and product detail view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Checkout ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Checkout, in the order the customer meets it
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Four decisions, each one aimed at a specific reason people were
            leaving.
          </p>
        </div>

        {/* 1 — the cart */}
        <div className="mb-8">
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              01 &middot; Tell them in the cart, not at the till
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Lab tests and products sit in one basket, because that is how
              people shop for their health. Prescription items carry a red badge
              at item level, so the constraint is attached to the thing that
              caused it rather than announced as a blanket warning at the end.
            </p>
          </Card>
          <LightboxImage
            src="/images/Emedic 7.png"
            alt="Cart drawer mixing booked lab tests and products, with a prescription-required badge on a medication line"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* 2 — the blocker */}
        <div className="mb-8">
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              02 &middot; A blocked order still has somewhere to go
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              The checkout button stays, but it is demoted. The primary action
              becomes{" "}
              <span className="font-bold">For your prescription</span>, a split
              button holding all three routes forward, with a{" "}
              <span className="font-bold">View sample</span> link for anyone who
              does not know what a valid prescription looks like. The customer is
              stopped, told why, and handed three ways out on the same screen.
            </p>
          </Card>
          <LightboxImage
            src="/images/Emedic 10.png"
            alt="Cart blocked pending prescription, with upload, digital prescription and consultation routes offered"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* 3 — guest checkout */}
        <div className="mb-8">
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              03 &middot; Guest checkout, metered
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Forcing account creation was costing first orders. Removing it
              entirely was not an option, because repeat dispensing needs a
              medical record attached to a person. So guest checkout stays, and
              the customer is told plainly how much of it is left:{" "}
              <span className="font-bold">
                you have 3 guest checkouts left
              </span>
              . The wall becomes a countdown, disclosed rather than sprung.
            </p>
          </Card>
          <LightboxImage
            src="/images/Emedic 8.png"
            alt="Welcome panel offering metered guest checkout alongside sign-up"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* 4 — payment */}
        <div>
          <Card className="!p-8 mb-4">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              04 &middot; Three ways to pay for one basket
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Research said the second cause of abandonment was cost, not
              friction, so payment answers cost directly:{" "}
              <span className="font-bold">
                pay now, pay via loan, or pay with insurance
              </span>
              . The order summary carries a green{" "}
              <span className="font-bold">Prescription uploaded</span>{" "}
              confirmation with an edit link, so the gate the customer cleared
              three steps ago is still visibly cleared at the moment they part
              with money.
            </p>
          </Card>
          <LightboxImage
            src="/images/Emedic 9.png"
            alt="Payment step offering pay now, pay via loan and pay with insurance, with prescription confirmed in the summary"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Customer portal ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The customer portal: three routes become three tabs
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The second half of the original brief was order tracking, and the
            portal is where the prescription decision pays off structurally. The
            three routes offered at checkout are the same three tabs in the
            account:{" "}
            <span className="text-heading-orange font-bold">
              Uploaded &middot; Digital &middot; Doctors
            </span>
            . A customer who took a route already knows where to look for it.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Each prescription carries an explicit status, Pending or Approved, against
            the medication it covers. That single column is what turns
            &ldquo;is my order coming?&rdquo; from a phone call into a glance,
            and it is the same status the pharmacist sets on the admin side.
          </p>
        </div>

        <LightboxImage
          src="/images/Emedic 11.png"
          alt="Customer portal overview dashboard"
          loading="lazy"
          className="w-full rounded-[16px] mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 12.png"
            alt="Prescriptions split into uploaded, digital and doctors tabs with pending and approved statuses"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 13.png"
            alt="Prescription upload flow"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/Emedic 14.png"
            alt="Upcoming bookings and appointments"
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

      {/* ── Admin ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The admin portal: what makes the status true
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            A green &ldquo;Approved&rdquo; badge on the customer side is only
            worth what the operation behind it can support. Designing the
            back office was the other half of the same problem: the pharmacist
            needed a review queue, fulfilment needed order state, and finance
            needed to see what had been taken and what was owed.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            I designed the admin surfaces for orders, inventory, users and
            financials so that the state a customer sees is read from the same
            record the pharmacy acts on, not a second copy that drifts. That
            work is where the{" "}
            <span className="text-heading-orange font-bold">
              20% operational efficiency gain
            </span>{" "}
            came from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 16.png"
            alt="Admin order management list view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 17.png"
            alt="Admin order detail with fulfilment state"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/Emedic 20.png"
            alt="Inventory management list"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/Emedic 21.png"
            alt="Inventory item detail"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>

        <LightboxImage
          src="/images/Emedic 22.png"
          alt="Financial payments overview"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── How I worked ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">How I worked</h2>
        <div className="border-t border-white/20 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Led design across all four surfaces, directing two designers on
                the vendor storefront while I held the prescription and checkout
                work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Translated PRDs into flows that had to satisfy marketplace
                usability and pharmacy operations at once, since a decision on
                one side always landed on the other
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Checked new flows against engineering constraints before
                committing to them, since every prescription route I added
                created review work a pharmacist had to get through
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Ran feature testing with customers, the lead pharmacist and
                engineers, using the pharmacist as the check on anything that
                touched dispensing
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
              +16%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              checkout conversion, against the abandonment rate that opened the
              brief
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              +20%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              total payment volume, helped by loan and insurance as real payment
              paths
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              +20%
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              back-office operational efficiency across orders, inventory and
              finance
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[36px] font-bold block mb-2">
              $3M
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              revenue through the vendor storefront, built by the two designers
              I led
            </p>
          </Card>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflection</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The lesson I took out of this one is about what to do with a
            constraint you are not allowed to remove. My first instinct was to
            find a way around the prescription requirement. The work only got
            good once I stopped treating it as friction to be minimised and
            started treating it as a step that needed routes, states and a
            visible owner.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The second lesson was that the front end and the back office are one
            system. Order tracking was written in the brief as a customer
            problem, and it was really an operations problem wearing a customer
            complaint. No amount of design on the tracking screen would have
            fixed it without the admin record underneath.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What I would do differently
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              I never instrumented the three prescription routes separately, so
              I know conversion improved but not{" "}
              <span className="font-bold">which route carried it</span>. If
              consultations were doing the work, that is a business line. If
              uploads were, that is a review-queue staffing problem. I shipped
              without being able to tell the difference, and I have defined an
              event plan up front on every project since.
            </p>
          </Card>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
