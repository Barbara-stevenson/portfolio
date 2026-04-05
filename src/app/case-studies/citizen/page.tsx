"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function CitizenCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/zikoko",
        nextHref: "/case-studies/zikoko-memes",
        label: "CITIZEN",
        title: "A home for policy and governance related content",
        impactItems: [
          "Currently in beta testing, receiving positive reviews from users",
          "Increased brand awareness",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/zikoko",
          label: "ZIKOKO",
          description: "Thinking big — The Zikoko experience",
        },
        next: {
          href: "/case-studies/zikoko-memes",
          label: "ZIKOKO MEMES",
          description: "Building the largest repository of memes in Africa",
        },
      }}
    >
      {/* ── CITIZEN 1: Hero / Lead Visual — Laptop mockup ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/CITIZEN 1.png"
          alt="Citizen website displayed on laptop mockup"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

      {/* ── About ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          About
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Citizen is the leading platform for creating editorial products for young people to understand politics and policies, and how they affect them. Our mission is to inform and lead engagement in the civic space using the power of relatable, multi-platform storytelling.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It exists to raise the quality of conversations about and engagement with these issues by being the frontline platform through which citizens join the civic process and champion their causes.
          </p>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          The problem
        </h2>
        <div className="border-t border-white/20 pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Poor discoverability of content as it was hosted as a category under another publication
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Not knowing how many users we attract and what their demographic is — limiting any attempts to create and implement data-driven growth tactics
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Approach
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            I set out to better understand the problem by researching various publications and running interviews with the editorial team and consumers to better understand the tone.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            It was important to maintain a ridiculously friendly tone and not look like any legacy websites.
          </p>
        </div>
      </section>

      {/* ── CITIZEN 2: Above Solution ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/CITIZEN 2.png"
          alt="Citizen research and discovery process"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Solution ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Solution
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            With buy-in from stakeholders, I attempted a brutalist approach to the visuals of the site, while maintaining a seamless experience.
          </p>
        </div>
        {/* CITIZEN 3 + CITIZEN 4: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          <LightboxImage
            src="/images/CITIZEN 3.png"
            alt="Citizen desktop homepage solution"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/CITIZEN 4.png"
            alt="Citizen mobile homepage solution"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Welcome to Citizen ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Welcome to Citizen
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            View featured and trending news on governance and politics in Nigeria, with easy access to various categories.
          </p>
        </div>
        {/* CITIZEN 5 + CITIZEN 6: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/CITIZEN 5.png"
            alt="Citizen welcome — featured and trending content"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/CITIZEN 6.png"
            alt="Citizen welcome — categories and navigation"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Categories
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Easy access to various categories. Here you understand a category&apos;s offering, and view various articles and short videos.
          </p>
        </div>
        {/* CITIZEN 7 */}
        <LightboxImage
          src="/images/CITIZEN 7.png"
          alt="Citizen categories overview"
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
            Read select articles trending from our flagships, with easily identifiable share options.
          </p>
        </div>
        {/* CITIZEN 8 */}
        <LightboxImage
          src="/images/CITIZEN 8.png"
          alt="Citizen article page with share options"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Author profile ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Author profile
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            Easily access author profiles and read more articles from your favourite authors.
          </p>
        </div>
        {/* CITIZEN 9 + CITIZEN 10: Horizontally stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1fr] gap-4">
          <LightboxImage
            src="/images/CITIZEN 9.png"
            alt="Citizen author profile — desktop view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/CITIZEN 10.png"
            alt="Citizen author profile — mobile view"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
      </section>

      {/* ── Short bites ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Short bites
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            View various short and interesting videos breaking down politics and governance related information in new and exciting ways.
          </p>
        </div>
        {/* CITIZEN 11 — single centered mobile screen */}
        <div className="flex justify-center">
          <LightboxImage
            src="/images/CITIZEN 11.png"
            alt="Citizen short bites — mobile video experience"
            loading="lazy"
            className="w-[45%] rounded-[16px]"
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
                Translated PRDs into compelling visual concepts that balanced civic engagement objectives with user accessibility
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Defined and directed the visual identity, establishing a brutalist-inspired aesthetic that resonated with a young, politically engaged audience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Facilitated cross-functional testing with users and the editorial team to validate content discoverability and reading experience
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
            Working on this website in this style was very interesting and challenging. It was important to cater to our audience, who loved the direction, and ensure accessibility standards were upheld.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
