"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function ZikokoMemesCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/citizen",
        nextHref: "/case-studies/bcm",
        label: "ZIKOKO MEMES",
        title: "Building the largest repository of memes in Africa",
        impactItems: [
          "Positive reception from beta testers",
          "Increased brand awareness",
          "3 million+ meme uploads in first 6 months",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/citizen",
          label: "CITIZEN",
          description: "A home for policy and governance related content",
        },
        next: {
          href: "/case-studies/bcm",
          label: "BCM WEBSITE",
          description: "Revamping Big Cabal Media",
        },
      }}
    >
      {/* ── ZM1: Hero / Lead Visual ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/ZIKOKO MEMES 1.png"
          alt="Zikoko Memes platform hero visual"
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
            Zikoko Memes is the largest repository of memes created and curated by Africans. It&apos;s a product under Zikoko, built for users to share, create and engage with each other around memes.
          </p>
        </div>
      </section>

      {/* ── Why memes ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Why memes
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Memes have evolved beyond just humor — they&apos;ve become a universal language for communication, commentary, and connection. For young Africans especially, memes are one of the most powerful ways to express shared experiences, critique culture, and build community. Yet there was no dedicated platform for discovering, creating and sharing African memes at scale.
          </p>
        </div>
      </section>

      {/* ── The ask ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The ask
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The stakeholders needed a platform that would allow users to discover, upload, create, and share memes — while also building a community around African internet culture.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            The product needed to be engaging enough to retain users, simple enough for anyone to use, and scalable enough to support millions of uploads.
          </p>
        </div>
      </section>

      {/* ── Analyzing current dilemma ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Analyzing current dilemma
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            We looked at the existing landscape and identified key pain points:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Memes were scattered across social media with no central discovery hub
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Existing platforms weren&apos;t built around African content or culture
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                No tools existed for creating and customising memes within the same experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Poor categorisation made it hard to find specific types of content
              </span>
            </li>
          </ul>
        </div>
        {/* ZM2 */}
        <LightboxImage
          src="/images/ZM 2.png"
          alt="Analysis of current meme ecosystem challenges"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Tests and interviews ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Tests and interviews
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            We conducted user interviews and surveys to understand how people currently discover, save and share memes. The interviews were structured around understanding user habits, frustrations, and desired features.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            We spoke with heavy meme users, casual browsers, and content creators to build a full picture of the target audience and their expectations.
          </p>
        </div>
        {/* ZM3 */}
        <LightboxImage
          src="/images/ZM 3.png"
          alt="User interview findings and research synthesis"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Some insights ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Some insights
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Users wanted a way to search for memes by mood, topic, or trending status
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Most users saved memes to their camera roll because existing platforms had no favourites or collections feature
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Community features like commenting and reactions were highly desired
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Users wanted to create and customise memes without leaving the platform
              </span>
            </li>
          </ul>
        </div>
        {/* ZM4 */}
        <LightboxImage
          src="/images/ZM 4.png"
          alt="Key user research insights"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Into the thick of it ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Into the thick of it
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            With a clear understanding of user needs and the competitive landscape, we moved into ideation. We mapped out core user flows — from meme discovery and browsing, to creation and sharing, to profile building and community interaction. The information architecture was designed to surface the most relevant content quickly while keeping the experience lightweight and fun.
          </p>
        </div>
        {/* ZM5 */}
        <LightboxImage
          src="/images/ZM 5.png"
          alt="User flows and information architecture"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Low fidelity ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Low fidelity
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            We explored multiple layout directions in low-fidelity wireframes, testing different navigation models, feed structures, and creation flows before committing to the final direction.
          </p>
        </div>
        {/* ZM6 */}
        <LightboxImage
          src="/images/ZM 6.png"
          alt="Low fidelity wireframes and layout explorations"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Sign on ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Sign on
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The onboarding experience was designed to be quick and frictionless — letting users start browsing immediately while gently encouraging account creation to unlock features like saving favourites, uploading, and customising their profile.
          </p>
        </div>
        {/* ZM8 */}
        <LightboxImage
          src="/images/ZM 8.png"
          alt="Sign on and onboarding flow"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Improved navigation ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Improved navigation
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Navigation was restructured to prioritise discoverability. Users can browse by trending, categories, and recent — with a persistent bottom nav that keeps core actions (home, search, upload, profile) always within reach.
          </p>
        </div>
        {/* ZM9 */}
        <LightboxImage
          src="/images/ZM 9.png"
          alt="Improved navigation — browse by trending, categories, recent"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Profile as gamification ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Profile as gamification
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            We introduced gamification elements into the profile experience — upload streaks, engagement scores, and creator badges — to incentivise consistent contribution and build a sense of progression and community status.
          </p>
        </div>
        {/* ZM10 */}
        <LightboxImage
          src="/images/ZM 10.png"
          alt="Profile gamification — streaks, badges, engagement scores"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Comments ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Comments
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The commenting system was designed to encourage interaction without overwhelming the meme viewing experience. Users can react, reply, and share comments — keeping conversations lively and contextual.
          </p>
        </div>
        {/* ZM11 */}
        <LightboxImage
          src="/images/ZM 11.png"
          alt="Comments and interaction system"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Edit your meme ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Edit your meme
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The built-in meme editor allows users to add text, crop, resize, and apply filters — all without leaving the app. This was a key differentiator, turning passive browsers into active creators and increasing time spent on the platform.
          </p>
        </div>
        {/* ZM12 */}
        <LightboxImage
          src="/images/ZM 12.png"
          alt="In-app meme editor — add text, crop, filters"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
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
                Led end-to-end product design from research through high-fidelity delivery, defining the UX strategy for a net-new consumer platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Conducted user research, competitive analysis, and usability testing to validate core flows and feature priorities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Established the visual identity and design system, ensuring consistency across all screens and interaction states
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Collaborated closely with engineering and stakeholders to scope features, manage trade-offs, and ship iteratively
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
            Building Zikoko Memes from scratch was a rare opportunity to define an entirely new product category for the African internet. The challenge wasn&apos;t just designing screens — it was creating an ecosystem where discovery, creation, and community reinforced each other. By grounding every decision in research and testing with real users throughout, we delivered a platform that resonated immediately, driving millions of uploads in its first months and proving that when you build for a specific cultural context, engagement follows naturally.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
