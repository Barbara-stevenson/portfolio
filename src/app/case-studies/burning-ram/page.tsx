"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function BurningRamCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/bcm",
        nextHref: "/case-studies/arm",
        label: "ZIKOKO",
        title: "Burning Ram \u2014 A celebration of Nigeria\u2019s best meat cuisine",
        impactItems: [
          "Increase customer engagement by 30%",
          "Improved customer retention",
          "Increased brand awareness",
        ],
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/bcm",
          label: "BIG CABAL MEDIA",
          description: "Revamping Big Cabal Media",
        },
        next: {
          href: "/case-studies/arm",
          label: "ARM",
          description: "Redesigning the ARM mobile experience",
        },
      }}
    >
      {/* ── BR 1: Hero / Lead Visual ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/BR 1.png"
          alt="Burning Ram food festival website hero visual"
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
            Burning Ram is the first Nigerian food festival centred around all kinds of meat. Burning Ram gives food lovers an opportunity to try out the tastiest and spiciest meats in Nigerian cuisine. The festival will feature various activities such as cooking competitions, games and tutorials.
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
            I collaborated with the brand designer on assets, researched themes around meat festivals and various websites, and also solicited feedback regularly with stakeholders.
          </p>
        </div>
        {/* BR 2 */}
        <LightboxImage
          src="/images/BR 2.png"
          alt="Approach — research and brand asset exploration"
          loading="lazy"
          className="w-full rounded-[16px]"
        />
      </section>

      {/* ── Welcome to Burning Ram ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Welcome to Burning Ram
        </h2>
        <div className="border-t border-white/20 pt-6 mb-8">
          <p className="text-white/80 text-[20px] leading-[150%]">
            At the heart of Nigerian food is meat. At the heart of meat is Burning Ram.
          </p>
        </div>
        {/* BR 3 + BR 4: First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <LightboxImage
            src="/images/BR 3.png"
            alt="Burning Ram website — homepage and navigation"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/BR 4.png"
            alt="Burning Ram website — activities and events"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
        </div>
        {/* BR 5 + BR 6: Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightboxImage
            src="/images/BR 5.png"
            alt="Burning Ram website — FAQ and sponsors"
            loading="lazy"
            className="w-full rounded-[16px]"
          />
          <LightboxImage
            src="/images/BR 6.png"
            alt="Burning Ram website — footer and contact"
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
                Interpreting PRDs to visualise customer and business needs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Visual direction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-[10px]" />
              <span className="text-white/80 text-[20px] leading-[150%]">
                Collaborating with editorial on launch material
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
            Working on a site centred around meat allowed me to explore interesting visual layouts and styles.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
