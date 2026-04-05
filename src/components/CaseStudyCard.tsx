import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  href?: string;
}

export default function CaseStudyCard({
  title,
  description,
  category,
  imageSrc,
  imageAlt,
  bgColor = "#C6592A",
  href,
}: CaseStudyCardProps) {
  const content = (
    <article
      className="overflow-hidden rounded-[16px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl"
      style={{ backgroundColor: bgColor }}
    >
      {/* Internal padding wrapper */}
      <div className="p-[20px] flex flex-col gap-4">
        {/* Image area */}
        <div className="w-full overflow-hidden rounded-[12px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text content */}
        <div className="space-y-2">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#1B1B1B]">
            {category}
          </span>
          <h3 className="text-[28px] md:text-[30px] leading-[130%] font-bold text-[#1B1B1B]">
            {description}
          </h3>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block cursor-pointer">
        {content}
      </Link>
    );
  }

  return content;
}
