"use client";

import { useEffect, useRef, type ReactNode } from "react";
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

/**
 * Autoplaying walkthrough video — plays on its own (muted, looping) but
 * exposes native controls so it can be paused and scrubbed, exactly like
 * the inventory deck.
 */
function Video({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      {...(poster ? { poster } : {})}
      muted
      loop
      playsInline
      controls
      aria-label={label}
      className="w-full rounded-[16px] bg-black block"
    />
  );
}

export default function MethodInventoryCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/arm",
        nextHref: "/case-studies/emedic",
        label: "METHOD CRM",
        title:
          "An operational inventory experience for small product businesses, built inside Method CRM.",
        impactItems: [
          "+25% sales-pipeline engagement",
          "+30% order-to-cash workflow completion",
          "40% faster concept-to-feedback cycles",
          "Governed design system + reusable research agent",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/arm",
          label: "ARM",
          description:
            "Unifying five financial segments into one consumer-grade investing platform.",
        },
        next: {
          href: "/case-studies/emedic",
          label: "EMEDIC",
          description:
            "Improving the marketplace, admin and customer-facing portal of an online pharmacy.",
        },
      }}
    >
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/method-slide-02-context.png"
          alt="Method CRM inventory — context: order-to-cash across products"
          className="w-full rounded-[16px]"
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
              Senior Product Designer
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Duration
            </span>
            <span className="text-white text-[20px]">
              ~5 months (2026)
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Deliverables
            </span>
            <span className="text-white text-[20px]">
              MVP definition · order-to-cash flows · design system · AI
              strategy
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Context
            </span>
            <span className="text-white text-[20px]">
              Method CRM · small product businesses (3–50 people)
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Method is a customizable CRM and workflow platform for small
            businesses — customers, sales pipeline, invoicing, and internal
            processes. But customers selling physical products hit a wall: they
            could quote and take orders in Method, then had to track the actual
            stock somewhere else — a standalone inventory tool or a spreadsheet.
            One process — quote → order → fulfillment → invoice — split across
            three disconnected tools, with double entry between them.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The pain wasn&rsquo;t a missing feature. It was missing{" "}
            <span className="text-heading-orange font-bold">continuity</span> —
            no operational link from the order to the fulfillment to the
            invoice. As one prospect put it:{" "}
            <span className="italic">
              &ldquo;Visibility is our big goal, because QuickBooks won&rsquo;t
              do it.&rdquo;
            </span>
          </p>
        </div>
        <LightboxImage
          src="/images/method-persona-morgan-clean.png"
          alt="Persona — Morgan, the warehouse manager who touches every break in the order-to-cash journey"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Stats Row ── */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            53.5%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            of prospects named order management as their #1 pain
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            25.6%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            cited the manual / double-entry burden directly
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            16.3%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            cited inventory visibility as the gap
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
            &ldquo;What&rsquo;s the minimum operational inventory experience
            that lets users confidently manage and sell products inside
            Method — without building an ERP?&rdquo;
          </p>
        </Card>
      </section>

      {/* ── Research (incl. the AI agent that ran it) ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Research</h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[24px] leading-[150%] mb-8">
            I led discovery end-to-end, partnering with product, engineering,
            support, and implementation. I synthesised 465 prospect discovery
            transcripts, audited seven inventory products, and mapped how stock
            actually moves through a small business. The throughline:{" "}
            <span className="text-heading-orange font-bold">
              no one serves the 3–50-person business
            </span>{" "}
            that needs good-enough picking without the weight of a full
            warehouse-management system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                465
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                prospect discovery transcripts analysed
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                7
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                competitors audited (Fishbowl, Katana, Cin7, SOS, Zoho,
                inFlow, Amazon MCF)
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                ~40%
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                faster concept-to-feedback via the AI research agent
              </p>
            </Card>
          </div>
        </div>

        {/* The AI research agent that ran the discovery */}
        <div className="mb-4">
          <h3 className="text-white text-[22px] font-bold mb-2">
            The engine — an AI research agent I built
          </h3>
          <p className="text-white/80 text-[16px] leading-[150%] max-w-[820px]">
            Covering that much discovery without it swallowing the timeline
            meant changing how the research ran. I built a reusable AI research
            agent: modular modes that took raw discovery calls through
            competitor analysis, a PRD, user stories, and flow diagrams — each
            step feeding the next. It&rsquo;s what let one designer work across
            465 transcripts and seven competitor teardowns and still move from
            concept to feedback{" "}
            <span className="text-heading-orange font-bold">~40% faster</span>.
            The walkthrough below shows it running the full pipeline.
          </p>
        </div>
        <Video
          src="/videos/method-slide-10-agent-build.mp4"
          poster="/images/method-slide-10-agent-build-poster.png"
          label="The reusable AI research agent running the full pipeline"
        />

        <Card className="!p-8 mt-8 mb-4">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
            What customers told me
          </span>
          <p className="text-white text-[22px] md:text-[26px] leading-[140%] italic font-light mb-4">
            &ldquo;I import purchase orders from Excel, and manually updating is
            very difficult and prone to mistakes.&rdquo;
          </p>
          <p className="text-white/60 text-[14px] uppercase tracking-wider">
            — Prospect discovery interview
          </p>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/method-competitor-research.png"
            alt="Competitor audit across seven inventory products"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/method-impact-effort-matrix.png"
            alt="Impact / effort matrix used to prioritise the MVP"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── The scope decision (STAR) ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The scope decision — locations, not warehouses
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The biggest scope call was what <em>not</em> to build. The reflex in
            inventory software — and my own first instinct — was the deep
            hierarchy: warehouses, zones, aisles, bins. Before committing the
            team to it, I pressure-tested against real customers, and the
            majority operated at the{" "}
            <span className="text-heading-orange font-bold">
              location level only
            </span>
            , even where their current tools offered the depth. So we shipped
            flat &ldquo;locations&rdquo; — feasible inside the window, with lot
            and bin depth deferred to a data-informed v2 rather than guessed at
            up front.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What I learned
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Building for the most complex case is the trap. The discipline
              that mattered wasn&rsquo;t shipping faster — it was{" "}
              <span className="font-bold">
                validating the assumption before committing
              </span>
              , so a 10-week MVP didn&rsquo;t carry months of depth no one would
              use.
            </p>
          </Card>
        </div>
      </section>

      {/* ── The inventory model, phased ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Built in three phases — see it, move it, anticipate it
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Rather than ship everything at once, I sequenced the model so each
            phase stands on its own: first <strong>see</strong> stock by
            location, then <strong>move</strong> it through fulfillment, then{" "}
            <strong>anticipate</strong> what to reorder.
          </p>
        </div>
        <Video
          src="/videos/method-slide-16-phasing.mp4"
          poster="/images/method-slide-16-phasing-poster.png"
          label="The inventory model — see it, move it, anticipate it"
        />
      </section>

      {/* ── Design principles ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Design principles
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[24px] leading-[150%] mb-6">
            Four principles carried every decision — and the first one is the
            spine of the whole product.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                01
              </span>
              <h3 className="text-white text-[20px] font-bold mb-2">
                Derived status, never stored
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                One formula —{" "}
                <span className="text-heading-orange font-semibold">
                  Available = On hand − Committed + Expected
                </span>{" "}
                — computed everywhere, plus three status axes recomputed live
                from the lines beneath them. A status can never quietly lie.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                02
              </span>
              <h3 className="text-white text-[20px] font-bold mb-2">
                Ship, not deliver
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                The MVP records when goods <span className="italic">leave</span>
                , not when they arrive — because without carrier integration we
                can&rsquo;t observe delivery. Words should only claim what the
                system knows.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                03
              </span>
              <h3 className="text-white text-[20px] font-bold mb-2">
                Structure available, never mandatory
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                One fulfillment flow, three speeds — all-in-one, save &amp;
                resume, or quick-ship. The structure is there when an order
                needs it and out of the way when it doesn&rsquo;t.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                04
              </span>
              <h3 className="text-white text-[20px] font-bold mb-2">
                Friction proportional to consequence
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                A flag-flip unpack is a one-tap undo; a revert that moves stock
                and reverses billing earns a modal and a reason. The asymmetry
                is intentional.
              </p>
            </Card>
          </div>
        </div>
        <LightboxImage
          src="/images/method-slide-19-status-axes.png"
          alt="One formula, three derived status axes — stale status becomes impossible"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── The Items app ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The Items app — every number, one source of truth
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            &ldquo;See it&rdquo; first: live stock by location, with Available
            computed the same way everywhere it appears. This is the
            visibility payoff customers asked for — the number they could
            never get before.
          </p>
        </div>
        <Video
          src="/videos/method-slide-18-items.mp4"
          label="The Items app — live stock by location"
        />
        <div className="mt-4">
          <LightboxImage
            src="/images/method-see-items.png"
            alt="Items app — stock levels by location"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Solution flows: SO → Pick·Pack·Ship ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Sales Order → Pick · Pack · Ship
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Overselling was the most documented operational failure — reps
            committing quantities the warehouse didn&rsquo;t have. Every order
            line now shows live Available with a{" "}
            <span className="text-heading-orange font-bold">
              non-blocking oversell warning
            </span>{" "}
            — informing, not gating — and reserves stock the moment it&rsquo;s
            committed.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I scored three fulfillment options and shipped a hybrid: a
            wizard as the interaction, persistent pick lists and fulfillment
            status as the infrastructure — because a wizard without state
            tracking is half a feature. The packing slip is generated at pack
            time with a{" "}
            <span className="text-heading-orange font-bold">
              &ldquo;Show prices&rdquo; toggle, off by default
            </span>{" "}
            — one checkbox straight out of a customer&rsquo;s words:{" "}
            <span className="italic">
              &ldquo;We need a delivery ticket… toggle the price list off,
              where the customer does not see it.&rdquo;
            </span>
          </p>
        </div>
        <Video
          src="/videos/method-slide-23-pick-pack.mp4"
          label="The pick, pack and ship flow"
        />
        <div className="space-y-4 mt-4">
          <LightboxImage
            src="/images/method-slide-20-so-list.png"
            alt="Sales Orders list — three derived status columns for triage"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/method-slide-21-oversell-warning.png"
            alt="Live Available with a non-blocking oversell warning on the order line"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── The PO ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The PO — the SO&rsquo;s mirror, where Expected comes from
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Receiving had the same continuity disease in reverse — POs in
            Excel, bills re-keyed by hand. I designed PO-centric receiving: a
            Receive action pre-fills the receipt, partial receipts are native,
            and saving syncs the receipt and bill straight to the connected
            books in one step. Zero double entry — and the{" "}
            <span className="text-heading-orange font-bold">Expected</span> leg
            of the Available formula is finally complete. Backorders stay
            single-line statuses, and incoming stock auto-allocates to the
            order that triggered it.
          </p>
        </div>
        <LightboxImage
          src="/images/method-po-list.png"
          alt="Purchase Orders list — derived status columns mirroring the sales order"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Permissions / RBAC ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Permissions — &ldquo;Same picture for all. Different powers.&rdquo;
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            <span className="text-heading-orange font-bold">
              See wide, act narrow.
            </span>{" "}
            Access is role-based, least-privilege and deny-by-default. Every
            role reads the same order and its full status — the shared picture
            the research found missing — but each role&rsquo;s{" "}
            <span className="italic">actions</span> map to a scoped permission
            set. Money and stock are permissions of their own. The prototype
            enforces it live: switch to Warehouse and prices vanish.
          </p>
        </div>
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="p-4 text-white/60 text-[13px] uppercase tracking-wider font-bold">
                    Action
                  </th>
                  {["Sales / Admin", "Warehouse", "Picker / Shipper", "Owner"].map(
                    (r) => (
                      <th
                        key={r}
                        className="p-4 text-center text-white/80 text-[13px] uppercase tracking-wider font-bold"
                      >
                        {r}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {[
                  ["See full order + status", true, true, true, true],
                  ["Create / edit sales orders", true, false, false, true],
                  ["Pick & pack", false, true, true, true],
                  ["Ship", false, true, true, true],
                  ["Receive POs", false, true, false, true],
                  ["See prices & money", true, false, false, true],
                  ["Manage users & permissions", false, false, false, true],
                ].map((row) => (
                  <tr
                    key={row[0] as string}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="p-4 text-white/80">{row[0] as string}</td>
                    {(row.slice(1) as boolean[]).map((on, i) => (
                      <td key={i} className="p-4 text-center">
                        {on ? (
                          <span className="text-heading-orange font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-white/25">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <p className="text-white/60 text-[15px] leading-[150%] mt-4">
          Separation of duties in practice — most staff hold a single role and
          only ever see that view; owners hold all and switch among their own
          hats. No one can escalate into access they weren&rsquo;t granted.
        </p>
      </section>

      {/* ── Usability finding — Undo → Revert ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Undo was too light — so I built Revert
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Across eight moderated sessions with warehouse and distribution
            users on a working prototype, the mistake-correction task failed —
            the inline per-row undo icon felt trivially light for an action
            that moves stock and reopens an order. So I rebuilt it: undo became
            a{" "}
            <span className="text-heading-orange font-bold">
              Revert button and modal
            </span>
            , with a compulsory reason per line and a clear &ldquo;can&rsquo;t
            be undone&rdquo; warning. Reasons write to Method&rsquo;s existing
            audit log — reuse over rebuild — and doubled as product insight
            (the top revert reason was &ldquo;customer changed order&rdquo;).
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              What I learned
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Friction should be proportional to consequence. The best design
              in the project came from letting a usability finding overturn UI
              I&rsquo;d already shipped.
            </p>
          </Card>
        </div>
        <Video
          src="/videos/method-slide-27-revert.mp4"
          label="The Revert flow — modal with a compulsory reason"
        />
        <div className="mt-4">
          <LightboxImage
            src="/images/method-slide-28-unpack.png"
            alt="Unpack (light, per-row) versus Revert (modal + reason) — friction matched to consequence"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Design system & governance ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Design system &amp; governance
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Two primitives — a standardised modal and a status pill/badge —
            were drifting across designers and flows. Not a screen problem, a
            system problem. I aligned the team on one spec per use case, then
            shipped Dialog, StatusBadge, Badge, DataTable, ActionBar, and Toast
            to a shared library, each documented in Storybook with variants,
            states, props, a11y, and do&rsquo;s &amp; don&rsquo;ts. App code can
            pull components{" "}
            <span className="text-heading-orange font-bold">
              only from that shared library
            </span>{" "}
            — never hand-rolled one-offs, enforced automatically — so the
            system can&rsquo;t drift again.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
              The system — derived status badges + shared components
            </span>
            <div className="space-y-3">
              {[
                {
                  axis: "Order",
                  pills: [
                    ["Open", "neutral"],
                    ["Partially Shipped", "warning"],
                    ["Fully Shipped", "success"],
                  ],
                },
                {
                  axis: "Fulfillment",
                  pills: [
                    ["Not started", "neutral"],
                    ["Pick in progress", "info"],
                    ["Picked", "info"],
                    ["Packed", "warning"],
                    ["Shipped", "success"],
                  ],
                },
                {
                  axis: "Invoice",
                  pills: [
                    ["Not invoiced", "neutral"],
                    ["Partially invoiced", "warning"],
                    ["Fully invoiced", "success"],
                  ],
                },
              ].map((row) => (
                <div
                  key={row.axis}
                  className="flex flex-wrap items-center gap-2"
                >
                  <span className="text-white/50 text-[12px] uppercase tracking-wider w-[96px] shrink-0">
                    {row.axis}
                  </span>
                  {row.pills.map(([label, tone]) => (
                    <span
                      key={label}
                      className="text-[12px] font-semibold px-3 py-1 rounded-full"
                      style={
                        tone === "success"
                          ? { backgroundColor: "rgba(23,178,106,.14)", color: "#17b26a" }
                          : tone === "warning"
                          ? { backgroundColor: "rgba(234,170,8,.14)", color: "#eaaa08" }
                          : tone === "info"
                          ? { backgroundColor: "rgba(37,99,201,.18)", color: "#7aa7f0" }
                          : { backgroundColor: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.6)" }
                      }
                    >
                      {label}
                    </span>
                  ))}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/10">
                {["Dialog", "StatusBadge", "Badge", "DataTable", "ActionBar", "Toast"].map(
                  (c) => (
                    <span
                      key={c}
                      className="text-[12px] font-mono px-3 py-1 rounded-md bg-white/5 text-white/70"
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── AI strategy ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          AI strategy — automate perception, augment action
        </h2>
        <div className="border-t border-white/20 pt-6 mb-10">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Grounded in Google&rsquo;s PAIR guidelines, I drew one line: AI
            automates <span className="italic">perception</span> (status
            derivation, anomaly detection, ranking) but only{" "}
            <span className="italic">augments</span> action — it drafts, flags,
            and ranks; the human confirms. Critically,{" "}
            <span className="text-heading-orange font-bold">
              AI never commits stock or money
            </span>
            . Automation is earned on a trust ladder — v1 drafts and explains,
            v2 one-click approve once edit-distance shows acceptance, v3
            auto-order within guardrails, with revert as the safety net. Each
            embed below is tagged with how far it actually got.
          </p>
        </div>

        {/* Flagship — Reorder Assistant */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-white text-[22px] font-bold">
              Reorder Assistant
            </h3>
            <span
              className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "rgba(23,178,106,.14)", color: "#17b26a" }}
            >
              Flagship · Beta
            </span>
          </div>
          <p className="text-white/80 text-[16px] leading-[150%] mb-4 max-w-[760px]">
            Spots items that are out of stock with no inbound PO, then pre-seeds
            a Draft PO — suggested vendor, lines, and quantities the buyer edits
            and commits. The AI drafts; the human places the order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LightboxImage
              src="/images/method-ai-reorder-insight.png"
              alt="Reorder Assistant — insight card flagging out-of-stock items with no inbound PO"
              className="w-full rounded-[16px]"
            />
            <LightboxImage
              src="/images/method-ai-reorder-draft.png"
              alt="Reorder Assistant — pre-seeded Draft PO the buyer edits and commits"
              className="w-full rounded-[16px]"
            />
          </div>
        </div>

        {[
          {
            name: "Oversell assist",
            chip: "Beta",
            tone: "beta",
            img: "method-ai-oversell",
            alt: "AI oversell assist — suggests a location transfer or Draft PO to cover a shortfall",
            desc: "When an order line exceeds what's available, it suggests the fix — a transfer from a location with surplus, or a Draft PO to cover the shortfall.",
          },
          {
            name: "Receiving discrepancy flag",
            chip: "Beta",
            tone: "beta",
            img: "method-ai-receiving",
            alt: "AI receiving discrepancy flag — a short receipt flagged with a reason",
            desc: "A short or over receipt is flagged at the line with a reason to pick — so variances get resolved, not silently absorbed.",
          },
          {
            name: "Transfer rebalance",
            chip: "Beta",
            tone: "beta",
            img: "method-ai-rebalance",
            alt: "AI transfer rebalance — short-location and surplus detection drafting a transfer",
            desc: "Detects a short location alongside surplus elsewhere and drafts a stock transfer to even them out.",
          },
          {
            name: "Shrinkage watch",
            chip: "Beta",
            tone: "beta",
            img: "method-ai-shrinkage",
            alt: "AI shrinkage watch — grouped down-adjustments flagged to investigate",
            desc: "Groups repeated downward adjustments and flags the pattern to investigate — quiet shrinkage made visible.",
          },
          {
            name: "Duplicate detection",
            chip: "Wizard-of-Oz",
            tone: "woz",
            img: "method-ai-dedup",
            alt: "AI duplicate detection — similarity-based merge suggestions for near-duplicate items",
            desc: "Similarity-based matching surfaces near-duplicate items to merge before the catalogue fragments. Validated as a method before the model was built.",
          },
          {
            name: "Pick-route suggestion",
            chip: "Concept",
            tone: "concept",
            img: "method-ai-pickroute",
            alt: "AI pick-route suggestion — an overridable picking order",
            desc: "Suggests an efficient, overridable picking order — route planning isn't a picker's craft, so it leans automated.",
          },
        ].map((f) => (
          <div key={f.name} className="mb-12">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-white text-[22px] font-bold">{f.name}</h3>
              <span
                className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
                style={
                  f.tone === "woz"
                    ? { backgroundColor: "rgba(234,170,8,.14)", color: "#eaaa08" }
                    : f.tone === "concept"
                    ? { backgroundColor: "rgba(109,64,200,.20)", color: "#b69cf0" }
                    : { backgroundColor: "rgba(23,178,106,.14)", color: "#17b26a" }
                }
              >
                {f.chip}
              </span>
            </div>
            <p className="text-white/80 text-[16px] leading-[150%] mb-4 max-w-[760px]">
              {f.desc}
            </p>
            <LightboxImage
              src={`/images/${f.img}.png`}
              alt={f.alt}
              className="w-full rounded-[16px]"
            />
          </div>
        ))}
      </section>

      {/* ── Outcomes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Outcomes</h2>
        <div className="border-t border-white/20 pt-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              +25%
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              sales-pipeline engagement — reps could promise stock with
              confidence
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              +30%
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              order-to-cash workflow completion — continuity, no tool-switching
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
              40%
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-1">
              faster concept-to-feedback via AI-assisted workflows
            </p>
          </div>
        </div>
        <p className="text-white/70 text-[18px] leading-[150%]">
          Beyond the headline numbers, early signals were healthy across the
          board — strong adoption, fast fulfillment, and a low pick-list revert
          rate — and the work left foundations behind it: a governed design
          system other teams build on, and a reusable research capability
          adopted past this project.
        </p>
      </section>

      {/* ── Reflection ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflection</h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              What I learned
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Enterprise UX isn&rsquo;t screens — it&rsquo;s state, continuity,
              and accountability. Words are system design
              (&ldquo;ship, not deliver&rdquo;). And AI earns trust through
              posture, not capability.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Went well
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Scoring options before committing · letting usability findings
              overturn shipped UI (undo → revert) · scoping by principle —
              locations, ship-not-deliver — rather than by feature pressure.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Would do differently
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Open the carrier-integration conversation in parallel. Shipping
              &ldquo;ship, not deliver&rdquo; was the right MVP cut — but
              closing the loop to &ldquo;Delivered&rdquo; shouldn&rsquo;t have
              been a Phase-2 gap.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              What&rsquo;s next
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              <span className="font-bold">Near-term:</span> backorders &amp;
              reorder awareness, a dedicated audit log, low-stock
              notifications, barcode, and the lot/serial/bin depth we validated
              then deferred. <span className="font-bold">Medium-term:</span>{" "}
              carrier integration (finally unlocking &ldquo;Delivered&rdquo;)
              and a demand-forecasting model v2.{" "}
              <span className="font-bold">Strategic:</span> a Katana-class
              connector for businesses that outgrow native inventory.
            </p>
          </Card>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
