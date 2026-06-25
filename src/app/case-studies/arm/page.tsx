"use client";

import { useEffect, useRef, type ReactNode } from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

/**
 * Image placeholder — a filled card that uses the same surface and radius
 * as the rest of the site (matches the bottom-nav cards in
 * CaseStudyLayout). Replace each <ImagePlaceholder /> with a
 * <LightboxImage src=... alt=... className="w-full" />
 * as you add the real screens.
 */
function ImagePlaceholder({
  label,
  filename,
  minHeight = "min-h-[260px]",
}: {
  label: string;
  filename: string;
  minHeight?: string;
}) {
  return (
    <div
      className={`w-full rounded-[16px] bg-[#2E2E2E] flex flex-col items-center justify-center text-center p-12 ${minHeight}`}
    >
      <span className="text-white/40 text-[14px] uppercase tracking-wider mb-2">
        {label}
      </span>
      <span className="text-white/30 text-[13px]">
        Drop image at{" "}
        <code className="bg-white/5 px-2 py-0.5 rounded">
          /images/{filename}
        </code>
      </span>
    </div>
  );
}

/**
 * Content card — same surface as the bottom-nav cards, same radius and
 * padding rhythm. Used for archetypes, principles, before/afters, impact
 * cells, and reflections.
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
 * exposes native controls so it can be paused and scrubbed, like the deck.
 */
function Video({ src, label }: { src: string; label?: string }) {
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
      muted
      loop
      playsInline
      controls
      preload="none"
      aria-label={label}
      className="w-full md:w-1/3 mx-auto rounded-[16px] bg-black block"
    />
  );
}

