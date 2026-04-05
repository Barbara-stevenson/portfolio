"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import LightboxImage from "@/components/Lightbox";

export default function LifeBankCaseStudy() {
  return (
    <CaseStudyLayout
      sidebar={{
        prevHref: "/case-studies/emedic",
        nextHref: "/case-studies/zikoko",
        label: "LIFEBANK",
        title: "Redesigning the life bank mobile application",
        impactParagraph: "I look forward to testing, implementing, and validating the usability of this design, as well as creating a comprehensive business model.",
      }}
      bottomNav={{
        prev: {
          href: "/case-studies/emedic",
          label: "EMEDIC",
          description: "Scaling a digital pharmacy across marketplace, admin, and customer experiences",
        },
        next: {
          href: "/case-studies/zikoko",
          label: "ZIKOKO",
          description: "Thinking big - The zikoko experience",
        },
      }}
    >
      {/* ── LF 1: Hero / Lead Image ── */}
      <section className="mb-16">
        <LightboxImage
          src="/images/LF 1.png"
          alt="LifeBank mobile application redesign"
          className="w-full rounded-[16px] object-cover"
        />
      </section>

          {/* ── Overview ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Overview
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%]">
                LifeBank is a healthcare tech and logistics company that facilitates the transmission of blood and oxygen across Nigeria to consumers in hospitals.
              </p>
            </div>
          </section>

          {/* ── The Problem ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              The Problem
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                Nigeria requires up to 1.8m units of blood every year, according to the health ministry. However, Nigeria&apos;s National Blood Transfusion Service (NBTS) is collecting just 500,000 pints of blood annually&mdash;a shortfall of nearly 75%.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%]">
                A constant problem faced is the ability to ascertain the health status of the user before coming for donation, while pairing them with the right hospital in real-time.
              </p>
            </div>
            {/* LF 2 */}
            <div className="flex justify-center">
              <LightboxImage
                src="/images/LF 2.png"
                alt="The problem - blood donation statistics"
                loading="lazy"
                className="w-[35%] rounded-[16px]"
              />
            </div>
          </section>

          {/* ── The Goal ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              The Goal
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%] mb-4">
                The goal was to create a unique solution, focusing on two key features:
              </p>
              <p className="text-white/80 text-[20px] leading-[150%] mb-4">
                <span className="font-medium">Medical Report:</span> A system that enables the user to input their medical report, with a means to track its authenticity.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                <span className="font-medium">Swift delivery:</span> A quick and effective means to track and deliver requests.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%]">
                I ran 5 weeks of design sprints to build an application where users could donate and request easily, as well as being aware of their health status before donation.
              </p>
            </div>
          </section>

          {/* ── The Challenge ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              The Challenge
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                The focus of this project was to ultimately create a seamless experience for the user. Health care is very sensitive and it was important to craft an experience that would enable the user to trust the product. I was to come up with a solution for the donors and requesters.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                The existing product also had some flaws with its experience and interface, with ambiguous content.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%]">
                I needed to come up with a simplistic product that would engage the users.
              </p>
            </div>
          </section>

          {/* ── The Process ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              The Process
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                I went through the process of design thinking and cast aside all assumptions, in order to create the ideal product.
              </p>
            </div>
            {/* LF 3 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 3.png"
              alt="Design thinking process diagram"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Discovery ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Discovery
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Through research, I gained more insight into the problems of the user. This important step enabled me to adopt a more human-centric approach to solving the problem.
              </p>
            </div>
          </section>

          {/* ── Quantitative Analysis ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Quantitative analysis
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%] mb-4">
                Here are some discoveries made:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%]">
                    The majority of participants were familiar with blood donation; however, most had never donated before.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%]">
                    Those who had donated felt it was a noble cause and a good experience.
                  </span>
                </li>
              </ul>
            </div>
            {/* LF 4 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 4.png"
              alt="Quantitative analysis survey results"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── User Interviews ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              User interviews
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%] mb-4">
                To further the goals of the project, I interviewed 10 people with the objectives as follows:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%]">
                    To understand how users feel about blood donation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%]">
                    To understand challenges faced when donating
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%]">
                    To gain an insight on whether the user will donate again
                  </span>
                </li>
              </ul>
              <p className="text-white/80 text-[20px] leading-[150%] mb-4">
                Some quotes obtained from the user that helped me discover key pain points:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%] italic">
                    &ldquo;I was happy to save a life.&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40 shrink-0 mt-2.5" />
                  <span className="text-white/80 text-[20px] leading-[150%] italic">
                    &ldquo;The process of donation is too tedious; I had to wait a long time.&rdquo;
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Comparing the Existing Solution ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Comparing the existing solution
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                To get a view of how users feel about the current application, I looked at some user reviews on the App Store.
              </p>
            </div>
            {/* LF 5 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 5.png"
              alt="App Store reviews for existing LifeBank application"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── "I noticed..." body copy + LF 6 ── */}
          <section className="mb-16">
            <p className="text-white/80 text-[20px] leading-[150%] mb-8">
              I noticed that when I searched for the LifeBank application, it wasn&apos;t available on iOS, but it was on Android. I keyed in &ldquo;Lifebank&rdquo; and nothing showed up until I scrolled down and found an application named &ldquo;One Donor&rdquo; with the LifeBank logo. That was a bit confusing.
            </p>
            {/* LF 6 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 6.png"
              alt="App Store search confusion - One donor vs LifeBank"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Heuristic Evaluation ── */}
          <section className="mb-16">
            <p className="text-white/80 text-[20px] leading-[150%] mb-6">
              From the reviews, I discovered that users had issues with flexibility, ease of use, and aesthetics, to mention a few.
            </p>
            <p className="text-white/80 text-[20px] leading-[150%] mb-6">
              I proceeded to conduct a heuristic evaluation of the current app to test its user-friendliness using Jakob Nielsen&apos;s 10 Usability Heuristics. Some discoveries made include:
            </p>
            <ul className="space-y-4">
              <li className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-medium">Failure to communicate system status:</span> Some parts of the application didn&apos;t communicate what the system was doing. For example, there was no splash screen, I did not know which app I was in at the onboarding stage, and the sign-up page took about 8 seconds to load.
              </li>
              <li className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-medium">Poor error prevention:</span> During the sign-up process, I made an error with my number. A blank screen came up when I tapped the sign-up button, and then a tiny text at the top of the screen showed that I had entered the wrong number.
              </li>
              <li className="text-white/80 text-[20px] leading-[150%]">
                <span className="font-medium">Poor flexibility and efficiency of use:</span> It was difficult to navigate the application. The response time was slow, and some buttons were not clickable, which left me confused.
              </li>
            </ul>
          </section>

          {/* ── Competitive Analysis ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Competitive analysis
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Using the SWOT analysis, I looked at the strengths and weaknesses of similar applications and compared them with the current LifeBank application, to aid me in building an even better product.
              </p>
            </div>
            {/* LF 7 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 7.png"
              alt="SWOT competitive analysis comparison"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Define ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Define
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%]">
                At this point, I had condensed the findings from my research and needed to know the scope of the problem.
              </p>
            </div>
          </section>

          {/* ── User Personas ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              User Personas
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8" />

            {/* LF 8 + LF 9 side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LightboxImage
                src="/images/LF 8.png"
                alt="User persona - Donor profile"
                loading="lazy"
                className="w-full rounded-[16px]"
              />
              <LightboxImage
                src="/images/LF 9.png"
                alt="User persona - Requester profile"
                loading="lazy"
                className="w-full rounded-[16px]"
              />
            </div>
          </section>

          {/* ── Empathy Map ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Empathy Map
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Based on the user interviews, I mapped the responses and thought of the user to understand their environment and emotional connection in relation to the product.
              </p>
            </div>
            {/* LF 10 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 10.png"
              alt="User empathy map"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Develop ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Develop
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Now it was time for me to condense all my findings into a concrete concept.
              </p>
            </div>
          </section>

          {/* ── User Flows ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              User flows
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                I created the user flows to display the complete path taken when using the product.
              </p>
            </div>
            {/* LF 11 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 11.png"
              alt="User flow diagrams"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Wireframing ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Wireframing
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                In mapping out the wireframes, I gained more clarity on the solution I was aiming to build.
              </p>
            </div>
            {/* LF 12 */}
                        <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 12.png"
              alt="Wireframe sketches and layouts"
              loading="lazy"
              className="w-1/2 rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Deliver ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Deliver
            </h2>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/80 text-[20px] leading-[150%]">
                The next step was to create a high-fidelity prototype to showcase the design decisions made.
              </p>
            </div>
          </section>

          {/* ── Splash Screen and Onboarding ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Splash screen and onboarding
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/70 text-[18px] font-medium mb-4">
                Informative and interactive screens
              </p>
              <p className="text-white/80 text-[20px] leading-[150%]">
                The aim of the screens was to address some user concerns and shed some light on what the product offers. The old app did not have a splash screen.
              </p>
            </div>
            {/* LF 13 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 13.png"
              alt="Splash screen and onboarding screens"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Simple Home Screen ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Simple home screen
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                The aim was to simplify the content on the home page and create actionable experiences that keep the users engaged with the app.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%] mb-6">
                Based on research, I introduced a bottom nav so users have access to important features instantly.
              </p>
              <p className="text-white/80 text-[20px] leading-[150%]">
                Users also have the option to chat with a customer care rep in real-time.
              </p>
            </div>
            {/* LF 14 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 14.png"
              alt="Simplified home screen design"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Medical Report ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Medical report
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                The aim was to create a system that would allow users to upload or obtain a medical report.
              </p>
            </div>
            {/* LF 15 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 15.png"
              alt="Medical report upload and viewing screens"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Request ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Request
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                I noticed that the current application did not have a request feature, making it impossible for users to make requests for blood or oxygen.
              </p>
            </div>
            {/* LF 16 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 16.png"
              alt="Blood and oxygen request flow"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Donate ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Donate
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Users can now schedule a convenient time to donate, with a system put in place that allows pairing to hospitals or labs closest to their location.
              </p>
            </div>
            {/* LF 17 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 17.png"
              alt="Donation scheduling and hospital pairing"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── Profile ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              Profile
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Speaking to users highlighted the importance of this feature, as users could not keep in mind how many times they had donated or made requests.
              </p>
            </div>
            {/* LF 18 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 18.png"
              alt="User profile and donation history"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

          {/* ── FAQs ── */}
          <section className="mb-16">
            <h2 className="text-[28px] font-bold text-white mb-2">
              FAQs
            </h2>
            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-white/80 text-[20px] leading-[150%]">
                Based on research, there was a need to put this feature in the bottom nav, as users had a lot of questions about blood donation and whether it was a trustworthy product.
              </p>
            </div>
            {/* LF 19 */}
            <div className="flex justify-center">
  <LightboxImage
              src="/images/LF 19.png"
              alt="FAQs screen design"
              loading="lazy"
              className="w-[55%] rounded-[16px]"
            />
            </div>
          </section>

      {/* ── Reflections and Lessons Learned ── */}
      <section className="mb-16">
        <h2 className="text-[28px] font-bold text-white mb-2">
          Reflections and lessons learned
        </h2>
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-[20px] leading-[150%] mb-6">
            Redesigning the LifeBank mobile application was a deeply formative experience that reinforced the value of discarding assumptions and committing to a human-centric design process. Working within the healthcare space demanded an elevated level of sensitivity — every design decision carried weight because users are making choices that directly impact lives. The iterative process of discovery, definition, development, and delivery taught me that great design isn&apos;t a destination but an ongoing relationship with the product and its users.
          </p>
          <p className="text-white/80 text-[20px] leading-[150%]">
            Healthcare is a sensitive space, and its impact can&apos;t be understated; it is essential for the user to trust and feel comfortable with the product.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
