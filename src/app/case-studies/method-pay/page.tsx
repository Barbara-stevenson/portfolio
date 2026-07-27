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
 * the Method Pay deck.
 */
function Video({
  src,
  poster,
  label,
  aspect = "3018 / 1810",
}: {
  src: string;
  poster?: string;
  label?: string;
  /** Reserves the right box before metadata loads, so nothing shifts. */
  aspect?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reaching the section starts the walkthrough from the top.
          if (el.paused) {
            try {
              el.currentTime = 0;
            } catch {
              /* not seekable yet — play from wherever it starts */
            }
            el.play().catch(() => {});
          }
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
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
      preload="metadata"
      aria-label={label}
      style={{ aspectRatio: aspect }}
      className="w-full rounded-[16px] bg-black block"
    />
  );
}

/** Small status chip used on the AI features inside each surface. */
function AIChip({ label = "AI · Beta" }: { label?: string }) {
  return (
    <span
      className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: "rgba(23,178,106,.14)", color: "#17b26a" }}
    >
      {label}
    </span>
  );
}

export default function MethodPayCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/method-inventory",
        nextHref: "/case-studies/arm",
        label: "METHOD PAY",
        title:
          "Embedding payments into Method CRM — turning a bolted-on gateway into a native money surface.",
        impactItems: [
          "16 → 23% of accounts now take payments",
          "$19M annualised GPV run-rate, from zero",
          "$5.2K → $110K annualised fee revenue",
          "Application completion 68 → 84%",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/method-inventory",
          label: "METHOD CRM",
          description:
            "An operational inventory experience for small product businesses, built inside Method CRM.",
        },
        next: {
          href: "/case-studies/arm",
          label: "ARM",
          description:
            "Unifying five financial segments into one consumer-grade investing platform.",
        },
      }}
    >
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/methodpay-card.png"
          alt="Method Pay running inside Method CRM"
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
              Design Lead · Method Pay
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Duration
            </span>
            <span className="text-white text-[20px]">
              2025 → GA 2026 (pilot Sept 2025)
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Deliverables
            </span>
            <span className="text-white text-[20px]">
              Provider evaluation · hybrid architecture · six money surfaces ·
              adoption strategy · measurement plan
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Context
            </span>
            <span className="text-white text-[20px]">
              Method CRM · US small businesses · Stripe embedded components
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Method runs the whole customer relationship — contacts, pipeline,
            estimates, invoices. But the moment money actually moved, the
            experience left the platform. Payments ran through a bolted-on
            third-party gateway with its own setup, its own dashboard, and its
            own support queue.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The invoice lived in Method. The payment lived somewhere else. The
            problem was never &ldquo;we lack payments&rdquo; — it was that we
            didn&rsquo;t{" "}
            <span className="text-heading-orange font-bold">own</span> them. Ten
            gateways in the picker, and per transaction exactly one margin
            earner: whichever one the merchant happened to choose. The software
            doing the work captured none of the money passing through it.
          </p>
        </div>
        <LightboxImage
          src="/images/methodpay-context-gateway.png"
          alt="The gateway era — Method's payment gateway picker listing ten third-party providers"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Stats Row ── */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            84%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            of accounts had never enabled payments at all
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            20%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            our share of processing revenue — the gateway took the other 80%
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            41%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            six-month payment retention — the incumbent baseline to beat
          </p>
        </div>
      </section>

      <section className="mb-16">
        <p className="text-white/70 text-[18px] leading-[150%]">
          Tiny share × tiny attach rate meant annualised application-fee revenue
          of roughly{" "}
          <span className="text-heading-orange font-bold">$5.2K</span> against a{" "}
          <span className="text-heading-orange font-bold">$100M</span> gross
          payment volume ambition for 2027. The gap between those two numbers is
          this case study. Read properly, it was an{" "}
          <em>activation</em> problem wearing a payments costume — the growth
          was sitting inside the existing base, not in new markets.
        </p>
      </section>

      {/* ── How might we ── */}
      <section className="mb-16">
        <Card className="!p-8">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
            How might we
          </span>
          <p className="text-white text-[22px] md:text-[26px] leading-[140%] italic font-light">
            &ldquo;How might we make taking a payment feel like part of Method —
            and make not using it feel like the workaround?&rdquo;
          </p>
        </Card>
        <p className="text-white/70 text-[18px] leading-[150%] mt-6">
          The opportunity was never to out-build Stripe. It was to answer what
          payments look like when they belong to the tool where the work already
          happens. Every decision below traces back to that sentence.
        </p>
      </section>

      {/* ── Research ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Research</h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[24px] leading-[150%] mb-8">
            I studied two markets before designing anything: how vertical
            platforms embed payments into an existing base (HubSpot, Keap,
            Jobber, QuickBooks, Zoho) and how payment-native products design the
            payment layer itself (Stripe, Square, Adyen, Braintree, GoCardless).
            One taught <span className="italic">adoption</span>; the other set
            the <span className="italic">craft bar</span>. Alongside it: 14
            merchant interviews across four situations, payments-tagged support
            tickets, and shadowed sales and CS calls.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                14
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                merchant interviews — on the incumbent gateway, no gateway,
                churned, and high-volume
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                10
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                products audited across vertical platforms and payment-native
                processors
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                5
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                merchant segments, each with its own entry point and adoption
                strategy
              </p>
            </Card>
          </div>
        </div>

        {/* What merchants said */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
              On money
            </span>
            <p className="text-white text-[18px] leading-[150%] italic mb-3">
              &ldquo;When do I get my money?&rdquo;
            </p>
            <p className="text-white/70 text-[15px] leading-[150%]">
              Every conversation reached this question. Fees were the stated
              objection; cash-flow speed was the felt one. It drove the payouts
              surface.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
              On switching
            </span>
            <p className="text-white text-[18px] leading-[150%] italic mb-3">
              &ldquo;My payments work today. Don&rsquo;t break them.&rdquo;
            </p>
            <p className="text-white/70 text-[15px] leading-[150%]">
              Incumbents survive on inertia, not love. It drove parallel-rails
              migration — the existing gateway keeps running, untouched.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-3">
              On setup
            </span>
            <p className="text-white text-[18px] leading-[150%] italic mb-3">
              &ldquo;I set this up once, years ago. I&rsquo;d never find it
              again.&rdquo;
            </p>
            <p className="text-white/70 text-[15px] leading-[150%]">
              Payments config was invisible until something broke. It drove
              points of entry: meet merchants in the workflow, not in settings.
            </p>
          </Card>
        </div>

        <LightboxImage
          src="/images/methodpay-competitive-scan.svg"
          alt="Competitive scan board — vertical platforms studied for adoption, payment-native products studied for craft"
          className="w-full md:w-2/3 mx-auto block rounded-[16px] bg-white"
        />
      </section>

      {/* ── The research agent ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          I built a research agent, then made it prove itself
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The pipeline runs competitor research → flow options → heuristic
            scoring → diagrams → PRD and user stories, parameterised by
            industry, feature and source domains. The one thing I added was a{" "}
            <span className="text-heading-orange font-bold">
              verification pass
            </span>{" "}
            — a second agent whose only job is to refute. Two independent
            sources or the claim doesn&rsquo;t ship. It caught a wrong dispute
            fee in my own notes: $25, when Stripe charges $15 and Square charges
            nothing. That&rsquo;s why I trust the rest of the report.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Three checkpoints stay mine — the competitor list, the axes of
            comparison, and the synthesis. Nothing moves to the next stage until
            I&rsquo;ve signed it off.
          </p>
        </div>
        <Video
          src="/videos/methodpay-agent-pipeline.mp4"
          poster="/images/methodpay-agent-pipeline-poster.png"
          aspect="16 / 9"
          label="The research agent running the full pipeline, including the verification pass"
        />

        <Card className="!p-8 mt-8 mb-4">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
            What it found
          </span>
          <p className="text-white text-[20px] leading-[150%] mb-4">
            Of ten products, only Shopify lets a merchant say what happens to
            returned stock — and even there it&rsquo;s one checkbox that
            defaults to on, so &ldquo;came back fine&rdquo; and &ldquo;came back
            broken&rdquo; are the same answer. QuickBooks restocks silently. You
            find out when the broken unit ships to the next customer.
          </p>
          <p className="text-white/70 text-[17px] leading-[150%]">
            I scored three refund models against seven usability heuristics.
            Option C won six of seven and{" "}
            <span className="text-heading-orange font-bold">
              lost efficiency by two points
            </span>{" "}
            — it asks one question the others skip. That trade{" "}
            <em>was</em> the decision, so it stayed visible rather than being
            scored away. It&rsquo;s why Method&rsquo;s refund has three stock
            outcomes, not a checkbox.
          </p>
        </Card>
      </section>

      {/* ── Segments & rollout ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Five segments, five strategies — not one launch
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Same product, five different entrances into five different lives.
            The largest and most reachable was the 84% — existing users
            invoicing in Method with no gateway at all. The revenue segment was
            the smallest: high-volume merchants doing $50K+ a month, who get
            direct outreach and a rate conversation rather than a prompt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              tag: "Default-in",
              who: "New small business",
              body: "Just signed up, still juggling separate tools for invoicing and payments.",
              entry: "Payments as a prominent onboarding step",
            },
            {
              tag: "Activate",
              who: "Existing user, no gateway",
              body: "Uses Method for invoicing only — the 84%. The largest and most reachable segment.",
              entry: "Invoice “Pay now” + in-workflow prompts",
            },
            {
              tag: "Court",
              who: "High-volume SMB",
              body: "$50K+ a month in payments. Small in count, outsized in GPV — the revenue segment.",
              entry: "Direct outreach and rate conversations",
            },
            {
              tag: "Migrate",
              who: "Incumbent-gateway user",
              body: "Already processing through the legacy gateway — familiar, but constrained.",
              entry: "Guided migration path and incentives",
            },
            {
              tag: "Win back",
              who: "Churned payments user",
              body: "Tried payments before and left over reliability or cost. Sceptical by earned right.",
              entry: "Invoice moments plus concrete proof",
            },
          ].map((s) => (
            <Card key={s.tag}>
              <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
                {s.tag}
              </span>
              <h3 className="text-white text-[20px] font-bold mb-2">{s.who}</h3>
              <p className="text-white/80 text-[16px] leading-[150%] mb-3">
                {s.body}
              </p>
              <p className="text-white/60 text-[15px] leading-[150%]">
                <span className="uppercase tracking-wider text-[12px] font-bold">
                  Entry ·{" "}
                </span>
                {s.entry}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Who could even see it — a ladder, not a launch
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The launch-date argument was the wrong argument. I reframed it as an
            exposure sequence: five rungs, each opening only after the last one
            held, each with a different audience and a different enablement bar
            — so the launch of a money product never became a money incident.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              ["1", "Hidden", "Behind a feature flag. Built and tested with zero exposure."],
              ["2", "Targeted accounts", "Manually enabled through sales conversations. Hand-picked."],
              ["3", "Low-risk accounts", "Flag opened by risk profile — merchants discover and apply."],
              ["4", "Limited beta", "Broader availability, with sales, support and PS briefed."],
              ["5", "GA & migration", "Staged rollout to everyone, incumbent migration path open."],
            ].map(([n, title, body]) => (
              <Card key={n} className="!p-5">
                <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                  {n}
                </span>
                <h3 className="text-white text-[17px] font-bold mb-2">
                  {title}
                </h3>
                <p className="text-white/70 text-[14px] leading-[150%]">
                  {body}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <p className="text-white/70 text-[18px] leading-[150%]">
          Enablement shipped before exposure at every rung — the org is part of
          the interface. Application approval gated every merchant regardless of
          stage.
        </p>
      </section>

      {/* ── Decision 1: the provider ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Build vs. partner. Then which partner.
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Building processing from scratch meant owning PCI compliance, KYC,
            fraud and disputes — years of work that isn&rsquo;t Method&rsquo;s
            craft. Partnering meant choosing the platform whose embedded surface
            we&rsquo;d live inside. We ran a structured bake-off between Stripe
            and a US-focused challenger on compliance coverage, embedded
            component maturity, pricing economics, and scale.
          </p>
          <Card className="!p-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              My criterion
            </span>
            <p className="text-white text-[20px] leading-[150%]">
              Embedded-component maturity. I was choosing the UI we&rsquo;d live
              inside — the rate card mattered less than that. Stripe won: the
              deepest embedded toolkit, battle-tested KYC/KYB, and room to grow
              internationally without re-platforming.
            </p>
          </Card>
        </div>
        <LightboxImage
          src="/images/methodpay-provider-bakeoff.svg"
          alt="Provider bake-off matrix — compliance coverage, embedded-component maturity, global scale, fee model"
          className="w-full rounded-[16px] bg-white"
        />
      </section>

      {/* ── Decision 2: the architecture ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Borrow the vault. Own the storefront.
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Where users <em>act</em> on regulated data, compliance should sit
            with the platform certified to hold it. Where users{" "}
            <em>read</em>, the experience must be unmistakably Method. Two
            embedded Stripe surfaces made the cut —{" "}
            <span className="text-heading-orange font-bold">
              KYC/KYB onboarding and card checkout
            </span>{" "}
            — because both carry real liability <em>and</em> both could be
            themed to Method. Everything else is Method&rsquo;s own UI over
            Stripe&rsquo;s APIs.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The same principle settled the brand question. I pushed for
            white-label — Method Pay as Method&rsquo;s product, not
            &ldquo;Powered by Stripe&rdquo; — with HubSpot&rsquo;s adoption data
            as the evidence. The nuance that won it wasn&rsquo;t binary, it was
            placement: disclose Stripe at the KYC and bank moments, where a name
            regulators recognise <em>is</em> the reassurance.
          </p>
          <Card className="!p-8">
            <p className="text-white text-[22px] md:text-[26px] leading-[140%] italic font-light">
              &ldquo;Every screen I gave to Stripe was a screen where the
              liability outweighed the brand value.&rdquo;
            </p>
          </Card>
        </div>
        <LightboxImage
          src="/images/methodpay-hybrid-architecture.svg"
          alt="Hybrid architecture — two embedded Stripe surfaces, every display surface custom Method UI over the APIs"
          className="w-full rounded-[16px] bg-white"
        />
      </section>

      {/* ── The flows ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Three money flows — and who owns each step
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The tints are the argument: violet steps live inside Stripe&rsquo;s
            certified components, blue steps are ours over the APIs. Note the
            &ldquo;Needs information&rdquo; loop in the application flow — it
            loops back, it never dead-ends.
          </p>
        </div>
        <LightboxImage
          src="/images/methodpay-user-flows.svg"
          alt="Three end-to-end money flows — application, getting paid, and refunds — with Stripe-owned and Method-owned steps tinted differently"
          className="w-full rounded-[16px] bg-white"
        />
      </section>

      {/* ── Surface 1: onboarding ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Applying to move money — without leaving Method
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            A regulated identity check and the biggest drop-off in the funnel.
            The old world sent merchants to a gateway&rsquo;s site and hoped
            they came back. I embedded Stripe&rsquo;s onboarding component in
            Method, themed to our design system, and wrapped it in{" "}
            <span className="text-heading-orange font-bold">
              a status ladder the merchant can always see
            </span>
            . The wait is the worst part of any application, so I made the wait
            legible: Processing → Needs information → In review → Approved, with
            Declined routed to a human team instead of a dead end.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Nothing switches off while they apply. The old gateway keeps
            running on parallel rails, and the approved screen still links back
            to it — merchants switch when they see it working. We went first,
            moving Method&rsquo;s own billing across before asking anyone else.
          </p>
        </div>
        <Video
          src="/videos/methodpay-onboarding.mp4"
          label="Application and onboarding — Stripe's KYC component themed to Method, wrapped in a visible status ladder"
        />
        <p className="text-white/60 text-[15px] leading-[150%] mt-4">
          &ldquo;The fields are Stripe&rsquo;s; the flow is ours.&rdquo; The
          journey, the states, and the seams were the design work.
        </p>
      </section>

      {/* ── Surface 2: getting paid ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Setup meets the merchant where the money already is
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Payments config lived in Settings — findable if you went looking,
            but nobody goes looking. Merchants don&rsquo;t wake up wanting to
            configure payments; they wake up wanting to get paid. So{" "}
            <span className="text-heading-orange font-bold">
              usage has a home, setup doesn&rsquo;t
            </span>
            . Payments keeps its page for watching money move. Setup meets
            merchants in the work: on the Invoices hub beside what&rsquo;s owed,
            and on the invoice itself, where Payment collection makes the rail a
            per-invoice choice. Graded later, the invoice-flow prompt converted
            about 3× the settings page.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            A quick win alongside it: status pills weren&rsquo;t a Method
            component, so teams had been improvising them. I audited the
            variants, standardised the states so invoices and payments share one
            vocabulary, and contributed the component back to the system.
          </p>
        </div>
        <Video
          src="/videos/methodpay-checkout.mp4"
          label="Getting paid — payment collection on the invoice, and the customer-facing checkout"
        />
        <Card className="!p-8 mt-8">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h3 className="text-white text-[20px] font-bold">Dunning drafts</h3>
            <AIChip />
          </div>
          <p className="text-white/80 text-[16px] leading-[150%]">
            Chasing overdue invoices is the work merchants skip, so the AI
            drafts the whole escalating sequence — gentle first reminder, firmer
            second, final notice — queued most-overdue first. Nothing sends
            until the merchant approves each one, and there is no &ldquo;send
            all.&rdquo; The AI writes the awkward part; the merchant still
            decides to send it.
          </p>
        </Card>
      </section>

      {/* ── Surface 3: transactions ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Every dollar, one legible ledger
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Merchants don&rsquo;t think in &ldquo;charges&rdquo; — they think
            &ldquo;did the Hendersons pay, and what did it cost me?&rdquo; The
            old gateway answered in processor-speak, in someone else&rsquo;s
            dashboard. This is a custom Method surface: payments, refunds and
            disputes in one list with real-time status, filter and search by
            customer, and a detail view that shows the money honestly —{" "}
            <span className="text-heading-orange font-bold">
              gross → application fee → processing fee → net
            </span>
            . Showing our own fee plainly is a trust decision, not an accident.
          </p>
        </div>
        <Video
          src="/videos/methodpay-transactions.mp4"
          label="The transactions ledger — payments, refunds and disputes with a gross-to-net detail view"
        />
      </section>

      {/* ── Surface 4: payouts ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          &ldquo;Where&rsquo;s my money?&rdquo; — answered in-product
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The most emotionally loaded question in payments is about the
            payout. With a bolt-on gateway, merchants logged into a
            processor&rsquo;s site to find their own money. Here every payout
            opens up: the balance separates what&rsquo;s spendable from
            what&rsquo;s still settling, and any deposit traces back to the
            payments and refunds behind it. A merchant who can answer
            &ldquo;why is this one short?&rdquo; doesn&rsquo;t need to open a
            ticket — and the itemised decomposition is what accountants actually
            need at month-end.
          </p>
        </div>
        <Video
          src="/videos/methodpay-payouts.mp4"
          label="Payouts — available versus pending balance, with every deposit decomposed into the payments behind it"
        />
      </section>

      {/* ── Surface 5: refunds ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          A refund is a decision, and Method can explain it
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            A refund carries information a processor never sees: why it
            happened, which lines came back, and whether the stock can be sold
            again. So the modal asks — partial or full, a business reason, and a{" "}
            <span className="text-heading-orange font-bold">
              stock outcome: returned to stock, written off, or not returned
            </span>
            . A processor structurally can&rsquo;t ask that question, because it
            doesn&rsquo;t own the order. That&rsquo;s the bundled-CRM argument
            made concrete.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Card refunds take days to reach a statement, so I designed the
            waiting too: a pending state, an arrival estimate the moment you hit
            refund, and email copy telling the customer it landed. The problem
            was never speed — it was uncertainty. &ldquo;Where&rsquo;s my
            refund&rdquo; tickets became self-serve.
          </p>
        </div>
        <Video
          src="/videos/methodpay-refunds.mp4"
          label="The refund flow — partial or full, business reason, and one of three stock outcomes"
        />
        <Card className="!p-8 mt-8">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h3 className="text-white text-[20px] font-bold">
              Refund-reason clustering
            </h3>
            <AIChip />
          </div>
          <p className="text-white/80 text-[16px] leading-[150%]">
            Because reasons are captured as structured data rather than free
            text, they&rsquo;re countable. Three refunds on one SKU for
            &ldquo;wrong item shipped&rdquo; surfaced on its own and pointed at
            the pick process — a fulfilment problem found in payments data,
            with nobody running a report.
          </p>
        </Card>
      </section>

      {/* ── Surface 6: disputes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Disputes — a queue against the clock
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Miss the response window and the money is gone for good; once
            you&rsquo;ve responded there&rsquo;s nothing to do for weeks. So it
            lives in a strip that empties out, sorted by deadline, turning red
            three days out rather than when it&rsquo;s already late.{" "}
            <span className="text-heading-orange font-bold">
              Skip is first-class
            </span>{" "}
            — forcing a decision when you&rsquo;re missing a document produces
            bad decisions. And Accept shows its price: &ldquo;$230
            debited&rdquo; against &ldquo;3 items ready.&rdquo; Sometimes
            accepting is the cheaper call, and it should read like the business
            decision it is.
          </p>
        </div>
        <Video
          src="/videos/methodpay-disputes.mp4"
          label="The disputes queue — deadline-sorted, with skip first-class and accept priced honestly"
        />
        <Card className="!p-8 mt-8">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h3 className="text-white text-[20px] font-bold">
              Evidence assembly
            </h3>
            <AIChip />
          </div>
          <p className="text-white/80 text-[16px] leading-[150%]">
            Deadlines are tight and gathering proof is slow, so the AI pre-fills
            the packet and drafts the rebuttal. The move that earns trust is
            that it names what it <em>couldn&rsquo;t</em> find —
            &ldquo;Refund policy, not on file.&rdquo; A tool that hands back a
            full packet every time teaches you to stop reading it. On a money
            surface, &ldquo;AI never commits money&rdquo; isn&rsquo;t a
            limitation — it&rsquo;s the thesis.
          </p>
        </Card>
      </section>

      {/* ── Measurement ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Alive, then used, then paying
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Three rungs, each de-risking the next: proof of life (does real
            money move end to end?), proof of adoption (do merchants choose it,
            use it, and stay?), then proof of impact. You don&rsquo;t get to
            argue revenue until merchants have voted with usage.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It was measurable because it was instrumented before launch, not
            after. I co-authored the Amplitude tracking dictionary with the PM
            and analyst, and the rule was to{" "}
            <span className="text-heading-orange font-bold">
              instrument the state machine, not pageviews
            </span>{" "}
            — every event mirrors a state I designed, carrying entry point,
            segment and current gateway as properties. Two of the secondary
            metrics were deliberate counter-metrics: switchback rate, and
            support contacts per 100 payments. Every headline number went up, so
            I wanted at least two that could have gone against me.
          </p>
        </div>
        <div className="space-y-3">
          {[
            {
              rung: "Rung 1",
              title: "Proof of life",
              q: "Does it work end to end, with real money?",
              items: [
                ["1st", "real transaction — a live merchant, a live customer, a real charge"],
                ["Us", "Method ran its own SaaS billing on Method Pay before asking any merchant to"],
              ],
            },
            {
              rung: "Rung 2",
              title: "Proof of adoption",
              q: "Do merchants choose it, use it, and stay?",
              items: [
                ["Attach", "share of active accounts using Method Pay, starting from 0%"],
                ["Paid", "share of invoices actually paid through it — the workflow test"],
                ["Switch", "merchants who turn the legacy gateway off. Switchers, not just adopters"],
                [">41%", "six-month retention, beating the incumbent baseline"],
              ],
            },
            {
              rung: "Rung 3",
              title: "Proof of impact",
              q: "Does it move the business?",
              items: [
                ["$100M", "gross payment volume by end of 2027, from $0"],
                ["Fee revenue", "a configurable fee on every transaction, replacing the 20% rev-share"],
              ],
            },
          ].map((r) => (
            <Card key={r.rung}>
              <div className="flex items-baseline gap-3 flex-wrap mb-1">
                <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold">
                  {r.rung}
                </span>
                <h3 className="text-white text-[20px] font-bold">{r.title}</h3>
              </div>
              <p className="text-white/60 text-[16px] italic mb-4">{r.q}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {r.items.map(([v, l]) => (
                  <div key={v} className="flex items-baseline gap-3">
                    <span className="text-heading-orange text-[18px] font-bold shrink-0 min-w-[92px]">
                      {v}
                    </span>
                    <span className="text-white/80 text-[15px] leading-[150%]">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <p className="text-white/60 text-[15px] leading-[150%] mt-4">
          Each rung de-risks the next. Alongside them, the events themselves:
          application_started · application_step_completed ·
          application_status_changed · payment_succeeded · payout_landed ·
          migration_started.
        </p>
      </section>

      {/* ── Funnel leaks ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Three instrumentation findings
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            All three were invisible in aggregate. They surfaced because the
            events were named after the states, so each one pointed at
            something specific we could go change — two drop-offs sitting in a{" "}
            <span className="text-heading-orange font-bold">transition</span>{" "}
            rather than on a screen, and one ceiling on the entry point I&rsquo;d
            already called the winner. The screens tested fine in isolation.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-white text-[22px] font-bold mb-2">
            01 · The bank connection
          </h3>
          <p className="text-white/80 text-[16px] leading-[150%] mb-4 max-w-[820px]">
            The biggest single-step drop in the application. It looked like a
            trust problem and wasn&rsquo;t — Stripe was already disclosed on
            that step. It was a <em>preparation</em> problem: merchants arrived
            without their details to hand, went looking, and didn&rsquo;t come
            back. So I told them what to gather before starting, made bank login
            the default path with manual entry as fallback, added save-and-resume,
            and sent a nudge email linking straight back in.{" "}
            <span className="text-heading-orange font-bold">
              Application completion 68% → 84%.
            </span>
          </p>
          <LightboxImage
            src="/images/methodpay-leak-bank-connection.png"
            alt="The prepare-first screen — what to gather before starting, with save-and-resume"
            className="w-full rounded-[16px]"
          />
        </div>

        <div className="mb-10">
          <h3 className="text-white text-[22px] font-bold mb-2">
            02 · The winning entry point had a ceiling
          </h3>
          <p className="text-white/80 text-[16px] leading-[150%] max-w-[820px]">
            The invoice-flow prompt converted best — and only fires when a
            merchant is invoicing, which they do in bursts. With 84% of accounts
            never having enabled payments, most were never going to walk past
            it. Home converted at about a third of the rate, exactly as
            expected, but reached roughly{" "}
            <span className="text-heading-orange font-bold">
              4× as many never-enabled accounts
            </span>{" "}
            in a month. Home is owned by the onboarding growth team; what I
            brought was the entry-point question — at what point in the
            merchant&rsquo;s journey does this offer make sense, and what should
            gate it. It became the second-largest source of first payments,
            behind the invoice prompt and ahead of settings.
          </p>
          <LightboxImage
            src="/images/methodpay-home-entry-point.png"
            alt="The Home entry point — a rate-comparison offer addressed to the merchant's own processing volume, gated to pre-switch accounts"
            className="w-full rounded-[16px] mt-4"
          />
        </div>

        <div>
          <h3 className="text-white text-[22px] font-bold mb-2">
            03 · Approved, and then nothing happened
          </h3>
          <p className="text-white/80 text-[16px] leading-[150%] mb-4 max-w-[820px]">
            A gap between approval and the first payment: merchants got approved
            and then didn&rsquo;t send anything. Approval became a launchpad
            rather than a receipt — &ldquo;send your first payment link&rdquo;
            as the next action, pointed at an invoice they already had open.{" "}
            <span className="text-heading-orange font-bold">
              First-payment rate among approved merchants 43% → 71%.
            </span>
          </p>
          <p className="text-white/60 text-[14px] uppercase tracking-wider mb-3">
            Before · the receipt
          </p>
          <LightboxImage
            src="/images/methodpay-leak-activation-before.png"
            alt="Before — the approval screen as a receipt, with no next action"
            className="w-full rounded-[16px]"
          />
          <p className="text-white/60 text-[14px] uppercase tracking-wider mt-6 mb-3">
            After · the launchpad
          </p>
          <Video
            src="/videos/methodpay-activation-moment.mp4"
            label="After — approval as a launchpad, pointing at an invoice the merchant already has open"
          />
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Outcomes</h2>
        <div className="border-t border-white/20 pt-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block leading-none">
              23%
            </span>
            <span className="text-white/60 text-[16px] font-medium mt-2 block">
              up from 16%
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-2">
              of accounts now take payments — and ~2 in 3 who enable choose
              Method Pay
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block leading-none">
              ~$19M
            </span>
            <span className="text-white/60 text-[16px] font-medium mt-2 block">
              from zero
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-2">
              annualised GPV run-rate, tracking toward the $100M 2027 target
            </p>
          </div>
          <div>
            <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block leading-none">
              $110K
            </span>
            <span className="text-white/60 text-[16px] font-medium mt-2 block">
              up from $5.2K
            </span>
            <p className="text-white/80 text-[14px] leading-[140%] mt-2">
              annualised fee revenue — the referral fee became a product line
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { v: "68→84%", l: "Application completion", m: "Prepare-first + save-and-resume" },
            { v: "43→71%", l: "First payment after approval", m: "Approval as a launchpad" },
            { v: "9 → <4 days", l: "Time to first payment", m: "Across approved merchants" },
            { v: "~280", l: "Merchants live", m: "~60 migrated with zero downtime" },
            { v: "97.8%", l: "Payment success", m: "Disputes ~0.3%, payouts on schedule" },
            { v: "~3×", l: "Invoice-flow entry point", m: "Versus the settings page" },
            { v: "~50%", l: "Fewer refund tickets", m: "Legible pending states" },
            { v: ">41%", l: "Six-month retention", m: "Pilot & beta cohorts, above baseline" },
          ].map((c, i) => (
            <Card key={i} className="!p-5">
              <span className="text-heading-orange text-[22px] md:text-[26px] font-bold block leading-none">
                {c.v}
              </span>
              <span className="text-white text-[14px] font-medium mt-3 block">
                {c.l}
              </span>
              <span className="text-white/60 text-[12px] leading-[140%] mt-1 block">
                {c.m}
              </span>
            </Card>
          ))}
        </div>
        <p className="text-white/70 text-[18px] leading-[150%]">
          Worth being honest about recency: GA is only months old, so these are
          early readings. Activation and run-rate move weekly, and the GA
          retention cohorts are still maturing against the 41% baseline. Pilot
          and closed-beta cohorts have passed six months and sit above it. The
          open front now is migration at scale.
        </p>
      </section>

      {/* ── Reflection ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflection</h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Embedded ≠ outsourced
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Theming Stripe&rsquo;s certified components to Method, choosing
              where the boundary sits, and owning every state around them was
              most of the design work. By surface area, most of what a merchant
              touches is ours.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              The seams are the product
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Loading states, error recovery, and the handoff between an
              embedded zone and a Method surface. Nobody at the provider designs
              those.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Migration is trust, not a feature
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Switching a live merchant&rsquo;s revenue is the scariest ask in
              the product. Parallel rails, and dogfooding on our own billing
              first, were design decisions as much as engineering ones.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Meet the moment, not a page
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Adoption is placement, not a feature you announce. Payments
              belongs at the moments of intent — the invoice, onboarding, the
              workflow — not at a settings destination.
            </p>
          </Card>
        </div>
      </section>

      {/* ── What's next ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Where I&rsquo;d take it next
        </h2>
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Near-term
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Migration at scale — moving the rest of the incumbent-gateway base
              across, white-glove for high-volume accounts, and sunsetting the
              last legacy connections.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Measurement
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Time-to-payment on the dashboard. We track whether an invoice gets
              paid, not how long it sat — so the product&rsquo;s central claim
              is the one number we never put in front of the merchant.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Growth
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Recurring billing — the most-requested capability in the research
              and the natural next monetisation layer, since saved payment
              methods are already the foundation. Plus multi-stage dunning.
            </p>
          </Card>
          <Card>
            <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
              Coverage &amp; strategy
            </span>
            <p className="text-white/80 text-[16px] leading-[150%]">
              Merchants still get paid by cash and cheque, and today those land
              outside Method Pay — recording them is what makes &ldquo;one
              legible ledger&rdquo; true rather than aspirational. Then
              international activation, designed per market rather than
              translated.
            </p>
          </Card>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
