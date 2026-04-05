"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

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
          "Measurable reduction in early-stage churn",
          "15% lift in feature adoption post-onboarding",
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
          description: "Scaling a digital pharmacy across marketplace, admin, and customer experiences",
        },
      }}
    >
      {/* ── BO 1: Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BUJETI ONBOARDING 1.png"
          alt="Bujeti Onboarding product interface"
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
            Bujeti was experiencing a high drop-off rate because the process was too lengthy and cumbersome. There were document requirements that not all companies had at the time of registration; as a result, we kept losing leads.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The existing flow did not take into account the user profiles and features they wanted to use.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            <span className="font-bold">The goal</span> was to optimise the process, thereby improving conversion.
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
            I created flows and analysed them with the entire product team&mdash;including marketing, sales, and customer support&mdash;to spot areas of improvement and refine the experience for our customers, while benchmarking against competitors.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It was important to identify what features required a full onboarding experience and what did not.
          </p>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Solution
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Now users had a quick and easy sign-up process tailored to their needs.
          </p>
        </div>

        {/* BO 2 + BO 3 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti on 2.png"
            alt="Onboarding sign up flow - step 1"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 3.png"
            alt="Onboarding sign up flow - step 2"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── "Before access..." body copy + BO 4, BO 5 ── */}
      <section className="mb-16">
        <p className="text-white/80 text-[20px] leading-[150%] mb-8">
          Before granting access to the platform, we ask what features users would like to use. This determines their document requirements and also offers more insight into how they use the platform.
        </p>

        {/* BO 4 + BO 5 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/bujeti on 4.png"
            alt="Feature selection - options view"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 5.png"
            alt="Feature selection - confirmation view"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Welcome to Bujeti ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Welcome to Bujeti
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Depending on what features are selected, users have the option to do a quick document upload and continue with the application, or finish their KYC.
          </p>
        </div>

        {/* BO 6 + BO 7 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/bujeti on 6.png"
            alt="Welcome to Bujeti - document upload flow"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/bujeti on 7.png"
            alt="Welcome to Bujeti - KYC completion flow"
            className="w-full rounded-[16px]"
          />
        </div>

        {/* BO 8 below BO 6 + BO 7 */}
        <LightboxImage
          src="/images/bujeti on 8.png"
          alt="Welcome to Bujeti - certificate upload and verification"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── "If users interact..." body copy + BO 9 ── */}
      <section className="mb-16">
        <p className="text-white/80 text-[20px] leading-[150%] mb-8">
          If users interact with a feature that requires more documents, we prompt them to complete their KYC to gain access.
        </p>

        {/* BO 9 centered */}
        <div className="flex justify-center">
          <LightboxImage
            src="/images/bujeti on 9.png"
            alt="KYC verification prompt modal"
            className="rounded-[16px] w-full"
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
                Translated PRDs into user-centred designs that balanced registration requirements with conversion goals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Conducted deep research into onboarding best practices across SaaS and fintech to benchmark the experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Facilitated cross-functional testing with users, engineers and customer success to validate the redesigned flow
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered with marketing to craft launch materials that communicated the improved onboarding value proposition
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
            Revamping the onboarding experience reinforced how deeply first impressions shape long-term retention. The key insight was that registration isn&apos;t a one-size-fits-all gate — it&apos;s an adaptive funnel that should flex around user intent and document readiness. By decoupling mandatory KYC from initial access and letting users self-select features upfront, we reduced friction at the exact moment trust is most fragile, driving a 40% increase in subscription and measurably lowering churn.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
