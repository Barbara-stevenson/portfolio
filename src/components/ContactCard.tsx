"use client";

interface ContactCardProps {
  label: string;
  href: string;
  bgColor: string;
  /** Label alignment — Figma: Instagram is top-left, all others bottom-left */
  labelPosition?: "top" | "bottom";
  className?: string;
}

const ArrowIcon = () => (
  <svg
    width="58"
    height="40"
    viewBox="0 0 58 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M35 10L50 20L35 30"
      stroke="#111211"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="20"
      x2="49"
      y2="20"
      stroke="#111211"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function ContactCard({
  label,
  href,
  bgColor,
  labelPosition = "bottom",
  className = "",
}: ContactCardProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={[
        "group relative block rounded-[16px] overflow-hidden",
        "h-[180px] w-full",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-1 hover:scale-[1.01]",
        "active:translate-y-0 active:scale-[0.99]",
        className,
      ].join(" ")}
      style={{ backgroundColor: bgColor }}
    >
      {/* Arrow in top-right */}
      <span className="absolute top-5 right-5 block w-[58px] h-[40px] transition-transform duration-200 ease-out group-hover:translate-x-1">
        <ArrowIcon />
      </span>

      {/* Label */}
      <span
        className={[
          "absolute left-5 font-sans font-bold text-[44px] leading-none text-black whitespace-nowrap",
          labelPosition === "top" ? "top-5" : "bottom-5",
        ].join(" ")}
      >
        {label}
      </span>
    </a>
  );
}
