"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function BCMCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/zikoko-memes",
        nextHref: "/case-studies/burning-ram",
        label: "BCM WEBSITE",
        title: "Revamping Big Cabal Media",
        impactItems: [
          "Improved online presence by 47%",
          "Increased web traffic by 60%",
          "Improved online presence",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/zikoko-memes",
          label: "ZIKOKO MEMES",
          description: "Building the largest repository of memes in Africa",
        },
        next: {
          href: "/case-studies/burning-ram",
          label: "BURNING RAM",
          description: "Designing the website to preserve and share histories, empowering African creators and storytelling",
        },
      }}
    >
      {/* ── BCM 1: Hero / Lead Visual ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BCM 1.png"
          alt="BCM Website redesign hero visual"
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
            Big Cabal Media is an African media and technology company that creates content, products, and events for African millennials and Gen Z audiences. With properties like Zikoko, TechCabal, and Citizen, BCM creates stories that capture the culture and inform the continent&apos;s most dynamic generation.
          </p>
        </div>
      </section>

      {/* ── The promise ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The promise
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The existing platform did not showcase the breadth of their publications and the impact it has on the African tech and media industry. We set out to restructure the site to reflect the full scale of BCM&apos;s portfolio and position the company as the leading media house on the continent.
          </p>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Approach
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            I set out to understand the different entities and how they relate to each other, their tone and visual identity, so the umbrella site could represent them fairly without losing its own identity. We ran workshops with the editorial and marketing teams, mapped content hierarchies, and established a design language that felt premium yet approachable.
          </p>
        </div>
        {/* BCM 2 */}
        <LightboxImage
          src="/images/BCM 2.png"
          alt="Research approach — workshops and content mapping"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── The home page ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The home page
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            It&apos;s a home page about community — a melting pot of strengths and entities that are changing the face of media in Africa. The design showcases each brand while creating a cohesive narrative that communicates BCM&apos;s collective impact.
          </p>
        </div>
        {/* BCM 3 + BCM 4: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/BCM 3.png"
            alt="BCM homepage — desktop view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/BCM 4.png"
            alt="BCM homepage — brand sections"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
        {/* BCM 5: Below the 2-up row */}
        <LightboxImage
          src="/images/BCM 5.png"
          alt="BCM homepage — full scrolled view"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Careers page ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Careers page
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            This careers page showcases job openings, values, culture, and impact — designed to attract top talent by giving them a real sense of what it feels like to work at BCM.
          </p>
        </div>
        {/* BCM 6 + BCM 7: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/BCM 6.png"
            alt="BCM careers page — desktop view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/BCM 7.png"
            alt="BCM careers page — values and culture"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Brands
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            The brands page gives each BCM property its own space — showcasing their unique identity, content, and audience while reinforcing the connection back to the parent company.
          </p>
        </div>
        {/* BCM 8 */}
        <LightboxImage
          src="/images/BCM 8.png"
          alt="BCM brands overview page"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Article page ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Article page
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Read articles and editorial content from BCM&apos;s flagship publications, with a clean reading experience and easily identifiable share options.
          </p>
        </div>
        {/* BCM 9 */}
        <LightboxImage
          src="/images/BCM 9.png"
          alt="BCM article page — reading experience"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Through the years ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Through the years
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            A detailed history of the business&rsquo;s growth, combined with our shared story.
          </p>
        </div>
        {/* BCM 10 + BCM 11: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/BCM 10.png"
            alt="BCM through the years — timeline and milestones"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/BCM 11.png"
            alt="BCM through the years — growth and impact"
            loading="lazy"
            className="w-full rounded-[16px]"
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
                Owned the end-to-end design of the corporate website, translating business objectives into a cohesive brand experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Conducted stakeholder workshops to align multiple brand identities under one umbrella design system
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Collaborated with engineering to define content architecture and implement a scalable CMS-friendly layout
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
            Redesigning the BCM website was about more than a visual refresh — it was about giving Africa&apos;s most impactful media company a digital presence that matched its ambition. By structuring the site around the portfolio of brands, the careers narrative, and the company&apos;s history, we created a platform that communicates scale, credibility, and cultural relevance in equal measure.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
