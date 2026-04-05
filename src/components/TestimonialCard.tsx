import Image from "next/image";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Outer card color */
  cardColor: string;
  /** Inner quote panel background color (lighter tint) */
  quoteBg: string;
  /** Quote text color — defaults to black */
  quoteText?: string;
  /** Avatar image asset */
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * A single testimonial card, matching Figma:
 * - colored outer container, rounded-16, p-20
 * - lighter inner quote panel inset at the top, rounded-16, px-25 py-24
 * - avatar + name + role anchored in the lower-left
 *
 * The card does NOT handle its own click or slide logic — it is a
 * pure display component controlled by the parent slider.
 */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col items-start gap-4 overflow-hidden rounded-[16px] p-5 w-full min-w-0 max-w-full"
      style={{ backgroundColor: testimonial.cardColor }}
    >
      {/* Inner quote panel */}
      <div
        className="flex items-center justify-center overflow-hidden rounded-[16px] w-full"
        style={{
          backgroundColor: testimonial.quoteBg,
          padding: "24px 25px",
        }}
      >
        <p
          className="font-sans font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.5]"
          style={{ color: testimonial.quoteText ?? "#000" }}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Person block */}
      <div className="flex items-center gap-4">
        <div className="relative shrink-0 w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            fill
            sizes="72px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="flex flex-col items-start min-w-0">
          <p
            className="font-sans font-bold text-[20px] md:text-[23px] leading-[1.4]"
            style={{ color: testimonial.quoteText ?? "#000" }}
          >
            {testimonial.name}
          </p>
          <p
            className="font-sans text-[16px] md:text-[20px] leading-[1.4]"
            style={{ color: testimonial.quoteText ?? "#000" }}
          >
            <span className="font-normal">{testimonial.role}</span>
            <span className="font-bold">, {testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
