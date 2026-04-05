"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function ZikokoWebsiteCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/life-bank",
        nextHref: "/case-studies/citizen",
        label: "ZIKOKO",
        title: "Thinking big — The Zikoko experience",
        impactItems: [
          "Increased brand awareness",
          "Increase customer engagement by 43%",
          "Improved customer retention",
          "Reduced monthly average bounce rate from 77% to 50%",
          "Optimised SEO and Google indexing",
          "Increased discoverability",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/life-bank",
          label: "LIFE BANK",
          description: "Redesigning the life bank mobile application",
        },
        next: {
          href: "/case-studies/citizen",
          label: "CITIZEN",
          description: "A home for policy and governance related content",
        },
      }}
    >
      {/* ── ZW 1: Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/ZIKOKO WEBSITE 1.png"
          alt="Zikoko website redesign hero visual"
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
            Zikoko is a media production company that focuses on curating and creating content for millions of young Africans around the world. Its slogan &ldquo;We are the culture&rdquo; has captured and resonated with the hearts of many.
          </p>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Challenges
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            <span className="font-bold">The problem</span> — Zikoko&apos;s website was struggling with poor navigation, slow load times, and an overwhelming layout that made it difficult for users to discover and engage with content. Despite having thousands of daily visitors, the platform was losing them to friction.
          </p>
        </div>
      </section>

      {/* ── A roadblock ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          A roadblock
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The initial timeline for the project was set at 6 weeks, but once we began our research, we discovered we had underestimated the problems we set out to solve. We communicated this to stakeholders and apologised for the setback, while proposing a more concrete deadline they agreed to.
          </p>
        </div>
        {/* ZW 2 */}
        <LightboxImage
          src="/images/ZW 2.png"
          alt="Project roadblock and timeline adjustments"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Audit and Analysis ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Audit and Analysis
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            We had to go through the current site&apos;s existing data to study conversion, drop-off rates, and platform usage. A comprehensive UX audit was also done.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] font-bold mb-3">
            Key insights:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                &gt;90% of users were mobile
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Users dropped off at the top navigation, indicating they had problems locating content they were interested in
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Poor load time
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Poor information architecture
              </span>
            </li>
          </ul>
        </div>
        {/* ZW 3 */}
        <LightboxImage
          src="/images/ZW 3.png"
          alt="UX audit and analytics findings"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Dishing out the survey ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Dishing out the survey
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The product already had thousands of daily users, so we reached out to them via its social media pages, sharing links to our qualitative survey. The responses were massive, but here are some of the most common ones.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                The website is too busy; things are all over the place.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                It takes a long time to load.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                The ads are too distracting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Navigation is difficult; I can&apos;t find things I need easily.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Some articles are not in the right category.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Poor information architecture.
              </span>
            </li>
          </ul>
        </div>
        {/* ZW 4 */}
        <LightboxImage
          src="/images/ZW 4.png"
          alt="User survey results and feedback"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Building the site map ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Building the site map
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            On discovering issues with navigation and the likes, we decided to build out a site map to list existing sections and categories.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            There were some repeated and non-functional sections, so we collaborated with the editorial team to categorise properly and remove the unnecessary.
          </p>
        </div>
        {/* ZW 5 */}
        <LightboxImage
          src="/images/ZW 5.png"
          alt="Site map structure and information architecture"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Presenting low fidelity ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Presenting low fidelity
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Due to the nature of the project, we had to present a detailed low-fidelity prototype explaining all the new flows to the stakeholders and defending our design decisions.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            This was very helpful as presenting with a clear direction in mind led to a brainstorming session, where more interesting ideas came up from the stakeholders and team.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            After a few iterations and blocks, we were able to create a product that was simple, functional, pleasing, and easy to use, which directly translated into increased conversion. The web and mobile responsive versions were built.
          </p>
        </div>
        {/* ZW 6 */}
        <LightboxImage
          src="/images/ZW 6.png"
          alt="Low fidelity wireframes and design explorations"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── The navigation ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The navigation
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/70 text-[18px] font-medium mb-4">
            Here&apos;s some interesting stuff we worked on.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            One of users&apos; primary concerns was how hard it was to find content they love, so we came up with something simpler. Now users could find content easily and never lose their way. The categories were spread out alongside major features on the web, with a dropdown and bottom nav style on mobile with a deeper structure within each category.
          </p>
        </div>
        {/* ZW 7 */}
        <LightboxImage
          src="/images/ZW 7.png"
          alt="Redesigned navigation system — desktop and mobile"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Categories — A delight ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Categories — A delight
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            The idea was to improve recall and recognition via use of color, thus creating an opportunity for users to feel more joy, which would improve conversion and grow the business.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            With the editorial team and branding team, we came up with colors and illustrations that best fit each category. This was a very exciting session as everyone had different ideas on what colors worked best, but it was easy to find common ground.
          </p>
        </div>
        {/* ZW 8 */}
        <LightboxImage
          src="/images/ZW 8.png"
          alt="Category color system and illustrations"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Improving the search function ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Improving the search function
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The existing product had a search that was too simple considering the volume of content. After discussing with the engineering team, we decided to improve it by adding filters by date, author and category.
          </p>
        </div>
        {/* ZW 9 */}
        <LightboxImage
          src="/images/ZW 9.png"
          alt="Enhanced search with filters by date, author, and category"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Ads — Can't live without em ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Ads — Can&apos;t live without em
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            One of the main complaints from users was how obtrusive the ads were and how it interrupted their flow. We set out to incorporate them in a much simpler way, as it was necessary for business revenue.
          </p>
        </div>
        {/* ZW 10 */}
        <LightboxImage
          src="/images/ZW 10.png"
          alt="Redesigned ad placement — less obtrusive, revenue-friendly"
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
                Translated PRDs into user-centred designs that balanced editorial needs with audience engagement goals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Conducted deep research into digital media best practices and publication UX to benchmark the experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Facilitated cross-functional testing with users, engineers and the editorial team to validate the redesigned flows
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Partnered with marketing to craft launch materials that communicated the improved platform value proposition
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Key takeaways
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Revamping the Zikoko website reinforced how deeply platform architecture shapes user behaviour and business outcomes. The key insight was that a media site isn&apos;t just a content repository — it&apos;s a discovery engine that must flex around how audiences actually consume. By restructuring navigation, introducing colour-coded categories, and taming ad placement, we turned friction into flow — driving a 43% increase in engagement, cutting bounce rates from 77% to 50%, and meaningfully improving SEO discoverability.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