export default function ARMCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/burning-ram",
        nextHref: "/case-studies/bujeti-bills",
        label: "ARM",
        title:
          "Unifying five financial segments into one consumer-grade investing platform.",
        impactItems: [
          "+45% cross-segment engagement lift",
          "+40% retail participation growth",
          "−30% reduction in user churn",
          "₦5B (~$11M) revenue in year one",
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
          description:
            "Providing users with a centralized system for managing and tracking recurring expenses",
        },
      }}
    >
      {/* ── Hero ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/arm-hero.png"
          alt="ARM ONE — investing platform shown on laptop and mobile"
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
              Lead Product Designer
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Duration
            </span>
            <span className="text-white text-[20px]">
              March 2020 – February 2025
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Deliverables
            </span>
            <span className="text-white text-[20px]">
              Mobile app · Web app · Marketing website · Design system
            </span>
          </Card>
          <Card>
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
              Live in
            </span>
            <span className="text-white text-[20px]">
              Nigeria · Kenya · Ghana
            </span>
          </Card>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">The problem</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            ARM had spent three decades building trust with Nigerian wealth —
            across five business segments: securities trading, robo-advisor,
            savings, pensions, and asset management. With over ₦500 billion
            (~$1.1B+) in assets under management, ARM was Nigeria&rsquo;s
            largest independent asset manager.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            But customers experienced these as five standalone apps and
            portals, each with its own login and brand. A pension contributor
            couldn&rsquo;t see their mutual fund. A stock trader
            couldn&rsquo;t see their treasury bill. The business was losing
            share to digital-native fintechs.
          </p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            38%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Dormant accounts due to lack of digital innovation
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            68%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Revenue driven by only one of five segments
          </p>
        </div>
        <div>
          <span className="text-heading-orange text-[40px] md:text-[52px] font-bold block">
            52%
          </span>
          <p className="text-white/80 text-[13px] leading-[140%] mt-1">
            Customers reliant on physical branch interactions
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
            &ldquo;How might we turn five products that behave like five
            companies into one relationship a customer trusts with their whole
            financial life?&rdquo;
          </p>
        </Card>
      </section>

      {/* ── My role ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">My role</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I led the end-to-end design — from strategy through execution to
            post-launch monitoring, across web, mobile, and the marketing
            site. I set the design strategy, defined the information
            architecture, established UX and UI guidelines, ran usability
            research, managed stakeholders across five business segments, and
            led design reviews for the team.
          </p>
        </div>
      </section>

      {/* ── Defining success ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Defining success
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Before designing a screen, I anchored the team on five KPIs. Every
            design decision was scored against them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Cross-selling & acquisition",
                body: "% of users engaging with multiple products across the suite.",
              },
              {
                num: "02",
                title: "Churn rate",
                body: "Retention across the platform over time.",
              },
              {
                num: "03",
                title: "Activation rate",
                body: "% of new sign-ups actively engaging with product offerings.",
              },
              {
                num: "04",
                title: "Customer satisfaction (CSAT)",
                body: "Survey-measured satisfaction with the new experience.",
              },
              {
                num: "05",
                title: "Brand visibility & perception",
                body: "Recognition impact of the unified identity.",
              },
            ].map((k) => (
              <Card key={k.num}>
                <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                  {k.num}
                </span>
                <h3 className="text-white text-[20px] font-bold mb-2">
                  {k.title}
                </h3>
                <p className="text-white/80 text-[16px] leading-[150%]">
                  {k.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who I designed for ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Who I designed for
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            These four came out of the profiling assessment — and they&rsquo;re
            why &ldquo;application personalisation&rdquo; became a principle:
            the same screen re-weights itself by archetype.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-3">
                01
              </span>
              <h3 className="text-white text-[20px] font-bold mb-3">
                The First-Timer
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                New to investing, cautious, unsure where to start. Plain
                language, low minimums, &ldquo;just tell me what to buy.&rdquo;
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-3">
                02
              </span>
              <h3 className="text-white text-[20px] font-bold mb-3">
                The Delegator
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Wants their money to grow without the day-to-day work. Trusted,
                risk-matched recommendations; set-and-forget.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-3">
                03
              </span>
              <h3 className="text-white text-[20px] font-bold mb-3">
                The Active Investor
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Confident and hands-on — trades stocks, watches the market.
                Real-time data, depth on every position, fast execution.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-3">
                04
              </span>
              <h3 className="text-white text-[20px] font-bold mb-3">
                The Long-Term Planner
              </h3>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Building wealth and retirement over a long horizon. A
                whole-portfolio view, guidance, and products that compound.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Research</h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[24px] leading-[150%] mb-8">
            I ran mixed-methods research in collaboration with the business
            analyst and product manager — qualitative interviews with
            employees and customers, a quantitative survey to ARM&rsquo;s
            entire customer base, and a structured competitor audit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                15
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                Employee interviews (sales, CX, biz dev)
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                24
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                Customer in-depth interviews
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                3,507
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                Survey responses from the customer base
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[32px] md:text-[40px] font-bold block leading-none">
                12+
              </span>
              <p className="text-white/70 text-[14px] leading-[140%] mt-3">
                Competitors analysed (direct & indirect)
              </p>
            </Card>
          </div>

          {/* User quote */}
          <Card className="!p-8 mt-8">
            <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
              What customers told me
            </span>
            <p className="text-white text-[22px] md:text-[26px] leading-[140%] italic font-light mb-4">
              &ldquo;I started investing so I could give my children the kind
              of education and life I didn&rsquo;t have. I just need it to
              be easy — and I need to trust the people holding my
              money.&rdquo;
            </p>
            <p className="text-white/60 text-[14px] uppercase tracking-wider">
              — Customer interview, Lagos
            </p>
          </Card>
        </div>
        <LightboxImage
          src="/images/arm-research-synthesis.png"
          alt="Research synthesis — common themes, competitor analysis, customer insights"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Design principles ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Design principles
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[24px] leading-[150%] mb-6">
            I codified five non-negotiable principles before drawing a single
            screen. Every design decision had to pass these.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Future-proof & flexible",
                body: "A foundation that adapts to new products, channels, and customer expectations without re-architecting.",
              },
              {
                num: "02",
                title: "Reduce cognitive overload",
                body: "Never overwhelm. Simplify workflows, surface only what matters at each step, give clear guidance.",
              },
              {
                num: "03",
                title: "Application personalisation",
                body: "Use customer data responsibly. Tailor the experience to risk profile, horizon, and goals.",
              },
              {
                num: "04",
                title: "Simple & consistent",
                body: "One visual language across web, mobile, and brand. Eliminate the cognitive cost of context-switching.",
              },
              {
                num: "05",
                title: "Accessibility for all",
                body: "Usable by people of all abilities. Contrast, semantics, motion — designed in, not bolted on.",
              },
            ].map((p) => (
              <Card key={p.num}>
                <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                  {p.num}
                </span>
                <h3 className="text-white text-[20px] font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-white/80 text-[16px] leading-[150%]">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voice & copy principles ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Voice &amp; copy principles
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The legacy ARM brand spoke in the register of an
            investment-bank press release — formal, distant, careful. The
            customers we were trying to win and keep wanted the opposite.
            I established five copy principles and held the team to them
            on every screen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Never blame the user",
                body: "Error messages explain what happened and what the user can do next. “Invalid input” became “We need a valid Nigerian phone number to send your OTP.”",
              },
              {
                num: "02",
                title: "Numbers first, story second",
                body: "“₦47,210 today · 0.39%” is the format — not “Your portfolio increased by 0.39% today, equating to ₦47,210.”",
              },
              {
                num: "03",
                title: "Explain the why, not just the what",
                body: "A “Tier 1” badge links to a one-line explanation of what Tier 1 means. A “Money Market Fund” recommendation carries a one-line description.",
              },
              {
                num: "04",
                title: "Pidgin-safe English",
                body: "Idioms and slang that wouldn’t carry across Nigerian, Kenyan, and Ghanaian English got cut. “Let’s go” stayed. “Crushing it” got cut.",
              },
              {
                num: "05",
                title: "Calm verbs over hype verbs",
                body: "“Earn” not “Skyrocket.” “Grow” not “10×.” “Invest” not “Make money work for you.”",
              },
            ].map((p) => (
              <Card key={p.num}>
                <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                  {p.num}
                </span>
                <h3 className="text-white text-[20px] font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-white/80 text-[16px] leading-[150%]">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Information architecture ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Information architecture
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I designed a compact, flexible IA with five bottom-nav
            destinations — Home, Portfolio, Explore, Support, Profile. The
            structure could absorb any future product without restructuring.
          </p>
        </div>
        <LightboxImage
          src="/images/arm-information-architecture.svg"
          alt="Information architecture — bottom-nav structure with Home, Portfolio, Explore, Support, Profile"
          className="w-full rounded-[16px] bg-white"
        />
      </section>

      {/* ── Customer journey map ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Customer journey map
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I mapped a five-stage customer journey — Research, Onboarding,
            Purchasing, Post-Purchase, and Ongoing Engagement — documenting
            at each stage what customers were doing, thinking, feeling, and
            the design opportunities I&rsquo;d target.
          </p>
        </div>
        <LightboxImage
          src="/images/arm-journey-map.svg"
          alt="Customer Journey Map — Research, Onboarding, Purchasing, Post-Purchase, Ongoing Engagement"
          className="w-full rounded-[16px] bg-white"
        />
      </section>

      {/* ── Solution 1: Unified dashboard ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          One dashboard, four products
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Customers used to log into separate apps for the entire ARM
            suite. I designed a single unified dashboard showing every
            product side-by-side — with allocation context, performance
            over time, and a recommendation layer driven by the
            customer&rsquo;s risk profile.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The shift wasn&rsquo;t visual — it was strategic. Once
            customers could see their whole financial picture in one place,
            cross-segment engagement became natural. This became the
            foundation for the +45% cross-segment engagement lift.
          </p>
        </div>
        <Video
          src="/videos/arm-activation.mp4"
          label="ARM ONE unified dashboard — activation walkthrough"
        />
      </section>

      {/* ── Solution 2: Tier-aware onboarding ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Tier-aware onboarding that doesn&rsquo;t surprise
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Usability testing surfaced a painful pattern: customers were only
            discovering platform tier limits at the moment they tried to
            invest more — drop-off at the worst possible moment. I
            redesigned the success state of onboarding to surface tier
            status upfront, with a one-tap path to upload Tier 3 documents.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            I also split the dashboard for new vs. existing customers — the
            same screen had been trying to serve two very different jobs.
            Registration completion went from 52% to 76%.
          </p>
        </div>
        <Video
          src="/videos/arm-tier-bvn.mp4"
          label="ARM ONE tier-aware onboarding — BVN nudge and tier-limit visibility"
        />
      </section>

      {/* ── Solution 3: Robo Advisor ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The Robo Advisor — turning paralysis into a path
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Customers told me, again and again: &ldquo;I don&rsquo;t know
            what to buy.&rdquo; So I designed a five-minute Investment
            Profiling assessment — five questions on income, time horizon,
            risk appetite, and goals — that outputs a personalised risk
            profile (Conservative, Balanced, Aggressive) and three matched
            product recommendations.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The Robo Advisor became the bridge between sign-up and first
            investment, and the foundation for the +40% retail participation
            lift across Securities trading and the self-directed product
            set. Re-takeable every six months as life changes.
          </p>
        </div>
        <Video
          src="/videos/arm-risk-profile.mp4"
          label="ARM ONE Robo Advisor — Investment Profiling assessment"
        />
      </section>

      {/* ── Solution 4: Stocks — three views ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Stocks — three views for the most active product
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Stocks customers are almost exclusively the Active Investor
            archetype — they need real-time data, depth on every position,
            and tools to manage what they already hold. A single page
            can&rsquo;t do that work without becoming overwhelming. I
            designed a three-level progressive disclosure where each surface
            answers one specific question.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <h3 className="text-white text-[20px] font-bold mb-3">
                Invest
              </h3>
              <p className="text-heading-orange text-[14px] italic mb-3">
                &ldquo;What&rsquo;s the market doing?&rdquo;
              </p>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Market context above the fold — Top Gainers, By Volume, By
                Value, sector browsing. Personal context immediately below.
                In-app News & Insights from ARM&rsquo;s research desk.
              </p>
            </Card>
            <Card>
              <h3 className="text-white text-[20px] font-bold mb-3">
                Portfolio
              </h3>
              <p className="text-heading-orange text-[14px] italic mb-3">
                &ldquo;Where do I stand right now?&rdquo;
              </p>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Balance, GAINS/LOSS, four-action row (Buy more · Orders ·
                Alerts · Research). No marketing CTAs in the middle of
                portfolio management.
              </p>
            </Card>
            <Card>
              <h3 className="text-white text-[20px] font-bold mb-3">
                Stock Details
              </h3>
              <p className="text-heading-orange text-[14px] italic mb-3">
                &ldquo;What is this position really doing?&rdquo;
              </p>
              <p className="text-white/80 text-[16px] leading-[150%]">
                The full breakdown without progressive reveals — Commission,
                Brokerage, Price change, Profit, Total purchase, Total
                gain/loss. Active investors trust apps that show them the
                math.
              </p>
            </Card>
          </div>
        </div>
        <Video
          src="/videos/arm-trading.mp4"
          label="ARM ONE Stocks — trading and progressive disclosure walkthrough"
        />
      </section>

      {/* ── Solution 5: Wallet ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          A wallet that learned, and product-page levers that earned the
          conversion
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            <strong className="text-white">
              The Wallet became the financial hub.
            </strong>{" "}
            One balance, one set of controls, one place to top up from
            anywhere. I designed the funding sheet to sort payment methods
            dynamically by a 24-hour reliability score for that
            customer&rsquo;s network (debit card, bank transfer, USSD,
            direct debit) — so the option most likely to succeed was always
            at the top. Payment success rate climbed from 32% to 47%.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            <strong className="text-white">
              Idle wallet balance earns its keep.
            </strong>{" "}
            Funded-but-not-yet-invested cash isn&rsquo;t dead — it earns a
            base yield (up to 9% on USD) with a one-tap opt-in. The wallet
            itself becomes a soft money-market-lite product, creating a
            natural on-ramp from funded → earning → invested.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            <strong className="text-white">
              Auto-invest and Re-invest after maturity, surfaced on the
              product page.
            </strong>{" "}
            The team wanted auto-invest at sign-up. I held the recommendation
            back until the moment after a customer&rsquo;s first successful
            manual top-up — when behaviour was established and trust was
            earned. Placing it on the product page (not the wallet) tied the
            commitment to the product the customer had just bought, so the
            recurring contribution carried the same intent as the original
            purchase.
          </p>
        </div>
        <LightboxImage
          src="/images/arm-wallet-auto-invest.png"
          alt="ARM ONE Wallet — funding sheet with dynamic payment method ranking and earn-on-balance, alongside the product-page Auto-invest and Re-invest after maturity moments"
          className="w-full"
        />
      </section>

      {/* ── Solution 6: Product pages — archetype-aware ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Product pages — same scaffold, different emphasis
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Every product page in the launched suite (Mutual Funds, Stocks,
            Treasury Bills) was redesigned around one principle: four
            actions are always one tap away, the surrounding context adapts
            to who is viewing. View, Top up, Withdraw, Buy — the constant
            scaffold. Everything else shifts per archetype.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The First-Timer sees the product explained in plain language,
            with Strategic Asset Allocation and Fund Fact Sheet above the
            fold. The Active Investor sees balance, accrued earnings,
            performance, and transactional actions — education collapses.
            The Switcher sees a comparison strip (&ldquo;Our Yield 21% p.a.
            vs Others 12&ndash;16% p.a.&rdquo;) plus Disclosure and Fund
            Fact Sheet trust artefacts.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Archetype came from the Robo Advisor when a customer had taken
            it; from a small profile-signal model (age, holdings, activity,
            tier, time since sign-up) otherwise.
          </p>
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-white/70 text-[26px] font-medium text-center mb-4 tracking-wide">
              First-Timer view
            </p>
            <div className="flex justify-center">
              <LightboxImage
                src="/images/arm-product-firsttimer.png"
                alt="MMF First-Timer view — product explained in plain language, Strategic Asset Allocation and Fund Fact Sheet above the fold, Buy Now CTA"
                className="w-full md:w-1/2"
              />
            </div>
          </div>
          <div>
            <p className="text-white/70 text-[26px] font-medium text-center mb-4 tracking-wide">
              Active Investor view
            </p>
            <div className="flex justify-center">
              <LightboxImage
                src="/images/arm-mmf-active.png"
                alt="MMF Active Investor view — balance, accrued earnings, performance, four-action row (Top up · Buy more · Withdraw · Learn), auto-invest and re-invest after maturity toggles"
                className="w-full md:w-2/3"
              />
            </div>
          </div>
          <div>
            <p className="text-white/70 text-[26px] font-medium text-center mb-4 tracking-wide">
              Switcher view
            </p>
            <div className="flex justify-center">
              <LightboxImage
                src="/images/arm-product-switcher.png"
                alt="MMF Switcher view — Our Yield 21% p.a. vs Others 12–16% p.a. comparison, Fund Fact Sheet and Disclosure trust artefacts"
                className="w-full md:w-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-sell — the card that turned savers into investors ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The card that turned savers into investors
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Only 8% of customers held more than one product. Leadership wanted
            a marketing campaign — but unification had already given us the
            better surface: the dashboard itself. I designed a contextual
            &ldquo;next best product&rdquo; card that led with the
            customer&rsquo;s own money — a personalised LTV projection
            (&ldquo;You&rsquo;ve saved ₦340,000 this year; it could be ₦410,000
            in 12 months&rdquo;) instead of generic product marketing.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            I A/B tested copy and placement; the soft, trust-respecting variant
            beat the aggressive one — cross-product adoption climbed from{" "}
            <span className="text-heading-orange font-bold">8% to 23%</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-white/70 text-[16px] font-medium text-center mb-3 tracking-wide">
              Soft · trust-respecting · won
            </p>
            <LightboxImage
              src="/images/arm-crosssell-soft.png"
              alt="Soft cross-sell variant — Make your cash work, personalised balance projection, See how it works CTA"
              className="w-full rounded-[16px]"
            />
          </div>
          <div>
            <p className="text-white/70 text-[16px] font-medium text-center mb-3 tracking-wide">
              Aggressive · pushy · lost
            </p>
            <LightboxImage
              src="/images/arm-crosssell-aggressive.png"
              alt="Aggressive cross-sell variant — Don't miss out, FOMO framing, INVEST NOW CTA"
              className="w-full rounded-[16px]"
            />
          </div>
        </div>
        <Card className="!p-8 mb-4">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
            What I learned
          </span>
          <p className="text-white text-[20px] leading-[150%]">
            &ldquo;Make your money work&rdquo; framing — anchoring on the
            customer&rsquo;s own balance with a concrete projected gain —
            outperformed generic product pitches. The &ldquo;Why am I seeing
            this?&rdquo; transparency link reduced dismissals; customers who
            understood the targeting logic were more likely to engage.
          </p>
        </Card>
        <p className="text-white/60 text-[15px] leading-[150%]">
          Instrumented in Mixpanel — card impression as the entry event;
          opened-MMF-flow, first investment, and 30 / 90-day retention as the
          conversion funnel.
        </p>
      </section>

      {/* ── Three versions, not one redesign ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Three versions, not one redesign
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            After the first build I ran moderated usability tests — 10
            participants over Google Meet, recording every session. The biggest
            finding: one dashboard served both new and existing users, so new
            users logged in to a $0 shell. I shipped, watched the data,
            re-interviewed first-week users, then greyboxed two directions with
            them before committing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-heading-orange text-[14px] font-bold uppercase tracking-wider text-center mb-3">
              V1 — the default everyone ships
            </p>
            <LightboxImage
              src="/images/arm-dashboard-V1.png"
              alt="V1 new-user dashboard — $0 balance, empty cards, conditional content slots"
              className="w-full rounded-[16px]"
            />
            <p className="text-white/80 text-[16px] leading-[150%] mt-4">
              One dashboard for everyone, with conditional content slots. New
              users saw empty zeros everywhere — it felt broken. Drop-off was
              real; the data sent me back.
            </p>
          </div>
          <div>
            <p className="text-heading-orange text-[14px] font-bold uppercase tracking-wider text-center mb-3">
              V2 — apologise for the emptiness
            </p>
            <LightboxImage
              src="/images/arm-dashboard-V2.png"
              alt="V2 new-user dashboard — Welcome, let's get you started, honest $0, primary CTA to fund or explore"
              className="w-full rounded-[16px]"
            />
            <p className="text-white/80 text-[16px] leading-[150%] mt-4">
              A &ldquo;Welcome, let&rsquo;s get you started,&rdquo; an honest
              $0, and a primary CTA to fund or explore. The greybox session
              confirmed it still felt like a placeholder, not a product.
            </p>
          </div>
          <div>
            <p className="text-heading-orange text-[14px] font-bold uppercase tracking-wider text-center mb-3">
              V3 — a different surface entirely
            </p>
            <LightboxImage
              src="/images/arm-dashboard-V3.png"
              alt="V3 new-user dashboard — discovery surface with real products, top-performing funds, BVN nudge and profiling CTA"
              className="w-full rounded-[16px]"
            />
            <p className="text-white/80 text-[16px] leading-[150%] mt-4">
              The new-user dashboard shouldn&rsquo;t apologise for being empty —
              it should be a discovery surface, not a monitoring one. Real
              products, top-performing funds with live returns, a BVN nudge and
              profiling CTA. Balance still $0 — honest — but useful immediately.
            </p>
          </div>
        </div>
        <Card className="!p-8 mt-8">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-2">
            What I learned
          </span>
          <p className="text-white text-[20px] leading-[150%]">
            The new-user state is its own product, not a degraded version of
            the active one. That&rsquo;s now my default.
          </p>
        </Card>
        <p className="text-white/80 text-[18px] leading-[150%] mt-6">
          The same sessions surfaced a second fix: tier limits only appeared
          when a customer tried to invest past them. I moved them into the
          onboarding success state with a one-tap path to upgrade —
          registration completion went{" "}
          <span className="text-heading-orange font-bold">52% to 76%</span>.
        </p>
      </section>

      {/* ── Design system — one system, four teams ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          One system. Four teams. Still in production.
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            There was no design system at all. Five products, four teams — and
            every component (modals, status pills, money cards, fund rows)
            rebuilt from scratch, slightly differently, each time. No shared
            foundation, no governance, nothing to inherit.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            I built it from zero — tokens, type, colour, accessibility — and
            grew the library component by component as the suite expanded. Just
            as important, I stood up the practices that never existed: weekly
            office hours, pairing with engineers on first implementations, every
            new pattern routed through me, and the <em>why</em> documented, not
            just the <em>what</em>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { v: "4", l: "product teams on one system" },
            { v: "~40%", l: "faster design time" },
            { v: "Live", l: "still in production today" },
          ].map((c) => (
            <Card key={c.l}>
              <span className="text-heading-orange text-[36px] md:text-[44px] font-bold block leading-none">
                {c.v}
              </span>
              <p className="text-white/80 text-[14px] leading-[140%] mt-3">
                {c.l}
              </p>
            </Card>
          ))}
        </div>
        <Card className="!p-8">
          <span className="text-heading-orange text-[12px] uppercase tracking-wider font-bold block mb-4">
            ARM ONE — component library
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5">
            <div>
              <span className="text-white/60 text-[12px] uppercase tracking-wider block mb-2">
                Colour tokens
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  ["#a8005b", "Brand"],
                  ["#a41857", "Active"],
                  ["#17b26a", "Success"],
                  ["#eaaa08", "Warning"],
                  ["#d92d20", "Danger"],
                  ["#0d111c", "Ink"],
                ].map(([hex, name]) => (
                  <span
                    key={hex}
                    className="flex items-center gap-2 text-white/80 text-[12px]"
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: hex }}
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-white/60 text-[12px] uppercase tracking-wider block mb-2">
                Type · Plus Jakarta Sans
              </span>
              <p className="text-white text-[20px] font-bold leading-tight">
                Heading
              </p>
              <p className="text-white/80 text-[16px]">Body text</p>
              <p className="text-white/60 text-[12px] uppercase tracking-wider">
                Caption label
              </p>
            </div>
            <div>
              <span className="text-white/60 text-[12px] uppercase tracking-wider block mb-2">
                Status pills
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  ["Active", "#17b26a"],
                  ["Pending", "#eaaa08"],
                  ["High risk", "#d92d20"],
                  ["Tier 1", "#a8005b"],
                ].map(([label, hex]) => (
                  <span
                    key={label}
                    className="text-[12px] font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${hex}22`, color: hex }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ── How I worked ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          How I worked
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I shipped designs ahead of the engineering sprint so the team was
            never blocked. Usability tests ran <em>before</em> each build,
            not after, so feedback shaped the implementation instead of the
            post-mortem. High-fidelity prototypes during sprint planning
            aligned product management, design, and engineering on what
            &ldquo;done&rdquo; looked like.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            For prioritisation I used an impact-effort matrix as a team
            exercise — I presented design options, the team voted, and we
            built consensus before backlog refinement. Stakeholder reviews
            ran on a monthly cadence with the executive team.
          </p>
        </div>
      </section>

      {/* ── Phased rollout — Pensions ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Phased rollout, not big-bang
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The single most important strategic decision on this project was
            what <em>not</em> to migrate in the first phase. ARM is best
            known for pensions — a thirty-year flagship, the most
            trust-sensitive segment, and the most operationally complex due
            to PenCom regulation. The instinct from leadership was to lead
            with pensions. The Pensions BU lead — who&rsquo;d been at ARM
            longer than the rest of the exec team combined — asked me in
            the April 2022 review why we weren&rsquo;t leading with the
            flagship. I had three slides on cross-product validation. He
            left convinced. Two years later, when I transitioned out, he
            was the one asking when pensions would migrate.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I argued the opposite. Don&rsquo;t move the crown jewel until
            the new home is demonstrably better than the old one. I
            sequenced the migration so the unified platform launched with
            securities trading, robo-advisor, savings, and asset management
            first. Pensions stayed on its existing app, untouched, while we
            proved the platform.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            With the platform validated through +45% engagement and +40%
            retail participation lift, the pensions migration is the next
            phase — completing the five-into-one vision.
          </p>
        </div>
      </section>

      {/* ── Out in the market ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Out in the market
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            For every feature shipped I maintained ongoing monitoring in
            Mixpanel — activation, churn, conversion. It was a Sunday
            Mixpanel session — I was pulling the weekly report — when I
            noticed the registration funnel bleeding at OTP validation. I
            traced it to unreliable Nigerian telco SMS delivery, had
            engineering on a call Monday morning, and the fix shipped
            Wednesday. Conversion climbed from 5.3 to 6.74 over the
            following weeks.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Ship → measure → diagnose → escalate → iterate. That loop —
            and that cadence — is the part of my practice I&rsquo;m most
            proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <LightboxImage
            src="/images/arm-mixpanel-funnel.png"
            alt="Mixpanel registration funnel — drop-off traced to OTP validation"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/arm-mixpanel-mutualfunds.png"
            alt="Mixpanel mutual-funds funnel — buy, select, product info, payment, subscription"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Impact</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-8">
            The redesign delivered measurable change at every layer of the
            funnel — and meaningful business outcomes.
          </p>

          {/* Headline metrics — 3-up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <span className="text-heading-orange text-[36px] md:text-[44px] font-bold block leading-none">
                ₦5B
              </span>
              <span className="text-white/60 text-[18px] font-medium mt-1 block">
                ~$11M
              </span>
              <p className="text-white/80 text-[14px] leading-[140%] mt-3">
                Revenue impact in year one
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[36px] md:text-[44px] font-bold block leading-none">
                $2.04M
              </span>
              <p className="text-white/80 text-[14px] leading-[140%] mt-[36px]">
                Sustained quarterly sales post-launch
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[36px] md:text-[44px] font-bold block leading-none">
                3
                <span className="text-white/60 text-[18px] font-medium ml-2">
                  countries
                </span>
              </span>
              <p className="text-white/80 text-[14px] leading-[140%] mt-[28px]">
                Live in Nigeria, Kenya, and Ghana
              </p>
            </Card>
          </div>

          {/* Funnel metrics — 4-up */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                v: "+45%",
                l: "Cross-segment engagement",
                m: "Across multiple segments",
              },
              {
                v: "+40%",
                l: "Retail participation",
                m: "Securities + Robo Advisor",
              },
              {
                v: "−30%",
                l: "Churn reduction",
                m: "Funnel optimisation + A/B",
              },
              {
                v: "+50%",
                l: "New user growth",
                m: "Year-over-year",
              },
              {
                v: "52→76%",
                l: "Registration completion",
                m: "Tier-aware onboarding",
              },
              {
                v: "60→95%",
                l: "T-Bills redemption",
                m: "Product-page redesign",
              },
              {
                v: "32→47%",
                l: "Payment success",
                m: "After Wallet introduction",
              },
              {
                v: "₦61.8M",
                l: "T-Bills sales unlocked",
                m: "~$137K",
              },
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
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Reflections</h2>
        <div className="border-t border-white/20 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <h3 className="text-heading-orange text-[18px] font-bold uppercase tracking-wider mb-4">
                Challenges
              </h3>
              <ul className="space-y-3">
                {[
                  "Legacy systems behind five segments meant some ideal UX patterns weren't viable in phase one.",
                  "Five business segments, each with strong opinions on “their” product’s prominence in the unified shell.",
                  "Designing for digital trust in an emerging market took more reassurance, education, and proof.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[8px]" />
                    <span className="text-white/80 text-[15px] leading-[150%]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-heading-orange text-[18px] font-bold uppercase tracking-wider mb-4">
                What I&rsquo;d do differently
              </h3>
              <ul className="space-y-3">
                {[
                  "Design an early-career / student-investor track from day one. I cut it in 2022 as a deliberate scope decision before a board review — and post-launch, some of our highest-engagement users were 22–26 year olds we hadn't designed for. I'd argue louder for it next time.",
                  "Build the gamification & loyalty layer in phase one rather than deferring it.",
                  "Invest in motion and micro-interactions earlier — they shifted brand perception more than I expected.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[8px]" />
                    <span className="text-white/80 text-[15px] leading-[150%]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-heading-orange text-[18px] font-bold uppercase tracking-wider mb-4">
                What I learned
              </h3>
              <ul className="space-y-3">
                {[
                  "In finance, the moment of education matters more than the content — tier limits proved it.",
                  "The new-user state is its own product, not a degraded version of the active one.",
                  "Trust-respecting design is usually also the highest-converting design — the soft cross-sell beat the aggressive one.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[8px]" />
                    <span className="text-white/80 text-[15px] leading-[150%]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Where I'd take it next ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Where I&rsquo;d take it next
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The platform is proven. The next chapter is using that trust to
            deepen the relationship — not just cross-sell products, but
            personalise the entire experience to the customer&rsquo;s stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                Near-term
              </span>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Migrate ARM Pensions into the unified suite — the flagship I
                held back until the platform proved itself. Now it can complete
                the five-into-one vision on a trust base that didn&rsquo;t exist
                at launch.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                Growth
              </span>
              <p className="text-white/80 text-[16px] leading-[150%]">
                Move from product-triggered cross-sell cards to
                behaviour-triggered ones — a customer who&rsquo;s saved for six
                months without investing gets a different surface than one who
                just deposited. Plus a WhatsApp re-engagement loop for dormant
                accounts.
              </p>
            </Card>
            <Card>
              <span className="text-heading-orange text-[14px] font-bold uppercase tracking-wider block mb-2">
                Strategic
              </span>
              <p className="text-white/80 text-[16px] leading-[150%]">
                New asset classes — crypto, FX, agricultural investments —
                without fragmenting the platform again. The design system and IA
                are built to absorb them; the question is sequencing by customer
                readiness, not product availability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Conclusion ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">Conclusion</h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            ARM One was the most demanding project of my career — and the
            one I&rsquo;m most proud of. It taught me how to lead a
            multidisciplinary team through a generational platform change,
            how to balance the politics of five business segments, and how
            to keep customer evidence at the centre of every decision. Five
            segments unified into one consumer-grade investing platform.
            ₦5B (~$11M) revenue generated in year one. +45% engagement.
            +40% retail participation. A phased pensions migration ready to
            complete the vision.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
