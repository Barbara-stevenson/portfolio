interface SkillPillProps {
  label: string;
  /** Fixed width from Figma (px) */
  width?: number;
}

export default function SkillPill({ label, width }: SkillPillProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "h-[41px] rounded-[32px] px-[10px]",
        "bg-[#CA9550] border border-[#4E3B23]",
        "font-sans font-bold text-[16px] text-[#392C1A] whitespace-nowrap",
      ].join(" ")}
      style={{
        width: width ? `${width}px` : undefined,
      }}
    >
      {label}
    </span>
  );
}
